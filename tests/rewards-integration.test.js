const { test } = require("node:test");
const assert = require("node:assert/strict");
const { createHmac, generateKeyPairSync } = require("node:crypto");

const { award, balance, expiry } = require("../netlify/functions/_rewards-policy");
const { reserve, settle, heldBalance } = require("../netlify/functions/_rewards-redemption");
const { memberOrder, recordDelivery, recordRefund } = require("../netlify/functions/_rewards-orders");
const { authenticate, handler: rewardsBalance } = require("../netlify/functions/rewards-balance");
const { handler: rewardsAdmin } = require("../netlify/functions/rewards-admin");

const now = Date.UTC(2026, 10, 28);
const eligible = { now, member: true, subtotal: 30000 };
const email = "member@example.test";

test("redemption deducts oldest credits and replayed settlement never releases paid credit", () => {
  const state = {
    events: [],
    lots: [
      { id: "new", remaining: 1800, expires: expiry(now) },
      { id: "old", remaining: 1300, expires: expiry(now - 1000) },
    ],
  };
  assert.equal(reserve(state, "one", eligible), 2000);
  assert.deepEqual(state.lots.map(lot => lot.remaining), [1100, 0]);
  assert.equal(heldBalance(state, now), 2000);
  settle(state, "one", "paid", now);
  settle(state, "one", "paid", now);
  settle(state, "one", "expired", now);
  assert.equal(balance(state, now), 1100);
  assert.deepEqual(state.events, ["redeem:one"]);
  settle(state, "one", "refund", now);
  settle(state, "one", "refund", now);
  assert.equal(balance(state, now), 3100);
});

test("holds count towards the cap and expiry never restores expired or revoked credit", () => {
  const state = { events: [], lots: [
    { id: "order:refund", remaining: 1000, expires: now + 1000 },
    { id: "expiring", remaining: 1000, expires: now + 2000 },
    { id: "later", remaining: 8000, expires: expiry(now) },
  ] };
  assert.equal(reserve(state, "hold", eligible), 2000);
  assert.equal(award(state, {
    kind: "birthday", key: "2026", now, verified: true, held: heldBalance(state, now),
  }), 0);
  recordRefund(state, { id: "refund" });
  settle(state, "hold", "expired", now + 2000);
  assert.equal(balance(state, now + 2000), 8000);
});

test("delivery only accepts paid member orders and refunds win regardless of event order", () => {
  const session = {
    id: "cs_test_order", payment_status: "paid", currency: "aud",
    customer_email: email, customer_details: { email },
    metadata: { rewards_version: "1", rewards_subtotal: "10001" },
  };
  assert.equal(memberOrder({ ...session, payment_status: "unpaid" }), null);
  assert.equal(memberOrder({ ...session, customer_email: "different@example.test" }), null);
  const order = memberOrder(session);
  const state = { lots: [], events: [] };
  assert.equal(recordDelivery(state, order, now), 500);
  assert.equal(recordDelivery(state, order, now), 0);
  recordRefund(state, order);
  recordRefund(state, order);
  assert.equal(balance(state, now), 0);
  assert.equal(recordDelivery(state, order, now), 0);
  const earlyRefund = { lots: [], events: [] };
  recordRefund(earlyRefund, order);
  assert.equal(recordDelivery(earlyRefund, order, now), 0);
});

test("member tokens are bound to the email and rejected when expired, future or malformed", async t => {
  t.mock.method(Date, "now", () => now);
  const previous = process.env.AUTH_SECRET;
  process.env.AUTH_SECRET = "test-secret";
  t.after(() => { if (previous === undefined) delete process.env.AUTH_SECRET; else process.env.AUTH_SECRET = previous; });
  const token = time => time + "." + createHmac("sha256", "test-secret").update(email + "|" + time).digest("hex");
  assert.equal(authenticate(" MEMBER@example.test ", token(now)), email);
  assert.equal(authenticate(email, token(now + 1)), null);
  assert.equal(authenticate(email, token(now - 401 * 86400000)), null);
  assert.equal(authenticate(email, token(now) + ".1"), null);
  assert.equal(authenticate("different@example.test", token(now)), null);
  const response = await rewardsBalance({ httpMethod: "POST", body: JSON.stringify({ email, token: "incorrect" }) });
  assert.equal(response.statusCode, 401);
  assert.equal(response.headers["Cache-Control"], "no-store");
});

