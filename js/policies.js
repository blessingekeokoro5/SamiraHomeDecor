/* ============================================================
   SAMIRA HOME DECOR, Policy content (Australian standards)
   ------------------------------------------------------------
   NOTE: These are good-faith template policies aligned to the
   Australian Consumer Law (ACL), Privacy Act 1988 (Cth) and the
   Australian Privacy Principles (APPs). They are a starting point,
   not legal advice, please have them reviewed by a qualified
   Australian legal professional before relying on them.
   ============================================================ */

const POLICY_UPDATED = "8 November 2026";

const POLICY_ORDER = [
  { slug: "faq",      label: "FAQ" },
  { slug: "delivery", label: "Delivery, Shipping & Order Tracking Policy" },
  { slug: "returns",  label: "Returns & Refund Policy" },
  { slug: "privacy",  label: "Privacy Policy" },
  { slug: "terms",    label: "Terms & Conditions" }
];

const FAQ_ITEMS = [
  { q: "Where do you ship from and how long does it take?",
    a: "Your pieces are dispatched directly from our partner warehouses across Australia, straight to your door. Each product page shows its estimated arrival date, and you can follow every step on our Track my order page. Orders are usually processed within 1 to 2 business days. Standard delivery within Australia typically takes 3 to 8 business days depending on your location; larger furniture items may take longer and are quoted at checkout." },
  { q: "Do you ship internationally?",
    a: "Yes, for décor, homewares and gifts. As well as Australia, we ship to New Zealand, the United Kingdom, Canada, the USA, Switzerland and Germany. Furniture ships within Australia only. International delivery times and costs vary by destination and are calculated at checkout. Any import duties or taxes are the responsibility of the customer." },
  { q: "How do I track my order?",
    a: "Use our <a href='track.html'>Track Your Order</a> page and enter your order number, email or phone used at checkout. You'll also receive a tracking link by email once your order ships." },
  { q: "What payment methods do you accept?",
    a: "We accept Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay, Afterpay, Klarna and Zip. All prices are in Australian Dollars (AUD)." },
  { q: "Can I return an item?",
    a: "Yes. Your rights under the Australian Consumer Law always apply, and we also offer change-of-mind returns on eligible items within 30 days of delivery (a 20% restocking fee applies). See our <a href='policy.html?doc=returns'>Returns &amp; Refund Policy</a> for full details." },
  { q: "How long do gift hampers take to arrive?",
    a: "Gift hampers ship Australia-wide. Choose Standard delivery (5 to 10 business days) or Express (3 to 5 business days, an extra $150) at checkout, where you'll also see your estimated arrival dates. Browse our <a href='hampers.html'>Gift Hampers</a>." },
  { q: "How does the Gift Hamper Maker work?",
    a: "Head to our <a href='hamper-maker.html'>Gift Hamper Maker</a>, choose a box and add treats, drinks, pamper and home touches. Your box builds live with a running total (minimum $60), then add a gift note and pop it in your cart." },
  { q: "Can I create a custom gift?",
    a: "Absolutely, build your own with the <a href='hamper-maker.html'>Gift Hamper Maker</a>, browse ready-made <a href='hampers.html'>hampers</a>, or send a <a href='gift-cards.html'>gift card</a>." },
  { q: "Do you offer gift cards?",
    a: "Yes, digital <a href='gift-cards.html'>gift cards</a> are delivered by email, never expire, and can be used on anything in store." },
  { q: "Can I customise or personalise a product?",
    a: "Yes! Many pieces can be customised, personalised or made to order, for example custom hampers, monogrammed or engraved gifts, and bespoke colour or size options. Just add a note with your order or contact us with what you'd like. Please note that customised and made-to-order items take a few extra days to prepare, so they take a little longer to be delivered than a standard order." },
  { q: "How long do customised orders take to be delivered?",
    a: "Standard orders are dispatched within 1 to 2 business days. Customised, personalised and made-to-order items take a few additional days to create before they ship, so your total delivery time will be a little longer. We'll always confirm an estimated timeframe once we accept your custom order." },
  { q: "How can I contact Samira Home Decor?",
    a: "Email <a href='mailto:hello@samirahomedecor.com.au'>hello@samirahomedecor.com.au</a>, or chat with us live. We're a proudly Australian online store 🇦🇺." }
];

