/* ============================================================
   Samira Home Decor — a referrer's progress
   ------------------------------------------------------------
   POST { code }              → { clicks, friends:[{name,type,when,status}] }
   POST { code, click:true }  → counts one opening of the link
   Friends are shown as first name + initial only.
   ============================================================ */

const { openStore, isCode, publicProgress } = require("./_referrals");

const json = (code, obj) => ({ statusCode: code, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(obj) });

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return json(405, { error: "Method Not Allowed" });
  let body = {};
  try { body = JSON.parse(event.body || "{}"); } catch (e) { return json(400, { error: "bad_request" }); }
  if (!isCode(body.code)) return json(400, { error: "bad_code" });

  try {
    const store = openStore();
    const r = await store.get(body.code, { type: "json" });
    if (!r) return json(404, { error: "not_found" });
    if (body.click) {
      r.clicks = (r.clicks || 0) + 1;
      await store.setJSON(body.code, r);
      return json(200, { ok: true });
    }
    return json(200, publicProgress(r));
  } catch (err) {
    console.error("Referral status failed:", err.message);
    return json(503, { error: "unavailable" });
  }
};
