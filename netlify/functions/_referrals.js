/* ============================================================
   Samira Home Decor — referral links (shared helper)
   ------------------------------------------------------------
   A shopper's link is  https://samirahomedecor.com.au/?ref=CODE
   The code never contains their email: it's a one-way hash, and
   the record lives in Netlify Blobs (store "referrals"), keyed by code:
     { email, name, created, clicks,
       events: [{ id, type, when, friendName, friendEmail, amount, status }] }
   Event type: "order" | "booking" (forms and cleaning bookings)
   Event status:
     to_reward  a friend's first paid order: the referrer is owed 30%
     check      a booking or enquiry: the owner confirms it went ahead
     rewarded   the owner has sent the 30% reward
     own_link   the referrer used their own link: no reward
     repeat     this friend already counted for this referrer: no reward
   ============================================================ */

const crypto = require("crypto");
const { getStore } = require("@netlify/blobs");

function openStore() {
  const siteID = process.env.SITE_ID || process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_BLOBS_TOKEN || process.env.NETLIFY_API_TOKEN;
  return (siteID && token) ? getStore({ name: "referrals", siteID, token }) : getStore("referrals");
}

const isCode = (c) => /^[A-Z0-9]{8}$/.test(String(c || ""));
const lower = (s) => String(s || "").trim().toLowerCase();

function codeFor(email) {
  const h = crypto.createHash("sha256").update("samira-referral:" + lower(email)).digest();
  const abc = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no look-alikes (0/O, 1/I)
  let out = "";
  for (let i = 0; i < 8; i++) out += abc[h[i] % abc.length];
  return out;
}

async function lookupReferrer(code) {
  if (!isCode(code)) return null;
  try { return await openStore().get(code, { type: "json" }); }
  catch (e) { console.error("Referral lookup failed:", e.message); return null; }
}

/* Save what a referred friend did and return a line for the shop's email.
   Safe to call twice for the same id (a replayed Stripe webhook adds nothing).
   Never throws: a referral problem must not get in the way of an order. */
async function recordReferral(code, ev) {
  if (!isCode(code)) return "";
  try {
    const store = openStore();
    const r = await store.get(code, { type: "json" });
    if (!r) return `Referral code ${code} (no matching referrer found)`;
    r.events = r.events || [];
    const friend = lower(ev.friendEmail);
    let e = r.events.find((x) => x.id === ev.id);
    if (!e) {
      let status = ev.type === "order" ? "to_reward" : "check";
      if (friend && friend === lower(r.email)) status = "own_link";
      else if (friend && r.events.some((x) => lower(x.friendEmail) === friend && (x.type === "order" || ev.type === "booking"))) status = "repeat";
      e = {
        id: String(ev.id), type: ev.type, when: new Date().toISOString(),
        friendName: String(ev.friendName || "").slice(0, 100), friendEmail: friend,
        amount: ev.amount != null ? Number(ev.amount) : null, status,
      };
      r.events.push(e);
      await store.setJSON(code, r);
    }
    const who = `${r.name || "Unknown name"} <${r.email}>, code ${code}`;
    if (e.status === "own_link") return `${who} — SAME EMAIL AS THE CUSTOMER: own link, no reward`;
    if (e.status === "repeat") return `${who} — this friend has already counted once, no new reward`;
    return who;
  } catch (err) {
    console.error("Referral record failed:", err.message);
    return `Referral code ${code} (couldn't be saved: ${err.message})`;
  }
}

/* What a referrer may see about their own referrals: no friend emails, no amounts. */
function publicProgress(r) {
  const short = (name) => {
    const p = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (!p.length) return "A friend";
    return p[0] + (p[1] ? " " + p[1][0].toUpperCase() + "." : "");
  };
  return {
    clicks: r.clicks || 0,
    friends: (r.events || []).map((e) => ({ name: short(e.friendName), type: e.type, when: e.when, status: e.status })),
  };
}

module.exports = { openStore, isCode, codeFor, lookupReferrer, recordReferral, publicProgress };