const POLICIES = {
  delivery: {
    title: "Delivery, Shipping & Order Tracking Policy",
    intro: "This policy explains how we ship, fulfil, deliver and track Samira Home Decor orders. It should be read together with our Terms & Conditions and Returns & Refund Policy.",
    body: `
      <h3>1. Dispatch &amp; processing</h3>
      <p><strong>Where your order ships from:</strong> Your pieces are dispatched directly from our partner warehouses across Australia, straight to your door. Each product page shows its estimated arrival date, and you can follow every step on our <a href="track.html">Track my order</a> page.</p>
      <p>Orders are generally processed and dispatched within <strong>1 to 2 business days</strong> of payment being received and cleared. During sale periods and holidays, processing may take a little longer.</p>

      <h3>2. Shipping &amp; fulfilment</h3>
      <p>Once your order is placed, our team and partner warehouses pick, pack and fulfil it with care. Our shipping &amp; fulfilment standards:</p>
      <ul>
        <li><strong>Handling time:</strong> most orders are packed and handed to the carrier within 1 to 2 business days; made-to-order and bulky furniture items may take longer and are noted at checkout.</li>
        <li><strong>Carriers:</strong> we dispatch via trusted carriers including Australia Post and Aramex, and specialist couriers for large or fragile furniture.</li>
        <li><strong>Packaging:</strong> items are protectively packed, using recyclable and sustainable materials wherever possible.</li>
        <li><strong>Split shipments:</strong> if your order contains multiple items, they may be fulfilled and arrive in separate deliveries, you are only charged shipping once.</li>
        <li><strong>Authority to leave:</strong> unless a signature is required, parcels may be left in a safe place at the carrier's discretion. Please provide clear delivery instructions at checkout.</li>
        <li><strong>Confirmation:</strong> you'll receive an order confirmation and, once fulfilled, a dispatch email with tracking.</li>
      </ul>
      <p>Fulfilment timeframes are estimates and may vary during sale periods, public holidays and peak demand.</p>

      <h3>3. Delivery times &amp; costs (Australia)</h3>
      <ul>
        <li>Standard delivery: typically <strong>3 to 8 business days</strong> depending on your state and postcode.</li>
        <li><strong>Free standard shipping on orders over $3,500</strong> (Australia-wide).</li>
        <li>Bulky and furniture items may incur additional freight, shown at checkout, and can require longer transit times.</li>
        <li>Remote and regional areas may experience extended delivery times.</li>
      </ul>

      <h3>4. International delivery</h3>
      <p>As well as Australia, we ship décor, homewares and gifts to New Zealand, the United Kingdom, Canada, the USA, Switzerland and Germany. <strong>Furniture ships within Australia only.</strong> Delivery times and costs are calculated at checkout. <strong>Any customs duties, import taxes or fees are the responsibility of the customer</strong> and are not included in our prices or shipping charges.</p>

      <h3>5. Gift hamper delivery</h3>
      <p>Gift hampers are delivered Australia-wide by courier. At checkout you can choose <strong>Standard</strong> delivery (5 to 10 business days) or <strong>Express</strong> delivery (3 to 5 business days, an extra $150), and your estimated arrival dates are shown before you pay. Hampers with made-to-order signature packaging need an extra 14 working days. We don't currently offer same-day delivery, pick up or lay-by.</p>

      <h3>6. Order tracking</h3>
      <p>Once dispatched, you'll receive a confirmation with a tracking number. You can track your order at any time via our <a href="track.html">Track Your Order</a> page using your order number, email or phone number used at checkout. Deliveries are carried by reputable carriers such as Australia Post and Aramex.</p>

      <h3>7. Incorrect address &amp; failed delivery</h3>
      <p>Please ensure your delivery details are correct. Re-delivery or redirection caused by an incorrect address may incur additional charges. If a parcel is returned to us as undeliverable, we'll contact you to arrange re-delivery (additional postage may apply).</p>

      <h3>8. Damaged or lost in transit</h3>
      <p>If your order arrives damaged, or does not arrive within a reasonable time, please contact us within 7 days at <a href="mailto:hello@samirahomedecor.com.au">hello@samirahomedecor.com.au</a> so we can help resolve it. Nothing in this policy limits your rights under the Australian Consumer Law.</p>
    `
  },

  returns: {
    title: "Returns & Refund Policy",
    intro: "We want you to love every Samira Home Decor piece. This policy explains your rights under the Australian Consumer Law (ACL), our optional change-of-mind returns, and how to lodge a return.",
    body: `
      <h3>1. Your rights under the Australian Consumer Law</h3>
      <p>Our products come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a <strong>refund, replacement or repair</strong> if an item has a <strong>major fault</strong>, is significantly different from its description, is unsafe, or has a problem that can't be fixed within a reasonable time. If the fault is <strong>minor</strong>, we may choose to repair or replace the item. Nothing in this policy limits these rights.</p>

      <h3>2. What isn't covered</h3>
      <p>Our ACL obligations don't extend to problems caused by:</p>
      <ul>
        <li>normal wear and tear;</li>
        <li>misuse, accidents, or not following the care instructions;</li>
        <li>damage that happens after delivery, including when an item is moved to a new location after it was delivered;</li>
        <li>storing items in places that aren't weatherproof, such as a garage, shed or outdoor area (unless the piece is designed for outdoor use).</li>
      </ul>
      <p>Returns sent back without the original packaging may not be accepted unless the item has a major fault.</p>

      <h3>3. Change-of-mind returns</h3>
      <p>Change-of-mind returns aren't required under the Australian Consumer Law, but we're happy to offer them on eligible items within <strong>30 days of delivery</strong>, on these conditions:</p>
      <ul>
        <li><strong>Restocking fee:</strong> a <strong>20% restocking fee</strong> applies to every change-of-mind return, wherever you are in Australia. It's taken off your refund.</li>
        <li><strong>Condition:</strong> the item must be in as-new condition, with no scratches, marks, stains, damage or changes, and returned with all parts and accessories.</li>
        <li><strong>Packaging:</strong> the item must be in its original packaging and able to be resealed as new. We can't accept change-of-mind returns without the original packaging or with damaged packaging.</li>
        <li><strong>Proof of purchase:</strong> please include your order number or receipt.</li>
        <li><strong>Return shipping:</strong> you arrange and pay for the return delivery. We recommend insuring it in case it's damaged on the way back.</li>
      </ul>
      <p><strong>Extended holiday returns:</strong> orders placed between <strong>25 December and 5 January</strong> may be returned for change of mind within <strong>60 days</strong> of delivery (the conditions above still apply).</p>

      <h3>4. Items we can't accept for change of mind</h3>
      <ul>
        <li>items marked <strong>Clearance</strong> or <strong>Final Sale</strong>;</li>
        <li><strong>ex-display</strong> or <strong>seconds</strong> items;</li>
        <li>items that are <strong>customised, customisable, made to order or special order</strong>;</li>
        <li><strong>natural stone</strong> pieces (such as marble, travertine and granite);</li>
        <li>perishable or consumable goods (for example, food in gift hampers);</li>
        <li>custom-built gift hampers, personalised gifts and cards;</li>
        <li>gift cards and vouchers.</li>
      </ul>
      <p>Your rights under the Australian Consumer Law still apply to these items if they are faulty.</p>

      <h3>5. Check your order when it arrives</h3>
      <p>Please check your items carefully as soon as they're delivered. If anything is damaged, faulty or not what you ordered, let us know within <strong>7 days</strong> of delivery, with photos, so we can sort it out quickly.</p>

      <h3>6. How to lodge a return</h3>
      <ol>
        <li><strong>Tell us:</strong> fill in our <a href="returns.html">returns form</a> with your order number, photos and a short description of the issue.</li>
        <li><strong>We review it:</strong> our team looks at your request and may ask for more details.</li>
        <li><strong>Return approved:</strong> if your return is approved, you'll receive a <strong>return reference number</strong> and instructions on how and where to send the item.</li>
        <li><strong>Send it back:</strong> pack the item securely and send it to us. You pay the return shipping unless the item has a major fault.</li>
      </ol>
      <p>Please don't send anything back before your return is approved. Items returned without a return reference number can't be accepted.</p>

      <h3>7. Refunds</h3>
      <p>Once we've received and checked your return, approved refunds are paid to your original payment method within <strong>10 business days</strong> (less the restocking fee for change-of-mind returns). If you prefer, you can choose a Samira Home Decor gift card instead, with a 5% bonus. Shipping charges aren't refundable unless the return is because of a major fault.</p>

      <h3>8. Exchanges</h3>
      <p>You can exchange an eligible item for another piece of the same value (shipping costs not included). If you'd like a close substitute of a different price, we'll let you know the difference to pay or refund.</p>

      <h3>9. Delivery and transit</h3>
      <p>If you collect your order yourself, or arrange your own courier to collect it, we're not responsible for any loss or damage after it has been collected. This doesn't affect your rights under the Australian Consumer Law.</p>

      <h3>10. Cancellations</h3>
      <p>If you need to cancel an order, contact us as soon as possible. We can usually cancel before dispatch. Once an order has been dispatched, our returns process applies.</p>

      <h3>11. Contact us</h3>
      <p>Questions about a return? Email <a href="mailto:hello@samirahomedecor.com.au">hello@samirahomedecor.com.au</a>, call <a href="tel:+61451609398">0451 609 398</a>, or chat with us live.</p>
    `
  },

  privacy: {
    title: "Privacy Policy",
    intro: "Samira Home Decor respects your privacy and is committed to protecting your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).",
    body: `
      <h3>1. Information we collect</h3>
      <p>We may collect personal information including your name, delivery and billing address, email, phone number, order details and, where relevant, information you provide when booking a service, applying for a role, or contacting us. We do not store full card numbers, payments are handled by secure third-party processors.</p>

      <h3>2. How we collect it</h3>
      <p>We collect information directly from you when you place an order, create an account, subscribe to our newsletter, book a service, use the Samira Stylera or chat, or contact us. Some information (such as cookies and site analytics) is collected automatically when you use our website.</p>

      <h3>3. Why we use it</h3>
      <ul>
        <li>To process and deliver your orders and bookings;</li>
        <li>To communicate with you about orders, enquiries and support;</li>
        <li>To send marketing and offers where you have opted in (you can unsubscribe at any time);</li>
        <li>To improve our products, services and website;</li>
        <li>To meet our legal and regulatory obligations.</li>
      </ul>

      <h3>4. Disclosure to third parties</h3>
      <p>We may share your information with trusted third parties who help us operate, such as payment providers, delivery couriers (e.g. Australia Post, Aramex), and IT and marketing service providers. We require these parties to protect your information. We do not sell your personal information.</p>

      <h3>5. Storage &amp; security</h3>
      <p>We take reasonable steps to protect your personal information from misuse, loss, and unauthorised access, including secure systems and access controls. No method of transmission over the internet is completely secure, but we work to safeguard your data.</p>

      <h3>6. The Samira Stylera &amp; images</h3>
      <p>Photos uploaded to the Samira Stylera tool are processed to generate styling recommendations. In the current version, images are processed in your browser and are not stored on our servers.</p>

      <h3>7. Access, correction &amp; complaints</h3>
      <p>You may request access to, or correction of, the personal information we hold about you by contacting us. If you have a privacy concern, contact us first and we'll work to resolve it. You may also contact the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener">oaic.gov.au</a>.</p>

      <h3>8. Cookies</h3>
      <p>Our website uses cookies to remember your cart and preferences and to understand site usage. You can control cookies through your browser settings; disabling them may affect some features.</p>

      <h3>9. Contact</h3>
      <p>Privacy enquiries: <a href="mailto:hello@samirahomedecor.com.au">hello@samirahomedecor.com.au</a> · Australia 🇦🇺.</p>
    `
  },

  terms: {
    title: "Terms & Conditions",
    intro: "These Terms & Conditions govern your use of the Samira Home Decor website and your purchase of our products and services. By using our site or placing an order, you agree to these terms.",
    body: `
      <h3>1. About us</h3>
      <p>This website is operated by Samira Home Decor, an Australian home and lifestyle business and a registered business name. In these terms, "we", "us" and "our" refer to Samira Home Decor.</p>

      <h3>2. Pricing</h3>
      <p>All prices are in Australian Dollars (AUD), unless stated otherwise. We may update prices, products and promotions at any time. Sale discounts (such as Spend &amp; Save) apply per their stated terms.</p>

      <h3>3. Orders &amp; acceptance</h3>
      <p>Your order is an offer to purchase. We may accept or decline any order, including where an item is out of stock, mispriced, or where we suspect fraud. A contract forms when we confirm dispatch. We'll contact you if we cannot fulfil an order and arrange a refund.</p>

      <h3>4. Payment</h3>
      <p>We accept the payment methods shown at checkout. Payments are processed securely by third-party providers. You warrant that you are authorised to use the chosen payment method.</p>

      <h3>5. Services &amp; bookings</h3>
      <p>Samira Stylera recommendations are provided as a guide only. Custom hampers, personalised gifts and gift cards are made to order.</p>
      <p>Member Christmas Vouchers are offered under their own terms. See <a href="christmas-vouchers.html">how Christmas Vouchers work</a>.</p>

      <h3>6. External links</h3>
      <p>Our site may link to third-party sites and services (for example payment providers, delivery partners and social media). We are not responsible for the content or practices of third-party websites.</p>

      <h3>7. Intellectual property</h3>
      <p>All content on this website, including text, imagery, branding and design, is owned by or licensed to Samira Home Decor and may not be used without our written permission.</p>

      <h3>8. Automated access &amp; data collection</h3>
      <p>You may not use any automated means to access, copy or collect material from this site. That includes scraping, crawling, harvesting, spidering, data mining and the use of bots, scripts or extraction tools, whether to copy our product listings, photographs, descriptions, prices or any other content.</p>
      <p>You also may not use our content to train or fine-tune a machine learning or artificial intelligence model, or republish it in a commercial database or catalogue, without our written permission.</p>
      <p>Search engines and social platforms may index our pages and show link previews in the ordinary way. Everything else requires permission, which you are welcome to ask us for at hello@samirahomedecor.com.au.</p>
      <p>We may block, rate-limit or take legal action against access that breaches this clause.</p>

      <h3>9. Consumer guarantees &amp; liability</h3>
      <p>Nothing in these terms excludes, restricts or modifies any consumer guarantee, right or remedy you have under the Australian Consumer Law. To the extent permitted by law, our liability for a failure to comply with a consumer guarantee is limited to re-supplying, replacing or repairing the goods or services, or paying the cost of doing so.</p>

      <h3>10. Governing law</h3>
      <p>These terms are governed by the laws of South Australia, and you submit to the non-exclusive jurisdiction of its courts.</p>

      <h3>11. Changes</h3>
      <p>We may update these terms from time to time. The version published on this page applies to your use of the site and orders placed after it is posted.</p>
    `
  }
};
