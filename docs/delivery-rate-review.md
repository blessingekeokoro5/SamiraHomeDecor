# Delivery calculator and rates for approval

Status: prepared and tested; not published.

Profit is included in each product's selling price and multiplied by quantity: James Lane heavy items retain $2,000 per unit, medium items $1,500 per unit and small items $1,000 per unit at the member price. The regular price is higher. Fixed-price imported products are excluded from percentage discounts and rewards vouchers, preserving that margin. Purchased gift cards remain a payment method.

Delivery calculator:
- Shoppers can search 16,237 Australian suburb/postcode combinations.
- Choosing a suggestion fills suburb, postcode and state.
- Delivery updates when the postcode or cart quantities change.
- The payment server independently recalculates the charge from trusted product weights and prices.
- Each additional James Lane furniture unit adds its own delivery charge; there is no $300 cart cap.
- Remote and unsupported destinations require confirmed freight before payment.

## Proposed James Lane rates

Adelaide: heavy $200–$300 per unit by weight; medium $180–$200 per unit by weight. Other destinations below use proposed Samira location adjustments, not verified James Lane quotes.

Example: Ares TV Unit, 135 kg.

| Destination | 1 unit | 2 units |
| --- | ---: | ---: |
| Adelaide metro | $300 | $600 |
| Sydney / Central Coast / Newcastle metro | $300 | $600 |
| Melbourne metro | $300 | $600 |
| Brisbane / Gold Coast / Sunshine Coast metro | $300 | $600 |
| Canberra metro | $350 | $700 |
| Perth metro | $450 | $900 |
| Hobart metro | $500 | $1,000 |
| Darwin metro | $550 | $1,100 |

Regional destinations within 300 km of a listed hub add a further $100 plus $25 per started 100 km beyond 60 km, per bulky unit. Postcode coverage is conservatively determined by its most distant geocoded suburb. More distant, offshore and unrecognised destinations require a quote.

Small parcels: $9.95 handling + $2.50 per kg for actual quantity, plus the location adjustment once for the parcel order. Existing Luxo and Koala delivery rules are unchanged.

## Validation

29 automated checks passed across product imports, protected prices, quantity/location freight, payment parity, remote payment blocking and suburb/postcode matching. A rendered DOM checkout check additionally confirmed selecting Adelaide and Perth, changing Ares quantity from one to two, preserving the address during the redraw and blocking payment to a remote postcode.

Location source and tariff methodology: [location-data.md](location-data.md).