test("owner-only Firestore probe and ledger retry a rejected transaction atomically", async t => {
  const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });
  const settings = {
    BOOKING_ADMIN_TOKEN: "test-owner-key",
    STYLERA_FIREBASE_SERVICE_ACCOUNT_JSON: JSON.stringify({
      type: "service_account", project_id: "samira-home-decor", client_email: email,
      private_key: privateKey.export({ type: "pkcs8", format: "pem" }),
    }),
  };
  const previous = Object.fromEntries(Object.keys(settings).map(key => [key, process.env[key]]));
  Object.assign(process.env, settings);
  t.after(() => {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  });
  let transactionCount = 0;
  let rollbacks = 0;
  let document;
  const requests = [];
  const response = data => Response.json(data);
  t.mock.method(globalThis, "fetch", async (url, options) => {
    requests.push(url);
    if (url.endsWith("/token")) return response({ access_token: "test-token", expires_in: 3600 });
    assert.equal(options.headers.Authorization, "Bearer test-token");
    const input = JSON.parse(options.body);
    if (url.endsWith(":runQuery")) return response([]);
    if (url.endsWith(":beginTransaction")) return response({ transaction: "txn" + ++transactionCount });
    if (url.endsWith(":batchGet")) {
      assert.match(input.documents[0], /\/rewards_accounts\/[a-f0-9]{64}$/);
      assert.ok(!input.documents[0].includes(email));
      return response(document ? [{ found: document }] : [{ missing: input.documents[0] }]);
    }
    if (url.endsWith(":rollback")) {
      rollbacks++;
      return new Response();
    }
    if (url.endsWith(":commit")) {
      if (transactionCount === 1) return new Response(null, { status: 409 });
      document = input.writes[0].update;
      return response({});
    }
    assert.fail("Unexpected request: " + url);
  });
  const health = {
    httpMethod: "POST", body: JSON.stringify({ action: "health" }),
    headers: { "x-admin-token": settings.BOOKING_ADMIN_TOKEN },
  };
  assert.equal((await rewardsAdmin({ ...health, headers: {} })).statusCode, 401);
  assert.equal(requests.length, 0);
  assert.equal(JSON.parse((await rewardsAdmin(health)).body).connected, true);
  const ledger = require("../netlify/functions/_rewards-ledger");
  const event = { kind: "newsletter", key: "once", now, verified: true };
  assert.equal(await ledger.awardVerified(email, event), 200);
  assert.equal(rollbacks, 1);
  assert.equal(await ledger.awardVerified(" MEMBER@example.test ", event), 0);
  assert.equal(balance(await ledger.read(email), now), 200);
});

