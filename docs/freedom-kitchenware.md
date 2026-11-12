# Freedom kitchenware import — 12 November 2026

This range was researched from Freedom's public Australian product pages (not its gated postcode checkout). Six initial kitchen/tableware products are present in js/data.js and are automatically included in the server-side trusted catalogue by the existing Netlify build.

## Pricing in AUD

- Each medium dinnerware set is priced at its regular supplier listing + $200.
- The large 42-piece cutlery bundle is priced at regular supplier listing + $300.
- The unit price, member price and price floor are identical. readyDining=true prevents site promotion discounts from eroding the specified unit margin.
- Quantities are billed at the unit price for **every** purchased unit. Supplier costs are snapshots, not real-time stock or supplier-price guarantees.

## Delivery

Freedom states homewares shipping **starts at $19.95** and varies with postcode, product weight, brand and dispatch location. No public nationwide postcode-specific kitchenware rates were found. Therefore the implementation is **Samira's protective estimate**, not an exact replication of Freedom checkout.

For Freedom items the checkout adds: $19.95 base + mapped Australian postcode extra + $1.40 per packed kg + $5 per unit + $12 per extra unit + $15 per extra distinct SKU + $12 per larger 42-piece set + $30/$60/$120 full-cart uplift (3+/5+/8+ units), and $35 for a second supplier (+$15 for each additional supplier). These charges combine with other supplier-delivery charges into one delivery total, and the server recomputes the amount in Stripe checkout. A valid Australian postcode and street address are required; no PO boxes or international checkout.

Destination zones are derived from Samira's existing location data and are indicative, not live Freedom quotations. Revisit remote areas and oversized freight costs before expanding the range. Freedom can split shipments and does not publish fixed delivery charges for all locations.

## Product imagery and stock caveats

The first five products currently use matching reference images hosted by other product retailers or the product maker. **Confirm commercial usage permission and hotlink reliability** before depending on these images; replace with supplier-approved assets. The 42-piece cutlery set uses a plainly labelled illustration until an approved product image is supplied. Supplier stock and fulfilment must be confirmed when purchasing: Freedom's public product pages do not constitute a live supplier integration.

Sources:
- https://help.freedom.com.au/hc/en-au/articles/25883235247757-How-much-does-delivery-cost
- https://www.freedom.com.au/delivery-customer-care
- https://www.freedom.com.au/product/13115224
- https://www.freedom.com.au/product/13228579
- https://www.freedom.com.au/product/13171983
- https://www.freedom.com.au/product/13228578
- https://www.freedom.com.au/product/13228606
- https://www.freedom.com.au/product/13172273
