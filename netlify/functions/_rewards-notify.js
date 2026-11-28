const crypto = require("node:crypto");
const { mutate } = require("./_rewards-ledger");

async function notifyCredit(email, lot) {
  if (!lot || !lot.issuedAmount || lot.notified || lot.revoked) return;
  if (!process.env.RESEND_API_KEY) throw new Error("rewards_email_not_configured");
  const key = crypto.createHash("sha256").update(email + "|" + lot.id).digest("hex");
  const amount = (lot.issuedAmount / 100).toFixed(2);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + process.env.RESEND_API_KEY,
      "Content-Type": "application/json",
      "Idempotency-Key": "samira-rewards/" + key,
    },
    body: JSON.stringify({
      from: "Samira Home Decor <hello@samirahomedecor.com.au>",
      to: [email],
      subject: "You earned Samira Rewards store credit",
      text: `You earned A$${amount} in Samira Rewards store credit. View your balance and expiry dates at https://samirahomedecor.com.au/account.html.`,
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error("rewards_email_failed");
  await mutate(email, state => {
    const entry = state.lots.find(entry => entry.id === lot.id);
    if (entry) entry.notified = true;
  });
}
module.exports = { notifyCredit };