test("checkout preserves guest pricing and reserves a capped Stripe discount only for the matching member", async t => {
  const ledger = require("../netlify/functions/_rewards-ledger");
  const state = { events: [], lots: [{ id: "order:old", remaining: 3500, expires: expiry(Date.now()) }] };
  // The transport contract above covers Firestore. This test drives the actual
  // checkout handler and captures the Stripe API options without creating payments.
  const redemptionPath = require.resolve("../netlify/functions/_rewards-redemption");
  const originalRedemption = require.cache[redemptionPath];
  const originalMutate = ledger.mutate;
  ledger.mutate = async (email, operation) => operation(state);
  delete require.cache[redemptionPath];
  t.after(() => { ledger.mutate = originalMutate; require.cache[redemptionPath] = originalRedemption; });

  const stripePath = require.resolve("stripe");
  require(stripePath);
  const originalStripe = require.cache[stripePath].exports;
  const sessions = [];
  const discounts = [];
  require.cache[stripePath].exports = () => ({
    coupons: { create: async options => { discounts.push(options); return { id: "coupon_test" }; } },
    checkout: { sessions: { create: async options => {
      sessions.push(options);
      return { id: "cs_test_valid", url: "https://example.test/checkout" };
    } } },
  });
  t.after(() => { require.cache[stripePath].exports = originalStripe; });
  const settings = { AUTH_SECRET: "test-checkout-key", REWARDS_ENABLED: "true", STRIPE_SECRET_KEY: "sk_test_placeholder" };
  const previous = Object.fromEntries(Object.keys(settings).map(key => [key, process.env[key]]));
  Object.assign(process.env, settings);
  t.after(() => {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  });

  const { handler } = require("../netlify/functions/create-checkout-session");
  const issued = Date.now();
  const token = issued + "." + createHmac("sha256", settings.AUTH_SECRET).update(email + "|" + issued).digest("hex");
  const member = { email, token };
  const body = { items: [{ id: "bt01", qty: 1 }], customer: { country: "Australia", postcode: "5000", suburb: "Adelaide", email } };
  const submit = patch => handler({ httpMethod: "POST", headers: {}, body: JSON.stringify({ ...body, ...patch }) });

  assert.equal((await submit()).statusCode, 200);
  assert.equal(sessions[0].line_items[0].price_data.unit_amount, 35000);
  assert.equal(sessions[0].discounts, undefined);
  assert.equal(sessions[0].metadata.rewards_version, undefined);

  assert.equal((await submit({ member: { ...member, email: "someone-else@example.test" }, redeemRewards: true })).statusCode, 400);
  assert.equal((await submit({ member, redeemRewards: true, voucherCode: "PROMOTION" })).statusCode, 400);
  assert.equal((await submit({ member, redeemRewards: true, items: [{ id: "bt01", qty: 1 }, { id: "giftcard-test", qty: 1, giftCard: { amount: 100 } }] })).statusCode, 400);
  assert.equal(discounts.length, 0);

  assert.equal((await submit({ member, redeemRewards: true })).statusCode, 200);
  assert.equal(sessions[1].line_items[0].price_data.unit_amount, 32000);
  assert.equal(sessions[1].metadata.rewards_subtotal, "32000");
  assert.deepEqual(sessions[1].discounts, [{ coupon: "coupon_test" }]);
  assert.equal(discounts[0].amount_off, 2000);
  assert.equal(discounts[0].currency, "aud");
  assert.equal(balance(state, Date.now()), 1500);
});

test("Stripe expiration requires a valid signature before releasing a checkout hold", async t => {
  const key = "sk_test_fixture";
  const secret = "whsec_fixture";
  const previousKey = process.env.STRIPE_SECRET_KEY;
  const previousSecret = process.env.STRIPE_WEBHOOK_SECRET;
  process.env.STRIPE_SECRET_KEY = key;
  process.env.STRIPE_WEBHOOK_SECRET = secret;
  t.after(() => {
    if (previousKey === undefined) delete process.env.STRIPE_SECRET_KEY;
    else process.env.STRIPE_SECRET_KEY = previousKey;
    if (previousSecret === undefined) delete process.env.STRIPE_WEBHOOK_SECRET;
    else process.env.STRIPE_WEBHOOK_SECRET = previousSecret;
  });
  const { settleRedemption } = require("../netlify/functions/_rewards-redemption");
  const redemption = require("../netlify/functions/_rewards-redemption");
  const calls = [];
  redemption.settleRedemption = async (...args) => calls.push(args);
  t.after(() => { redemption.settleRedemption = settleRedemption; });
  const stripe = require("stripe")(key);
  const { handler } = require("../netlify/functions/stripe-webhook");
  const body = JSON.stringify({
    type: "checkout.session.expired",
    data: { object: {
      object: "checkout.session",
      customer_email: email,
      metadata: { rewards_redemption: "hold-1" },
    } },
  });
  const signature = stripe.webhooks.generateTestHeaderString({ payload: body, secret });
  assert.equal((await handler({ body, headers: { "stripe-signature": "invalid" } })).statusCode, 400);
  assert.deepEqual(calls, []);
  assert.equal((await handler({ body, headers: { "stripe-signature": signature } })).statusCode, 200);
  assert.deepEqual(calls, [[email, "hold-1", "expired"]]);
});
