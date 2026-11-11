/* Shared, moderated reviews for the homepage and product pages. */
(() => {
  'use strict';
  const host = document.querySelector('[data-customer-reviews]');
  if (!host) return;
  const esc = value => String(value || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const products = typeof PRODUCTS !== 'undefined' ? PRODUCTS : [];
  const productId = host.dataset.productId || '';
  const product = products.find(p => p.id === productId);
  if (productId && !product) return;
  const catalogue = products.filter(p => !p.comingSoon && p.price != null && p.cat !== 'Packaging');
  const staticReviews = [];
  if (typeof PRODUCT_REVIEWS !== 'undefined') Object.entries(PRODUCT_REVIEWS).forEach(([id, list]) => {
    const p = products.find(p => p.id === id);
    if (p && (!productId || id === productId)) list.forEach(r => staticReviews.push({ ...r, productId: id, productName: p.name }));
  });
  host.innerHTML = `<div class="shd-reviews-inner"><span class="shd-review-eyebrow">REVIEWS</span>
    <h2>What our customers say</h2>
    <p class="shd-review-intro">Customer experiences with Samira Home Decor. Ordered from us? We'd love to hear how it went.</p>
    <div class="shd-review-summary" aria-live="polite"></div>
    <div class="shd-review-cards"></div><button type="button" class="shd-review-more" hidden>Show more reviews</button>
    <div class="shd-review-box" id="reviewForm"><div><h3>Leave a review</h3>
      <p>Tell us about your purchase and how you enjoyed it. Your review goes to our team and appears here only after approval.</p>
      <p class="shd-review-fine">Your email stays private. Your first name, last initial, optional suburb and review may be displayed. Please avoid sharing personal information in your review.</p></div>
      <form class="shd-review-form">
        <fieldset><legend>Your rating</legend><div class="shd-rating-options">${[1,2,3,4,5].map(n => `<label><input type="radio" name="rating" value="${n}" required aria-label="${n} out of 5 stars"><span aria-hidden="true">★</span></label>`).join('')}<output>Select a rating</output></div></fieldset>
        <div class="shd-review-fields"><label>Your name<input name="name" autocomplete="name" maxlength="100" required placeholder="e.g. Grace Obi"></label>
        <label>Suburb <small>(optional)</small><input name="suburb" autocomplete="address-level2" maxlength="100" placeholder="e.g. Adelaide"></label></div>
        <label>Email <small>(kept private)</small><input name="email" type="email" autocomplete="email" maxlength="254" required></label>
        <label>What did you order?${product ? `<input value="${esc(product.name)}" readonly><input type="hidden" name="productId" value="${esc(product.id)}">` : '<input name="productSearch" list="shdReviewProducts" placeholder="Start typing a product name" required autocomplete="off"><datalist id="shdReviewProducts">' + catalogue.map(p => `<option value="${esc(p.name + ' [' + p.id + ']')}"></option>`).join('') + '</datalist>'}</label>
        <label>Your review<textarea name="body" minlength="10" maxlength="3000" rows="4" required placeholder="How was the quality, styling, packaging or delivery?"></textarea></label>
        <label class="shd-review-honey" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
        <label class="shd-review-consent"><input type="checkbox" name="consent" required> <span>I'm happy for my first name, last initial, suburb and review to be shown on this website after approval.</span></label>
        <button type="submit" class="shd-review-submit">Submit review for approval</button>
        <p class="shd-review-message" role="status" aria-live="polite"></p>
      </form></div></div>`;
  const form = host.querySelector('form'), message = host.querySelector('.shd-review-message');
  form.addEventListener('change', e => {
    if (e.target.name !== 'rating') return;
    const n = Number(e.target.value);
    form.querySelectorAll('.shd-rating-options label').forEach((l, i) => l.classList.toggle('selected', i < n));
    form.querySelector('output').textContent = n + ' out of 5';
  });
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(form));
    const chosen = product || catalogue.find(p => values.productSearch === p.name + ' [' + p.id + ']');
    if (!chosen) { message.textContent = 'Please choose a product from the suggestions.'; return; }
    const button = form.querySelector('[type=submit]'); button.disabled = true; button.textContent = 'Submitting…'; message.textContent = '';
    try {
      const res = await fetch('/api/reviews', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...values, productId: chosen.id, rating: Number(values.rating), consent: values.consent === 'on' }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || 'Could not submit your review. Please try again.');
      form.reset(); form.querySelectorAll('.selected').forEach(l => l.classList.remove('selected')); form.querySelector('output').textContent = 'Select a rating';
      message.textContent = 'Thank you! Your review has been saved and is awaiting approval. It is not public yet.';
    } catch (e) { message.textContent = e.message; }
    finally { button.disabled = false; button.textContent = 'Submit review for approval'; }
  });
  let all = staticReviews;
  const more = host.querySelector('.shd-review-more');
  const reviewCard = r => {
    const date = r.date ? new Date(r.date).toLocaleDateString('en-AU', { month: 'long', year: 'numeric' }) : '';
    const reviewedProduct = products.find(p => p.id === r.productId);
    const productUrl = reviewedProduct ? 'product.html?id=' + encodeURIComponent(reviewedProduct.id) : '';
    const image = reviewedProduct && ((reviewedProduct.imgs && reviewedProduct.imgs[0]) || reviewedProduct.img);
    const safeImage = typeof image === 'string' && (image.startsWith('https://') || image.startsWith('http://') || (image.startsWith('/') && !image.startsWith('//')) || /^[a-zA-Z0-9_.-]/.test(image)) ? image : '';
    const productDetail = productUrl ? `<a class="shd-review-product" href="${esc(productUrl)}">${safeImage ? `<img class="shd-review-product-img" src="${esc(safeImage)}" alt="${esc(reviewedProduct.name)}" loading="lazy" decoding="async" onerror="this.style.display='none'">` : ''}<span class="shd-review-product-name">${esc(reviewedProduct.name)}</span></a>` : '';
    return `<article class="shd-review-card"><span class="shd-review-quote" aria-hidden="true">“</span><div class="shd-review-gold" aria-label="${r.rating} out of 5 stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div><p>${esc(r.body)}</p><div class="shd-review-person"><span class="shd-review-avatar" aria-hidden="true">${esc((r.who || 'C').charAt(0))}</span><div><b>${esc(r.who || 'Customer')}</b><small>${esc([r.suburb, date].filter(Boolean).join(' · '))}</small></div></div>${productDetail}</article>`;
  };
  function render() {
    all.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
    const avg = all.length ? all.reduce((n, r) => n + r.rating, 0) / all.length : 0;
    host.querySelector('.shd-review-summary').innerHTML = all.length ? `<strong>${avg.toFixed(1)}</strong><div><span class="shd-review-gold" aria-label="${avg.toFixed(1)} out of 5 stars">${'★'.repeat(Math.round(avg))}${'☆'.repeat(5-Math.round(avg))}</span><small>from ${all.length} review${all.length === 1 ? '' : 's'}</small></div>` : '<p>No reviews yet. Be the first to share your experience.</p>';
    const cards = all.map(reviewCard).join('');
    const carousel = host.querySelector('.shd-review-cards');
    carousel.innerHTML = all.length ? `<div class="shd-review-track" style="--review-duration:${Math.max(18, all.length * 7)}s"><div class="shd-review-group">${cards}</div><div class="shd-review-group" aria-hidden="true" inert>${cards}</div></div>` : '';
    carousel.setAttribute('aria-label', all.length ? 'Customer reviews, continuously scrolling' : 'Customer reviews');
    carousel.tabIndex = all.length ? 0 : -1;
    more.hidden = true;
    // Update the product's existing top-of-page rating without changing the product render.
    if (product && all.length) {
      let score = document.querySelector('#pdpWrap .stars');
      if (!score) { const price = document.getElementById('pdpPrice'); if (price) { score = document.createElement('div'); score.className = 'stars'; price.before(score); } }
      if (score) score.textContent = '★'.repeat(Math.round(avg)) + '☆'.repeat(5-Math.round(avg)) + ' ' + avg.toFixed(1) + ' · ' + all.length + ' reviews';
    }
  }
  render();
  fetch('/api/reviews' + (productId ? '?productId=' + encodeURIComponent(productId) : ''), { cache: 'no-store' }).then(async res => {
    if (!res.ok) throw new Error(); const data = await res.json(); all = staticReviews.concat(data.reviews || []); render();
  }).catch(() => { const p = document.createElement('p'); p.className = 'shd-review-fine'; p.textContent = 'New reviews could not be loaded. Please refresh to try again.'; host.querySelector('.shd-review-summary').append(p); });
})();
