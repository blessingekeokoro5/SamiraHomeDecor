const { findOrder, itemsFor, loadStatus, openStore, publicStatus, validOrderNo } = require("./_orders");
const { indexPaidOrder, listOrders, normaliseEmail, verifiedEmail } = require("./_app-order-index");

function json(statusCode, value) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Cache-Control": "no-store",
    },
    body: JSON.stringify(value),
  };
}

exports.handler = async event => {
  if (event.httpMethod === "OPTIONS") return json(200, {});
  if (event.httpMethod !== "POST") return json(405, { error: "method_not_allowed" });
  let input;
  try { input = JSON.parse(event.body || "{}"); }
  catch { return json(400, { error: "bad_request" }); }
  const email = verifiedEmail(input?.member);
  if (!email) return json(401, { error: "sign_in_required" });
  const { action, orderNo } = input;
  if (!["list", "add", "track"].includes(action) || (action !== "list" && !validOrderNo(orderNo))) {
    return json(400, { error: "bad_request" });
  }
  try {
    if (action !== "list") {
      const order = await findOrder(orderNo);
      if (!order || order.orderNo !== orderNo || normaliseEmail(order.email) !== email) {
        return json(404, { error: "order_not_found" });
      }
      if (action === "track") {
        const [record, items] = await Promise.all([loadStatus(openStore(), orderNo), itemsFor(order.sessionId)]);
        return json(200, {
          ok: true,
          order: { orderNo, suburb: order.suburb, state: order.state, country: order.country },
          status: publicStatus(order, record),
          items: items.map(({ name, qty }) => ({ name, qty })),
        });
      }
      if (!await indexPaidOrder(email, order)) return json(503, { error: "orders_unavailable" });
    }
    const orders = await listOrders(email);
    if (!orders.length) return json(200, { ok: true, orders: [] });
    const store = openStore();
    const summaries = await Promise.all(orders.map(async order => {
      const status = publicStatus(order, await loadStatus(store, order.orderNo));
      return { ...order, stage: status.stage, onHold: Boolean(status.hold) };
    }));
    return json(200, { ok: true, orders: summaries });
  } catch {
    return json(503, { error: "orders_unavailable" });
  }
};
