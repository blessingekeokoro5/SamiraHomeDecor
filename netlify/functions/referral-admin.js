/* ============================================================
   Samira Home Decor — Manage referrals (admin only)
   ------------------------------------------------------------
   Uses the same secret as bookings: BOOKING_ADMIN_TOKEN, sent as
   the header  x-admin-token.

   GET  → { ok:true, referrers:[ {code,email,name,clicks,events:[…]} ] }
   POST { action:"reward"|"undo", code, id }
        reward → marks that friend's event "rewarded"
        undo   → puts it back to "to_reward"
   ============================================================ */

const { openStore, isCode } = require("./_referrals");

const TOKEN = process.env.BOOKING_ADMIN_TOKEN || "";
const json = (code, obj) => ({ statusCode: code, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(obj) });

exports.handler = async (event) => {
  if (!TOKEN) return json(503, { error: "not_configured" });
  const sent = (event.headers && (event.headers["x-admin-token"] || event.headers["X-Admin-Token"])) || "";
  if (sent !== TOKEN) return json(401, { error: "unauthorized" });

  const store = openStore();

  if (event.httpMethod === "GET") {
    try {
      const { blobs } = await store.list();
      const out = [];
      for (const bl of blobs) {
        const r = await store.get(bl.key, { type: "json" });
        if (r) out.push({ code: bl.key, email: r.email, name: r.name, clicks: r.clicks || 0, created: r.created, events: r.events || [] });
      }
      return json(200, { ok: true, referrers: out });
    } catch (e) {
      return json(500, { error: "read_failed" });
    }
  }

  if (event.httpMethod === "POST") {
    let b;
    try { b = JSON.parse(event.body || "{}"); } catch (e) { return json(400, { error: "bad_json" }); }
    if (!isCode(b.code) || !b.id) return json(400, { error: "bad_request" });
    if (b.action !== "reward" && b.action !== "undo") return json(400, { error: "bad_action" });
    try {
      const r = await store.get(b.code, { type: "json" });
      const e = r && (r.events || []).find((x) => x.id === b.id);
      if (!e) return json(404, { error: "not_found" });
      e.status = b.action === "reward" ? "rewarded" : "to_reward";
      if (b.action === "reward") e.rewardedAt = new Date().toISOString(); else delete e.rewardedAt;
      await store.setJSON(b.code, r);
      return json(200, { ok: true });
    } catch (err) {
      return json(500, { error: "write_failed" });
    }
  }
  return json(405, { error: "Method Not Allowed" });
};
