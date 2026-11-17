/* Stylera Support: opt-in visitor event collector.
 * NOT included on live pages. No network requests or storage.
 * Attach only after a visitor has opted in and a secured ingestion endpoint exists.
 */
(function (global) {
  'use strict';
  function createVisitorEvents(options) {
    options = options || {};
    var send = options.send;
    if (typeof send !== 'function') throw new TypeError('A secured event sink is required');
    var consent = options.hasConsent;
    if (typeof consent !== 'function') throw new TypeError('A consent callback is required');
    var last = Object.create(null);
    var minIntervalMs = Math.max(1000, Number(options.minIntervalMs) || 5000);
    function track(type, details) {
      if (!consent()) return false;
      if (!/^(page_view|product_view|chat_open|support_request)$/.test(type)) return false;
      var now = Date.now();
      var key = type + ':' + (details && details.productId || '');
      if (now - (last[key] || 0) < minIntervalMs) return false;
      last[key] = now;
      var payload = { type: type, at: new Date(now).toISOString(), path: global.location.pathname };
      if (type === 'product_view' && details && typeof details.productId === 'string') {
        payload.productId = details.productId.slice(0, 80).replace(/[^a-zA-Z0-9_-]/g, '');
      }
      // No URLs with query strings, personal information, form contents, or payment details.
      send(payload);
      return true;
    }
    return { track: track };
  }
  global.StyleraVisitorEvents = { create: createVisitorEvents };
})(window);
