/* ============================================================
   Samira Home Decor — order tracking display
   ------------------------------------------------------------
   Shows the REAL delivery stage of an order, as set by the team
   in the admin page (Orders tab). Nothing here moves on a timer.

     renderTracking(data, el)       draw a result from order-track
     fetchTracking(orderNo, contact) → Promise<data>
     renderOrderStatus(order, el)   account page: looks the order up
                                    with the signed-in customer's email
   ============================================================ */
(function () {
  var FN = "/.netlify/functions/order-track";

  // Timeline styles, added once so every page that shows tracking matches.
  (function addStyles() {
    if (typeof document === "undefined" || document.getElementById("trackStyles")) return;
    var css = ".tl{list-style:none;padding:0;margin:22px 0 0}.tl li{position:relative;padding:0 0 26px 40px}" +
      ".tl li::before{content:'';position:absolute;left:11px;top:22px;bottom:-4px;width:2px;background:var(--line,#E8DCC8)}.tl li:last-child::before{display:none}" +
      ".tl .dot{position:absolute;left:0;top:2px;width:24px;height:24px;border-radius:50%;background:#fff;border:2px solid var(--line,#E8DCC8);display:grid;place-items:center;font-size:.8rem;color:var(--muted,#8a7f77)}" +
      ".tl li.done .dot{background:var(--forest,#2E5E4E);border-color:var(--forest,#2E5E4E);color:#fff}" +
      ".tl li.current .dot{background:#C6A15B;border-color:#C6A15B;color:#fff;box-shadow:0 0 0 4px rgba(198,161,91,.22)}" +
      ".tl h4{margin:0 0 3px;font-size:1rem;color:var(--muted,#8a7f77);font-weight:600}.tl li.done h4,.tl li.current h4{color:var(--ink,#0B1F3A)}" +
      ".tl small{color:var(--muted,#8a7f77);font-size:.86rem;line-height:1.5;display:block}" +
      ".track-summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin:4px 0 8px}" +
      ".track-stat{background:var(--cream,#F7F3EC);border:1px solid var(--line,#E8DCC8);border-radius:10px;padding:12px 14px}" +
      ".track-stat .l{font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted,#8a7f77)}.track-stat .v{font-weight:600;color:var(--ink,#0B1F3A);margin-top:3px}";
    var tag = document.createElement("style"); tag.id = "trackStyles"; tag.textContent = css;
    (document.head || document.documentElement).appendChild(tag);
  })();

  function steps(loc) {
    var at = loc ? " " + loc : "";
    return [
      { key: "placed",    title: "Order placed",                  done: "We received your order and payment." },
      { key: "picking",   title: "Currently picking",             done: "We're picking your items. If an item is out of stock, we'll email you within 2 business days, usually with a close substitute for you to approve." },
      { key: "packed",    title: "Packed with care & dispatched", done: "Your pieces are packed and on their way to the courier." },
      { key: "shipped",   title: "Shipped",                       done: "Handed to the courier." },
      { key: "transit",   title: "In transit" + (loc ? " to " + loc : ""), done: "On its way to your location." },
      { key: "arrived",   title: "Arrived" + (loc ? " in " + loc : ""),    done: "At the" + at + " terminal and handed to a local dispatcher." },
      { key: "out",       title: "Out for delivery",              done: "With your local driver. We've sent you a message.", pending: "We'll send you a message once it's out for delivery." },
      { key: "delivered", title: "Delivered",                     done: "Dropped off at your address. Enjoy!" }
    ];
  }

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function fmt(ts) {
    var d = new Date(ts);
    try { return d.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" }) + " · " + d.toLocaleTimeString("en-AU", { hour: "numeric", minute: "2-digit" }); }
    catch (e) { return d.toDateString(); }
  }

  window.fetchTracking = function (orderNo, contact) {
    return fetch(FN, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ orderNo: orderNo, contact: contact }) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok || !j.ok) throw new Error(j.error || "Tracking isn't available right now."); return j; }); });
  };

  window.renderTracking = function (data, el, opts) {
    if (!el) return;
    opts = opts || {};
    var st = data.status || {}, o = data.order || {};
    var loc = st.location || o.state || "";
    var list = steps(loc);
    var cur = Math.max(0, list.findIndex(function (s) { return s.key === st.stage; }));
    var delivered = st.stage === "delivered";
    var when = {};
    (st.history || []).forEach(function (h) { when[h.stage] = h.at; });
    when.placed = when.placed || o.placedAt;

    var where = loc ? (o.suburb ? esc(o.suburb) + ", " : "") + esc(loc) + ", Australia" : "Australia";
    var stats = '<div class="track-summary">' +
      '<div class="track-stat"><div class="l">Status</div><div class="v">' + esc(list[cur].title) + '</div></div>' +
      '<div class="track-stat"><div class="l">Delivering to</div><div class="v">' + where + '</div></div>' +
      (st.courier ? '<div class="track-stat"><div class="l">Courier</div><div class="v">' + esc(st.courier) + '</div></div>' : "") +
      (st.trackingNo ? '<div class="track-stat"><div class="l">Tracking #</div><div class="v">' + esc(st.trackingNo) + '</div></div>' : "") +
      '</div>';

    var tl = '<ul class="tl">' + list.map(function (s, i) {
      var cls = i < cur || delivered ? "done" : (i === cur ? "current" : "");
      var mark = (i < cur || delivered) ? "✓" : (i === cur ? "●" : (i + 1));
      var text = i <= cur ? s.done : (s.pending || "Pending");
      var t = (i <= cur && when[s.key]) ? '<div style="font-size:.78rem;color:var(--muted);margin-top:2px">' + fmt(when[s.key]) + '</div>' : "";
      return '<li class="' + cls + '"><span class="dot">' + mark + '</span><h4>' + esc(s.title) + '</h4><small>' + esc(text) + '</small>' + t + '</li>';
    }).join("") + '</ul>';

    var items = (o.items || []).length ? '<p style="color:var(--muted);margin:0 0 14px;font-size:.92rem">' +
      o.items.map(function (it) { return esc(it.name) + (it.qty > 1 ? " × " + it.qty : ""); }).join(" · ") + '</p>' : "";
    var note = st.note ? '<div style="background:#F7F3EC;border-left:3px solid #E0C992;padding:10px 12px;border-radius:6px;margin:10px 0;font-size:.9rem">' + esc(st.note) + '</div>' : "";

    var mailNote = delivered ? "" : '<div style="display:flex;gap:10px;align-items:flex-start;background:#EEF3F9;border-left:3px solid #14365F;padding:12px 14px;border-radius:8px;margin:12px 0;font-size:.9rem;line-height:1.5;color:#0B1F3A">' +
      '<span style="font-size:1.2rem">📧</span><span><strong>Please keep an eye on your email.</strong> We send all order updates by email, including if an item is out of stock and we\u2019ve found a close substitute for you to approve. Check your spam or junk folder too, and add hello@samirahomedecor.com.au to your contacts.</span></div>';

    el.innerHTML = (opts.compact ? "" :
        '<span class="eyebrow">' + (delivered ? "Delivered ✓" : "In progress") + '</span>' +
        '<h2 style="font-size:1.8rem;margin-bottom:4px">Order ' + esc(o.orderNo) + '</h2>') +
      items + stats + mailNote + note + tl;
  };

  // Account page: a signed-in customer's order, looked up with their email.
  window.renderOrderStatus = function (order, el) {
    if (!el || !order || !order.orderNo) return;
    var acc = (typeof getAccount === "function") ? getAccount() : null;
    var contact = (acc && acc.email) || order.email || "";
    if (!contact) { el.innerHTML = '<p class="form-note">Sign in to see your order’s progress, or use <a href="track.html?order=' + encodeURIComponent(order.orderNo) + '">Track my order</a>.</p>'; return; }
    el.innerHTML = '<p class="form-note">Loading your order’s progress…</p>';
    window.fetchTracking(order.orderNo, contact)
      .then(function (data) { window.renderTracking(data, el, { compact: true }); })
      .catch(function (e) {
        el.innerHTML = '<p class="form-note">' + esc(e.message) + ' You can also use <a href="track.html?order=' + encodeURIComponent(order.orderNo) + '">Track my order</a>.</p>';
      });
  };
})();
