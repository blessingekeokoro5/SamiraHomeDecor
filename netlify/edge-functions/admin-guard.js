/* ============================================================
   Samira Home Decor — lock the admin dashboard on the server
   ------------------------------------------------------------
   Anyone opening /admin.html must enter the admin password in the
   browser's sign-in box before the page is even sent. The password
   is the Netlify environment variable ADMIN_PASSWORD (or, if that
   isn't set, BOOKING_ADMIN_TOKEN). The username can be anything.

   If neither variable is set, the page is served as before (with
   its own on-page password), so you can never be locked out.
   ============================================================ */

function safeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

export default async (request, context) => {
  const pass = Netlify.env.get("ADMIN_PASSWORD") || Netlify.env.get("BOOKING_ADMIN_TOKEN");
  if (!pass) return new Response("Admin access is not configured. Set ADMIN_PASSWORD in Netlify.", { status: 503, headers: { "Cache-Control": "no-store" } });

  // A Stylera Supabase owner session may unlock this page without a second password.
  // Verify it with Supabase Auth on every request; never trust an unsigned email cookie.
  const cookie = request.headers.get("cookie") || "";
  const match = cookie.match(/(?:^|;\s*)shd_owner_session=([^;]+)/);
  if (match) {
    try {
      const jwt = decodeURIComponent(match[1]);
      const ownerEmail = (Netlify.env.get("STYLERA_OWNER_EMAIL") || "lasemic@gmail.com").trim().toLowerCase();
      const key = Netlify.env.get("STYLERA_SUPABASE_PUBLISHABLE_KEY") || "sb_publishable_Efaabu3t4Ye52NjM9IGYrg_Ehx_hTHS";
      const url = (Netlify.env.get("STYLERA_SUPABASE_URL") || "https://agqjcvacbrzhwgjbhcqs.supabase.co").replace(/\/$/, "");
      const verified = await fetch(url + "/auth/v1/user", { headers: { apikey: key, Authorization: "Bearer " + jwt }, signal: AbortSignal.timeout(6000) });
      if (verified.ok) {
        const user = await verified.json();
        if (user.id && user.email?.toLowerCase() === ownerEmail) {
          const res = await context.next();
          const type = res.headers.get("content-type") || "";
          const headers = new Headers(res.headers);
          headers.set("Cache-Control", "no-store");
          headers.set("X-Robots-Tag", "noindex, nofollow");
          if (!type.includes("text/html")) return new Response(res.body, { status: res.status, headers });
          const html = (await res.text()).replace("<head>", '<head><script>try{sessionStorage.setItem("dm_admin_ok","1")}catch(e){}</script>');
          headers.delete("content-length");
          return new Response(html, { status: res.status, headers });
        }
      }
    } catch (_) { /* Legacy admin authentication remains available. */ }
  }

  const auth = request.headers.get("authorization") || "";
  let ok = false;
  if (auth.startsWith("Basic ")) {
    try {
      const decoded = atob(auth.slice(6));
      const given = decoded.slice(decoded.indexOf(":") + 1);
      ok = safeEqual(given, pass);
    } catch (e) { ok = false; }
  }
  if (!ok) {
    return new Response("Sign in to the Samira Home Decor admin dashboard.", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Samira Home Decor admin", charset="UTF-8"',
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  // Signed in: skip the page's own password box.
  const res = await context.next();
  const type = res.headers.get("content-type") || "";
  const headers = new Headers(res.headers);
  headers.set("Cache-Control", "no-store");
  headers.set("X-Robots-Tag", "noindex, nofollow");
  if (!type.includes("text/html")) return new Response(res.body, { status: res.status, headers });
  const html = (await res.text()).replace("<head>", '<head><script>try{sessionStorage.setItem("dm_admin_ok","1")}catch(e){}</script>');
  headers.delete("content-length");
  return new Response(html, { status: res.status, headers });
};

export const config = { path: ["/admin.html", "/admin"] };

