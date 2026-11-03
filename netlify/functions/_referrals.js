/* ============================================================
   Samira Home Decor — referral links (shared helper)
   ------------------------------------------------------------
   A shopper's link is  https://samirahomedecor.com.au/?ref=CODE
   The code never contains their email: it's a one-way hash, and
   the code → { email, name } record lives in Netlify Blobs so the
   shop can be told who to reward when a friend orders or books.
   ============================================================ */

const crypto = require("crypto");
const { getStore } = require("@netlify/blobs");

function openStore() {
  const siteID = process.env.SITE_ID || process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_BLOBS_TOKEN || process.env.NETLIFY_API_TOKEN;
  return (siteID && token) ? getStore({ name: "referrals", siteID, token }) : getStore("referrals");
}

const isCode = (c) => /^[A-Z0-9]{8}$/.test(String(c || ""));

function codeFor(email) {
  const h = crypto.createHash("sha256").update("samira-referral:" + String(email).trim().toLowerCase()).digest();
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

/* A line for the shop's email, flagging anyone who used their own link. */
async function referralNote(code, customerEmail) {
  if (!isCode(code)) return "";
  const r = await lookupReferrer(code);
  if (!r) return `Referral code ${code} (no matching referrer found)`;
  const self = customerEmail && String(customerEmail).trim().toLowerCase() === String(r.email).toLowerCase();
  return `${r.name || "Unknown name"} <${r.email}>, code ${code}` + (self ? " — SAME EMAIL AS THE CUSTOMER: own link, no reward" : "");
}

module.exports = { openStore, isCode, codeFor, lookupReferrer, referralNote };
