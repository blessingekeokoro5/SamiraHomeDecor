(() => {
  const access = document.getElementById("access");
  const code = document.getElementById("code");
  const inbox = document.getElementById("inbox");
  const status = document.getElementById("status");
  const tickets = document.getElementById("tickets");
  const reviews = document.getElementById("reviews");
  const selected = document.getElementById("selected-review");
  let token = "";
  let activeRequest = false;
  let session = 0;

  const node = (tag, text) => {
    const element = document.createElement(tag);
    if (text !== undefined) element.textContent = text;
    return element;
  };
  async function request(action, fields = {}) {
    const response = await fetch("/.netlify/functions/app-care", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...fields, action, token }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Request failed.");
    return data;
  }
  async function work(action) {
    if (activeRequest) return;
    activeRequest = true;
    const version = session;
    status.textContent = "Working…";
    try {
      await action(version);
      if (version === session) status.textContent = "";
    } catch (error) {
      if (version === session) status.textContent = error.message || "Request failed.";
    } finally { activeRequest = false; }
  }
  function button(label, action) {
    const control = node("button", label);
    control.type = "button";
    control.addEventListener("click", () => void work(action));
    return control;
  }
  function showTicket(ticket) {
    const card = node("article");
    const form = node("form");
    const state = node("select");
    state.setAttribute("aria-label", "Ticket status");
    for (const name of ["Received", "In progress", "Resolved"]) {
      state.append(new Option(name, name, false, name === ticket.status));
    }
    const reply = node("textarea");
    reply.setAttribute("aria-label", "Reply visible to the customer");
    reply.placeholder = "Reply visible in the app";
    reply.maxLength = 2000;
    reply.value = ticket.reply || "";
    form.append(state, reply, node("button", "Save status and reply"));
    form.addEventListener("submit", event => {
      event.preventDefault();
      void work(async version => {
        await request("admin-update-ticket", { key: ticket.key, status: state.value, reply: reply.value });
        await loadInbox(version);
      });
    });
    card.append(node("h3", ticket.topic + " · " + ticket.ref.slice(0,8).toUpperCase()),
      node("p", ticket.name + " · " + ticket.email + (ticket.orderNo ? " · " + ticket.orderNo : "")),
      node("p", ticket.notified ? "Inbox email delivered" : "Inbox email unconfirmed"),
      node("p", ticket.message), form);
    return card;
  }
  async function loadReview(id, version) {
    const { review } = await request("admin-review", { id });
    if (version !== session) return;
    const card = node("article");
    card.append(node("h3", review.product + " · " + review.rating + "/5"),
      node("p", review.displayName), node("p", review.message));
    if (review.photo && /^[A-Za-z0-9+/]+={0,2}$/.test(review.photo)) {
      const image = node("img");
      image.alt = "Photo submitted with the review";
      image.src = "data:" + (review.photo.startsWith("iVBOR") ? "image/png" : "image/jpeg") + ";base64," + review.photo;
      card.append(image);
    }
    card.append(button("Approve for publication", async current => {
      await request("admin-approve-review", { id }); await loadInbox(current);
    }), button("Reject review", async current => {
      if (!window.confirm("Reject this review and remove its submitted photo?")) return;
      await request("admin-reject-review", { id }); await loadInbox(current);
    }));
    selected.replaceChildren(card);
  }
  async function loadInbox(version) {
    const [ticketResult, reviewResult] = await Promise.all([request("admin-tickets"), request("admin-reviews")]);
    if (version !== session) return;
    tickets.replaceChildren(...(ticketResult.tickets.length ? ticketResult.tickets.map(showTicket) : [node("p", "No app tickets yet.")]));
    reviews.replaceChildren(...(reviewResult.ids.length ? reviewResult.ids.map((id, i) =>
      button("Open review " + (i+1), current => loadReview(id, current))) : [node("p", "No reviews awaiting approval.")]));
    selected.replaceChildren();
    inbox.hidden = false;
    access.hidden = true;
  }
  access.addEventListener("submit", event => {
    event.preventDefault();
    token = code.value;
    code.value = "";
    void work(loadInbox);
  });
  document.getElementById("refresh").addEventListener("click", () => void work(loadInbox));
  document.getElementById("close").addEventListener("click", () => {
    token = "";
    session++;
    tickets.replaceChildren();
    reviews.replaceChildren();
    selected.replaceChildren();
    inbox.hidden = true;
    access.hidden = false;
    status.textContent = "";
  });
})();
