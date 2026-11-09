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

  /* ===== Bedding: sheets, quilt covers, pillowcases, quilts, pillows, comforters, coverlets, toppers, blankets ===== */
  {"id":"bl001","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400 Thread Count Bamboo Cotton Sheet Set","cat":"Bedroom","room":"Bedroom","price":423,"memberPrice":381,"sku":"SH-11388","tag":"New","ph":"","img":"assets/products/bl001.webp","imgs":["assets/products/bl001.webp","assets/products/bl001-2.webp","assets/products/bl001-3.webp","assets/products/bl001-4.webp","assets/products/bl001-5.webp","assets/products/bl001-6.webp","assets/products/bl001-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":423,"memberPrice":381},{"label":"King Single","price":534,"memberPrice":481},{"label":"Double","price":534,"memberPrice":481},{"label":"Double Deep","price":534,"memberPrice":481},{"label":"Queen","price":534,"memberPrice":481},{"label":"Queen Deep","price":534,"memberPrice":481},{"label":"King","price":534,"memberPrice":481},{"label":"King Deep","price":534,"memberPrice":481},{"label":"Super King","price":534,"memberPrice":481}],"colours":[{"name":"Charcoal Stripe","hex":"#c0c3ca"},{"name":"Sand Stripe","hex":"#ac9d88"},{"name":"Butter Yellow","hex":"#f1c56c"},{"name":"Chocolate","hex":"#78563d"},{"name":"Dusty Violet","hex":"#ccb5df"},{"name":"Paprika","hex":"#a03d20"},{"name":"Creme","hex":"#fbf4ee"},{"name":"Fennel Green","hex":"#34485d"},{"name":"Soft Fern","hex":"#7d9d38"},{"name":"Light Taupe","hex":"#a88565"},{"name":"White","hex":"#eeeeee"},{"name":"Light Blue","hex":"#d2e1e4"},{"name":"Vintage Rose","hex":"#cf888e"},{"name":"Eucalyptus","hex":"#97aba2"},{"name":"Charcoal","hex":"#5c5253"},{"name":"Navy","hex":"#35364a"},{"name":"Sand","hex":"#bcb3aa"}],"desc":"Luxuriously soft to touch, lightweight and finished with an elegant sheen, our bamboo cotton sheets are the epitome of comfort & style. Perfect year round, this unique bamboo cotton blend will keep you cool in summer and warm in winter thanks to their breathable and temperature regulating properties.","features":["Made from a blend of 400 thread count bamboo and cotton."],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from a blend of 400 thread count bamboo and cotton."},"dimensions":"King Single size: Flat 210 x 275cm & Fitted 107 x 203cm + 40cm wall & 1 Pillowcase 48 x 73cm | Double size: Flat 240 x 260cm & Fitted 137 x 193cm + 40cm wall & 2 Pillowcases 48 x 73cm each | Double size Deep Fit: Flat 255 x 260cm & Fitted 137 x 193cm + 50cm wall & 2 Pillowcases 48 x 73cm each | Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | Queen size Deep Fit: Flat 270 x 275cm & Fitted 152 x 203cm + 50cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | King size Deep Fit: Flat 300 x 275cm & Fitted 182 x 203cm + 50cm wall & 2 Pillowcases 48 x 73cm each | Super King size: Flat 300 x 330cm & Fitted 204 x 204cm + 50cm wall & 2 Pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Low iron if desired. Do not dry clean."},
  {"id":"bl002","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Polly Check Sheet Set","cat":"Bedroom","room":"Bedroom","price":467,"memberPrice":420,"sku":"SH-11389","tag":"New","ph":"","img":"assets/products/bl002.webp","imgs":["assets/products/bl002.webp","assets/products/bl002-2.webp","assets/products/bl002-3.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":489,"memberPrice":440}],"colours":[{"name":"Pink","hex":"#f478ae"}],"desc":"Give your bed a fresh update with the Polly Check Sheet Set. Made from yarn-dyed cotton and linen, this pink check sheet set brings cheerful colour and easy character to the bedroom.","features":["Made from yarn-dyed 90% cotton /10% linen blend","Available in Queen and King sizes"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from yarn-dyed 90% cotton /10% linen blend"},"dimensions":"Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl003","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Polka Dot Sheet Set","cat":"Bedroom","room":"Bedroom","price":356,"memberPrice":320,"sku":"SH-11390","tag":"New","ph":"","img":"assets/products/bl003.webp","imgs":["assets/products/bl003.webp","assets/products/bl003-2.webp","assets/products/bl003-3.webp","assets/products/bl003-4.webp","assets/products/bl003-5.webp","assets/products/bl003-6.webp","assets/products/bl003-7.webp","assets/products/bl003-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":356,"memberPrice":320},{"label":"Double","price":412,"memberPrice":371},{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":412,"memberPrice":371}],"colours":[{"name":"White/Black","hex":"#ffffff"},{"name":"Choc/White","hex":"#5b3b2e"},{"name":"Pink/Black","hex":"#f478ae"}],"desc":"Give your bedroom a playful pattern update with the Polka Dot Sheet Set. Made from breathable 300 thread count cotton, this comfortable sheet set combines a timeless polka dot design with contrasting tones.","features":["Made from 300TC cotton","Available in Single, Double, Queen and King bed sizes"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from 300TC cotton"},"dimensions":"Single size: flat 195 x 260cm & fitted 91 x 193cm + 40cm wall & 1 pillowcase 48 x 73cm | Double size: Flat 240 x 260cm & Fitted 137 x 193cm + 40cm wall & 2 Pillowcases 48 x 73cm each | Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl004","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Frankie Leopard Print Sheet Set","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11391","tag":"New","ph":"","img":"assets/products/bl004.webp","imgs":["assets/products/bl004.webp","assets/products/bl004-2.webp","assets/products/bl004-3.webp","assets/products/bl004-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":345,"memberPrice":310},{"label":"Double","price":400,"memberPrice":360},{"label":"Queen","price":400,"memberPrice":360},{"label":"King","price":400,"memberPrice":360}],"colours":[{"name":"Brown","hex":"#78563d"}],"desc":"Bring a refined wild touch to your bedroom with the Frankie Leopard Sheet Set.","features":["Made from 100% cotton","Available in Single, King Single, Double, Queen and King bed sheet sizes"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from 100% cotton","Made in":"China"},"dimensions":"Single size: flat 195 x 260cm & fitted 91 x 193cm + 40cm wall & 1 pillowcase 48 x 73cm | King Single size: Flat 210 x 275cm & Fitted 107 x 203cm + 40cm wall & 1 Pillowcase 48 x 73cm | Double size: Flat 240 x 260cm & Fitted 137 x 193cm + 40cm wall & 2 Pillowcases 48 x 73cm each | Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl005","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Gingham Linen Cotton Sheet Set","cat":"Bedroom","room":"Bedroom","price":467,"memberPrice":420,"sku":"SH-11392","tag":"New","ph":"","img":"assets/products/bl005.webp","imgs":["assets/products/bl005.webp","assets/products/bl005-2.webp","assets/products/bl005-3.webp","assets/products/bl005-4.webp","assets/products/bl005-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":489,"memberPrice":440}],"colours":[{"name":"Natural Gingham","hex":"#f0f5f8"},{"name":"Sage Gingham","hex":"#97aba2"}],"desc":"For sheets that exude effortless style and are crafted from luxurious natural fibres, look no further than our Gingham Linen Cotton Sheet Set. Combining sumptuously soft, durable linen with breathable cotton and woven into a soft gingham check, this gorgeous sheet design makes for endless styling possibilities.","features":["- Natural Stripe, Charcoal Stripe, Green Stripe and Chocolate Stripe - 50% yarn-dyed Cotton and 50% Linen ; - Brown Stripe and Pink Stripe - 90% yarn-dyed Cotton and 10% Linen","Available in Queen and King sheet set sizes"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"- Natural Stripe, Charcoal Stripe, Green Stripe and Chocolate Stripe - 50% yarn-dyed Cotton and 50% Linen ; - Brown Stri","Made in":"China"},"dimensions":"Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each","care":"Wash dark colours separately. Cold machine wash before first use on gentle cycle. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Warm iron if desired. Do not dry clean. A gentle reminder: As linen fabric softens the excess fibres may start to shed for a period of time. This is normal for linen fabric but you can speed up the process by doing a few extra cold washes and tumble dries. Darker colours will tend to shed more as they have been dyed more times."},
  {"id":"bl006","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400 Thread Count Bamboo Cotton Stripe Sheet Set","cat":"Bedroom","room":"Bedroom","price":423,"memberPrice":381,"sku":"SH-11393","tag":"New","ph":"","img":"assets/products/bl006.webp","imgs":["assets/products/bl006.webp","assets/products/bl006-2.webp","assets/products/bl006-3.webp","assets/products/bl006-4.webp","assets/products/bl006-5.webp","assets/products/bl006-6.webp","assets/products/bl006-7.webp","assets/products/bl006-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":423,"memberPrice":381},{"label":"King Single","price":534,"memberPrice":481},{"label":"Double","price":534,"memberPrice":481},{"label":"Queen","price":534,"memberPrice":481},{"label":"King","price":534,"memberPrice":481},{"label":"Super King","price":534,"memberPrice":481}],"colours":[{"name":"Navy Blue","hex":"#23233f"},{"name":"Green/Pink","hex":"#29714b"},{"name":"Berry Pink","hex":"#f0f5f8"}],"desc":"Luxuriously soft to touch, lightweight and finished with an elegant sheen, the 400 Thread Count Bamboo Cotton Stripe Sheet Set is the epitome of comfort and style. Crafted from a premium bamboo cotton blend, these sheets offer a silky-smooth feel and breathable comfort for a restful night's sleep. The timeless stripe design adds subtle pattern and sophistication, making it easy to elevate any bedroom aesthetic. Perfect for year-round use, the naturally temperature-regulating properties help keep you cool in summer and warm in winter.","features":["Made from a blend of 400 thread count bamboo and cotton sateen (60% Bamboo 40% cotton)","Available in Single, King Single, Double, King and Super King sizes"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from a blend of 400 thread count bamboo and cotton sateen (60% Bamboo 40% cotton)"},"dimensions":"Single size: flat 195 x 260cm & fitted 91 x 193cm + 40cm wall & 1 pillowcase 48 x 73cm | King Single size: Flat 210 x 275cm & Fitted 107 x 203cm + 40cm wall & 1 Pillowcase 48 x 73cm | Double size: Flat 240 x 260cm & Fitted 137 x 193cm + 40cm wall & 2 Pillowcases 48 x 73cm each | Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | Super King size: Flat 300 x 330cm & Fitted 204 x 204cm + 40cm wall & 2 Pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Low iron if desired. Do not dry clean."},
  {"id":"bl007","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400TC Bamboo Cotton Flat Sheet","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11394","tag":"New","ph":"","img":"assets/products/bl007.webp","imgs":["assets/products/bl007.webp","assets/products/bl007-2.webp","assets/products/bl007-3.webp","assets/products/bl007-4.webp","assets/products/bl007-5.webp","assets/products/bl007-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/Double","price":334,"memberPrice":301},{"label":"Queen/King","price":345,"memberPrice":310}],"colours":[{"name":"Charcoal","hex":"#5c5253"},{"name":"Chocolate","hex":"#5b3b2e"},{"name":"Light Blue","hex":"#d2e1e4"},{"name":"Navy","hex":"#23233f"},{"name":"White","hex":"#ffffff"},{"name":"Vintage Rose","hex":"#cf888e"}],"desc":"Luxuriously soft to touch, lightweight and finished with an elegant sheen, our bamboo cotton sheets are the epitome of comfort & style. Perfect year round, this unique bamboo cotton blend will keep you cool in summer and warm in winter thanks to their breathable and temperature regulating properties. Complete the look with matching fitted sheet and pillowcases.","features":["Made from a 400 thread count 60% Bamboo, 40% Cotton blend","Available in a range of sizes","Natural fibre, moisture wicking, lightweight, breathable, great for sensitive skin and durable."],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from a 400 thread count 60% Bamboo, 40% Cotton blend"},"dimensions":"Single to Double size: 1 x flat sheet 240cm x 275cm","care":"400TC Bamboo Cotton. Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Low iron if desired. Do not dry clean."},
  {"id":"bl008","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400TC Bamboo Cotton Fitted Sheet","cat":"Bedroom","room":"Bedroom","price":312,"memberPrice":281,"sku":"SH-11395","tag":"New","ph":"","img":"assets/products/bl008.webp","imgs":["assets/products/bl008.webp","assets/products/bl008-2.webp","assets/products/bl008-3.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":312,"memberPrice":281},{"label":"King Single","price":389,"memberPrice":350},{"label":"Double","price":389,"memberPrice":350},{"label":"Long single","price":389,"memberPrice":350},{"label":"Queen","price":389,"memberPrice":350},{"label":"Queen Deep","price":389,"memberPrice":350},{"label":"King","price":389,"memberPrice":350},{"label":"King Deep","price":389,"memberPrice":350}],"colours":[{"name":"Charcoal","hex":"#5c5253"},{"name":"Chocolate","hex":"#5b3b2e"},{"name":"White","hex":"#ffffff"},{"name":"Light Blue","hex":"#d2e1e4"},{"name":"Navy","hex":"#23233f"},{"name":"Vintage Rose","hex":"#cf888e"}],"desc":"Luxuriously soft to touch, lightweight and finished with an elegant sheen, our bamboo cotton sheets are the epitome of comfort & style. Perfect year round, this unique bamboo cotton blend will keep you cool in summer and warm in winter thanks to their breathable and temperature regulating properties. Complete the look with matching flat sheet and pillowcases.","features":["Made from a blend of 400 thread count bamboo and cotton.","Available in a range of sizes","Long Single fitted sheet size: 1 x fitted sheet 91cm x 203cm + 40cm"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from a blend of 400 thread count bamboo and cotton.","Made in":"China"},"dimensions":"Single fitted sheet size: 1 x fitted sheet 91cm x 193cm + 40cm | King Single fitted sheet size: 1 x fitted sheet 107cm x 203cm + 40cm | Double fitted sheet size: 1 x fitted sheet 137cm x 193cm + 40cm | Queen fitted sheet size: 1 x fitted sheet 152cm x 203cm + 40cm | King fitted sheet size: 1 x fitted sheet 182cm x 203cm + 40cm | Queen Deep fitted sheet size: 1 x fitted sheet 152cm x 203cm + 50cm deep | King Deep fitted sheet size: 1 x fitted sheet 182cm x 203cm + 50cm deep","care":"400TC Bamboo Cotton. Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Low iron if desired. Do not dry clean."},
  {"id":"bl009","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Printed Stripe Sheet Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11396","tag":"New","ph":"","img":"assets/products/bl009.webp","imgs":["assets/products/bl009.webp","assets/products/bl009-2.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"Double","price":434,"memberPrice":391},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391}],"colours":[{"name":"Pink","hex":"#f478ae"},{"name":"Pale Blue","hex":"#b1bcd0"},{"name":"Ecru","hex":"#ffffff"}],"desc":"Refresh your bedroom with these Printed Stripe Sheet Set. Crafted from breathable cotton, this sheet set features a classic pinstripe design that adds subtle pattern and timeless style to your bedding. Soft, comfortable and easy to coordinate, it's the perfect foundation for creating a fresh, effortlessly styled bedroom.","features":["Made from 300 thread count cotton","Available in Single, Double, Queen and King bed sheet sizes"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from 300 thread count cotton"},"dimensions":"Single size: flat 195 x 260cm & fitted 91 x 193cm + 40cm wall & 1 pillowcase 48 x 73cm | Double size: Flat 240 x 260cm & Fitted 137 x 193cm + 40cm wall & 2 Pillowcases 48 x 73cm each | Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl010","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"500TC Cotton Sateen Sheet Set","cat":"Bedroom","room":"Bedroom","price":400,"memberPrice":360,"sku":"SH-11397","tag":"New","ph":"","img":"assets/products/bl010.webp","imgs":["assets/products/bl010.webp","assets/products/bl010-2.webp","assets/products/bl010-3.webp","assets/products/bl010-4.webp","assets/products/bl010-5.webp","assets/products/bl010-6.webp","assets/products/bl010-7.webp","assets/products/bl010-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":400,"memberPrice":360},{"label":"King","price":423,"memberPrice":381}],"colours":[{"name":"Blue","hex":"#b1bcd0"},{"name":"Green","hex":"#7d9d38"},{"name":"Pink","hex":"#f0d0d1"},{"name":"Silver","hex":"#d8d7dc"},{"name":"White","hex":"#ffffff"}],"desc":"Indulge in luxury every night with our Hilton 500TC Cotton Sateen Sheet Set. With a sateen weave creating a lustrous sheen and exceptional softness, these cotton sheets are breathable and durable. The perfect all season sheet set, slip between the soft cotton and enjoy the ultimate in comfort as you sleep.","features":["Made from 500TC Cotton with a Sateen finish","Available in Queen and King bed sheet sizes","This sheet set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from 500TC Cotton with a Sateen finish"},"dimensions":"Queen size: 1x flat sheet 255 x 275cm, 1 fitted sheet 152cm W x 203cm L +40cm D and 2 pillowcases 48 x 73cm. | King size: 1x flat sheet 285 x 275cm, 1 fitted sheet 182cm W x 203cm L +40cm D and 2 pillowcases 48 x 73cm.","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl011","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"300TC Cotton Sheet Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11398","tag":"New","ph":"","img":"assets/products/bl011.webp","imgs":["assets/products/bl011.webp","assets/products/bl011-2.webp","assets/products/bl011-3.webp","assets/products/bl011-4.webp","assets/products/bl011-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"King Single","price":412,"memberPrice":371},{"label":"Double","price":412,"memberPrice":371},{"label":"Long single","price":412,"memberPrice":371},{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":412,"memberPrice":371},{"label":"Super King","price":412,"memberPrice":371}],"colours":[{"name":"Berry","hex":"#84122c"},{"name":"Ice Pink","hex":"#f0d0d1"},{"name":"White","hex":"#ffffff"},{"name":"Natural","hex":"#ac9d88"},{"name":"Oak Green","hex":"#29714b"},{"name":"Navy","hex":"#23233f"},{"name":"Blue","hex":"#4b75a5"},{"name":"Black","hex":"#000000"},{"name":"Chocolate Brown","hex":"#5b3b2e"},{"name":"Latte","hex":"#b4a391"},{"name":"Charcoal","hex":"#5c5253"}],"desc":"Enjoy everyday comfort with this 300TC Cotton Sheet Set, crafted from breathable cotton in a crisp percale weave for a fresh feel and smooth matte finish. Naturally lightweight and easy to care for, it helps create a cool, comfortable sleep space through every season. Complete with a slightly deeper fitted sheet for a more secure fit on your mattress, this sheet set is a practical and polished choice for relaxed, everyday sleeping.","features":["Made from 300 thread count cotton percale","Available in Single, King Single, Double, Queen and King bed sizes"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from 300 thread count cotton percale"},"dimensions":"Single size: 1 x flat sheet 195 x 260cm & 1 x fitted sheet 91 x 193cm + more generous 45cm wall & 1 pillowcase 48 x 73cm | King Single size: 1 flat sheet 210 x 275cm & 1 x fitted sheet 107 x 203cm +more generous 45cm wall & 1 pillowcase 48 x 73cm | Double size: Flat 240 x 260cm & Fitted 137 x 193cm + more generous 45cm wall & 2 Pillowcases 48 x 73cm each | Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + more generous 45cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + more generous 50cm wall & 2 Pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl012","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Striped Linen Cotton Sheet Set","cat":"Bedroom","room":"Bedroom","price":467,"memberPrice":420,"sku":"SH-11399","tag":"New","ph":"","img":"assets/products/bl012.webp","imgs":["assets/products/bl012.webp","assets/products/bl012-2.webp","assets/products/bl012-3.webp","assets/products/bl012-4.webp","assets/products/bl012-5.webp","assets/products/bl012-6.webp","assets/products/bl012-7.webp","assets/products/bl012-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":489,"memberPrice":440}],"colours":[{"name":"Charcoal","hex":"#5c5253"},{"name":"Natural","hex":"#ac9d88"},{"name":"Chocolate Stripe","hex":"#5b3b2e"},{"name":"Hot Choc Stripe","hex":"#5b3b2e"},{"name":"Brown","hex":"#78563d"},{"name":"Navy Stripe","hex":"#23233f"}],"desc":"For sheets that exude effortless style and are crafted from luxurious natural fibres, look no further than our Striped Linen Cotton Sheet Set. Combining sumptuously soft, durable linen with breathable cotton and woven into a soft pin stripe, this gorgeous sheet design makes for endless styling possibilities.","features":["- Natural Stripe, Charcoal Stripe, Green Stripe and Chocolate Stripe - 50% yarn-dyed Cotton and 50% Linen ; - Brown Stripe and Pink Stripe - 90% yarn-dyed Cotton and 10% Linen","Available in Queen and King sheet set sizes"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"- Natural Stripe, Charcoal Stripe, Green Stripe and Chocolate Stripe - 50% yarn-dyed Cotton and 50% Linen ; - Brown Stri","Made in":"China"},"dimensions":"Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each","care":"Wash dark colours separately. Cold machine wash before first use on gentle cycle. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Warm iron if desired. Do not dry clean. A gentle reminder: As linen fabric softens the excess fibres may start to shed for a period of time. This is normal for linen fabric but you can speed up the process by doing a few extra cold washes and tumble dries. Darker colours will tend to shed more as they have been dyed more times."},
  {"id":"bl013","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"300TC Cotton Fitted Sheet","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11400","tag":"New","ph":"","img":"assets/products/bl013.webp","imgs":["assets/products/bl013.webp","assets/products/bl013-2.webp","assets/products/bl013-3.webp","assets/products/bl013-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":100,"memberPrice":90},{"label":"King Single","price":167,"memberPrice":150},{"label":"Double","price":167,"memberPrice":150},{"label":"Queen","price":167,"memberPrice":150},{"label":"King","price":167,"memberPrice":150}],"colours":[{"name":"Black","hex":"#000000"},{"name":"Blue","hex":"#4b75a5"},{"name":"Charcoal","hex":"#5c5253"},{"name":"Chocolate Brown","hex":"#5b3b2e"},{"name":"Natural","hex":"#ac9d88"},{"name":"Navy","hex":"#23233f"},{"name":"White","hex":"#ffffff"}],"desc":"Bring a cool, crisp feel to your bedroom with this 300TC Cotton Fitted Sheet. Crafted from breathable cotton in a smooth percale weave, it offers a lightweight matte finish that feels fresh and comfortable night after night. Easy to care for and beautifully tailored, it features a slightly deeper fit to sit more securely on your mattress for effortless everyday sleeping across the seasons.","features":["Made from 300 thread count cotton percale","Available in Single, Double, Queen and King sizes"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from 300 thread count cotton percale","Made in":"China"},"dimensions":"Single size: 1x fitted sheet 91cm x 193cm + a more generous 45cm depth | King Single size: 1x fitted sheet 107cm x 203cm + a more generous 45cm depth | Double size: 1x fitted sheet 137cm x 193cm + a more generous 45cm depth | Queen size: 1x fitted sheet 152cm x 203cm + a more generous 45cm depth | King size: 1x fitted sheet 182cm x 203cm + a more generous 50cm depth","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl014","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Australian Cotton Sheet Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11401","tag":"New","ph":"","img":"assets/products/bl014.webp","imgs":["assets/products/bl014.webp","assets/products/bl014-2.webp","assets/products/bl014-3.webp","assets/products/bl014-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"King Single","price":456,"memberPrice":410},{"label":"Double","price":456,"memberPrice":410},{"label":"Queen","price":456,"memberPrice":410},{"label":"King","price":456,"memberPrice":410},{"label":"Super King","price":456,"memberPrice":410}],"colours":[{"name":"Ice Blue","hex":"#d2e1e4"},{"name":"Olive Green","hex":"#7e7749"},{"name":"White","hex":"#ffffff"},{"name":"Mahogany","hex":"#78563d"},{"name":"Rose Pink","hex":"#cf888e"},{"name":"Taupe","hex":"#b5aaa6"}],"desc":"Experience everyday luxury with the Australian Cotton Deeper Fit Sheet Set, crafted from 375 thread count Australian cotton with a smooth sateen weave for a soft, lustrous finish. Naturally breathable and durable, this sheet set is designed for year-round comfort, with a deeper fitted sheet that offers additional depth for a secure, stay-in-place fit.","features":["Made from 375 thread count Australian cotton sateen","Available in Single, King Single, Double, Queen, King and Super King bed sizes","Natural fibre, durable, breathable and soft feel against the skin."],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from 375 thread count Australian cotton sateen","Made in":"China"},"dimensions":"Single size: flat 195 x 260cm & fitted 91 x 193cm + a more generous 45cm depth & 1 pillowcase 48 x 73cm | King Single size: Flat 210 x 275cm & Fitted 107 x 203cm + a more generous 45cm depth & 1 Pillowcase 48 x 73cm | Double size: Flat 240 x 260cm & Fitted 137 x 193cm + a more generous 45cm depth & 2 Pillowcases 48 x 73cm each | Queen size: Flat 270 x 275cm & Fitted 152 x 203cm + a more generous 45cm depth & 2 Pillowcases 48 x 73cm each | King size: Flat 300 x 275cm & Fitted 182 x 203cm + a more generous 50cm depth & 2 Pillowcases 48 x 73cm each | Super King size: Flat 300 x 330cm & Fitted 204 x 204cm + a more generous 50cm depth & 2 Pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl015","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Fitted Sheet","cat":"Bedroom","room":"Bedroom","price":423,"memberPrice":381,"sku":"SH-11402","tag":"New","ph":"","img":"assets/products/bl015.webp","imgs":["assets/products/bl015.webp","assets/products/bl015-2.webp","assets/products/bl015-3.webp","assets/products/bl015-4.webp","assets/products/bl015-5.webp","assets/products/bl015-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen Deep","price":423,"memberPrice":381},{"label":"King Deep","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"colours":[{"name":"Navy","hex":"#3f4458"},{"name":"Vintage Rose","hex":"#cf888e"},{"name":"Sage","hex":"#97aba2"},{"name":"Stone","hex":"#bdb6b0"},{"name":"White","hex":"#ffffff"},{"name":"Charcoal","hex":"#5c5253"},{"name":"Chocolate","hex":"#78563d"}],"desc":"Slip into understated luxury with the Washed Linen Fitted Sheet, crafted from premium washed European flax linen for an effortlessly relaxed, refined finish. Naturally breathable and beautifully temperature regulating, linen keeps you comfortable through warm nights and cooler seasons, and softens with every wash for a truly indulgent feel. Complete the European linen look with the Washed Linen Flat Sheet, Pillowcase Pair and Quilt Cover Set for a perfectly layered bedroom suite.","features":["Made from Oeko-Tex certified 100% European flax linen. Breathable 160GSM fabrication.","Available in Queen Deep, King Deep sheet sizes and Super King"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from Oeko-Tex certified 100% European flax linen. Breathable 160GSM fabrication.","Made in":"China"},"dimensions":"Queen size deep fit: 1 x fitted 152 x 203cm + 50cm wall (fits a standard queen bed with a 50cm wall) | King size deep fit: 1 x Fitted 182 x 203cm + 50cm wall (fits a standard king bed with a 50cm wall) | Super King: 1 fitted sheet 204 x 204 x 50cm wall","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl016","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Flat Sheet","cat":"Bedroom","room":"Bedroom","price":445,"memberPrice":400,"sku":"SH-11403","tag":"New","ph":"","img":"assets/products/bl016.webp","imgs":["assets/products/bl016.webp","assets/products/bl016-2.webp","assets/products/bl016-3.webp","assets/products/bl016-4.webp","assets/products/bl016-5.webp","assets/products/bl016-6.webp","assets/products/bl016-7.webp","assets/products/bl016-8.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"TBC Colour 1","hex":"#f0f5f8"},{"name":"Navy","hex":"#3f4458"},{"name":"Charcoal","hex":"#5c5253"},{"name":"Vintage Rose","hex":"#cf888e"},{"name":"White","hex":"#ffffff"},{"name":"Sage","hex":"#97aba2"},{"name":"Stone","hex":"#bdb6b0"},{"name":"Chocolate","hex":"#78563d"},{"name":"TBC Colour 2","hex":"#34485d"}],"desc":"Bring a touch of quiet opulence to your bed with the Washed Linen Flat Sheet, made from premium washed European flax linen with an elegant, naturally textured drape. Breathable and temperature regulating, it offers year-round comfort and becomes even softer over time for everyday luxury. Pair it with the Washed Linen Fitted Sheet, Pillowcase Pair and Quilt Cover Set to create a cohesive, elevated European linen bedding set.","features":["Made from Oeko-Tex certified 100% European flax linen","One size: 1 Flat sheet 290 x 270cm. Recommended for double, queen or king size bed."],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from Oeko-Tex certified 100% European flax linen","Size":"One Size"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean. Do not dry clean."},
  {"id":"bl017","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Stonewash Cotton Sheet Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11404","tag":"New","ph":"","img":"assets/products/bl017.webp","imgs":["assets/products/bl017.webp","assets/products/bl017-2.webp","assets/products/bl017-3.webp","assets/products/bl017-4.webp","assets/products/bl017-5.webp","assets/products/bl017-6.webp","assets/products/bl017-7.webp","assets/products/bl017-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"King Single","price":456,"memberPrice":410},{"label":"Double","price":456,"memberPrice":410},{"label":"Queen","price":456,"memberPrice":410},{"label":"King","price":456,"memberPrice":410},{"label":"Super King","price":456,"memberPrice":410}],"colours":[{"name":"Blue Haze","hex":"#d2e1e4"},{"name":"Blue Shadow","hex":"#4b75a5"},{"name":"Copper Clay","hex":"#a03d20"},{"name":"Pearl Blush","hex":"#fbf4ee"},{"name":"Rose Haze","hex":"#cf888e"},{"name":"Warm Latte","hex":"#b4a391"}],"desc":"Start every sleep with the soft, relaxed feel of the Stonewashed Cotton Sheet Set. Made from stonewashed cotton, this sheet set brings breathable everyday comfort and an easy lived-in look to your bed.","features":["Made from 100% Stonewashed Cotton","Available in Single, King Single Double, Queen, King and Super King sizes"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from 100% Stonewashed Cotton","Made in":"Pakistan"},"dimensions":"Single size: Flat 195 x 260cm & fitted 91 x 193cm + a more generous 45cm depth & 1 pillowcase 48 x 73cm | King Single size: Flat 210 x 275cm & Fitted 107 x 203cm + a more generous 45cm depth & 1 Pillowcase 48 x 73cm | Double size: Flat 240 x 260cm & Fitted 137 x 193cm + a more generous 45cm depth & 2 Pillowcases 48 x 73cm each | Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + a more generous 45cm depth & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + a more generous 50cm depth & 2 Pillowcases 48 x 73cm each | Super King size: Flat 300 x 330cm & Fitted 204 x 204cm + a more generous 50cm depth & 2 Pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well.Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl018","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"300TC Cotton Fitted Sheet Set","cat":"Bedroom","room":"Bedroom","price":300,"memberPrice":270,"sku":"SH-11405","tag":"New","ph":"","img":"assets/products/bl018.webp","imgs":["assets/products/bl018.webp","assets/products/bl018-2.webp","assets/products/bl018-3.webp","assets/products/bl018-4.webp","assets/products/bl018-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":300,"memberPrice":270},{"label":"King Single","price":356,"memberPrice":320},{"label":"Double","price":356,"memberPrice":320},{"label":"Queen","price":356,"memberPrice":320},{"label":"Queen Deep","price":356,"memberPrice":320},{"label":"King","price":356,"memberPrice":320},{"label":"King Deep","price":356,"memberPrice":320},{"label":"Super King","price":356,"memberPrice":320}],"colours":[{"name":"Black","hex":"#000000"},{"name":"Chocolate Brown","hex":"#78563d"}],"desc":"Refresh your bed with our 300TC Fitted Sheet Set, designed with a percale weave for a crisp, matte finish and a cool, breathable feel. The set includes a fitted sheet and two pillowcases, making it an easy, coordinated update for everyday comfort. Soft, lightweight and easy to care for, this 300TC Cotton Fitted Sheet Set is ideal for relaxed, all-season sleeping.","features":["Made from 300TC percale cotton","Available in Single, King Single, Double, Queen, Queen Deep Fit, King, King Deep Fit and Super King sheet sizes"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from 300TC percale cotton"},"dimensions":"Single size: 1x fitted sheet 91x193+40cm, 1 pillowcase 48x73cm | King Single size: 1x fitted sheet 107x203+40cm, 1 pillowcase 48x73cm | Double size: 1x fitted sheet 137x193+40cm, 2 pillowcase 48x73cm | Queen size: 1x fitted sheet 152x203+40cm, 2 pillowcase 48x73cm | Queen Deep Fit size: 1x fitted sheet 152x203+50cm, 2 pillowcase 48x73cm | King size: 1x fitted sheet 182x203+40cm, 2 pillowcase 48x73cm | King Deep Fit size: 1x fitted sheet 182x203+50cm, 2 pillowcase 48x73cm | Super King size: 1x fitted sheet 204x204+50cm, 2 pillowcase 48x73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl019","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Capri Floral Stripe Sheet Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11406","tag":"New","ph":"","img":"assets/products/bl019.webp","imgs":["assets/products/bl019.webp","assets/products/bl019-2.webp","assets/products/bl019-3.webp","assets/products/bl019-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"Double","price":434,"memberPrice":391},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391}],"colours":[{"name":"Lemon","hex":"#34485d"}],"desc":"Bring a gentle floral story to your bedroom with the Capri Floral Stripe Sheet Set.","features":["Made from 100% Cotton","Available in Single, Double, Queen and King set sizes","Floral stripe print sheet set"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from 100% Cotton"},"dimensions":"Single size: flat 195 x 260cm & fitted 91 x 193cm + 40cm wall & 1 pillowcase 48 x 73cm | Double size: Flat 240 x 260cm & Fitted 137 x 193cm + 40cm wall & 2 Pillowcases 48 x 73cm each | Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl020","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Green Striped Linen Cotton Sheet Set","cat":"Bedroom","room":"Bedroom","price":467,"memberPrice":420,"sku":"SH-11407","tag":"New","ph":"","img":"assets/products/bl020.webp","imgs":["assets/products/bl020.webp","assets/products/bl020-2.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":489,"memberPrice":440}],"desc":"For sheets that exude effortless style and are crafted from luxurious natural fibres, look no further than our Striped Linen Cotton Sheet Set. Combining sumptuously soft, durable linen with breathable cotton and woven into a soft pin stripe, this gorgeous sheet design makes for endless styling possibilities.","features":["- Natural Stripe, Charcoal Stripe, Green Stripe and Chocolate Stripe - 50% yarn-dyed Cotton and 50% Linen ; - Brown Stripe and Pink Stripe - 90% yarn-dyed Cotton and 10% Linen","Available in Queen and King sheet set sizes"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"- Natural Stripe, Charcoal Stripe, Green Stripe and Chocolate Stripe - 50% yarn-dyed Cotton and 50% Linen ; - Brown Stri","Made in":"China"},"dimensions":"Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each","care":"Wash dark colours separately. Cold machine wash before first use on gentle cycle. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Warm iron if desired. Do not dry clean. A gentle reminder: As linen fabric softens the excess fibres may start to shed for a period of time. This is normal for linen fabric but you can speed up the process by doing a few extra cold washes and tumble dries. Darker colours will tend to shed more as they have been dyed more times."},
  {"id":"bl021","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Cotton Linen Brown Striped Sheet Set","cat":"Bedroom","room":"Bedroom","price":467,"memberPrice":420,"sku":"SH-11408","tag":"New","ph":"","img":"assets/products/bl021.webp","imgs":["assets/products/bl021.webp","assets/products/bl021-2.webp","assets/products/bl021-3.webp","assets/products/bl021-4.webp","assets/products/bl021-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":489,"memberPrice":440}],"colours":[{"name":"Pink Stripe","hex":"#f0d0d1"},{"name":"Brown Stripe","hex":"#78563d"}],"desc":"For sheets that exude effortless style and are crafted from luxurious natural fibres, look no further than our Striped Linen Cotton Sheet Set. Combining sumptuously soft, durable linen with breathable cotton and woven into a soft pin stripe, this gorgeous sheet design makes for endless styling possibilities.","features":["- Natural Stripe, Charcoal Stripe and Green Stripe - 50% yarn-dyed Cotton and 50% Linen ; - Brown Stripe and Pink Stripe - 90% yarn-dyed Cotton and 10% Linen","Available in Queen and King sheet set sizes"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"- Natural Stripe, Charcoal Stripe and Green Stripe - 50% yarn-dyed Cotton and 50% Linen ; - Brown Stripe and Pink Stripe","Made in":"China"},"dimensions":"Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each","care":"Wash dark colours separately. Cold machine wash before first use on gentle cycle. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Warm iron if desired. Do not dry clean. A gentle reminder: As linen fabric softens the excess fibres may start to shed for a period of time. This is normal for linen fabric but you can speed up the process by doing a few extra cold washes and tumble dries. Darker colours will tend to shed more as they have been dyed more times."},
  {"id":"bl022","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400 Thread Count Silver Bamboo Cotton Sheet Set","cat":"Bedroom","room":"Bedroom","price":445,"memberPrice":400,"sku":"SH-11409","tag":"New","ph":"","img":"assets/products/bl022.webp","imgs":["assets/products/bl022.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":445,"memberPrice":400},{"label":"King Single","price":534,"memberPrice":481},{"label":"Double","price":534,"memberPrice":481},{"label":"Queen","price":534,"memberPrice":481},{"label":"Queen Deep","price":534,"memberPrice":481},{"label":"King","price":534,"memberPrice":481},{"label":"King Deep","price":534,"memberPrice":481},{"label":"Super King","price":534,"memberPrice":481}],"desc":"Luxuriously soft to touch, lightweight and finished with an elegant sheen, our bamboo cotton sheets are the epitome of comfort & style. Perfect year round, this unique bamboo cotton blend will keep you cool in summer and warm in winter thanks to their breathable and temperature regulating properties.","features":["Made from a blend of 400 thread count bamboo and cotton."],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from a blend of 400 thread count bamboo and cotton."},"dimensions":"King Single size: Flat 210 x 275cm & Fitted 107 x 203cm + 40cm wall & 1 Pillowcase 48 x 73cm | Double size: Flat 240 x 260cm & Fitted 137 x 193cm + 40cm wall & 2 Pillowcases 48 x 73cm each | Double size Deep Fit: Flat 255 x 260cm & Fitted 137 x 193cm + 50cm wall & 2 Pillowcases 48 x 73cm each | Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | Queen size Deep Fit: Flat 270 x 275cm & Fitted 152 x 203cm + 50cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | King size Deep Fit: Flat 300 x 275cm & Fitted 182 x 203cm + 50cm wall & 2 Pillowcases 48 x 73cm each | Super King size: Flat 300 x 330cm & Fitted 204 x 204cm + 50cm wall & 2 Pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Low iron if desired. Do not dry clean."},
  {"id":"bl023","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400 Thread Count Bamboo Cotton My First Sheet Set","cat":"Bedroom","room":"Bedroom","price":167,"memberPrice":150,"sku":"SH-11410","tag":"New","ph":"","img":"assets/products/bl023.webp","imgs":["assets/products/bl023.webp","assets/products/bl023-2.webp","assets/products/bl023-3.webp","assets/products/bl023-4.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Vintage Rose","hex":"#cf888e"},{"name":"Butter Yellow","hex":"#f1c56c"},{"name":"White","hex":"#ffffff"},{"name":"Light Blue","hex":"#d2e1e4"}],"desc":"Bamboo and cotton blend together in harmony to create our most luxuriously soft sheet set. This blend of natural, moisture-wicking and temperature regulating fibres ensures our Bamboo Cotton 400 Thread Count Sheet Set is perfect for year-round comfort.","features":["Made from a blend of 400 thread count bamboo and cotton.","Size: flat 114 x 165cm & fitted 68 x 135cm + 19cm wall","Bamboo and Cotton are a natural and breathable fibre as well as being durable","Please note, a Cot Pillow is recommended for display use only.","WARNING: It is recommended that bedding such as quilts, blankets and pillows should be removed during sleep for infants aged 0 – 24 months."],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from a blend of 400 thread count bamboo and cotton.","Size":"Toddler"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Low iron if desired. Do not dry clean."},
  {"id":"bl024","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Vintage 250TC Washed Cotton Sheet Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11411","tag":"New","ph":"","img":"assets/products/bl024.webp","imgs":["assets/products/bl024.webp","assets/products/bl024-2.webp","assets/products/bl024-3.webp","assets/products/bl024-4.webp","assets/products/bl024-5.webp","assets/products/bl024-6.webp","assets/products/bl024-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"King Single","price":367,"memberPrice":330},{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":367,"memberPrice":330},{"label":"King","price":367,"memberPrice":330}],"colours":[{"name":"Lilac","hex":"#cab2cc"},{"name":"Light Blue","hex":"#d2e1e4"},{"name":"Clay","hex":"#dc8476"},{"name":"Sage","hex":"#97aba2"}],"desc":"Soft and relaxed - our 250TC Vintage Washed Cotton Sheet Set is made for those who love the laid-back feel of well-loved bedding. Crafted from breathable cotton and available in gorgeous trending colours, these sheets offer year-round comfort and charm to any bedroom.","features":["Made from 250TC washed cotton","Available in Single, King Single, Double, Queen and King bed sheet sizes","This sheet set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging."],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from 250TC washed cotton"},"dimensions":"Single size: flat 195 x 260cm & fitted 91 x 193cm + 40cm wall & 1 pillowcase 48 x 73cm | King Single size: Flat 210 x 275cm & Fitted 107 x 203cm + 40cm wall & 1 Pillowcase 48 x 73cm | Double size: Flat 240 x 260cm & Fitted 137 x 193cm + 40cm wall & 2 Pillowcases 48 x 73cm each | Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl025","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400 Thread Count Soft Fern Bamboo Cotton Sheet Set","cat":"Bedroom","room":"Bedroom","price":423,"memberPrice":381,"sku":"SH-11412","tag":"New","ph":"","img":"assets/products/bl025.webp","imgs":["assets/products/bl025.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":423,"memberPrice":381},{"label":"King Single","price":423,"memberPrice":381},{"label":"Double","price":423,"memberPrice":381},{"label":"Queen","price":423,"memberPrice":381},{"label":"Queen Deep","price":423,"memberPrice":381},{"label":"King","price":423,"memberPrice":381},{"label":"King Deep","price":423,"memberPrice":381},{"label":"Super King","price":423,"memberPrice":381}],"desc":"Luxuriously soft to touch, lightweight and finished with an elegant sheen, our bamboo cotton sheets are the epitome of comfort & style. Perfect year round, this unique bamboo cotton blend will keep you cool in summer and warm in winter thanks to their breathable and temperature regulating properties.","features":["Made from a blend of 400 thread count bamboo and cotton."],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from a blend of 400 thread count bamboo and cotton."},"dimensions":"King Single size: Flat 210 x 275cm & Fitted 107 x 203cm + 40cm wall & 1 Pillowcase 48 x 73cm | Double size: Flat 240 x 260cm & Fitted 137 x 193cm + 40cm wall & 2 Pillowcases 48 x 73cm each | Double size Deep Fit: Flat 255 x 260cm & Fitted 137 x 193cm + 50cm wall & 2 Pillowcases 48 x 73cm each | Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | Queen size Deep Fit: Flat 270 x 275cm & Fitted 152 x 203cm + 50cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | King size Deep Fit: Flat 300 x 275cm & Fitted 182 x 203cm + 50cm wall & 2 Pillowcases 48 x 73cm each | Super King size: Flat 300 x 330cm & Fitted 204 x 204cm + 50cm wall & 2 Pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Low iron if desired. Do not dry clean."},
  {"id":"bl026","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Cotton Linen Pink Striped Sheet Set","cat":"Bedroom","room":"Bedroom","price":467,"memberPrice":420,"sku":"SH-11413","tag":"New","ph":"","img":"assets/products/bl026.webp","imgs":["assets/products/bl026.webp","assets/products/bl026-2.webp","assets/products/bl026-3.webp","assets/products/bl026-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":489,"memberPrice":440}],"desc":"For sheets that exude effortless style and are crafted from luxurious natural fibres, look no further than our Striped Linen Cotton Sheet Set. Combining sumptuously soft, durable linen with breathable cotton and woven into a soft pin stripe, this gorgeous sheet design makes for endless styling possibilities.","features":["- Natural Stripe, Charcoal Stripe and Green Stripe - 50% yarn-dyed Cotton and 50% Linen ; - Brown Stripe and Pink Stripe - 90% yarn-dyed Cotton and 10% Linen","Available in Queen and King sheet set sizes"],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"- Natural Stripe, Charcoal Stripe and Green Stripe - 50% yarn-dyed Cotton and 50% Linen ; - Brown Stripe and Pink Stripe","Made in":"China"},"dimensions":"Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each","care":"Wash dark colours separately. Cold machine wash before first use on gentle cycle. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Warm iron if desired. Do not dry clean. A gentle reminder: As linen fabric softens the excess fibres may start to shed for a period of time. This is normal for linen fabric but you can speed up the process by doing a few extra cold washes and tumble dries. Darker colours will tend to shed more as they have been dyed more times."},
  {"id":"bl027","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400 Thread Count Sand Stripe Bamboo Cotton Sheet Set","cat":"Bedroom","room":"Bedroom","price":534,"memberPrice":481,"sku":"SH-11414","tag":"New","ph":"","img":"assets/products/bl027.webp","imgs":["assets/products/bl027.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":534,"memberPrice":481},{"label":"Queen","price":534,"memberPrice":481},{"label":"Queen Deep","price":534,"memberPrice":481},{"label":"King","price":534,"memberPrice":481},{"label":"King Deep","price":534,"memberPrice":481},{"label":"Super King","price":534,"memberPrice":481}],"desc":"Luxuriously soft to touch, lightweight and finished with an elegant sheen, our bamboo cotton sheets are the epitome of comfort & style. Perfect year round, this unique bamboo cotton blend will keep you cool in summer and warm in winter thanks to their breathable and temperature regulating properties.","features":["Made from a blend of 400 thread count bamboo and cotton."],"specs":{"Type":"Bedroom > Bed Linen > Sheets","Material":"Made from a blend of 400 thread count bamboo and cotton."},"dimensions":"King Single size: Flat 210 x 275cm & Fitted 107 x 203cm + 40cm wall & 1 Pillowcase 48 x 73cm | Double size: Flat 240 x 260cm & Fitted 137 x 193cm + 40cm wall & 2 Pillowcases 48 x 73cm each | Double size Deep Fit: Flat 255 x 260cm & Fitted 137 x 193cm + 50cm wall & 2 Pillowcases 48 x 73cm each | Queen size: Flat 255 x 275cm & Fitted 152 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | Queen size Deep Fit: Flat 270 x 275cm & Fitted 152 x 203cm + 50cm wall & 2 Pillowcases 48 x 73cm each | King size: Flat 285 x 275cm & Fitted 182 x 203cm + 40cm wall & 2 Pillowcases 48 x 73cm each | King size Deep Fit: Flat 300 x 275cm & Fitted 182 x 203cm + 50cm wall & 2 Pillowcases 48 x 73cm each | Super King size: Flat 300 x 330cm & Fitted 204 x 204cm + 50cm wall & 2 Pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Low iron if desired. Do not dry clean."},
  {"id":"bl028","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400TC Bamboo Cotton Standard Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11415","tag":"New","ph":"","img":"assets/products/bl028.webp","imgs":["assets/products/bl028.webp","assets/products/bl028-2.webp","assets/products/bl028-3.webp","assets/products/bl028-4.webp","assets/products/bl028-5.webp","assets/products/bl028-6.webp","assets/products/bl028-7.webp","assets/products/bl028-8.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Butter Yellow","hex":"#f1c56c"},{"name":"Charcoal","hex":"#5c5253"},{"name":"Charcoal Stripe","hex":"#c0c3ca"},{"name":"Chocolate","hex":"#5b3b2e"},{"name":"Dusty Violet","hex":"#ccb5df"},{"name":"Eucalyptus","hex":"#97aba2"},{"name":"Vintage Rose","hex":"#cf888e"},{"name":"White","hex":"#ffffff"},{"name":"Light Blue","hex":"#d2e1e4"},{"name":"Light Taupe","hex":"#b5aaa6"},{"name":"Navy","hex":"#23233f"},{"name":"Paprika","hex":"#a03d20"},{"name":"Sand","hex":"#bcb3aa"},{"name":"Sand Stripe","hex":"#ac9d88"}],"desc":"Bamboo and cotton blend together in harmony to create our most luxuriously soft pillowcase. This blend of natural, moisture-wicking and temperature regulating fibres ensures our Bamboo Cotton 400 Thread Count Pillowcase is perfect for year-round comfort.","features":["Made from 400 thread count 60% Bamboo, 40% Cotton blend","2 x Standard pillowcases 48cm W x 73cm L","Natural fibre, moisture wicking, lightweight, breathable, great for sensitive skin and durable."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from 400 thread count 60% Bamboo, 40% Cotton blend","Made in":"China","Size":"Standard"},"care":"Wash dark colours separately. Warm machine wash before first use. Do not bleach. Rinse well. May be tumble dried warm. Warm iron if desired. Do not dry clean."},
  {"id":"bl029","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400TC Bamboo Cotton U Shape Pillowcase","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11416","tag":"New","ph":"","img":"assets/products/bl029.webp","imgs":["assets/products/bl029.webp","assets/products/bl029-2.webp","assets/products/bl029-3.webp","assets/products/bl029-4.webp","assets/products/bl029-5.webp","assets/products/bl029-6.webp","assets/products/bl029-7.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Creme","hex":"#fbf4ee"},{"name":"Fennel Green","hex":"#29714b"},{"name":"Pale Aqua","hex":"#d8e6e6"},{"name":"Charcoal","hex":"#5c5253"},{"name":"Eucalyptus","hex":"#97aba2"},{"name":"Silver","hex":"#d8d7dc"},{"name":"Navy","hex":"#3f4458"},{"name":"Vintage Rose","hex":"#cf888e"},{"name":"White","hex":"#ffffff"},{"name":"Sand","hex":"#bcb3aa"},{"name":"Light Blue","hex":"#d2e1e4"},{"name":"Chocolate","hex":"#78563d"}],"desc":"Bamboo and cotton blend together in harmony to create our most luxuriously soft u-shape pillowcase. This blend of natural, moisture-wicking and temperature regulating fibres ensures our Bamboo Cotton 400 Thread Count U Shape Pillowcase is perfect for year-round comfort.","features":["Made from a bamboo cotton blend","78 x 42cm","Natural and breathable fibre","Moisture-wicking","Also know as boomerang, V shape or Tri Jumbo"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from a bamboo cotton blend","Size":"Tri Large"},"care":"Wash dark colours separately. Warm machine wash before first use. Do not bleach. Rinse well. May be tumble dried warm. Warm iron if desired. Do not dry clean."},
  {"id":"bl030","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400TC Bamboo Cotton King Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":112,"memberPrice":101,"sku":"SH-11417","tag":"New","ph":"","img":"assets/products/bl030.webp","imgs":["assets/products/bl030.webp","assets/products/bl030-2.webp","assets/products/bl030-3.webp","assets/products/bl030-4.webp","assets/products/bl030-5.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Charcoal","hex":"#5c5253"},{"name":"Eucalyptus","hex":"#97aba2"},{"name":"Navy","hex":"#23233f"},{"name":"Sand","hex":"#bcb3aa"},{"name":"White","hex":"#ffffff"},{"name":"Chocolate","hex":"#5b3b2e"},{"name":"Creme","hex":"#fbf4ee"},{"name":"Fennel Green","hex":"#29714b"},{"name":"Light Blue","hex":"#d2e1e4"},{"name":"Vintage Rose","hex":"#cf888e"}],"desc":"Bamboo and cotton blend together in harmony to create our most luxuriously soft pillowcase. This blend of natural, moisture-wicking and temperature regulating fibres ensures our Bamboo Cotton 400 Thread Count Pillowcase is perfect for year-round comfort.","features":["Bamboo Cotton","54 x 93cm","Includes 2 King pillowcases","Natural and breathable fibre","Moisture-wicking"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Bamboo Cotton","Size":"King"},"care":"Wash dark colours separately. Cold machine wash separately before first use. Do not bleach, soak, wring or rub. May be tumble dried low. Warm iron if desired. Do not dry clean."},
  {"id":"bl031","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"300TC Cotton Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":89,"memberPrice":80,"sku":"SH-11418","tag":"New","ph":"","img":"assets/products/bl031.webp","imgs":["assets/products/bl031.webp","assets/products/bl031-2.webp","assets/products/bl031-3.webp","assets/products/bl031-4.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Sage Green","hex":"#97aba2"},{"name":"Berry","hex":"#84122c"},{"name":"Latte","hex":"#b4a391"},{"name":"Oak Green","hex":"#29714b"},{"name":"Chocolate Brown","hex":"#78563d"},{"name":"Lilac Purple","hex":"#ccb5df"},{"name":"Pink","hex":"#f0d0d1"},{"name":"White","hex":"#ffffff"},{"name":"Blue","hex":"#4b75a5"},{"name":"Navy","hex":"#2a3d65"},{"name":"Black","hex":"#000000"},{"name":"Charcoal","hex":"#52505d"},{"name":"Natural","hex":"#b4a391"}],"desc":"Complete your bed with this 300TC Cotton Pillowcase Pair, made with a percale weave for a crisp, matte finish and a cool, breathable feel. Soft and lightweight, they offer everyday comfort for a refreshing night’s sleep. Easy to care for and durable, this 300TC pillowcase pair is ideal for relaxed, everyday bedding.","features":["Made from 300TC percale cotton","Includes 2x standard pillowcases 48x73cm"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from 300TC percale cotton","Size":"300TC Cotton Pillowcase Pair"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl032","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"300TC Cotton U Shape Pillowcase","cat":"Bedroom","room":"Bedroom","price":89,"memberPrice":80,"sku":"SH-11419","tag":"New","ph":"","img":"assets/products/bl032.webp","imgs":["assets/products/bl032.webp","assets/products/bl032-2.webp","assets/products/bl032-3.webp","assets/products/bl032-4.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#ffffff"},{"name":"Black","hex":"#000000"},{"name":"Blue","hex":"#4b75a5"},{"name":"Charcoal","hex":"#5c5253"},{"name":"Chocolate Brown","hex":"#5b3b2e"},{"name":"Natural","hex":"#ac9d88"},{"name":"Navy","hex":"#23233f"}],"desc":"The 300TC U Shape Pillowcase is crafted from breathable cotton percale for a cool, crisp feel and smooth matte finish. Soft, lightweight and easy to care for. Made to fit U shaped pillows, it helps keep your pillow protected while creating a fresh, tailored look.","features":["Made from 300 thread count percale cotton","1 x U Shape pillowcase 42cm x 78cm x 78cm","Sold Individually"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from 300 thread count percale cotton","Made in":"China","Size":"Tri Large"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl033","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Look Vintage Rose European Pillowcase","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11420","tag":"New","ph":"","img":"assets/products/bl033.webp","imgs":["assets/products/bl033.webp","assets/products/bl033-2.webp","assets/products/bl033-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Bringing you the trending linen look but in soft cotton, our Washed Linen Look European Pillowcase will give your room a sophisticated feel. Style with the complementing Washed Linen Look Quilt Cover Set or as an easy update to your current bed look.","features":["Made from cotton.","1 European pillowcase 65 x 65cm"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from cotton.","Size":"European Pillowcase"},"care":"Cold machine wash on gentle cycle before first use. Wash dark colours separately. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Cool iron if desired. Do not dry clean."},
  {"id":"bl034","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Vintage Rose Pink Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":167,"memberPrice":150,"sku":"SH-11421","tag":"New","ph":"","img":"assets/products/bl034.webp","imgs":["assets/products/bl034.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Add the finishing touch to a calm, elevated bedroom with the Washed Linen Pillowcase Pair, crafted from premium washed European flax linen. Breathable and temperature regulating, linen feels comfortable in every season and softens with every wash for lasting comfort. Pair with the Washed Linen Quilt Cover Set and complete your European linen bed linen range with the matching Fitted Sheet, Flat Sheet for a beautifully coordinated bedroom.","features":["Made from Oeko-Tex certified 100% European flax linen","2 x Standard pillowcases 48cm W x 73cm L","Natural and breathable fibre","Softens with every wash for lasting comfort"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Oeko-Tex certified 100% European flax linen"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Warm iron if desired. Do not dry clean."},
  {"id":"bl035","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400 Thread Count Bamboo Cotton My First Pillowcase","cat":"Bedroom","room":"Bedroom","price":89,"memberPrice":80,"sku":"SH-11422","tag":"New","ph":"","img":"assets/products/bl035.webp","imgs":["assets/products/bl035.webp","assets/products/bl035-2.webp","assets/products/bl035-3.webp","assets/products/bl035-4.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#ffffff"},{"name":"Vintage Rose","hex":"#cf888e"}],"desc":"Bamboo and cotton blend together in harmony to create our most luxuriously soft pillowcase perfect for your little one. This blend of natural, moisture-wicking and temperature regulating fibres ensures our Bamboo Cotton 400 Thread Count Pillowcase is perfect for year-round comfort.","features":["Bamboo Cotton - 400 Thread Count","Natural fibre, soft and silky, lightweight, breathable, great for sensitive skin.","Size of My First Pillowcase is 40 x 60cm","Please note, a Cot Pillow is recommended for display use only.","WARNING: It is recommended that bedding such as quilts, blankets and pillows should be removed during sleep for infants aged 0 - 24 months."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Bamboo Cotton - 400 Thread Count","Made in":"China.","Size":"Toddler"},"care":"Wash dark colours separately. Warm machine wash before first use. Do not bleach. Rinse well. May be tumble dried warm. Warm iron if desire. Do not dry clean."},
  {"id":"bl036","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Sage Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":167,"memberPrice":150,"sku":"SH-11423","tag":"New","ph":"","img":"assets/products/bl036.webp","imgs":["assets/products/bl036.webp","assets/products/bl036-2.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Add the finishing touch to a calm, elevated bedroom with the Washed Linen Pillowcase Pair, crafted from premium washed European flax linen. Breathable and temperature regulating, linen feels comfortable in every season and softens with every wash for lasting comfort. Pair with the Washed Linen Quilt Cover Set and complete your European linen bed linen range with the matching Fitted Sheet, Flat Sheet for a beautifully coordinated bedroom.","features":["Made from Oeko-Tex certified 100% European flax linen","2 x Standard pillowcases 48cm W x 73cm L","Natural and breathable fibre","Softens with every wash for lasting comfort"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Oeko-Tex certified 100% European flax linen"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Warm iron if desired. Do not dry clean."},
  {"id":"bl037","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Milah Clay Stripe European Pillowcase","cat":"Bedroom","room":"Bedroom","price":95,"memberPrice":86,"sku":"SH-11424","tag":"New","ph":"","img":"assets/products/bl037.webp","imgs":["assets/products/bl037.webp","assets/products/bl037-2.webp","assets/products/bl037-3.webp","assets/products/bl037-4.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Effortlessly create a stunningly stylish look with the Milah Stripe European Pillowcase. This Euro pillowcase set features a yarn-dyed wide stripe design in trending colours, blending contemporary style with breathable fabric for a comfortable night's sleep. Complete the look with our Milah Stripe Quilt Cover Set.","features":["Made from garment washed yarn-dyed cotton with a knife edge finish","1x European pillowcase 65cm x 65cm","Wide stripe design","Sold individually","This European pillowcase is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from garment washed yarn-dyed cotton with a knife edge finish","Size":"European"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl038","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Navy Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":167,"memberPrice":150,"sku":"SH-11425","tag":"New","ph":"","img":"assets/products/bl038.webp","imgs":["assets/products/bl038.webp","assets/products/bl038-2.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Add the finishing touch to a calm, elevated bedroom with the Washed Linen Pillowcase Pair, crafted from premium washed European flax linen. Breathable and temperature regulating, linen feels comfortable in every season and softens with every wash for lasting comfort. Pair with the Washed Linen Quilt Cover Set and complete your European linen bed linen range with the matching Fitted Sheet, Flat Sheet for a beautifully coordinated bedroom.","features":["Made from Oeko-Tex certified 100% European flax linen","2 x Standard pillowcases 48cm W x 73cm L","Natural and breathable fibre","Softens with every wash for lasting comfort"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Oeko-Tex certified 100% European flax linen"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Warm iron if desired. Do not dry clean."},
  {"id":"bl039","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400TC Bamboo Cotton Queen Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":106,"memberPrice":95,"sku":"SH-11426","tag":"New","ph":"","img":"assets/products/bl039.webp","imgs":["assets/products/bl039.webp","assets/products/bl039-2.webp","assets/products/bl039-3.webp","assets/products/bl039-4.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Charcoal","hex":"#5c5253"},{"name":"Chocolate","hex":"#5b3b2e"},{"name":"Eucalyptus","hex":"#97aba2"},{"name":"Fennel Green","hex":"#29714b"},{"name":"Light Blue","hex":"#d2e1e4"},{"name":"Navy","hex":"#23233f"},{"name":"Sand","hex":"#bcb3aa"},{"name":"Vintage Rose","hex":"#cf888e"},{"name":"White","hex":"#ffffff"}],"desc":"Bamboo and cotton blend together in harmony to create our most luxuriously soft pillowcase. This blend of natural, moisture-wicking and temperature regulating fibres ensures our Bamboo Cotton 400 Thread Count Queen Pillowcase is perfect for year-round comfort.","features":["Bamboo Cotton","50 x 80cm","Includes 2 Queen pillowcases","Natural and breathable fibre","Moisture-wicking"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Bamboo Cotton","Size":"Queen"},"care":"Wash dark colours separately. Cold machine wash separately before first use. Do not bleach, soak, wring or rub. May be tumble dried low. Warm iron if desired. Do not dry clean."},
  {"id":"bl040","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Stone Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":167,"memberPrice":150,"sku":"SH-11427","tag":"New","ph":"","img":"assets/products/bl040.webp","imgs":["assets/products/bl040.webp","assets/products/bl040-2.webp","assets/products/bl040-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Add the finishing touch to a calm, elevated bedroom with the Washed Linen Pillowcase Pair, crafted from premium washed European flax linen. Breathable and temperature regulating, linen feels comfortable in every season and softens with every wash for lasting comfort. Pair with the Washed Linen Quilt Cover Set and complete your European linen bed linen range with the matching Fitted Sheet, Flat Sheet for a beautifully coordinated bedroom.","features":["Made from Oeko-Tex certified 100% European flax linen","2 x Standard pillowcases 48cm W x 73cm L","Natural and breathable fibre","Softens with every wash for lasting comfort"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Oeko-Tex certified 100% European flax linen"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Warm iron if desired. Do not dry clean."},
  {"id":"bl041","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen White King Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":167,"memberPrice":150,"sku":"SH-11428","tag":"New","ph":"","img":"assets/products/bl041.webp","imgs":["assets/products/bl041.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Add an extra level of comfort to your sleep space with the Washed Linen King Pillowcase Pair, crafted from premium washed European flax linen. Beautifully breathable and temperature regulating, linen keeps you comfortable in every season and softens with every wash for lasting comfort.","features":["Made from Oeko-Tex certified 100% European flax linen","Natural and breathable fibre","Softens with every wash for lasting comfort"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Oeko-Tex certified 100% European flax linen","Size":"King"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Warm iron if desired. Do not dry clean."},
  {"id":"bl042","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Australian Cotton Standard Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":95,"memberPrice":86,"sku":"SH-11429","tag":"New","ph":"","img":"assets/products/bl042.webp","imgs":["assets/products/bl042.webp","assets/products/bl042-2.webp","assets/products/bl042-3.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Ice Blue","hex":"#d2e1e4"},{"name":"Olive Green","hex":"#7e7749"},{"name":"White","hex":"#ffffff"},{"name":"Mahogany","hex":"#78563d"},{"name":"Rose Pink","hex":"#cf888e"},{"name":"Taupe","hex":"#b5aaa6"}],"desc":"Enjoy effortless comfort with the Australian Cotton Standard Pillowcase Pair, crafted from quality Australian cotton with a smooth sateen weave for a soft and breathable feel against the skin. Designed for everyday living, these durable pillowcases offer a smooth finish that pairs beautifully with your bedding while providing lasting comfort night after night.","features":["Made from 375 thread count Australian cotton with a sateen weave.","2 x Standard pillowcases: 48 x 73cm each","Natural fibre, durable, breathable and soft feel against the skin"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from 375 thread count Australian cotton with a sateen weave.","Made in":"China","Size":"Standard"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl043","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen White Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":167,"memberPrice":150,"sku":"SH-11430","tag":"New","ph":"","img":"assets/products/bl043.webp","imgs":["assets/products/bl043.webp","assets/products/bl043-2.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Add the finishing touch to a calm, elevated bedroom with the Washed Linen Pillowcase Pair, crafted from premium washed European flax linen. Breathable and temperature regulating, linen feels comfortable in every season and softens with every wash for lasting comfort. Pair with the Washed Linen Quilt Cover Set and complete your European linen bed linen range with the matching Fitted Sheet, Flat Sheet for a beautifully coordinated bedroom.","features":["Made from Oeko-Tex certified 100% European flax linen","2 x Standard pillowcases 48cm W x 73cm L","Natural and breathable fibre","Softens with every wash for lasting comfort"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Oeko-Tex certified 100% European flax linen"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Warm iron if desired. Do not dry clean."},
  {"id":"bl044","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Rose Pink King Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":167,"memberPrice":150,"sku":"SH-11431","tag":"New","ph":"","img":"assets/products/bl044.webp","imgs":["assets/products/bl044.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Vintage Rose","hex":"#34485d"}],"desc":"Add an extra level of comfort to your sleep space with the Washed Linen King Pillowcase Pair, crafted from premium washed European flax linen. Beautifully breathable and temperature regulating, linen keeps you comfortable in every season and softens with every wash for lasting comfort.","features":["Made from Oeko-Tex certified 100% European flax linen","Natural and breathable fibre","Softens with every wash for lasting comfort"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Oeko-Tex certified 100% European flax linen","Size":"King"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Warm iron if desired. Do not dry clean."},
  {"id":"bl045","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Charcoal Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":167,"memberPrice":150,"sku":"SH-11432","tag":"New","ph":"","img":"assets/products/bl045.webp","imgs":["assets/products/bl045.webp","assets/products/bl045-2.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Add the finishing touch to a calm, elevated bedroom with the Washed Linen Pillowcase Pair, crafted from premium washed European flax linen. Breathable and temperature regulating, linen feels comfortable in every season and softens with every wash for lasting comfort. Pair with the Washed Linen Quilt Cover Set and complete your European linen bed linen range with the matching Fitted Sheet, Flat Sheet for a beautifully coordinated bedroom.","features":["Made from Oeko-Tex certified 100% European flax linen","2 x Standard pillowcases 48cm W x 73cm L","Natural and breathable fibre","Softens with every wash for lasting comfort"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Oeko-Tex certified 100% European flax linen"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Warm iron if desired. Do not dry clean."},
  {"id":"bl046","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Navy King Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":167,"memberPrice":150,"sku":"SH-11433","tag":"New","ph":"","img":"assets/products/bl046.webp","imgs":["assets/products/bl046.webp","assets/products/bl046-2.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Add an extra level of comfort to your sleep space with the Washed Linen King Pillowcase Pair, crafted from premium washed European flax linen. Beautifully breathable and temperature regulating, linen keeps you comfortable in every season and softens with every wash for lasting comfort.","features":["Made from Oeko-Tex certified 100% European flax linen","Natural and breathable fibre","Softens with every wash for lasting comfort"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Oeko-Tex certified 100% European flax linen","Size":"King"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Warm iron if desired. Do not dry clean."},
  {"id":"bl047","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400 Thread Count Bamboo Cotton Body Pillowcase","cat":"Bedroom","room":"Bedroom","price":95,"memberPrice":86,"sku":"SH-11434","tag":"New","ph":"","img":"assets/products/bl047.webp","imgs":["assets/products/bl047.webp","assets/products/bl047-2.webp","assets/products/bl047-3.webp","assets/products/bl047-4.webp","assets/products/bl047-5.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#ffffff"},{"name":"Silver","hex":"#b7b6bb"},{"name":"Charcoal","hex":"#4a4647"},{"name":"Eucalyptus","hex":"#97aba2"},{"name":"Vintage Rose","hex":"#cf888e"},{"name":"Chocolate","hex":"#78563d"},{"name":"Light Blue","hex":"#d2e1e4"},{"name":"Sand","hex":"#d9d4d1"},{"name":"Navy","hex":"#3f4458"}],"desc":"Bamboo and cotton blend together in harmony to create our most luxuriously soft pillowcase. This blend of natural, moisture-wicking and temperature regulating fibres ensures our Bamboo Cotton 400 Thread Count Pillowcase is perfect for year-round comfort.","features":["Bamboo/Cotton","400 Thread Count","48 x 152cm","Natural and breathable fibre","Moisture-Wicking"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Bamboo/Cotton","Made in":"China.","Size":"Body Pillowcase"},"care":"Wash dark colours separately. Cold machine wash separately before first use. Do not bleach, soak, wring or rub. May be tumble dried low. Warm iron if desired. Do not dry clean."},
  {"id":"bl048","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Mocha Brown Mulberry Silk Plain Pillowcase","cat":"Bedroom","room":"Bedroom","price":156,"memberPrice":140,"sku":"SH-11435","tag":"New","ph":"","img":"assets/products/bl048.webp","imgs":["assets/products/bl048.webp","assets/products/bl048-2.webp","assets/products/bl048-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Drift into a deep and more luxurious sleep with our Mulberry Silk Plain Pillowcase. Crafted from smooth Mulberry silk, this premium pillowcase feels beautifully soft against skin and hair, helping reduce friction while you rest. Naturally breathable and gentle, it offers year-round comfort while adding a refined finish to your bed linen. Perfect for creating a calm, elevated sleep space, this silk pillowcase blends everyday comfort with indulgent style.","features":["Made from Mulberry Silk, making it gentle on your skin and hair.","Pillowcase size is a standard pillow (48 x 73 cm). Note: pack contains 1 x pillowcase.","The momme weight is 16 (68gsm)","With a soft, smooth surface silk reduces friction while you sleep, reducing sleep creases on your face and frizzy hair so you can preserve your hairstyle for longer.","Sleeping on silk helps to retain moisture in both your hair and skin for smoother skin, tangle free hair and better general hydration.","As a natural fibre, silk is breathable and temperature regulating to keep you comfortable all night long."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Mulberry Silk, making it gentle on your skin and hair.","Size":"Mulberry Silk Plain Pillowcase"},"care":"Wash dark colours separately. Turn inside out before washing. Wash before use. Cold machine wash on a gentle cycle. Do not soak or rub. Reduce spin and remove promptly after cycle has finished. Do not bleach. Line dry in shade or tumble dry on low setting. Low iron if desired. Dry cleanable."},
  {"id":"bl049","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"White Mulberry Silk Plain Pillowcase","cat":"Bedroom","room":"Bedroom","price":156,"memberPrice":140,"sku":"SH-11436","tag":"New","ph":"","img":"assets/products/bl049.webp","imgs":["assets/products/bl049.webp","assets/products/bl049-2.webp","assets/products/bl049-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Drift into a deep and more luxurious sleep with our Mulberry Silk Plain Pillowcase. Crafted from smooth Mulberry silk, this premium pillowcase feels beautifully soft against skin and hair, helping reduce friction while you rest. Naturally breathable and gentle, it offers year-round comfort while adding a refined finish to your bed linen. Perfect for creating a calm, elevated sleep space, this silk pillowcase blends everyday comfort with indulgent style.","features":["Made from Mulberry Silk, making it gentle on your skin and hair.","Pillowcase size is a standard pillow (48 x 73 cm). Note: pack contains 1 x pillowcase.","The momme weight is 16 (68gsm)","With a soft, smooth surface silk reduces friction while you sleep, reducing sleep creases on your face and frizzy hair so you can preserve your hairstyle for longer.","Sleeping on silk helps to retain moisture in both your hair and skin for smoother skin, tangle free hair and better general hydration.","As a natural fibre, silk is breathable and temperature regulating to keep you comfortable all night long."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Mulberry Silk, making it gentle on your skin and hair.","Size":"Mulberry Silk Plain Pillowcase"},"care":"Wash dark colours separately. Turn inside out before washing. Wash before use. Cold machine wash on a gentle cycle. Do not soak or rub. Reduce spin and remove promptly after cycle has finished. Do not bleach. Line dry in shade or tumble dry on low setting. Low iron if desired. Dry cleanable."},
  {"id":"bl050","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Sand Mulberry Silk Plain Pillowcase","cat":"Bedroom","room":"Bedroom","price":156,"memberPrice":140,"sku":"SH-11437","tag":"New","ph":"","img":"assets/products/bl050.webp","imgs":["assets/products/bl050.webp","assets/products/bl050-2.webp","assets/products/bl050-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Drift into a deep and more luxurious sleep with our Mulberry Silk Plain Pillowcase. Crafted from smooth Mulberry silk, this premium pillowcase feels beautifully soft against skin and hair, helping reduce friction while you rest. Naturally breathable and gentle, it offers year-round comfort while adding a refined finish to your bed linen. Perfect for creating a calm, elevated sleep space, this silk pillowcase blends everyday comfort with indulgent style.","features":["Made from Mulberry Silk, making it gentle on your skin and hair.","Pillowcase size is a standard pillow (48 x 73 cm). Note: pack contains 1 x pillowcase.","The momme weight is 16 (68gsm)","With a soft, smooth surface silk reduces friction while you sleep, reducing sleep creases on your face and frizzy hair so you can preserve your hairstyle for longer.","Sleeping on silk helps to retain moisture in both your hair and skin for smoother skin, tangle free hair and better general hydration.","As a natural fibre, silk is breathable and temperature regulating to keep you comfortable all night long."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Mulberry Silk, making it gentle on your skin and hair.","Size":"Mulberry Silk Plain Pillowcase"},"care":"Wash dark colours separately. Turn inside out before washing. Wash before use. Cold machine wash on a gentle cycle. Do not soak or rub. Reduce spin and remove promptly after cycle has finished. Do not bleach. Line dry in shade or tumble dry on low setting. Low iron if desired. Dry cleanable."},
  {"id":"bl051","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Eucalyptus Mulberry Silk Plain Pillowcase","cat":"Bedroom","room":"Bedroom","price":156,"memberPrice":140,"sku":"SH-11438","tag":"New","ph":"","img":"assets/products/bl051.webp","imgs":["assets/products/bl051.webp","assets/products/bl051-2.webp","assets/products/bl051-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Drift into a deep and more luxurious sleep with our Mulberry Silk Plain Pillowcase. Crafted from smooth Mulberry silk, this premium pillowcase feels beautifully soft against skin and hair, helping reduce friction while you rest. Naturally breathable and gentle, it offers year-round comfort while adding a refined finish to your bed linen. Perfect for creating a calm, elevated sleep space, this silk pillowcase blends everyday comfort with indulgent style.","features":["Made from Mulberry Silk, making it gentle on your skin and hair.","Pillowcase size is a standard pillow (48 x 73 cm). Note: pack contains 1 x pillowcase.","The momme weight is 16 (68gsm)","With a soft, smooth surface silk reduces friction while you sleep, reducing sleep creases on your face and frizzy hair so you can preserve your hairstyle for longer.","Sleeping on silk helps to retain moisture in both your hair and skin for smoother skin, tangle free hair and better general hydration.","As a natural fibre, silk is breathable and temperature regulating to keep you comfortable all night long."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Mulberry Silk, making it gentle on your skin and hair.","Size":"Mulberry Silk Plain Pillowcase"},"care":"Wash dark colours separately. Turn inside out before washing. Wash before use. Cold machine wash on a gentle cycle. Do not soak or rub. Reduce spin and remove promptly after cycle has finished. Do not bleach. Line dry in shade or tumble dry on low setting. Low iron if desired. Dry cleanable."},
  {"id":"bl052","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Vintage Rose Mulberry Silk Plain Pillowcase","cat":"Bedroom","room":"Bedroom","price":156,"memberPrice":140,"sku":"SH-11439","tag":"New","ph":"","img":"assets/products/bl052.webp","imgs":["assets/products/bl052.webp","assets/products/bl052-2.webp","assets/products/bl052-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Drift into a deep and more luxurious sleep with our Mulberry Silk Plain Pillowcase. Crafted from smooth Mulberry silk, this premium pillowcase feels beautifully soft against skin and hair, helping reduce friction while you rest. Naturally breathable and gentle, it offers year-round comfort while adding a refined finish to your bed linen. Perfect for creating a calm, elevated sleep space, this silk pillowcase blends everyday comfort with indulgent style.","features":["Made from Mulberry Silk, making it gentle on your skin and hair.","Pillowcase size is a standard pillow (48 x 73 cm). Note: pack contains 1 x pillowcase.","The momme weight is 16 (68gsm)","With a soft, smooth surface silk reduces friction while you sleep, reducing sleep creases on your face and frizzy hair so you can preserve your hairstyle for longer.","Sleeping on silk helps to retain moisture in both your hair and skin for smoother skin, tangle free hair and better general hydration.","As a natural fibre, silk is breathable and temperature regulating to keep you comfortable all night long."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Mulberry Silk, making it gentle on your skin and hair.","Size":"Mulberry Silk Plain Pillowcase"},"care":"Wash dark colours separately. Turn inside out before washing. Wash before use. Cold machine wash on a gentle cycle. Do not soak or rub. Reduce spin and remove promptly after cycle has finished. Do not bleach. Line dry in shade or tumble dry on low setting. Low iron if desired. Dry cleanable."},
  {"id":"bl053","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Light Blue Mulberry Silk Plain Pillowcase","cat":"Bedroom","room":"Bedroom","price":156,"memberPrice":140,"sku":"SH-11440","tag":"New","ph":"","img":"assets/products/bl053.webp","imgs":["assets/products/bl053.webp","assets/products/bl053-2.webp","assets/products/bl053-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Drift into a deep and more luxurious sleep with our Mulberry Silk Plain Pillowcase. Crafted from smooth Mulberry silk, this premium pillowcase feels beautifully soft against skin and hair, helping reduce friction while you rest. Naturally breathable and gentle, it offers year-round comfort while adding a refined finish to your bed linen. Perfect for creating a calm, elevated sleep space, this silk pillowcase blends everyday comfort with indulgent style.","features":["Made from Mulberry Silk, making it gentle on your skin and hair.","Pillowcase size is a standard pillow (48 x 73 cm). Note: pack contains 1 x pillowcase.","The momme weight is 16 (68gsm)","With a soft, smooth surface silk reduces friction while you sleep, reducing sleep creases on your face and frizzy hair so you can preserve your hairstyle for longer.","Sleeping on silk helps to retain moisture in both your hair and skin for smoother skin, tangle free hair and better general hydration.","As a natural fibre, silk is breathable and temperature regulating to keep you comfortable all night long."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Mulberry Silk, making it gentle on your skin and hair.","Size":"Mulberry Silk Plain Pillowcase"},"care":"Wash dark colours separately. Turn inside out before washing. Wash before use. Cold machine wash on a gentle cycle. Do not soak or rub. Reduce spin and remove promptly after cycle has finished. Do not bleach. Line dry in shade or tumble dry on low setting. Low iron if desired. Dry cleanable."},
  {"id":"bl054","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Navy Mulberry Silk Plain Pillowcase","cat":"Bedroom","room":"Bedroom","price":156,"memberPrice":140,"sku":"SH-11441","tag":"New","ph":"","img":"assets/products/bl054.webp","imgs":["assets/products/bl054.webp","assets/products/bl054-2.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Mulberry Silk Plain Pillowcase","price":156,"memberPrice":140},{"label":"Standard","price":156,"memberPrice":140}],"desc":"Drift into a deep and more luxurious sleep with our Mulberry Silk Plain Pillowcase. Crafted from smooth Mulberry silk, this premium pillowcase feels beautifully soft against skin and hair, helping reduce friction while you rest. Naturally breathable and gentle, it offers year-round comfort while adding a refined finish to your bed linen. Perfect for creating a calm, elevated sleep space, this silk pillowcase blends everyday comfort with indulgent style.","features":["Made from Mulberry Silk, making it gentle on your skin and hair.","Pillowcase size is a standard pillow (48 x 73 cm). Note: pack contains 1 x pillowcase.","The momme weight is 16 (68gsm)","With a soft, smooth surface silk reduces friction while you sleep, reducing sleep creases on your face and frizzy hair so you can preserve your hairstyle for longer.","Sleeping on silk helps to retain moisture in both your hair and skin for smoother skin, tangle free hair and better general hydration.","As a natural fibre, silk is breathable and temperature regulating to keep you comfortable all night long."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Mulberry Silk, making it gentle on your skin and hair."},"care":"Wash dark colours separately. Turn inside out before washing. Wash before use. Cold machine wash on a gentle cycle. Do not soak or rub. Reduce spin and remove promptly after cycle has finished. Do not bleach. Line dry in shade or tumble dry on low setting. Low iron if desired. Dry cleanable."},
  {"id":"bl055","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Dream Pillowcase","cat":"Bedroom","room":"Bedroom","price":95,"memberPrice":86,"sku":"SH-11442","tag":"New","ph":"","img":"assets/products/bl055.webp","imgs":["assets/products/bl055.webp","assets/products/bl055-2.webp","assets/products/bl055-3.webp","assets/products/bl055-4.webp","assets/products/bl055-5.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Light Pink","hex":"#f0d0d1"}],"desc":"Create a bedroom filled with festive wonder with the Christmas Dream Pillowcase. Crafted from soft cotton for breathable comfort, this enchanting design features a beautiful Christmas trees and pink bows print, bringing a touch of elegance to your seasonal styling. Perfect for adding a magical finishing touch to children's bedding or guest bedroom, it helps transform everyday spaces into a cosy Christmas retreat.","features":["Made from cotton","1 x Standard pillowcase 48x73cm","Sold individually"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from cotton","Made in":"Bangladesh","Size":"Standard"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl056","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Vintage Rose Mulberry Silk Eye Mask","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11443","tag":"New","ph":"","img":"assets/products/bl056.webp","imgs":["assets/products/bl056.webp","assets/products/bl056-2.webp","assets/products/bl056-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Sink into a more restful sleep with our Mulberry Silk Eye Mask, crafted from smooth Mulberry silk, this beautifully soft eye mask feels gentle against delicate skin while helping block out light for a more peaceful sleep environment. Naturally breathable and hypoallergenic, it offers a soothing feel that supports uninterrupted beauty rest and overnight comfort. Perfect for bedtime, travel or moments of relaxation, this silk eye mask helps you wake feeling refreshed, restored and ready for the day.","features":["Made from Mulberry Silk.","Comfortable elastic band means one size fits most.","Blocks out light to make the most of your sleep, whether it be a quick nap or a deep sleep."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Mulberry Silk.","Size":"One Size"},"care":"Wash dark colours separately. Wash before use. Cold hand wash. Do not soak or rub. Do not bleach. Line dry in shade. Low iron if desired. Dry cleanable."},
  {"id":"bl057","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400TC Bamboo Cotton Silver King Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":112,"memberPrice":101,"sku":"SH-11444","tag":"New","ph":"","img":"assets/products/bl057.webp","imgs":["assets/products/bl057.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Bamboo and cotton blend together in harmony to create our most luxuriously soft pillowcase. This blend of natural, moisture-wicking and temperature regulating fibres ensures our Bamboo Cotton 400 Thread Count Pillowcase is perfect for year-round comfort.","features":["Bamboo Cotton","54 x 93cm","Includes 2 King pillowcases","Natural and breathable fibre","Moisture-wicking"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Bamboo Cotton","Size":"King"},"care":"Wash dark colours separately. Cold machine wash separately before first use. Do not bleach, soak, wring or rub. May be tumble dried low. Warm iron if desired. Do not dry clean."},
  {"id":"bl058","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Coastal Australian Pillowcase","cat":"Bedroom","room":"Bedroom","price":95,"memberPrice":86,"sku":"SH-11445","tag":"New","ph":"","img":"assets/products/bl058.webp","imgs":["assets/products/bl058.webp","assets/products/bl058-2.webp","assets/products/bl058-3.webp","assets/products/bl058-4.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Green","hex":"#29714b"}],"desc":"Celebrate the magic of an Australian Christmas with the Coastal Australian Pillowcase. Crafted from soft cotton for breathable comfort, this festive pillowcase features playful holiday motifs inspired by a uniquely Australian summer, bringing a fresh and whimsical feel to the bedroom. Perfect for children's bedding or adding a light-hearted seasonal touch to any bedroom, it creates a cheerful space for festive dreaming.","features":["Made from 100% cotton","1 x Standard pillowcase 48x73cm","Sold individually"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from 100% cotton","Size":"Standard"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl059","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Navy Mulberry Silk Eye Mask","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11446","tag":"New","ph":"","img":"assets/products/bl059.webp","imgs":["assets/products/bl059.webp","assets/products/bl059-2.webp","assets/products/bl059-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Sink into a more restful sleep with our Mulberry Silk Eye Mask, crafted from smooth Mulberry silk, this beautifully soft eye mask feels gentle against delicate skin while helping block out light for a more peaceful sleep environment. Naturally breathable and hypoallergenic, it offers a soothing feel that supports uninterrupted beauty rest and overnight comfort. Perfect for bedtime, travel or moments of relaxation, this silk eye mask helps you wake feeling refreshed, restored and ready for the day.","features":["Made from Mulberry Silk.","Comfortable elastic band means one size fits most.","Blocks out light to make the most of your sleep, whether it be a quick nap or a deep sleep."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Mulberry Silk.","Size":"One Size"},"care":"Wash dark colours separately. Wash before use. Cold hand wash. Do not soak or rub. Do not bleach. Line dry in shade. Low iron if desired. Dry cleanable."},
  {"id":"bl060","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Stonewash Cotton Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":95,"memberPrice":86,"sku":"SH-11447","tag":"New","ph":"","img":"assets/products/bl060.webp","imgs":["assets/products/bl060.webp","assets/products/bl060-2.webp","assets/products/bl060-3.webp","assets/products/bl060-4.webp","assets/products/bl060-5.webp","assets/products/bl060-6.webp","assets/products/bl060-7.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Blue Haze","hex":"#d2e1e4"},{"name":"Blue Shadow","hex":"#4b75a5"},{"name":"Copper Clay","hex":"#a03d20"},{"name":"Pearl Blush","hex":"#fbf4ee"},{"name":"Rose Haze","hex":"#cf888e"},{"name":"Warm Latte","hex":"#b4a391"}],"desc":"Bring soft comfort and beautifully lived-in texture to your bed with the Stonewash Cotton Pillowcase Pair. Made from stonewashed cotton and finished with cord-piped edging for a neat, tailored look.","features":["Made from 100% Stonewashed Cotton","2 x pillowcases 48 x 73cm","Natural and breathable fibre"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from 100% Stonewashed Cotton","Made in":"Pakistan","Size":"Standard"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well.Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl061","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Chocolate Pink Polka Dot Silk Beauty Sleep Gift Box","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11448","tag":"New","ph":"","img":"assets/products/bl061.webp","imgs":["assets/products/bl061.webp","assets/products/bl061-2.webp","assets/products/bl061-3.webp","assets/products/bl061-4.webp","assets/products/bl061-5.webp","assets/products/bl061-6.webp","assets/products/bl061-7.webp","assets/products/bl061-8.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Give the gift of luxurious beauty sleep with the Chocolate Pink Polka Dot Beauty Sleep Gift Box. Featuring a mulberry silk pillowcase, matching eye mask and two scrunchies, this beautiful gift set showcases a playful chocolate brown and pink polka dot design. Naturally smooth and gentle on skin and hair, mulberry silk helps reduce friction to minimise hair breakage, frizz and sleep creases, making this the perfect gift for a little extra bedtime indulgence.","features":["Made from luxurious 16 momme mulberry silk for a soft, smooth feel against skin and hair.","Gift pack includes 1x standard pillowcase (48 x 73 cm), 1x sleep eye mask and 2x scrunchies.","Features an on-trend polka dot design with a pink binding for a stylish finish.","Beautifully presented in a matching gift box, perfect for gifting or treating yourself.","Silk helps reduce friction to minimise hair breakage, frizz and sleep creases."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from luxurious 16 momme mulberry silk for a soft, smooth feel against skin and hair.","Size":"Standard"},"care":"Wash dark colours separately.Turn inside out before washing. Wash before use. Cold machine wash on a gentle cycle. Do not soak or rub. Reduce spin and remove promptly after cycle has finished. Do not bleach. Line dry in shade or tumble dry on low setting. Low iron if desired. Dry cleanable."},
  {"id":"bl062","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Nutcracker Dream Pillowcase","cat":"Bedroom","room":"Bedroom","price":95,"memberPrice":86,"sku":"SH-11449","tag":"New","ph":"","img":"assets/products/bl062.webp","imgs":["assets/products/bl062.webp","assets/products/bl062-2.webp","assets/products/bl062-3.webp","assets/products/bl062-4.webp","assets/products/bl062-5.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Blue Stripe","hex":"#f0f5f8"}],"desc":"Bring a touch of festive whimsy to your bedroom with the Nutcracker Dream Pillowcase. The soft sateen weave offers a subtle sheen and luxurious hand feel, while the knife edge finish creates a clean and polished look. Perfect for adding a playful yet elegant accent to your bed.","features":["Made from 100% cotton sateen, with a knife edge finish","1 x Standard pillowcase 48x73cm","Whimsical nutcracker-inspired artwork","Sold individually"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from 100% cotton sateen, with a knife edge finish","Size":"Standard"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl063","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Leopard Silk Beauty Sleep Gift Box","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11450","tag":"New","ph":"","img":"assets/products/bl063.webp","imgs":["assets/products/bl063.webp","assets/products/bl063-2.webp","assets/products/bl063-3.webp","assets/products/bl063-4.webp","assets/products/bl063-5.webp","assets/products/bl063-6.webp","assets/products/bl063-7.webp","assets/products/bl063-8.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Give the gift of luxurious beauty sleep with the Leopard Silk Beauty Sleep Gift Box. Featuring a mulberry silk pillowcase, matching eye mask and two scrunchies, this beautiful gift set showcases a playful leopard print finished with delicate blue binding. Naturally smooth and gentle on skin and hair, mulberry silk helps reduce friction to minimise hair breakage, frizz and sleep creases, making this the perfect gift for a little extra bedtime indulgence.","features":["Made from luxurious 16 momme mulberry silk for a soft, smooth feel against skin and hair.","Gift pack includes 1x standard pillowcase (48 x 73 cm), 1x sleep eye mask and 2x scrunchies","Features a playful leopard print with delicate blue binding for a stylish finish.","Beautifully presented in a matching gift box, perfect for gifting or treating yourself.","Silk helps reduce friction to minimise hair breakage, frizz and sleep creases."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from luxurious 16 momme mulberry silk for a soft, smooth feel against skin and hair.","Size":"Standard"},"care":"Wash dark colours separately.Turn inside out before washing. Wash before use. Cold machine wash on a gentle cycle. Do not soak or rub. Reduce spin and remove promptly after cycle has finished. Do not bleach. Line dry in shade or tumble dry on low setting. Low iron if desired. Dry cleanable."},
  {"id":"bl064","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Mocha Brown Mulberry Silk Eye Mask","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11451","tag":"New","ph":"","img":"assets/products/bl064.webp","imgs":["assets/products/bl064.webp","assets/products/bl064-2.webp","assets/products/bl064-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Sink into a more restful sleep with our Mulberry Silk Eye Mask, crafted from smooth Mulberry silk, this beautifully soft eye mask feels gentle against delicate skin while helping block out light for a more peaceful sleep environment. Naturally breathable and hypoallergenic, it offers a soothing feel that supports uninterrupted beauty rest and overnight comfort. Perfect for bedtime, travel or moments of relaxation, this silk eye mask helps you wake feeling refreshed, restored and ready for the day.","features":["Made from Mulberry Silk.","Comfortable elastic band means one size fits most.","Blocks out light to make the most of your sleep, whether it be a quick nap or a deep sleep."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Mulberry Silk.","Size":"One Size"},"care":"Wash dark colours separately. Wash before use. Cold hand wash. Do not soak or rub. Do not bleach. Line dry in shade. Low iron if desired. Dry cleanable."},
  {"id":"bl065","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Red & Pink Stripe Silk Beauty Sleep Gift Box","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11452","tag":"New","ph":"","img":"assets/products/bl065.webp","imgs":["assets/products/bl065.webp","assets/products/bl065-2.webp","assets/products/bl065-3.webp","assets/products/bl065-4.webp","assets/products/bl065-5.webp","assets/products/bl065-6.webp","assets/products/bl065-7.webp","assets/products/bl065-8.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Red/Pink Stripe","hex":"#f0f5f8"}],"desc":"Give the gift of luxurious beauty sleep with the Red & Pink Stripe Silk Beauty Sleep Gift Box. Featuring a mulberry silk pillowcase, matching eye mask and two scrunchies, this beautiful gift set showcases a playful red and pink stripe design. Naturally smooth and gentle on skin and hair, mulberry silk helps reduce friction to minimise hair breakage, frizz and sleep creases, making this the perfect gift for a little extra bedtime indulgence.","features":["Made from luxurious 16 momme mulberry silk for a soft, smooth feel against skin and hair.","Gift pack includes 1x standard pillowcase (48 x 73 cm), 1x sleep eye mask and 2x scrunchies","Features a fun red and pink stripe print","Beautifully presented in a matching gift box, perfect for gifting or treating yourself.","Silk helps reduce friction to minimise hair breakage, frizz and sleep creases."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from luxurious 16 momme mulberry silk for a soft, smooth feel against skin and hair.","Size":"Standard"},"care":"Wash dark colours separately.Turn inside out before washing. Wash before use. Cold machine wash on a gentle cycle. Do not soak or rub. Reduce spin and remove promptly after cycle has finished. Do not bleach. Line dry in shade or tumble dry on low setting. Low iron if desired. Dry cleanable."},
  {"id":"bl066","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Eucalyptus Mulberry Silk Eye Mask","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11453","tag":"New","ph":"","img":"assets/products/bl066.webp","imgs":["assets/products/bl066.webp","assets/products/bl066-2.webp","assets/products/bl066-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Sink into a more restful sleep with our Mulberry Silk Eye Mask, crafted from smooth Mulberry silk, this beautifully soft eye mask feels gentle against delicate skin while helping block out light for a more peaceful sleep environment. Naturally breathable and hypoallergenic, it offers a soothing feel that supports uninterrupted beauty rest and overnight comfort. Perfect for bedtime, travel or moments of relaxation, this silk eye mask helps you wake feeling refreshed, restored and ready for the day.","features":["Made from Mulberry Silk.","Comfortable elastic band means one size fits most.","Blocks out light to make the most of your sleep, whether it be a quick nap or a deep sleep."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Mulberry Silk.","Size":"One Size"},"care":"Wash dark colours separately. Wash before use. Cold hand wash. Do not soak or rub. Do not bleach. Line dry in shade. Low iron if desired. Dry cleanable."},
  {"id":"bl067","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Light Blue Mulberry Silk Eye Mask","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11454","tag":"New","ph":"","img":"assets/products/bl067.webp","imgs":["assets/products/bl067.webp","assets/products/bl067-2.webp","assets/products/bl067-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Sink into a more restful sleep with our Mulberry Silk Eye Mask, crafted from smooth Mulberry silk, this beautifully soft eye mask feels gentle against delicate skin while helping block out light for a more peaceful sleep environment. Naturally breathable and hypoallergenic, it offers a soothing feel that supports uninterrupted beauty rest and overnight comfort. Perfect for bedtime, travel or moments of relaxation, this silk eye mask helps you wake feeling refreshed, restored and ready for the day.","features":["Made from Mulberry Silk.","Comfortable elastic band means one size fits most.","Blocks out light to make the most of your sleep, whether it be a quick nap or a deep sleep."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Mulberry Silk.","Size":"One Size"},"care":"Wash dark colours separately. Wash before use. Cold hand wash. Do not soak or rub. Do not bleach. Line dry in shade. Low iron if desired. Dry cleanable."},
  {"id":"bl068","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Letter to Santa Pillowcase","cat":"Bedroom","room":"Bedroom","price":95,"memberPrice":86,"sku":"SH-11455","tag":"New","ph":"","img":"assets/products/bl068.webp","imgs":["assets/products/bl068.webp","assets/products/bl068-2.webp","assets/products/bl068-3.webp","assets/products/bl068-4.webp","assets/products/bl068-5.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#ffffff"}],"desc":"Bring a touch of festive magic to bedtime with the Letter to Santa Pillowcase. Crafted from soft cotton for breathable comfort, this charming pillowcase features a whimsical handwritten letter design addressed to Santa at the North Pole. A delightful addition to your Christmas bedding collection, it's sure to make the countdown to Christmas even more exciting.","features":["Made from 100% Cotton","1 x Standard pillowcase 48x73cm","Sold Individually"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from 100% Cotton","Size":"Standard"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl069","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Sand Mulberry Silk Eye Mask","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11456","tag":"New","ph":"","img":"assets/products/bl069.webp","imgs":["assets/products/bl069.webp","assets/products/bl069-2.webp","assets/products/bl069-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Sink into a more restful sleep with our Mulberry Silk Eye Mask, crafted from smooth Mulberry silk, this beautifully soft eye mask feels gentle against delicate skin while helping block out light for a more peaceful sleep environment. Naturally breathable and hypoallergenic, it offers a soothing feel that supports uninterrupted beauty rest and overnight comfort. Perfect for bedtime, travel or moments of relaxation, this silk eye mask helps you wake feeling refreshed, restored and ready for the day.","features":["Made from Mulberry Silk.","Comfortable elastic band means one size fits most.","Blocks out light to make the most of your sleep, whether it be a quick nap or a deep sleep."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Mulberry Silk.","Size":"One Size"},"care":"Wash dark colours separately. Wash before use. Cold hand wash. Do not soak or rub. Do not bleach. Line dry in shade. Low iron if desired. Dry cleanable."},
  {"id":"bl070","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Mulberry Silk Audrey Spot Deeper Sleep Eye Mask","cat":"Bedroom","room":"Bedroom","price":112,"memberPrice":101,"sku":"SH-11457","tag":"New","ph":"","img":"assets/products/bl070.webp","imgs":["assets/products/bl070.webp","assets/products/bl070-2.webp","assets/products/bl070-3.webp","assets/products/bl070-4.webp","assets/products/bl070-5.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Make slowing down feel beautifully considered with the Mulberry Silk Audrey Spot Deeper Sleep Eye Mask. Made entirely from 100% mulberry silk, including the padding, it combines a soft feel with a deeper shape for generous coverage around the eyes. The hook and loop fastening allows you to adjust the fit, while the delicate design brings understated style to your evening ritual.","features":["Made from 100% Mulberry Silk including the padding","Measurements: 24cm L x 10cm W"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from 100% Mulberry Silk including the padding","Made in":"China","Size":"One Size"},"care":"Wash dark colours separately. Wash before use. Cold hand wash. Do not soak or rub. Do not bleach. Line dry in shade. Low iron if desired. Dry cleanable."},
  {"id":"bl071","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Mulberry Silk Polly Check Deeper Sleep Eye Mask","cat":"Bedroom","room":"Bedroom","price":112,"memberPrice":101,"sku":"SH-11458","tag":"New","ph":"","img":"assets/products/bl071.webp","imgs":["assets/products/bl071.webp","assets/products/bl071-2.webp","assets/products/bl071-3.webp","assets/products/bl071-4.webp","assets/products/bl071-5.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Make slowing down feel beautifully considered with the Mulberry Silk Polly Check Deeper Sleep Eye Mask. Made entirely from 100% mulberry silk, including the padding, it combines a soft feel with a deeper shape for generous coverage around the eyes. The hook and loop fastening allows you to adjust the fit, while the delicate design brings understated style to your evening ritual.","features":["Made from 100% Mulberry Silk including the padding","Measurements: 24cm L x 10cm W"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from 100% Mulberry Silk including the padding","Made in":"China","Size":"One Size"}},
  {"id":"bl072","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"White Mulberry Silk Eye Mask","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11459","tag":"New","ph":"","img":"assets/products/bl072.webp","imgs":["assets/products/bl072.webp","assets/products/bl072-2.webp","assets/products/bl072-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Sink into a more restful sleep with our Mulberry Silk Eye Mask, crafted from smooth Mulberry silk, this beautifully soft eye mask feels gentle against delicate skin while helping block out light for a more peaceful sleep environment. Naturally breathable and hypoallergenic, it offers a soothing feel that supports uninterrupted beauty rest and overnight comfort. Perfect for bedtime, travel or moments of relaxation, this silk eye mask helps you wake feeling refreshed, restored and ready for the day.","features":["Made from Mulberry Silk.","Comfortable elastic band means one size fits most.","Blocks out light to make the most of your sleep, whether it be a quick nap or a deep sleep."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from Mulberry Silk.","Size":"One Size"},"care":"Wash dark colours separately. Wash before use. Cold hand wash. Do not soak or rub. Do not bleach. Line dry in shade. Low iron if desired. Dry cleanable."},
  {"id":"bl073","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Maisie Check Sage Green European Pillowcase","cat":"Bedroom","room":"Bedroom","price":95,"memberPrice":86,"sku":"SH-11460","tag":"New","ph":"","img":"assets/products/bl073.webp","imgs":["assets/products/bl073.webp","assets/products/bl073-2.webp","assets/products/bl073-3.webp","assets/products/bl073-4.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Create a cosy, relaxed vibe in your bedroom styling with the Maisie Check European Pillowcase. Made from a double layer cotton gauze, this Euro pillowcase features a charming check design with a striped reverse. Whether you’re going for a modern or timeless aesthetic, this reversible European pillowcase brings both texture and elegance to your bedroom with effortless style.","features":["Made from double layer cotton gauze with a knife edge finish.","1x European pillowcase 65cm x 65cm","Stunning check design with stripe reverse for versatile styling","This European pillowcase is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from double layer cotton gauze with a knife edge finish.","Size":"European"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Do not iron. Do not dry clean."},
  {"id":"bl074","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400TC Bamboo Cotton Soft Fern Standard Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11461","tag":"New","ph":"","img":"assets/products/bl074.webp","imgs":["assets/products/bl074.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Bamboo and cotton blend together in harmony to create our most luxuriously soft pillowcase. This blend of natural, moisture-wicking and temperature regulating fibres ensures our Bamboo Cotton 400 Thread Count Pillowcase is perfect for year-round comfort.","features":["Made from 400 thread count 60% Bamboo, 40% Cotton blend","2 x Standard pillowcases 48cm W x 73cm L","Natural fibre, moisture wicking, lightweight, breathable, great for sensitive skin and durable."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from 400 thread count 60% Bamboo, 40% Cotton blend","Made in":"China","Size":"Standard"},"care":"Wash dark colours separately. Warm machine wash before first use. Do not bleach. Rinse well. May be tumble dried warm. Warm iron if desired. Do not dry clean."},
  {"id":"bl075","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400TC Bamboo Cotton Silver Standard Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11462","tag":"New","ph":"","img":"assets/products/bl075.webp","imgs":["assets/products/bl075.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Bamboo and cotton blend together in harmony to create our most luxuriously soft pillowcase. This blend of natural, moisture-wicking and temperature regulating fibres ensures our 400TC Bamboo Cotton Silver Standard Pillowcase Pair is perfect for year-round comfort.","features":["Made from 400 thread count 60% Bamboo, 40% Cotton blend","2 x Standard pillowcases 48cm W x 73cm L","Natural fibre, moisture wicking, lightweight, breathable, great for sensitive skin and durable."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from 400 thread count 60% Bamboo, 40% Cotton blend","Size":"Standard"},"care":"Wash dark colours separately. Warm machine wash before first use. Do not bleach. Rinse well. May be tumble dried warm. Warm iron if desired. Do not dry clean."},
  {"id":"bl076","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400TC Bamboo Cotton Sand Stripe Standard Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11463","tag":"New","ph":"","img":"assets/products/bl076.webp","imgs":["assets/products/bl076.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Bamboo and cotton blend together in harmony to create our most luxuriously soft pillowcase. This blend of natural, moisture-wicking and temperature regulating fibres ensures our Bamboo Cotton 400 Thread Count Pillowcase is perfect for year-round comfort.","features":["Made from 400 thread count 60% Bamboo, 40% Cotton blend","2 x Standard pillowcases 48cm W x 73cm L","Natural fibre, moisture wicking, lightweight, breathable, great for sensitive skin and durable."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from 400 thread count 60% Bamboo, 40% Cotton blend","Made in":"China","Size":"Standard"},"care":"Wash dark colours separately. Warm machine wash before first use. Do not bleach. Rinse well. May be tumble dried warm. Warm iron if desired. Do not dry clean."},
  {"id":"bl077","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"400TC Bamboo Cotton Charcoal Stripe Standard Pillowcase Pair","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11464","tag":"New","ph":"","img":"assets/products/bl077.webp","imgs":["assets/products/bl077.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Bamboo and cotton blend together in harmony to create our most luxuriously soft pillowcase. This blend of natural, moisture-wicking and temperature regulating fibres ensures our Bamboo Cotton 400 Thread Count Pillowcase is perfect for year-round comfort.","features":["Made from 400 thread count 60% Bamboo, 40% Cotton blend","2 x Standard pillowcases 48cm W x 73cm L","Natural fibre, moisture wicking, lightweight, breathable, great for sensitive skin and durable."],"specs":{"Type":"Bedroom > Bed Linen > Pillowcases","Material":"Made from 400 thread count 60% Bamboo, 40% Cotton blend","Made in":"China","Size":"Standard"},"care":"Wash dark colours separately. Warm machine wash before first use. Do not bleach. Rinse well. May be tumble dried warm. Warm iron if desired. Do not dry clean."},
  {"id":"bl078","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hadley Reversible Chocolate Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11465","tag":"New","ph":"","img":"assets/products/bl078.webp","imgs":["assets/products/bl078.webp","assets/products/bl078-2.webp","assets/products/bl078-3.webp","assets/products/bl078-4.webp","assets/products/bl078-5.webp","assets/products/bl078-6.webp","assets/products/bl078-7.webp","assets/products/bl078-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":367,"memberPrice":330},{"label":"King","price":367,"memberPrice":330},{"label":"Super King","price":367,"memberPrice":330}],"desc":"The Hadley Reversible Stripe Quilt Cover Set is an effortless way to elevate any bedroom, bringing timeless style and a sense of relaxed sophistication to your space. Crafted from soft, breathable cotton, it offers everyday comfort, while the reversible striped design pairs bold statement stripes on one side with a refined pinstripe pattern on the reverse for two versatile looks in one. It's perfect for creating a relaxed, layered bed you'll love coming home to.","features":["Made from 100% cotton","Available in Single, Double, Queen, King and Super King sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% cotton"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl079","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Look Olive Green Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11466","tag":"New","ph":"","img":"assets/products/bl079.webp","imgs":["assets/products/bl079.webp","assets/products/bl079-2.webp","assets/products/bl079-3.webp","assets/products/bl079-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":345,"memberPrice":310},{"label":"Double","price":423,"memberPrice":381},{"label":"Queen","price":423,"memberPrice":381},{"label":"King","price":423,"memberPrice":381},{"label":"Super King","price":423,"memberPrice":381}],"desc":"Bring a touch of earthy elegance to your bedroom with our Washed Linen Look Olive Green Quilt Cover Set. Crafted from breathable cotton with a relaxed linen-look finish, this quilt cover set offers the timeless appeal of linen with the comfort of cotton. Featuring a subtle self-flange edge for a beautifully tailored finish, its calming olive green hue is perfect for creating a warm and inviting bedroom retreat.","features":["Made from cotton with a relaxed linen-look finish","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from cotton with a relaxed linen-look finish","Made in":"China"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl080","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Harvey Hot Chocolate Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11467","tag":"New","ph":"","img":"assets/products/bl080.webp","imgs":["assets/products/bl080.webp","assets/products/bl080-2.webp","assets/products/bl080-3.webp","assets/products/bl080-4.webp","assets/products/bl080-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"desc":"Bring an easy sense of warmth and pattern to your bedroom with the Harvey Stripe Quilt Cover Set. Made from cotton, this inviting design features clean chocolate brown stripes that add gentle structure and relaxed character to the room.","features":["Made from 100% cotton","Available in Queen, King and Super King sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% cotton","Made in":"China"},"dimensions":"Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl081","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Harriet Sage Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11468","tag":"New","ph":"","img":"assets/products/bl081.webp","imgs":["assets/products/bl081.webp","assets/products/bl081-2.webp","assets/products/bl081-3.webp","assets/products/bl081-4.webp","assets/products/bl081-5.webp","assets/products/bl081-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"desc":"Bring relaxed pattern and calming colour to your bedroom with the Harriet Stripe Quilt Cover Set. Made from cotton, its fine sage green stripe and delicate ruching adds gentle definition while keeping the overall look soft and inviting. Easy to layer with warm neutrals and natural textures, it creates a restful foundation for a beautifully considered bedroom.","features":["Made from cotton.","Available in Double, Queen, King and Super King Sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from cotton.","Made in":"China"},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl082","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Look Natural Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11469","tag":"New","ph":"","img":"assets/products/bl082.webp","imgs":["assets/products/bl082.webp","assets/products/bl082-2.webp","assets/products/bl082-3.webp","assets/products/bl082-4.webp","assets/products/bl082-5.webp","assets/products/bl082-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":389,"memberPrice":350},{"label":"King","price":423,"memberPrice":381},{"label":"Super King","price":423,"memberPrice":381}],"desc":"The comfort of easy care, breathable cotton with the trending look of luxurious linen, our Washed Linen Look quilt cover is sure to impress. Available in a variety of classic and new season colours, the relaxed style of this cotton doona cover features a 2cm self flange finish and is perfectly paired with natural textures and organic touches.","features":["Made from cotton with washed linen finish. Features a 2cm self flange.","Available in Single, Double, Queen, King and Super King sizes.","Button closure","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from cotton with washed linen finish. Features a 2cm self flange."},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm (Single size available in selected colours) | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm (Double size available in selected colours) | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm (All colours) | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm (All colours) | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm each (All colours)","care":"Cold machine wash on gentle cycle before first use. Wash dark colours separately. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Cool iron if desired. Do not dry clean."},
  {"id":"bl083","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Adria Reversible Blue Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":312,"memberPrice":281,"sku":"SH-11470","tag":"New","ph":"","img":"assets/products/bl083.webp","imgs":["assets/products/bl083.webp","assets/products/bl083-2.webp","assets/products/bl083-3.webp","assets/products/bl083-4.webp","assets/products/bl083-5.webp","assets/products/bl083-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":312,"memberPrice":281},{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":389,"memberPrice":350},{"label":"King","price":389,"memberPrice":350},{"label":"Super King","price":389,"memberPrice":350}],"desc":"Create a calming oasis in your bedroom with the Adria Reversible Stripe Quilt Cover Set, with a gorgeous textured look background and reversible vertical stripe design for versatile styling. Complete your bedding ensemble with the Adria Reversible European Pillowcase.","features":["Made from 100% Cotton.","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% Cotton."},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl084","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Milah Chocolate Brown Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11471","tag":"New","ph":"","img":"assets/products/bl084.webp","imgs":["assets/products/bl084.webp","assets/products/bl084-2.webp","assets/products/bl084-3.webp","assets/products/bl084-4.webp","assets/products/bl084-5.webp","assets/products/bl084-6.webp","assets/products/bl084-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"Double","price":467,"memberPrice":420},{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"desc":"Effortlessly create a stunningly stylish look with the Milah Chocolate Brown Stripe Quilt Cover Set. This cotton quilt cover set features a yarn-dyed wide stripe design in trending colours, blending contemporary style with breathable fabric for a comfortable night's sleep.","features":["Made from garment washed yarn-dyed cotton with a knife edge finish","Available in Single, Double, Queen, King and Super King quilt cover sizes","Button closure","Quilt cover feaures corner ties to secure your quilt","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from garment washed yarn-dyed cotton with a knife edge finish","Made in":"China"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl085","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Adria Reversible Green Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":312,"memberPrice":281,"sku":"SH-11472","tag":"New","ph":"","img":"assets/products/bl085.webp","imgs":["assets/products/bl085.webp","assets/products/bl085-2.webp","assets/products/bl085-3.webp","assets/products/bl085-4.webp","assets/products/bl085-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":312,"memberPrice":281},{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":389,"memberPrice":350},{"label":"King","price":389,"memberPrice":350},{"label":"Super King","price":389,"memberPrice":350}],"desc":"Create a calming oasis in your bedroom with the Adria Reversible Stripe Quilt Cover Set, with a gorgeous textured look background and reversible vertical stripe design for versatile styling. Complete your bedding ensemble with the Adria Reversible European Pillowcase.","features":["Made from 100% Cotton.","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% Cotton."},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl086","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Look White Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11473","tag":"New","ph":"","img":"assets/products/bl086.webp","imgs":["assets/products/bl086.webp","assets/products/bl086-2.webp","assets/products/bl086-3.webp","assets/products/bl086-4.webp","assets/products/bl086-5.webp","assets/products/bl086-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":345,"memberPrice":310},{"label":"Double","price":423,"memberPrice":381},{"label":"Queen","price":423,"memberPrice":381},{"label":"King","price":423,"memberPrice":381},{"label":"Super King","price":423,"memberPrice":381}],"desc":"The comfort of easy care, breathable cotton with the trending look of luxurious linen, our Washed Linen Look quilt cover is sure to impress. Available in a variety of classic and new season colours, the relaxed style of this cotton doona cover features a 2cm self flange finish and is perfectly paired with natural textures and organic touches.","features":["Made from cotton with washed linen finish. Features a 2cm self flange.","Available in Single, Double, Queen, King and Super King sizes.","Button closure","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from cotton with washed linen finish. Features a 2cm self flange."},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm (Single size available in selected colours) | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm (Double size available in selected colours) | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm (All colours) | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm (All colours) | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm each (All colours)","care":"Cold machine wash on gentle cycle before first use. Wash dark colours separately. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Cool iron if desired. Do not dry clean."},
  {"id":"bl087","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Look Navy Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11474","tag":"New","ph":"","img":"assets/products/bl087.webp","imgs":["assets/products/bl087.webp","assets/products/bl087-2.webp","assets/products/bl087-3.webp","assets/products/bl087-4.webp","assets/products/bl087-5.webp","assets/products/bl087-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":345,"memberPrice":310},{"label":"Double","price":423,"memberPrice":381},{"label":"Queen","price":423,"memberPrice":381},{"label":"King","price":423,"memberPrice":381},{"label":"Super King","price":423,"memberPrice":381}],"desc":"The comfort of easy care, breathable cotton with the trending look of luxurious linen, our Washed Linen Look quilt cover is sure to impress. Available in a variety of classic and new season colours, the relaxed style of this cotton doona cover features a 2cm self flange finish and is perfectly paired with natural textures and organic touches.","features":["Made from cotton with washed linen finish. Features a 2cm self flange.","Available in Single, Double, Queen, King and Super King sizes.","Button closure","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from cotton with washed linen finish. Features a 2cm self flange."},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm (Single size available in selected colours) | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm (Double size available in selected colours) | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm (All colours) | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm (All colours) | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm each (All colours)","care":"Cold machine wash on gentle cycle before first use. Wash dark colours separately. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Cool iron if desired. Do not dry clean."},
  {"id":"bl088","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Milah Green Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11475","tag":"New","ph":"","img":"assets/products/bl088.webp","imgs":["assets/products/bl088.webp","assets/products/bl088-2.webp","assets/products/bl088-3.webp","assets/products/bl088-4.webp","assets/products/bl088-5.webp","assets/products/bl088-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":389,"memberPrice":350},{"label":"Double","price":467,"memberPrice":420},{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"desc":"Effortlessly create a stunningly stylish look with the Milah Green Stripe Quilt Cover Set. This cotton quilt cover set features a yarn-dyed wide stripe design in trending colours, blending contemporary style with breathable fabric for a comfortable night's sleep.","features":["Made from garment washed yarn-dyed cotton with a knife edge finish","Available in Single, Double, Queen, King and Super King quilt cover sizes","Button closure","Quilt cover feaures corner ties to secure your quilt","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from garment washed yarn-dyed cotton with a knife edge finish","Made in":"China"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl089","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Solace Chocolate Contrast Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11476","tag":"New","ph":"","img":"assets/products/bl089.webp","imgs":["assets/products/bl089.webp","assets/products/bl089-2.webp","assets/products/bl089-3.webp","assets/products/bl089-4.webp","assets/products/bl089-5.webp","assets/products/bl089-6.webp","assets/products/bl089-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":456,"memberPrice":410},{"label":"King","price":456,"memberPrice":410},{"label":"Super King","price":456,"memberPrice":410}],"desc":"Create a warm and welcoming bedroom with the Solace Contrast Quilt Cover Set. Crafted from breathable cotton, this reversible quilt cover set features contrast trim detailing and a versatile tonal palette, offering two complementary looks in one. Soft, comfortable and easy to style, it makes it effortless to refresh your space with relaxed sophistication. Complete the look by pairing it with the matching Solace Contrast European Pillowcase for a beautifully coordinated finish.","features":["Made from 100% washed cotton","Available in Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% washed cotton"},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl090","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Look Sage Green Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11477","tag":"New","ph":"","img":"assets/products/bl090.webp","imgs":["assets/products/bl090.webp","assets/products/bl090-2.webp","assets/products/bl090-3.webp","assets/products/bl090-4.webp","assets/products/bl090-5.webp","assets/products/bl090-6.webp","assets/products/bl090-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":423,"memberPrice":381},{"label":"King","price":423,"memberPrice":381},{"label":"Super King","price":423,"memberPrice":381}],"desc":"The comfort of easy care, breathable cotton with the trending look of luxurious linen, our Washed Linen Look quilt cover is sure to impress. Available in a variety of classic and new season colours, the relaxed style of this cotton doona cover features a 2cm self flange finish and is perfectly paired with natural textures and organic touches.","features":["Made from cotton with washed linen finish. Features a 2cm self flange.","Available in Single, Double, Queen, King and Super King sizes.","Button closure","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from cotton with washed linen finish. Features a 2cm self flange."},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm (Single size available in selected colours) | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm (Double size available in selected colours) | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm (All colours) | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm (All colours) | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm each (All colours)","care":"Cold machine wash on gentle cycle before first use. Wash dark colours separately. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Cool iron if desired. Do not dry clean."},
  {"id":"bl091","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Adria Reversible Natural Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11478","tag":"New","ph":"","img":"assets/products/bl091.webp","imgs":["assets/products/bl091.webp","assets/products/bl091-2.webp","assets/products/bl091-3.webp","assets/products/bl091-4.webp","assets/products/bl091-5.webp","assets/products/bl091-6.webp","assets/products/bl091-7.webp","assets/products/bl091-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":334,"memberPrice":301},{"label":"Queen","price":389,"memberPrice":350},{"label":"King","price":389,"memberPrice":350},{"label":"Super King","price":389,"memberPrice":350}],"desc":"Create a calming oasis in your bedroom with the Adria Reversible Stripe Quilt Cover Set, with a gorgeous textured look background and reversible vertical stripe design for versatile styling. Complete your bedding ensemble with the Adria Reversible European Pillowcase.","features":["Made from 100% Cotton.","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% Cotton."},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl092","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Look Light Blue Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11479","tag":"New","ph":"","img":"assets/products/bl092.webp","imgs":["assets/products/bl092.webp","assets/products/bl092-2.webp","assets/products/bl092-3.webp","assets/products/bl092-4.webp","assets/products/bl092-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":345,"memberPrice":310},{"label":"Double","price":378,"memberPrice":340},{"label":"Queen","price":378,"memberPrice":340},{"label":"King","price":378,"memberPrice":340},{"label":"Super King","price":378,"memberPrice":340}],"desc":"The comfort of easy care, breathable cotton with the trending look of luxurious linen, our Washed Linen Look quilt cover is sure to impress. Available in a variety of classic and new season colours, the relaxed style of this cotton doona cover features a 2cm self flange finish and is perfectly paired with natural textures and organic touches.","features":["Made from cotton with washed linen finish. Features a 2cm self flange.","Available in Single, Double, Queen, King and Super King sizes.","Button closure","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from cotton with washed linen finish. Features a 2cm self flange."},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm (Single size available in selected colours) | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm (Double size available in selected colours) | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm (All colours) | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm (All colours) | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm each (All colours)","care":"Cold machine wash on gentle cycle before first use. Wash dark colours separately. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Cool iron if desired. Do not dry clean."},
  {"id":"bl093","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hadley Reversible Blue and Yellow Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11480","tag":"New","ph":"","img":"assets/products/bl093.webp","imgs":["assets/products/bl093.webp","assets/products/bl093-2.webp","assets/products/bl093-3.webp","assets/products/bl093-4.webp","assets/products/bl093-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"Double","price":412,"memberPrice":371},{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":412,"memberPrice":371},{"label":"Super King","price":412,"memberPrice":371}],"colours":[{"name":"Blue/Yellow Stripe","hex":"#4b75a5"}],"desc":"The Hadley Reversible Blue and Yellow Stripe Quilt Cover Set is an effortless way to elevate any bedroom, bringing timeless style and a sense of relaxed sophistication to your space. Crafted from soft, breathable cotton, it offers everyday comfort, while the reversible striped design pairs bold statement stripes on one side with a refined pinstripe pattern on the reverse for two versatile looks in one. It's perfect for creating a relaxed, layered bed you'll love coming home to.","features":["Made from 100% cotton","Available in Single, Double, Queen, King and Super King sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% cotton","Made in":"Pakistan"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl094","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Look Vintage Rose Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11481","tag":"New","ph":"","img":"assets/products/bl094.webp","imgs":["assets/products/bl094.webp","assets/products/bl094-2.webp","assets/products/bl094-3.webp","assets/products/bl094-4.webp","assets/products/bl094-5.webp","assets/products/bl094-6.webp","assets/products/bl094-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":345,"memberPrice":310},{"label":"Double","price":400,"memberPrice":360},{"label":"Queen","price":400,"memberPrice":360},{"label":"King","price":400,"memberPrice":360},{"label":"Super King","price":400,"memberPrice":360}],"desc":"The comfort of easy care, breathable cotton with the trending look of luxurious linen, our Washed Linen Look quilt cover is sure to impress. Available in a variety of classic and new season colours, the relaxed style of this cotton doona cover features a 2cm self flange finish and is perfectly paired with natural textures and organic touches.","features":["Made from cotton with washed linen finish. Features a 2cm self flange.","Available in Single, Double, Queen, King and Super King sizes.","Button closure","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from cotton with washed linen finish. Features a 2cm self flange."},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm (Single size available in selected colours) | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm (Double size available in selected colours) | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm (All colours) | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm (All colours) | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm each (All colours)","care":"Cold machine wash on gentle cycle before first use. Wash dark colours separately. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Cool iron if desired. Do not dry clean."},
  {"id":"bl095","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Adria Reversible Vintage Pink Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":312,"memberPrice":281,"sku":"SH-11482","tag":"New","ph":"","img":"assets/products/bl095.webp","imgs":["assets/products/bl095.webp","assets/products/bl095-2.webp","assets/products/bl095-3.webp","assets/products/bl095-4.webp","assets/products/bl095-5.webp","assets/products/bl095-6.webp","assets/products/bl095-7.webp","assets/products/bl095-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":312,"memberPrice":281},{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":389,"memberPrice":350},{"label":"King","price":389,"memberPrice":350},{"label":"Super King","price":389,"memberPrice":350}],"desc":"Create a calming oasis in your bedroom with the Adria Reversible Stripe Quilt Cover Set, with a gorgeous textured look background and reversible vertical stripe design for versatile styling. Complete your bedding ensemble with the Adria Reversible European Pillowcase.","features":["Made from 100% Cotton.","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% Cotton."},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl096","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Springfield Check Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11483","tag":"New","ph":"","img":"assets/products/bl096.webp","imgs":["assets/products/bl096.webp","assets/products/bl096-2.webp","assets/products/bl096-3.webp","assets/products/bl096-4.webp","assets/products/bl096-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"Double","price":445,"memberPrice":400},{"label":"Queen","price":445,"memberPrice":400},{"label":"King","price":445,"memberPrice":400},{"label":"Super King","price":445,"memberPrice":400}],"colours":[{"name":"Green/Blue","hex":"#34485d"}],"desc":"Bring a sense of timeless simplicity to your bedroom with the Springfield Check Quilt Cover Set. Crafted from breathable cotton, its classic oversized check design in soft, nature-inspired tones creates a relaxed and welcoming feel, while delivering the comfort of natural fibres.","features":["Made from 100% yarn-dyed cotton","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% yarn-dyed cotton"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl097","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Island Floral Reversible Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":356,"memberPrice":320,"sku":"SH-11484","tag":"New","ph":"","img":"assets/products/bl097.webp","imgs":["assets/products/bl097.webp","assets/products/bl097-2.webp","assets/products/bl097-3.webp","assets/products/bl097-4.webp","assets/products/bl097-5.webp","assets/products/bl097-6.webp","assets/products/bl097-7.webp","assets/products/bl097-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":356,"memberPrice":320},{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":412,"memberPrice":371},{"label":"Super King","price":412,"memberPrice":371}],"colours":[{"name":"Chocolate","hex":"#5b3b2e"}],"desc":"Crafted from soft and breathable cotton percale, this reversible quilt cover set offers two versatile looks. Perfect for creating a relaxed yet elevated retreat, this tropical quilt cover set blends natural inspiration with modern styling. Pair it with the Island Floral European Pillowcase for a beautifully coordinated and complete bedroom look.","features":["Made from 100% cotton percale","Available in Double, Queen, King and Super King sizes.","Features button closure","Includes corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% cotton percale","Made in":"Bangladesh"},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl098","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Atlas Stripe Chocolate Brown Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11485","tag":"New","ph":"","img":"assets/products/bl098.webp","imgs":["assets/products/bl098.webp","assets/products/bl098-2.webp","assets/products/bl098-3.webp","assets/products/bl098-4.webp","assets/products/bl098-5.webp","assets/products/bl098-6.webp","assets/products/bl098-7.webp","assets/products/bl098-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":456,"memberPrice":410},{"label":"Super King","price":456,"memberPrice":410}],"desc":"Elevate your bedroom styling with the timeless Atlas Stripe Quilt Cover Set, a perfect blend of classic design and relaxed elegance. This cotton slub quilt cover set features a stunning stripe design and knife edge finish, blending style and comfort effortlessly. Complete the look with the Atlas Stripe European Pillowcase!","features":["Made from cotton, with a striped cotton slub front and a plain cotton percale reverse","Available in Queen, King and Super King quilt cover sizes","Striped design","Quilt cover features button closure and inner corner ties to secure your quilt","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from cotton, with a striped cotton slub front and a plain cotton percale reverse"},"dimensions":"Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl099","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Milah Blue & Choc Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11486","tag":"New","ph":"","img":"assets/products/bl099.webp","imgs":["assets/products/bl099.webp","assets/products/bl099-2.webp","assets/products/bl099-3.webp","assets/products/bl099-4.webp","assets/products/bl099-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"colours":[{"name":"Blue/Chocolate Stripe","hex":"#4b75a5"}],"desc":"Effortlessly create a stunningly stylish look with the Milah Blue & Choc Stripe Quilt Cover Set. This cotton quilt cover set features a yarn-dyed wide stripe design in trending colours, blending contemporary style with breathable fabric for a comfortable night's sleep.","features":["Made from garment washed yarn-dyed cotton with a knife edge finish","Available in Single, Double, Queen, King and Super King quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from garment washed yarn-dyed cotton with a knife edge finish","Made in":"China"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl100","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Check Mate White Textured Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":312,"memberPrice":281,"sku":"SH-11487","tag":"New","ph":"","img":"assets/products/bl100.webp","imgs":["assets/products/bl100.webp","assets/products/bl100-2.webp","assets/products/bl100-3.webp","assets/products/bl100-4.webp","assets/products/bl100-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":312,"memberPrice":281},{"label":"Double","price":345,"memberPrice":310},{"label":"Queen","price":345,"memberPrice":310},{"label":"King","price":345,"memberPrice":310},{"label":"Super King","price":345,"memberPrice":310}],"desc":"Bring fresh-made energy to your bedroom with the Check Mate Textured Quilt Cover Set. Designed with a softly textured check front and a smooth reverse, this quilt cover set adds pattern, depth and a cosy layered look to the bed without feeling too busy. Easy to style and a simple way to refresh your room with comfort, texture and a little everyday charm.","features":["Made from Polyester","Available in Single, Double, Queen, King and Super King quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from Polyester"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm width x 240cm length & 2 pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Low iron on reverse. Do not dry clean."},
  {"id":"bl101","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Milah Clay Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11488","tag":"New","ph":"","img":"assets/products/bl101.webp","imgs":["assets/products/bl101.webp","assets/products/bl101-2.webp","assets/products/bl101-3.webp","assets/products/bl101-4.webp","assets/products/bl101-5.webp","assets/products/bl101-6.webp","assets/products/bl101-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"Double","price":467,"memberPrice":420},{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"desc":"Effortlessly create a stunningly stylish look with the Milah Stripe Quilt Cover Set. This cotton quilt cover set features a yarn-dyed wide stripe design in trending colours, blending contemporary style with breathable fabric for a comfortable night's sleep. Complete the look with our Milah Stripe European Pillowcase.","features":["Made from garment washed yarn-dyed cotton with a knife edge finish","Available in Single, Double, Queen, King and Super King quilt cover sizes","Button closure","Quilt cover feaures corner ties to secure your quilt","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from garment washed yarn-dyed cotton with a knife edge finish","Made in":"China"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl102","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Check Mate Cocoa Brown Textured Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":312,"memberPrice":281,"sku":"SH-11489","tag":"New","ph":"","img":"assets/products/bl102.webp","imgs":["assets/products/bl102.webp","assets/products/bl102-2.webp","assets/products/bl102-3.webp","assets/products/bl102-4.webp","assets/products/bl102-5.webp","assets/products/bl102-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":312,"memberPrice":281},{"label":"Double","price":345,"memberPrice":310},{"label":"Queen","price":345,"memberPrice":310},{"label":"King","price":345,"memberPrice":310},{"label":"Super King","price":345,"memberPrice":310}],"desc":"Bring fresh-made energy to your bedroom with the Check Mate Textured Quilt Cover Set. Designed with a softly textured check front and a smooth reverse, this quilt cover set adds pattern, depth and a cosy layered look to the bed without feeling too busy. Easy to style and a simple way to refresh your room with comfort, texture and a little everyday charm.","features":["Made from Polyester","Available in Single, Double, Queen, King and Super King quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from Polyester"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm width x 240cm length & 2 pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Low iron on reverse. Do not dry clean."},
  {"id":"bl103","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Maison Natural Check Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":312,"memberPrice":281,"sku":"SH-11490","tag":"New","ph":"","img":"assets/products/bl103.webp","imgs":["assets/products/bl103.webp","assets/products/bl103-2.webp","assets/products/bl103-3.webp","assets/products/bl103-4.webp","assets/products/bl103-5.webp","assets/products/bl103-6.webp","assets/products/bl103-7.webp","assets/products/bl103-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":312,"memberPrice":281},{"label":"Double","price":356,"memberPrice":320},{"label":"Queen","price":356,"memberPrice":320},{"label":"King","price":356,"memberPrice":320},{"label":"Super King","price":356,"memberPrice":320}],"desc":"Elevate your bedroom with the Maison Check Quilt Cover Set, designed to bring timeless style and effortless comfort to your sleep space. Featuring a sophisticated check pattern and beautifully textured finish, this quilt cover set creates a soft, inviting look that complements both modern and classic bedroom décor. Perfect for year-round styling, it adds depth, warmth, and an elegant layered feel to any bedroom setting.","features":["Made from yarn dyed textured polyester","Available in Single, Double, Queen, King and Super King quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from yarn dyed textured polyester"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl104","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Willow Check Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11491","tag":"New","ph":"","img":"assets/products/bl104.webp","imgs":["assets/products/bl104.webp","assets/products/bl104-2.webp","assets/products/bl104-3.webp","assets/products/bl104-4.webp","assets/products/bl104-5.webp","assets/products/bl104-6.webp","assets/products/bl104-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":456,"memberPrice":410},{"label":"Super King","price":456,"memberPrice":410}],"colours":[{"name":"Butter Check","hex":"#f0f5f8"}],"desc":"Bring a soft and romantic feel to your bedroom with the Willow Check Quilt Cover Set. Crafted from yarn-dyed cotton, this quilt cover set offers breathable comfort and lasting quality, while the delicate check design introduces subtle colour and charm. Thoughtfully finished with ruched detailing, it adds beautiful texture and a relaxed, feminine touch to your bed.","features":["Made from 100% yarn-dyed cotton","Available in Queen, King and Super King sizes","Features a button closure","Corner ties that can be fastened to the loops of our quilts. This will to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% yarn-dyed cotton"},"dimensions":"Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl105","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Andie Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11492","tag":"New","ph":"","img":"assets/products/bl105.webp","imgs":["assets/products/bl105.webp","assets/products/bl105-2.webp","assets/products/bl105-3.webp","assets/products/bl105-4.webp","assets/products/bl105-5.webp","assets/products/bl105-6.webp","assets/products/bl105-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":389,"memberPrice":350},{"label":"Double","price":467,"memberPrice":420},{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"colours":[{"name":"Caramel","hex":"#34485d"}],"desc":"Bring a playful yet refined touch to your bedroom with the Andie Stripe Quilt Cover Set. Soft, breathable and beautifully comfortable, it creates a fresh, inviting look with a subtle lustre that enhances its modern appeal.","features":["Made from 100% cotton sateen","Available in Double, Queen, King and Super King sizes.","Quilt cover has button closure and features corner ties to secure your quilt"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% cotton sateen","Made in":"China"},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl106","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Atlas Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11493","tag":"New","ph":"","img":"assets/products/bl106.webp","imgs":["assets/products/bl106.webp","assets/products/bl106-2.webp","assets/products/bl106-3.webp","assets/products/bl106-4.webp","assets/products/bl106-5.webp","assets/products/bl106-6.webp","assets/products/bl106-7.webp","assets/products/bl106-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":456,"memberPrice":410},{"label":"Super King","price":456,"memberPrice":410}],"colours":[{"name":"Natural","hex":"#34485d"}],"desc":"Elevate your bedroom styling with the timeless Atlas Stripe Quilt Cover Set, a perfect blend of classic design and relaxed elegance. This cotton slub quilt cover set features a stunning stripe design and knife edge finish, blending style and comfort effortlessly. Complete the look with the Atlas Stripe European Pillowcase!","features":["Made from cotton, with a striped cotton slub front and a plain cotton percale reverse","Available in Queen, King and Super King quilt cover sizes","Striped design","Quilt cover features button closure and inner corner ties to secure your quilt","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from cotton, with a striped cotton slub front and a plain cotton percale reverse"},"dimensions":"Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl107","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Solace Natural Contrast Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11494","tag":"New","ph":"","img":"assets/products/bl107.webp","imgs":["assets/products/bl107.webp","assets/products/bl107-2.webp","assets/products/bl107-3.webp","assets/products/bl107-4.webp","assets/products/bl107-5.webp","assets/products/bl107-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":456,"memberPrice":410},{"label":"King","price":456,"memberPrice":410},{"label":"Super King","price":456,"memberPrice":410}],"desc":"Create a warm and welcoming bedroom with the Solace Contrast Quilt Cover Set. Crafted from breathable cotton, this reversible quilt cover set features contrast trim detailing and a versatile tonal palette, offering two complementary looks in one. Soft, comfortable and easy to style, it makes it effortless to refresh your space with relaxed sophistication. Complete the look by pairing it with the matching Solace Contrast European Pillowcase for a beautifully coordinated finish.","features":["Made from 100% washed cotton","Available in Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% washed cotton"},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl108","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Honey Horizon Reversible Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":356,"memberPrice":320,"sku":"SH-11495","tag":"New","ph":"","img":"assets/products/bl108.webp","imgs":["assets/products/bl108.webp","assets/products/bl108-2.webp","assets/products/bl108-3.webp","assets/products/bl108-4.webp","assets/products/bl108-5.webp","assets/products/bl108-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":356,"memberPrice":320},{"label":"Double","price":467,"memberPrice":420},{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"colours":[{"name":"Brown","hex":"#78563d"}],"desc":"The reverse showcases a finer olive and cream stripe pattern, offering a versatile second look and an easy way to refresh your space.","features":["Made from 100% yarn-dyed cotton","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% yarn-dyed cotton"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl109","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Gia White Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":312,"memberPrice":281,"sku":"SH-11496","tag":"New","ph":"","img":"assets/products/bl109.webp","imgs":["assets/products/bl109.webp","assets/products/bl109-2.webp","assets/products/bl109-3.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":312,"memberPrice":281},{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":367,"memberPrice":330},{"label":"King","price":367,"memberPrice":330}],"desc":"A textural take on a stylish classic, the Gia Quilt Cover Set embodies chic simplicity. With a beautiful jacquard stripe front, the Gia brings depth and visual interest to your bedroom styling while the plain reverse promises a comfortable sleep all night long. Complete the look with matching Gia European Pillowcase.","features":["Made from microfibre","Available in Single, Double, Queen and King quilt cover sizes","Textured stripe design","Quilt cover has button closure and features corner ties to secure your quilt","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from microfibre"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Do not iron. Do not dry clean."},
  {"id":"bl110","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Wild Tropics Floral Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11497","tag":"New","ph":"","img":"assets/products/bl110.webp","imgs":["assets/products/bl110.webp","assets/products/bl110-2.webp","assets/products/bl110-3.webp","assets/products/bl110-4.webp","assets/products/bl110-5.webp","assets/products/bl110-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391},{"label":"Super King","price":434,"memberPrice":391}],"colours":[{"name":"Natural","hex":"#ac9d88"}],"desc":"Bring a relaxed tropical mood to your bedroom with the Wild Tropics Quilt Cover Set. Soft euro-green tones and artisanal brushwork give the bed a calm, sun-washed feeling with a fresh contemporary finish.","features":["Made from 100% Cotton","Available in Double, Queen, King and Super King sizes.","Quilt cover has button closure and features corner ties to secure your quilt"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% Cotton"},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl111","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Haven Scallop Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11498","tag":"New","ph":"","img":"assets/products/bl111.webp","imgs":["assets/products/bl111.webp","assets/products/bl111-2.webp","assets/products/bl111-3.webp","assets/products/bl111-4.webp","assets/products/bl111-5.webp","assets/products/bl111-6.webp","assets/products/bl111-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"colours":[{"name":"Natural","hex":"#34485d"}],"desc":"Bring a refined, designer-inspired feel to your bedroom with the Haven Scallop Quilt Cover Set. Crafted from soft yarn-dyed cotton, this luxury quilt cover set features beautifully embroidered scallop detailing and a subtle textured finish for added depth and sophistication.","features":["Made from 100% yarn-dyed cotton","Available in Queen, King and Super King quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% yarn-dyed cotton"},"dimensions":"Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl112","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Look Berry Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11499","tag":"New","ph":"","img":"assets/products/bl112.webp","imgs":["assets/products/bl112.webp","assets/products/bl112-2.webp","assets/products/bl112-3.webp","assets/products/bl112-4.webp","assets/products/bl112-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":423,"memberPrice":381},{"label":"King","price":423,"memberPrice":381},{"label":"Super King","price":423,"memberPrice":381}],"desc":"Add a bold pop of colour to your bedroom with the Washed Linen Look Berry Quilt Cover Set. Featuring a rich berry hue and a relaxed, linen-look texture, this quilt cover set brings effortless style and inviting comfort to your space. Perfect for creating a warm and contemporary bedroom aesthetic, its vibrant colour pairs beautifully with soft neutrals or playful patterns for a personalised look.","features":["Made from cotton with washed linen finish. Features a 2cm self flange.","Available in Double, Queen, King and Super King sizes.","Features button closure on quilt cover","Includes corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from cotton with washed linen finish. Features a 2cm self flange.","Made in":"China"},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm each","care":"Cold machine wash on gentle cycle before first use. Wash dark colours separately. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Cool iron if desired. Do not dry clean."},
  {"id":"bl113","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Darcy Reversible Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11500","tag":"New","ph":"","img":"assets/products/bl113.webp","imgs":["assets/products/bl113.webp","assets/products/bl113-2.webp","assets/products/bl113-3.webp","assets/products/bl113-4.webp","assets/products/bl113-5.webp","assets/products/bl113-6.webp","assets/products/bl113-7.webp","assets/products/bl113-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"Double","price":467,"memberPrice":420},{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"colours":[{"name":"Green","hex":"#34485d"}],"desc":"Bring a fresh, timeless feel to your bedroom with the Darcy Reversible Stripe Quilt Cover Set. Crafted from breathable cotton, this classic college stripe quilt cover features a reversible design, offering two versatile striped looks in one for effortless styling. Soft, comfortable and easy to layer, this cotton quilt cover set is perfect for creating a relaxed, effortlessly stylish bedroom retreat.","features":["Made from cotton","Available in Single, Double, Queen, King and Super King sizes.","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from cotton"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl114","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Ziggy Chocolate and Lilac Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":356,"memberPrice":320,"sku":"SH-11501","tag":"New","ph":"","img":"assets/products/bl114.webp","imgs":["assets/products/bl114.webp","assets/products/bl114-2.webp","assets/products/bl114-3.webp","assets/products/bl114-4.webp","assets/products/bl114-5.webp","assets/products/bl114-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":356,"memberPrice":320},{"label":"Double","price":467,"memberPrice":420},{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"colours":[{"name":"Chocolate/Lilac","hex":"#34485d"}],"desc":"Bring a modern yet inviting feel to your bedroom with the Ziggy Stripe Quilt Cover Set. Crafted from yarn-dyed cotton, this quilt cover set offers breathable comfort with lasting colour and detail. Bold chocolate and lilac stripes create a contemporary statement, while brown cord piping adds a refined finishing touch. Perfect for creating a layered and effortlessly stylish bedroom, this quilt cover set combines rich colour with timeless appeal.","features":["Made from 100% yarn-dyed cotton","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% yarn-dyed cotton"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl115","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Maison Blue Check Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":312,"memberPrice":281,"sku":"SH-11502","tag":"New","ph":"","img":"assets/products/bl115.webp","imgs":["assets/products/bl115.webp","assets/products/bl115-2.webp","assets/products/bl115-3.webp","assets/products/bl115-4.webp","assets/products/bl115-5.webp","assets/products/bl115-6.webp","assets/products/bl115-7.webp","assets/products/bl115-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":312,"memberPrice":281},{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":367,"memberPrice":330},{"label":"King","price":367,"memberPrice":330},{"label":"Super King","price":367,"memberPrice":330}],"desc":"Elevate your bedroom with the Maison Check Quilt Cover Set, designed to bring timeless style and effortless comfort to your sleep space. Featuring a sophisticated check pattern and beautifully textured finish, this quilt cover set creates a soft, inviting look that complements both modern and classic bedroom décor. Perfect for year-round styling, it adds depth, warmth, and an elegant layered feel to any bedroom setting.","features":["Made from yarn dyed textured polyester","Available in Single, Double, Queen, King and Super King quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from yarn dyed textured polyester"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl116","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Sunday Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11503","tag":"New","ph":"","img":"assets/products/bl116.webp","imgs":["assets/products/bl116.webp","assets/products/bl116-2.webp","assets/products/bl116-3.webp","assets/products/bl116-4.webp","assets/products/bl116-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"Double","price":467,"memberPrice":420},{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"colours":[{"name":"Blue","hex":"#34485d"}],"desc":"Inspired by slow mornings and relaxed coastal living, the Sunday Stripe Quilt Cover Set brings effortless style and natural texture to your bedroom. Crafted from a yarn-dyed cotton and linen blend on the front with a soft cotton reverse, this thoughtfully designed quilt cover set combines the relaxed appeal of linen with the everyday comfort of cotton. The timeless stripe pattern in soft, sun-washed tones creates a calm and inviting aesthetic, while cord piped edging on the quilt cover and pillowcases adds a refined finishing touch.","features":["Made from yarn-dyed 70% cotton / 30% linen cover and 100% cotton reverse.","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from yarn-dyed 70% cotton / 30% linen cover and 100% cotton reverse."},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl117","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Gia Sage Green Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":312,"memberPrice":281,"sku":"SH-11504","tag":"New","ph":"","img":"assets/products/bl117.webp","imgs":["assets/products/bl117.webp","assets/products/bl117-2.webp","assets/products/bl117-3.webp","assets/products/bl117-4.webp","assets/products/bl117-5.webp","assets/products/bl117-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":312,"memberPrice":281},{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":367,"memberPrice":330},{"label":"King","price":367,"memberPrice":330}],"desc":"A textural take on a stylish classic, the Gia Quilt Cover Set embodies chic simplicity. With a beautiful jacquard stripe front, the Gia brings depth and visual interest to your bedroom styling while the plain reverse promises a comfortable sleep all night long. Complete the look with matching Gia European Pillowcase.","features":["Made from microfibre","Available in Single, Double, Queen and King quilt cover sizes","Textured stripe design","Quilt cover has button closure and features corner ties to secure your quilt","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from microfibre","Made in":"China"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Do not iron. Do not dry clean."},
  {"id":"bl118","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Montreal Natural and Green Check Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11505","tag":"New","ph":"","img":"assets/products/bl118.webp","imgs":["assets/products/bl118.webp","assets/products/bl118-2.webp","assets/products/bl118-3.webp","assets/products/bl118-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":445,"memberPrice":400},{"label":"Super King","price":445,"memberPrice":400}],"colours":[{"name":"Natural Green","hex":"#dad0c7"}],"desc":"The Montreal Check Quilt Cover Set brings a calm, softly layered feel to your bedroom. Made from yarn dyed cotton, this check quilt cover set combines beige, cream and muted green tones with a neat flat flange finish on the quilt cover and pillowcases for a look that feels thoughtful, comfortable and easy to love.","features":["Made from 100% yarn-dyed cotton","Available in Queen, King and Super King sizes.","The quilt cover and pillowcases both feature a flat flange edge for a coordinated finish.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% yarn-dyed cotton","Made in":"China"},"dimensions":"Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl119","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Goldie Palms Embroidered Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11506","tag":"New","ph":"","img":"assets/products/bl119.webp","imgs":["assets/products/bl119.webp","assets/products/bl119-2.webp","assets/products/bl119-3.webp","assets/products/bl119-4.webp","assets/products/bl119-5.webp","assets/products/bl119-6.webp","assets/products/bl119-7.webp","assets/products/bl119-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":456,"memberPrice":410},{"label":"King","price":456,"memberPrice":410},{"label":"Super King","price":456,"memberPrice":410}],"colours":[{"name":"Green","hex":"#29714b"}],"desc":"The Goldie Palms Quilt Cover Set brings a quiet resort-at-home mood to everyday rest. Crafted with a yarn-dyed texturred cotton front, it offers soft natural comfort with the flexibility to style the bed two ways. The palm design adds an easy botanical feel, while the embroidered ruffle edge detail gives the set a beautifully considered finish.","features":["Made from yarn dyed cotton","Available in Double, Queen, King and Super King quilt cover sizes","Botanical-inspired design – Brings a relaxed resort-at-home feel to your bedroom","Embroidered ruffle edge – Adds soft texture, movement and a romantic finishing touch","Quilt cover has button closure and features corner ties to secure your quilt"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from yarn dyed cotton"},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl120","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Parker Pleat Natural Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11507","tag":"New","ph":"","img":"assets/products/bl120.webp","imgs":["assets/products/bl120.webp","assets/products/bl120-2.webp","assets/products/bl120-3.webp","assets/products/bl120-4.webp","assets/products/bl120-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"desc":"Create a bedroom that feels softly tailored with the Parker Pleat Stripe Quilt Cover Set. Made from cotton, this striped quilt cover set features woven pleated fabric for gentle texture and depth, finished with a piped edge on both the quilt cover and pillowcases. Calm, considered and easy to layer, Parker brings a refined stripe story to your everyday retreat.","features":["Made from 100% cotton","Available in Queen, King and Super King quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% cotton"},"dimensions":"Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl121","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Drift Reversible Floral Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11508","tag":"New","ph":"","img":"assets/products/bl121.webp","imgs":["assets/products/bl121.webp","assets/products/bl121-2.webp","assets/products/bl121-3.webp","assets/products/bl121-4.webp","assets/products/bl121-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":389,"memberPrice":350},{"label":"King","price":445,"memberPrice":400},{"label":"Super King","price":445,"memberPrice":400}],"colours":[{"name":"Light Pink","hex":"#f0d0d1"}],"desc":"Crafted from soft cotton, this reversible quilt cover set showcases delicate floral motifs layered over pastel stripes on the front, while the reverse features a versatile neutral base with a classic white stripe for an effortlessly relaxed look.","features":["Made from 100% cotton percale","Available in Queen, King and Super King quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% cotton percale","Made in":"Bangladesh"},"dimensions":"Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl122","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hadley Reversible Navy Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11509","tag":"New","ph":"","img":"assets/products/bl122.webp","imgs":["assets/products/bl122.webp","assets/products/bl122-2.webp","assets/products/bl122-3.webp","assets/products/bl122-4.webp","assets/products/bl122-5.webp","assets/products/bl122-6.webp","assets/products/bl122-7.webp","assets/products/bl122-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"Double","price":412,"memberPrice":371},{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":412,"memberPrice":371},{"label":"Super King","price":412,"memberPrice":371}],"desc":"The Hadley Reversible Stripe Quilt Cover Set is an effortless way to elevate any bedroom, bringing timeless style and a sense of relaxed sophistication to your space. Crafted from soft, breathable cotton, it offers everyday comfort, while the reversible striped design pairs bold statement stripes on one side with a refined pinstripe pattern on the reverse for two versatile looks in one. It's perfect for creating a relaxed, layered bed you'll love coming home to.","features":["Made from 100% cotton","Available in Single, Double, Queen, King and Super King sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% cotton"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl123","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Piped Washed Linen Look Mahogany Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":356,"memberPrice":320,"sku":"SH-11510","tag":"New","ph":"","img":"assets/products/bl123.webp","imgs":["assets/products/bl123.webp","assets/products/bl123-2.webp","assets/products/bl123-3.webp","assets/products/bl123-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":356,"memberPrice":320},{"label":"Double","price":434,"memberPrice":391},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391},{"label":"Super King","price":434,"memberPrice":391}],"desc":"Create a calm, timeless bedroom with the Piped Washed Linen Look Mahogany Quilt Cover Set. This breathable cotton quilt cover set features a soft relaxed finish with contrast colour piping for a clean, tailored edge. Easy to layer and simple to refresh, pair with matching Piped Washed Linen Look Mahogany European Pillowcase.","features":["Made from cotton with washed linen finish.","Available in Queen, King and Super King sizes.","Button closure","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from cotton with washed linen finish."},"dimensions":"Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl124","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Remie Berry Stripe Bamboo Cotton Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11511","tag":"New","ph":"","img":"assets/products/bl124.webp","imgs":["assets/products/bl124.webp","assets/products/bl124-2.webp","assets/products/bl124-3.webp","assets/products/bl124-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":345,"memberPrice":310},{"label":"Double","price":467,"memberPrice":420},{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"desc":"Bring bold pattern and a luxury feel to your bedroom with the Remie Berry Stripe Bamboo Cotton Quilt Cover Set. Made from a luxuriously soft bamboo cotton blend with a smooth sateen weave, it feels lightweight to the touch and is finished with an elegant sheen for a polished bed setting. The playful stripe print adds confident style without overpowering your space, while the handy zip closure makes bed-making feel that little bit easier.","features":["Made from a 350 thread count 60% Bamboo/40% Cotton sateen weave","Available in Single, Double, Queen, King and Super King sizes"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from a 350 thread count 60% Bamboo/40% Cotton sateen weave","Made in":"China"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl125","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Seattle Spot Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11512","tag":"New","ph":"","img":"assets/products/bl125.webp","imgs":["assets/products/bl125.webp","assets/products/bl125-2.webp","assets/products/bl125-3.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"colours":[{"name":"Green/Choc","hex":"#29714b"}],"desc":"Settle into earthy colour and easy comfort with the Seattle Spot Quilt Cover Set. Made from stonewashed cotton, its stripe and spot design brings playful pattern to a warm green and chocolate palette, while the neat knife edge finish keeps every layer looking considered.","features":["Materials Made from 100% stonewashed cotton.","Available in Double, Queen, King and Super King sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Materials Made from 100% stonewashed cotton."},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl126","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Louella Reversible Blue/Chocolate Polka Dot Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11513","tag":"New","ph":"","img":"assets/products/bl126.webp","imgs":["assets/products/bl126.webp","assets/products/bl126-2.webp","assets/products/bl126-3.webp","assets/products/bl126-4.webp","assets/products/bl126-5.webp","assets/products/bl126-6.webp","assets/products/bl126-7.webp","assets/products/bl126-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"Double","price":412,"memberPrice":371},{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":412,"memberPrice":371},{"label":"Super King","price":412,"memberPrice":371}],"desc":"Add a playful twist to your bedroom with the Louella Blue/Chocolate Polka Dot Quilt Cover Set, featuring cheerful spots on a warm, contemporary base. Crafted from soft, breathable cotton, this cotton quilt cover set is perfect for everyday comfort and style with a versatile reversible design, showcasing a polka dot front and striped reverse for two stylish looks in one. Complete the look with matching Louella Polka Dot European pillowcases and warm-toned accessories for a layered, inviting bedroom retreat.","features":["Made from 100% cotton percale","Available in Queen, King and Super King quilt cover sizes","Reversible polka dot/stripe design","Quilt cover has button closure","Includes corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% cotton percale","Made in":"Bangladesh"},"dimensions":"Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl127","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Stone Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":556,"memberPrice":500,"sku":"SH-11514","tag":"New","ph":"","img":"assets/products/bl127.webp","imgs":["assets/products/bl127.webp","assets/products/bl127-2.webp","assets/products/bl127-3.webp","assets/products/bl127-4.webp","assets/products/bl127-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":556,"memberPrice":500},{"label":"King","price":612,"memberPrice":551},{"label":"Super King","price":612,"memberPrice":551}],"desc":"Crafted from a premium washed European flax linen, the Washed Linen Quilt Cover Set brings a naturally relaxed, lived-in look with an understated, luxurious feel. Its clean, timeless finish creates a calm foundation for your bedroom, making it easy to layer with textured throws and cushions, and pair with matching Washed Linen pillowcases and sheets for a styled, elevated space. Beautifully breathable and temperature regulating, linen keeps you comfortable through warm nights and cooler seasons, softening with every wash for everyday luxury.","features":["Made from Oeko-Tex certified 100% European flax linen. Linen weight is 160GSM.","Available in Queen, King and Super King quilt cover sizes","Quilt cover features button closure and inner corner ties to secure your quilt"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from Oeko-Tex certified 100% European flax linen. Linen weight is 160GSM."},"dimensions":"Queen size: 1 quilt cover 210 x 210cm & 2 pillowcases 48 x 73cm each | King size: 1 quilt cover 240 x 210cm & 2 pillowcases 48 x 73cm each | Super King size: 1 quilt cover 270 x 240cm & 2 pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl128","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Chocolate Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":556,"memberPrice":500,"sku":"SH-11515","tag":"New","ph":"","img":"assets/products/bl128.webp","imgs":["assets/products/bl128.webp","assets/products/bl128-2.webp","assets/products/bl128-3.webp","assets/products/bl128-4.webp","assets/products/bl128-5.webp","assets/products/bl128-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":556,"memberPrice":500},{"label":"King","price":612,"memberPrice":551},{"label":"Super King","price":612,"memberPrice":551}],"desc":"Crafted from a premium washed European flax linen, the Washed Linen Quilt Cover Set brings a naturally relaxed, lived-in look with an understated, luxurious feel. Its clean, timeless finish creates a calm foundation for your bedroom, making it easy to layer with textured throws and cushions, and pair with matching Washed Linen pillowcases and sheets for a styled, elevated space. Beautifully breathable and temperature regulating, linen keeps you comfortable through warm nights and cooler seasons, softening with every wash for everyday luxury.","features":["Made from 100% European flax linen. Breathable 160GSM fabrication.","Available in Queen, King and Super King quilt cover sizes","Quilt cover features button closure and inner corner ties to secure your quilt"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% European flax linen. Breathable 160GSM fabrication."},"dimensions":"Queen size: 1 quilt cover 210 x 210cm & 2 pillowcases 48 x 73cm each | King size: 1 quilt cover 240 x 210cm & 2 pillowcases 48 x 73cm each | Super King size: 1 quilt cover 270 x 240cm & 2 pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl129","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Nutcracker Dream Christmas Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11516","tag":"New","ph":"","img":"assets/products/bl129.webp","imgs":["assets/products/bl129.webp","assets/products/bl129-2.webp","assets/products/bl129-3.webp","assets/products/bl129-4.webp","assets/products/bl129-5.webp","assets/products/bl129-6.webp","assets/products/bl129-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"Double","price":434,"memberPrice":391},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391}],"colours":[{"name":"Light Pink","hex":"#f0d0d1"}],"desc":"Create a magical festive retreat with the Nutcracker Dream Christmas Quilt Cover Set, crafted from soft and silky cotton sateen for a luxurious night's sleep. Finished with elegant gold piping around the quilt cover and pillowcases, it brings an elevated touch of festive sophistication to your bedroom. The smooth sateen weave offers a subtle sheen and beautifully soft hand feel, creating a sleep space that feels both cosy and luxurious throughout the Christmas season.","features":["Made from 100% cotton sateen","Available in Single, Double, Queen and King sizes."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% cotton sateen"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl130","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Remie Navy Stripe Bamboo Cotton Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11517","tag":"New","ph":"","img":"assets/products/bl130.webp","imgs":["assets/products/bl130.webp","assets/products/bl130-2.webp","assets/products/bl130-3.webp","assets/products/bl130-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":389,"memberPrice":350},{"label":"Double","price":434,"memberPrice":391},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391},{"label":"Super King","price":434,"memberPrice":391}],"desc":"Bring bold pattern and a luxury feel to your bedroom with the Remie Navy Stripe Bamboo Cotton Quilt Cover Set. Made from a luxuriously soft bamboo cotton blend with a smooth sateen weave, it feels lightweight to the touch and is finished with an elegant sheen for a polished bed setting. The playful stripe print adds confident style without overpowering your space, while the handy zip closure makes bed-making feel that little bit easier.","features":["Made from a 350 thread count 60% Bamboo/40% Cotton sateen weave","Available in Single, Double, Queen, King and Super King sizes","Quilt cover has corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from a 350 thread count 60% Bamboo/40% Cotton sateen weave","Made in":"China"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl131","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Australian Cotton Bitter Choc Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11518","tag":"New","ph":"","img":"assets/products/bl131.webp","imgs":["assets/products/bl131.webp","assets/products/bl131-2.webp","assets/products/bl131-3.webp","assets/products/bl131-4.webp","assets/products/bl131-5.webp","assets/products/bl131-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"Double","price":412,"memberPrice":371},{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":412,"memberPrice":371},{"label":"Super King","price":412,"memberPrice":371}],"colours":[{"name":"Bitter Chocolate","hex":"#34485d"}],"desc":"A style staple, the Australian Cotton Quilt Cover Set is the epitome of understated elegance and supreme comfort. Crafted from a washed Australian cotton, this quilt cover combines the comfort of the natural fibre with timeless design that's easy to style back in your home.","features":["Made from washed 100% Australian Cotton","Available in Single, Double, Queen, King and Super King quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from washed 100% Australian Cotton"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl132","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Frankie Leopard Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11519","tag":"New","ph":"","img":"assets/products/bl132.webp","imgs":["assets/products/bl132.webp","assets/products/bl132-2.webp","assets/products/bl132-3.webp","assets/products/bl132-4.webp","assets/products/bl132-5.webp","assets/products/bl132-6.webp","assets/products/bl132-7.webp","assets/products/bl132-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":345,"memberPrice":310},{"label":"Double","price":434,"memberPrice":391},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391},{"label":"Super King","price":434,"memberPrice":391}],"desc":"The Frankie Leopard Quilt Cover Set brings a softly styled take on statement bedding. Crafted from crisp cotton percale, this animal print quilt cover adds confident pattern to the bedroom while staying fresh, breathable and easy to layer. Light blue piping frames the quilt cover and pillowcases with tailored contrast, while the pillowcases' draped gathering detail adds gentle movement and a beautifully finished look.","features":["Made with 100% cotton percale","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made with 100% cotton percale"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl133","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Poppy Spot Bamboo Cotton Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11520","tag":"New","ph":"","img":"assets/products/bl133.webp","imgs":["assets/products/bl133.webp","assets/products/bl133-2.webp","assets/products/bl133-3.webp","assets/products/bl133-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"colours":[{"name":"Chocolate & Butter","hex":"#5b3b2e"}],"desc":"Bring playful pattern and silky-soft comfort to your bedroom with the Poppy Spot Quilt Cover Set. Woven in a smooth blend of bamboo and cotton, it feels lightweight and breathable for a cooler, more comfortable night's sleep. Its rich chocolate base and light yellow spots create an inviting colour story with plenty of warm personality.","features":["Made from 350 thread count 60% bamboo / 40% cotton blend","Available in Double, Queen, King and Super King quilt cover sizes"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 350 thread count 60% bamboo / 40% cotton blend"},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl134","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Bamboo Cotton Dusty Violet Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11521","tag":"New","ph":"","img":"assets/products/bl134.webp","imgs":["assets/products/bl134.webp","assets/products/bl134-2.webp","assets/products/bl134-3.webp","assets/products/bl134-4.webp","assets/products/bl134-5.webp","assets/products/bl134-6.webp","assets/products/bl134-7.webp","assets/products/bl134-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"Double","price":445,"memberPrice":400},{"label":"Queen","price":445,"memberPrice":400},{"label":"King","price":445,"memberPrice":400},{"label":"Super King","price":445,"memberPrice":400}],"desc":"Slip into the smooth, silky feel of the Bamboo Cotton Quilt Cover Set, crafted from 350 thread count bamboo cotton with a lustrous sateen weave. Lightweight, breathable and designed in a soft, modern hue inspired by relaxed living, this quilt cover set brings easy comfort and a beautifully polished finish to your bedroom. The zip closure makes bed changing quick and convenient, so your bed feels fresh with less fuss.","features":["Made from a 350 thread count 60% Bamboo/40% Cotton sateen weave","Available in Double, Queen, King and Super King quilt cover sizes","Includes a zip closure making changing your bed quick, easy and convenient","Quilt cover has corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from a 350 thread count 60% Bamboo/40% Cotton sateen weave"},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl135","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Remie Green Stripe Bamboo Cotton Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11522","tag":"New","ph":"","img":"assets/products/bl135.webp","imgs":["assets/products/bl135.webp","assets/products/bl135-2.webp","assets/products/bl135-3.webp","assets/products/bl135-4.webp","assets/products/bl135-5.webp","assets/products/bl135-6.webp","assets/products/bl135-7.webp","assets/products/bl135-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":345,"memberPrice":310},{"label":"Double","price":412,"memberPrice":371},{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":412,"memberPrice":371},{"label":"Super King","price":412,"memberPrice":371}],"desc":"Bring bold pattern and a luxury feel to your bedroom with the Remie Green Stripe Bamboo Cotton Quilt Cover Set. Made from a luxuriously soft bamboo cotton blend with a smooth sateen weave, it feels lightweight to the touch and is finished with an elegant sheen for a polished bed setting. The playful stripe print adds confident style without overpowering your space, while the handy zip closure makes bed-making feel that little bit easier.","features":["Made from 350 thread count Bamboo/Cotton blend (60% Bamboo/40% Cotton) sateen weave","Available in Single, Double, Queen, King and Super King sizes","Quilt cover has corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 350 thread count Bamboo/Cotton blend (60% Bamboo/40% Cotton) sateen weave","Made in":"China"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl136","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen White Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":556,"memberPrice":500,"sku":"SH-11523","tag":"New","ph":"","img":"assets/products/bl136.webp","imgs":["assets/products/bl136.webp","assets/products/bl136-2.webp","assets/products/bl136-3.webp","assets/products/bl136-4.webp","assets/products/bl136-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":556,"memberPrice":500},{"label":"King","price":612,"memberPrice":551},{"label":"Super King","price":612,"memberPrice":551}],"desc":"Crafted from a premium washed European flax linen, the Washed Linen Quilt Cover Set brings a naturally relaxed, lived-in look with an understated, luxurious feel. Its clean, timeless finish creates a calm foundation for your bedroom, making it easy to layer with textured throws and cushions, and pair with matching Washed Linen pillowcases and sheets for a styled, elevated space. Beautifully breathable and temperature regulating, linen keeps you comfortable through warm nights and cooler seasons, softening with every wash for everyday luxury.","features":["Made from Oeko-Tex certified 100% European flax linen. Linen weight is 160GSM.","Available in Queen, King and Super King quilt cover sizes","Quilt cover features button closure and inner corner ties to secure your quilt"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from Oeko-Tex certified 100% European flax linen. Linen weight is 160GSM."},"dimensions":"Queen size: 1 quilt cover 210 x 210cm & 2 pillowcases 48 x 73cm each | King size: 1 quilt cover 240 x 210cm & 2 pillowcases 48 x 73cm each | Super King size: 1 quilt cover 270 x 240cm & 2 pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl137","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Bamboo Cotton Light Taupe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11524","tag":"New","ph":"","img":"assets/products/bl137.webp","imgs":["assets/products/bl137.webp","assets/products/bl137-2.webp","assets/products/bl137-3.webp","assets/products/bl137-4.webp","assets/products/bl137-5.webp","assets/products/bl137-6.webp","assets/products/bl137-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":389,"memberPrice":350},{"label":"Double","price":445,"memberPrice":400},{"label":"Queen","price":445,"memberPrice":400},{"label":"King","price":445,"memberPrice":400},{"label":"Super King","price":445,"memberPrice":400}],"desc":"Slip into the smooth, silky feel of the Bamboo Cotton Quilt Cover Set, crafted from 350 thread count bamboo cotton with a lustrous sateen weave. Lightweight, breathable and designed in a soft, modern hue inspired by relaxed living, this quilt cover set brings easy comfort and a beautifully polished finish to your bedroom. The zip closure makes bed changing quick and convenient, so your bed feels fresh with less fuss.","features":["Made from a 350 thread count 60% Bamboo/40% Cotton sateen weave","Available in Double, Queen, King and Super King quilt cover sizes","Includes a zip closure making changing your bed quick, easy and convenient","Quilt cover has corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from a 350 thread count 60% Bamboo/40% Cotton sateen weave"},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl138","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Audrey Spot Bamboo Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11525","tag":"New","ph":"","img":"assets/products/bl138.webp","imgs":["assets/products/bl138.webp","assets/products/bl138-2.webp","assets/products/bl138-3.webp","assets/products/bl138-4.webp","assets/products/bl138-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":456,"memberPrice":410},{"label":"King","price":456,"memberPrice":410},{"label":"Super King","price":456,"memberPrice":410}],"colours":[{"name":"Ecru","hex":"#ffffff"}],"desc":"The Audrey Spot Quilt Cover Set brings gentle pattern and considered contrast to your bedroom. Made from bamboo cotton, this polka dot quilt cover set features a black piped edge on the quilt cover and pillowcases for a crisp, defined finish. Complete with a zip closure, it is an easy way to create a softly styled bed with a thoughtful point of detail.","features":["Made from a 350 thread count Bamboo/Cotton Sateen blend","Available in Double, Queen, King and Super King quilt cover sizes","Includes a zip closure making changing your bed quick, easy and convenient","Quilt cover has corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from a 350 thread count Bamboo/Cotton Sateen blend","Made in":"China"},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl139","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Capri Floral Reversible Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11526","tag":"New","ph":"","img":"assets/products/bl139.webp","imgs":["assets/products/bl139.webp","assets/products/bl139-2.webp","assets/products/bl139-3.webp","assets/products/bl139-4.webp","assets/products/bl139-5.webp","assets/products/bl139-6.webp","assets/products/bl139-7.webp","assets/products/bl139-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"Double","price":434,"memberPrice":391},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391},{"label":"Super King","price":434,"memberPrice":391}],"colours":[{"name":"Ivory Floral","hex":"#34485d"}],"desc":"The delicate floral print brings a sense of softness and effortless charm, while the sky blue stripe on a lemon yellow base reverse offers a timeless contrast for versatile styling. Finished with sky blue piped edging on the pillowcases for a refined touch.","features":["Made from 100% cotton sateen","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% cotton sateen"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl140","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Australian Cotton White Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11527","tag":"New","ph":"","img":"assets/products/bl140.webp","imgs":["assets/products/bl140.webp","assets/products/bl140-2.webp","assets/products/bl140-3.webp","assets/products/bl140-4.webp","assets/products/bl140-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"Double","price":434,"memberPrice":391},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391},{"label":"Super King","price":434,"memberPrice":391}],"desc":"A style staple, the Australian Cotton Quilt Cover Set is the epitome of understated elegance and supreme comfort. Crafted from a washed Australian cotton, this quilt cover combines the comfort of the natural fibre with timeless design that's easy to style back in your home.","features":["Made from washed 100% Australian Cotton","Available in Single, Double, Queen, King and Super King quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from washed 100% Australian Cotton"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl141","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Australian Cotton Charcoal Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11528","tag":"New","ph":"","img":"assets/products/bl141.webp","imgs":["assets/products/bl141.webp","assets/products/bl141-2.webp","assets/products/bl141-3.webp","assets/products/bl141-4.webp","assets/products/bl141-5.webp","assets/products/bl141-6.webp","assets/products/bl141-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"Double","price":434,"memberPrice":391},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391},{"label":"Super King","price":434,"memberPrice":391}],"desc":"A style staple, the Australian Cotton Quilt Cover Set is the epitome of understated elegance and supreme comfort. Crafted from a washed Australian cotton, this quilt cover combines the comfort of the natural fibre with timeless design that's easy to style back in your home.","features":["Made from washed 100% Australian Cotton","Available in Single, Double, Queen, King and Super King quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from washed 100% Australian Cotton"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl142","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Vixen Reversible Stripe Christmas Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11529","tag":"New","ph":"","img":"assets/products/bl142.webp","imgs":["assets/products/bl142.webp","assets/products/bl142-2.webp","assets/products/bl142-3.webp","assets/products/bl142-4.webp","assets/products/bl142-5.webp","assets/products/bl142-6.webp","assets/products/bl142-7.webp","assets/products/bl142-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"Double","price":456,"memberPrice":410},{"label":"Queen","price":456,"memberPrice":410},{"label":"King","price":456,"memberPrice":410},{"label":"Super King","price":456,"memberPrice":410}],"colours":[{"name":"Crimson","hex":"#f0f5f8"}],"desc":"Bring timeless festive styling to your bedroom with the Vixen Reversible Stripe Quilt Cover Set. Crafted from crisp and breathable cotton percale, this versatile design features two distinctive looks in one. One side showcases bold festive stripes for a statement look, while the reverse reveals a delicate bow stripe print for a softer, more understated aesthetic. Finished with charming tie details on the pillowcases, this thoughtfully crafted quilt cover set combines comfort, versatility and festive appeal throughout the Christmas season.","features":["Made from 100% cotton percale","Available in Single, Double, Queen, King and Super King sizes.","Button closure and corner tie to secure your quilt"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% cotton percale","Made in":"Bangladesh"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean"},
  {"id":"bl143","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Bamboo Cotton Chocolate Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11530","tag":"New","ph":"","img":"assets/products/bl143.webp","imgs":["assets/products/bl143.webp","assets/products/bl143-2.webp","assets/products/bl143-3.webp","assets/products/bl143-4.webp","assets/products/bl143-5.webp","assets/products/bl143-6.webp","assets/products/bl143-7.webp","assets/products/bl143-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":389,"memberPrice":350},{"label":"Double","price":445,"memberPrice":400},{"label":"Queen","price":445,"memberPrice":400},{"label":"King","price":445,"memberPrice":400},{"label":"Super King","price":445,"memberPrice":400}],"desc":"Slip into the smooth, silky feel of the Bamboo Cotton Quilt Cover Set, crafted from 350 thread count bamboo cotton with a lustrous sateen weave. Lightweight, breathable and designed in a soft, modern hue inspired by relaxed living, this quilt cover set brings easy comfort and a beautifully polished finish to your bedroom. The zip closure makes bed changing quick and convenient, so your bed feels fresh with less fuss.","features":["Made from a 350 thread count 60% Bamboo/40% Cotton sateen weave","Available in Double, Queen, King and Super King quilt cover sizes","Includes a zip closure making changing your bed quick, easy and convenient","Quilt cover has corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from a 350 thread count 60% Bamboo/40% Cotton sateen weave"},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl144","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Vintage Rose Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":556,"memberPrice":500,"sku":"SH-11531","tag":"New","ph":"","img":"assets/products/bl144.webp","imgs":["assets/products/bl144.webp","assets/products/bl144-2.webp","assets/products/bl144-3.webp","assets/products/bl144-4.webp","assets/products/bl144-5.webp","assets/products/bl144-6.webp","assets/products/bl144-7.webp","assets/products/bl144-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":556,"memberPrice":500},{"label":"King","price":612,"memberPrice":551},{"label":"Super King","price":612,"memberPrice":551}],"desc":"Crafted from a premium washed European flax linen, the Washed Linen Quilt Cover Set brings a naturally relaxed, lived-in look with an understated, luxurious feel. Its clean, timeless finish creates a calm foundation for your bedroom, making it easy to layer with textured throws and cushions, and pair with matching Washed Linen pillowcases and sheets for a styled, elevated space. Beautifully breathable and temperature regulating, linen keeps you comfortable through warm nights and cooler seasons, softening with every wash for everyday luxury.","features":["Made from Oeko-Tex certified 100% European flax linen. Linen weight is 160GSM.","Available in Queen, King and Super King quilt cover sizes","Quilt cover features button closure and inner corner ties to secure your quilt"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from Oeko-Tex certified 100% European flax linen. Linen weight is 160GSM."},"dimensions":"Queen size: 1 quilt cover 210 x 210cm & 2 pillowcases 48 x 73cm each | King size: 1 quilt cover 240 x 210cm & 2 pillowcases 48 x 73cm each | Super King size: 1 quilt cover 270 x 240cm & 2 pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl145","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Australian Cotton Contrast Tie Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11532","tag":"New","ph":"","img":"assets/products/bl145.webp","imgs":["assets/products/bl145.webp","assets/products/bl145-2.webp","assets/products/bl145-3.webp","assets/products/bl145-4.webp","assets/products/bl145-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"Double","price":467,"memberPrice":420},{"label":"Queen","price":467,"memberPrice":420},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"colours":[{"name":"Mahogany","hex":"#78563d"}],"desc":"Create a bedroom that feels effortlessly relaxed and inviting with the Australian Cotton Contrast Tie Quilt Cover Set. Crafted from Australian cotton, this quilt cover set offers natural breathability and everyday comfort, making it a beautiful choice for year-round use. The rich, earthy hue brings warmth and sophistication to your space, while contrast tie details on the pillowcases add a thoughtful touch of texture and charm.","features":["Made from 100% Australian Cotton","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% Australian Cotton"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl146","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Charcoal Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":556,"memberPrice":500,"sku":"SH-11533","tag":"New","ph":"","img":"assets/products/bl146.webp","imgs":["assets/products/bl146.webp","assets/products/bl146-2.webp","assets/products/bl146-3.webp","assets/products/bl146-4.webp","assets/products/bl146-5.webp","assets/products/bl146-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":556,"memberPrice":500},{"label":"King","price":612,"memberPrice":551},{"label":"Super King","price":612,"memberPrice":551}],"desc":"Crafted from a premium washed European flax linen, the Washed Linen Quilt Cover Set brings a naturally relaxed, lived-in look with an understated, luxurious feel. Its clean, timeless finish creates a calm foundation for your bedroom, making it easy to layer with textured throws and cushions, and pair with matching Washed Linen pillowcases and sheets for a styled, elevated space. Beautifully breathable and temperature regulating, linen keeps you comfortable through warm nights and cooler seasons, softening with every wash for everyday luxury.","features":["Made from Oeko-Tex certified 100% European flax linen","Available in Queen, King and Super King quilt cover sizes","Quilt cover features button closure and inner corner ties to secure your quilt"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from Oeko-Tex certified 100% European flax linen"},"dimensions":"Queen size: 1 quilt cover 210 x 210cm & 2 pillowcases 48 x 73cm each | King size: 1 quilt cover 240 x 210cm & 2 pillowcases 48 x 73cm each | Super King size: 1 quilt cover 270 x 240cm & 2 pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl147","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Lani Check Pink Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11534","tag":"New","ph":"","img":"assets/products/bl147.webp","imgs":["assets/products/bl147.webp","assets/products/bl147-2.webp","assets/products/bl147-3.webp","assets/products/bl147-4.webp","assets/products/bl147-5.webp","assets/products/bl147-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":367,"memberPrice":330}],"desc":"Cheerful checks bring a fresh new look to your room with the Lani Check Quilt Cover Set. With a check design and seersucker finish, this easy to care for quilt cover set adds a bright touch to your bedroom styling.","features":["Made from microfibre, with a seersucker front and plain reverse","Available in Single, Double and Queen quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from microfibre, with a seersucker front and plain reverse","Made in":"China"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Do not iron. Do not dry clean."},
  {"id":"bl148","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Dasher Check Reversible Christmas Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11535","tag":"New","ph":"","img":"assets/products/bl148.webp","imgs":["assets/products/bl148.webp","assets/products/bl148-2.webp","assets/products/bl148-3.webp","assets/products/bl148-4.webp","assets/products/bl148-5.webp","assets/products/bl148-6.webp","assets/products/bl148-7.webp","assets/products/bl148-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"Double","price":423,"memberPrice":381},{"label":"Queen","price":423,"memberPrice":381},{"label":"King","price":423,"memberPrice":381},{"label":"Super King","price":423,"memberPrice":381}],"colours":[{"name":"Green","hex":"#29714b"}],"desc":"Bring timeless festive charm to your bedroom with the Dasher Check Reversible Christmas Quilt Cover Set. Crafted from breathable cotton, this quilt cover set features a classic green check design on the front and a cheerful red and pink check pattern on the reverse. Finished with decorative rope piping for an elevated touch, its versatile check design feels fresh for Christmas yet timeless enough to enjoy all year round.","features":["Made from cotton percale","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from cotton percale"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl149","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Lani Check Blue Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11536","tag":"New","ph":"","img":"assets/products/bl149.webp","imgs":["assets/products/bl149.webp","assets/products/bl149-2.webp","assets/products/bl149-3.webp","assets/products/bl149-4.webp","assets/products/bl149-5.webp","assets/products/bl149-6.webp","assets/products/bl149-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":367,"memberPrice":330}],"desc":"Cheerful checks bring a fresh new look to your room with the Lani Check Quilt Cover Set. With a check design and seersucker finish, this easy to care for quilt cover set adds a bright touch to your bedroom styling.","features":["Made from microfibre, with a seersucker front and plain reverse","Available in Single, Double and Queen quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from microfibre, with a seersucker front and plain reverse","Made in":"China"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Do not iron. Do not dry clean."},
  {"id":"bl150","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Navy Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":556,"memberPrice":500,"sku":"SH-11537","tag":"New","ph":"","img":"assets/products/bl150.webp","imgs":["assets/products/bl150.webp","assets/products/bl150-2.webp","assets/products/bl150-3.webp","assets/products/bl150-4.webp","assets/products/bl150-5.webp","assets/products/bl150-6.webp","assets/products/bl150-7.webp","assets/products/bl150-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":556,"memberPrice":500},{"label":"King","price":612,"memberPrice":551},{"label":"Super King","price":612,"memberPrice":551}],"desc":"Crafted from a premium washed European flax linen, the Washed Linen Quilt Cover Set brings a naturally relaxed, lived-in look with an understated, luxurious feel. Its clean, timeless finish creates a calm foundation for your bedroom, making it easy to layer with textured throws and cushions, and pair with matching Washed Linen pillowcases and sheets for a styled, elevated space. Beautifully breathable and temperature regulating, linen keeps you comfortable through warm nights and cooler seasons, softening with every wash for everyday luxury.","features":["Made from Oeko-Tex certified 100% European flax linen. Linen weight is 160GSM.","Available in Queen, King and Super King quilt cover sizes","Quilt cover features button closure and inner corner ties to secure your quilt"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from Oeko-Tex certified 100% European flax linen. Linen weight is 160GSM."},"dimensions":"Queen size: 1 quilt cover 210 x 210cm & 2 pillowcases 48 x 73cm each | King size: 1 quilt cover 240 x 210cm & 2 pillowcases 48 x 73cm each | Super King size: 1 quilt cover 270 x 240cm & 2 pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl151","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Sage Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":556,"memberPrice":500,"sku":"SH-11538","tag":"New","ph":"","img":"assets/products/bl151.webp","imgs":["assets/products/bl151.webp","assets/products/bl151-2.webp","assets/products/bl151-3.webp","assets/products/bl151-4.webp","assets/products/bl151-5.webp","assets/products/bl151-6.webp","assets/products/bl151-7.webp","assets/products/bl151-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":556,"memberPrice":500},{"label":"King","price":612,"memberPrice":551},{"label":"Super King","price":612,"memberPrice":551}],"desc":"Crafted from a premium washed European flax linen, the Washed Linen Quilt Cover Set brings a naturally relaxed, lived-in look with an understated, luxurious feel. Its clean, timeless finish creates a calm foundation for your bedroom, making it easy to layer with textured throws and cushions, and pair with matching Washed Linen pillowcases and sheets for a styled, elevated space. Beautifully breathable and temperature regulating, linen keeps you comfortable through warm nights and cooler seasons, softening with every wash for everyday luxury.","features":["Made from Oeko-Tex certified 100% European flax linen. Linen weight is 160GSM.","Available in Queen, King and Super King quilt cover sizes","Quilt cover features button closure and inner corner ties to secure your quilt"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from Oeko-Tex certified 100% European flax linen. Linen weight is 160GSM."},"dimensions":"Queen size: 1 quilt cover 210 x 210cm & 2 pillowcases 48 x 73cm each | King size: 1 quilt cover 240 x 210cm & 2 pillowcases 48 x 73cm each | Super King size: 1 quilt cover 270 x 240cm & 2 pillowcases 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl152","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Australian Cotton Caramel Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11539","tag":"New","ph":"","img":"assets/products/bl152.webp","imgs":["assets/products/bl152.webp","assets/products/bl152-2.webp","assets/products/bl152-3.webp","assets/products/bl152-4.webp","assets/products/bl152-5.webp","assets/products/bl152-6.webp","assets/products/bl152-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"Double","price":412,"memberPrice":371},{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":412,"memberPrice":371},{"label":"Super King","price":412,"memberPrice":371}],"desc":"A style staple, the Australian Cotton Quilt Cover Set is the epitome of understated elegance and supreme comfort. Crafted from a washed Australian cotton, this quilt cover combines the comfort of the natural fibre with timeless design that's easy to style back in your home.","features":["Made from washed 100% Australian Cotton","Available in Single, Double, Queen, King and Super King quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from washed 100% Australian Cotton"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl153","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Australian Cotton Sage Green Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11540","tag":"New","ph":"","img":"assets/products/bl153.webp","imgs":["assets/products/bl153.webp","assets/products/bl153-2.webp","assets/products/bl153-3.webp","assets/products/bl153-4.webp","assets/products/bl153-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":389,"memberPrice":350},{"label":"Double","price":434,"memberPrice":391},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391},{"label":"Super King","price":434,"memberPrice":391}],"desc":"A style staple, the Australian Cotton Quilt Cover Set is the epitome of understated elegance and supreme comfort. Crafted from a washed Australian cotton, this quilt cover combines the comfort of the natural fibre with timeless design that's easy to style back in your home.","features":["Made from washed 100% Australian Cotton","Available in Single, Double, Queen, King and Super King quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from washed 100% Australian Cotton"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl154","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Milly Green/Pink Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11541","tag":"New","ph":"","img":"assets/products/bl154.webp","imgs":["assets/products/bl154.webp","assets/products/bl154-2.webp","assets/products/bl154-3.webp","assets/products/bl154-4.webp","assets/products/bl154-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"Double","price":456,"memberPrice":410},{"label":"Queen","price":456,"memberPrice":410},{"label":"King","price":456,"memberPrice":410},{"label":"Super King","price":456,"memberPrice":410}],"desc":"Bring fresh stripe energy to your bedroom with the Milly Stripe Quilt Cover Set. Made from cotton, this quilt cover set features soft green and pink stripes for a bright, playful look, while flange detailing on the pillowcases adds a neat, finished touch.","features":["Made from 100% cotton","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% cotton","Made in":"China"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl155","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Maisie Reversible Chocolate Check Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":356,"memberPrice":320,"sku":"SH-11542","tag":"New","ph":"","img":"assets/products/bl155.webp","imgs":["assets/products/bl155.webp","assets/products/bl155-2.webp","assets/products/bl155-3.webp","assets/products/bl155-4.webp","assets/products/bl155-5.webp","assets/products/bl155-6.webp","assets/products/bl155-7.webp","assets/products/bl155-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":356,"memberPrice":320},{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":389,"memberPrice":350},{"label":"King","price":389,"memberPrice":350},{"label":"Super King","price":389,"memberPrice":350}],"desc":"Bring effortless charm and versatility to your bedroom with the Maisie Reversible Check Quilt Cover Set. Made from breathable double-layer cotton gauze, this reversible design features a charming gingham check front and a solid colour reverse, giving you two timeless looks in one. Complete the look with the Maisie Check European Pillowcase for a beautifully coordinated finish.","features":["Made from double layer cotton gauze and with a knife edge finish.","Available in Double, Queen, King and Super King quilt cover sizes","Stunning gingham check cover and solid colour reverse","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from double layer cotton gauze and with a knife edge finish."},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Do not iron. Do not dry clean."},
  {"id":"bl156","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Bobbie Chambray Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11543","tag":"New","ph":"","img":"assets/products/bl156.webp","imgs":["assets/products/bl156.webp","assets/products/bl156-2.webp","assets/products/bl156-3.webp","assets/products/bl156-4.webp","assets/products/bl156-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":467,"memberPrice":420},{"label":"Super King","price":467,"memberPrice":420}],"colours":[{"name":"Blue","hex":"#4b75a5"}],"desc":"Bring a calm, softly coastal mood to your bedroom with the Bobbie Chambray Stripe Quilt Cover Set. Made from yarn dyed cotton, this striped quilt cover set layers gentle colour with a relaxed chambray feel, while flange detailing on the quilt cover and pillowcases gives the bed a neat, finished look.","features":["Made from 100% yarn dyed cotton","Available in Queen, King and Super King sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% yarn dyed cotton","Made in":"Pakistan"},"dimensions":"Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl157","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Polly Check Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11544","tag":"New","ph":"","img":"assets/products/bl157.webp","imgs":["assets/products/bl157.webp","assets/products/bl157-2.webp","assets/products/bl157-3.webp","assets/products/bl157-4.webp","assets/products/bl157-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":456,"memberPrice":410},{"label":"King","price":456,"memberPrice":410},{"label":"Super King","price":456,"memberPrice":410}],"colours":[{"name":"Pink","hex":"#f478ae"}],"desc":"Bring fresh colour and playful pattern to your bedroom with the Polly Check Quilt Cover Set. Made from yarn-dyed cotton, its pink check design makes a cheerful statement while remaining easy to style. Layer it with coordinating Polly Check pieces to create a bed that feels welcoming, relaxed and beautifully put together.","features":["Made from 100% yarn-dyed cotton","Available in Double, Queen, King and Super King quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% yarn-dyed cotton"},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl158","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Preston Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11545","tag":"New","ph":"","img":"assets/products/bl158.webp","imgs":["assets/products/bl158.webp","assets/products/bl158-2.webp","assets/products/bl158-3.webp","assets/products/bl158-4.webp","assets/products/bl158-5.webp","assets/products/bl158-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":367,"memberPrice":330},{"label":"Double","price":456,"memberPrice":410},{"label":"Queen","price":456,"memberPrice":410},{"label":"King","price":456,"memberPrice":410},{"label":"Super King","price":456,"memberPrice":410}],"colours":[{"name":"Navy/White","hex":"#23233f"}],"desc":"Bring a fresh feel to a classic stripe with the Preston Stripe Quilt Cover Set. Made from cotton, this quilt cover set features soft blue and natural-toned stripes for clean pattern and easy structure, while the red piped edge on the quilt cover and pillowcases gives the bed a crisp, finished look.","features":["Made from 100% cotton","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% cotton","Made in":"China"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl159","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Summer In Bloom Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11546","tag":"New","ph":"","img":"assets/products/bl159.webp","imgs":["assets/products/bl159.webp","assets/products/bl159-2.webp","assets/products/bl159-3.webp","assets/products/bl159-4.webp","assets/products/bl159-5.webp","assets/products/bl159-6.webp","assets/products/bl159-7.webp","assets/products/bl159-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":389,"memberPrice":350},{"label":"King","price":389,"memberPrice":350},{"label":"Super King","price":389,"memberPrice":350}],"colours":[{"name":"Natural","hex":"#34485d"}],"desc":"Bring a fresh, uplifting feel to your bedroom with the Summer In Bloom Quilt Cover Set.","features":["Made from 100% cotton sateen","Available in Double, Queen, King and Super King quilt cover sizes","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% cotton sateen"},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl160","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Stonewash Cotton Copper Clay Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11547","tag":"New","ph":"","img":"assets/products/bl160.webp","imgs":["assets/products/bl160.webp","assets/products/bl160-2.webp","assets/products/bl160-3.webp","assets/products/bl160-4.webp","assets/products/bl160-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":345,"memberPrice":310},{"label":"Double","price":434,"memberPrice":391},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391},{"label":"Super King","price":434,"memberPrice":391}],"desc":"Make your bed feel beautiful, relaxed and ready to sink into with the Stonewashed Cotton Copper Clay Quilt Cover Set. Made from stonewashed cotton, it has a soft, gently textured feel and an easy lived-in look that suits everyday bedrooms beautifully, while a cord piped edging on the quilt cover and pillowcases adds a neat, tailored finish.","features":["Made from 100% Stonewashed Cotton","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% Stonewashed Cotton","Made in":"Pakistan"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well.Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl161","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Stonewash Cotton Vivid Plum Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11548","tag":"New","ph":"","img":"assets/products/bl161.webp","imgs":["assets/products/bl161.webp","assets/products/bl161-2.webp","assets/products/bl161-3.webp","assets/products/bl161-4.webp","assets/products/bl161-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":345,"memberPrice":310},{"label":"Double","price":434,"memberPrice":391},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391},{"label":"Super King","price":434,"memberPrice":391}],"desc":"Make your bed feel beautiful, relaxed and ready to sink into with the Stonewashed Cotton Vivid Plum Quilt Cover Set. Made from stonewashed cotton, it has a soft, gently textured feel and an easy lived-in look that suits everyday bedrooms beautifully, while a cord piped edging on the quilt cover and pillowcases adds a neat, tailored finish.","features":["Made from 100% Stonewashed Cotton","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% Stonewashed Cotton","Made in":"Pakistan"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well.Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl162","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Stonewash Cotton Green Haze Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11549","tag":"New","ph":"","img":"assets/products/bl162.webp","imgs":["assets/products/bl162.webp","assets/products/bl162-2.webp","assets/products/bl162-3.webp","assets/products/bl162-4.webp","assets/products/bl162-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":345,"memberPrice":310},{"label":"Double","price":434,"memberPrice":391},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391},{"label":"Super King","price":434,"memberPrice":391}],"desc":"Make your bed feel beautiful, relaxed and ready to sink into with the Stonewash Cotton Green Haze Quilt Cover Set. Made from stonewashed cotton, it has a soft, gently textured feel and an easy lived-in look that suits everyday bedrooms beautifully, while a cord piped edging on the quilt cover and pillowcases adds a neat, tailored finish.","features":["Made from 100% Stonewashed Cotton","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% Stonewashed Cotton","Made in":"Pakistan"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well.Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl163","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Stonewash Cotton Pearl Blush Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11550","tag":"New","ph":"","img":"assets/products/bl163.webp","imgs":["assets/products/bl163.webp","assets/products/bl163-2.webp","assets/products/bl163-3.webp","assets/products/bl163-4.webp","assets/products/bl163-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":345,"memberPrice":310},{"label":"Double","price":434,"memberPrice":391},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391},{"label":"Super King","price":434,"memberPrice":391}],"desc":"Make your bed feel beautiful, relaxed and ready to sink into with the Stonewash Cotton Pearl Blush Quilt Cover Set. Made from stonewashed cotton, it has a soft, gently textured feel and an easy lived-in look that suits everyday bedrooms beautifully, while a cord piped edging on the quilt cover and pillowcases adds a neat, tailored finish.","features":["Made from 100% Stonewashed Cotton","Available in Single, Double, Queen, King and Super King sizes.","Features button closure and corner ties that can be fastened to the loops of our quilts. This will help to prevent the quilt from slipping around inside the cover."],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from 100% Stonewashed Cotton","Made in":"Pakistan"},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well.Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl164","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Jordan Stripe Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11551","tag":"New","ph":"","img":"assets/products/bl164.webp","imgs":["assets/products/bl164.webp","assets/products/bl164-2.webp","assets/products/bl164-3.webp","assets/products/bl164-4.webp","assets/products/bl164-5.webp","assets/products/bl164-6.webp","assets/products/bl164-7.webp","assets/products/bl164-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":389,"memberPrice":350},{"label":"Double","price":423,"memberPrice":381},{"label":"Queen","price":423,"memberPrice":381},{"label":"King","price":423,"memberPrice":381},{"label":"Super King","price":423,"memberPrice":381}],"colours":[{"name":"Pecan","hex":"#34485d"}],"desc":"Refresh your bedroom look with the Jordan Stripe Quilt Cover Set, designed to add effortless texture and timeless pattern to your space. Crafted from soft cotton with a classic seersucker stripe, it creates a relaxed, lived in feel while bringing subtle depth to your styling. Pair it with the matching Jordan Stripe European Pillowcase to complete the look.","features":["Made from cotton, with a yarn dyed seersucker stripe front and a plain dye reverse.","Available in Single, Double, Queen, King and Super King quilt cover sizes","Button closure","Quilt features corner ties to secure your quilt","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from cotton, with a yarn dyed seersucker stripe front and a plain dye reverse."},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl165","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Cynthia White Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":445,"memberPrice":400,"sku":"SH-11552","tag":"New","ph":"","img":"assets/products/bl165.webp","imgs":["assets/products/bl165.webp","assets/products/bl165-2.webp","assets/products/bl165-3.webp","assets/products/bl165-4.webp","assets/products/bl165-5.webp","assets/products/bl165-6.webp","assets/products/bl165-7.webp","assets/products/bl165-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":445,"memberPrice":400},{"label":"Queen","price":445,"memberPrice":400},{"label":"King","price":445,"memberPrice":400},{"label":"Super King","price":445,"memberPrice":400}],"desc":"A sophisticated style staple, the Cynthia Quilt Cover Set features a beautiful yet subtle art nouveau diamond design with fanning stripes. Crafted from a soft cotton with the textured jacquard design, you'll sleep comfortably under this breathable and stylish quilt cover set. Complete the look with matching Cynthia European Pillowcase.","features":["Made from Cotton","Available in Double, Queen, King and Super King quilt cover sizes","Cotton jacquard art nouveau diamond design","Button closure","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from Cotton"},"dimensions":"Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Do not iron. Do not dry clean."},
  {"id":"bl166","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Look Toffee Quilt Cover Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11553","tag":"New","ph":"","img":"assets/products/bl166.webp","imgs":["assets/products/bl166.webp","assets/products/bl166-2.webp","assets/products/bl166-3.webp","assets/products/bl166-4.webp","assets/products/bl166-5.webp","assets/products/bl166-6.webp","assets/products/bl166-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":389,"memberPrice":350},{"label":"King","price":412,"memberPrice":371},{"label":"Super King","price":412,"memberPrice":371}],"desc":"The comfort of easy care, breathable cotton with the trending look of luxurious linen, our Washed Linen Look quilt cover is sure to impress. Available in a variety of classic and new season colours, the relaxed style of this cotton doona cover features a 2cm self flange finish and is perfectly paired with natural textures and organic touches.","features":["Made from cotton with washed linen finish. Features a 2cm self flange.","Available in Single, Double, Queen, King and Super King sizes.","Button closure","This quilt cover set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Quilt Covers","Material":"Made from cotton with washed linen finish. Features a 2cm self flange."},"dimensions":"Single size: 1 quilt cover 140cm W x 210cm L & 1 pillowcase 48 x 73cm (Single size available in selected colours) | Double size: 1 quilt cover 180cm W x 210cm L & 2 pillowcases 48 x 73cm (Double size available in selected colours) | Queen size: 1 quilt cover 210cm W x 210cm L & 2 pillowcases 48 x 73cm (All colours) | King size: 1 quilt cover 240cm W x 210cm L & 2 pillowcases 48 x 73cm (All colours) | Super King size: 1 quilt cover 270cm W x 240cm L & 2 pillowcases 48 x 73cm each (All colours)","care":"Cold machine wash on gentle cycle before first use. Wash dark colours separately. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Cool iron if desired. Do not dry clean."},
  {"id":"bl167","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Suzi Sage Stripe Reversible Comforter Set","cat":"Bedroom","room":"Bedroom","price":300,"memberPrice":270,"sku":"SH-11554","tag":"New","ph":"","img":"assets/products/bl167.webp","imgs":["assets/products/bl167.webp","assets/products/bl167-2.webp","assets/products/bl167-3.webp","assets/products/bl167-4.webp","assets/products/bl167-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":300,"memberPrice":270},{"label":"Double","price":345,"memberPrice":310},{"label":"Queen","price":345,"memberPrice":310},{"label":"King","price":345,"memberPrice":310}],"desc":"Make a bold statement in your bedroom with the Suzi Sage Stripe Reversible Comforter Set, designed with a solid colour cover and striped reverse for two easy looks in one. The smooth microfibre cover offers a cosy feel that is easy to care for, while the reversible design lets you flip between a clean, understated side and a more patterned finish whenever you feel like changing the mood.","features":["Made from microfibre with polyester fill.","Available in Single, Double, Queen, King and Super King.","Super King 1 comforter 270 x 240cm & 2 pillowcase 48 x 73cm each","Reversible. Featuring square quilting design"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Made from microfibre with polyester fill."},"dimensions":"Single size: 1 comforter 140 x 210cm & 1 pillowcase 48 x 73cm | Double size: 1 comforter 180 x 210cm & 2 pillowcase 48 x 73cm each | Queen size: 1 comforter 210 x 210cm & 2 pillowcase 48 x 73cm each | King size: 1 comforter 240 x 210cm & 2 pillowcase 48 x 73cm each","care":"Fluff and air frequently. Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Line dry, can be tumble dried on low setting. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl168","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Snoozi White & Black Spot Comforter Set","cat":"Bedroom","room":"Bedroom","price":300,"memberPrice":270,"sku":"SH-11555","tag":"New","ph":"","img":"assets/products/bl168.webp","imgs":["assets/products/bl168.webp","assets/products/bl168-2.webp","assets/products/bl168-3.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":300,"memberPrice":270},{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":367,"memberPrice":330},{"label":"King","price":367,"memberPrice":330},{"label":"Super King","price":367,"memberPrice":330}],"desc":"Add a playful touch to your bedroom with the Snoozi White & Black Spot Comforter Set. Made from soft, easy-care microfibre, it's perfect for creating a cosy and inviting sleep space with effortless style.","features":["Comforter: Made from microfibre with a polyester fill. Pillowcases: Made from microfibre","Available in Single, Double, Queen and King size comforter sizes","Super King 1 comforter 270 x 240cm & 2 pillowcase 48 x 73cm each"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Comforter: Made from microfibre with a polyester fill. Pillowcases: Made from microfibre","Made in":"China"},"dimensions":"Single size: 1 comforter 140 x 210cm & 1 pillowcase 48 x 73cm | Double size: 1 comforter 180 x 210cm & 2 pillowcase 48 x 73cm each | Queen size: 1 comforter 210 x 210cm & 2 pillowcase 48 x 73cm each | King size: 1 comforter 240 x 210cm & 2 pillowcase 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Do not iron. Do not dry clean."},
  {"id":"bl169","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Snoozi Toffee Spot Comforter Set","cat":"Bedroom","room":"Bedroom","price":156,"memberPrice":140,"sku":"SH-11556","tag":"New","ph":"","img":"assets/products/bl169.webp","imgs":["assets/products/bl169.webp","assets/products/bl169-2.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Add a playful touch to your bedroom with the Snoozi Toffee Spot Comforter Set. Made from soft, easy-care microfibre, it's perfect for creating a comfortable and inviting sleep space with effortless style.","features":["Comforter: Made from microfibre with a polyester fill. Pillowcases: Made from microfibre","Available in Single, Double, Queen and King size comforter sizes","Super King 1 comforter 270 x 240cm & 2 pillowcase 48 x 73cm each"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Comforter: Made from microfibre with a polyester fill. Pillowcases: Made from microfibre","Made in":"China","Size":"Double"},"dimensions":"Single size: 1 comforter 140 x 210cm & 1 pillowcase 48 x 73cm | Double size: 1 comforter 180 x 210cm & 2 pillowcase 48 x 73cm each | Queen size: 1 comforter 210 x 210cm & 2 pillowcase 48 x 73cm each | King size: 1 comforter 240 x 210cm & 2 pillowcase 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Do not iron. Do not dry clean."},
  {"id":"bl170","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Snoozi Cube Charcoal Microfibre Comforter Set","cat":"Bedroom","room":"Bedroom","price":300,"memberPrice":270,"sku":"SH-11557","tag":"New","ph":"","img":"assets/products/bl170.webp","imgs":["assets/products/bl170.webp","assets/products/bl170-2.webp","assets/products/bl170-3.webp","assets/products/bl170-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":300,"memberPrice":270},{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":367,"memberPrice":330},{"label":"King","price":367,"memberPrice":330},{"label":"Super King","price":367,"memberPrice":330}],"desc":"A comforter set in a cushion? What more could you want! The Snoozi Cube microfibre comforter set is perfect for those last-minute visitors, weekend camping trips, teenagers and more! Once the fun is over, just fold it up in to the cushion shaped storage cover.","features":["Comforter: Outer is made from Plain Dye Microfibre, filling is made from 270GSM Polyester. Pillowcases: Microfibre, not quilted.","Available in Single, Double, Queen, King and Super King.","Super King 1 comforter 270 x 240cm & 2 pillowcase 48 x 73cm each","Featuring square quilting"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Comforter: Outer is made from Plain Dye Microfibre, filling is made from 270GSM Polyester. Pillowcases: Microfibre, not "},"dimensions":"Single size: 1 comforter 140 x 210cm & 1 pillowcase 48 x 73cm | Double size: 1 comforter 180 x 210cm & 2 pillowcase 48 x 73cm each | Queen size: 1 comforter 210 x 210cm & 2 pillowcase 48 x 73cm each | King size: 1 comforter 240 x 210cm & 2 pillowcase 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Rinse well. Line dry without delay. Do not iron. Do not dry clean. Do not tumble dry. Do not soak or rub. Do not bleach. Please ensure your washing machine can handle the cubic volume of this product before laundering. Commercial laundering is recommended."},
  {"id":"bl171","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Snoozi Cube Green Microfibre Comforter Set","cat":"Bedroom","room":"Bedroom","price":300,"memberPrice":270,"sku":"SH-11558","tag":"New","ph":"","img":"assets/products/bl171.webp","imgs":["assets/products/bl171.webp","assets/products/bl171-2.webp","assets/products/bl171-3.webp","assets/products/bl171-4.webp","assets/products/bl171-5.webp","assets/products/bl171-6.webp","assets/products/bl171-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":300,"memberPrice":270},{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":367,"memberPrice":330},{"label":"King","price":367,"memberPrice":330},{"label":"Super King","price":367,"memberPrice":330}],"desc":"A comforter set in a cushion? What more could you want! The Snoozi Cube microfibre comforter set is perfect for those last-minute visitors, weekend camping trips, teenagers and more! Once the fun is over, just fold it up in to the cushion shaped storage cover.","features":["Comforter: Outer is made from Plain Dye Microfibre, filling is made from 270GSM Polyester. Pillowcases: Microfibre, not quilted.","Available in Single, Double, Queen, King and Super King.","Super King 1 comforter 270 x 240cm & 2 pillowcase 48 x 73cm each","Featuring square quilting"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Comforter: Outer is made from Plain Dye Microfibre, filling is made from 270GSM Polyester. Pillowcases: Microfibre, not "},"dimensions":"Single size: 1 comforter 140 x 210cm & 1 pillowcase 48 x 73cm | Double size: 1 comforter 180 x 210cm & 2 pillowcase 48 x 73cm each | Queen size: 1 comforter 210 x 210cm & 2 pillowcase 48 x 73cm each | King size: 1 comforter 240 x 210cm & 2 pillowcase 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Rinse well. Line dry without delay. Do not iron. Do not dry clean. Do not tumble dry. Do not soak or rub. Do not bleach. Please ensure your washing machine can handle the cubic volume of this product before laundering. Commercial laundering is recommended."},
  {"id":"bl172","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Snoozi Cube Natural Microfibre Comforter Set","cat":"Bedroom","room":"Bedroom","price":300,"memberPrice":270,"sku":"SH-11559","tag":"New","ph":"","img":"assets/products/bl172.webp","imgs":["assets/products/bl172.webp","assets/products/bl172-2.webp","assets/products/bl172-3.webp","assets/products/bl172-4.webp","assets/products/bl172-5.webp","assets/products/bl172-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":300,"memberPrice":270},{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":367,"memberPrice":330},{"label":"King","price":367,"memberPrice":330},{"label":"Super King","price":367,"memberPrice":330}],"desc":"A comforter set in a cushion? What more could you want! The Snoozi Cube microfibre comforter set is perfect for those last-minute visitors, weekend camping trips, teenagers and more! Once the fun is over, just fold it up in to the cushion shaped storage cover.","features":["Comforter: Outer is made from Plain Dye Microfibre, filling is made from 270GSM Polyester. Pillowcases: Microfibre, not quilted.","Available in Single, Double, Queen, King and Super King.","Super King 1 comforter 270 x 240cm & 2 pillowcase 48 x 73cm each","Featuring square quilting"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Comforter: Outer is made from Plain Dye Microfibre, filling is made from 270GSM Polyester. Pillowcases: Microfibre, not "},"dimensions":"Single size: 1 comforter 140 x 210cm & 1 pillowcase 48 x 73cm | Double size: 1 comforter 180 x 210cm & 2 pillowcase 48 x 73cm each | Queen size: 1 comforter 210 x 210cm & 2 pillowcase 48 x 73cm each | King size: 1 comforter 240 x 210cm & 2 pillowcase 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Rinse well. Line dry without delay. Do not iron. Do not dry clean. Do not tumble dry. Do not soak or rub. Do not bleach. Please ensure your washing machine can handle the cubic volume of this product before laundering. Commercial laundering is recommended."},
  {"id":"bl173","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Snoozi Cube Chocolate Microfibre Comforter Set","cat":"Bedroom","room":"Bedroom","price":300,"memberPrice":270,"sku":"SH-11560","tag":"New","ph":"","img":"assets/products/bl173.webp","imgs":["assets/products/bl173.webp","assets/products/bl173-2.webp","assets/products/bl173-3.webp","assets/products/bl173-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":300,"memberPrice":270},{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":367,"memberPrice":330},{"label":"King","price":367,"memberPrice":330},{"label":"Super King","price":367,"memberPrice":330}],"desc":"A comforter set in a cushion? What more could you want! The Snoozi Cube microfibre comforter set is perfect for those last-minute visitors, weekend camping trips, teenagers and more! Once the fun is over, just fold it up in to the cushion shaped storage cover.","features":["Comforter: Outer is made from Plain Dye Microfibre, filling is made from 270GSM Polyester. Pillowcases: Microfibre, not quilted.","Available in Single, Double, Queen, King and Super King.","Super King 1 comforter 270 x 240cm & 2 pillowcase 48 x 73cm each","Featuring square quilting"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Comforter: Outer is made from Plain Dye Microfibre, filling is made from 270GSM Polyester. Pillowcases: Microfibre, not "},"dimensions":"Single size: 1 comforter 140 x 210cm & 1 pillowcase 48 x 73cm | Double size: 1 comforter 180 x 210cm & 2 pillowcase 48 x 73cm each | Queen size: 1 comforter 210 x 210cm & 2 pillowcase 48 x 73cm each | King size: 1 comforter 240 x 210cm & 2 pillowcase 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Rinse well. Line dry without delay. Do not iron. Do not dry clean. Do not tumble dry. Do not soak or rub. Do not bleach. Please ensure your washing machine can handle the cubic volume of this product before laundering. Commercial laundering is recommended."},
  {"id":"bl174","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Bahama Palm Reversible Comforter Set","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11561","tag":"New","ph":"","img":"assets/products/bl174.webp","imgs":["assets/products/bl174.webp","assets/products/bl174-2.webp","assets/products/bl174-3.webp","assets/products/bl174-4.webp","assets/products/bl174-5.webp","assets/products/bl174-6.webp","assets/products/bl174-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":412,"memberPrice":371},{"label":"Super King","price":412,"memberPrice":371}],"colours":[{"name":"Blue","hex":"#34485d"}],"desc":"Transform your bedroom into a tropical oasis with the stunning Bahama Palm Reversible Comforter Set, featuring a serene blue palm tree print on a crisp white background. The reverse side showcases a soothing watercolour stripe design in shades of blue, natural, and white, offering two beautiful looks in one.","features":["Comforter is made from microfibre with a 250GSM polyester filling. Pillowcases are made from microfibre.","Available in Double, Queen, King and Super King comforter sizes","Reversible tropical palm and stripe designs","This comforter set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Comforter is made from microfibre with a 250GSM polyester filling. Pillowcases are made from microfibre."},"dimensions":"Double size: 1 x Comforter 180cm W x 210cm L, 2 x pillowcase 48cm W x 73cm L | Queen size: 1 x Comforter 210cm W x 210cm L, 2 x pillowcase 48cm W x 73cm L | King size: 1 x Comforter 240cm W x 210cm L, 2 x pillowcase 48cm W x 73cm L | Super King size: 1 x Comforter 270cm W x 240cm L, 2 x pillowcase 48cm W x 73cm L","care":"Fluff and air frequently. Cold gentle machine wash before first use. Do not soak or rub. Do not bleach. Rinse well. Line dry, can be tumble dried on low setting. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl175","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Suzi Chocolate/Blue Stripe Reverse Comforter Set","cat":"Bedroom","room":"Bedroom","price":134,"memberPrice":121,"sku":"SH-11562","tag":"New","ph":"","img":"assets/products/bl175.webp","imgs":["assets/products/bl175.webp","assets/products/bl175-2.webp","assets/products/bl175-3.webp","assets/products/bl175-4.webp","assets/products/bl175-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":134,"memberPrice":121},{"label":"Double","price":167,"memberPrice":150},{"label":"Queen","price":167,"memberPrice":150},{"label":"King","price":167,"memberPrice":150}],"desc":"Make a bold statement in your bedroom with the Suzi Stripe Reverse Comforter Set, designed with a solid colour cover and striped reverse for two easy looks in one. The smooth microfibre cover offers a cosy feel that is easy to care for, while the reversible design lets you flip between a clean, understated side and a more patterned finish whenever you feel like changing the mood.","features":["Made from microfibre with polyester fill.","Available in Single, Double, Queen, King and Super King.","Super King 1 comforter 270 x 240cm & 2 pillowcase 48 x 73cm each","Reversible. Featuring square quilting design"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Made from microfibre with polyester fill."},"dimensions":"Single size: 1 comforter 140 x 210cm & 1 pillowcase 48 x 73cm | Double size: 1 comforter 180 x 210cm & 2 pillowcase 48 x 73cm each | Queen size: 1 comforter 210 x 210cm & 2 pillowcase 48 x 73cm each | King size: 1 comforter 240 x 210cm & 2 pillowcase 48 x 73cm each","care":"Fluff and air frequently. Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Line dry, can be tumble dried on low setting. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl176","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Kingscliff Comforter Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11563","tag":"New","ph":"","img":"assets/products/bl176.webp","imgs":["assets/products/bl176.webp","assets/products/bl176-2.webp","assets/products/bl176-3.webp","assets/products/bl176-4.webp","assets/products/bl176-5.webp","assets/products/bl176-6.webp","assets/products/bl176-7.webp","assets/products/bl176-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":389,"memberPrice":350},{"label":"King","price":389,"memberPrice":350},{"label":"Super King","price":389,"memberPrice":350}],"colours":[{"name":"Navy","hex":"#34485d"}],"desc":"Totally beach house-worthy, the Kingscliff Comforter Set is the perfect choice for your coastal décor. Featuring a nautically-inspired reversible navy and white stripe print, this bed comforter is as easy to care for as it is stylish!","features":["Made with a microfibre outer and a 250gsm polyester fill.","Super King 1 comforter 270 x 240cm & 2 pillowcase 48 x 73cm each"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Made with a microfibre outer and a 250gsm polyester fill."},"dimensions":"Single size: 1 comforter 140 x 210cm & 1 pillowcase 48 x 73cm | Double size: 1 comforter 180 x 210cm & 2 pillowcase 48 x 73cm each | Queen size: 1 comforter 210 x 210cm & 2 pillowcase 48 x 73cm each | King size: 1 comforter 240 x 210cm & 2 pillowcase 48 x 73cm each","care":"Fluff and air frequently. Cold machine wash before first use on gentle cycle. Wash dark colours separately. Do not bleach. Rinse well. Line dry, can be tumble dried on low setting. Please ensure your washing machine and or dryer can handle the cubic volume of this product before laundering."},
  {"id":"bl177","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Sia Shell Quilted Comforter Set","cat":"Bedroom","room":"Bedroom","price":434,"memberPrice":391,"sku":"SH-11564","tag":"New","ph":"","img":"assets/products/bl177.webp","imgs":["assets/products/bl177.webp","assets/products/bl177-2.webp","assets/products/bl177-3.webp","assets/products/bl177-4.webp","assets/products/bl177-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":456,"memberPrice":410},{"label":"Super King","price":456,"memberPrice":410}],"colours":[{"name":"Cream","hex":"#34485d"}],"desc":"Wrap your bedroom in relaxed coastal luxury with the Sia Shell Quilted Comforter Set, featuring an elegant shell-inspired quilted design and soft neutral tones. Crafted with a smooth microfibre cover, breathable cotton reverse and a softly cushioned feel, this quilted comforter set creates a warm and inviting layer for year-round comfort.","features":["Made from a microfibre cover, with a 250gsm polyester fill. Comforter and Pillowcases have quilted front and cotton reverse","Available in Queen, King and Super King comforter sizes","Elegant shell-inspired quilted design"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Made from a microfibre cover, with a 250gsm polyester fill. Comforter and Pillowcases have quilted front and cotton reve"},"dimensions":"Queen size: 1 x Comforter 210cm W x 210cm L, 2 x pillowcase 48cm W x 73cm L | King size: 1 x Comforter 240cm W x 210cm L, 2 x pillowcase 48cm W x 73cm L | Super King size: 1 Comforter 270 x 240cm & 2 pillowcase 48 x 73cm each","care":"Fluff and air frequently. Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Line Dry, can be tumble dried on low setting. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl178","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Gracie Reversible Floral/Stripe Comforter Set","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11565","tag":"New","ph":"","img":"assets/products/bl178.webp","imgs":["assets/products/bl178.webp","assets/products/bl178-2.webp","assets/products/bl178-3.webp","assets/products/bl178-4.webp","assets/products/bl178-5.webp","assets/products/bl178-6.webp","assets/products/bl178-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":345,"memberPrice":310},{"label":"Double","price":412,"memberPrice":371},{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":412,"memberPrice":371}],"colours":[{"name":"Pink","hex":"#f478ae"}],"desc":"Bring an easy bloom to your bedroom with the Gracie Reversible Floral/Stripe Comforter Set. Made with a microfibre cover, this comforter set offers smooth softness and lightweight comfort for everyday layering. The floral design brings a fresh, pretty feel to the bed, while the reverse stripe design gives you a second, softly classic look. Finished with a scalloped edge, it adds a sweet and beautifully detailed touch to your bedroom.","features":["Made from microfibre with a polyester fill","Available in Single, Double, Queen and King comforter sizes"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Made from microfibre with a polyester fill","Made in":"China"},"dimensions":"Single: 1 comforter 140x210cm & 1 pillowcase 48x73cm | Double: 1 comforter 180x210cm & 2 pillowcases 48x73cm | Queen: 1 comforter 210x210cm & 2 pillowcases 48x73cm | King: 1 comforter 240x210cm & 2 pillowcases 48x73cm","care":"Fluff and air frequently. Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Line Dry, can be tumble dried on low setting. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl179","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Heathcliff Reversible Comforter Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11566","tag":"New","ph":"","img":"assets/products/bl179.webp","imgs":["assets/products/bl179.webp","assets/products/bl179-2.webp","assets/products/bl179-3.webp","assets/products/bl179-4.webp","assets/products/bl179-5.webp","assets/products/bl179-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":389,"memberPrice":350},{"label":"King","price":389,"memberPrice":350},{"label":"Super King","price":389,"memberPrice":350}],"colours":[{"name":"Navy","hex":"#34485d"}],"desc":"The Heathcliff Reversible Comforter Set makes a fresh bed feel delightfully easy. Featuring a colourful striped reversible design, this soft microfibre comforter with a soft feel for everyday comfort and warmth. Flip it, layer it, smooth it over the bed and call it done - your bedroom refresh is officially sorted.","features":["Made from microfibre with a polyester fill","Available in Single, Double, Queen, King and Super King.","Super King 1 comforter 270 x 240cm & 2 pillowcase 48 x 73cm each","Reversible. Featuring square quilting design"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Made from microfibre with a polyester fill"},"dimensions":"Single size: 1 comforter 140 x 210cm & 1 pillowcase 48 x 73cm | Double size: 1 comforter 180 x 210cm & 2 pillowcase 48 x 73cm each | Queen size: 1 comforter 210 x 210cm & 2 pillowcase 48 x 73cm each | King size: 1 comforter 240 x 210cm & 2 pillowcase 48 x 73cm each","care":"Fluff and air frequently. Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Line Dry, can be tumble dried on low setting. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl180","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Snoozi Cube Dusty Pink Microfibre Comforter Set","cat":"Bedroom","room":"Bedroom","price":300,"memberPrice":270,"sku":"SH-11567","tag":"New","ph":"","img":"assets/products/bl180.webp","imgs":["assets/products/bl180.webp","assets/products/bl180-2.webp","assets/products/bl180-3.webp","assets/products/bl180-4.webp","assets/products/bl180-5.webp","assets/products/bl180-6.webp","assets/products/bl180-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":300,"memberPrice":270},{"label":"Double","price":367,"memberPrice":330},{"label":"Queen","price":367,"memberPrice":330},{"label":"King","price":367,"memberPrice":330},{"label":"Super King","price":367,"memberPrice":330}],"desc":"A comforter set in a cushion? What more could you want! The Snoozi Cube microfibre comforter set is perfect for those last-minute visitors, weekend camping trips, teenagers and more! Once the fun is over, just fold it up in to the cushion shaped storage cover.","features":["Comforter: Outer is made from Plain Dye Microfibre, filling is made from 270GSM Polyester. Pillowcases: Microfibre, not quilted.","Available in Single, Double, Queen, King and Super King.","Super King 1 comforter 270 x 240cm & 2 pillowcase 48 x 73cm each","Featuring square quilting"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Comforter: Outer is made from Plain Dye Microfibre, filling is made from 270GSM Polyester. Pillowcases: Microfibre, not "},"dimensions":"Single size: 1 comforter 140 x 210cm & 1 pillowcase 48 x 73cm | Double size: 1 comforter 180 x 210cm & 2 pillowcase 48 x 73cm each | Queen size: 1 comforter 210 x 210cm & 2 pillowcase 48 x 73cm each | King size: 1 comforter 240 x 210cm & 2 pillowcase 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Rinse well. Line dry without delay. Do not iron. Do not dry clean. Do not tumble dry. Do not soak or rub. Do not bleach. Please ensure your washing machine can handle the cubic volume of this product before laundering. Commercial laundering is recommended."},
  {"id":"bl181","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Cosy Cube Berry Comforter Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11568","tag":"New","ph":"","img":"assets/products/bl181.webp","imgs":["assets/products/bl181.webp","assets/products/bl181-2.webp","assets/products/bl181-3.webp","assets/products/bl181-4.webp","assets/products/bl181-5.webp","assets/products/bl181-6.webp","assets/products/bl181-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"Double","price":434,"memberPrice":391},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391},{"label":"Super King","price":434,"memberPrice":391}],"desc":"Get cosy with the Cosy Cube Comforter Set! Perfect for those unexpected guests, lounging on the couch, weekend camping trips and more. Once the fun is over, easily fold it into its matching case to store away or put it to use as a decorative cushion.","features":["A soft fleece microfibre top with a faux suede reverse and 270GSM polyester filling.","Available in Single, Double, Queen, King and Super King.","Super King 1 comforter 270 x 240cm & 2 pillowcase 48 x 73cm each."],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"A soft fleece microfibre top with a faux suede reverse and 270GSM polyester filling."},"dimensions":"Single size: 1 comforter 140 x 210cm & 1 pillowcase 48 x 73cm. | Double size: 1 comforter 180 x 210cm & 2 pillowcase 48 x 73cm each. | Queen size: 1 comforter 210 x 210cm & 2 pillowcase 48 x 73cm each. | King size: 1 comforter 240 x 210cm & 2 pillowcase 48 x 73cm each.","care":"Cold gentle machine wash with like colours before first use. Rinse well. Line dry without delay. Do not iron. Do not dry clean. Do not tumble dry. Do not soak or rub. Do not bleach. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl182","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Cosy Cube Charcoal Comforter Set","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11569","tag":"New","ph":"","img":"assets/products/bl182.webp","imgs":["assets/products/bl182.webp","assets/products/bl182-2.webp","assets/products/bl182-3.webp","assets/products/bl182-4.webp","assets/products/bl182-5.webp","assets/products/bl182-6.webp","assets/products/bl182-7.webp","assets/products/bl182-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"Double","price":434,"memberPrice":391},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391},{"label":"Super King","price":434,"memberPrice":391}],"desc":"Get cosy with the Cosy Cube Comforter Set! Perfect for those unexpected guests, lounging on the couch, weekend camping trips and more. Once the fun is over, easily fold it into its matching case to store away or put it to use as a decorative cushion.","features":["Featuring a soft fleece microfibre top with a faux suede reverse and 270GSM polyester filling.","Available in Single, Double, Queen, King and Super King.","Super King 1 comforter 270 x 240cm & 2 pillowcase 48 x 73cm each."],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Featuring a soft fleece microfibre top with a faux suede reverse and 270GSM polyester filling."},"dimensions":"Single size: 1 comforter 140 x 210cm & 1 pillowcase 48 x 73cm. | Double size: 1 comforter 180 x 210cm & 2 pillowcase 48 x 73cm each. | Queen size: 1 comforter 210 x 210cm & 2 pillowcase 48 x 73cm each. | King size: 1 comforter 240 x 210cm & 2 pillowcase 48 x 73cm each.","care":"Cold gentle machine wash with like colours before first use. Rinse well. Line dry without delay. Do not iron. Do not dry clean. Do not tumble dry. Do not soak or rub. Do not bleach. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl183","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Cassian Stripe Comforter Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11570","tag":"New","ph":"","img":"assets/products/bl183.webp","imgs":["assets/products/bl183.webp","assets/products/bl183-2.webp","assets/products/bl183-3.webp","assets/products/bl183-4.webp","assets/products/bl183-5.webp","assets/products/bl183-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":412,"memberPrice":371},{"label":"Queen","price":434,"memberPrice":391},{"label":"King","price":434,"memberPrice":391},{"label":"Super King","price":434,"memberPrice":391}],"colours":[{"name":"Caramel","hex":"#34485d"}],"desc":"Bring warmth and effortless style to your bedroom with the Cassian Stripe Comforter Set. Crafted from soft yarn dyed cotton, this striped comforter features soft earthy tones for a cosy, inviting feel. The timeless stripe design is complemented by a reversible narrower stripe on the reverse, giving you two versatile looks in one for effortless bedroom styling.","features":["Made from yarn dyed cotton with a polyester fill","Available in Double, Queen, King and Super King comforter sizes","Quilted stripe design adding texture for a cosy, layered look"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Made from yarn dyed cotton with a polyester fill"},"dimensions":"Double size: 1 x Comforter 180cm W x 210cm L, 2 x pillowcase 48cm W x 73cm L | Queen size: 1 x Comforter 210cm W x 210cm L, 2 x pillowcase 48cm W x 73cm L | King size: 1 x Comforter 240cm W x 210cm L, 2 x pillowcase 48cm W x 73cm L | Super King size: 1 x Comforter 270cm W x 240cm L, 2 x pillowcase 48cm W x 73cm L","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Do not iron. Do not dry clean. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl184","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Salma Stripe Reversible Comforter Set","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11571","tag":"New","ph":"","img":"assets/products/bl184.webp","imgs":["assets/products/bl184.webp","assets/products/bl184-2.webp","assets/products/bl184-3.webp","assets/products/bl184-4.webp","assets/products/bl184-5.webp","assets/products/bl184-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":345,"memberPrice":310},{"label":"Queen","price":389,"memberPrice":350},{"label":"King","price":389,"memberPrice":350},{"label":"Single","price":389,"memberPrice":350}],"colours":[{"name":"Caramel","hex":"#34485d"}],"desc":"Refresh your bedroom with the Salma Stripe Reversible Comforter Set, designed to bring warmth, comfort and effortless style to your space. Featuring a contemporary striped design in soft blush and earthy tones, this reversible comforter offers two versatile looks in one for easy styling updates. Wonderfully soft and cosy, it creates an inviting layered look and is the perfect all-in-one bedding solution for a relaxed, effortlessly styled bedroom.","features":["Comforter: Outer is made from Plain Dye Microfibre, filling is made from 250GSM Polyester. Pillowcases: Microfibre, not quilted.","Available in Single, Double, Queen and King.","Reversible. Featuring square quilting design","This comforter set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Comforter: Outer is made from Plain Dye Microfibre, filling is made from 250GSM Polyester. Pillowcases: Microfibre, not "},"dimensions":"Single size: 1 comforter 140 x 210cm & 1 pillowcase 48 x 73cm | Double size: 1 comforter 180 x 210cm & 2 pillowcase 48 x 73cm each | Queen size: 1 comforter 210 x 210cm & 2 pillowcase 48 x 73cm each | King size: 1 comforter 240 x 210cm & 2 pillowcase 48 x 73cm each","care":"Fluff and air frequently. Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Line Dry, can be tumble dried on low setting. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl185","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Knox Textured Comforter Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11572","tag":"New","ph":"","img":"assets/products/bl185.webp","imgs":["assets/products/bl185.webp","assets/products/bl185-2.webp","assets/products/bl185-3.webp","assets/products/bl185-4.webp","assets/products/bl185-5.webp","assets/products/bl185-6.webp","assets/products/bl185-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":389,"memberPrice":350},{"label":"Queen","price":389,"memberPrice":350},{"label":"King","price":389,"memberPrice":350},{"label":"Super King","price":389,"memberPrice":350}],"colours":[{"name":"Caramel","hex":"#34485d"}],"desc":"Elevate your bedroom with the Knox Textured Comforter Set, showcasing a modern square quilted design and textured fabric that adds depth and designer detail. Plush yet breathable, this cosy comforter layers beautifully with your favourite throws and cushions for year-round comfort. Designed for comfort every night, the Knox Textured Comforter Set delivers a quick bedroom refresh with plush, contemporary warmth.","features":["Made from cotton with a 250GSM polyester fill","Available in Double, Queen, King and Super King comforter sizes","Textured comforter adds dimension and depth to your styling","This comforter set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Comforters","Material":"Made from cotton with a 250GSM polyester fill"},"dimensions":"Double size: 1 x Comforter 180cm W x 210cm L, 2 x pillowcase 48cm W x 73cm L | Queen size: 1 x Comforter 210cm W x 210cm L, 2 x pillowcase 48cm W x 73cm L | King size: 1 x Comforter 240cm W x 210cm L, 2 x pillowcase 48cm W x 73cm L | Super King size: 1 Comforter 285 x 260cm & 2 pillowcase 48 x 73cm each","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Do not iron. Do not dry clean. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl186","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Wren Stripe Coverlet Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11573","tag":"New","ph":"","img":"assets/products/bl186.webp","imgs":["assets/products/bl186.webp","assets/products/bl186-2.webp","assets/products/bl186-3.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/Double","price":412,"memberPrice":371},{"label":"Queen/King","price":445,"memberPrice":400}],"colours":[{"name":"Mahogany","hex":"#78563d"}],"desc":"The Wren Stripe Coverlet Set brings a warm, artisan-inspired layer to your bedroom. Made from yarn dyed cotton with soft fill, this coverlet set features a relaxed stripe design and mahogany-toned binding around the edges of the coverlet and pillowcases for a rich, earthy finish that feels authentic and inviting.","features":["Made from yarn dyed cotton with a polyester fill.","Available in Single/Double and Queen/King coverlet sizes"],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Made from yarn dyed cotton with a polyester fill.","Made in":"China"},"dimensions":"Single/Double Size: 1 coverlet 200x240cm, 2 pillowcases 48x73cm | Queen/King Size: 1 coverlet 240x240cm, 2 pillowcases 48x73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Do not iron. Do not dry clean. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl187","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Kennedy Check Reversible Coverlet Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11574","tag":"New","ph":"","img":"assets/products/bl187.webp","imgs":["assets/products/bl187.webp","assets/products/bl187-2.webp","assets/products/bl187-3.webp","assets/products/bl187-4.webp","assets/products/bl187-5.webp","assets/products/bl187-6.webp","assets/products/bl187-7.webp","assets/products/bl187-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/Double","price":412,"memberPrice":371},{"label":"Queen/King","price":445,"memberPrice":400}],"colours":[{"name":"Fuchsia","hex":"#ff417d"}],"desc":"Bring a little everyday pattern play to your bedroom with the Kennedy Check Reversible Coverlet Set. Made with a cotton outer and soft fill for comfortable layering, this reversible coverlet set features a colourful check pattern on both sides so you can switch the look whenever the mood strikes. Finished with a coordinating pillowcase featuring a quilted check front, plain reverse and piped edge in a rich berry tone, it is a cheerful and practical way to refresh your bed.","features":["Made with a cotton outer and polyester cotton fill. Pillowcase have a quilted front and plain blue reverse with a blue piped edge.","Available in Single/Double and Queen/King coverlet sizes","Reversible check design"],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Made with a cotton outer and polyester cotton fill. Pillowcase have a quilted front and plain blue reverse with a blue p"},"dimensions":"Single/Double Size: 1 coverlet 200x240cm, 2 pillowcases 48x73cm | Queen/King Size: 1 coverlet 240x240cm, 2 pillowcases 48x73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Do not iron. Do not dry clean. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl188","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Akello Linen Cotton Stripe Coverlet Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11575","tag":"New","ph":"","img":"assets/products/bl188.webp","imgs":["assets/products/bl188.webp","assets/products/bl188-2.webp","assets/products/bl188-3.webp","assets/products/bl188-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/Double","price":412,"memberPrice":371},{"label":"Queen/King","price":445,"memberPrice":400}],"colours":[{"name":"Chocolate","hex":"#5b3b2e"}],"desc":"Bring relaxed texture and gentle pattern to your bedroom with the Akello Linen Cotton Stripe Coverlet Set. Made from a yarn-dyed cotton and linen blend with a soft fill, it creates a comfortable extra layer with an inviting, naturally considered finish. Deep berry contrast binding neatly frames the striped coverlet and pillowcases, adding definition and a warm touch of colour.","features":["Made from Yarn-dyed cotton/linen blend cover and plain cotton reverse, with a Polyester fill.","Available in Single/Double and Queen/King sizes"],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Made from Yarn-dyed cotton/linen blend cover and plain cotton reverse, with a Polyester fill."},"dimensions":"Single/Double Size: 1 coverlet 200x240cm, 2 pillowcases 48x73cm | Queen/King Size: 1 coverlet 240x240cm, 2 pillowcases 48x73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl189","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Camden White Coverlet Set","cat":"Bedroom","room":"Bedroom","price":312,"memberPrice":281,"sku":"SH-11576","tag":"New","ph":"","img":"assets/products/bl189.webp","imgs":["assets/products/bl189.webp","assets/products/bl189-2.webp","assets/products/bl189-3.webp","assets/products/bl189-4.webp","assets/products/bl189-5.webp","assets/products/bl189-6.webp","assets/products/bl189-7.webp","assets/products/bl189-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":312,"memberPrice":281},{"label":"Queen","price":378,"memberPrice":340},{"label":"King","price":378,"memberPrice":340},{"label":"Super King","price":378,"memberPrice":340}],"desc":"You can’t go wrong with our classic Camden Coverlet Set! Made from a super soft microfibre, the Camden is super comfortable and easy to care for. Available in a range of on-trend colours, they feature a polyester fill and chevron quilting which creates a more structured feel and chic textured look perfect for a quick update to your bedroom styling.","features":["Made from a microfibre outer and polyester fill."],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Made from a microfibre outer and polyester fill."},"dimensions":"Single/ King Single Size: 1 coverlet 187 x 220cm & 1 pillowcase 48 x 73cm each | Queen Size: 1 coverlet 220 x 245cm & 2 pillowcases 48 x 73cm each | King Size: 1 coverlet 260 x 260cm & 2 pillowcases 48 x 73cm each | Super King Size: 1 coverlet 285 x 260cm & 2 pillowcases 48 x 73cm each","care":"Cold machine wash before first use on gentle cycle. Please ensure your washing machine can handle the cubic volume of this product before laundering. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Cool iron if desired. Do not dry clean."},
  {"id":"bl190","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Camden Sage Coverlet Set","cat":"Bedroom","room":"Bedroom","price":312,"memberPrice":281,"sku":"SH-11577","tag":"New","ph":"","img":"assets/products/bl190.webp","imgs":["assets/products/bl190.webp","assets/products/bl190-2.webp","assets/products/bl190-3.webp","assets/products/bl190-4.webp","assets/products/bl190-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":312,"memberPrice":281},{"label":"Queen","price":378,"memberPrice":340},{"label":"King","price":378,"memberPrice":340},{"label":"Super King","price":378,"memberPrice":340}],"desc":"You can’t go wrong with our classic Camden Coverlet Set! Made from a super soft microfibre, the Camden is super comfortable and easy to care for. Available in a range of on-trend colours, they feature a polyester fill and chevron quilting which creates a more structured feel and chic textured look perfect for a quick update to your bedroom styling.","features":["Made from a microfibre outer and polyester fill."],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Made from a microfibre outer and polyester fill."},"dimensions":"Single/ King Single Size: 1 coverlet 187 x 220cm & 1 pillowcase 48 x 73cm each | Queen Size: 1 coverlet 220 x 245cm & 2 pillowcases 48 x 73cm each | King Size: 1 coverlet 260 x 260cm & 2 pillowcases 48 x 73cm each | Super King Size: 1 coverlet 285 x 260cm & 2 pillowcases 48 x 73cm each","care":"Cold machine wash before first use on gentle cycle. Please ensure your washing machine can handle the cubic volume of this product before laundering. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Cool iron if desired. Do not dry clean."},
  {"id":"bl191","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Miami Palm Coverlet Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11578","tag":"New","ph":"","img":"assets/products/bl191.webp","imgs":["assets/products/bl191.webp","assets/products/bl191-2.webp","assets/products/bl191-3.webp","assets/products/bl191-4.webp","assets/products/bl191-5.webp","assets/products/bl191-6.webp","assets/products/bl191-7.webp","assets/products/bl191-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/King Single","price":412,"memberPrice":371},{"label":"Queen","price":489,"memberPrice":440},{"label":"King","price":489,"memberPrice":440},{"label":"Super King","price":489,"memberPrice":440}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"Create your own tropical getaway with our Miami Palm Coverlet Set, featuring a stunning quilted palm design. With a cotton cover and cotton fill, you'll find the ultimate in comfort with this breathable coverlet, whether used alone during summer or as an extra cosy layer in winter. Pair with matching Miami Palm European Pillowcases to complete your lush bedroom styling!","features":["Made from cotton with a cotton fill","Available in Single/King Single, Queen, King and Super King coverlet sizes","Quilted tropical palm design"],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Made from cotton with a cotton fill"},"dimensions":"Single/King Single Size: 1 coverlet 185cm W x 220cm L & 1 pillowcase 48 x 73cm | Queen Size: 1 coverlet 245cm W x 220cm L & 2 pillowcases 48cm W x 73cm L | King Size: 1 coverlet 260cm W x 260cm L & 2 pillowcases 48cm W x 73cm L | Super King Size: 1 coverlet 285cm W x 260cm L & 2 pillowcases 48cm W x 73cm L","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Do not iron. Do not dry clean. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl192","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Camden Ink Coverlet Set","cat":"Bedroom","room":"Bedroom","price":312,"memberPrice":281,"sku":"SH-11579","tag":"New","ph":"","img":"assets/products/bl192.webp","imgs":["assets/products/bl192.webp","assets/products/bl192-2.webp","assets/products/bl192-3.webp","assets/products/bl192-4.webp","assets/products/bl192-5.webp","assets/products/bl192-6.webp","assets/products/bl192-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":312,"memberPrice":281},{"label":"Queen","price":378,"memberPrice":340},{"label":"King","price":378,"memberPrice":340},{"label":"Super King","price":378,"memberPrice":340}],"desc":"You can’t go wrong with our classic Camden Coverlet Set! Made from a super soft microfibre, the Camden is super comfortable and easy to care for. Available in a range of on-trend colours, they feature a polyester fill and chevron quilting which creates a more structured feel and chic textured look perfect for a quick update to your bedroom styling.","features":["Made from a microfibre outer and polyester fill."],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Made from a microfibre outer and polyester fill."},"dimensions":"Single/ King Single Size: 1 coverlet 187 x 220cm & 1 pillowcase 48 x 73cm each | Queen Size: 1 coverlet 220 x 245cm & 2 pillowcases 48 x 73cm each | King Size: 1 coverlet 260 x 260cm & 2 pillowcases 48 x 73cm each | Super King Size: 1 coverlet 285 x 260cm & 2 pillowcases 48 x 73cm each","care":"Cold machine wash before first use on gentle cycle. Please ensure your washing machine can handle the cubic volume of this product before laundering. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Cool iron if desired. Do not dry clean."},
  {"id":"bl193","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Stone Coverlet Set","cat":"Bedroom","room":"Bedroom","price":667,"memberPrice":600,"sku":"SH-11580","tag":"New","ph":"","img":"assets/products/bl193.webp","imgs":["assets/products/bl193.webp","assets/products/bl193-2.webp","assets/products/bl193-3.webp","assets/products/bl193-4.webp","assets/products/bl193-5.webp","assets/products/bl193-6.webp","assets/products/bl193-7.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"An elevated classic, the Washed Linen Coverlet Set is a versatile and stylish addition to your bedding ensemble. The stunning natural coverlet set features a square quilted design. With a linen front, cotton reverse and cotton fill this breathable coverlet will become an essential for your styling. Complete the look for Washed Linen Quilted European Pillowcase.","features":["Washed linen front, cotton reverse with a cotton fill","Square quilted design","This coverlet set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Washed linen front, cotton reverse with a cotton fill","Size":"Queen/King"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Warm iron if desired. Do not dry clean. A GENTLE REMINDER: As linen fabric softens the excess fibres may start to shed for a period of time. This is normal for linen fabric but you can speed up the process by doing a few extra cold washes and tumble dries. Darker colours will tend to shed more as they have been dyed more times."},
  {"id":"bl194","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Cupid Bow Ruffle Coverlet Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11581","tag":"New","ph":"","img":"assets/products/bl194.webp","imgs":["assets/products/bl194.webp","assets/products/bl194-2.webp","assets/products/bl194-3.webp","assets/products/bl194-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/Double","price":389,"memberPrice":350},{"label":"Queen/King","price":412,"memberPrice":371}],"colours":[{"name":"Crimson","hex":"#f0f5f8"}],"desc":"Create a bedroom filled with romance and charm with the Cupid Bow Ruffle Coverlet Set. Beautifully quilted and crafted from soft microfibre with a lightweight fill, this coverlet set is designed for effortless layering and year-round comfort. Delicate embroidered bow motifs and feminine ruffle edging bring a whimsical touch, while the soft ivory base creates an elegant backdrop for both everyday and seasonal styling. Perfect for adding warmth, texture and character, it makes a beautiful Christmas bedding option or thoughtful gift, transforming any bedroom into a cosy retreat.","features":["Made from microfibre with a lightweight polyester fill. Pillowcases are quilted on the cover only","Available in Single/Double and Queen/King Sizes"],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Made from microfibre with a lightweight polyester fill. Pillowcases are quilted on the cover only"},"dimensions":"Single/Double: 200x240cm, 2 x pillowcases 48x73cm | Queen/King: 240x240cm, 2 pillowcases 48x73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Low iron on reverse. Do not dry clean."},
  {"id":"bl195","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Bobbi Sand Bamboo Cotton Coverlet Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11582","tag":"New","ph":"","img":"assets/products/bl195.webp","imgs":["assets/products/bl195.webp","assets/products/bl195-2.webp","assets/products/bl195-3.webp","assets/products/bl195-4.webp","assets/products/bl195-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/Double","price":412,"memberPrice":371},{"label":"Queen/King","price":445,"memberPrice":400}],"desc":"Create a calm and inviting bedroom retreat with the Bobbi Bamboo Cotton Coverlet Set, designed to bring effortless comfort to your space. Crafted from a bamboo cotton blend, this beautifully soft coverlet offers a smooth, breathable feel, lightweight warmth and a gently textured finish that's perfect for year-round layering. Layer it across your bed for added comfort and style, or use it as a cosy throw to create a relaxed, layered bedroom look.","features":["Made from bamboo/viscose cover and 300 thread count cotton sateen reverse, with a 150GSM polyster fill","Available in Single/Double and Queen/King coverlet sizes","Features a refined textured stitched design for a luxurious look with added depth and softness","As an added styling touch, this versatile coverlet can also be draped across the foot of your bed as a cosy decorative throw."],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Made from bamboo/viscose cover and 300 thread count cotton sateen reverse, with a 150GSM polyster fill"},"dimensions":"Single/Double Size: 1 coverlet 200x240cm, 2 pillowcases 48x73cm | Queen/King Size: 1 coverlet 240x240cm, 2 pillowcases 48x73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl196","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Bobbi Vintage Rose Bamboo Cotton Coverlet Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11583","tag":"New","ph":"","img":"assets/products/bl196.webp","imgs":["assets/products/bl196.webp","assets/products/bl196-2.webp","assets/products/bl196-3.webp","assets/products/bl196-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/Double","price":412,"memberPrice":371},{"label":"Queen/King","price":445,"memberPrice":400}],"desc":"Create a calm and inviting bedroom retreat with the Bobbi Bamboo Cotton Coverlet Set, designed to bring effortless comfort to your space. Crafted from a bamboo cotton blend, this beautifully soft coverlet offers a smooth, breathable feel, lightweight warmth and a gently textured finish that's perfect for year-round layering. Layer it across your bed for added comfort and style, or use it as a cosy throw to create a relaxed, layered bedroom look.","features":["Made from bamboo/viscose cover and 300 thread count cotton sateen reverse, with a 150GSM polyster fill","Available in Single/Double and Queen/King coverlet sizes","Features a refined textured stitched design for a luxurious look with added depth and softness","As an added styling touch, this versatile coverlet can also be draped across the foot of your bed as a cosy decorative throw."],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Made from bamboo/viscose cover and 300 thread count cotton sateen reverse, with a 150GSM polyster fill"},"dimensions":"Single/Double Size: 1 coverlet 200x240cm, 2 pillowcases 48x73cm | Queen/King Size: 1 coverlet 240x240cm, 2 pillowcases 48x73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Low iron on reverse. Do not dry clean."},
  {"id":"bl197","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Washed Linen Caramel Coverlet Set","cat":"Bedroom","room":"Bedroom","price":667,"memberPrice":600,"sku":"SH-11584","tag":"New","ph":"","img":"assets/products/bl197.webp","imgs":["assets/products/bl197.webp","assets/products/bl197-2.webp","assets/products/bl197-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"An elevated classic, the Washed Linen Coverlet Set is a versatile and stylish addition to your bedding ensemble. The stunning coverlet set features a square quilted design with a linen front, cotton reverse and cotton fill this breathable coverlet will become an essential for your styling. Complete the look for Washed Linen Quilted European Pillowcase.","features":["Washed linen front, cotton reverse with a 165gsm cotton fill","Square quilted design","NOTE: This coverlet has been photographed on a queen bed for sizing reference"],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Washed linen front, cotton reverse with a 165gsm cotton fill","Size":"Queen/King"},"care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Warm iron if desired. Do not dry clean. A GENTLE REMINDER: As linen fabric softens the excess fibres may start to shed for a period of time. This is normal for linen fabric but you can speed up the process by doing a few extra cold washes and tumble dries. Darker colours will tend to shed more as they have been dyed more times."},
  {"id":"bl198","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Calais Reversible Stripe Coverlet Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11585","tag":"New","ph":"","img":"assets/products/bl198.webp","imgs":["assets/products/bl198.webp","assets/products/bl198-2.webp","assets/products/bl198-3.webp","assets/products/bl198-4.webp","assets/products/bl198-5.webp","assets/products/bl198-6.webp","assets/products/bl198-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/Double","price":412,"memberPrice":371},{"label":"Queen/King","price":445,"memberPrice":400}],"colours":[{"name":"Red","hex":"#a5031b"}],"desc":"The Calais Stripe Reversible Coverlet Set gives the classic stripe a relaxed coastal twist. Twin diamond quilting and a soft fill add light comfort and shape, while cotton binding completes the look with a clean, tailored edge.","features":["Made from yarn-dyed cotton with a polyester fill. Pillowcase have quilted front and plain cotton reverse","Available in Single/Double and Queen/ King sizes"],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Made from yarn-dyed cotton with a polyester fill. Pillowcase have quilted front and plain cotton reverse","Made in":"China"},"dimensions":"Single/Double: 1 coverlet 200x240cm &, 2 pillowcases 48x73cm | Queen/King: 1 coverlet 240x240cm & 2 pillowcases 48x73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Do not iron. Do not dry clean. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl199","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Stonewash Cotton Rosewood Coverlet Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11586","tag":"New","ph":"","img":"assets/products/bl199.webp","imgs":["assets/products/bl199.webp","assets/products/bl199-2.webp","assets/products/bl199-3.webp","assets/products/bl199-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/Double","price":389,"memberPrice":350},{"label":"Queen/King","price":412,"memberPrice":371}],"desc":"Bring soft earth styling to your bedroom with the Stonewashed Rosewood Cotton Coverlet Set. Made from stonewashed cotton with a soft fill, this quilted coverlet set adds relaxed texture, earthy colour and comfortable layering to the bed.","features":["Made from stonewashed cotton with polyester fill","Available in Single/Double and Queen/King coverlet sizes","Quilted design"],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Made from stonewashed cotton with polyester fill","Made in":"Pakistan"},"dimensions":"Single/Double Size: 1 coverlet 200x240cm, 2 pillowcases 48x73cm | Queen/King Size: 1 coverlet 240x240cm, 2 pillowcases 48x73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Do not iron. Do not dry clean. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl200","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Stonewash Cotton Natural Coverlet Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11587","tag":"New","ph":"","img":"assets/products/bl200.webp","imgs":["assets/products/bl200.webp","assets/products/bl200-2.webp","assets/products/bl200-3.webp","assets/products/bl200-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/Double","price":389,"memberPrice":350},{"label":"Queen/King","price":412,"memberPrice":371}],"desc":"Bring soft earth styling to your bedroom with the Stonewashed Natural Cotton Coverlet Set. Made from stonewashed cotton with a soft fill, this quilted coverlet set adds relaxed texture, earthy colour and comfortable layering to the bed.","features":["Made from stonewashed cotton with polyester fill","Available in Single/Double and Queen/King coverlet sizes","Quilted design"],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Made from stonewashed cotton with polyester fill","Made in":"Pakistan"},"dimensions":"Single/Double Size: 1 coverlet 200x240cm, 2 pillowcases 48x73cm | Queen/King Size: 1 coverlet 240x240cm, 2 pillowcases 48x73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Do not tumble dry. Do not iron. Do not dry clean. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl201","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Abel Cloud Charcoal Coverlet Set","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11588","tag":"New","ph":"","img":"assets/products/bl201.webp","imgs":["assets/products/bl201.webp","assets/products/bl201-2.webp","assets/products/bl201-3.webp","assets/products/bl201-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/King Single","price":345,"memberPrice":310},{"label":"Queen","price":412,"memberPrice":371},{"label":"King","price":412,"memberPrice":371},{"label":"Super King","price":412,"memberPrice":371}],"desc":"Find yourself in cloud-like comfort with our Abel Cloud Coverlet Set! This lightweight coverlet features pinsonic quilting which creates a plush look to make your bedroom styling feel all the more luxurious. Available in a range of on-trend colours colours, the Abel is sure to bring a breathe of fresh air to your bedroom. Complete the look with matching Abel Cloud European Pillowcase.","features":["Made from microfibre with a 75GSM polyester fill","Available in Single/King Single, Queen, King and Super King coverlet sizes","Features plush pinsonic quilting for a plush textural look","This coverlet set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Made from microfibre with a 75GSM polyester fill"},"dimensions":"Single/ King Single Size: 1 coverlet 185cm x 220cm & 1 pillowcase 48 x 73cm | Queen Size: 1 coverlet 245cm W x 220cm L & 2 pillowcases 48cm W x 73cm L | King Size: 1 coverlet 260cm W x 260cm L & 2 pillowcases 48cm W x 73cm L | Super King Size: 1 coverlet 285cm W x 260cm L & 2 pillowcases 48cm W x 73cm L","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Do not iron. Do not dry clean. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl202","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Posie Polka Dot Reversible Coverlet Set","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11589","tag":"New","ph":"","img":"assets/products/bl202.webp","imgs":["assets/products/bl202.webp","assets/products/bl202-2.webp","assets/products/bl202-3.webp","assets/products/bl202-4.webp","assets/products/bl202-5.webp","assets/products/bl202-6.webp","assets/products/bl202-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/Double","price":412,"memberPrice":371},{"label":"Queen/King","price":412,"memberPrice":371}],"colours":[{"name":"Natural","hex":"#34485d"}],"desc":"Add a playful yet polished touch to your bedroom with the Posie Polka Dot Reversible Coverlet Set, featuring a charming polka dot design that brings warmth and personality to your space. Crafted with a soft cotton cover and cosy fill, this lightweight coverlet is perfect for layering throughout the seasons, while the reversible design offers two versatile looks in one.","features":["Made from a 100% cotton cover with a polyester fill, pillowcases have quilted front and reverse is only cotton fabric.","Available in Single/Double and Queen/King sizes"],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Made from a 100% cotton cover with a polyester fill, pillowcases have quilted front and reverse is only cotton fabric."},"dimensions":"Single/Double size: 200x240cm, 2 pillowcases 48x73cm | Queen/King sizes: 240x240cm, 2 pillowcases 48x73cm","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Do not iron. Do not dry clean. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl203","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hayden Reversible Coverlet Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11590","tag":"New","ph":"","img":"assets/products/bl203.webp","imgs":["assets/products/bl203.webp","assets/products/bl203-2.webp","assets/products/bl203-3.webp","assets/products/bl203-4.webp","assets/products/bl203-5.webp","assets/products/bl203-6.webp","assets/products/bl203-7.webp","assets/products/bl203-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/King Single","price":389,"memberPrice":350},{"label":"Queen","price":389,"memberPrice":350},{"label":"King","price":389,"memberPrice":350},{"label":"Super King","price":389,"memberPrice":350}],"colours":[{"name":"Natural","hex":"#34485d"}],"desc":"Featuring a large checker pattern on the front side and a smaller checkered design on the reverse, the Hayden makes for a stunning bedroom staple. Pair with neutral tones for a paired back look or add colour with muted accesories to create a relaxing completed look.","features":["Coverlet is made from cotton cover with a 100GSM polyester fill","Pillowcases are made from a cotton cover and a cotton/polyester blend lining"],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Coverlet is made from cotton cover with a 100GSM polyester fill","Made in":"Bangladesh"},"dimensions":"Single/King Single: 185cm W x 220cm L & 1 pillowcase 48cm W x 73cm L | Queen: 245cm W x 220cm L & 2 pillowcases 48cm W x 73cm L | King: 260cm W x 260cm L & 2 pillowcases 48cm W x 73cm L | Super King: 285cm W x 260cm L & 2 pillowcases 48cm W x 73cm L","care":"Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. May be tumble dried on low setting. Do not iron. Do not dry clean. Please ensure your washing machine can handle the cubic volume of this product before laundering."},
  {"id":"bl204","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Rhys Natural Embroidered Coverlet Set","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11591","tag":"New","ph":"","img":"assets/products/bl204.webp","imgs":["assets/products/bl204.webp","assets/products/bl204-2.webp","assets/products/bl204-3.webp","assets/products/bl204-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/Double","price":389,"memberPrice":350},{"label":"Queen/King","price":389,"memberPrice":350}],"colours":[{"name":"Stone","hex":"#34485d"}],"desc":"Create a calm and inviting bedroom retreat with the Rhys Embroidered Coverlet Set. Crafted with a soft microfibre cover, this lightweight bed cover delivers cosy comfort, easy-care convenience and a polished layered look. Its subtle embroidered texture brings effortless sophistication, perfect for standalone styling or layering in both contemporary and classic bedroom spaces.","features":["Made from a microfibre cover and polyester fill, Pillowcase has quilted front and plain microfibre reverse","Avaialble in Single/Double and Queen/King coverlet sizes","Embroidered detailing","This coverlet set is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bed Linen > Coverlets","Material":"Made from a microfibre cover and polyester fill, Pillowcase has quilted front and plain microfibre reverse"},"dimensions":"Single/Double: 200x240cm & 2 pillowcases 48cm W x 73cm L | Queen/King: 240x240cm & 2 pillowcases 48cm W x 73cm L","care":"Fluff and air frequently. Cold gentle machine wash with like colours before first use. Do not soak or rub. Do not bleach. Rinse well. Line Dry, can be tumble dried on low setting. Please ensure your washing machine can handle the cubic volume of this product before laundering"},
  {"id":"bl205","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"So Soft 450gsm Microfibre Quilt","cat":"Bedroom","room":"Bedroom","price":310,"memberPrice":279,"sku":"SH-11592","tag":"New","ph":"","img":"assets/products/bl205.webp","imgs":["assets/products/bl205.webp","assets/products/bl205-2.webp","assets/products/bl205-3.webp","assets/products/bl205-4.webp","assets/products/bl205-5.webp","assets/products/bl205-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":310,"memberPrice":279},{"label":"Double","price":366,"memberPrice":329},{"label":"Queen","price":366,"memberPrice":329},{"label":"King","price":366,"memberPrice":329},{"label":"Super King","price":366,"memberPrice":329}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"Finished with a stylish embossed pattern, the So Soft microfibre quilt is wonderfully soft and snuggly, making it the perfect quilt for cold winter nights. This exceptionally soft quilt has 450gsm of light and fluffy premium microfibre designed for long lasting comfort and softness.","features":["Made from 450gsm microfibre fill featuring a microfibre embossed cover","Hypoallergenic and easy to care for"],"specs":{"Type":"Bedroom > Bedding > Quilts","Material":"Made from 450gsm microfibre fill featuring a microfibre embossed cover"},"dimensions":"Single: 1 quilt 140cm W x 210cm L | Double: 1 quilt 180cm W x 210cm L | Queen: 1 quilt 210cm W x 210cm L | King: 1 quilt 240cm W x 210cm L. | Super King: 1 quilt 270cm W x 240cm L.","care":"We recommend regular airing and fluffing. Gentle machine wash using cold water with mild detergent. Do not wring, soak or bleach. Line dry or may be tumble dried on a cool setting. Please ensure your washing machine and dryer can handle the cubic volume of this product before laundering."},
  {"id":"bl206","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hotel & Home Superior 500gsm Microfibre Quilt","cat":"Bedroom","room":"Bedroom","price":455,"memberPrice":410,"sku":"SH-11593","tag":"New","ph":"","img":"assets/products/bl206.webp","imgs":["assets/products/bl206.webp","assets/products/bl206-2.webp","assets/products/bl206-3.webp","assets/products/bl206-4.webp","assets/products/bl206-5.webp","assets/products/bl206-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":455,"memberPrice":410},{"label":"Double","price":655,"memberPrice":590},{"label":"Queen","price":655,"memberPrice":590},{"label":"King","price":655,"memberPrice":590},{"label":"Super King","price":655,"memberPrice":590}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"For the ultimate hotel feel of luxurious comfort, warmth and presentation, reach for the Hotel & Home Superior Quilt. From the 350 thread count silky soft cover, the light and lofty 500gsm micro down-like fibre to the unique double gusseted air layer design which traps a central pocket of air doubling the warmth rating without the weight this is a truly superb quilt - hypoallergenic, light and fluffy with exceptional warmth for that classic hotel look.","features":["Featuring a 500gsm fine yarn microfibre fill with a double gusseted cotton cover.","Warmth Rating: 5 out of 5, Warm; Our highest warmth rating, suited to winter nights, cold climates and sleepers who love extra warmth.","Weight Rating: 3 out of 5, Medium; Combines comfortable coverage with a gently substantial feel."],"specs":{"Type":"Bedroom > Bedding > Quilts","Material":"Featuring a 500gsm fine yarn microfibre fill with a double gusseted cotton cover."},"dimensions":"Single: 1 quilt 140cm W x 210cm L | Double: 1 quilt 180cm W x 210cm L | Queen: 1 quilt 210cm W x 210cm L | King: 1 quilt 240cm W x 210cm L | Super King: 1 quilt 270cm W x 240cm L.","care":"We recommend regular airing and fluffing. Gentle machine wash using cold water with mild detergent. Do not wring, soak or bleach. Line dry or may be tumble dried on a cool setting. Please ensure your washing machine and dryer can handle the cubic volume of this product before laundering."},
  {"id":"bl207","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hypoallergenic 400gsm Microfibre Quilt","cat":"Bedroom","room":"Bedroom","price":388,"memberPrice":349,"sku":"SH-11594","tag":"New","ph":"","img":"assets/products/bl207.webp","imgs":["assets/products/bl207.webp","assets/products/bl207-2.webp","assets/products/bl207-3.webp","assets/products/bl207-4.webp","assets/products/bl207-5.webp","assets/products/bl207-6.webp","assets/products/bl207-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":388,"memberPrice":349},{"label":"Double","price":522,"memberPrice":470},{"label":"Queen","price":522,"memberPrice":470},{"label":"King","price":522,"memberPrice":470},{"label":"Super King","price":522,"memberPrice":470}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"The ultimate in comfort and luxury, this Down Alternative 400gsm Quilt has a soft cotton japara cover giving a soft, lofty and light feeling quilt with the added benefit of Greenfirst’s natural anti-dust mite treatment based on extracts of lemon, lavender and eucalyptus essential oils.","features":["Made from 400gsm microfibre fill with a naturally treated cotton cover giving a soft, lofty and light feeling quilt.","Hypoallergenic and easy to care for","Warmth Rating = 4/5 and Weight = 2/5"],"specs":{"Type":"Bedroom > Bedding > Quilts","Material":"Made from 400gsm microfibre fill with a naturally treated cotton cover giving a soft, lofty and light feeling quilt.","Made in":"China"},"dimensions":"Single: 1 quilt 140cm W x 210cm L | Double: 1 quilt 180cm W x 210cm L | Queen: 1 quilt 210cm W x 210cm L | King: 1 quilt 240cm W x 210cm L. | Super King: 1 quilt 270cm W x 240cm L.","care":"We recommend regular airing and fluffing. Gentle machine wash using cold water with mild detergent. Do not wring, soak or bleach. Line dry or may be tumble dried on a cool setting. Please ensure your washing machine and dryer can handle the cubic volume of this product before laundering."},
  {"id":"bl208","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Classic Collection 350gsm Microfibre Quilt","cat":"Bedroom","room":"Bedroom","price":122,"memberPrice":110,"sku":"SH-11595","tag":"New","ph":"","img":"assets/products/bl208.webp","imgs":["assets/products/bl208.webp","assets/products/bl208-2.webp","assets/products/bl208-3.webp","assets/products/bl208-4.webp","assets/products/bl208-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":122,"memberPrice":110},{"label":"Double","price":166,"memberPrice":149},{"label":"Queen","price":166,"memberPrice":149},{"label":"King","price":166,"memberPrice":149},{"label":"Super King","price":166,"memberPrice":149}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"Versatile and easy to care for, our Classic Collection 350gsm quilt brings you comfort and cosiness without weighing you down. Offering hypoallergenic properties and is easy to care for, this quilt will be your staple bedding piece season after season.","features":["Made from 350gsm microfibre fill with microfibre embossed cover giving a soft, lofty and light feeling quilt.","Hypoallergenic and easy to care for.","Warmth Rating: 2.5 out of 5, Cool to Medium; A light layer of insulation for warmer nights, mild climates or sleepers who prefer less warmth.","Weight Rating: 2 out of 5, Light to Medium; Offers comfortable coverage with a light, easy feel while you sleep."],"specs":{"Type":"Bedroom > Bedding > Quilts","Material":"Made from 350gsm microfibre fill with microfibre embossed cover giving a soft, lofty and light feeling quilt."},"dimensions":"Single: 1 quilt 140cm W x 210cm L | Double: 1 quilt 180cm W x 210cm L | Queen: 1 quilt 210cm W x 210cm L | King: 1 quilt 240cm W x 210cm L | Super King: 1 quilt 270cm W x 240cm L.","care":"We recommend regular airing and fluffing. Gentle machine wash using cold water with mild detergent. Do not wring, soak or bleach. Line dry or may be tumble dried on a cool setting. Please ensure your washing machine and dryer can handle the cubic volume of this product before laundering."},
  {"id":"bl209","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Eco Living 300gsm Washable Wool Quilt","cat":"Bedroom","room":"Bedroom","price":399,"memberPrice":359,"sku":"SH-11596","tag":"New","ph":"","img":"assets/products/bl209.webp","imgs":["assets/products/bl209.webp","assets/products/bl209-2.webp","assets/products/bl209-3.webp","assets/products/bl209-4.webp","assets/products/bl209-5.webp","assets/products/bl209-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":399,"memberPrice":359},{"label":"Double","price":555,"memberPrice":500},{"label":"Queen","price":555,"memberPrice":500},{"label":"King","price":555,"memberPrice":500},{"label":"Super King","price":555,"memberPrice":500}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"Made from Australian wool, our Washable Wool Quilt is perfect for all seasons, being warm in winter & cool in summer. Wool has the unique ability to transfer moisture away from your skin, resulting in a more even sleeping temperature for a better sleep.","features":["Made from a 300gsm Australian wool fill with a cotton cover.","Available in Single, Double, Queen, King and Super King quilt sizes.","Features corner ties to fasten to a quilt cover","This quilt is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Quilts","Material":"Made from a 300gsm Australian wool fill with a cotton cover."},"dimensions":"Single Size: 1 quilt 140cm W x 210cm L | Double Size: 1 quilt 180cm W x 210cm L | Queen Size: 1 quilt 210cm W x 210cm L | King Size: 1 quilt 240cm W x 210cm L | Super King Size: 1 quilt 270cm W x 240cm L","care":"We recommend regular airing and fluffing. Gentle machine wash using cold water with approved wool detergent. Do not wring, soak or bleach. Line dry. Do not tumble dry or iron. Please ensure your washing machine and dryer can handle the cubic volume of this product before laundering."},
  {"id":"bl210","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"50/50 Duck Down Feather Quilt","cat":"Bedroom","room":"Bedroom","price":588,"memberPrice":529,"sku":"SH-11597","tag":"New","ph":"","img":"assets/products/bl210.webp","imgs":["assets/products/bl210.webp","assets/products/bl210-2.webp","assets/products/bl210-3.webp","assets/products/bl210-4.webp","assets/products/bl210-5.webp","assets/products/bl210-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":588,"memberPrice":529},{"label":"Double","price":844,"memberPrice":760},{"label":"Queen","price":844,"memberPrice":760},{"label":"King","price":844,"memberPrice":760},{"label":"Super King","price":844,"memberPrice":760}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"With a premium 50/50 duck down/feather fill and beautifully soft cotton cover, you'll be resting in ultimate comfort with our Duck Down Feather Quilt. Breathable, lofty yet lightweight and featuring Greenfirst's natural anti-dustmite treatment using a combination of lemon, lavender and eucalyptus oils this quilt will help you get a great night sleep every night.","features":["Made from 50% white duck down and 50% white duck feather with a soft cotton cover with natural anti-dustmite treatment based on lemon, lavender and eucalyptus essential oil extracts.","Baffle Box construction gives extra warmth and loft while preventing the down from moving."],"specs":{"Type":"Bedroom > Bedding > Quilts","Material":"Made from 50% white duck down and 50% white duck feather with a soft cotton cover with natural anti-dustmite treatment b"},"dimensions":"Single: 1 quilt 140cm W x 210cm L - 750 gram fill. | Double: 1 quilt 180cm W x 210cm L - 900 gram fill. | Queen: 1 quilt 210cm W x 210cm L - 1050 gram fill. | King: 1 quilt 240cm W x 210cm L - 1200 gram fill. | Super King: 1 quilt 270cm W x 240cm L - 1350 gram fill.","care":"We recommend regular rotating, airing and fluffing. Clean sparingly to preserve the lifespan of this luxury item. Dry cleanable. May be machine washed on gentle cycle using cold water with non detergent solution (like wool wash). Do not wring, soak or bleach. Line dry. Once almost dry, may be tumble dried. If the fill becomes uneven in pockets, lay the quilt flat and gently pat the fuller pockets in the direction of the empty pockets. Always aim for the corner of the quilting pattern where small openings are located which will allow the fill to shift."},
  {"id":"bl211","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Cool 200gsm Washable Wool Cotton Quilt","cat":"Bedroom","room":"Bedroom","price":410,"memberPrice":369,"sku":"SH-11598","tag":"New","ph":"","img":"assets/products/bl211.webp","imgs":["assets/products/bl211.webp","assets/products/bl211-2.webp","assets/products/bl211-3.webp","assets/products/bl211-4.webp","assets/products/bl211-5.webp","assets/products/bl211-6.webp","assets/products/bl211-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":410,"memberPrice":369},{"label":"Double","price":566,"memberPrice":509},{"label":"Queen","price":566,"memberPrice":509},{"label":"King","price":566,"memberPrice":509},{"label":"Super King","price":566,"memberPrice":509}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"Made from a lightweight Australian wool and cotton blend, the Woolstar Cool 200gsm Washable Wool Cotton Quilt is sure to keep you comfortable through the summer nights or add an extra layer of warmth in winter. Breathable, easy to care for and Australian Made, this is the perfect lightweight quilt for anyone in the family.","features":["Made in Australia with a 200gsm Australian Wool and Cotton blend fill and a soft cotton cover.","Available as a Single, Double, Queen, King or Super King size quilt","OEKO-Tex Standard 100 Certified and Farm 2 Shelf Traceable","Diamond quilting pattern firmly holds the filling in place, preventing movement during the night and providing an enhanced drape on the bed"],"specs":{"Type":"Bedroom > Bedding > Quilts","Material":"Made in Australia with a 200gsm Australian Wool and Cotton blend fill and a soft cotton cover."},"dimensions":"Single: 1 quilt 140cm W x 210cm L | Double: 1 quilt 180cm W x 210cm L | Queen: 1 quilt 210cm W x 210cm L | King: 1 quilt 240cm W x 210cm L | Super King: 1 quilt 270cm W x 240cm L","care":"Air well before use and air regularly in natural sunlight. Fluff and aerate frequently. Warm machine or hand wash using a mild wool wash detergent. Do not bleach, soak or wring. Dry without delay. May be tumble dried when damp on low heat. May be dry cleaned at 60+. Commercial Wash recommended."},
  {"id":"bl212","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Comfort Science Cool Touch 100gsm Microfibre Quilt","cat":"Bedroom","room":"Bedroom","price":422,"memberPrice":380,"sku":"SH-11599","tag":"New","ph":"","img":"assets/products/bl212.webp","imgs":["assets/products/bl212.webp","assets/products/bl212-2.webp","assets/products/bl212-3.webp","assets/products/bl212-4.webp","assets/products/bl212-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":422,"memberPrice":380},{"label":"King","price":499,"memberPrice":449},{"label":"Super King","price":499,"memberPrice":449}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"Looking for the perfect summer quilt? Look no further! This lightweight quilt is cold to the touch, providing a cooler, more comfortable sleeping experience. The cover features a super cooling nylon underside and is filled with lightweight antibacterial microfibre making this the ideal quilt for any hot sleeper.","features":["Made from 100gsm antibacterial microfibre fill and encased in a cover made from cooling nylon/spandex with a soft polyester jersey reverse.","Available in Queen, King and Super King"],"specs":{"Type":"Bedroom > Bedding > Quilts","Material":"Made from 100gsm antibacterial microfibre fill and encased in a cover made from cooling nylon/spandex with a soft polyes"},"dimensions":"Queen: 1 quilt 210cm W x 210cm L | King: 1 quilt 240cm W x 210cm L | Super King: 1 quilt 270cm W x 240cm L","care":"We recommend regular airing and fluffing. Gentle machine wash using cold water with mild detergent. Do not wring, soak, bleach or dry clean. Line dry. Do not tumble dry or expose to heat."},
  {"id":"bl213","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Natural 280gsm Cotton Quilt","cat":"Bedroom","room":"Bedroom","price":388,"memberPrice":349,"sku":"SH-11600","tag":"New","ph":"","img":"assets/products/bl213.webp","imgs":["assets/products/bl213.webp","assets/products/bl213-2.webp","assets/products/bl213-3.webp","assets/products/bl213-4.webp","assets/products/bl213-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":388,"memberPrice":349},{"label":"Double","price":444,"memberPrice":400},{"label":"Queen","price":444,"memberPrice":400},{"label":"King","price":444,"memberPrice":400},{"label":"Super King","price":444,"memberPrice":400}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"Light, natural and breathable our Cotton Quilt ensures your sleeping comfort in warmer climates with a cotton cover and 280gsm cotton fill. Lightweight and durable, this quilt is perfect for getting a restful sleep all year round, whether used alone during those hot summer months or as an extra layer of warmth in winter.","features":["Made from a 280gsm cotton fill with a cotton cover.","Available in Single, Double, Queen, King and Super King quilt sizes.","This quilt is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Quilts","Material":"Made from a 280gsm cotton fill with a cotton cover.","Made in":"China"},"dimensions":"Single: 1 quilt 140cm W x 210cm L | Double: 1 quilt 180cm W x 210cm L | Queen: 1 quilt 210cm W x 210cm L | King: 1 quilt 240cm W x 210cm L | Super King: 1 quilt 270cm W x 240cm L.","care":"We recommend regular airing and fluffing. Gentle machine wash using cold water with mild detergent. Do not wring, soak, bleach or dry clean. Line dry or may be tumble dried on a cool setting"},
  {"id":"bl214","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Every Season Australian Wool Quilt set","cat":"Bedroom","room":"Bedroom","price":644,"memberPrice":580,"sku":"SH-11601","tag":"New","ph":"","img":"assets/products/bl214.webp","imgs":["assets/products/bl214.webp","assets/products/bl214-2.webp","assets/products/bl214-3.webp","assets/products/bl214-4.webp","assets/products/bl214-5.webp","assets/products/bl214-6.webp","assets/products/bl214-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":644,"memberPrice":580},{"label":"King","price":755,"memberPrice":680},{"label":"Super King","price":755,"memberPrice":680}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"Sleep in comfort all year round with the Every Season Australian Wool Quilt. This 3 in 1 quilt allows you to mix and match to suit the season with the set including one 200gsm quilt for summer and one 300gsm quilt for spring and autumn. During winter you can zip the two together to ensure a cosy and warm night's sleep.","features":["Made in Australia from Australian wool fill with a cotton cover.","Available in Queen, King and Super King quilt sizes","This quilt is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Quilts","Material":"Made in Australia from Australian wool fill with a cotton cover."},"dimensions":"Queen Size: 1 x 200gsm quilt and 1 x 300gsm quilt (210cm W x 210cm L) | King Size: 1 x 200gsm quilt and 1 x 300gsm quilt (240cm W x 210cm L) | Super King Size: 1 x 200gsm quilt and 1 x 300gsm quilt (270cm W x 240cm L)","care":"We recommend regular airing and fluffing. Dry clean only."},
  {"id":"bl215","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Year Round 90/10 Goose Down Quilt","cat":"Bedroom","room":"Bedroom","price":1318,"memberPrice":1186,"sku":"SH-11602","tag":"New","ph":"","img":"assets/products/bl215.webp","imgs":["assets/products/bl215.webp","assets/products/bl215-2.webp","assets/products/bl215-3.webp","assets/products/bl215-4.webp","assets/products/bl215-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":1318,"memberPrice":1186},{"label":"Double","price":1978,"memberPrice":1780},{"label":"Queen","price":1978,"memberPrice":1780},{"label":"King","price":1978,"memberPrice":1780},{"label":"Super King","price":1978,"memberPrice":1780}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"This luxurious 90% white goose down and 10% white goose feather quilt is supremely soft and lightweight providing the ultimate year-round comfort. With a silky soft, naturally treated cotton cover using Greenfirst®’s natural anti-dust mite treatment based on extracts of lemon, lavender and eucalyptus essential oils, this quilt combines the best natural materials to provide unparalleled luxurious comfort every night.","features":["Made from 90% white goose down and 10% white goose feather fill and cotton cover treated with Greenfirst®’s natural anti-dust mite treatment based on extracts of lemon, lavender and eucalyptus essential oils.","Available in Single, Double, Queen, King and Super King sizes","Baffle Box construction gives extra warmth and loft while preventing the down from moving","This quilt is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Quilts","Material":"Made from 90% white goose down and 10% white goose feather fill and cotton cover treated with Greenfirst®’s natural anti"},"dimensions":"Single: 1 quilt 140cm W x 210cm L - 560 gram fill | Double: 1 quilt 180cm W x 210cm L - 730 gram fill | Queen: 1 quilt 210cm W x 210cm L - 850 gram fill | King: 1 quilt 240cm W x 210cm L - 950 gram fill | Super King: 1 quilt 270cm W x 240cm L - 1200 gram fill","care":"We recommend regular rotating, airing and fluffing. Clean sparingly to preserve the lifespan of this luxury item. Dry cleanable. May be machine washed on gentle cycle using cold water with non detergent solution (like wool wash). Do not wring, soak or bleach. Line dry. Once almost dry, may be tumble dried. If the fill becomes uneven in pockets, lay the quilt flat and gently pat the fuller pockets in the direction of the empty pockets. Always aim for the corner of the quilting pattern where small openings are located which will allow the fill to shift."},
  {"id":"bl216","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Couples Dual Zone Cotton Wool Quilt","cat":"Bedroom","room":"Bedroom","price":499,"memberPrice":449,"sku":"SH-11603","tag":"New","ph":"","img":"assets/products/bl216.webp","imgs":["assets/products/bl216.webp","assets/products/bl216-2.webp","assets/products/bl216-3.webp","assets/products/bl216-4.webp","assets/products/bl216-5.webp","assets/products/bl216-6.webp","assets/products/bl216-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":499,"memberPrice":449},{"label":"King","price":544,"memberPrice":490},{"label":"Super King","price":544,"memberPrice":490}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"One quilt, two comfort zones - the Couples Dual Zone Cotton Wool Quilt is designed to create harmony in bed. Featuring an insulating wool fill on one side for warmth and cosiness and a breathable cotton fill on the other for a lighter, cooler feel; this quilt is the perfect solution for couples with different sleep preferences, offering tailored comfort on both sides of the bed.","features":["One side made with a 400gsm wool fill, the other with a 280gsm cotton fill both with a cotton cover.","Available in Queen, King and Super King quilt sizes","This quilt is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Quilts","Material":"One side made with a 400gsm wool fill, the other with a 280gsm cotton fill both with a cotton cover."},"dimensions":"Queen quilt size: 210cm W x 210cm L | King quilt size: 240cm W x 210cm L | Super King quilt size: 270cm W x 240cm L","care":"Air frequently, wash sparingly. Gentle machine wash cold. Delicate cycle with approved wool detergent. Line dry flat over several lines without delay. Ensure completely dry before use. Do not dry clean, bleach, hot wash or tumble dry. Ensure your washing machine’s capacity is suitable for this item."},
  {"id":"bl217","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Luxury 500gsm Australian Wool Quilt","cat":"Bedroom","room":"Bedroom","price":466,"memberPrice":419,"sku":"SH-11604","tag":"New","ph":"","img":"assets/products/bl217.webp","imgs":["assets/products/bl217.webp","assets/products/bl217-2.webp","assets/products/bl217-3.webp","assets/products/bl217-4.webp","assets/products/bl217-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":466,"memberPrice":419},{"label":"Double","price":644,"memberPrice":580},{"label":"Queen","price":644,"memberPrice":580},{"label":"King","price":644,"memberPrice":580},{"label":"Super King","price":644,"memberPrice":580}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"Proudly Australian Made, the Luxury 500gsm Australian Wool Quilt harnesses the natural temperature regulating properties of wool to help regulate your body temperature and retain warmth making it the perfect quilt for those chilly nights. With a 500gsm Australian Downs wool fill encased in soft cotton fabric, you'll be cosy all winter long.","features":["Made in Australia from 500gsm Australian wool with a soft cotton cover.","Available in Single, Double, Queen, King and Super King quilt sizes","This quilt is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Quilts","Material":"Made in Australia from 500gsm Australian wool with a soft cotton cover."},"dimensions":"Single: 1 quilt 140cm W x 210cm L | Double: 1 quilt 180cm W x 210cm L | Queen: 1 quilt 210cm W x 210cm L. | King: 1 quilt 240cm W x 210cm L. | Super King: 1 quilt 270cm W x 240cm L.","care":"We recommend regular airing and fluffing. Dry clean only."},
  {"id":"bl218","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"My First Hypoallergenic 200gsm Microfibre Quilt","cat":"Bedroom","room":"Bedroom","price":122,"memberPrice":110,"sku":"SH-11605","tag":"New","ph":"","img":"assets/products/bl218.webp","imgs":["assets/products/bl218.webp","assets/products/bl218-2.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Look no further than our Hypoallergenic 200gsm Quilt for the perfect quilt for your nursery. Durable, easy to care for and naturally treated with anti-dust mite treatment, this toddler quilt is designed to keep your young one warm in the winter and cool in the summer. Featuring a light, lofty fill and a soft, breathable cotton cover to help them sleep in ultimate comfort.","features":["Made from 200gsm microfibre fill with a naturally treated cotton cover.","Size: 90cm W x 120cm L","Natural dust mite treatment and natural materials combine for the perfect hypoallergenic quilt","Soft cover and lofty, light feel","Easy to care for","Featuring rainbow piping and a whimsical night sky design","WARNING: Not recommended for children under the age of 24 months."],"specs":{"Type":"Bedroom > Bedding > Quilts","Material":"Made from 200gsm microfibre fill with a naturally treated cotton cover.","Size":"Toddler"},"care":"We recommend regular airing and fluffing. Gentle machine wash using cold water with mild detergent. Do not wring, soak or bleach. Line dry or may be tumble dried on a cool setting."},
  {"id":"bl219","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Winter 90/10 Goose Down Quilt","cat":"Bedroom","room":"Bedroom","price":1948,"memberPrice":1753,"sku":"SH-11606","tag":"New","ph":"","img":"assets/products/bl219.webp","imgs":["assets/products/bl219.webp","assets/products/bl219-2.webp","assets/products/bl219-3.webp","assets/products/bl219-4.webp","assets/products/bl219-5.webp","assets/products/bl219-6.webp","assets/products/bl219-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":1948,"memberPrice":1753},{"label":"King","price":1948,"memberPrice":1753},{"label":"Super King","price":1948,"memberPrice":1753}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"This luxurious 90% white goose down and 10% white goose feather quilt is known for its amazing loft and lightness, it provides superior warmth creating a cocoon against the cold. With a silky soft, naturally treated cotton cover using Greenfirst® ’s natural anti-dust mite treatment based on extracts of lemon, lavender and eucalyptus essential oils, this quilt combines the best natural materials to provide unparalleled luxurious comfort every night.","features":["Made with a 90% white goose down and 10% white goose feather fill and silky soft cotton cover with natural anti-dustmite treatment based on lemon, lavender and eucalyptus essential oil extracts.","Available in Queen, King and Super King quilt sizes","This quilt is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Quilts","Material":"Made with a 90% white goose down and 10% white goose feather fill and silky soft cotton cover with natural anti-dustmite"},"dimensions":"Queen: 1 quilt 210cm W x 210cm L - 1250 gram fill | King: 1 quilt 240cm W x 210cm L - 1400 gram fill | Super King: 1 quilt 270cm W x 240cm L - 1800 gram fill","care":"We recommend regular rotating, airing and fluffing. Clean sparingly to preserve the lifespan of this luxury item. Dry cleanable. May be machine washed on gentle cycle using cold water with non detergent solution (like wool wash). Do not wring, soak or bleach. Line dry. Once almost dry, may be tumble dried. If the fill becomes uneven in pockets, lay the quilt flat and gently pat the fuller pockets in the direction of the empty pockets. Always aim for the corner of the quilting pattern where small openings are located which will allow the fill to shift."},
  {"id":"bl220","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hilton So Soft Queen Pillow","cat":"Bedroom","room":"Bedroom","price":106,"memberPrice":95,"sku":"SH-11607","tag":"New","ph":"","img":"assets/products/bl220.webp","imgs":["assets/products/bl220.webp","assets/products/bl220-2.webp","assets/products/bl220-3.webp","assets/products/bl220-4.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"The So Soft Standard Queen Pillow is made for light, fluffy comfort with a medium profile and density. Featuring an embossed microfibre cover and cloud-like microfibre fill, this luxurious pillow feels soft, smooth and comfortably supportive for everyday use.","features":["Made from microfibre cover with a polyester fill","Measurements: 50cm x 78cm Queen pillow","Embossed microfibre cover feels soft and smooth","Medium profile offers comfortable everyday support","Cloud-like microfibre fill creates a light, fluffy feel","Machine washable for easy care","Best suited to side and back sleepers"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made from microfibre cover with a polyester fill","Made in":"China","Size":"Queen"},"care":"Fluff and air frequently. Gentle machine wash in warm water with mild detergent. Spin on low speed. Line dry with frequent shaking to restore loft. Ensure fully dry before use. Do not use harsh detergents or bleach. Do not tumble dry, dry clean or iron."},
  {"id":"bl221","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"So Soft Medium Pillow","cat":"Bedroom","room":"Bedroom","price":95,"memberPrice":86,"sku":"SH-11608","tag":"New","ph":"","img":"assets/products/bl221.webp","imgs":["assets/products/bl221.webp","assets/products/bl221-2.webp","assets/products/bl221-3.webp","assets/products/bl221-4.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"The So Soft Standard Medium Pillow is made for light, fluffy comfort with a medium profile and density. Featuring an embossed microfibre cover and cloud-like microfibre fill, this luxurious pillow feels soft, smooth and comfortably supportive for everyday use.","features":["Made from microfibre cover with a polyester fill","Measurements: 48x73cm Standard pillow","Embossed microfibre cover feels soft and smooth","Medium profile offers comfortable everyday support","Cloud-like microfibre fill creates a light, fluffy feel","Machine washable for easy care","Best suited to side and back sleepers"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made from microfibre cover with a polyester fill","Made in":"China"},"care":"Fluff and air frequently. Gentle machine wash in warm water with mild detergent. Spin on low speed. Line dry with frequent shaking to restore loft. Ensure fully dry before use. Do not use harsh detergents or bleach. Do not tumble dry, dry clean or iron."},
  {"id":"bl222","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Classic Collection Standard Pillow 2 Pack","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11609","tag":"New","ph":"","img":"assets/products/bl222.webp","imgs":["assets/products/bl222.webp","assets/products/bl222-2.webp","assets/products/bl222-3.webp","assets/products/bl222-4.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#ffffff"}],"desc":"Designed for easy care and everyday comfort, our Classic Collection 2 Pack Standard Pillows feature a fine-yarn polyester fill and an embossed microfibre cover. Hypoallergenic and fuss-free, this versatile pair is a practical choice for everyday beds and welcoming guest rooms.","features":["Embossed microfibre cover with a fine yarn polyester fill","2 x Standard pillow - 48 x 73cm"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Embossed microfibre cover with a fine yarn polyester fill","Made in":"China","Size":"2 Pack Standard"},"care":"Fluff and air frequently. Gentle machine wash in warm water with mild detergent. For top loading machines we recommend washing 2 pillows at the same time to balance the machine. Spin on low speed. Line dry with frequent shaking to restore loft. Ensure fully dry before use. Do not use harsh detergents or bleach. Do not tumble dry, dry clean or iron."},
  {"id":"bl223","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Classic Collection European Pillow 2 Pack","cat":"Bedroom","room":"Bedroom","price":123,"memberPrice":111,"sku":"SH-11610","tag":"New","ph":"","img":"assets/products/bl223.webp","imgs":["assets/products/bl223.webp","assets/products/bl223-2.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#ffffff"}],"desc":"Bring easy comfort and a beautifully layered look to your bed with the Classic Collection 2 Pack European Pillow set. Features a soft microfibre cover and polyester fill, creating a plump square shape that is ideal for adding height behind your sleeping pillows or supporting you while reading and relaxing in bed. Hypoallergenic and easy to care for, this great-value pair is a practical finishing touch for everyday bedroom styling.","features":["Made from microfibre cover with a polyester fill","European size 65 x 65cm.","Pack of 2 Pillows"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made from microfibre cover with a polyester fill","Made in":"China","Size":"2 Pack European"},"care":"Cover: Microfibre. Fill: Polyester. Fluff and air frequently. Gentle machine wash in warm water with mild detergent. For top loading machines we recommend washing 2 pillows at the same time to balance the machine. Spin on low speed. Line dry with frequent shaking to restore loft. Ensure fully dry before use. Do not use harsh detergents or bleach. Do not tumble dry, dry clean or iron."},
  {"id":"bl224","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hotel & Home Superior Microfibre Medium Pillow","cat":"Bedroom","room":"Bedroom","price":134,"memberPrice":121,"sku":"SH-11611","tag":"New","ph":"","img":"assets/products/bl224.webp","imgs":["assets/products/bl224.webp","assets/products/bl224-2.webp","assets/products/bl224-3.webp","assets/products/bl224-4.webp","assets/products/bl224-5.webp","assets/products/bl224-6.webp","assets/products/bl224-7.webp","assets/products/bl224-8.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"For that hotel pillow feeling at home, reach for the Hilton Hotel & Home Superior Microfibre Medium Pillow. Filled with a super fine down alternative microfibre, this pillow delivers the ultimate hotel sleeping experience while giving you long lasting freshness and durability. Beautifully covered in a 350 thread count cotton cover that is Ultra-fresh treated and finished off with silver piping that exudes luxury, this medium density pillow features a 5cm gusset for extra loft that is perfect for side and back sleepers.","features":["Made from a 350 Thread Count Cotton Cover and light and a super fine down-alternative microfibre fill","Standard pillow - 43cm x 69cm with a 5cm gusset","Gusseted design provides extra loft and support","Ultra-Fresh antimicrobial treatments inhibit the growth of bacteria which help to keep products fresh and hygienic","With a medium density and height, this pillow is ideal for side sleepers and back sleepers."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made from a 350 Thread Count Cotton Cover and light and a super fine down-alternative microfibre fill"},"care":"To ensure the best performance please shake and fluff vigorously on a regular basis. Machine wash warm on gentle cycle. Squeeze between two towels to remove excess moisture. Then line or tumble dry warm. Ensure fully dry before shaking and fluffing to regain loft. Do not bleach or hot wash."},
  {"id":"bl225","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Ultra Loft Medium Gusseted Microfibre Pillow","cat":"Bedroom","room":"Bedroom","price":123,"memberPrice":111,"sku":"SH-11612","tag":"New","ph":"","img":"assets/products/bl225.webp","imgs":["assets/products/bl225.webp","assets/products/bl225-2.webp","assets/products/bl225-3.webp","assets/products/bl225-4.webp","assets/products/bl225-5.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Designed for irresistible comfort and tranquillity, the Ultra Loft Medium Gusseted Microfibre Pillow features a premium down-alternative microfibre fill which emulates the light, fluffy air trapping properties of duck and goose down for the ultimate in comfort. With a breathable cotton cover, this medium density, gusseted pillow brings sumptuous loft into your bedding making it optimal for back and side sleepers.","features":["Gusseted cotton cover with a down-alternative microfibre fill","Standard pillow - 44cm x 70cm + 4cm gusset","Best suited to back and side sleepers","Hypoallergenic","Features a gusseted edge to help maintain consistent loft and even support."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Gusseted cotton cover with a down-alternative microfibre fill","Size":"Medium"},"care":"Fluff and air frequently. Gentle hand or machine wash in warm water with milld detergent. Dry flat in a warm ventilated area. Do not bleach, soak or wring. NB: Top loading washing machines - wash 2 pillows to balance the machine drum."},
  {"id":"bl226","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hotel & Home Superior Microfibre King Size Pillow","cat":"Bedroom","room":"Bedroom","price":167,"memberPrice":150,"sku":"SH-11613","tag":"New","ph":"","img":"assets/products/bl226.webp","imgs":["assets/products/bl226.webp","assets/products/bl226-2.webp","assets/products/bl226-3.webp","assets/products/bl226-4.webp","assets/products/bl226-5.webp","assets/products/bl226-6.webp","assets/products/bl226-7.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Beautifully covered in a 350 thread count cotton cover, Ultra-fresh treated and finished off with silver piping. This pillow is filled with a super fine superior down alternative microfibre for unrivalled sleeping comfort.","features":["350 Thread Count Cotton Cover.","Light and fluffy micro-down like fill.","Gusseted design for extra loft and support.","Ultra-Fresh antimicrobial treatments inhibit the growth of bacteria which help to keep products fresh and hygienic.","King size 45 x 85cm + 5cm gusset."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"350 Thread Count Cotton Cover.","Size":"King"},"care":"Regular fluffing and airing is recommeded. Machine wash gentle cycle, line or tumble dry - warm. Ensure fully dry before shaking and fluffing to restore loft."},
  {"id":"bl227","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Adjustable Memory Foam Body Pillow","cat":"Bedroom","room":"Bedroom","price":156,"memberPrice":140,"sku":"SH-11614","tag":"New","ph":"","img":"assets/products/bl227.webp","imgs":["assets/products/bl227.webp","assets/products/bl227-2.webp","assets/products/bl227-3.webp","assets/products/bl227-4.webp","assets/products/bl227-5.webp","assets/products/bl227-6.webp","assets/products/bl227-7.webp","assets/products/bl227-8.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Versatile and supportive, the Dream Science Adjustable Memory Foam Body Pillow is the pillow you've been looking for to provide full body comfort and support! This memory foam body pillow features a bamboo blend cover and memory foam chip/polyester fill which you can use as is, remove fill from or add fill from the extra bag provided so that you can adjust the pillow to suit your sleep style.","features":["Made from a bamboo/polyester blend cover and chipped polyurethane microfibre foam fill","1x filled Body pillow 150cm L x 44cm W + 350g bag of extra fill","Great comfort and support during pregnancy or a cuddle buddy while in bed or just relaxing on the couch.","After unwrapping, we recommend airing the product for 24 hours to eliminate trapped odours and allow the fill to expand"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made from a bamboo/polyester blend cover and chipped polyurethane microfibre foam fill","Size":"Body"},"care":"Outer cover machine washable - inner pillow is not washable, we recommend regular airing in the shade. Do not expose fill to direct or indirect sunlight. After unwrapping, air product for 24 hours."},
  {"id":"bl228","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Adjustable Memory Foam Pillow","cat":"Bedroom","room":"Bedroom","price":134,"memberPrice":121,"sku":"SH-11615","tag":"New","ph":"","img":"assets/products/bl228.webp","imgs":["assets/products/bl228.webp","assets/products/bl228-2.webp","assets/products/bl228-3.webp","assets/products/bl228-4.webp","assets/products/bl228-5.webp","assets/products/bl228-6.webp","assets/products/bl228-7.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Versatile and supportive, the Dream Science Adjustable Memory Foam Pillow is the pillow you have been looking for! This memory foam pillow features a bamboo blend cover with a memory foam chip/polyester fill which you can use as is, remove fill from or add fill from the extra bag of fill included to adjust the pillow height to suit your sleep style.","features":["The fill is made of a blend of chipped memory foam and microfibre with a bamboo blend cover.","1x Standard Pillow 48cm x 73cm + 1x 250g bag of extra fill","Tummy sleepers can remove the fill, while back sleepers with smaller frame can use the pillow as it is.","Larger framed back & side sleepers can add some extra fill to give you a higher and firmer pillow."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"The fill is made of a blend of chipped memory foam and microfibre with a bamboo blend cover."},"care":"Outer cover machine washable - inner pillow is not washable, we recommend regular airing in the shade. Do not expose fill to direct or indirect sunlight."},
  {"id":"bl229","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hypoallergenic Microfibre Medium Pillow","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11616","tag":"New","ph":"","img":"assets/products/bl229.webp","imgs":["assets/products/bl229.webp","assets/products/bl229-2.webp","assets/products/bl229-3.webp","assets/products/bl229-4.webp","assets/products/bl229-5.webp","assets/products/bl229-6.webp","assets/products/bl229-7.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Get a good nights sleep with our Greenfirst Hypoallergenic Pillow, beautifully finished with a soft cotton cover that has been treated with a natural anti-dust mite repellent based on extracts of lemon, lavender and eucalyptus essential oils. With a down alternative microfibre fill, this medium profile, medium density pillow is the perfect option for side and back sleepers with a small - medium frame.","features":["Made from a soft cotton cover which has been treated with Greenfirst's all natural anti dust mite treatment and a down alternative microfibre fill.","Standard pillow - 48cm x 73cm","Greenfirst's effectiveness and hypoallergenic properties are verified by independent laboratories, making this pillow perfect for allergy sufferers.","This Greenfirst treated pillow will keep its superior anti-dust mite feature for up to 30 household washes","With a medium profile and medium density, this pillow is best suited for small and medium framed people who sleep on their side or back."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made from a soft cotton cover which has been treated with Greenfirst's all natural anti dust mite treatment and a down a","Size":"Medium"},"care":"We recommend regular airing and fluffing. May be dry cleaned. Machine wash and rinse in cold water. Do not wring. Spin on low speed."},
  {"id":"bl230","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Ultra Loft Soft Gusseted Microfibre Pillow","cat":"Bedroom","room":"Bedroom","price":117,"memberPrice":105,"sku":"SH-11617","tag":"New","ph":"","img":"assets/products/bl230.webp","imgs":["assets/products/bl230.webp","assets/products/bl230-2.webp","assets/products/bl230-3.webp","assets/products/bl230-4.webp","assets/products/bl230-5.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Designed for irresistible comfort and tranquillity, the Ultra Loft Soft Gusseted Microfibre Pillow features a premium down-alternative microfibre fill which emulates the light, fluffy air trapping properties of duck and goose down for the ultimate in comfort. With a breathable cotton cover, this soft, gusseted pillow brings sumptuous loft into your bedding making it optimal for back and side sleepers.","features":["Gusseted cotton cover with a down-alternative microfibre fill","Standard pillow - 44cm x 70cm + 4cm gusset","Best suited to smaller to medium framed people who sleep on their side or most people who sleep on their back","Hypoallergenic","Features a gusseted edge to help maintain consistent loft and even support."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Gusseted cotton cover with a down-alternative microfibre fill","Size":"Soft"},"care":"Fluff and air frequently. Gentle hand or machine wash in warm water with milld detergent. Dry flat in a warm ventilated area. Do not bleach, soak or wring. NB: Top loading washing machines - wash 2 pillows to balance the machine drum."},
  {"id":"bl231","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Duck Feather European Pillow","cat":"Bedroom","room":"Bedroom","price":145,"memberPrice":130,"sku":"SH-11618","tag":"New","ph":"","img":"assets/products/bl231.webp","imgs":["assets/products/bl231.webp","assets/products/bl231-2.webp","assets/products/bl231-3.webp","assets/products/bl231-4.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Our Greenfirst natural feather european pillow is covered with down proof cotton with the added benefit of the natural anti-dust mite treatment. Ideal for sleeping or adding that decorator finish to your bedroom.","features":["Greenfirst is a natural anti dust mite treatment. Its effectiveness and hypoallergenic properties are verified by independent labortories.","1x European pillow 65cm x 65cm","Regular airing and fluffing will enhance the performance of your feather pillow.","The down proof cotton japara cover has a natural treatment based on lemon, lavender and eucalyptus essential oil extracts.","This pillow is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Greenfirst is a natural anti dust mite treatment. Its effectiveness and hypoallergenic properties are verified by indepe","Size":"European"},"care":"Dry cleanable. May be machine or hand washed using warm water and mild detergent. do not bleach soak or wring. Dry without delay. Line dry, consistently turning and shaking to ensure the fill is thoroughly dry prior to reuse. Once almost dry, may be tumble dried for complete dryness."},
  {"id":"bl232","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"50/50 Duck Down Feather Surround Pillow","cat":"Bedroom","room":"Bedroom","price":378,"memberPrice":340,"sku":"SH-11619","tag":"New","ph":"","img":"assets/products/bl232.webp","imgs":["assets/products/bl232.webp","assets/products/bl232-2.webp","assets/products/bl232-3.webp","assets/products/bl232-4.webp","assets/products/bl232-5.webp","assets/products/bl232-6.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Our 50/50 Duck Down Feather Surround Pillow is covered with down proof cotton and the added benefit of the Greenfirst anti-dust mite treatment for a refreshing nights sleep. The design of this pillow offers a medium density and profile with it's soft feather down surround with a centre core of feather making it able to be scrunched and folded to suit while providing complete support in most sleeping positions.","features":["Made with an anti-dust mite treated down proof cotton cover with a 50/50 duck feather and down fill","Standard size pillow - 48cm x 73cm","Greenfirst's effectiveness and hypoallergenic properties are verified by independent laboratories","Regular airing and fluffing will enhance the performance of your feather down pillow","With a medium density and medium profile, this down & feather pillow is ideal for back and side sleepers and can be scrunched and folded to suit.","This pillow is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with an anti-dust mite treated down proof cotton cover with a 50/50 duck feather and down fill"},"care":"Launder sparingly - Air & fluff frequently. Gentle machine wash in warm water with minimal detergent. Spin on low speed. Line dry with frequent turning & shaking to restore loft. To ensure the fill is dry, put in tumble dryer on warm to hot with a tennis ball for at least 1 hour. Please ensure pillow is completley dry before reuse. May be dry cleaned. Do not use harsh detergents, bleach, soak or wring. If the feather down fill have compacted, ensure that you fluff them before popping them back on the bed to get the best experience. TIP - Top loader machines wash 2 pillows to balance."},
  {"id":"bl233","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Adjustable Memory Foam U Shape Pillow","cat":"Bedroom","room":"Bedroom","price":145,"memberPrice":130,"sku":"SH-11620","tag":"New","ph":"","img":"assets/products/bl233.webp","imgs":["assets/products/bl233.webp","assets/products/bl233-2.webp","assets/products/bl233-3.webp","assets/products/bl233-4.webp","assets/products/bl233-5.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Experience tailored support with the Dream Science Adjustable Memory Foam U Shape Pillow, designed to contour to your body for enhanced comfort and alignment while sitting up in bed. Perfect for reading, watching TV or nursing, it features a breathable bamboo blend cover and adjustable memory foam fill, allowing you to customise the height and firmness to suit your sleep or relaxation style, with a removable cover for easy care.","features":["Cover is made from 60% Polyester & 40% Bamboo jacquard quilted fabric. The fill is made of a blend of chipped memory foam and microfibre.","70cm L x 38-49cm W dependent on how you customise the fill","Can add extra fill to give you a higher and firmer pillow or remove fill to make it less firm depending on your comfort.","Removable cover with U zipper to easily remove for washing.","We recommmend you use this pillow in conjunction with a U Shape pillowcase and pillow protector.","This product is not suitable or recommended for infants under 12 months of age.","Designed for sitting up in bed. Perfect for reading or watching TV. Ideal for nursing mothers."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Cover is made from 60% Polyester & 40% Bamboo jacquard quilted fabric. The fill is made of a blend of chipped memory foa","Size":"Tri Large"},"care":"Before first use, machine wash the outer pillowcase with cold water. Do not combine with coloured product. Dry flat or tumble dry on low. Do not use fabric softener. Inner pillow is not washable, we recommend regular airing in the shade. Do not expose fill to direct or indirect sunlight. After unwrapping, air product for 24 hours."},
  {"id":"bl234","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Comfort Science Medium Memory Foam Contour Pillow","cat":"Bedroom","room":"Bedroom","price":156,"memberPrice":140,"sku":"SH-11621","tag":"New","ph":"","img":"assets/products/bl234.webp","imgs":["assets/products/bl234.webp","assets/products/bl234-2.webp","assets/products/bl234-3.webp","assets/products/bl234-4.webp","assets/products/bl234-5.webp","assets/products/bl234-6.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Contour Medium","hex":"#34485d"}],"desc":"Our Comfort Science memory foam pillows have a soft cotton/polyester velour removable cover. The inner contour memory foam conforms to the natural shape of your head, neck and shoulders, relieving pressure points and maintaining correct spinal alignment.","features":["Memory foam pillow. Polyester inner cover to protect foam.","Cotton/Poly velour outer cover.","Zip off cover for easy cleaning.","Contour shaped for added neck support, this allows you to choose between the two neck support levels for your preferred comfort.","Helps to relieve pressure points.","Reduces tossing and turning and improves your quality of sleep.","Inhibits dust mites, bacteria, mould and mildew and is suitable for asthma and allergy sufferers."],"specs":{"Type":"Bedroom > Bedding > Pillows"},"care":"Memory foam should not be exposed to direct heat or sunlight. Please follow care instructions for cleaning memory foam products."},
  {"id":"bl235","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hotel & Home Superior Microfibre Firm Pillow","cat":"Bedroom","room":"Bedroom","price":145,"memberPrice":130,"sku":"SH-11622","tag":"New","ph":"","img":"assets/products/bl235.webp","imgs":["assets/products/bl235.webp","assets/products/bl235-2.webp","assets/products/bl235-3.webp","assets/products/bl235-4.webp","assets/products/bl235-5.webp","assets/products/bl235-6.webp","assets/products/bl235-7.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"For that hotel pillow feeling at home, reach for the Hilton Hotel & Home Superior Microfibre Medium Pillow. Filled with a super fine down alternative microfibre, this pillow delivers the ultimate hotel sleeping experience while giving you long lasting freshness and durability. Beautifully covered in a 350 thread count cotton cover that is Ultra-fresh treated and finished off with silver piping that exudes luxury, this firm density pillow features a 5cm gusset for extra loft that is perfect for side sleepers.","features":["Made from a 350 Thread Count Cotton Cover and light and a super fine down-alternative microfibre fill","Standard pillow - 43cm x 69cm with a 5cm gusset","Gusseted design provides extra loft and support","Ultra-Fresh antimicrobial treatments inhibit the growth of bacteria which help to keep products fresh and hygienic","With a firm density and high height, this pillow is ideal for side sleepers especially if they have a broader frame"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made from a 350 Thread Count Cotton Cover and light and a super fine down-alternative microfibre fill"},"care":"To ensure the best performance please shake and fluff vigorously on a regular basis. Machine wash warm on gentle cycle. Squeeze between two towels to remove excess moisture. Then line or tumble dry warm. Ensure fully dry before shaking and fluffing to regain loft. Do not bleach or hot wash."},
  {"id":"bl236","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hotel & Home Superior European Pillow","cat":"Bedroom","room":"Bedroom","price":134,"memberPrice":121,"sku":"SH-11623","tag":"New","ph":"","img":"assets/products/bl236.webp","imgs":["assets/products/bl236.webp","assets/products/bl236-2.webp","assets/products/bl236-3.webp","assets/products/bl236-4.webp","assets/products/bl236-5.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Find the ultimate in comfort with the Hilton Hotel & Home Superior Microfibre European Pillow. This plush European pillow is beautifully covered in a 350 thread count cotton cover, ultra-fresh treated and finished off with silver piping. Filled with a super fine superior down alternative microfibre for unrivalled sleeping comfort or a plush decorator pillow, this Euro pillow is the perfect pillow for your bed.","features":["Made with a 350TC Cotton Cover and a light and fluffy micro-down like fill","1x European pillow 60cm x 60cm + 5cm gusset","Gusseted design for extra loft and support","Ultra-Fresh antimicrobial treatments inhibit the growth of bacteria which help to keep products fresh and hygienic","Ideal for sleeping or adding that decorator finsh to your bedroom","This European pillow is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a 350TC Cotton Cover and a light and fluffy micro-down like fill","Size":"European"},"care":"To ensure the best performance please shake and fluff vigorously on a regular basis. Machine wash warm on gentle cycle. Squeeze between two towels to remove excess moisture. Then line or tumble dry warm. Ensure fully dry before shaking and fluffing to regain loft. Do not bleach or hot wash."},
  {"id":"bl237","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Ultra Loft Microfibre Medium Pillow","cat":"Bedroom","room":"Bedroom","price":112,"memberPrice":101,"sku":"SH-11624","tag":"New","ph":"","img":"assets/products/bl237.webp","imgs":["assets/products/bl237.webp","assets/products/bl237-2.webp","assets/products/bl237-3.webp","assets/products/bl237-4.webp","assets/products/bl237-5.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Our Ultra Loft Microfibre Medium Pillow, formerly called the Luxurious Microfibre Medium Pillow, is filled with a specially blended, cloud-like microfibre and finished with a breathable 300 thread count cotton cover. Its dreamy, light and fluffy feel makes settling in for sleep that little bit easier. With a medium profile and density, this luxurious pillow is suited to smaller to medium-framed back and side sleepers looking for a divinely comfortable night's sleep.","features":["Piped cotton cover and a microfibre blend fill","Standard pillow - 48cm x 74cm","Best suited to smaller to medium framed people who sleep on their side or most people who sleep on their back","Hypoallergenic and machine washable"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Piped cotton cover and a microfibre blend fill","Size":"Medium"},"care":"Fluff and air frequently. Gentle hand or machine wash in warm water with milld detergent. Dry flat in a warm ventilated area. Do not bleach, soak or wring. NB: Top loading washing machines - wash 2 pillows to balance the machine drum."},
  {"id":"bl238","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"30/70 Duck Down Feather King Pillow","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11625","tag":"New","ph":"","img":"assets/products/bl238.webp","imgs":["assets/products/bl238.webp","assets/products/bl238-2.webp","assets/products/bl238-3.webp","assets/products/bl238-4.webp","assets/products/bl238-5.webp","assets/products/bl238-6.webp","assets/products/bl238-7.webp","assets/products/bl238-8.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Get ready to enjoy quality sleep with our 30/70 duck down feather king pillow, with a centre core of feather and a 30% down 70% feather surround for complete support and sleeping comfort. Featuring a hypoallergenic Greenfirst® treated downproof cotton cover, this pillow is perfect to scrunch, fold or manipulate to suit your sleeping style.","features":["Made with a blend of 30% white duck down and 70% white duck feather surround fill, feather core and Greenfirst® treated downproof cotton cover.","Down proof cotton cover has been treated with a natural anti dust mite treatment based on lemon, lavender and eucalyptus essential oil extracts","Regular airing and fluffing will enhance the performance of your feather down pillow","Please note: As a guide, 2 king pillows is the width of a king bed.","This pillow is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a blend of 30% white duck down and 70% white duck feather surround fill, feather core and Greenfirst® treated ","Size":"King"},"care":"Fluff and air frequently. Gentle machine wash and rinse in warm water. Do not wring. Spin on low speed. Line dry with frequent shaking to restore loft. May be tumble dried on warm setting. Ensure pillow is completely dry before re-use. May be dry cleaned."},
  {"id":"bl239","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"30/70 Duck Down Feather Medium Pillow","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11626","tag":"New","ph":"","img":"assets/products/bl239.webp","imgs":["assets/products/bl239.webp","assets/products/bl239-2.webp","assets/products/bl239-3.webp","assets/products/bl239-4.webp","assets/products/bl239-5.webp","assets/products/bl239-6.webp","assets/products/bl239-7.webp","assets/products/bl239-8.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Get ready to enjoy quality sleep with our 30/70 duck down medium feather pillow, with a centre core of feather and a 30% down 70% feather surround for complete support and sleeping comfort. Featuring a hypoallergenic Greenfirst® treated downproof cotton cover, this pillow is perfect to scrunch, fold or manipulate to suit your sleeping style.","features":["Made with a blend of 30% white duck down and 70% white duck feather surround fill, feather core and Greenfirst® treated downproof cotton cover.","Down proof cotton cover has been treated with a natural anti dust mite treatment based on lemon, lavender and eucalyptus essential oil extracts","Regular airing and fluffing will enhance the performance of your feather down pillow","This pillow is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a blend of 30% white duck down and 70% white duck feather surround fill, feather core and Greenfirst® treated "},"care":"Fluff and air frequently. Gentle machine wash and rinse in warm water. Do not wring. Spin on low speed. Line dry with frequent shaking to restore loft. May be tumble dried on warm setting. Ensure pillow is completely dry before re-use. May be dry cleaned."},
  {"id":"bl240","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hypoallergenic Microfibre Junior / Soft Pillow","cat":"Bedroom","room":"Bedroom","price":95,"memberPrice":86,"sku":"SH-11627","tag":"New","ph":"","img":"assets/products/bl240.webp","imgs":["assets/products/bl240.webp","assets/products/bl240-2.webp","assets/products/bl240-3.webp","assets/products/bl240-4.webp","assets/products/bl240-5.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Get a good nights sleep with our Greenfirst Hypoallergenic Pillow, beautifully finished with a soft cotton cover that has been treated with a natural anti-dust mite repellent based on extracts of lemon, lavender and eucalyptus essential oils. With a down alternative microfibre fill, this low soft pillow is the perfect option for front sleepers and children.","features":["Made from a soft cotton cover which has been treated with Greenfirst's all natural anti dust mite treatment and a down alternative microfibre fill.","This pillow is a 'junior' size pillow, which is a Standard size pillow (48x73cm) with less fill for a very low and soft pillow.","Greenfirst's effectiveness and hypoallergenic properties are verified by independent laboratories, making this pillow perfect for allergy sufferers.","This Greenfirst treated pillow will keep its superior anti-dust mite feature for up to 30 household washes","With a low profile and soft density, this pillow is best suited to tummy sleepers and children."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made from a soft cotton cover which has been treated with Greenfirst's all natural anti dust mite treatment and a down a","Size":"Junior"},"care":"We recommend regular airing and fluffing. May be dry cleaned. Machine wash and rinse in cold water. Do not wring. Spin on low speed."},
  {"id":"bl241","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Ultra Loft Firm Gusseted Microfibre Pillow","cat":"Bedroom","room":"Bedroom","price":128,"memberPrice":115,"sku":"SH-11628","tag":"New","ph":"","img":"assets/products/bl241.webp","imgs":["assets/products/bl241.webp","assets/products/bl241-2.webp","assets/products/bl241-3.webp","assets/products/bl241-4.webp","assets/products/bl241-5.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Designed for irresistible comfort and tranquillity, the Hilton Ultra Loft Gusseted Microfibre Firm Pillow features a premium down-alternative microfibre fill which emulates the light, fluffy air trapping properties of duck and goose down for the ultimate in comfort. With a breathable cotton cover, this firm, gusseted pillow brings sumptuous loft into your bedding making it optimal for back and side sleepers.","features":["Gusseted cotton cover with a down-alternative microfibre fill","Standard pillow - 44cm x 70cm + 4cm gusset","Best suited to broader framed people who sleep on their side or back","Hypoallergenic","Features a gusseted edge to help maintain consistent loft and even support."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Gusseted cotton cover with a down-alternative microfibre fill","Size":"Firm"},"care":"Fluff and air frequently. Gentle hand or machine wash in warm water with milld detergent. Dry flat in a warm ventilated area. Do not bleach, soak or wring. NB: Top loading washing machines - wash 2 pillows to balance the machine drum."},
  {"id":"bl242","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hotel & Home Superior Microfibre Queen Size Pillow","cat":"Bedroom","room":"Bedroom","price":156,"memberPrice":140,"sku":"SH-11629","tag":"New","ph":"","img":"assets/products/bl242.webp","imgs":["assets/products/bl242.webp","assets/products/bl242-2.webp","assets/products/bl242-3.webp","assets/products/bl242-4.webp","assets/products/bl242-5.webp","assets/products/bl242-6.webp","assets/products/bl242-7.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Beautifully covered in a 350 thread count cotton cover, Ultra-fresh treated and finished off with silver piping. This pillow is filled with a super fine superior down alternative microfibre for unrivalled sleeping comfort.","features":["350 Thread Count Cotton Cover.","Light and fluffy micro-down like fill.","Gusseted design for extra loft and support.","Ultra-Fresh antimicrobial treatments inhibit the growth of bacteria which help to keep products fresh and hygienic.","Queen size 45 x 75cm + 5cm gusset.","Please note: As a guide, 2 queen pillows is the width of a queen bed."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"350 Thread Count Cotton Cover.","Size":"Queen"},"care":"Regular fluffing and airing is recommeded. Machine wash gentle cycle, line or tumble dry - warm. Ensure fully dry before shaking and fluffing to restore loft."},
  {"id":"bl243","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"30/70 Duck Down Feather Soft Pillow","cat":"Bedroom","room":"Bedroom","price":162,"memberPrice":146,"sku":"SH-11630","tag":"New","ph":"","img":"assets/products/bl243.webp","imgs":["assets/products/bl243.webp","assets/products/bl243-2.webp","assets/products/bl243-3.webp","assets/products/bl243-4.webp","assets/products/bl243-5.webp","assets/products/bl243-6.webp","assets/products/bl243-7.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Get ready to enjoy quality sleep with our 30/70 duck down soft feather pillow, with a centre core of feather and a 30% down 70% feather surround for complete support and sleeping comfort. Featuring a hypoallergenic Greenfirst® treated downproof cotton cover, this pillow is perfect to scrunch, fold or manipulate to suit your sleeping style.","features":["Made with a blend of 30% white duck down and 70% white duck feather surround fill, feather core and Greenfirst® treated downproof cotton cover.","Down proof cotton cover has been treated with a natural anti dust mite treatment based on lemon, lavender and eucalyptus essential oil extracts","Regular airing and fluffing will enhance the performance of your feather down pillow","This pillow is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a blend of 30% white duck down and 70% white duck feather surround fill, feather core and Greenfirst® treated "},"care":"Fluff and air frequently. Gentle machine wash and rinse in warm water. Do not wring. Spin on low speed. Line dry with frequent shaking to restore loft. May be tumble dried on warm setting. Ensure pillow is completely dry before re-use. May be dry cleaned."},
  {"id":"bl244","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Classic Collection European Pillow","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11631","tag":"New","ph":"","img":"assets/products/bl244.webp","imgs":["assets/products/bl244.webp","assets/products/bl244-2.webp","assets/products/bl244-3.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Bringing great value to your bedding ensemble, the Classic Collection European Pillow is a soft staple make for effortless styling and cosy lounging. With a microfibre cover and polyester fill, this Euro pillow is easy to care for. Whether delivering that layered look or bringing comfort perfect for propping up in bed, this European pillow is the ideal finishing touch for your bed.","features":["Filled with fine yarn polyester fill for the ultimate in comfort and support.","Hypoallergenic.","European size 65 x 65cm."],"specs":{"Type":"Bedroom > Bedding > Pillows","Size":"European"},"care":"Machine washable. NB It is recommended with a top loading washing machine to wash 2 pillows at the same time to balance the machine."},
  {"id":"bl245","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Comfort Science Soft Memory Foam Contour Pillow","cat":"Bedroom","room":"Bedroom","price":145,"memberPrice":130,"sku":"SH-11632","tag":"New","ph":"","img":"assets/products/bl245.webp","imgs":["assets/products/bl245.webp","assets/products/bl245-2.webp","assets/products/bl245-3.webp","assets/products/bl245-4.webp","assets/products/bl245-5.webp","assets/products/bl245-6.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Contour Soft","hex":"#34485d"}],"desc":"Our Comfort Science memory foam pillows have a soft cotton/polyester velour removable cover. The inner contour memory foam conforms to the natural shape of your head, neck and shoulders, relieving pressure points and maintaining correct spinal alignment.","features":["Memory foam fill. Polyester inner cover to protect foam.","Cotton/Poly velour outer cover.","Zip off cover for easy cleaning.","Contour shaped for added neck support, this allows you to choose between the two neck support levels for your preferred comfort.","Helps to relieve pressure points.","Reduces tossing and turning and improves your quality of sleep.","Inhibits dust mites, bacteria, mould and mildew and is suitable for asthma and allergy sufferers."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Memory foam fill. Polyester inner cover to protect foam."},"care":"Memory Foam should not be exposed to direct heat or sunlight. Please follow care instructions for cleaning Memory Foam products."},
  {"id":"bl246","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hypoallergenic Microfibre Firm Pillow","cat":"Bedroom","room":"Bedroom","price":106,"memberPrice":95,"sku":"SH-11633","tag":"New","ph":"","img":"assets/products/bl246.webp","imgs":["assets/products/bl246.webp","assets/products/bl246-2.webp","assets/products/bl246-3.webp","assets/products/bl246-4.webp","assets/products/bl246-5.webp","assets/products/bl246-6.webp","assets/products/bl246-7.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Get a good nights sleep with our Greenfirst Hypoallergenic Pillow, beautifully finished with a soft cotton cover that has been treated with a natural anti-dust mite repellent based on extracts of lemon, lavender and eucalyptus essential oils. With a down alternative microfibre fill, this medium profile, medium density pillow is the perfect option for side and back sleepers.","features":["Made from a soft cotton cover which has been treated with Greenfirst's all natural anti dust mite treatment and a down alternative microfibre fill.","Standard pillow - 48cm x 73cm","Greenfirst's effectiveness and hypoallergenic properties are verified by independent laboratories, making this pillow perfect for allergy sufferers.","This Greenfirst treated pillow will keep its superior anti-dust mite feature for up to 30 household washes","With a medium profile and firm density, this pillow is best suited for side or back sleepers."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made from a soft cotton cover which has been treated with Greenfirst's all natural anti dust mite treatment and a down a","Size":"Firm"},"care":"We recommend regular airing and fluffing. May be dry cleaned. Machine wash and rinse in cold water. Do not wring. Spin on low speed."},
  {"id":"bl247","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Relax Therapy Gel Infused Memory Foam Pillow","cat":"Bedroom","room":"Bedroom","price":378,"memberPrice":340,"sku":"SH-11634","tag":"New","ph":"","img":"assets/products/bl247.webp","imgs":["assets/products/bl247.webp","assets/products/bl247-2.webp","assets/products/bl247-3.webp","assets/products/bl247-4.webp","assets/products/bl247-5.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Keep cool and comfortable with our Relax Therapy Cool Gel Infused Memory Foam Pillow. Featuring an ICEfibre removable cover and gel infused memory foam, this memory foam pillow not only conforms to the natural shape of your head, neck and shoulders for the ultimate support and comfort but also keeps you cool. A great choice for hot sleepers, this pillow suits side sleepers or medium to large framed back sleepers to provide a relaxing and refreshing sleep.","features":["Polyethylene/polyester ICEfibre sleeping surface, polyester inner cover and gel infused polyurethane memory foam inner.","Standard size pillow - 40cm x 65cm x 13cm","Removable cooling ICEfibre cover gives a comfortable and cool sleeping surface, as well as having the convenience of being easy to wash","Memory foam is specifically designed to mould to your individual neck and head shape, optimizing spinal alignment and providing true support whilst you sleep","Reduces tossing and turning and improves your quality of sleep","Best suited to medium or large framed people who sleep on their side or back"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Polyethylene/polyester ICEfibre sleeping surface, polyester inner cover and gel infused polyurethane memory foam inner."},"care":"Spot clean immediately if spillage occures by gently rubbing with a damp cloth. Do not use harsh detergents or brush excessively. Allow to dry thoroughly before re-use. Removable outer cover, zip off and warm machine wash then line dry. Zip off cover can be tumble dried on a warm cycle. Do not wet or wash memory foam inner. Do not bleach, steam or soak. Do not dry clean. Do not expose to direct sunlight or direct heat. NB: Memory foam products should not be exposed to sunlight or direct heat."},
  {"id":"bl248","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Bamboo Surround Medium/Firm Pillow","cat":"Bedroom","room":"Bedroom","price":128,"memberPrice":115,"sku":"SH-11635","tag":"New","ph":"","img":"assets/products/bl248.webp","imgs":["assets/products/bl248.webp","assets/products/bl248-2.webp","assets/products/bl248-3.webp","assets/products/bl248-4.webp","assets/products/bl248-5.webp","assets/products/bl248-6.webp","assets/products/bl248-7.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Get a restful nights sleep with our Greenfirst Bamboo Surround Pillow, with a quilted cotton cover that has been treated with a natural anti-dust mite treatment and bamboo fibre surround that draws moisture away from you while you sleep. This pillow is generously sized and features a soft/medium density microfibre fill which makes it best suited for medium to large framed side sleepers.","features":["Anti-dust mite treated quilted cotton cover with bamboo fibre surrounding microfibre fill.","Standard pillow - 70cm x 44cm + 3.5cm gusset","Greenfirst's effectiveness and hypoallergenic properties are verified by independent laboratories, making this pillow perfect for allergy sufferers.","This Greenfirst treated pillow will keep its superior anti-dust mite feature for up to 30 household washes","Bamboo fibre surround draws moisture away from you while you sleep which helps to keep your head and neck cool","With a medium to firm density and medium height, this pillow is best suited for medium to large framed side sleepers."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Anti-dust mite treated quilted cotton cover with bamboo fibre surrounding microfibre fill."},"care":"We recommend regular airing and fluffing. May be dry cleaned. Machine wash and rinse in cold water. Do not wring. Spin on low speed. Line dry flat."},
  {"id":"bl249","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Bamboo Surround Soft/Medium Pillow","cat":"Bedroom","room":"Bedroom","price":123,"memberPrice":111,"sku":"SH-11636","tag":"New","ph":"","img":"assets/products/bl249.webp","imgs":["assets/products/bl249.webp","assets/products/bl249-2.webp","assets/products/bl249-3.webp","assets/products/bl249-4.webp","assets/products/bl249-5.webp","assets/products/bl249-6.webp","assets/products/bl249-7.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Get a restful nights sleep with our Greenfirst Bamboo Surround Pillow, with a quilted cotton cover that has been treated with a natural anti-dust mite treatment and bamboo fibre surround that draws moisture away from you while you sleep. This pillow is generously sized and features a soft/medium density microfibre fill which makes it best suited for small to medium framed front and back sleepers.","features":["Anti-dust mite treated quilted cotton cover with bamboo fibre surrounding microfibre fill.","Standard pillow - 70cm x 44cm + 3.5cm gusset","Greenfirst's effectiveness and hypoallergenic properties are verified by independent laboratories, making this pillow perfect for allergy sufferers.","This Greenfirst treated pillow will keep its superior anti-dust mite feature for up to 30 household washes","Bamboo fibre surround draws moisture away from you while you sleep which helps to keep your head and neck cool","With a soft to medium density, this pillow is best suited for small to medium framed front and back sleepers."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Anti-dust mite treated quilted cotton cover with bamboo fibre surrounding microfibre fill."},"care":"We recommend regular airing and fluffing. May be dry cleaned. Machine wash and rinse in cold water. Do not wring. Spin on low speed. Line dry flat."},
  {"id":"bl250","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Comfort Science Medium Memory Foam Pillow","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11637","tag":"New","ph":"","img":"assets/products/bl250.webp","imgs":["assets/products/bl250.webp","assets/products/bl250-2.webp","assets/products/bl250-3.webp","assets/products/bl250-4.webp","assets/products/bl250-5.webp","assets/products/bl250-6.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Standard Medium","hex":"#34485d"}],"desc":"Looking for support and comfort? Our Comfort Science Soft Memory Foam Pillow features a memory foam inner that conforms to the natural shape of your head, neck and shoulders to relieve pressure points and maintain correct spinal alignment. With a soft cotton/polyester velour removable cover, this medium height and medium profile supportive pillow is ideal for providing back and side sleepers with a good nights sleep.","features":["Made with a cotton/polyester velour removable cover and memory foam fill.","Standard size pillow - 43cm x 66cm x 13cm","Removeable zip off cover makes for easy cleaning","Memory foam helps to relieve pressure points","Reduces tossing and turning and improves your quality of sleep","Inhibits dust mites, bacteria, mould and mildew and is suitable for asthma and allergy sufferers"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a cotton/polyester velour removable cover and memory foam fill."},"care":"Removeable Outer Cover - Spot clean with warm water where necessary. Cold machine wash separately. Line dry. Do not use harsh chemicals or washing action. Memory Foam Core - Do not wash or dry clean. Spot clean with soft cloth. Do not wet or wash memory foam. Do not expose memory foam to sunlight or direct heat sources."},
  {"id":"bl251","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Gusseted High Firm Pillow","cat":"Bedroom","room":"Bedroom","price":117,"memberPrice":105,"sku":"SH-11638","tag":"New","ph":"","img":"assets/products/bl251.webp","imgs":["assets/products/bl251.webp","assets/products/bl251-2.webp","assets/products/bl251-3.webp","assets/products/bl251-4.webp","assets/products/bl251-5.webp","assets/products/bl251-6.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"HighFirm","hex":"#34485d"}],"desc":"Sleep well with the Herington Gusseted Low Soft Pillow! Australian made, treated to prevent dust mites and approved by the Sensitive Choice of National Asthma Council of Australia as suitable for asthma and allergy sufferers, the high profile and firm density of this pillow is perfect for side sleepers who prefer a firm feel or have a broad stature. Featuring a gusseted cotton cover and filled with polyester fibre surrounding a foam core, you'll enjoy a more restful nights sleep with this Herington pillow.","features":["Gusseted cover is made from cotton and filled with a treated urethane foam core surrounded by polyester fibre.","Standard pillow - 50cm x 70cm","Best suited to medium or large framed people who sleep on their side","Australian made pillow"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Gusseted cover is made from cotton and filled with a treated urethane foam core surrounded by polyester fibre."},"care":"Hand Washable."},
  {"id":"bl252","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Natural Medium Talalay Latex Pillow","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11639","tag":"New","ph":"","img":"assets/products/bl252.webp","imgs":["assets/products/bl252.webp","assets/products/bl252-2.webp","assets/products/bl252-3.webp","assets/products/bl252-4.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"For superior comfort and support, choose our Natural Medium Talalay Latex Pillow. With a springy feel, high profile and medium density this pillow provides the perfect cushioning for back sleepers and those with medium frames who sleep on their sides, supporting your head and neck for lasting support and spinal alignment while you sleep. From the removable cotton cover to the natural properties of latex, this pillow is naturally anti-microbial, low allergenic and resistant to mould, bacteria and dust mites making it great for allergy sufferers to get a restful nights sleep.","features":["Made with a removable cotton cover and natural talalay latex pillow inner.","Standard pillow - 45cm x 60cm x 16cm","Naturally anti-microbial and low allergenic, resistant to mould, bacteria and dust mites","Taken care of properly, latex pillows can give you years of lasting comfort and support","Best suited to smaller to medium framed people who sleep on their side or most people who sleep on their back"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a removable cotton cover and natural talalay latex pillow inner.","Made in":"China"},"care":"Caring for your pillow: Hand wash gently in warm water using a mild detergent. Rinse well in cold water. To dry press the pillow gently between two towels to squeeze out excess water and then leave to dry in a shaded well ventilated area away from direct heat or sunlight. Do not expose to direct sunlight. Do not bleach. Do not tumble dry. Do not dry clean. Frequent washing may reduce the life of the pillow. Removable cotton cover: Machine wash on a gentle cycle and line dry. This pillow may have minor cosmetic imperfections, which are normal and will not affect the performance"},
  {"id":"bl253","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Natural Talalay Latex Contour Pillow","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11640","tag":"New","ph":"","img":"assets/products/bl253.webp","imgs":["assets/products/bl253.webp","assets/products/bl253-2.webp","assets/products/bl253-3.webp","assets/products/bl253-4.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"The ultimate in comfort & support where you need it, the Talalay Latex Contour Pillow will conform to your body and every movement you make. From the removable cotton cover to the superior talalay latex this will suit those looking for a contour shape pillow for extra neck support with a medium profile.","features":["Made with a removable cotton cover and natural talalay latex pillow inner.","Contour pillow - 40cm x 60cm x 10/12cm","Provides superior comfort and superior support."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a removable cotton cover and natural talalay latex pillow inner.","Made in":"China","Size":"Contour Profile"},"care":"Caring for your pillow: Hand wash gently in warm water using a mild detergent. Rinse well in cold water. To dry press the pillow gently between two towels to squeeze out excess water and then leave to dry in a shaded well ventilated area away from direct heat or sunlight. Do not expose to direct sunlight. Do not bleach. Do not tumble dry. Do not dry clean. Frequent washing may reduce the life of the pillow. Removable cotton cover: Machine wash on a gentle cycle and line dry. This pillow may have minor cosmetic imperfections, which are normal and will not affect the performance"},
  {"id":"bl254","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Classic Collection Standard Pillow","cat":"Bedroom","room":"Bedroom","price":89,"memberPrice":80,"sku":"SH-11641","tag":"New","ph":"","img":"assets/products/bl254.webp","imgs":["assets/products/bl254.webp","assets/products/bl254-2.webp","assets/products/bl254-3.webp","assets/products/bl254-4.webp","assets/products/bl254-5.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Easy to care for and hypoallergenic, our Classic Collection Standard Pillow is the economical pillow that offers great value for your money. With a fine yarn polyester fill and microfibre cover with an embossed print, you or your guests will enjoy a great nights sleep with these pillows.","features":["Embossed microfibre cover with a fine yarn polyester fill","Standard pillow - 48 x 73cm","Hypoallergenic and easy to care for","An amazing pillow for yourself or as a guest room pillow"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Embossed microfibre cover with a fine yarn polyester fill"},"care":"We recommend regular fluffing and airing to keep your pillow fresh. May be hand or machine washed on a gentle cycle using mild detergent. Do not soak, bleach or wring. Line dry or tumble dry on a cool setting. Once dry, shake and fluff to restore loft. When using a top loading machine with an agitator, wash two pillows to balance the machine drum."},
  {"id":"bl255","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Relax Therapy Latex / Memory Foam Pillow","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11642","tag":"New","ph":"","img":"assets/products/bl255.webp","imgs":["assets/products/bl255.webp","assets/products/bl255-2.webp","assets/products/bl255-3.webp","assets/products/bl255-4.webp","assets/products/bl255-5.webp","assets/products/bl255-6.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Combination","hex":"#34485d"}],"desc":"Our unique Relax Therapy Latex/Memory Foam pillow features a combination of one latex side and one memory foam side so you can get the best of both worlds. With removable cover, the natural rebound properties of latex pefectly compliment the cradling qualities of memory foam for a pillow that provides exceptional comfort, support and versatility. With a medium height and density, this pillow is ideal for side sleepers looking for a supportive pillow.","features":["Removeable cover is made from a polyethylene/polyester;cotton/polyester back, inner cover is made from polyester and the fill is one half memory foam and one half latex which have been bonded together","Standard size pillow - 40cm x 60cm x 13cm","With natural anti-microbial and low allergenic properties as well as being resistant to mould, bacteria and dust mites, the latex in this pillow make it ideal for allergy sufferers","Cool gel infused memory foam combined with ICEfibre sleeping surface keep this side of the pillow cool for a comfortable nights sleep","Memory foam moulds to your shape to provide pressure relief and support","Made from a supportive combination of latex and memory foam, this medium pillow is best suited to side sleepers with a medium - large frame."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Removeable cover is made from a polyethylene/polyester;cotton/polyester back, inner cover is made from polyester and the"},"care":"Please follow care instructions carefully to get the best out of this pillow. Please keep out of contact from heat or direct sunlight as both memory foam and latex are not suitable for those environments. Regular airing in a cool, dry area is recommended to keep pillow fresh, we also recommend airing pillow before first using."},
  {"id":"bl256","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Medi Rest Pillow","cat":"Bedroom","room":"Bedroom","price":423,"memberPrice":381,"sku":"SH-11643","tag":"New","ph":"","img":"assets/products/bl256.webp","imgs":["assets/products/bl256.webp","assets/products/bl256-2.webp","assets/products/bl256-3.webp","assets/products/bl256-4.webp","assets/products/bl256-5.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Designed with adult side sleepers in mind, the Dentons Medi Rest pillow is moulded with a contour shape for better neck support and spinal alignment as well as a dual shoulder recess for better support when you sleep on your side. Now recommended by physiotherapists and chiropractors, this contour pillow is health fresh treated and comes with a cotton machine washable removeable cover, making it easy to care for while providing you with a refreshing nights sleep.","features":["Made with a removable cotton outer cover, honeycomb polyester inner cover and moulded Softec foam polyurethane inner.","Standard size pillow - 63.5cm x 38cm with a 14.2cm height on one edge of the contour and a 12cm height on the other","Contoured form and dual shoulder recess encourage the ideal posture for spinal alignment for side sleepers","Cotton machine washable and removable fabric cover makes for easy care of your pillow","Health fresh treated for control of bacteria, mould and mildew","Will fit a standard size pillowcase","With a medium profile and medium density and specially designed moulding, this pillow is best suited for adults who sleep on their side"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a removable cotton outer cover, honeycomb polyester inner cover and moulded Softec foam polyurethane inner.","Size":"Medi Rest"},"care":"Caring for your pillow - Spot clean with damp cloth. Dry in warm air away from direct sunlight. Do not use detergent, bleach, tumble dry or dry clean. Caring for your removable cover - Warm machine wash. Do not bleach, soak or wring. Line dry. Warm iron if necessary. Dry cleanable."},
  {"id":"bl257","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Gusseted High Soft Pillow","cat":"Bedroom","room":"Bedroom","price":117,"memberPrice":105,"sku":"SH-11644","tag":"New","ph":"","img":"assets/products/bl257.webp","imgs":["assets/products/bl257.webp","assets/products/bl257-2.webp","assets/products/bl257-3.webp","assets/products/bl257-4.webp","assets/products/bl257-5.webp","assets/products/bl257-6.webp","assets/products/bl257-7.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"HighSoft","hex":"#34485d"}],"desc":"Sleep well with the Herington Gusseted High Soft Pillow! Australian made, treated to prevent dust mites and approved by the Sensitive Choice of National Asthma Council of Australia as suitable for asthma and allergy sufferers, the high profile and soft density of this pillow is perfect for side sleepers who enjoy a more cloud-like pillow. Featuring a gusseted cotton cover and filled with polyester fibre, you'll enjoy a more restful nights sleep with this Herington pillow.","features":["Gusseted cover is made from cotton with a polyester fibre fill","Standard pillow - 47cm x 70cm","Best suited to side sleepers"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Gusseted cover is made from cotton with a polyester fibre fill"},"care":"Machine Washable."},
  {"id":"bl258","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Gusseted Low Soft Pillow","cat":"Bedroom","room":"Bedroom","price":117,"memberPrice":105,"sku":"SH-11645","tag":"New","ph":"","img":"assets/products/bl258.webp","imgs":["assets/products/bl258.webp","assets/products/bl258-2.webp","assets/products/bl258-3.webp","assets/products/bl258-4.webp","assets/products/bl258-5.webp","assets/products/bl258-6.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"LowSoft","hex":"#34485d"}],"desc":"Sleep well with the Herington Gusseted Low Soft Pillow! Australian made, treated to prevent dust mites and approved by the Sensitive Choice of National Asthma Council of Australia as suitable for asthma and allergy sufferers, the low profile and soft density of this pillow is perfect for front sleepers. Featuring a gusseted cotton cover and polyester fill, you'll enjoy a more restful nights sleep with this Herington pillow.","features":["Gusseted cover is made from cotton with a polyester fibre fill","Standard pillow - 45cm x 65cm","Best suited for front/tummy sleepers","Australian made pillow"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Gusseted cover is made from cotton with a polyester fibre fill"}},
  {"id":"bl259","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Comfort Science Soft Memory Foam Pillow","cat":"Bedroom","room":"Bedroom","price":167,"memberPrice":150,"sku":"SH-11646","tag":"New","ph":"","img":"assets/products/bl259.webp","imgs":["assets/products/bl259.webp","assets/products/bl259-2.webp","assets/products/bl259-3.webp","assets/products/bl259-4.webp","assets/products/bl259-5.webp","assets/products/bl259-6.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Standard Soft","hex":"#34485d"}],"desc":"Looking for support and comfort? Our Comfort Science Soft Memory Foam Pillow features a memory foam inner that conforms to the natural shape of your head, neck and shoulders to relieve pressure points and maintain correct spinal alignment. With a soft cotton/polyester velour removable cover, this medium height and soft profile supportive pillow is ideal for providing back and side sleepers with a good nights sleep.","features":["Made with a cotton/polyester velour removable cover and memory foam fill.","Standard size pillow - 43cm x 66cm x 13cm","Removeable zip off cover makes for easy cleaning","Memory foam helps to relieve pressure points","Reduces tossing and turning and improves your quality of sleep","Inhibits dust mites, bacteria, mould and mildew and is suitable for asthma and allergy sufferers"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a cotton/polyester velour removable cover and memory foam fill."},"care":"Removeable Outer Cover - Spot clean with warm water where necessary. Cold machine wash separately. Line dry. Do not use harsh chemicals or washing action. Memory Foam Core - Do not wash or dry clean. Spot clean with soft cloth. Do not wet or wash memory foam. Do not expose memory foam to sunlight or direct heat sources."},
  {"id":"bl260","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"My First Hypoallergenic Microfibre Pillow","cat":"Bedroom","room":"Bedroom","price":89,"memberPrice":80,"sku":"SH-11647","tag":"New","ph":"","img":"assets/products/bl260.webp","imgs":["assets/products/bl260.webp","assets/products/bl260-2.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Beautifully finished with a soft cotton cover, treated with a natural anti-dust mite repellent using lemon, lavender and eucalyptus essential oils. Featuring a microfibre fill for ultimate comfort.","features":["Soft Cotton Cover which has been treated with Greenfirst's all natural anti dust mite treatment.","Down alternative microfibre fill.","Greenfirst is an all natural anti dustmite treatment based on lemon, lavender and euculyptus essential oil extracts.","Greenfirst's effectiveness and hypoallergentic properties are verified by independent labortories.","Effectiveness - it keeps its superior anti dust mite feature up to 30 household washes at 40 degrees C.","Available in Toddler 40 x 60cm cover and Junior 48 x 73 cover. Junior is a Standard size pillow with less fill for a very low and soft pillow.","WARNING: Not recommended for children under the age of 24 months."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Soft Cotton Cover which has been treated with Greenfirst's all natural anti dust mite treatment.","Size":"1 x Toddler Pillow"},"care":"Fluff and air frequently. Machine washable."},
  {"id":"bl261","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Natural Soft Talalay Latex Pillow","cat":"Bedroom","room":"Bedroom","price":389,"memberPrice":350,"sku":"SH-11648","tag":"New","ph":"","img":"assets/products/bl261.webp","imgs":["assets/products/bl261.webp","assets/products/bl261-2.webp","assets/products/bl261-3.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"For superior comfort and support, choose our Natural Soft Talalay Latex Pillow. With a springy feel, low profile and soft density this pillow provides the perfect cushioning for back sleepers, supporting your head and neck for lasting support and spinal alignment while you sleep. From the removable cotton cover to the natural properties of latex, this pillow is naturally anti-microbial, low allergenic and resistant to mould, bacteria and dust mites making it great for allergy sufferers to get a restful nights sleep.","features":["Made with a removable cotton cover and natural talalay latex pillow inner.","Standard pillow - 40cm x 60cm x14cm","Naturally anti-microbial and low allergenic, resistant to mould, bacteria and dust mites","Taken care of properly, latex pillows can give you years of lasting comfort and support","Best suited to smaller framed people who sleep on their side or most people who sleep on their back"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a removable cotton cover and natural talalay latex pillow inner.","Made in":"China"},"care":"Caring for your pillow: Hand wash gently in warm water using a mild detergent. Rinse well in cold water. To dry press the pillow gently between two towels to squeeze out excess water and then leave to dry in a shaded well ventilated area away from direct heat or sunlight. Do not expose to direct sunlight. Do not bleach. Do not tumble dry. Do not dry clean. Frequent washing may reduce the life of the pillow. Removable cotton cover: Machine wash on a gentle cycle and line dry. This pillow may have minor cosmetic imperfections, which are normal and will not affect the performance"},
  {"id":"bl262","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"30/70 Duck Down Feather Firm Pillow","cat":"Bedroom","room":"Bedroom","price":356,"memberPrice":320,"sku":"SH-11649","tag":"New","ph":"","img":"assets/products/bl262.webp","imgs":["assets/products/bl262.webp","assets/products/bl262-2.webp","assets/products/bl262-3.webp","assets/products/bl262-4.webp","assets/products/bl262-5.webp","assets/products/bl262-6.webp","assets/products/bl262-7.webp","assets/products/bl262-8.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Get ready to enjoy quality sleep with our 30/70 duck down firm feather pillow, with a centre core of feather and a 30% down 70% feather surround for complete support and sleeping comfort. Featuring a hypoallergenic Greenfirst® treated downproof cotton cover, this pillow is perfect to scrunch, fold or manipulate to suit your sleeping style.","features":["Made with a blend of 30% white duck down and 70% white duck feather surround fill, feather core and Greenfirst® treated downproof cotton cover.","Down proof cotton cover has been treated with a natural anti dust mite treatment based on lemon, lavender and eucalyptus essential oil extracts","Regular airing and fluffing will enhance the performance of your feather down pillow","This pillow is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a blend of 30% white duck down and 70% white duck feather surround fill, feather core and Greenfirst® treated "},"care":"Fluff and air frequently. Gentle machine wash and rinse in warm water. Do not wring. Spin on low speed. Line dry with frequent shaking to restore loft. May be tumble dried on warm setting. Ensure pillow is completely dry before re-use. May be dry cleaned."},
  {"id":"bl263","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Relax Therapy High Memory Foam Pillow","cat":"Bedroom","room":"Bedroom","price":378,"memberPrice":340,"sku":"SH-11650","tag":"New","ph":"","img":"assets/products/bl263.webp","imgs":["assets/products/bl263.webp","assets/products/bl263-2.webp","assets/products/bl263-3.webp","assets/products/bl263-4.webp","assets/products/bl263-5.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"For the ultimate in personal support and comfort, our Relax Therapy High Memory Foam Pillow features an extra firm superior memory foam inner which conforms to the natural shape of your head, neck and shoulders, relieving pressure points and maintaining correct spinal alignment. This high profile memory foam pillow provides side sleepers with a supportive, resorative nights sleep to wake up feeling refreshed.","features":["Made with a polyester inner cover, cotton/polyester blend outer cover and supportive memory foam fill.","Standard size pillow - 40cm x 65cm x 16cm","Removable velour cover allows for easy machine washing","Memory foam helps to relieve pressure points","Reduces tossing and turning and improves your quality of sleep","Inhibits dust mites, bacteria, mould and mildew and is suitable for asthma and allergy sufferers","Best suited to medium or large framed people who sleep on their side"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a polyester inner cover, cotton/polyester blend outer cover and supportive memory foam fill."},"care":"Spot clean immediately if spillage occurs by gently rubbing with a damp cloth. Do not use harsh detergents or brush excessively. Allow to dry thoroughly before re-use. Do not wet or wash memory foam inner. Do not bleach, steam or soak. Do not dry clean. Do not expose to direct sunlight or direct heat. Removeable cover - zip off the pillow and warm machine wash then line dry. May be tumble dried on warm cycle. NB: Memory foam products should not be exposed to direct sunlight or direct heat."},
  {"id":"bl264","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"High Profile Pillow","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11651","tag":"New","ph":"","img":"assets/products/bl264.webp","imgs":["assets/products/bl264.webp","assets/products/bl264-2.webp","assets/products/bl264-3.webp","assets/products/bl264-4.webp","assets/products/bl264-5.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Designed to ensure ideal posture for spinal alignment and featuring different neck support heights at the front and back edge, the Dentons High Profile Pillow will help you wake up feeling refreshed and ready to go! Made from moulded Softec foam, this contour pillow comes in a high and medium density perfect for side sleepers who have a medium-large frame and offers dual height neck support for the ultimate in comfort.","features":["Made with a removable cotton outer cover, polyester inner cover and moulded Softec foam polyurethane inner.","Standard size pillow - 62.5cm x 37.5cm with a 14.5cm height on one edge of the contour and 13cm height on the other","Contoured form ensures ideal posture for spinal alignment","Cotton machine washable and removable fabric cover makes for easy care of your pillow","Health fresh treated for control of bacteria, mould and mildew","Will fit a standard size pillowcase","With a high profile and medium density, this pillow is best suited to medium or large framed people who sleep on their side."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a removable cotton outer cover, polyester inner cover and moulded Softec foam polyurethane inner.","Size":"Dentons High Profile Pillow"},"care":"Caring for your pillow - Spot clean with damp cloth. Dry in warm air away from direct sunlight. Do not use detergent, bleach, tumble dry or dry clean. Caring for your removable cover - Warm machine wash. Do not bleach, soak or wring. Line dry. Warm iron if necessary. Dry cleanable."},
  {"id":"bl265","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Low Profile Pillow","cat":"Bedroom","room":"Bedroom","price":412,"memberPrice":371,"sku":"SH-11652","tag":"New","ph":"","img":"assets/products/bl265.webp","imgs":["assets/products/bl265.webp","assets/products/bl265-2.webp","assets/products/bl265-3.webp","assets/products/bl265-4.webp","assets/products/bl265-5.webp","assets/products/bl265-6.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"Designed to ensure ideal posture for spinal alignment and featuring different neck support heights at the front and back edge, the Dentons Low Profile Pillow will help you wake up feeling refreshed and ready to go! Made from moulded Softec foam, this contour pillow comes in a low profile and medium density perfect for smaller framed people who sleep on their side or most people who sleep on their back and offers dual height neck support for the ultimate in comfort.","features":["Made with a removable cotton outer cover, polyester inner cover and moulded Softec foam polyurethane inner.","Standard size pillow - 62cm x 37cm with a 12cm height on one edge of the contour and a 10.5cm height on the other","Contoured form ensures ideal posture for spinal alignment","Cotton machine washable and removable fabric cover makes for easy care of your pillow","Health fresh treated for control of bacteria, mould and mildew","Will fit a standard size pillowcase","With a low profile and medium density, this pillow is best suited to smaller framed side sleepers or most back sleepers."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a removable cotton outer cover, polyester inner cover and moulded Softec foam polyurethane inner.","Size":"Dentons Low Profile Pillow"},"care":"Caring for your pillow - Spot clean with damp cloth. Dry in warm air away from direct sunlight. Do not use detergent, bleach, tumble dry or dry clean. Caring for your removable cover - Warm machine wash. Do not bleach, soak or wring. Line dry. Warm iron if necessary. Dry cleanable."},
  {"id":"bl266","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Natural Firm Talalay Latex Pillow","cat":"Bedroom","room":"Bedroom","price":400,"memberPrice":360,"sku":"SH-11653","tag":"New","ph":"","img":"assets/products/bl266.webp","imgs":["assets/products/bl266.webp","assets/products/bl266-2.webp","assets/products/bl266-3.webp","assets/products/bl266-4.webp"],"arriveDays":[7,14],"auOnly":true,"desc":"For superior comfort and support, choose our Natural Firm Talalay Latex Pillow. With a springy feel, high profile and firm density this pillow provides the perfect cushioning side sleepers with medium or large frames, supporting your head and neck for lasting support and spinal alignment while you sleep. From the removable cotton cover to the natural properties of latex, this pillow is naturally anti-microbial, low allergenic and resistant to mould, bacteria and dust mites making it great for allergy sufferers to get a restful nights sleep.","features":["Made with a removable cotton cover and natural talalay latex pillow inner.","Standard pillow - 45cm x 65cm x 16cm","Naturally anti-microbial and low allergenic, resistant to mould, bacteria and dust mites","Taken care of properly, latex pillows can give you years of lasting comfort and support","Best suited to medium or large framed people who sleep on their side"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a removable cotton cover and natural talalay latex pillow inner.","Made in":"China"},"care":"Caring for your pillow: Hand wash gently in warm water using a mild detergent. Rinse well in cold water. To dry press the pillow gently between two towels to squeeze out excess water and then leave to dry in a shaded well ventilated area away from direct heat or sunlight. Do not expose to direct sunlight. Do not bleach. Do not tumble dry. Do not dry clean. Frequent washing may reduce the life of the pillow. Removable cotton cover: Machine wash on a gentle cycle and line dry. This pillow may have minor cosmetic imperfections, which are normal and will not affect the performance"},
  {"id":"bl267","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Relax Therapy Adjustable Wedge Support Pillow","cat":"Bedroom","room":"Bedroom","price":367,"memberPrice":330,"sku":"SH-11654","tag":"New","ph":"","img":"assets/products/bl267.webp","imgs":["assets/products/bl267.webp","assets/products/bl267-2.webp","assets/products/bl267-3.webp","assets/products/bl267-4.webp","assets/products/bl267-5.webp","assets/products/bl267-6.webp","assets/products/bl267-7.webp","assets/products/bl267-8.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Navy","hex":"#34485d"}],"desc":"Experience customised support and enhanced comfort with the Hilton Relax Therapy Adjustable Wedge Support Pillow. Designed for versatility, this multi-functional pillow adapts to your needs while the memory foam inner relieves pressure points and supports your body. Whether you’re looking to improve circulation, aid in post-operative and injury recovery, or alleviate discomfort from acid reflux and joint pain - this versatile 7-in-1 wedge pillow offers a variety of benefits. Crafted for both comfort and durability, this wedge pillow is an essential addition to any relaxation or recovery routine.","features":["Made from memory foam with a soft velour removable cover.","Wedge pillow size - 56cm L x 53cm W x 33cm H standard and 56cm L x 78cm W x 25cm H when expanded","Zip-off washable cover","7-in-1 therapeautic uses: leg elevation, knee support, high knee support, low incline, long incline, high incline and sitting support."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made from memory foam with a soft velour removable cover.","Size":"Large"},"care":"Removable Cover: Warm gentle machine wash separately. Line dry. Do not use harsh chemicals or bleach. Do not tumble dry. Pillow Core: Spot clean with a soft cloth and warm water where necessary. Do not wash or dry clean. Do not tumble dry. Keep out of direct sunlight. Allow Wedge Pillow 24-72 hours to fully regain loft and dissipate odour."},
  {"id":"bl268","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"90/10 Goose Down Pillow","cat":"Bedroom","room":"Bedroom","price":898,"memberPrice":808,"sku":"SH-11655","tag":"New","ph":"","img":"assets/products/bl268.webp","imgs":["assets/products/bl268.webp","assets/products/bl268-2.webp","assets/products/bl268-3.webp","assets/products/bl268-4.webp","assets/products/bl268-5.webp","assets/products/bl268-6.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Rest in luxury with our 90/10 Goose Down Pillow. With a 650 fill power goose down fill surrounded by a down proof cotton cover, this goose down pillow ensures comfort and provides supreme loft and cloud-like softness. With a natural anti-dust mite treatment and a combination of premium natural materials that are able to be scrunched and manipulated to suit your sleeping style, this pillow provides unparalleled luxurious comfort every night with a medium profile and super soft feel.","features":["Made with a cotton cover that has been treated with a natural anti-dust mite treament and a 90% goose down 10% goose feather fill.","Standard size pillow - 46cm W x 70cm L x 3cm H","Natural anti-dust mite treatment created in France","Temperature regulating","This pillow is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a cotton cover that has been treated with a natural anti-dust mite treament and a 90% goose down 10% goose fea"},"care":"Launder sparingly to preserve the life span of this luxury item - Air & fluff frequently. Gentle machine wash in warm water with minimal detergent. Spin on low speed. Line dry with frequent turning & shaking to restore loft. To ensure the fill is dry, put in tumble dryer on warm to hot with a tennis or laundry ball for at least 1 hour. Please ensure pillow is completely dry before reuse. May be dry cleaned. Do not use harsh detergents, bleach, soak or wring. TIP - Top loader machines wash 2 pillows to balance."},
  {"id":"bl269","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Adjustable Pregnancy Pillow Set","cat":"Bedroom","room":"Bedroom","price":134,"memberPrice":121,"sku":"SH-11656","tag":"New","ph":"","img":"assets/products/bl269.webp","imgs":["assets/products/bl269.webp","assets/products/bl269-2.webp","assets/products/bl269-3.webp","assets/products/bl269-4.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Discover the ultimate in versatility and comfort with our adjustable 2-Piece Pregnancy Pillow Set. Whether you’re looking for relief during pregnancy or a comfortable nursing experience afterward, this pillow set provides the support and flexibility you need at every stage.","features":["Made with a chipped memory foam fill and a 350gsm cool airlayer fabric removable cover with a polyethylene sleeping surface, polyester base and polyester jersey inner cover.","2x pillows measuring 35cm L x 27cm W x 10cm H"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a chipped memory foam fill and a 350gsm cool airlayer fabric removable cover with a polyethylene sleeping surf","Made in":"China","Size":"Set"},"care":"To care for the chipped memory foam fill, spot clean immediately with a soft, damp cloth if spillage occurs. Ensure pillow is completely dry before re-use. Do not wet or wash. Do not bleach, steam or soak. Do not dry clean. Do not expose memory foam to direct sunlight or direct heat. To care for removable cover: Warm machine wash. Line dry or tumble dried on warm."},
  {"id":"bl270","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Relax Therapy Side Sleeper Knee Support Pillow","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11657","tag":"New","ph":"","img":"assets/products/bl270.webp","imgs":["assets/products/bl270.webp","assets/products/bl270-2.webp","assets/products/bl270-3.webp","assets/products/bl270-4.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Navy","hex":"#34485d"}],"desc":"Perfect for side sleepers, this Side Sleeper Knee Support Pillow promotes improved body alignment during the night. With a removable velour cover for extra comfort, this pillow provides excellent support for your knees and ankles.","features":["Made with a memory foam inner with a soft, velour removable cover, making washing easy."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a memory foam inner with a soft, velour removable cover, making washing easy.","Made in":"China"},"care":"Removable Cover: Warm gentle machine wash separately. Line dry. Do not use harsh chemicals. Do not bleach. Do not tumble dry. Inner Core: Spot clean with a soft cloth and warm water where necessary. Do not wash or dry clean. Do not tumble dry. Keep out of direct sunlight."},
  {"id":"bl271","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Gusseted Comfortfil Medium Firm Pillow","cat":"Bedroom","room":"Bedroom","price":128,"memberPrice":115,"sku":"SH-11658","tag":"New","ph":"","img":"assets/products/bl271.webp","imgs":["assets/products/bl271.webp","assets/products/bl271-2.webp","assets/products/bl271-3.webp","assets/products/bl271-4.webp","assets/products/bl271-5.webp","assets/products/bl271-6.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Sleep well with the Herington Gusseted Comfortfil Medium Firm Pillow! This Australian made pillow is filled with thousands of soft and fluffy cushioning low allergy ExcelFibre balls for cloud like comfort. Easy to care for, this Herington pillow balances support and softness for the ultimate in sleep comfort.","features":["Made with a gusseted cotton japara fabric cover finished with a silver braid and a blended polyester and microfibre ball fill.","Cloud like comfort","Machine washable","Easy to care for"],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a gusseted cotton japara fabric cover finished with a silver braid and a blended polyester and microfibre ball"},"care":"Warm hand wash or gentle machine wash up to 60 degrees celcius using a small amount of mild detergent. Rinse well and spin out exess water. Can be tumble dried on warm setting then use cool cycle. Do not bleach. Do not iron. Do not dry clean. Plump pillow daily. Regular washing will reduce dust mite allergens. NB: Top loading washing machines - wash 2 pillows to balance the machine drum."},
  {"id":"bl272","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Gentle Dreams U Shape Pillow","cat":"Bedroom","room":"Bedroom","price":100,"memberPrice":90,"sku":"SH-11659","tag":"New","ph":"","img":"assets/products/bl272.webp","imgs":["assets/products/bl272.webp","assets/products/bl272-2.webp","assets/products/bl272-3.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Fall in love with the supportive comfort of the Gentle Dreams U Shape pillow. The huggable shape of this microfibre U shape pillow wraps around your body to hold you as you relax. Offering loft and support, this pillow is ideal for relaxation, reading or nursing mothers.","features":["Made with a microfibre fill and cotton cover","Hypoallergenic U Shape Pillow","We recommmend you use this pillow in conjunction with a 'Jumbo' pillowcase and pillow protector","This product is not suitable or recommended for infants under 12 months of age.","Designed for sitting up in bed. Perfect for reading or watching TV. Ideal for nursing mothers."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Made with a microfibre fill and cotton cover","Size":"Tri Large"},"care":"Warm hand wash. Do not bleach, wring, or tumble dry. Lie fl at to dry in a well-ventilated area. Do not dry clean."},
  {"id":"bl273","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Foam Core Body Pillow","cat":"Bedroom","room":"Bedroom","price":112,"memberPrice":101,"sku":"SH-11660","tag":"New","ph":"","img":"assets/products/bl273.webp","imgs":["assets/products/bl273.webp","assets/products/bl273-2.webp","assets/products/bl273-3.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"White","hex":"#34485d"}],"desc":"Fall in love with the snuggly comfort of the Gentle Dreams Pillow range. The huggable, supportive shape of the Body Buddy Foam core Pillow is great for extra support. Available in the Comfort V shape in regular and large and in the Body Buddy.","features":["Polyester fill with a foam core and a natural Cotton cover. Dimensions: 150 x 44cm. Extra fullness, support and resilience when compared to the Standard Body Buddy.","Odourless and allergy free.","Great comfort and support during pregnancy or a cuddle buddy while in bed or just relaxing on the couch.","This product is not suitable or recommended for infants under 2 years of age."],"specs":{"Type":"Bedroom > Bedding > Pillows","Material":"Polyester fill with a foam core and a natural Cotton cover. Dimensions: 150 x 44cm. Extra fullness, support and resilien","Size":"Body"},"care":"Hand wash with mild detergent. Sponge excess water out between two towels. Lay flat to dry in a well-ventilated area."},
  {"id":"bl274","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hotel & Home Superior 2200gsm Mattress Topper","cat":"Bedroom","room":"Bedroom","price":633,"memberPrice":570,"sku":"SH-11661","tag":"New","ph":"","img":"assets/products/bl274.webp","imgs":["assets/products/bl274.webp","assets/products/bl274-2.webp","assets/products/bl274-3.webp","assets/products/bl274-4.webp","assets/products/bl274-5.webp","assets/products/bl274-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Double","price":633,"memberPrice":570},{"label":"Queen","price":722,"memberPrice":650},{"label":"King","price":722,"memberPrice":650}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"Sink into luxurious softness with the Hotel & Home Superior 2200gsm Mattress Topper. Featuring a lofty 12cm gusset, supportive polyester ball fibre base and plush microfibre top layer, it delivers the luxurious sink-in feel customers describe as “sleeping on a cloud”. The dense cushioning helps soften firm mattresses while maintaining its supportive feel and fullness over time. Perfect for creating a premium hotel-inspired bed at home, this topper delivers lasting comfort night after night.","features":["Cover made from a cotton top and microfibre bottom. Fill made from a microfibre top and polyester fibre ball bottom. Skirt is made from a polyester jersey knit.","Available in Double, Queen, and King mattress topper sizes.","Treated with Ultra-Fresh anti-microbial protection for lasting freshness and protection against allergens","This mattress topper is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Mattress Toppers","Material":"Cover made from a cotton top and microfibre bottom. Fill made from a microfibre top and polyester fibre ball bottom. Ski","Made in":"China"},"dimensions":"Double size: 137cm W x 188cm L + 35cm D | Queen size: 153cm W x 203cm L + 35cm D | King size: 183cm W x 203cm L + 35cm D","care":"We recommend regular airing and plumping to keep your topper fresh. Spot clean stains immediately with warm soapy water. Spot Clean, steam clean or upholstery clean if required. Do not wash, bleach or tumble dry. Do not iron."},
  {"id":"bl275","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Relax Therapy 7cm Memory Foam Mattress Topper","cat":"Bedroom","room":"Bedroom","price":555,"memberPrice":500,"sku":"SH-11662","tag":"New","ph":"","img":"assets/products/bl275.webp","imgs":["assets/products/bl275.webp","assets/products/bl275-2.webp","assets/products/bl275-3.webp","assets/products/bl275-4.webp","assets/products/bl275-5.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":555,"memberPrice":500},{"label":"King Single","price":898,"memberPrice":808},{"label":"Double","price":898,"memberPrice":808},{"label":"Queen","price":898,"memberPrice":808},{"label":"King","price":898,"memberPrice":808}],"colours":[{"name":"Off White","hex":"#fbf4ee"}],"desc":"Our Relax Therapy memory foam mattress topper will have you floating in a cradle of comfort night after night. Enjoy 7cm of pure pressure negation with a unique air layer cover giving you a comfortable sleeping surface. Our memory foam supports you as it adapts to your body’s natural curves, relieves pressure points, absorbs movement, and retains your body’s natural warmth for a restful sleep.","features":["Made from a 7cm medium density polyurethane memory foam with a removeable polyester cover and 30cm jersey stretch elasticated wall.","Electric blankets are not to be used in conjunction with the following: Memory Foam Toppers or Foam products."],"specs":{"Type":"Bedroom > Bedding > Mattress Toppers","Material":"Made from a 7cm medium density polyurethane memory foam with a removeable polyester cover and 30cm jersey stretch elasti"},"dimensions":"Single: 91cm W x 188cm L | King Single: 107cm W x 204cm L | Double: 138cm W x 188cm L | Queen: 153cm W x 204cm L | King: 183cm W x 204cm L | Super King: 204 cm W x 204cm L","care":"Spot clean immediately if spillage occurs. We suggest using a mattress protector with your topper. An electric blanket is not to be used in conjunction with the following: Latex Toppers, Memory Foam Toppers or Foam products. Memory foam products should not be exposed to direct sunlight or direct heat. Memory foam is resistant to mould, bacteria and dust mites."},
  {"id":"bl276","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Ultra Loft 1300gsm Mattress Topper","cat":"Bedroom","room":"Bedroom","price":433,"memberPrice":390,"sku":"SH-11663","tag":"New","ph":"","img":"assets/products/bl276.webp","imgs":["assets/products/bl276.webp","assets/products/bl276-2.webp","assets/products/bl276-3.webp","assets/products/bl276-4.webp","assets/products/bl276-5.webp","assets/products/bl276-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":433,"memberPrice":390},{"label":"King Single","price":588,"memberPrice":529},{"label":"Double","price":588,"memberPrice":529},{"label":"Queen","price":588,"memberPrice":529},{"label":"King","price":588,"memberPrice":529}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"Our Ultra Loft 1300gsm Mattress Topper, formerly called the Comfort Science 1300gsm Mattress Topper, adds a luxuriously soft and lofty layer between you and your mattress. Filled with plush down-alternative microfibre and finished with a soft cotton percale cover, it offers cloud-like comfort without natural down. A gusseted design creates generous loft, while ultra-thick elastic straps help keep the topper securely fitted to most mattress depths for a refreshing night's sleep.","features":["Made from a 1300gsm Down alternative microfibre fill (closest man made fibre to natural down) with a soft cotton percale cover.","Ultra thick elastic straps firmly attach the topper to fit most mattress depths.","The side gusset of this topper is 8cm.","Please note: This item is vacuum packed for ease of transportation, once home open, shake, fluff, sleep."],"specs":{"Type":"Bedroom > Bedding > Mattress Toppers","Material":"Made from a 1300gsm Down alternative microfibre fill (closest man made fibre to natural down) with a soft cotton percale"},"dimensions":"Single: 91cm W x 188cm L | King Single: 107cm W x 203cm L | Double: 137cm W x 188cm L | Queen: 153cm W x 203cm L | King: 183cm W x 203cm L","care":"Machine washable in warm water. Flat dry in a shaded area. Ensure product is fully dry before use. Spot clean any small stains with warm soapy water. Please ensure your washing machine/dryer can handle the cubic volume of this product before laundering. We recommend commercial machine washing and drying."},
  {"id":"bl277","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Hypoallergenic 1000gsm Mattress Topper","cat":"Bedroom","room":"Bedroom","price":399,"memberPrice":359,"sku":"SH-11664","tag":"New","ph":"","img":"assets/products/bl277.webp","imgs":["assets/products/bl277.webp","assets/products/bl277-2.webp","assets/products/bl277-3.webp","assets/products/bl277-4.webp","assets/products/bl277-5.webp","assets/products/bl277-6.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":399,"memberPrice":359},{"label":"King Single","price":566,"memberPrice":509},{"label":"Double","price":566,"memberPrice":509},{"label":"Queen","price":566,"memberPrice":509},{"label":"King","price":566,"memberPrice":509},{"label":"Super King","price":566,"memberPrice":509}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"The Greenfirst® Hypoallergenic 1000gsm Mattress Topper offers a luxurious layer of comfort between you and your mattress with beautifully soft polyester ball fibre fill and bamboo and cotton blend cover. Enjoy added protection from the Greenfirst® natural anti dust mite treatment to ensure not only a restful night’s sleep but peace of mind.","features":["Made from a 1000gsm polyester ball fibre fill with a naturally treated bamboo/cotton blend cover.","Fully fitted with a 37cm wall and a 2.5cm gusset."],"specs":{"Type":"Bedroom > Bedding > Mattress Toppers","Material":"Made from a 1000gsm polyester ball fibre fill with a naturally treated bamboo/cotton blend cover."},"dimensions":"Single: 92cm W x 190cm L | King Single: 107cm W x 204cm L | Double: 138cm W x 190cm L | Queen: 152cm W x 204cm L | King: 183cm W x 204cm L | Super King: 204cm W x 204cm L","care":"Gentle machine wash using cold water, with mild detergent. Dry on cool cycle only. Please ensure your washing machine/dryer can handle the cubic volume of this product before laundering. We recommend commercial laundering."},
  {"id":"bl278","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Classic Collection 750gsm Mattress Topper","cat":"Bedroom","room":"Bedroom","price":295,"memberPrice":266,"sku":"SH-11665","tag":"New","ph":"","img":"assets/products/bl278.webp","imgs":["assets/products/bl278.webp","assets/products/bl278-2.webp","assets/products/bl278-3.webp","assets/products/bl278-4.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":295,"memberPrice":266},{"label":"King Single","price":344,"memberPrice":310},{"label":"Double","price":344,"memberPrice":310},{"label":"Queen","price":344,"memberPrice":310},{"label":"King","price":344,"memberPrice":310}],"colours":[{"name":"White","hex":"#34485d"}],"desc":"Increase the comfort of your bed by adding our 750gsm polyester ball fibre fill mattress topper. Featuring a smaller quilting pattern, this topper provides you with a supportive cushion of comfort to add that touch of plush to your mattress.","features":["Made from a 750gsm polyester ball fibre fill with an embossed microfibre cover.","Fully fitted with a 35 cm wall size to fit most mattress depths."],"specs":{"Type":"Bedroom > Bedding > Mattress Toppers","Material":"Made from a 750gsm polyester ball fibre fill with an embossed microfibre cover."},"dimensions":"Single: 92cm W x 190cm L | King Single: 107cm W x 203cm L | Double: 137cm W x 190cm L | Queen: 153cm W x 203cm L | King: 183cm W x 203cm L","care":"Gentle machine wash using cold water, with mild detergent. Dry on cool cycle. NB: Please ensure your washing machine/dryer can handle the cubic volume of this product before laundering. Regular airing and fluffing will enhance performance."},
  {"id":"bl279","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Comfort Science 5cm Memory Foam Mattress Topper","cat":"Bedroom","room":"Bedroom","price":477,"memberPrice":429,"sku":"SH-11666","tag":"New","ph":"","img":"assets/products/bl279.webp","imgs":["assets/products/bl279.webp","assets/products/bl279-2.webp","assets/products/bl279-3.webp","assets/products/bl279-4.webp","assets/products/bl279-5.webp","assets/products/bl279-6.webp","assets/products/bl279-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":477,"memberPrice":429},{"label":"King Single","price":722,"memberPrice":650},{"label":"Double","price":722,"memberPrice":650},{"label":"Queen","price":722,"memberPrice":650},{"label":"King","price":722,"memberPrice":650}],"colours":[{"name":"Off White","hex":"#fbf4ee"}],"desc":"Add a layer of pressure relief comfort, with revolutionary memory foam that conforms to the natural curves and shape of your body, relieving pressure points and most importantly, maintaining correct spinal alignment. With a breathable bamboo & polyester blend cover and 5cm thick memory foam core, our Comfort Science topper brings the best of sleeping technology to your bedroom.","features":["Made from a 5cm thick polyurethane memory foam fill with a bamboo/polyester blend zip-off fabric cover and a 35cm polyester jersey knit wall.","Inhibits dust mites, bacteria, mould and mildew which makes this product suitable for asthma and allergy sufferers.","Fully fitted 35cm knitted jersey wall","Electric blankets are not to be used in conjunction with the following: Latex Toppers, Memory Foam Toppers or Foam products."],"specs":{"Type":"Bedroom > Bedding > Mattress Toppers","Material":"Made from a 5cm thick polyurethane memory foam fill with a bamboo/polyester blend zip-off fabric cover and a 35cm polyes"},"dimensions":"Single: 91cm W x 188cm L | King Single: 107cm W x 204cm L | Double: 138cm x 188cm L | Queen: 153cm W x 204cm L | King: 183cm W x 204cm L","care":"Spot clean immediately if spillage occurs. Removable zip-off cover is machine washable and can be tumble dried on a warm setting. Air before first use. Do not wet or wash memory foam inner. Do not dry clean or steam clean."},
  {"id":"bl280","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Softer Than Silk 340gsm Cotton Bamboo Blanket","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11667","tag":"New","ph":"","img":"assets/products/bl280.webp","imgs":["assets/products/bl280.webp","assets/products/bl280-2.webp","assets/products/bl280-3.webp","assets/products/bl280-4.webp","assets/products/bl280-5.webp","assets/products/bl280-6.webp","assets/products/bl280-7.webp","assets/products/bl280-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/King Single","price":345,"memberPrice":310},{"label":"Queen","price":461,"memberPrice":415},{"label":"King","price":461,"memberPrice":415}],"colours":[{"name":"Denim","hex":"#919dab"},{"name":"Jade","hex":"#7ca59f"},{"name":"Natural","hex":"#ac9d88"},{"name":"Snow","hex":"#ffffff"}],"desc":"With a breathable, temperature regulating blend of cotton and bamboo viscose, our Softer than Silk 340gsm blanket is irresistibly soft and a must have for your home. Perfect on its own for the warmer summer months or as an additional layer to your winter bedding for extra softness and cosiness.","features":["Made from a blend of cotton and bamboo Viscose blend.","Available in Single, King Single, Double, Queen and King."],"specs":{"Type":"Bedroom > Bedding > Blankets","Material":"Made from a blend of cotton and bamboo Viscose blend."},"dimensions":"Single size: 160 x 230cm. | King Single size: 180 x 250cm. | Double size: 230 x 240cm. | Queen size: 240 x 255cm. | King size: 250 x 265cm.","care":"Wash by hand or gentle machine wash. Line dry recommended in shaded area. Can be cool/warm tumble dried, on low setting to avoid shrinkage. Washing may cause blanket to lose shape, this can be rectified by manually reshaping and stretching on clothes line while damp."},
  {"id":"bl281","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Simply The Softest 350gsm Microfibre Blanket","cat":"Bedroom","room":"Bedroom","price":123,"memberPrice":111,"sku":"SH-11668","tag":"New","ph":"","img":"assets/products/bl281.webp","imgs":["assets/products/bl281.webp","assets/products/bl281-2.webp","assets/products/bl281-3.webp","assets/products/bl281-4.webp","assets/products/bl281-5.webp","assets/products/bl281-6.webp","assets/products/bl281-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/King Single","price":123,"memberPrice":111},{"label":"Queen","price":156,"memberPrice":140},{"label":"King","price":156,"memberPrice":140}],"colours":[{"name":"Sage","hex":"#60776f"},{"name":"Latte","hex":"#c5a89a"},{"name":"Indigo","hex":"#1e2337"},{"name":"Cream","hex":"#fbf4ee"}],"desc":"For a soft extra layer in the cooler months or that extra bit of comfort in the warmer months, our Simply the Softest Blanket is perfect. Made from microfibre which creates a super soft and durable fabric, this blanket is a great option for the whole family.","features":["Made from 350gsm microfibre.","This blanket is super soft and incredibly warm."],"specs":{"Type":"Bedroom > Bedding > Blankets","Material":"Made from 350gsm microfibre."},"dimensions":"Single/ King Single size: 180 x 250cm | Queen size: 240 x 255cm | King size: 250 x 265cm","care":"Shake vigorously outside before first use to remove excess fluff. We recommend washing before first use. Gentle machine wash in cold water. Do not wring, soak or bleach. Tumble dry on low heat or line dry. Do not iron or dry clean."},
  {"id":"bl282","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"245gsm Cotton Cellular Blanket","cat":"Bedroom","room":"Bedroom","price":128,"memberPrice":115,"sku":"SH-11669","tag":"New","ph":"","img":"assets/products/bl282.webp","imgs":["assets/products/bl282.webp","assets/products/bl282-2.webp","assets/products/bl282-3.webp","assets/products/bl282-4.webp","assets/products/bl282-5.webp","assets/products/bl282-6.webp","assets/products/bl282-7.webp","assets/products/bl282-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Queen","price":128,"memberPrice":115},{"label":"King","price":134,"memberPrice":121}],"colours":[{"name":"Blue","hex":"#4b75a5"},{"name":"Linen","hex":"#d6bfad"},{"name":"Silver","hex":"#d8d7dc"},{"name":"White","hex":"#ffffff"}],"desc":"Our 245gsm Cotton Cellular Blanket is lightweight, breathable and easy to care for, providing everyday comfort. This blanket will keep you comfy by maintaining airflow due to its cellular hole weave, keeping the temperature just right.","features":["Made from 245gsm cotton."],"specs":{"Type":"Bedroom > Bedding > Blankets","Material":"Made from 245gsm cotton.","Made in":"China"},"dimensions":"Single size: 160cm width x 230cm length | King Single size: 180cm width x 250cm length | Double size: 230cm width x 240cm length | Queen size: 240cm width x 255cm length | King size: 250cm width x 265cm length","care":"Please wash prior to first use. Gentle machine wash using cold water. Do not use harsh detergents or bleach. Line dry without delay, may be tumble dried on cool setting. Laundering may cause the blanket to lose shape, this can be rectified by manually reshaping on the line while damp."},
  {"id":"bl283","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Marshmallow 510gsm Microfibre Blanket","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11670","tag":"New","ph":"","img":"assets/products/bl283.webp","imgs":["assets/products/bl283.webp","assets/products/bl283-2.webp","assets/products/bl283-3.webp","assets/products/bl283-4.webp","assets/products/bl283-5.webp","assets/products/bl283-6.webp","assets/products/bl283-7.webp","assets/products/bl283-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/King Single","price":345,"memberPrice":310},{"label":"Queen/King","price":378,"memberPrice":340}],"colours":[{"name":"Jade","hex":"#7ca59f"},{"name":"Natural","hex":"#b4a391"},{"name":"White","hex":"#34485d"},{"name":"Dusty Rose","hex":"#cf888e"},{"name":"Snow","hex":"#fbf4ee"},{"name":"Chocolate","hex":"#34485d"},{"name":"Deep Navy","hex":"#34485d"}],"desc":"Ready to snuggle up in luxurious comfort? Our Marshmallow 510gsm Microfibre Blanket will keep you cosy through the cool winter months, with a super soft flannel fleece and plush sherpa reverse for your ultimate winter blanket. Generously sized, durable and easy to care for, this blanket will keep you warm for many winters to come.","features":["Made from a 260gsm flannel fleece fabric bonded with a 250gsm plush sherpa reverse","Available in Single/King Single and Queen/King blanket sizes"],"specs":{"Type":"Bedroom > Bedding > Blankets","Material":"Made from a 260gsm flannel fleece fabric bonded with a 250gsm plush sherpa reverse"},"dimensions":"Single/King Single size: 180cm x 250cm | Queen/King size: 250cm x 260cm","care":"Shake vigorously outside before first use to remove excess fluff. We advise washing before first use. Gentle machine wash in cold water. Do not wring, soak or bleach. Line dry recommended but may be tumble dried on low heat."},
  {"id":"bl284","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"170gsm Cool Touch Blanket","cat":"Bedroom","room":"Bedroom","price":378,"memberPrice":340,"sku":"SH-11671","tag":"New","ph":"","img":"assets/products/bl284.webp","imgs":["assets/products/bl284.webp","assets/products/bl284-2.webp","assets/products/bl284-3.webp","assets/products/bl284-4.webp","assets/products/bl284-5.webp","assets/products/bl284-6.webp","assets/products/bl284-7.webp","assets/products/bl284-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/King Single","price":378,"memberPrice":340},{"label":"Queen/King","price":412,"memberPrice":371}],"colours":[{"name":"Celadon Green","hex":"#7d9d38"},{"name":"Silver","hex":"#d8d7dc"}],"desc":"For an extra cool-to-touch layer through the warmer months, our 170gsm Cool Touch Blanket is a light and easy addition to the bed, or your living area. Made with a smooth, stretchy nylon-spandex cover and soft poly filling, it has a luxurious knit feel while staying lightweight, durable, machine washable and easy to care for.","features":["Made from 90% Nylon 10% Spandex cover with a 170gsm soft poly filling","Available in Single/King Single and Queen/King sizes"],"specs":{"Type":"Bedroom > Bedding > Blankets","Material":"Made from 90% Nylon 10% Spandex cover with a 170gsm soft poly filling","Made in":"China"},"dimensions":"Single/King Single: 180cm W x 250cm L | Queen/King: 250cm W x 260cm L","care":"Machine wash cold with similar colours on delicate setting. Use a laundry bag when washing. Do not bleach or soak. Drip dry. Do not dry clean. Do not iron."},
  {"id":"bl285","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"375gsm Buffalo Check Australian Wool Blanket","cat":"Bedroom","room":"Bedroom","price":499,"memberPrice":449,"sku":"SH-11672","tag":"New","ph":"","img":"assets/products/bl285.webp","imgs":["assets/products/bl285.webp","assets/products/bl285-2.webp","assets/products/bl285-3.webp","assets/products/bl285-4.webp","assets/products/bl285-5.webp","assets/products/bl285-6.webp","assets/products/bl285-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/King Single","price":499,"memberPrice":449},{"label":"Queen","price":633,"memberPrice":570},{"label":"King","price":633,"memberPrice":570}],"colours":[{"name":"Green","hex":"#29714b"},{"name":"Grey","hex":"#bcbcba"}],"desc":"Wrap yourself in warmth with the 375GSM Buffalo Check Australian Wool Blanket, crafted from premium Australian wool for natural insulation and breathability. Featuring a bold large-scale check design, this wool blanket delivers a chic, timeless look while keeping you cosy and comfortable. Available in two versatile colourways, it’s the perfect piece for layering on the bed or styling over the sofa.","features":["Made from Australian Wool","Available in Single/King Single, Queen and King blanket sizes","Large check design","This blanket is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Blankets","Material":"Made from Australian Wool"},"dimensions":"Single/King Single size: 180cm x 250cm | Queen size: 240cm x 250cm | King size: 250cm x 265cm","care":"Dry Clean only. Air regularly. Do not bleach. Do not iron. Do not tumble dry."},
  {"id":"bl286","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Knit Weave 360gsm Cotton Blanket","cat":"Bedroom","room":"Bedroom","price":334,"memberPrice":301,"sku":"SH-11673","tag":"New","ph":"","img":"assets/products/bl286.webp","imgs":["assets/products/bl286.webp","assets/products/bl286-2.webp","assets/products/bl286-3.webp","assets/products/bl286-4.webp","assets/products/bl286-5.webp","assets/products/bl286-6.webp","assets/products/bl286-7.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single","price":334,"memberPrice":301},{"label":"Single/King Single","price":345,"memberPrice":310},{"label":"Double","price":345,"memberPrice":310},{"label":"Queen","price":345,"memberPrice":310},{"label":"King","price":345,"memberPrice":310}],"colours":[{"name":"White","hex":"#ffffff"},{"name":"Brown Stone","hex":"#8b4140"},{"name":"Green","hex":"#29714b"},{"name":"Grey","hex":"#bcbcba"},{"name":"Latte","hex":"#b4a391"}],"desc":"Incredibly comfortable and naturally breathable, our 360gsm Knit Weave Cotton Blanket is perfect for those cooler nights or for adding an extra layer of warmth when needed. This is the perfect blanket all year round!","features":["Made from 360gsm cotton.","Ideally suited for use in the warmer months when an extra layer is needed, or as an extra layer to keep you cosy in the cooler months."],"specs":{"Type":"Bedroom > Bedding > Blankets","Material":"Made from 360gsm cotton."},"dimensions":"Single/King Single size: 180cm width x 250cm length | Queen size: 240cm width x 255cm length | King size: 250cm width x 265cm length","care":"Easy care machine washable. It is quite normal for all Cotton blankets to slightly lose shape when washed, this can be rectified by manually reshaping on the line while damp. It is recommended to shake the blanket vigorously after the first wash to remove excess fluff."},
  {"id":"bl287","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Luxe 520gsm Microfibre Blanket","cat":"Bedroom","room":"Bedroom","price":356,"memberPrice":320,"sku":"SH-11674","tag":"New","ph":"","img":"assets/products/bl287.webp","imgs":["assets/products/bl287.webp","assets/products/bl287-2.webp","assets/products/bl287-3.webp","assets/products/bl287-4.webp","assets/products/bl287-5.webp","assets/products/bl287-6.webp","assets/products/bl287-7.webp","assets/products/bl287-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/King Single","price":356,"memberPrice":320},{"label":"Queen","price":400,"memberPrice":360},{"label":"King","price":400,"memberPrice":360},{"label":"Single","price":400,"memberPrice":360}],"colours":[{"name":"Pearl","hex":"#fbf4ee"},{"name":"Sapphire","hex":"#202d40"},{"name":"Silver","hex":"#b5b4b2"},{"name":"Charcoal","hex":"#52505d"}],"desc":"Enjoy the luxurious feeling of snuggling into our 520gsm Luxe Microfibre Blanket. Generous sizing to allows the blanket to be tucked in under your mattress. Super soft and a must for ensuring your cosiness year-round.","features":["Made from premium microfibre."],"specs":{"Type":"Bedroom > Bedding > Blankets","Material":"Made from premium microfibre."},"dimensions":"Single/ King Single size: 180 x 250cm. | Queen size: 240 x 255cm. | King size: 250 x 265cm.","care":"Shake vigorously outside before first use to remove excess fluff. We advise washing before first use. Gentle machine wash in cold water. Do not wring, soak or bleach. Line dry recommended but may be tumble dried on low heat. Do not iron or dry clean."},
  {"id":"bl288","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Snow Marshmallow 510gsm Microfibre Blanket","cat":"Bedroom","room":"Bedroom","price":345,"memberPrice":310,"sku":"SH-11675","tag":"New","ph":"","img":"assets/products/bl288.webp","imgs":["assets/products/bl288.webp","assets/products/bl288-2.webp","assets/products/bl288-3.webp","assets/products/bl288-4.webp","assets/products/bl288-5.webp","assets/products/bl288-6.webp","assets/products/bl288-7.webp","assets/products/bl288-8.webp"],"arriveDays":[7,14],"auOnly":true,"optionLabel":"Size","sizes":[{"label":"Single/King Single","price":345,"memberPrice":310},{"label":"Queen/King","price":378,"memberPrice":340}],"desc":"Ready to snuggle up in luxurious comfort? Our Marshmallow 510gsm Microfibre Blanket will keep you cosy through the cool winter months, with a super soft flannel fleece and plush sherpa reverse for your ultimate winter blanket. Generously sized, durable and easy to care for, this blanket will keep you warm for many winters to come.","features":["Made from a 260gsm flannel fleece fabric bonded with a 250gsm plush sherpa reverse","Available in Single/King Single and Queen/King blanket sizes"],"specs":{"Type":"Bedroom > Bedding > Blankets","Material":"Made from a 260gsm flannel fleece fabric bonded with a 250gsm plush sherpa reverse"},"dimensions":"Single/King Single size: 180cm x 250cm | Queen/King size: 250cm x 260cm","care":"Shake vigorously outside before first use to remove excess fluff. We advise washing before first use. Gentle machine wash in cold water. Do not wring, soak or bleach. Line dry recommended but may be tumble dried on low heat."},
  {"id":"bl289","added":"2026-11-09","deliveryTime":"5 to 10 business days","name":"Cloud Touch 300gsm Toddler Microfibre Blanket","cat":"Bedroom","room":"Bedroom","price":84,"memberPrice":76,"sku":"SH-11676","tag":"New","ph":"","img":"assets/products/bl289.webp","imgs":["assets/products/bl289.webp","assets/products/bl289-2.webp"],"arriveDays":[7,14],"auOnly":true,"colours":[{"name":"Grey","hex":"#34485d"}],"desc":"Soft, light, and oh-so-snuggly, the Kids Cloud Touch 300gsm Microfibre Blanket is designed to keep little ones comfortable throughout every season. Crafted from ultra-soft microfibre, it’s gentle on delicate skin while remaining durable and easy to care for. With it's cloudlike soft touch, it's the everyday blanket kids will reach for whether it's bedtime, story time or a movie night!","features":["Made from 350GSM fleece microfibre","Toddler blanket size: 110cm W x 140cm L","This blanket is Oeko-Tex Standard 100 Certified. Logo and certification number can be found on product labels and packaging"],"specs":{"Type":"Bedroom > Bedding > Blankets","Material":"Made from 350GSM fleece microfibre","Made in":"China","Size":"Toddler"},"care":"Shake vigorously outside before first use to remove excess fluff. We advise washing before first use. Gentle machine wash in cold water. Do not wring soak or bleach. Line dry recommended but may be tumble dried on low heat. Do not iron or dry clean."},
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
