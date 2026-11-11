/* Review moderation uses the existing server admin sign-in, or booking access key. */
(() => {
  const tab = document.getElementById('tabReviews');
  if (!tab) return;
  const esc = s => String(s || '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  let reviews = [], busy = false;
  const headers = () => {
    let token = ''; try { token = localStorage.getItem('shd_book_token') || ''; } catch (_) {}
    return { 'Content-Type': 'application/json', ...(token ? { 'x-admin-token': token } : {}) };
  };
  tab.innerHTML = `<div class="admin-note">New reviews stay <b>pending</b> until you approve them. Approving publishes the customer's original words and rating. Reject spam, abusive content or personal information; use the same standards for positive and negative feedback. Email addresses stay private. Submissions are not automatically verified purchases.</div>
    <div class="admin-toolbar"><label>Show <select id="reviewFilter"><option value="pending">Pending approval</option><option value="approved">Published</option><option value="rejected">Rejected</option><option value="all">All reviews</option></select></label><button type="button" id="refreshReviews" class="btn btn--outline btn--sm">Refresh</button><span id="reviewCounts" class="admin-count"></span></div><p id="reviewAdminMessage" role="status"></p><div id="reviewAdminList"></div>`;
  const message = tab.querySelector('#reviewAdminMessage'), list = tab.querySelector('#reviewAdminList');
  function render() {
    const filter = tab.querySelector('select').value;
    tab.querySelector('#reviewCounts').textContent = reviews.filter(r => r.status === 'pending').length + ' pending · ' + reviews.filter(r => r.status === 'approved').length + ' published';
    const shown = reviews.filter(r => filter === 'all' || r.status === filter);
    list.innerHTML = shown.length ? shown.map(r => `<article class="admin-formcard"><div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><h3>${esc(r.productName)}</h3><b>${esc(r.status)}</b></div><p style="color:#a87924" aria-label="${r.rating} out of 5">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</p><p style="white-space:pre-wrap;overflow-wrap:anywhere">${esc(r.body)}</p><p><b>${esc(r.who)}</b> · ${esc(r.suburb)} · ${esc(new Date(r.date).toLocaleDateString('en-AU'))}<br><small>Private email: ${esc(r.email)}</small></p><div class="btn-row">${r.status !== 'approved' ? `<button type="button" class="btn btn--dark btn--sm" data-id="${esc(r.id)}" data-status="approved">Approve & publish</button>` : `<button type="button" class="btn btn--outline btn--sm" data-id="${esc(r.id)}" data-status="pending">Unpublish</button>`}${r.status !== 'rejected' ? `<button type="button" class="btn btn--outline btn--sm" data-id="${esc(r.id)}" data-status="rejected">Reject</button>` : `<button type="button" class="btn btn--outline btn--sm" data-id="${esc(r.id)}" data-status="pending">Return to pending</button>`}</div></article>`).join('') : '<div class="admin-empty">No reviews in this category.</div>';
  }
  async function load() {
    message.textContent = 'Loading reviews…';
    try {
      const res = await fetch('/api/reviews/admin', { headers: headers(), cache: 'no-store' });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Could not load reviews.');
      reviews = data.reviews || []; render(); message.textContent = '';
    } catch (e) { list.replaceChildren(); message.textContent = e.message + ' You can unlock the Cleaning bookings tab with your existing access key, then refresh here.'; }
  }
  tab.querySelector('select').addEventListener('change', render);
  tab.querySelector('#refreshReviews').addEventListener('click', load);
  list.addEventListener('click', async e => {
    const btn = e.target.closest('button[data-status]'); if (!btn || busy) return;
    busy = true; btn.disabled = true; message.textContent = 'Saving…';
    try {
      const res = await fetch('/api/reviews/admin', { method:'POST', headers:headers(), body:JSON.stringify({ id:btn.dataset.id, status:btn.dataset.status }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || 'Could not save your decision.');
      await load(); message.textContent = btn.dataset.status === 'approved' ? 'Published on the website.' : 'Saved. This review is not public.';
    } catch (e) { message.textContent = e.message; btn.disabled = false; }
    finally { busy = false; }
  });
  document.getElementById('adminTabs').addEventListener('click', e => {
    const button = e.target.closest('button'); if (!button) return;
    tab.hidden = button.dataset.tab !== 'reviews';
    if (!tab.hidden) load();
  });
})();
