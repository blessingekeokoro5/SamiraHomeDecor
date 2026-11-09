/* ============================================================
   SAMIRA HOME DECOR, Data layer
   Home décor + lifestyle retail: fragrance, health & wellness,
   home & décor, lifestyle essentials, and gifting.
   ============================================================ */

const SAMIRA = {
  brand: "Samira Home Decor",
  tagline: "Home Décor Store",
  email: "hello@samirahomedecor.com.au",
  location: "Australia",
  flag: "🇦🇺",
  est: "2026",
  currency: "$",
  // Site-wide sale campaign. Set percent:0 (or endsAt in the past) to turn OFF.
  // OFF (percent: 0). To run a sale: set percent + a future endsAt, update the
  // headline/label, then re-run `npm run catalogue` so the server-side discount
  // ceiling matches. Expired 10% "Winter Décor Refresh" retired 2026-09-20.
  campaign: { headline: "", label: "", percent: 0, endsAt: "" },
  formEmail: "hello@samirahomedecor.com.au",
  formEndpoint: "",
  formAccessKey: "f59d2f99-262b-46a0-987c-d94bcfe4b1bb",
  stripe: { publishableKey: "", checkoutEndpoint: "/.netlify/functions/create-checkout-session" },
  bookingsUrl: "",
  availability: { 0: null, 1: [9, 17], 2: [9, 17], 3: [9, 17], 4: [9, 17], 5: [9, 17], 6: [10, 16] },
  socials: {
    instagram: "https://www.instagram.com/sys_samira1",
    tiktok: "https://www.tiktok.com/@sys_samira",
    youtube: "https://www.youtube.com/@sys_samira",
    whatsapp: "https://wa.me/61451609398"
  }
};

/* The old name, kept as an alias so a page a visitor still has open
   from before the rebrand keeps working. Safe to delete in a few months. */
const DECOMUSE = SAMIRA;

/* ---- Mega-menu categories (retail) ---- */
const MEGA_MENU = [
  {
    key: "living", label: "Living Room",
    columns: [
      { title: "Shop", links: ["Shop All Living Room", "Ready to Ship", "New Arrivals", "Bestsellers", "On Sale"] },
      { title: "Furniture", links: ["Sofas & Seating", "Coffee & Side Tables", "TV Units", "Bookshelves"] },
      { title: "Soft Furnishings", links: ["Rugs", "Cushions", "Throws"] },
      { title: "Accents", links: ["Lighting", "Mirrors", "Vases"] },
      { title: "Dining", page: "dining.html", links: ["Shop All Dining", "Dining Chairs", "Bar & Counter Stools", "Dining Tables", "Console Tables"] }
    ]
  },
  {
    key: "home", label: "Home Décor",
    columns: [
      { title: "Shop", links: ["Shop All Home Décor", "Ready to Ship", "New Arrivals", "Bestsellers", "On Sale"] },
      { title: "Decorative", links: ["Vases", "Sculptures & Objects", "Ceramics"] },
      { title: "Ambience", links: ["Candles", "Reed Diffusers", "Faux Greenery"] },
      { title: "Finishing Touches", links: ["Mirrors", "Photo Frames", "Trays & Bowls"] }
    ]
  },
  {
    key: "bedroom", label: "Bedroom", mobileMax: 20,
    columns: [
      { title: "Shop", links: ["Shop All Bedroom", "New Arrivals", "Bestsellers", "On Sale"] },
      { title: "Bed Linen", links: ["Bed Linen", "Sheets", "Pillowcases", "Quilt Covers", "Comforters", "Coverlets"] },
      { title: "Bedding", links: ["Quilts", "Pillows", "Blankets", "Mattress Protectors", "Mattress Toppers"] },
      { title: "Furniture", links: ["Bedside Tables", "Dressers"] },
      { title: "Lighting & Décor", links: ["Lamps", "Mirrors"] }
    ]
  },
  {
    key: "bathroom", label: "Bathroom",
    columns: [
      { title: "Shop", links: ["Shop All Bathroom", "New Arrivals", "Bestsellers", "On Sale"] },
      { title: "Textiles", links: ["Towels", "Robes"] },
      { title: "Storage", links: ["Baskets", "Vanity Trays", "Caddies"] },
      { title: "Accessories", links: ["Soap Dispensers", "Tumblers", "Candles", "Diffusers"] }
    ]
  },
  {
    key: "office", label: "Office",
    columns: [
      { title: "Shop", links: ["Shop All Office", "New Arrivals", "Bestsellers", "On Sale"] },
      { title: "Furniture", links: ["Desks", "Office Chairs", "Shelving"] },
      { title: "Desktop", links: ["Desk Organisers", "Stationery", "Lamps"] },
      { title: "Décor", links: ["Candles"] }
    ]
  },
  {
    key: "outdoor", label: "Outdoor",
    columns: [
      { title: "Shop", links: ["Shop All Outdoor", "New Arrivals", "Bestsellers", "On Sale"] },
      { title: "Furniture", links: ["Outdoor Lounges", "Dining Sets", "Chairs"] },
      { title: "Garden", links: ["Faux Plants"] },
      { title: "Comfort", links: ["Outdoor Cushions", "Outdoor Rugs", "Throws"] }
    ]
  },
  {
    key: "kitchen", label: "Kitchenware",
    columns: [
      { title: "Shop", links: ["Shop All Kitchenware", "New Arrivals", "Bestsellers", "On Sale"] },
      { title: "Cook & Bake", links: ["Cookware", "Bakeware", "Utensils", "Chopping Boards"] },
      { title: "Dine", links: ["Dinnerware", "Glassware", "Serveware"] },
      { title: "Prep & Store", links: ["Storage & Canisters", "Kitchen Linen", "Coffee & Tea"] }
    ]
  },
  {
    key: "hampers", label: "Gifts & Packaging",
    columns: [
      { title: "Gift Hampers", links: ["Shop All Hampers", "Create My Own Hamper", "Corporate Gifting", "By Occasion", "Gift Cards"] },
      { title: "Pouches & Boxes", page: "packaging.html", links: ["Food & Vendor Pouches", "Gift Boxes", "Hamper Boxes", "Mailers & Cartons"] },
      { title: "Kits & Supplies", page: "packaging.html", links: ["Packaging Kits", "Ribbons & Tags", "Tissue & Filler", "Labels & Stickers"] },
      { title: "Bulk & Commercial", page: "packaging.html", links: ["Wholesale Packaging", "Custom Branded Packaging", "Corporate Gifting", "Request a Bulk Quote"] }
    ]
  },
  {
    key: "lifestyle", label: "Lifestyle",
    columns: [
      { title: "Shop", links: ["Shop All Lifestyle", "New Arrivals", "Bestsellers", "On Sale"] },
      { title: "Home Fragrances", links: ["Room Sprays", "Essential Oils", "Fragrance Gift Sets"] },
      { title: "Everyday", links: ["Textiles & Linen", "Stationery", "Travel Essentials"] },
      { title: "Self & Home", links: ["Gifts Under $100"] }
    ]
  }
];

/* ---- Products (AUD) ---- */
/* added: "YYYY-MM-DD" marks when a product went live. The homepage Décor Edit
   shows the newest pieces first, then a selection that changes every week. */
const PRODUCTS = [
  // ── Bathroom ──
  { id: "bt01", name: "Aurelia Marble & Gold Bathroom Set (5-Piece)", cat: "Bathroom", price: 350, memberPrice: 320, sku: "SH-10109", tag: "New", ph: "", img: "assets/products/bt01-5.webp",
    imgs: ["assets/products/bt01-5.webp", "assets/products/bt01.webp", "assets/products/bt01-2.webp", "assets/products/bt01-3.webp", "assets/products/bt01-4.webp"],
    colours: [{ name: "White", hex: "#ece7de" }, { name: "Emerald Green", hex: "#134a38" }, { name: "Black", hex: "#171512" }],
    desc: "Turn a daily routine into a five-star ritual. The Aurelia set brings hand-glazed marble ceramic and hand-painted gold veining to your basin, each piece finished with a gilded base that catches the light. A complete five-piece collection that makes even the smallest bathroom feel like a boutique hotel, choose classic white, deep emerald green or midnight black, all pooled with liquid-gold marbling.",
    features: [
      "Complete 5-piece set: soap/lotion dispenser, toothbrush holder, two tumblers & a soap dish",
      "Hand-glazed ceramic with hand-painted gold marble veining, no two pieces are exactly alike",
      "Gilded gold base trim and a smooth gold pump for a boutique-hotel finish",
      "Available in classic White, deep Emerald Green or Midnight Black to suit your palette",
      "A ready-made luxury refresh, and a beautiful housewarming or wedding gift"
    ],
    specs: { "Type": "Bathroom accessory set", "Pieces": "5", "Material": "Ceramic", "Finish": "Marble glaze with gold detailing" },
    boxContents: ["1 × soap / lotion dispenser", "1 × toothbrush holder", "2 × tumblers", "1 × soap dish"],
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive cleaners to protect the gold detailing." },

  { id: "bt02", name: "Dark Marble Bathroom Set (4-Piece)", cat: "Bathroom", room: "Bathroom", price: 1026, memberPrice: 933, sku: "SH-10115", tag: "New", ph: "", img: "assets/products/bt02-4.webp",
    imgs: ["assets/products/bt02-4.webp", "assets/products/bt02-2.webp", "assets/products/bt02-3.webp", "assets/products/bt02.webp", "assets/products/bt02-5.webp", "assets/products/bt02-6.webp", "assets/products/bt02-7.webp", "assets/products/bt02-8.webp"],
    colours: [{ name: "Emperador Dark", hex: "#4a3228" }],
    desc: "Cut from solid Emperador Dark marble, this is the set that makes a bathroom feel like a hotel suite. The stone is a deep espresso brown shot through with pale gold and cream veining, and because every block is quarried rather than moulded, no two pieces in your set will ever match exactly. Weighty in the hand, cool to the touch, and finished with a polished gold pump. Four pieces that sit beautifully together on a vanity, or apart across the tray by the bath, the dispenser at the basin.",
    features: [
      "Four pieces: soap dispenser, toothbrush holder, soap dish and vanity tray",
      "Solid natural Emperador Dark marble, not a printed or moulded look",
      "Unique veining in every piece, yours will not look like the photograph",
      "Polished gold pump with a smooth, quiet action",
      "Substantial weight that keeps each piece exactly where you put it",
      "Hand-finished, so slight variations in tone and size are part of the stone"
    ],
    specs: { "Type": "Bathroom accessory set", "Pieces": "4", "Material": "Natural Emperador Dark marble", "Finish": "Polished, with gold pump", "Colour": "Emperador Dark brown" },
    boxContents: ["1 × soap dispenser", "1 × toothbrush holder", "1 × soap dish", "1 × vanity tray"],
    care: "Wipe with a soft, damp cloth and dry straight away. Marble is porous, so keep it away from acidic cleaners, vinegar, citrus and bleach, which will dull and etch the surface. Stand bottles on the tray rather than directly on the stone to avoid rings." },













































  // ── Living Room ──







































































































































































































































































































  // ── Living Room, Office & lighting (final batch) ──
  { id: "bt47", added: "2026-11-04", dispatch: "2 to 3 business days", deliveryTime: "5 to 8 business days", variantImg: {"Smoke Grey|Set with Diffuser Ball":"assets/products/bt47.webp","Iridescent Clear|Set with Diffuser Ball":"assets/products/bt47-5.webp","Amber Gold|Set with Diffuser Ball":"assets/products/bt47-6.webp","Smoke Grey|Set with Soap Dish":"assets/products/bt47-7.webp","Iridescent Clear|Set with Soap Dish":"assets/products/bt47-8.webp","Amber Gold|Set with Soap Dish":"assets/products/bt47-9.webp"}, name: "Lumière Crystal Bathroom Vanity Set — 4 Piece", cat: "Bathroom", room: "Bathroom", price: 600, memberPrice: 550, sku: "SH-11324", tag: "New", ph: "", img: "assets/products/bt47.webp",
    imgs: ["assets/products/bt47.webp", "assets/products/bt47-2.webp", "assets/products/bt47-3.webp", "assets/products/bt47-4.webp", "assets/products/bt47-5.webp", "assets/products/bt47-6.webp", "assets/products/bt47-7.webp", "assets/products/bt47-8.webp", "assets/products/bt47-9.webp", "assets/products/bt47-10.webp", "assets/products/bt47-11.webp", "assets/products/bt47-12.webp"],
    sizes: [{ label: "Set with Diffuser Ball", price: 600 }, { label: "Set with Soap Dish", price: 600 }],
    colours: [{ name: "Smoke Grey", hex: "#4a4d52" }, { name: "Iridescent Clear", hex: "#dfe8ec" }, { name: "Amber Gold", hex: "#c8913a" }],
    desc: "Bring a boutique-hotel feel to your bathroom with the Lumière vanity set, cut from heavy, high-clarity crystal glass that catches the light from every angle. A bevelled crystal tray anchors a square lotion pump, a lidded cotton bud jar and your choice of a faceted diffuser ball or a slatted soap dish, keeping your basin tidy while looking like a styled display. Choose smoke grey for a moody, modern finish, iridescent clear for a soft rainbow shimmer, or amber gold for warmth and glamour. A beautiful upgrade for your own vanity and a gift that feels truly special.",
    features: [
      "Heavy, high-clarity crystal glass with polished bevelled edges",
      "Four coordinating pieces on a matching vanity tray",
      "Choose a faceted diffuser ball (add your own reeds and oil) or a soap dish with a removable draining grate",
      "Refillable lotion pump with a chrome finish, ideal for hand wash, lotion or body wash",
      "Lidded cotton bud jar keeps cotton buds, cotton pads or hair ties neat",
      "Three finishes: Smoke Grey, Iridescent Clear and Amber Gold",
      "Also suits a powder room, dressing table or guest bathroom"
    ],
    specs: { "Type": "Bathroom accessories set", "Material": "Crystal glass; metal pump and grate", "Pieces": "4", "Finish": "Smoke Grey / Iridescent Clear / Amber Gold", "Pump": "Refillable", "Location": "Vanity / benchtop" },
    dimensions: "Tray 32cm L x 12cm W x 1.5cm H | Lotion pump 7cm W x 7cm D x 16cm H | Cotton bud jar 5cm W x 5cm D x 10cm H | Diffuser ball 7.5cm diameter | Soap dish 12.5cm L x 9.5cm W x 2.5cm H", weight: "3.9 kg",
    boxContents: ["1 x crystal vanity tray", "1 x lotion pump bottle", "1 x lidded cotton bud jar", "1 x diffuser ball OR 1 x soap dish (depending on the set chosen)"],
    care: "Wipe clean with a soft damp cloth and dry with a lint-free cloth for a streak-free shine. Hand wash only; do not use abrasive cleaners or put in the dishwasher. Handle with care: crystal glass can chip if knocked." },
  { id: "bt48", added: "2026-11-04", dispatch: "2 to 3 business days", deliveryTime: "5 to 8 business days", variantImg: {"White":"assets/products/bt48.webp","Black":"assets/products/bt48-4.webp","Gold":"assets/products/bt48-5.webp"}, name: "Trio Wall-Mounted Shower Dispenser — 3 in 1", cat: "Bathroom", room: "Bathroom", price: 280, memberPrice: 250, sku: "SH-11325", tag: "New", ph: "", img: "assets/products/bt48-2.webp",
    imgs: ["assets/products/bt48-2.webp", "assets/products/bt48.webp", "assets/products/bt48-3.webp", "assets/products/bt48-4.webp", "assets/products/bt48-5.webp"],
    colours: [{ name: "White", hex: "#f2f2f0" }, { name: "Black", hex: "#1c1c1c" }, { name: "Gold", hex: "#c9a24a" }],
    desc: "Clear the clutter from your shower ledge with this three-chamber dispenser that keeps shampoo, conditioner and body wash neatly in one place. It mounts straight onto tiles, glass or smooth walls with a strong adhesive backing, so there's no drilling and no damage, which makes it ideal for rentals. Each chamber has its own easy-press button that releases just the right amount, and the tinted windows let you see when it's time for a refill. A tidy, hotel-style upgrade for family bathrooms, guest rooms and Airbnb stays.",
    features: [
      "Three separate chambers for shampoo, conditioner and body wash",
      "No-drill installation with strong adhesive backing, renter friendly",
      "Easy one-press pump buttons dispense a controlled amount",
      "Tinted chamber windows show liquid levels at a glance",
      "Flip-top lids for quick, mess-free refilling",
      "Durable, water-resistant ABS construction",
      "Suits showers, bathrooms, hotels, Airbnbs and guest rooms",
      "Available in White, Black and Gold"
    ],
    specs: { "Type": "Wall-mounted dispenser", "Material": "ABS plastic", "Chambers": "3", "Installation": "Adhesive, no drilling", "Location": "Shower / bathroom wall" },
    dimensions: "21cm W x 21.5cm H x 7cm D", weight: "0.6 kg",
    boxContents: ["1 x 3-chamber dispenser", "1 x adhesive mounting backing"],
    care: "Wipe with a soft damp cloth. Rinse chambers with warm water between refills. Install on a clean, dry, smooth surface and wait 24 hours before filling for the strongest hold." },

  // ── Living Room ──

















































































































































































































  // ── Living Room, Office & lighting (final batch) ──

























































































































































































































































  // ── Bedroom ──


















































































































































  // ── Bedroom ──














































































































  // ── Outdoor ──































  // ── Outdoor ──











































































  // ── Home Décor ──



























































































































































































































  { id: "hd01", name: "Aura Mist Ultrasonic Diffuser 160ml", cat: "Home Décor", price: 284, memberPrice: 254, sku: "SH-10101", tag: "New", ph: "", img: "assets/products/hd01.webp",
    imgs: ["assets/products/hd01.webp", "assets/products/hd01-2.webp"],
    desc: "A sculptural teardrop diffuser that turns fragrance into a moment. Whisper-quiet ultrasonic mist, soft ambient light and a 160ml reservoir bring calm, scent and a designer silhouette to any room." },
  { id: "hd09", name: "Flame-Effect Ultrasonic Humidifier & Diffuser", cat: "Home Décor", room: "Home Décor", price: 90.10, memberPrice: 85.75, sku: "SH-10111", tag: "New", ph: "", img: "assets/products/hd09.webp",
    imgs: ["assets/products/hd09.webp", "assets/products/hd09-2.webp", "assets/products/hd09-3.webp", "assets/products/hd09-4.webp", "assets/products/hd09-5.webp"],
    colours: [{ name: "White", hex: "#f2efe9" }, { name: "Black", hex: "#1c1c1c" }],
    desc: "Set the mood with the gentle flicker of a flame, without the flame. A 3-in-1 essential-oil diffuser, air humidifier and flame-effect night light in one 200ml unit, it projects a remarkably realistic dancing flame while releasing a fine, whisper-quiet mist (as low as 40 decibels) that softens dry air and carries your favourite oils through the room. A calming centrepiece for the living room, bedroom, office, yoga studio or gym, with 1/3/5-hour timers and an auto shut-off when the water runs low. Add a few drops of oil, dim the lights, and unwind.",
    features: [
      "3-in-1: essential-oil diffuser, air humidifier & flame-effect night light in one 200ml unit",
      "Add a few drops of your favourite oil to relieve fatigue and relax, while improving air quality",
      "Timer with 3 modes, 1 / 3 / 5 hours, set the spray and light mode to suit you",
      "Auto shut-off when there's no more water, making it secure and reliable",
      "Ultra-quiet noise-reduction technology, as low as 40 decibels, a silent partner for work, study or rest",
      "Available in White or Black"
    ],
    specs: { "Type": "3-in-1 diffuser / humidifier / night light", "Capacity": "200ml", "Timer": "1 / 3 / 5 hours", "Noise level": "As low as 40 dB", "Feature": "Flame-effect light" },
    boxContents: ["1 × Oil Diffuser", "1 × English manual"],
    care: "Do not open the cap while in use, to avoid water leakage. Fill with water below the maximum line, overfilling can let water re-enter the main unit and damage the circuit board. Keep water away from the heat-dissipation vents (they are not waterproof). Empty and wipe dry after use." },
  { id: "hd10", added: "2026-11-04", dispatch: "2 to 3 business days", deliveryTime: "5 to 8 business days", variantImg: {"Brown":"assets/products/hd10.webp","Rust":"assets/products/hd10-2.webp","Camel":"assets/products/hd10-3.webp","Light Brown":"assets/products/hd10-4.webp","Beige":"assets/products/hd10-5.webp","Grey":"assets/products/hd10-6.webp"}, name: "Ondine Abstract Curve Cushion Covers — Set of 2 (45cm)", cat: "Home Décor", room: "Home Décor", price: 280, memberPrice: 250, sku: "SH-11326", tag: "New", ph: "", img: "assets/products/hd10.webp",
    imgs: ["assets/products/hd10.webp", "assets/products/hd10-2.webp", "assets/products/hd10-3.webp", "assets/products/hd10-4.webp", "assets/products/hd10-5.webp", "assets/products/hd10-6.webp", "assets/products/hd10-7.webp", "assets/products/hd10-8.webp"],
    colours: [{ name: "Rust", hex: "#a4441f" }, { name: "Brown", hex: "#6b4423" }, { name: "Camel", hex: "#b08a5a" }, { name: "Light Brown", hex: "#a08870" }, { name: "Beige", hex: "#d9c9a3" }, { name: "Grey", hex: "#6e6e6e" }],
    desc: "Add instant texture and warmth to your sofa or bed with this pair of 45cm cushion covers. Soft, raised loops are tufted into flowing abstract curves across a creamy textured base, giving each cover a hand-crafted, wabi-sabi feel that looks beautiful up close. Choose from six earthy tones, from bold rust and rich brown to soft beige and calming grey, and pair them with neutrals for an effortless, layered look. Sold as covers only, so you can refresh your space season after season using inserts you already own.",
    features: [
      "Set of 2 matching cushion covers",
      "Raised tufted-loop design in flowing abstract curves",
      "Soft, textured cream base fabric with a natural wabi-sabi look",
      "Concealed zip for easy insert changes and washing",
      "Fits a standard 45cm x 45cm cushion insert",
      "Six colours: Rust, Brown, Camel, Light Brown, Beige and Grey",
      "Suits sofas, beds, armchairs and reading nooks"
    ],
    specs: { "Type": "Cushion cover", "Pack size": "2 covers", "Material": "Woven textured fabric with tufted loop detail", "Closure": "Hidden zip", "Insert included": "No", "Shape": "Square" },
    dimensions: "45cm x 45cm (each cover)", weight: "0.5 kg",
    boxContents: ["2 x cushion covers (inserts not included)"],
    care: "Turn inside out and hand wash or gentle machine wash cold in a laundry bag. Do not bleach or tumble dry; dry flat in the shade. Trim any loose loops with scissors rather than pulling them." },
  { id: "hd08", name: "Alban Bouclé Pillow Cover", cat: "Home Décor", room: "Living Room", price: 59, memberPrice: 55, sku: "SH-10110", tag: "New", ph: "", img: "assets/products/hd08.webp?v=2",
    imgs: ["assets/products/hd08.webp?v=2", "assets/products/hd08-2.webp?v=2", "assets/products/hd08-3.webp?v=2", "assets/products/hd08-4.webp?v=2", "assets/products/hd08-5.webp?v=2", "assets/products/hd08-6.webp?v=2", "assets/products/hd08-7.webp?v=2", "assets/products/hd08-8.webp?v=2", "assets/products/hd08-9.webp?v=2"],
    colours: [{ name: "Red", hex: "#7c1c26" }, { name: "Pink", hex: "#e9c3cb" }, { name: "White", hex: "#f2efe9" }, { name: "Brown", hex: "#5b4636" }, { name: "Blue", hex: "#9fb2c4" }, { name: "Khaki", hex: "#b3a37a" }, { name: "Green", hex: "#b9c7a8" }],
    sizes: ["30cm x 50cm", "45cm x 45cm", "50cm x 50cm"],
    desc: "Wrap your space in texture. The Alban cushion cover is crafted from a deep, curly bouclé with a soft, teddy-like pile that instantly adds warmth and understated luxury to sofas, beds, benches and reading nooks. In a considered palette of seven rich tones, from berry red to sage, soft blush and espresso, it layers effortlessly with linen, wool and neutrals to refresh a room in seconds. A concealed zip keeps the finish clean and makes seasonal swaps easy, and because it's sold as a cover only (insert not included), you can restyle again and again without the bulk.",
    features: [
      "Plush curly bouclé with a soft, teddy-like pile",
      "Hidden zip closure for a clean finish and easy removal",
      "Layers effortlessly with linen, knits and neutral tones",
      "Seven colourways: Red, Pink, White, Brown, Blue, Khaki & Green",
      "Cover only, cushion insert not included"
    ],
    specs: { "Type": "Cushion cover", "Material": "Bouclé", "Closure": "Hidden zip", "Insert included": "No" },
    care: "Spot clean, or gentle cold machine wash on a delicate cycle. Do not tumble dry." },
  { id: "hd02", name: "Fleur Sculptural Glass Vase", cat: "Home Décor", price: 325, memberPrice: 305, sku: "SH-10102", ph: "", img: "assets/products/hd02.webp",
    imgs: ["assets/products/hd02.webp", "assets/products/hd02-2.webp", "assets/products/hd02-3.webp", "assets/products/hd02-4.webp"],
    desc: "The Fleur glass vase brings sculptural charm to any room with a wavy silhouette that resembles an open flower. This visual statement piece is a work of art and enhances any floral arrangement you choose. Made from glass and designed for tabletop display, it suits both real and everlasting flowers. Place it on a dining table, bedside table, coffee table or kitchen bench to create an effortless centrepiece, or let it stand alone to add sculptural interest to a living space and brighten your home.",
    features: [
      "Displays a wavy silhouette that resembles an open flower, making it a visual statement piece",
      "A true work of art that enhances any floral arrangement of your choosing",
      "Great for presenting both real & everlasting flowers, for a stunning display around the home",
      "A classic addition to any dining table, bedside table, coffee table, kitchen bench & more"
    ],
    specs: { "Type": "Vase", "Location": "Tabletop", "Material": "Glass", "Primary Colour": "Blue" },
    dimensions: "26cm H x 23cm W x 23cm D", weight: "1.97 kg", boxContents: "1 x vase", care: "Wipe clean with a dry cloth" },
  { id: "hd03", name: "Ceramic Electric Oil Vaporiser", cat: "Home Décor", price: 98.90, memberPrice: 78.95, sku: "SH-10103", tag: "New", ph: "", img: "assets/products/hd03.webp",
    imgs: ["assets/products/hd03.webp", "assets/products/hd03-2.webp", "assets/products/hd03-3.webp", "assets/products/hd03-4.webp", "assets/products/hd03-5.webp"],
    colours: [{ name: "Black", hex: "#1c1c1c" }, { name: "Natural", hex: "#cbb291" }, { name: "White", hex: "#f2efe9" }],
    desc: "Bring a subtle, calming fragrance to any room with this ceramic electric oil vaporiser that gently warms essential oils without harming them. Designed to run safely for long periods, it emits heat only from the recessed bowl, so the outer surface stays cool to the touch. No water is needed, making it a drip-free option ideal for aromatherapy at night or when hosting friends, creating a calm, fragrant atmosphere in living areas, bedrooms and for quiet evenings.",
    features: [
      "Unique design gently vaporises essential oils without causing any harm to them",
      "Designed to operate safely when unattended for prolonged periods",
      "Only the recessed area of the vaporiser emits heat",
      "Cool-to-touch and does not overheat",
      "No water required",
      "Power supply: 240V"
    ],
    specs: { "Type": "Vaporiser", "Material": "Ceramic", "Aromatherapy": "Yes", "Dripless": "Yes" },
    dimensions: "4cm H x 6.7cm W x 5.5cm D", weight: "0.55 kg",
    boxContents: ["1 × vaporiser", "1 × user manual"], warranty: "1 Year",
    care: "Use a damp cloth to wipe the vaporiser bowl after use.",
    about: "Established in 1992 and proudly 100% Australian owned, the maker is a market leader in the aromatherapy and wellness space, specialising in safe, clean and efficient essential oil mist diffusers and electric vaporisers." },
  { id: "hd04", name: "Diamond Velvet Throw Pillow Cover", cat: "Home Décor", price: 15.99, sku: "SH-10104", tag: "New", ph: "", img: "assets/products/hd04.webp",
    imgs: ["assets/products/hd04.webp", "assets/products/hd04-2.webp", "assets/products/hd04-3.webp", "assets/products/hd04-4.webp", "assets/products/hd04-5.webp", "assets/products/hd04-6.webp", "assets/products/hd04-7.webp"],
    colours: [{ name: "Beige", hex: "#d9c7a8" }, { name: "Cerulean", hex: "#2a7fba" }, { name: "Forest Green", hex: "#33513a" }, { name: "Grey", hex: "#9b9b9b" }, { name: "Navy", hex: "#232f4d" }, { name: "Orange", hex: "#d5843a" }, { name: "Rosy Brown", hex: "#bc8f8f" }, { name: "Turquoise", hex: "#3fb8ad" }],
    sizes: [{ label: "30 × 50 cm", price: 15.99 }, { label: "45 × 45 cm", price: 18.99 }, { label: "50 × 50 cm", price: 21.99 }],
    desc: "Add instant warmth and texture to any sofa, bed or reading nook with this diamond-quilted velvet cushion cover. Irresistibly soft with a subtle sheen and a plush, tactile finish, it layers beautifully with linen, knits and neutrals, and comes in a curated palette of eight rich colours to suit any space. Choose your size and shade, and style your own way.",
    features: [
      "Plush diamond-quilted velvet with a soft, subtle sheen",
      "Available in 8 curated colours and 3 versatile sizes",
      "Hidden zip closure for a clean, seamless finish",
      "Layers beautifully on sofas, beds and armchairs",
      "Cushion cover only, insert not included"
    ],
    specs: { "Type": "Cushion cover", "Material": "Velvet", "Style": "Diamond quilted", "Closure": "Hidden zip" },
    care: "Machine wash cold on a gentle cycle with like colours; do not tumble dry; cool iron if needed." },

  // ── Lifestyle ──
  { id: "l07", name: "Soft Cotton Face Washer Towels, 10 Pack (450GSM)", cat: "Lifestyle", price: 28.99, memberPrice: 25.99, sku: "SH-10105", tag: "New", ph: "", img: "assets/products/l07.webp",
    imgs: ["assets/products/l07.webp", "assets/products/l07-2.webp", "assets/products/l07-3.webp", "assets/products/l07-4.webp", "assets/products/l07-5.webp", "assets/products/l07-6.webp"],
    colours: [{ name: "Teal", hex: "#2a8d8d" }, { name: "Navy", hex: "#1f2a44" }, { name: "Blue Suede", hex: "#6a7fa0" }, { name: "Pea Pod", hex: "#a3b18a" }, { name: "Coral", hex: "#e0897a" }, { name: "Burgundy", hex: "#7b2d3a" }, { name: "Chocolate Brown", hex: "#4a3428" }, { name: "Charcoal", hex: "#4a4a4f" }, { name: "Linen", hex: "#d9cbb2" }, { name: "Silver", hex: "#c7c7c7" }, { name: "White", hex: "#f2f0ea" }],
    desc: "Wrap your everyday routine in softness with this set of 10 premium 450GSM cotton face washers. Beautifully plush yet quick-drying, with a satin-finish border and double-stitched hems that hold their shape wash after wash. Gentle on skin and endlessly useful for face, hands and travel, in a rich palette of eleven colours to suit any bathroom.",
    features: [
      "Set of 10 soft, absorbent 450GSM cotton face washers",
      "Satin-process border for an elegant, simple finish",
      "Double-stitched hemmed edges for lasting durability",
      "Quick-drying and gentle on skin, ideal for face, hands & travel",
      "Available in 11 versatile colours"
    ],
    specs: { "Material": "100% Cotton", "Weight": "450 GSM", "Pack size": "10 pieces", "Type": "Face washer / flannel" },
    care: "Machine wash cold and separately before first use. Gentle cycle; wash dark colours separately. Do not bleach. Tumble dry low. Do not iron. Do not dry clean." },

  { id: "hd05", name: "Oval Marble-Effect Coffee Table", cat: "Furniture", room: "Living Room", price: 215.37, memberPrice: 199.99, sku: "SH-10106", tag: "New", ph: "", img: "assets/products/hd05.webp",
    imgs: ["assets/products/hd05.webp", "assets/products/hd05-2.webp", "assets/products/hd05-3.webp", "assets/products/hd05-4.webp", "assets/products/hd05-5.webp", "assets/products/hd05-6.webp"],
    lead: "8 to 10 weeks",
    desc: "A sculptural centrepiece for the living room, this oval coffee table pairs a smooth marble-effect top with a warm, angular timber-look base. The soft oval silhouette keeps the room feeling open, while the crossed legs add architectural interest, a timeless, mid-century-inspired piece that anchors a lounge with quiet luxury. Style it with a stack of design books, a low vase or a scented candle to complete the look.",
    features: [
      "Elegant oval top with a natural marble-effect finish",
      "Warm timber-look base with a sculptural crossed-leg design",
      "Smooth, wipe-clean surface made for everyday living",
      "Mid-century-inspired silhouette that suits any lounge",
      "A statement centrepiece to pair with sofas, rugs & accent chairs"
    ],
    specs: { "Type": "Coffee Table", "Shape": "Oval", "Tabletop": "Marble-effect", "Base": "Timber-look", "Primary Colour": "White & Walnut", "Room": "Living / Indoor" },
    dims: { w: 80, d: 50, h: 45, unit: "cm", img: "assets/products/hd05-2.webp", printed: true },
    spin360: ["assets/products/hd05.webp"],
    care: "Wipe clean with a soft, dry or slightly damp cloth. Avoid harsh chemicals and abrasive cleaners. Use coasters to protect the surface from heat and moisture." },

  { id: "hd06", name: "Marble-Look Glass Table Set, 2 Piece (80cm)", cat: "Furniture", room: "Living Room", price: 298.37, memberPrice: 268.55, sku: "SH-10107", tag: "New", ph: "", img: "assets/products/hd06.webp",
    imgs: ["assets/products/hd06.webp", "assets/products/hd06-3.webp", "assets/products/hd06-4.webp", "assets/products/hd06-5.webp", "assets/products/hd06-6.webp", "assets/products/hd06-7.webp", "assets/products/hd06-8.webp", "assets/products/hd06-9.webp", "assets/products/hd06-10.webp"],
    lead: "8 to 10 weeks",
    desc: "A refined two-piece table set that brings a soft, luxe finish to any living space. Each table is topped with marble-look tempered glass, tough enough for everyday use yet elegant enough to feel like a designer piece. Nest them together for a compact footprint, or set them apart as a coffee table and matching side table. With clean lines and neutral marble tones, they layer effortlessly with sofas, rugs and accent chairs, an easy way to elevate a lounge, bedroom or reading corner.",
    features: [
      "Two-piece set, use nested together or apart as coffee & side tables",
      "Marble-look tempered glass tops, toughened for everyday durability",
      "Neutral marble tones that suit any palette and style",
      "Slim, contemporary frame with a light, airy footprint",
      "Wipe-clean glass surface with a polished, high-end finish"
    ],
    specs: { "Type": "Coffee & Side Table Set", "Pieces": "2", "Tabletop": "Marble-look tempered glass", "Larger table width": "80cm", "Style": "Contemporary", "Room": "Living / Indoor" },
    dims: { w: 80, d: 80, h: 45, unit: "cm", img: "assets/products/hd06-4.webp", printed: true, note: "Larger table shown (80 cm ⌀ × 45 cm high); smaller nesting table is 60 cm ⌀ × 38 cm high." },
    spin360: ["assets/products/hd06-4.webp"],
    care: "Clean the glass with a soft, damp cloth and a mild glass cleaner; avoid abrasive or harsh chemicals. Lift rather than drag when moving, and use coasters to protect from heat and moisture." },

  { id: "hd07", name: "Modern Coffee Table with Storage Drawer & Open Shelf", cat: "Furniture", room: "Living Room", price: 255.09, memberPrice: 235.55, sku: "SH-10108", tag: "New", ph: "", img: "assets/products/hd07.webp",
    imgs: ["assets/products/hd07.webp", "assets/products/hd07-2.webp", "assets/products/hd07-3.webp", "assets/products/hd07-4.webp", "assets/products/hd07-5.webp", "assets/products/hd07-6.webp", "assets/products/hd07-7.webp", "assets/products/hd07-8.webp"],
    lead: "8 to 10 weeks",
    desc: "Style and storage in one considered piece. This modern coffee table pairs a sleek marble-look top with a smart two-tone body, a soft-close drawer keeps remotes, chargers and clutter neatly out of sight, while the open shelf is ideal for books, baskets or a styling tray. Raised on slender metal legs, it feels light and contemporary, the perfect centrepiece for a living room that likes to stay tidy and effortlessly put-together.",
    features: [
      "Marble-look tabletop with a polished, contemporary finish",
      "Handy storage drawer to hide remotes, chargers & clutter",
      "Open display shelf for books, baskets or a styling tray",
      "Slim metal legs for a light, modern silhouette",
      "A functional statement piece for any living room"
    ],
    specs: { "Type": "Coffee Table", "Shape": "Rectangular", "Tabletop": "Marble-look", "Storage": "Drawer + open shelf", "Legs": "Metal", "Room": "Living / Indoor" },
    dims: { w: 100, d: 50, h: 45, unit: "cm", img: "assets/products/hd07-2.webp" },
    spin360: ["assets/products/hd07-2.webp"],
    care: "Wipe clean with a soft, damp cloth; avoid abrasive cleaners and excess water. Use coasters to protect the surface from heat and moisture." },

  { id: "of01", name: "Ergolux Plus Ergonomic Mesh Office Chair with Footrest (Grey)", brand: "Ergolux", cat: "Office", room: "Office", price: 250.45, memberPrice: 235.45, sku: "SH-10112", tag: "New", ph: "", img: "assets/products/of01.webp",
    imgs: ["assets/products/of01.webp", "assets/products/of01-2.webp", "assets/products/of01-3.webp", "assets/products/of01-4.webp", "assets/products/of01-5.webp", "assets/products/of01-6.webp", "assets/products/of01-7.webp", "assets/products/of01-8.webp", "assets/products/of01-9.webp"],
    lead: "8 to 10 weeks",
    colours: [{ name: "Grey", hex: "#9b9b9b" }],
    sizes: [{ label: "Core", price: 250.45 }, { label: "Plus", price: 271.45 }, { label: "Elite (Mesh)", price: 617.95 }, { label: "Elite (Foam)", price: 691.45 }],
    desc: "Work, study or game in all-day comfort with the Ergolux Plus ergonomic mesh office chair. The breathable mesh back keeps you cool through the longest sessions, while adaptive lumbar support, an adjustable headrest and 3D armrests shape the chair around you. Recline up to 140°, put your feet up on the retractable footrest, and glide silently on quiet castor wheels. Choose the model that suits you, from the everyday Core to the fully loaded Elite, each finished in a cool, contemporary grey.",
    features: [
      "Breathable mesh back that stays cool through long sittings",
      "Adaptive lumbar support and an adjustable headrest",
      "3D adjustable armrests plus adjustable seat height & depth",
      "Reclines up to 140° (90° / 110° / 140°) to shift your posture",
      "Retractable footrest to lean back and put your feet up",
      "Quiet castor wheels and a polished chrome base",
      "Four models to choose from: Core, Plus, Elite (Mesh) & Elite (Foam)"
    ],
    specs: { "Type": "Ergonomic office chair", "Back": "Breathable mesh", "Armrests": "3D adjustable", "Recline": "Up to 140°", "Footrest": "Retractable", "Base": "Chrome with castor wheels", "Colour": "Grey" },
    care: "Wipe the mesh and frame with a soft, dry or lightly damp cloth. Avoid harsh chemicals. Periodically check and tighten fittings, and keep the castors clear of debris for smooth rolling." },

  { id: "pk01", name: "Food-Vendor Stand-Up Pouches, Resealable Zipper (10-Pack)", cat: "Packaging", room: "Packaging", price: 12.95, memberPrice: 11.65, sku: "SH-10113", tag: "New", ph: "", img: "assets/products/foodpouch-1.webp",
    imgs: ["assets/products/foodpouch-1.webp", "assets/products/foodpouch-2.webp", "assets/products/foodpouch-3.webp"],
    sizes: [{ label: "100 × 150 + 35 mm · 10-pack", price: 12.95 }, { label: "120 × 170 + 35 mm · 10-pack", price: 15.95 }],
    desc: "Food-safe, resealable stand-up pouches that keep your product fresh and looking retail-ready, ideal for coffee, granola, nuts, dried fruit, spices, lollies, protein and pet treats. The multi-layer PET + PA + PE structure blocks moisture and odour, while the zipper top opens and reseals again and again. Made with recycled materials and finished with vibrant flexo printing. Buy retail packs here, or order wholesale in bulk with your own logo and artwork, chat with us live for the rate card, samples or custom branding.",
    features: [
      "Resealable zipper top keeps food fresh between uses",
      "Food-grade multi-layer PET + PA + PE barrier",
      "Stands upright on the shelf for great presentation",
      "Two sizes: 100×150+35mm and 120×170+35mm",
      "Two thicknesses available: 0.1 mm and 0.3 mm",
      "Made with recycled materials",
      "Custom logo, artwork & packaging available (min. order 2 pcs), wholesale/bulk pricing on request"
    ],
    specs: { "Material structure": "PET + PA + PE", "Sealing & handle": "Resealable zipper top", "Bag type": "Stand-up pouch", "Feature": "Recycled materials", "Industrial use": "Food-grade", "Surface handling": "Flexo printing", "Thickness": "0.1 mm / 0.3 mm" },
    care: "Store in a cool, dry place out of direct sunlight. For food use, fill with dry or sealed goods and press the zipper fully closed to keep contents fresh." },
  { id: "bd01", name: "Amara Upholstered Bed Frame with 3 Drawers, Oat White", cat: "Bedroom", room: "Bedroom", price: 1450, memberPrice: 1400, sku: "SH-10114", tag: "New", ph: "", img: "assets/products/bd01.webp",
    imgs: ["assets/products/bd01.webp", "assets/products/bd01-2.webp", "assets/products/bd01-3.webp", "assets/products/bd01-4.webp", "assets/products/bd01-5.webp", "assets/products/bd01-6.webp"],
    lead: "8 to 10 weeks",
    dims: { w: 286.6, d: 219, h: 141.2, unit: "cm", img: "assets/products/bd01-3.webp", note: "King shown. Queen is the same height and depth with a narrower bedhead, see the size guide images." },
    colours: [{ name: "Oat White", hex: "#e6ded0" }],
    sizes: [{ label: "Queen", price: 1450 }, { label: "King", price: 1560 }],
    desc: "A bed that anchors the whole room. The Amara's bedhead runs extra wide and stands tall, softly padded and panelled with angled stitching that catches the light differently through the day, so the wall behind your bed stops being an afterthought. It is upholstered in a warm oat white that reads cream rather than grey, and sits on a sturdy slatted platform base, so your mattress needs no box spring underneath. Three deep drawers roll out on castors for spare linen, winter blankets and everything a bedroom quietly accumulates. Wide enough that bedside tables tuck neatly against either side, which is exactly how it is meant to be styled.",
    features: [
      "Extra-wide, extra-tall padded bedhead with angled panel stitching",
      "Three spacious under-bed drawers on castors, two at the sides and one at the foot",
      "Slatted LVL timber platform base, no box spring needed",
      "Rubberwood legs with a powder-coated iron centre rail and support feet",
      "Holds up to 200 kg",
      "Available in Queen and King",
      "Flat-packed for home assembly, two people recommended",
      "Mattress and bedside tables are not included"
    ],
    specs: { "Type": "Platform bed with storage", "Upholstery": "100% polyester over foam padding", "Frame": "MDF & particleboard", "Legs": "Rubberwood", "Slats": "LVL timber", "Centre rail": "Powder-coated iron", "Drawers": "3, on castors", "Side drawer (internal)": "19cm H x 80cm W x 50cm D", "Footboard drawer (King)": "19.8cm H x 166.1cm W x 53cm D", "Maximum weight capacity": "200 kg", "Product weight": "88 kg (Queen) / 100 kg (King)", "Mattress": "Not included", "Colour": "Oat White", "Style": "Traditional / Luxe" },
    dimensions: "Queen: 141.2cm H x 259cm W x 219cm D \u00b7 King: 141.2cm H x 286.6cm W x 219cm D \u00b7 Bedhead depth 9cm",
    weight: "88 kg",
    boxContents: ["1 \u00d7 bed", "1 \u00d7 set of assembly parts", "1 \u00d7 assembly manual"],
    warranty: "1 Year",
    guide: "assets/guides/bd01-assembly-guide.pdf",
    care: "Wipe clean with a dry cloth. Use floor protection on hard surfaces, such as a non-slip rug or felt feet protectors, and check periodically that the fixings are tight and the support legs sit firmly on the floor." },

  // ── Kitchenware ──
  { id: "kw01", name: "KitchenAid Artisan Plus Stand Mixer 4.7L, Feather Pink", cat: "Kitchenware", room: "Kitchenware", price: 1199, memberPrice: 1099, sku: "SH-11002", tag: "New", ph: "", img: "assets/products/kw01-1.webp",
    imgs: ["assets/products/kw01-1.webp", "assets/products/kw01-2.webp", "assets/products/kw01-3.webp", "assets/products/kw01-4.webp", "assets/products/kw01-5.webp"],
    desc: "The mixer people photograph as much as they use. Full metal construction, a 4.7 litre stainless bowl and planetary mixing that works the whole bowl rather than one side of it, so a cake batter comes together evenly and a bread dough is actually kneaded. Eleven speeds, including a half-fold speed for folding egg whites or chocolate through without knocking the air out, and a bowl light that comes on by itself when the head is lowered. The tilt head lifts clear to add flour or swap the beater. In Feather Pink, which is the reason most people choose this one over the stainless.",
    features: [
      "4.7L stainless steel bowl, enough for medium to large batches",
      "11 speeds including a half-fold speed for delicate mixing",
      "Integrated bowl light switches on when the head is lowered",
      "Full metal build with planetary mixing action",
      "Tilt-head design for easy access to the bowl",
      "Comes with flat beater, dough hook, wire whisk and pouring shield",
      "Stainless steel accessories are dishwasher safe"
    ],
    specs: { "Brand": "KitchenAid", "Model": "5KSM50PKVAFT", "Type": "Tilt-head stand mixer", "Bowl capacity": "4.7 L", "Motor": "325W", "Speeds": "11", "Colour": "Feather Pink", "Weight": "9.89 kg" },
    dims: { w: 22.2, d: 35.6, h: 35.3, unit: "cm", printed: true },
    boxContents: ["1 \u00d7 stand mixer", "1 \u00d7 4.7L stainless steel bowl", "1 \u00d7 flat beater", "1 \u00d7 dough hook", "1 \u00d7 wire whisk", "1 \u00d7 pouring shield"],
    warranty: "5 year manufacturer's warranty",
    care: "Unplug before cleaning and wipe the body with a warm, damp cloth, never submerge it. The bowl, flat beater, dough hook and pouring shield are dishwasher safe; the wire whisk is best washed by hand and dried straight away." },




  { id: "kw05", name: "Smeg 50s Style Two-Slice Toaster, Pastel Blue", cat: "Kitchenware", room: "Kitchenware", price: 387, memberPrice: 358, sku: "SH-11006", tag: "New", ph: "", img: "assets/products/kw05-1.webp",
    imgs: ["assets/products/kw05-1.webp", "assets/products/kw05-2.webp", "assets/products/kw05-3.webp", "assets/products/kw05-4.webp", "assets/products/kw05-5.webp"],
    desc: "A toaster that earns its place on the bench. Takes two slices, with browning you set rather than guess at. Enamel coated stainless steel body. It also has automatic centring racks, automatic pop up and anti-slip feet. Finished in Pastel Blue.",
    features: [
      "2 Slices capacity",
      "950W motor",
      "3: Reheat, Defrost, Bagel programs",
      "6 Browning levels functions",
      "Automatic centring racks",
      "Automatic pop up",
      "Anti-slip feet"
    ],
    specs: { "Brand": "Smeg", "Model": "TSF01PBAU", "Type": "2 Slice Toaster", "Capacity": "2 Slices", "Power": "950W", "Materials": "Enamel coated stainless steel body, Stainless steel ball lever knob, Backlit chrome knob, Polished stainless steel crumb tray", "Colour": "Pastel Blue", "Weight": "2.4 kg" },
    dims: { w: 31.0, d: 19.5, h: 19.8, unit: "cm", printed: true },
    warranty: "2 year manufacturer's warranty",
    care: "Unplug and cool before cleaning. Slide out the crumb tray and empty it regularly, and wipe the body with a soft, damp cloth. Never put a knife or fork into the slots." },

  { id: "kw06", name: "Smeg 50s Style Two-Slice Toaster, Cream", cat: "Kitchenware", room: "Kitchenware", price: 387, memberPrice: 358, sku: "SH-11007", tag: "New", ph: "", img: "assets/products/kw06-1.webp",
    imgs: ["assets/products/kw06-1.webp", "assets/products/kw06-2.webp", "assets/products/kw06-3.webp", "assets/products/kw06-4.webp", "assets/products/kw06-5.webp"],
    desc: "A toaster that earns its place on the bench. Takes two slices, with browning you set rather than guess at. Enamel coated stainless steel body. It also has automatic centring racks, automatic pop up and anti-slip feet. In Cream, which is half the reason to buy it.",
    features: [
      "2 Slices capacity",
      "950W motor",
      "3: Reheat, Defrost, Bagel programs",
      "6 Browning levels functions",
      "Automatic centring racks",
      "Automatic pop up",
      "Anti-slip feet"
    ],
    specs: { "Brand": "Smeg", "Model": "TSF01CRAU", "Type": "2 Slice Toaster", "Capacity": "2 Slices", "Power": "950W", "Materials": "Enamel coated stainless steel body, Stainless steel ball lever knob, Backlit chrome knob, Polished stainless steel crumb tray", "Colour": "Cream", "Weight": "2.4 kg" },
    dims: { w: 31.0, d: 19.5, h: 19.8, unit: "cm", printed: true },
    warranty: "2 year manufacturer's warranty",
    care: "Unplug and cool before cleaning. Slide out the crumb tray and empty it regularly, and wipe the body with a soft, damp cloth. Never put a knife or fork into the slots." },

  { id: "kw07", name: "Smeg 50s Style Two-Slice Toaster, Pink", cat: "Kitchenware", room: "Kitchenware", price: 387, memberPrice: 358, sku: "SH-11008", tag: "New", ph: "", img: "assets/products/kw07-1.webp",
    imgs: ["assets/products/kw07-1.webp", "assets/products/kw07-2.webp", "assets/products/kw07-3.webp", "assets/products/kw07-4.webp", "assets/products/kw07-5.webp"],
    desc: "A toaster that earns its place on the bench. Takes two slices, with browning you set rather than guess at. Enamel coated stainless steel body. Details worth having: automatic centring racks, automatic pop up and anti-slip feet. In Pink, chosen to be seen, not stored.",
    features: [
      "2 Slices capacity",
      "950W motor",
      "3: Reheat, Defrost, Bagel programs",
      "6 Browning levels functions",
      "Automatic centring racks",
      "Automatic pop up",
      "Anti-slip feet"
    ],
    specs: { "Brand": "Smeg", "Model": "TSF01PKAU", "Type": "2 Slice Toaster", "Capacity": "2 Slices", "Power": "950W", "Materials": "Enamel coated stainless steel body, Stainless steel ball lever knob, Backlit chrome knob, Polished stainless steel crumb tray", "Colour": "Pink", "Weight": "2.4 kg" },
    dims: { w: 31.0, d: 19.5, h: 19.8, unit: "cm", printed: true },
    warranty: "2 year manufacturer's warranty",
    care: "Unplug and cool before cleaning. Slide out the crumb tray and empty it regularly, and wipe the body with a soft, damp cloth. Never put a knife or fork into the slots." },

  { id: "kw08", name: "Smeg 50s Style Stand Mixer 4.8L, Pink", cat: "Kitchenware", room: "Kitchenware", price: 939, memberPrice: 855, sku: "SH-11009", tag: "New", ph: "", img: "assets/products/kw08-1.webp",
    imgs: ["assets/products/kw08-1.webp", "assets/products/kw08-2.webp", "assets/products/kw08-3.webp", "assets/products/kw08-4.webp", "assets/products/kw08-5.webp"],
    desc: "The mixer people photograph as much as they use. A 4.8L bowl handles a double batch of biscuits or a full loaf of bread dough without climbing the sides. Die-cast aluminium body. It also has planetary mixing action, direct drive motor and 10 year motor warranty. In Pink, chosen to be seen, not stored.",
    features: [
      "4.8L capacity",
      "1000W motor",
      "Lever",
      "Planetary mixing action",
      "Direct drive motor",
      "10 year motor warranty",
      "Beater, Bowl"
    ],
    specs: { "Brand": "Smeg", "Model": "SMF05PKAU", "Type": "Stand Mixer", "Capacity": "4.8", "Power": "1000", "Materials": "Die-cast aluminium body", "Controls": "Lever", "Colour": "Pink", "Weight": "9.78 kg" },
    dims: { w: 40.5, d: 22.1, h: 37.8, unit: "cm", printed: true },
    boxContents: ["50's Style Stand Mixer Pink", "1 x 4.8L polished stainless steel bowl", "1 x Stainless steel wire whisk", "1 x Aluminium flat beater", "1 x Flex-edge beater", "1 x Aluminium dough hook", "1 x Pouring shield"],
    warranty: "5 year manufacturer's warranty",
    care: "Unplug before cleaning and wipe the body with a warm, damp cloth, never submerge it. Wash the bowl and attachments after each use and dry them straight away." },

  { id: "kw09", name: "Smeg 50s Style Stand Mixer 4.8L, Black", cat: "Kitchenware", room: "Kitchenware", price: 939, memberPrice: 855, sku: "SH-11010", tag: "New", ph: "", img: "assets/products/kw09-1.webp",
    imgs: ["assets/products/kw09-1.webp", "assets/products/kw09-2.webp", "assets/products/kw09-3.webp", "assets/products/kw09-4.webp", "assets/products/kw09-5.webp"],
    desc: "The mixer people photograph as much as they use. A 4.8L bowl handles a double batch of biscuits or a full loaf of bread dough without climbing the sides. Die-cast aluminium body. It also has planetary mixing action, direct drive motor and 10 year motor warranty. In Black, which is half the reason to buy it.",
    features: [
      "4.8L capacity",
      "1000W motor",
      "Lever",
      "Planetary mixing action",
      "Direct drive motor",
      "10 year motor warranty",
      "Beater, Bowl"
    ],
    specs: { "Brand": "Smeg", "Model": "SMF05BLAU", "Type": "Stand Mixer", "Capacity": "4.8", "Power": "1000", "Materials": "Die-cast aluminium body", "Controls": "Lever", "Colour": "Black", "Weight": "9.78 kg" },
    dims: { w: 40.5, d: 22.1, h: 37.8, unit: "cm", printed: true },
    boxContents: ["50's Style Stand Mixer Black", "1 x 4.8L polished stainless steel bowl", "1 x Stainless steel wire whisk", "1 x Aluminium flat beater", "1 x Flex-edge beater", "1 x Aluminium dough hook", "1 x Pouring shield"],
    warranty: "5 year manufacturer's warranty",
    care: "Unplug before cleaning and wipe the body with a warm, damp cloth, never submerge it. Wash the bowl and attachments after each use and dry them straight away." },

  { id: "kw10", name: "Smeg 50s Style Bench Blender 1.5L, Cream", cat: "Kitchenware", room: "Kitchenware", price: 519, memberPrice: 477, sku: "SH-11011", tag: "New", ph: "", img: "assets/products/kw10-1.webp",
    imgs: ["assets/products/kw10-1.webp", "assets/products/kw10-2.webp", "assets/products/kw10-3.webp", "assets/products/kw10-4.webp", "assets/products/kw10-5.webp"],
    desc: "A blender good enough to leave on the bench. A 1.5L jug, enough for smoothies for the household or a soup straight from the pot. Die cast aluminium body. It also has smooth start begins slowly to reduce sudden bursts and non drip spout. In Cream, which is half the reason to buy it.",
    features: [
      "1.5L capacity",
      "600W motor",
      "5: Smoothie, Green Smoothie, Frozen Dessert, Auto-clean and Pulse settings",
      "Knob & button",
      "Stainless steel",
      "Smooth start begins slowly to reduce sudden bursts",
      "Non drip spout"
    ],
    specs: { "Brand": "Smeg", "Model": "BLF03CRAU", "Type": "Blender", "Capacity": "1.5", "Power": "600", "Materials": "Die cast aluminium body", "Controls": "Knob & Button", "Colour": "Cream", "Weight": "4 kg" },
    dims: { w: 19.7, d: 16.3, h: 39.7, unit: "cm", printed: true },
    boxContents: ["1.5L Tritan Jug and Lid", "Blade", "600W Base"],
    warranty: "2 year manufacturer's warranty",
    care: "Unplug before cleaning. Rinse the jug straight after use, or blend warm soapy water for a few seconds, then rinse. Wipe the base with a damp cloth and never submerge it." },

  { id: "kw11", name: "Smeg Soda Maker, Matte Emerald Green", cat: "Kitchenware", room: "Kitchenware", price: 363, memberPrice: 337, sku: "SH-11012", tag: "New", ph: "", img: "assets/products/kw11-1.webp",
    imgs: ["assets/products/kw11-1.webp", "assets/products/kw11-2.webp", "assets/products/kw11-3.webp", "assets/products/kw11-4.webp", "assets/products/kw11-5.webp"],
    desc: "Sparkling water without the crate of bottles. Carbonates a bottle of tap water in seconds, so the sparkling water habit stops arriving by the carton. Brushed aluminium. It also has integrated QR code for my smeg assistant app and drip tray with magnetic closure. In Matte Emerald Green, chosen to be seen, not stored.",
    features: [
      "1L capacity",
      "Manual customisable adjustment of carbonation level",
      "Knob",
      "Integrated QR code for my smeg assistant app",
      "Drip tray with magnetic closure",
      "Bottle only dishwasher safe",
      "Dishwasher-safe parts"
    ],
    specs: { "Brand": "Smeg", "Model": "SKC01EGMAU", "Type": "Soda Water Maker", "Capacity": "1", "Materials": "Brushed aluminium, Tritan Renew Bottle", "Controls": "Knob", "Colour": "Emerald Matte Green", "Weight": "1.6 kg" },
    warranty: "2 year manufacturer's warranty",
    care: "Wipe the body with a soft, damp cloth. Wash the bottle by hand in warm soapy water and air dry it. Never put the carbonating bottle in the dishwasher or fill it with anything but water." },

  { id: "kw12", name: "KitchenAid Artisan Stand Mixer 4.7L with Ceramic Bowl, Wildflower", cat: "Kitchenware", room: "Kitchenware", price: 939, memberPrice: 855, sku: "SH-11013", tag: "New", ph: "", img: "assets/products/kw12-1.webp",
    imgs: ["assets/products/kw12-1.webp", "assets/products/kw12-2.webp", "assets/products/kw12-3.webp", "assets/products/kw12-4.webp", "assets/products/kw12-5.webp"],
    desc: "The mixer people photograph as much as they use. A 4.7L bowl handles a double batch of biscuits or a full loaf of bread dough without climbing the sides. Full metal construction. In Wildflower, which is half the reason to buy it.",
    features: [
      "4.7L capacity",
      "300W motor",
      "10 Speeds settings",
      "Lever",
      "Thoroughly mix and whip ingredients for a wide range of recipes",
      "Tilt head design makes it easy to add ingredients and attach accessories",
      "5 year manufacturer's warranty"
    ],
    specs: { "Brand": "KitchenAid", "Model": "5KSM156CXAWF", "Type": "Stand Mixer", "Capacity": "4.7", "Power": "300", "Materials": "Full metal construction, Stainless steel accessories", "Controls": "Lever", "Colour": "Wildflower with Floral Ceramic Bowl" },
    boxContents: ["1x Stand Mixer", "1x Ceramic Bowl", "1 x Silver coated wire whisk", "1 x Silver coated dough hook", "1 x Silver coated flat edge beater"],
    warranty: "5 year manufacturer's warranty",
    care: "Unplug before cleaning and wipe the body with a warm, damp cloth, never submerge it. Wash the bowl and attachments after each use and dry them straight away." },

  { id: "kw13", name: "KitchenAid Design Series Stand Mixer 4.7L, Evergreen", cat: "Kitchenware", room: "Kitchenware", price: 1419, memberPrice: 1287, sku: "SH-11014", tag: "New", ph: "", img: "assets/products/kw13-1.webp",
    imgs: ["assets/products/kw13-1.webp", "assets/products/kw13-2.webp", "assets/products/kw13-3.webp", "assets/products/kw13-4.webp", "assets/products/kw13-5.webp"],
    desc: "The mixer people photograph as much as they use. A 4.7L bowl handles a double batch of biscuits or a full loaf of bread dough without climbing the sides. Full metal construction. Details worth having: planetary mixing and tilt head. In Evergreen, chosen to be seen, not stored.",
    features: [
      "4.7L capacity",
      "300W motor",
      "10 speeds settings",
      "Slide",
      "One-of-a-kind wood grain bowl design - must be hand washed and dried immediately",
      "Regularly season the bowl with food safe wood conditioner",
      "Compatible with over 18 attachments or stainless steel bowl (sold seperately)"
    ],
    specs: { "Brand": "KitchenAid", "Model": "5KSM180WSAEG", "Type": "Stand Mixer", "Capacity": "4.7", "Power": "300", "Materials": "Full metal construction, Walnut wood bowl, Brass plated hub cover, Stainless steel tools", "Controls": "Slide", "Colour": "Evergreen", "Weight": "10.5 kg" },
    dims: { w: 29.2, d: 35.6, h: 34.3, unit: "cm", printed: true },
    boxContents: ["4.7 Litre Walnut Wood bowl", "Wire whip", "Flat beater", "Dough hook"],
    warranty: "5 year manufacturer's warranty",
    care: "Unplug before cleaning and wipe the body with a warm, damp cloth, never submerge it. Wash the bowl and attachments after each use and dry them straight away." },

  { id: "kw14", name: "KitchenAid Artisan Bowl-Lift Stand Mixer 6.6L, Dried Rose", cat: "Kitchenware", room: "Kitchenware", price: 1239, memberPrice: 1125, sku: "SH-11015", tag: "New", ph: "", img: "assets/products/kw14-1.webp",
    imgs: ["assets/products/kw14-1.webp", "assets/products/kw14-2.webp", "assets/products/kw14-3.webp", "assets/products/kw14-4.webp", "assets/products/kw14-5.webp"],
    desc: "The mixer people photograph as much as they use. A 6.6L bowl handles a double batch of biscuits or a full loaf of bread dough without climbing the sides. Die cast zinc construction. Small things that matter: soft start for gradual acceleration and planetary mixing. In Dried Rose, which is half the reason to buy it.",
    features: [
      "6.6L capacity",
      "375W motor",
      "11 Speeds including a half speed for Folding settings",
      "Slide",
      "Bowl lift allows more stable mixes for heavier doughs and battery - no tilt head",
      "Soft start for gradual acceleration",
      "Compatible with over 10 attachments (sold seperately)"
    ],
    specs: { "Brand": "KitchenAid", "Model": "5KSM70SHXADR", "Type": "Stand Mixer", "Capacity": "6.6", "Power": "375", "Materials": "Die cast zinc construction, Stainless Steel bowl", "Controls": "Slide", "Colour": "Dried Rose", "Weight": "15.7 kg" },
    dims: { w: 28.7, d: 37.2, h: 41.9, unit: "cm", printed: true },
    boxContents: ["Whisk", "Flex edge beater", "Flat beater", "Dough hook", "6.6L stainless steel bowl", "Pouring shield"],
    warranty: "5 year manufacturer's warranty",
    care: "Unplug before cleaning and wipe the body with a warm, damp cloth, never submerge it. Wash the bowl and attachments after each use and dry them straight away." },

  { id: "kw15", name: "KitchenAid Artisan Plus Stand Mixer 4.7L, Cardamom", cat: "Kitchenware", room: "Kitchenware", price: 1299, memberPrice: 1179, sku: "SH-11016", tag: "New", ph: "", img: "assets/products/kw15-1.webp",
    imgs: ["assets/products/kw15-1.webp", "assets/products/kw15-2.webp", "assets/products/kw15-3.webp", "assets/products/kw15-4.webp", "assets/products/kw15-5.webp"],
    desc: "The mixer people photograph as much as they use. A 4.7L bowl handles a double batch of biscuits or a full loaf of bread dough without climbing the sides. Full metal. It also has integrated bowl light and planetary mixing action. Comes in Cardamom.",
    features: [
      "4.7L capacity",
      "325W motor",
      "11 Speeds, including half fold speed settings",
      "Glide",
      "Integrated bowl light",
      "Light switches on automatically when the head is lowered or the mixer is in action",
      "Light turns off with a twist of the precision speed control knob"
    ],
    specs: { "Brand": "KitchenAid", "Model": "5KSM50PKVADC", "Type": "Stand Mixer", "Capacity": "4.7", "Power": "325", "Materials": "Full metal", "Controls": "Glide", "Colour": "Cardamom", "Weight": "9.89 kg" },
    dims: { w: 22.2, d: 35.6, h: 35.3, unit: "cm", printed: true },
    boxContents: ["Artisan Plus Tilt-Head Stand Mixer", "Stainless steel bowl", "Pouring shield", "Stainless steel double flex edge beater", "Stainless steel flat beater", "Stainless steel dough hook", "Stainless steel wire whisk"],
    warranty: "5 year manufacturer's warranty",
    care: "Unplug before cleaning and wipe the body with a warm, damp cloth, never submerge it. Wash the bowl and attachments after each use and dry them straight away." },

  { id: "kw16", name: "KitchenAid Variable Temperature Kettle 1.7L, Juniper", cat: "Kitchenware", room: "Kitchenware", price: 315, memberPrice: 294, sku: "SH-11017", tag: "New", ph: "", img: "assets/products/kw16-1.webp",
    imgs: ["assets/products/kw16-1.webp", "assets/products/kw16-2.webp", "assets/products/kw16-3.webp", "assets/products/kw16-4.webp", "assets/products/kw16-5.webp"],
    desc: "A kettle you leave out rather than hide away. Boils 1.7L, enough for a full pot of tea or a round of coffees, with 2400W behind it. Full metal. Details worth having: water window, slow release lid and quick and controlled pour. Juniper, and worth leaving on the bench.",
    features: [
      "1.7L capacity",
      "2400W element",
      "Auto shut off",
      "Adjustable temperature 50 - 100 degrees celsius",
      "Water window",
      "Slow release lid",
      "Quick and controlled pour"
    ],
    specs: { "Brand": "KitchenAid", "Model": "5KEK1701AJP", "Type": "Electric Kettle", "Capacity": "1.7L", "Power": "2400W", "Materials": "Full metal, brushed stainless steel inside", "Controls": "Adjustable Temperature 50 - 100 Degrees Celsius", "Colour": "Juniper", "Weight": "1.3 kg" },
    dims: { w: 21.8, d: 16.3, h: 25.6, unit: "cm", printed: true },
    warranty: "2 year manufacturer's warranty",
    care: "Wipe the body with a soft, damp cloth and dry it, never submerge the kettle or its base. Rinse the limescale filter under the tap now and then, and descale with a kettle descaler if your water is hard." },

  { id: "kw17", name: "KitchenAid Four-Slice Toaster, Porcelain White", cat: "Kitchenware", room: "Kitchenware", price: 351, memberPrice: 326, sku: "SH-11018", tag: "New", ph: "", img: "assets/products/kw17-1.webp",
    imgs: ["assets/products/kw17-1.webp", "assets/products/kw17-2.webp", "assets/products/kw17-3.webp", "assets/products/kw17-4.webp", "assets/products/kw17-5.webp"],
    desc: "A toaster that earns its place on the bench. Takes four slices, with browning you set rather than guess at. All metal. You also get high lift lever. In Porcelain White, which is half the reason to buy it.",
    features: [
      "4 Slices capacity",
      "1800W motor",
      "7 toast shade settings programs",
      "Bagel, defrost, reheat, little longer",
      "Sliding lever",
      "High lift lever",
      "2 year manufacturer's warranty"
    ],
    specs: { "Brand": "KitchenAid", "Model": "5KMT4109APL", "Type": "4 Slice Toaster", "Capacity": "4 Slices", "Power": "1800W", "Materials": "All Metal", "Controls": "Sliding lever", "Colour": "Porcelain White", "Weight": "3.3 kg" },
    dims: { w: 30.8, d: 30.0, h: 21.1, unit: "cm", printed: true },
    warranty: "2 year manufacturer's warranty",
    care: "Unplug and cool before cleaning. Slide out the crumb tray and empty it regularly, and wipe the body with a soft, damp cloth. Never put a knife or fork into the slots." },

  { id: "kw18", name: "KitchenAid Food Processor 3.1L (13-Cup), Almond Cream", cat: "Kitchenware", room: "Kitchenware", price: 519, memberPrice: 477, sku: "SH-11019", tag: "New", ph: "", img: "assets/products/kw18-1.webp",
    imgs: ["assets/products/kw18-1.webp", "assets/products/kw18-2.webp", "assets/products/kw18-3.webp", "assets/products/kw18-4.webp", "assets/products/kw18-5.webp"],
    desc: "The appliance that turns an hour of prep into ten minutes. Chops, slices and blends up to 3.25L on 400W. Tritan work bowl. Small things that matter: snap and go and easy clean work bowl. Almond Cream, and worth leaving on the bench.",
    features: [
      "3.25L capacity",
      "400W motor",
      "2 Speeds and Pulse settings",
      "Levers",
      "Multi-purpose blade",
      "Snap and go",
      "Easy clean work bowl"
    ],
    specs: { "Brand": "KitchenAid", "Model": "5KFP1319AAC", "Type": "Food Processor", "Capacity": "3.25", "Power": "400", "Materials": "Tritan Work Bowl", "Controls": "Levers", "Colour": "Almond Cream", "Weight": "4.5 kg" },
    dims: { w: 22.2, d: 22.2, h: 46.4, unit: "cm", printed: true },
    boxContents: ["Storage caddy", "Multi purpose blade", "Dough blade", "Reversible fine and medium shredding disc", "External adjustable slicing disc", "Dicing kit and clean out tool", "Storage/refrigerator lid", "13 Cup work bowl with drive pin"],
    warranty: "2 year manufacturer's warranty",
    care: "Unplug before cleaning. Wash the bowl, lid and blades by hand or on the dishwasher's top rack, handling the blades by the hub. Wipe the motor base with a damp cloth." },

  { id: "kw19", name: "KitchenAid Mini Food Chopper 830ml, Pistachio", cat: "Kitchenware", room: "Kitchenware", price: 231, memberPrice: 218, sku: "SH-11020", tag: "New", ph: "", img: "assets/products/kw19-1.webp",
    imgs: ["assets/products/kw19-1.webp", "assets/products/kw19-2.webp", "assets/products/kw19-3.webp", "assets/products/kw19-4.webp", "assets/products/kw19-5.webp"],
    desc: "Small, quick and endlessly useful. Chops, slices and blends up to 0.83L on 240W. Small things that matter: one-touch operation and drizzle basin for emulsifying. In Pistachio, chosen to be seen, not stored.",
    features: [
      "0.83L capacity",
      "240W motor",
      "2 Speeds and Pulse settings",
      "Sliding lever",
      "Stainless steel",
      "One-touch operation",
      "Drizzle basin for emulsifying"
    ],
    specs: { "Brand": "KitchenAid", "Model": "5KFC3516APT", "Type": "Food Chopper", "Capacity": "0.83", "Power": "240", "Controls": "Sliding lever", "Colour": "Pistachio", "Weight": "1.2 kg" },
    dims: { w: 17.8, d: 14.3, h: 22.2, unit: "cm", printed: true },
    boxContents: ["3.5 Cup Work Bowl w/ Handle & Spout", "Stainless Steel Multi Purpose Blade", "Lid with Drizzle Basin"],
    warranty: "2 year manufacturer's warranty",
    care: "Unplug before cleaning. Wash the bowl, lid and blade by hand or on the dishwasher's top rack, handling the blade by the hub. Wipe the base with a damp cloth." },

  { id: "kw20", name: "KitchenAid Pure Power Blender 2L, Porcelain White", cat: "Kitchenware", room: "Kitchenware", price: 339, memberPrice: 315, sku: "SH-11021", tag: "New", ph: "", img: "assets/products/kw20-1.webp",
    imgs: ["assets/products/kw20-1.webp", "assets/products/kw20-2.webp", "assets/products/kw20-3.webp", "assets/products/kw20-4.webp", "assets/products/kw20-5.webp"],
    desc: "A blender good enough to leave on the bench. A 2L jug, enough for smoothies for the household or a soup straight from the pot. ABS plastics. In Porcelain White, which is half the reason to buy it.",
    features: [
      "2L capacity",
      "1200W motor",
      "10 speeds plus pulse, 3 Pre-set options: Smoothie, Ice crush, Clean cycle settings",
      "Knob controls and button for pulsing",
      "Powerful asymmetrical ice crushing stainless steel blades",
      "Jar",
      "1 year manufacturer's warranty"
    ],
    specs: { "Brand": "KitchenAid", "Model": "5KSB2072APL", "Type": "Blender", "Capacity": "2", "Power": "1200", "Materials": "ABS Plastics, BPA-free", "Controls": "Knob controls and button for pulsing", "Colour": "Porcelain White", "Weight": "3.44 kg" },
    dims: { w: 23.0, d: 20.4, h: 41.7, unit: "cm", printed: true },
    boxContents: ["Pure Power Blender Porcelain White", "Model number 5KSB2072APL", "Included accessories 2 Litre Plastic blender jar", "Blender jar lid"],
    warranty: "1 year manufacturer's warranty",
    care: "Unplug before cleaning. Rinse the jug straight after use, or blend warm soapy water for a few seconds, then rinse. Wipe the base with a damp cloth and never submerge it." },

  { id: "kw21", name: "Nespresso Creatista Plus Coffee Machine, Sea Salt", cat: "Kitchenware", room: "Kitchenware", price: 1032, memberPrice: 939, sku: "SH-11022", tag: "New", ph: "", img: "assets/products/kw21-1.webp",
    imgs: ["assets/products/kw21-1.webp", "assets/products/kw21-2.webp", "assets/products/kw21-3.webp", "assets/products/kw21-4.webp", "assets/products/kw21-5.webp"],
    desc: "The morning coffee, settled. Espresso and milk coffees from a capsule, ready in about the time it takes to find a cup. 1.5L tank. Stainless steel construction. You also get intuitive digital display, espresso and lungo. Comes in Sea Salt.",
    features: [
      "Intuitive digital display",
      "7 coffee recipes: ristretto",
      "Espresso",
      "Lungo",
      "2 year manufacturer's warranty"
    ],
    specs: { "Brand": "Nespresso", "Model": "BNE800SST2JAN1", "Type": "Capsule Coffee Machine", "Materials": "Stainless Steel Construction", "Colour": "Black Truffle", "Weight": "5.2 kg" },
    dims: { w: 17.1, d: 39.3, h: 30.8, unit: "cm", printed: true },
    boxContents: ["Creatista Plus Coffee Machine", "Stainless Steel Milk Jug and Tasting Box of Nespresso Capsules"],
    warranty: "2 year manufacturer's warranty",
    care: "Empty and rinse the drip tray and capsule container daily, and wash the milk jug after every use. Run the descaling cycle when the machine asks for it, it is what keeps the crema right." },

  { id: "kw22", name: "Nespresso Vertuo Pop Coffee Machine Bundle, Lilac", cat: "Kitchenware", room: "Kitchenware", price: 333, memberPrice: 310, sku: "SH-11023", tag: "New", ph: "", img: "assets/products/kw22-1.webp",
    imgs: ["assets/products/kw22-1.webp", "assets/products/kw22-2.webp", "assets/products/kw22-3.webp", "assets/products/kw22-4.webp", "assets/products/kw22-5.webp"],
    desc: "The morning coffee, settled. Espresso and milk coffees from a capsule, ready in about the time it takes to find a cup. 0.56L tank. You also get 1 button operation, automatic capsule ejection and connectivity via bluetooth and WiFi. In Lilac, which is half the reason to buy it.",
    features: [
      "1260W motor",
      "4 Cup sizes for espresso, double espresso, gran lungo and mug/coffee programs",
      "Lever",
      "Centrifusion technology with capsule recognition system",
      "1 button operation",
      "Automatic capsule ejection",
      "Connectivity via bluetooth and WiFi"
    ],
    specs: { "Brand": "Nespresso", "Model": "BNV150LIL4IAN3", "Type": "Capsule Coffee Machine", "Power": "1260", "Controls": "Lever", "Colour": "Lilac", "Weight": "3.5 kg" },
    dims: { w: 13.6, d: 42.6, h: 25.0, unit: "cm", printed: true },
    boxContents: ["Vertuo Pop Bundle Starter Pack Lilac", "Aeroccino 3 Milk Frother", "1 x Nespresso Travel Mug Lilac", "1 x Nespresso Tote Bag", "1 x Capsule Sample Set"],
    warranty: "2 year manufacturer's warranty",
    care: "Empty and rinse the drip tray and capsule container daily, and wash the milk jug after every use. Run the descaling cycle when the machine asks for it, it is what keeps the crema right." },

  { id: "kw23", name: "Nespresso Lattissima One Coffee Machine, Green", cat: "Kitchenware", room: "Kitchenware", price: 579, memberPrice: 531, sku: "SH-11024", tag: "New", ph: "", img: "assets/products/kw23-1.webp",
    imgs: ["assets/products/kw23-1.webp", "assets/products/kw23-2.webp", "assets/products/kw23-3.webp", "assets/products/kw23-4.webp", "assets/products/kw23-5.webp"],
    desc: "The morning coffee, settled. Espresso and milk coffees from a capsule, ready in about the time it takes to find a cup. 1L tank. You also get milk jug has a detachable lid and is dishwasher safe. In Green, which is half the reason to buy it.",
    features: [
      "1450W motor",
      "3 Milk and coffee recipes: Cappuccino, Latte, Espresso macchiatos programs",
      "Touch screen",
      "Milk jug has a detachable lid and is dishwasher safe",
      "2 year manufacturer's warranty"
    ],
    specs: { "Brand": "Nespresso", "Model": "EN510GR", "Type": "Capsule Coffee Machine", "Power": "1450", "Controls": "Touch Screen", "Colour": "Green", "Weight": "4.17 kg" },
    dims: { w: 32.4, d: 15.4, h: 25.6, unit: "cm", printed: true },
    boxContents: ["Lattissima One Capsule Coffee Machine Green"],
    warranty: "2 year manufacturer's warranty",
    care: "Empty and rinse the drip tray and capsule container daily, and wash the milk jug after every use. Run the descaling cycle when the machine asks for it, it is what keeps the crema right." },

  { id: "kw24", name: "Nespresso Citiz & Milk Coffee Machine, Polished Stainless Steel", cat: "Kitchenware", room: "Kitchenware", price: 543, memberPrice: 499, sku: "SH-11025", tag: "New", ph: "", img: "assets/products/kw24-1.webp",
    imgs: ["assets/products/kw24-1.webp", "assets/products/kw24-2.webp", "assets/products/kw24-3.webp", "assets/products/kw24-4.webp", "assets/products/kw24-5.webp"],
    desc: "The morning coffee, settled. Espresso and milk coffees from a capsule, ready in about the time it takes to find a cup. 1L tank. Metal & plastic. It also has descaling alert. In Polished Stainless Steel, chosen to be seen, not stored.",
    features: [
      "1260W motor",
      "Buttons",
      "Cord length 90cm",
      "Descaling alert",
      "2 year manufacturer's warranty"
    ],
    specs: { "Brand": "Nespresso", "Model": "BEC550PSS4JAN1", "Type": "Capsule Coffee Machine", "Power": "1260", "Materials": "Metal & Plastic", "Controls": "Buttons", "Colour": "Polished Stainless Steel", "Weight": "6.4 kg" },
    dims: { w: 22.1, d: 38.9, h: 27.7, unit: "cm", printed: true },
    boxContents: ["CitiZ and Milk Capsule Coffee Machine Polished Stainless Steel", "Model number BEC550PSS4JAN1"],
    warranty: "2 year manufacturer's warranty",
    care: "Empty and rinse the drip tray and capsule container daily, and wash the milk jug after every use. Run the descaling cycle when the machine asks for it, it is what keeps the crema right." },

  { id: "kw25", name: "Ninja Crispi Pro 6-in-1 Glass Air Fryer, Sage Green", cat: "Kitchenware", room: "Kitchenware", price: 516, memberPrice: 474, sku: "SH-11026", tag: "New", ph: "", img: "assets/products/kw25-1.webp",
    imgs: ["assets/products/kw25-1.webp", "assets/products/kw25-2.webp", "assets/products/kw25-3.webp", "assets/products/kw25-4.webp", "assets/products/kw25-5.webp"],
    desc: "Dinner, faster, and without the oven heating the whole house. 2.3L of cooking space across six functions, from air fry and roast through to bake and reheat. Small things that matter: modular base adjusts to fit 2.3L, 3.8L and and 5.7L CleanCrisp glassware. In Sage Green, which is half the reason to buy it.",
    features: [
      "2.3L capacity",
      "2050W motor",
      "Control knobs",
      "Modular base adjusts to fit 2.3L",
      "3.8L",
      "And 5.7L CleanCrisp glassware",
      "2 year manufacturer's warranty"
    ],
    specs: { "Brand": "Ninja", "Model": "AS101GYANZ", "Type": "Air Fryer", "Capacity": "2.3L", "Power": "2050", "Controls": "Control knobs", "Colour": "Sage Green", "Weight": "5.17 kg" },
    dims: { w: 29.9, d: 30.9, h: 27.9, unit: "cm", printed: true },
    boxContents: ["2050W XL Glass Air Fryer", "5.7L CleanCrisp Glassware Container", "2.3L CleanCrisp Glassware Container", "Removable Modular Base", "2 x Large Crisper Plates", "2 x Storage Lids", "Chef-Inspired Recipe Guide"],
    warranty: "2 year manufacturer's warranty",
    care: "Unplug and cool before cleaning. Wash the baskets, trays and lids in warm soapy water or the dishwasher where the manual allows, and wipe the unit with a damp cloth." },

  { id: "kw26", name: "Ninja Crispi Pro 6-in-1 Glass Air Fryer, Pink", cat: "Kitchenware", room: "Kitchenware", price: 516, memberPrice: 474, sku: "SH-11027", tag: "New", ph: "", img: "assets/products/kw26-1.webp",
    imgs: ["assets/products/kw26-1.webp", "assets/products/kw26-2.webp", "assets/products/kw26-3.webp", "assets/products/kw26-4.webp", "assets/products/kw26-5.webp"],
    desc: "Dinner, faster, and without the oven heating the whole house. 2.3L of cooking space across six functions, from air fry and roast through to bake and reheat. It also has modular base adjusts to fit 2.3L, 3.8L and and 5.7L CleanCrisp glassware. In Pink, chosen to be seen, not stored.",
    features: [
      "2.3L capacity",
      "2050W motor",
      "Control knobs",
      "Modular base adjusts to fit 2.3L",
      "3.8L",
      "And 5.7L CleanCrisp glassware",
      "2 year manufacturer's warranty"
    ],
    specs: { "Brand": "Ninja", "Model": "AS101PKANZ", "Type": "Air Fryer", "Capacity": "2.3L", "Power": "2050", "Controls": "Control knobs", "Colour": "Pink", "Weight": "5.17 kg" },
    dims: { w: 29.9, d: 30.9, h: 27.9, unit: "cm", printed: true },
    boxContents: ["2050W XL Glass Air Fryer", "5.7L CleanCrisp Glassware Container", "2.3L CleanCrisp Glassware Container", "Removable Modular Base", "2 x Large Crisper Plates", "2 x Storage Lids", "Chef-Inspired Recipe Guide"],
    warranty: "2 year manufacturer's warranty",
    care: "Unplug and cool before cleaning. Wash the baskets, trays and lids in warm soapy water or the dishwasher where the manual allows, and wipe the unit with a damp cloth." },

  { id: "kw27", name: "Ninja Creami Deluxe Ice Cream Maker, Cloud Silver", cat: "Kitchenware", room: "Kitchenware", price: 459, memberPrice: 423, sku: "SH-11028", tag: "New", ph: "", img: "assets/products/kw27-1.webp",
    imgs: ["assets/products/kw27-1.webp", "assets/products/kw27-2.webp", "assets/products/kw27-3.webp", "assets/products/kw27-4.webp", "assets/products/kw27-5.webp"],
    desc: "Dessert made at home, properly. Churns up to 0.7L of ice cream, gelato, sorbet or frozen yoghurt at a time. BPA free tubs. You also get re-Spin function for an even softer creamier result and dual drive motors power through layers. Cloud Silver, and worth leaving on the bench.",
    features: [
      "0.7L capacity",
      "800W motor",
      "Touch",
      "Process just the TOP half of a tub and leave the BOTTOM for later",
      "Creamify technology shaves ice particles from liquids into a creamy texture",
      "Re-Spin function for an even softer creamier result",
      "Dual drive motors power through layers"
    ],
    specs: { "Brand": "Ninja", "Model": "NC501", "Type": "Ice Cream Maker", "Capacity": "0.7L", "Power": "800", "Materials": "BPA free tubs", "Controls": "Touch", "Colour": "Cloud Silver", "Weight": "6.5 kg" },
    dims: { w: 21.3, d: 30.5, h: 42.3, unit: "cm", printed: true },
    boxContents: ["2 x 700ml CREAMi Deluxe Tubs with Storage Lids", "Outer Bowl and Lid", "Deluxe Creamerizer Paddle", "Recipe inspiration guide"],
    warranty: "2 year manufacturer's warranty",
    care: "Unplug and cool before cleaning. Wash the bowl, paddle and lid by hand in warm soapy water and dry thoroughly. Wipe the body with a damp cloth and never submerge it." },

  { id: "kw28", name: "Russell Hobbs Brooklyn Four-Slice Toaster, Copper", cat: "Kitchenware", room: "Kitchenware", price: 90, memberPrice: 81, sku: "SH-11029", tag: "New", ph: "", img: "assets/products/kw28-1.webp",
    imgs: ["assets/products/kw28-1.webp", "assets/products/kw28-2.webp", "assets/products/kw28-3.webp", "assets/products/kw28-4.webp", "assets/products/kw28-5.webp"],
    desc: "A toaster that earns its place on the bench. Takes four slices, with browning you set rather than guess at. Details worth having: extra wide and deep self-centering slots, illumination around buttons and high lift lever. Finished in Copper.",
    features: [
      "4 Slices capacity",
      "Independent browning controls per side, 6 levels",
      "Defrost, reheat, cancel",
      "Extra wide and deep self-centering slots",
      "Illumination around buttons",
      "High lift lever",
      "Soft touch accents"
    ],
    specs: { "Brand": "Russell Hobbs", "Model": "RHT94COP", "Type": "4 Slice Toaster", "Capacity": "4 Slices", "Colour": "Copper", "Weight": "3.5 kg" },
    dims: { w: 31.3, d: 32.6, h: 29.0, unit: "cm", printed: true },
    warranty: "2 year manufacturer's warranty",
    care: "Unplug and cool before cleaning. Slide out the crumb tray and empty it regularly, and wipe the body with a soft, damp cloth. Never put a knife or fork into the slots." },

  { id: "kw29", name: "Russell Hobbs Brooklyn Glass Kettle 1.7L, Copper", cat: "Kitchenware", room: "Kitchenware", price: 79, memberPrice: 71, sku: "SH-11030", tag: "New", ph: "", img: "assets/products/kw29-1.webp",
    imgs: ["assets/products/kw29-1.webp", "assets/products/kw29-2.webp", "assets/products/kw29-3.webp", "assets/products/kw29-4.webp"],
    desc: "A kettle you leave out rather than hide away. Boils 1.7L, enough for a full pot of tea or a round of coffees, with 2200W behind it. Glass body. Small things that matter: bPA free, push open lid and removable filter. Finished in Copper.",
    features: [
      "1.7L capacity",
      "2200W element",
      "Blue internal illumination when heating",
      "BPA free",
      "Push open lid",
      "Removable filter",
      "Anti drip perfect pour spout"
    ],
    specs: { "Brand": "Russell Hobbs", "Model": "RHK172", "Type": "Electric Kettle", "Capacity": "1.7L", "Power": "2200W", "Materials": "Glass Body", "Colour": "Copper", "Weight": "1.2 kg" },
    dims: { w: 12.0, d: 20.0, h: 24.0, unit: "cm", printed: true },
    warranty: "2 year manufacturer's warranty",
    care: "Wipe the body with a soft, damp cloth and dry it, never submerge the kettle or its base. Rinse the limescale filter under the tap now and then, and descale with a kettle descaler if your water is hard." },

  { id: "kw30", name: "SodaStream Art Sparkling Water Maker, White", cat: "Kitchenware", room: "Kitchenware", price: 303, memberPrice: 283, sku: "SH-11031", tag: "New", ph: "", img: "assets/products/kw30-1.webp",
    imgs: ["assets/products/kw30-1.webp", "assets/products/kw30-2.webp", "assets/products/kw30-3.webp"],
    desc: "Sparkling water without the crate of bottles. Carbonates a bottle of tap water in seconds, so the sparkling water habit stops arriving by the carton. Stainless steel trim. Details worth having: quick connect CO2 cylinder connection, bespoke carbonation lever and cordless and no electricity operation. In White, which is half the reason to buy it.",
    features: [
      "1L capacity",
      "Lever",
      "Only reusable bottle dishwasher safe",
      "Quick connect CO2 cylinder connection",
      "Bespoke carbonation lever",
      "Cordless and no electricity operation",
      "Dishwasher-safe parts"
    ],
    specs: { "Brand": "Sodastream", "Model": "1013511610", "Type": "Soda Water Maker", "Capacity": "1", "Materials": "Stainless Steel Trim, BPA free bottles", "Controls": "Lever", "Colour": "White" },
    dims: { w: 16.9, d: 24.5, h: 43.1, unit: "cm", printed: true },
    boxContents: ["1L Fuse Carbonating Bottle", "60L Quick Connect CO2 cylinder"],
    warranty: "2 year manufacturer's warranty",
    care: "Wipe the body with a soft, damp cloth. Wash the bottle by hand in warm soapy water and air dry it. Never put the carbonating bottle in the dishwasher or fill it with anything but water." },

  { id: "kw31", name: "Aarke Carbonator 3 Sparkling Water Maker, Matte White", cat: "Kitchenware", room: "Kitchenware", price: 459, memberPrice: 423, sku: "SH-11032", tag: "New", ph: "", img: "assets/products/kw31-1.webp",
    imgs: ["assets/products/kw31-1.webp", "assets/products/kw31-2.webp", "assets/products/kw31-3.webp", "assets/products/kw31-4.webp", "assets/products/kw31-5.webp"],
    desc: "Sparkling water without the crate of bottles. Carbonates a bottle of tap water in seconds, so the sparkling water habit stops arriving by the carton. Stainless steel construction with premium finish. Small things that matter: internal safety valve system, controlled spray beam and cordless and electricity-free. Finished in Matte White.",
    features: [
      "0.8L capacity",
      "Lever",
      "Internal safety valve system",
      "Stainless steel CNC machined precision nozzle for a smooth",
      "Controlled spray beam",
      "Cordless and electricity-free",
      "2 year manufacturer's warranty"
    ],
    specs: { "Brand": "aarke", "Model": "AK-A1260", "Type": "Soda Water Maker", "Capacity": "0.8", "Materials": "Stainless steel construction with premium finish, BPA-free PET water bottle and stainless steel drip tray", "Controls": "Lever", "Colour": "Matte White", "Weight": "1.45 kg" },
    dims: { w: 15.3, d: 25.8, h: 41.4, unit: "cm", printed: true },
    boxContents: ["PET Water Bottle", "Drip Tray Cover", "Aarke cleaning cloth (Gas / CO2 cylinder is not included)"],
    warranty: "2 year manufacturer's warranty",
    care: "Wipe the body with a soft, damp cloth. Wash the bottle by hand in warm soapy water and air dry it. Never put the carbonating bottle in the dishwasher or fill it with anything but water." },

  // ── Lifestyle ──
  { id: "lf01", name: "Oakwood & Vanilla Bean Reed Diffuser 150ml", cat: "Lifestyle", room: "Lifestyle", price: 18, memberPrice: 16, sku: "SH-11033", tag: "New", ph: "", img: "assets/products/lf01-1.webp",
    imgs: ["assets/products/lf01-1.webp", "assets/products/lf01-2.webp", "assets/products/lf01-3.webp", "assets/products/lf01-4.webp", "assets/products/lf01-5.webp"],
    desc: "Scent that works without being switched on. 150ml of oil and a bundle of reeds, no flame, no switch, just scent that sits in the room. Turn the reeds when you want it louder.",
    features: [
      "Volume: 150ml",
      "Size: 11.8cm (H) x 6cm (Dia.)",
      "Oakwood and vanilla bean fragrance",
      "Top notes: Lemon and fruit",
      "Middle notes: Green and vanilla bean",
      "Base notes: Saffron, leather, tonka bean, moss and patchouli"
    ],
    specs: { "Type": "Reed diffuser", "Volume": "150ml", "Size": "11.8cm (H) x 6cm (Dia.)" },
    care: "Turn the reeds every week or so to refresh the scent. Stand the bottle on a coaster, the oil marks timber and stone, and keep it out of direct sun." },

  { id: "lf02", name: "Amber & Tonka Reed Diffuser 350ml", cat: "Lifestyle", room: "Lifestyle", price: 20, memberPrice: 18, sku: "SH-11034", tag: "New", ph: "", img: "assets/products/lf02-1.webp",
    imgs: ["assets/products/lf02-1.webp", "assets/products/lf02-2.webp", "assets/products/lf02-3.webp", "assets/products/lf02-4.webp", "assets/products/lf02-5.webp"],
    desc: "Scent that works without being switched on. No flame, no switch, just scent that sits in the room. Turn the reeds when you want it louder.",
    features: [
      "Reeds and oil included",
      "No flame or power needed",
      "Lasts several months"
    ],
    specs: { "Type": "Reed diffuser" },
    care: "Turn the reeds every week or so to refresh the scent. Stand the bottle on a coaster, the oil marks timber and stone, and keep it out of direct sun." },

  { id: "lf03", name: "Sandalwood & Musk Reed Diffuser 350ml", cat: "Lifestyle", room: "Lifestyle", price: 20, memberPrice: 18, sku: "SH-11035", tag: "New", ph: "", img: "assets/products/lf03-1.webp",
    imgs: ["assets/products/lf03-1.webp", "assets/products/lf03-2.webp", "assets/products/lf03-3.webp", "assets/products/lf03-4.webp", "assets/products/lf03-5.webp"],
    desc: "Scent that works without being switched on. 350ml of oil and a bundle of reeds, no flame, no switch, just scent that sits in the room. Turn the reeds when you want it louder.",
    features: [
      "Volume: 350ml",
      "Size: 16.5cm (H) x 9cm (Dia.)",
      "XL size",
      "Bergamot and sandalwood fragrance"
    ],
    specs: { "Type": "Reed diffuser", "Volume": "350ml", "Size": "16.5cm (H) x 9cm (Dia.)" },
    care: "Turn the reeds every week or so to refresh the scent. Stand the bottle on a coaster, the oil marks timber and stone, and keep it out of direct sun." },

  { id: "lf04", name: "Vanilla & Amber Reed Diffuser 350ml", cat: "Lifestyle", room: "Lifestyle", price: 20, memberPrice: 18, sku: "SH-11036", tag: "New", ph: "", img: "assets/products/lf04-1.webp",
    imgs: ["assets/products/lf04-1.webp", "assets/products/lf04-2.webp", "assets/products/lf04-3.webp", "assets/products/lf04-4.webp", "assets/products/lf04-5.webp"],
    desc: "Scent that works without being switched on. 350ml of oil and a bundle of reeds, no flame, no switch, just scent that sits in the room. Turn the reeds when you want it louder.",
    features: [
      "Volume: 350ml",
      "Size: 16.5cm (H) x 9cm (Dia.)",
      "XL size",
      "Vanilla and amber fragrance"
    ],
    specs: { "Type": "Reed diffuser", "Volume": "350ml", "Size": "16.5cm (H) x 9cm (Dia.)" },
    care: "Turn the reeds every week or so to refresh the scent. Stand the bottle on a coaster, the oil marks timber and stone, and keep it out of direct sun." },

  { id: "lf05", name: "Mahogany Reed Diffuser 150ml", cat: "Lifestyle", room: "Lifestyle", price: 18, memberPrice: 16, sku: "SH-11037", tag: "New", ph: "", img: "assets/products/lf05-1.webp",
    imgs: ["assets/products/lf05-1.webp", "assets/products/lf05-2.webp", "assets/products/lf05-3.webp", "assets/products/lf05-4.webp", "assets/products/lf05-5.webp"],
    desc: "Scent that works without being switched on. 150ml of oil and a bundle of reeds, no flame, no switch, just scent that sits in the room. Turn the reeds when you want it louder. Bottle: Pressed glass.",
    features: [
      "Volume: 150ml",
      "Bottle: Pressed glass",
      "Glass bottle: 12cm (H) x 6cm (Dia.)",
      "Mahogany, teakwood and vanilla fragrance",
      "Top notes: Tonka and vanilla",
      "Middle notes: Wood and sandalwood"
    ],
    specs: { "Type": "Reed diffuser", "Volume": "150ml", "Material": "Bottle: Pressed glass, Lid: Polypropylene (PP), Fibre: Greige yarns and dyed yarns, Transp" },
    care: "Turn the reeds every week or so to refresh the scent. Stand the bottle on a coaster, the oil marks timber and stone, and keep it out of direct sun." },

  { id: "lf06", name: "Ceramic Aroma Diffuser 100ml, Sage Green", cat: "Lifestyle", room: "Lifestyle", price: 37.5, memberPrice: 33.5, sku: "SH-11038", tag: "New", ph: "", img: "assets/products/lf06-1.webp",
    imgs: ["assets/products/lf06-1.webp", "assets/products/lf06-2.webp", "assets/products/lf06-3.webp", "assets/products/lf06-4.webp", "assets/products/lf06-5.webp"],
    desc: "Fragrance you can turn on and off. A 100ml (Tank) tank, a ceramic cover and a quiet mist, so the fragrance is yours to control. Oil is sold separately, which means you pick the scent.",
    features: [
      "Capacity: 100ml (Tank)",
      "Size: 15.3cm (H) x 9.2cm (Dia.)",
      "Fragrance not included",
      "Cover: Ceramic",
      "Splash water cover and water tank: Polypropylene (PP)",
      "Foot: Silicone"
    ],
    specs: { "Type": "Electric aroma diffuser", "Capacity": "100ml (Tank)", "Size": "15.3cm (H) x 9.2cm (Dia.)", "Colour": "Sage green (Light green)" },
    care: "Clean according to given instructions." },

  { id: "lf07", name: "Bergamot, Blossom & Musk Room Spray 100ml", cat: "Lifestyle", room: "Lifestyle", price: 8.5, memberPrice: 7.5, sku: "SH-11039", tag: "New", ph: "", img: "assets/products/lf07-1.webp",
    imgs: ["assets/products/lf07-1.webp", "assets/products/lf07-2.webp", "assets/products/lf07-3.webp", "assets/products/lf07-4.webp", "assets/products/lf07-5.webp"],
    desc: "For the thirty seconds before people arrive. 100ml in a bottle small enough to keep in the drawer by the door. Two pumps and the room reads as cared for.",
    features: [
      "Volume: 100ml",
      "Bergamot and blossom musk fragrance",
      "Home Retreat collection"
    ],
    specs: { "Type": "Room spray", "Volume": "100ml" },
    care: "Spray into the air rather than onto fabric or polished surfaces. Store upright and away from heat." },

  { id: "lf08", name: "Vetiver & Smoked Cedar Room Spray 100ml", cat: "Lifestyle", room: "Lifestyle", price: 9, memberPrice: 8, sku: "SH-11040", tag: "New", ph: "", img: "assets/products/lf08-1.webp",
    imgs: ["assets/products/lf08-1.webp", "assets/products/lf08-2.webp", "assets/products/lf08-3.webp", "assets/products/lf08-4.webp", "assets/products/lf08-5.webp"],
    desc: "For the thirty seconds before people arrive. 100ml in a bottle small enough to keep in the drawer by the door. Two pumps and the room reads as cared for.",
    features: [
      "Volume: 100ml",
      "Vetiver and smoked cedar fragrance",
      "Home Retreat collection"
    ],
    specs: { "Type": "Room spray", "Volume": "100ml" },
    care: "Spray into the air rather than onto fabric or polished surfaces. Store upright and away from heat." },

  { id: "lf09", name: "Mahogany, Teakwood & Vanilla Room Spray 100ml", cat: "Lifestyle", room: "Lifestyle", price: 9, memberPrice: 8, sku: "SH-11041", tag: "New", ph: "", img: "assets/products/lf09-1.webp",
    imgs: ["assets/products/lf09-1.webp", "assets/products/lf09-2.webp", "assets/products/lf09-3.webp", "assets/products/lf09-4.webp", "assets/products/lf09-5.webp"],
    desc: "For the thirty seconds before people arrive. 100ml in a bottle small enough to keep in the drawer by the door. Two pumps and the room reads as cared for.",
    features: [
      "Volume: 100ml",
      "Mahogany teakwood and vanilla fragrance",
      "Home Retreat collection"
    ],
    specs: { "Type": "Room spray", "Volume": "100ml" },
    care: "Spray into the air rather than onto fabric or polished surfaces. Store upright and away from heat." },

  { id: "lf10", name: "Mahogany Scented Candle, Extra Large", cat: "Lifestyle", room: "Lifestyle", price: 20, memberPrice: 18, sku: "SH-11042", tag: "New", ph: "", img: "assets/products/lf10-1.webp",
    imgs: ["assets/products/lf10-1.webp", "assets/products/lf10-2.webp", "assets/products/lf10-3.webp", "assets/products/lf10-4.webp", "assets/products/lf10-5.webp"],
    desc: "A candle big enough to be the thing on the table. A soy wax blend with a long burn and a wide melt pool, so the scent carries past the table it is standing on. 15cm (H) x 12cm (W) x 8cm (D).",
    features: [
      "Size: 15cm (H) x 12cm (W) x 8cm (D)",
      "Product weight: 1.394kg",
      "Mahogany teakwood and vanilla fragrance",
      "Double wick",
      "Ribbed design",
      "Home retreat collection"
    ],
    specs: { "Type": "Scented candle", "Size": "15cm (H) x 12cm (W) x 8cm (D)" },
    care: "Burn for two to three hours the first time, until the melt pool reaches the edge. Trim the wick to 5mm before each burn, and never leave a burning candle unattended." },

  { id: "lf11", name: "Vetiver & Fig Soy Wax Ceramic Candle, Extra Large", cat: "Lifestyle", room: "Lifestyle", price: 25, memberPrice: 22.5, sku: "SH-11043", tag: "New", ph: "", img: "assets/products/lf11-1.webp",
    imgs: ["assets/products/lf11-1.webp", "assets/products/lf11-2.webp", "assets/products/lf11-3.webp", "assets/products/lf11-4.webp", "assets/products/lf11-5.webp"],
    desc: "A candle big enough to be the thing on the table. A soy wax blend with a long burn and a wide melt pool, so the scent carries past the table it is standing on. 16.5cm (H) x 13.2cm (Dia.). XL VETIVER FIG CANDLE.",
    features: [
      "Size: 16.5cm (H) x 13.2cm (Dia.)",
      "Product weight: 2.1kg",
      "XL VETIVER FIG CANDLE",
      "Vetiver and fig fragrance",
      "100% soy candle",
      "Extra large size"
    ],
    specs: { "Type": "Scented candle", "Size": "16.5cm (H) x 13.2cm (Dia.)", "Material": "XL VETIVER FIG CANDLE", "Colour": "Green" },
    care: "Burn for two to three hours the first time, until the melt pool reaches the edge. Trim the wick to 5mm before each burn, and never leave a burning candle unattended." },

  { id: "lf12", name: "Vanilla & Amber Soy Wax Candle, Extra Large", cat: "Lifestyle", room: "Lifestyle", price: 20, memberPrice: 18, sku: "SH-11044", tag: "New", ph: "", img: "assets/products/lf12-1.webp",
    imgs: ["assets/products/lf12-1.webp", "assets/products/lf12-2.webp", "assets/products/lf12-3.webp", "assets/products/lf12-4.webp"],
    desc: "A candle big enough to be the thing on the table. A soy wax blend with a long burn and a wide melt pool, so the scent carries past the table it is standing on. 16.4cm (H) x 13cm (Dia.) (with lid). Vessel: Glass.",
    features: [
      "Size: 16.4cm (H) x 13cm (Dia.) (with lid)",
      "Product weight: 1.79kg",
      "Vessel: Glass",
      "Vanilla and amber fragrance",
      "Triple wick",
      "Soy wax blend"
    ],
    specs: { "Type": "Scented candle", "Size": "16.4cm (H) x 13cm (Dia.) (with lid)", "Material": "Vessel: Glass, Wax: Soy and paraffin wax, Wick: Cotton" },
    care: "Burn for two to three hours the first time, until the melt pool reaches the edge. Trim the wick to 5mm before each burn, and never leave a burning candle unattended." },

  { id: "lf13", name: "Pure Lavender Essential Oil 10ml", cat: "Lifestyle", room: "Lifestyle", price: 6, memberPrice: 5, sku: "SH-11045", tag: "New", ph: "", img: "assets/products/lf13-1.webp",
    imgs: ["assets/products/lf13-1.webp", "assets/products/lf13-2.webp", "assets/products/lf13-3.webp"],
    desc: "One oil, many uses. 10ml of pure oil for a diffuser, a burner, a bath or a few drops on a cloth in the linen cupboard.",
    features: [
      "Volume: 10ml",
      "10ml pure essential oil",
      "For diffusers, burners and baths"
    ],
    specs: { "Type": "Essential oil", "Volume": "10ml" },
    care: "Dilute before applying to skin. Keep the bottle closed, out of sunlight and away from children and pets, some oils are not safe around animals." },

  { id: "lf14", name: "Pure Eucalyptus Essential Oil 10ml", cat: "Lifestyle", room: "Lifestyle", price: 6, memberPrice: 5, sku: "SH-11046", tag: "New", ph: "", img: "assets/products/lf14-1.webp",
    imgs: ["assets/products/lf14-1.webp", "assets/products/lf14-2.webp", "assets/products/lf14-3.webp", "assets/products/lf14-4.webp"],
    desc: "One oil, many uses. 10ml of pure oil for a diffuser, a burner, a bath or a few drops on a cloth in the linen cupboard.",
    features: [
      "Volume: 10ml",
      "10ml pure essential oil",
      "For diffusers, burners and baths"
    ],
    specs: { "Type": "Essential oil", "Volume": "10ml" },
    care: "Dilute before applying to skin. Keep the bottle closed, out of sunlight and away from children and pets, some oils are not safe around animals." },

  { id: "lf15", name: "Pure Peppermint Essential Oil 10ml", cat: "Lifestyle", room: "Lifestyle", price: 6, memberPrice: 5, sku: "SH-11047", tag: "New", ph: "", img: "assets/products/lf15-1.webp",
    imgs: ["assets/products/lf15-1.webp", "assets/products/lf15-2.webp", "assets/products/lf15-3.webp"],
    desc: "One oil, many uses. 10ml of pure oil for a diffuser, a burner, a bath or a few drops on a cloth in the linen cupboard.",
    features: [
      "Volume: 10ml",
      "10ml pure essential oil",
      "For diffusers, burners and baths"
    ],
    specs: { "Type": "Essential oil", "Volume": "10ml" },
    care: "Dilute before applying to skin. Keep the bottle closed, out of sunlight and away from children and pets, some oils are not safe around animals." },

  { id: "lf16", name: "Pure Lemon Essential Oil 10ml", cat: "Lifestyle", room: "Lifestyle", price: 6, memberPrice: 5, sku: "SH-11048", tag: "New", ph: "", img: "assets/products/lf16-1.webp",
    imgs: ["assets/products/lf16-1.webp", "assets/products/lf16-2.webp", "assets/products/lf16-3.webp"],
    desc: "One oil, many uses. 10ml of pure oil for a diffuser, a burner, a bath or a few drops on a cloth in the linen cupboard.",
    features: [
      "Volume: 10ml",
      "10ml pure essential oil",
      "For diffusers, burners and baths"
    ],
    specs: { "Type": "Essential oil", "Volume": "10ml" },
    care: "Dilute before applying to skin. Keep the bottle closed, out of sunlight and away from children and pets, some oils are not safe around animals." },

  { id: "lf17", name: "Ruffle-Trim Cotton Knit Throw", cat: "Lifestyle", room: "Lifestyle", price: 25, memberPrice: 22.5, sku: "SH-11049", tag: "New", ph: "", img: "assets/products/lf17-1.webp",
    imgs: ["assets/products/lf17-1.webp", "assets/products/lf17-2.webp", "assets/products/lf17-3.webp", "assets/products/lf17-4.webp"],
    desc: "The throw that ends up on whoever sat down first. Cotton and generously sized, for the end of a bed or the arm of a sofa. The kind of thing that quietly decides where everyone sits.",
    features: [
      "Cotton",
      "Generous throw size",
      "Soft handle"
    ],
    specs: { "Type": "Throw", "Material": "Cotton" },
    care: "Delicate fabric may pull if handled incorrectly. Treat with care. Clean washing machine filter and drum before and after initial washes. Warm hand or machine wash seperately on wool cycle. Do not bleach or tumble dry. Do not tumble dry. Pull to shape while wet. Warm iron if required. Dry cleanabl." },

  { id: "lf18", name: "Chunky Textured Cotton Knit Throw", cat: "Lifestyle", room: "Lifestyle", price: 37.5, memberPrice: 33.5, sku: "SH-11050", tag: "New", ph: "", img: "assets/products/lf18-1.webp",
    imgs: ["assets/products/lf18-1.webp", "assets/products/lf18-2.webp", "assets/products/lf18-3.webp"],
    desc: "The throw that ends up on whoever sat down first. 100% cotton and generously sized, for the end of a bed or the arm of a sofa. The kind of thing that quietly decides where everyone sits.",
    features: [
      "100% Cotton",
      "Generous throw size",
      "Soft handle"
    ],
    specs: { "Type": "Throw", "Material": "100% Cotton" },
    care: "Warm gentle machine wash separately, do not bleach, do not tumble dry. Pull back into shape while damp and dry flat." },

  { id: "lf19", name: "Brushed Check Throw, Peacoat", cat: "Lifestyle", room: "Lifestyle", price: 25, memberPrice: 22.5, sku: "SH-11051", tag: "New", ph: "", img: "assets/products/lf19-1.webp",
    imgs: ["assets/products/lf19-1.webp", "assets/products/lf19-2.webp", "assets/products/lf19-3.webp"],
    desc: "The throw that ends up on whoever sat down first. 100% polyester and generously sized, for the end of a bed or the arm of a sofa. The kind of thing that quietly decides where everyone sits.",
    features: [
      "100% Polyester",
      "Generous throw size",
      "Soft handle"
    ],
    specs: { "Type": "Throw", "Material": "100% Polyester" },
    care: "Warm gentle machine wash separately. Do not bleach or tumble dry. Line dry in shade. Do not wring or soak. Dry thoroughly before re-use. Do not iron. Do not dry clean ⊗." },

  { id: "lf20", name: "Coral Fleece Throw", cat: "Lifestyle", room: "Lifestyle", price: 7.5, memberPrice: 6.5, sku: "SH-11052", tag: "New", ph: "", img: "assets/products/lf20-1.webp",
    imgs: ["assets/products/lf20-1.webp", "assets/products/lf20-2.webp", "assets/products/lf20-3.webp", "assets/products/lf20-4.webp", "assets/products/lf20-5.webp"],
    desc: "The throw that ends up on whoever sat down first. Polyester and generously sized, for the end of a bed or the arm of a sofa. The kind of thing that quietly decides where everyone sits.",
    features: [
      "Size: 100cm (L) x 1.5cm (H) x 75cm (W)",
      "Polyester",
      "Fleece fabric"
    ],
    specs: { "Type": "Throw", "Size": "100cm (L) x 1.5cm (H) x 75cm (W)", "Material": "Polyester", "Colour": "Blue" },
    care: "Machine wash according to instructions on the care label." },

  { id: "lf21", name: "Coral Fleece Robe", cat: "Lifestyle", room: "Lifestyle", price: 56, memberPrice: 50, sku: "SH-11053", tag: "New", ph: "", img: "assets/products/lf21-1.webp",
    imgs: ["assets/products/lf21-1.webp", "assets/products/lf21-2.webp", "assets/products/lf21-3.webp", "assets/products/lf21-4.webp", "assets/products/lf21-5.webp"],
    desc: "For the hour before you are dressed. Soft fleece, deep pockets and a tie belt, cut long enough to be worth getting out of bed for. 100% Recycled Polyester.",
    features: [
      "100% Recycled Polyester",
      "Soft fleece",
      "Tie belt and deep pockets"
    ],
    specs: { "Type": "Robe", "Material": "100% Recycled Polyester" },
    care: "WARM DELICATE MACHINE WASH WITH LIKE COLOURS. DO NOT BLEACH. DO NOT TUMBLE DRY. WARM IRON (DO NOT IRON PRINTS OR EMBELLISHMENTS). DO NOT DRY CLEAN." },

  { id: "lf22", name: "Quilted Slippers, Pink", cat: "Lifestyle", room: "Lifestyle", price: 19, memberPrice: 17, sku: "SH-11054", tag: "New", ph: "", img: "assets/products/lf22-1.webp",
    imgs: ["assets/products/lf22-1.webp", "assets/products/lf22-2.webp", "assets/products/lf22-3.webp"],
    desc: "Indoor shoes, which every house needs more of. Quilted upper, soft sole, and warm without being hot.",
    features: [
      "Quilted upper",
      "Soft sole",
      "Indoor wear"
    ],
    specs: { "Type": "Slippers" },
    care: "Spot clean with a damp cloth and air dry away from direct heat. Not for outdoor wear." },

  { id: "lf23", name: "Ribbed Plush Hot Water Bottle 2L", cat: "Lifestyle", room: "Lifestyle", price: 13, memberPrice: 11.5, sku: "SH-11055", tag: "New", ph: "", img: "assets/products/lf23-1.webp",
    imgs: ["assets/products/lf23-1.webp", "assets/products/lf23-2.webp"],
    desc: "An old idea that still works better than most new ones. Two litres, in a plush cover that stays comfortable against skin. Good for cold feet, a sore back, or a bed that needs warming before you get in it. Plush and rubber.",
    features: [
      "Capacity: 2 litres",
      "Size: 36cm (H) x 21cm (W)",
      "Plush and rubber",
      "Ribbed design",
      "Plush detail",
      "High quality rubber"
    ],
    specs: { "Type": "Hot water bottle", "Capacity": "2 litres", "Size": "36cm (H) x 21cm (W)", "Material": "Plush and rubber", "Colour": "Stone (Grey)" },
    care: "Fill to no more than two-thirds with hot, not boiling, water and expel the air before sealing. Replace the bottle every two years, or sooner if the rubber perishes." },

  { id: "lf24", name: "Hot Water Bottle 2L, Ice Blue", cat: "Lifestyle", room: "Lifestyle", price: 8.5, memberPrice: 7.5, sku: "SH-11056", tag: "New", ph: "", img: "assets/products/lf24-1.webp",
    imgs: ["assets/products/lf24-1.webp", "assets/products/lf24-2.webp"],
    desc: "An old idea that still works better than most new ones. Two litres, in a plush cover that stays comfortable against skin. Good for cold feet, a sore back, or a bed that needs warming before you get in it. HOT WATER BOTTLE - BLUE.",
    features: [
      "HOT WATER BOTTLE - BLUE",
      "2 litre capacity",
      "Plush removable cover"
    ],
    specs: { "Type": "Hot water bottle", "Material": "HOT WATER BOTTLE - BLUE" },
    care: "Fill to no more than two-thirds with hot, not boiling, water and expel the air before sealing. Replace the bottle every two years, or sooner if the rubber perishes." },

  { id: "lf25", name: "Padded Sleep Eye Mask, Pink", cat: "Lifestyle", room: "Lifestyle", price: 7, memberPrice: 6, sku: "SH-11057", tag: "New", ph: "", img: "assets/products/lf25-1.webp",
    imgs: ["assets/products/lf25-1.webp", "assets/products/lf25-2.webp", "assets/products/lf25-3.webp", "assets/products/lf25-4.webp"],
    desc: "Dark enough to sleep in on a plane. Padded, light on the face, and wide enough to block the gap by your nose. Polyester (Filling and fibre).",
    features: [
      "Size: 9.5cm (H) x 19.5cm (W)",
      "Polyester (Filling and fibre)",
      "Soft stretchy strap",
      "Bow print",
      "One size"
    ],
    specs: { "Type": "Sleep eye mask", "Size": "9.5cm (H) x 19.5cm (W)", "Material": "Polyester (Filling and fibre)", "Colour": "Pink" },
    care: "Hand wash in cool water and air dry flat. Do not wring, bleach or tumble dry." },

  { id: "lf26", name: "Wellness Life Planner Journal (160 Pages)", cat: "Lifestyle", room: "Lifestyle", price: 8, memberPrice: 7, sku: "SH-11058", tag: "New", ph: "", img: "assets/products/lf26-1.webp",
    imgs: ["assets/products/lf26-1.webp", "assets/products/lf26-2.webp", "assets/products/lf26-3.webp", "assets/products/lf26-4.webp", "assets/products/lf26-5.webp"],
    desc: "Paper, for the things that do not belong on a phone. Lined pages that take ink without bleeding.",
    features: [
      "Lined pages",
      "Ink-friendly paper",
      "Flat-opening binding"
    ],
    specs: { "Type": "Notebook / planner" },
    care: "Keep dry. A soft eraser lifts pencil without scuffing the paper." },

  { id: "lf27", name: "A5 Hardcover Notebook, Blue", cat: "Lifestyle", room: "Lifestyle", price: 9, memberPrice: 8, sku: "SH-11059", tag: "New", ph: "", img: "assets/products/lf27-1.webp",
    imgs: ["assets/products/lf27-1.webp", "assets/products/lf27-2.webp", "assets/products/lf27-3.webp", "assets/products/lf27-4.webp", "assets/products/lf27-5.webp"],
    desc: "Paper, for the things that do not belong on a phone. Lined pages that take ink without bleeding, 240 pages of them. 80GSM paper.",
    features: [
      "Size: 21cm (H) x 14.8cm (W) x 2cm (D)",
      "Page count: 240 pages",
      "Paper size: A5",
      "Side elastic band closure",
      "Ruled paper",
      "Acid-free lined paper"
    ],
    specs: { "Type": "Notebook / planner", "Size": "21cm (H) x 14.8cm (W) x 2cm (D)", "Colour": "Blue", "Page count": "240 pages", "Paper size": "A5" },
    care: "Keep dry. A soft eraser lifts pencil without scuffing the paper." },

  { id: "lf28", name: "2027 Monthly Planner", cat: "Lifestyle", room: "Lifestyle", price: 4, memberPrice: 3.5, sku: "SH-11060", tag: "New", ph: "", img: "assets/products/lf28-1.webp",
    imgs: ["assets/products/lf28-1.webp", "assets/products/lf28-2.webp", "assets/products/lf28-3.webp", "assets/products/lf28-4.webp", "assets/products/lf28-5.webp"],
    desc: "Paper, for the things that do not belong on a phone. Lined pages that take ink without bleeding.",
    features: [
      "Lined pages",
      "Ink-friendly paper",
      "Flat-opening binding"
    ],
    specs: { "Type": "Notebook / planner" },
    care: "Keep dry. A soft eraser lifts pencil without scuffing the paper." },

  { id: "lf29", name: "Canvas Shopper Tote", cat: "Lifestyle", room: "Lifestyle", price: 7, memberPrice: 6, sku: "SH-11061", tag: "New", ph: "", img: "assets/products/lf29-1.webp",
    imgs: ["assets/products/lf29-1.webp", "assets/products/lf29-2.webp"],
    desc: "The bag that lives by the door. Roomy, flat-bottomed and strong enough for a market run or a laptop and lunch. Cotton.",
    features: [
      "Cotton",
      "Roomy flat-bottomed shape",
      "Carry handles"
    ],
    specs: { "Type": "Tote bag", "Material": "Cotton" },
    care: "Warm hand wash separately - refer to care label for further details." },

  { id: "lf30", name: "Belted Top-Handle Work Tote", cat: "Lifestyle", room: "Lifestyle", price: 31.5, memberPrice: 28, sku: "SH-11062", tag: "New", ph: "", img: "assets/products/lf30-1.webp",
    imgs: ["assets/products/lf30-1.webp", "assets/products/lf30-2.webp", "assets/products/lf30-3.webp"],
    desc: "The bag that lives by the door. Roomy, flat-bottomed and strong enough for a market run or a laptop and lunch.",
    features: [
      "Roomy flat-bottomed shape",
      "Carry handles",
      "Everyday weight"
    ],
    specs: { "Type": "Tote bag" },
    care: "Spot clean with a damp cloth and mild soap, then air dry out of direct sun." },

  { id: "lf31", added: "2026-11-05", name: "Morandi Orange Tassel Knit Throw", cat: "Lifestyle", room: "Lifestyle", price: 320, memberPrice: 300, sku: "SH-11328", tag: "New", ph: "", img: "assets/products/lf31.webp",
    imgs: ["assets/products/lf31.webp", "assets/products/lf31-2.webp", "assets/products/lf31-3.webp", "assets/products/lf31-4.webp", "assets/products/lf31-5.webp"],
    sizes: [{ label: "127 x 170cm", price: 320 }, { label: "127 x 220cm", price: 320 }],
    colours: [{ name: "Morandi Orange", hex: "#c4602f" }],
    desc: "Wrap yourself in warmth with this soft knitted throw in a muted Morandi orange, a warm, earthy tone that brings instant cosiness to any room. A textured waffle-style knit and playful tassel edges give it a relaxed, hand-crafted look, while the lightweight blend of acrylic, polyester and cotton keeps it warm without feeling heavy. Drape it over the sofa, fold it at the end of the bed, or take it along for naps, picnics, camping and road trips. Choose 127 x 170cm for the couch or 127 x 220cm for extra coverage on the bed.",
    features: [
      "Muted Morandi orange tone that adds warmth to neutral rooms",
      "Textured knit with decorative tassel edges",
      "Soft, lightweight and warm blend of acrylic, polyester and cotton",
      "Holds its shape and resists pilling with everyday use",
      "Two sizes: 127 x 170cm (sofa) and 127 x 220cm (bed)",
      "Great for the couch, bed, naps, camping and travel",
      "Sold as 1 throw, ready to use or gift"
    ],
    specs: { "Type": "Throw blanket", "Material": "Acrylic, polyester and cotton blend", "Construction": "Knitted with tassel edges", "Colour": "Morandi Orange", "Pack size": "1 throw" },
    dimensions: "127 x 170cm or 127 x 220cm", weight: "1.0 kg (127 x 170cm), 1.3 kg (127 x 220cm), approx.",
    boxContents: ["1 x knitted throw"],
    care: "Hand wash or gentle machine wash cold in a laundry bag. Do not bleach or tumble dry; dry flat in the shade. Trim any loose threads rather than pulling them." },
  { id: "lf32", added: "2026-11-06", variantImg: {"Dark Grey":"assets/products/lf32-2.webp", "Beige":"assets/products/lf32-3.webp", "Blue-grey":"assets/products/lf32-4.webp", "Light Grey":"assets/products/lf32-5.webp", "Khaki":"assets/products/lf32-6.webp", "Pink":"assets/products/lf32-7.webp", "Olive Green":"assets/products/lf32-8.webp", "Fruit Green":"assets/products/lf32-9.webp"}, name: "Cloud Rib Plush Blanket", cat: "Lifestyle", room: "Lifestyle", price: 205, memberPrice: 155, sku: "SH-11330", tag: "New", ph: "", img: "assets/products/lf32.webp",
    imgs: ["assets/products/lf32.webp", "assets/products/lf32-2.webp", "assets/products/lf32-3.webp", "assets/products/lf32-4.webp", "assets/products/lf32-5.webp", "assets/products/lf32-6.webp", "assets/products/lf32-7.webp", "assets/products/lf32-8.webp", "assets/products/lf32-9.webp"],
    sizes: [{ label: "100 x 150cm", price: 205, memberPrice: 155 }, { label: "127 x 152cm", price: 215, memberPrice: 159 }, { label: "154 x 206cm", price: 229, memberPrice: 169 }, { label: "200 x 230cm", price: 259, memberPrice: 185 }, { label: "226 x 226cm", price: 269, memberPrice: 189 }, { label: "226 x 244cm", price: 279, memberPrice: 195 }, { label: "226 x 274cm", price: 295, memberPrice: 205 }],
    colours: [{ name: "Dark Grey", hex: "#4b4f54" }, { name: "Beige", hex: "#ece0cc" }, { name: "Blue-grey", hex: "#7d93a6" }, { name: "Light Grey", hex: "#8e8a88" }, { name: "Khaki", hex: "#b8a88f" }, { name: "Pink", hex: "#d99a95" }, { name: "Olive Green", hex: "#8c9a5b" }, { name: "Fruit Green", hex: "#a7b84a" }],
    desc: "Sink into deep, cloud-soft comfort with this thick ribbed plush blanket. Wide channels of fluffy, double-sided fleece trap warmth without feeling heavy, and the sculpted stripes give it a luxe, boutique-hotel look on the bed or sofa. Use it as a cosy top blanket in winter, a soft over-sheet, a sofa throw, or a snuggly nap and travel blanket. Available in eight colours, from moody Dark Grey and Blue-grey to soft Beige, Pink and fresh Fruit Green.",
    features: [
      "Thick, double-sided plush fleece for warmth all year round",
      "Wide ribbed stripes for a sculpted, luxe look",
      "Soft, smooth and anti-static against the skin",
      "Use as a bed blanket, over-sheet, sofa throw or nap blanket",
      "Eight colours to suit any bedroom or living room"
    ],
    specs: { "Type": "Plush blanket / throw", "Material": "Flannel fleece (polyester)", "Construction": "Double-sided, ribbed", "Pack size": "1 blanket" },
    dimensions: "100 x 150cm (throw) up to 226 x 274cm (king bed)", weight: "0.9 kg (100 x 150cm) to 3.7 kg (226 x 274cm), approx.",
    boxContents: ["1 x plush blanket"],
    care: "Machine wash cold on a gentle cycle in a laundry bag, or hand wash. Do not bleach. Tumble dry low or line dry in the shade, then shake out to fluff the pile." },
  // ── Tables: coffee, side & console ──


























































































































































































  /* ===== Ready to ship — trade supplier, ready to ship ===== */
  { id: "lx01", name: "Aviva Spill Resistant Fabric Ottoman in Light Beige", cat: "Living Room", room: "Living Room", price: 816, memberPrice: 764, sku: "SH-11249", tag: "New", ph: "", img: "assets/products/lx01.webp",
    imgs: ["assets/products/lx01.webp", "assets/products/lx01-2.webp", "assets/products/lx01-3.webp", "assets/products/lx01-4.webp", "assets/products/lx01-5.webp"],
    fastShip: true,
    desc: "Oversized Light Beige Square Ottoman in Spill-Resistant Fabric Create an inviting sanctuary in your lounge with ultimate comfort and stress-free maintenance. Upholstered in premium OEKO-TEX STANDARD 100 certified spill-resistant fabric , the Aviva Spill Resistant Fabric Ottoman in Light Beige offers a soft, linen-look texture engineered to repel liquid mishaps while adding contemporary warmth to your living space.",
    specs: { "Type": "Living Room > Sofas & Seating > Stools & Ottomans" } },

  { id: "lx02", name: "Rita 4 Seater Electric Recliner Sofa in Light Taupe Brown", cat: "Living Room", room: "Living Room", price: 4567, memberPrice: 4140, sku: "SH-11250", tag: "New", ph: "", img: "assets/products/lx02.webp",
    imgs: ["assets/products/lx02.webp", "assets/products/lx02-2.webp", "assets/products/lx02-3.webp", "assets/products/lx02-4.webp", "assets/products/lx02-5.webp"],
    fastShip: true,
    desc: "Four Seats, 62cm Deep, Powered at Both Ends Seat depth matters if you like to sit right back. The Rita 4 Seater Electric Recliner Sofa in Light Taupe Brown has 62cm-deep seats, which is deep enough to sit back into with your legs up rather than perching on the front edge. The left and right seats recline by button ; the middle two stay upright, so someone can sit normally beside a person who's fully stretched out. The middle module has a manual three-position headrest, and USB and USB-C ports are built in.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx03", name: "Talor 2 Seater Modular Curved Velvet Sofa in Cream White", cat: "Living Room", room: "Living Room", price: 1971, memberPrice: 1804, sku: "SH-11251", tag: "New", ph: "", img: "assets/products/lx03.webp",
    imgs: ["assets/products/lx03.webp", "assets/products/lx03-2.webp", "assets/products/lx03-3.webp", "assets/products/lx03-4.webp", "assets/products/lx03-5.webp"],
    fastShip: true,
    desc: "Settle Into the Flexible Comfort of a Modular Sofa Imagine sinking into a sofa that feels like it’s been shaped just for you. The Talor Modular Curved Sofa wraps you in soft, performance velvet and deep cushioning, turning your lounge room into a calm, cosy retreat at the end of a long day. Deep Comfort in a 2 Seater Modular Curved Sofa With its elegant curved silhouette and generous seat depth, the Talor Two Seater is made for proper lounging – feet up, movie on, and drink within reach.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx04", name: "Vornell 6 Seater Performance Velvet Modular Chaise Sofa in Deep Mocha Brown", cat: "Living Room", room: "Living Room", price: 4391, memberPrice: 3982, sku: "SH-11252", tag: "New", ph: "", img: "assets/products/lx04.webp",
    imgs: ["assets/products/lx04.webp", "assets/products/lx04-2.webp", "assets/products/lx04-3.webp", "assets/products/lx04-4.webp", "assets/products/lx04-5.webp"],
    fastShip: true,
    desc: "Turn your lounge into the comfy heart of home Imagine a sofa big enough for everyone – kids, friends, pets – without it feeling cramped or cluttered. The Vornell Performance Modular 6 Seater Corner Sofa in deep mocha brown wraps your living room in plush comfort, with a practical performance fabric that’s ready for real Australian living. Ultimate corner comfort With its generous 301 x 301cm footprint and deep 70cm seating, this Vornell configuration creates a true corner retreat where everyone gets a good spot.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx05", name: "Margot Oval Fluted Coffee Table with Storage in Natural", cat: "Living Room", room: "Living Room", price: 926, memberPrice: 863, sku: "SH-11253", tag: "New", ph: "", img: "assets/products/lx05.webp",
    imgs: ["assets/products/lx05.webp", "assets/products/lx05-2.webp", "assets/products/lx05-3.webp", "assets/products/lx05-4.webp", "assets/products/lx05-5.webp"],
    fastShip: true,
    desc: "Beautiful from Every Angle. Storage from Both Sides. Bring texture, softness and clever storage to your living room with the Margot Oval Fluted Coffee Table in Natural . Its generous oval profile is wrapped in vertical fluted detailing, creating a sculptural centrepiece that looks considered from every angle. Two concealed drawers are positioned on opposite sides of the table, keeping remotes, coasters and everyday essentials neatly out of sight while remaining easy to reach from either side of your living space.",
    specs: { "Type": "Living Room > Tables > Coffee Tables" } },

  { id: "lx71", added: "2026-11-05", arriveDays: [10, 18], variantImg: {"Matte Black + Brown Glass Side Table":"assets/products/lx71-2.webp?v=2", "Cloud White + Grey Glass Side Table":"assets/products/lx71-5.webp?v=2", "Cloud White + Brown Glass Side Table":"assets/products/lx71-6.webp?v=2", "Italian Grey + Black Glass Side Table":"assets/products/lx71-7.webp?v=2"}, name: "Luna Round Slate Coffee Table & Glass Side Table Set", cat: "Living Room", room: "Living Room", price: 4100, memberPrice: 3800, sku: "SH-11329", tag: "New", ph: "", img: "assets/products/lx71.webp",
    imgs: ["assets/products/lx71.webp", "assets/products/lx71-2.webp?v=2", "assets/products/lx71-5.webp?v=2", "assets/products/lx71-6.webp?v=2", "assets/products/lx71-7.webp?v=2"],
    colours: [{ name: "Matte Black + Brown Glass Side Table", hex: "#2b2724" }, { name: "Cloud White + Grey Glass Side Table", hex: "#ece6dc" }, { name: "Cloud White + Brown Glass Side Table", hex: "#ece6dc" }, { name: "Italian Grey + Black Glass Side Table", hex: "#8d8c8a" }],
    desc: "Bring quiet, Italian-inspired luxury to your living room with the Luna coffee table set. A round slate (sintered stone) coffee table in matte black, cloud white or Italian grey sits on a deep, rounded drum base, paired with a matching 60cm side table with a slim column base and a round tempered glass top. Together they create a layered, designer arrangement beside the sofa that suits modern apartments and family homes alike. Sold as a set of two.",
    features: [
      "Round slate (sintered stone) top that resists heat, stains and scratches",
      "Deep drum base for a solid, sculptural look",
      "Set of two: round coffee table plus matching glass-top side table",
      "Four colour combinations in Matte Black, Cloud White or Italian Grey",
      "Coffee table 80cm wide x 33cm high, side table 60cm wide x 45cm high",
      "Compact size suits apartments and smaller living rooms"
    ],
    specs: { "Type": "Coffee table & side table set", "Top": "Slate (sintered stone)", "Side table top": "Tempered glass", "Pieces": "2", "Shape": "Round", "Assembly required": "Yes", "Use": "Living room" },
    dimensions: "Coffee table 80cm W x 80cm D x 33cm H. Side table 60cm W x 60cm D x 45cm H", weight: "50 kg (set), approx.",
    boxContents: ["1 x round coffee table", "1 x glass-top side table"],
    care: "Wipe the slate top with a soft damp cloth and mild detergent, then dry. Clean the glass with glass cleaner sprayed onto a cloth. Use coasters under hot dishes and avoid dragging heavy objects across the surface." },
  { id: "lx72", added: "2026-11-06", variantImg: {"Black Glass":"assets/products/lx72.webp", "Black Marble Glass":"assets/products/lx72-5.webp"}, name: "Verona Swivel Coffee Table with Hidden Drawers", cat: "Living Room", room: "Living Room", price: 3100, memberPrice: 2800, sku: "SH-11331", tag: "New", ph: "", img: "assets/products/lx72.webp",
    imgs: ["assets/products/lx72.webp", "assets/products/lx72-2.webp", "assets/products/lx72-3.webp", "assets/products/lx72-4.webp", "assets/products/lx72-5.webp", "assets/products/lx72-6.webp"],
    colours: [{ name: "Black Glass", hex: "#1c1b1a" }, { name: "Black Marble Glass", hex: "#2a2726" }],
    desc: "Meet Verona, a two-tier coffee table that moves with you. The upper tier swivels out to open up extra space for drinks, books or serving, then turns back for a neat, compact look. Glossy glass tops in solid black or a striking black marble pattern sit on a soft taupe body with gently rounded corners, and two hidden pull-out drawers keep remotes, magazines and everyday clutter out of sight. A stylish, practical centrepiece for modern living rooms.",
    features: [
      "Upper tier swivels out for extra surface space",
      "Two hidden pull-out drawers for concealed storage",
      "Tempered safety glass tops that resist wear and scratches",
      "Sturdy multi-layer solid wood frame built to carry weight",
      "Low-odour nano baked paint finish that resists fading",
      "Two finishes: Black Glass or Black Marble Glass"
    ],
    specs: { "Type": "Swivel coffee table", "Shape": "Square", "Top": "Tempered glass", "Frame": "Multi-layer solid wood board", "Finish": "Nano baked paint (taupe)", "Storage": "2 drawers", "Assembly required": "Yes", "Use": "Living room" },
    dimensions: "Base table 80cm W x 80cm D x 20.5cm H. Swivel upper tier 50cm W x 50cm D x 14.5cm H",
    boxContents: ["1 x coffee table base with drawers", "1 x swivel upper tier", "Tempered glass tops"],
    care: "Clean the glass with glass cleaner sprayed onto a soft cloth. Wipe the painted body with a soft damp cloth and dry. Use coasters under hot drinks and avoid dragging heavy objects across the glass." },
  { id: "lx73", added: "2026-11-06", arriveDays: [13, 47], variantImg: {"Taupe Grey":"assets/products/lx73.webp", "Champagne Gold":"assets/products/lx73-4.webp"}, name: "Siena Marble Drum Coffee Table & Sculpted Side Table Set", cat: "Living Room", room: "Living Room", price: 5100, memberPrice: 4800, sku: "SH-11332", tag: "New", ph: "", img: "assets/products/lx73.webp",
    imgs: ["assets/products/lx73.webp", "assets/products/lx73-2.webp", "assets/products/lx73-3.webp", "assets/products/lx73-4.webp", "assets/products/lx73-5.webp", "assets/products/lx73-6.webp", "assets/products/lx73-7.webp", "assets/products/lx73-8.webp"],
    colours: [{ name: "Taupe Grey", hex: "#8a847d" }, { name: "Champagne Gold", hex: "#c9a86a" }],
    sizes: [{ label: "80cm coffee table + 60cm side table", price: 4900, memberPrice: 4600 }, { label: "90cm coffee table + 60cm side table", price: 4900, memberPrice: 4600 }],
    desc: "Make the living room the place everyone gathers with the Siena set. A generous round coffee table pairs a deep, dramatic marble top in rich forest and charcoal tones with a soft cream drum base, lifted on a slim pedestal so it appears to float. Hidden drawers tuck away remotes, books and everyday clutter. Beside it, a 60cm side table rises on a bold, angled sculptural column, bringing gallery-style shape to the arrangement. Choose a taupe grey or warm champagne gold finish on the trims and side table base, with the coffee table in 80cm or 90cm. Sold as a set of two.",
    features: [
      "Sold as a matching set: round coffee table plus side table",
      "Natural marble tops with deep, one-of-a-kind veining",
      "Hidden drawers in the drum base keep clutter out of sight",
      "Sculptural angled column base on the side table",
      "Coffee table in 80cm or 90cm, side table 60cm",
      "Two finishes: Taupe Grey or Champagne Gold"
    ],
    specs: { "Type": "Coffee table and side table set", "Shape": "Round", "Top": "Natural marble", "Finish": "Taupe grey or champagne gold", "Storage": "Drawers in coffee table base", "Pieces": "2", "Assembly required": "Minimal", "Use": "Living room" },
    dimensions: "Coffee table 80cm or 90cm diameter x 35cm H. Side table 60cm diameter x 50cm H",
    boxContents: ["1 x round coffee table with drawers", "1 x round side table"],
    care: "Wipe the marble with a soft damp cloth and dry straight away. Use coasters under drinks and avoid acidic spills such as wine, citrus or vinegar, which can mark natural stone. Avoid harsh or abrasive cleaners." },
  { id: "lx74", added: "2026-11-06", arriveDays: [6, 11], variantImg: {"Dark Khaki":"assets/products/lx74.webp", "White":"assets/products/lx74-7.webp", "Charcoal":"assets/products/lx74-8.webp"}, name: "Lumen Smart Bedside Table with Wireless Charging & Night Glow", cat: "Bedroom", room: "Bedroom", price: 1800, memberPrice: 1500, sku: "SH-11333", tag: "New", ph: "", img: "assets/products/lx74.webp",
    imgs: ["assets/products/lx74.webp", "assets/products/lx74-2.webp", "assets/products/lx74-3.webp", "assets/products/lx74-4.webp", "assets/products/lx74-5.webp", "assets/products/lx74-6.webp", "assets/products/lx74-7.webp", "assets/products/lx74-8.webp", "assets/products/lx74-9.webp"],
    colours: [{ name: "Dark Khaki", hex: "#b89a7e" }, { name: "White", hex: "#f2efe9" }, { name: "Charcoal", hex: "#2a2a2a" }],
    optionLabel: "Version",
    sizes: [{ label: "Standard", price: 1600, memberPrice: 1300 }, { label: "Standard + Bluetooth speaker", price: 1620, memberPrice: 1320 }, { label: "Standard + password lock", price: 1620, memberPrice: 1320 }, { label: "Standard + Bluetooth speaker + password lock", price: 1640, memberPrice: 1340 }],
    desc: "Meet Lumen, the bedside table that does more than hold your book. Set your phone down on the glass top to charge it wirelessly overnight, or plug in through the built-in USB-C port. A halo of LED light frames the top in your choice of three light colours, and a motion-sensor night light glows warmly beneath the base when you get up, lighting your way without waking anyone. Two smooth-gliding drawers keep chargers, glasses and night-time essentials tidy, and the solid pine frame wrapped in soft-touch microfibre leather brings a calm, modern look to any bedroom. Upgrade to add a built-in Bluetooth speaker, a password-lock drawer for valuables, or both.",
    features: [
      "Built-in wireless charging pad on the tempered glass top",
      "USB-C charging port for a second device",
      "LED light ring with 3 light colours",
      "Motion-sensor night light under the base",
      "Two smooth-glide drawers for bedside storage",
      "Solid pine frame wrapped in microfibre leather",
      "Optional upgrades: Bluetooth speaker and/or password-lock drawer",
      "Three colours: Dark Khaki, White or Charcoal"    ],
    specs: { "Type": "Smart bedside table", "Frame": "Solid pine wood", "Covering": "Microfibre leather", "Top": "Tempered glass", "Drawers": "2", "Charging": "Wireless charging pad and USB-C port", "Lighting": "3-colour LED light ring and motion-sensor night light", "Versions": "Standard, + Bluetooth speaker, + password lock, or both", "Power": "Plugs into a wall socket", "Use": "Bedroom" },
    dimensions: "50cm W x 40cm D x 48cm H",
    boxContents: ["1 x smart bedside table", "Power cable"],
    care: "Wipe the leather and frame with a soft damp cloth and dry. Clean the glass top with glass cleaner sprayed onto a cloth, not directly onto the table. Unplug before cleaning and keep liquids away from the charging area." },
  { id: "lx06", name: "Fiona 120cm Curved Sintered Stone Coffee Table in Walnut", cat: "Living Room", room: "Living Room", price: 805, memberPrice: 755, sku: "SH-11254", tag: "New", ph: "", img: "assets/products/lx06.webp",
    imgs: ["assets/products/lx06.webp", "assets/products/lx06-2.webp", "assets/products/lx06-3.webp", "assets/products/lx06-4.webp", "assets/products/lx06-5.webp"],
    fastShip: true,
    desc: "Sculptural Curves, Made for Everyday Living Make a statement with the Fiona 120cm Curved Sintered Stone Coffee Table in Walnut. Defined by its flowing organic profile and sculptural curved base, Fiona brings a softer, architectural presence to contemporary living spaces. A travertine-look sintered stone top adds beautiful natural-inspired texture while offering the durability needed for everyday life.",
    specs: { "Type": "Living Room > Tables > Coffee Tables" } },

  { id: "lx07", name: "Daria 80cm Organic Curve Coffee Table in Travertine", cat: "Living Room", room: "Living Room", price: 706, memberPrice: 665, sku: "SH-11255", tag: "New", ph: "", img: "assets/products/lx07.webp",
    imgs: ["assets/products/lx07.webp", "assets/products/lx07-2.webp", "assets/products/lx07-3.webp", "assets/products/lx07-4.webp", "assets/products/lx07-5.webp"],
    fastShip: true,
    desc: "Organic Form, Sculptural Presence Bring a softer statement to your living room with the Daria 80cm Organic Curve Coffee Table in Travertine . Inspired by the flowing shape of a flower, its distinctive curved tabletop creates a sculptural silhouette that changes as you move around the room. A travertine-look sintered stone surface brings warm, natural stone-inspired character to the design while offering the durability needed for everyday living.",
    specs: { "Type": "Living Room > Tables > Coffee Tables" } },

  { id: "lx08", name: "Matias 220cm Storage TV Unit in Oak", cat: "Living Room", room: "Living Room", price: 1036, memberPrice: 962, sku: "SH-11256", tag: "New", ph: "", img: "assets/products/lx08.webp",
    imgs: ["assets/products/lx08.webp", "assets/products/lx08-2.webp", "assets/products/lx08-3.webp", "assets/products/lx08-4.webp", "assets/products/lx08-5.webp"],
    fastShip: true,
    desc: "Make Your Living Room Feel More Polished Imagine a lounge room that finally feels organised, calm and pulled together. The Matias 220cm Storage TV Unit in Oak gives your entertainment area a design-led look while hiding away the everyday clutter that usually steals the spotlight. More Space, Less Clutter With its generous 220cm width, Matias is made for larger TVs and spacious living zones that need more than a basic stand.",
    specs: { "Type": "Living Room > Storage > TV Units & Entertainment Units" } },

  { id: "lx09", name: "Rowena 220cm Storage TV Unit in Oak", cat: "Living Room", room: "Living Room", price: 893, memberPrice: 834, sku: "SH-11257", tag: "New", ph: "", img: "assets/products/lx09.webp",
    imgs: ["assets/products/lx09.webp", "assets/products/lx09-2.webp", "assets/products/lx09-3.webp", "assets/products/lx09-4.webp", "assets/products/lx09-5.webp"],
    fastShip: true,
    desc: "Your Living Room Just Got Smarter Imagine finally having a place for everything that usually clutters your entertainment area. The Rowena 220cm Storage TV Unit brings clean lines, hidden storage and a warm oak finish together, so your living room feels calmer, neater and more considered. Storage That Works Behind the Scenes From gaming gear and remotes to books, chargers and those bits you never know where to put, this TV unit keeps it all tucked away without sacrificing style.",
    specs: { "Type": "Living Room > Storage > TV Units & Entertainment Units" } },

  { id: "lx10", name: "Roux Round Mother of Pearl Console Table in Mocha Cream", cat: "Living Room", room: "Living Room", price: 1388, memberPrice: 1279, sku: "SH-11258", tag: "New", ph: "", img: "assets/products/lx10.webp",
    imgs: ["assets/products/lx10.webp", "assets/products/lx10-2.webp", "assets/products/lx10-3.webp", "assets/products/lx10-4.webp", "assets/products/lx10-5.webp"],
    fastShip: true,
    desc: "Elevate Your Entryway with the Roux Artisan Mother of Pearl Console Table The Roux Mother of Pearl Console Table brings instant designer style to your entryway, hallway, or living room. Its handcrafted mother of pearl inlay and mocha cream finish create a subtle shimmer that catches the light and elevates any space. Premium Entryway Furniture Australia Designed for sophisticated Australian living, this luxury mother of pearl console table in mocha cream brings timeless elegance to your entryway.",
    specs: { "Type": "Living Room > Storage > Hallway Furniture" } },

  { id: "lx11", name: "Sasha Arched Boucle Dining Chair in Black (Set of 2)", cat: "Kitchenware", room: "Kitchenware", price: 519, memberPrice: 497, sku: "SH-11259", tag: "New", ph: "", img: "assets/products/lx11.webp",
    imgs: ["assets/products/lx11.webp", "assets/products/lx11-2.webp", "assets/products/lx11-3.webp", "assets/products/lx11-4.webp", "assets/products/lx11-5.webp"],
    fastShip: true,
    desc: "Bring Soft Style to Every Meal Imagine your dining area feeling sharper, cosier and instantly more polished the moment you pull up a chair. The Sasha Arched Boucle Dining Chair in Black blends rich texture with a sculptural silhouette, giving you an easy way to refresh everyday dining with comfort and character. Sharing the signature arched styling seen in the Gilles Dining Chair , Sasha brings a generously proportioned silhouette designed to feel spacious, inviting and easy to style.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Chairs" } },

  { id: "lx12", name: "Audrey Curved Boucle Barstool Set of 2 in Cream White", cat: "Kitchenware", room: "Kitchenware", price: 519, memberPrice: 497, sku: "SH-11260", tag: "New", ph: "", img: "assets/products/lx12.webp",
    imgs: ["assets/products/lx12.webp", "assets/products/lx12-2.webp", "assets/products/lx12-3.webp", "assets/products/lx12-4.webp", "assets/products/lx12-5.webp"],
    fastShip: true,
    desc: "Want Stylish Barstools That Are Actually Comfortable? It’s easy to find a nice-looking barstool, but comfort is often lacking. The Audrey Boucle Barstool Set fixes that—giving you both comfort and design in one practical package. Whether it’s breakfast or cocktails, these stools make every seat feel like the best in the house. Luxe Looks, Everyday Function Covered in plush cream white boucle and padded with thick foam, these barstools bring a soft, elevated feel to your home bar or kitchen counter.",
    specs: { "Type": "Dining & kitchen > Dining > Bar Stools" } },

  /* ===== Ready-to-ship sofas — batch 2, ready to ship ===== */
  { id: "lx13", name: "Parisa 3 Seater Tufted Velvet Sofa in Beige", cat: "Living Room", room: "Living Room", price: 1377, memberPrice: 1269, sku: "SH-11261", tag: "New", ph: "", img: "assets/products/lx13.webp",
    imgs: ["assets/products/lx13.webp", "assets/products/lx13-2.webp", "assets/products/lx13-3.webp", "assets/products/lx13-4.webp", "assets/products/lx13-5.webp"],
    fastShip: true,
    desc: "Spacious 3-Seater Comfort for Modern Living The Parisa 3 Seater Tufted Velvet Sofa in Beige is engineered specifically for living rooms and open-plan spaces where comfortable seating and sleek design are essential. At 230 cm wide , this 3-seater sofa comfortably accommodates three adults without overcrowding your room layout, delivering functional daily seating and an elevated interior look.",
    specs: { "Type": "Living Room > Sofas & Seating" } },

  { id: "lx14", name: "Pippa 4 Seater Electric Recliner Sofa in Light Taupe Brown", cat: "Living Room", room: "Living Room", price: 4479, memberPrice: 4061, sku: "SH-11262", tag: "New", ph: "", img: "assets/products/lx14.webp",
    imgs: ["assets/products/lx14.webp", "assets/products/lx14-2.webp", "assets/products/lx14-3.webp", "assets/products/lx14-4.webp", "assets/products/lx14-5.webp"],
    fastShip: true,
    desc: "Four Seats, Powered Recliners at Both Ends The Pippa 4 Seater Electric Recliner Sofa in Light Taupe Brown puts electric recliners on the left and right seats , so two people can stretch out while the middle two stay upright. That suits a room where half the household is watching a film and the other half is eating dinner. The headrests are manual, not powered: they have three positions and are adjusted by hand rather than by button. Pippa seats four across a 310cm width, with each seat 77cm wide.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx15", name: "Norah 5 Seater Boucle Sofa Set with Armless Chairs in Chocolate Brown", cat: "Living Room", room: "Living Room", price: 2345, memberPrice: 2141, sku: "SH-11263", tag: "New", ph: "", img: "assets/products/lx15.webp",
    imgs: ["assets/products/lx15.webp", "assets/products/lx15-2.webp", "assets/products/lx15-3.webp", "assets/products/lx15-4.webp", "assets/products/lx15-5.webp"],
    fastShip: true,
    desc: "Transform your living room into a stylish, cosy retreat with the Norah 5-Seater Boucle Sofa Set. This chocolate brown boucle sofa blends modern elegance with everyday comfort, featuring a solid wood frame and high-density fresh foam cushions for lasting support. Perfect for gatherings or relaxing evenings, it offers generous seating and arrives fully assembled — ready to enjoy. Comes with a warranty for peace of mind.",
    specs: { "Type": "Living Room > Sofas & Seating" } },

  { id: "lx16", name: "Rendon 3 Seater Performance Boucle Sofa in Cream White", cat: "Living Room", room: "Living Room", price: 1949, memberPrice: 1784, sku: "SH-11264", tag: "New", ph: "", img: "assets/products/lx16.webp",
    imgs: ["assets/products/lx16.webp", "assets/products/lx16-2.webp", "assets/products/lx16-3.webp", "assets/products/lx16-4.webp", "assets/products/lx16-5.webp"],
    fastShip: true,
    desc: "Sink Into Sculptural Comfort Imagine coming home, kicking off your shoes, and melting straight into a sofa that feels like a warm hug. The Rendon 3 Seater Bouclé Sofa wraps your living room in soft curves and cosy texture, turning everyday lounging into a little luxury. With its pristine Cream White hue and sophisticated silhouette, the Rendon is the ultimate hero piece for any modern Australian home.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx17", name: "Janelle 191cm Curved Boucle 3 Seater Sofa in Cream White", cat: "Living Room", room: "Living Room", price: 1564, memberPrice: 1438, sku: "SH-11265", tag: "New", ph: "", img: "assets/products/lx17.webp",
    imgs: ["assets/products/lx17.webp", "assets/products/lx17-2.webp", "assets/products/lx17-3.webp", "assets/products/lx17-4.webp", "assets/products/lx17-5.webp"],
    fastShip: true,
    desc: "Janelle 191cm Boucle 3-Seater Curved Sofa - Cream White Upgrade your home with the luxurious Janelle Bouclé 3-Seater Curved Sofa, designed to offer ultimate comfort and style. This spacious 191cm wide 3-seater lounge is perfect for modern, contemporary, and minimalist interiors. Upholstered in premium cream-white bouclé fabric, it provides both softness and elegance.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx18", name: "Brisol 3.5 Seater Velvet Curved Sofa in Cream White", cat: "Living Room", room: "Living Room", price: 1751, memberPrice: 1606, sku: "SH-11266", tag: "New", ph: "", img: "assets/products/lx18.webp",
    imgs: ["assets/products/lx18.webp", "assets/products/lx18-2.webp", "assets/products/lx18-3.webp", "assets/products/lx18-4.webp", "assets/products/lx18-5.webp"],
    fastShip: true,
    desc: "Sophisticated Curves for Relaxed Australian Living Imagine sinking into a generous 3.5 seater sofa designed to embrace your room with its soft, organic lines. The Brisol Velvet Curved Sofa in Cream White wraps your living space in contemporary luxe, while the durable performance velvet fabric quietly takes care of the everyday bumps, spills, and family life.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx19", name: "Monica 4-Seater Electric Recliner Sofa in Light Greige", cat: "Living Room", room: "Living Room", price: 4523, memberPrice: 4101, sku: "SH-11267", tag: "New", ph: "", img: "assets/products/lx19.webp",
    imgs: ["assets/products/lx19.webp", "assets/products/lx19-2.webp", "assets/products/lx19-3.webp", "assets/products/lx19-4.webp", "assets/products/lx19-5.webp"],
    fastShip: true,
    desc: "Four Seats, Two of Them Powered Recliners The Monica 4-Seater Electric Recliner Sofa in Light Greige reclines at both ends while the two middle seats stay upright. Two people can stretch right out with powered footrests and headrests , while anyone eating dinner or reading sits normally beside them. On a fully reclining sofa, everybody's committed to the same position. USB and USB-C ports are built in, so phones charge from the arm. Monica is built from three modules, each with an 83cm seat width.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx20", name: "Anica 3 Seater Boucle Sofa Bed in Cream White", cat: "Living Room", room: "Living Room", price: 1047, memberPrice: 972, sku: "SH-11268", tag: "New", ph: "", img: "assets/products/lx20.webp",
    imgs: ["assets/products/lx20.webp", "assets/products/lx20-2.webp", "assets/products/lx20-3.webp", "assets/products/lx20-4.webp", "assets/products/lx20-5.webp"],
    fastShip: true,
    desc: "Anica 3 Seater Boucle Sofa Bed – Cream White The Anica Three-Seater Boucle Sofa Bed in Cream White is a stunning accent to the interior design of any house. Select multipurpose furniture to maximize available space when decorating a studio or efficiency apartment. Since it is made specifically for these kinds of scenarios, the Anica 3-Seat Boucle Sofa Bed is the ideal addition to your home. This multipurpose sofa offers more than just comfortable seating.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx21", name: "Talven 5 Seater Modular Curved Boucle Sofa in Cream White", cat: "Living Room", room: "Living Room", price: 3082, memberPrice: 2804, sku: "SH-11269", tag: "New", ph: "", img: "assets/products/lx21.webp",
    imgs: ["assets/products/lx21.webp", "assets/products/lx21-2.webp", "assets/products/lx21-3.webp", "assets/products/lx21-4.webp", "assets/products/lx21-5.webp"],
    fastShip: true,
    desc: "Sink Into Sculptural Comfort Imagine the whole family piling onto one seriously comfy sofa that actually fits everyone without feeling bulky. The Talven 5 Seater Modular Curved Bouclé Sofa wraps your living room in soft, sculptural curves and lounge-all-day comfort, turning movie nights and lazy Sundays into a luxury experience. In a pristine Cream White , it creates a bright, airy focal point that elevates any modern interior.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx22", name: "Corina 4 Seater Modular Boucle Sofa in Cream White", cat: "Living Room", room: "Living Room", price: 2950, memberPrice: 2685, sku: "SH-11270", tag: "New", ph: "", img: "assets/products/lx22.webp",
    imgs: ["assets/products/lx22.webp", "assets/products/lx22-2.webp", "assets/products/lx22-3.webp", "assets/products/lx22-4.webp", "assets/products/lx22-5.webp"],
    fastShip: true,
    desc: "Corina 4 Seater Modular Boucle Sofa - Cream White If you have been looking for the best modular sofas you can get your hands on, you've come to the right place. Please look at our Corina 4-seater modular boucle sofa in cream white. Designed in separate components, this four-seater sofa can effortlessly come together as a whole in any shape you desire to befit the structure of your room.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx23", name: "Millie 3 Seater Spill-Resistant Modular Sofa in Light Beige", cat: "Living Room", room: "Living Room", price: 1663, memberPrice: 1527, sku: "SH-11271", tag: "New", ph: "", img: "assets/products/lx23.webp",
    imgs: ["assets/products/lx23.webp", "assets/products/lx23-2.webp", "assets/products/lx23-3.webp", "assets/products/lx23-4.webp", "assets/products/lx23-5.webp"],
    fastShip: true,
    desc: "Transform your home with the Millie 3-Seater Fabric Modular Sofa in light beige – the ultimate blend of comfort, style, and flexibility. This modern modular sofa is perfect for family lounging or entertaining, offering deep seating and a soft linen finish that works beautifully in both classic and contemporary living spaces. Wrapped in premium stain resistant fabric, this beige fabric sofa is soft to the touch yet durable enough for everyday life.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx24", name: "Ravo Slipcover 4 Seater Modular Sofa Set in Light Beige", cat: "Living Room", room: "Living Room", price: 2257, memberPrice: 2061, sku: "SH-11272", tag: "New", ph: "", img: "assets/products/lx24.webp",
    imgs: ["assets/products/lx24.webp", "assets/products/lx24-2.webp", "assets/products/lx24-3.webp", "assets/products/lx24-4.webp", "assets/products/lx24-5.webp"],
    fastShip: true,
    desc: "Give Your Living Room That Calm Designer Feel Create a serene, designer-inspired sanctuary in your home with the Ravo 4 Seater Modular Sofa Set in Light Beige. This premium beige modular lounge is designed to make your living space feel lighter, softer, and more inviting from the moment you step inside. Combining an airy, modern aesthetic with superior comfort, this 4 seater sofa is the ultimate choice for those seeking both style and versatility.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  /* ===== Ready to ship — batch 3: armchairs, beds, dining (ready to ship) ===== */
  { id: "lx25", name: "Nerida Boucle Swivel Dining Chair in Cream White", cat: "Dining", room: "Dining", price: 585, memberPrice: 557, sku: "SH-11273", tag: "New", ph: "", img: "assets/products/lx25.webp",
    imgs: ["assets/products/lx25.webp", "assets/products/lx25-2.webp", "assets/products/lx25-3.webp", "assets/products/lx25-4.webp", "assets/products/lx25-5.webp"],
    fastShip: true,
    desc: "Cream Boucle Dining Chair That Swivels a Full 360 Degrees The Nerida Boucle Swivel Dining Chair in Cream White turns, which changes how a dining chair behaves in a room. Getting up doesn't mean shuffling the chair backwards and scraping the floor — you turn and stand. Sitting sideways to talk to someone doesn't mean twisting your back. And once the meal is over, you can turn, stand and push the chair back in at the table.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Chairs" } },

  { id: "lx26", name: "Giselle Boucle Swivel Accent Chair in Cream White", cat: "Living Room", room: "Living Room", price: 717, memberPrice: 675, sku: "SH-11274", tag: "New", ph: "", img: "assets/products/lx26.webp",
    imgs: ["assets/products/lx26.webp", "assets/products/lx26-2.webp", "assets/products/lx26-3.webp", "assets/products/lx26-4.webp", "assets/products/lx26-5.webp"],
    fastShip: true,
    desc: "Cream Boucle Swivel Chair That Arrives Ready to Sit In The Giselle Boucle Swivel Accent Chair in Cream White turns up fully assembled — no allen key, no instruction sheet, no chair that wobbles because one bolt never quite tightened. You unbox it, carry it to the corner, and sit down. The shape is worth the trip: a sculptural curved backrest that wraps rather than sits flat behind you, upholstered in boucle , a looped fabric with enough texture that a plain cream chair reads as a considered one.",
    specs: { "Type": "Living Room > Sofas & Seating > Occasional Chairs" } },

  { id: "lx27", name: "Ohio Curved Boucle Dining Chair Set of 2 in Cream & Oak", cat: "Dining", room: "Dining", price: 552, memberPrice: 527, sku: "SH-11275", tag: "New", ph: "", img: "assets/products/lx27.webp",
    imgs: ["assets/products/lx27.webp", "assets/products/lx27-2.webp", "assets/products/lx27-3.webp", "assets/products/lx27-4.webp", "assets/products/lx27-5.webp"],
    fastShip: true,
    desc: "Soft curves and warm tones for effortless everyday dining Add comfort and calm to your dining space with the Ohio Bouclé Dining Chair Set in Cream with Oak finish legs. Upholstered in soft cream bouclé and designed with a modern curved backrest and armrests, these chairs offer a blend of relaxed elegance and everyday function in your dining room . The warm oak-toned base pairs beautifully with neutral interiors, making them an ideal choice for contemporary Australian homes.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Chairs" } },

  { id: "lx28", name: "Lunari Bouclé Curved Accent Chair in Beige", cat: "Living Room", room: "Living Room", price: 739, memberPrice: 695, sku: "SH-11276", tag: "New", ph: "", img: "assets/products/lx28.webp",
    imgs: ["assets/products/lx28.webp", "assets/products/lx28-2.webp", "assets/products/lx28-3.webp", "assets/products/lx28-4.webp", "assets/products/lx28-5.webp"],
    fastShip: true,
    desc: "Curve appeal comfort you can feel Imagine sinking into a cosy corner that looks as good as it feels. The Lunari Bouclé Curved Accent Chair wraps you in soft texture and smooth curves, bringing instant warmth and style to your space without the fuss. It is the smart little upgrade that makes every sit-down feel special.",
    specs: { "Type": "Living Room > Sofas & Seating > Occasional Chairs" } },

  { id: "lx29", name: "Brent Queen Gas Lift Bed in Cream White", cat: "Bedroom", room: "Bedroom", price: 1091, memberPrice: 1012, sku: "SH-11277", tag: "New", ph: "", img: "assets/products/lx29.webp",
    imgs: ["assets/products/lx29.webp", "assets/products/lx29-2.webp", "assets/products/lx29-3.webp", "assets/products/lx29-4.webp", "assets/products/lx29-5.webp"],
    fastShip: true,
    desc: "Wake Up to a Calm, Clutter-Free Sanctuary Imagine lifting your mattress with one smooth, effortless motion to reveal a hidden storage oasis. The Brent Queen Gas Lift Bed in Cream White is the ultimate lifestyle upgrade, turning your bedroom into an organised retreat. Wrapped in on-trend bouclé, this bed combines high-end texture with the serious storage smarts required for modern Australian living. Smart Storage Wrapped in Soft Bouclé Style Reclaim your wardrobe space and eliminate under-bed clutter for good.",
    specs: { "Type": "Bedroom > Bed frames > Queen" } },

  { id: "lx30", name: "Nikias King Boucle Fabric Bed Frame in Cream White", cat: "Bedroom", room: "Bedroom", price: 1058, memberPrice: 982, sku: "SH-11278", tag: "New", ph: "", img: "assets/products/lx30.webp",
    imgs: ["assets/products/lx30.webp", "assets/products/lx30-2.webp", "assets/products/lx30-3.webp", "assets/products/lx30-4.webp", "assets/products/lx30-5.webp"],
    fastShip: true,
    desc: "Elevate your bedroom into a luxurious sanctuary with the Nikias Tufted Bouclé King Bed Frame. Designed to offer the perfect blend of style and comfort, this king-size bed features a plush tufted headboard wrapped in premium bouclé fabric, delivering a cloud-like sensation that invites relaxation. Built with a solid wood frame for exceptional durability and backed by a 5-year warranty, the Nikias bed frame promises long-lasting support and elegance.",
    specs: { "Type": "Bedroom > Bed frames > King" } },

  { id: "lx31", name: "Maren King Storage Bed Base Set in Light Warm Beige", cat: "Bedroom", room: "Bedroom", price: 1113, memberPrice: 1032, sku: "SH-11279", tag: "New", ph: "", img: "assets/products/lx31.webp",
    imgs: ["assets/products/lx31.webp", "assets/products/lx31-2.webp", "assets/products/lx31-3.webp", "assets/products/lx31-4.webp", "assets/products/lx31-5.webp"],
    fastShip: true,
    desc: "Smart Storage Style for Your King Bedroom Imagine your bedroom feeling calm and clutter-free every single night. The Maren King Storage Bed Base Set in Light Warm Beige gives you that sophisticated boutique hotel look, combined with clever hidden storage that quietly tidies up the chaos of everyday life. It’s the ultimate foundation for a master suite that prioritizes both relaxation and organization.",
    specs: { "Type": "Bedroom > Bed frames > King" } },

  { id: "lx32", name: "Mara King Velvet Gas Lift Storage Bed Frame in Cream White", cat: "Bedroom", room: "Bedroom", price: 1432, memberPrice: 1319, sku: "SH-11280", tag: "New", ph: "", img: "assets/products/lx32.webp",
    imgs: ["assets/products/lx32.webp", "assets/products/lx32-2.webp", "assets/products/lx32-3.webp", "assets/products/lx32-4.webp", "assets/products/lx32-5.webp"],
    fastShip: true,
    desc: "A Luxury King-Sized Storage Bed Solution for Modern Australian Homes The Mara King Velvet Gas Lift Bed is the ultimate fusion of boutique hotel aesthetics and high-performance organisation. Wrapped in a crisp, elegant cream white velvet, this frame provides a bright, sophisticated anchor for your bedroom while offering a massive internal storage footprint.",
    specs: { "Type": "Bedroom > Bed frames > King" } },

  { id: "lx33", name: "Aeris 180cm Marble Look Dining Table With Wood Base in Oak", cat: "Kitchenware", room: "Kitchenware", price: 1179, memberPrice: 1091, sku: "SH-11281", tag: "New", ph: "", img: "assets/products/lx33.webp",
    imgs: ["assets/products/lx33.webp", "assets/products/lx33-2.webp", "assets/products/lx33-3.webp", "assets/products/lx33-4.webp", "assets/products/lx33-5.webp"],
    fastShip: true,
    desc: "Luxe dining made easy Imagine weeknight dinners and long Sunday lunches feeling a little more effortless. The Aeris 180cm Marble Look Dining Table With Wood Base brings the elegant look of marble with the smarts of a durable, easy-care surface—so you can focus on good food and better company. Everyday luxe without the worry With a hard-wearing sintered stone top and a warm timber-look base, Aeris gives you the designer feel you love without the maintenance stress.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Tables" } },

  { id: "lx34", name: "Faunus 200cm 8 Seater Dining Table in Natural", cat: "Kitchenware", room: "Kitchenware", price: 1124, memberPrice: 1042, sku: "SH-11282", tag: "New", ph: "", img: "assets/products/lx34.webp",
    imgs: ["assets/products/lx34.webp", "assets/products/lx34-2.webp", "assets/products/lx34-3.webp", "assets/products/lx34-4.webp", "assets/products/lx34-5.webp"],
    fastShip: true,
    desc: "Faunus 8 Seater Dining Table with Pillar Legs – Natural Upgrade your dining space with the Faunus 8 Seater Dining Table with Pillar Legs, a statement piece from our designer table collection. Designed for both elegance and durability, this designer luxe dining table is crafted from high-quality engineered wood with a smooth veneer finish, ensuring long-lasting beauty. Its oval shape and fluted pillar legs add a striking, contemporary touch to any dining area.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Tables" } },

  { id: "lx35", name: "Nola Chenille Fabric Dining Chair in Warm Ivory", cat: "Kitchenware", room: "Kitchenware", price: 596, memberPrice: 566, sku: "SH-11283", tag: "New", ph: "", img: "assets/products/lx35.webp",
    imgs: ["assets/products/lx35.webp", "assets/products/lx35-2.webp", "assets/products/lx35-3.webp", "assets/products/lx35-4.webp", "assets/products/lx35-5.webp"],
    fastShip: true,
    desc: "Ivory Chenille Dining Chair with Wraparound Arms The Nola Chenille Fabric Dining Chair in Warm Ivory is built for the part of dinner that happens after the plates are cleared. Wraparound arms curve out of the frame rather than being bolted on, so there's somewhere to rest your elbows through a second coffee, and the broad padded seat over high-density foam gives you room to shift position instead of sitting to attention.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Chairs" } },

  { id: "lx36", name: "Eisha Velvet Dining Chair in Deep Mocha Brown (Set of 2)", cat: "Kitchenware", room: "Kitchenware", price: 662, memberPrice: 626, sku: "SH-11284", tag: "New", ph: "", img: "assets/products/lx36.webp",
    imgs: ["assets/products/lx36.webp", "assets/products/lx36-2.webp", "assets/products/lx36-3.webp", "assets/products/lx36-4.webp", "assets/products/lx36-5.webp"],
    fastShip: true,
    desc: "Dress your dining in everyday luxury Imagine sitting down to a meal that feels a little more special every time. The Eisha Velvet Dining Chair set of 2 wraps you in soft velvet, comfy foam and effortless style, turning busy weeknight dinners and long Sunday lunches into moments you’ll actually want to linger over. Comfort you can sink into style you can show off With a supportive metal frame fully upholstered in plush velvet , Eisha blends modern lines with a welcoming feel.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Chairs" } },

  /* ===== Ready to ship — batch 4: outdoor, buffets, bedside, bar stools (ready to ship) ===== */
  { id: "lx37", name: "Lola 5 Seater Timber Outdoor Lounge Set in Beige", cat: "Outdoor", room: "Outdoor", price: 2092, memberPrice: 1913, sku: "SH-11285", tag: "New", ph: "", img: "assets/products/lx37.webp",
    imgs: ["assets/products/lx37.webp", "assets/products/lx37-2.webp", "assets/products/lx37-3.webp", "assets/products/lx37-4.webp", "assets/products/lx37-5.webp"],
    fastShip: true,
    desc: "Solid Acacia Wood Outdoor Lounge Setting with Nested Coffee Tables Turn your patio, deck, or balcony into an inviting open-air retreat. The Lola 5 Seater Timber Outdoor Lounge Set in Beige pairs natural solid acacia wood with warm, comfortable cushioning and a clever nested table design, creating a stylish focal point for casual entertaining.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Sofas & Lounges" } },

  { id: "lx38", name: "Reuben 6 Seater Outdoor Lounge Set in Beige", cat: "Outdoor", room: "Outdoor", price: 3489, memberPrice: 3170, sku: "SH-11286", tag: "New", ph: "", img: "assets/products/lx38.webp",
    imgs: ["assets/products/lx38.webp", "assets/products/lx38-2.webp", "assets/products/lx38-3.webp", "assets/products/lx38-4.webp", "assets/products/lx38-5.webp"],
    fastShip: true,
    desc: "Modern Aluminium Outdoor Corner Lounge Set with Ceramic Glass Table Transform your patio, balcony, or backyard into a sophisticated outdoor living area. The Reuben 6 Seater Outdoor Lounge Set in Beige combines a sleek powder-coated aluminium frame in a warm neutral beige with a durable ceramic tempered glass coffee table, bringing subtle contemporary elegance and resort-style relaxation to your home.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Sofas & Lounges" } },

  { id: "lx39", name: "Bayo 6-Seater Aluminium Outdoor Set in Grey", cat: "Outdoor", room: "Outdoor", price: 1597, memberPrice: 1467, sku: "SH-11287", tag: "New", ph: "", img: "assets/products/lx39.webp",
    imgs: ["assets/products/lx39.webp", "assets/products/lx39-2.webp", "assets/products/lx39-3.webp", "assets/products/lx39-4.webp", "assets/products/lx39-5.webp"],
    fastShip: true,
    desc: "Bayo 6 Seater Aluminium Outdoor Furniture Set Something that you can be proud of, our Bayo 6 Seater Aluminium Outdoor Furniture Set is designed for you to enjoy lounging outdoors! This outdoor furniture set promises a comfortable seating for up to 6 people. It is absolutely a crowd pleaser when having a party in your garden. Along with its thick 15cm seat and back cushion, it’s ready to serve you all day! Features: Comfortable seating for up to 6 people , perfect for relaxed patio seating and outdoor entertaining.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Sofas & Lounges" } },

  { id: "lx40", name: "Brujas 4 Seater Wicker Outdoor Lounge Set in Light Beige", cat: "Outdoor", room: "Outdoor", price: 1784, memberPrice: 1636, sku: "SH-11288", tag: "New", ph: "", img: "assets/products/lx40.webp",
    imgs: ["assets/products/lx40.webp", "assets/products/lx40-2.webp", "assets/products/lx40-3.webp", "assets/products/lx40-4.webp", "assets/products/lx40-5.webp"],
    fastShip: true,
    desc: "Brujas 4 Seater Wicker Outdoor Sofa Set Find the perfect outdoor sofa set for your lounge setting! Brujas 4 Seater Wicker Sofa Set is a perfect blend of style, comfort, and durability, designed to elevate your outdoor space. Crafted with meticulous attention to detail, this set effortlessly combines contemporary aesthetics with functional features to create an inviting seating arrangement.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Sofas & Lounges" } },

  { id: "lx41", name: "Adrian 100cm Storage Sideboard in Black", cat: "Living Room", room: "Living Room", price: 805, memberPrice: 755, sku: "SH-11289", tag: "New", ph: "", img: "assets/products/lx41.webp",
    imgs: ["assets/products/lx41.webp", "assets/products/lx41-2.webp", "assets/products/lx41-3.webp", "assets/products/lx41-4.webp", "assets/products/lx41-5.webp"],
    fastShip: true,
    desc: "Storage That Makes Your Space Feel Sorted Imagine walking into your dining room, hallway or living area and seeing everything tucked away and organised. The Adrian 100cm Storage Sideboard in Black brings that calm, put-together feeling. It pairs practical storage with a striking textured front and a bold black finish that sharpens the look of the room. Goodbye Clutter, Hello Style From dinnerware and table linen to everyday bits and pieces, Adrian helps you hide the mess without giving up on good looks.",
    specs: { "Type": "Living Room > Storage > Sideboards & Buffets" } },

  { id: "lx42", name: "Maris Storage Buffet in Oak", cat: "Living Room", room: "Living Room", price: 970, memberPrice: 903, sku: "SH-11290", tag: "New", ph: "", img: "assets/products/lx42.webp",
    imgs: ["assets/products/lx42.webp", "assets/products/lx42-2.webp", "assets/products/lx42-3.webp", "assets/products/lx42-4.webp", "assets/products/lx42-5.webp"],
    fastShip: true,
    desc: "Modern Oak Storage Buffet with Concealed 3-Door Design Keep your home tidy, organised, and beautifully styled. The Maris Storage Buffet in Oak combines clean contemporary lines with generous concealed storage, providing a low-profile solution for decluttering dining rooms, living areas, or entryways.",
    specs: { "Type": "Dining & kitchen > Dining > Storage Buffets" } },

  { id: "lx43", name: "Viola 227cm Sintered Stone Storage Buffet in Natural", cat: "Living Room", room: "Living Room", price: 1751, memberPrice: 1606, sku: "SH-11291", tag: "New", ph: "", img: "assets/products/lx43.webp",
    imgs: ["assets/products/lx43.webp", "assets/products/lx43-2.webp", "assets/products/lx43-3.webp", "assets/products/lx43-4.webp", "assets/products/lx43-5.webp"],
    fastShip: true,
    desc: "Bring Order to Grand Spaces Imagine walking into your dining or living area and seeing everything feel polished, spacious, and beautifully organised. The Viola 227cm Sintered Stone Storage Buffet in Natural is a statement piece that conceals everyday clutter, elevates your home, and delivers storage that works as hard as you do. With its extra-long 227cm design, the Viola Storage Buffet suits larger dining and living spaces with a clean, architectural profile.",
    specs: { "Type": "Dining & kitchen > Dining > Storage Buffets" } },

  { id: "lx44", name: "Melina 3 Drawer Fluted Bedside Table in Walnut", cat: "Bedroom", room: "Bedroom", price: 871, memberPrice: 814, sku: "SH-11292", tag: "New", ph: "", img: "assets/products/lx44.webp",
    imgs: ["assets/products/lx44.webp", "assets/products/lx44-2.webp", "assets/products/lx44-3.webp", "assets/products/lx44-4.webp", "assets/products/lx44-5.webp"],
    fastShip: true,
    desc: "Wide Walnut Bedside Table with Fluted Detail and Soft-Close Storage The Melina 3 Drawer Fluted Bedside Table in Walnut measures a generous 70cm across, enough for a lamp, your phone on charge, a book and a glass of water side by side rather than stacked. Vertical fluting catches the light across the drawer fronts, while softly rounded corners keep the warm walnut profile contemporary rather than boxy. Behind the fronts sit three deep drawers for chargers, books, reading glasses and sleep essentials.",
    specs: { "Type": "Bedroom > Bedside tables > White Bedside Tables" } },

  { id: "lx45", name: "Tamara 3 Drawer Bedside Table in Walnut", cat: "Bedroom", room: "Bedroom", price: 794, memberPrice: 745, sku: "SH-11293", tag: "New", ph: "", img: "assets/products/lx45.webp",
    imgs: ["assets/products/lx45.webp", "assets/products/lx45-2.webp", "assets/products/lx45-3.webp", "assets/products/lx45-4.webp", "assets/products/lx45-5.webp"],
    fastShip: true,
    desc: "Curved Walnut Bedside Table with Handleless Soft-Close Drawers The Tamara 3 Drawer Bedside Table in Walnut does away with knobs and pulls entirely. Integrated handles are cut into the drawer fronts, leaving an unbroken curved face, while the warm walnut tone keeps the whole piece rich and calm. Three drawers hold books, chargers, skincare and reading glasses, and the tabletop stays deep enough for a lamp and a glass of water side by side.",
    specs: { "Type": "Bedroom > Bedside tables" } },

  { id: "lx46", name: "Hamish 2 Drawer Fluted Bedside Table in White", cat: "Bedroom", room: "Bedroom", price: 464, memberPrice: 448, sku: "SH-11294", tag: "New", ph: "", img: "assets/products/lx46.webp",
    imgs: ["assets/products/lx46.webp", "assets/products/lx46-2.webp", "assets/products/lx46-3.webp", "assets/products/lx46-4.webp", "assets/products/lx46-5.webp"],
    fastShip: true,
    desc: "Fluted style tidy nights Imagine your bedroom feeling calm and clutter free every night. The Hamish 50cm 2 Drawer Fluted Bedside Table in white gives you a stylish spot for your book phone and glass of water while hiding away the rest in smooth push open drawers. Compact design big bedroom upgrade This clever little bedside makes the most of its 50cm size offering generous storage without taking over your room.",
    specs: { "Type": "Bedroom > Bedside tables > White Bedside Tables" } },

  { id: "lx47", name: "Jeremi High Back Linen Bar Stool Set of 2 in Wheat Oak", cat: "Kitchenware", room: "Kitchenware", price: 640, memberPrice: 606, sku: "SH-11295", tag: "New", ph: "", img: "assets/products/lx47.webp",
    imgs: ["assets/products/lx47.webp", "assets/products/lx47-2.webp", "assets/products/lx47-3.webp", "assets/products/lx47-4.webp", "assets/products/lx47-5.webp"],
    fastShip: true,
    desc: "Jeremi Linen Upholstered High-Back Bar Stool (Set of 2) – Wheat Oak Elevate your kitchen or bar area with the Jeremi Linen Upholstered High-Back Bar Stool (Set of 2), a perfect blend of designer luxe aesthetics and everyday comfort. Featuring wheat-coloured linen upholstery and hot-printed oak steel legs, these stylish stools add a sophisticated touch to any modern or contemporary space.",
    specs: { "Type": "Dining & kitchen > Dining > Bar Stools" } },

  { id: "lx48", name: "Haleo Curved Boucle Fabric Barstool in Cream White (Set of 2)", cat: "Kitchenware", room: "Kitchenware", price: 706, memberPrice: 665, sku: "SH-11296", tag: "New", ph: "", img: "assets/products/lx48.webp",
    imgs: ["assets/products/lx48.webp", "assets/products/lx48-2.webp", "assets/products/lx48-3.webp", "assets/products/lx48-4.webp", "assets/products/lx48-5.webp"],
    fastShip: true,
    desc: "Your kitchen just got comfier Settle into the Haleo Curved Bouclé Barstool and experience the perfect balance of modern design and inviting warmth. Wrapped in plush bouclé with softly contoured lines, it transforms your kitchen bench into a space made for relaxed Australian living—where everyday moments feel a touch more luxurious. Curved comfort at the perfect height With a supportive arched backrest and a 66.5cm seat height, Haleo makes long brekkies and late-night chats feel easy.",
    specs: { "Type": "Dining & kitchen > Dining > Bar Stools" } },

  /* ===== Ready to ship — batch 5: TV units, coffee & console tables ===== */
  { id: "lx49", name: "Gabrielle Modern TV Unit in Black", cat: "Living Room", room: "Living Room", price: 981, memberPrice: 913, sku: "SH-11297", tag: "New", ph: "", img: "assets/products/lx49.webp",
    imgs: ["assets/products/lx49.webp", "assets/products/lx49-2.webp", "assets/products/lx49-3.webp", "assets/products/lx49-4.webp", "assets/products/lx49-5.webp"],
    fastShip: true,
    desc: "A Living Room Upgrade That Does More Picture a TV unit that pulls the whole room together rather than adding to the clutter. The Gabrielle Modern TV Unit in Black combines sculptural design with smart storage in one practical piece, leaving your living area cleaner and calmer. Bold Look, Smarter Storage Layered curved detailing and a striking black finish give Gabrielle a refined modern edge in your entertainment space.",
    specs: { "Type": "Living Room > Storage > TV Units & Entertainment Units" } },

  { id: "lx50", name: "Vivienne 4 Door Fluted TV Unit in Oak", cat: "Living Room", room: "Living Room", price: 937, memberPrice: 873, sku: "SH-11298", tag: "New", ph: "", img: "assets/products/lx50.webp",
    imgs: ["assets/products/lx50.webp", "assets/products/lx50-2.webp", "assets/products/lx50-3.webp", "assets/products/lx50-4.webp", "assets/products/lx50-5.webp"],
    fastShip: true,
    desc: "Bring Order to Your Living Room Swap clutter for calm with a living room that finally feels polished. The Vivienne 4 Door Fluted TV Unit in Oak gives you a clean, design-led look while hiding away the bits and pieces that tend to pile up around the TV. Statement Style That Works Hard With its sculptural fluted front and warm oak finish, Vivienne helps your space feel more refined and pulled together.",
    specs: { "Type": "Living Room > Storage > TV Units & Entertainment Units" } },

  { id: "lx51", name: "Melanie Slimline TV Unit in Black", cat: "Living Room", room: "Living Room", price: 1003, memberPrice: 933, sku: "SH-11299", tag: "New", ph: "", img: "assets/products/lx51.webp",
    imgs: ["assets/products/lx51.webp", "assets/products/lx51-2.webp", "assets/products/lx51-3.webp", "assets/products/lx51-4.webp", "assets/products/lx51-5.webp"],
    fastShip: true,
    desc: "A Sleek Home for Screen Time Bring a calm, organised feel back to your living room. In a black finish, the Melanie Slimline TV Unit pulls your entertainment setup together with a streamlined look, practical storage and a low-profile design that keeps the space polished rather than cluttered. More Storage, Less Visual Mess Remotes, charging cables, gaming gear and everyday bits and pieces all have somewhere to go.",
    specs: { "Type": "Living Room > Storage > TV Units & Entertainment Units" } },

  { id: "lx52", name: "Galya Adjustable Entertainment Storage TV Unit in Teak", cat: "Living Room", room: "Living Room", price: 750, memberPrice: 705, sku: "SH-11300", tag: "New", ph: "", img: "assets/products/lx52.webp",
    imgs: ["assets/products/lx52.webp", "assets/products/lx52-2.webp", "assets/products/lx52-3.webp", "assets/products/lx52-4.webp", "assets/products/lx52-5.webp"],
    fastShip: true,
    desc: "Galya Extendable Storage TV Unit - Teak Bring warmth and functionality to your living room with the Galya Extendable Storage TV Unit in Teak. This sleek and modern entertainment unit is designed to grow with your space, featuring an extendable length from 203cm to 269cm. The rich teak finish adds a timeless elegance, making it a versatile piece for both contemporary and classic interiors.",
    specs: { "Type": "Living Room > Storage > TV Units & Entertainment Units" } },

  { id: "lx53", name: "Nicole 120cm Coffee Table with Organic Curve in Walnut", cat: "Living Room", room: "Living Room", price: 530, memberPrice: 507, sku: "SH-11301", tag: "New", ph: "", img: "assets/products/lx53.webp",
    imgs: ["assets/products/lx53.webp", "assets/products/lx53-2.webp", "assets/products/lx53-3.webp", "assets/products/lx53-4.webp", "assets/products/lx53-5.webp"],
    fastShip: true,
    desc: "Bring rich warmth and modern style into your living room with the Nicole 120cm Oval Coffee Table with organic curve in Walnut. Designed with smooth curves and a deep walnut finish, this table creates a statement piece that blends seamlessly with both contemporary and timeless interiors. Backed by Living’s 3-year warranty, it’s a centrepiece you can enjoy for years to come. Features Organic oval shape – sculptural silhouette that enhances both modern and classic spaces.",
    specs: { "Type": "Living Room > Tables > Coffee Tables" } },

  { id: "lx54", name: "Adina 80cm Organic Curve Coffee Table in Travertine Look", cat: "Living Room", room: "Living Room", price: 706, memberPrice: 665, sku: "SH-11302", tag: "New", ph: "", img: "assets/products/lx54.webp",
    imgs: ["assets/products/lx54.webp", "assets/products/lx54-2.webp", "assets/products/lx54-3.webp", "assets/products/lx54-4.webp", "assets/products/lx54-5.webp"],
    fastShip: true,
    desc: "Organic Stone Meets Polished Steel Make a contemporary statement with the Adina 80cm Organic Curve Coffee Table in Travertine Look. Its free-form sintered stone top flows in soft, asymmetric curves, creating a sculptural silhouette that looks different from every angle. A polished stainless-steel cylindrical base brings a striking material contrast, reflecting the surrounding space while giving Adina a clean, contemporary presence.",
    specs: { "Type": "Living Room > Tables > Coffee Tables" } },

  { id: "lx55", name: "Naya Round Mother of Pearl Coffee Table in Mocha Cream", cat: "Living Room", room: "Living Room", price: 1234, memberPrice: 1141, sku: "SH-11303", tag: "New", ph: "", img: "assets/products/lx55.webp",
    imgs: ["assets/products/lx55.webp", "assets/products/lx55-2.webp", "assets/products/lx55-3.webp", "assets/products/lx55-4.webp", "assets/products/lx55-5.webp"],
    fastShip: true,
    desc: "Turn Your Living Room into a Calm Escape Picture a coffee table that quietly anchors your space while adding a soft shimmer every time the light changes. The Naya Round Mother of Pearl Coffee Table in Mocha Cream brings a warm modern feel to your lounge making everyday moments on the sofa feel a little more styled and special. Warm Tones Modern Shape With its 106cm round top and subtle checkered mocha cream pattern Naya creates a generous practical surface that still feels light and elegant.",
    specs: { "Type": "Living Room > Tables > Coffee Tables" } },

  { id: "lx56", name: "Verena Round Porcelain Coffee Table Set with Walnut Base", cat: "Living Room", room: "Living Room", price: 1069, memberPrice: 992, sku: "SH-11304", tag: "New", ph: "", img: "assets/products/lx56.webp",
    imgs: ["assets/products/lx56.webp", "assets/products/lx56-2.webp", "assets/products/lx56-3.webp", "assets/products/lx56-4.webp", "assets/products/lx56-5.webp"],
    fastShip: true,
    desc: "Versatile 2-Piece Nesting Design for Modern Living The Verena Round Porcelain Coffee Table Set with Walnut Base is engineered specifically for living rooms and lounge areas where versatile surface space and clean design are essential. Featuring a 2-piece nesting configuration , this coffee table set provides dual surface levels that can be grouped together or styled separately, delivering functional everyday utility without crowding your floor plan.",
    specs: { "Type": "Living Room > Tables > Coffee Tables" } },

  { id: "lx57", name: "Valdor Signature Concrete Console Table in Travertine", cat: "Living Room", room: "Living Room", price: 1025, memberPrice: 953, sku: "SH-11305", tag: "New", ph: "", img: "assets/products/lx57.webp",
    imgs: ["assets/products/lx57.webp", "assets/products/lx57-2.webp", "assets/products/lx57-3.webp", "assets/products/lx57-4.webp", "assets/products/lx57-5.webp"],
    fastShip: true,
    desc: "Transform Your Hallway into a Feature Elevate your entryway with sculptural designer furniture. The Valdor Signature Concrete Console Table in Travertine brings high-end stone aesthetics with a soft cloud-like top and bold rounded base that transforms your home from the moment you enter. Stone-Look Beauty, Everyday Durability The travertine-inspired finish and solid concrete construction deliver both style and substance. Built to handle real life, from styling vases and art to holding keys and daily essentials.",
    specs: { "Type": "Living Room > Storage > Hallway Furniture" } },

  { id: "lx58", name: "Watson 2 Drawers Console Table Steel Legs White", cat: "Living Room", room: "Living Room", price: 607, memberPrice: 576, sku: "SH-11306", tag: "New", ph: "", img: "assets/products/lx58.webp",
    imgs: ["assets/products/lx58.webp", "assets/products/lx58-2.webp", "assets/products/lx58-3.webp", "assets/products/lx58-4.webp", "assets/products/lx58-5.webp"],
    fastShip: true,
    desc: "Watson 2 Drawers Console Table with Steel Legs Are you looking for the sleekest yet most functional console table for your home? Look no further than our store. We have the most elegant model you’ve ever seen. Our Watson 2 drawers console table with steel legs promises to fit into the most compact spaces and create a stunning look. You will never have to worry about misplacing your keys, wallet, and other little essentials when you can store them safely in our console.",
    specs: { "Type": "Dining & kitchen > Dining > Storage Buffets" } },

  /* ===== Ready to ship — batch 6: dining + outdoor (fills thin pages) ===== */
  { id: "lx59", name: "Anders 180cm Oval Wooden Dining Table in Walnut", cat: "Kitchenware", room: "Kitchenware", price: 1201, memberPrice: 1111, sku: "SH-11307", tag: "New", ph: "", img: "assets/products/lx59.webp",
    imgs: ["assets/products/lx59.webp", "assets/products/lx59-2.webp", "assets/products/lx59-3.webp", "assets/products/lx59-4.webp", "assets/products/lx59-5.webp"],
    fastShip: true,
    desc: "Centralised Pedestal Architecture for Unobstructed Floor Plans The Anders 180cm Oval Wooden Dining Table in Walnut offers a space-optimizing solution for modern residential floor plans. By replacing traditional perimeter legs with a heavy-duty centralised pedestal base, this oval dining table maximizes under-table clearance and ensures unobstructed legroom for all users.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Tables" } },

  { id: "lx60", name: "Xander 120cm Fluted Outdoor Concrete Dining Table in Ivory", cat: "Kitchenware", room: "Kitchenware", price: 1619, memberPrice: 1487, sku: "SH-11308", tag: "New", ph: "", img: "assets/products/lx60.webp",
    imgs: ["assets/products/lx60.webp", "assets/products/lx60-2.webp", "assets/products/lx60-3.webp", "assets/products/lx60-4.webp", "assets/products/lx60-5.webp"],
    fastShip: true,
    desc: "Make every meal or gathering feel special with the Xander Round Outdoor Concrete Dining Table in elegant Ivory Waxed. Designed with a sleek round shape and crafted from a durable concrete and fibreglass blend, it delivers both style and strength. Perfect for indoor and outdoor use, this 4-seater table is ideal for patios, balconies, courtyards, or small dining spaces, and doubles beautifully as a foyer table or coffee table.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Concrete Tables" } },

  { id: "lx61", name: "Gabi 120cm Marble Look Dining Table in Oak", cat: "Kitchenware", room: "Kitchenware", price: 1091, memberPrice: 1012, sku: "SH-11309", tag: "New", ph: "", img: "assets/products/lx61.webp",
    imgs: ["assets/products/lx61.webp", "assets/products/lx61-2.webp", "assets/products/lx61-3.webp", "assets/products/lx61-4.webp", "assets/products/lx61-5.webp"],
    fastShip: true,
    desc: "Make everyday meals feel a little special with elegance Imagine your dining nook instantly lifting with the calm sophistication of a marble-look top and a sculptural base. The Gabi 120cm Marble Look Dining Table is the smart way to add both aesthetic appeal and functionality to compact spaces, bringing luxe style without the stress or upkeep of real stone. Dine big even in a smaller space Round, welcoming, and just the right size, Gabi comfortably seats four for weeknight dinners or Saturday brunch.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Tables" } },

  { id: "lx62", name: "Gigi 180cm Oval Wooden Dining Table in Oak", cat: "Kitchenware", room: "Kitchenware", price: 1223, memberPrice: 1131, sku: "SH-11310", tag: "New", ph: "", img: "assets/products/lx62.webp",
    imgs: ["assets/products/lx62.webp", "assets/products/lx62-2.webp", "assets/products/lx62-3.webp", "assets/products/lx62-4.webp", "assets/products/lx62-5.webp"],
    fastShip: true,
    desc: "Make Every Meal Feel Special Imagine your dining space instantly feeling more open, warm, and inviting. The Gigi 180cm Oval Wooden Dining Table, a beautifully crafted oak dining table, brings smooth curves and a refined timber look to your home, with a design that feels stylish yet effortless. If you’ve been craving a centrepiece that elevates everyday dinners and weekend catch-ups, the Gigi dining table is the clever solution.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Tables" } },

  { id: "lx63", name: "Marciana 6 Seater Fluted Pillar Dining Table in Natural", cat: "Kitchenware", room: "Kitchenware", price: 970, memberPrice: 903, sku: "SH-11311", tag: "New", ph: "", img: "assets/products/lx63.webp",
    imgs: ["assets/products/lx63.webp", "assets/products/lx63-2.webp", "assets/products/lx63-3.webp", "assets/products/lx63-4.webp", "assets/products/lx63-5.webp"],
    fastShip: true,
    desc: "Marciana 8 Seater Fluted Oval Dining Table Add style and function to your dining area with the Marciana 8 Seater Fluted Oval Dining Table ina natural wood finish. This table features a smooth surface veneer and a unique fluted design that makes it a standout in your dining space . It comfortably seats up to eight people, making it perfect for family dinners, special occasions, or creating the perfect setting for your next gathering.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Tables" } },

  { id: "lx64", name: "Marta 120cm 4 Seater Round Dining Table in Walnut", cat: "Kitchenware", room: "Kitchenware", price: 706, memberPrice: 665, sku: "SH-11312", tag: "New", ph: "", img: "assets/products/lx64.webp",
    imgs: ["assets/products/lx64.webp", "assets/products/lx64-2.webp", "assets/products/lx64-3.webp", "assets/products/lx64-4.webp", "assets/products/lx64-5.webp"],
    fastShip: true,
    desc: "Premium Curved Engineering for Fluid Traffic Flow and Everyday Dining The Marta 120cm Round Dining Table in Walnut is purpose-built to comfortably seat 4 people within a space-saving 120cm footprint—making it the ultimate dining solution for small apartments and compact dining nooks. By eliminating rigid corners and traditional outer legs, this 4 seater round dining table maximizes under-table clearance so all 4 diners enjoy unobstructed legroom without crowding your floor plan.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Tables" } },

  { id: "lx65", name: "Evone 4 Seater Stone Outdoor Dining Set in Natural", cat: "Outdoor", room: "Outdoor", price: 1454, memberPrice: 1339, sku: "SH-11313", tag: "New", ph: "", img: "assets/products/lx65.webp",
    imgs: ["assets/products/lx65.webp", "assets/products/lx65-2.webp", "assets/products/lx65-3.webp", "assets/products/lx65-4.webp", "assets/products/lx65-5.webp"],
    fastShip: true,
    desc: "Everyday dinners that feel like a holiday Imagine stepping outside to an outdoor space that looks styled and stays that way. The Evone 4-Seater Stone Outdoor Dining set in green combines a sleek stone tabletop with a sturdy aluminium frame, creating a smart upgrade to your outdoor dining furniture. Designed to withstand Aussie weather, this set offers both durability and easy living for your outdoor dining experience.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Dining Sets" } },

  { id: "lx66", name: "Casara 7 Piece Outdoor Dining Set in White & Beige", cat: "Outdoor", room: "Outdoor", price: 2510, memberPrice: 2289, sku: "SH-11314", tag: "New", ph: "", img: "assets/products/lx66.webp",
    imgs: ["assets/products/lx66.webp", "assets/products/lx66-2.webp", "assets/products/lx66-3.webp", "assets/products/lx66-4.webp", "assets/products/lx66-5.webp"],
    fastShip: true,
    desc: "Make the backyard your favourite dining room Imagine long lazy lunches that roll into starlit dinners without leaving home. The Casara 7 Piece Outdoor Dining Set turns your patio into a welcoming space for easy entertaining, with a smart aluminium frame and a timber look table top that laughs off Aussie weather. If you’ve been dreaming of a stylish outdoor dining set that’s comfy, durable and low maintenance, Casara is the clever choice.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Dining Sets" } },

  { id: "lx67", name: "Tavari 6 Seater Curved Outdoor Dining Set in Light Grey", cat: "Outdoor", room: "Outdoor", price: 2785, memberPrice: 2537, sku: "SH-11315", tag: "New", ph: "", img: "assets/products/lx67.webp",
    imgs: ["assets/products/lx67.webp", "assets/products/lx67-2.webp", "assets/products/lx67-3.webp", "assets/products/lx67-4.webp", "assets/products/lx67-5.webp"],
    fastShip: true,
    desc: "Tavari 6-Seater Curved Outdoor Dining Set in White and Light Grey Make your backyard the best place to gather with the Tavari 6-Seater Wicker Outdoor Dining Set . Strong, stylish, and comfortable, this set comes with an extra long 208cm gives you plenty of space to enjoy meals, parties, or quiet evenings with family and friends. Built with an aluminium frame, handwoven wicker, and soft cushions, Tavari is made from high quality materials that last.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Dining Sets" } },

  { id: "lx68", name: "Vellora 4 Seater Wicker Outdoor Dining Set in Natural", cat: "Outdoor", room: "Outdoor", price: 1861, memberPrice: 1705, sku: "SH-11316", tag: "New", ph: "", img: "assets/products/lx68.webp",
    imgs: ["assets/products/lx68.webp", "assets/products/lx68-2.webp", "assets/products/lx68-3.webp", "assets/products/lx68-4.webp", "assets/products/lx68-5.webp"],
    fastShip: true,
    desc: "Easy alfresco moments made beautiful Imagine your balcony or patio instantly feeling like a relaxed resort. The Vellora 4 Seater Wicker Outdoor Dining Set brings smart, durable design together with coastal style, so weeknight dinners and sunny weekend catch-ups feel effortless. Comfort that welcomes everyone in With gently curved chair backs and armrests plus plush cushions, Vellora makes long lunches and late-night chats comfortable from the first sit.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Dining Sets" } },

  { id: "lx69", name: "Cabria 9 Piece Sintered Stone Outdoor Dining Set in Beige", cat: "Outdoor", room: "Outdoor", price: 2620, memberPrice: 2388, sku: "SH-11317", tag: "New", ph: "", img: "assets/products/lx69.webp",
    imgs: ["assets/products/lx69.webp", "assets/products/lx69-2.webp", "assets/products/lx69-3.webp", "assets/products/lx69-4.webp", "assets/products/lx69-5.webp"],
    fastShip: true,
    desc: "Outdoor dining made effortless Imagine summer lunches that stretch into sunset without a single worry about spills, scuffs or sudden weather. The Cabria 9 piece sintered stone outdoor dining set brings style and smarts together, giving you a beautifully easy place to gather, relax and enjoy. This sintered stone outdoor dining set looks luxe and lives tough, so you can spend less time fussing and more time feasting.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Dining Sets" } },

  { id: "lx70", name: "Colleen 8 Seater Timber Outdoor Dining Set in Beige", cat: "Outdoor", room: "Outdoor", price: 3258, memberPrice: 2962, sku: "SH-11318", tag: "New", ph: "", img: "assets/products/lx70.webp",
    imgs: ["assets/products/lx70.webp", "assets/products/lx70-2.webp", "assets/products/lx70-3.webp", "assets/products/lx70-4.webp", "assets/products/lx70-5.webp"],
    fastShip: true,
    desc: "Extendable Acacia Timber Outdoor Dining Setting with Rope Chairs Transform your patio or alfresco area into an effortless entertaining hub. The Colleen 8 Seater Timber Outdoor Dining Set in Beige pairs a warm, solid acacia timber table with woven synthetic rope chairs, bringing modern resort-style elegance to long lunches and weekend barbecues.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Dining Sets" } },
  /* Batch 1 from the new supplier (8 Nov 2026). Prices: supplier price + $1,000, members + $400 */
  {"id":"kl01","deliveryTime":"6 to 12 business days","name":"Round Walnut Coffee Table with Travertine-Look Stone Top, Low","cat":"Living Room","room":"Living Room","price":2399,"memberPrice":1799,"sku":"SH-11334","tag":"New","ph":"","img":"assets/products/kl01.webp","imgs":["assets/products/kl01.webp","assets/products/kl01-2.webp","assets/products/kl01-3.webp","assets/products/kl01-4.webp","assets/products/kl01-5.webp","assets/products/kl01-6.webp","assets/products/kl01-7.webp","assets/products/kl01-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"arLink":"https://sketchfab.com/models/3bda76ed57d0416187c5962a0b2eb98f/ar-redirect","desc":"A low round coffee table with a durable sintered stone top in a travertine finish, set on a walnut veneer base with vertical reeding. The rounded shape keeps a living room feeling soft and easy to move around.","features":["Sintered stone top in a travertine finish","Walnut veneer base with vertical reeding","Low, round silhouette"],"specs":{"Type":"Living Room > Tables > Coffee Tables","Colour":"Brown"},"care":"Dust regularly with a soft cloth; use a mild soapy solution for deeper cleaning. Use coasters, placemats, or tablecloths to prevent stains and scratches. Protect from direct sunlight to avoid fading; consider using curtains or blinds. Use felt pads under objects and avoid dragging heavy items to prevent scratches. Occasionally polish with suitable furniture polish or wax. Avoid harsh chemicals, alcohol, or solvents. Cover or store in a cool, dry place when not in use. Travertine Care Dust regularly with a soft cloth. Blot spills immediately to prevent stains. Use baking soda poultice or stone stain remover for persistent stains. Use coasters and trivets to protect from heat. Wipe up spills promptly to avoid water stains. Seal periodically as recommended. Use felt pads under furniture to prevent chipping. Protect from direct sunlight to prevent fading. Veneer Care Dust regularly with a soft cloth or feather duster. Clean with a mild, non-abrasive wood cleanser; avoid harsh chemicals. Wipe along the grain, then dry thoroughly. Protect from moisture by cleaning spills immediately and using coasters or trivets under hot/wet items. Shield from direct sunlight to prevent fading; use curtains or UV-blocking films. Avoid placing hot objects directly on veneer; maintain stable temperature and humidity. Use felt pads under furniture legs and lift furniture when moving to prevent scratches. Occasionally polish with a wood-specific polish to enhance shine. Inspect for damage and address issues like loose edges or cracks promptly. Stainless Steel Care Dust stainless steel regularly with a soft, dry cloth. Avoid exposure to excessive dampness; wipe up spills immediately and dry thoroughly. For stubborn dirt, use a mild soap solution with a soft cloth; rinse and dry to prevent water spots. MDF Care Keep MDF furniture away from high humidity and water exposure to prevent moisture damage. Clean up spills immediately. Use coasters, placemats, or trivets under hot dishes and glasses to protect the surface from heat, moisture rings, and scratches. Dust regularly with a soft, lint-free cloth or microfiber duster to prevent scratches. Avoid abrasive materials and harsh chemical cleaners. Protect from direct sunlight to prevent fading or discoloration. Clean with a mild, non-abrasive cleaner diluted in water, applied to a soft cloth. Lift furniture when moving to avoid scratches or damage; use furniture pads or sliders as needed. Repair scratches or chips with a touch-up marker or furniture repair wax that matches the furniture colour."},
  {"id":"kl02","deliveryTime":"6 to 12 business days","name":"Brown Oak Entertainment Unit with Champagne Glass Top","cat":"Living Room","room":"Living Room","price":2999,"memberPrice":2399,"sku":"SH-11335","tag":"New","ph":"","img":"assets/products/kl02.webp","imgs":["assets/products/kl02.webp","assets/products/kl02-2.webp","assets/products/kl02-3.webp","assets/products/kl02-4.webp","assets/products/kl02-5.webp","assets/products/kl02-6.webp","assets/products/kl02-7.webp","assets/products/kl02-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"desc":"A long, low entertainment unit in brown oak veneer with rounded end panels and a champagne-toned glass top. Four handleless doors open to oak-lined cupboards with cable outlets at the back, on a recessed champagne gold base.","features":["Four handleless doors","Oak-lined storage with rear cable outlets","Champagne glass top and gold-tone base"],"specs":{"Type":"Living Room > Storage > TV Units","Colour":"Brown"}},
  {"id":"kl03","deliveryTime":"6 to 12 business days","name":"White Stone Coffee Table with Floating Glass and Bronze Legs","cat":"Living Room","room":"Living Room","price":2399,"memberPrice":1799,"sku":"SH-11336","tag":"New","ph":"","img":"assets/products/kl03.webp","imgs":["assets/products/kl03.webp","assets/products/kl03-2.webp","assets/products/kl03-3.webp","assets/products/kl03-4.webp","assets/products/kl03-5.webp","assets/products/kl03-6.webp","assets/products/kl03-7.webp","assets/products/kl03-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"desc":"A white sintered stone coffee table with soft grey veining and a clear glass layer that floats above one side. Sculptural brushed bronze legs in open, curving shapes make it a gallery-style centrepiece.","features":["White sintered stone top with grey veining","Offset clear glass layer","Sculptural brushed bronze legs"],"specs":{"Type":"Living Room > Tables > Coffee Tables","Colour":"Bronze"}},
  {"id":"kl04","deliveryTime":"6 to 12 business days","name":"Round Cream Leather Ottoman","cat":"Living Room","room":"Living Room","price":699,"memberPrice":639,"sku":"SH-11337","tag":"New","ph":"","img":"assets/products/kl04.webp","imgs":["assets/products/kl04.webp","assets/products/kl04-2.webp","assets/products/kl04-3.webp","assets/products/kl04-4.webp","assets/products/kl04-5.webp","assets/products/kl04-6.webp","assets/products/kl04-7.webp","assets/products/kl04-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"desc":"A low, round ottoman in soft pebbled cream leather, with stitched seams dividing the top into four panels. Use it as a footrest, extra seat or, with a tray on top, a soft coffee table.","features":["Pebbled cream leather","Four stitched top panels","Footrest, seat or tray table"],"specs":{"Type":"Living Room > Sofas & Seating > Ottomans","Colour":"Cream"}},
  {"id":"kl05","deliveryTime":"6 to 12 business days","name":"Curved Dining Table with Statuario White Stone Top, 240cm","cat":"Dining","room":"Dining","price":3899,"memberPrice":3299,"sku":"SH-11338","tag":"New","ph":"","img":"assets/products/kl05.webp","imgs":["assets/products/kl05.webp","assets/products/kl05-2.webp","assets/products/kl05-3.webp","assets/products/kl05-4.webp","assets/products/kl05-5.webp","assets/products/kl05-6.webp","assets/products/kl05-7.webp","assets/products/kl05-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"arLink":"https://sketchfab.com/models/9c45cde67964418baf09d974f8bcc605/ar-redirect","desc":"A 240 x 118cm dining table with a marble-look Statuario white sintered stone top, curved edges and a gold outline. Two matte black column legs with reeded detailing give it a balanced, architectural base.","features":["240 x 118cm","Statuario white sintered stone top with curved edges","Two matte black reeded column legs"],"specs":{"Type":"Dining & kitchen > Dining > Dining Tables","Colour":"Black"},"care":"Dust regularly with a soft cloth or microfiber duster. Clean with a mild soapy solution; avoid abrasive cleaners. Use coasters, placemats, or tablecloths to prevent stains and scratches. Keep out of direct sunlight to avoid fading and damage. Use felt pads under objects; avoid dragging heavy items. Occasionally polish with suitable furniture polish or wax. Avoid harsh chemicals, alcohol, or solvents. Cover or store in a cool, dry place when not in use. Check and tighten loose screws or parts regularly. Iron Care Clean with a soft cloth and mild soapy water; avoid harsh cleaners. Prevent scratches by avoiding rough materials and dragging items. Ensure proper drainage for outdoor furniture and dry after rain. Fix chips or scratches with touch-up paint for powder-coated surfaces. Store indoors during bad weather or when not in use. Sintered Stone Care Stone may have natural deposits, patterns, and veining. Clean spills immediately with mild soap and water; dry with a soft cloth. Regularly use stone-specific or pH-neutral cleaners; avoid abrasives. Use coasters, trivets, and felt pads to protect surfaces. Avoid excessive force, pressure, and using it as a cutting surface. Apply a high-quality sealer as recommended for stain resistance. Protect from direct sunlight to prevent fading or discoloration. Stainless Steel Dust stainless steel regularly with a soft, dry cloth. Avoid exposure to excessive dampness; wipe up spills immediately and dry thoroughly. For stubborn dirt, use a mild soap solution with a soft cloth; rinse and dry to prevent water spots. Avoid cleaning products with ammonia or silicone as they can damage coatings. Clean along the grain or polish lines to minimise streaks. Avoid abrasives and strong chemicals to prevent scratching."},
  {"id":"kl06","deliveryTime":"6 to 12 business days","name":"Sand Beige Adjustable Bar Stool with Armrest","cat":"Dining","room":"Dining","price":449,"memberPrice":414,"sku":"SH-11339","tag":"New","ph":"","img":"assets/products/kl06.webp","imgs":["assets/products/kl06.webp","assets/products/kl06-2.webp","assets/products/kl06-3.webp","assets/products/kl06-4.webp","assets/products/kl06-5.webp","assets/products/kl06-6.webp","assets/products/kl06-7.webp","assets/products/kl06-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"desc":"A bar stool in smooth sand beige vegan leather with an open curved back, a padded armrest and a cushioned seat. The black pedestal base has a footrest and adjustable height for counter or bar use.","features":["Sand beige vegan leather","Height adjustable with footrest","Black pedestal base"],"specs":{"Type":"Dining & kitchen > Dining > Bar Stools","Colour":"Beige"},"care":"Dust regularly with a soft, damp cloth; vacuum upholstery and spot clean stains. Use professional cleaning for tough stains. Keep away from direct sunlight to prevent fading. Use protective covers for outdoor use. Rotate cushions to maintain even wear. Avoid exceeding weight limits to protect the frame. Tighten loose screws or parts as needed. Do not tilt the stool while seated. Iron Care Clean with a soft cloth and mild soapy water; avoid harsh cleaners. Prevent scratches by avoiding rough materials and dragging items. Ensure proper drainage for outdoor furniture and dry after rain. Fix chips or scratches with touch-up paint for powder-coated surfaces. Store indoors during bad weather or when not in use. Follow care instructions for cushions or upholstery. Check regularly for rust or damage and fix promptly. Leather Care Clean leather with wax-free leather cleanser and conditioner. Pre-test cleaning products in a hidden area to avoid color loss. Avoid aggressive cleaners or solvents. Follow product instructions and do not over-apply. Protect leather from direct sunlight to prevent fading and drying. Apply leather conditioner periodically to maintain suppleness. Keep sharp objects away from leather to prevent scratches or tears. Inspect leather regularly for signs of wear and tear, and address any issues promptly. Wood Care Dust wood furniture regularly with a soft cloth. Avoid abrasive cleaners, ammonia, or silicone products. Keep wood out of direct sunlight to prevent fading. Maintain stable humidity to avoid warping or cracking. Lift furniture when moving; don’t drag it. Use felt pads under legs to prevent scratches. Refinish as needed to restore the protective finish. Check for damage regularly and fix issues promptly."},
  {"id":"kl07","deliveryTime":"6 to 12 business days","name":"Oak Pedestal Dining Table with Champagne Glass Top, 240cm","cat":"Dining","room":"Dining","price":3599,"memberPrice":2999,"sku":"SH-11340","tag":"New","ph":"","img":"assets/products/kl07.webp","imgs":["assets/products/kl07.webp","assets/products/kl07-2.webp","assets/products/kl07-3.webp","assets/products/kl07-4.webp","assets/products/kl07-5.webp","assets/products/kl07-6.webp","assets/products/kl07-7.webp","assets/products/kl07-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"desc":"A 240 x 120cm dining table that seats eight to ten. A champagne-toned glass top rests on a single rounded brown oak veneer pedestal, finished with a champagne gold collar.","features":["240 x 120cm, seats 8 to 10","Champagne-toned glass top","Single oak veneer pedestal"],"specs":{"Type":"Dining & kitchen > Dining > Dining Tables","Colour":"Brown"}},
  {"id":"kl08","deliveryTime":"6 to 12 business days","name":"Light Oak Dining Table, 180cm","cat":"Dining","room":"Dining","price":3299,"memberPrice":2699,"sku":"SH-11341","tag":"New","ph":"","img":"assets/products/kl08.webp","imgs":["assets/products/kl08.webp","assets/products/kl08-2.webp","assets/products/kl08-3.webp","assets/products/kl08-4.webp","assets/products/kl08-5.webp","assets/products/kl08-6.webp","assets/products/kl08-7.webp","assets/products/kl08-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"desc":"A 180 x 100cm dining table in light oak veneer with softly rounded edges and broad panel legs set in from each end. It seats six to eight, with room for a chair at the head of the table.","features":["180 x 100cm, seats 6 to 8","Light oak veneer top with rounded edges","Broad panel legs"],"specs":{"Type":"Dining & kitchen > Dining > Dining Tables","Colour":"Brown"}},
  {"id":"kl09","deliveryTime":"6 to 12 business days","name":"Walnut Vegan Leather Dining Chair with Gold Legs","cat":"Dining","room":"Dining","price":529,"memberPrice":486,"sku":"SH-11342","tag":"New","ph":"","img":"assets/products/kl09.webp","imgs":["assets/products/kl09.webp","assets/products/kl09-2.webp","assets/products/kl09-3.webp","assets/products/kl09-4.webp","assets/products/kl09-5.webp","assets/products/kl09-6.webp","assets/products/kl09-7.webp","assets/products/kl09-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"arLink":"https://sketchfab.com/models/ec0ff591d15e418abadd1bc3f0fa6e60/ar-redirect","desc":"A dining chair wrapped in walnut brown vegan leather, with a curved backrest, angular armrests and an open back. The cushioned seat sits on four legs with brushed gold tips.","features":["Walnut brown vegan leather","Curved, open backrest with armrests","Brushed gold-tipped legs"],"specs":{"Type":"Dining & kitchen > Dining > Dining Chairs","Colour":"Brown"},"care":"Dust regularly with a soft, damp cloth; vacuum upholstery and spot clean stains. For tough stains, opt for professional cleaning. Keep away from direct sunlight to prevent fading. Use protective covers for outdoor use. Rotate cushions to ensure even wear. Avoid exceeding weight limits to protect the frame. Tighten loose screws or parts as needed. Avoid tilting the chair while seated. Leather Care Clean leather with wax-free leather cleanser and conditioner. Pre-test cleaning products in a hidden area to avoid color loss. Avoid aggressive cleaners or solvents. Follow product instructions and do not over-apply. Protect leather from direct sunlight to prevent fading and drying. Apply leather conditioner periodically to maintain suppleness. Keep sharp objects away from leather to prevent scratches or tears. Inspect leather regularly for signs of wear and tear, and address any issues promptly. Consider professional cleaning and conditioning for heavy use or significant damage. Stainless Steel Care Dust stainless steel regularly with a soft, dry cloth. Avoid exposure to excessive dampness; wipe up spills immediately and dry thoroughly. For stubborn dirt, use a mild soap solution with a soft cloth; rinse and dry to prevent water spots. Avoid cleaning products with ammonia or silicone as they can damage coatings. Clean along the grain or polish lines to minimise streaks. Avoid abrasives and strong chemicals to prevent scratching. Remove rust with a baking soda and water paste; scrub gently, rinse, and dry."},
  {"id":"kl10","deliveryTime":"6 to 12 business days","name":"Brown Oak Bedside Table with Champagne Glass Top","cat":"Bedroom","room":"Bedroom","price":1899,"memberPrice":1299,"sku":"SH-11343","tag":"New","ph":"","img":"assets/products/kl10.webp","imgs":["assets/products/kl10.webp","assets/products/kl10-2.webp","assets/products/kl10-3.webp","assets/products/kl10-4.webp","assets/products/kl10-5.webp","assets/products/kl10-6.webp","assets/products/kl10-7.webp","assets/products/kl10-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"desc":"A bedside table in brown oak veneer with curved side panels and a champagne-toned glass top. Two handleless drawers sit above a matching champagne gold base.","features":["Brown oak veneer with curved sides","Two handleless drawers","Champagne glass top"],"specs":{"Type":"Bedroom > Bedside tables","Colour":"Brown"}},
  {"id":"kl11","deliveryTime":"6 to 12 business days","name":"Cream Velvet King Bed with Winged Headboard","cat":"Bedroom","room":"Bedroom","price":3599,"memberPrice":2999,"sku":"SH-11344","tag":"New","ph":"","img":"assets/products/kl11.webp","imgs":["assets/products/kl11.webp","assets/products/kl11-2.webp","assets/products/kl11-3.webp","assets/products/kl11-4.webp","assets/products/kl11-5.webp","assets/products/kl11-6.webp","assets/products/kl11-7.webp","assets/products/kl11-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"arLink":"https://sketchfab.com/models/8c87561d3b5a468c8b94529ee1b98231/ar-redirect","desc":"A king bed in soft cream velvet with a wing-shaped headboard and vertical tufts that meet at the centre. Sturdy slats support the mattress.","features":["King size","Cream velvet upholstery","Winged, tufted headboard and slatted base"],"specs":{"Type":"Bedroom > Bed frames > King","Colour":"Cream"},"care":"Dust the bed frame and headboard regularly with a soft, dry cloth. Avoid harsh chemicals; use mild detergent or soapy water for cleaning. Vacuum upholstered headboards and spot clean stains with mild upholstery cleaner. Use a slightly damp cloth for wooden frames, avoiding excess moisture. Polish metal frames occasionally to prevent rust. Tighten screws and bolts periodically for stability. Ensure proper mattress support to prevent sagging. Avoid excessive weight to maintain structural integrity. Use window treatments to prevent fading from direct sunlight. Velvet Care Gently vacuum with a soft brush attachment to remove dust and debris. Blot spills immediately with a clean cloth; avoid rubbing to prevent damage. Use a mild cleaner for velvet; always test on a hidden area first. Keep out of direct sunlight to prevent fading. Restore flattened pile by brushing gently in the direction of the fibres. Have professionally cleaned every 1-2 years. Avoid sharp objects and abrasive clothing to prevent snags. Rotate cushions and rearrange furniture to ensure even wear. Always follow the manufacturer's care instructions, especially for cleaning cushion covers. Stainless Steel Care Dust stainless steel regularly with a soft, dry cloth. Avoid exposure to excessive dampness; wipe up spills immediately and dry thoroughly. For stubborn dirt, use a mild soap solution with a soft cloth; rinse and dry to prevent water spots. Avoid cleaning products with ammonia or silicone as they can damage coatings. Clean along the grain or polish lines to minimise streaks. Avoid abrasives and smdf trong chemicals to prevent scratching. Remove rust with a baking soda and water paste; scrub gently, rinse, and dry. Wood Care Dust wood furniture regularly with a soft cloth. Avoid abrasive cleaners, ammonia, or silicone products. Keep wood out of direct sunlight to prevent fading. Maintain stable humidity to avoid warping or cracking. Lift furniture when moving; don’t drag it. Use felt pads under legs to prevent scratches. Refinish as needed to restore the protective finish. Check for damage regularly and fix issues promptly."},
  {"id":"kl12","deliveryTime":"6 to 12 business days","name":"Large Gold Sculptural Vase","cat":"Home Décor","room":"Home Décor","price":379,"memberPrice":351,"sku":"SH-11345","tag":"New","ph":"","img":"assets/products/kl12.webp","imgs":["assets/products/kl12.webp","assets/products/kl12-2.webp","assets/products/kl12-3.webp","assets/products/kl12-4.webp","assets/products/kl12-5.webp","assets/products/kl12-6.webp","assets/products/kl12-7.webp","assets/products/kl12-8.webp"],"arriveDays":[9,17],"preorder":false,"desc":"A large gold vase with a sculptural shape that becomes part of the arrangement, not just a holder for it.","features":["Large size","Gold finish","Sculptural shape"],"specs":{"Type":"Home Décor > Decor > Vases","Colour":"Gold"},"care":"Dust with a soft cloth or feather duster. Keep out of direct sunlight to prevent fading. Handle with care during cleaning or moving. Avoid moisture; store in dry areas away from humidity. Use mild, non-abrasive cleaners; spot test first. Store in padded containers when not in use. Keep away from extreme heat or cold. Aluminium Care Clean regularly with mild soap and warm water. Avoid abrasive scrubbers and harsh chemicals like bleach or ammonia. Rinse thoroughly with distilled water to prevent streaks. For stains, use baking soda paste or a non-abrasive cleaner—test first. Use coasters or placemats to prevent scratches; don’t drag heavy items. Apply aluminum protectant or automotive wax to maintain shine. Store indoors or covered during harsh weather or winter. Check and tighten screws or fasteners periodically. Glass Care Use non-abrasive, glass-safe cleaners only. Clean with a microfiber or lint-free cloth. Avoid excess moisture—especially near edges and joints. Spray cleaner onto cloth, not directly on glass. Clean spills and stains promptly. Don’t place heavy items directly on glass—use mats or coasters. Dust regularly to keep glass clear and shiny. Only use warm or tepid water—never boiling, to avoid cracking."},
  {"id":"kl13","deliveryTime":"6 to 12 business days","name":"Brushed Brass Open-Frame Wall Clock","cat":"Home Décor","room":"Home Décor","price":499,"memberPrice":459,"sku":"SH-11346","tag":"New","ph":"","img":"assets/products/kl13.webp","imgs":["assets/products/kl13.webp","assets/products/kl13-2.webp","assets/products/kl13-3.webp","assets/products/kl13-4.webp","assets/products/kl13-5.webp","assets/products/kl13-6.webp","assets/products/kl13-7.webp","assets/products/kl13-8.webp"],"arriveDays":[9,17],"preorder":false,"desc":"A wall clock with a slender iron frame in a brushed brass finish, a double outer ring and black hands. The open face has no numerals, so the wall shows through.","features":["Brushed brass finish iron frame","Double outer ring, black hands","Open face, no numerals"],"specs":{"Type":"Home Décor > Clocks","Colour":"Brass"}},
  {"id":"kl14","deliveryTime":"6 to 12 business days","name":"Round Brushed Gold Mirror, 118cm","cat":"Home Décor","room":"Home Décor","price":649,"memberPrice":594,"sku":"SH-11347","tag":"New","ph":"","img":"assets/products/kl14.webp","imgs":["assets/products/kl14.webp","assets/products/kl14-2.webp","assets/products/kl14-3.webp","assets/products/kl14-4.webp","assets/products/kl14-5.webp","assets/products/kl14-6.webp","assets/products/kl14-7.webp","assets/products/kl14-8.webp"],"arriveDays":[9,17],"preorder":false,"desc":"A large 118cm round mirror with a slim brushed gold aluminium frame.","features":["118cm round","Brushed gold aluminium frame"],"specs":{"Type":"Home Décor > Mirrors","Colour":"Gold"}},
  {"id":"kl15","deliveryTime":"6 to 12 business days","name":"White Stone Dresser with Walnut Base, 9 Drawers","cat":"Bedroom","room":"Bedroom","price":2599,"memberPrice":1999,"sku":"SH-11348","tag":"New","ph":"","img":"assets/products/kl15.webp","imgs":["assets/products/kl15.webp","assets/products/kl15-2.webp","assets/products/kl15-3.webp","assets/products/kl15-4.webp","assets/products/kl15-5.webp","assets/products/kl15-6.webp","assets/products/kl15-7.webp","assets/products/kl15-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"arLink":"https://sketchfab.com/models/616334b29f63417abba5fdd3f19788ee/ar-redirect","desc":"A curved dresser with a white sintered stone top, nine smooth-gliding drawers and brass-tone handles on a walnut brown wooden base.","features":["White sintered stone top","Nine gliding drawers","Walnut brown base, brass-tone handles"],"specs":{"Type":"Bedroom > Dressers","Colour":"Brown"},"care":"Dust regularly with a soft, lint-free cloth or feather duster. Keep away from direct sunlight and moisture to prevent warping or discoloration. Clean with a mild soap solution on a damp cloth; test on a hidden area first. Wipe hardware with a damp cloth; avoid abrasive cleaners. Use furniture polish sparingly for wood finishes. Add shelf liners to protect surfaces from scratches and spills. Ensure proper ventilation to prevent mustiness or mold. Distribute weight evenly to prevent sagging and drawer issues. Avoid placing sharp or heavy objects directly on the surface. Address minor repairs promptly; seek professional help for major issues. Tighten loose screws or parts as needed. MDF Care Keep MDF furniture away from humidity and water; clean spills immediately. Use coasters, placemats, or trivets to protect against heat, moisture, and scratches. Dust regularly with a soft cloth or microfiber duster. Avoid direct sunlight to prevent fading; use curtains or blinds if necessary. Clean with a mild cleaner diluted in water on a soft cloth; don’t apply directly to the surface. Lift when moving to avoid scratches; use furniture pads or sliders. Repair scratches or chips with a matching touch-up marker or furniture wax. Stainless Steel Care Dust stainless steel regularly with a soft, dry cloth. Avoid exposure to excessive dampness; wipe up spills immediately and dry thoroughly. For stubborn dirt, use a mild soap solution with a soft cloth; rinse and dry to prevent water spots. Avoid cleaning products with ammonia or silicone as they can damage coatings. Clean along the grain or polish lines to minimise streaks. Avoid abrasives and strong chemicals to prevent scratching. Remove rust with a baking soda and water paste; scrub gently, rinse, and dry. Veneer Care Dust regularly with a soft cloth or feather duster. Clean with a mild, non-abrasive wood cleanser; avoid harsh chemicals. Wipe along the grain, then dry thoroughly. Protect from moisture by cleaning spills immediately and using coasters or trivets under hot/wet items. Shield from direct sunlight to prevent fading; use curtains or UV-blocking films. Avoid placing hot objects directly on veneer; maintain stable temperature and humidity. Use felt pads under furniture legs and lift furniture when moving to prevent scratches. Occasionally polish with a wood-specific polish to enhance shine. Inspect for damage and address issues like loose edges or cracks promptly. Sintered Stone Care Stone may have natural deposits, patterns, and veining. Clean spills immediately with mild soap and water; dry with a soft cloth. Regularly use stone-specific or pH-neutral cleaners; avoid abrasives. Avoid bleach, harsh chemicals, and acidic cleaners. Use coasters, trivets, and felt pads to protect surfaces. Inspect for chips or damage; seek professional repairs if needed. Avoid excessive force, pressure, and using it as a cutting surface. Apply a high-quality sealer as recommended for stain resistance. Protect from direct sunlight to prevent fading or discoloration."},
  {"id":"kl16","deliveryTime":"6 to 12 business days","name":"Mocha Walnut Bedside Table with Arch Detail","cat":"Bedroom","room":"Bedroom","price":1699,"memberPrice":1099,"sku":"SH-11349","tag":"New","ph":"","img":"assets/products/kl16.webp","imgs":["assets/products/kl16.webp","assets/products/kl16-2.webp","assets/products/kl16-3.webp","assets/products/kl16-4.webp","assets/products/kl16-5.webp","assets/products/kl16-6.webp","assets/products/kl16-7.webp","assets/products/kl16-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"desc":"A walnut veneer bedside table with a carved arch on the front and two drawers. Black handles with gold-tone ends finish it.","features":["Walnut veneer","Carved arch front","Two drawers"],"specs":{"Type":"Bedroom > Bedside tables","Colour":"Brown"},"care":"Dust regularly with a soft, lint-free cloth or microfiber duster. Keep away from moisture and humidity to prevent warping or mold. Use coasters for drinks and hot items to avoid stains and heat marks. Clean spills promptly with a damp cloth and dry thoroughly. Avoid sharp or heavy objects to prevent scratches and dents. Lubricate drawer slides for smooth operation. Rotate decorative items to prevent uneven wear. Use felt pads under legs to protect floors and add stability. Avoid overcrowding and inspect regularly for damage. MDF Care Keep MDF furniture away from humidity and water; clean spills immediately. Use coasters, placemats, or trivets to protect against heat, moisture, and scratches. Dust regularly with a soft cloth or microfiber duster. Avoid direct sunlight to prevent fading; use curtains or blinds if necessary. Clean with a mild cleaner diluted in water on a soft cloth; don’t apply directly to the surface. Lift when moving to avoid scratches; use furniture pads or sliders. Repair scratches or chips with a matching touch-up marker or furniture wax. Veneer Care Dust regularly with a soft cloth or feather duster. Clean with a mild, non-abrasive wood cleanser; avoid harsh chemicals. Wipe along the grain, then dry thoroughly. Protect from moisture by cleaning spills immediately and using coasters or trivets under hot/wet items. Shield from direct sunlight to prevent fading; use curtains or UV-blocking films. Avoid placing hot objects directly on veneer; maintain stable temperature and humidity. Use felt pads under furniture legs and lift furniture when moving to prevent scratches. Occasionally polish with a wood-specific polish to enhance shine. Inspect for damage and address issues like loose edges or cracks promptly."},
  {"id":"kl17","deliveryTime":"6 to 12 business days","name":"Mustard Velvet Queen Bed with Curved Headboard","cat":"Bedroom","room":"Bedroom","price":2899,"memberPrice":2299,"sku":"SH-11350","tag":"New","ph":"","img":"assets/products/kl17.webp","imgs":["assets/products/kl17.webp","assets/products/kl17-2.webp","assets/products/kl17-3.webp","assets/products/kl17-4.webp","assets/products/kl17-5.webp","assets/products/kl17-6.webp","assets/products/kl17-7.webp","assets/products/kl17-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"arLink":"https://sketchfab.com/models/f925844f384645a1b0cc99aad4efc091/ar-redirect","desc":"A queen bed with a bold curved headboard in rich mustard velveteen fabric, a low-profile frame and a slatted base.","features":["Queen size","Mustard velveteen fabric","Curved headboard, slatted base"],"specs":{"Type":"Bedroom > Bed frames > Queen","Colour":"Yellow"},"care":"Dust the bed frame and headboard regularly with a soft, dry cloth. Avoid harsh chemicals; use mild detergent or soapy water for cleaning. Vacuum upholstered headboards and spot clean stains with mild upholstery cleaner. Use a slightly damp cloth for wooden frames, avoiding excess moisture. Polish metal frames occasionally to prevent rust. Tighten screws and bolts periodically for stability. Ensure proper mattress support to prevent sagging. Avoid excessive weight to maintain structural integrity. Use window treatments to prevent fading from direct sunlight. Wood Care Dust wood furniture regularly with a soft cloth. Avoid abrasive cleaners, ammonia, or silicone products. Keep wood out of direct sunlight to prevent fading. Maintain stable humidity to avoid warping or cracking. Lift furniture when moving; don’t drag it. Use felt pads under legs to prevent scratches. Check for damage regularly and fix issues promptly. Fabric Care Regularly vacuum with a soft brush attachment to remove dust and debris. Blot spills immediately with a clean, white cloth; avoid rubbing. Keep furniture out of direct sunlight to prevent fading; use covers or rotate furniture if necessary. Keep sharp objects and abrasive clothing away from the fabric to prevent damage. Have your furniture professionally cleaned periodically. Follow the manufacturer’s instructions for cleaning, and test any product on a small, hidden area first. Rotate removable cushions regularly to ensure even wear. Avoid harsh chemicals, bleach, or abrasive cleaners."},
  {"id":"kl18","deliveryTime":"6 to 12 business days","name":"Stone Cream Woven Fabric Queen Bed","cat":"Bedroom","room":"Bedroom","price":2899,"memberPrice":2299,"sku":"SH-11351","tag":"New","ph":"","img":"assets/products/kl18.webp","imgs":["assets/products/kl18.webp","assets/products/kl18-2.webp","assets/products/kl18-3.webp","assets/products/kl18-4.webp","assets/products/kl18-5.webp","assets/products/kl18-6.webp","assets/products/kl18-7.webp","assets/products/kl18-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"arLink":"https://sketchfab.com/models/8f708488c90a45bdb7440571ac3d8842/ar-redirect","desc":"A minimalist queen bed in soft, textured stone cream woven fabric on a sturdy frame.","features":["Queen size","Stone cream woven fabric","Minimalist design"],"specs":{"Type":"Bedroom > Bed frames > Queen","Colour":"Cream"}},
  {"id":"kl19","deliveryTime":"6 to 12 business days","name":"Stone Cream King Single Bed with Sculptural Headboard","cat":"Bedroom","room":"Bedroom","price":2499,"memberPrice":1899,"sku":"SH-11352","tag":"New","ph":"","img":"assets/products/kl19.webp","imgs":["assets/products/kl19.webp","assets/products/kl19-2.webp","assets/products/kl19-3.webp","assets/products/kl19-4.webp","assets/products/kl19-5.webp","assets/products/kl19-6.webp","assets/products/kl19-7.webp","assets/products/kl19-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"arLink":"https://sketchfab.com/models/547d33ff715d4d32b117bc3c85eb9dbe/ar-redirect","desc":"A king single bed in textured stone cream woven fabric, with a sculptural headboard and a low, rounded frame.","features":["King single size","Textured woven fabric","Low, rounded frame"],"specs":{"Type":"Bedroom > Bed frames","Colour":"White"}},
  {"id":"kl20","deliveryTime":"6 to 12 business days","name":"White Fabric Queen Bed with Floating Bedside Drawers","cat":"Bedroom","room":"Bedroom","price":3599,"memberPrice":2999,"sku":"SH-11353","tag":"New","ph":"","img":"assets/products/kl20.webp","imgs":["assets/products/kl20.webp","assets/products/kl20-2.webp","assets/products/kl20-3.webp","assets/products/kl20-4.webp","assets/products/kl20-5.webp","assets/products/kl20-6.webp","assets/products/kl20-7.webp","assets/products/kl20-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"arLink":"https://sketchfab.com/models/6d910cb416be4fdc875b76496cceacc9/ar-redirect","desc":"A queen bed in smooth white woven fabric with a low frame, curved edges and a slatted base. Two floating medium brown ash veneer drawers extend from either side of the headboard.","features":["Queen size","Built-in floating bedside drawers","Slatted base"],"specs":{"Type":"Bedroom > Bed frames > Queen","Colour":"White"}},
  {"id":"kl21","deliveryTime":"6 to 12 business days","name":"Pearl Beige Bouclé 2.5 Seater Sofa Bed","cat":"Living Room","room":"Living Room","price":3099,"memberPrice":2499,"sku":"SH-11354","tag":"New","ph":"","img":"assets/products/kl21.webp","imgs":["assets/products/kl21.webp","assets/products/kl21-2.webp","assets/products/kl21-3.webp","assets/products/kl21-4.webp","assets/products/kl21-5.webp","assets/products/kl21-6.webp","assets/products/kl21-7.webp","assets/products/kl21-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"desc":"A sofa bed in soft pearl beige bouclé with rounded bolster arms and a deep, low seat. A fabric handle between the cushions pulls the base out into a flat bed.","features":["Pearl beige bouclé","Pulls out into a flat bed","Rounded bolster arms"],"specs":{"Type":"Living Room > Sofas & Seating > Sofa Beds","Colour":"Beige"}},
  {"id":"kl22","deliveryTime":"6 to 12 business days","name":"Smoky Walnut Curved Bedside Table","cat":"Bedroom","room":"Bedroom","price":1999,"memberPrice":1399,"sku":"SH-11355","tag":"New","ph":"","img":"assets/products/kl22.webp","imgs":["assets/products/kl22.webp","assets/products/kl22-2.webp","assets/products/kl22-3.webp","assets/products/kl22-4.webp","assets/products/kl22-5.webp","assets/products/kl22-6.webp","assets/products/kl22-7.webp","assets/products/kl22-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"arLink":"https://sketchfab.com/models/663cbea9f35641118da0ce1f104f62ba/ar-redirect","desc":"A curved bedside table in smoky walnut veneer with ribbed sides, layered detailing and two drawers.","features":["Smoky walnut veneer","Ribbed, curved sides","Two drawers"],"specs":{"Type":"Bedroom > Bedside tables","Colour":"Brown"},"care":"Dust regularly with a soft, lint-free cloth or microfiber duster. Keep away from moisture and humidity to prevent warping or mold. Use coasters for drinks and hot items to avoid stains and heat marks. Clean spills promptly with a damp cloth and dry thoroughly. Avoid sharp or heavy objects to prevent scratches and dents. Lubricate drawer slides for smooth operation. Rotate decorative items to prevent uneven wear. Use felt pads under legs to protect floors and add stability. Avoid overcrowding and inspect regularly for damage. MDF Care Keep MDF furniture away from humidity and water; clean spills immediately. Use coasters, placemats, or trivets to protect against heat, moisture, and scratches. Dust regularly with a soft cloth or microfiber duster. Avoid direct sunlight to prevent fading; use curtains or blinds if necessary. Clean with a mild cleaner diluted in water on a soft cloth; don’t apply directly to the surface. Lift when moving to avoid scratches; use furniture pads or sliders. Repair scratches or chips with a matching touch-up marker or furniture wax. Veneer Care Dust regularly with a soft cloth or feather duster. Clean with a mild, non-abrasive wood cleanser; avoid harsh chemicals. Protect from moisture by cleaning spills immediately and using coasters or trivets under hot/wet items. Shield from direct sunlight to prevent fading; use curtains or UV-blocking films. Avoid placing hot objects directly on veneer; maintain stable temperature and humidity. Use felt pads under furniture legs and lift furniture when moving to prevent scratches. Occasionally polish with a wood-specific polish to enhance shine. Inspect for damage and address issues like loose edges or cracks promptly. Wood Care Dust wood furniture regularly with a soft cloth. Avoid abrasive cleaners, ammonia, or silicone products. Keep wood out of direct sunlight to prevent fading. Maintain stable humidity to avoid warping or cracking. Lift furniture when moving; don’t drag it. Use felt pads under legs to prevent scratches. Check for damage regularly and fix issues promptly."},
  {"id":"kl23","deliveryTime":"6 to 12 business days","name":"Stone White Fabric Dining Chair","cat":"Dining","room":"Dining","price":559,"memberPrice":513,"sku":"SH-11356","tag":"New","ph":"","img":"assets/products/kl23.webp","imgs":["assets/products/kl23.webp","assets/products/kl23-2.webp","assets/products/kl23-3.webp","assets/products/kl23-4.webp","assets/products/kl23-5.webp","assets/products/kl23-6.webp","assets/products/kl23-7.webp","assets/products/kl23-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"arLink":"https://sketchfab.com/models/a79b1a15ace7480296769e57ea9ad676/ar-redirect","desc":"A dining chair in soft, textured stone white fabric with a curved wrap-around backrest, a generously cushioned seat and sturdy rounded legs.","features":["Textured stone white fabric","Curved wrap-around backrest","Cushioned seat"],"specs":{"Type":"Dining & kitchen > Dining > Dining Chairs","Colour":"White"},"care":"Dust and wipe with a soft, damp cloth. Use a vacuum brush for upholstered chairs; fabric cleaner for stains. Professional cleaning is recommended for tough stains. Keep away from direct sunlight to prevent fading. Use protective covers if placed outdoors. Rotate cushions regularly for even wear. Avoid exceeding weight capacity. Check and tighten screws periodically. Sit properly; avoid tilting to prevent damage. Fabric Care Regularly vacuum with a soft brush attachment to remove dust and debris. Blot spills immediately with a clean, white cloth; avoid rubbing. Keep furniture out of direct sunlight to prevent fading; use covers or rotate furniture if necessary. Keep sharp objects and abrasive clothing away from the fabric to prevent damage. Have your furniture professionally cleaned periodically. Follow the manufacturer’s instructions for cleaning, and test any product on a small, hidden area first. Rotate removable cushions regularly to ensure even wear. Avoid harsh chemicals, bleach, or abrasive cleaners."},
  {"id":"kl24","deliveryTime":"6 to 12 business days","name":"Amber Ash Dining Table with Reeded Triangle Bases, 240cm","cat":"Dining","room":"Dining","price":3399,"memberPrice":2799,"sku":"SH-11357","tag":"New","ph":"","img":"assets/products/kl24.webp","imgs":["assets/products/kl24.webp","assets/products/kl24-2.webp","assets/products/kl24-3.webp","assets/products/kl24-4.webp","assets/products/kl24-5.webp","assets/products/kl24-6.webp","assets/products/kl24-7.webp","assets/products/kl24-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"arLink":"https://sketchfab.com/models/ce748ab45f024c888c153d348a002d8f/ar-redirect","desc":"A 240 x 120cm dining table in amber brown ash veneer that seats eight to ten. Two triangular pedestal bases with vertical reeding hold up the top.","features":["240 x 120cm, seats 8 to 10","Amber brown ash veneer","Two reeded triangular pedestals"],"specs":{"Type":"Dining & kitchen > Dining > Dining Tables","Colour":"Brown"}},
  {"id":"kl25","deliveryTime":"6 to 12 business days","name":"Beige Woven Fabric Counter Stool","cat":"Dining","room":"Dining","price":599,"memberPrice":549,"sku":"SH-11358","tag":"New","ph":"","img":"assets/products/kl25.webp","imgs":["assets/products/kl25.webp","assets/products/kl25-2.webp","assets/products/kl25-3.webp","assets/products/kl25-4.webp","assets/products/kl25-5.webp","assets/products/kl25-6.webp","assets/products/kl25-7.webp","assets/products/kl25-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"arLink":"https://sketchfab.com/models/f86e4cc731c54a8ca26d871dd6ec74de/ar-redirect","desc":"A compact counter stool in mid beige woven fabric with a sculpted, fully wrapped form and a slim metal footrest.","features":["Mid beige woven fabric","Fully wrapped, sculpted seat","Metal footrest"],"specs":{"Type":"Dining & kitchen > Dining > Bar Stools","Colour":"Beige"},"care":"Dust regularly with a soft, damp cloth; vacuum upholstery and spot clean stains. Use professional cleaning for tough stains. Keep away from direct sunlight to prevent fading. Use protective covers for outdoor use. Rotate cushions to maintain even wear. Avoid exceeding weight limits to protect the frame. Tighten loose screws or parts as needed. Do not tilt the stool while seated. Fabric Care Regularly vacuum with a soft brush attachment to remove dust and debris. Blot spills immediately with a clean, white cloth; avoid rubbing. Keep furniture out of direct sunlight to prevent fading; use covers or rotate furniture if necessary. Keep sharp objects and abrasive clothing away from the fabric to prevent damage. Have your furniture professionally cleaned periodically. Follow the manufacturer’s instructions for cleaning, and test any product on a small, hidden area first. Rotate removable cushions regularly to ensure even wear. Avoid harsh chemicals, bleach, or abrasive cleaners."},
  {"id":"kl26","deliveryTime":"6 to 12 business days","name":"Ash Oak Sculptural Sideboard","cat":"Dining","room":"Dining","price":3499,"memberPrice":2899,"sku":"SH-11359","tag":"New","ph":"","img":"assets/products/kl26.webp","imgs":["assets/products/kl26.webp","assets/products/kl26-2.webp","assets/products/kl26-3.webp","assets/products/kl26-4.webp","assets/products/kl26-5.webp","assets/products/kl26-6.webp","assets/products/kl26-7.webp","assets/products/kl26-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"arLink":"https://sketchfab.com/models/4c0966eb39b0499f98a3f7f1adf8ed11/ar-redirect","desc":"A sideboard in warm ash oak veneer with an asymmetrical, sectional front that hides generous storage behind smooth-opening doors and shelves.","features":["Ash oak veneer","Asymmetrical sectional design","Concealed shelved storage"],"specs":{"Type":"Dining & kitchen > Dining > Storage","Colour":"Brown"},"care":"Wipe surfaces with a soft, damp cloth; avoid abrasive cleaners and harsh chemicals. Keep cabinets dry; wipe spills promptly and ensure proper ventilation. Clean handles with a soft cloth to prevent tarnishing; avoid abrasive products. Dust regularly to prevent buildup and dullness. Use liners or mats to protect interiors from spills and scratches. Keep away from direct sunlight and heat to prevent fading and warping. Tighten loose screws, hinges, and handles as needed. Avoid overloading to prevent strain on hinges and structure. Use recommended polish for maintenance, following care guidelines. Lift when moving; do not drag. Veneer Care Dust regularly with a soft cloth or feather duster. Clean with a mild, non-abrasive wood cleanser; avoid harsh chemicals. Protect from moisture by cleaning spills immediately and using coasters or trivets under hot/wet items. Shield from direct sunlight to prevent fading; use curtains or UV-blocking films. Avoid placing hot objects directly on veneer; maintain stable temperature and humidity. Use felt pads under furniture legs and lift furniture when moving to prevent scratches. Occasionally polish with a wood-specific polish to enhance shine. Inspect for damage and address issues like loose edges or cracks promptly."},
  {"id":"kl27","deliveryTime":"6 to 12 business days","name":"Sand Beige Vegan Leather Dining Chair with Black Legs","cat":"Dining","room":"Dining","price":599,"memberPrice":549,"sku":"SH-11360","tag":"New","ph":"","img":"assets/products/kl27.webp","imgs":["assets/products/kl27.webp","assets/products/kl27-2.webp","assets/products/kl27-3.webp","assets/products/kl27-4.webp","assets/products/kl27-5.webp","assets/products/kl27-6.webp","assets/products/kl27-7.webp","assets/products/kl27-8.webp"],"arriveDays":[9,17],"preorder":false,"auOnly":true,"desc":"A dining chair upholstered in sand beige vegan leather on black wooden legs.","features":["Sand beige vegan leather","Black wooden legs"],"specs":{"Type":"Dining & kitchen > Dining > Dining Chairs","Colour":"Beige"}},
  {"id":"kl28","deliveryTime":"6 to 12 business days","name":"Dark Ash Ridged Wooden Mirror, 140 x 110cm","cat":"Home Décor","room":"Home Décor","price":649,"memberPrice":594,"sku":"SH-11361","tag":"New","ph":"","img":"assets/products/kl28.webp","imgs":["assets/products/kl28.webp","assets/products/kl28-2.webp","assets/products/kl28-3.webp","assets/products/kl28-4.webp","assets/products/kl28-5.webp","assets/products/kl28-6.webp","assets/products/kl28-7.webp","assets/products/kl28-8.webp"],"arriveDays":[9,17],"preorder":false,"desc":"A 140 x 110cm landscape mirror with rounded corners, framed in dark ash timber with carved parallel ridges. It suits the wall above a sideboard or dresser.","features":["140 x 110cm","Dark ash timber frame with ridges","Rounded corners"],"specs":{"Type":"Home Décor > Mirrors","Colour":"Brown"}},
  {"id":"kl29","deliveryTime":"6 to 12 business days","name":"Beige Travertine Bookend, 14cm","cat":"Home Décor","room":"Home Décor","price":289,"memberPrice":270,"sku":"SH-11362","tag":"New","ph":"","img":"assets/products/kl29.webp","imgs":["assets/products/kl29.webp","assets/products/kl29-2.webp","assets/products/kl29-3.webp","assets/products/kl29-4.webp","assets/products/kl29-5.webp","assets/products/kl29-6.webp","assets/products/kl29-7.webp","assets/products/kl29-8.webp"],"arriveDays":[9,17],"preorder":false,"desc":"A 14cm block of natural beige travertine with soft banding and an open-pored surface, heavy enough to keep books upright.","features":["14cm natural travertine","Heavy enough to hold books","Each piece varies"],"specs":{"Type":"Home Décor > Decor","Colour":"Beige"}},
  {"id":"kl30","deliveryTime":"6 to 12 business days","name":"Beige Travertine Lidded Box, 17.5cm","cat":"Home Décor","room":"Home Décor","price":299,"memberPrice":279,"sku":"SH-11363","tag":"New","ph":"","img":"assets/products/kl30.webp","imgs":["assets/products/kl30.webp","assets/products/kl30-2.webp","assets/products/kl30-3.webp","assets/products/kl30-4.webp","assets/products/kl30-5.webp","assets/products/kl30-6.webp","assets/products/kl30-7.webp","assets/products/kl30-8.webp"],"arriveDays":[9,17],"preorder":false,"desc":"A 17.5cm lidded box in natural beige travertine with soft banding and a round stone knob. Use it for cotton pads, hair ties or small keepsakes.","features":["17.5cm natural travertine","Lid with round stone knob","Each piece varies"],"specs":{"Type":"Home Décor > Decor","Colour":"Beige"}},

  /* ===== Ready to ship — batch 7: bedroom, kids, storage, dining, outdoor ===== */



  { id: "lx78", added: "2026-11-08", name: "Ginnie Double Curved Boucle Cloud Bed Frame in Cream White", cat: "Bedroom", room: "Bedroom", price: 684, memberPrice: 626, sku: "SH-11367", tag: "New", ph: "", img: "assets/products/lx78.webp",
    imgs: ["assets/products/lx78.webp", "assets/products/lx78-2.webp", "assets/products/lx78-3.webp", "assets/products/lx78-4.webp", "assets/products/lx78-5.webp"],
    fastShip: true, weight: "42.5 kg",
    desc: "A bed that feels like sinking into a cloud. The Ginnie wraps a solid timber frame in soft cream bouclé, with a plush 13cm-thick curved headboard that's made for sitting up with a book or a show. Its double size suits apartments, guest rooms and smaller bedrooms, and the timber legs keep the look light and modern.",
    features: [
      "Plush 13cm-thick curved headboard",
      "Soft, textured bouclé upholstery in cream white",
      "Solid timber frame with timber legs",
      "Double size, ideal for smaller bedrooms",
      "Easy assembly"
    ],
    specs: { "Type": "Bedroom > Bed frames > Double", "Size": "Double", "Upholstery": "Bouclé fabric", "Frame": "Solid timber", "Headboard": "13cm thick, curved", "Colour": "Cream white", "Mattress": "Not included" } },


  { id: "lx80", added: "2026-11-08", name: "Lunia Queen Boucle Gas Lift Storage Bed Frame in Cream White", cat: "Bedroom", room: "Bedroom", price: 878, memberPrice: 800, sku: "SH-11369", tag: "New", ph: "", img: "assets/products/lx80.webp",
    imgs: ["assets/products/lx80.webp", "assets/products/lx80-2.webp", "assets/products/lx80-3.webp", "assets/products/lx80-4.webp", "assets/products/lx80-5.webp"],
    fastShip: true, weight: "50.7 kg",
    desc: "Hide a whole linen cupboard under your bed. The Lunia lifts on smooth hydraulic gas struts to reveal 24cm-deep storage for blankets, pillows and off-season clothes, all beneath a soft cream-white bouclé frame. It's a calm, modern centrepiece for the main bedroom with a 300kg weight capacity.",
    features: [
      "Hydraulic gas lift with under-bed storage",
      "24cm storage depth",
      "Plush polyester bouclé in cream white",
      "Engineered wood frame, wooden legs and metal fittings",
      "300kg weight capacity",
      "Basic assembly required"
    ],
    specs: { "Type": "Bedroom > Bed frames > Queen", "Size": "Queen", "Upholstery": "Polyester bouclé", "Frame": "Engineered wood, wooden legs", "Storage": "Gas lift, 24cm deep", "Weight capacity": "300kg", "Colour": "Cream white", "Mattress": "Not included" },
    dimensions: "216cm L x 165cm W x 110cm H" },



  { id: "lx83", added: "2026-11-08", name: "Manuel 2 Drawer Bedside Table in Black", cat: "Bedroom", room: "Bedroom", price: 217, memberPrice: 205, sku: "SH-11372", tag: "New", ph: "", img: "assets/products/lx83.webp",
    imgs: ["assets/products/lx83.webp", "assets/products/lx83-2.webp", "assets/products/lx83-3.webp", "assets/products/lx83-4.webp", "assets/products/lx83-5.webp"],
    fastShip: true, weight: "21 kg",
    desc: "A neat, modern bedside with a touch of gold. The Manuel has two deep drawers for books, chargers and glasses, finished in smooth black with gold handles that add a luxe detail. At 60cm wide it suits big and small bedrooms alike, and anti-slip pads keep it steady and protect your floors.",
    features: [
      "Two large drawers",
      "Smooth black finish with gold handles",
      "Engineered wood construction",
      "Anti-slip floor pads",
      "Holds up to 25kg on top",
      "Also works beside a sofa"
    ],
    specs: { "Type": "Bedroom > Bedside tables", "Material": "Engineered wood", "Drawers": "2", "Colour": "Black with gold handles", "Weight capacity": "25kg" },
    dimensions: "60cm W x 40cm D x 55cm H" },

  { id: "lx84", added: "2026-11-08", name: "Hamish 140cm 4 Door Fluted Storage Buffet in White", cat: "Living Room", room: "Living Room", price: 554, memberPrice: 509, sku: "SH-11373", tag: "New", ph: "", img: "assets/products/lx84.webp",
    imgs: ["assets/products/lx84.webp", "assets/products/lx84-2.webp", "assets/products/lx84-3.webp", "assets/products/lx84-4.webp", "assets/products/lx84-5.webp"],
    fastShip: true, weight: "55 kg",
    desc: "Soft waves, clean lines and plenty of room inside. The Hamish 140cm buffet fronts two cabinets with four handle-free fluted doors that open with a gentle push, each hiding two adjustable shelves. The wide top is ready for lamps, plants and serveware, so it works just as well in the dining room, living room or hallway.",
    features: [
      "140cm wide with a fluted wave front",
      "Four handle-free push-to-open doors",
      "Two cabinets, each with two adjustable shelves",
      "Scratch-resistant, easy-clean surface",
      "Large top for display"
    ],
    specs: { "Type": "Dining & kitchen > Dining > Storage Buffets", "Width": "140cm", "Material": "Engineered and composite wood, surface veneer", "Doors": "4, push to open", "Shelves": "Adjustable", "Colour": "White" } },

  { id: "lx85", added: "2026-11-08", name: "Vernon 6 Seater Wicker Outdoor Lounge Set in Cream White", cat: "Outdoor", room: "Outdoor", price: 2768, memberPrice: 2501, sku: "SH-11374", tag: "New", ph: "", img: "assets/products/lx85.webp",
    imgs: ["assets/products/lx85.webp", "assets/products/lx85-2.webp", "assets/products/lx85-3.webp", "assets/products/lx85-4.webp", "assets/products/lx85-5.webp"],
    fastShip: true, weight: "69 kg",
    desc: "Resort-style lounging for your patio. The Vernon set brings two generous wicker sofas and a matching coffee table together on a rust-resistant, powder-coated aluminium frame, with 10cm-thick cream cushions for proper comfort. It arrives ready to use, with no assembly, so you can set it out and sit straight down.",
    features: [
      "Seats six across two sofas, plus a coffee table",
      "Rust-resistant powder-coated aluminium frame",
      "All-weather wicker",
      "10cm-thick cushions",
      "No assembly required"
    ],
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Sofas & Lounges", "Pieces": "4 (2 sofas, coffee table, cushions)", "Frame": "Powder-coated aluminium", "Weave": "Wicker", "Seat depth": "52cm", "Seat height": "44cm", "Weight capacity": "120kg per sofa, 75kg coffee table", "Colour": "Cream white" },
    dimensions: "Left sofa 196 x 70 x 72cm; right sofa 186 x 70 x 72cm; coffee table 120 x 57 x 41cm" },

  { id: "lx86", added: "2026-11-08", name: "Nikias Queen Boucle Fabric Bed Frame in Cream White", cat: "Bedroom", room: "Bedroom", price: 984, memberPrice: 896, sku: "SH-11375", tag: "New", ph: "", img: "assets/products/lx86.webp",
    imgs: ["assets/products/lx86.webp", "assets/products/lx86-2.webp", "assets/products/lx86-3.webp", "assets/products/lx86-4.webp", "assets/products/lx86-5.webp"],
    fastShip: true, weight: "50.5 kg",
    desc: "Texture you can feel. The Nikias queen bed frame wraps a solid wood base in plush cream bouclé, with a cushioned headboard finished in eye-catching checkered tufting. Lean back to read or unwind; it's as comfortable as it is good-looking.",
    features: [
      "Checkered tufted, cushioned headboard",
      "Soft bouclé upholstery in cream white",
      "Solid wood frame",
      "Queen size"
    ],
    specs: { "Type": "Bedroom > Bed frames > Queen", "Size": "Queen", "Upholstery": "Bouclé fabric", "Frame": "Solid wood", "Colour": "Cream white", "Mattress": "Not included" } },

  { id: "lx87", added: "2026-11-08", name: "Hamish 200cm Fluted TV Storage Entertainment Unit in White", cat: "Living Room", room: "Living Room", price: 528, memberPrice: 485, sku: "SH-11376", tag: "New", ph: "", img: "assets/products/lx87.webp",
    imgs: ["assets/products/lx87.webp", "assets/products/lx87-2.webp", "assets/products/lx87-3.webp", "assets/products/lx87-4.webp", "assets/products/lx87-5.webp"],
    fastShip: true, weight: "44 kg",
    desc: "A long, low TV unit with a gentle wave. The Hamish 200cm has four handle-free drawers that open and close softly, and two cable holes at the back to keep wires out of sight. Mount it on the wall for a floating look or stand it on the floor; either way the wide top holds the TV, speakers and décor.",
    features: [
      "200cm wide with a fluted wave front",
      "Four handle-free soft-rebound drawers",
      "Two rear cable holes",
      "Wall-mount or floor-standing",
      "Easy-clean surface",
      "Two-person assembly"
    ],
    specs: { "Type": "Living Room > Storage > TV Units & Entertainment Units", "Width": "200cm", "Material": "Engineered and composite wood", "Drawers": "4, push to open", "Colour": "White" } },

  { id: "lx88", added: "2026-11-08", name: "Erick 160cm 4-Door Storage Buffet Sideboard in Black", cat: "Living Room", room: "Living Room", price: 554, memberPrice: 509, sku: "SH-11377", tag: "New", ph: "", img: "assets/products/lx88.webp",
    imgs: ["assets/products/lx88.webp", "assets/products/lx88-2.webp", "assets/products/lx88-3.webp", "assets/products/lx88-4.webp", "assets/products/lx88-5.webp"],
    fastShip: true, weight: "52 kg",
    desc: "Bold black with a touch of gold. The Erick 160cm sideboard hides plenty of storage behind four doors with adjustable shelving, finished with brass-look half-moon handles and raised on a sturdy black metal frame. The deep black finish anchors a neutral room and gives you a wide top for lamps, art and serveware.",
    features: [
      "160cm wide with four doors",
      "Adjustable shelves",
      "Melamine-coated engineered wood",
      "Brass-look half-moon handles and a black metal frame base",
      "Wide top for display"
    ],
    specs: { "Type": "Dining & kitchen > Dining > Storage Buffets", "Width": "160cm", "Material": "Melamine-coated engineered wood, metal frame", "Doors": "4", "Colour": "Black" },
    dimensions: "160cm W x 40cm D x 75cm H" },

  { id: "lx89", added: "2026-11-08", name: "Enyo Double 26cm Euro Top Pocket Spring Foam Mattress in Medium Firm", cat: "Bedroom", room: "Bedroom", price: 580, memberPrice: 532, sku: "SH-11378", tag: "New", ph: "", img: "assets/products/lx89.webp",
    imgs: ["assets/products/lx89.webp", "assets/products/lx89-2.webp", "assets/products/lx89-3.webp", "assets/products/lx89-4.webp", "assets/products/lx89-5.webp"],
    fastShip: true, weight: "29.8 kg",
    desc: "Springs for support, foam for comfort. The Enyo double combines an 18cm pocket spring core with high-density and memory foams and a plush quilted Euro top, for a medium-firm feel that suits most sleepers. Reinforced edges mean you can sit on the side without it sagging. It arrives ready to unpack, with no assembly.",
    features: [
      "26cm thick with a quilted Euro top",
      "18cm pocket spring core",
      "High-density and memory foam layers",
      "Reinforced edge support",
      "Knitted fabric cover",
      "Medium firm"
    ],
    specs: { "Type": "Bedroom > Mattersses > Double", "Size": "Double", "Thickness": "26cm", "Firmness": "Medium firm", "Core": "18cm pocket springs", "Comfort layers": "High-density and memory foam" } },

  { id: "lx90", added: "2026-11-08", name: "Stoten 120cm 4 Seater Round Dining Table in Concrete", cat: "Kitchenware", room: "Kitchenware", price: 411, memberPrice: 380, sku: "SH-11379", tag: "New", ph: "", img: "assets/products/lx90.webp",
    imgs: ["assets/products/lx90.webp", "assets/products/lx90-2.webp", "assets/products/lx90-3.webp", "assets/products/lx90-4.webp", "assets/products/lx90-5.webp"],
    fastShip: true, weight: "32 kg",
    desc: "Post-modern style for four. The Stoten pairs a 120cm round top in a concrete-look finish with black powder-coated legs that cross and taper from the centre for a sturdy, balanced stance. Adjustable feet steady it on uneven floors, and rubber pads protect your floorboards.",
    features: [
      "120cm round top seats four",
      "Concrete-look veneer tabletop",
      "Black powder-coated crossed metal legs",
      "Adjustable feet for uneven floors",
      "Non-slip rubber feet pads"
    ],
    specs: { "Type": "Dining & kitchen > Dining > Dining Tables", "Seats": "4", "Top": "Engineered wood with concrete-look paper veneer", "Legs": "Black powder-coated metal", "Diameter": "120cm" } },

  { id: "lx91", added: "2026-11-08", name: "Deanna Outdoor Hanging Egg Chair with Cushion in Black", cat: "Outdoor", room: "Outdoor", price: 684, memberPrice: 626, sku: "SH-11380", tag: "New", ph: "", img: "assets/products/lx91.webp",
    imgs: ["assets/products/lx91.webp", "assets/products/lx91-2.webp", "assets/products/lx91-3.webp", "assets/products/lx91-4.webp", "assets/products/lx91-5.webp"],
    fastShip: true, weight: "26.5 kg",
    desc: "Your own private nook, indoors or out. The Deanna egg chair hangs from its own sturdy steel stand, so there's no ceiling hook needed. UV-protected black wicker and a rust-resistant frame suit balconies and covered patios, while high-density cushions and pillows make it easy to curl up for hours.",
    features: [
      "Freestanding with its own steel stand",
      "UV-protected black PU wicker",
      "Rust-resistant powder-coated steel frame",
      "High-density foam cushions and pillows",
      "For indoor or covered outdoor use"
    ],
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Egg Chairs", "Weave": "UV-protected PU wicker", "Frame": "Powder-coated steel", "Includes": "Stand, cushions and pillows", "Colour": "Black", "Use": "Indoor or covered outdoor" } },


  { id: "lx93", added: "2026-11-08", name: "Utah Boucle Curved 3 Legged Accent Chair in Cream", cat: "Living Room", room: "Living Room", price: 437, memberPrice: 403, sku: "SH-11382", tag: "New", ph: "", img: "assets/products/lx93.webp",
    imgs: ["assets/products/lx93.webp", "assets/products/lx93-2.webp", "assets/products/lx93-3.webp", "assets/products/lx93-4.webp", "assets/products/lx93-5.webp"],
    fastShip: true, weight: "12 kg",
    desc: "A sculptural chair that's ready the moment it arrives. The Utah's three-legged base and curved U-shaped back make it a striking focal point, upholstered in soft cream bouclé over a solid wood frame. High arms give real support for reading or a coffee break, and it comes fully assembled.",
    features: [
      "Unique three-legged design",
      "Curved U-shaped backrest and high arms",
      "Soft bouclé upholstery in cream",
      "Solid wood frame",
      "Arrives fully assembled"
    ],
    specs: { "Type": "Accent chair", "Upholstery": "Bouclé fabric", "Frame": "Solid wood", "Colour": "Cream", "Assembly": "None required" } },

  { id: "lx94", added: "2026-11-08", name: "Krokom 200x300cm Modern Abstract Indoor Floor Rug", cat: "Living Room", room: "Living Room", price: 307, memberPrice: 286, sku: "SH-11383", tag: "New", ph: "", img: "assets/products/lx94.webp",
    imgs: ["assets/products/lx94.webp", "assets/products/lx94-2.webp", "assets/products/lx94-3.webp", "assets/products/lx94-5.webp"],
    fastShip: true, weight: "5.8 kg",
    desc: "Soft, subtle art for your floor. The Krokom rug carries a gentle printed abstract pattern that sits easily with modern and contemporary furniture. It's 100% polyester, which resists stains and doesn't soak up spills quickly, and an anti-slip backing keeps it in place. At 200 x 300cm it's sized to anchor a full living room.",
    features: [
      "Subtle modern abstract print",
      "100% polyester, stain resistant and easy to clean",
      "Anti-slip backing",
      "Large 200 x 300cm size"
    ],
    specs: { "Type": "Living Room > Decor > Rugs", "Size": "200 x 300cm", "Material": "100% polyester", "Backing": "Anti-slip", "Use": "Indoor" } },

  { id: "lx95", added: "2026-11-08", name: "Peyton Boucle Fabric Bar Stool Set of 2 in Cream", cat: "Kitchenware", room: "Kitchenware", price: 567, memberPrice: 520, sku: "SH-11384", tag: "New", ph: "", img: "assets/products/lx95.webp",
    imgs: ["assets/products/lx95.webp", "assets/products/lx95-3.webp", "assets/products/lx95-4.webp", "assets/products/lx95-5.webp"],
    fastShip: true, weight: "12.49 kg",
    desc: "Comfortable enough to linger at the bench. The Peyton stools have a soft, scooped seat in cream bouclé with a low curved back, a footrest ring and black powder-coated metal legs. Sold as a pair, they bring a cosy, minimalist look to a kitchen island or bar.",
    features: [
      "Set of two bar stools",
      "Soft cream bouclé upholstery",
      "Low curved back and footrest ring",
      "Black powder-coated metal legs",
      "Engineered wood frame"
    ],
    specs: { "Type": "Dining & kitchen > Dining > Bar Stools", "Quantity": "2", "Upholstery": "Bouclé fabric", "Legs": "Black powder-coated metal", "Colour": "Cream" },
    dimensions: "51cm W x 42.5cm D x 74cm H (each)" },

  { id: "lx96", added: "2026-11-08", name: "Halsa Classic Velvet Dining Chairs Set of 4 in Black", cat: "Kitchenware", room: "Kitchenware", price: 424, memberPrice: 392, sku: "SH-11385", tag: "New", ph: "", img: "assets/products/lx96.webp",
    imgs: ["assets/products/lx96.webp", "assets/products/lx96-2.webp", "assets/products/lx96-3.webp", "assets/products/lx96-4.webp", "assets/products/lx96-5.webp"],
    fastShip: true, weight: "20 kg",
    desc: "Classic shape, plush comfort. The Halsa chairs wrap a cushioned seat and a supportive 45cm backrest in soft black velvet, on sleek metal legs with anti-slip pads. The set of four suits both modern and traditional dining tables; buy two sets for an eight-seater.",
    features: [
      "Set of four dining chairs",
      "Soft velvet upholstery in black",
      "Cushioned seat with 45cm-high backrest",
      "Sturdy metal legs with anti-slip pads"
    ],
    specs: { "Type": "Dining & kitchen > Dining > Dining Chairs", "Quantity": "4", "Upholstery": "Velvet", "Legs": "Metal", "Back height": "45cm", "Colour": "Black" } },

  { id: "lx97", added: "2026-11-08", name: "Seneca Queen Channel Tufted Velvet Fabric Bed Frame in Sandy White", cat: "Bedroom", room: "Bedroom", price: 723, memberPrice: 661, sku: "SH-11386", tag: "New", ph: "", img: "assets/products/lx97.webp",
    imgs: ["assets/products/lx97.webp", "assets/products/lx97-2.webp", "assets/products/lx97-3.webp", "assets/products/lx97-4.webp", "assets/products/lx97-5.webp"],
    fastShip: true, weight: "36.6 kg",
    desc: "A soft, sculpted statement. The Seneca queen bed frame features a gently curved, channel-tufted headboard in sandy white velvet, padded with firm sponge and silk wadding for comfort. A solid wood frame and engineered wood legs support up to 230kg.",
    features: [
      "Curved, channel-tufted headboard",
      "Velvet upholstery in sandy white",
      "Padded with firm sponge and silk wadding",
      "Solid wood frame, engineered wood legs",
      "230kg weight capacity",
      "Basic assembly required"
    ],
    specs: { "Type": "Bedroom > Bed frames > Queen", "Size": "Queen", "Upholstery": "Velvet", "Frame": "Solid wood, engineered wood legs", "Weight capacity": "230kg", "Colour": "Sandy white", "Mattress": "Not included" },
    dimensions: "220cm L x 163cm W x 115cm H" },

  { id: "lx98", added: "2026-11-08", name: "Gamila Boucle Rocking Chair with Ottoman in Cream White", cat: "Living Room", room: "Living Room", price: 554, memberPrice: 509, sku: "SH-11387", tag: "New", ph: "", img: "assets/products/lx98.webp",
    imgs: ["assets/products/lx98.webp", "assets/products/lx98-2.webp", "assets/products/lx98-3.webp", "assets/products/lx98-4.webp", "assets/products/lx98-5.webp"],
    fastShip: true, weight: "28.3 kg",
    desc: "Rock, relax and put your feet up. The Gamila rocking chair is upholstered in soft cream bouclé over a solid timber frame, with a high-density foam seat that stays supportive for long sits. The matching ottoman and removable pillow make it a favourite for nurseries, reading corners and slow Sunday mornings.",
    features: [
      "Smooth rocking motion",
      "Soft bouclé upholstery in cream white",
      "Solid timber frame and legs",
      "High-density foam seat",
      "Includes matching ottoman and removable pillow",
      "Curved backrest and armrests"
    ],
    specs: { "Type": "Rocking chair with ottoman", "Upholstery": "Bouclé fabric", "Frame": "Solid timber", "Includes": "Ottoman and pillow", "Colour": "Cream white" } },
];

/* ---- Coming-soon placeholders ---------------------------------
   Shown as "Back Soon" cards (Samira Home Decor logo) so every category
   looks stocked while real products are being added. Delete a
   category's list here once you've published real products for it. */
const COMING_SOON = {
  "Living Room": ["Bouclé Accent Armchair", "Arched Floor Mirror", "Hand-Knotted Area Rug", "Ceramic Table Lamp"],
  "Home Décor": ["Sculptural Ceramic Vase", "Framed Line-Art Print", "Marble Trinket Tray", "Faux Olive Stem"],
  "Bedroom": ["French Linen Quilt Set", "Oak Bedside Table", "Cushion & Throw Bundle", "Bedside Reading Lamp"],
  "Bathroom": ["Waffle Cotton Towel Set", "Bamboo Bath Caddy", "Woven Storage Basket", "Stoneware Soap Dispenser"],
  "Office": ["Oak Writing Desk", "Ergonomic Studio Chair", "Leather Desk Organiser", "Brass Task Lamp"],
  "Outdoor": ["Rattan Lounge Set", "Textured Ceramic Planter", "Solar Lantern Pair", "Weatherproof Cushion Set"],
  "Kitchenware": ["Stoneware Dinner Set", "Acacia Serving Board", "Glass Canister Trio", "Linen Tea Towel Set"],
  "Lifestyle": ["Soy Candle Trio", "Reed Diffuser Duo", "Travel Wash Bag", "Stoneware Mug Set"],
  "Packaging": ["Kraft Gift Boxes 10pk", "Stand-Up Food Pouches 50pk", "Ribbon & Gift Tag Kit", "Mailer Boxes 20pk"]
};
const CS_STYLES = ["", "Classic", "Luxe", "Petite", "Grand", "Studio", "Signature", "Heritage", "Everyday", "Deluxe", "Modern", "Coastal", "Nordic"];
const CS_PER_CAT = 0; // 'Back Soon' placeholder cards (0 = off; priced demo products below fill the pages instead)
Object.keys(COMING_SOON).forEach(function (cat) {
  var base = COMING_SOON[cat];
  for (var i = 0; i < CS_PER_CAT; i++) {
    var nm = base[i % base.length];
    var st = CS_STYLES[Math.floor(i / base.length) % CS_STYLES.length];
    PRODUCTS.push({
      id: "cs-" + cat.toLowerCase().replace(/[^a-z]+/g, "") + "-" + (i + 1),
      name: st ? st + " " + nm : nm,
      cat: cat, comingSoon: true, ph: "", img: "assets/logo.jpg"
    });
  }
});

/* Merge any products added via the Admin form on this device (drafts / live preview).
   These show on the site immediately; use the Admin "Copy code" to make them permanent. */
try {
  const _extra = JSON.parse(localStorage.getItem("dm_admin_products") || "[]");
  if (Array.isArray(_extra)) _extra.forEach(p => { if (p && p.id && !PRODUCTS.some(x => x.id === p.id)) PRODUCTS.push(p); });
} catch (e) {}

/* ---- How a gift is packed, and how soon it leaves ---- */
const PACKING_SPEEDS = [
  { id: "ready", name: "Ready to send", days: "3 to 5 business days",
    note: "Packed in a plain navy gift box with gold ribbon, our foil sticker and a hand-written tag.",
    kits: false },
  { id: "signature", name: "Signature packaging", days: "14 working days",
    note: "Our full printed kit in navy and gold. Choose the style below. Worth the wait for a gift that has to land well.",
    kits: true }
];

/* ---- Gift packaging styles (chosen when a hamper is built) ----
   price: charged on top of the hamper when Signature packaging is chosen.
   hidden: true keeps a kit off the site until it has a price. */
const PACKAGING_KITS = [
  { id: "pk-bag",    price: 0, name: "Rope-handle gift bag",   note: "Navy bag with gold rope handles, tissue included", img: "assets/packaging/gift-bag.webp" },
  { id: "pk-ribbon", price: 45, name: "Ribbon-tied gift box",   note: "Lidded box, gold ribbon, navy and gold tissue, branded sleeve",    img: "assets/packaging/ribbon-box.webp" },
  { id: "pk-duo",    price: 45, name: "Gift box & carry bag",   note: "Ribbon-tied box with a matching carry bag",        img: "assets/packaging/bag-and-box.webp" },
  { id: "pk-tag",    price: 45, name: "Gift box with tag",      note: "Magnetic box, navy and gold tissue, ribbon and a hand-written tag", img: "assets/packaging/box-and-tag.webp" },
  { id: "pk-pouch",  price: 45, name: "Drawstring pouch & box", note: "For smaller pieces, gold cord and gold tissue",    img: "assets/packaging/pouch-and-box.webp" },
  { id: "pk-trio",   price: 70, name: "Three-box set",          note: "Small, medium and large, each ribbon-tied",        img: "assets/packaging/box-trio.webp" }
];

/* ---- Gift Hamper Maker items ---- */
const HAMPER_ITEMS = [
  { id: "h-gb001", name: "Chef Solid Grey Apron", price: 34.51, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h001.webp" },
  { id: "h-gb002", name: "Chef Solid Grey Oven Glove", price: 15.99, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h002.webp" },
  { id: "h-gb003", name: "Bar Geek Cocktail Strainer - Stainless Steel", price: 20.93, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h003.webp" },
  { id: "h-gb004", name: "Wine X Cocktail Muddler", price: 16.23, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h004.webp" },
  { id: "h-gb005", name: "Wine X Cocktail Strainer", price: 8.09, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h005.webp" },
  { id: "h-gb006", name: "Riedel Ouverture Set of 2 Red Wine Glasses", price: 76.0, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h006.webp" },
  { id: "h-gb007", name: "Huggables Toys Bud the Elf", price: 15.99, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h007.webp" },
  { id: "h-gb008", name: "Plain Gift Card, Black", price: 0.0, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h008.webp" },
  { id: "h-gb009", name: "Plain Gift Card, Cream", price: 0.0, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h009.webp" },
  { id: "h-gb010", name: "Premium Baby", price: 3.64, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h010.webp" },
  { id: "h-gb011", name: "Good Mood Food", price: 3.64, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h011.webp" },
  { id: "h-gb012", name: "Love You", price: 3.64, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h012.webp" },
  { id: "h-gb013", name: "Get Well", price: 3.64, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h013.webp" },
  { id: "h-gb014", name: "Sympathy", price: 3.64, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h014.webp" },
  { id: "h-gb015", name: "Thank You", price: 3.64, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h015.webp" },
  { id: "h-gb016", name: "Congrats", price: 3.64, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h016.webp" },
  { id: "h-gb017", name: "Sorry", price: 3.64, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h017.webp" },
  { id: "h-gb018", name: "Thinking of You", price: 3.64, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h018.webp" },
  { id: "h-gb019", name: "Happy Birthday", price: 3.64, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h019.webp" },
  { id: "h-gb020", name: "Mother's Day", price: 3.64, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h020.webp" },
  { id: "h-gb021", name: "Plain Black Corp Card", price: 0.0, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h021.webp" },
  { id: "h-gb022", name: "Plain White Corp Card", price: 0.0, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h022.webp" },
  { id: "h-gb023", name: "Video Message", price: 6.11, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h023.webp" },
  { id: "h-gb024", name: "Full Colour Printed Box Branding", price: 4.94, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h024.webp" },
  { id: "h-gb025", name: "Confetti Canon", price: 7.4, cat: "Finishing", emoji: "🎀", img: "assets/hamper/h025.webp" },
  { id: "h-gb026", name: "Gift Packaging, Medium", price: 41.91, cat: "The Box", emoji: "🎁" },
  { id: "h-gb027", name: "Gift Packaging, Small", price: 41.91, cat: "The Box", emoji: "🎁" },
  { id: "h-gb028", name: "Gift Packaging, Large", price: 48.09, cat: "The Box", emoji: "🎁" },
  { id: "h-gb029", name: "Gift Packaging, Extra", price: 60.43, cat: "The Box", emoji: "🎁" },
  { id: "h-gb030", name: "Signature Gift Box", price: 0.0, cat: "The Box", emoji: "🎁", img: "assets/hamper/h030.webp" },
  { id: "h-gb031", name: "Alfresco Picnic Basket", price: 179.01, cat: "The Box", emoji: "🎁", img: "assets/hamper/h031.webp" },
  { id: "h-gb032", name: "Heritage Picnic Basket", price: 183.95, cat: "The Box", emoji: "🎁", img: "assets/hamper/h032.webp" },
  { id: "h-gb033", name: "Signature Woven Gift Basket", price: 104.94, cat: "The Box", emoji: "🎁", img: "assets/hamper/sys-card.webp" },
  { id: "h-gb034", name: "Robert Gordon Market Basket", price: 72.84, cat: "The Box", emoji: "🎁", img: "assets/hamper/h034.webp" },
  { id: "h-gb035", name: "Robert Gordon Picnic Basket", price: 85.19, cat: "The Box", emoji: "🎁", img: "assets/hamper/h035.webp" },
  { id: "h-gb036", name: "French Market Basket", price: 109.88, cat: "The Box", emoji: "🎁", img: "assets/hamper/h036.webp" },
  { id: "h-gb037", name: "Hampton's Cooler Bag", price: 92.59, cat: "The Box", emoji: "🎁", img: "assets/hamper/h037.webp" },
  { id: "h-gb038", name: "Moroccan Tote Small", price: 92.59, cat: "The Box", emoji: "🎁", img: "assets/hamper/h038.webp" },
  { id: "h-gb039", name: "Moroccan Market Basket Large", price: 97.53, cat: "The Box", emoji: "🎁", img: "assets/hamper/h039.webp" },
  { id: "h-gb040", name: "Hello Baby Cookie", price: 8.58, cat: "Baby", emoji: "🍼", img: "assets/hamper/h040.webp" },
  { id: "h-gb041", name: "Baby Essentials White Blanket", price: 70.31, cat: "Baby", emoji: "🍼", img: "assets/hamper/h041.webp" },
  { id: "h-gb042", name: "Baby Made Baby Imprint Kit", price: 30.85, cat: "Baby", emoji: "🍼", img: "assets/hamper/h042.webp" },
  { id: "h-gb043", name: "Bamboo Muslin Wrap", price: 16.48, cat: "Baby", emoji: "🍼", img: "assets/hamper/h043.webp" },
  { id: "h-gb044", name: "Botany Naturals Baby Lotion 175ml", price: 18.52, cat: "Baby", emoji: "🍼", img: "assets/hamper/h044.webp" },
  { id: "h-gb045", name: "Botany Naturals Baby Shampoo & Wash", price: 18.52, cat: "Baby", emoji: "🍼", img: "assets/hamper/h045.webp" },
  { id: "h-gb046", name: "Coco Chanel Board Book Small Version", price: 16.04, cat: "Baby", emoji: "🍼", img: "assets/hamper/h046.webp" },
  { id: "h-gb047", name: "Elephant Teether", price: 24.68, cat: "Baby", emoji: "🍼", img: "assets/hamper/h047.webp" },
  { id: "h-gb048", name: "Flatout Bear Latte", price: 61.73, cat: "Baby", emoji: "🍼", img: "assets/hamper/h048.webp" },
  { id: "h-gb049", name: "Guess How Much I Love You", price: 18.51, cat: "Baby", emoji: "🍼", img: "assets/hamper/h049.webp" },
  { id: "h-gb050", name: "Little Tradie Booties", price: 36.98, cat: "Baby", emoji: "🍼", img: "assets/hamper/h050.webp" },
  { id: "h-gb051", name: "Martin Luther King Jr Book Small Version", price: 16.04, cat: "Baby", emoji: "🍼", img: "assets/hamper/h051.webp" },
  { id: "h-gb052", name: "Pure Baby Essentials White Zip Growsuit", price: 43.15, cat: "Baby", emoji: "🍼", img: "assets/hamper/h052.webp" },
  { id: "h-gb053", name: "Sophie the Giraffe Teething Toy", price: 56.73, cat: "Baby", emoji: "🍼", img: "assets/hamper/h053.webp" },
  { id: "h-gb054", name: "Stories For Kids Who Dare To Be Different", price: 49.37, cat: "Baby", emoji: "🍼", img: "assets/hamper/h054.webp" },
  { id: "h-gb055", name: "Snuggle Hunny Eucalypt Growsuit", price: 49.32, cat: "Baby", emoji: "🍼", img: "assets/hamper/h055.webp" },
  { id: "h-gb056", name: "Snuggle Hunny Eucalypt Milestone Cards", price: 43.15, cat: "Baby", emoji: "🍼", img: "assets/hamper/h056.webp" },
  { id: "h-gb057", name: "Snuggle Hunny Lion Growsuit", price: 49.32, cat: "Baby", emoji: "🍼", img: "assets/hamper/h057.webp" },
  { id: "h-gb058", name: "Snuggle Hunny Lion Knotted Beanie", price: 18.46, cat: "Baby", emoji: "🍼", img: "assets/hamper/h058.webp" },
  { id: "h-gb059", name: "Snuggle Hunny Lion Milestone Cards", price: 43.15, cat: "Baby", emoji: "🍼", img: "assets/hamper/h059.webp" },
  { id: "h-gb060", name: "Snuggle Hunny Rosebud Milestone Cards", price: 43.15, cat: "Baby", emoji: "🍼", img: "assets/hamper/h060.webp" },
  { id: "h-gb061", name: "Snuggle Hunny Rosebud Short Sleeve Bodysuit", price: 45.62, cat: "Baby", emoji: "🍼", img: "assets/hamper/h061.webp" },
  { id: "h-gb062", name: "Snuggle Hunny Rosebud Topknot", price: 18.46, cat: "Baby", emoji: "🍼", img: "assets/hamper/h062.webp" },
  { id: "h-gb063", name: "Ten Fingers and Ten Toes", price: 20.98, cat: "Baby", emoji: "🍼", img: "assets/hamper/h063.webp" },
  { id: "h-gb064", name: "The Very Hungry Caterpillar", price: 18.51, cat: "Baby", emoji: "🍼", img: "assets/hamper/h064.webp" },
  { id: "h-gb065", name: "Grounded Pleasures Original Drinking Chocolate 200g", price: 18.46, cat: "Drinks", emoji: "☕", img: "assets/hamper/h065.webp" },
  { id: "h-gb066", name: "Grounded Pleasures Marshmallows 140g", price: 14.26, cat: "Drinks", emoji: "☕", img: "assets/hamper/h066.webp" },
  { id: "h-gb067", name: "Harney & Sons English Breakfast Tea Sachets 40g", price: 35.74, cat: "Drinks", emoji: "☕", img: "assets/hamper/h067.webp" },
  { id: "h-gb068", name: "Monista Tea Co. French Earl Grey Loose Leaf Tea 100g", price: 40.56, cat: "Drinks", emoji: "☕", img: "assets/hamper/h068.webp" },
  { id: "h-gb069", name: "Pukka Herbal Collection 35g", price: 13.52, cat: "Drinks", emoji: "☕", img: "assets/hamper/h069.webp" },
  { id: "h-gb070", name: "T2 English Breakfast", price: 28.33, cat: "Drinks", emoji: "☕", img: "assets/hamper/h070.webp" },
  { id: "h-gb071", name: "Toby's Estate Coffee Woolloomoolloo 200g", price: 24.63, cat: "Drinks", emoji: "☕", img: "assets/hamper/h071.webp" },
  { id: "h-gb072", name: "Addition Studio Bath Brew Milk Bath Soak 55g", price: 28.33, cat: "Pamper", emoji: "🕯️", img: "assets/hamper/h072.webp" },
  { id: "h-gb073", name: "Cosy Luxe Pink Slippers", price: 43.15, cat: "Pamper", emoji: "🕯️", img: "assets/hamper/h073.webp" },
  { id: "h-gb074", name: "Balsa Wood Diffuser Flower", price: 6.11, cat: "Pamper", emoji: "🕯️", img: "assets/hamper/h074.webp" },
  { id: "h-gb075", name: "Equilibrium Himalyas Bath Salts 200g", price: 27.1, cat: "Pamper", emoji: "🕯️", img: "assets/hamper/h075.webp" },
  { id: "h-gb076", name: "Luxury Blush Microplush Throw Rug", price: 43.15, cat: "Pamper", emoji: "🕯️", img: "assets/hamper/h076.webp" },
  { id: "h-gb077", name: "Luxury White Robe", price: 61.67, cat: "Pamper", emoji: "🕯️", img: "assets/hamper/h077.webp" },
  { id: "h-gb078", name: "Urban Rituelle Uplifting Lemongrass, Lemon Myrtle, Grapefruit and Eucalyptus Diffuser Set 220ml", price: 70.31, cat: "Pamper", emoji: "🕯️", img: "assets/hamper/h078.webp" },
  { id: "h-gb079", name: "Urban Rituelle Uplifting Lemongrass, Lemon Myrtle, Grapefruit and Eucalyptus Hand and Body Wash 500ml", price: 54.26, cat: "Pamper", emoji: "🕯️", img: "assets/hamper/h079.webp" },
  { id: "h-gb080", name: "Urban Rituelle Uplifting Lemongrass, Lemon Myrtle, Grapefruit and Eucalyptus Hand Cream 100ml", price: 36.98, cat: "Pamper", emoji: "🕯️", img: "assets/hamper/h080.webp" },
  { id: "h-gb081", name: "Urban Rituelle Love Neroli Blossom and Cardamom Hand Cream 100ml", price: 36.98, cat: "Pamper", emoji: "🕯️", img: "assets/hamper/h081.webp" },
  { id: "h-gb082", name: "Urban Rituelle White Lotus Geranium Leaf and Bergamot Hand and Body Wash 500ml", price: 54.26, cat: "Pamper", emoji: "🕯️", img: "assets/hamper/h082.webp" },
  { id: "h-gb083", name: "Urban Rituelle White Lotus Geranium Leaf and Bergamot Hand Cream 100ml", price: 36.98, cat: "Pamper", emoji: "🕯️", img: "assets/hamper/h083.webp" },
  { id: "h-gb084", name: "Urban Rituelle White Lotus Geranium Leaf and Bergamot Soy Candle 140g", price: 43.15, cat: "Pamper", emoji: "🕯️", img: "assets/hamper/h084.webp" },
  { id: "h-gb085", name: "Beechworth Honey Eucalyptus Sweets 225g", price: 23.4, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h085.webp" },
  { id: "h-gb086", name: "Byron Bay Cookie White Choc Chunk Macadamia Cookies Gift Bag 150g", price: 19.69, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h086.webp" },
  { id: "h-gb087", name: "Chocolatier Pure Indulgence Assorted Milk Chocolate Giftbox 190g", price: 39.44, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h087.webp" },
  { id: "h-gb088", name: "Charlies Mini Melting Moments Choc & Salty Caramel 50g", price: 11.05, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h088.webp" },
  { id: "h-gb089", name: "Charlies Mini Melting Moments Raspberry Bliss 50g", price: 11.05, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h089.webp" },
  { id: "h-gb090", name: "Coco and Lulu Caramel Pecan Popcorn", price: 14.75, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h090.webp" },
  { id: "h-gb091", name: "Coco and Lulu Chocolate Almonds 150g", price: 15.99, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h091.webp" },
  { id: "h-gb092", name: "Coco and Lulu Dark Chocolate Pretzels 100g", price: 12.28, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h092.webp" },
  { id: "h-gb093", name: "Coco and Lulu Milk Chocolate Fruit and Nut Mix 90g", price: 7.35, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h093.webp" },
  { id: "h-gb094", name: "Duck Creek Choc Orange Macadamia 165g", price: 23.4, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h094.webp" },
  { id: "h-gb095", name: "Fudge by Rich Chocolate and Walnut 115g", price: 13.52, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h095.webp" },
  { id: "h-gb096", name: "Green Grove Organics Liquorice 180g", price: 12.28, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h096.webp" },
  { id: "h-gb097", name: "Gumnut Dark Vanilla Salted Caramel Twin Pack 35g", price: 13.52, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h097.webp" },
  { id: "h-gb098", name: "Highgrove Almond Crispbread 150g", price: 14.07, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h098.webp" },
  { id: "h-gb099", name: "Highgrove Butter Shortbread 135g", price: 11.05, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h099.webp" },
  { id: "h-gb100", name: "Highgrove Chocolate Fudge Biscuits 330g", price: 22.16, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h100.webp" },
  { id: "h-gb101", name: "Highgrove Raspberry & Almond Chocolate Block 90g", price: 8.58, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h101.webp" },
  { id: "h-gb102", name: "Koko Black Chocolatier's Selection 6 Piece Selection Gift Box 70g", price: 45.62, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h102.webp" },
  { id: "h-gb103", name: "Koko Black Espresso Martini Marbles 54g", price: 23.4, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h103.webp" },
  { id: "h-gb104", name: "Koko Black Neat Negroni Marbles 54g", price: 23.4, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h104.webp" },
  { id: "h-gb105", name: "Maya Sunny Honey 100% Raw Macadamia Crunch 300g", price: 24.63, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h105.webp" },
  { id: "h-gb106", name: "Milk Chocolate Strawberries Freeze Dried 60g", price: 9.81, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h106.webp" },
  { id: "h-gb107", name: "Walters Nougat 50g", price: 6.11, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h107.webp" },
  { id: "h-gb108", name: "Whisk & Pin Milk Chocolate Rocky Road 150g", price: 20.93, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h108.webp" },
  { id: "h-gb109", name: "Wynn's Caramelised Popcorn Brittle 135g", price: 8.58, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h109.webp" },
  { id: "h-gb110", name: "Wynn's Creme Brulee Roasted Peanuts 150g", price: 8.58, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h110.webp" },
  { id: "h-gb111", name: "Wynn's Salted Caramel Cashews Box 180g", price: 6.11, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h111.webp" },
  { id: "h-gb112", name: "Zokoko Goddess Dark Chocolate 57g", price: 15.99, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h112.webp" },
  { id: "h-gb113", name: "Hand Decorated Gingerbread Moustache 30g", price: 11.05, cat: "For Him", emoji: "🧔", img: "assets/hamper/h113.webp" },
  { id: "h-gb114", name: "Aussie BBQ Bible", price: 50.56, cat: "For Him", emoji: "🧔", img: "assets/hamper/h114.webp" },
  { id: "h-gb115", name: "Aromatherapy Co. Therapy Man Sea Salt and Sandalwood Hand and Body Wash 500ml", price: 35.74, cat: "For Him", emoji: "🧔", img: "assets/hamper/h115.webp" },
  { id: "h-gb116", name: "Aromatherapy Co. Therapy Man Sea Salt and Sandalwood Shave Cream 100ml", price: 28.33, cat: "For Him", emoji: "🧔", img: "assets/hamper/h116.jpg" },
  { id: "h-gb117", name: "Callaway Golf Cap", price: 67.84, cat: "For Him", emoji: "🧔", img: "assets/hamper/h117.webp" },
  { id: "h-gb118", name: "Callaway Golf Tee Pack", price: 11.05, cat: "For Him", emoji: "🧔", img: "assets/hamper/h118.webp" },
  { id: "h-gb119", name: "Callaway Warbird Golf Balls 3 Pack", price: 18.46, cat: "For Him", emoji: "🧔", img: "assets/hamper/h119.webp" },
  { id: "h-gb120", name: "Luxury Brown Robe", price: 61.67, cat: "For Him", emoji: "🧔", img: "assets/hamper/h120.webp" },
  { id: "h-gb121", name: "Sir Sock Golden Eye (Grey with Yellow Polka Dots)", price: 17.22, cat: "For Him", emoji: "🧔", img: "assets/hamper/h121.jpg" },
  { id: "h-gb122", name: "Wild and Wolf Gentlemans Hardware Beard Survival Kit", price: 40.68, cat: "For Him", emoji: "🧔", img: "assets/hamper/h122.webp" },
  { id: "h-gb123", name: "Wild and Wolf Gentlemans Hardware Shoe Shine Kit", price: 56.73, cat: "For Him", emoji: "🧔", img: "assets/hamper/h123.webp" },
  { id: "h-gb124", name: "Wild and Wolf Gentlemans Hardware Wash Bag", price: 40.68, cat: "For Him", emoji: "🧔", img: "assets/hamper/h124.webp" },
  { id: "h-gb125", name: "101 Whiskies to Try Before You Die", price: 59.2, cat: "For Him", emoji: "🧔", img: "assets/hamper/h125.webp" },
  { id: "h-gb126", name: "Bar Geek Copper Cocktail Set: Parisian Shaker 630ml, Strainer, Japanese Style Jigger 15/30ml", price: 113.52, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h126.webp" },
  { id: "h-gb127", name: "Riedel Ouverture Set of 2 Champagne Glasses", price: 95.0, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h127.webp" },
  { id: "h-gb128", name: "Riedel Ouverture Set of 2 Red Wine Glasses", price: 76.0, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h128.webp" },
  { id: "h-gb129", name: "S&P Winston Double Old Fashioned Tumbler 355ml", price: 12.28, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h129.webp" },
  { id: "h-gb130", name: "S&P Winston High Ball Glass 450ml", price: 13.52, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h130.webp" },
  { id: "h-gb131", name: "Vera Wang Wedgwood Love Knots Toasting Flute Pair", price: 208.58, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h131.webp" },
  { id: "h-gb132", name: "W&P Peak Sphere Ice Tray", price: 22.16, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h132.webp" },
  { id: "h-gb133", name: "Congratulations Cookie", price: 8.58, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h133.webp" },
  { id: "h-gb134", name: "Get Well Soon Cookie", price: 8.58, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h134.webp" },
  { id: "h-gb135", name: "Happy Birthday Cookie", price: 8.58, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h135.webp" },
  { id: "h-gb136", name: "Hello Baby Cookie", price: 8.58, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h136.webp" },
  { id: "h-gb137", name: "Just Because Cookie", price: 8.58, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h137.webp" },
  { id: "h-gb138", name: "Love You Cookie", price: 8.58, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h138.webp" },
  { id: "h-gb139", name: "Thank You Cookie", price: 8.58, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h139.webp" },
  { id: "h-gb140", name: "Thinking Of You Cookie", price: 8.58, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h140.webp" },
  { id: "h-gb141", name: "With Sympathy Cookie", price: 8.58, cat: "Sweet", emoji: "🍫", img: "assets/hamper/h141.webp" },
  { id: "h-gb142", name: "Artisan Cranberry and Pumpkin Seed Crispbread 100g", price: 12.28, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h142.webp" },
  { id: "h-gb143", name: "Artisan Lavosh 100g", price: 7.35, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h143.webp" },
  { id: "h-gb144", name: "Artisan Wafers 100g", price: 6.11, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h144.webp" },
  { id: "h-gb145", name: "Australia on a Plate Simon Johnson Wasabi Peanuts 100g", price: 12.28, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h145.webp" },
  { id: "h-gb146", name: "Fancy Hank's Australian Made Tomato Sauce 375ml", price: 27.1, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h146.webp" },
  { id: "h-gb147", name: "Gran Luchito Red Pepper Salsa 300g", price: 17.22, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h147.webp" },
  { id: "h-gb148", name: "Great Southern Black Truffle Salsa 110g", price: 43.15, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h148.webp" },
  { id: "h-gb149", name: "Great Southern Truffle Infused Extra Virgin Olive Oil 100ml", price: 32.04, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h149.webp" },
  { id: "h-gb150", name: "Mount Zero Olives 80g", price: 8.58, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h150.webp" },
  { id: "h-gb151", name: "Olssons Macrobiotic Fine Sea Salt Hessian Pouch 250g", price: 12.28, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h151.webp" },
  { id: "h-gb152", name: "Pukara Estate Premium Extra Virgin Olive Oil 250ml", price: 33.27, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h152.webp" },
  { id: "h-gb153", name: "Pukara Estate Caramelised Balsamic Vinegar 250ml", price: 43.15, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h153.webp" },
  { id: "h-gb154", name: "Roco's Mediterranean Nuts 120g", price: 9.81, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h154.webp" },
  { id: "h-gb155", name: "Roco's Salted Pistachios 90g", price: 11.05, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h155.webp" },
  { id: "h-gb156", name: "Tostitos Tortilla Corn Chips", price: 17.22, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h156.webp" },
  { id: "h-gb157", name: "A Little Book of Comfort (Sympathy)", price: 11.05, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h157.webp" },
  { id: "h-gb158", name: "Avanti Coffee Plunger 350ml", price: 57.96, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h158.webp" },
  { id: "h-gb159", name: "Barkly Basics Nectarine and Mint Hand Wash 500ml", price: 19.69, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h159.webp" },
  { id: "h-gb160", name: "Chef Grey Striped Apron", price: 46.85, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h160.webp" },
  { id: "h-gb161", name: "Chef Grey Striped Oven Glove", price: 23.4, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h161.webp" },
  { id: "h-gb162", name: "Cristina Re Signature Blush Teacup and Saucer", price: 61.67, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h162.webp" },
  { id: "h-gb163", name: "Compendium In Loving Memory Book", price: 33.27, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h163.webp" },
  { id: "h-gb164", name: "French Linen Tea Towel", price: 14.75, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h164.webp" },
  { id: "h-gb165", name: "Gold Cheese Knife Set", price: 19.69, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h165.webp" },
  { id: "h-gb166", name: "Robert Gordon Snow Hug Me Mug", price: 13.52, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h166.webp" },
  { id: "h-gb167", name: "Salt & Pepper Acacia Grinders", price: 30.31, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h167.webp" },
  { id: "h-gb168", name: "Sow 'n Sow Forget Me Not Seeds", price: 15.99, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h168.webp" },
  { id: "h-gb169", name: "Profile Silver Photo Frame 5x7", price: 43.15, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h169.webp" },
  { id: "h-gb170", name: "Potted Artificial Orchid", price: 36.98, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h170.webp" },
  { id: "h-gb171", name: "Waffle Tea Towel", price: 12.28, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h171.webp" },
  { id: "h-gb172", name: "Wedgwood Camellia Teacup & Saucer", price: 192.53, cat: "Home Touch", emoji: "🍽️", img: "assets/hamper/h172.webp" },
  { id: "h-gb173", name: "Apple Isle Pear and Pistachio Paste 100g", price: 8.58, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h173.webp" },
  { id: "h-gb174", name: "Apple Isle Quince Paste 100g", price: 8.58, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h174.webp" },
  { id: "h-gb175", name: "Small Acacia Cheeseboard", price: 34.51, cat: "Savoury", emoji: "🧀", img: "assets/hamper/h175.webp" },
  { id: "h-gb176", name: "Bondi Circus Cold Brew Coffee Concentrate 500ml", price: 24.63, cat: "Drinks", emoji: "☕", img: "assets/hamper/h176.webp" },
  { id: "h-gb177", name: "Bondi Circus Nitro Black 250ml", price: 9.81, cat: "Drinks", emoji: "☕", img: "assets/hamper/h177.webp" },
  { id: "h-gb178", name: "Capi Lemonade 250ml", price: 6.11, cat: "Drinks", emoji: "☕", img: "assets/hamper/h178.webp" },
  { id: "h-gb179", name: "Joe's Classic Orange Juice 350ml", price: 7.96, cat: "Drinks", emoji: "☕", img: "assets/hamper/h179.webp" },
  { id: "h-gb180", name: "Joe's Classic Pineapple Juice 350ml", price: 7.96, cat: "Drinks", emoji: "☕", img: "assets/hamper/h180.webp" },
  { id: "h-gb181", name: "Strangelove Coastal Tonic 180ml", price: 6.11, cat: "Drinks", emoji: "☕", img: "assets/hamper/h181.jpg" },
  { id: "h-gb182", name: "Strangelove Soda Water 180ml", price: 6.11, cat: "Drinks", emoji: "☕", img: "assets/hamper/h182.webp" },
];
const HAMPER_MIN = 60;

/* ---- Ready-made hampers, built from the items above ----
   Each one lists real item ids, so the price is the sum of its parts
   and checkout re-prices it server-side like any custom hamper. */
const CURATED_HAMPERS = [
  { id: "ch-settle", name: "Settlement Hamper", occasion: "New home", tagline: "For the day the keys change hands",
    items: ["h-gb175", "h-gb152", "h-gb142", "h-gb150", "h-gb129", "h-gb130", "h-gb016"] },
  { id: "ch-home", name: "Housewarming Hamper", occasion: "New home", tagline: "For the first night in a new place",
    items: ["h-gb001", "h-gb002", "h-gb129", "h-gb130", "h-gb065", "h-gb011"] },
  { id: "ch-thanks", name: "Client Thank You Hamper", occasion: "Corporate", tagline: "A thank you that isn't a branded pen",
    items: ["h-gb087", "h-gb071", "h-gb148", "h-gb144", "h-gb154", "h-gb015"] },
  { id: "ch-team", name: "Team & Staff Reward Hamper", occasion: "Corporate", tagline: "For the person who carried the quarter",
    items: ["h-gb086", "h-gb090", "h-gb070", "h-gb166", "h-gb164", "h-gb015"] },
  { id: "ch-wfh", name: "Working From Home Hamper", occasion: "Corporate", tagline: "Coffee, a decent mug and something to eat",
    items: ["h-gb158", "h-gb071", "h-gb166", "h-gb092", "h-gb155", "h-gb018"] },
  { id: "ch-retire", name: "Retirement Hamper", occasion: "Milestones", tagline: "For the start of the long weekend that doesn't end",
    items: ["h-gb068", "h-gb162", "h-gb087", "h-gb170", "h-gb168", "h-gb016"] },
  { id: "ch-baby", name: "New Baby Hamper", occasion: "Milestones", tagline: "For the first weeks at home",
    items: ["h-gb041", "h-gb043", "h-gb044", "h-gb047", "h-gb040", "h-gb010"] },
  { id: "ch-friday", name: "Friday Drinks Hamper", occasion: "Celebrate", tagline: "Mixers, glasses and something salty",
    items: ["h-gb126", "h-gb129", "h-gb132", "h-gb181", "h-gb182", "h-gb145"] },
  { id: "ch-pamper", name: "Pamper & Unwind Hamper", occasion: "Just because", tagline: "An afternoon off, in a box",
    items: ["h-gb077", "h-gb075", "h-gb081", "h-gb073", "h-gb070", "h-gb012"] },
  { id: "ch-sweet", name: "Sweet Tooth Hamper", occasion: "Just because", tagline: "Chocolate, fudge and biscuits",
    items: ["h-gb087", "h-gb086", "h-gb090", "h-gb091", "h-gb095", "h-gb019"] },
  { id: "ch-gourmet", name: "Gourmet Grazing Hamper", occasion: "Just because", tagline: "Everything but the cheese board",
    items: ["h-gb152", "h-gb148", "h-gb142", "h-gb150", "h-gb147", "h-gb015"] },
  { id: "ch-him", name: "For Him Hamper", occasion: "Just because", tagline: "Beard kit, socks and something to read",
    items: ["h-gb122", "h-gb121", "h-gb114", "h-gb115", "h-gb113", "h-gb016"] },
  { id: "ch-sympathy", name: "With Sympathy Hamper", occasion: "Thinking of you", tagline: "Quiet, considered, nothing celebratory",
    items: ["h-gb157", "h-gb168", "h-gb067", "h-gb166", "h-gb093", "h-gb014"] },
  { id: "ch-getwell", name: "Get Well Hamper", occasion: "Thinking of you", tagline: "Tea, soup-weather comfort and a good book",
    items: ["h-gb069", "h-gb065", "h-gb066", "h-gb088", "h-gb171", "h-gb013"] }
];


/* ---- Rotating announcement bar ---- */
const ANNOUNCE_STEADY = false;   // false = messages fade in and out one at a time
const ANNOUNCE_DESKTOP = "✦ Free shipping over $3,500, Australia-wide &nbsp;·&nbsp; 🌸 New décor added weekly";
const ANNOUNCE_MOBILE = "✦ Free shipping over $3,500 · New décor weekly";
const ANNOUNCEMENTS = [
  "✦ Free shipping over $3,500, Australia-wide",
  "🌸 New décor finds added weekly",
  "🚚 See your delivery dates at checkout",
  "💝 Join free & get a 10% off one item in your first order",
  "🎁 Build your own luxury hamper",
  "♡ Tap the heart to save pieces for later",
  "💬 Questions? Live chat with our team"
];

/* ---- Reviews ---- */
const REVIEWS = [
  { rating: 5, title: "My new signature scent", body: "The Amber & Oud is divine, long-lasting and beautifully packaged. Fast delivery too. I've already reordered for a gift.", who: "Eleanor M. · Sydney, NSW" },
  { rating: 5, title: "A gift hamper that wowed", body: "Ordered a hamper for a housewarming and it was styled so thoughtfully. The hand-written note was a gorgeous touch, will absolutely order again.", who: "Priya S. · Melbourne, VIC" },
  { rating: 4, title: "Gorgeous quality, quick delivery", body: "The bouclé cushions and arch mirror transformed our bedroom. Shipping was faster than expected and everything arrived without a scratch.", who: "James & Dani · Sydney, NSW" },
  { rating: 5, title: "Wellness picks I love", body: "The magnesium soak and pillow mist have become part of my nightly ritual. Beautifully considered products and lovely to gift.", who: "Harriet T. · Perth, WA" },
  { rating: 5, title: "Candles I keep reordering", body: "The Wattle soy candle is divine and the ceramic vessel is something I'll keep forever. Samira Home Decor is my go-to for considered little luxuries.", who: "Sofia R. · Brisbane, QLD" },
  { rating: 4, title: "Beautiful local store", body: "Such a lovely curated range of home and lifestyle pieces. Friendly service and thoughtful packaging every time.", who: "Marcus L. · Perth, WA" },
  { rating: 5, title: "The vase is a showstopper", body: "The Fleur glass vase is even more beautiful in person. It's the first thing everyone comments on when they walk in.", who: "Amelia K. · Adelaide, SA" },
  { rating: 5, title: "Made my home feel calm", body: "The diffuser is whisper-quiet and the light is so soothing at night. It's become part of my wind-down ritual.", who: "Chloe W. · Gold Coast, QLD" },
  { rating: 5, title: "Fast shipping, gorgeous packaging", body: "Ordered on a Monday and it arrived beautifully wrapped by Wednesday. You can tell they care about the details.", who: "Nadia R. · Canberra, ACT" },
  { rating: 5, title: "My go-to for gifts now", body: "I've bought three hampers for different friends and every single one has been a hit. So easy to build my own.", who: "Bianca T. · Newcastle, NSW" },
  { rating: 4, title: "Lovely cushions", body: "The velvet throw pillow covers are plush and the colours are true to the photos. Layered perfectly on our bed.", who: "Georgia M. · Hobart, TAS" },
  { rating: 5, title: "Exceptional customer care", body: "Had a question before ordering and got a warm, helpful reply within the hour. Rare to find service this personal.", who: "Daniel P. · Melbourne, VIC" },
  { rating: 5, title: "Towels are so soft", body: "The cotton face washers are thick, absorbent and wash beautifully. Bought a second set in another colour.", who: "Sarah J. · Darwin, NT" },
  { rating: 5, title: "Styling consult was worth every cent", body: "The in-home styling session completely transformed our living room. Practical, shoppable and so on-brand for us.", who: "Olivia & Tom · Brisbane, QLD" },
  { rating: 5, title: "Beautiful pieces that last", body: "Everything I've bought feels considered and well made. Samira Home Decor has become my first stop for the home.", who: "Isla F. · Sydney, NSW" },
  { rating: 4, title: "Vaporiser I adore", body: "Cool to touch, no water needed and the ceramic finish is gorgeous. Fills the whole room with a subtle scent.", who: "Ruby N. · Perth, WA" },
  { rating: 5, title: "Gift card delivered instantly", body: "Sent a last-minute gift card and it landed in my sister's inbox looking so elegant. She loved choosing her own pieces.", who: "Hannah C. · Wollongong, NSW" }
];

/* ---- Real product reviews ----
   Only genuine reviews from real customers go here, keyed by product
   id. Product pages show these and nothing else: no invented reviews
   and no made-up star counts. A product with no entry shows
   "No reviews yet".
     lx72: [ { rating: 5, title: "Love it", body: "...", who: "Jane D.", date: "2026-11-20" } ],
*/
const PRODUCT_REVIEWS = {
  lf32: [ { rating: 5, title: "Chunky Plush Blanket (Fruit Green/Pink)", body: "I am absolutely in love with this blanket! The chunky bubble-knit design gives it such a luxurious and unique look, and it instantly elevated the style of my living room. It is incredibly soft, fluffy, and cosy without feeling heavy. The quality exceeded my expectations, and the colour is exactly as pictured. Perfect for curling up on the couch during chilly evenings. I've already received so many compliments from guests!", who: "Verified buyer" } ],
  bt02: [ { rating: 5, title: "Stylish, durable, and beautifully designed", body: "I recently purchased the Dark Marble Bathroom Set (4-Piece) from Samira Home Decor, and I couldn't be happier with my choice. The dark marble finish looks incredibly elegant and instantly transformed my bathroom into a more modern and luxurious space. The set feels sturdy, well-made, and much more premium than I expected. Each piece complements the others perfectly, creating a cohesive and sophisticated look on the vanity. I especially love how easy it is to keep clean while still maintaining its polished appearance. The quality, design, and attention to detail make this set excellent value for money. It adds a stylish touch without being overly flashy, making it suitable for both contemporary and classic bathroom décor. Highly recommend this bathroom set to anyone looking to elevate their bathroom with a practical yet luxurious accessory collection. I'll definitely be purchasing from Samira Home Decor again!", who: "Verified customer", date: "2026-11-08" } ],
  lx71: [ { rating: 5, title: "Modern Round Coffee Table Set (Black Brown)", body: "This coffee table set is stunning and looks far more expensive than it is. The combination of the matte black finish and smoked glass side table creates a sleek, modern aesthetic that fits beautifully into my space. The tables feel sturdy and well-made, and the nesting design is both practical and stylish. It was easy to set up and instantly became the focal point of my lounge room. Highly recommend for anyone looking to create a premium, contemporary look at home.", who: "Verified buyer" } ],
};
function realReviews(id) {
  try { return (typeof PRODUCT_REVIEWS !== "undefined" && PRODUCT_REVIEWS[id]) || []; } catch (e) { return []; }
}


/* ============================================================
   HALLOWEEN SALE — 15% off every priced shop product (Adelaide
   time), 31 Oct to 2 Nov inclusive, repeating every year. Packaging
   (price on enquiry) and gift cards are excluded. Runs BEFORE the
   sofa sale so Halloween takes priority and discounts never stack
   (the sofa sale skips anything already marked down). The Netlify
   checkout applies the same rule server-side. Browser-only, like
   the other sales. To change: edit HALLOWEEN below.
   ============================================================ */
var HALLOWEEN = { pct: 15, startMonth: 9, startDay: 31, endMonth: 10, endDay: 2 };   // months 0-based: 9=Oct, 10=Nov
function halloweenOn() {
  var now;
  try { now = new Date(new Date().toLocaleString("en-US", { timeZone: "Australia/Adelaide" })); }
  catch (e) { now = new Date(); }
  var y = now.getFullYear();
  var start = new Date(y, HALLOWEEN.startMonth, HALLOWEEN.startDay, 0, 0, 0);
  var end = new Date(y, HALLOWEEN.endMonth, HALLOWEEN.endDay, 23, 59, 59);
  return now >= start && now <= end;
}
function isHalloweenItem(p) { return !!p && typeof p.price === "number" && p.cat !== "Packaging"; }
// "Monday 2 Nov" — computed from HALLOWEEN for the current year, so the weekday is always right.
function halloweenEndLabel() {
  var y;
  try { y = +new Date().toLocaleDateString("en-AU", { timeZone: "Australia/Adelaide", year: "numeric" }); } catch (e) { y = new Date().getFullYear(); }
  var d = new Date(y, HALLOWEEN.endMonth, HALLOWEEN.endDay);
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d.getDay()] + " " + d.getDate() + " " +
    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()];
}

(function applyHalloween() {
  if (typeof document === "undefined") return;            // browser only
  if (!halloweenOn()) return;
  try {
    if (typeof ANNOUNCEMENTS !== "undefined" && Array.isArray(ANNOUNCEMENTS)) {
      ANNOUNCEMENTS.unshift("🎃 HALLOWEEN SALE — 15% off storewide, now until " + halloweenEndLabel() + " ✦");
    }
  } catch (e) {}
  var f = 1 - HALLOWEEN.pct / 100;
  (typeof PRODUCTS !== "undefined" ? PRODUCTS : []).forEach(function (p) {
    if (!isHalloweenItem(p) || p.was) return;
    p.was = p.price;
    p.price = Math.round(p.price * f);
    if (p.memberPrice) p.memberPrice = Math.round(p.memberPrice * f);
    if (Array.isArray(p.sizes)) p.sizes.forEach(function (s) {
      if (s && typeof s.price === "number") s.price = Math.round(s.price * f);
    });
    p.tag = "Halloween Sale";
  });
})();

/* ============================================================
   RECURRING SALE — 10% off all sofas every Tue, Thu & Saturday
   (Australian time). Runs in the browser only: it discounts the
   sofa prices in memory and adds an announcement-bar notice.
   The Netlify checkout function applies the SAME rule server-side
   so the charged price always matches. Build scripts (Node) skip
   it (no `window`), so the trusted catalogue + Google feed keep
   regular prices. To change: edit SALE below.
   ============================================================ */
var SALE = { pct: 10, days: [2, 4, 6], label: "Sofa Sale" };   // days: 0=Sun … 6=Sat
function saleDayIndex() {
  try {
    return { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[
      new Date().toLocaleDateString("en-US", { timeZone: "Australia/Adelaide", weekday: "short" })];
  } catch (e) { return new Date().getDay(); }
}
function saleOnToday() { return SALE.days.indexOf(saleDayIndex()) !== -1; }
function isSaleItem(p) { return !!p && /^sf\d+$/.test(p.id || ""); }

(function applyRecurringSale() {
  if (typeof document === "undefined") return;          // browser only — build scripts (no document) skip
  try {
    // During Halloween sofas are already 15% off, so the 10% sofa message would mislead.
    if (SALE.days.length && (typeof PRODUCTS !== "undefined" && PRODUCTS.some(isSaleItem)) && typeof ANNOUNCEMENTS !== "undefined" && Array.isArray(ANNOUNCEMENTS) && !halloweenOn()) {
      ANNOUNCEMENTS.unshift(saleOnToday()
        ? "🛋️ SOFA SALE ON NOW — 10% off every sofa today, ends midnight ✦"
        : "🛋️ SOFA SALE every Tuesday, Thursday &amp; Saturday — 10% off all sofas");
    }
  } catch (e) {}
  if (!saleOnToday()) return;
  var f = 1 - SALE.pct / 100;
  (typeof PRODUCTS !== "undefined" ? PRODUCTS : []).forEach(function (p) {
    if (!isSaleItem(p) || p.was) return;
    p.was = p.price;
    p.price = Math.round(p.price * f);
    if (p.memberPrice) p.memberPrice = Math.round(p.memberPrice * f);
    if (Array.isArray(p.sizes)) p.sizes.forEach(function (s) {
      if (s && typeof s.price === "number") s.price = Math.round(s.price * f);
    });
    p.tag = "Sale";
  });
})();

/* ============================================================
   BLACK FRIDAY → CYBER MONDAY — 15% off Ready to ship furniture
   (Adelaide time). Auto-runs every year: from the 4th Friday of
   November (Black Friday) through the following Monday (Cyber
   Monday), inclusive. Browser-only: it discounts the sale prices in
   memory and adds an announcement-bar notice. The Netlify checkout
   function applies the SAME rule server-side so the charged price
   always matches. Build scripts (Node, no document) keep regular
   prices. To change the rate: edit BLACK_FRIDAY.pct.
   ============================================================ */
var BLACK_FRIDAY = { pct: 15 };
function blackFridayRange(year) {
  // 4th Friday of November = Black Friday; +3 days = Cyber Monday.
  var fridays = 0, day = 1;
  for (; day <= 30; day++) { if (new Date(year, 10, day).getDay() === 5 && ++fridays === 4) break; }
  return { start: new Date(year, 10, day, 0, 0, 0), end: new Date(year, 10, day + 3, 23, 59, 59) };
}
function blackFridayOn() {
  var now;
  try { now = new Date(new Date().toLocaleString("en-US", { timeZone: "Australia/Adelaide" })); }
  catch (e) { now = new Date(); }
  var r = blackFridayRange(now.getFullYear());
  return now >= r.start && now <= r.end;
}
/* Delivered furniture range (lxNN): within Australia only.
   Every piece arrives by the same date and carries a delivery fee per item
   ($69 each, so more pieces cost more to deliver). Change these two values
   to update the whole range. After the arrive-by date passes, pieces fall
   back to the standard furniture estimate (about 4 weeks). */
var DELIVERED_RANGE = { arriveBy: "2027-02-11", perItem: 69 };
(function applyDeliveredRange() {
  var until = new Date(DELIVERED_RANGE.arriveBy + "T23:59:59+10:30").getTime();
  (typeof PRODUCTS !== "undefined" ? PRODUCTS : []).forEach(function (p) {
    if (!p || !/^lx\d+$/.test(p.id || "")) return;
    p.shipFee = DELIVERED_RANGE.perItem;      // fixed delivery fee per item
    p.auOnly = true;               // supplier delivers within Australia only
    p.fastShip = false;            // not "ready to ship"
    delete p.arriveDays;
    if (Date.now() < until) p.arriveBy = DELIVERED_RANGE.arriveBy;
  });
})();

/* Furniture ships within Australia only: overseas freight, duties and
   returns on large pieces cost more than the sale. Small décor and gifts
   still ship to every country we serve. (Same furniture test as
   isFurniture() in js/cart.js — keep the word lists in step.) */
function isFurnitureProduct(p) {
  if (!p) return false;
  if (p.lead) return true;
  var FURN = /\b(sofas?|couch|lounge suite|modular|daybed|armchairs?|chairs?|stools?|barstools?|bench|ottoman|tables?|desks?|bed frame|bed base|bedhead|headboard|beds?|dressers?|wardrobes?|robes? island|cabinets?|sideboards?|buffets?|console|bookcases?|bookshel(f|ves)|shelving unit|tallboy|chest of drawers|tv unit|entertainment unit|dining set|outdoor set|lounge set|hall ?stand)\b/i;
  var NOT = /\b(cushion|pillow|cover|throw|blanket|lamp|pendant|chandelier|sconce|blender|kettle|toaster|mixer|runner|sheet|quilt|duvet|mat|rug|vase|candle|diffuser|tray|placemat|napkin|cloth)\b/i;
  // The last matching word is the item itself: "Cushion Chair" is a chair,
  // "Chair Cushion" and "Table Lamp" are not furniture.
  var n = (p.name || "").replace(/\b(bedside|side|coffee|dining|console) tables?\b/ig, "table");
  var words = n.split(/[^A-Za-z]+/), last = null;
  for (var i = 0; i < words.length; i++) {
    var w = words[i]; if (!w) continue;
    if (NOT.test(w)) last = "not";
    else if (FURN.test(w) || FURN.test(words.slice(i, i + 2).join(" ")) || FURN.test(words.slice(i, i + 3).join(" "))) last = "furn";
  }
  return last === "furn";
}
(typeof PRODUCTS !== "undefined" ? PRODUCTS : []).forEach(function (p) {
  if (p && p.cat !== "Packaging" && isFurnitureProduct(p)) p.auOnly = true;
});

function isBlackFridayItem(p) { return !!p && /^lx\d+$/.test(p.id || ""); }

(function applyBlackFriday() {
  if (typeof document === "undefined") return;            // browser only
  var on = blackFridayOn();
  try {
    if (on && typeof ANNOUNCEMENTS !== "undefined" && Array.isArray(ANNOUNCEMENTS)) {
      ANNOUNCEMENTS.unshift("🛍️ BLACK FRIDAY — 15% off selected furniture, now through Cyber Monday ✦");
    }
  } catch (e) {}
  if (!on) return;
  var f = 1 - BLACK_FRIDAY.pct / 100;
  (typeof PRODUCTS !== "undefined" ? PRODUCTS : []).forEach(function (p) {
    if (!isBlackFridayItem(p) || p.was) return;
    p.was = p.price;
    p.price = Math.round(p.price * f);
    if (p.memberPrice) p.memberPrice = Math.round(p.memberPrice * f);
    if (Array.isArray(p.sizes)) p.sizes.forEach(function (s) {
      if (s && typeof s.price === "number") s.price = Math.round(s.price * f);
    });
    p.tag = "Black Friday";
  });
})();
