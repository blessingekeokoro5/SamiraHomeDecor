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
    <div class="admin-toolbar"><label>Show <select id="reviewFilter"><option value="pending">Pending approval</option><option value="approved">Published</option><option value="rejected">Rejected</option><option value="archived">Archived</option><option value="all">All reviews</option></select></label><button type="button" id="refreshReviews" class="btn btn--outline btn--sm">Refresh</button><span id="reviewCounts" class="admin-count"></span></div><p id="reviewAdminMessage" role="status"></p><div id="reviewAdminList"></div>`;
  const manual=document.createElement('section');manual.className='am-card';
  const products=typeof PRODUCTS!=='undefined'?PRODUCTS:[];
  manual.innerHTML=`<h3>Add a customer review</h3><p>Paste genuine feedback received by message, or enter it below. Confirm the customer's permission before publishing.</p><div class="am-columns"><div><label>Review message<textarea id="arPaste" rows="7" placeholder="Paste the customer's review message"></textarea></label><button type="button" id="arRead" class="btn btn--outline btn--sm">Read review</button><p id="arReadMessage" role="status"></p></div><form id="arForm"><div class="am-fields"><label>Customer name<input name="name" required maxlength="100"></label><label>Suburb<input name="suburb" maxlength="100"></label><label>Rating<select name="rating" required><option value="">Select rating</option>${[5,4,3,2,1].map(n=>`<option value="${n}">${'★'.repeat(n)} ${n}</option>`).join('')}</select></label><label>Date<input name="date" type="date" required></label><label class="am-wide">What they ordered<select name="productId" required><option value="">Choose a product</option>${products.map(p=>`<option value="${esc(p.id)}">${esc(p.name)}</option>`).join('')}</select></label><label class="am-wide">Review<textarea name="body" minlength="10" maxlength="3000" required rows="4"></textarea></label><label class="am-wide"><input name="consent" type="checkbox" required> The customer agreed to their review being displayed publicly.</label></div><button type="submit" class="btn btn--dark btn--sm">Publish review</button><p id="arMessage" role="status"></p></form></div>`;
  tab.prepend(manual);
  const arForm=manual.querySelector('form');arForm.elements.date.value=new Date().toLocaleDateString('en-CA',{timeZone:'Australia/Adelaide'});
  manual.querySelector('#arRead').addEventListener('click',()=>{const text=manual.querySelector('#arPaste').value;const get=labels=>{const m=text.match(new RegExp('(?:^|\\n)\\s*(?:'+labels+')\\s*[:=]\\s*([^\\n]+)','i'));return m?m[1].trim():'';};for(const [k,v] of Object.entries({name:get('customer name|name'),suburb:get('suburb|location'),body:get('review|feedback')}))if(v)arForm.elements[k].value=v;const rating=get('rating');if(/^[1-5](?:\s*\/\s*5)?$/.test(rating))arForm.elements.rating.value=rating[0];const date=get('date');if(/^\d{4}-\d{2}-\d{2}$/.test(date))arForm.elements.date.value=date;const p=get('product|what they ordered|ordered');const matched=products.find(x=>x.id===p||x.name.toLowerCase()===p.toLowerCase());if(matched)arForm.elements.productId.value=matched.id;if(!get('review|feedback'))arForm.elements.body.value=text;manual.querySelector('#arReadMessage').textContent='Check the name, rating, product, date and customer consent before publishing. Nothing has been saved yet.';});
  arForm.addEventListener('submit',async e=>{e.preventDefault();const msg=manual.querySelector('#arMessage'),btn=arForm.querySelector('[type=submit]'),b=Object.fromEntries(new FormData(arForm));btn.disabled=true;msg.textContent='Publishing…';try{const res=await fetch('/api/reviews/admin',{method:'POST',headers:headers(),body:JSON.stringify({...b,rating:Number(b.rating),consent:b.consent==='on',action:'create',publish:true})});const d=await res.json();if(!res.ok)throw Error(d.error);arForm.reset();msg.textContent='Published. This review is now visible on the website.';await load();}catch(e){msg.textContent=e.message;}finally{btn.disabled=false;}});
  const message = tab.querySelector('#reviewAdminMessage'), list = tab.querySelector('#reviewAdminList');
  function render() {
    const filter = tab.querySelector('#reviewFilter').value;
    tab.querySelector('#reviewCounts').textContent = reviews.filter(r => r.status === 'pending').length + ' pending · ' + reviews.filter(r => r.status === 'approved').length + ' published';
    const shown = reviews.filter(r => filter === 'all' || r.status === filter);
    list.innerHTML = shown.length ? shown.map(r => `<article class="admin-formcard"><div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><h3>${esc(r.productName)}</h3><b>${esc(r.status)}</b></div><p style="color:#a87924" aria-label="${r.rating} out of 5">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</p><p style="white-space:pre-wrap;overflow-wrap:anywhere">${esc(r.body)}</p><p><b>${esc(r.who)}</b> · ${esc(r.suburb)} · ${esc(new Date(r.date).toLocaleDateString('en-AU'))}<br><small>Private email: ${esc(r.email)}</small></p><div class="btn-row">${r.status !== 'approved' ? `<button type="button" class="btn btn--dark btn--sm" data-id="${esc(r.id)}" data-status="approved">Approve & publish</button>` : `<button type="button" class="btn btn--outline btn--sm" data-id="${esc(r.id)}" data-status="pending">Unpublish</button>`}${r.status !== 'rejected' ? `<button type="button" class="btn btn--outline btn--sm" data-id="${esc(r.id)}" data-status="rejected">Reject</button>` : `<button type="button" class="btn btn--outline btn--sm" data-id="${esc(r.id)}" data-status="pending">Return to pending</button>`}${r.status !== 'archived' ? `<button type="button" class="btn btn--outline btn--sm" data-id="${esc(r.id)}" data-status="archived">Archive</button>` : `<button type="button" class="btn btn--outline btn--sm" data-id="${esc(r.id)}" data-status="pending">Restore to pending</button>`}</div></article>`).join('') : '<div class="admin-empty">No reviews in this category.</div>';
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
  tab.querySelector('#reviewFilter').addEventListener('change', render);
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
