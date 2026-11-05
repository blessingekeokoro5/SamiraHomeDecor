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
  abn: "41 991 812 955",
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
    instagram: "https://www.instagram.com/samirahomedecor",
    facebook: "https://www.facebook.com/share/17aCKqQ3ns/?mibextid=wwXIfr",
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
    key: "bedroom", label: "Bedroom",
    columns: [
      { title: "Shop", links: ["Shop All Bedroom", "New Arrivals", "Bestsellers", "On Sale"] },
      { title: "Bedding", links: ["Bed Linen", "Quilt Covers", "Blankets"] },
      { title: "Furniture", links: ["Bedside Tables"] },
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
      { title: "Furniture", links: ["Office Chairs", "Shelving"] },
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
const PRODUCTS = [
  // ── Bathroom ──
  { id: "bt01", name: "Aurelia Marble & Gold Bathroom Set (5-Piece)", cat: "Bathroom", price: 250, memberPrice: 220, sku: "SH-10109", tag: "New", ph: "", img: "assets/products/bt01-5.webp",
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

  { id: "bt02", name: "Dark Marble Bathroom Set (4-Piece)", cat: "Bathroom", room: "Bathroom", price: 926, memberPrice: 833, sku: "SH-10115", tag: "New", ph: "", img: "assets/products/bt02-4.webp",
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

  { id: "bt03", name: "Minimalist Pump Soap Dispenser", cat: "Bathroom", room: "Bathroom", price: 102, memberPrice: 92, sku: "SH-10161", tag: "New", ph: "", img: "assets/products/bt03.jpg",
    imgs: ["assets/products/bt03.jpg", "assets/products/bt03-2.webp", "assets/products/bt03-3.jpg", "assets/products/bt03-4.jpg", "assets/products/bt03-5.webp", "assets/products/bt03-6.webp"],
    sizes: [{ label: "Black / Small", price: 102 }, { label: "Silver / Small", price: 102 }, { label: "Ivory / Small", price: 102 }, { label: "Black / Large", price: 130 }, { label: "Silver / Large", price: 130 }, { label: "Ivory / Large", price: 130 }],
    desc: "A plain, well-proportioned pump dispenser for hand soap or lotion, in a finish that doesn't shout. Two sizes, so it suits a small powder room or a busy family basin, and three colours that sit quietly against most tiles.",
    features: [
      "Smooth pump action, built for daily use",
      "Two sizes: Small and Large",
      "Black, Silver or Ivory",
      "Minimalist shape that suits most bathrooms"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Ceramic", "Options": "6" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads and scouring powders, which scratch the glaze and dull any metallic detail." },

  { id: "bt04", name: "Black Marble-Look & Gold Bathroom Collection", cat: "Bathroom", room: "Bathroom", price: 67, memberPrice: 60, sku: "SH-10162", tag: "New", ph: "", img: "assets/products/bt04.webp",
    imgs: ["assets/products/bt04.webp", "assets/products/bt04-2.webp", "assets/products/bt04-3.webp", "assets/products/bt04-4.webp", "assets/products/bt04-5.webp", "assets/products/bt04-6.webp"],
    sizes: [{ label: "Toothbrush Holder B", price: 67 }, { label: "Mouthwash Cup", price: 67 }, { label: "Soap Dish", price: 91 }, { label: "Soap Dispenser", price: 93 }, { label: "Cotton Swab Box", price: 93 }, { label: "Tray A", price: 109 }, { label: "Toothbrush Holder A", price: 117 }, { label: "Tray B", price: 154 }, { label: "Tissue Box", price: 176 }, { label: "Tray C", price: 180 }, { label: "Tray D", price: 183 }],
    desc: "Black marble-look pieces with slim gold detailing, bought individually so you take only what your basin needs. Toothbrush holders, cups, a dispenser, a cotton swab box, soap dish, tissue box and two tray sizes, all cut to the same restrained line.",
    features: [
      "Black marble-look finish with gold accents",
      "Pieces sold individually, so you buy what you need",
      "Includes dispenser, holders, soap dish, tissue box and trays",
      "Coordinated across the whole range"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Ceramic", "Options": "11" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads and scouring powders, which scratch the glaze and dull any metallic detail." },

  { id: "bt05", name: "White Marble & Gold Bathroom Collection", cat: "Bathroom", room: "Bathroom", price: 185, memberPrice: 166, sku: "SH-10163", tag: "New", ph: "", img: "assets/products/bt05.webp",
    imgs: ["assets/products/bt05.webp", "assets/products/bt05-2.webp", "assets/products/bt05-3.webp", "assets/products/bt05-4.webp", "assets/products/bt05-5.webp", "assets/products/bt05-6.webp"],
    sizes: [{ label: "Soap Dish (square)", price: 185 }, { label: "Soap Dish (round)", price: 185 }, { label: "Diffuser", price: 250 }, { label: "Cotton Swab (square)", price: 278 }, { label: "Cotton Swab (round)", price: 278 }, { label: "Soap Dispenser (square)", price: 278 }, { label: "Soap Dispenser (round)", price: 278 }, { label: "Toothbrush Holder (square)", price: 278 }, { label: "Toothbrush Holder (round)", price: 278 }, { label: "Tray 01", price: 278 }, { label: "Toothbrush Holder (long)", price: 306 }, { label: "Tray 03", price: 315 }, { label: "Tray 02", price: 333 }, { label: "Tray 04", price: 389 }, { label: "Tissue Holder (Small)", price: 398 }, { label: "Tissue Holder (Big)", price: 463 }],
    desc: "Natural white marble with gold trim, in square or round shapes depending on how soft you want the look. The veining runs differently through every piece, so a set assembled from these never looks mass-produced.",
    features: [
      "Natural white marble with gold accents",
      "Square or round shapes across the range",
      "Veining differs in every piece",
      "Pieces sold individually"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Natural marble", "Options": "16" },
    care: "Wipe with a soft, damp cloth and dry straight away. Marble is porous, so keep it away from vinegar, citrus and bleach, which dull and etch the surface. Stand bottles on a tray rather than directly on the stone." },

  { id: "bt06", name: "Two-Tone Bathroom Bin", cat: "Bathroom", room: "Bathroom", price: 276, memberPrice: 248, sku: "SH-10164", tag: "New", ph: "", img: "assets/products/bt06.webp",
    imgs: ["assets/products/bt06.webp", "assets/products/bt06-2.webp", "assets/products/bt06-3.webp", "assets/products/bt06-4.webp", "assets/products/bt06-5.webp", "assets/products/bt06-6.webp"],
    sizes: [{ label: "Orange (with lid)", price: 276 }, { label: "White + Gold (no lid)", price: 276 }, { label: "Green + Gold (no lid)", price: 276 }, { label: "White + Pink (with lid)", price: 276 }, { label: "Lime + Gold (with lid)", price: 276 }, { label: "White + Grey (with lid)", price: 276 }],
    desc: "A bin you don't have to hide. Clean-sided and weighted enough to stay put, in two-tone colourways with and without a lid, so it works beside a vanity or under a desk just as well.",
    features: [
      "Sleek silhouette that suits a visible spot",
      "With or without lid, depending on the colourway",
      "Six two-tone colour combinations",
      "Wipe-clean finish"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Resin / composite", "Options": "6" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive cleaners and harsh solvents, which can dull the finish." },

  { id: "bt07", name: "Touchless Sensor Bathroom Bin", cat: "Bathroom", room: "Bathroom", price: 406, memberPrice: 365, sku: "SH-10165", tag: "New", ph: "", img: "assets/products/bt07.webp",
    imgs: ["assets/products/bt07.webp", "assets/products/bt07-2.webp", "assets/products/bt07-3.webp", "assets/products/bt07-4.webp"],
    sizes: [{ label: "Round - 10L", price: 406 }, { label: "Oval - 10L", price: 406 }, { label: "Square - 10L", price: 406 }, { label: "Square - 15L", price: 406 }],
    desc: "Opens as your hand approaches and closes itself afterwards, which matters more in a bathroom than anywhere else in the house. Fully waterproof, in round, oval and square shapes, at 10 or 15 litres.",
    features: [
      "Touchless sensor lid, no contact needed",
      "Fully waterproof construction",
      "Round, oval or square",
      "10L and 15L capacities"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Stainless steel / metal", "Options": "4" },
    care: "Wipe with a soft, damp cloth and dry to prevent water spotting, which is the usual reason a finish looks tired. Avoid abrasive cleaners on brushed and coloured finishes." },

  { id: "bt08", name: "Emerald Marble Bathroom Accessories", cat: "Bathroom", room: "Bathroom", price: 163, memberPrice: 147, sku: "SH-10166", tag: "New", ph: "", img: "assets/products/bt08.jpg",
    imgs: ["assets/products/bt08.jpg", "assets/products/bt08-2.jpg", "assets/products/bt08-3.jpg", "assets/products/bt08-4.jpg", "assets/products/bt08-5.jpg", "assets/products/bt08-6.webp"],
    sizes: [{ label: "Soap Dish (square)", price: 163 }, { label: "Soap Dish (round)", price: 163 }, { label: "Soap Dispenser (square)", price: 272 }, { label: "Soap Dispenser  (round)", price: 272 }, { label: "Toothbrush Holder (Round)", price: 274 }, { label: "Toothbrush Holder (square)", price: 274 }, { label: "3-Hole Holder", price: 274 }, { label: "Cotton Swab Box (square)", price: 294 }, { label: "Cotton Swab Box (round)", price: 294 }, { label: "Diffuser (square)", price: 294 }, { label: "Diffuser (round)", price: 294 }, { label: "Tray", price: 300 }, { label: "Handle Tray", price: 313 }, { label: "Tissue Box (tall)", price: 507 }, { label: "Tissue Box (long)", price: 554 }],
    desc: "Deep green natural marble with pale veining running through it, which is a far braver choice than white and looks remarkable against brass tapware. Square or round pieces, bought one at a time.",
    features: [
      "Premium natural green marble",
      "Dramatic pale veining, unique to each piece",
      "Square or round shapes",
      "Dispenser, cotton swab box, soap dish and holders"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Natural marble", "Options": "15" },
    care: "Wipe with a soft, damp cloth and dry straight away. Marble is porous, so keep it away from vinegar, citrus and bleach, which dull and etch the surface. Stand bottles on a tray rather than directly on the stone." },

  { id: "bt09", name: "Fluted Sandstone-Look Bathroom Accessories", cat: "Bathroom", room: "Bathroom", price: 120, memberPrice: 108, sku: "SH-10167", tag: "New", ph: "", img: "assets/products/bt09.webp",
    imgs: ["assets/products/bt09.webp", "assets/products/bt09-2.webp", "assets/products/bt09-3.webp", "assets/products/bt09-4.webp", "assets/products/bt09-5.webp", "assets/products/bt09-6.webp"],
    sizes: [{ label: "Marble White Soap Dish", price: 120 }, { label: "Black Soap Dish", price: 120 }, { label: "White & Gold Soap Dish", price: 120 }, { label: "Marble White Toothbrush Cup", price: 124 }, { label: "Black Toothbrush Cup", price: 124 }, { label: "White & Gold Toothbrush Cup", price: 124 }, { label: "Marble White Cotton Swab Box", price: 128 }, { label: "Black Cotton Swab Box", price: 128 }, { label: "White & Gold Cotton Swab Box", price: 128 }, { label: "Marble White & Silver Soap Dispenser", price: 165 }, { label: "Marble White Diffuser", price: 165 }, { label: "Black & Silver Soap Dispenser", price: 165 }, { label: "Black Diffuser", price: 165 }, { label: "White & Gold Soap Dispenser", price: 165 }, { label: "White & Gold Diffuser", price: 165 }, { label: "Marble White Tray", price: 239 }, { label: "Black Tray", price: 239 }, { label: "White & Gold Tray", price: 239 }],
    desc: "Bevelled vertical grooves give these pieces their texture, catching the light down the sides so a plain basin suddenly has something to look at. In marble white and warmer sandstone tones.",
    features: [
      "Bevelled vertical fluting with real depth",
      "Marble white and sandstone colourways",
      "Dispenser, cotton swab box, diffuser, cup and soap dish",
      "Pieces sold individually"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Natural stone", "Options": "18" },
    care: "Wipe with a soft, damp cloth and dry. Avoid acidic or abrasive cleaners, which mark natural stone. Wipe spills promptly, especially oils and toothpaste." },

  { id: "bt10", name: "Sandstone Bathroom Collection", cat: "Bathroom", room: "Bathroom", price: 137, memberPrice: 123, sku: "SH-10168", tag: "New", ph: "", img: "assets/products/bt10.jpg",
    imgs: ["assets/products/bt10.jpg", "assets/products/bt10-2.webp", "assets/products/bt10-3.webp", "assets/products/bt10-4.webp", "assets/products/bt10-5.webp", "assets/products/bt10-6.webp"],
    sizes: [{ label: "Soap Dish", price: 137 }, { label: "Cup", price: 200 }, { label: "Soap Dispenser", price: 244 }, { label: "Tooth Brush Holder", price: 267 }, { label: "Tray", price: 272 }, { label: "Complete Set", price: 1017 }],
    desc: "Premium sandstone, where the texture is the whole point: matte, grainy and warm rather than polished and cold. Buy the complete set, or add pieces one at a time.",
    features: [
      "Premium natural sandstone with a matte finish",
      "Complete set, or individual pieces",
      "Cup, tray, soap dish, dispenser and toothbrush holder",
      "Natural variation in every piece"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Natural stone", "Options": "6" },
    care: "Wipe with a soft, damp cloth and dry. Avoid acidic or abrasive cleaners, which mark natural stone. Wipe spills promptly, especially oils and toothpaste." },

  { id: "bt11", name: "Black Marble Bathroom Accessories Collection", cat: "Bathroom", room: "Bathroom", price: 222, memberPrice: 200, sku: "SH-10169", tag: "New", ph: "", img: "assets/products/bt11.webp",
    imgs: ["assets/products/bt11.webp", "assets/products/bt11-2.jpg", "assets/products/bt11-3.jpg", "assets/products/bt11-4.webp", "assets/products/bt11-5.webp", "assets/products/bt11-6.webp"],
    sizes: [{ label: "Soap Dish A", price: 222 }, { label: "Soap Dish B", price: 222 }, { label: "Soap Dispenser (gold)", price: 278 }, { label: "Soap Dispenser (silver)", price: 278 }, { label: "Soap Dispenser A (gold)", price: 278 }, { label: "Soap Dispenser A (silver)", price: 278 }, { label: "Cotton Swab box (silver)", price: 278 }, { label: "Cotton Swab box (gold)", price: 278 }, { label: "Toothbrush Holder B", price: 278 }, { label: "Toothbrush Holder C", price: 278 }, { label: "Toothbrush Holder A", price: 306 }, { label: "Aromatherapy Bottle (gold)", price: 306 }, { label: "Aromatherapy Bottle (silver)", price: 306 }, { label: "Cosmetic Mirror (silver)", price: 315 }, { label: "Cosmetic Mirror (gold)", price: 315 }, { label: "Tray A", price: 389 }, { label: "Tray B", price: 500 }, { label: "Tray C", price: 556 }, { label: "Tray D", price: 556 }],
    desc: "Black natural marble with your choice of gold or silver fittings, which is the detail that decides whether a bathroom reads warm or cool. Each piece is cut from stone, so the veining is never repeated.",
    features: [
      "Premium black natural marble",
      "Gold or silver fittings throughout",
      "Veining unique to every piece",
      "Dispensers, cotton swab boxes and more, sold individually"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Natural marble", "Options": "19" },
    care: "Wipe with a soft, damp cloth and dry straight away. Marble is porous, so keep it away from vinegar, citrus and bleach, which dull and etch the surface. Stand bottles on a tray rather than directly on the stone." },

  { id: "bt12", name: "Crystal Glass Bathroom Accessories", cat: "Bathroom", room: "Bathroom", price: 889, memberPrice: 800, sku: "SH-10170", tag: "New", ph: "", img: "assets/products/bt12.webp",
    imgs: ["assets/products/bt12.webp", "assets/products/bt12-2.jpg", "assets/products/bt12-3.webp", "assets/products/bt12-4.jpg", "assets/products/bt12-5.jpg", "assets/products/bt12-6.webp"],
    sizes: [{ label: "1", price: 889 }, { label: "2", price: 889 }, { label: "3", price: 889 }, { label: "4", price: 889 }, { label: "5", price: 889 }],
    desc: "Crystal glass with faceted sides that throw light around a basin the way cut glass does on a dining table. Five styles to choose between, all finished to the same standard.",
    features: [
      "Faceted crystal glass that catches the light",
      "Five styles available",
      "Weighty, substantial feel in the hand",
      "A quiet touch of luxury for a vanity"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Glass", "Options": "5" },
    care: "Wipe with a soft, damp cloth and buff dry to keep the clarity. Avoid abrasive cleaners, and lift rather than slide the pieces across stone benchtops." },

  { id: "bt13", optionLabel: "Colour", sizeImg: {"Black":"assets/products/bt13.jpg","Gold":"assets/products/bt13-3.webp","Silver":"assets/products/bt13-5.webp"}, name: "Countertop Hand Towel Rack", cat: "Bathroom", room: "Bathroom", price: 276, memberPrice: 248, sku: "SH-10171", tag: "New", ph: "", img: "assets/products/bt13.jpg",
    imgs: ["assets/products/bt13.jpg", "assets/products/bt13-2.webp", "assets/products/bt13-3.webp", "assets/products/bt13-4.webp", "assets/products/bt13-5.webp", "assets/products/bt13-6.webp"],
    sizes: [{ label: "Black", price: 276 }, { label: "Gold", price: 276 }, { label: "Silver", price: 276 }],
    desc: "A 32cm standing rack for the bench or vanity, so a hand towel has somewhere to live that isn't the edge of the basin. Black, gold or silver.",
    features: [
      "32cm tall, sized for benches and vanities",
      "Keeps hand towels off the basin edge",
      "Black, Gold or Silver",
      "Freestanding, no fixing required"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Stainless steel / metal", "Options": "3" },
    care: "Wipe with a soft, damp cloth and dry to prevent water spotting, which is the usual reason a finish looks tired. Avoid abrasive cleaners on brushed and coloured finishes." },

  { id: "bt14", name: "Egyptian Cotton Towel Set (700GSM, 3-Piece)", cat: "Bathroom", room: "Bathroom", price: 220, memberPrice: 198, sku: "SH-10172", tag: "New", ph: "", img: "assets/products/bt14.jpg",
    imgs: ["assets/products/bt14.jpg", "assets/products/bt14-2.jpg", "assets/products/bt14-3.jpg", "assets/products/bt14-4.webp", "assets/products/bt14-5.jpg", "assets/products/bt14-6.jpg"],
    sizes: [{ label: "Light Grey / 3 Piece Towel Set", price: 220 }, { label: "Royal Blue / 3 Piece Towel Set", price: 220 }, { label: "Dark Grey / 3 Piece Towel Set", price: 220 }, { label: "White / 3 Piece Towel Set", price: 220 }, { label: "Peachy Pink / 3 Piece Towel Set", price: 220 }, { label: "Tuscan Tan / 3 Piece Towel Set", price: 220 }],
    desc: "700GSM Egyptian cotton, which is the weight where a towel stops being thin and starts feeling like a hotel. Three pieces per set, in six colours, absorbent from the first wash and soft after many.",
    features: [
      "700GSM Egyptian cotton",
      "Three-piece set",
      "Highly absorbent with a plush hand",
      "Six colours: light grey, royal blue, dark grey, white, peachy pink and more"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Egyptian cotton", "Options": "6" },
    care: "Machine wash warm with like colours. Avoid fabric softener, which coats the fibres and reduces absorbency. Tumble dry low, and skip the iron." },

  { id: "bt15", name: "Black & White Veined Bathroom Collection", cat: "Bathroom", room: "Bathroom", price: 100, memberPrice: 90, sku: "SH-10173", tag: "New", ph: "", img: "assets/products/bt15.jpg",
    imgs: ["assets/products/bt15.jpg", "assets/products/bt15-2.webp", "assets/products/bt15-3.webp", "assets/products/bt15-4.webp", "assets/products/bt15-5.webp", "assets/products/bt15-6.webp"],
    sizes: [{ label: "Soap Dish", price: 100 }, { label: "Soap Dispenser", price: 107 }, { label: "Mouthwash Cup", price: 107 }, { label: "Cotton Swab Box", price: 107 }, { label: "Toothbrush Holder", price: 119 }, { label: "Tray", price: 272 }],
    desc: "A black finish with white veining running across it, which reads as marble from across the room and costs considerably less. The tray pulls the set together on a vanity.",
    features: [
      "Black finish with elegant white veining",
      "Dispenser, mouthwash cup, toothbrush holder, cotton swab box, soap dish and tray",
      "Pieces sold individually",
      "Contemporary look at an accessible price"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Ceramic", "Options": "6" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads and scouring powders, which scratch the glaze and dull any metallic detail." },

  { id: "bt16", name: "Travertine Bathroom Collection", cat: "Bathroom", room: "Bathroom", price: 217, memberPrice: 195, sku: "SH-10174", tag: "New", ph: "", img: "assets/products/bt16.webp",
    imgs: ["assets/products/bt16.webp", "assets/products/bt16-2.jpg", "assets/products/bt16-3.jpg", "assets/products/bt16-4.webp", "assets/products/bt16-5.webp", "assets/products/bt16-6.webp"],
    sizes: [{ label: "Soap Dish A", price: 217 }, { label: "Soap Dish B", price: 217 }, { label: "Cup", price: 248 }, { label: "Toothbrush Holder", price: 257 }, { label: "Soap Dispenser A", price: 267 }, { label: "Soap Dispenser B", price: 267 }, { label: "Cotton Swab Box A", price: 267 }, { label: "Cotton Swab Box B", price: 267 }, { label: "Storage Container", price: 267 }, { label: "Tray A", price: 341 }, { label: "Aromatherapy Bottle", price: 346 }, { label: "Tray C", price: 422 }, { label: "Tray B", price: 531 }, { label: "Tissue Box", price: 548 }],
    desc: "Travertine has an open, pitted texture that reads as old-world rather than glossy, and it suits a bathroom that's meant to feel calm. The widest set of pieces we carry, including a storage container and two soap dish shapes.",
    features: [
      "Natural travertine with an open, tactile texture",
      "Includes dispensers, cotton swab boxes, cup, storage container and soap dishes",
      "Two shapes across several pieces",
      "Calm, understated finish"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Natural stone", "Options": "14" },
    care: "Wipe with a soft, damp cloth and dry. Avoid acidic or abrasive cleaners, which mark natural stone. Wipe spills promptly, especially oils and toothpaste." },

  { id: "bt17", name: "Rose Gold Bathroom Accessories Set", cat: "Bathroom", room: "Bathroom", price: 124, memberPrice: 112, sku: "SH-10175", tag: "New", ph: "", img: "assets/products/bt17.jpg",
    imgs: ["assets/products/bt17.jpg", "assets/products/bt17-2.jpg", "assets/products/bt17-3.jpg", "assets/products/bt17-4.jpg", "assets/products/bt17-5.jpg", "assets/products/bt17-6.webp"],
    sizes: [{ label: "Toothbrush Holder", price: 124 }, { label: "Soap Dispenser", price: 124 }, { label: "Soap Dish", price: 124 }, { label: "Cup", price: 124 }, { label: "Complete Set", price: 457 }],
    desc: "Rose gold detailing across a four-piece set: toothbrush holder, dispenser, soap dish and cup. Take the set, or fill a gap with a single piece.",
    features: [
      "Rose gold accents throughout",
      "Complete four-piece set or individual pieces",
      "Toothbrush holder, soap dispenser, soap dish and cup",
      "Warm metallic tone that flatters most tiles"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Ceramic", "Options": "5" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads and scouring powders, which scratch the glaze and dull any metallic detail." },

  { id: "bt18", optionLabel: "Colour", sizeImg: {"White":"assets/products/bt18-6.webp","Black":"assets/products/bt18-5.webp"}, name: "Expandable Bamboo Bath Caddy", cat: "Bathroom", room: "Bathroom", price: 250, memberPrice: 225, sku: "SH-10176", tag: "New", ph: "", img: "assets/products/bt18.jpg",
    imgs: ["assets/products/bt18.jpg", "assets/products/bt18-2.jpg", "assets/products/bt18-3.jpg", "assets/products/bt18-4.webp", "assets/products/bt18-5.webp", "assets/products/bt18-6.webp"],
    sizes: [{ label: "White", price: 250 }, { label: "Black", price: 250 }],
    desc: "Extends to fit across the bath, then holds a book, a glass and a candle where you can reach them. Bamboo, so it copes with the steam, in white or black.",
    features: [
      "Extends to fit most baths",
      "Holds a book, glass and candle",
      "Bamboo, suited to a humid room",
      "White or Black"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Timber", "Options": "2" },
    care: "Wipe dry after each use and let it air properly, since standing water is what eventually splits timber. Avoid soaking, and oil occasionally to keep the grain fed." },

  { id: "bt19", name: "Clear Cosmetic Storage Box", cat: "Bathroom", room: "Bathroom", price: 102, memberPrice: 92, sku: "SH-10177", tag: "New", ph: "", img: "assets/products/bt19.webp",
    imgs: ["assets/products/bt19.webp", "assets/products/bt19-2.webp", "assets/products/bt19-3.webp", "assets/products/bt19-4.webp", "assets/products/bt19-5.webp"],
    sizes: [{ label: "Small", price: 102 }, { label: "Large", price: 137 }],
    desc: "A clear box that keeps brushes, lipsticks and skincare upright and visible instead of rolling loose in a drawer. Two sizes, and tidy enough to leave out on the vanity.",
    features: [
      "Clear sides, so you can see what you have",
      "Keeps brushes and bottles upright",
      "Two sizes: Small and Large",
      "Smart enough to leave on display"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Resin / composite", "Options": "2" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive cleaners and harsh solvents, which can dull the finish." },

  { id: "bt20", name: "Glass Bathroom Accessories Set (4-Piece)", cat: "Bathroom", room: "Bathroom", price: 544, memberPrice: 490, sku: "SH-10178", tag: "New", ph: "", img: "assets/products/bt20.webp",
    imgs: ["assets/products/bt20.webp", "assets/products/bt20-2.webp", "assets/products/bt20-3.webp", "assets/products/bt20-4.webp", "assets/products/bt20-5.webp", "assets/products/bt20-6.webp"],
    sizes: [{ label: "4 x Piece Set / Black", price: 544 }, { label: "4 x Piece Set / White", price: 544 }],
    desc: "Four pieces in high-quality glass, in black or white, with the weight and clarity that cheap acrylic never manages. A whole basin dressed in one purchase.",
    features: [
      "High-quality glass construction",
      "Four-piece set",
      "Black or White",
      "Substantial weight and clarity"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Glass", "Options": "2" },
    care: "Wipe with a soft, damp cloth and buff dry to keep the clarity. Avoid abrasive cleaners, and lift rather than slide the pieces across stone benchtops." },

  { id: "bt21", name: "Ceramic Marble-Look Bathroom Set (5-Piece)", cat: "Bathroom", room: "Bathroom", price: 352, memberPrice: 317, sku: "SH-10179", tag: "New", ph: "", img: "assets/products/bt21.webp",
    imgs: ["assets/products/bt21.webp", "assets/products/bt21-2.webp", "assets/products/bt21-3.webp", "assets/products/bt21-4.webp", "assets/products/bt21-5.webp", "assets/products/bt21-6.webp"],
    sizes: [{ label: "Emerald Green: 5 x Piece Set", price: 352 }, { label: "Snow White: 5 x Piece Set", price: 352 }, { label: "Black: 5 x Piece Set", price: 352 }],
    desc: "Five ceramic pieces finished to look like marble, with gold accents, in emerald green, snow white or black. All the drama of stone, at a fraction of the price and weight.",
    features: [
      "Five-piece ceramic set",
      "Marble-look finish with gold accents",
      "Emerald Green, Snow White or Black",
      "Lighter and more affordable than natural stone"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Ceramic", "Options": "3" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads and scouring powders, which scratch the glaze and dull any metallic detail." },

  { id: "bt22", optionLabel: "Colour", sizeImg: {"White + Gold":"assets/products/bt22-2.webp","White + Black":"assets/products/bt22-5.jpg","Black + Black":"assets/products/bt22-6.jpg","Black + Gold":"assets/products/bt22-3.jpg"}, name: "Marble & Copper Floor Towel Holder", cat: "Bathroom", room: "Bathroom", price: 2033, memberPrice: 1830, sku: "SH-10180", tag: "New", ph: "", img: "assets/products/bt22.jpg",
    imgs: ["assets/products/bt22.jpg", "assets/products/bt22-2.webp", "assets/products/bt22-3.jpg", "assets/products/bt22-4.jpg", "assets/products/bt22-5.jpg", "assets/products/bt22-6.jpg"],
    sizes: [{ label: "White + Gold", price: 2033 }, { label: "White + Black", price: 2033 }, { label: "Black + Black", price: 2033 }, { label: "Black + Gold", price: 2033 }],
    desc: "A freestanding towel holder on a solid marble base with copper rods, heavy enough to stay exactly where you put it. The piece that makes a bathroom look finished rather than furnished.",
    features: [
      "Solid marble base with copper rods",
      "Freestanding, no wall fixing",
      "Four colour combinations",
      "Weighted for stability"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Natural marble", "Options": "4" },
    care: "Wipe with a soft, damp cloth and dry straight away. Marble is porous, so keep it away from vinegar, citrus and bleach, which dull and etch the surface. Stand bottles on a tray rather than directly on the stone." },

  { id: "bt23", name: "Porcelain Bathroom Set (5-Piece)", cat: "Bathroom", room: "Bathroom", price: 346, memberPrice: 311, sku: "SH-10181", tag: "New", ph: "", img: "assets/products/bt23.jpg",
    imgs: ["assets/products/bt23.jpg", "assets/products/bt23-2.jpg", "assets/products/bt23-3.jpg", "assets/products/bt23-4.jpg", "assets/products/bt23-5.jpg"],
    sizes: [{ label: "5 Piece Set", price: 346 }],
    desc: "Five porcelain pieces with clean lines and nothing superfluous, made to work together on a single vanity.",
    features: [
      "Five coordinated porcelain pieces",
      "Minimalist, contemporary lines",
      "Designed to be used as a set",
      "Smooth, wipe-clean glaze"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Ceramic", "Options": "1" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads and scouring powders, which scratch the glaze and dull any metallic detail." },

  { id: "bt24", name: "Ceramic Bathroom Accessories Collection", cat: "Bathroom", room: "Bathroom", price: 128, memberPrice: 115, sku: "SH-10182", tag: "New", ph: "", img: "assets/products/bt24.webp",
    imgs: ["assets/products/bt24.webp", "assets/products/bt24-2.webp", "assets/products/bt24-3.webp", "assets/products/bt24-4.webp", "assets/products/bt24-5.webp", "assets/products/bt24-6.webp"],
    sizes: [{ label: "Soap Dish / Silver", price: 128 }, { label: "Soap Dish / White", price: 128 }, { label: "Soap Dish / Gold", price: 128 }, { label: "Holder / Silver", price: 137 }, { label: "Holder / White", price: 137 }, { label: "Holder / Gold", price: 137 }, { label: "Cup / Silver", price: 143 }, { label: "Cup / White", price: 143 }, { label: "Cup / Gold", price: 143 }, { label: "Dispenser / Silver", price: 146 }, { label: "Dispenser / White", price: 146 }, { label: "Dispenser / Gold", price: 146 }],
    desc: "Good ceramic in silver, white or gold trims, sold piece by piece: dispenser, cup and holder. The easy way to replace one tired item without rebuying the lot.",
    features: [
      "High-quality ceramic",
      "Silver, White or Gold trims",
      "Dispenser, cup and holder",
      "Buy single pieces to fill a gap"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Ceramic", "Options": "12" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads and scouring powders, which scratch the glaze and dull any metallic detail." },

  { id: "bt25", optionLabel: "Colour", sizeImg: {"White":"assets/products/bt25-5.webp","Black":"assets/products/bt25-6.webp"}, name: "Marble-Base Rotating Vanity Mirror", cat: "Bathroom", room: "Bathroom", price: 637, memberPrice: 573, sku: "SH-10183", tag: "New", ph: "", img: "assets/products/bt25.jpg",
    imgs: ["assets/products/bt25.jpg", "assets/products/bt25-2.webp", "assets/products/bt25-3.webp", "assets/products/bt25-4.webp", "assets/products/bt25-5.webp", "assets/products/bt25-6.webp"],
    sizes: [{ label: "White", price: 637 }, { label: "Black", price: 637 }],
    desc: "A vanity mirror on a marble base that turns to the angle you need and stays there. Heavy enough not to creep across the bench while you use it.",
    features: [
      "Rotates to the angle you need",
      "Solid marble base",
      "White or Black",
      "Weighted so it stays put"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Natural marble", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry straight away. Marble is porous, so keep it away from vinegar, citrus and bleach, which dull and etch the surface. Stand bottles on a tray rather than directly on the stone." },

  { id: "bt26", name: "Marble Toiletry Collection", cat: "Bathroom", room: "Bathroom", price: 185, memberPrice: 166, sku: "SH-10184", tag: "New", ph: "", img: "assets/products/bt26.webp",
    imgs: ["assets/products/bt26.webp", "assets/products/bt26-2.jpg", "assets/products/bt26-3.webp", "assets/products/bt26-4.webp", "assets/products/bt26-5.webp", "assets/products/bt26-6.webp"],
    sizes: [{ label: "Soap Dish", price: 185 }, { label: "Mouth Cup", price: 259 }, { label: "Soap Dispenser (gold)", price: 278 }, { label: "Soap Dispenser (silver)", price: 278 }, { label: "Cotton Swab Box", price: 278 }, { label: "Toothbrush Holder", price: 306 }, { label: "Tissue Box B", price: 407 }, { label: "Tissue Box A", price: 463 }, { label: "Tray", price: 556 }],
    desc: "Marble pieces at a larger scale than most: two tissue box designs, a generous tray, dispensers in gold or silver. For a bathroom with the bench space to carry them.",
    features: [
      "Genuine marble throughout",
      "Two tissue box designs and a generous tray",
      "Gold or silver dispenser fittings",
      "Larger scale than most accessory ranges"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Natural marble", "Options": "9" },
    care: "Wipe with a soft, damp cloth and dry straight away. Marble is porous, so keep it away from vinegar, citrus and bleach, which dull and etch the surface. Stand bottles on a tray rather than directly on the stone." },

  { id: "bt27", name: "Expandable Timber Bath Caddy", cat: "Bathroom", room: "Bathroom", price: 294, memberPrice: 265, sku: "SH-10185", tag: "New", ph: "", img: "assets/products/bt27.jpg",
    imgs: ["assets/products/bt27.jpg", "assets/products/bt27-2.webp", "assets/products/bt27-3.jpg", "assets/products/bt27-4.webp", "assets/products/bt27-5.webp", "assets/products/bt27-6.webp"],
    desc: "Solid timber that extends across the bath, with room for a book, a glass and whatever else turns a bath into an hour to yourself.",
    features: [
      "Quality timber construction",
      "Expands to fit most baths",
      "Room for a book, glass and candle",
      "Warm, natural finish"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Timber" },
    care: "Wipe dry after each use and let it air properly, since standing water is what eventually splits timber. Avoid soaking, and oil occasionally to keep the grain fed." },

  { id: "bt28", name: "Luxe Bathroom Set (4-Piece)", cat: "Bathroom", room: "Bathroom", price: 602, memberPrice: 542, sku: "SH-10186", tag: "New", ph: "", img: "assets/products/bt28.webp",
    imgs: ["assets/products/bt28.webp", "assets/products/bt28-2.jpg", "assets/products/bt28-3.webp", "assets/products/bt28-4.jpg", "assets/products/bt28-5.webp", "assets/products/bt28-6.webp"],
    sizes: [{ label: "4 Piece Set A", price: 602 }, { label: "4 Piece Set B", price: 602 }],
    desc: "A four-piece set in two arrangements, made to dress a whole basin at once rather than be collected slowly.",
    features: [
      "Four-piece set",
      "Two arrangements to choose from",
      "Coordinated finish across every piece",
      "A complete basin in one purchase"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Ceramic", "Options": "2" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads and scouring powders, which scratch the glaze and dull any metallic detail." },

  { id: "bt29", name: "Gilded Bathroom Accessories Set (4-Piece)", cat: "Bathroom", room: "Bathroom", price: 109, memberPrice: 98, sku: "SH-10187", tag: "New", ph: "", img: "assets/products/bt29.jpg",
    imgs: ["assets/products/bt29.jpg", "assets/products/bt29-2.jpg", "assets/products/bt29-3.jpg"],
    sizes: [{ label: "Soap Dish", price: 109 }, { label: "Toothbrush Holder", price: 109 }, { label: "Soap Dispenser", price: 109 }, { label: "Cup", price: 109 }, { label: "4 Piece Set", price: 424 }],
    desc: "Four pieces with gilded detailing, available as a set or individually, so a single soap dish can be replaced without starting again.",
    features: [
      "Four-piece set or individual pieces",
      "Gilded detailing",
      "Soap dish, toothbrush holder, dispenser and cup",
      "Consistent finish across the range"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Ceramic", "Options": "5" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads and scouring powders, which scratch the glaze and dull any metallic detail." },

  { id: "bt30", name: "Three-Tier Standing Towel Rack", cat: "Bathroom", room: "Bathroom", price: 1278, memberPrice: 1150, sku: "SH-10188", tag: "New", ph: "", img: "assets/products/bt30.jpg",
    imgs: ["assets/products/bt30.jpg", "assets/products/bt30-2.jpg", "assets/products/bt30-3.jpg", "assets/products/bt30-4.webp", "assets/products/bt30-5.webp", "assets/products/bt30-6.webp"],
    sizes: [{ label: "Black / Small", price: 1278 }, { label: "Gold / Small", price: 1278 }, { label: "Black / Large", price: 1370 }, { label: "Gold / Large", price: 1370 }],
    desc: "Three hanging levels on a freestanding frame, which is what a family bathroom actually needs: somewhere for three towels to dry properly rather than overlap on one rail.",
    features: [
      "Three hanging levels",
      "Freestanding, no wall fixing required",
      "Black or Gold",
      "Small and Large sizes"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Stainless steel / metal", "Options": "4" },
    care: "Wipe with a soft, damp cloth and dry to prevent water spotting, which is the usual reason a finish looks tired. Avoid abrasive cleaners on brushed and coloured finishes." },

  { id: "bt31", optionLabel: "Colour", sizeImg: {"Black":"assets/products/bt31-4.webp","Brushed Gold":"assets/products/bt31-3.webp"}, name: "Stainless Steel & Marble Towel Holder", cat: "Bathroom", room: "Bathroom", price: 461, memberPrice: 415, sku: "SH-10189", tag: "New", ph: "", img: "assets/products/bt31.webp",
    imgs: ["assets/products/bt31.webp", "assets/products/bt31-2.webp", "assets/products/bt31-3.webp", "assets/products/bt31-4.webp", "assets/products/bt31-5.jpg", "assets/products/bt31-6.jpg"],
    sizes: [{ label: "Black", price: 461 }, { label: "Brushed Gold", price: 461 }],
    desc: "Stainless steel rods on a marble foot: the steel handles the damp, the marble handles the standing still. Black or brushed gold.",
    features: [
      "Premium stainless steel with a marble base",
      "Resists rust in a humid room",
      "Black or Brushed Gold",
      "Freestanding"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Stainless steel / metal", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry to prevent water spotting, which is the usual reason a finish looks tired. Avoid abrasive cleaners on brushed and coloured finishes." },

  { id: "bt32", name: "Beige Bathroom Set (5-Piece)", cat: "Bathroom", room: "Bathroom", price: 415, memberPrice: 374, sku: "SH-10190", tag: "New", ph: "", img: "assets/products/bt32.webp",
    imgs: ["assets/products/bt32.webp", "assets/products/bt32-2.webp", "assets/products/bt32-3.webp", "assets/products/bt32-4.webp", "assets/products/bt32-5.jpg", "assets/products/bt32-6.jpg"],
    sizes: [{ label: "Beige / 5pc Set", price: 415 }],
    desc: "Five pieces in a soft beige that works with timber vanities and warm tiles, where a stark white set would look cold.",
    features: [
      "Five-piece set",
      "Soft beige tone",
      "Suits timber and warm-toned bathrooms",
      "Coordinated across every piece"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Ceramic", "Options": "1" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads and scouring powders, which scratch the glaze and dull any metallic detail." },

  { id: "bt33", name: "Tree Branch Wall Hook (78cm)", cat: "Bathroom", room: "Bathroom", price: 574, memberPrice: 517, sku: "SH-10191", tag: "New", ph: "", img: "assets/products/bt33.jpg",
    imgs: ["assets/products/bt33.jpg", "assets/products/bt33-2.jpg", "assets/products/bt33-3.jpg", "assets/products/bt33-4.jpg", "assets/products/bt33-5.webp", "assets/products/bt33-6.webp"],
    sizes: [{ label: "Black + Gold / 78cm x 1.5cm", price: 574 }],
    desc: "A branching wall hook, 78cm long, that holds robes, towels and bags without looking like hardware. Black with gold.",
    features: [
      "78cm branching design",
      "Holds robes, towels and bags",
      "Black and gold finish",
      "A decorative piece as much as storage"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Stainless steel / metal", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry to prevent water spotting, which is the usual reason a finish looks tired. Avoid abrasive cleaners on brushed and coloured finishes." },

  { id: "bt34", optionLabel: "Colour", sizeImg: {"Silver":"assets/products/bt34.webp","Gold":"assets/products/bt34-2.jpg"}, name: "Dual-Rod Rotating Towel Rack", cat: "Bathroom", room: "Bathroom", price: 907, memberPrice: 816, sku: "SH-10192", tag: "New", ph: "", img: "assets/products/bt34.webp",
    imgs: ["assets/products/bt34.webp", "assets/products/bt34-2.jpg", "assets/products/bt34-3.webp", "assets/products/bt34-4.webp", "assets/products/bt34-5.jpg"],
    sizes: [{ label: "Silver", price: 907 }, { label: "Gold", price: 907 }],
    desc: "Two rods that rotate independently, so towels can be spread out to dry rather than bunched together. Silver or gold.",
    features: [
      "Two independently rotating rods",
      "Spreads towels so they dry properly",
      "Silver or Gold",
      "Freestanding frame"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Stainless steel / metal", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry to prevent water spotting, which is the usual reason a finish looks tired. Avoid abrasive cleaners on brushed and coloured finishes." },

  { id: "bt35", optionLabel: "Colour", sizeImg: {"Black":"assets/products/bt35-6.webp","Brushed Gold":"assets/products/bt35-5.webp","Brushed Silver":"assets/products/bt35-4.jpg"}, name: "Standing Stainless Steel Towel Rack", cat: "Bathroom", room: "Bathroom", price: 343, memberPrice: 309, sku: "SH-10193", tag: "New", ph: "", img: "assets/products/bt35.jpg",
    imgs: ["assets/products/bt35.jpg", "assets/products/bt35-2.jpg", "assets/products/bt35-3.jpg", "assets/products/bt35-4.jpg", "assets/products/bt35-5.webp", "assets/products/bt35-6.webp"],
    sizes: [{ label: "Black", price: 343 }, { label: "Brushed Gold", price: 343 }, { label: "Brushed Silver", price: 343 }],
    desc: "A simple standing rack in stainless steel, which is the material that survives a wet bathroom without rusting at the joints. Black, brushed gold or brushed silver.",
    features: [
      "High-quality stainless steel",
      "Resists rust and water spotting",
      "Black, Brushed Gold or Brushed Silver",
      "Clean, modern lines"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Stainless steel / metal", "Options": "3" },
    care: "Wipe with a soft, damp cloth and dry to prevent water spotting, which is the usual reason a finish looks tired. Avoid abrasive cleaners on brushed and coloured finishes." },

  { id: "bt36", optionLabel: "Colour", sizeImg: {"Black":"assets/products/bt36-3.webp","Gold":"assets/products/bt36-4.jpg"}, name: "Two-Bar Floor Towel Rack with Storage", cat: "Bathroom", room: "Bathroom", price: 1563, memberPrice: 1407, sku: "SH-10194", tag: "New", ph: "", img: "assets/products/bt36.webp",
    imgs: ["assets/products/bt36.webp", "assets/products/bt36-2.jpg", "assets/products/bt36-3.webp", "assets/products/bt36-4.jpg", "assets/products/bt36-5.webp", "assets/products/bt36-6.webp"],
    sizes: [{ label: "Black", price: 1563 }, { label: "Gold", price: 1563 }],
    desc: "Two sturdy bars for towels with storage built into the frame below, so the bathroom gains a shelf as well as a rail.",
    features: [
      "Two sturdy towel bars",
      "Built-in storage below",
      "Durable metal construction",
      "Black or Gold"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Stainless steel / metal", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry to prevent water spotting, which is the usual reason a finish looks tired. Avoid abrasive cleaners on brushed and coloured finishes." },

  { id: "bt37", name: "Marble-Base Vertical Towel Rack", cat: "Bathroom", room: "Bathroom", price: 1630, memberPrice: 1467, sku: "SH-10195", tag: "New", ph: "", img: "assets/products/bt37.webp",
    imgs: ["assets/products/bt37.webp", "assets/products/bt37-2.webp", "assets/products/bt37-3.webp", "assets/products/bt37-4.jpg", "assets/products/bt37-5.webp"],
    sizes: [{ label: "Black", price: 1630 }],
    desc: "A tall vertical rack on a marble base, which keeps the footprint small while holding full-size bath towels. Black.",
    features: [
      "Solid marble base",
      "Vertical design with a small footprint",
      "Holds full-size bath towels",
      "Movable, no fixing required"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Natural marble", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry straight away. Marble is porous, so keep it away from vinegar, citrus and bleach, which dull and etch the surface. Stand bottles on a tray rather than directly on the stone." },

  { id: "bt38", name: "Modern Bath Accessories Collection", cat: "Bathroom", room: "Bathroom", price: 119, memberPrice: 107, sku: "SH-10196", tag: "New", ph: "", img: "assets/products/bt38.jpg",
    imgs: ["assets/products/bt38.jpg", "assets/products/bt38-2.jpg", "assets/products/bt38-3.jpg", "assets/products/bt38-4.webp", "assets/products/bt38-5.webp", "assets/products/bt38-6.webp"],
    sizes: [{ label: "Soap dish", price: 119 }, { label: "Cotton Swab Box", price: 133 }, { label: "Soap Dispenser", price: 133 }, { label: "Tray", price: 222 }],
    desc: "Clean lines and a contemporary finish across a cotton swab box, dispenser, soap dish and tray. Unfussy pieces for a bathroom that doesn't want a theme.",
    features: [
      "Cotton swab box, dispenser, soap dish and tray",
      "Clean contemporary lines",
      "Pieces sold individually",
      "Easy to wipe down"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Resin / composite", "Options": "4" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive cleaners and harsh solvents, which can dull the finish." },

  { id: "bt39", name: "Matte Bathroom Accessories Set (5-Piece)", cat: "Bathroom", room: "Bathroom", price: 461, memberPrice: 415, sku: "SH-10197", tag: "New", ph: "", img: "assets/products/bt39.webp",
    imgs: ["assets/products/bt39.webp", "assets/products/bt39-2.jpg", "assets/products/bt39-3.jpg", "assets/products/bt39-4.jpg", "assets/products/bt39-5.jpg", "assets/products/bt39-6.webp"],
    sizes: [{ label: "Grey - 5 Pcs", price: 461 }, { label: "Sandstone- 5 Pcs", price: 461 }],
    desc: "A five-piece set in a soft matte finish, in grey or sandstone, that hides water spots far better than anything glossy.",
    features: [
      "Five-piece set",
      "Soft matte finish",
      "Grey or Sandstone",
      "Hides water marks better than gloss"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Resin / composite", "Options": "2" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive cleaners and harsh solvents, which can dull the finish." },

  { id: "bt40", name: "Veined Marble Bathroom Accessories", cat: "Bathroom", room: "Bathroom", price: 220, memberPrice: 198, sku: "SH-10198", tag: "New", ph: "", img: "assets/products/bt40.webp",
    imgs: ["assets/products/bt40.webp", "assets/products/bt40-2.jpg", "assets/products/bt40-3.webp", "assets/products/bt40-4.webp", "assets/products/bt40-5.webp", "assets/products/bt40-6.webp"],
    sizes: [{ label: "Soap dish", price: 220 }, { label: "Soap Dispenser", price: 274 }, { label: "Cup", price: 274 }, { label: "Cotton Swab Box", price: 328 }, { label: "Tray A", price: 472 }, { label: "Tray B", price: 506 }],
    desc: "Premium marble with pronounced veining, including two tray sizes for whatever bench space you have. Sold piece by piece.",
    features: [
      "Premium marble with pronounced veining",
      "Two tray sizes",
      "Dispenser, cotton swab box, cup and soap dish",
      "Each piece individually cut"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Natural marble", "Options": "6" },
    care: "Wipe with a soft, damp cloth and dry straight away. Marble is porous, so keep it away from vinegar, citrus and bleach, which dull and etch the surface. Stand bottles on a tray rather than directly on the stone." },

  { id: "bt41", name: "Faceted Ceramic Bathroom Set (5-Piece)", cat: "Bathroom", room: "Bathroom", price: 367, memberPrice: 330, sku: "SH-10199", tag: "New", ph: "", img: "assets/products/bt41.jpg",
    imgs: ["assets/products/bt41.jpg", "assets/products/bt41-2.jpg", "assets/products/bt41-3.jpg", "assets/products/bt41-4.jpg", "assets/products/bt41-5.jpg", "assets/products/bt41-6.webp"],
    sizes: [{ label: "5 Pcs White Set", price: 367 }, { label: "5 Pcs Black Set", price: 367 }],
    desc: "Five ceramic pieces with faceted, polygonal sides that give a plain white or black set some shape and shadow.",
    features: [
      "Faceted, polygonal shape",
      "Five-piece ceramic set",
      "White or Black",
      "Smooth, wipe-clean glaze"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Ceramic", "Options": "2" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads and scouring powders, which scratch the glaze and dull any metallic detail." },

  { id: "bt42", name: "Natural Marble Bathroom Accessories", cat: "Bathroom", room: "Bathroom", price: 248, memberPrice: 223, sku: "SH-10200", tag: "New", ph: "", img: "assets/products/bt42.jpg",
    imgs: ["assets/products/bt42.jpg", "assets/products/bt42-2.jpg", "assets/products/bt42-3.jpg", "assets/products/bt42-4.webp", "assets/products/bt42-5.webp", "assets/products/bt42-6.webp"],
    sizes: [{ label: "Toothbrush Cup", price: 248 }, { label: "Soap Dispenser A", price: 278 }, { label: "Soap Dispenser B", price: 278 }, { label: "Cotton Swab Box", price: 278 }, { label: "Diffuser", price: 304 }, { label: "Soap Dish", price: 407 }, { label: "Tray", price: 544 }],
    desc: "Genuine marble, including a diffuser and a generous tray alongside the usual pieces, so the whole vanity can be in one stone.",
    features: [
      "Genuine natural marble",
      "Includes diffuser and tray as well as the basics",
      "Two dispenser designs",
      "Veining unique to each piece"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Natural marble", "Options": "7" },
    care: "Wipe with a soft, damp cloth and dry straight away. Marble is porous, so keep it away from vinegar, citrus and bleach, which dull and etch the surface. Stand bottles on a tray rather than directly on the stone." },

  { id: "bt43", name: "Ceramic Bathroom Set (4-Piece)", cat: "Bathroom", room: "Bathroom", price: 433, memberPrice: 390, sku: "SH-10201", tag: "New", ph: "", img: "assets/products/bt43.webp",
    imgs: ["assets/products/bt43.webp", "assets/products/bt43-2.webp", "assets/products/bt43-3.webp", "assets/products/bt43-4.webp", "assets/products/bt43-5.webp", "assets/products/bt43-6.webp"],
    sizes: [{ label: "Green Set", price: 433 }, { label: "Coffee Set", price: 433 }],
    desc: "Four premium ceramic pieces in green or coffee, a quieter palette than the usual white and gold.",
    features: [
      "Four-piece premium ceramic set",
      "Green or Coffee colourway",
      "Minimalist shape",
      "Coordinated finish"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Ceramic", "Options": "2" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads and scouring powders, which scratch the glaze and dull any metallic detail." },

  { id: "bt44", name: "Crystal Glass Bathroom Set (4-Piece)", cat: "Bathroom", room: "Bathroom", price: 1344, memberPrice: 1210, sku: "SH-10202", tag: "New", ph: "", img: "assets/products/bt44.webp",
    imgs: ["assets/products/bt44.webp", "assets/products/bt44-2.jpg", "assets/products/bt44-3.webp", "assets/products/bt44-4.webp", "assets/products/bt44-5.webp"],
    sizes: [{ label: "4 Piece Set", price: 1344 }],
    desc: "Four pieces in crystal glass, bought together, for a vanity that catches the light every time someone walks past.",
    features: [
      "Four-piece crystal glass set",
      "Catches and throws light",
      "Substantial, weighty feel",
      "Timeless finish"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Glass", "Options": "1" },
    care: "Wipe with a soft, damp cloth and buff dry to keep the clarity. Avoid abrasive cleaners, and lift rather than slide the pieces across stone benchtops." },

  { id: "bt45", name: "Corner Towel Rack (40 × 50cm)", cat: "Bathroom", room: "Bathroom", price: 593, memberPrice: 534, sku: "SH-10203", tag: "New", ph: "", img: "assets/products/bt45.webp",
    imgs: ["assets/products/bt45.webp", "assets/products/bt45-2.webp", "assets/products/bt45-3.webp", "assets/products/bt45-4.webp", "assets/products/bt45-5.webp"],
    sizes: [{ label: "Black / 40cm x 50cm", price: 593 }, { label: "Gold / 40cm x 50cm", price: 593 }],
    desc: "Built for the corner that nothing else fits, 40 by 50cm, keeping towels off the floor and out of the way. Black or gold.",
    features: [
      "Fits an unused corner",
      "40 × 50cm",
      "Black or Gold",
      "Keeps towels tidy and off the floor"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Stainless steel / metal", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry to prevent water spotting, which is the usual reason a finish looks tired. Avoid abrasive cleaners on brushed and coloured finishes." },

  { id: "bt46", name: "Granite-Look Bathroom Set (4-Piece)", cat: "Bathroom", room: "Bathroom", price: 537, memberPrice: 483, sku: "SH-10204", tag: "New", ph: "", img: "assets/products/bt46.jpg",
    imgs: ["assets/products/bt46.jpg", "assets/products/bt46-2.jpg", "assets/products/bt46-3.jpg", "assets/products/bt46-4.jpg", "assets/products/bt46-5.jpg", "assets/products/bt46-6.jpg"],
    sizes: [{ label: "4 x Piece Set", price: 537 }],
    desc: "Four pieces in a granite-look finish, including a toilet brush, which most sets quietly leave out.",
    features: [
      "Four-piece set",
      "Granite-look finish",
      "Includes soap dish, dispenser, cup and toilet brush",
      "Hard-wearing and easy to clean"
    ],
    specs: { "Type": "Bathroom accessory", "Material": "Ceramic", "Options": "1" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads and scouring powders, which scratch the glaze and dull any metallic detail." },

  // ── Living Room ──




























































































































































































































































  // ── Living Room, Office & lighting (final batch) ──
  { id: "lr001q", optionLabel: "Colour", sizeImg: {"Black":"assets/products/lr001q-3.webp"}, name: "Timber Wall Light", cat: "Home Décor", room: "Home Décor", price: 350, memberPrice: 315, sku: "SH-10783", tag: "New", ph: "", img: "assets/products/lr001q.webp",
    imgs: ["assets/products/lr001q.webp", "assets/products/lr001q-2.webp", "assets/products/lr001q-3.webp", "assets/products/lr001q-4.webp"],
    sizes: [{ label: "Black", price: 350 }, { label: "White", price: 350 }],
    desc: "Timber wall light. In Black or White.",
    features: [
      "Timber construction",
      "Black, White colourways",
      "2 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Wall Light", "Material": "Timber", "Options": "2", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr002q", name: "Table Lamp", cat: "Home Décor", room: "Home Décor", price: 535, memberPrice: 482, sku: "SH-10784", tag: "New", ph: "", img: "assets/products/lr002q.webp",
    imgs: ["assets/products/lr002q.webp", "assets/products/lr002q-2.webp", "assets/products/lr002q-3.webp", "assets/products/lr002q-4.webp"],
    sizes: [{ label: "Black", price: 535 }],
    desc: "A table lamp, for a console, a sideboard or a bedside. In Black.",
    features: [
      "Black colourway",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Table Lamp", "Material": "Mixed", "Options": "1", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr003q", name: "Travertine Pendant, Round or Rectangle", cat: "Home Décor", room: "Home Décor", price: 537, memberPrice: 483, sku: "SH-10785", tag: "New", ph: "", img: "assets/products/lr003q.webp",
    imgs: ["assets/products/lr003q.webp", "assets/products/lr003q-2.webp", "assets/products/lr003q-3.webp", "assets/products/lr003q-4.webp"],
    sizes: [{ label: "Rectangle", price: 537 }, { label: "Round", price: 537 }],
    desc: "Travertine pendant, sized to hang over a table or a kitchen bench. Stone and glass diffuse the light softly rather than throwing a hard beam.",
    features: [
      "Travertine construction",
      "2 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Pendant Light", "Material": "Travertine", "Options": "2", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr004q", name: "Square Travertine Wall Light", cat: "Home Décor", room: "Home Décor", price: 554, memberPrice: 499, sku: "SH-10786", tag: "New", ph: "", img: "assets/products/lr004q.webp",
    imgs: ["assets/products/lr004q.webp", "assets/products/lr004q-2.webp", "assets/products/lr004q-3.webp", "assets/products/lr004q-4.webp"],
    sizes: [{ label: "Square / Warm White", price: 554 }, { label: "Square / Neutral", price: 554 }, { label: "Square / Cool White", price: 554 }, { label: "Rectangle / Cool White", price: 643 }, { label: "Rectangle / Warm White", price: 643 }, { label: "Rectangle / Neutral", price: 643 }],
    desc: "Travertine wall light. In White. Stone and glass diffuse the light softly rather than throwing a hard beam.",
    features: [
      "Travertine construction",
      "White colourway",
      "6 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Wall Light", "Material": "Travertine", "Options": "6", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr005q", name: "Wall Light", cat: "Home Décor", room: "Home Décor", price: 617, memberPrice: 555, sku: "SH-10787", tag: "New", ph: "", img: "assets/products/lr005q.webp",
    imgs: ["assets/products/lr005q.webp", "assets/products/lr005q-2.webp", "assets/products/lr005q-3.webp", "assets/products/lr005q-4.webp"],
    sizes: [{ label: "Gold / 40cm / Warm White", price: 617 }, { label: "Gold / 40cm / Cool White", price: 617 }, { label: "Black / 40cm / Warm White", price: 617 }, { label: "Black / 40cm / Cool White", price: 617 }, { label: "Gold / 60cm / Warm White", price: 878 }, { label: "Gold / 60cm / Cool White", price: 878 }, { label: "Black / 60cm / Warm White", price: 878 }, { label: "Black / 60cm / Cool White", price: 878 }, { label: "Gold / 80cm / Warm White", price: 989 }, { label: "Gold / 80cm / Cool White", price: 989 }, { label: "Black / 80cm / Warm White", price: 989 }, { label: "Black / 80cm / Cool White", price: 989 }, { label: "Gold / 100cm / Warm White", price: 1106 }, { label: "Gold / 100cm / Cool White", price: 1106 }, { label: "Black / 100cm / Warm White", price: 1106 }, { label: "Black / 100cm / Cool White", price: 1106 }],
    desc: "A wall light from 40cm to 100cm. In Black, White or Gold.",
    features: [
      "Sizes from 40cm to 100cm",
      "Black, White, Gold colourways",
      "16 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Wall Light", "Material": "Mixed", "Options": "16", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr006q", name: "Wall Light (Black / White)", cat: "Home Décor", room: "Home Décor", price: 643, memberPrice: 579, sku: "SH-10788", tag: "New", ph: "", img: "assets/products/lr006q.webp",
    imgs: ["assets/products/lr006q.webp", "assets/products/lr006q-2.webp", "assets/products/lr006q-3.webp", "assets/products/lr006q-4.webp"],
    sizes: [{ label: "Gold / Left / Warm White", price: 643 }, { label: "Gold / Left / Cool White", price: 643 }, { label: "Gold / Right / Warm White", price: 643 }, { label: "Gold / Right / Cool White", price: 643 }, { label: "Black / Left / Warm White", price: 643 }, { label: "Black / Left / Cool White", price: 643 }, { label: "Black / Right / Warm White", price: 643 }, { label: "Black / Right / Cool White", price: 643 }],
    desc: "A wall light. In Black, White or Gold.",
    features: [
      "Black, White, Gold colourways",
      "8 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Wall Light", "Material": "Mixed", "Options": "8", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr007q", name: "Pendant Light", cat: "Home Décor", room: "Home Décor", price: 680, memberPrice: 612, sku: "SH-10789", tag: "New", ph: "", img: "assets/products/lr007q.webp",
    imgs: ["assets/products/lr007q.webp", "assets/products/lr007q-2.webp", "assets/products/lr007q-3.webp", "assets/products/lr007q-4.webp"],
    sizes: [{ label: "30cm", price: 680 }, { label: "40cm", price: 850 }, { label: "50cm", price: 989 }, { label: "60cm", price: 1163 }],
    desc: "A pendant from 30cm to 60cm, sized to hang over a table or a kitchen bench.",
    features: [
      "Sizes from 30cm to 60cm",
      "4 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Pendant Light", "Material": "Mixed", "Options": "4", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr008q", name: "Travertine Pendant Light (White)", cat: "Home Décor", room: "Home Décor", price: 722, memberPrice: 650, sku: "SH-10790", tag: "New", ph: "", img: "assets/products/lr008q.webp",
    imgs: ["assets/products/lr008q.webp", "assets/products/lr008q-2.webp", "assets/products/lr008q-3.webp", "assets/products/lr008q-4.webp"],
    sizes: [{ label: "Travertine / 3000K - Warm White", price: 722 }],
    desc: "Travertine pendant, sized to hang over a table or a kitchen bench. In White. Stone and glass diffuse the light softly rather than throwing a hard beam.",
    features: [
      "Travertine construction",
      "White colourway",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Pendant Light", "Material": "Travertine", "Options": "1", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr009q", name: "Pendant Light (40cm to 80cm)", cat: "Home Décor", room: "Home Décor", price: 735, memberPrice: 662, sku: "SH-10791", tag: "New", ph: "", img: "assets/products/lr009q.webp",
    imgs: ["assets/products/lr009q.webp", "assets/products/lr009q-2.webp", "assets/products/lr009q-3.webp", "assets/products/lr009q-4.webp"],
    sizes: [{ label: "40cm / Neutral White", price: 735 }, { label: "40cm / Warm White", price: 735 }, { label: "40cm / Cool White", price: 735 }, { label: "50cm / Neutral White", price: 861 }, { label: "50cm / Warm White", price: 861 }, { label: "50cm / Cool White", price: 861 }, { label: "60cm / Neutral White", price: 1146 }, { label: "60cm / Warm White", price: 1146 }, { label: "60cm / Cool White", price: 1146 }, { label: "80cm / Neutral White", price: 1661 }, { label: "80cm / Warm White", price: 1661 }, { label: "80cm / Cool White", price: 1661 }],
    desc: "A pendant from 40cm to 80cm, sized to hang over a table or a kitchen bench. In White.",
    features: [
      "Sizes from 40cm to 80cm",
      "White colourway",
      "12 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Pendant Light", "Material": "Mixed", "Options": "12", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr010q", name: "Rattan Pendant Light", cat: "Home Décor", room: "Home Décor", price: 735, memberPrice: 662, sku: "SH-10792", tag: "New", ph: "", img: "assets/products/lr010q.webp",
    imgs: ["assets/products/lr010q.webp", "assets/products/lr010q-2.webp", "assets/products/lr010q-3.webp", "assets/products/lr010q-4.webp"],
    sizes: [{ label: "Tan / S / Neutral White", price: 735 }, { label: "Tan / S / Warm White", price: 735 }, { label: "Tan / S / Cool White", price: 735 }, { label: "Black / S / Neutral White", price: 735 }, { label: "Black / S / Warm White", price: 735 }, { label: "Black / S / Cool White", price: 735 }, { label: "Tan / M / Neutral White", price: 917 }, { label: "Tan / M / Warm White", price: 917 }, { label: "Tan / M / Cool White", price: 917 }, { label: "Black / M / Neutral White", price: 917 }, { label: "Black / M / Warm White", price: 917 }, { label: "Black / M / Cool White", price: 917 }, { label: "Tan / L / Neutral White", price: 1198 }, { label: "Tan / L / Warm White", price: 1198 }, { label: "Tan / L / Cool White", price: 1198 }, { label: "Black / L / Neutral White", price: 1198 }, { label: "Black / L / Warm White", price: 1198 }, { label: "Black / L / Cool White", price: 1198 }],
    desc: "Rattan pendant, sized to hang over a table or a kitchen bench. In Black, White or Tan.",
    features: [
      "Rattan construction",
      "Black, White, Tan colourways",
      "18 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Pendant Light", "Material": "Rattan", "Options": "18", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr011q", name: "Travertine Table Lamp", cat: "Home Décor", room: "Home Décor", price: 739, memberPrice: 665, sku: "SH-10793", tag: "New", ph: "", img: "assets/products/lr011q.webp",
    imgs: ["assets/products/lr011q.webp", "assets/products/lr011q-2.webp", "assets/products/lr011q-3.webp", "assets/products/lr011q-4.webp"],
    desc: "Travertine table lamp, for a console, a sideboard or a bedside. Stone and glass diffuse the light softly rather than throwing a hard beam.",
    features: [
      "Travertine construction",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Table Lamp", "Material": "Travertine", "Options": "1", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr012q", name: "Chandelier", cat: "Home Décor", room: "Home Décor", price: 898, memberPrice: 808, sku: "SH-10794", tag: "New", ph: "", img: "assets/products/lr012q.webp",
    imgs: ["assets/products/lr012q.webp", "assets/products/lr012q-2.webp", "assets/products/lr012q-3.webp", "assets/products/lr012q-4.webp"],
    sizes: [{ label: "Black / 60cm ø / Warm White", price: 898 }, { label: "Khaki / 60cm ø / Warm White", price: 898 }, { label: "White / 60cm ø / Warm White", price: 898 }, { label: "Black / 80cm ø / Warm White", price: 1787 }, { label: "Khaki / 80cm ø / Warm White", price: 1787 }, { label: "White / 80cm ø / Warm White", price: 1787 }, { label: "Black / 100cm ø / Warm White", price: 2926 }, { label: "Khaki / 100cm ø / Warm White", price: 2926 }, { label: "White / 100cm ø / Warm White", price: 2926 }, { label: "Black / 120cm ø / Warm White", price: 4978 }, { label: "Khaki / 120cm ø / Warm White", price: 4978 }, { label: "White / 120cm ø / Warm White", price: 4978 }],
    desc: "A chandelier from 60cm to 120cm, for a dining table, an entry or a stairwell. In Black, White or Khaki. The shade is made of feathers, which is as soft-edged as a light fitting gets.",
    features: [
      "Sizes from 60cm to 120cm",
      "Black, White, Khaki colourways",
      "12 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Chandelier", "Material": "Mixed", "Options": "12", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr013q", name: "Rattan Pendant Light (40cm to 100cm)", cat: "Home Décor", room: "Home Décor", price: 917, memberPrice: 825, sku: "SH-10795", tag: "New", ph: "", img: "assets/products/lr013q.webp",
    imgs: ["assets/products/lr013q.webp", "assets/products/lr013q-2.webp", "assets/products/lr013q-3.webp", "assets/products/lr013q-4.webp"],
    sizes: [{ label: "Single / 40cm / Warm White", price: 917 }, { label: "Single / 40cm / Cool White", price: 917 }, { label: "Single / 50cm / Warm White", price: 1056 }, { label: "Single / 50cm / Cool White", price: 1056 }, { label: "Single / 60cm / Warm White", price: 1198 }, { label: "Single / 60cm / Cool White", price: 1198 }, { label: "Double / 40cm / Warm White", price: 1204 }, { label: "Double / 40cm / Cool White", price: 1204 }, { label: "Double / 50cm / Warm White", price: 1287 }, { label: "Double / 50cm / Cool White", price: 1287 }, { label: "Single / 80cm / Warm White", price: 1383 }, { label: "Single / 80cm / Cool White", price: 1383 }, { label: "Double / 60cm / Warm White", price: 1481 }, { label: "Double / 60cm / Cool White", price: 1481 }, { label: "Single / 100cm / Warm White", price: 1528 }, { label: "Single / 100cm / Cool White", price: 1528 }, { label: "Double / 80cm / Warm White", price: 1846 }, { label: "Double / 80cm / Cool White", price: 1846 }, { label: "Double / 100cm / Warm White", price: 2219 }, { label: "Double / 100cm / Cool White", price: 2219 }],
    desc: "Rattan pendant from 40cm to 100cm, sized to hang over a table or a kitchen bench. In White.",
    features: [
      "Rattan construction",
      "Sizes from 40cm to 100cm",
      "White colourway",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Pendant Light", "Material": "Rattan", "Options": "20", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr014q", name: "Crystal Chandelier", cat: "Home Décor", room: "Home Décor", price: 944, memberPrice: 850, sku: "SH-10796", tag: "New", ph: "", img: "assets/products/lr014q.webp",
    imgs: ["assets/products/lr014q.webp", "assets/products/lr014q-2.webp", "assets/products/lr014q-3.webp", "assets/products/lr014q-4.webp"],
    sizes: [{ label: "Single Ring: 60cm / Gold / Neutral Light", price: 944 }, { label: "Single Ring: 60cm / Gold / Warm White", price: 944 }, { label: "Single Ring: 60cm / Gold / Cold White", price: 944 }, { label: "Single Ring: 80cm / Gold / Neutral Light", price: 1398 }, { label: "Single Ring: 80cm / Gold / Warm White", price: 1398 }, { label: "Single Ring: 80cm / Gold / Cold White", price: 1398 }, { label: "Double Ring: 60cm / Gold / Neutral Light", price: 1519 }, { label: "Double Ring: 60cm / Gold / Warm White", price: 1519 }, { label: "Double Ring: 60cm / Gold / Cold White", price: 1519 }, { label: "Single Ring: 100cm / Gold / Neutral Light", price: 2085 }, { label: "Single Ring: 100cm / Gold / Warm White", price: 2085 }, { label: "Single Ring: 100cm / Gold / Cold White", price: 2085 }, { label: "Double Ring: 80cm / Gold / Neutral Light", price: 2407 }, { label: "Double Ring: 80cm / Gold / Warm White", price: 2407 }, { label: "Double Ring: 80cm / Gold / Cold White", price: 2407 }, { label: "Tripple Ring: 80cm / Gold / Neutral Light", price: 2937 }, { label: "Tripple Ring: 80cm / Gold / Warm White", price: 2937 }, { label: "Tripple Ring: 80cm / Gold / Cold White", price: 2937 }, { label: "Double Ring: 100cm / Gold / Neutral Light", price: 3219 }, { label: "Double Ring: 100cm / Gold / Warm White", price: 3219 }, { label: "Double Ring: 100cm / Gold / Cold White", price: 3219 }, { label: "Tripple Ring: 100cm / Gold / Neutral Light", price: 5237 }, { label: "Tripple Ring: 100cm / Gold / Warm White", price: 5237 }, { label: "Tripple Ring: 100cm / Gold / Cold White", price: 5237 }],
    desc: "Crystal chandelier from 60cm to 100cm, for a dining table, an entry or a stairwell. In White or Gold. Glass spreads the light rather than concentrating it.",
    features: [
      "Crystal construction",
      "Sizes from 60cm to 100cm",
      "White, Gold colourways",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Chandelier", "Material": "Crystal", "Options": "24", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },


  { id: "lr016q", name: "Wall Light (8 options)", cat: "Home Décor", room: "Home Décor", price: 978, memberPrice: 880, sku: "SH-10798", tag: "New", ph: "", img: "assets/products/lr016q.webp",
    imgs: ["assets/products/lr016q.webp", "assets/products/lr016q-2.webp", "assets/products/lr016q-3.webp", "assets/products/lr016q-4.webp"],
    sizes: [{ label: "Gold / S / Warm White", price: 978 }, { label: "Gold / S / Cool White", price: 978 }, { label: "Black / S / Warm White", price: 978 }, { label: "Black / S / Cool White", price: 978 }, { label: "Gold / L / Warm White", price: 1370 }, { label: "Gold / L / Cool White", price: 1370 }, { label: "Black / L / Warm White", price: 1370 }, { label: "Black / L / Cool White", price: 1370 }],
    desc: "A wall light. In Black, White or Gold.",
    features: [
      "Black, White, Gold colourways",
      "8 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Wall Light", "Material": "Mixed", "Options": "8", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr017q", name: "Marble Table Lamp", cat: "Home Décor", room: "Home Décor", price: 994, memberPrice: 895, sku: "SH-10799", tag: "New", ph: "", img: "assets/products/lr017q.webp",
    imgs: ["assets/products/lr017q.webp", "assets/products/lr017q-2.webp", "assets/products/lr017q-3.webp", "assets/products/lr017q-4.webp"],
    optionLabel: "Colour",
    sizes: [{ label: "Amber", price: 994 }, { label: "Smokey Grey", price: 994 }],
    sizeImg: { "Amber": "assets/products/lr017q.webp", "Smokey Grey": "assets/products/lr017q-grey.webp" },
    desc: "A modern contemporary table lamp crafted from genuine marble, with a glass shade in smokey grey or amber. Sturdy construction and a modern design with classic allure make it a striking focal point in any room.",
    features: [
      "Crafted from genuine marble",
      "Modern design with classic allure",
      "Sturdy construction ensures durability and longevity",
      "Creates a striking focal point in any room",
      "Adds opulence to your home decor",
      "Illuminate your space with exquisite luxury"
    ],
    specs: { "Type": "Table Lamp", "Style": "Modern Contemporary", "Colour": "Smokey Grey, Amber", "Material": "Glass, marble lamp body", "Size (AU)": "24cm L x 23cm W", "Size (US)": "9.4\" L x 9.1\" W", "Light source": "LED bulbs", "Wattage": "31-40W", "Voltage": "90-260V", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr018q", name: "Marble Wall Light", cat: "Home Décor", room: "Home Décor", price: 1000, memberPrice: 900, sku: "SH-10800", tag: "New", ph: "", img: "assets/products/lr018q.webp",
    imgs: ["assets/products/lr018q.webp", "assets/products/lr018q-2.webp", "assets/products/lr018q-3.webp", "assets/products/lr018q-4.webp"],
    sizes: [{ label: "40cm / Cool White", price: 1000 }, { label: "40cm / Warm White", price: 1000 }, { label: "50cm / Cool White", price: 1148 }, { label: "50cm / Warm White", price: 1148 }, { label: "60cm / Cool White", price: 1291 }, { label: "60cm / Warm White", price: 1291 }],
    desc: "Marble wall light from 40cm to 60cm. In White. Stone and glass diffuse the light softly rather than throwing a hard beam.",
    features: [
      "Marble construction",
      "Sizes from 40cm to 60cm",
      "White colourway",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Wall Light", "Material": "Marble", "Options": "6", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr019q", name: "Wall Light 2", cat: "Home Décor", room: "Home Décor", price: 1017, memberPrice: 915, sku: "SH-10801", tag: "New", ph: "", img: "assets/products/lr019q.webp",
    imgs: ["assets/products/lr019q.webp", "assets/products/lr019q-2.webp", "assets/products/lr019q-3.webp", "assets/products/lr019q-4.webp"],
    sizes: [{ label: "Gold / Warm White", price: 1017 }, { label: "Gold / Natural White", price: 1017 }, { label: "Gold / Cool White", price: 1017 }, { label: "Gold / Tri-Color", price: 1017 }, { label: "Black / Warm White", price: 1017 }, { label: "Black / Natural White", price: 1017 }, { label: "Black / Cool White", price: 1017 }, { label: "Black / Tri-Color", price: 1017 }],
    desc: "A wall light. In Black, White, Gold or Natural.",
    features: [
      "Black, White, Gold, Natural colourways",
      "8 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Wall Light", "Material": "Mixed", "Options": "8", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr020q", name: "Marble Wall Light (50cm to 60cm)", cat: "Home Décor", room: "Home Décor", price: 1072, memberPrice: 965, sku: "SH-10802", tag: "New", ph: "", img: "assets/products/lr020q.webp",
    imgs: ["assets/products/lr020q.webp", "assets/products/lr020q-2.webp", "assets/products/lr020q-3.webp", "assets/products/lr020q-4.webp"],
    sizes: [{ label: "50cm / 3 Colors / Oval", price: 1072 }, { label: "50cm / 3 Colors / Rectangle", price: 1072 }, { label: "60cm / 3 Colors / Oval", price: 1356 }, { label: "60cm / 3 Colors / Rectangle", price: 1356 }],
    desc: "Marble wall light from 50cm to 60cm. Stone and glass diffuse the light softly rather than throwing a hard beam.",
    features: [
      "Marble construction",
      "Sizes from 50cm to 60cm",
      "4 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Wall Light", "Material": "Marble", "Options": "4", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr021q", name: "Chandelier (40cm to 100cm)", cat: "Home Décor", room: "Home Décor", price: 1091, memberPrice: 982, sku: "SH-10803", tag: "New", ph: "", img: "assets/products/lr021q.webp",
    imgs: ["assets/products/lr021q.webp", "assets/products/lr021q-2.webp", "assets/products/lr021q-3.webp", "assets/products/lr021q-4.webp"],
    sizes: [{ label: "40cm / Warm White", price: 1091 }, { label: "40cm / Neutral White", price: 1091 }, { label: "40cm / White", price: 1091 }, { label: "50cm / Warm White", price: 1452 }, { label: "50cm / Neutral White", price: 1452 }, { label: "50cm / White", price: 1452 }, { label: "60cm / Warm White", price: 2222 }, { label: "60cm / Neutral White", price: 2222 }, { label: "60cm / White", price: 2222 }, { label: "80cm / Warm White", price: 2902 }, { label: "80cm / Neutral White", price: 2902 }, { label: "80cm / White", price: 2902 }, { label: "100cm / Warm White", price: 3211 }, { label: "100cm / Neutral White", price: 3211 }, { label: "100cm / White", price: 3211 }],
    desc: "A chandelier from 40cm to 100cm, for a dining table, an entry or a stairwell. In White.",
    features: [
      "Sizes from 40cm to 100cm",
      "White colourway",
      "15 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Chandelier", "Material": "Mixed", "Options": "15", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr022q", name: "Marble Pendant Light", cat: "Home Décor", room: "Home Décor", price: 1102, memberPrice: 992, sku: "SH-10804", tag: "New", ph: "", img: "assets/products/lr022q.webp",
    imgs: ["assets/products/lr022q.webp", "assets/products/lr022q-2.webp", "assets/products/lr022q-3.webp", "assets/products/lr022q-4.webp"],
    sizes: [{ label: "S / Warm White", price: 1102 }, { label: "S / Natural White", price: 1102 }, { label: "S / Cool White", price: 1102 }, { label: "L / Warm White", price: 1383 }, { label: "L / Natural White", price: 1383 }, { label: "L / Cool White", price: 1383 }],
    desc: "Marble pendant, sized to hang over a table or a kitchen bench. In White or Natural. Stone and glass diffuse the light softly rather than throwing a hard beam.",
    features: [
      "Marble construction",
      "White, Natural colourways",
      "6 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Pendant Light", "Material": "Marble", "Options": "6", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr023q", name: "Marble Pendant Light (41cm to 71cm)", cat: "Home Décor", room: "Home Décor", price: 1256, memberPrice: 1130, sku: "SH-10805", tag: "New", ph: "", img: "assets/products/lr023q.webp",
    imgs: ["assets/products/lr023q.webp", "assets/products/lr023q-2.webp", "assets/products/lr023q-3.webp", "assets/products/lr023q-4.webp"],
    sizes: [{ label: "41cm / Neutral White", price: 1256 }, { label: "41cm / Cool White", price: 1256 }, { label: "41cm / Warm White", price: 1256 }, { label: "51cm / Neutral White", price: 1296 }, { label: "51cm / Cool White", price: 1296 }, { label: "51cm / Warm White", price: 1296 }, { label: "61cm / Neutral White", price: 1700 }, { label: "61cm / Cool White", price: 1700 }, { label: "61cm / Warm White", price: 1700 }, { label: "71cm / Neutral White", price: 2107 }, { label: "71cm / Cool White", price: 2107 }, { label: "71cm / Warm White", price: 2107 }],
    desc: "Marble pendant from 41cm to 71cm, sized to hang over a table or a kitchen bench. In White. Stone and glass diffuse the light softly rather than throwing a hard beam.",
    features: [
      "Marble construction",
      "Sizes from 41cm to 71cm",
      "White colourway",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Pendant Light", "Material": "Marble", "Options": "12", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },


  { id: "lr025q", name: "Glass Chandelier", cat: "Home Décor", room: "Home Décor", price: 1346, memberPrice: 1211, sku: "SH-10807", tag: "New", ph: "", img: "assets/products/lr025q.webp",
    imgs: ["assets/products/lr025q.webp", "assets/products/lr025q-2.webp", "assets/products/lr025q-3.webp", "assets/products/lr025q-4.webp"],
    sizes: [{ label: "3 Light", price: 1346 }, { label: "6 Light", price: 2056 }, { label: "8 Light", price: 2535 }, { label: "10 Light", price: 3056 }, { label: "12 Light", price: 3313 }, { label: "15 Light", price: 4537 }, { label: "18 Light", price: 5126 }, { label: "20 Light", price: 5552 }, { label: "25 Light", price: 6754 }, { label: "30 Light", price: 8954 }],
    desc: "Glass chandelier, for a dining table, an entry or a stairwell. Glass spreads the light rather than concentrating it.",
    features: [
      "Glass construction",
      "10 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Chandelier", "Material": "Glass", "Options": "10", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr026q", name: "Marble Wall Light (60cm to 80cm)", cat: "Home Décor", room: "Home Décor", price: 1406, memberPrice: 1265, sku: "SH-10808", tag: "New", ph: "", img: "assets/products/lr026q.webp",
    imgs: ["assets/products/lr026q.webp", "assets/products/lr026q-2.webp", "assets/products/lr026q-3.webp", "assets/products/lr026q-4.webp"],
    sizes: [{ label: "60cm / Warm White", price: 1406 }, { label: "80cm / Warm White", price: 2372 }],
    desc: "Marble wall light from 60cm to 80cm. In White. Stone and glass diffuse the light softly rather than throwing a hard beam.",
    features: [
      "Marble construction",
      "Sizes from 60cm to 80cm",
      "White colourway",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Wall Light", "Material": "Marble", "Options": "2", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr027q", name: "Chandelier (50cm to 80cm)", cat: "Home Décor", room: "Home Décor", price: 1415, memberPrice: 1274, sku: "SH-10809", tag: "New", ph: "", img: "assets/products/lr027q.webp",
    imgs: ["assets/products/lr027q.webp", "assets/products/lr027q-2.webp", "assets/products/lr027q-3.webp", "assets/products/lr027q-4.webp"],
    sizes: [{ label: "50cm ø / Warm White", price: 1415 }, { label: "60cm ø / Warm White", price: 1661 }, { label: "70cm ø / Warm White", price: 2311 }, { label: "80cm ø / Warm White", price: 2776 }],
    desc: "A chandelier from 50cm to 80cm, for a dining table, an entry or a stairwell. In White.",
    features: [
      "Sizes from 50cm to 80cm",
      "White colourway",
      "4 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Chandelier", "Material": "Mixed", "Options": "4", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr028q", name: "Steel Chandelier", cat: "Home Décor", room: "Home Décor", price: 1426, memberPrice: 1283, sku: "SH-10810", tag: "New", ph: "", img: "assets/products/lr028q.webp",
    imgs: ["assets/products/lr028q.webp", "assets/products/lr028q-2.webp", "assets/products/lr028q-3.webp", "assets/products/lr028q-4.webp"],
    sizes: [{ label: "40cm / Warm White / Silver", price: 1426 }, { label: "40cm / Natural Light / Silver", price: 1426 }, { label: "40cm / White Light / Silver", price: 1426 }, { label: "40cm / Warm White / Gold", price: 1426 }, { label: "40cm / Natural Light / Gold", price: 1426 }, { label: "40cm / White Light / Gold", price: 1426 }, { label: "60cm / Warm White / Silver", price: 2333 }, { label: "60cm / Natural Light / Silver", price: 2333 }, { label: "60cm / White Light / Silver", price: 2333 }, { label: "60cm / Warm White / Gold", price: 2333 }, { label: "60cm / Natural Light / Gold", price: 2333 }, { label: "60cm / White Light / Gold", price: 2333 }, { label: "80cm / Warm White / Silver", price: 4583 }, { label: "80cm / Natural Light / Silver", price: 4583 }, { label: "80cm / White Light / Silver", price: 4583 }, { label: "80cm / Warm White / Gold", price: 4583 }, { label: "80cm / Natural Light / Gold", price: 4583 }, { label: "80cm / White Light / Gold", price: 4583 }, { label: "100cm / Warm White / Silver", price: 5926 }, { label: "100cm / Natural Light / Silver", price: 5926 }, { label: "100cm / Warm White / Gold", price: 5926 }, { label: "100cm / White Light / Silver", price: 5926 }, { label: "100cm / Natural Light / Gold", price: 5926 }, { label: "100cm / White Light / Gold", price: 5926 }],
    desc: "Steel chandelier from 40cm to 100cm, for a dining table, an entry or a stairwell. In White, Gold, Silver or Natural.",
    features: [
      "Steel construction",
      "Sizes from 40cm to 100cm",
      "White, Gold, Silver, Natural colourways",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Chandelier", "Material": "Steel", "Options": "24", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr029q", name: "Pendant Light (White)", cat: "Home Décor", room: "Home Décor", price: 1463, memberPrice: 1317, sku: "SH-10811", tag: "New", ph: "", img: "assets/products/lr029q.webp",
    imgs: ["assets/products/lr029q.webp", "assets/products/lr029q-2.webp", "assets/products/lr029q-3.webp", "assets/products/lr029q-4.webp"],
    sizes: [{ label: "Cool White", price: 1463 }, { label: "Warm White", price: 1463 }, { label: "Neutral White", price: 1463 }],
    desc: "A pendant, sized to hang over a table or a kitchen bench. In White.",
    features: [
      "White colourway",
      "3 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Pendant Light", "Material": "Mixed", "Options": "3", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr030q", name: "Timber Pendant Light", cat: "Home Décor", room: "Home Décor", price: 1500, memberPrice: 1350, sku: "SH-10812", tag: "New", ph: "", img: "assets/products/lr030q.webp",
    imgs: ["assets/products/lr030q.webp", "assets/products/lr030q-2.webp", "assets/products/lr030q-3.webp", "assets/products/lr030q-4.webp"],
    sizes: [{ label: "Natural / Single Head", price: 1500 }, { label: "Walnut / Single Head", price: 1500 }],
    desc: "Timber pendant, sized to hang over a table or a kitchen bench. In Walnut or Natural.",
    features: [
      "Timber construction",
      "Walnut, Natural colourways",
      "2 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Pendant Light", "Material": "Timber", "Options": "2", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },



  { id: "lr033q", name: "Timber Pendant Light (80cm to 150cm)", cat: "Home Décor", room: "Home Décor", price: 1600, memberPrice: 1440, sku: "SH-10815", tag: "New", ph: "", img: "assets/products/lr033q.webp",
    imgs: ["assets/products/lr033q.webp", "assets/products/lr033q-2.webp", "assets/products/lr033q-3.webp", "assets/products/lr033q-4.webp"],
    sizes: [{ label: "80cm / Warm White", price: 1600 }, { label: "80cm / Cool White", price: 1600 }, { label: "100cm / Warm White", price: 1848 }, { label: "100cm / Cool White", price: 1848 }, { label: "120cm / Warm White", price: 2017 }, { label: "120cm / Cool White", price: 2017 }, { label: "150cm / Warm White", price: 2550 }, { label: "150cm / Cool White", price: 2550 }],
    desc: "Timber pendant from 80cm to 150cm, sized to hang over a table or a kitchen bench. In White.",
    features: [
      "Timber construction",
      "Sizes from 80cm to 150cm",
      "White colourway",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Pendant Light", "Material": "Timber", "Options": "8", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr034q", name: "Steel Chandelier (White)", cat: "Home Décor", room: "Home Décor", price: 1633, memberPrice: 1470, sku: "SH-10816", tag: "New", ph: "", img: "assets/products/lr034q.webp",
    imgs: ["assets/products/lr034q.webp", "assets/products/lr034q-2.webp", "assets/products/lr034q-3.webp", "assets/products/lr034q-4.webp"],
    sizes: [{ label: "3 x Rings / 4000K - Cold White", price: 1633 }, { label: "3 x Rings / 3000K - Warm White", price: 1633 }, { label: "4 x Rings / 4000K - Cold White", price: 1828 }, { label: "4 x Rings / 3000K - Warm White", price: 1828 }, { label: "5 x Rings / 4000K - Cold White", price: 2331 }, { label: "5 x Rings / 3000K - Warm White", price: 2331 }, { label: "6 x Rings / 4000K - Cold White", price: 2809 }, { label: "6 x Rings / 3000K - Warm White", price: 2809 }, { label: "7 x Rings / 4000K - Cold White", price: 4070 }, { label: "7 x Rings / 3000K - Warm White", price: 4070 }],
    desc: "Steel chandelier, for a dining table, an entry or a stairwell. In White.",
    features: [
      "Steel construction",
      "White colourway",
      "10 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Chandelier", "Material": "Steel", "Options": "10", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },


  { id: "lr036q", name: "Marble Table Lamp (White)", cat: "Home Décor", room: "Home Décor", price: 1648, memberPrice: 1483, sku: "SH-10818", tag: "New", ph: "", img: "assets/products/lr036q.webp",
    imgs: ["assets/products/lr036q.webp", "assets/products/lr036q-2.webp", "assets/products/lr036q-3.webp", "assets/products/lr036q-4.webp"],
    sizes: [{ label: "Cool White", price: 1648 }, { label: "Warm White", price: 1648 }, { label: "Neutral White", price: 1648 }],
    desc: "Marble table lamp, for a console, a sideboard or a bedside. In White. Stone and glass diffuse the light softly rather than throwing a hard beam.",
    features: [
      "Marble construction",
      "White colourway",
      "3 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Table Lamp", "Material": "Marble", "Options": "3", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },



  { id: "lr039q", name: "Table Lamp (120cm to 200cm)", cat: "Home Décor", room: "Home Décor", price: 1806, memberPrice: 1625, sku: "SH-10821", tag: "New", ph: "", img: "assets/products/lr039q.webp",
    imgs: ["assets/products/lr039q.webp", "assets/products/lr039q-2.webp", "assets/products/lr039q-3.webp", "assets/products/lr039q-4.webp"],
    sizes: [{ label: "White / 120cm H", price: 1806 }, { label: "Black / 120cm H", price: 1806 }, { label: "Khaki / 120cm H", price: 1806 }, { label: "White / 170cm H", price: 2963 }, { label: "Black / 170cm H", price: 2963 }, { label: "Khaki / 170cm H", price: 2963 }, { label: "White / 200cm H", price: 3694 }, { label: "Black / 200cm H", price: 3694 }, { label: "Khaki / 200cm H", price: 3694 }],
    desc: "A table lamp from 120cm to 200cm, for a console, a sideboard or a bedside. In Black, White or Khaki.",
    features: [
      "Sizes from 120cm to 200cm",
      "Black, White, Khaki colourways",
      "9 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Table Lamp", "Material": "Mixed", "Options": "9", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },




  { id: "lr043q", name: "Chandelier (White)", cat: "Home Décor", room: "Home Décor", price: 1887, memberPrice: 1698, sku: "SH-10825", tag: "New", ph: "", img: "assets/products/lr043q.webp",
    imgs: ["assets/products/lr043q.webp", "assets/products/lr043q-2.webp", "assets/products/lr043q-3.webp", "assets/products/lr043q-4.webp"],
    sizes: [{ label: "1 Ring x 12 Balls / Cool White", price: 1887 }, { label: "1 Ring x 12 Balls / Warm White", price: 1887 }, { label: "3 Rings x 36 Balls / Cool White", price: 4628 }, { label: "3 Rings x 36 Balls / Warm White", price: 4628 }],
    desc: "A chandelier, for a dining table, an entry or a stairwell. In White.",
    features: [
      "White colourway",
      "4 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Chandelier", "Material": "Mixed", "Options": "4", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },


  { id: "lr045q", name: "Table Lamp (80cm)", cat: "Home Décor", room: "Home Décor", price: 1963, memberPrice: 1767, sku: "SH-10827", tag: "New", ph: "", img: "assets/products/lr045q.webp",
    imgs: ["assets/products/lr045q.webp", "assets/products/lr045q-2.webp", "assets/products/lr045q-3.webp", "assets/products/lr045q-4.webp"],
    sizes: [{ label: "Warm White LED / 80cm", price: 1963 }],
    desc: "A table lamp at 80cm, for a console, a sideboard or a bedside. In White. A half-moon rather than a circle, so it sits flush against a wall.",
    features: [
      "80cm",
      "White colourway",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Table Lamp", "Material": "Mixed", "Options": "1", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },




  { id: "lr049q", name: "Marble Pendant Light (80cm to 140cm)", cat: "Home Décor", room: "Home Décor", price: 2198, memberPrice: 1978, sku: "SH-10831", tag: "New", ph: "", img: "assets/products/lr049q.webp",
    imgs: ["assets/products/lr049q.webp", "assets/products/lr049q-2.webp", "assets/products/lr049q-3.webp", "assets/products/lr049q-4.webp"],
    sizes: [{ label: "80cm / Warm White", price: 2198 }, { label: "100cm / Warm White", price: 3424 }, { label: "120cm / Warm White", price: 4406 }, { label: "140cm / Warm White", price: 4987 }],
    desc: "Marble pendant from 80cm to 140cm, sized to hang over a table or a kitchen bench. In White. Stone and glass diffuse the light softly rather than throwing a hard beam.",
    features: [
      "Marble construction",
      "Sizes from 80cm to 140cm",
      "White colourway",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Pendant Light", "Material": "Marble", "Options": "4", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },



  { id: "lr052q", name: "Chandelier (180cm to 400cm)", cat: "Home Décor", room: "Home Décor", price: 2222, memberPrice: 2000, sku: "SH-10834", tag: "New", ph: "", img: "assets/products/lr052q.webp",
    imgs: ["assets/products/lr052q.webp", "assets/products/lr052q-2.webp", "assets/products/lr052q-3.webp", "assets/products/lr052q-4.webp"],
    sizes: [{ label: "45 ø x 180cm H / Warm White", price: 2222 }, { label: "60 ø x 210cm H / Warm White", price: 4119 }, { label: "75 ø x 250cm H / Warm White", price: 5741 }, { label: "80 ø x 300cm H / Warm White", price: 7074 }, { label: "100 ø x 300cm H / Warm White", price: 8833 }, { label: "100 ø x 400cm H / Warm White", price: 10800 }],
    desc: "A chandelier from 180cm to 400cm, for a dining table, an entry or a stairwell. In White.",
    features: [
      "Sizes from 180cm to 400cm",
      "White colourway",
      "6 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Chandelier", "Material": "Mixed", "Options": "6", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr053q", name: "Table Lamp (White / Gold)", cat: "Home Décor", room: "Home Décor", price: 2222, memberPrice: 2000, sku: "SH-10835", tag: "New", ph: "", img: "assets/products/lr053q.webp",
    imgs: ["assets/products/lr053q.webp", "assets/products/lr053q-2.webp", "assets/products/lr053q-3.webp", "assets/products/lr053q-4.webp"],
    sizes: [{ label: "5 Head - Gold / Warm White", price: 2222 }, { label: "5 Head - Gold / Cool White", price: 2222 }],
    desc: "A table lamp, for a console, a sideboard or a bedside. In White or Gold.",
    features: [
      "White, Gold colourways",
      "2 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Table Lamp", "Material": "Mixed", "Options": "2", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },


  { id: "lr055q", name: "Marble Pendant Light (White / Natural)", cat: "Home Décor", room: "Home Décor", price: 2526, memberPrice: 2273, sku: "SH-10837", tag: "New", ph: "", img: "assets/products/lr055q.webp",
    imgs: ["assets/products/lr055q.webp", "assets/products/lr055q-2.webp", "assets/products/lr055q-3.webp", "assets/products/lr055q-4.webp"],
    sizes: [{ label: "80cm / Warm White", price: 2526 }, { label: "80cm / Natural White", price: 2526 }, { label: "80cm / Cool White", price: 2526 }, { label: "100cm / Warm White", price: 2904 }, { label: "100cm / Natural White", price: 2904 }, { label: "100cm / Cool White", price: 2904 }, { label: "120cm / Warm White", price: 3385 }, { label: "120cm / Natural White", price: 3385 }, { label: "120cm / Cool White", price: 3385 }, { label: "140cm / Warm White", price: 4111 }, { label: "140cm / Natural White", price: 4111 }, { label: "140cm / Cool White", price: 4111 }],
    desc: "Marble pendant from 80cm to 140cm, sized to hang over a table or a kitchen bench. In White or Natural. Stone and glass diffuse the light softly rather than throwing a hard beam.",
    features: [
      "Marble construction",
      "Sizes from 80cm to 140cm",
      "White, Natural colourways",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Pendant Light", "Material": "Marble", "Options": "12", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr056q", name: "Table Lamp (60cm)", cat: "Home Décor", room: "Home Décor", price: 2741, memberPrice: 2467, sku: "SH-10838", tag: "New", ph: "", img: "assets/products/lr056q.webp",
    imgs: ["assets/products/lr056q.webp", "assets/products/lr056q-2.webp", "assets/products/lr056q-3.webp", "assets/products/lr056q-4.webp"],
    sizes: [{ label: "Gold / 60cm", price: 2741 }],
    desc: "A table lamp at 60cm, for a console, a sideboard or a bedside. In Gold. A halo of light on a slim stem, more sculpture than lamp.",
    features: [
      "60cm",
      "Gold colourway",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Table Lamp", "Material": "Mixed", "Options": "1", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr057q", name: "Pendant Light (80cm to 120cm)", cat: "Home Décor", room: "Home Décor", price: 2920, memberPrice: 2628, sku: "SH-10839", tag: "New", ph: "", img: "assets/products/lr057q.webp",
    imgs: ["assets/products/lr057q.webp", "assets/products/lr057q-2.webp", "assets/products/lr057q-3.webp", "assets/products/lr057q-4.webp"],
    sizes: [{ label: "80cm / Cool White", price: 2920 }, { label: "80cm / Warm White", price: 2920 }, { label: "100cm / Cool White", price: 3880 }, { label: "100cm / Warm White", price: 3880 }, { label: "120cm / Cool White", price: 4596 }, { label: "120cm / Warm White", price: 4596 }],
    desc: "A pendant from 80cm to 120cm, sized to hang over a table or a kitchen bench. In White.",
    features: [
      "Sizes from 80cm to 120cm",
      "White colourway",
      "6 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Pendant Light", "Material": "Mixed", "Options": "6", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },











  { id: "lr068q", name: "Crystal Chandelier (White)", cat: "Home Décor", room: "Home Décor", price: 4722, memberPrice: 4250, sku: "SH-10850", tag: "New", ph: "", img: "assets/products/lr068q.webp",
    imgs: ["assets/products/lr068q.webp", "assets/products/lr068q-2.webp", "assets/products/lr068q-3.webp", "assets/products/lr068q-4.webp"],
    sizes: [{ label: "4 Rings / Warm White", price: 4722 }, { label: "4 Rings / Cool White", price: 4722 }, { label: "5 Rings / Warm White", price: 6013 }, { label: "5 Rings / Cool White", price: 6013 }, { label: "6 Rings / Warm White", price: 7402 }, { label: "6 Rings / Cool White", price: 7402 }, { label: "7 Rings / Warm White", price: 8241 }, { label: "7 Rings / Cool White", price: 8241 }],
    desc: "Crystal chandelier, for a dining table, an entry or a stairwell. In White. Glass spreads the light rather than concentrating it.",
    features: [
      "Crystal construction",
      "White colourway",
      "8 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Chandelier", "Material": "Crystal", "Options": "8", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lr069q", name: "Chandelier (73cm to 85cm)", cat: "Home Décor", room: "Home Décor", price: 4865, memberPrice: 4378, sku: "SH-10851", tag: "New", ph: "", img: "assets/products/lr069q.webp",
    imgs: ["assets/products/lr069q.webp", "assets/products/lr069q-2.webp", "assets/products/lr069q-3.webp", "assets/products/lr069q-4.webp"],
    sizes: [{ label: "Black / 73cm / Cool White", price: 4865 }, { label: "Black / 73cm / Warm White", price: 4865 }, { label: "Gold / 73cm / Cool White", price: 4865 }, { label: "Gold / 73cm / Warm White", price: 4865 }, { label: "Black / 85cm / Cool White", price: 6089 }, { label: "Black / 85cm / Warm White", price: 6089 }, { label: "Gold / 85cm / Cool White", price: 6089 }, { label: "Gold / 85cm / Warm White", price: 6089 }],
    desc: "A chandelier from 73cm to 85cm, for a dining table, an entry or a stairwell. In Black, White or Gold.",
    features: [
      "Sizes from 73cm to 85cm",
      "Black, White, Gold colourways",
      "8 options to choose from",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Chandelier", "Material": "Mixed", "Options": "8", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },




  { id: "lr073q", name: "Crystal Chandelier (80cm to 120cm)", cat: "Home Décor", room: "Home Décor", price: 7398, memberPrice: 6658, sku: "SH-10855", tag: "New", ph: "", img: "assets/products/lr073q.webp",
    imgs: ["assets/products/lr073q.webp", "assets/products/lr073q-2.webp", "assets/products/lr073q-3.webp", "assets/products/lr073q-4.webp"],
    sizes: [{ label: "6 Heads / 80cm / Cold White", price: 7398 }, { label: "6 Heads / 80cm / Warm White", price: 7398 }, { label: "8 Heads / 100cm / Cold White", price: 8930 }, { label: "8 Heads / 100cm / Warm White", price: 8930 }, { label: "6 Heads / 100cm / Cold White", price: 10059 }, { label: "6 Heads / 100cm / Warm White", price: 10059 }, { label: "6 Heads / 120cm / Cold White", price: 13704 }, { label: "6 Heads / 120cm / Warm White", price: 13704 }, { label: "8 Heads / 120cm / Cold White", price: 20000 }, { label: "8 Heads / 120cm / Warm White", price: 20000 }],
    desc: "Crystal chandelier from 80cm to 120cm, for a dining table, an entry or a stairwell. In White. Glass spreads the light rather than concentrating it.",
    features: [
      "Crystal construction",
      "Sizes from 80cm to 120cm",
      "White colourway",
      "Licensed electrician for hard-wired fittings"
    ],
    specs: { "Type": "Chandelier", "Material": "Crystal", "Options": "10", "Room": "Home Décor" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; glass and crystal want a barely damp cloth then buffing. Hard-wired fittings should be installed by a licensed electrician." },



















































































































































  // ── Bedroom ──
  { id: "ba01z", name: "Satin Pillow Case", cat: "Bedroom", room: "Bedroom", price: 83, memberPrice: 75, sku: "SH-10676", tag: "New", ph: "", img: "assets/products/ba01z.webp",
    imgs: ["assets/products/ba01z.webp", "assets/products/ba01z-2.webp", "assets/products/ba01z-3.webp", "assets/products/ba01z-4.webp", "assets/products/ba01z-5.webp"],
    sizes: [{ label: "White / 51cm x 66cm", price: 83 }, { label: "Pink / 51cm x 66cm", price: 83 }, { label: "Silver Grey / 51cm x 66cm", price: 83 }, { label: "Black / 51cm x 66cm", price: 83 }, { label: "Red / 51cm x 66cm", price: 83 }, { label: "Peacock Blue / 51cm x 66cm", price: 83 }, { label: "Champagne / 51cm x 66cm", price: 83 }, { label: "Navy Blue / 51cm x 66cm", price: 83 }, { label: "Sky Blue / 51cm x 66cm", price: 83 }, { label: "Moonlight Blue / 51cm x 66cm", price: 83 }, { label: "White / 51cm x 76cm", price: 109 }, { label: "Pink / 51cm x 76cm", price: 109 }, { label: "Silver Grey / 51cm x 76cm", price: 109 }, { label: "Black / 51cm x 76cm", price: 109 }, { label: "Red / 51cm x 76cm", price: 109 }, { label: "Peacock Blue / 51cm x 76cm", price: 109 }, { label: "Champagne / 51cm x 76cm", price: 109 }, { label: "Navy Blue / 51cm x 76cm", price: 109 }, { label: "Sky Blue / 51cm x 76cm", price: 109 }, { label: "Moonlight Blue / 51cm x 76cm", price: 109 }],
    desc: "Satin in white, pink and other tones, standard or king. Easier on hair and skin than cotton, which is why people switch.",
    features: [
      "Satin finish",
      "Standard and King",
      "Kinder to hair and skin"
    ],
    specs: { "Type": "Bedroom accessory", "Material": "Silk / satin", "Options": "20", "Room": "Bedroom" },
    care: "Hand wash in cool water with a gentle detergent, or use a delicates bag on a cold machine cycle. Dry flat away from sun, and iron on low if needed." },

  { id: "ba02z", name: "25-Momme Mulberry Silk Pillow Case", cat: "Bedroom", room: "Bedroom", price: 124, memberPrice: 112, sku: "SH-10677", tag: "New", ph: "", img: "assets/products/ba02z.webp",
    imgs: ["assets/products/ba02z.webp", "assets/products/ba02z-2.webp", "assets/products/ba02z-3.webp", "assets/products/ba02z-4.webp", "assets/products/ba02z-5.jpg"],
    sizes: [{ label: "White / 51cm x 66cm", price: 124 }, { label: "Pink / 51cm x 66cm", price: 124 }, { label: "Dark Grey / 51cm x 66cm", price: 124 }, { label: "Black / 51cm x 66cm", price: 124 }, { label: "Red / 51cm x 66cm", price: 124 }, { label: "Peacock Blue / 51cm x 66cm", price: 124 }, { label: "Champagne / 51cm x 66cm", price: 124 }, { label: "Navy Blue / 51cm x 66cm", price: 124 }, { label: "Sky Blue / 51cm x 66cm", price: 124 }, { label: "Moonlight Blue / 51cm x 66cm", price: 124 }, { label: "White / 51cm x 76cm", price: 143 }, { label: "Pink / 51cm x 76cm", price: 143 }, { label: "Dark Grey / 51cm x 76cm", price: 143 }, { label: "Black / 51cm x 76cm", price: 143 }, { label: "Red / 51cm x 76cm", price: 143 }, { label: "Peacock Blue / 51cm x 76cm", price: 143 }, { label: "Champagne / 51cm x 76cm", price: 143 }, { label: "Navy Blue / 51cm x 76cm", price: 143 }, { label: "Sky Blue / 51cm x 76cm", price: 143 }, { label: "Moonlight Blue / 51cm x 76cm", price: 143 }],
    desc: "Pure mulberry silk at 25 momme, which is the weight where silk stops being flimsy. Standard or king.",
    features: [
      "100% mulberry silk, 25 momme",
      "Standard and King",
      "Several colourways"
    ],
    specs: { "Type": "Bedroom accessory", "Material": "Silk / satin", "Options": "20", "Room": "Bedroom" },
    care: "Hand wash in cool water with a gentle detergent, or use a delicates bag on a cold machine cycle. Dry flat away from sun, and iron on low if needed." },

  { id: "ba03z", name: "Marble & Gold Coat Rack", cat: "Bedroom", room: "Bedroom", price: 787, memberPrice: 708, sku: "SH-10678", tag: "New", ph: "", img: "assets/products/ba03z.webp",
    imgs: ["assets/products/ba03z.webp", "assets/products/ba03z-2.webp", "assets/products/ba03z-3.webp", "assets/products/ba03z-4.webp"],
    sizes: [{ label: "Gold", price: 787 }],
    desc: "A freestanding coat rack on a marble base in gold. For a bedroom corner or an entry.",
    features: [
      "Marble base, gold frame",
      "Freestanding",
      "Bedroom or entry"
    ],
    specs: { "Type": "Bedroom accessory", "Material": "Marble & metal", "Options": "1", "Room": "Bedroom" },
    care: "Wipe with a soft, damp cloth and dry. Avoid abrasive pads on plated finishes." },

  { id: "ba04z", optionLabel: "Colour", sizeImg: {"White & Gold":"assets/products/ba04z-2.webp"}, name: "Marble Coat Tree", cat: "Bedroom", room: "Bedroom", price: 1000, memberPrice: 900, sku: "SH-10679", tag: "New", ph: "", img: "assets/products/ba04z.webp",
    imgs: ["assets/products/ba04z.webp", "assets/products/ba04z-2.webp", "assets/products/ba04z-3.webp", "assets/products/ba04z-4.webp", "assets/products/ba04z-5.webp"],
    sizes: [{ label: "White & Gold", price: 1000 }, { label: "Black & Gold", price: 1000 }],
    desc: "A coat tree in white and gold or black and gold, on marble.",
    features: [
      "Marble base",
      "White + Gold or Black + Gold",
      "Freestanding"
    ],
    specs: { "Type": "Bedroom accessory", "Material": "Marble & metal", "Options": "2", "Room": "Bedroom" },
    care: "Wipe with a soft, damp cloth and dry. Avoid abrasive pads on plated finishes." },


  { id: "bd02z", name: "Velvet Upholstered Bed", cat: "Bedroom", room: "Bedroom", price: 10674, memberPrice: 9607, sku: "SH-10681", tag: "New", ph: "", img: "assets/products/bd02z.webp",
    imgs: ["assets/products/bd02z.webp", "assets/products/bd02z-2.webp", "assets/products/bd02z-3.webp", "assets/products/bd02z-4.webp", "assets/products/bd02z-5.webp"],
    sizes: [{ label: "Queen", price: 10674 }, { label: "King", price: 11481 }],
    desc: "Velvet over a timber frame, in queen or king. Velvet at bedhead scale is what makes a bedroom feel finished rather than furnished.",
    features: [
      "Velvet upholstery on timber",
      "Queen and King",
      "Full upholstered bedhead"
    ],
    specs: { "Type": "Bed", "Material": "Velvet", "Options": "2", "Room": "Bedroom" },
    care: "Vacuum with a brush head to lift the pile and blot spills rather than rubbing, since rubbing crushes the nap. Keep out of strong direct sun." },

  { id: "bd03z", name: "Upholstered Bed with Marble Detail", cat: "Bedroom", room: "Bedroom", price: 10726, memberPrice: 9653, sku: "SH-10682", tag: "New", ph: "", img: "assets/products/bd03z.webp",
    imgs: ["assets/products/bd03z.webp", "assets/products/bd03z-2.webp", "assets/products/bd03z-3.webp", "assets/products/bd03z-4.webp", "assets/products/bd03z-5.webp"],
    sizes: [{ label: "Queen / 0 x Bedside Tables (bed only)", price: 10726 }, { label: "King / 0 x Bedside Tables (bed only)", price: 11652 }, { label: "Queen / Bed + 2 x Bedside Tables", price: 19615 }, { label: "King / Bed + 2 x Bedside Tables", price: 20541 }],
    desc: "An upholstered bed with marble detailing on a timber frame, with or without matching bedside tables.",
    features: [
      "Upholstered frame with marble detail",
      "Queen and King",
      "Optional matching bedside tables"
    ],
    specs: { "Type": "Bed", "Material": "Upholstery fabric", "Options": "4", "Room": "Bedroom" },
    care: "Vacuum regularly and blot spills immediately. Rotate and plump cushions so they wear evenly." },

  { id: "bd04z", name: "Ivory Leather Bed", cat: "Bedroom", room: "Bedroom", price: 12657, memberPrice: 11391, sku: "SH-10683", tag: "New", ph: "", img: "assets/products/bd04z.webp",
    imgs: ["assets/products/bd04z.webp", "assets/products/bd04z-2.webp", "assets/products/bd04z-3.webp", "assets/products/bd04z-4.webp", "assets/products/bd04z-5.webp"],
    sizes: [{ label: "Ivory / Queen / 0 x Bedside Tables (bed only)", price: 12657 }, { label: "Tan / Queen / 0 x Bedside Tables (bed only)", price: 12657 }, { label: "Mocha / Queen / 0 x Bedside Tables (bed only)", price: 12657 }, { label: "Black / Queen / 0 x Bedside Tables (bed only)", price: 12657 }, { label: "Ivory / King / 0 x Bedside Tables (bed only)", price: 13765 }, { label: "Tan / King / 0 x Bedside Tables (bed only)", price: 13765 }, { label: "Mocha / King / 0 x Bedside Tables (bed only)", price: 13765 }, { label: "Black / King / 0 x Bedside Tables (bed only)", price: 13765 }, { label: "Ivory / Queen / Bed + 2 x Bedside Tables", price: 21546 }, { label: "Tan / Queen / Bed + 2 x Bedside Tables", price: 21546 }, { label: "Mocha / Queen / Bed + 2 x Bedside Tables", price: 21546 }, { label: "Black / Queen / Bed + 2 x Bedside Tables", price: 21546 }, { label: "Ivory / King / Bed + 2 x Bedside Tables", price: 22654 }, { label: "Tan / King / Bed + 2 x Bedside Tables", price: 22654 }, { label: "Mocha / King / Bed + 2 x Bedside Tables", price: 22654 }, { label: "Black / King / Bed + 2 x Bedside Tables", price: 22654 }],
    desc: "Leather in ivory, queen or king, with the option of bedside tables to match.",
    features: [
      "Genuine leather upholstery",
      "Ivory colourway",
      "Optional matching bedside tables"
    ],
    specs: { "Type": "Bed", "Material": "Leather", "Options": "16", "Room": "Bedroom" },
    care: "Dust with a dry cloth and wipe spills at once with a barely damp one. Keep out of direct sun and away from heaters, which dry and crack hide. Condition once or twice a year." },

  { id: "bd05z", name: "Charcoal Faux Fur Bed (King)", cat: "Bedroom", room: "Bedroom", price: 12944, memberPrice: 11650, sku: "SH-10684", tag: "New", ph: "", img: "assets/products/bd05z.webp",
    imgs: ["assets/products/bd05z.webp", "assets/products/bd05z-2.webp", "assets/products/bd05z-3.webp", "assets/products/bd05z-4.webp", "assets/products/bd05z-5.webp"],
    sizes: [{ label: "Charcoal Grey", price: 12944 }],
    desc: "A king bed wrapped in charcoal faux fur. Unusual, warm to the touch, and not for a minimalist room.",
    features: [
      "Faux fur upholstery",
      "Charcoal Grey",
      "King size"
    ],
    specs: { "Type": "Bed", "Material": "Faux fur", "Options": "1", "Room": "Bedroom" },
    care: "Shake it out rather than washing it. Spot clean with a barely damp cloth and let it air dry away from heat, then brush the pile back up." },

  { id: "bd06z", name: "Charcoal Velvet & Leather Bed", cat: "Bedroom", room: "Bedroom", price: 12952, memberPrice: 11657, sku: "SH-10685", tag: "New", ph: "", img: "assets/products/bd06z.webp",
    imgs: ["assets/products/bd06z.webp", "assets/products/bd06z-2.webp", "assets/products/bd06z-3.webp", "assets/products/bd06z-4.webp", "assets/products/bd06z-5.webp"],
    sizes: [{ label: "Charcoal Grey / Queen / 0 x Bedside Tables (bed only)", price: 12952 }, { label: "Grey / Queen / 0 x Bedside Tables (bed only)", price: 12952 }, { label: "Light Grey / Queen / 0 x Bedside Tables (bed only)", price: 12952 }, { label: "Ivory / Queen / 0 x Bedside Tables (bed only)", price: 12952 }, { label: "Charcoal Grey / King / 0 x Bedside Tables (bed only)", price: 14626 }, { label: "Grey / King / 0 x Bedside Tables (bed only)", price: 14626 }, { label: "Light Grey / King / 0 x Bedside Tables (bed only)", price: 14626 }, { label: "Ivory / King / 0 x Bedside Tables (bed only)", price: 14626 }, { label: "Charcoal Grey / Queen / Bed + 2 x Bedside Tables", price: 21841 }, { label: "Grey / Queen / Bed + 2 x Bedside Tables", price: 21841 }, { label: "Light Grey / Queen / Bed + 2 x Bedside Tables", price: 21841 }, { label: "Ivory / Queen / Bed + 2 x Bedside Tables", price: 21841 }, { label: "Charcoal Grey / King / Bed + 2 x Bedside Tables", price: 23515 }, { label: "Grey / King / Bed + 2 x Bedside Tables", price: 23515 }, { label: "Light Grey / King / Bed + 2 x Bedside Tables", price: 23515 }, { label: "Ivory / King / Bed + 2 x Bedside Tables", price: 23515 }],
    desc: "Velvet with leather detail in charcoal grey, queen or king, on a timber frame.",
    features: [
      "Velvet with leather detail",
      "Charcoal Grey",
      "Queen and King"
    ],
    specs: { "Type": "Bed", "Material": "Velvet", "Options": "16", "Room": "Bedroom" },
    care: "Vacuum with a brush head to lift the pile and blot spills rather than rubbing, since rubbing crushes the nap. Keep out of strong direct sun." },

  { id: "bd07z", name: "Leather Storage Bed", cat: "Bedroom", room: "Bedroom", price: 13248, memberPrice: 11923, sku: "SH-10686", tag: "New", ph: "", img: "assets/products/bd07z.webp",
    imgs: ["assets/products/bd07z.webp", "assets/products/bd07z-2.webp", "assets/products/bd07z-3.webp", "assets/products/bd07z-4.webp", "assets/products/bd07z-5.webp"],
    sizes: [{ label: "Ivory/Beige / Queen / 0 x Bedside Tables (bed only)", price: 13248 }, { label: "Light Grey / Queen / 0 x Bedside Tables (bed only)", price: 13248 }, { label: "Dark Grey / Queen / 0 x Bedside Tables (bed only)", price: 13248 }, { label: "Ivory/Beige / King / 0 x Bedside Tables (bed only)", price: 15363 }, { label: "Light Grey / King / 0 x Bedside Tables (bed only)", price: 15363 }, { label: "Dark Grey / King / 0 x Bedside Tables (bed only)", price: 15363 }, { label: "Ivory/Beige / Queen / Bed + 2 x Bedside Tables", price: 22137 }, { label: "Light Grey / Queen / Bed + 2 x Bedside Tables", price: 22137 }, { label: "Dark Grey / Queen / Bed + 2 x Bedside Tables", price: 22137 }, { label: "Ivory/Beige / King / Bed + 2 x Bedside Tables", price: 24252 }, { label: "Light Grey / King / Bed + 2 x Bedside Tables", price: 24252 }, { label: "Dark Grey / King / Bed + 2 x Bedside Tables", price: 24252 }],
    desc: "Leather in ivory and beige with storage built into the base, queen or king. The storage is the reason to buy it.",
    features: [
      "Leather upholstery",
      "Built-in under-bed storage",
      "Queen and King"
    ],
    specs: { "Type": "Bed", "Material": "Leather", "Options": "12", "Room": "Bedroom" },
    care: "Dust with a dry cloth and wipe spills at once with a barely damp one. Keep out of direct sun and away from heaters, which dry and crack hide. Condition once or twice a year." },

  { id: "bd08z", name: "Upholstered Bed (Queen or King)", cat: "Bedroom", room: "Bedroom", price: 13333, memberPrice: 12000, sku: "SH-10687", tag: "New", ph: "", img: "assets/products/bd08z.webp",
    imgs: ["assets/products/bd08z.webp", "assets/products/bd08z-2.webp", "assets/products/bd08z-3.webp", "assets/products/bd08z-4.webp", "assets/products/bd08z-5.webp"],
    sizes: [{ label: "Queen", price: 13333 }, { label: "King", price: 14793 }],
    desc: "A plainly upholstered bed in two sizes.",
    features: [
      "Upholstered frame",
      "Queen and King",
      "Simple, unfussy shape"
    ],
    specs: { "Type": "Bed", "Material": "Upholstery fabric", "Options": "2", "Room": "Bedroom" },
    care: "Vacuum regularly and blot spills immediately. Rotate and plump cushions so they wear evenly." },

  { id: "bd09z", name: "White Upholstered Storage Bed", cat: "Bedroom", room: "Bedroom", price: 13439, memberPrice: 12095, sku: "SH-10688", tag: "New", ph: "", img: "assets/products/bd09z.webp",
    imgs: ["assets/products/bd09z.webp", "assets/products/bd09z-2.webp", "assets/products/bd09z-3.webp", "assets/products/bd09z-4.webp", "assets/products/bd09z-5.webp"],
    sizes: [{ label: "White / Queen / 0 x Bedside Tables (bed only)", price: 13439 }, { label: "Khaki / Queen / 0 x Bedside Tables (bed only)", price: 13439 }, { label: "White / King / 0 x Bedside Tables (bed only)", price: 14443 }, { label: "Khaki / King / 0 x Bedside Tables (bed only)", price: 14443 }, { label: "White / Queen / Bed + 2 x Bedside Tables", price: 20846 }, { label: "Khaki / Queen / Bed + 2 x Bedside Tables", price: 20846 }, { label: "White / King / Bed + 2 x Bedside Tables", price: 21850 }, { label: "Khaki / King / Bed + 2 x Bedside Tables", price: 21850 }],
    desc: "White upholstery with storage in the base, on a timber frame, with optional bedside tables.",
    features: [
      "Upholstered with storage base",
      "White colourway",
      "Optional bedside tables"
    ],
    specs: { "Type": "Bed", "Material": "Upholstery fabric", "Options": "8", "Room": "Bedroom" },
    care: "Vacuum regularly and blot spills immediately. Rotate and plump cushions so they wear evenly." },

  { id: "bd10z", name: "Black Leather Bed", cat: "Bedroom", room: "Bedroom", price: 13641, memberPrice: 12277, sku: "SH-10689", tag: "New", ph: "", img: "assets/products/bd10z.webp",
    imgs: ["assets/products/bd10z.webp", "assets/products/bd10z-2.webp", "assets/products/bd10z-3.webp", "assets/products/bd10z-4.webp", "assets/products/bd10z-5.webp"],
    sizes: [{ label: "Black / Queen", price: 13641 }, { label: "Black / King", price: 15048 }],
    desc: "Black leather, queen or king. Darker than most and better for it in a light room.",
    features: [
      "Genuine leather",
      "Black colourway",
      "Queen and King"
    ],
    specs: { "Type": "Bed", "Material": "Leather", "Options": "2", "Room": "Bedroom" },
    care: "Dust with a dry cloth and wipe spills at once with a barely damp one. Keep out of direct sun and away from heaters, which dry and crack hide. Condition once or twice a year." },

  { id: "bd11z", name: "Bouclé & Leather Bed", cat: "Bedroom", room: "Bedroom", price: 13772, memberPrice: 12395, sku: "SH-10690", tag: "New", ph: "", img: "assets/products/bd11z.webp",
    imgs: ["assets/products/bd11z.webp", "assets/products/bd11z-2.webp", "assets/products/bd11z-3.webp", "assets/products/bd11z-4.webp", "assets/products/bd11z-5.webp"],
    sizes: [{ label: "Queen / 0 x Bedside Tables (bed only)", price: 13772 }, { label: "King / 0 x Bedside Tables (bed only)", price: 15778 }, { label: "Queen / Bed + 2 x Bedside Tables", price: 21180 }, { label: "King / Bed + 2 x Bedside Tables", price: 23185 }],
    desc: "Bouclé with leather detail on a timber frame, queen or king, with optional bedside tables.",
    features: [
      "Bouclé with leather detail",
      "Timber frame",
      "Optional bedside tables"
    ],
    specs: { "Type": "Bed", "Material": "Bouclé", "Options": "4", "Room": "Bedroom" },
    care: "Vacuum gently with a brush head and blot spills. Trim a snagged loop rather than pulling it." },

  { id: "bd12z", name: "Black Leather Storage Bed", cat: "Bedroom", room: "Bedroom", price: 14222, memberPrice: 12800, sku: "SH-10691", tag: "New", ph: "", img: "assets/products/bd12z.webp",
    imgs: ["assets/products/bd12z.webp", "assets/products/bd12z-2.webp", "assets/products/bd12z-3.webp", "assets/products/bd12z-4.webp", "assets/products/bd12z-5.webp"],
    sizes: [{ label: "Black / Queen", price: 14222 }, { label: "Black / King", price: 15063 }],
    desc: "Black leather with storage in the base, queen or king.",
    features: [
      "Leather upholstery",
      "Storage base",
      "Queen and King"
    ],
    specs: { "Type": "Bed", "Material": "Leather", "Options": "2", "Room": "Bedroom" },
    care: "Dust with a dry cloth and wipe spills at once with a barely damp one. Keep out of direct sun and away from heaters, which dry and crack hide. Condition once or twice a year." },

  { id: "bd13z", name: "Grey Upholstered Bed", cat: "Bedroom", room: "Bedroom", price: 16028, memberPrice: 14425, sku: "SH-10692", tag: "New", ph: "", img: "assets/products/bd13z.webp",
    imgs: ["assets/products/bd13z.webp", "assets/products/bd13z-2.webp", "assets/products/bd13z-3.webp", "assets/products/bd13z-4.webp", "assets/products/bd13z-5.webp"],
    sizes: [{ label: "Grey / Queen", price: 16028 }, { label: "Grey / King", price: 16656 }],
    desc: "Grey upholstery, queen or king.",
    features: [
      "Upholstered frame",
      "Grey colourway",
      "Queen and King"
    ],
    specs: { "Type": "Bed", "Material": "Upholstery fabric", "Options": "2", "Room": "Bedroom" },
    care: "Vacuum regularly and blot spills immediately. Rotate and plump cushions so they wear evenly." },

  { id: "bd14z", name: "Cotton Upholstered Bed", cat: "Bedroom", room: "Bedroom", price: 16070, memberPrice: 14463, sku: "SH-10693", tag: "New", ph: "", img: "assets/products/bd14z.webp",
    imgs: ["assets/products/bd14z.webp", "assets/products/bd14z-2.webp", "assets/products/bd14z-3.webp", "assets/products/bd14z-4.webp", "assets/products/bd14z-5.webp"],
    sizes: [{ label: "Beige / Queen", price: 16070 }, { label: "Grey / Queen", price: 16070 }, { label: "Beige / King", price: 17778 }, { label: "Grey / King", price: 17778 }],
    desc: "Cotton upholstery in beige or grey, queen or king. Cotton breathes better than synthetic against a bedhead you lean on.",
    features: [
      "Cotton upholstery",
      "Beige or Grey",
      "Queen and King"
    ],
    specs: { "Type": "Bed", "Material": "Upholstery fabric", "Options": "4", "Room": "Bedroom" },
    care: "Vacuum regularly and blot spills immediately. Rotate and plump cushions so they wear evenly." },

  { id: "bd15z", name: "Upholstered Storage Bed", cat: "Bedroom", room: "Bedroom", price: 16152, memberPrice: 14537, sku: "SH-10694", tag: "New", ph: "", img: "assets/products/bd15z.webp",
    imgs: ["assets/products/bd15z.webp", "assets/products/bd15z-2.webp", "assets/products/bd15z-3.webp", "assets/products/bd15z-4.webp", "assets/products/bd15z-5.webp"],
    sizes: [{ label: "Off White / Queen", price: 16152 }, { label: "Grey / Queen", price: 16152 }, { label: "Off White / King", price: 17635 }, { label: "Grey / King", price: 17635 }],
    desc: "Off white or grey with storage in the base, queen or king.",
    features: [
      "Upholstered with storage",
      "Off White or Grey",
      "Queen and King"
    ],
    specs: { "Type": "Bed", "Material": "Upholstery fabric", "Options": "4", "Room": "Bedroom" },
    care: "Vacuum regularly and blot spills immediately. Rotate and plump cushions so they wear evenly." },

  { id: "bd16z", name: "Leather Storage Bed in Off White", cat: "Bedroom", room: "Bedroom", price: 16904, memberPrice: 15214, sku: "SH-10695", tag: "New", ph: "", img: "assets/products/bd16z.webp",
    imgs: ["assets/products/bd16z.webp", "assets/products/bd16z-2.webp", "assets/products/bd16z-3.webp", "assets/products/bd16z-4.webp", "assets/products/bd16z-5.webp"],
    sizes: [{ label: "Grey / Queen", price: 16904 }, { label: "Off White / Queen", price: 16904 }, { label: "Tan / Queen", price: 16904 }, { label: "Off White / King", price: 18289 }, { label: "Tan / King", price: 18289 }, { label: "Grey / King", price: 18289 }],
    desc: "Leather in off white or grey, with storage, queen or king.",
    features: [
      "Leather with storage base",
      "Off White or Grey",
      "Queen and King"
    ],
    specs: { "Type": "Bed", "Material": "Leather", "Options": "6", "Room": "Bedroom" },
    care: "Dust with a dry cloth and wipe spills at once with a barely damp one. Keep out of direct sun and away from heaters, which dry and crack hide. Condition once or twice a year." },

  { id: "bd17z", name: "Wide Upholstered Bed", cat: "Bedroom", room: "Bedroom", price: 17093, memberPrice: 15384, sku: "SH-10696", tag: "New", ph: "", img: "assets/products/bd17z.webp",
    imgs: ["assets/products/bd17z.webp", "assets/products/bd17z-2.webp", "assets/products/bd17z-3.webp", "assets/products/bd17z-4.webp", "assets/products/bd17z-5.webp"],
    sizes: [{ label: "Queen", price: 17093 }, { label: "King", price: 18148 }],
    desc: "A generously upholstered bed in queen or king, with a bedhead wide enough to sit bedside tables against.",
    features: [
      "Extra-wide upholstered bedhead",
      "Queen and King",
      "Tables tuck against either side"
    ],
    specs: { "Type": "Bed", "Material": "Upholstery fabric", "Options": "2", "Room": "Bedroom" },
    care: "Vacuum regularly and blot spills immediately. Rotate and plump cushions so they wear evenly." },

  { id: "bd18z", name: "Ivory Upholstered Storage Bed", cat: "Bedroom", room: "Bedroom", price: 17185, memberPrice: 15466, sku: "SH-10697", tag: "New", ph: "", img: "assets/products/bd18z.webp",
    imgs: ["assets/products/bd18z.webp", "assets/products/bd18z-2.webp", "assets/products/bd18z-3.webp", "assets/products/bd18z-4.webp", "assets/products/bd18z-5.webp"],
    sizes: [{ label: "Ivory / Queen / 0 x Bedside Tables (bed only)", price: 17185 }, { label: "Grey / Queen / 0 x Bedside Tables (bed only)", price: 17185 }, { label: "Green / Queen / 0 x Bedside Tables (bed only)", price: 17185 }, { label: "Ivory / King / 0 x Bedside Tables (bed only)", price: 18637 }, { label: "Grey / King / 0 x Bedside Tables (bed only)", price: 18637 }, { label: "Green / King / 0 x Bedside Tables (bed only)", price: 18637 }, { label: "Ivory / Queen / Bed + 2 x Bedside Tables", price: 24593 }, { label: "Grey / Queen / Bed + 2 x Bedside Tables", price: 24593 }, { label: "Green / Queen / Bed + 2 x Bedside Tables", price: 24593 }, { label: "Ivory / King / Bed + 2 x Bedside Tables", price: 26044 }, { label: "Grey / King / Bed + 2 x Bedside Tables", price: 26044 }, { label: "Green / King / Bed + 2 x Bedside Tables", price: 26044 }],
    desc: "Ivory upholstery over timber, with storage and optional bedside tables.",
    features: [
      "Upholstered over timber",
      "Storage base",
      "Optional bedside tables"
    ],
    specs: { "Type": "Bed", "Material": "Upholstery fabric", "Options": "12", "Room": "Bedroom" },
    care: "Vacuum regularly and blot spills immediately. Rotate and plump cushions so they wear evenly." },


  { id: "bd20z", name: "Leather Bed with Timber Frame", cat: "Bedroom", room: "Bedroom", price: 18630, memberPrice: 16767, sku: "SH-10699", tag: "New", ph: "", img: "assets/products/bd20z.webp",
    imgs: ["assets/products/bd20z.webp", "assets/products/bd20z-2.webp", "assets/products/bd20z-3.webp", "assets/products/bd20z-4.webp", "assets/products/bd20z-5.webp"],
    sizes: [{ label: "Queen / 0 x Bedside Tables (bed only)", price: 18630 }, { label: "King / 0 x Bedside Tables (bed only)", price: 20441 }, { label: "Queen / Bed + 2 x Bedside Tables", price: 27519 }, { label: "King / Bed + 2 x Bedside Tables", price: 29330 }],
    desc: "Leather over timber, queen or king, with optional matching tables.",
    features: [
      "Leather over a timber frame",
      "Queen and King",
      "Optional matching tables"
    ],
    specs: { "Type": "Bed", "Material": "Leather", "Options": "4", "Room": "Bedroom" },
    care: "Dust with a dry cloth and wipe spills at once with a barely damp one. Keep out of direct sun and away from heaters, which dry and crack hide. Condition once or twice a year." },

  { id: "bd21z", name: "Tan Leather Bed", cat: "Bedroom", room: "Bedroom", price: 19467, memberPrice: 17520, sku: "SH-10700", tag: "New", ph: "", img: "assets/products/bd21z.webp",
    imgs: ["assets/products/bd21z.webp", "assets/products/bd21z-2.webp", "assets/products/bd21z-3.webp", "assets/products/bd21z-4.webp", "assets/products/bd21z-5.webp"],
    sizes: [{ label: "Tan / Queen", price: 19467 }, { label: "Tan / King", price: 20933 }],
    desc: "Tan leather, queen or king. Tan warms a room in a way black and grey never do.",
    features: [
      "Genuine tan leather",
      "Queen and King",
      "Warm, light leather tone"
    ],
    specs: { "Type": "Bed", "Material": "Leather", "Options": "2", "Room": "Bedroom" },
    care: "Dust with a dry cloth and wipe spills at once with a barely damp one. Keep out of direct sun and away from heaters, which dry and crack hide. Condition once or twice a year." },

  { id: "bd22z", name: "Solid Timber Bed (King)", cat: "Bedroom", room: "Bedroom", price: 21222, memberPrice: 19100, sku: "SH-10701", tag: "New", ph: "", img: "assets/products/bd22z.webp",
    imgs: ["assets/products/bd22z.webp", "assets/products/bd22z-2.webp", "assets/products/bd22z-3.webp", "assets/products/bd22z-4.webp", "assets/products/bd22z-5.webp"],
    sizes: [{ label: "Queen / 0 x Bedside Tables", price: 21222 }, { label: "King / 0 x Bedside Tables", price: 22015 }, { label: "Queen / Bed + 2 x Bedside Tables", price: 30111 }, { label: "King / Bed + 2 x Bedside Tables", price: 30904 }],
    desc: "Solid timber in king, alone or with two bedside tables.",
    features: [
      "Solid timber",
      "King size",
      "Bed alone or with two tables"
    ],
    specs: { "Type": "Bed", "Material": "Solid timber", "Options": "4", "Room": "Bedroom" },
    care: "Dust with a dry cloth and wipe spills promptly. Keep out of direct sun, use coasters, and check the fixings occasionally." },

  { id: "bd23z", name: "Leather & Timber Bed (King)", cat: "Bedroom", room: "Bedroom", price: 21467, memberPrice: 19320, sku: "SH-10702", tag: "New", ph: "", img: "assets/products/bd23z.webp",
    imgs: ["assets/products/bd23z.webp", "assets/products/bd23z-2.webp", "assets/products/bd23z-3.webp", "assets/products/bd23z-4.webp", "assets/products/bd23z-5.webp"],
    sizes: [{ label: "Queen / 0 x Bedside Tables (bed only)", price: 21467 }, { label: "King / 0 x Bedside Tables (bed only)", price: 22950 }, { label: "Queen / Bed + 2 x Bedside Tables", price: 31356 }, { label: "King / Bed + 2 x Bedside Tables", price: 31839 }],
    desc: "Leather with a timber frame in king, with optional bedside tables.",
    features: [
      "Leather over timber",
      "King size",
      "Optional bedside tables"
    ],
    specs: { "Type": "Bed", "Material": "Leather", "Options": "4", "Room": "Bedroom" },
    care: "Dust with a dry cloth and wipe spills at once with a barely damp one. Keep out of direct sun and away from heaters, which dry and crack hide. Condition once or twice a year." },

  { id: "bd24z", name: "Navy Velvet Bed (250 or 280cm)", cat: "Bedroom", room: "Bedroom", price: 21778, memberPrice: 19600, sku: "SH-10703", tag: "New", ph: "", img: "assets/products/bd24z.webp",
    imgs: ["assets/products/bd24z.webp", "assets/products/bd24z-2.webp", "assets/products/bd24z-3.webp", "assets/products/bd24z-4.webp", "assets/products/bd24z-5.jpg"],
    sizes: [{ label: "Navy Blue / 280cm", price: 21778 }, { label: "Navy Blue / 250cm", price: 28000 }],
    desc: "Navy velvet at 250cm or 280cm across, which is wider than a standard king and is meant to be the whole wall.",
    features: [
      "Navy velvet upholstery",
      "250cm and 280cm wide",
      "Wall-width bedhead"
    ],
    specs: { "Type": "Bed", "Material": "Velvet", "Options": "2", "Room": "Bedroom" },
    care: "Vacuum with a brush head to lift the pile and blot spills rather than rubbing, since rubbing crushes the nap. Keep out of strong direct sun." },


  { id: "bp01z", name: "Cushion Cover in Three Sizes", cat: "Bedroom", room: "Bedroom", price: 50, memberPrice: 45, sku: "SH-10705", tag: "New", ph: "", img: "assets/products/bp01z.webp",
    imgs: ["assets/products/bp01z.webp", "assets/products/bp01z-2.webp", "assets/products/bp01z-3.webp", "assets/products/bp01z-4.webp", "assets/products/bp01z-5.webp"],
    sizes: [{ label: "White / 40cm x 40cm", price: 50 }, { label: "Ivory / 40cm x 40cm", price: 50 }, { label: "Grey / 40cm x 40cm", price: 50 }, { label: "Black / 40cm x 40cm", price: 50 }, { label: "Mustard / 40cm x 40cm", price: 50 }, { label: "White / 45cm x 45cm", price: 67 }, { label: "Ivory / 45cm x 45cm", price: 67 }, { label: "Grey / 45cm x 45cm", price: 67 }, { label: "Black / 45cm x 45cm", price: 67 }, { label: "Mustard / 45cm x 45cm", price: 67 }, { label: "White / 50cm x 50cm", price: 89 }, { label: "Ivory / 50cm x 50cm", price: 89 }, { label: "Grey / 50cm x 50cm", price: 89 }, { label: "Black / 50cm x 50cm", price: 89 }, { label: "Mustard / 50cm x 50cm", price: 89 }],
    desc: "A plain cushion cover in white and other tones, 40, 45 or 50cm square.",
    features: [
      "40, 45 and 50cm",
      "Several colourways",
      "Cover only"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "15", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp02z", name: "Cushion Cover in Beige", cat: "Bedroom", room: "Bedroom", price: 67, memberPrice: 60, sku: "SH-10706", tag: "New", ph: "", img: "assets/products/bp02z.webp",
    imgs: ["assets/products/bp02z.webp", "assets/products/bp02z-2.webp", "assets/products/bp02z-3.webp", "assets/products/bp02z-4.webp", "assets/products/bp02z-5.webp"],
    sizes: [{ label: "Beige / 30 x 50cm", price: 67 }, { label: "White / 30 x 50cm", price: 67 }, { label: "Coffee / 30 x 50cm", price: 67 }, { label: "Grey / 30 x 50cm", price: 67 }, { label: "Green / 30 x 50cm", price: 67 }, { label: "Navy / 30 x 50cm", price: 67 }, { label: "Pink / 30 x 50cm", price: 67 }, { label: "Baby Blue / 30 x 50cm", price: 67 }, { label: "Beige / 45 x 45cm", price: 72 }, { label: "White / 45 x 45cm", price: 72 }, { label: "Coffee / 45 x 45cm", price: 72 }, { label: "Grey / 45 x 45cm", price: 72 }, { label: "Green / 45 x 45cm", price: 72 }, { label: "Navy / 45 x 45cm", price: 72 }, { label: "Pink / 45 x 45cm", price: 72 }, { label: "Baby Blue / 45 x 45cm", price: 72 }, { label: "Beige / 50 x 50cm", price: 83 }, { label: "White / 50 x 50cm", price: 83 }, { label: "Coffee / 50 x 50cm", price: 83 }, { label: "Grey / 50 x 50cm", price: 83 }, { label: "Green / 50 x 50cm", price: 83 }, { label: "Navy / 50 x 50cm", price: 83 }, { label: "Pink / 50 x 50cm", price: 83 }, { label: "Baby Blue / 50 x 50cm", price: 83 }],
    desc: "Beige, in a lumbar 30 x 50cm or a square 45cm.",
    features: [
      "30 x 50cm or 45cm square",
      "Beige and other tones",
      "Cover only"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "24", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp03z", name: "Yellow Cushion Cover", cat: "Bedroom", room: "Bedroom", price: 74, memberPrice: 67, sku: "SH-10707", tag: "New", ph: "", img: "assets/products/bp03z.webp",
    imgs: ["assets/products/bp03z.webp", "assets/products/bp03z-2.webp", "assets/products/bp03z-3.webp", "assets/products/bp03z-4.webp", "assets/products/bp03z-5.webp"],
    sizes: [{ label: "Yellow / 30 x 50cm", price: 74 }, { label: "Black / 30 x 50cm", price: 74 }, { label: "Dark Green / 30 x 50cm", price: 74 }, { label: "Green / 30 x 50cm", price: 74 }, { label: "Dark Blue / 30 x 50cm", price: 74 }, { label: "Blue / 30 x 50cm", price: 74 }, { label: "Dark Grey / 30 x 50cm", price: 74 }, { label: "Grey / 30 x 50cm", price: 74 }, { label: "Khaki / 30 x 50cm", price: 74 }, { label: "Brown / 30 x 50cm", price: 74 }, { label: "Beige / 30 x 50cm", price: 74 }, { label: "Orange / 30 x 50cm", price: 74 }, { label: "Pink / 30 x 50cm", price: 74 }, { label: "Red / 30 x 50cm", price: 74 }, { label: "Yellow / 40cm", price: 102 }, { label: "Black / 40cm", price: 102 }, { label: "Dark Green / 40cm", price: 102 }, { label: "Green / 40cm", price: 102 }, { label: "Dark Blue / 40cm", price: 102 }, { label: "Blue / 40cm", price: 102 }, { label: "Dark Grey / 40cm", price: 102 }, { label: "Grey / 40cm", price: 102 }, { label: "Khaki / 40cm", price: 102 }, { label: "Brown / 40cm", price: 102 }, { label: "Beige / 40cm", price: 102 }, { label: "Orange / 40cm", price: 102 }, { label: "Pink / 40cm", price: 102 }, { label: "Red / 40cm", price: 102 }, { label: "Yellow / 50cm", price: 109 }, { label: "Black / 50cm", price: 109 }, { label: "Dark Green / 50cm", price: 109 }, { label: "Green / 50cm", price: 109 }, { label: "Dark Blue / 50cm", price: 109 }, { label: "Blue / 50cm", price: 109 }, { label: "Dark Grey / 50cm", price: 109 }, { label: "Grey / 50cm", price: 109 }, { label: "Khaki / 50cm", price: 109 }, { label: "Brown / 50cm", price: 109 }, { label: "Beige / 50cm", price: 109 }, { label: "Orange / 50cm", price: 109 }, { label: "Pink / 50cm", price: 109 }, { label: "Red / 50cm", price: 109 }],
    desc: "Yellow, in three shapes. Yellow is the colour most people wish they'd been braver about.",
    features: [
      "Three shapes",
      "Yellow colourway",
      "Cover only"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "42", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp04z", name: "Plush Cushion Cover", cat: "Bedroom", room: "Bedroom", price: 81, memberPrice: 73, sku: "SH-10708", tag: "New", ph: "", img: "assets/products/bp04z.webp",
    imgs: ["assets/products/bp04z.webp", "assets/products/bp04z-2.webp", "assets/products/bp04z-3.webp", "assets/products/bp04z-4.webp", "assets/products/bp04z-5.webp"],
    sizes: [{ label: "Beige / 30cm L x 50cm H", price: 81 }, { label: "Light Coffee / 30cm L x 50cm H", price: 81 }, { label: "Grey / 30cm L x 50cm H", price: 81 }, { label: "Dark Pink / 30cm L x 50cm H", price: 81 }, { label: "Beige / 45cm L x 45cm H", price: 100 }, { label: "Light Coffee / 45cm L x 45cm H", price: 100 }, { label: "Grey / 45cm L x 45cm H", price: 100 }, { label: "Dark Pink / 45cm L x 45cm H", price: 100 }, { label: "Beige / 50cm L  x 50cm H", price: 115 }, { label: "Light Coffee / 50cm L  x 50cm H", price: 115 }, { label: "Grey / 50cm L  x 50cm H", price: 115 }, { label: "Dark Pink / 50cm L  x 50cm H", price: 115 }],
    desc: "A plush cover in beige and other tones, lumbar or square.",
    features: [
      "Plush pile",
      "Lumbar and square",
      "Several colourways"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "12", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp05z", name: "Two-Tone Cushion Cover", cat: "Bedroom", room: "Bedroom", price: 83, memberPrice: 75, sku: "SH-10709", tag: "New", ph: "", img: "assets/products/bp05z.webp",
    imgs: ["assets/products/bp05z.webp", "assets/products/bp05z-2.webp", "assets/products/bp05z-3.webp", "assets/products/bp05z-4.webp", "assets/products/bp05z-5.webp"],
    sizes: [{ label: "Yellow / 30 x 50cm", price: 83 }, { label: "White / 30 x 50cm", price: 83 }, { label: "Red / 30 x 50cm", price: 83 }, { label: "Purple / 30 x 50cm", price: 83 }, { label: "Navy / 30 x 50cm", price: 83 }, { label: "Light Grey / 30 x 50cm", price: 83 }, { label: "Light Coffee / 30 x 50cm", price: 83 }, { label: "Coffee / 30 x 50cm", price: 83 }, { label: "Pink / 30 x 50cm", price: 83 }, { label: "Khaki / 30 x 50cm", price: 83 }, { label: "Black / 30 x 50cm", price: 83 }, { label: "Yellow / 45 x 45cm", price: 102 }, { label: "White / 45 x 45cm", price: 102 }, { label: "Red / 45 x 45cm", price: 102 }, { label: "Purple / 45 x 45cm", price: 102 }, { label: "Navy / 45 x 45cm", price: 102 }, { label: "Light Grey / 45 x 45cm", price: 102 }, { label: "Light Coffee / 45 x 45cm", price: 102 }, { label: "Coffee / 45 x 45cm", price: 102 }, { label: "Pink / 45 x 45cm", price: 102 }, { label: "Khaki / 45 x 45cm", price: 102 }, { label: "Black / 45 x 45cm", price: 102 }],
    desc: "Yellow or white, lumbar or square.",
    features: [
      "Lumbar and square",
      "Yellow or White",
      "Cover only"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "22", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp06z", name: "Cushion Cover (45 or 55cm)", cat: "Bedroom", room: "Bedroom", price: 87, memberPrice: 78, sku: "SH-10710", tag: "New", ph: "", img: "assets/products/bp06z.webp",
    imgs: ["assets/products/bp06z.webp", "assets/products/bp06z-2.webp", "assets/products/bp06z-3.webp", "assets/products/bp06z-4.webp", "assets/products/bp06z-5.webp"],
    sizes: [{ label: "Yellow / 45 x 45cm", price: 87 }, { label: "Orange / 45 x 45cm", price: 87 }, { label: "Taupe / 45 x 45cm", price: 87 }, { label: "Coffee / 45 x 45cm", price: 87 }, { label: "Deep Grey / 45 x 45cm", price: 87 }, { label: "Light Grey / 45 x 45cm", price: 87 }, { label: "Beige / 45 x 45cm", price: 87 }, { label: "Green / 45 x 45cm", price: 87 }, { label: "Blue / 45 x 45cm", price: 87 }, { label: "Black / 45 x 45cm", price: 87 }, { label: "Rose / 45 x 45cm", price: 87 }, { label: "Red / 45 x 45cm", price: 87 }, { label: "Purple / 45 x 45cm", price: 87 }, { label: "Yellow / 55 x 55cm", price: 109 }, { label: "Orange / 55 x 55cm", price: 109 }, { label: "Taupe / 55 x 55cm", price: 109 }, { label: "Coffee / 55 x 55cm", price: 109 }, { label: "Deep Grey / 55 x 55cm", price: 109 }, { label: "Light Grey / 55 x 55cm", price: 109 }, { label: "Beige / 55 x 55cm", price: 109 }, { label: "Green / 55 x 55cm", price: 109 }, { label: "Blue / 55 x 55cm", price: 109 }, { label: "Black / 55 x 55cm", price: 109 }, { label: "Rose / 55 x 55cm", price: 109 }, { label: "Red / 55 x 55cm", price: 109 }, { label: "Purple / 55 x 55cm", price: 109 }],
    desc: "Yellow or orange, 45cm or 55cm square. The 55cm is the size most sofas actually need.",
    features: [
      "45cm and 55cm square",
      "Yellow or Orange",
      "Cover only"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "26", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp07z", optionLabel: "Colour", name: "Faux Fur Cushion Cover", cat: "Bedroom", room: "Bedroom", price: 87, memberPrice: 78, sku: "SH-10711", tag: "New", ph: "", img: "assets/products/bp07z.webp",
    imgs: ["assets/products/bp07z.webp", "assets/products/bp07z-2.webp", "assets/products/bp07z-3.webp", "assets/products/bp07z-4.webp", "assets/products/bp07z-5.webp"],
    sizes: [{ label: "Grey", price: 87 }, { label: "White", price: 87 }, { label: "Green", price: 87 }, { label: "Pink", price: 87 }, { label: "Orange", price: 87 }, { label: "Beige", price: 87 }, { label: "Brown", price: 87 }, { label: "Black", price: 87 }, { label: "Light Brown", price: 87 }],
    desc: "Faux fur in grey, white, green, pink, orange, beige or brown.",
    features: [
      "Faux fur",
      "Seven colourways",
      "Cover only"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Faux fur", "Options": "9", "Room": "Bedroom" },
    care: "Shake it out rather than washing it. Spot clean with a barely damp cloth and let it air dry away from heat, then brush the pile back up." },

  { id: "bp08z", name: "Pillow Cover in Red or Pink", cat: "Bedroom", room: "Bedroom", price: 87, memberPrice: 78, sku: "SH-10712", tag: "New", ph: "", img: "assets/products/bp08z.webp",
    imgs: ["assets/products/bp08z.webp", "assets/products/bp08z-2.webp", "assets/products/bp08z-3.webp", "assets/products/bp08z-4.webp", "assets/products/bp08z-5.webp"],
    sizes: [{ label: "Red / 30cm x 50cm", price: 87 }, { label: "Pink / 30cm x 50cm", price: 87 }, { label: "White / 30cm x 50cm", price: 87 }, { label: "Brown / 30cm x 50cm", price: 87 }, { label: "Blue / 30cm x 50cm", price: 87 }, { label: "Khaki / 30cm x 50cm", price: 87 }, { label: "Green / 30cm x 50cm", price: 87 }, { label: "Red / 40cm x 40cm", price: 111 }, { label: "Pink / 40cm x 40cm", price: 111 }, { label: "White / 40cm x 40cm", price: 111 }, { label: "Brown / 40cm x 40cm", price: 111 }, { label: "Blue / 40cm x 40cm", price: 111 }, { label: "Khaki / 40cm x 40cm", price: 111 }, { label: "Green / 40cm x 40cm", price: 111 }],
    desc: "Red or pink, lumbar or square.",
    features: [
      "Lumbar and square",
      "Red or Pink",
      "Cover only"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "14", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp09z", optionLabel: "Colour", sizeImg: {"White":"assets/products/bp09z-5.webp","Black":"assets/products/bp09z-3.webp","Grey":"assets/products/bp09z-4.webp"}, name: "Plush Cushion Cover in Four Tones", cat: "Bedroom", room: "Bedroom", price: 87, memberPrice: 78, sku: "SH-10713", tag: "New", ph: "", img: "assets/products/bp09z.webp",
    imgs: ["assets/products/bp09z.webp", "assets/products/bp09z-2.webp", "assets/products/bp09z-3.webp", "assets/products/bp09z-4.webp", "assets/products/bp09z-5.webp"],
    sizes: [{ label: "White", price: 87 }, { label: "Black", price: 87 }, { label: "Grey", price: 87 }, { label: "Pink", price: 87 }],
    desc: "White, black, grey or pink, plush pile.",
    features: [
      "Plush pile",
      "Four colourways",
      "Cover only"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "4", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp10z", name: "Cushion Cover (40cm)", cat: "Bedroom", room: "Bedroom", price: 91, memberPrice: 82, sku: "SH-10714", tag: "New", ph: "", img: "assets/products/bp10z.webp",
    imgs: ["assets/products/bp10z.webp", "assets/products/bp10z-2.webp", "assets/products/bp10z-3.webp", "assets/products/bp10z-4.webp", "assets/products/bp10z-5.webp"],
    sizes: [{ label: "40cm / Yellow", price: 91 }, { label: "40cm / Beige", price: 91 }, { label: "40cm / Green", price: 91 }, { label: "40cm / Rust", price: 91 }, { label: "40cm / Blue", price: 91 }, { label: "40cm / White", price: 91 }, { label: "40cm / Dark Grey", price: 91 }, { label: "40cm / Black", price: 91 }, { label: "45cm / Yellow", price: 104 }, { label: "45cm / Beige", price: 104 }, { label: "45cm / Green", price: 104 }, { label: "45cm / Rust", price: 104 }, { label: "45cm / Blue", price: 104 }, { label: "45cm / White", price: 104 }, { label: "45cm / Dark Grey", price: 104 }, { label: "45cm / Black", price: 104 }, { label: "50cm / Yellow", price: 124 }, { label: "50cm / Beige", price: 124 }, { label: "50cm / Green", price: 124 }, { label: "50cm / Rust", price: 124 }, { label: "50cm / Blue", price: 124 }, { label: "50cm / White", price: 124 }, { label: "50cm / Dark Grey", price: 124 }, { label: "50cm / Black", price: 124 }],
    desc: "40cm square in yellow, beige or green.",
    features: [
      "40cm square",
      "Three colourways",
      "Cover only"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "24", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp11z", name: "Patterned Cushion Cover (45cm)", cat: "Bedroom", room: "Bedroom", price: 91, memberPrice: 82, sku: "SH-10715", tag: "New", ph: "", img: "assets/products/bp11z.webp",
    imgs: ["assets/products/bp11z.webp", "assets/products/bp11z-2.webp", "assets/products/bp11z-3.webp", "assets/products/bp11z-4.webp", "assets/products/bp11z-5.webp"],
    sizes: [{ label: "1 / 45cm x 45cm", price: 91 }, { label: "2 / 45cm x 45cm", price: 91 }, { label: "3 / 45cm x 45cm", price: 91 }, { label: "4 / 45cm x 45cm", price: 91 }, { label: "5 / 45cm x 45cm", price: 91 }, { label: "6 / 45cm x 45cm", price: 91 }],
    desc: "Three patterns at 45cm square, meant to be mixed.",
    features: [
      "Three patterns",
      "45cm square",
      "Mix across a sofa"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "6", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp12z", name: "Cushion Cover in Yellow", cat: "Bedroom", room: "Bedroom", price: 93, memberPrice: 84, sku: "SH-10716", tag: "New", ph: "", img: "assets/products/bp12z.webp",
    imgs: ["assets/products/bp12z.webp", "assets/products/bp12z-2.webp", "assets/products/bp12z-3.webp", "assets/products/bp12z-4.webp", "assets/products/bp12z-5.webp"],
    sizes: [{ label: "Yellow / 30 x 50cm", price: 93 }, { label: "Beige / 30 x 50cm", price: 93 }, { label: "Grey / 30 x 50cm", price: 93 }, { label: "Blue / 30 x 50cm", price: 93 }, { label: "Black / 30 x 50cm", price: 93 }, { label: "Yellow / 45 x 45cm", price: 106 }, { label: "Beige / 45 x 45cm", price: 106 }, { label: "Grey / 45 x 45cm", price: 106 }, { label: "Blue / 45 x 45cm", price: 106 }, { label: "Black / 45 x 45cm", price: 106 }, { label: "Yellow / 50 x 50cm", price: 117 }, { label: "Beige / 50 x 50cm", price: 117 }, { label: "Grey / 50 x 50cm", price: 117 }, { label: "Blue / 50 x 50cm", price: 117 }, { label: "Black / 50 x 50cm", price: 117 }, { label: "Yellow / 60 x 60cm", price: 128 }, { label: "Beige / 60 x 60cm", price: 128 }, { label: "Grey / 60 x 60cm", price: 128 }, { label: "Blue / 60 x 60cm", price: 128 }, { label: "Black / 60 x 60cm", price: 128 }],
    desc: "Yellow, lumbar or square.",
    features: [
      "Lumbar and square",
      "Yellow colourway",
      "Cover only"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "20", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp13z", name: "Diamond Quilted Cushion Case", cat: "Bedroom", room: "Bedroom", price: 106, memberPrice: 95, sku: "SH-10717", tag: "New", ph: "", img: "assets/products/bp13z.webp",
    imgs: ["assets/products/bp13z.webp", "assets/products/bp13z-2.webp", "assets/products/bp13z-3.webp", "assets/products/bp13z-4.webp", "assets/products/bp13z-5.webp"],
    sizes: [{ label: "Light Blue / 30cm x 50cm", price: 106 }, { label: "Aqua Blue / 30cm x 50cm", price: 106 }, { label: "Green / 30cm x 50cm", price: 106 }, { label: "Dark Pink / 30cm x 50cm", price: 106 }, { label: "Red / 30cm x 50cm", price: 106 }, { label: "Light Pink / 30cm x 50cm", price: 106 }, { label: "Khaki / 30cm x 50cm", price: 106 }, { label: "Grey / 30cm x 50cm", price: 106 }, { label: "Blue / 30cm x 50cm", price: 106 }, { label: "Cream / 30cm x 50cm", price: 106 }, { label: "Light Blue / 45cm X 45cm", price: 115 }, { label: "Aqua Blue / 45cm X 45cm", price: 115 }, { label: "Green / 45cm X 45cm", price: 115 }, { label: "Dark Pink / 45cm X 45cm", price: 115 }, { label: "Red / 45cm X 45cm", price: 115 }, { label: "Light Pink / 45cm X 45cm", price: 115 }, { label: "Khaki / 45cm X 45cm", price: 115 }, { label: "Grey / 45cm X 45cm", price: 115 }, { label: "Blue / 45cm X 45cm", price: 115 }, { label: "Cream / 45cm X 45cm", price: 115 }],
    desc: "Light blue or aqua, lumbar, with a diamond quilt.",
    features: [
      "Diamond quilting",
      "Light Blue or Aqua",
      "Lumbar size"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "20", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp14z", name: "Velvet Cushion Cover (45cm)", cat: "Bedroom", room: "Bedroom", price: 106, memberPrice: 95, sku: "SH-10718", tag: "New", ph: "", img: "assets/products/bp14z.webp",
    imgs: ["assets/products/bp14z.webp", "assets/products/bp14z-2.webp", "assets/products/bp14z-3.webp", "assets/products/bp14z-4.webp", "assets/products/bp14z-5.webp"],
    sizes: [{ label: "45x45cm", price: 106 }],
    desc: "Velvet, 45cm square.",
    features: [
      "Velvet",
      "45 x 45cm",
      "Cover only"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "1", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp15z", name: "Cushion Cover in Six Colours", cat: "Bedroom", room: "Bedroom", price: 106, memberPrice: 95, sku: "SH-10719", tag: "New", ph: "", img: "assets/products/bp15z.webp",
    imgs: ["assets/products/bp15z.webp", "assets/products/bp15z-2.webp", "assets/products/bp15z-3.webp", "assets/products/bp15z-4.webp", "assets/products/bp15z-5.webp"],
    sizes: [{ label: "Grey", price: 106 }, { label: "Tangerine", price: 106 }, { label: "Coffee", price: 106 }, { label: "Deep Green", price: 106 }, { label: "Orange", price: 106 }, { label: "Blue", price: 106 }, { label: "Pink", price: 106 }],
    desc: "Grey, tangerine, coffee, deep green, orange and more.",
    features: [
      "Six colourways",
      "Includes tangerine and deep green",
      "Cover only"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "7", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp16z", name: "Cushion Cover in White or Grey", cat: "Bedroom", room: "Bedroom", price: 107, memberPrice: 96, sku: "SH-10720", tag: "New", ph: "", img: "assets/products/bp16z.webp",
    imgs: ["assets/products/bp16z.webp", "assets/products/bp16z-2.webp", "assets/products/bp16z-3.webp", "assets/products/bp16z-4.webp", "assets/products/bp16z-5.webp"],
    sizes: [{ label: "White / 50 x 30cm", price: 107 }, { label: "White / 45 x 45cm", price: 107 }, { label: "Grey / 50 x 30cm", price: 107 }, { label: "Grey / 45 x 45cm", price: 107 }, { label: "Khaki / 50 x 30cm", price: 107 }, { label: "Khaki / 45 x 45cm", price: 107 }, { label: "Green / 50 x 30cm", price: 107 }, { label: "Green / 45 x 45cm", price: 107 }, { label: "Navy / 50 x 30cm", price: 107 }, { label: "Navy / 45 x 45cm", price: 107 }, { label: "Pink / 50 x 30cm", price: 107 }, { label: "Pink / 45 x 45cm", price: 107 }],
    desc: "White or grey, lumbar or square.",
    features: [
      "Lumbar and square",
      "White or Grey",
      "Cover only"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "12", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp17z", name: "Cushion Cover in Off White or Black", cat: "Bedroom", room: "Bedroom", price: 120, memberPrice: 108, sku: "SH-10721", tag: "New", ph: "", img: "assets/products/bp17z.webp",
    imgs: ["assets/products/bp17z.webp", "assets/products/bp17z-2.webp", "assets/products/bp17z-3.webp", "assets/products/bp17z-4.webp", "assets/products/bp17z-5.webp"],
    sizes: [{ label: "Off White / 45cm x 45cm", price: 120 }, { label: "Black / 45cm x 45cm", price: 120 }],
    desc: "Off white or black, 45cm square.",
    features: [
      "45cm square",
      "Off White or Black",
      "Cover only"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "2", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp18z", name: "Tan Blanket (Three Sizes)", cat: "Bedroom", room: "Bedroom", price: 124, memberPrice: 112, sku: "SH-10722", tag: "New", ph: "", img: "assets/products/bp18z.webp",
    imgs: ["assets/products/bp18z.webp", "assets/products/bp18z-2.webp", "assets/products/bp18z-3.webp", "assets/products/bp18z-4.webp", "assets/products/bp18z-5.webp"],
    sizes: [{ label: "Tan / 100cm x 150cm", price: 124 }, { label: "Pink / 100cm x 150cm", price: 124 }, { label: "Red / 100cm x 150cm", price: 124 }, { label: "Grey / 100cm x 150cm", price: 124 }, { label: "Purple / 100cm x 150cm", price: 124 }, { label: "Yellow / 100cm x 150cm", price: 124 }, { label: "Blue / 100cm x 150cm", price: 124 }, { label: "Navy / 100cm x 150cm", price: 124 }, { label: "Tan / 150cm x 200cm", price: 204 }, { label: "Pink / 150cm x 200cm", price: 204 }, { label: "Red / 150cm x 200cm", price: 204 }, { label: "Grey / 150cm x 200cm", price: 204 }, { label: "Purple / 150cm x 200cm", price: 204 }, { label: "Yellow / 150cm x 200cm", price: 204 }, { label: "Blue / 150cm x 200cm", price: 204 }, { label: "Navy / 150cm x 200cm", price: 204 }, { label: "Tan / 180cm x 200cm", price: 230 }, { label: "Pink / 180cm x 200cm", price: 230 }, { label: "Red / 180cm x 200cm", price: 230 }, { label: "Grey / 180cm x 200cm", price: 230 }, { label: "Purple / 180cm x 200cm", price: 230 }, { label: "Yellow / 180cm x 200cm", price: 230 }, { label: "Blue / 180cm x 200cm", price: 230 }, { label: "Navy / 180cm x 200cm", price: 230 }, { label: "Tan / 200cm x 230cm", price: 272 }, { label: "Pink / 200cm x 230cm", price: 272 }, { label: "Red / 200cm x 230cm", price: 272 }, { label: "Grey / 200cm x 230cm", price: 272 }, { label: "Purple / 200cm x 230cm", price: 272 }, { label: "Yellow / 200cm x 230cm", price: 272 }, { label: "Blue / 200cm x 230cm", price: 272 }, { label: "Navy / 200cm x 230cm", price: 272 }],
    desc: "Tan, from a 100 x 150cm throw to a full bed size.",
    features: [
      "100 x 150cm to bed size",
      "Tan colourway",
      "Throw or bed blanket"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "32", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp19z", name: "Cushion Cover (S, M or L)", cat: "Bedroom", room: "Bedroom", price: 124, memberPrice: 112, sku: "SH-10723", tag: "New", ph: "", img: "assets/products/bp19z.webp",
    imgs: ["assets/products/bp19z.webp", "assets/products/bp19z-2.webp", "assets/products/bp19z-3.webp"],
    sizes: [{ label: "S", price: 124 }, { label: "M", price: 124 }, { label: "L", price: 124 }],
    desc: "Three sizes of the same cover.",
    features: [
      "Small, Medium and Large",
      "One design",
      "Cover only"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "3", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp20z", name: "Velvet Plaid Blanket", cat: "Bedroom", room: "Bedroom", price: 165, memberPrice: 148, sku: "SH-10724", tag: "New", ph: "", img: "assets/products/bp20z.webp",
    imgs: ["assets/products/bp20z.webp", "assets/products/bp20z-2.webp", "assets/products/bp20z-3.webp", "assets/products/bp20z-4.webp", "assets/products/bp20z-5.webp"],
    sizes: [{ label: "Green / 70cm x 100cm", price: 165 }, { label: "Blue / 70cm x 100cm", price: 165 }, { label: "Yellow / 70cm x 100cm", price: 165 }, { label: "Pink / 70cm x 100cm", price: 165 }, { label: "Purple / 70cm x 100cm", price: 165 }, { label: "Beige / 70cm x 100cm", price: 165 }, { label: "Khaki / 70cm x 100cm", price: 165 }, { label: "Grey / 70cm x 100cm", price: 165 }, { label: "Green / 100cm x 150cm", price: 322 }, { label: "Blue / 100cm x 150cm", price: 322 }, { label: "Yellow / 100cm x 150cm", price: 322 }, { label: "Pink / 100cm x 150cm", price: 322 }, { label: "Purple / 100cm x 150cm", price: 322 }, { label: "Beige / 100cm x 150cm", price: 322 }, { label: "Khaki / 100cm x 150cm", price: 322 }, { label: "Grey / 100cm x 150cm", price: 322 }, { label: "Green / 150cm x 200cm", price: 406 }, { label: "Blue / 150cm x 200cm", price: 406 }, { label: "Yellow / 150cm x 200cm", price: 406 }, { label: "Pink / 150cm x 200cm", price: 406 }, { label: "Purple / 150cm x 200cm", price: 406 }, { label: "Beige / 150cm x 200cm", price: 406 }, { label: "Khaki / 150cm x 200cm", price: 406 }, { label: "Grey / 150cm x 200cm", price: 406 }],
    desc: "Velvet plaid in green, from a 70 x 100cm lap throw upward.",
    features: [
      "Velvet plaid",
      "From 70 x 100cm",
      "Green and other tones"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "24", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp21z", name: "Faux Fur Cushion Cover (45cm)", cat: "Bedroom", room: "Bedroom", price: 165, memberPrice: 148, sku: "SH-10725", tag: "New", ph: "", img: "assets/products/bp21z.webp",
    imgs: ["assets/products/bp21z.webp", "assets/products/bp21z-2.webp", "assets/products/bp21z-3.webp", "assets/products/bp21z-4.webp", "assets/products/bp21z-5.webp"],
    sizes: [{ label: "1 / 45 x 45cm", price: 165 }, { label: "2 / 45 x 45cm", price: 165 }, { label: "3 / 45 x 45cm", price: 165 }, { label: "4 / 45 x 45cm", price: 165 }, { label: "5 / 45 x 45cm", price: 165 }, { label: "6 / 45 x 45cm", price: 165 }],
    desc: "Four faux fur designs at 45cm square.",
    features: [
      "Faux fur",
      "Four designs",
      "45 x 45cm"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Faux fur", "Options": "6", "Room": "Bedroom" },
    care: "Shake it out rather than washing it. Spot clean with a barely damp cloth and let it air dry away from heat, then brush the pile back up." },

  { id: "bp22z", name: "Faux Fur Blanket", cat: "Bedroom", room: "Bedroom", price: 222, memberPrice: 200, sku: "SH-10726", tag: "New", ph: "", img: "assets/products/bp22z.webp",
    imgs: ["assets/products/bp22z.webp", "assets/products/bp22z-2.webp", "assets/products/bp22z-3.webp", "assets/products/bp22z-4.webp", "assets/products/bp22z-5.webp"],
    sizes: [{ label: "60 x 150cm", price: 222 }, { label: "150 x 180cm", price: 593 }, { label: "150 x 200cm", price: 667 }, { label: "150 x 220cm", price: 741 }],
    desc: "Faux fur from a 60 x 150cm runner to a 150 x 200cm bed throw.",
    features: [
      "Faux fur",
      "60 x 150cm to 150 x 200cm",
      "Runner or bed throw"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Faux fur", "Options": "4", "Room": "Bedroom" },
    care: "Shake it out rather than washing it. Spot clean with a barely damp cloth and let it air dry away from heat, then brush the pile back up." },

  { id: "bp23z", name: "Two-Tone Blanket", cat: "Bedroom", room: "Bedroom", price: 230, memberPrice: 207, sku: "SH-10727", tag: "New", ph: "", img: "assets/products/bp23z.webp",
    imgs: ["assets/products/bp23z.webp", "assets/products/bp23z-2.webp", "assets/products/bp23z-3.webp", "assets/products/bp23z-4.webp", "assets/products/bp23z-5.webp"],
    sizes: [{ label: "Khaki + White / 100 x 150cm", price: 230 }, { label: "Grey + White / 100 x 150cm", price: 230 }, { label: "Green + White / 100 x 150cm", price: 230 }, { label: "Pink + White / 100 x 150cm", price: 230 }, { label: "Ocean Blue + White / 100 x 150cm", price: 230 }, { label: "Cream + White / 100 x 150cm", price: 230 }, { label: "Blue + White / 100 x 150cm", price: 230 }, { label: "Pink / 100 x 150cm", price: 230 }, { label: "Grey / 100 x 150cm", price: 230 }, { label: "Purple / 100 x 150cm", price: 230 }, { label: "Khaki / 100 x 150cm", price: 230 }, { label: "Blue / 100 x 150cm", price: 230 }, { label: "Green / 100 x 150cm", price: 230 }, { label: "Khaki + White / 150 x 200cm", price: 304 }, { label: "Grey + White / 150 x 200cm", price: 304 }, { label: "Green + White / 150 x 200cm", price: 304 }, { label: "Pink + White / 150 x 200cm", price: 304 }, { label: "Ocean Blue + White / 150 x 200cm", price: 304 }, { label: "Cream + White / 150 x 200cm", price: 304 }, { label: "Blue + White / 150 x 200cm", price: 304 }, { label: "Pink / 150 x 200cm", price: 304 }, { label: "Grey / 150 x 200cm", price: 304 }, { label: "Purple / 150 x 200cm", price: 304 }, { label: "Khaki / 150 x 200cm", price: 304 }, { label: "Blue / 150 x 200cm", price: 304 }, { label: "Green / 150 x 200cm", price: 304 }, { label: "Khaki + White / 180 x 200cm", price: 350 }, { label: "Grey + White / 180 x 200cm", price: 350 }, { label: "Green + White / 180 x 200cm", price: 350 }, { label: "Pink + White / 180 x 200cm", price: 350 }, { label: "Ocean Blue + White / 180 x 200cm", price: 350 }, { label: "Cream + White / 180 x 200cm", price: 350 }, { label: "Blue + White / 180 x 200cm", price: 350 }, { label: "Pink / 180 x 200cm", price: 350 }, { label: "Grey / 180 x 200cm", price: 350 }, { label: "Purple / 180 x 200cm", price: 350 }, { label: "Khaki / 180 x 200cm", price: 350 }, { label: "Blue / 180 x 200cm", price: 350 }, { label: "Green / 180 x 200cm", price: 350 }, { label: "Khaki + White / 200 x 230cm", price: 439 }, { label: "Grey + White / 200 x 230cm", price: 439 }, { label: "Green + White / 200 x 230cm", price: 439 }, { label: "Pink + White / 200 x 230cm", price: 439 }, { label: "Ocean Blue + White / 200 x 230cm", price: 439 }, { label: "Cream + White / 200 x 230cm", price: 439 }, { label: "Blue + White / 200 x 230cm", price: 439 }, { label: "Pink / 200 x 230cm", price: 439 }, { label: "Grey / 200 x 230cm", price: 439 }, { label: "Purple / 200 x 230cm", price: 439 }, { label: "Khaki / 200 x 230cm", price: 439 }, { label: "Blue / 200 x 230cm", price: 439 }, { label: "Green / 200 x 230cm", price: 439 }],
    desc: "Khaki and white, from 100 x 150cm.",
    features: [
      "Khaki and White",
      "From 100 x 150cm",
      "Throw or bed blanket"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "52", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp24z", name: "Plush Blanket in Grey", cat: "Bedroom", room: "Bedroom", price: 231, memberPrice: 208, sku: "SH-10728", tag: "New", ph: "", img: "assets/products/bp24z.webp",
    imgs: ["assets/products/bp24z.webp", "assets/products/bp24z-2.webp", "assets/products/bp24z-3.webp", "assets/products/bp24z-4.webp", "assets/products/bp24z-5.webp"],
    sizes: [{ label: "Grey / 100cm x 120cm", price: 231 }, { label: "Ocean Green / 100cm x 120cm", price: 231 }, { label: "Pink / 100cm x 120cm", price: 231 }, { label: "Orange / 100cm x 120cm", price: 231 }, { label: "Green / 100cm x 120cm", price: 231 }, { label: "Blue / 100cm x 120cm", price: 231 }, { label: "Khaki / 100cm x 120cm", price: 231 }, { label: "Charcoal Grey / 100cm x 120cm", price: 231 }, { label: "Navy Blue / 100cm x 120cm", price: 231 }, { label: "Light Pink / 100cm x 120cm", price: 231 }, { label: "Grey / 150cm x 200cm", price: 444 }, { label: "Ocean Green / 150cm x 200cm", price: 444 }, { label: "Pink / 150cm x 200cm", price: 444 }, { label: "Orange / 150cm x 200cm", price: 444 }, { label: "Green / 150cm x 200cm", price: 444 }, { label: "Blue / 150cm x 200cm", price: 444 }, { label: "Khaki / 150cm x 200cm", price: 444 }, { label: "Charcoal Grey / 150cm x 200cm", price: 444 }, { label: "Navy Blue / 150cm x 200cm", price: 444 }, { label: "Light Pink / 150cm x 200cm", price: 444 }, { label: "Grey / 180cm x 200cm", price: 537 }, { label: "Ocean Green / 180cm x 200cm", price: 537 }, { label: "Pink / 180cm x 200cm", price: 537 }, { label: "Orange / 180cm x 200cm", price: 537 }, { label: "Green / 180cm x 200cm", price: 537 }, { label: "Blue / 180cm x 200cm", price: 537 }, { label: "Khaki / 180cm x 200cm", price: 537 }, { label: "Charcoal Grey / 180cm x 200cm", price: 537 }, { label: "Navy Blue / 180cm x 200cm", price: 537 }, { label: "Light Pink / 180cm x 200cm", price: 537 }],
    desc: "Grey plush, from a 100 x 120cm throw to 150 x 200cm.",
    features: [
      "Plush pile",
      "100 x 120cm to 150 x 200cm",
      "Grey colourway"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "30", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp25z", name: "Lake Green Blanket", cat: "Bedroom", room: "Bedroom", price: 237, memberPrice: 213, sku: "SH-10729", tag: "New", ph: "", img: "assets/products/bp25z.webp",
    imgs: ["assets/products/bp25z.webp", "assets/products/bp25z-2.webp", "assets/products/bp25z-3.webp", "assets/products/bp25z-4.webp", "assets/products/bp25z-5.webp"],
    sizes: [{ label: "Lake Green / 120 x 200cm", price: 237 }, { label: "Green / 120 x 200cm", price: 237 }, { label: "Off White / 120 x 200cm", price: 237 }, { label: "Coffee / 120 x 200cm", price: 237 }, { label: "Pink / 120 x 200cm", price: 237 }, { label: "Warm Orange / 120 x 200cm", price: 237 }, { label: "Purple / 120 x 200cm", price: 237 }, { label: "Lake Green / 150 x 200cm", price: 348 }, { label: "Green / 150 x 200cm", price: 348 }, { label: "Off White / 150 x 200cm", price: 348 }, { label: "Coffee / 150 x 200cm", price: 348 }, { label: "Pink / 150 x 200cm", price: 348 }, { label: "Warm Orange / 150 x 200cm", price: 348 }, { label: "Purple / 150 x 200cm", price: 348 }, { label: "Lake Green / 180 x 200cm", price: 389 }, { label: "Green / 180 x 200cm", price: 389 }, { label: "Off White / 180 x 200cm", price: 389 }, { label: "Coffee / 180 x 200cm", price: 389 }, { label: "Pink / 180 x 200cm", price: 389 }, { label: "Warm Orange / 180 x 200cm", price: 389 }, { label: "Purple / 180 x 200cm", price: 389 }, { label: "Lake Green / 200 x 230cm", price: 441 }, { label: "Green / 200 x 230cm", price: 441 }, { label: "Off White / 200 x 230cm", price: 441 }, { label: "Coffee / 200 x 230cm", price: 441 }, { label: "Pink / 200 x 230cm", price: 441 }, { label: "Warm Orange / 200 x 230cm", price: 441 }, { label: "Purple / 200 x 230cm", price: 441 }],
    desc: "Lake green, 120 x 200cm or 150cm wide.",
    features: [
      "Lake Green",
      "120 x 200cm upward",
      "Bed or sofa"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "28", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp26z", name: "Velvet Faux Fur Blanket", cat: "Bedroom", room: "Bedroom", price: 256, memberPrice: 230, sku: "SH-10730", tag: "New", ph: "", img: "assets/products/bp26z.webp",
    imgs: ["assets/products/bp26z.webp", "assets/products/bp26z-2.webp", "assets/products/bp26z-3.webp", "assets/products/bp26z-4.webp", "assets/products/bp26z-5.webp"],
    sizes: [{ label: "Black / 80cm x 120cm", price: 256 }, { label: "Chocolate / 80cm x 120cm", price: 256 }, { label: "Grey / 80cm x 120cm", price: 256 }, { label: "Khaki / 80cm x 120cm", price: 256 }, { label: "Black / 130cm x 160cm", price: 383 }, { label: "Chocolate / 130cm x 160cm", price: 383 }, { label: "Grey / 130cm x 160cm", price: 383 }, { label: "Khaki / 130cm x 160cm", price: 383 }, { label: "Black / 160cm x 200cm", price: 509 }, { label: "Chocolate / 160cm x 200cm", price: 509 }, { label: "Grey / 160cm x 200cm", price: 509 }, { label: "Khaki / 160cm x 200cm", price: 509 }],
    desc: "Velvet-backed faux fur in black, from 80 x 120cm.",
    features: [
      "Faux fur with velvet backing",
      "From 80 x 120cm",
      "Black and other tones"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Faux fur", "Options": "12", "Room": "Bedroom" },
    care: "Shake it out rather than washing it. Spot clean with a barely damp cloth and let it air dry away from heat, then brush the pile back up." },

  { id: "bp27z", name: "Ivory Blanket (Bed Size)", cat: "Bedroom", room: "Bedroom", price: 267, memberPrice: 240, sku: "SH-10731", tag: "New", ph: "", img: "assets/products/bp27z.webp",
    imgs: ["assets/products/bp27z.webp", "assets/products/bp27z-2.webp", "assets/products/bp27z-3.webp", "assets/products/bp27z-4.webp", "assets/products/bp27z-5.webp"],
    sizes: [{ label: "Ivory / 120cm x 200cm", price: 267 }, { label: "Beige / 120cm x 200cm", price: 267 }, { label: "Butterscotch / 120cm x 200cm", price: 267 }, { label: "Blush Pink / 120cm x 200cm", price: 267 }, { label: "Grey / 120cm x 200cm", price: 267 }, { label: "Moss Green / 120cm x 200cm", price: 267 }, { label: "Steel Blue / 120cm x 200cm", price: 267 }, { label: "Rust / 120cm x 200cm", price: 267 }, { label: "Lavender / 120cm x 200cm", price: 267 }, { label: "Charcoal Grey / 120cm x 200cm", price: 267 }, { label: "Ivory / 150cm x 200cm", price: 300 }, { label: "Beige / 150cm x 200cm", price: 300 }, { label: "Butterscotch / 150cm x 200cm", price: 300 }, { label: "Blush Pink / 150cm x 200cm", price: 300 }, { label: "Grey / 150cm x 200cm", price: 300 }, { label: "Moss Green / 150cm x 200cm", price: 300 }, { label: "Steel Blue / 150cm x 200cm", price: 300 }, { label: "Rust / 150cm x 200cm", price: 300 }, { label: "Lavender / 150cm x 200cm", price: 300 }, { label: "Charcoal Grey / 150cm x 200cm", price: 300 }, { label: "Ivory / 180cm x 200cm", price: 348 }, { label: "Beige / 180cm x 200cm", price: 348 }, { label: "Butterscotch / 180cm x 200cm", price: 348 }, { label: "Blush Pink / 180cm x 200cm", price: 348 }, { label: "Grey / 180cm x 200cm", price: 348 }, { label: "Moss Green / 180cm x 200cm", price: 348 }, { label: "Steel Blue / 180cm x 200cm", price: 348 }, { label: "Rust / 180cm x 200cm", price: 348 }, { label: "Lavender / 180cm x 200cm", price: 348 }, { label: "Charcoal Grey / 180cm x 200cm", price: 348 }, { label: "Ivory / 200cm x 230cm", price: 378 }, { label: "Beige / 200cm x 230cm", price: 378 }, { label: "Butterscotch / 200cm x 230cm", price: 378 }, { label: "Blush Pink / 200cm x 230cm", price: 378 }, { label: "Grey / 200cm x 230cm", price: 378 }, { label: "Moss Green / 200cm x 230cm", price: 378 }, { label: "Steel Blue / 200cm x 230cm", price: 378 }, { label: "Rust / 200cm x 230cm", price: 378 }, { label: "Lavender / 200cm x 230cm", price: 378 }, { label: "Charcoal Grey / 200cm x 230cm", price: 378 }],
    desc: "Ivory at 120 x 200cm or 150 x 200cm.",
    features: [
      "Ivory colourway",
      "120 and 150cm widths",
      "Bed size"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "40", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp28z", name: "Faux Fur Pillows (Five Designs)", cat: "Bedroom", room: "Bedroom", price: 272, memberPrice: 245, sku: "SH-10732", tag: "New", ph: "", img: "assets/products/bp28z.webp",
    imgs: ["assets/products/bp28z.webp", "assets/products/bp28z-2.webp", "assets/products/bp28z-3.webp", "assets/products/bp28z-4.webp", "assets/products/bp28z-5.webp"],
    sizes: [{ label: "1", price: 272 }, { label: "2", price: 272 }, { label: "3", price: 272 }, { label: "4", price: 272 }, { label: "5", price: 272 }],
    desc: "Five faux fur pillow designs.",
    features: [
      "Faux fur",
      "Five designs",
      "Mix across a bed"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Faux fur", "Options": "5", "Room": "Bedroom" },
    care: "Shake it out rather than washing it. Spot clean with a barely damp cloth and let it air dry away from heat, then brush the pile back up." },

  { id: "bp29z", name: "Faux Fur Cushion (50cm)", cat: "Bedroom", room: "Bedroom", price: 276, memberPrice: 248, sku: "SH-10733", tag: "New", ph: "", img: "assets/products/bp29z.webp",
    imgs: ["assets/products/bp29z.webp", "assets/products/bp29z-2.webp", "assets/products/bp29z-3.webp", "assets/products/bp29z-4.webp", "assets/products/bp29z-5.webp"],
    sizes: [{ label: "Tan / 50 x 50cm", price: 276 }, { label: "White / 50 x 50cm", price: 276 }, { label: "Charcoal / 50 x 50cm", price: 276 }, { label: "Pink / 50 x 50cm", price: 276 }, { label: "Baby Blue / 50 x 50cm", price: 276 }],
    desc: "Tan, white or charcoal, 50cm square.",
    features: [
      "Faux fur",
      "50 x 50cm",
      "Tan, White or Charcoal"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Faux fur", "Options": "5", "Room": "Bedroom" },
    care: "Shake it out rather than washing it. Spot clean with a barely damp cloth and let it air dry away from heat, then brush the pile back up." },

  { id: "bp30z", name: "Black & White Blanket", cat: "Bedroom", room: "Bedroom", price: 276, memberPrice: 248, sku: "SH-10734", tag: "New", ph: "", img: "assets/products/bp30z.webp",
    imgs: ["assets/products/bp30z.webp", "assets/products/bp30z-2.webp", "assets/products/bp30z-3.webp", "assets/products/bp30z-4.webp", "assets/products/bp30z-5.webp"],
    sizes: [{ label: "Black + White / 150cm x 200cm", price: 276 }, { label: "Black + White / 180cm x 200cm", price: 350 }, { label: "Black + White / 200cm x 230cm", price: 439 }],
    desc: "Black and white, 150 x 200cm.",
    features: [
      "Black and White",
      "150 x 200cm",
      "Bed size"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "3", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp31z", name: "Faux Fur Blanket in Coffee", cat: "Bedroom", room: "Bedroom", price: 296, memberPrice: 266, sku: "SH-10735", tag: "New", ph: "", img: "assets/products/bp31z.webp",
    imgs: ["assets/products/bp31z.webp", "assets/products/bp31z-2.webp", "assets/products/bp31z-3.webp", "assets/products/bp31z-4.webp", "assets/products/bp31z-5.webp"],
    sizes: [{ label: "Coffee / 60cm x 150cm", price: 296 }, { label: "Camel / 60cm x 150cm", price: 296 }, { label: "Ivory / 60cm x 150cm", price: 296 }, { label: "Coffee / 150cm x 180cm", price: 630 }, { label: "Camel / 150cm x 180cm", price: 630 }, { label: "Ivory / 150cm x 180cm", price: 630 }, { label: "Coffee / 150cm x 200cm", price: 704 }, { label: "Camel / 150cm x 200cm", price: 704 }, { label: "Ivory / 150cm x 200cm", price: 704 }, { label: "Coffee / 200cm x 220cm", price: 759 }, { label: "Camel / 200cm x 220cm", price: 759 }, { label: "Ivory / 200cm x 220cm", price: 759 }],
    desc: "Coffee faux fur, from a 60 x 150cm runner upward.",
    features: [
      "Faux fur",
      "From 60 x 150cm",
      "Coffee colourway"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Faux fur", "Options": "12", "Room": "Bedroom" },
    care: "Shake it out rather than washing it. Spot clean with a barely damp cloth and let it air dry away from heat, then brush the pile back up." },

  { id: "bp32z", name: "Tan Blanket (100 or 160cm)", cat: "Bedroom", room: "Bedroom", price: 311, memberPrice: 280, sku: "SH-10736", tag: "New", ph: "", img: "assets/products/bp32z.webp",
    imgs: ["assets/products/bp32z.webp", "assets/products/bp32z-2.webp", "assets/products/bp32z-3.webp", "assets/products/bp32z-4.webp", "assets/products/bp32z-5.webp"],
    sizes: [{ label: "Tan / 100cm x 160cm", price: 311 }, { label: "Ocean Green / 100cm x 160cm", price: 311 }, { label: "Blue / 100cm x 160cm", price: 311 }, { label: "Charcoal Grey / 100cm x 160cm", price: 311 }, { label: "Green / 100cm x 160cm", price: 311 }, { label: "Tan / 160cm x 200cm", price: 496 }, { label: "Ocean Green / 160cm x 200cm", price: 496 }, { label: "Blue / 160cm x 200cm", price: 496 }, { label: "Charcoal Grey / 160cm x 200cm", price: 496 }, { label: "Green / 160cm x 200cm", price: 496 }, { label: "Tan / 180cm x 200cm", price: 606 }, { label: "Ocean Green / 180cm x 200cm", price: 606 }, { label: "Blue / 180cm x 200cm", price: 606 }, { label: "Charcoal Grey / 180cm x 200cm", price: 606 }, { label: "Green / 180cm x 200cm", price: 606 }, { label: "Blue / 200cm x 230cm", price: 794 }, { label: "Green / 200cm x 230cm", price: 794 }, { label: "Ocean Green / 200cm x 230cm", price: 794 }, { label: "Tan / 200cm x 230cm", price: 794 }, { label: "Charcoal Grey / 200cm x 230cm", price: 794 }],
    desc: "Tan, 100 x 160cm or 160 x 200cm.",
    features: [
      "Tan colourway",
      "Two sizes",
      "Throw or bed"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "20", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp33z", name: "Pink Blanket", cat: "Bedroom", room: "Bedroom", price: 331, memberPrice: 298, sku: "SH-10737", tag: "New", ph: "", img: "assets/products/bp33z.webp",
    imgs: ["assets/products/bp33z.webp", "assets/products/bp33z-2.webp", "assets/products/bp33z-3.webp", "assets/products/bp33z-4.webp", "assets/products/bp33z-5.webp"],
    sizes: [{ label: "Pink / 100 x 150cm", price: 331 }, { label: "Grey / 100 x 150cm", price: 331 }, { label: "Green / 100 x 150cm", price: 331 }, { label: "Coffee / 100 x 150cm", price: 331 }, { label: "Dark Green / 100 x 150cm", price: 331 }, { label: "Light Pink / 100 x 150cm", price: 331 }, { label: "Off White / 100 x 150cm", price: 331 }, { label: "Cream / 100 x 150cm", price: 331 }, { label: "Pink / 150 x 200cm", price: 389 }, { label: "Green / 150 x 200cm", price: 389 }, { label: "Coffee / 150 x 200cm", price: 389 }, { label: "Grey / 150 x 200cm", price: 389 }, { label: "Dark Green / 150 x 200cm", price: 389 }, { label: "Cream / 150 x 200cm", price: 389 }, { label: "Light Pink / 150 x 200cm", price: 389 }, { label: "Off White / 150 x 200cm", price: 389 }, { label: "Pink / 200 x 230cm", price: 433 }, { label: "Green / 200 x 230cm", price: 433 }, { label: "Dark Green / 200 x 230cm", price: 433 }, { label: "Coffee / 200 x 230cm", price: 433 }, { label: "Grey / 200 x 230cm", price: 433 }, { label: "Cream / 200 x 230cm", price: 433 }, { label: "Off White / 200 x 230cm", price: 433 }, { label: "Light Pink / 200 x 230cm", price: 433 }],
    desc: "Pink, from 100 x 150cm.",
    features: [
      "Pink colourway",
      "From 100 x 150cm",
      "Throw or bed"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "24", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp34z", name: "Blue Blanket", cat: "Bedroom", room: "Bedroom", price: 333, memberPrice: 300, sku: "SH-10738", tag: "New", ph: "", img: "assets/products/bp34z.webp",
    imgs: ["assets/products/bp34z.webp", "assets/products/bp34z-2.webp", "assets/products/bp34z-3.webp", "assets/products/bp34z-4.webp", "assets/products/bp34z-5.webp"],
    sizes: [{ label: "Blue / 90cm x 140cm", price: 333 }, { label: "Pink / 90cm x 140cm", price: 333 }, { label: "Charcoal / 90cm x 140cm", price: 333 }, { label: "Light Grey / 90cm x 140cm", price: 333 }, { label: "Blue / 150cm x 190cm", price: 511 }, { label: "Pink / 150cm x 190cm", price: 511 }, { label: "Charcoal / 150cm x 190cm", price: 511 }, { label: "Light Grey / 150cm x 190cm", price: 511 }, { label: "Blue / 200cm x 230cm", price: 685 }, { label: "Pink / 200cm x 230cm", price: 685 }, { label: "Charcoal / 200cm x 230cm", price: 685 }, { label: "Light Grey / 200cm x 230cm", price: 685 }],
    desc: "Blue, from a 90 x 140cm throw to 150 x 190cm.",
    features: [
      "Blue colourway",
      "90 x 140cm to 150 x 190cm",
      "Throw or bed"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "12", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp35z", name: "Faux Fur Blanket Collection", cat: "Bedroom", room: "Bedroom", price: 333, memberPrice: 300, sku: "SH-10739", tag: "New", ph: "", img: "assets/products/bp35z.webp",
    imgs: ["assets/products/bp35z.webp", "assets/products/bp35z-2.webp", "assets/products/bp35z-3.webp", "assets/products/bp35z-4.webp", "assets/products/bp35z-5.webp"],
    sizes: [{ label: "A / 120cm  x 150cm", price: 333 }, { label: "B / 120cm  x 150cm", price: 333 }, { label: "C / 120cm  x 150cm", price: 333 }, { label: "D / 120cm  x 150cm", price: 333 }, { label: "E / 120cm  x 150cm", price: 333 }],
    desc: "Three faux fur designs at 120 x 150cm.",
    features: [
      "Faux fur",
      "Three designs",
      "120 x 150cm"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Faux fur", "Options": "5", "Room": "Bedroom" },
    care: "Shake it out rather than washing it. Spot clean with a barely damp cloth and let it air dry away from heat, then brush the pile back up." },

  { id: "bp36z", name: "Leopard Print Blanket", cat: "Bedroom", room: "Bedroom", price: 415, memberPrice: 374, sku: "SH-10740", tag: "New", ph: "", img: "assets/products/bp36z.webp",
    imgs: ["assets/products/bp36z.webp", "assets/products/bp36z-2.webp", "assets/products/bp36z-3.webp", "assets/products/bp36z-4.webp", "assets/products/bp36z-5.webp"],
    sizes: [{ label: "127cm x 152cm", price: 415 }, { label: "152cm x 203cm", price: 700 }],
    desc: "Leopard print at 127 x 152cm or 152 x 203cm. Not subtle, and shouldn't be.",
    features: [
      "Leopard print",
      "Two sizes",
      "A deliberate statement"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "2", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp37z", name: "Blanket in Tan or White", cat: "Bedroom", room: "Bedroom", price: 433, memberPrice: 390, sku: "SH-10741", tag: "New", ph: "", img: "assets/products/bp37z.webp",
    imgs: ["assets/products/bp37z.webp", "assets/products/bp37z-2.webp", "assets/products/bp37z-3.webp", "assets/products/bp37z-4.webp", "assets/products/bp37z-5.webp"],
    sizes: [{ label: "Tan / 100cm x 150cm", price: 433 }, { label: "White / 100cm x 150cm", price: 433 }, { label: "Blue / 100cm x 150cm", price: 433 }, { label: "Grey / 100cm x 150cm", price: 433 }, { label: "Pink / 100cm x 150cm", price: 433 }, { label: "Tan / 150cm x 200cm", price: 644 }, { label: "White / 150cm x 200cm", price: 644 }, { label: "Blue / 150cm x 200cm", price: 644 }, { label: "Grey / 150cm x 200cm", price: 644 }, { label: "Pink / 150cm x 200cm", price: 644 }],
    desc: "Tan or white, from 100 x 150cm.",
    features: [
      "Tan or White",
      "From 100 x 150cm",
      "Throw or bed"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "10", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp38z", name: "Velvet Faux Fur Blanket (Large)", cat: "Bedroom", room: "Bedroom", price: 500, memberPrice: 450, sku: "SH-10742", tag: "New", ph: "", img: "assets/products/bp38z.webp",
    imgs: ["assets/products/bp38z.webp", "assets/products/bp38z-2.webp", "assets/products/bp38z-3.webp", "assets/products/bp38z-4.webp", "assets/products/bp38z-5.webp"],
    sizes: [{ label: "Coffee / 160cm x 100cm", price: 500 }, { label: "Off White / 160cm x 100cm", price: 500 }, { label: "Charcoal / 160cm x 100cm", price: 500 }, { label: "Coffee / 200cm x 160cm", price: 704 }, { label: "Off White / 200cm x 160cm", price: 704 }, { label: "Charcoal / 200cm x 160cm", price: 704 }],
    desc: "Velvet-backed faux fur, from 160 x 100cm.",
    features: [
      "Faux fur with velvet backing",
      "From 160 x 100cm",
      "Coffee and other tones"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Faux fur", "Options": "6", "Room": "Bedroom" },
    care: "Shake it out rather than washing it. Spot clean with a barely damp cloth and let it air dry away from heat, then brush the pile back up." },

  { id: "bp39z", name: "Faux Fur Blanket in Tan or Grey", cat: "Bedroom", room: "Bedroom", price: 519, memberPrice: 467, sku: "SH-10743", tag: "New", ph: "", img: "assets/products/bp39z.webp",
    imgs: ["assets/products/bp39z.webp", "assets/products/bp39z-2.webp", "assets/products/bp39z-3.webp", "assets/products/bp39z-4.webp", "assets/products/bp39z-5.webp"],
    sizes: [{ label: "Tan / 100 x 160cm", price: 519 }, { label: "Grey / 100 x 160cm", price: 519 }, { label: "White / 100 x 160cm", price: 519 }, { label: "Tan / 160 x 200cm", price: 778 }, { label: "Grey / 160 x 200cm", price: 778 }, { label: "White / 160 x 200cm", price: 778 }],
    desc: "Tan or grey, 100 x 160cm or 160 x 200cm.",
    features: [
      "Faux fur",
      "Tan or Grey",
      "Two sizes"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Faux fur", "Options": "6", "Room": "Bedroom" },
    care: "Shake it out rather than washing it. Spot clean with a barely damp cloth and let it air dry away from heat, then brush the pile back up." },

  { id: "bp40z", name: "Blanket in Two Designs", cat: "Bedroom", room: "Bedroom", price: 544, memberPrice: 490, sku: "SH-10744", tag: "New", ph: "", img: "assets/products/bp40z.webp",
    imgs: ["assets/products/bp40z.webp", "assets/products/bp40z-2.webp", "assets/products/bp40z-3.webp", "assets/products/bp40z-4.webp", "assets/products/bp40z-5.webp"],
    sizes: [{ label: "A / 127cm x 150cm", price: 544 }, { label: "B / 127cm x 150cm", price: 544 }, { label: "C / 127cm x 150cm", price: 544 }, { label: "A / 150cm x 200cm", price: 1013 }, { label: "B / 150cm x 200cm", price: 1013 }, { label: "C / 150cm x 200cm", price: 1013 }],
    desc: "Two designs, 127 x 150cm or 150 x 200cm.",
    features: [
      "Two designs",
      "Two sizes",
      "Throw or bed"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "6", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp41z", name: "Luxury Faux Fur Blanket in White", cat: "Bedroom", room: "Bedroom", price: 578, memberPrice: 520, sku: "SH-10745", tag: "New", ph: "", img: "assets/products/bp41z.webp",
    imgs: ["assets/products/bp41z.webp", "assets/products/bp41z-2.webp", "assets/products/bp41z-3.webp", "assets/products/bp41z-4.webp", "assets/products/bp41z-5.webp"],
    sizes: [{ label: "White / 127cm x 152cm", price: 578 }, { label: "Brown / 127cm x 152cm", price: 578 }, { label: "Grey / 127cm x 152cm", price: 578 }, { label: "Rustic Brown / 127cm x 152cm", price: 578 }, { label: "White / 130cm x 170cm", price: 602 }, { label: "Brown / 130cm x 170cm", price: 602 }, { label: "Grey / 130cm x 170cm", price: 602 }, { label: "Rustic Brown / 130cm x 170cm", price: 602 }, { label: "White / 150cm x 200cm", price: 730 }, { label: "Brown / 150cm x 200cm", price: 730 }, { label: "Grey / 150cm x 200cm", price: 730 }, { label: "Rustic Brown / 150cm x 200cm", price: 730 }],
    desc: "White faux fur, 127 x 152cm or 130 x 170cm.",
    features: [
      "Faux fur",
      "White colourway",
      "Two sizes"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Faux fur", "Options": "12", "Room": "Bedroom" },
    care: "Shake it out rather than washing it. Spot clean with a barely damp cloth and let it air dry away from heat, then brush the pile back up." },

  { id: "bp42z", name: "Grey Blanket (Large)", cat: "Bedroom", room: "Bedroom", price: 609, memberPrice: 548, sku: "SH-10746", tag: "New", ph: "", img: "assets/products/bp42z.webp",
    imgs: ["assets/products/bp42z.webp", "assets/products/bp42z-2.webp", "assets/products/bp42z-3.webp", "assets/products/bp42z-4.webp", "assets/products/bp42z-5.webp"],
    sizes: [{ label: "Grey / 100cm x 160cm", price: 609 }, { label: "Chocolate / 100cm x 160cm", price: 609 }, { label: "Grey / 160cm x 200cm", price: 713 }, { label: "Chocolate / 160cm x 200cm", price: 713 }],
    desc: "Grey, 100 x 160cm or 160 x 200cm.",
    features: [
      "Grey colourway",
      "Two sizes",
      "Throw or bed"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "4", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp43z", name: "Faux Fur Blanket in Coffee or Grey", cat: "Bedroom", room: "Bedroom", price: 652, memberPrice: 587, sku: "SH-10747", tag: "New", ph: "", img: "assets/products/bp43z.webp",
    imgs: ["assets/products/bp43z.webp", "assets/products/bp43z-2.webp", "assets/products/bp43z-3.webp", "assets/products/bp43z-4.webp", "assets/products/bp43z-5.webp"],
    sizes: [{ label: "Coffee / 100 x 150cm", price: 652 }, { label: "Grey / 100 x 150cm", price: 652 }, { label: "White / 100 x 150cm", price: 652 }, { label: "Grey / 130 x 170cm", price: 791 }, { label: "Coffee / 130 x 170cm", price: 791 }, { label: "White / 130 x 170cm", price: 791 }],
    desc: "Coffee or grey faux fur at 100 x 150cm.",
    features: [
      "Faux fur",
      "Coffee or Grey",
      "100 x 150cm"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Faux fur", "Options": "6", "Room": "Bedroom" },
    care: "Shake it out rather than washing it. Spot clean with a barely damp cloth and let it air dry away from heat, then brush the pile back up." },

  { id: "bp44z", name: "Ultra-Thick Blanket", cat: "Bedroom", room: "Bedroom", price: 665, memberPrice: 598, sku: "SH-10748", tag: "New", ph: "", img: "assets/products/bp44z.webp",
    imgs: ["assets/products/bp44z.webp", "assets/products/bp44z-2.webp", "assets/products/bp44z-3.webp", "assets/products/bp44z-4.webp", "assets/products/bp44z-5.webp"],
    sizes: [{ label: "Grey / 150cm  x 200cm", price: 665 }, { label: "Green / 150cm  x 200cm", price: 665 }, { label: "Khaki / 150cm  x 200cm", price: 665 }, { label: "Yellow / 150cm  x 200cm", price: 665 }, { label: "Blue / 150cm  x 200cm", price: 665 }, { label: "Purple / 150cm  x 200cm", price: 665 }, { label: "Grey / 180cm  x 220cm", price: 730 }, { label: "Green / 180cm  x 220cm", price: 730 }, { label: "Khaki / 180cm  x 220cm", price: 730 }, { label: "Yellow / 180cm  x 220cm", price: 730 }, { label: "Blue / 180cm  x 220cm", price: 730 }, { label: "Purple / 180cm  x 220cm", price: 730 }, { label: "Grey / 200cm x 230cm", price: 919 }, { label: "Green / 200cm x 230cm", price: 919 }, { label: "Khaki / 200cm x 230cm", price: 919 }, { label: "Yellow / 200cm x 230cm", price: 919 }, { label: "Blue / 200cm x 230cm", price: 919 }, { label: "Purple / 200cm x 230cm", price: 919 }],
    desc: "Grey, 150 x 200cm or 180 x 220cm. The heaviest blanket in the range.",
    features: [
      "Extra-thick pile",
      "150 x 200cm and 180 x 220cm",
      "Grey colourway"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Soft furnishing", "Options": "18", "Room": "Bedroom" },
    care: "Machine wash cold on a gentle cycle with like colours, or follow the care label where one is attached. Do not tumble dry hot, which flattens the pile." },

  { id: "bp45z", name: "Velvet Faux Fur Blanket in Coffee", cat: "Bedroom", room: "Bedroom", price: 726, memberPrice: 653, sku: "SH-10749", tag: "New", ph: "", img: "assets/products/bp45z.webp",
    imgs: ["assets/products/bp45z.webp", "assets/products/bp45z-2.webp", "assets/products/bp45z-3.webp", "assets/products/bp45z-4.webp", "assets/products/bp45z-5.webp"],
    sizes: [{ label: "Coffee / 150 x 127cm", price: 726 }, { label: "Grey / 150 x 127cm", price: 726 }, { label: "Coffee / 180 x 150cm", price: 957 }, { label: "Grey / 180 x 150cm", price: 957 }, { label: "Coffee / 200 x 180cm", price: 1281 }, { label: "Grey / 200 x 180cm", price: 1281 }, { label: "Coffee / 220 x 180cm", price: 1389 }, { label: "Grey / 220 x 180cm", price: 1389 }],
    desc: "Velvet-backed faux fur, 150 x 127cm or 180 x 150cm.",
    features: [
      "Faux fur with velvet backing",
      "Two sizes",
      "Coffee colourway"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Faux fur", "Options": "8", "Room": "Bedroom" },
    care: "Shake it out rather than washing it. Spot clean with a barely damp cloth and let it air dry away from heat, then brush the pile back up." },

  { id: "bp46z", name: "Faux Fur Blanket in Navy or Ocean", cat: "Bedroom", room: "Bedroom", price: 791, memberPrice: 712, sku: "SH-10750", tag: "New", ph: "", img: "assets/products/bp46z.webp",
    imgs: ["assets/products/bp46z.webp", "assets/products/bp46z-2.webp", "assets/products/bp46z-3.webp", "assets/products/bp46z-4.webp", "assets/products/bp46z-5.webp"],
    sizes: [{ label: "Navy Blue / 200cm x 230cm", price: 791 }, { label: "Ocean Blue / 200cm x 230cm", price: 791 }, { label: "Chocolate / 200cm x 230cm", price: 791 }, { label: "Deep Red / 200cm x 230cm", price: 791 }, { label: "Charcoal / 200cm x 230cm", price: 791 }],
    desc: "Navy blue or ocean blue at 200 x 230cm, which covers a king bed properly.",
    features: [
      "Faux fur",
      "Navy or Ocean Blue",
      "200 x 230cm"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Faux fur", "Options": "5", "Room": "Bedroom" },
    care: "Shake it out rather than washing it. Spot clean with a barely damp cloth and let it air dry away from heat, then brush the pile back up." },

  { id: "bp47z", name: "Faux Fur Blanket in Chocolate", cat: "Bedroom", room: "Bedroom", price: 885, memberPrice: 796, sku: "SH-10751", tag: "New", ph: "", img: "assets/products/bp47z.webp",
    imgs: ["assets/products/bp47z.webp", "assets/products/bp47z-2.webp", "assets/products/bp47z-3.webp", "assets/products/bp47z-4.webp", "assets/products/bp47z-5.webp"],
    sizes: [{ label: "Chocolate / 150 x 130cm", price: 885 }, { label: "Beige / 150 x 130cm", price: 885 }, { label: "Grey / 150 x 130cm", price: 885 }, { label: "Chocolate / 190 x 150cm", price: 1156 }, { label: "Beige / 190 x 150cm", price: 1156 }, { label: "Grey / 190 x 150cm", price: 1156 }, { label: "Chocolate / 200 x 190cm", price: 1348 }, { label: "Beige / 200 x 190cm", price: 1348 }, { label: "Grey / 200 x 190cm", price: 1348 }, { label: "Chocolate / 230 x 190cm", price: 1517 }, { label: "Beige / 230 x 190cm", price: 1517 }, { label: "Grey / 230 x 190cm", price: 1517 }],
    desc: "Chocolate faux fur, 150 x 130cm or 190cm wide. The most expensive blanket we carry, and it feels it.",
    features: [
      "Faux fur",
      "Chocolate colourway",
      "150 x 130cm upward"
    ],
    specs: { "Type": "Blanket / cushion", "Material": "Faux fur", "Options": "12", "Room": "Bedroom" },
    care: "Shake it out rather than washing it. Spot clean with a barely damp cloth and let it air dry away from heat, then brush the pile back up." },
































  // ── Outdoor ──
  { id: "od01", name: "Steel Fire Pit with Built-In Log Store", cat: "Outdoor", room: "Outdoor", price: 7104, memberPrice: 6394, sku: "SH-10116", tag: "New", ph: "", img: "assets/products/od01.jpg",
    imgs: ["assets/products/od01.jpg", "assets/products/od01-2.jpg", "assets/products/od01-3.jpg", "assets/products/od01-4.jpg", "assets/products/od01-5.jpg", "assets/products/od01-6.webp", "assets/products/od01-7.webp", "assets/products/od01-8.webp"],
    sizes: [{ label: "80cm", price: 7104 }, { label: "90cm", price: 7443 }, { label: "100cm", price: 8180 }, { label: "120cm", price: 9815 }, { label: "150cm", price: 11611 }],
    desc: "The reason everyone ends up outside. A broad steel fire bowl sits at the centre of a sculptural low table, with the firewood stacked in the open curve beneath it, so the fuel is part of the design rather than something to hide. The surround gives you somewhere to rest drinks, a board or a hand while the fire does the work. Stainless steel under a textured, heat-resistant black powder coat, built to live outside through an Australian winter. Five diameters, from 80cm for a courtyard to 150cm for a lawn that gathers a crowd, with matching seats sold separately.",
    features: [
      "Generous steel fire bowl that takes full-size logs, not kindling",
      "Open log store curved into the base, so the firewood is part of the look",
      "Flat surround for drinks, platters and warming hands",
      "Stainless steel with a textured, heat-resistant black powder coat",
      "Five diameters: 80, 90, 100, 120 and 150cm",
      "Matching seats available on request"
    ],
    specs: { "Type": "Wood-burning fire pit", "Material": "Stainless steel", "Finish": "Textured heat-resistant black powder coat", "Fuel": "Firewood", "Sizes": "80 / 90 / 100 / 120 / 150cm", "Use": "Outdoor only" },
    care: "Let the pit cool completely, then empty the ash so it doesn't hold moisture against the steel. Wipe the surround with a damp cloth. Cover it or store it under shelter through long wet spells, and keep it on a non-combustible surface, clear of decking, fences and anything overhanging." },

  { id: "od02", name: "Caged Solar Garden Lantern", cat: "Outdoor", room: "Outdoor", price: 830, memberPrice: 747, sku: "SH-10117", tag: "New", ph: "", img: "assets/products/od02.jpg",
    imgs: ["assets/products/od02.jpg", "assets/products/od02-2.jpg", "assets/products/od02-3.jpg", "assets/products/od02-4.jpg", "assets/products/od02-5.webp", "assets/products/od02-6.jpg", "assets/products/od02-7.webp"],
    sizes: [{ label: "Small", price: 830 }, { label: "Medium", price: 1015 }, { label: "Large", price: 1200 }],
    colours: [{ name: "Warm White", hex: "#f2e4c4" }],
    desc: "A slender cage of stainless steel ribs around a column of warm light, charged by the sun and switched on by the dusk. No cable to run, no socket to find, so it can stand where you actually want light: along a path, beside the steps, at the end of a daybed, in a planter among the greenery. The frame is weather-resistant and heavy enough not to wander in the wind, and the glow is warm rather than blue-white, so an evening outside still feels like an evening. Three sizes, lovely in a row or in a cluster of mixed heights.",
    features: [
      "Solar powered, charges by day and lights itself at dusk",
      "Warm white light, not the cold blue of most garden solar",
      "Stainless steel birdcage frame, weather resistant",
      "No wiring, so it can stand anywhere you like",
      "Three sizes: Small, Medium and Large",
      "Group different heights together, or line a path with one size"
    ],
    specs: { "Type": "Solar lantern", "Frame": "Stainless steel", "Light": "Warm white LED", "Power": "Solar, no wiring required", "Sizes": "Small / Medium / Large", "Use": "Outdoor" },
    care: "Wipe the solar panel on the lid clear of dust and leaves now and then, since a dirty panel is the usual reason a solar light dims. Clean the frame with a damp cloth. In a long run of grey days, move it somewhere brighter to charge." },


  { id: "od04", name: "Teak & Metal Outdoor Dining Collection", cat: "Outdoor", room: "Outdoor", price: 1333, memberPrice: 1200, sku: "SH-10119", tag: "New", ph: "", img: "assets/products/od04.jpg",
    imgs: ["assets/products/od04.jpg", "assets/products/od04-2.jpg", "assets/products/od04-3.jpg", "assets/products/od04-4.jpg", "assets/products/od04-5.webp", "assets/products/od04-6.webp", "assets/products/od04-7.webp", "assets/products/od04-8.webp"],
    sizes: [{ label: "Chair", price: 1333 }, { label: "Round table", price: 5778 }, { label: "Square table", price: 5778 }, { label: "Dining table 160cm", price: 9565 }, { label: "Dining table 220cm", price: 10500 }, { label: "Dining table 260cm", price: 11074 }],
    desc: "Solid teak over a steel base, which is the combination that survives summers outside and still looks good doing it. The timber is warm and open-grained, the kind that silvers gracefully if you let it, and the metal base keeps the whole table steady on decking or pavers. Choose the shape your space wants: a round or square table for four, or a long dining table at 160, 220 or 260cm for the gatherings that run past dark. Chairs are priced individually, so you buy exactly the number you seat.",
    features: [
      "Premium solid teak top with warm, open grain",
      "Steel base for stability on decking, pavers or lawn",
      "Round and square tables, plus 160, 220 and 260cm dining lengths",
      "Chairs sold individually, so you buy the number you need",
      "Teak weathers to a soft silver-grey, or keep the honey tone with oil",
      "Built for full outdoor use, year round"
    ],
    specs: { "Type": "Outdoor dining collection", "Top": "Solid teak timber", "Base": "Metal", "Table sizes": "Round / Square / 160cm / 220cm / 260cm", "Chairs": "Sold individually", "Use": "Outdoor" },
    care: "Left alone, teak fades to a silver-grey, which is natural and does no harm. To keep the honey colour, clean it and apply teak oil once or twice a year. Wipe spills promptly, especially oil and wine, and use a cover through the worst of winter." },

  { id: "od05", name: "Weatherproof Rattan Outdoor Lounge Collection", cat: "Outdoor", room: "Outdoor", price: 1313, memberPrice: 1182, sku: "SH-10120", tag: "New", ph: "", img: "assets/products/od05.jpg",
    imgs: ["assets/products/od05.jpg", "assets/products/od05-2.jpg", "assets/products/od05-3.jpg", "assets/products/od05-4.jpg", "assets/products/od05-5.jpg", "assets/products/od05-6.webp", "assets/products/od05-7.jpg", "assets/products/od05-8.webp"],
    colours: [{ name: "Chocolate", hex: "#4b3a2c" }, { name: "Beige", hex: "#cdbfa6" }],
    sizes: [{ label: "Footstool", price: 1313 }, { label: "Chair", price: 1846 }, { label: "Sofa chair", price: 4172 }, { label: "Sun lounge", price: 7613 }, { label: "Two seater", price: 12485 }],
    desc: "A full outdoor living room you can build up a piece at a time. This collection is woven in weatherproof rattan over a sturdy frame, in a clean modern line that sits as happily by a pool as on a terrace. Start with a chair, add the deep sofa chair and footstool for the end of the day, stretch out on the sun lounge, or bring in the two seater when there's always someone staying. In chocolate for a darker, more grounded look, or beige to keep things light and coastal.",
    features: [
      "Weatherproof rattan weave over a sturdy frame",
      "Five pieces: chair, sofa chair, two seater, sun lounge and footstool",
      "Two colourways: Chocolate and Beige",
      "Build the setting up over time, a piece at a time",
      "Deep, relaxed seating made for long afternoons",
      "Clean modern lines that suit a pool, terrace or courtyard"
    ],
    specs: { "Type": "Outdoor lounge collection", "Weave": "Weatherproof rattan", "Pieces": "Chair, sofa chair, two seater, sun lounge, footstool", "Colours": "Chocolate, Beige", "Sold as": "Individual pieces", "Use": "Outdoor" },
    care: "Rinse the weave with fresh water and let it air dry, especially near salt water. Wipe spills before they dry in. Bring cushions inside when it rains, and cover or shelter the pieces through long wet or very hot spells." },









  { id: "od14", name: "Shaded Two-in-One Outdoor Lounge", cat: "Outdoor", room: "Outdoor", price: 2759, memberPrice: 2483, sku: "SH-10129", tag: "New", ph: "", img: "assets/products/od14.jpg",
    imgs: ["assets/products/od14.jpg", "assets/products/od14-2.jpg", "assets/products/od14-3.jpg", "assets/products/od14-4.jpg", "assets/products/od14-5.webp", "assets/products/od14-6.jpg"],
    sizes: [{ label: "Coffee Table", price: 2759 }, { label: "Sofa Set", price: 12444 }],
    desc: "A two-in-one lounge with its own overhead shade: sit under it through the middle of the day, fold it back when you want the sun. A generous piece for a poolside or a lawn, with a matching coffee table if you want the full setting.",
    features: [
      "Integrated overhead shade for sun or shelter",
      "Two-in-one design: shaded lounge or open seating",
      "Generous proportions for poolside and lawn",
      "Matching coffee table available separately",
      "Weather-resistant construction"
    ],
    specs: { "Type": "Outdoor furniture", "Material": "Weather-resistant rattan", "Use": "Outdoor", "Pieces": "2" },
    care: "Rinse the weave with fresh water and let it dry in the air, particularly near the sea. Wipe spills before they dry into the fibre. Bring cushions inside when it rains, and cover or shelter the pieces through long wet spells." },






  { id: "od20", name: "Handcrafted Teak Outdoor Dining Collection", cat: "Outdoor", room: "Outdoor", price: 2911, memberPrice: 2620, sku: "SH-10135", tag: "New", ph: "", img: "assets/products/od20.jpg",
    imgs: ["assets/products/od20.jpg", "assets/products/od20-2.jpg", "assets/products/od20-3.jpg", "assets/products/od20-4.jpg", "assets/products/od20-5.webp", "assets/products/od20-6.webp"],
    sizes: [{ label: "Armless Chair", price: 2911 }, { label: "Dining Chair", price: 3146 }, { label: "Coffee Table", price: 5531 }, { label: "180cm Table", price: 8143 }, { label: "240cm Table", price: 14559 }, { label: "300cm Table", price: 17726 }],
    desc: "Handcrafted teak dining, from a coffee table up to a 300cm table that seats a proper gathering. The timber is warm and open-grained, the chairs are made to match, and the whole collection ages into that soft silver teak colour if you let it.",
    features: [
      "Handcrafted solid teak timber",
      "Dining tables at 180, 240 and 300cm, plus a coffee table",
      "Matching armless and dining chairs, sold individually",
      "Warm, open grain that weathers to silver-grey",
      "Built for courtyards, patios and gardens"
    ],
    specs: { "Type": "Outdoor furniture", "Material": "Solid teak timber", "Use": "Outdoor", "Pieces": "6" },
    care: "Teak left to itself fades to a soft silver-grey, which is natural and harms nothing. To hold the honey tone, wash it down and oil it once or twice a year. Wipe spills, especially oil and wine, before they soak in." },






  { id: "od26", name: "Rattan & Reinforced Metal Outdoor Collection", cat: "Outdoor", room: "Outdoor", price: 2481, memberPrice: 2233, sku: "SH-10141", tag: "New", ph: "", img: "assets/products/od26.jpg",
    imgs: ["assets/products/od26.jpg", "assets/products/od26-2.jpg", "assets/products/od26-3.jpg", "assets/products/od26-4.webp", "assets/products/od26-5.webp", "assets/products/od26-6.webp"],
    sizes: [{ label: "Table", price: 2481 }, { label: "Single Seater", price: 2491 }, { label: "Double Seater", price: 11889 }, { label: "Three-Seater", price: 14283 }],
    desc: "Rattan over a reinforced metal frame, which is the combination that survives being left out all summer. Single, double and three seaters with a matching table, in a classic weave that suits almost any garden.",
    features: [
      "Rattan weave over a reinforced metal frame",
      "Single, double and three seater, plus matching table",
      "Classic look that sits well in most gardens",
      "Built for longevity outdoors",
      "Comfortable cushioned seating"
    ],
    specs: { "Type": "Outdoor furniture", "Material": "Weather-resistant rattan", "Use": "Outdoor", "Pieces": "4" },
    care: "Rinse the weave with fresh water and let it dry in the air, particularly near the sea. Wipe spills before they dry into the fibre. Bring cushions inside when it rains, and cover or shelter the pieces through long wet spells." },


  { id: "od28", name: "Minimalist Teak Outdoor Dining Set", cat: "Outdoor", room: "Outdoor", price: 2944, memberPrice: 2650, sku: "SH-10143", tag: "New", ph: "", img: "assets/products/od28.jpg",
    imgs: ["assets/products/od28.jpg", "assets/products/od28-2.jpg", "assets/products/od28-3.jpg", "assets/products/od28-4.webp", "assets/products/od28-5.webp", "assets/products/od28-6.webp"],
    sizes: [{ label: "Chair", price: 2944 }, { label: "Table", price: 9239 }],
    desc: "Minimalist teak dining: clean lines, a natural finish and nothing extra. The table has real presence without ornament, and the chairs are cut to the same quiet logic.",
    features: [
      "Premium teak timber with a natural finish",
      "Clean, minimalist lines",
      "Table and chairs sold separately",
      "Warm grain that weathers to silver-grey",
      "Suits a modern alfresco setting"
    ],
    specs: { "Type": "Outdoor furniture", "Material": "Solid teak timber", "Use": "Outdoor", "Pieces": "2" },
    care: "Teak left to itself fades to a soft silver-grey, which is natural and harms nothing. To hold the honey tone, wash it down and oil it once or twice a year. Wipe spills, especially oil and wine, before they soak in." },


  { id: "od30", name: "Beige Teak Outdoor Lounge & Dining Collection", cat: "Outdoor", room: "Outdoor", price: 3661, memberPrice: 3295, sku: "SH-10145", tag: "New", ph: "", img: "assets/products/od30.jpg",
    imgs: ["assets/products/od30.jpg", "assets/products/od30-2.jpg", "assets/products/od30-3.webp", "assets/products/od30-4.jpg", "assets/products/od30-5.jpg", "assets/products/od30-6.jpg"],
    colours: [{ name: "Beige", hex: "#d3c6ae" }],
    sizes: [{ label: "Dining Chair", price: 3661 }, { label: "Coffee Table", price: 4500 }, { label: "Lounge Chair", price: 4796 }, { label: "Sun Bed", price: 5533 }, { label: "Two Seater Sofa", price: 7778 }, { label: "Three Seater Sofa", price: 9235 }],
    desc: "High-quality teak in a warm beige tone, across the widest spread of pieces we carry: lounge chairs, two and three seater sofas, a coffee table, dining chairs and a sun bed. Furnish a whole outdoor area from one collection and have it all match.",
    features: [
      "High-quality teak in a warm beige tone",
      "Six pieces: lounge chair, two and three seater, coffee table, dining chair and sun bed",
      "Furnish a whole outdoor area in one collection",
      "Natural charm that deepens with weathering",
      "Dining and lounging in the same family"
    ],
    specs: { "Type": "Outdoor furniture", "Material": "Solid teak timber", "Use": "Outdoor", "Pieces": "6" },
    care: "Teak left to itself fades to a soft silver-grey, which is natural and harms nothing. To hold the honey tone, wash it down and oil it once or twice a year. Wipe spills, especially oil and wine, before they soak in." },


  { id: "od32", name: "Modular Aluminium Outdoor Collection in Black & White", cat: "Outdoor", room: "Outdoor", price: 4581, memberPrice: 4123, sku: "SH-10147", tag: "New", ph: "", img: "assets/products/od32.jpg",
    imgs: ["assets/products/od32.jpg", "assets/products/od32-2.jpg", "assets/products/od32-3.jpg", "assets/products/od32-4.webp", "assets/products/od32-5.jpg", "assets/products/od32-6.jpg"],
    sizes: [{ label: "Black / Rectangle Coffee Table", price: 4581 }, { label: "White / Rectangle Coffee Table", price: 4581 }, { label: "Black / Square Coffee Table", price: 5315 }, { label: "White / Square Coffee Table", price: 5315 }, { label: "Black / Foot Stool", price: 5496 }, { label: "White / Foot Stool", price: 5496 }, { label: "Black / Middle Seat", price: 6107 }, { label: "White / Middle Seat", price: 6107 }, { label: "Black / Corner Seat", price: 6719 }, { label: "White / Corner Seat", price: 6719 }, { label: "Black / Sun Bed", price: 11107 }, { label: "White / Sun Bed", price: 11107 }],
    desc: "Black and white against premium aluminium, in a modular layout: corner seats, middle seats, a sun bed, two coffee table shapes and a footstool. Lay it out along a wall, wrap it round a corner, or spread it across a deck.",
    features: [
      "Premium aluminium frame in a black and white palette",
      "Modular: corner seats, middle seats, footstool",
      "Sun bed and two coffee table shapes",
      "Arrange it to fit the shape of your space",
      "Light, rust-resistant and easy to move"
    ],
    specs: { "Type": "Outdoor furniture", "Material": "Aluminium frame", "Use": "Outdoor", "Pieces": "12" },
    care: "Wash the frame with mild soapy water and rinse, then dry. Rinse more often near salt air. Wipe spills from the weave promptly, and store cushions dry." },



  { id: "od35", name: "Light Teak Outdoor Dining & Bar Collection", cat: "Outdoor", room: "Outdoor", price: 3630, memberPrice: 3267, sku: "SH-10150", tag: "New", ph: "", img: "assets/products/od35.jpg",
    imgs: ["assets/products/od35.jpg", "assets/products/od35-2.webp", "assets/products/od35-3.webp", "assets/products/od35-4.webp", "assets/products/od35-5.webp", "assets/products/od35-6.webp"],
    sizes: [{ label: "High Chair", price: 3630 }, { label: "Chair", price: 3630 }, { label: "Bars Stool", price: 3630 }, { label: "Bar Table", price: 4344 }, { label: "Square Table", price: 5444 }, { label: "Coffee Table", price: 6463 }],
    desc: "Light tan teak across a full set of pieces, including bar stools and a bar table, which almost nobody makes well for outdoors. Square and coffee tables, high chairs and dining chairs complete it.",
    features: [
      "Light tan teak timber finish",
      "Includes bar table and bar stools, as well as dining",
      "Square table, coffee table, high chair and chair",
      "A complete outdoor setting from one family",
      "Timeless material built to weather"
    ],
    specs: { "Type": "Outdoor furniture", "Material": "Solid teak timber", "Use": "Outdoor", "Pieces": "6" },
    care: "Teak left to itself fades to a soft silver-grey, which is natural and harms nothing. To hold the honey tone, wash it down and oil it once or twice a year. Wipe spills, especially oil and wine, before they soak in." },



  { id: "od38", name: "Complete Rattan Dining, Bar & Lounge Collection", cat: "Outdoor", room: "Outdoor", price: 1993, memberPrice: 1794, sku: "SH-10153", tag: "New", ph: "", img: "assets/products/od38.jpg",
    imgs: ["assets/products/od38.jpg", "assets/products/od38-2.jpg", "assets/products/od38-3.jpg", "assets/products/od38-4.jpg", "assets/products/od38-5.jpg", "assets/products/od38-6.jpg"],
    sizes: [{ label: "Foot Petal", price: 1993 }, { label: "Chair", price: 2111 }, { label: "Bar Stool", price: 2204 }, { label: "Coffee Table", price: 2900 }, { label: "Sofa Chair", price: 4322 }, { label: "Bar Table", price: 4444 }, { label: "Table", price: 4833 }, { label: "Three Seat Sofa", price: 10556 }],
    desc: "The most versatile collection we carry: chair, sofa chair, footstool, table, bar table, bar stool, coffee table and a three seat sofa. Durable rattan throughout, so dining, lounging and the bar corner can all match.",
    features: [
      "Eight pieces, from dining chair to three seat sofa",
      "Includes bar table and bar stool",
      "Durable rattan that holds its look",
      "Mix lounging and dining in one material",
      "Build the setting piece by piece"
    ],
    specs: { "Type": "Outdoor furniture", "Material": "Weather-resistant rattan", "Use": "Outdoor", "Pieces": "8" },
    care: "Rinse the weave with fresh water and let it dry in the air, particularly near the sea. Wipe spills before they dry into the fibre. Bring cushions inside when it rains, and cover or shelter the pieces through long wet spells." },


  { id: "od40", name: "Everyday Rattan Outdoor Lounge Collection", cat: "Outdoor", room: "Outdoor", price: 5252, memberPrice: 4727, sku: "SH-10155", tag: "New", ph: "", img: "assets/products/od40.jpg",
    imgs: ["assets/products/od40.jpg", "assets/products/od40-2.jpg", "assets/products/od40-3.webp", "assets/products/od40-4.webp", "assets/products/od40-5.webp"],
    sizes: [{ label: "Coffee Table", price: 5252 }, { label: "Single Seater", price: 7378 }, { label: "Double Seater", price: 12276 }],
    desc: "Durable rattan in a modern shape, made for everyday lounging rather than occasional use. Single and double seaters with a coffee table, equally at home on a balcony or a patio.",
    features: [
      "Durable rattan built for daily use",
      "Single seater, double seater and coffee table",
      "Modern silhouette that suits a balcony or patio",
      "Comfortable for long sitting",
      "Long-lasting outdoor performance"
    ],
    specs: { "Type": "Outdoor furniture", "Material": "Weather-resistant rattan", "Use": "Outdoor", "Pieces": "3" },
    care: "Rinse the weave with fresh water and let it dry in the air, particularly near the sea. Wipe spills before they dry into the fibre. Bring cushions inside when it rains, and cover or shelter the pieces through long wet spells." },




  { id: "od44", name: "Low & High Back Woven Rattan Collection", cat: "Outdoor", room: "Outdoor", price: 1643, memberPrice: 1479, sku: "SH-10159", tag: "New", ph: "", img: "assets/products/od44.jpg",
    imgs: ["assets/products/od44.jpg", "assets/products/od44-2.jpg", "assets/products/od44-3.jpg", "assets/products/od44-4.jpg", "assets/products/od44-5.jpg", "assets/products/od44-6.jpg"],
    sizes: [{ label: "Wooden Round Coffee Table", price: 1643 }, { label: "Wooden Square Table", price: 3304 }, { label: "High Back Chair", price: 3685 }, { label: "Single Seater - Low back", price: 5281 }, { label: "Wooden Rectangle Table", price: 5828 }, { label: "Sun Bed", price: 6185 }, { label: "Single Seater - High Back", price: 7352 }, { label: "Wooden Oval Table", price: 7641 }, { label: "Three Seater - Low back Sofa", price: 9694 }, { label: "Three Seater - High Back Sofa", price: 13330 }],
    desc: "Woven rattan in both low-back and high-back shapes, so you can choose between a relaxed lounge line and something more upright and supportive. Singles, three seaters and a sun bed.",
    features: [
      "Low-back and high-back options across the range",
      "Single seaters, three seaters and a sun bed",
      "Finely woven rattan over a solid frame",
      "Choose relaxed lounging or upright support",
      "Made for terraces, gardens and poolsides"
    ],
    specs: { "Type": "Outdoor furniture", "Material": "Weather-resistant rattan", "Use": "Outdoor", "Pieces": "10" },
    care: "Rinse the weave with fresh water and let it dry in the air, particularly near the sea. Wipe spills before they dry into the fibre. Bring cushions inside when it rains, and cover or shelter the pieces through long wet spells." },

  { id: "od45", name: "Square & Round Woven Outdoor Seating Range", cat: "Outdoor", room: "Outdoor", price: 2587, memberPrice: 2328, sku: "SH-10160", tag: "New", ph: "", img: "assets/products/od45.jpg",
    imgs: ["assets/products/od45.jpg", "assets/products/od45-2.jpg", "assets/products/od45-3.jpg", "assets/products/od45-4.jpg", "assets/products/od45-5.jpg", "assets/products/od45-6.jpg"],
    sizes: [{ label: "Glass Table", price: 2587 }, { label: "Round - Single Seater", price: 4433 }, { label: "Square - Single Seater", price: 4622 }, { label: "Double Seater", price: 10511 }],
    desc: "Square or round single seaters, a double seater, and a glass-topped table to finish the group. A softer, more decorative shape than most outdoor seating, and lovely in a garden setting.",
    features: [
      "Square or round single seaters",
      "Double seater and matching glass table",
      "Softer, more decorative shape",
      "Natural woven charm",
      "Suits a garden, terrace or poolside"
    ],
    specs: { "Type": "Outdoor furniture", "Material": "Weather-resistant rattan", "Use": "Outdoor", "Pieces": "4" },
    care: "Rinse the weave with fresh water and let it dry in the air, particularly near the sea. Wipe spills before they dry into the fibre. Bring cushions inside when it rains, and cover or shelter the pieces through long wet spells." },

  // ── Home Décor ──
  { id: "dc01x", name: "Layered Display Plates", cat: "Home Décor", room: "Home Décor", price: 170, memberPrice: 153, sku: "SH-10644", tag: "New", ph: "", img: "assets/products/dc01x.webp",
    imgs: ["assets/products/dc01x.webp", "assets/products/dc01x-2.webp", "assets/products/dc01x-3.webp", "assets/products/dc01x-4.webp"],
    sizes: [{ label: "Small / Silver", price: 170 }, { label: "Large / Silver", price: 289 }],
    desc: "Stacked metal plates in silver, small or large, for a console or a shelf where something sculptural is needed.",
    features: [
      "Layered metal form",
      "Small or Large",
      "Silver finish"
    ],
    specs: { "Type": "Decorative object", "Material": "Metal", "Options": "2" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "dc02x", optionLabel: "Colour", sizeImg: {"Black + White":"assets/products/dc02x-4.webp","White + Grey":"assets/products/dc02x-3.webp","White + Tan":"assets/products/dc02x-5.webp"}, name: "Marble-Look Tissue Box Cover", cat: "Home Décor", room: "Home Décor", price: 222, memberPrice: 200, sku: "SH-10645", tag: "New", ph: "", img: "assets/products/dc02x.webp",
    imgs: ["assets/products/dc02x.webp", "assets/products/dc02x-2.webp", "assets/products/dc02x-3.webp", "assets/products/dc02x-4.webp", "assets/products/dc02x-5.webp"],
    sizes: [{ label: "Black + White", price: 222 }, { label: "White + Grey", price: 222 }, { label: "White + Tan", price: 222 }],
    desc: "A tissue box cover in black and white, white and grey, or white and tan, because the cardboard box it hides is not doing your bathroom any favours.",
    features: [
      "Covers a standard tissue box",
      "Three colourways",
      "Marble-look finish"
    ],
    specs: { "Type": "Decorative object", "Material": "Resin / composite", "Options": "3" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive cleaners and harsh solvents." },

  { id: "dc03x", name: "Crystal Camera Ornament", cat: "Home Décor", room: "Home Décor", price: 222, memberPrice: 200, sku: "SH-10646", tag: "New", ph: "", img: "assets/products/dc03x.webp",
    imgs: ["assets/products/dc03x.webp", "assets/products/dc03x-2.webp", "assets/products/dc03x-3.webp", "assets/products/dc03x-4.webp", "assets/products/dc03x-5.webp"],
    sizes: [{ label: "Stand Excluded", price: 222 }, { label: "Stand Included", price: 278 }],
    desc: "A crystal camera, with or without its stand. An object rather than a thing with a use, which is rather the point.",
    features: [
      "Crystal construction",
      "Stand included or excluded",
      "Decorative object"
    ],
    specs: { "Type": "Decorative object", "Material": "Glass", "Options": "2" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes." },

  { id: "dc04x", name: "Travertine Holder", cat: "Home Décor", room: "Home Décor", price: 254, memberPrice: 229, sku: "SH-10647", tag: "New", ph: "", img: "assets/products/dc04x.webp",
    imgs: ["assets/products/dc04x.webp", "assets/products/dc04x-2.webp", "assets/products/dc04x-3.webp", "assets/products/dc04x-4.webp", "assets/products/dc04x-5.webp"],
    desc: "Solid travertine, one size, for whatever you want to stand in it.",
    features: [
      "Solid travertine",
      "Single size",
      "Natural pitted texture"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural travertine", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry straight away. Travertine's open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "dc05x", name: "Travertine Ornaments", cat: "Home Décor", room: "Home Décor", price: 285, memberPrice: 256, sku: "SH-10648", tag: "New", ph: "", img: "assets/products/dc05x.webp",
    imgs: ["assets/products/dc05x.webp", "assets/products/dc05x-2.webp", "assets/products/dc05x-3.webp", "assets/products/dc05x-4.webp", "assets/products/dc05x-5.webp"],
    desc: "Travertine shapes for a shelf or coffee table, cut from the same stone as our trays.",
    features: [
      "Solid travertine",
      "Shelf or table scale",
      "Natural variation"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural travertine", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry straight away. Travertine's open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "dc06x", name: "Travertine Sphere (Three Sizes)", cat: "Home Décor", room: "Home Décor", price: 313, memberPrice: 282, sku: "SH-10649", tag: "New", ph: "", img: "assets/products/dc06x.webp",
    imgs: ["assets/products/dc06x.webp", "assets/products/dc06x-2.webp", "assets/products/dc06x-3.webp", "assets/products/dc06x-4.webp", "assets/products/dc06x-5.webp"],
    sizes: [{ label: "S", price: 313 }, { label: "M", price: 402 }, { label: "L", price: 591 }],
    desc: "A travertine ball in small, medium or large. Group all three in a bowl, which is the usual way.",
    features: [
      "Solid travertine sphere",
      "Small, Medium and Large",
      "Group in a bowl or tray"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural travertine", "Options": "3" },
    care: "Wipe with a soft, damp cloth and dry straight away. Travertine's open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "dc07x", name: "Swan Wine Decanter (1700ml)", cat: "Kitchenware", room: "Home Décor", price: 315, memberPrice: 284, sku: "SH-10650", tag: "New", ph: "", img: "assets/products/dc07x.webp",
    imgs: ["assets/products/dc07x.webp", "assets/products/dc07x-2.webp", "assets/products/dc07x-3.webp"],
    sizes: [{ label: "1700ml", price: 315 }],
    desc: "A 1.7 litre decanter in the shape of a swan, in red glass. Useful, and more decorative than most decanters manage.",
    features: [
      "1700ml capacity",
      "Red glass",
      "Sculptural swan form"
    ],
    specs: { "Type": "Decorative object", "Material": "Glass", "Options": "1" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes." },

  { id: "dc08x", name: "Travertine Vanity Tray", cat: "Home Décor", room: "Home Décor", price: 331, memberPrice: 298, sku: "SH-10651", tag: "New", ph: "", img: "assets/products/dc08x.webp",
    imgs: ["assets/products/dc08x.webp", "assets/products/dc08x-2.webp", "assets/products/dc08x-3.webp", "assets/products/dc08x-4.webp", "assets/products/dc08x-5.webp"],
    sizes: [{ label: "S", price: 331 }, { label: "L", price: 494 }],
    desc: "Travertine in two sizes, for a vanity or a side table.",
    features: [
      "Solid travertine",
      "Small and Large",
      "Vanity or side table"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural travertine", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry straight away. Travertine's open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "dc09x", name: "Marble Cake Stand", cat: "Kitchenware", room: "Home Décor", price: 333, memberPrice: 300, sku: "SH-10652", tag: "New", ph: "", img: "assets/products/dc09x.webp",
    imgs: ["assets/products/dc09x.webp", "assets/products/dc09x-2.webp", "assets/products/dc09x-3.webp", "assets/products/dc09x-4.webp", "assets/products/dc09x-5.webp"],
    sizes: [{ label: "Small / White Marble", price: 333 }, { label: "Small / Grey Marble", price: 333 }, { label: "Large / White Marble", price: 444 }, { label: "Large / Grey Marble", price: 444 }],
    desc: "White marble in small or large. Equally good holding a cake or standing empty with a candle on it.",
    features: [
      "White marble",
      "Small and Large",
      "Cake stand or display riser"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural marble", "Options": "4" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it away from vinegar, citrus and bleach, and stand it on felt to protect the surface underneath." },

  { id: "dc10x", name: "Travertine Tray (Three Sizes)", cat: "Home Décor", room: "Home Décor", price: 339, memberPrice: 305, sku: "SH-10653", tag: "New", ph: "", img: "assets/products/dc10x.webp",
    imgs: ["assets/products/dc10x.webp", "assets/products/dc10x-2.webp", "assets/products/dc10x-3.webp", "assets/products/dc10x-4.webp", "assets/products/dc10x-5.webp"],
    sizes: [{ label: "S", price: 339 }, { label: "M", price: 420 }, { label: "L", price: 491 }],
    desc: "Travertine in three sizes, so a set can be built up.",
    features: [
      "Solid travertine",
      "Three sizes",
      "Builds into a set"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural travertine", "Options": "3" },
    care: "Wipe with a soft, damp cloth and dry straight away. Travertine's open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "dc11x", name: "Travertine Lidded Jar", cat: "Home Décor", room: "Home Décor", price: 346, memberPrice: 311, sku: "SH-10654", tag: "New", ph: "", img: "assets/products/dc11x.webp",
    imgs: ["assets/products/dc11x.webp", "assets/products/dc11x-2.webp", "assets/products/dc11x-3.webp"],
    desc: "A lidded travertine jar, for cotton buds, jewellery or anything that shouldn't be on show.",
    features: [
      "Solid travertine with lid",
      "Single size",
      "Hides small clutter"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural travertine", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry straight away. Travertine's open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "dc12x", name: "Sandstone Tissue Box", cat: "Home Décor", room: "Home Décor", price: 350, memberPrice: 315, sku: "SH-10655", tag: "New", ph: "", img: "assets/products/dc12x.webp",
    imgs: ["assets/products/dc12x.webp", "assets/products/dc12x-2.webp", "assets/products/dc12x-3.webp", "assets/products/dc12x-4.webp"],
    sizes: [{ label: "Sandstone", price: 350 }],
    desc: "Sandstone, matte and warm, in a single finish.",
    features: [
      "Natural sandstone",
      "Matte finish",
      "Covers a standard box"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural stone", "Options": "1" },
    care: "Wipe with a soft, damp cloth. Avoid acidic and abrasive cleaners, which dull natural stone." },

  { id: "dc13x", name: "Rotating Hour Glass", cat: "Home Décor", room: "Home Décor", price: 352, memberPrice: 317, sku: "SH-10656", tag: "New", ph: "", img: "assets/products/dc13x.webp",
    imgs: ["assets/products/dc13x.webp", "assets/products/dc13x-2.webp", "assets/products/dc13x-3.webp", "assets/products/dc13x-4.webp", "assets/products/dc13x-5.webp"],
    sizes: [{ label: "Brushed Gold", price: 352 }],
    desc: "A brushed gold hour glass that turns in its frame, for a desk or a shelf.",
    features: [
      "Brushed gold frame",
      "Rotates in its stand",
      "Desk or shelf piece"
    ],
    specs: { "Type": "Decorative object", "Material": "Metal", "Options": "1" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "dc14x", name: "Sculpted Figure Set", cat: "Home Décor", room: "Home Décor", price: 378, memberPrice: 340, sku: "SH-10657", tag: "New", ph: "", img: "assets/products/dc14x.webp",
    imgs: ["assets/products/dc14x.webp", "assets/products/dc14x-2.webp", "assets/products/dc14x-3.webp", "assets/products/dc14x-4.webp", "assets/products/dc14x-5.webp"],
    sizes: [{ label: "Black Set", price: 378 }, { label: "Grey Set", price: 378 }, { label: "Off White Set", price: 378 }],
    desc: "A pair of sculpted figures in black, grey or off white. Bought as a set, because one alone looks lost.",
    features: [
      "Sold as a set",
      "Black, Grey or Off White",
      "Shelf or console scale"
    ],
    specs: { "Type": "Decorative object", "Material": "Resin / composite", "Options": "3" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive cleaners and harsh solvents." },

  { id: "dc15x", name: "Marble Essential Oil Burner", cat: "Home Décor", room: "Home Décor", price: 420, memberPrice: 378, sku: "SH-10658", tag: "New", ph: "", img: "assets/products/dc15x.webp",
    imgs: ["assets/products/dc15x.webp", "assets/products/dc15x-2.webp", "assets/products/dc15x-3.webp", "assets/products/dc15x-4.webp", "assets/products/dc15x-5.webp"],
    sizes: [{ label: "A", price: 420 }, { label: "B", price: 420 }, { label: "C", price: 420 }, { label: "D", price: 420 }, { label: "E", price: 420 }, { label: "F", price: 420 }],
    desc: "Marble in six designs, A through F, so a pair need not match exactly.",
    features: [
      "Natural marble",
      "Six designs",
      "For essential oils"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural marble", "Options": "6" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it away from vinegar, citrus and bleach, and stand it on felt to protect the surface underneath." },

  { id: "dc16x", name: "Stone Tissue Box", cat: "Home Décor", room: "Home Décor", price: 457, memberPrice: 411, sku: "SH-10659", tag: "New", ph: "", img: "assets/products/dc16x.webp",
    imgs: ["assets/products/dc16x.webp", "assets/products/dc16x-2.webp", "assets/products/dc16x-3.webp", "assets/products/dc16x-4.webp", "assets/products/dc16x-5.webp"],
    desc: "A stone tissue box in a single finish.",
    features: [
      "Natural stone",
      "Single finish",
      "Covers a standard box"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural stone", "Options": "1" },
    care: "Wipe with a soft, damp cloth. Avoid acidic and abrasive cleaners, which dull natural stone." },

  { id: "dc17x", name: "Marble Tissue Box", cat: "Home Décor", room: "Home Décor", price: 457, memberPrice: 411, sku: "SH-10660", tag: "New", ph: "", img: "assets/products/dc17x.webp",
    imgs: ["assets/products/dc17x.webp", "assets/products/dc17x-2.webp", "assets/products/dc17x-3.webp", "assets/products/dc17x-4.webp"],
    desc: "Solid marble, one finish. Heavy enough that pulling a tissue doesn't move it.",
    features: [
      "Solid marble",
      "Weighted, stays put",
      "Single finish"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural marble", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it away from vinegar, citrus and bleach, and stand it on felt to protect the surface underneath." },

  { id: "dc18x", name: "Travertine Object Collection", cat: "Home Décor", room: "Home Décor", price: 461, memberPrice: 415, sku: "SH-10661", tag: "New", ph: "", img: "assets/products/dc18x.webp",
    imgs: ["assets/products/dc18x.webp", "assets/products/dc18x-2.webp", "assets/products/dc18x-3.webp", "assets/products/dc18x-4.webp", "assets/products/dc18x-5.webp"],
    sizes: [{ label: "1", price: 461 }, { label: "3", price: 476 }, { label: "2", price: 517 }, { label: "4", price: 572 }, { label: "5", price: 620 }],
    desc: "Five travertine pieces, numbered 1 to 5, bought singly. Pick two or three of different heights.",
    features: [
      "Solid travertine",
      "Five designs",
      "Vary heights in a group"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural travertine", "Options": "5" },
    care: "Wipe with a soft, damp cloth and dry straight away. Travertine's open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "dc19x", name: "Travertine Storage Box", cat: "Home Décor", room: "Home Décor", price: 461, memberPrice: 415, sku: "SH-10662", tag: "New", ph: "", img: "assets/products/dc19x.webp",
    imgs: ["assets/products/dc19x.webp", "assets/products/dc19x-2.webp", "assets/products/dc19x-3.webp", "assets/products/dc19x-4.webp", "assets/products/dc19x-5.webp"],
    sizes: [{ label: "Travertine", price: 461 }],
    desc: "A lidded travertine box, larger than the jar, for a dresser or a coffee table.",
    features: [
      "Solid travertine with lid",
      "Dresser or table scale",
      "Natural texture"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural travertine", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry straight away. Travertine's open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "dc20x", optionLabel: "Colour", name: "Travertine Tissue Box", cat: "Home Décor", room: "Home Décor", price: 535, memberPrice: 482, sku: "SH-10663", tag: "New", ph: "", img: "assets/products/dc20x.webp",
    imgs: ["assets/products/dc20x.webp", "assets/products/dc20x-2.webp", "assets/products/dc20x-3.webp", "assets/products/dc20x-4.webp", "assets/products/dc20x-5.webp"],
    sizes: [{ label: "Beige", price: 535 }, { label: "Light Beige", price: 535 }],
    desc: "Travertine in beige or light beige.",
    features: [
      "Solid travertine",
      "Beige or Light Beige",
      "Covers a standard box"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural travertine", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry straight away. Travertine's open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "dc21x", name: "Crystal Glass Decanter", cat: "Kitchenware", room: "Home Décor", price: 550, memberPrice: 495, sku: "SH-10664", tag: "New", ph: "", img: "assets/products/dc21x.webp",
    imgs: ["assets/products/dc21x.webp", "assets/products/dc21x-2.webp", "assets/products/dc21x-3.webp", "assets/products/dc21x-4.webp", "assets/products/dc21x-5.webp"],
    desc: "A crystal decanter, plainly done, for spirits or water on a tray.",
    features: [
      "Crystal glass",
      "Single size",
      "Spirits or water"
    ],
    specs: { "Type": "Decorative object", "Material": "Glass", "Options": "1" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes." },

  { id: "dc22x", name: "Walnut Tissue Box", cat: "Home Décor", room: "Home Décor", price: 554, memberPrice: 499, sku: "SH-10665", tag: "New", ph: "", img: "assets/products/dc22x.webp",
    imgs: ["assets/products/dc22x.webp", "assets/products/dc22x-2.webp", "assets/products/dc22x-3.webp", "assets/products/dc22x-4.webp", "assets/products/dc22x-5.webp"],
    sizes: [{ label: "Walnut", price: 554 }],
    desc: "Solid walnut, warm against stone and metal.",
    features: [
      "Solid walnut",
      "Warm timber tone",
      "Covers a standard box"
    ],
    specs: { "Type": "Decorative object", "Material": "Solid timber", "Options": "1" },
    care: "Dust with a dry cloth and keep out of direct sun. Wipe spills promptly rather than letting them sit." },

  { id: "dc23x", name: "Travertine Bookends", cat: "Home Décor", room: "Home Décor", price: 620, memberPrice: 558, sku: "SH-10666", tag: "New", ph: "", img: "assets/products/dc23x.webp",
    imgs: ["assets/products/dc23x.webp", "assets/products/dc23x-2.webp", "assets/products/dc23x-3.webp", "assets/products/dc23x-4.webp", "assets/products/dc23x-5.webp"],
    sizes: [{ label: "Complete Set", price: 620 }],
    desc: "A pair of travertine bookends, heavy enough to hold a real shelf of books.",
    features: [
      "Solid travertine pair",
      "Holds a full shelf",
      "Sold as a set"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural travertine", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry straight away. Travertine's open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "dc24x", optionLabel: "Colour", sizeImg: {"Gold":"assets/products/dc24x-3.webp","Black":"assets/products/dc24x-2.webp"}, name: "Curved Wine Holder", cat: "Kitchenware", room: "Home Décor", price: 646, memberPrice: 581, sku: "SH-10667", tag: "New", ph: "", img: "assets/products/dc24x.webp",
    imgs: ["assets/products/dc24x.webp", "assets/products/dc24x-2.webp", "assets/products/dc24x-3.webp", "assets/products/dc24x-4.webp", "assets/products/dc24x-5.webp"],
    sizes: [{ label: "Gold", price: 646 }, { label: "Black", price: 646 }],
    desc: "A curved holder that balances a bottle on its own, in gold or black. It looks like a trick, and it is.",
    features: [
      "Balances a bottle unaided",
      "Gold or Black",
      "Counter or table piece"
    ],
    specs: { "Type": "Decorative object", "Material": "Metal", "Options": "2" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "dc25x", name: "Book Holder", cat: "Home Décor", room: "Home Décor", price: 719, memberPrice: 647, sku: "SH-10668", tag: "New", ph: "", img: "assets/products/dc25x.webp",
    imgs: ["assets/products/dc25x.webp", "assets/products/dc25x-2.webp", "assets/products/dc25x-3.webp"],
    sizes: [{ label: "Brown", price: 719 }],
    desc: "A brown book holder for an open book, so a cookbook or an art book can be left on display.",
    features: [
      "Holds a book open",
      "Brown finish",
      "Kitchen or shelf"
    ],
    specs: { "Type": "Decorative object", "Material": "Solid timber", "Options": "1" },
    care: "Dust with a dry cloth and keep out of direct sun. Wipe spills promptly rather than letting them sit." },

  { id: "dc26x", name: "Natural Travertine Bookends", cat: "Home Décor", room: "Home Décor", price: 720, memberPrice: 648, sku: "SH-10669", tag: "New", ph: "", img: "assets/products/dc26x.webp",
    imgs: ["assets/products/dc26x.webp", "assets/products/dc26x-2.webp", "assets/products/dc26x-3.webp", "assets/products/dc26x-4.webp"],
    sizes: [{ label: "Complete Set", price: 720 }],
    desc: "A second pair of travertine bookends, in a more natural, unfinished cut.",
    features: [
      "Solid travertine pair",
      "Natural unfinished cut",
      "Sold as a set"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural travertine", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry straight away. Travertine's open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "dc27x", optionLabel: "Colour", sizeImg: {"Green":"assets/products/dc27x-2.webp","White":"assets/products/dc27x-3.webp"}, name: "Marble Book Holder", cat: "Home Décor", room: "Home Décor", price: 791, memberPrice: 712, sku: "SH-10670", tag: "New", ph: "", img: "assets/products/dc27x.webp",
    imgs: ["assets/products/dc27x.webp", "assets/products/dc27x-2.webp", "assets/products/dc27x-3.webp", "assets/products/dc27x-4.webp", "assets/products/dc27x-5.webp"],
    sizes: [{ label: "Green", price: 791 }, { label: "White", price: 791 }],
    desc: "Marble in green or white. Green marble is the rarer and the better of the two.",
    features: [
      "Natural marble",
      "Green or White",
      "Holds a book open"
    ],
    specs: { "Type": "Decorative object", "Material": "Natural marble", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it away from vinegar, citrus and bleach, and stand it on felt to protect the surface underneath." },

  { id: "dc28x", name: "Page Keeper (Small or Large)", cat: "Home Décor", room: "Home Décor", price: 1089, memberPrice: 980, sku: "SH-10671", tag: "New", ph: "", img: "assets/products/dc28x.webp",
    imgs: ["assets/products/dc28x.webp", "assets/products/dc28x-2.webp", "assets/products/dc28x-3.webp", "assets/products/dc28x-4.webp", "assets/products/dc28x-5.webp"],
    sizes: [{ label: "S", price: 1089 }, { label: "L", price: 1274 }],
    desc: "A weighted page keeper in two sizes, for holding a book flat while you read or cook.",
    features: [
      "Weighted to hold pages",
      "Small and Large",
      "Reading or cooking"
    ],
    specs: { "Type": "Decorative object", "Material": "Metal", "Options": "2" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "dc29x", name: "Silver Sculpture", cat: "Home Décor", room: "Home Décor", price: 1778, memberPrice: 1600, sku: "SH-10672", tag: "New", ph: "", img: "assets/products/dc29x.webp",
    imgs: ["assets/products/dc29x.webp", "assets/products/dc29x-2.webp", "assets/products/dc29x-3.webp", "assets/products/dc29x-4.webp", "assets/products/dc29x-5.webp"],
    sizes: [{ label: "Silver", price: 1778 }],
    desc: "A silver sculpture for a console or a shelf. A statement object rather than a small accent.",
    features: [
      "Silver finish",
      "Console or shelf scale",
      "Statement object"
    ],
    specs: { "Type": "Decorative object", "Material": "Resin / composite", "Options": "1" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive cleaners and harsh solvents." },

  { id: "dc30x", name: "Leopard Statue", cat: "Home Décor", room: "Home Décor", price: 2019, memberPrice: 1817, sku: "SH-10673", tag: "New", ph: "", img: "assets/products/dc30x.webp",
    imgs: ["assets/products/dc30x.webp", "assets/products/dc30x-2.webp", "assets/products/dc30x-3.webp", "assets/products/dc30x-4.webp", "assets/products/dc30x-5.webp"],
    sizes: [{ label: "Black + Gold", price: 2019 }],
    desc: "A leopard in black and gold. Not a subtle piece, and shouldn't be.",
    features: [
      "Black and gold finish",
      "Large decorative statue",
      "A deliberate focal point"
    ],
    specs: { "Type": "Decorative object", "Material": "Resin / composite", "Options": "1" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive cleaners and harsh solvents." },

  { id: "dc31x", optionLabel: "Colour", sizeImg: {"White + Gold":"assets/products/dc31x.webp","Black + Gold":"assets/products/dc31x-5.webp"}, name: "Bar Cart", cat: "Kitchenware", room: "Home Décor", price: 3257, memberPrice: 2931, sku: "SH-10674", tag: "New", ph: "", img: "assets/products/dc31x.webp",
    imgs: ["assets/products/dc31x.webp", "assets/products/dc31x-2.webp", "assets/products/dc31x-3.webp", "assets/products/dc31x-4.webp", "assets/products/dc31x-5.webp"],
    lead: "8 to 10 weeks",
    sizes: [{ label: "White + Gold", price: 3257 }, { label: "Black + Gold", price: 3257 }],
    desc: "A bar cart in white and gold or black and gold, for bottles, glasses and the ice bucket.",
    features: [
      "White + Gold or Black + Gold",
      "Rolls where it's needed",
      "Bottles, glasses and barware"
    ],
    specs: { "Type": "Decorative object", "Material": "Metal", "Options": "2" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "dc32x", name: "Concave Wall Mirror (Five Sizes)", cat: "Home Décor", room: "Home Décor", price: 8759, memberPrice: 7883, sku: "SH-10675", tag: "New", ph: "", img: "assets/products/dc32x.webp",
    imgs: ["assets/products/dc32x.webp", "assets/products/dc32x-2.webp", "assets/products/dc32x-3.webp", "assets/products/dc32x-4.webp", "assets/products/dc32x-5.webp"],
    sizes: [{ label: "100cm ø", price: 8759 }, { label: "110cm ø", price: 9444 }, { label: "120cm ø", price: 10407 }, { label: "130cm ø", price: 10907 }, { label: "140cm ø", price: 11944 }, { label: "150cm ø", price: 12759 }],
    desc: "A concave round mirror from 100cm to 140cm across. The curve bends the reflection, so it reads as an object rather than a mirror.",
    features: [
      "Concave curved glass",
      "100cm to 140cm diameter",
      "Reads as sculpture"
    ],
    specs: { "Type": "Decorative object", "Material": "Glass", "Options": "6" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes." },

  { id: "lt01", name: "Gold Table Lamp Pair", cat: "Home Décor", room: "Home Décor", price: 204, memberPrice: 184, sku: "SH-10553", tag: "New", ph: "", img: "assets/products/lt01.webp",
    imgs: ["assets/products/lt01.webp", "assets/products/lt01-2.webp", "assets/products/lt01-3.webp", "assets/products/lt01-4.webp", "assets/products/lt01-5.webp"],
    sizes: [{ label: "Gold/sitting", price: 204 }, { label: "Gold/standing leg out", price: 204 }, { label: "Gold/sitting off ledge", price: 204 }, { label: "Gold/standing with arm crossed", price: 204 }, { label: "Gold/sitting knees bent", price: 204 }, { label: "Silver/sitting", price: 204 }, { label: "Silver/standing leg out", price: 204 }, { label: "Silver/sitting off ledge", price: 204 }, { label: "Silver/standing with arm crossed", price: 204 }, { label: "Silver/sitting knees bent", price: 204 }],
    desc: "A pair of small gold lamps, one sitting and one standing, meant to be used together on a console or a shelf.",
    features: [
      "Gold finish",
      "Sitting and standing forms",
      "Designed to be grouped"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "10", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt02", name: "Pendant Light (28 or 30cm)", cat: "Home Décor", room: "Home Décor", price: 267, memberPrice: 240, sku: "SH-10554", tag: "New", ph: "", img: "assets/products/lt02.webp",
    imgs: ["assets/products/lt02.webp", "assets/products/lt02-2.webp", "assets/products/lt02-3.webp", "assets/products/lt02-4.webp", "assets/products/lt02-5.webp"],
    sizes: [{ label: "28cm", price: 267 }, { label: "30cm", price: 309 }],
    desc: "A compact pendant in two diameters, the right scale above a bedside or a kitchen bench.",
    features: [
      "28cm and 30cm",
      "Suits a bedside or bench",
      "Compact scale"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "2", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt03", name: "Glass Wall Light, Gold or Black", cat: "Home Décor", room: "Home Décor", price: 406, memberPrice: 365, sku: "SH-10555", tag: "New", ph: "", img: "assets/products/lt03.webp",
    imgs: ["assets/products/lt03.webp", "assets/products/lt03-2.webp", "assets/products/lt03-3.webp", "assets/products/lt03-4.webp", "assets/products/lt03-5.webp"],
    sizes: [{ label: "Gold / Warm White", price: 406 }, { label: "Gold / Cool White", price: 406 }, { label: "Black / Warm White", price: 406 }, { label: "Black / Cool White", price: 406 }],
    desc: "An LED wall light in gold or black, with a choice of warm or cool white.",
    features: [
      "Gold or Black finish",
      "Warm or Cool White",
      "LED, wall mounted"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "4", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt04", name: "Tinted Glass Lamp", cat: "Home Décor", room: "Home Décor", price: 550, memberPrice: 495, sku: "SH-10556", tag: "New", ph: "", img: "assets/products/lt04.webp",
    imgs: ["assets/products/lt04.webp", "assets/products/lt04-2.webp", "assets/products/lt04-3.webp", "assets/products/lt04-4.webp", "assets/products/lt04-5.webp"],
    sizes: [{ label: "Black Tint / UK Plug", price: 550 }, { label: "Black Tint / EU Plug", price: 550 }, { label: "Black Tint / AU Plug", price: 550 }, { label: "Black Tint / US Plug", price: 550 }, { label: "Brown Tint / UK Plug", price: 550 }, { label: "Brown Tint / EU Plug", price: 550 }, { label: "Brown Tint / AU Plug", price: 550 }, { label: "Brown Tint / US Plug", price: 550 }],
    desc: "Tinted glass with a plug, available with a UK or EU fitting. Check you need an adaptor before ordering.",
    features: [
      "Tinted glass body",
      "UK or EU plug",
      "Table lamp scale"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "8", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt05", name: "Travertine Wall Light, Round or Square", cat: "Home Décor", room: "Home Décor", price: 550, memberPrice: 495, sku: "SH-10557", tag: "New", ph: "", img: "assets/products/lt05.webp",
    imgs: ["assets/products/lt05.webp", "assets/products/lt05-2.webp", "assets/products/lt05-3.webp", "assets/products/lt05-4.webp", "assets/products/lt05-5.webp"],
    sizes: [{ label: "Round", price: 550 }, { label: "Square", price: 550 }],
    desc: "Travertine on the wall, round or square. Stone diffuses light softly rather than throwing it.",
    features: [
      "Natural travertine",
      "Round or Square",
      "Soft, diffused light"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "2", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt06", name: "Pendant Light (40cm)", cat: "Home Décor", room: "Home Décor", price: 593, memberPrice: 534, sku: "SH-10558", tag: "New", ph: "", img: "assets/products/lt06.webp",
    imgs: ["assets/products/lt06.webp", "assets/products/lt06-2.webp", "assets/products/lt06-3.webp", "assets/products/lt06-4.webp", "assets/products/lt06-5.webp"],
    sizes: [{ label: "40cm / Warm White", price: 593 }, { label: "40cm / Cool White", price: 593 }, { label: "40cm / Neutral White", price: 593 }, { label: "50cm / Warm White", price: 811 }, { label: "50cm / Cool White", price: 811 }, { label: "50cm / Neutral White", price: 811 }, { label: "60cm / Warm White", price: 1022 }, { label: "60cm / Cool White", price: 1022 }, { label: "60cm / Neutral White", price: 1022 }, { label: "80cm / Warm White", price: 1387 }, { label: "80cm / Cool White", price: 1387 }, { label: "80cm / Neutral White", price: 1387 }],
    desc: "A 40cm pendant with warm, cool or neutral white.",
    features: [
      "40cm diameter",
      "Three colour temperatures",
      "Pendant fitting"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "12", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt07", name: "Marble Wall Light, Gold or Black", cat: "Home Décor", room: "Home Décor", price: 643, memberPrice: 579, sku: "SH-10559", tag: "New", ph: "", img: "assets/products/lt07.webp",
    imgs: ["assets/products/lt07.webp", "assets/products/lt07-2.webp", "assets/products/lt07-3.webp", "assets/products/lt07-4.webp", "assets/products/lt07-5.webp"],
    sizes: [{ label: "Gold / 35cm", price: 643 }, { label: "Black / 35cm", price: 643 }, { label: "Gold / 50cm", price: 972 }, { label: "Black / 50cm", price: 972 }],
    desc: "Marble with gold or black, at 35cm or 50cm.",
    features: [
      "Natural marble",
      "Gold or Black",
      "35cm and 50cm"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "4", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt08", name: "Travertine Wall Light", cat: "Home Décor", room: "Home Décor", price: 646, memberPrice: 581, sku: "SH-10560", tag: "New", ph: "", img: "assets/products/lt08.webp",
    imgs: ["assets/products/lt08.webp", "assets/products/lt08-2.webp", "assets/products/lt08-3.webp", "assets/products/lt08-4.webp", "assets/products/lt08-5.webp"],
    desc: "A single travertine LED wall light.",
    features: [
      "Natural travertine",
      "LED",
      "Single size"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "1", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt09", name: "Travertine Wall Light (Slim)", cat: "Home Décor", room: "Home Décor", price: 665, memberPrice: 598, sku: "SH-10561", tag: "New", ph: "", img: "assets/products/lt09.webp",
    imgs: ["assets/products/lt09.webp", "assets/products/lt09-2.webp", "assets/products/lt09-3.webp", "assets/products/lt09-4.webp", "assets/products/lt09-5.webp"],
    desc: "A slim travertine wall light, one size.",
    features: [
      "Natural travertine",
      "Slim profile",
      "Wall mounted"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "1", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt10", name: "Travertine Wall Light, Warm or Cool", cat: "Home Décor", room: "Home Décor", price: 717, memberPrice: 645, sku: "SH-10562", tag: "New", ph: "", img: "assets/products/lt10.webp",
    imgs: ["assets/products/lt10.webp", "assets/products/lt10-2.webp", "assets/products/lt10-3.webp", "assets/products/lt10-4.webp", "assets/products/lt10-5.webp"],
    sizes: [{ label: "Cool White", price: 717 }, { label: "Warm White", price: 717 }],
    desc: "Travertine with a choice of warm or cool white.",
    features: [
      "Natural travertine",
      "Warm or Cool White",
      "Wall mounted"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "2", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt11", optionLabel: "Colour", sizeImg: {"White + Gold":"assets/products/lt11-4.webp","Grey + Gold":"assets/products/lt11-2.webp"}, name: "Gold-Trimmed Table Lamp", cat: "Home Décor", room: "Home Décor", price: 722, memberPrice: 650, sku: "SH-10563", tag: "New", ph: "", img: "assets/products/lt11.webp",
    imgs: ["assets/products/lt11.webp", "assets/products/lt11-2.webp", "assets/products/lt11-3.webp", "assets/products/lt11-4.webp", "assets/products/lt11-5.webp"],
    sizes: [{ label: "White + Gold", price: 722 }, { label: "Grey + Gold", price: 722 }],
    desc: "White and gold, or grey and gold.",
    features: [
      "Gold trim",
      "White + Gold or Grey + Gold",
      "Table lamp"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "2", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt12", name: "Linear Wall Light (60cm)", cat: "Home Décor", room: "Home Décor", price: 739, memberPrice: 665, sku: "SH-10564", tag: "New", ph: "", img: "assets/products/lt12.webp",
    imgs: ["assets/products/lt12.webp", "assets/products/lt12-2.webp", "assets/products/lt12-3.webp", "assets/products/lt12-4.webp", "assets/products/lt12-5.webp"],
    sizes: [{ label: "Gold / 60cm / Neutral White", price: 739 }, { label: "Gold / 60cm / Warm White", price: 739 }, { label: "Gold / 60cm / Cool White", price: 739 }, { label: "Black / 60cm / Neutral White", price: 739 }, { label: "Black / 60cm / Warm White", price: 739 }, { label: "Black / 60cm / Cool White", price: 739 }, { label: "Gold / 90cm / Neutral White", price: 906 }, { label: "Gold / 90cm / Warm White", price: 906 }, { label: "Gold / 90cm / Cool White", price: 906 }, { label: "Black / 90cm / Neutral White", price: 906 }, { label: "Black / 90cm / Warm White", price: 906 }, { label: "Black / 90cm / Cool White", price: 906 }, { label: "Gold / 120cm / Neutral White", price: 1070 }, { label: "Gold / 120cm / Warm White", price: 1070 }, { label: "Gold / 120cm / Cool White", price: 1070 }, { label: "Black / 120cm / Neutral White", price: 1070 }, { label: "Black / 120cm / Warm White", price: 1070 }, { label: "Black / 120cm / Cool White", price: 1070 }],
    desc: "A 60cm linear LED in gold, with three colour temperatures.",
    features: [
      "60cm linear LED",
      "Gold finish",
      "Neutral, Warm or Cool White"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "18", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt13", name: "Travertine Pendant Light", cat: "Home Décor", room: "Home Décor", price: 767, memberPrice: 690, sku: "SH-10565", tag: "New", ph: "", img: "assets/products/lt13.webp",
    imgs: ["assets/products/lt13.webp", "assets/products/lt13-2.webp", "assets/products/lt13-3.webp", "assets/products/lt13-4.webp", "assets/products/lt13-5.webp"],
    sizes: [{ label: "A / Warm White", price: 767 }, { label: "A / Cool White", price: 767 }, { label: "A / Neutral White", price: 767 }, { label: "B / Warm White", price: 767 }, { label: "B / Cool White", price: 767 }, { label: "B / Neutral White", price: 767 }],
    desc: "Travertine pendants in several designs and three colour temperatures.",
    features: [
      "Natural travertine",
      "Several designs",
      "Three colour temperatures"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "6", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt14", name: "Travertine Wall Light (Three Tones)", cat: "Home Décor", room: "Home Décor", price: 776, memberPrice: 698, sku: "SH-10566", tag: "New", ph: "", img: "assets/products/lt14.webp",
    imgs: ["assets/products/lt14.webp", "assets/products/lt14-2.webp", "assets/products/lt14-3.webp", "assets/products/lt14-4.webp", "assets/products/lt14-5.webp"],
    sizes: [{ label: "Warm White", price: 776 }, { label: "Neutral White", price: 776 }, { label: "Cool White", price: 776 }],
    desc: "Travertine with warm, neutral or cool white.",
    features: [
      "Natural travertine",
      "Three colour temperatures",
      "Wall mounted"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "3", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt15", name: "Beige Travertine Pendant", cat: "Home Décor", room: "Home Décor", price: 828, memberPrice: 745, sku: "SH-10567", tag: "New", ph: "", img: "assets/products/lt15.webp",
    imgs: ["assets/products/lt15.webp", "assets/products/lt15-2.webp", "assets/products/lt15-3.webp", "assets/products/lt15-4.webp", "assets/products/lt15-5.webp"],
    sizes: [{ label: "Beige / Warm White 3000k", price: 828 }, { label: "Beige / Neutral White 4000K", price: 828 }, { label: "Beige / Cool White 6000K", price: 828 }, { label: "Black / Warm White 3000k", price: 828 }, { label: "Black / Neutral White 4000K", price: 828 }, { label: "Black / Cool White 6000K", price: 828 }],
    desc: "Beige travertine, with 3000K warm or 4000K neutral white.",
    features: [
      "Beige travertine",
      "3000K or 4000K",
      "Pendant fitting"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "6", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt16", optionLabel: "Colour", sizeImg: {"Silver":"assets/products/lt16-5.webp"}, name: "Table Lamp in Silver or Black", cat: "Home Décor", room: "Home Décor", price: 865, memberPrice: 778, sku: "SH-10568", tag: "New", ph: "", img: "assets/products/lt16.webp",
    imgs: ["assets/products/lt16.webp", "assets/products/lt16-2.webp", "assets/products/lt16-3.webp", "assets/products/lt16-4.webp", "assets/products/lt16-5.webp"],
    sizes: [{ label: "Silver", price: 865 }, { label: "Black", price: 865 }],
    desc: "Silver or black, a plain lamp done well.",
    features: [
      "Silver or Black",
      "Table lamp scale",
      "Simple form"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "2", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt17", name: "Pendant Light (35 or 45cm)", cat: "Home Décor", room: "Home Décor", price: 887, memberPrice: 798, sku: "SH-10569", tag: "New", ph: "", img: "assets/products/lt17.webp",
    imgs: ["assets/products/lt17.webp", "assets/products/lt17-2.webp", "assets/products/lt17-3.webp", "assets/products/lt17-4.webp", "assets/products/lt17-5.webp"],
    sizes: [{ label: "35cm / Cool White", price: 887 }, { label: "35cm / Warm White", price: 887 }, { label: "45cm / Cool White", price: 1087 }, { label: "45cm / Warm White", price: 1087 }, { label: "55cm / Cool White", price: 1402 }, { label: "55cm / Warm White", price: 1402 }, { label: "65cm / Cool White", price: 1991 }, { label: "65cm / Warm White", price: 1991 }],
    desc: "Two diameters, warm or cool white.",
    features: [
      "35cm and 45cm",
      "Warm or Cool White",
      "Pendant fitting"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "8", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt18", name: "Travertine Pendant (30 or 40cm)", cat: "Home Décor", room: "Home Décor", price: 898, memberPrice: 808, sku: "SH-10570", tag: "New", ph: "", img: "assets/products/lt18.webp",
    imgs: ["assets/products/lt18.webp", "assets/products/lt18-2.webp", "assets/products/lt18-3.webp", "assets/products/lt18-4.webp", "assets/products/lt18-5.webp"],
    sizes: [{ label: "30cm / Warm White", price: 898 }, { label: "30cm / Cool White", price: 898 }, { label: "40cm / Warm White", price: 1176 }, { label: "40cm / Cool White", price: 1176 }],
    desc: "Travertine at 30cm or 40cm, warm or cool.",
    features: [
      "Natural travertine",
      "30cm and 40cm",
      "Warm or Cool White"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "4", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt19", name: "Crystal Ceiling Light", cat: "Home Décor", room: "Home Décor", price: 907, memberPrice: 816, sku: "SH-10571", tag: "New", ph: "", img: "assets/products/lt19.webp",
    imgs: ["assets/products/lt19.webp", "assets/products/lt19-2.webp", "assets/products/lt19-3.webp", "assets/products/lt19-4.webp", "assets/products/lt19-5.webp"],
    sizes: [{ label: "Silver 60cm", price: 907 }, { label: "Gold 60cm", price: 907 }, { label: "Silver 80cm", price: 1278 }, { label: "Gold 80cm", price: 1278 }],
    desc: "Crystal glass at 60cm or 80cm, in silver or gold. A flush ceiling fitting rather than a pendant.",
    features: [
      "Crystal glass",
      "60cm and 80cm",
      "Silver or Gold"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "4", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt20", name: "Marble Wall Sconce", cat: "Home Décor", room: "Home Décor", price: 920, memberPrice: 828, sku: "SH-10572", tag: "New", ph: "", img: "assets/products/lt20.webp",
    imgs: ["assets/products/lt20.webp", "assets/products/lt20-2.webp", "assets/products/lt20-3.webp", "assets/products/lt20-4.webp", "assets/products/lt20-5.webp"],
    sizes: [{ label: "S / Warm White", price: 920 }, { label: "S / Nature White", price: 920 }, { label: "S / Cool White", price: 920 }, { label: "L / Warm White", price: 961 }, { label: "L / Nature White", price: 961 }, { label: "L / Cool White", price: 961 }],
    desc: "A marble LED sconce in three sizes and three colour temperatures.",
    features: [
      "Natural marble",
      "Three sizes",
      "Three colour temperatures"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "6", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt21", name: "Glass Pendant, 2 or 5 Heads", cat: "Home Décor", room: "Home Décor", price: 994, memberPrice: 895, sku: "SH-10573", tag: "New", ph: "", img: "assets/products/lt21.webp",
    imgs: ["assets/products/lt21.webp", "assets/products/lt21-2.webp", "assets/products/lt21-3.webp", "assets/products/lt21-4.webp", "assets/products/lt21-5.webp"],
    sizes: [{ label: "2 Heads / Warm White", price: 994 }, { label: "2 Heads / Cold White", price: 994 }, { label: "5 Heads / Warm White", price: 2583 }, { label: "5 Heads / Cold White", price: 2583 }, { label: "7 Heads / Warm White", price: 2961 }, { label: "7 Heads / Cold White", price: 2961 }],
    desc: "Glass pendants with two or five heads, warm or cold white.",
    features: [
      "Glass shades",
      "2 or 5 heads",
      "Warm or Cold White"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "6", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt22", name: "Travertine Wall Light (3000K or 4000K)", cat: "Home Décor", room: "Home Décor", price: 1109, memberPrice: 998, sku: "SH-10574", tag: "New", ph: "", img: "assets/products/lt22.webp",
    imgs: ["assets/products/lt22.webp", "assets/products/lt22-2.webp", "assets/products/lt22-3.webp", "assets/products/lt22-4.webp", "assets/products/lt22-5.webp"],
    sizes: [{ label: "Travertine / 3000K", price: 1109 }, { label: "Travertine / 4000K", price: 1109 }, { label: "Travertine / 6000K", price: 1109 }],
    desc: "Travertine with a choice of two colour temperatures.",
    features: [
      "Natural travertine",
      "3000K or 4000K",
      "Wall mounted"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "3", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt23", name: "Multi-Head Pendant (Seven Lengths)", cat: "Home Décor", room: "Home Décor", price: 1157, memberPrice: 1041, sku: "SH-10575", tag: "New", ph: "", img: "assets/products/lt23.webp",
    imgs: ["assets/products/lt23.webp", "assets/products/lt23-2.webp", "assets/products/lt23-3.webp", "assets/products/lt23-4.webp", "assets/products/lt23-5.webp"],
    sizes: [{ label: "55cm", price: 1157 }, { label: "65cm", price: 1424 }, { label: "75cm", price: 1717 }, { label: "100cm", price: 2013 }, { label: "120cm", price: 2204 }, { label: "130cm", price: 2480 }, { label: "150cm", price: 3417 }, { label: "3-Heads", price: 3602 }],
    desc: "A three-head pendant across lengths from 55cm to 150cm, so it suits a bench or a stairwell.",
    features: [
      "Three heads",
      "Seven lengths, 55cm to 150cm",
      "Bench or stairwell"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "8", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt24", name: "Glass Floor Lamp (Three Heights)", cat: "Home Décor", room: "Home Décor", price: 1167, memberPrice: 1050, sku: "SH-10576", tag: "New", ph: "", img: "assets/products/lt24.webp",
    imgs: ["assets/products/lt24.webp", "assets/products/lt24-2.webp", "assets/products/lt24-3.webp", "assets/products/lt24-4.webp", "assets/products/lt24-5.webp"],
    sizes: [{ label: "32cm / Warm White", price: 1167 }, { label: "53cm / Warm White", price: 1667 }, { label: "57cm / Warm White", price: 1667 }, { label: "64cm / Warm White", price: 1833 }, { label: "89cm / Warm White", price: 2259 }, { label: "84cm / Warm White", price: 2389 }, { label: "96cm / Warm White", price: 2583 }, { label: "121cm / Warm White", price: 2867 }, { label: "117cm / Warm White", price: 3106 }, { label: "128cm / Warm White", price: 3583 }, { label: "149cm / Warm White", price: 3822 }, { label: "153cm / Warm White", price: 3867 }],
    desc: "Glass at 32cm, 53cm or 57cm, warm white.",
    features: [
      "Glass body",
      "Three heights",
      "Warm White"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "12", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt25", optionLabel: "Colour", sizeImg: {"Navy":"assets/products/lt25-2.webp","Light Green":"assets/products/lt25-4.webp","Emerald Green":"assets/products/lt25-3.webp","Pink":"assets/products/lt25-5.webp"}, name: "Crystal Lamp in Four Colours", cat: "Home Décor", room: "Home Décor", price: 1217, memberPrice: 1095, sku: "SH-10577", tag: "New", ph: "", img: "assets/products/lt25.webp",
    imgs: ["assets/products/lt25.webp", "assets/products/lt25-2.webp", "assets/products/lt25-3.webp", "assets/products/lt25-4.webp", "assets/products/lt25-5.webp"],
    sizes: [{ label: "Navy", price: 1217 }, { label: "Light Green", price: 1217 }, { label: "Emerald Green", price: 1217 }, { label: "Pink", price: 1217 }],
    desc: "Crystal in navy, light green, emerald green or pink. Coloured crystal is unusual and worth it.",
    features: [
      "Crystal construction",
      "Navy, Light Green, Emerald or Pink",
      "Table lamp"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "4", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt26", name: "Ceiling Light (45 or 65cm)", cat: "Home Décor", room: "Home Décor", price: 1220, memberPrice: 1098, sku: "SH-10578", tag: "New", ph: "", img: "assets/products/lt26.webp",
    imgs: ["assets/products/lt26.webp", "assets/products/lt26-2.webp", "assets/products/lt26-3.webp", "assets/products/lt26-4.webp", "assets/products/lt26-5.webp"],
    sizes: [{ label: "Ceiling Light / 45cm", price: 1220 }, { label: "Pendant Light / 45cm", price: 1220 }, { label: "Ceiling Light / 65cm", price: 1420 }, { label: "Pendant Light / 65cm", price: 1420 }, { label: "Ceiling Light / 80cm", price: 1831 }, { label: "Pendant Light / 80cm", price: 1831 }, { label: "Ceiling Light / 100cm", price: 2889 }, { label: "Pendant Light / 100cm", price: 2889 }],
    desc: "An LED ceiling fitting at 45cm or 65cm.",
    features: [
      "LED ceiling fitting",
      "45cm and 65cm",
      "Flush mounted"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "8", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt27", name: "Travertine Dish Lamp", cat: "Home Décor", room: "Home Décor", price: 1235, memberPrice: 1112, sku: "SH-10579", tag: "New", ph: "", img: "assets/products/lt27.webp",
    imgs: ["assets/products/lt27.webp", "assets/products/lt27-2.webp", "assets/products/lt27-3.webp", "assets/products/lt27-4.webp"],
    sizes: [{ label: "White 6000K", price: 1235 }, { label: "Warm White 3000K", price: 1235 }, { label: "Tri-Color Dimming", price: 1272 }],
    desc: "A travertine dish lamp with tri-colour dimming, so one fitting covers warm through to daylight.",
    features: [
      "Natural travertine",
      "Tri-colour dimming",
      "6000K or 3000K options"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "3", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt28", name: "Marble Pendant Chandelier", cat: "Home Décor", room: "Home Décor", price: 1254, memberPrice: 1129, sku: "SH-10580", tag: "New", ph: "", img: "assets/products/lt28.webp",
    imgs: ["assets/products/lt28.webp", "assets/products/lt28-2.webp", "assets/products/lt28-3.webp", "assets/products/lt28-4.webp", "assets/products/lt28-5.webp"],
    sizes: [{ label: "Warm White", price: 1254 }],
    desc: "Marble with LED, warm white.",
    features: [
      "Natural marble",
      "LED chandelier",
      "Warm White"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "1", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt29", optionLabel: "Colour", name: "Travertine Wall Light, Light or Dark", cat: "Home Décor", room: "Home Décor", price: 1291, memberPrice: 1162, sku: "SH-10581", tag: "New", ph: "", img: "assets/products/lt29.webp",
    imgs: ["assets/products/lt29.webp", "assets/products/lt29-2.webp", "assets/products/lt29-3.webp", "assets/products/lt29-4.webp", "assets/products/lt29-5.webp"],
    sizes: [{ label: "Light", price: 1291 }, { label: "Dark", price: 1291 }],
    desc: "Travertine in a light or dark stone.",
    features: [
      "Natural travertine",
      "Light or Dark stone",
      "Wall mounted"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "2", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt30", name: "Travertine Wall Light (Statement)", cat: "Home Décor", room: "Home Décor", price: 1322, memberPrice: 1190, sku: "SH-10582", tag: "New", ph: "", img: "assets/products/lt30.webp",
    imgs: ["assets/products/lt30.webp", "assets/products/lt30-2.webp", "assets/products/lt30-3.webp", "assets/products/lt30-4.webp", "assets/products/lt30-5.webp"],
    sizes: [{ label: "Travertine", price: 1322 }],
    desc: "A larger travertine wall light, one finish.",
    features: [
      "Natural travertine",
      "Larger scale",
      "Single finish"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "1", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt31", name: "K9 Crystal Lamp (50cm)", cat: "Home Décor", room: "Home Décor", price: 1359, memberPrice: 1223, sku: "SH-10583", tag: "New", ph: "", img: "assets/products/lt31.webp",
    imgs: ["assets/products/lt31.webp", "assets/products/lt31-2.webp", "assets/products/lt31-3.jpg", "assets/products/lt31-4.webp", "assets/products/lt31-5.webp"],
    sizes: [{ label: "50cm / US Plug + Dimmer Switch", price: 1359 }, { label: "50cm / AU Plug + Dimmer Switch", price: 1359 }],
    desc: "K9 crystal at 50cm, with a dimmer and your choice of plug. Check the plug type before ordering.",
    features: [
      "K9 crystal",
      "50cm with dimmer",
      "US or AU plug"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "2", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt32", name: "Marble Wall Light, Warm or Cool", cat: "Home Décor", room: "Home Décor", price: 1387, memberPrice: 1248, sku: "SH-10584", tag: "New", ph: "", img: "assets/products/lt32.webp",
    imgs: ["assets/products/lt32.webp", "assets/products/lt32-2.webp", "assets/products/lt32-3.webp", "assets/products/lt32-4.webp", "assets/products/lt32-5.webp"],
    sizes: [{ label: "Warm White  - 3500K", price: 1387 }, { label: "Cool White - 6000K", price: 1387 }],
    desc: "Marble with gold and black detail, 3500K or 6000K.",
    features: [
      "Natural marble",
      "Gold and black detail",
      "3500K or 6000K"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "2", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt33", name: "Wave Ceiling Light (40 or 60cm)", cat: "Home Décor", room: "Home Décor", price: 1476, memberPrice: 1328, sku: "SH-10585", tag: "New", ph: "", img: "assets/products/lt33.webp",
    imgs: ["assets/products/lt33.webp", "assets/products/lt33-2.webp", "assets/products/lt33-3.webp", "assets/products/lt33-4.webp", "assets/products/lt33-5.webp"],
    sizes: [{ label: "Wave: 40cm ø x 5cm / Warm White", price: 1476 }, { label: "Wave: 60cm ø x 5cm / Warm White", price: 1711 }, { label: "Round: 85cm ø x 6cm / Warm White", price: 2509 }],
    desc: "A slim wave-form ceiling light, 5cm deep, at 40cm or 60cm.",
    features: [
      "Wave form, 5cm deep",
      "40cm and 60cm",
      "Warm White"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "3", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt34", name: "Glass Pendant Light", cat: "Home Décor", room: "Home Décor", price: 1572, memberPrice: 1415, sku: "SH-10586", tag: "New", ph: "", img: "assets/products/lt34.webp",
    imgs: ["assets/products/lt34.webp", "assets/products/lt34-2.webp", "assets/products/lt34-3.webp", "assets/products/lt34-4.webp", "assets/products/lt34-5.webp"],
    sizes: [{ label: "Cool White", price: 1572 }, { label: "Warm White", price: 1572 }],
    desc: "Glass with LED, warm or cool white.",
    features: [
      "Glass shade",
      "LED",
      "Warm or Cool White"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "2", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt35", name: "Travertine Dome Pendant (30 or 40cm)", cat: "Home Décor", room: "Home Décor", price: 1639, memberPrice: 1475, sku: "SH-10587", tag: "New", ph: "", img: "assets/products/lt35.webp",
    imgs: ["assets/products/lt35.webp", "assets/products/lt35-2.webp", "assets/products/lt35-3.webp", "assets/products/lt35-4.webp", "assets/products/lt35-5.webp"],
    sizes: [{ label: "30cm", price: 1639 }, { label: "40cm", price: 1824 }],
    desc: "Travertine at 30cm or 40cm.",
    features: [
      "Natural travertine",
      "30cm and 40cm",
      "Pendant fitting"
    ],
    specs: { "Type": "Light fitting", "Material": "Natural stone", "Options": "2", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch off and let it cool before cleaning. Wipe natural stone with a soft, damp cloth and dry it, avoiding acidic cleaners. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt36", name: "Floor Lamp (Three Tones)", cat: "Home Décor", room: "Home Décor", price: 1665, memberPrice: 1498, sku: "SH-10588", tag: "New", ph: "", img: "assets/products/lt36.webp",
    imgs: ["assets/products/lt36.webp", "assets/products/lt36-2.webp", "assets/products/lt36-3.webp", "assets/products/lt36-4.webp", "assets/products/lt36-5.webp"],
    sizes: [{ label: "Neutral White", price: 1665 }, { label: "Warm White", price: 1665 }, { label: "Cool White", price: 1665 }],
    desc: "A floor lamp with warm, neutral or cool white.",
    features: [
      "Floor standing",
      "Three colour temperatures",
      "Reading height"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "3", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt37", name: "LED Crystal Chandelier (80cm)", cat: "Home Décor", room: "Home Décor", price: 1665, memberPrice: 1498, sku: "SH-10589", tag: "New", ph: "", img: "assets/products/lt37.webp",
    imgs: ["assets/products/lt37.webp", "assets/products/lt37-2.webp", "assets/products/lt37-3.webp", "assets/products/lt37-4.webp", "assets/products/lt37-5.webp"],
    sizes: [{ label: "80cm / Warm White / Gold", price: 1665 }, { label: "80cm / Warm White / Silver", price: 1665 }, { label: "80cm / White / Gold", price: 1665 }, { label: "80cm / White / Silver", price: 1665 }, { label: "80cm / Neutral White / Gold", price: 1665 }, { label: "80cm / Neutral White / Silver", price: 1665 }, { label: "100cm / Warm White / Gold", price: 1944 }, { label: "100cm / Warm White / Silver", price: 1944 }, { label: "100cm / White / Gold", price: 1944 }, { label: "100cm / White / Silver", price: 1944 }, { label: "100cm / Neutral White / Gold", price: 1944 }, { label: "100cm / Neutral White / Silver", price: 1944 }, { label: "120cm / Warm White / Gold", price: 2200 }, { label: "120cm / Warm White / Silver", price: 2200 }, { label: "120cm / White / Gold", price: 2200 }, { label: "120cm / White / Silver", price: 2200 }, { label: "120cm / Neutral White / Gold", price: 2200 }, { label: "120cm / Neutral White / Silver", price: 2200 }],
    desc: "An 80cm crystal chandelier in gold or silver.",
    features: [
      "Crystal with LED",
      "80cm",
      "Gold or Silver"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "18", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt38", name: "Five-Head Glass Pendant", cat: "Home Décor", room: "Home Décor", price: 2037, memberPrice: 1833, sku: "SH-10590", tag: "New", ph: "", img: "assets/products/lt38.webp",
    imgs: ["assets/products/lt38.webp", "assets/products/lt38-2.webp", "assets/products/lt38-3.webp", "assets/products/lt38-4.webp", "assets/products/lt38-5.webp"],
    sizes: [{ label: "Gold / 5 heads / Cool White", price: 2037 }, { label: "Gold / 5 heads / Warm White", price: 2037 }, { label: "Silver / 5 heads / Cool White", price: 2037 }, { label: "Silver / 5 heads / Warm White", price: 2037 }, { label: "Gold / 8 heads / Cool White", price: 2961 }, { label: "Gold / 8 heads / Warm White", price: 2961 }, { label: "Silver / 8 heads / Cool White", price: 2961 }, { label: "Silver / 8 heads / Warm White", price: 2961 }, { label: "Gold / 10 heads / Cool White", price: 3628 }, { label: "Gold / 10 heads / Warm White", price: 3628 }, { label: "Silver / 10 heads / Cool White", price: 3628 }, { label: "Silver / 10 heads / Warm White", price: 3628 }],
    desc: "Five glass heads in gold, warm or cool white.",
    features: [
      "Five glass heads",
      "Gold finish",
      "Warm or Cool White"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "12", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt39", name: "Nine-Head Crystal Chandelier", cat: "Home Décor", room: "Home Décor", price: 2202, memberPrice: 1982, sku: "SH-10591", tag: "New", ph: "", img: "assets/products/lt39.webp",
    imgs: ["assets/products/lt39.webp", "assets/products/lt39-2.webp", "assets/products/lt39-3.webp", "assets/products/lt39-4.webp", "assets/products/lt39-5.webp"],
    sizes: [{ label: "Gold / 9 Heads / Cool White", price: 2202 }, { label: "Gold / 9 Heads / Warm White", price: 2202 }, { label: "Black / 9 Heads / Cool White", price: 2202 }, { label: "Black / 9 Heads / Warm White", price: 2202 }, { label: "Gold / 14 Heads / Cool White", price: 3583 }, { label: "Gold / 14 Heads / Warm White", price: 3583 }, { label: "Black / 14 Heads / Cool White", price: 3583 }, { label: "Black / 14 Heads / Warm White", price: 3583 }, { label: "Gold / 21 Heads / Cool White", price: 4346 }, { label: "Gold / 21 Heads / Warm White", price: 4346 }, { label: "Black / 21 Heads / Cool White", price: 4346 }, { label: "Black / 21 Heads / Warm White", price: 4346 }, { label: "Gold / 33 Heads / Cool White", price: 6850 }, { label: "Gold / 33 Heads / Warm White", price: 6850 }, { label: "Black / 33 Heads / Cool White", price: 6850 }, { label: "Black / 33 Heads / Warm White", price: 6850 }],
    desc: "Nine heads in gold or black crystal. A dining-room piece.",
    features: [
      "Nine heads",
      "Gold or Black",
      "Crystal detail"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "16", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt40", name: "Handwoven Rattan Pendant", cat: "Home Décor", room: "Home Décor", price: 2461, memberPrice: 2215, sku: "SH-10592", tag: "New", ph: "", img: "assets/products/lt40.webp",
    imgs: ["assets/products/lt40.webp", "assets/products/lt40-2.webp", "assets/products/lt40-3.webp", "assets/products/lt40-4.webp", "assets/products/lt40-5.webp"],
    sizes: [{ label: "S", price: 2461 }, { label: "L", price: 3109 }],
    desc: "Handwoven rattan in small or large, which warms a room full of hard surfaces.",
    features: [
      "Handwoven rattan",
      "Small and Large",
      "Warm, textured light"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "2", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt41", name: "Strapped Glass Pendant", cat: "Home Décor", room: "Home Décor", price: 2472, memberPrice: 2225, sku: "SH-10593", tag: "New", ph: "", img: "assets/products/lt41.webp",
    imgs: ["assets/products/lt41.webp", "assets/products/lt41-2.webp", "assets/products/lt41-3.webp", "assets/products/lt41-4.webp", "assets/products/lt41-5.webp"],
    sizes: [{ label: "1 Strap / Cold White", price: 2472 }, { label: "1 Strap / Warm White", price: 2472 }, { label: "2 Strap / Cold White", price: 3550 }, { label: "2 Strap / Warm White", price: 3550 }],
    desc: "Glass held in leather-look straps, one or two straps.",
    features: [
      "Glass with strap detail",
      "1 or 2 straps",
      "Cold or Warm White"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "4", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt42", name: "Chandelier (Three Tones)", cat: "Home Décor", room: "Home Décor", price: 2574, memberPrice: 2317, sku: "SH-10594", tag: "New", ph: "", img: "assets/products/lt42.webp",
    imgs: ["assets/products/lt42.webp", "assets/products/lt42-2.webp", "assets/products/lt42-3.webp", "assets/products/lt42-4.webp", "assets/products/lt42-5.webp"],
    sizes: [{ label: "Cool White", price: 2574 }, { label: "Neutral White", price: 2574 }, { label: "Warm White", price: 2574 }],
    desc: "A chandelier with warm, neutral or cool white.",
    features: [
      "Chandelier fitting",
      "Three colour temperatures",
      "Dining or entry"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "3", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt43", name: "Linear Pendant (90 or 120cm)", cat: "Home Décor", room: "Home Décor", price: 2583, memberPrice: 2325, sku: "SH-10595", tag: "New", ph: "", img: "assets/products/lt43.webp",
    imgs: ["assets/products/lt43.webp", "assets/products/lt43-2.webp", "assets/products/lt43-3.webp", "assets/products/lt43-4.webp", "assets/products/lt43-5.webp"],
    sizes: [{ label: "90cm / Neutral White", price: 2583 }, { label: "120cm / Neutral White", price: 3241 }],
    desc: "A long linear LED at 90cm or 120cm, for above a dining table or island.",
    features: [
      "Linear LED",
      "90cm and 120cm",
      "Above a table or island"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "2", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt44", name: "Long Pendant (120 or 150cm)", cat: "Home Décor", room: "Home Décor", price: 2846, memberPrice: 2561, sku: "SH-10596", tag: "New", ph: "", img: "assets/products/lt44.webp",
    imgs: ["assets/products/lt44.webp", "assets/products/lt44-2.webp", "assets/products/lt44-3.webp", "assets/products/lt44-4.webp", "assets/products/lt44-5.webp"],
    sizes: [{ label: "120cm / Warm White", price: 2846 }, { label: "120cm / Cool White", price: 2846 }, { label: "150cm / Warm White", price: 3685 }, { label: "150cm / Cool White", price: 3685 }],
    desc: "120cm or 150cm, warm or cool white.",
    features: [
      "120cm and 150cm",
      "Warm or Cool White",
      "Long dining tables"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "4", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt45", name: "Stone Chandelier (150cm Drop)", cat: "Home Décor", room: "Home Décor", price: 3109, memberPrice: 2798, sku: "SH-10597", tag: "New", ph: "", img: "assets/products/lt45.webp",
    imgs: ["assets/products/lt45.webp", "assets/products/lt45-2.webp", "assets/products/lt45-3.webp", "assets/products/lt45-4.webp", "assets/products/lt45-5.webp"],
    sizes: [{ label: "40cm ø x 150cm L / Clear Stone / Warm White", price: 3109 }, { label: "40cm ø x 150cm L / Clear Stone / Cool White", price: 3109 }, { label: "40cm ø x 150cm L / Black Stone / Warm White", price: 3109 }, { label: "40cm ø x 150cm L / Black Stone / Cool White", price: 3109 }, { label: "60cm ø x 200cm L / Clear Stone / Warm White", price: 5735 }, { label: "60cm ø x 200cm L / Clear Stone / Cool White", price: 5735 }, { label: "60cm ø x 200cm L / Black Stone / Warm White", price: 5735 }, { label: "60cm ø x 200cm L / Black Stone / Cool White", price: 5735 }, { label: "80cm ø x 250cm L / Clear Stone / Warm White", price: 8272 }, { label: "80cm ø x 250cm L / Clear Stone / Cool White", price: 8272 }, { label: "80cm ø x 250cm L / Black Stone / Warm White", price: 8272 }, { label: "80cm ø x 250cm L / Black Stone / Cool White", price: 8272 }, { label: "100cm ø x 300cm L / Clear Stone / Warm White", price: 13006 }, { label: "100cm ø x 300cm L / Clear Stone / Cool White", price: 13006 }, { label: "100cm ø x 300cm L / Black Stone / Warm White", price: 13006 }, { label: "100cm ø x 300cm L / Black Stone / Cool White", price: 13006 }, { label: "120cm ø x 300cm L / Clear Stone / Warm White", price: 16231 }, { label: "120cm ø x 300cm L / Clear Stone / Cool White", price: 16231 }, { label: "120cm ø x 300cm L / Black Stone / Warm White", price: 16231 }, { label: "120cm ø x 300cm L / Black Stone / Cool White", price: 16231 }],
    desc: "A 40cm stone chandelier on a 150cm drop, for a stairwell or void.",
    features: [
      "40cm diameter, 150cm drop",
      "Clear stone",
      "Stairwell or void"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "20", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt46", name: "Gold & Black Floor Lamp", cat: "Home Décor", room: "Home Décor", price: 3478, memberPrice: 3130, sku: "SH-10598", tag: "New", ph: "", img: "assets/products/lt46.webp",
    imgs: ["assets/products/lt46.webp", "assets/products/lt46-2.webp", "assets/products/lt46-3.webp", "assets/products/lt46-4.webp", "assets/products/lt46-5.webp"],
    sizes: [{ label: "Warm White", price: 3478 }],
    desc: "An LED floor lamp in gold and black, warm white.",
    features: [
      "LED floor lamp",
      "Gold and black",
      "Warm White"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "1", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt47", optionLabel: "Colour", sizeImg: {"Light Brown":"assets/products/lt47.webp","Dark Brown":"assets/products/lt47-4.webp","Black":"assets/products/lt47-3.webp"}, name: "Pendant in Brown or Black", cat: "Home Décor", room: "Home Décor", price: 3498, memberPrice: 3148, sku: "SH-10599", tag: "New", ph: "", img: "assets/products/lt47.webp",
    imgs: ["assets/products/lt47.webp", "assets/products/lt47-2.webp", "assets/products/lt47-3.webp", "assets/products/lt47-4.webp", "assets/products/lt47-5.webp"],
    sizes: [{ label: "Light Brown", price: 3498 }, { label: "Dark Brown", price: 3498 }, { label: "Black", price: 3498 }],
    desc: "Light brown, dark brown or black.",
    features: [
      "Three colourways",
      "LED",
      "Pendant fitting"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "3", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt48", name: "LED Chandelier, Small or Large", cat: "Home Décor", room: "Home Décor", price: 4137, memberPrice: 3723, sku: "SH-10600", tag: "New", ph: "", img: "assets/products/lt48.webp",
    imgs: ["assets/products/lt48.webp", "assets/products/lt48-2.webp", "assets/products/lt48-3.webp", "assets/products/lt48-4.webp", "assets/products/lt48-5.webp"],
    sizes: [{ label: "Small / Cold White", price: 4137 }, { label: "Small / Warm White", price: 4137 }, { label: "Large / Cold White", price: 5369 }, { label: "Large / Warm White", price: 5369 }],
    desc: "Two sizes, cold or warm white.",
    features: [
      "LED chandelier",
      "Small and Large",
      "Cold or Warm White"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "4", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt49", name: "Crystal Chandelier (120 or 150cm)", cat: "Home Décor", room: "Home Décor", price: 4167, memberPrice: 3750, sku: "SH-10601", tag: "New", ph: "", img: "assets/products/lt49.webp",
    imgs: ["assets/products/lt49.webp", "assets/products/lt49-2.webp", "assets/products/lt49-3.webp", "assets/products/lt49-4.webp", "assets/products/lt49-5.webp"],
    sizes: [{ label: "120cm / Warm White 3000K", price: 4167 }, { label: "150cm / Warm White 3000K", price: 6481 }],
    desc: "Crystal at 120cm or 150cm, 3000K warm white. The largest fitting we carry.",
    features: [
      "Crystal chandelier",
      "120cm and 150cm",
      "3000K Warm White"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "2", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "lt50", name: "Midnight Chandelier (60cm)", cat: "Home Décor", room: "Home Décor", price: 4322, memberPrice: 3890, sku: "SH-10602", tag: "New", ph: "", img: "assets/products/lt50.webp",
    imgs: ["assets/products/lt50.webp", "assets/products/lt50-2.webp", "assets/products/lt50-3.webp", "assets/products/lt50-4.webp", "assets/products/lt50-5.webp"],
    sizes: [{ label: "60cm ø x 38cm H / Dimmable Warm White", price: 4322 }, { label: "60cm ø x 38cm H / Dimmable Cool White", price: 4322 }, { label: "80cm ø 38cm H / Dimmable Warm White", price: 6393 }, { label: "80cm ø 38cm H / Dimmable Cool White", price: 6393 }, { label: "100cm ø 38cm H / Dimmable Warm White", price: 10463 }, { label: "100cm ø 38cm H / Dimmable Cool White", price: 10463 }, { label: "120cm ø 38cm H / Dimmable Warm White", price: 11915 }, { label: "120cm ø 38cm H / Dimmable Cool White", price: 11915 }],
    desc: "A black 60cm chandelier with dimmable warm white.",
    features: [
      "Black finish",
      "60cm diameter",
      "Dimmable Warm White"
    ],
    specs: { "Type": "Light fitting", "Material": "Glass / metal", "Options": "8", "Install": "Licensed electrician for hard-wired fittings" },
    care: "Switch it off and let it cool before cleaning. Dust with a dry, soft cloth; for glass or crystal, a barely damp cloth then dry buffing keeps it clear. Hard-wired fittings should be installed by a licensed electrician." },

  { id: "rg01", name: "Circular Rug (Five Sizes)", cat: "Home Décor", room: "Home Décor", price: 578, memberPrice: 520, sku: "SH-10603", tag: "New", ph: "", img: "assets/products/rg01.webp",
    imgs: ["assets/products/rg01.webp", "assets/products/rg01-2.webp", "assets/products/rg01-3.webp", "assets/products/rg01-4.webp", "assets/products/rg01-5.webp"],
    sizes: [{ label: "1 / 120cm", price: 578 }, { label: "2 / 120cm", price: 578 }, { label: "3 / 120cm", price: 578 }, { label: "4 / 120cm", price: 578 }, { label: "5 / 120cm", price: 578 }, { label: "6 / 120cm", price: 578 }, { label: "1 / 140cm", price: 767 }, { label: "2 / 140cm", price: 767 }, { label: "3 / 140cm", price: 767 }, { label: "4 / 140cm", price: 767 }, { label: "5 / 140cm", price: 767 }, { label: "6 / 140cm", price: 767 }, { label: "1 / 160cm", price: 1344 }, { label: "2 / 160cm", price: 1344 }, { label: "3 / 160cm", price: 1344 }, { label: "4 / 160cm", price: 1344 }, { label: "5 / 160cm", price: 1344 }, { label: "6 / 160cm", price: 1344 }, { label: "1 / 180cm", price: 1556 }, { label: "2 / 180cm", price: 1556 }, { label: "3 / 180cm", price: 1556 }, { label: "4 / 180cm", price: 1556 }, { label: "5 / 180cm", price: 1556 }, { label: "6 / 180cm", price: 1556 }, { label: "1 / 200cm", price: 1828 }, { label: "2 / 200cm", price: 1828 }, { label: "3 / 200cm", price: 1828 }, { label: "4 / 200cm", price: 1828 }, { label: "5 / 200cm", price: 1828 }, { label: "6 / 200cm", price: 1828 }, { label: "1 / 250cm", price: 3422 }, { label: "2 / 250cm", price: 3422 }, { label: "3 / 250cm", price: 3422 }, { label: "4 / 250cm", price: 3422 }, { label: "5 / 250cm", price: 3422 }, { label: "6 / 250cm", price: 3422 }, { label: "1 / 300cm", price: 4815 }, { label: "2 / 300cm", price: 4815 }, { label: "3 / 300cm", price: 4815 }, { label: "4 / 300cm", price: 4815 }, { label: "5 / 300cm", price: 4815 }, { label: "6 / 300cm", price: 4815 }],
    desc: "A round rug from 120cm to 200cm. Round rugs suit a reading corner or under a round table better than a rectangle does.",
    features: [
      "Round, 120cm to 200cm",
      "Several designs",
      "Suits a corner or round table"
    ],
    specs: { "Type": "Rug", "Material": "Mixed fibre", "Sizes": "42" },
    care: "Vacuum regularly and blot spills straight away rather than rubbing. Rotate every few months for even wear, and use an underlay on hard floors." },

  { id: "rg02", name: "Rug Collection (Five Sizes)", cat: "Home Décor", room: "Home Décor", price: 593, memberPrice: 534, sku: "SH-10604", tag: "New", ph: "", img: "assets/products/rg02.webp",
    imgs: ["assets/products/rg02.webp", "assets/products/rg02-2.webp", "assets/products/rg02-3.webp", "assets/products/rg02-4.webp", "assets/products/rg02-5.webp"],
    sizes: [{ label: "1 / 100cm", price: 593 }, { label: "2 / 100cm", price: 593 }, { label: "3 / 100cm", price: 593 }, { label: "4 / 100cm", price: 593 }, { label: "5 / 100cm", price: 593 }, { label: "6 / 100cm", price: 593 }, { label: "7 / 100cm", price: 593 }, { label: "8 / 100cm", price: 593 }, { label: "9 / 100cm", price: 593 }, { label: "10 / 100cm", price: 593 }, { label: "11 / 100cm", price: 593 }, { label: "1 / 120cm", price: 993 }, { label: "2 / 120cm", price: 993 }, { label: "3 / 120cm", price: 993 }, { label: "4 / 120cm", price: 993 }, { label: "5 / 120cm", price: 993 }, { label: "6 / 120cm", price: 993 }, { label: "7 / 120cm", price: 993 }, { label: "8 / 120cm", price: 993 }, { label: "9 / 120cm", price: 993 }, { label: "10 / 120cm", price: 993 }, { label: "11 / 120cm", price: 993 }, { label: "1 / 140cm", price: 1378 }, { label: "2 / 140cm", price: 1378 }, { label: "3 / 140cm", price: 1378 }, { label: "4 / 140cm", price: 1378 }, { label: "5 / 140cm", price: 1378 }, { label: "6 / 140cm", price: 1378 }, { label: "7 / 140cm", price: 1378 }, { label: "8 / 140cm", price: 1378 }, { label: "9 / 140cm", price: 1378 }, { label: "10 / 140cm", price: 1378 }, { label: "11 / 140cm", price: 1378 }, { label: "1 / 160cm", price: 1826 }, { label: "2 / 160cm", price: 1826 }, { label: "3 / 160cm", price: 1826 }, { label: "4 / 160cm", price: 1826 }, { label: "5 / 160cm", price: 1826 }, { label: "6 / 160cm", price: 1826 }, { label: "7 / 160cm", price: 1826 }, { label: "8 / 160cm", price: 1826 }, { label: "9 / 160cm", price: 1826 }, { label: "10 / 160cm", price: 1826 }, { label: "11 / 160cm", price: 1826 }, { label: "1 / 180cm", price: 2500 }, { label: "2 / 180cm", price: 2500 }, { label: "3 / 180cm", price: 2500 }, { label: "4 / 180cm", price: 2500 }, { label: "5 / 180cm", price: 2500 }, { label: "6 / 180cm", price: 2500 }, { label: "7 / 180cm", price: 2500 }, { label: "8 / 180cm", price: 2500 }, { label: "9 / 180cm", price: 2500 }, { label: "10 / 180cm", price: 2500 }, { label: "11 / 180cm", price: 2500 }, { label: "1 / 200cm", price: 2593 }, { label: "2 / 200cm", price: 2593 }, { label: "3 / 200cm", price: 2593 }, { label: "4 / 200cm", price: 2593 }, { label: "5 / 200cm", price: 2593 }, { label: "6 / 200cm", price: 2593 }, { label: "7 / 200cm", price: 2593 }, { label: "8 / 200cm", price: 2593 }, { label: "9 / 200cm", price: 2593 }, { label: "10 / 200cm", price: 2593 }, { label: "11 / 200cm", price: 2593 }, { label: "1 / 240cm", price: 4019 }, { label: "2 / 240cm", price: 4019 }, { label: "3 / 240cm", price: 4019 }, { label: "4 / 240cm", price: 4019 }, { label: "5 / 240cm", price: 4019 }, { label: "6 / 240cm", price: 4019 }, { label: "7 / 240cm", price: 4019 }, { label: "8 / 240cm", price: 4019 }, { label: "9 / 240cm", price: 4019 }, { label: "10 / 240cm", price: 4019 }, { label: "11 / 240cm", price: 4019 }],
    desc: "From 100cm to 180cm, in several designs.",
    features: [
      "100cm to 180cm",
      "Several designs",
      "Living or bedroom"
    ],
    specs: { "Type": "Rug", "Material": "Mixed fibre", "Sizes": "77" },
    care: "Vacuum regularly and blot spills straight away rather than rubbing. Rotate every few months for even wear, and use an underlay on hard floors." },

  { id: "rg03", name: "Urban Circle Rug", cat: "Home Décor", room: "Home Décor", price: 793, memberPrice: 714, sku: "SH-10605", tag: "New", ph: "", img: "assets/products/rg03.webp",
    imgs: ["assets/products/rg03.webp", "assets/products/rg03-2.webp", "assets/products/rg03-3.webp", "assets/products/rg03-4.webp"],
    sizes: [{ label: "120cm", price: 793 }, { label: "140cm", price: 1050 }, { label: "160cm", price: 1461 }, { label: "180cm", price: 1846 }, { label: "200cm", price: 2141 }],
    desc: "Round, from 120cm to 200cm.",
    features: [
      "Round format",
      "120cm to 200cm",
      "Five sizes"
    ],
    specs: { "Type": "Rug", "Material": "Mixed fibre", "Sizes": "5" },
    care: "Vacuum regularly and blot spills straight away rather than rubbing. Rotate every few months for even wear, and use an underlay on hard floors." },

  { id: "rg04", name: "Beige Rug (Five Sizes)", cat: "Home Décor", room: "Home Décor", price: 907, memberPrice: 816, sku: "SH-10606", tag: "New", ph: "", img: "assets/products/rg04.webp",
    imgs: ["assets/products/rg04.webp", "assets/products/rg04-2.webp", "assets/products/rg04-3.webp", "assets/products/rg04-4.webp", "assets/products/rg04-5.webp"],
    sizes: [{ label: "1 / 120cm", price: 907 }, { label: "2 / 120cm", price: 907 }, { label: "3 / 120cm", price: 907 }, { label: "4 / 120cm", price: 907 }, { label: "5 / 120cm", price: 907 }, { label: "1 / 140cm", price: 1167 }, { label: "2 / 140cm", price: 1167 }, { label: "3 / 140cm", price: 1167 }, { label: "4 / 140cm", price: 1167 }, { label: "5 / 140cm", price: 1167 }, { label: "1 / 160cm", price: 1417 }, { label: "2 / 160cm", price: 1417 }, { label: "3 / 160cm", price: 1417 }, { label: "4 / 160cm", price: 1417 }, { label: "5 / 160cm", price: 1417 }, { label: "1 / 180cm", price: 1646 }, { label: "2 / 180cm", price: 1646 }, { label: "3 / 180cm", price: 1646 }, { label: "4 / 180cm", price: 1646 }, { label: "5 / 180cm", price: 1646 }, { label: "1 / 200cm", price: 1907 }, { label: "2 / 200cm", price: 1907 }, { label: "3 / 200cm", price: 1907 }, { label: "4 / 200cm", price: 1907 }, { label: "5 / 200cm", price: 1907 }, { label: "1 / 250cm", price: 2593 }, { label: "2 / 250cm", price: 2593 }, { label: "3 / 250cm", price: 2593 }, { label: "4 / 250cm", price: 2593 }, { label: "5 / 250cm", price: 2593 }, { label: "1 / 300cm", price: 3000 }, { label: "2 / 300cm", price: 3000 }, { label: "3 / 300cm", price: 3000 }, { label: "4 / 300cm", price: 3000 }, { label: "5 / 300cm", price: 3000 }],
    desc: "Beige, 120cm to 200cm.",
    features: [
      "Beige colourway",
      "120cm to 200cm",
      "Neutral, easy to place"
    ],
    specs: { "Type": "Rug", "Material": "Mixed fibre", "Sizes": "35" },
    care: "Vacuum regularly and blot spills straight away rather than rubbing. Rotate every few months for even wear, and use an underlay on hard floors." },

  { id: "rg05", name: "Rug in Five Sizes (from 50 x 80cm)", cat: "Home Décor", room: "Home Décor", price: 920, memberPrice: 828, sku: "SH-10607", tag: "New", ph: "", img: "assets/products/rg05.webp",
    imgs: ["assets/products/rg05.webp", "assets/products/rg05-2.webp", "assets/products/rg05-3.webp", "assets/products/rg05-4.webp", "assets/products/rg05-5.webp"],
    sizes: [{ label: "50cm x 80cm", price: 920 }, { label: "80cm x 130cm", price: 2109 }, { label: "100cm x 160cm", price: 3157 }, { label: "120cm x 200cm", price: 4439 }, { label: "160cm x 250cm", price: 6257 }, { label: "200cm x 290cm", price: 7220 }],
    desc: "From a 50 by 80cm mat up to larger sizes, so it works in an entry or a lounge.",
    features: [
      "50 x 80cm up to large",
      "Entry mat or room rug",
      "Several sizes"
    ],
    specs: { "Type": "Rug", "Material": "Mixed fibre", "Sizes": "6" },
    care: "Vacuum regularly and blot spills straight away rather than rubbing. Rotate every few months for even wear, and use an underlay on hard floors." },

  { id: "rg06", name: "Rug Collection (100 x 150cm up)", cat: "Home Décor", room: "Home Décor", price: 1339, memberPrice: 1205, sku: "SH-10608", tag: "New", ph: "", img: "assets/products/rg06.webp",
    imgs: ["assets/products/rg06.webp", "assets/products/rg06-2.webp", "assets/products/rg06-3.webp", "assets/products/rg06-4.webp", "assets/products/rg06-5.webp"],
    sizes: [{ label: "1 / 100 x 150cm", price: 1339 }, { label: "2 / 100 x 150cm", price: 1339 }, { label: "3 / 100 x 150cm", price: 1339 }, { label: "4 / 100 x 150cm", price: 1339 }, { label: "5 / 100 x 150cm", price: 1339 }, { label: "6 / 100 x 150cm", price: 1339 }, { label: "7 / 100 x 150cm", price: 1339 }, { label: "8 / 100 x 150cm", price: 1339 }, { label: "9 / 100 x 150cm", price: 1339 }, { label: "10 / 100 x 150cm", price: 1339 }, { label: "1 / 120 x 160cm", price: 1522 }, { label: "2 / 120 x 160cm", price: 1522 }, { label: "3 / 120 x 160cm", price: 1522 }, { label: "4 / 120 x 160cm", price: 1522 }, { label: "5 / 120 x 160cm", price: 1522 }, { label: "6 / 120 x 160cm", price: 1522 }, { label: "7 / 120 x 160cm", price: 1522 }, { label: "8 / 120 x 160cm", price: 1522 }, { label: "9 / 120 x 160cm", price: 1522 }, { label: "10 / 120 x 160cm", price: 1522 }, { label: "1 / 100 x 200cm", price: 1561 }, { label: "2 / 100 x 200cm", price: 1561 }, { label: "3 / 100 x 200cm", price: 1561 }, { label: "4 / 100 x 200cm", price: 1561 }, { label: "5 / 100 x 200cm", price: 1561 }, { label: "6 / 100 x 200cm", price: 1561 }, { label: "7 / 100 x 200cm", price: 1561 }, { label: "8 / 100 x 200cm", price: 1561 }, { label: "9 / 100 x 200cm", price: 1561 }, { label: "10 / 100 x 200cm", price: 1561 }, { label: "1 / 140 x 200cm", price: 2072 }, { label: "2 / 140 x 200cm", price: 2072 }, { label: "3 / 140 x 200cm", price: 2072 }, { label: "4 / 140 x 200cm", price: 2072 }, { label: "5 / 140 x 200cm", price: 2072 }, { label: "6 / 140 x 200cm", price: 2072 }, { label: "7 / 140 x 200cm", price: 2072 }, { label: "8 / 140 x 200cm", price: 2072 }, { label: "9 / 140 x 200cm", price: 2072 }, { label: "10 / 140 x 200cm", price: 2072 }, { label: "1 / 160 x 230cm", price: 2628 }, { label: "2 / 160 x 230cm", price: 2628 }, { label: "3 / 160 x 230cm", price: 2628 }, { label: "4 / 160 x 230cm", price: 2628 }, { label: "5 / 160 x 230cm", price: 2628 }, { label: "6 / 160 x 230cm", price: 2628 }, { label: "7 / 160 x 230cm", price: 2628 }, { label: "8 / 160 x 230cm", price: 2628 }, { label: "9 / 160 x 230cm", price: 2628 }, { label: "10 / 160 x 230cm", price: 2628 }, { label: "1 / 180 x 250cm", price: 3361 }, { label: "2 / 180 x 250cm", price: 3361 }, { label: "3 / 180 x 250cm", price: 3361 }, { label: "4 / 180 x 250cm", price: 3361 }, { label: "5 / 180 x 250cm", price: 3361 }, { label: "6 / 180 x 250cm", price: 3361 }, { label: "7 / 180 x 250cm", price: 3361 }, { label: "8 / 180 x 250cm", price: 3361 }, { label: "9 / 180 x 250cm", price: 3361 }, { label: "10 / 180 x 250cm", price: 3361 }, { label: "1 / 180 x 280cm", price: 3681 }, { label: "2 / 180 x 280cm", price: 3681 }, { label: "3 / 180 x 280cm", price: 3681 }, { label: "4 / 180 x 280cm", price: 3681 }, { label: "5 / 180 x 280cm", price: 3681 }, { label: "6 / 180 x 280cm", price: 3681 }, { label: "7 / 180 x 280cm", price: 3681 }, { label: "8 / 180 x 280cm", price: 3681 }, { label: "9 / 180 x 280cm", price: 3681 }, { label: "10 / 180 x 280cm", price: 3681 }, { label: "1 / 200 x 250cm", price: 3889 }, { label: "2 / 200 x 250cm", price: 3889 }, { label: "3 / 200 x 250cm", price: 3889 }, { label: "4 / 200 x 250cm", price: 3889 }, { label: "5 / 200 x 250cm", price: 3889 }, { label: "6 / 200 x 250cm", price: 3889 }, { label: "7 / 200 x 250cm", price: 3889 }, { label: "8 / 200 x 250cm", price: 3889 }, { label: "9 / 200 x 250cm", price: 3889 }, { label: "10 / 200 x 250cm", price: 3889 }, { label: "1 / 200 x 300cm", price: 4135 }, { label: "2 / 200 x 300cm", price: 4135 }, { label: "3 / 200 x 300cm", price: 4135 }, { label: "4 / 200 x 300cm", price: 4135 }, { label: "5 / 200 x 300cm", price: 4135 }, { label: "6 / 200 x 300cm", price: 4135 }, { label: "7 / 200 x 300cm", price: 4135 }, { label: "8 / 200 x 300cm", price: 4135 }, { label: "9 / 200 x 300cm", price: 4135 }, { label: "10 / 200 x 300cm", price: 4135 }],
    desc: "From 100 by 150cm, in several designs.",
    features: [
      "From 100 x 150cm",
      "Several designs",
      "Multiple sizes"
    ],
    specs: { "Type": "Rug", "Material": "Mixed fibre", "Sizes": "90" },
    care: "Vacuum regularly and blot spills straight away rather than rubbing. Rotate every few months for even wear, and use an underlay on hard floors." },

  { id: "rg07", name: "Royale Beige Rug", cat: "Home Décor", room: "Home Décor", price: 1370, memberPrice: 1233, sku: "SH-10609", tag: "New", ph: "", img: "assets/products/rg07.webp",
    imgs: ["assets/products/rg07.webp", "assets/products/rg07-2.webp", "assets/products/rg07-3.webp", "assets/products/rg07-4.webp", "assets/products/rg07-5.webp"],
    sizes: [{ label: "120 x 160cm / Beige", price: 1370 }, { label: "140 x 200cm / Beige", price: 1804 }, { label: "160 x 230cm / Beige", price: 2222 }, { label: "180 x 280cm / Beige", price: 3083 }, { label: "200 x 300cm / Beige", price: 3676 }],
    desc: "Beige, from 120 by 160cm to 160 by 230cm.",
    features: [
      "Beige colourway",
      "120 x 160cm to 160 x 230cm",
      "Soft underfoot"
    ],
    specs: { "Type": "Rug", "Material": "Mixed fibre", "Sizes": "5" },
    care: "Vacuum regularly and blot spills straight away rather than rubbing. Rotate every few months for even wear, and use an underlay on hard floors." },

  { id: "rg08", name: "Eveline Rug (Four Sizes)", cat: "Home Décor", room: "Home Décor", price: 1567, memberPrice: 1410, sku: "SH-10610", tag: "New", ph: "", img: "assets/products/rg08.webp",
    imgs: ["assets/products/rg08.webp", "assets/products/rg08-2.webp", "assets/products/rg08-3.webp", "assets/products/rg08-4.webp"],
    sizes: [{ label: "120 x 160cm", price: 1567 }, { label: "100 x 200cm", price: 1593 }, { label: "140 x 200cm", price: 1817 }, { label: "160 x 230cm", price: 2194 }, { label: "200 x 250cm", price: 2911 }, { label: "180 x 280cm", price: 2939 }, { label: "200 x 300cm", price: 3406 }],
    desc: "100 by 200cm through to 160 by 230cm.",
    features: [
      "Four sizes",
      "100 x 200cm to 160 x 230cm",
      "Living or bedroom"
    ],
    specs: { "Type": "Rug", "Material": "Mixed fibre", "Sizes": "7" },
    care: "Vacuum regularly and blot spills straight away rather than rubbing. Rotate every few months for even wear, and use an underlay on hard floors." },

  { id: "rg09", name: "Black & White Artistic Rug", cat: "Home Décor", room: "Home Décor", price: 1600, memberPrice: 1440, sku: "SH-10611", tag: "New", ph: "", img: "assets/products/rg09.webp",
    imgs: ["assets/products/rg09.webp", "assets/products/rg09-2.webp", "assets/products/rg09-3.webp", "assets/products/rg09-4.webp", "assets/products/rg09-5.webp"],
    sizes: [{ label: "Black + White / 140 x 200cm", price: 1600 }, { label: "Black + White / 160 x 230cm", price: 1963 }, { label: "Black + White / 180 x 280cm", price: 2600 }, { label: "Black + White / 200 x 300cm", price: 3052 }],
    desc: "A bold black and white pattern, from 140 by 200cm.",
    features: [
      "Black and white pattern",
      "From 140 x 200cm",
      "A graphic statement"
    ],
    specs: { "Type": "Rug", "Material": "Mixed fibre", "Sizes": "4" },
    care: "Vacuum regularly and blot spills straight away rather than rubbing. Rotate every few months for even wear, and use an underlay on hard floors." },

  { id: "rg10", name: "Wool Rug (Four Sizes)", cat: "Home Décor", room: "Home Décor", price: 1717, memberPrice: 1545, sku: "SH-10612", tag: "New", ph: "", img: "assets/products/rg10.webp",
    imgs: ["assets/products/rg10.webp", "assets/products/rg10-2.webp", "assets/products/rg10-3.webp", "assets/products/rg10-4.webp", "assets/products/rg10-5.webp"],
    sizes: [{ label: "80cm x 130cm", price: 1717 }, { label: "100cm x 160cm", price: 2574 }, { label: "120cm x 200cm", price: 3406 }, { label: "160cm x 250cm", price: 6000 }, { label: "200cm x 290cm", price: 7759 }, { label: "220cm x 340cm", price: 10720 }],
    desc: "Wool from 80 by 130cm up to larger sizes. Wool wears better than synthetic and feels it.",
    features: [
      "Wool pile",
      "From 80 x 130cm",
      "Hard-wearing"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "6" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg11", name: "Florient Rug (Four Sizes)", cat: "Home Décor", room: "Home Décor", price: 1754, memberPrice: 1579, sku: "SH-10613", tag: "New", ph: "", img: "assets/products/rg11.webp",
    imgs: ["assets/products/rg11.webp", "assets/products/rg11-2.webp", "assets/products/rg11-3.webp", "assets/products/rg11-4.webp", "assets/products/rg11-5.webp"],
    sizes: [{ label: "1 / 80cm x 150cm", price: 1754 }, { label: "2 / 80cm x 150cm", price: 1754 }, { label: "1 / 120cm x 180cm", price: 2939 }, { label: "2 / 120cm x 180cm", price: 2939 }, { label: "1 / 140cm x 200cm", price: 3870 }, { label: "2 / 140cm x 200cm", price: 3870 }, { label: "1 / 160cm x 230cm", price: 4791 }, { label: "2 / 160cm x 230cm", price: 4791 }, { label: "1 / 200cm x 250cm", price: 6417 }, { label: "2 / 200cm x 250cm", price: 6417 }, { label: "1 / 200cm x 300cm", price: 7646 }, { label: "2 / 200cm x 300cm", price: 7646 }, { label: "1 / 240cm x 340cm", price: 10294 }, { label: "2 / 240cm x 340cm", price: 10294 }, { label: "1 / 300cm x 400cm", price: 14796 }, { label: "2 / 300cm x 400cm", price: 14796 }],
    desc: "From 80 by 150cm.",
    features: [
      "From 80 x 150cm",
      "Several designs",
      "Multiple sizes"
    ],
    specs: { "Type": "Rug", "Material": "Mixed fibre", "Sizes": "16" },
    care: "Vacuum regularly and blot spills straight away rather than rubbing. Rotate every few months for even wear, and use an underlay on hard floors." },

  { id: "rg12", name: "Milan Rug Collection", cat: "Home Décor", room: "Home Décor", price: 1815, memberPrice: 1634, sku: "SH-10614", tag: "New", ph: "", img: "assets/products/rg12.webp",
    imgs: ["assets/products/rg12.webp", "assets/products/rg12-2.webp", "assets/products/rg12-3.webp", "assets/products/rg12-4.webp", "assets/products/rg12-5.webp"],
    sizes: [{ label: "1 / 140 x 200cm", price: 1815 }, { label: "2 / 140 x 200cm", price: 1815 }, { label: "3 / 140 x 200cm", price: 1815 }, { label: "4 / 140 x 200cm", price: 1815 }, { label: "5 / 140 x 200cm", price: 1815 }, { label: "6 / 140 x 200cm", price: 1815 }, { label: "7 / 140 x 200cm", price: 1815 }, { label: "8 / 140 x 200cm", price: 1815 }, { label: "9 / 140 x 200cm", price: 1815 }, { label: "1 / 160 x 230cm", price: 2200 }, { label: "2 / 160 x 230cm", price: 2200 }, { label: "3 / 160 x 230cm", price: 2200 }, { label: "4 / 160 x 230cm", price: 2200 }, { label: "5 / 160 x 230cm", price: 2200 }, { label: "6 / 160 x 230cm", price: 2200 }, { label: "7 / 160 x 230cm", price: 2200 }, { label: "8 / 160 x 230cm", price: 2200 }, { label: "9 / 160 x 230cm", price: 2200 }, { label: "1 / 180 x 280cm", price: 2833 }, { label: "2 / 180 x 280cm", price: 2833 }, { label: "3 / 180 x 280cm", price: 2833 }, { label: "4 / 180 x 280cm", price: 2833 }, { label: "5 / 180 x 280cm", price: 2833 }, { label: "6 / 180 x 280cm", price: 2833 }, { label: "7 / 180 x 280cm", price: 2833 }, { label: "8 / 180 x 280cm", price: 2833 }, { label: "9 / 180 x 280cm", price: 2833 }, { label: "1 / 200 x 300cm", price: 3278 }, { label: "2 / 200 x 300cm", price: 3278 }, { label: "3 / 200 x 300cm", price: 3278 }, { label: "4 / 200 x 300cm", price: 3278 }, { label: "5 / 200 x 300cm", price: 3278 }, { label: "6 / 200 x 300cm", price: 3278 }, { label: "7 / 200 x 300cm", price: 3278 }, { label: "8 / 200 x 300cm", price: 3278 }, { label: "9 / 200 x 300cm", price: 3278 }, { label: "1 / 240 x 360cm", price: 4019 }, { label: "2 / 240 x 360cm", price: 4019 }, { label: "3 / 240 x 360cm", price: 4019 }, { label: "4 / 240 x 360cm", price: 4019 }, { label: "5 / 240 x 360cm", price: 4019 }, { label: "6 / 240 x 360cm", price: 4019 }, { label: "7 / 240 x 360cm", price: 4019 }, { label: "8 / 240 x 360cm", price: 4019 }, { label: "9 / 240 x 360cm", price: 4019 }],
    desc: "From 140 by 200cm up to 180 by 280cm.",
    features: [
      "140 x 200cm to 180 x 280cm",
      "Several designs",
      "Room-sized"
    ],
    specs: { "Type": "Rug", "Material": "Mixed fibre", "Sizes": "45" },
    care: "Vacuum regularly and blot spills straight away rather than rubbing. Rotate every few months for even wear, and use an underlay on hard floors." },

  { id: "rg13", name: "Large Round Rug (200-300cm)", cat: "Home Décor", room: "Home Décor", price: 2050, memberPrice: 1845, sku: "SH-10615", tag: "New", ph: "", img: "assets/products/rg13.webp",
    imgs: ["assets/products/rg13.webp", "assets/products/rg13-2.webp", "assets/products/rg13-3.webp", "assets/products/rg13-4.webp"],
    sizes: [{ label: "200cm ø", price: 2050 }, { label: "250cm ø", price: 3844 }, { label: "300cm ø", price: 5417 }],
    desc: "Round at 200cm, 250cm or 300cm. A 300cm circle anchors a whole seating group.",
    features: [
      "Round, 200cm to 300cm",
      "Three sizes",
      "Anchors a seating group"
    ],
    specs: { "Type": "Rug", "Material": "Mixed fibre", "Sizes": "3" },
    care: "Vacuum regularly and blot spills straight away rather than rubbing. Rotate every few months for even wear, and use an underlay on hard floors." },

  { id: "rg14", name: "Victoire Rug (Three Sizes)", cat: "Home Décor", room: "Home Décor", price: 2050, memberPrice: 1845, sku: "SH-10616", tag: "New", ph: "", img: "assets/products/rg14.webp",
    imgs: ["assets/products/rg14.webp", "assets/products/rg14-2.webp", "assets/products/rg14-3.webp", "assets/products/rg14-4.webp", "assets/products/rg14-5.webp"],
    sizes: [{ label: "200cm x 200cm", price: 2050 }, { label: "180cm x 280cm", price: 2383 }, { label: "200cm x 300cm", price: 2694 }],
    desc: "200 by 200cm, 180 by 280cm or 200 by 300cm.",
    features: [
      "Three sizes",
      "Up to 200 x 300cm",
      "Living room scale"
    ],
    specs: { "Type": "Rug", "Material": "Mixed fibre", "Sizes": "3" },
    care: "Vacuum regularly and blot spills straight away rather than rubbing. Rotate every few months for even wear, and use an underlay on hard floors." },

  { id: "rg15", name: "Zelie Wool Rug (Four Sizes)", cat: "Home Décor", room: "Home Décor", price: 2220, memberPrice: 1998, sku: "SH-10617", tag: "New", ph: "", img: "assets/products/rg15.webp",
    imgs: ["assets/products/rg15.webp", "assets/products/rg15-2.webp", "assets/products/rg15-3.webp", "assets/products/rg15-4.webp", "assets/products/rg15-5.webp"],
    sizes: [{ label: "140cm x 195cm", price: 2220 }, { label: "160cm x 220cm", price: 5296 }, { label: "200cm x 280cm", price: 8702 }, { label: "240cm x 330cm", price: 12037 }, { label: "300cm x 400cm", price: 17130 }],
    desc: "Wool from 140 by 195cm up to 240cm wide.",
    features: [
      "Wool pile",
      "140 x 195cm to 240cm",
      "Four sizes"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "5" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg16", name: "Black Rug (Three Sizes)", cat: "Home Décor", room: "Home Décor", price: 2300, memberPrice: 2070, sku: "SH-10618", tag: "New", ph: "", img: "assets/products/rg16.webp",
    imgs: ["assets/products/rg16.webp", "assets/products/rg16-2.webp", "assets/products/rg16-3.webp"],
    sizes: [{ label: "Black / 200 x 200cm", price: 2300 }, { label: "Black / 180 x 250cm", price: 2517 }, { label: "Black / 200 x 250cm", price: 2704 }, { label: "Black / 180 x 280cm", price: 2870 }, { label: "Black / 200 x 300cm", price: 3294 }, { label: "Black / 220 x 330cm", price: 3519 }, { label: "Black / 240 x 360cm", price: 3972 }, { label: "Black / 300 x 400cm", price: 4961 }],
    desc: "Black, from 180 by 250cm.",
    features: [
      "Black colourway",
      "From 180 x 250cm",
      "Grounds a light room"
    ],
    specs: { "Type": "Rug", "Material": "Mixed fibre", "Sizes": "8" },
    care: "Vacuum regularly and blot spills straight away rather than rubbing. Rotate every few months for even wear, and use an underlay on hard floors." },

  { id: "rg17", name: "Gaspard Rug (Four Sizes)", cat: "Home Décor", room: "Home Décor", price: 2630, memberPrice: 2367, sku: "SH-10619", tag: "New", ph: "", img: "assets/products/rg17.webp",
    imgs: ["assets/products/rg17.webp", "assets/products/rg17-2.webp", "assets/products/rg17-3.webp", "assets/products/rg17-4.webp", "assets/products/rg17-5.webp"],
    sizes: [{ label: "140cm x 200cm", price: 2630 }, { label: "160cm x 240cm", price: 3593 }, { label: "200cm x 300cm", price: 5346 }, { label: "240cm x 340cm", price: 7204 }, { label: "300cm x 400cm", price: 9630 }],
    desc: "From 140 by 200cm to 240cm wide.",
    features: [
      "Four sizes",
      "140 x 200cm upward",
      "Living room scale"
    ],
    specs: { "Type": "Rug", "Material": "Mixed fibre", "Sizes": "5" },
    care: "Vacuum regularly and blot spills straight away rather than rubbing. Rotate every few months for even wear, and use an underlay on hard floors." },

  { id: "rg18", name: "Wool Rug (160 x 240cm up)", cat: "Home Décor", room: "Home Décor", price: 2717, memberPrice: 2445, sku: "SH-10620", tag: "New", ph: "", img: "assets/products/rg18.webp",
    imgs: ["assets/products/rg18.webp", "assets/products/rg18-2.webp", "assets/products/rg18-3.webp", "assets/products/rg18-4.webp", "assets/products/rg18-5.webp"],
    sizes: [{ label: "160cm x 240cm", price: 2717 }, { label: "200cm x 300cm", price: 4313 }, { label: "240cm x 340cm", price: 5907 }, { label: "300cm x 400cm", price: 8176 }],
    desc: "Wool from 160 by 240cm to 300cm.",
    features: [
      "Wool pile",
      "160 x 240cm to 300cm",
      "Large formats"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "4" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg19", name: "Wool & Cotton Rug", cat: "Home Décor", room: "Home Décor", price: 2754, memberPrice: 2479, sku: "SH-10621", tag: "New", ph: "", img: "assets/products/rg19.webp",
    imgs: ["assets/products/rg19.webp", "assets/products/rg19-2.webp", "assets/products/rg19-3.webp", "assets/products/rg19-4.webp", "assets/products/rg19-5.webp"],
    sizes: [{ label: "140cm x 200cm", price: 2754 }, { label: "160cm x 230cm", price: 4028 }, { label: "200cm x 290cm", price: 6009 }],
    desc: "Wool with cotton, three sizes.",
    features: [
      "Wool and cotton",
      "Three sizes",
      "Soft underfoot"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "3" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg20", name: "Cream Wool Rug", cat: "Home Décor", room: "Home Décor", price: 2991, memberPrice: 2692, sku: "SH-10622", tag: "New", ph: "", img: "assets/products/rg20.webp",
    imgs: ["assets/products/rg20.webp", "assets/products/rg20-2.webp", "assets/products/rg20-3.webp", "assets/products/rg20-4.webp", "assets/products/rg20-5.webp"],
    sizes: [{ label: "Cream / 160cm x 230cm", price: 2991 }, { label: "Grey / 160cm x 230cm", price: 2991 }, { label: "Cream / 200cm x 290cm", price: 4665 }, { label: "Grey / 200cm x 290cm", price: 4665 }, { label: "Cream / 240cm x 330cm", price: 6463 }, { label: "Grey / 240cm x 330cm", price: 6463 }, { label: "Cream / 300cm x 400cm", price: 9444 }, { label: "Grey / 300cm x 400cm", price: 9444 }],
    desc: "Cream wool from 160 by 230cm.",
    features: [
      "Wool pile",
      "Cream colourway",
      "From 160 x 230cm"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "8" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg21", name: "Cotton Rug (Four Sizes)", cat: "Home Décor", room: "Home Décor", price: 3241, memberPrice: 2917, sku: "SH-10623", tag: "New", ph: "", img: "assets/products/rg21.webp",
    imgs: ["assets/products/rg21.webp", "assets/products/rg21-2.webp", "assets/products/rg21-3.webp", "assets/products/rg21-4.webp", "assets/products/rg21-5.webp"],
    sizes: [{ label: "160cm x 230cm", price: 3241 }, { label: "200cm x 300cm", price: 5143 }, { label: "240cm x 340cm", price: 6961 }, { label: "280cm x 380cm", price: 9628 }],
    desc: "Cotton from 160 by 230cm to 280cm. Cotton is lighter and easier to clean than wool.",
    features: [
      "Cotton construction",
      "160 x 230cm to 280cm",
      "Easier to clean than wool"
    ],
    specs: { "Type": "Rug", "Material": "Mixed fibre", "Sizes": "4" },
    care: "Vacuum regularly and blot spills straight away rather than rubbing. Rotate every few months for even wear, and use an underlay on hard floors." },

  { id: "rg22", name: "Thali Wool Rug", cat: "Home Décor", room: "Home Décor", price: 3680, memberPrice: 3312, sku: "SH-10624", tag: "New", ph: "", img: "assets/products/rg22.webp",
    imgs: ["assets/products/rg22.webp", "assets/products/rg22-2.webp", "assets/products/rg22-3.webp", "assets/products/rg22-4.webp", "assets/products/rg22-5.webp"],
    sizes: [{ label: "140cm x 200cm", price: 3680 }, { label: "160cm x 230cm", price: 4528 }, { label: "200cm x 290cm", price: 7130 }, { label: "240cm x 340cm", price: 10231 }, { label: "300cm x 400cm", price: 14035 }],
    desc: "Wool from 140 by 200cm.",
    features: [
      "Wool pile",
      "From 140 x 200cm",
      "Four sizes"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "5" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg23", name: "Eloi Wool Rug", cat: "Home Décor", room: "Home Décor", price: 3750, memberPrice: 3375, sku: "SH-10625", tag: "New", ph: "", img: "assets/products/rg23.webp",
    imgs: ["assets/products/rg23.webp", "assets/products/rg23-2.webp", "assets/products/rg23-3.webp", "assets/products/rg23-4.webp", "assets/products/rg23-5.webp"],
    sizes: [{ label: "160cm x 240cm", price: 3750 }, { label: "200cm x 300cm", price: 7546 }, { label: "240cm x 340cm", price: 10739 }, { label: "300cm x 400cm", price: 14124 }],
    desc: "Wool from 160 by 240cm up to 300cm.",
    features: [
      "Wool pile",
      "160 x 240cm to 300cm",
      "Large formats"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "4" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg24", name: "Handwoven Wool Rug", cat: "Home Décor", room: "Home Décor", price: 3778, memberPrice: 3400, sku: "SH-10626", tag: "New", ph: "", img: "assets/products/rg24.webp",
    imgs: ["assets/products/rg24.webp", "assets/products/rg24-2.webp", "assets/products/rg24-3.webp", "assets/products/rg24-4.webp", "assets/products/rg24-5.webp"],
    sizes: [{ label: "140cm x 200cm", price: 3778 }, { label: "160cm x 240cm", price: 5254 }, { label: "200cm x 300cm", price: 8426 }, { label: "240cm x 340cm", price: 11213 }, { label: "300cm x 400cm", price: 14254 }],
    desc: "Handwoven wool from 140 by 200cm. Handwoven means slight irregularities, which is the point.",
    features: [
      "Handwoven wool",
      "From 140 x 200cm",
      "Natural irregularity"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "5" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg25", name: "Handwoven Wool Rug (Four Sizes)", cat: "Home Décor", room: "Home Décor", price: 4013, memberPrice: 3612, sku: "SH-10627", tag: "New", ph: "", img: "assets/products/rg25.webp",
    imgs: ["assets/products/rg25.webp", "assets/products/rg25-2.webp", "assets/products/rg25-3.webp", "assets/products/rg25-4.webp", "assets/products/rg25-5.webp"],
    sizes: [{ label: "140cm x 200cm", price: 4013 }, { label: "160cm x 230cm", price: 5370 }, { label: "200cm x 290cm", price: 8217 }, { label: "240cm x 340cm", price: 9976 }, { label: "300cm x 400cm", price: 13333 }],
    desc: "Handwoven wool, 140 by 200cm up to 240cm.",
    features: [
      "Handwoven wool",
      "Four sizes",
      "From 140 x 200cm"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "5" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg26", name: "Margaux Handwoven Wool Rug", cat: "Home Décor", room: "Home Décor", price: 4209, memberPrice: 3788, sku: "SH-10628", tag: "New", ph: "", img: "assets/products/rg26.webp",
    imgs: ["assets/products/rg26.webp", "assets/products/rg26-2.webp", "assets/products/rg26-3.webp", "assets/products/rg26-4.webp", "assets/products/rg26-5.webp"],
    sizes: [{ label: "160cm x 230cm", price: 4209 }, { label: "200cm x 300cm", price: 6787 }, { label: "240cm x 340cm", price: 9324 }, { label: "300cm x 400cm", price: 13287 }],
    desc: "Handwoven wool from 160 by 230cm to 300cm.",
    features: [
      "Handwoven wool",
      "160 x 230cm to 300cm",
      "Four sizes"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "4" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg27", name: "Norbert Handwoven Rug", cat: "Home Décor", room: "Home Décor", price: 4241, memberPrice: 3817, sku: "SH-10629", tag: "New", ph: "", img: "assets/products/rg27.webp",
    imgs: ["assets/products/rg27.webp", "assets/products/rg27-2.webp", "assets/products/rg27-3.webp", "assets/products/rg27-4.webp", "assets/products/rg27-5.webp"],
    sizes: [{ label: "160cm x 230cm", price: 4241 }, { label: "200cm x 290cm", price: 6328 }, { label: "240cm x 340cm", price: 9074 }],
    desc: "Handwoven wool in three large sizes.",
    features: [
      "Handwoven wool",
      "Three large sizes",
      "From 160 x 230cm"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "3" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg28", name: "Wool & Cotton Rug (Four Sizes)", cat: "Home Décor", room: "Home Décor", price: 4291, memberPrice: 3862, sku: "SH-10630", tag: "New", ph: "", img: "assets/products/rg28.webp",
    imgs: ["assets/products/rg28.webp", "assets/products/rg28-2.webp", "assets/products/rg28-3.webp", "assets/products/rg28-4.webp", "assets/products/rg28-5.webp"],
    sizes: [{ label: "160cm x 230cm", price: 4291 }, { label: "200cm x 290cm", price: 8235 }, { label: "240cm x 340cm", price: 12944 }, { label: "300cm x 400cm", price: 14157 }],
    desc: "Wool with cotton, 160 by 230cm to 300cm.",
    features: [
      "Wool and cotton",
      "160 x 230cm to 300cm",
      "Four sizes"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "4" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg29", name: "Round Wool & Cotton Rug", cat: "Home Décor", room: "Home Décor", price: 4611, memberPrice: 4150, sku: "SH-10631", tag: "New", ph: "", img: "assets/products/rg29.webp",
    imgs: ["assets/products/rg29.webp", "assets/products/rg29-2.webp", "assets/products/rg29-3.webp", "assets/products/rg29-4.webp", "assets/products/rg29-5.webp"],
    sizes: [{ label: "1 / 230cm", price: 4611 }, { label: "2 / 230cm", price: 4611 }, { label: "3 / 230cm", price: 4611 }, { label: "1 / 290cm", price: 6944 }, { label: "2 / 290cm", price: 6944 }, { label: "3 / 290cm", price: 6944 }, { label: "1 / 340cm", price: 9198 }, { label: "2 / 340cm", price: 9198 }, { label: "3 / 340cm", price: 9198 }, { label: "1 / 400cm", price: 11757 }, { label: "2 / 400cm", price: 11757 }, { label: "3 / 400cm", price: 11757 }],
    desc: "Round, from 230cm to 400cm across, in two designs. A 400cm circle is an unusual thing to find.",
    features: [
      "Round, 230cm to 400cm",
      "Two designs",
      "Very large formats"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "12" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg30", name: "Claude Wool Rug", cat: "Home Décor", room: "Home Décor", price: 4620, memberPrice: 4158, sku: "SH-10632", tag: "New", ph: "", img: "assets/products/rg30.webp",
    imgs: ["assets/products/rg30.webp", "assets/products/rg30-2.webp", "assets/products/rg30-3.webp", "assets/products/rg30-4.webp", "assets/products/rg30-5.webp"],
    sizes: [{ label: "160cm x 230cm", price: 4620 }, { label: "200cm x 290cm", price: 7176 }, { label: "240cm x 340cm", price: 9920 }, { label: "300cm x 400cm", price: 14704 }],
    desc: "Wool from 160 by 230cm to 300cm.",
    features: [
      "Wool pile",
      "160 x 230cm to 300cm",
      "Four sizes"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "4" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg31", name: "Yanni Wool Rug", cat: "Home Décor", room: "Home Décor", price: 4700, memberPrice: 4230, sku: "SH-10633", tag: "New", ph: "", img: "assets/products/rg31.webp",
    imgs: ["assets/products/rg31.webp", "assets/products/rg31-2.webp", "assets/products/rg31-3.webp", "assets/products/rg31-4.webp", "assets/products/rg31-5.webp"],
    sizes: [{ label: "200cm x 290cm", price: 4700 }, { label: "140cm x 200cm", price: 5833 }, { label: "160cm x 230cm", price: 7213 }, { label: "240cm x 340cm", price: 9402 }, { label: "300cm x 400cm", price: 14628 }],
    desc: "Wool from 140 by 200cm.",
    features: [
      "Wool pile",
      "From 140 x 200cm",
      "Four sizes"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "5" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg32", name: "Constance Wool & Cotton Rug", cat: "Home Décor", room: "Home Décor", price: 5120, memberPrice: 4608, sku: "SH-10634", tag: "New", ph: "", img: "assets/products/rg32.webp",
    imgs: ["assets/products/rg32.webp", "assets/products/rg32-2.webp", "assets/products/rg32-3.webp", "assets/products/rg32-4.webp", "assets/products/rg32-5.webp"],
    sizes: [{ label: "140cm x 200cm", price: 5120 }, { label: "160cm x 230cm", price: 6639 }, { label: "200cm x 290cm", price: 10407 }, { label: "240cm x 340cm", price: 13889 }, { label: "300cm x 400cm", price: 16111 }],
    desc: "Wool with cotton, from 140 by 200cm.",
    features: [
      "Wool and cotton",
      "From 140 x 200cm",
      "Four sizes"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "5" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg33", name: "Florent Wool Rug", cat: "Home Décor", room: "Home Décor", price: 5315, memberPrice: 4784, sku: "SH-10635", tag: "New", ph: "", img: "assets/products/rg33.webp",
    imgs: ["assets/products/rg33.webp", "assets/products/rg33-2.webp", "assets/products/rg33-3.webp", "assets/products/rg33-4.webp", "assets/products/rg33-5.webp"],
    sizes: [{ label: "01 / 160cm x 230cm", price: 5315 }, { label: "02 / 160cm x 230cm", price: 5315 }, { label: "01 / 200cm x 290cm", price: 7865 }, { label: "02 / 200cm x 290cm", price: 7865 }, { label: "01 / 240cm x 340cm", price: 10646 }, { label: "02 / 240cm x 340cm", price: 10646 }, { label: "01 / 300cm x 400cm", price: 14787 }, { label: "02 / 300cm x 400cm", price: 14787 }],
    desc: "Wool in several designs, from 160 by 230cm.",
    features: [
      "Wool pile",
      "Several designs",
      "From 160 x 230cm"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "8" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg34", name: "Aurelien Wool Rug", cat: "Home Décor", room: "Home Décor", price: 5324, memberPrice: 4792, sku: "SH-10636", tag: "New", ph: "", img: "assets/products/rg34.webp",
    imgs: ["assets/products/rg34.webp", "assets/products/rg34-2.webp", "assets/products/rg34-3.webp", "assets/products/rg34-4.webp", "assets/products/rg34-5.webp"],
    sizes: [{ label: "140cm x 200cm", price: 5324 }, { label: "160cm x 230cm", price: 6815 }, { label: "200cm x 290cm", price: 8661 }, { label: "240cm x 340cm", price: 11554 }, { label: "300cm x 400cm", price: 16402 }],
    desc: "Wool from 140 by 200cm.",
    features: [
      "Wool pile",
      "From 140 x 200cm",
      "Four sizes"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "5" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg35", name: "Timothee Handwoven Wool Rug", cat: "Home Décor", room: "Home Décor", price: 5361, memberPrice: 4825, sku: "SH-10637", tag: "New", ph: "", img: "assets/products/rg35.webp",
    imgs: ["assets/products/rg35.webp", "assets/products/rg35-2.webp", "assets/products/rg35-3.webp", "assets/products/rg35-4.webp", "assets/products/rg35-5.webp"],
    sizes: [{ label: "140cm x 200cm", price: 5361 }, { label: "160cm x 240cm", price: 7161 }, { label: "200cm x 300cm", price: 12120 }, { label: "240cm x 340cm", price: 15852 }, { label: "300cm x 400cm", price: 17037 }],
    desc: "Handwoven wool from 140 by 200cm to 240cm.",
    features: [
      "Handwoven wool",
      "From 140 x 200cm",
      "Four sizes"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "5" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg36", name: "Gaethan Handwoven Wool Rug", cat: "Home Décor", room: "Home Décor", price: 5537, memberPrice: 4983, sku: "SH-10638", tag: "New", ph: "", img: "assets/products/rg36.webp",
    imgs: ["assets/products/rg36.webp", "assets/products/rg36-2.webp", "assets/products/rg36-3.webp", "assets/products/rg36-4.webp", "assets/products/rg36-5.webp"],
    sizes: [{ label: "160cm x 230cm", price: 5537 }, { label: "200cm x 290cm", price: 8565 }, { label: "240cm x 340cm", price: 12000 }, { label: "300cm x 400cm", price: 14444 }],
    desc: "Handwoven wool from 160 by 230cm to 300cm.",
    features: [
      "Handwoven wool",
      "160 x 230cm to 300cm",
      "Four sizes"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "4" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg37", name: "Yori Handwoven Wool Rug", cat: "Home Décor", room: "Home Décor", price: 6180, memberPrice: 5562, sku: "SH-10639", tag: "New", ph: "", img: "assets/products/rg37.webp",
    imgs: ["assets/products/rg37.webp", "assets/products/rg37-2.webp", "assets/products/rg37-3.webp", "assets/products/rg37-4.webp", "assets/products/rg37-5.webp"],
    sizes: [{ label: "160cm x 230cm", price: 6180 }, { label: "200cm x 290cm", price: 9056 }, { label: "240cm x 340cm", price: 13754 }, { label: "300cm x 400cm", price: 16220 }],
    desc: "Handwoven wool, large formats only.",
    features: [
      "Handwoven wool",
      "From 160 x 230cm",
      "Large formats"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "4" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg38", name: "Beige Wool Rug (Large)", cat: "Home Décor", room: "Home Décor", price: 6331, memberPrice: 5698, sku: "SH-10640", tag: "New", ph: "", img: "assets/products/rg38.webp",
    imgs: ["assets/products/rg38.webp", "assets/products/rg38-2.webp", "assets/products/rg38-3.webp", "assets/products/rg38-4.webp", "assets/products/rg38-5.webp"],
    sizes: [{ label: "Beige / 200cm x 290cm", price: 6331 }, { label: "Grey / 200cm x 290cm", price: 6331 }, { label: "Black / 200cm x 290cm", price: 6331 }, { label: "Beige / 240cm x 340cm", price: 8870 }, { label: "Grey / 240cm x 340cm", price: 8870 }, { label: "Black / 240cm x 340cm", price: 8870 }, { label: "Beige / 300cm x 400cm", price: 11574 }, { label: "Grey / 300cm x 400cm", price: 11574 }, { label: "Black / 300cm x 400cm", price: 11574 }],
    desc: "Beige wool from 200 by 290cm.",
    features: [
      "Wool pile",
      "Beige colourway",
      "From 200 x 290cm"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "9" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg39", name: "Charlie Handwoven Wool Rug", cat: "Home Décor", room: "Home Décor", price: 6481, memberPrice: 5833, sku: "SH-10641", tag: "New", ph: "", img: "assets/products/rg39.webp",
    imgs: ["assets/products/rg39.webp", "assets/products/rg39-2.webp", "assets/products/rg39-3.webp", "assets/products/rg39-4.webp", "assets/products/rg39-5.webp"],
    sizes: [{ label: "160cm x 230cm", price: 6481 }, { label: "200cm x 290cm", price: 10787 }, { label: "240cm x 340cm", price: 15556 }, { label: "300cm x 400cm", price: 17907 }],
    desc: "Handwoven wool from 160 by 230cm.",
    features: [
      "Handwoven wool",
      "From 160 x 230cm",
      "Four sizes"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "4" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg40", name: "Lionel Handwoven Wool Rug", cat: "Home Décor", room: "Home Décor", price: 6754, memberPrice: 6079, sku: "SH-10642", tag: "New", ph: "", img: "assets/products/rg40.webp",
    imgs: ["assets/products/rg40.webp", "assets/products/rg40-2.webp", "assets/products/rg40-3.webp", "assets/products/rg40-4.webp", "assets/products/rg40-5.webp"],
    sizes: [{ label: "150cm x 230cm", price: 6754 }, { label: "195cm x 290cm", price: 6754 }, { label: "240cm x 330cm", price: 6754 }, { label: "300cm x 390cm", price: 6754 }],
    desc: "Handwoven wool from 150 by 230cm to 300cm.",
    features: [
      "Handwoven wool",
      "150 x 230cm to 300cm",
      "Four sizes"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "4" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "rg41", name: "Louison Handwoven Wool Rug", cat: "Home Décor", room: "Home Décor", price: 7696, memberPrice: 6926, sku: "SH-10643", tag: "New", ph: "", img: "assets/products/rg41.webp",
    imgs: ["assets/products/rg41.webp", "assets/products/rg41-2.webp", "assets/products/rg41-3.webp", "assets/products/rg41-4.webp", "assets/products/rg41-5.webp"],
    sizes: [{ label: "160cm x 240cm", price: 7696 }, { label: "200cm x 300cm", price: 12570 }, { label: "240cm x 340cm", price: 15291 }, { label: "300cm x 400cm", price: 19444 }],
    desc: "The finest rug we carry: handwoven wool from 160 by 240cm up to 300cm.",
    features: [
      "Handwoven wool",
      "160 x 240cm to 300cm",
      "The finest in the range"
    ],
    specs: { "Type": "Rug", "Material": "Wool", "Sizes": "4" },
    care: "Vacuum regularly without a beater bar, which pulls at the pile. Blot spills immediately, never rub. Rotate the rug every few months so it wears and fades evenly, and use an underlay to stop it creeping." },

  { id: "cd01", name: "Glass Candle Holder (Three Sizes)", cat: "Home Décor", room: "Home Décor", price: 104, memberPrice: 94, sku: "SH-10457", tag: "New", ph: "", img: "assets/products/cd01.webp",
    imgs: ["assets/products/cd01.webp", "assets/products/cd01-2.webp", "assets/products/cd01-3.webp", "assets/products/cd01-4.webp"],
    sizes: [{ label: "S", price: 104 }, { label: "M", price: 119 }, { label: "L", price: 141 }],
    desc: "Glass in small, medium and large. Group all three at different heights.",
    features: [
      "Glass construction",
      "Three sizes",
      "Group at varying heights"
    ],
    specs: { "Type": "Candle holder", "Material": "Glass", "Options": "3" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes, which can crack glass." },

  { id: "cd02", name: "Candle Holder (Large or Small)", cat: "Home Décor", room: "Home Décor", price: 119, memberPrice: 107, sku: "SH-10458", tag: "New", ph: "", img: "assets/products/cd02.webp",
    imgs: ["assets/products/cd02.webp", "assets/products/cd02-2.webp", "assets/products/cd02-3.webp", "assets/products/cd02-4.webp", "assets/products/cd02-5.webp"],
    sizes: [{ label: "Large", price: 119 }, { label: "Small", price: 137 }],
    desc: "Two sizes, meant to be used as a pair.",
    features: [
      "Two sizes",
      "Designed as a pair",
      "Simple silhouette"
    ],
    specs: { "Type": "Candle holder", "Material": "Metal", "Options": "2" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "cd03", name: "Three-Piece Candle Holder Set", cat: "Home Décor", room: "Home Décor", price: 183, memberPrice: 165, sku: "SH-10459", tag: "New", ph: "", img: "assets/products/cd03.webp",
    imgs: ["assets/products/cd03.webp", "assets/products/cd03-2.webp", "assets/products/cd03-3.webp", "assets/products/cd03-4.webp", "assets/products/cd03-5.webp"],
    sizes: [{ label: "Silver / 3 Pcs", price: 183 }, { label: "Gold / 3 Pcs", price: 183 }, { label: "Black / 3 Pcs", price: 183 }, { label: "Rose Gold / 3 Pcs", price: 183 }],
    desc: "A set of three in silver, gold, black or rose gold. The easiest way to get a grouping right.",
    features: [
      "Set of three",
      "Silver, Gold, Black or Rose Gold",
      "Graduated heights"
    ],
    specs: { "Type": "Candle holder", "Material": "Metal", "Options": "4" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "cd04", name: "Marble & Gold Candle Holder", cat: "Home Décor", room: "Home Décor", price: 309, memberPrice: 278, sku: "SH-10460", tag: "New", ph: "", img: "assets/products/cd04.webp",
    imgs: ["assets/products/cd04.webp", "assets/products/cd04-2.webp", "assets/products/cd04-3.webp", "assets/products/cd04-4.webp", "assets/products/cd04-5.webp"],
    sizes: [{ label: "M", price: 309 }, { label: "L", price: 365 }],
    desc: "Marble with gold, medium or large.",
    features: [
      "Marble with gold detail",
      "Medium and Large",
      "Weighted base"
    ],
    specs: { "Type": "Candle holder", "Material": "Natural marble", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it from vinegar, citrus and bleach, and stand it on felt or a coaster to protect the surface underneath." },

  { id: "cd05", name: "Acrane Candle Holder", cat: "Home Décor", room: "Home Décor", price: 311, memberPrice: 280, sku: "SH-10461", tag: "New", ph: "", img: "assets/products/cd05.webp",
    imgs: ["assets/products/cd05.webp", "assets/products/cd05-2.webp", "assets/products/cd05-3.webp", "assets/products/cd05-4.webp", "assets/products/cd05-5.webp"],
    sizes: [{ label: "S", price: 311 }, { label: "M", price: 415 }, { label: "L", price: 530 }],
    desc: "Three sizes in a slim, architectural shape.",
    features: [
      "Three sizes",
      "Slim architectural form",
      "Group or use alone"
    ],
    specs: { "Type": "Candle holder", "Material": "Metal", "Options": "3" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "cd06", name: "Marble Candle Holder (Five Designs)", cat: "Home Décor", room: "Home Décor", price: 311, memberPrice: 280, sku: "SH-10462", tag: "New", ph: "", img: "assets/products/cd06.webp",
    imgs: ["assets/products/cd06.webp", "assets/products/cd06-2.webp", "assets/products/cd06-3.webp", "assets/products/cd06-4.webp", "assets/products/cd06-5.webp"],
    sizes: [{ label: "A", price: 311 }, { label: "B", price: 311 }, { label: "C", price: 311 }, { label: "D", price: 311 }, { label: "E", price: 311 }],
    desc: "Five marble designs, A through E, so a group can vary in shape as well as height.",
    features: [
      "Solid marble",
      "Five designs",
      "Vary shape and height in a group"
    ],
    specs: { "Type": "Candle holder", "Material": "Natural marble", "Options": "5" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it from vinegar, citrus and bleach, and stand it on felt or a coaster to protect the surface underneath." },

  { id: "cd07", name: "Travertine & Brass Oil Burner", cat: "Home Décor", room: "Home Décor", price: 350, memberPrice: 315, sku: "SH-10463", tag: "New", ph: "", img: "assets/products/cd07.webp",
    imgs: ["assets/products/cd07.webp", "assets/products/cd07-2.webp", "assets/products/cd07-3.webp", "assets/products/cd07-4.webp", "assets/products/cd07-5.webp"],
    desc: "Travertine with brass, for oil rather than candles.",
    features: [
      "Travertine with brass",
      "For essential oils",
      "Single size"
    ],
    specs: { "Type": "Candle holder", "Material": "Natural travertine", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "cd08", optionLabel: "Colour", sizeImg: {"Black":"assets/products/cd08-5.webp"}, name: "Marble Candle Holder in Three Stones", cat: "Home Décor", room: "Home Décor", price: 430, memberPrice: 387, sku: "SH-10464", tag: "New", ph: "", img: "assets/products/cd08.webp",
    imgs: ["assets/products/cd08.webp", "assets/products/cd08-2.webp", "assets/products/cd08-3.webp", "assets/products/cd08-4.webp", "assets/products/cd08-5.webp"],
    sizes: [{ label: "Black", price: 430 }, { label: "White", price: 430 }, { label: "Travertine", price: 430 }],
    desc: "Black marble, white marble or travertine.",
    features: [
      "Black, White or Travertine",
      "Natural stone",
      "Each piece unique"
    ],
    specs: { "Type": "Candle holder", "Material": "Natural marble", "Options": "3" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it from vinegar, citrus and bleach, and stand it on felt or a coaster to protect the surface underneath." },

  { id: "cd09", name: "Travertine Candle Holder Pair", cat: "Home Décor", room: "Home Décor", price: 457, memberPrice: 411, sku: "SH-10465", tag: "New", ph: "", img: "assets/products/cd09.webp",
    imgs: ["assets/products/cd09.webp", "assets/products/cd09-2.webp", "assets/products/cd09-3.webp", "assets/products/cd09-4.webp"],
    sizes: [{ label: "2x Piece Set", price: 457 }],
    desc: "A pair of travertine holders, bought together.",
    features: [
      "Two-piece set",
      "Solid travertine",
      "Designed as a pair"
    ],
    specs: { "Type": "Candle holder", "Material": "Natural travertine", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "cd10", name: "Candle Holder in Silver or Titanium", cat: "Home Décor", room: "Home Décor", price: 474, memberPrice: 427, sku: "SH-10466", tag: "New", ph: "", img: "assets/products/cd10.webp",
    imgs: ["assets/products/cd10.webp", "assets/products/cd10-2.webp", "assets/products/cd10-3.webp", "assets/products/cd10-4.webp", "assets/products/cd10-5.webp"],
    sizes: [{ label: "Silver", price: 474 }, { label: "Titanium Grey", price: 474 }],
    desc: "Silver or titanium grey, with a modern, hard-edged look.",
    features: [
      "Silver or Titanium Grey",
      "Contemporary form",
      "Metal construction"
    ],
    specs: { "Type": "Candle holder", "Material": "Metal", "Options": "2" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "cd11", name: "Twin Travertine Candle Holder", cat: "Home Décor", room: "Home Décor", price: 507, memberPrice: 456, sku: "SH-10467", tag: "New", ph: "", img: "assets/products/cd11.webp",
    imgs: ["assets/products/cd11.webp", "assets/products/cd11-2.webp", "assets/products/cd11-3.webp", "assets/products/cd11-4.webp", "assets/products/cd11-5.webp"],
    sizes: [{ label: "Smooth", price: 507 }, { label: "Rough", price: 507 }],
    desc: "Travertine in a smooth or rough finish. The rough one shows the stone honestly.",
    features: [
      "Smooth or Rough finish",
      "Solid travertine",
      "Twin form"
    ],
    specs: { "Type": "Candle holder", "Material": "Natural travertine", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "cd12", name: "Serenity Stone Candle Holder", cat: "Home Décor", room: "Home Décor", price: 550, memberPrice: 495, sku: "SH-10468", tag: "New", ph: "", img: "assets/products/cd12.webp",
    imgs: ["assets/products/cd12.webp", "assets/products/cd12-2.webp", "assets/products/cd12-3.webp", "assets/products/cd12-4.webp", "assets/products/cd12-5.webp"],
    sizes: [{ label: "Travertine", price: 550 }],
    desc: "A single travertine holder, plainly done.",
    features: [
      "Solid travertine",
      "Single design",
      "Natural surface"
    ],
    specs: { "Type": "Candle holder", "Material": "Natural travertine", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "cd13", name: "Travertine & Gold Candle Holder", cat: "Home Décor", room: "Home Décor", price: 583, memberPrice: 525, sku: "SH-10469", tag: "New", ph: "", img: "assets/products/cd13.webp",
    imgs: ["assets/products/cd13.webp", "assets/products/cd13-2.webp", "assets/products/cd13-3.webp", "assets/products/cd13-4.webp", "assets/products/cd13-5.webp"],
    sizes: [{ label: "S: Beige", price: 583 }, { label: "S: Black", price: 583 }, { label: "L: Beige", price: 713 }, { label: "L: Black", price: 713 }],
    desc: "Travertine with gold in beige or black, small or large.",
    features: [
      "Travertine with gold",
      "Beige or Black",
      "Small and Large"
    ],
    specs: { "Type": "Candle holder", "Material": "Natural travertine", "Options": "4" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "cd14", name: "Isaie Travertine Candle Holder", cat: "Home Décor", room: "Home Décor", price: 624, memberPrice: 562, sku: "SH-10470", tag: "New", ph: "", img: "assets/products/cd14.webp",
    imgs: ["assets/products/cd14.webp", "assets/products/cd14-2.webp", "assets/products/cd14-3.webp", "assets/products/cd14-4.webp"],
    desc: "One travertine holder, one size.",
    features: [
      "Solid travertine",
      "Single size",
      "Weighted base"
    ],
    specs: { "Type": "Candle holder", "Material": "Natural travertine", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "cd15", name: "Volakos Marble Candle Holder", cat: "Home Décor", room: "Home Décor", price: 698, memberPrice: 628, sku: "SH-10471", tag: "New", ph: "", img: "assets/products/cd15.webp",
    imgs: ["assets/products/cd15.webp", "assets/products/cd15-2.webp", "assets/products/cd15-3.webp", "assets/products/cd15-4.webp", "assets/products/cd15-5.webp"],
    sizes: [{ label: "A", price: 698 }, { label: "D", price: 715 }, { label: "C", price: 759 }, { label: "B", price: 796 }],
    desc: "Volakos marble in four designs, A through D.",
    features: [
      "Volakos marble",
      "Four designs",
      "Pale veined stone"
    ],
    specs: { "Type": "Candle holder", "Material": "Natural marble", "Options": "4" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it from vinegar, citrus and bleach, and stand it on felt or a coaster to protect the surface underneath." },

  { id: "cd16", name: "Floor Candelabra (67cm)", cat: "Home Décor", room: "Home Décor", price: 1661, memberPrice: 1495, sku: "SH-10472", tag: "New", ph: "", img: "assets/products/cd16.webp",
    imgs: ["assets/products/cd16.webp", "assets/products/cd16-2.webp", "assets/products/cd16-3.webp", "assets/products/cd16-4.webp"],
    sizes: [{ label: "67cm x 47cm", price: 1661 }],
    desc: "A 67 by 47cm candelabra, which is a floor piece rather than a table one.",
    features: [
      "67cm x 47cm",
      "Floor-standing scale",
      "Holds multiple candles"
    ],
    specs: { "Type": "Candle holder", "Material": "Metal", "Options": "1" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "cl01", name: "Wall Clock in Black or Gold", cat: "Home Décor", room: "Home Décor", price: 343, memberPrice: 309, sku: "SH-10473", tag: "New", ph: "", img: "assets/products/cl01.webp",
    imgs: ["assets/products/cl01.webp", "assets/products/cl01-2.webp", "assets/products/cl01-3.webp", "assets/products/cl01-4.webp", "assets/products/cl01-5.webp"],
    sizes: [{ label: "Black / 50cm", price: 343 }, { label: "Gold / 50cm", price: 343 }, { label: "Black / 70cm", price: 420 }, { label: "Gold / 70cm", price: 420 }],
    desc: "A metal wall clock at 50cm or 70cm, in black or gold. The 70cm is a statement across a hallway.",
    features: [
      "Metal construction",
      "50cm and 70cm",
      "Black or Gold"
    ],
    specs: { "Type": "Wall clock", "Material": "Metal", "Options": "4" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "cl02", name: "Timber & Metal Wall Clock", cat: "Home Décor", room: "Home Décor", price: 378, memberPrice: 340, sku: "SH-10474", tag: "New", ph: "", img: "assets/products/cl02.webp",
    imgs: ["assets/products/cl02.webp", "assets/products/cl02-2.webp", "assets/products/cl02-3.webp"],
    sizes: [{ label: "Black", price: 378 }],
    desc: "Timber with metal, in black.",
    features: [
      "Timber with metal",
      "Black finish",
      "Single size"
    ],
    specs: { "Type": "Wall clock", "Material": "Timber", "Options": "1" },
    care: "Dust with a dry cloth. Keep out of direct sun and away from damp, and wipe spills promptly." },

  { id: "cl03", optionLabel: "Colour", sizeImg: {"Grey":"assets/products/cl03-3.webp","Red":"assets/products/cl03-5.webp","Tan":"assets/products/cl03.webp"}, name: "Leather-Look Wall Clock", cat: "Home Décor", room: "Home Décor", price: 420, memberPrice: 378, sku: "SH-10475", tag: "New", ph: "", img: "assets/products/cl03.webp",
    imgs: ["assets/products/cl03.webp", "assets/products/cl03-2.webp", "assets/products/cl03-3.webp", "assets/products/cl03-4.webp", "assets/products/cl03-5.webp"],
    sizes: [{ label: "Grey", price: 420 }, { label: "Red", price: 420 }, { label: "Tan", price: 420 }, { label: "Light Tan", price: 420 }],
    desc: "A leather-look face in grey, red, tan or light tan.",
    features: [
      "Leather-look face",
      "Four colourways",
      "Warm alternative to metal"
    ],
    specs: { "Type": "Wall clock", "Material": "Leather", "Options": "4" },
    care: "Wipe with a barely damp cloth. Keep out of direct sun, and condition occasionally so the leather doesn't dry out." },

  { id: "cl04", name: "Arianna Wall Clock", cat: "Home Décor", room: "Home Décor", price: 493, memberPrice: 444, sku: "SH-10476", tag: "New", ph: "", img: "assets/products/cl04.webp",
    imgs: ["assets/products/cl04.webp", "assets/products/cl04-2.webp", "assets/products/cl04-3.webp"],
    sizes: [{ label: "Black", price: 493 }],
    desc: "Timber and metal in black.",
    features: [
      "Timber and metal",
      "Black finish",
      "Understated face"
    ],
    specs: { "Type": "Wall clock", "Material": "Timber", "Options": "1" },
    care: "Dust with a dry cloth. Keep out of direct sun and away from damp, and wipe spills promptly." },

  { id: "cl05", name: "Gold Iron Wall Clock (60cm)", cat: "Home Décor", room: "Home Décor", price: 1254, memberPrice: 1129, sku: "SH-10477", tag: "New", ph: "", img: "assets/products/cl05.webp",
    imgs: ["assets/products/cl05.webp", "assets/products/cl05-2.webp", "assets/products/cl05-3.webp", "assets/products/cl05-4.webp"],
    sizes: [{ label: "60cm", price: 1254 }],
    desc: "Gold iron at 60cm, decorative as much as functional.",
    features: [
      "Gold iron construction",
      "60cm",
      "Decorative statement"
    ],
    specs: { "Type": "Wall clock", "Material": "Metal", "Options": "1" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "cl06", name: "White Wall Clock (Four Sizes)", cat: "Home Décor", room: "Home Décor", price: 1474, memberPrice: 1327, sku: "SH-10478", tag: "New", ph: "", img: "assets/products/cl06.webp",
    imgs: ["assets/products/cl06.webp", "assets/products/cl06-2.webp", "assets/products/cl06-3.webp", "assets/products/cl06-4.webp"],
    sizes: [{ label: "White / 30cm", price: 1474 }, { label: "White / 40cm", price: 1619 }, { label: "White / 50cm", price: 1659 }, { label: "White / 60cm", price: 1769 }],
    desc: "White, from 30cm to 60cm, so it suits a kitchen or a stairwell.",
    features: [
      "White finish",
      "30, 40, 50 and 60cm",
      "Kitchen through to stairwell"
    ],
    specs: { "Type": "Wall clock", "Material": "Metal", "Options": "4" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "cl07", name: "Glass Wall Clock in Gold or Silver", cat: "Home Décor", room: "Home Décor", price: 2326, memberPrice: 2093, sku: "SH-10479", tag: "New", ph: "", img: "assets/products/cl07.webp",
    imgs: ["assets/products/cl07.webp", "assets/products/cl07-2.webp", "assets/products/cl07-3.webp", "assets/products/cl07-4.webp", "assets/products/cl07-5.webp"],
    sizes: [{ label: "Gold / 60cm", price: 2326 }, { label: "Silver / 60cm", price: 2326 }, { label: "Gold / 80cm", price: 2741 }, { label: "Silver / 80cm", price: 2741 }],
    desc: "Glass with gold or silver, at 60cm or 80cm. The largest clock we carry.",
    features: [
      "Glass with metal detail",
      "60cm and 80cm",
      "Gold or Silver"
    ],
    specs: { "Type": "Wall clock", "Material": "Glass", "Options": "4" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes, which can crack glass." },

  { id: "tb01", name: "Folded Tray in Black or Yellow", cat: "Home Décor", room: "Home Décor", price: 96, memberPrice: 86, sku: "SH-10480", tag: "New", ph: "", img: "assets/products/tb01.webp",
    imgs: ["assets/products/tb01.webp", "assets/products/tb01-2.webp", "assets/products/tb01-3.webp", "assets/products/tb01-4.webp", "assets/products/tb01-5.webp"],
    sizes: [{ label: "Black / 20cm x 20cm", price: 96 }, { label: "Yellow / 20cm x 20cm", price: 96 }, { label: "Red / 20cm x 20cm", price: 96 }, { label: "Light Grey / 20cm x 20cm", price: 96 }, { label: "Light Pink / 20cm x 20cm", price: 96 }, { label: "Green / 20cm x 20cm", price: 96 }, { label: "Beige / 20cm x 20cm", price: 96 }, { label: "Black / 25cm x 25cm", price: 106 }, { label: "Yellow / 25cm x 25cm", price: 106 }, { label: "Red / 25cm x 25cm", price: 106 }, { label: "Light Grey / 25cm x 25cm", price: 106 }, { label: "Light Pink / 25cm x 25cm", price: 106 }, { label: "Green / 25cm x 25cm", price: 106 }, { label: "Beige / 25cm x 25cm", price: 106 }],
    desc: "A folded-edge tray at 20 or 25cm square, in black or yellow. Yellow is the braver choice and the better one.",
    features: [
      "Folded edge detail",
      "20cm and 25cm square",
      "Black or Yellow"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Metal", "Options": "14" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "tb02", name: "Gold Round Organiser Tray", cat: "Kitchenware", room: "Home Décor", price: 128, memberPrice: 115, sku: "SH-10481", tag: "New", ph: "", img: "assets/products/tb02.webp",
    imgs: ["assets/products/tb02.webp", "assets/products/tb02-2.webp", "assets/products/tb02-3.webp", "assets/products/tb02-4.webp", "assets/products/tb02-5.webp"],
    sizes: [{ label: "12.5cm / Gold", price: 128 }, { label: "20cm / Gold", price: 183 }, { label: "30cm / Gold", price: 239 }],
    desc: "Gold stainless steel in three diameters, from 12.5cm for rings to 30cm for a coffee table.",
    features: [
      "Gold stainless steel",
      "12.5cm, 20cm and 30cm",
      "Jewellery through to coffee table"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Metal", "Options": "3" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "tb03", name: "Marble-Look Serving Tray", cat: "Kitchenware", room: "Home Décor", price: 148, memberPrice: 133, sku: "SH-10482", tag: "New", ph: "", img: "assets/products/tb03.webp",
    imgs: ["assets/products/tb03.webp", "assets/products/tb03-2.webp", "assets/products/tb03-3.webp"],
    sizes: [{ label: "Black + Gold / 20cm (8\")", price: 148 }, { label: "White + Gold / 20cm (8\")", price: 148 }, { label: "Black + Gold / 25cm (10\")", price: 157 }, { label: "White + Gold / 25cm (10\")", price: 157 }],
    desc: "A marble-look tray with gold handles, at 20cm or 25cm.",
    features: [
      "Marble-look finish with gold",
      "20cm and 25cm",
      "Serving or display"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Ceramic", "Options": "4" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail." },

  { id: "tb04", name: "Timber Storage Tray", cat: "Home Décor", room: "Home Décor", price: 163, memberPrice: 147, sku: "SH-10483", tag: "New", ph: "", img: "assets/products/tb04.webp",
    imgs: ["assets/products/tb04.webp", "assets/products/tb04-2.webp", "assets/products/tb04-3.webp", "assets/products/tb04-4.webp"],
    sizes: [{ label: "White + Brown", price: 163 }],
    desc: "White and brown timber, for keys, glasses and the things that collect by a door.",
    features: [
      "Timber construction",
      "White and brown finish",
      "Entryway or dresser storage"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Timber", "Options": "1" },
    care: "Dust with a dry cloth. Keep out of direct sun and away from damp, and wipe spills promptly." },

  { id: "tb05", name: "Storage Tray in Grey or Coffee", cat: "Home Décor", room: "Home Décor", price: 180, memberPrice: 162, sku: "SH-10484", tag: "New", ph: "", img: "assets/products/tb05.webp",
    imgs: ["assets/products/tb05.webp", "assets/products/tb05-2.webp", "assets/products/tb05-3.webp", "assets/products/tb05-4.webp", "assets/products/tb05-5.webp"],
    sizes: [{ label: "Grey / S", price: 180 }, { label: "Coffee / S", price: 180 }, { label: "Grey / M", price: 254 }, { label: "Coffee / M", price: 254 }, { label: "Grey / L", price: 341 }, { label: "Coffee / L", price: 341 }],
    desc: "Three sizes in grey or coffee.",
    features: [
      "Grey or Coffee",
      "Small, Medium and Large",
      "Stackable storage"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Ceramic", "Options": "6" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail." },

  { id: "tb06", optionLabel: "Colour", sizeImg: {"Orange":"assets/products/tb06-3.webp","Blue":"assets/products/tb06-4.webp","Red":"assets/products/tb06-5.webp"}, name: "Leather Organiser Tray (Four Colours)", cat: "Home Décor", room: "Home Décor", price: 204, memberPrice: 184, sku: "SH-10485", tag: "New", ph: "", img: "assets/products/tb06.webp",
    imgs: ["assets/products/tb06.webp", "assets/products/tb06-2.webp", "assets/products/tb06-3.webp", "assets/products/tb06-4.webp", "assets/products/tb06-5.webp"],
    sizes: [{ label: "Orange", price: 204 }, { label: "Blue", price: 204 }, { label: "Red", price: 204 }, { label: "Brown", price: 204 }],
    desc: "Leather in orange, blue, red or brown. The coloured ones lift a plain dresser.",
    features: [
      "Leather construction",
      "Orange, Blue, Red or Brown",
      "Dresser or desk organiser"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Leather", "Options": "4" },
    care: "Wipe with a barely damp cloth. Keep out of direct sun, and condition occasionally so the leather doesn't dry out." },

  { id: "tb07", optionLabel: "Colour", sizeImg: {"White":"assets/products/tb07-5.webp","Beige":"assets/products/tb07-2.webp","Orange":"assets/products/tb07-3.webp"}, name: "Leather Tray in Neutral Tones", cat: "Home Décor", room: "Home Décor", price: 222, memberPrice: 200, sku: "SH-10486", tag: "New", ph: "", img: "assets/products/tb07.webp",
    imgs: ["assets/products/tb07.webp", "assets/products/tb07-2.webp", "assets/products/tb07-3.webp", "assets/products/tb07-4.webp", "assets/products/tb07-5.webp"],
    sizes: [{ label: "White", price: 222 }, { label: "Beige", price: 222 }, { label: "Orange", price: 222 }],
    desc: "Leather in white, beige or orange.",
    features: [
      "Leather construction",
      "White, Beige or Orange",
      "Catch-all tray"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Leather", "Options": "3" },
    care: "Wipe with a barely damp cloth. Keep out of direct sun, and condition occasionally so the leather doesn't dry out." },

  { id: "tb08", optionLabel: "Colour", sizeImg: {"Dark Grey":"assets/products/tb08-5.webp","Orange":"assets/products/tb08-3.webp","Off White":"assets/products/tb08-4.webp"}, name: "Storage Tray (Four Colours)", cat: "Home Décor", room: "Home Décor", price: 222, memberPrice: 200, sku: "SH-10487", tag: "New", ph: "", img: "assets/products/tb08.webp",
    imgs: ["assets/products/tb08.webp", "assets/products/tb08-2.webp", "assets/products/tb08-3.webp", "assets/products/tb08-4.webp", "assets/products/tb08-5.webp"],
    sizes: [{ label: "Dark Grey", price: 222 }, { label: "Orange", price: 222 }, { label: "Green", price: 222 }, { label: "Off White", price: 222 }],
    desc: "Dark grey, orange, green or off white.",
    features: [
      "Four colourways",
      "Everyday storage",
      "Wipe-clean surface"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Ceramic", "Options": "4" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail." },

  { id: "tb09", name: "Fruit Bowl in Gold or Silver", cat: "Kitchenware", room: "Home Décor", price: 239, memberPrice: 215, sku: "SH-10488", tag: "New", ph: "", img: "assets/products/tb09.webp",
    imgs: ["assets/products/tb09.webp", "assets/products/tb09-2.webp", "assets/products/tb09-3.webp", "assets/products/tb09-4.webp"],
    sizes: [{ label: "Gold / Small", price: 239 }, { label: "Silver / Small", price: 239 }, { label: "Gold / Large", price: 276 }, { label: "Silver / Large", price: 276 }],
    desc: "A metal fruit bowl in gold or silver, small or large.",
    features: [
      "Gold or Silver",
      "Small and Large",
      "Fruit or display"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Metal", "Options": "4" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "tb10", name: "Round Travertine Tray", cat: "Home Décor", room: "Home Décor", price: 250, memberPrice: 225, sku: "SH-10489", tag: "New", ph: "", img: "assets/products/tb10.webp",
    imgs: ["assets/products/tb10.webp", "assets/products/tb10-2.webp", "assets/products/tb10-3.webp"],
    sizes: [{ label: "Travertine / S", price: 250 }, { label: "Travertine / M", price: 326 }, { label: "Travertine / L", price: 437 }],
    desc: "Solid travertine in three sizes, which also works as a base for candles.",
    features: [
      "Solid travertine",
      "Three sizes",
      "Doubles as a candle base"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Natural travertine", "Options": "3" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "tb11", name: "Travertine Tray (Two Designs)", cat: "Home Décor", room: "Home Décor", price: 256, memberPrice: 230, sku: "SH-10490", tag: "New", ph: "", img: "assets/products/tb11.webp",
    imgs: ["assets/products/tb11.webp", "assets/products/tb11-2.webp", "assets/products/tb11-3.webp", "assets/products/tb11-4.webp", "assets/products/tb11-5.webp"],
    sizes: [{ label: "A", price: 256 }, { label: "B", price: 393 }],
    desc: "Two travertine designs, A and B.",
    features: [
      "Solid travertine",
      "Two designs",
      "Natural texture"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Natural travertine", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "tb12", name: "Round Marble Tray", cat: "Home Décor", room: "Home Décor", price: 267, memberPrice: 240, sku: "SH-10491", tag: "New", ph: "", img: "assets/products/tb12.webp",
    imgs: ["assets/products/tb12.webp", "assets/products/tb12-2.webp", "assets/products/tb12-3.webp"],
    sizes: [{ label: "Black / S", price: 267 }, { label: "Black / M", price: 339 }, { label: "Black / L", price: 552 }],
    desc: "Black marble in three sizes, equally at home under candles or perfume bottles.",
    features: [
      "Black marble",
      "Three sizes",
      "Candles, perfume or jewellery"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Natural marble", "Options": "3" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it from vinegar, citrus and bleach, and stand it on felt or a coaster to protect the surface underneath." },

  { id: "tb13", name: "Mirrored Glass Tray", cat: "Home Décor", room: "Home Décor", price: 272, memberPrice: 245, sku: "SH-10492", tag: "New", ph: "", img: "assets/products/tb13.webp",
    imgs: ["assets/products/tb13.webp", "assets/products/tb13-2.webp", "assets/products/tb13-3.webp", "assets/products/tb13-4.webp"],
    sizes: [{ label: "Gold", price: 272 }],
    desc: "Mirror glass with brass detail in gold. A tray that makes whatever sits on it look better.",
    features: [
      "Mirrored glass with brass",
      "Gold finish",
      "Reflects and lifts what sits on it"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Glass", "Options": "1" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes, which can crack glass." },

  { id: "tb14", optionLabel: "Colour", sizeImg: {"Beige":"assets/products/tb14-4.webp","Green":"assets/products/tb14.webp"}, name: "Display Tray in Grey, Beige or Green", cat: "Home Décor", room: "Home Décor", price: 274, memberPrice: 247, sku: "SH-10493", tag: "New", ph: "", img: "assets/products/tb14.webp",
    imgs: ["assets/products/tb14.webp", "assets/products/tb14-2.webp", "assets/products/tb14-3.webp", "assets/products/tb14-4.webp", "assets/products/tb14-5.webp"],
    sizes: [{ label: "Grey", price: 274 }, { label: "Beige", price: 274 }, { label: "Green", price: 274 }],
    desc: "Three quiet colours for a tray that's meant to organise rather than announce itself.",
    features: [
      "Grey, Beige or Green",
      "Storage and display",
      "Understated finish"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Ceramic", "Options": "3" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail." },

  { id: "tb15", optionLabel: "Colour", sizeImg: {"Green":"assets/products/tb15-4.webp","Black":"assets/products/tb15-5.webp"}, name: "Leather Tray in Green or Khaki", cat: "Home Décor", room: "Home Décor", price: 276, memberPrice: 248, sku: "SH-10494", tag: "New", ph: "", img: "assets/products/tb15.webp",
    imgs: ["assets/products/tb15.webp", "assets/products/tb15-2.webp", "assets/products/tb15-3.webp", "assets/products/tb15-4.webp", "assets/products/tb15-5.webp"],
    sizes: [{ label: "Green", price: 276 }, { label: "Black", price: 276 }, { label: "Khaki", price: 276 }],
    desc: "Leather in green, black or khaki.",
    features: [
      "Leather construction",
      "Green, Black or Khaki",
      "Desk or dresser"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Leather", "Options": "3" },
    care: "Wipe with a barely damp cloth. Keep out of direct sun, and condition occasionally so the leather doesn't dry out." },

  { id: "tb16", name: "Metallic Rectangular Serving Tray", cat: "Kitchenware", room: "Home Décor", price: 291, memberPrice: 262, sku: "SH-10495", tag: "New", ph: "", img: "assets/products/tb16.webp",
    imgs: ["assets/products/tb16.webp", "assets/products/tb16-2.webp", "assets/products/tb16-3.webp", "assets/products/tb16-4.webp", "assets/products/tb16-5.webp"],
    sizes: [{ label: "Gold - Rectangular Tray", price: 291 }, { label: "Silver - Rectangular Tray", price: 291 }, { label: "Gold - Round Tray", price: 291 }, { label: "Silver - Round Tray", price: 291 }],
    desc: "Rectangular, in gold or silver.",
    features: [
      "Gold or Silver",
      "Rectangular format",
      "Serving or display"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Metal", "Options": "4" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "tb17", optionLabel: "Colour", sizeImg: {"Off White":"assets/products/tb17-4.webp","Silver":"assets/products/tb17-3.webp"}, name: "Decorative Bowl, Off White or Silver", cat: "Home Décor", room: "Home Décor", price: 294, memberPrice: 265, sku: "SH-10496", tag: "New", ph: "", img: "assets/products/tb17.webp",
    imgs: ["assets/products/tb17.webp", "assets/products/tb17-2.webp", "assets/products/tb17-3.webp", "assets/products/tb17-4.webp"],
    sizes: [{ label: "Off White", price: 294 }, { label: "Silver", price: 294 }],
    desc: "A decorative ceramic bowl in off white or silver.",
    features: [
      "Ceramic construction",
      "Off White or Silver",
      "Decorative rather than functional"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Ceramic", "Options": "2" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail." },

  { id: "tb18", name: "Mirror Tray in Black & Gold", cat: "Home Décor", room: "Home Décor", price: 296, memberPrice: 266, sku: "SH-10497", tag: "New", ph: "", img: "assets/products/tb18.webp",
    imgs: ["assets/products/tb18.webp", "assets/products/tb18-2.webp", "assets/products/tb18-3.webp", "assets/products/tb18-4.webp"],
    sizes: [{ label: "Black + Gold", price: 296 }],
    desc: "Mirror with black and gold trim, good under a cluster of candles.",
    features: [
      "Mirrored surface",
      "Black and gold trim",
      "Suits a candle grouping"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Glass", "Options": "1" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes, which can crack glass." },

  { id: "tb19", name: "Silver Display Plate", cat: "Home Décor", room: "Home Décor", price: 304, memberPrice: 274, sku: "SH-10498", tag: "New", ph: "", img: "assets/products/tb19.webp",
    imgs: ["assets/products/tb19.webp", "assets/products/tb19-2.webp", "assets/products/tb19-3.webp"],
    sizes: [{ label: "Silver", price: 304 }],
    desc: "Stainless steel in silver, a plate for display rather than dinner.",
    features: [
      "Stainless steel",
      "Silver finish",
      "Display piece"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Metal", "Options": "1" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp." },

  { id: "tb20", name: "Travertine Keepsake Box", cat: "Home Décor", room: "Home Décor", price: 307, memberPrice: 276, sku: "SH-10499", tag: "New", ph: "", img: "assets/products/tb20.webp",
    imgs: ["assets/products/tb20.webp", "assets/products/tb20-2.webp", "assets/products/tb20-3.webp", "assets/products/tb20-4.webp", "assets/products/tb20-5.webp"],
    sizes: [{ label: "Small", price: 307 }, { label: "Large", price: 417 }],
    desc: "A lidded travertine box in two sizes, for the things that shouldn't be on show.",
    features: [
      "Solid travertine with lid",
      "Small and Large",
      "Hides small clutter"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Natural travertine", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "tb21", name: "Travertine Tray Collection", cat: "Home Décor", room: "Home Décor", price: 383, memberPrice: 345, sku: "SH-10500", tag: "New", ph: "", img: "assets/products/tb21.webp",
    imgs: ["assets/products/tb21.webp", "assets/products/tb21-2.webp", "assets/products/tb21-3.webp", "assets/products/tb21-4.webp", "assets/products/tb21-5.webp"],
    sizes: [{ label: "Travertine / S: Round", price: 383 }, { label: "Travertine / L: Oval", price: 517 }, { label: "Travertine / S: Square", price: 537 }, { label: "Travertine / L: Round", price: 546 }, { label: "Travertine / L: Square", price: 556 }],
    desc: "Oval, square and other shapes in travertine, bought singly.",
    features: [
      "Solid travertine",
      "Oval and square shapes",
      "Several sizes"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Natural travertine", "Options": "5" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "tb22", name: "Marble & Gold Tray", cat: "Home Décor", room: "Home Décor", price: 394, memberPrice: 355, sku: "SH-10501", tag: "New", ph: "", img: "assets/products/tb22.webp",
    imgs: ["assets/products/tb22.webp", "assets/products/tb22-2.webp", "assets/products/tb22-3.webp", "assets/products/tb22-4.webp", "assets/products/tb22-5.webp"],
    sizes: [{ label: "Small", price: 394 }, { label: "Large", price: 517 }],
    desc: "Marble with gold stainless handles, small or large.",
    features: [
      "Marble with gold handles",
      "Small and Large",
      "Serving or display"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Natural marble", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it from vinegar, citrus and bleach, and stand it on felt or a coaster to protect the surface underneath." },

  { id: "tb23", name: "Travertine Tray (Small or Large)", cat: "Home Décor", room: "Home Décor", price: 398, memberPrice: 358, sku: "SH-10502", tag: "New", ph: "", img: "assets/products/tb23.webp",
    imgs: ["assets/products/tb23.webp", "assets/products/tb23-2.webp", "assets/products/tb23-3.webp", "assets/products/tb23-4.webp", "assets/products/tb23-5.webp"],
    sizes: [{ label: "S", price: 398 }, { label: "L", price: 498 }],
    desc: "Travertine in two sizes, good under candles.",
    features: [
      "Solid travertine",
      "Small and Large",
      "Candle base or tray"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Natural travertine", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "tb24", name: "Decorative Bowl, Low or High", cat: "Home Décor", room: "Home Décor", price: 417, memberPrice: 375, sku: "SH-10503", tag: "New", ph: "", img: "assets/products/tb24.webp",
    imgs: ["assets/products/tb24.webp", "assets/products/tb24-2.webp", "assets/products/tb24-3.webp", "assets/products/tb24-4.webp", "assets/products/tb24-5.webp"],
    sizes: [{ label: "Low Bowl", price: 417 }, { label: "High Bowl", price: 417 }],
    desc: "The same bowl in a low or a high profile.",
    features: [
      "Low or high profile",
      "Decorative bowl",
      "Choose the proportion"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Ceramic", "Options": "2" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail." },

  { id: "tb25", name: "Round Travertine Fruit Plate", cat: "Kitchenware", room: "Home Décor", price: 461, memberPrice: 415, sku: "SH-10504", tag: "New", ph: "", img: "assets/products/tb25.webp",
    imgs: ["assets/products/tb25.webp", "assets/products/tb25-2.webp", "assets/products/tb25-3.webp", "assets/products/tb25-4.webp", "assets/products/tb25-5.webp"],
    desc: "One travertine tray, one size, cut from solid stone.",
    features: [
      "Solid travertine",
      "Single size",
      "Natural variation"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Natural travertine", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "tb26", name: "Marble & Brass Tray", cat: "Home Décor", room: "Home Décor", price: 591, memberPrice: 532, sku: "SH-10505", tag: "New", ph: "", img: "assets/products/tb26.webp",
    imgs: ["assets/products/tb26.webp", "assets/products/tb26-2.webp", "assets/products/tb26-3.webp", "assets/products/tb26-4.webp", "assets/products/tb26-5.webp"],
    sizes: [{ label: "Beige / Small", price: 591 }, { label: "Black / Small", price: 591 }, { label: "Beige / Large", price: 813 }, { label: "Black / Large", price: 813 }],
    desc: "Marble with brass in beige or black, small or large.",
    features: [
      "Marble with brass detail",
      "Beige or Black",
      "Small and Large"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Natural marble", "Options": "4" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it from vinegar, citrus and bleach, and stand it on felt or a coaster to protect the surface underneath." },

  { id: "tb27", name: "Travertine Pot (19 or 26cm)", cat: "Home Décor", room: "Home Décor", price: 822, memberPrice: 740, sku: "SH-10506", tag: "New", ph: "", img: "assets/products/tb27.webp",
    imgs: ["assets/products/tb27.webp", "assets/products/tb27-2.webp", "assets/products/tb27-3.webp", "assets/products/tb27-4.webp", "assets/products/tb27-5.webp"],
    sizes: [{ label: "19cm", price: 822 }, { label: "26cm", price: 859 }],
    desc: "A travertine pot at 19cm or 26cm, for a plant or simply as an object.",
    features: [
      "Solid travertine",
      "19cm and 26cm",
      "Planter or sculptural object"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Natural travertine", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "tb28", name: "Travertine Tray Collection (Three Designs)", cat: "Home Décor", room: "Home Décor", price: 1285, memberPrice: 1156, sku: "SH-10507", tag: "New", ph: "", img: "assets/products/tb28.webp",
    imgs: ["assets/products/tb28.webp", "assets/products/tb28-2.webp", "assets/products/tb28-3.webp", "assets/products/tb28-4.webp", "assets/products/tb28-5.webp"],
    sizes: [{ label: "B", price: 1285 }, { label: "C", price: 1522 }, { label: "A", price: 1637 }],
    desc: "Three travertine designs, A, B and C.",
    features: [
      "Solid travertine",
      "Three designs",
      "Substantial pieces"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Natural travertine", "Options": "3" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "tb29", name: "Travertine Bowl", cat: "Kitchenware", room: "Home Décor", price: 1433, memberPrice: 1290, sku: "SH-10508", tag: "New", ph: "", img: "assets/products/tb29.webp",
    imgs: ["assets/products/tb29.webp", "assets/products/tb29-2.webp", "assets/products/tb29-3.webp", "assets/products/tb29-4.webp", "assets/products/tb29-5.webp"],
    sizes: [{ label: "Travertine", price: 1433 }],
    desc: "A large travertine bowl, carved from solid stone. The heaviest décor piece we stock.",
    features: [
      "Carved from solid travertine",
      "Large format",
      "Very substantial weight"
    ],
    specs: { "Type": "Tray / bowl", "Material": "Natural travertine", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners." },

  { id: "vs01", name: "Golden Ball Vase (Three Sizes)", cat: "Home Décor", room: "Home Décor", price: 63, memberPrice: 57, sku: "SH-10509", tag: "New", ph: "", img: "assets/products/vs01.webp",
    imgs: ["assets/products/vs01.webp", "assets/products/vs01-2.webp", "assets/products/vs01-3.webp", "assets/products/vs01-4.webp"],
    sizes: [{ label: "Small", price: 63 }, { label: "Medium", price: 89 }, { label: "Large", price: 133 }],
    desc: "A spherical vase with a gold finish, in three sizes. Group all three for a proper display, or use the large one alone with a single stem.",
    features: [
      "Gold finish",
      "Small, Medium and Large",
      "Group the sizes or use one alone"
    ],
    specs: { "Type": "Vase", "Material": "Metal", "Options": "3" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs02", name: "Abstract Vase in Black or White", cat: "Home Décor", room: "Home Décor", price: 83, memberPrice: 75, sku: "SH-10510", tag: "New", ph: "", img: "assets/products/vs02.webp",
    imgs: ["assets/products/vs02.webp", "assets/products/vs02-2.webp", "assets/products/vs02-3.webp", "assets/products/vs02-4.webp", "assets/products/vs02-5.webp"],
    sizes: [{ label: "Black / Small", price: 83 }, { label: "White / Small", price: 83 }, { label: "Black / Large", price: 120 }, { label: "White / Large", price: 120 }],
    desc: "A sculptural, asymmetric shape that holds its own empty. Black or white, small or large.",
    features: [
      "Sculptural asymmetric form",
      "Black or White",
      "Small and Large"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "4" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs03", name: "Regal Bouquet Vase (Four Sizes)", cat: "Home Décor", room: "Home Décor", price: 106, memberPrice: 95, sku: "SH-10511", tag: "New", ph: "", img: "assets/products/vs03.webp",
    imgs: ["assets/products/vs03.webp", "assets/products/vs03-2.webp", "assets/products/vs03-3.webp", "assets/products/vs03-4.webp", "assets/products/vs03-5.webp"],
    sizes: [{ label: "Extra Large", price: 106 }, { label: "Large", price: 119 }, { label: "Medium", price: 124 }, { label: "Small", price: 137 }],
    desc: "A wide-mouthed vase built for a full bouquet rather than a few stems, in four sizes to extra large.",
    features: [
      "Wide mouth for full bouquets",
      "Four sizes to Extra Large",
      "Classic silhouette"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "4" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs04", name: "Glass & Gold Vase (Four Designs)", cat: "Home Décor", room: "Home Décor", price: 109, memberPrice: 98, sku: "SH-10512", tag: "New", ph: "", img: "assets/products/vs04.webp",
    imgs: ["assets/products/vs04.webp", "assets/products/vs04-2.webp", "assets/products/vs04-3.webp", "assets/products/vs04-4.webp", "assets/products/vs04-5.webp"],
    sizes: [{ label: "A", price: 109 }, { label: "C", price: 178 }, { label: "B", price: 211 }, { label: "D", price: 217 }],
    desc: "Glass with gold detail in four designs, A through D, so a group can vary without clashing.",
    features: [
      "Glass with gold detail",
      "Four designs",
      "Mix designs in a group"
    ],
    specs: { "Type": "Vase", "Material": "Glass", "Options": "4" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes, which can crack glass. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs05", optionLabel: "Colour", sizeImg: {"Black":"assets/products/vs05-5.webp","White":"assets/products/vs05-2.webp"}, name: "Monochrome Vase, Black or White", cat: "Home Décor", room: "Home Décor", price: 109, memberPrice: 98, sku: "SH-10513", tag: "New", ph: "", img: "assets/products/vs05.webp",
    imgs: ["assets/products/vs05.webp", "assets/products/vs05-2.webp", "assets/products/vs05-3.webp", "assets/products/vs05-4.webp", "assets/products/vs05-5.webp"],
    sizes: [{ label: "Black", price: 109 }, { label: "White", price: 128 }],
    desc: "One clean shape in black or white.",
    features: [
      "Black or White",
      "Simple contemporary shape",
      "Suits most interiors"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "2" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs06", name: "Marble-Look Ceramic Vase", cat: "Home Décor", room: "Home Décor", price: 133, memberPrice: 120, sku: "SH-10514", tag: "New", ph: "", img: "assets/products/vs06.webp",
    imgs: ["assets/products/vs06.webp", "assets/products/vs06-2.webp", "assets/products/vs06-3.webp", "assets/products/vs06-4.webp", "assets/products/vs06-5.webp"],
    sizes: [{ label: "M", price: 133 }, { label: "L", price: 206 }],
    desc: "Ceramic finished to look like marble, in medium or large. The look of stone at a fraction of the weight.",
    features: [
      "Marble-look ceramic",
      "Medium and Large",
      "Lighter than real stone"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "2" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs07", name: "White Vase (Small or Large)", cat: "Home Décor", room: "Home Décor", price: 137, memberPrice: 123, sku: "SH-10515", tag: "New", ph: "", img: "assets/products/vs07.webp",
    imgs: ["assets/products/vs07.webp", "assets/products/vs07-2.webp", "assets/products/vs07-3.webp", "assets/products/vs07-4.webp"],
    sizes: [{ label: "White / Small", price: 137 }, { label: "White / Large", price: 204 }],
    desc: "A plain white vase in two sizes, the sort that disappears and lets the flowers talk.",
    features: [
      "White glaze",
      "Small and Large",
      "Understated shape"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "2" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs08", name: "Nova Vase in Black or White", cat: "Home Décor", room: "Home Décor", price: 161, memberPrice: 145, sku: "SH-10516", tag: "New", ph: "", img: "assets/products/vs08.webp",
    imgs: ["assets/products/vs08.webp", "assets/products/vs08-2.webp", "assets/products/vs08-3.webp", "assets/products/vs08-4.webp", "assets/products/vs08-5.webp"],
    sizes: [{ label: "Black / Small", price: 161 }, { label: "White / Small", price: 161 }, { label: "Black / Medium", price: 217 }, { label: "White / Medium", price: 217 }, { label: "Black / Large", price: 293 }, { label: "White / Large", price: 293 }],
    desc: "Three sizes in black or white, meant to be grouped.",
    features: [
      "Black or White",
      "Small, Medium and Large",
      "Designed to be grouped"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "6" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs09", name: "Black Vase (Seven Designs)", cat: "Home Décor", room: "Home Décor", price: 161, memberPrice: 145, sku: "SH-10517", tag: "New", ph: "", img: "assets/products/vs09.webp",
    imgs: ["assets/products/vs09.webp", "assets/products/vs09-2.webp", "assets/products/vs09-3.webp", "assets/products/vs09-4.webp", "assets/products/vs09-5.webp"],
    sizes: [{ label: "1", price: 161 }, { label: "2", price: 161 }, { label: "3", price: 161 }, { label: "5", price: 161 }, { label: "6", price: 233 }, { label: "4", price: 256 }, { label: "7", price: 256 }],
    desc: "Seven different black vases, numbered 1 to 7. Pick two or three that differ in height.",
    features: [
      "Seven designs to choose from",
      "Matte black finish",
      "Vary the heights in a group"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "7" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs10", name: "Sculptural Vase (Small or Large)", cat: "Home Décor", room: "Home Décor", price: 167, memberPrice: 150, sku: "SH-10518", tag: "New", ph: "", img: "assets/products/vs10.webp",
    imgs: ["assets/products/vs10.webp", "assets/products/vs10-2.webp", "assets/products/vs10-3.webp", "assets/products/vs10-4.webp", "assets/products/vs10-5.webp"],
    sizes: [{ label: "Small", price: 167 }, { label: "Large", price: 220 }],
    desc: "A sculptural form in two sizes.",
    features: [
      "Sculptural silhouette",
      "Small and Large",
      "Works with or without flowers"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "2" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs11", optionLabel: "Colour", sizeImg: {"Black":"assets/products/vs11-3.webp","Cream":"assets/products/vs11-5.webp"}, name: "Ceramic Vase in Black or Cream", cat: "Home Décor", room: "Home Décor", price: 178, memberPrice: 160, sku: "SH-10519", tag: "New", ph: "", img: "assets/products/vs11.webp",
    imgs: ["assets/products/vs11.webp", "assets/products/vs11-2.webp", "assets/products/vs11-3.webp", "assets/products/vs11-4.webp", "assets/products/vs11-5.webp"],
    sizes: [{ label: "Black", price: 178 }, { label: "Cream", price: 178 }],
    desc: "Ceramic in black or cream, simple and well proportioned.",
    features: [
      "Ceramic construction",
      "Black or Cream",
      "Well-balanced proportions"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "2" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs12", name: "Liquid Silver Vase", cat: "Home Décor", room: "Home Décor", price: 180, memberPrice: 162, sku: "SH-10520", tag: "New", ph: "", img: "assets/products/vs12.webp",
    imgs: ["assets/products/vs12.webp", "assets/products/vs12-2.webp", "assets/products/vs12-3.webp", "assets/products/vs12-4.webp"],
    sizes: [{ label: "Small", price: 180 }, { label: "Large", price: 231 }],
    desc: "A silver finish with a poured, molten look to it. Small or large.",
    features: [
      "Liquid silver finish",
      "Small and Large",
      "Catches light from every angle"
    ],
    specs: { "Type": "Vase", "Material": "Metal", "Options": "2" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs13", optionLabel: "Colour", sizeImg: {"White":"assets/products/vs13-5.webp","Khaki":"assets/products/vs13-3.webp"}, name: "Vase in Black, White or Khaki", cat: "Home Décor", room: "Home Décor", price: 180, memberPrice: 162, sku: "SH-10521", tag: "New", ph: "", img: "assets/products/vs13.webp",
    imgs: ["assets/products/vs13.webp", "assets/products/vs13-2.webp", "assets/products/vs13-3.webp", "assets/products/vs13-4.webp", "assets/products/vs13-5.webp"],
    sizes: [{ label: "Black", price: 180 }, { label: "White", price: 180 }, { label: "Khaki", price: 180 }],
    desc: "Three colours, khaki being the one that suits a room with timber and greenery.",
    features: [
      "Black, White or Khaki",
      "Matte finish",
      "Khaki suits natural interiors"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "3" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs14", name: "Cube Cascade Crystal Vase", cat: "Home Décor", room: "Home Décor", price: 185, memberPrice: 166, sku: "SH-10522", tag: "New", ph: "", img: "assets/products/vs14.webp",
    imgs: ["assets/products/vs14.webp", "assets/products/vs14-2.webp", "assets/products/vs14-3.webp", "assets/products/vs14-4.webp"],
    sizes: [{ label: "Small", price: 185 }, { label: "Medium", price: 204 }, { label: "Large", price: 222 }, { label: "Extra Large", price: 241 }],
    desc: "Clear crystal in a stepped, cubic form, in four sizes up to extra large.",
    features: [
      "Clear crystal glass",
      "Stepped cubic form",
      "Four sizes"
    ],
    specs: { "Type": "Vase", "Material": "Glass", "Options": "4" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes, which can crack glass. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs15", name: "Glass Vase (Small or Large)", cat: "Home Décor", room: "Home Décor", price: 200, memberPrice: 180, sku: "SH-10523", tag: "New", ph: "", img: "assets/products/vs15.webp",
    imgs: ["assets/products/vs15.webp", "assets/products/vs15-2.webp", "assets/products/vs15-3.webp", "assets/products/vs15-4.webp", "assets/products/vs15-5.webp"],
    sizes: [{ label: "Small", price: 200 }, { label: "Large", price: 289 }],
    desc: "Plain glass in two sizes, the practical choice for cut flowers.",
    features: [
      "Clear glass",
      "Small and Large",
      "Easy to clean"
    ],
    specs: { "Type": "Vase", "Material": "Glass", "Options": "2" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes, which can crack glass. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs16", name: "Textured Ceramic Vase", cat: "Home Décor", room: "Home Décor", price: 213, memberPrice: 192, sku: "SH-10524", tag: "New", ph: "", img: "assets/products/vs16.webp",
    imgs: ["assets/products/vs16.webp", "assets/products/vs16-2.webp", "assets/products/vs16-3.webp", "assets/products/vs16-4.webp", "assets/products/vs16-5.webp"],
    sizes: [{ label: "Dark Grey / Small", price: 213 }, { label: "Beige / Small", price: 213 }, { label: "Dark Grey / Large", price: 259 }, { label: "Beige / Large", price: 259 }],
    desc: "A textured ceramic surface in dark grey or beige, small or large. Texture reads better than pattern in a neutral room.",
    features: [
      "Textured ceramic surface",
      "Dark Grey or Beige",
      "Small and Large"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "4" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs17", name: "Spectra Vase in Silver", cat: "Home Décor", room: "Home Décor", price: 220, memberPrice: 198, sku: "SH-10525", tag: "New", ph: "", img: "assets/products/vs17.webp",
    imgs: ["assets/products/vs17.webp", "assets/products/vs17-2.webp", "assets/products/vs17-3.webp", "assets/products/vs17-4.webp", "assets/products/vs17-5.webp"],
    sizes: [{ label: "S", price: 220 }, { label: "M", price: 274 }, { label: "L", price: 330 }],
    desc: "A silver vase in three sizes.",
    features: [
      "Silver finish",
      "Small, Medium and Large",
      "Reflective surface"
    ],
    specs: { "Type": "Vase", "Material": "Metal", "Options": "3" },
    care: "Dust with a dry cloth and buff gently. Avoid abrasive cleaners on plated finishes, and keep away from prolonged damp. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs18", name: "Opal Glass Vase (Four Sizes)", cat: "Home Décor", room: "Home Décor", price: 222, memberPrice: 200, sku: "SH-10526", tag: "New", ph: "", img: "assets/products/vs18.webp",
    imgs: ["assets/products/vs18.webp", "assets/products/vs18-2.webp", "assets/products/vs18-3.webp", "assets/products/vs18-4.webp", "assets/products/vs18-5.webp"],
    sizes: [{ label: "Black / Extra Small", price: 222 }, { label: "Orange / Extra Small", price: 222 }, { label: "Black / Small", price: 278 }, { label: "Orange / Small", price: 278 }, { label: "Black / Medium", price: 324 }, { label: "Orange / Medium", price: 324 }, { label: "Black / Large", price: 389 }, { label: "Orange / Large", price: 389 }],
    desc: "Opal-finish crystal glass in black or other tones, from extra small to medium.",
    features: [
      "Opal crystal glass",
      "Four sizes from Extra Small",
      "Several colourways"
    ],
    specs: { "Type": "Vase", "Material": "Glass", "Options": "8" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes, which can crack glass. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs19", name: "Textured Flower Vase (Five Designs)", cat: "Home Décor", room: "Home Décor", price: 222, memberPrice: 200, sku: "SH-10527", tag: "New", ph: "", img: "assets/products/vs19.webp",
    imgs: ["assets/products/vs19.webp", "assets/products/vs19-2.webp", "assets/products/vs19-3.webp", "assets/products/vs19-4.webp", "assets/products/vs19-5.webp"],
    sizes: [{ label: "1", price: 222 }, { label: "2", price: 222 }, { label: "3", price: 222 }, { label: "4", price: 222 }, { label: "5", price: 222 }],
    desc: "Five textured ceramic designs, numbered 1 to 5.",
    features: [
      "Five textured designs",
      "Ceramic construction",
      "Mix in a group"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "5" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs20", name: "Resin Sculptural Vase", cat: "Home Décor", room: "Home Décor", price: 239, memberPrice: 215, sku: "SH-10528", tag: "New", ph: "", img: "assets/products/vs20.webp",
    imgs: ["assets/products/vs20.webp", "assets/products/vs20-2.webp", "assets/products/vs20-3.webp", "assets/products/vs20-4.webp", "assets/products/vs20-5.webp"],
    desc: "A single resin vase with a sculptural shape, light enough for a shelf.",
    features: [
      "Resin construction",
      "Sculptural form",
      "Light enough for shelving"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "1" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs21", name: "Ceramic Vase (Small or Large)", cat: "Home Décor", room: "Home Décor", price: 254, memberPrice: 229, sku: "SH-10529", tag: "New", ph: "", img: "assets/products/vs21.webp",
    imgs: ["assets/products/vs21.webp", "assets/products/vs21-2.webp", "assets/products/vs21-3.webp", "assets/products/vs21-4.webp", "assets/products/vs21-5.webp"],
    sizes: [{ label: "S", price: 254 }, { label: "L", price: 306 }],
    desc: "Ceramic in two sizes, plain and useful.",
    features: [
      "Ceramic construction",
      "Small and Large",
      "Simple form"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "2" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs22", name: "Glass Vase: Clear, Frosted or Coloured", cat: "Home Décor", room: "Home Décor", price: 254, memberPrice: 229, sku: "SH-10530", tag: "New", ph: "", img: "assets/products/vs22.webp",
    imgs: ["assets/products/vs22.webp", "assets/products/vs22-2.webp", "assets/products/vs22-3.webp", "assets/products/vs22-4.webp", "assets/products/vs22-5.webp"],
    sizes: [{ label: "Transparent", price: 254 }, { label: "Frosted", price: 254 }, { label: "Multi Colour", price: 254 }],
    desc: "The same shape in transparent, frosted or multi-colour glass.",
    features: [
      "Transparent, Frosted or Multi Colour",
      "Glass construction",
      "One shape, three moods"
    ],
    specs: { "Type": "Vase", "Material": "Glass", "Options": "3" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes, which can crack glass. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs23", name: "Two-Piece Vase Set", cat: "Home Décor", room: "Home Décor", price: 269, memberPrice: 242, sku: "SH-10531", tag: "New", ph: "", img: "assets/products/vs23.webp",
    imgs: ["assets/products/vs23.webp", "assets/products/vs23-2.webp", "assets/products/vs23-3.webp"],
    sizes: [{ label: "2 Piece Set", price: 269 }],
    desc: "A pair designed together, so the heights and shapes work as a group from the start.",
    features: [
      "Two pieces, designed as a pair",
      "Complementary heights",
      "Ready-made grouping"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "1" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs24", name: "Crystal Vase, Smoke or Clear", cat: "Home Décor", room: "Home Décor", price: 272, memberPrice: 245, sku: "SH-10532", tag: "New", ph: "", img: "assets/products/vs24.webp",
    imgs: ["assets/products/vs24.webp", "assets/products/vs24-2.webp", "assets/products/vs24-3.webp", "assets/products/vs24-4.webp"],
    sizes: [{ label: "Smoke Grey", price: 272 }, { label: "Transparent", price: 272 }],
    desc: "Crystal in smoke grey or transparent. Smoke grey is the more interesting of the two.",
    features: [
      "Crystal glass",
      "Smoke Grey or Transparent",
      "Weighty, clear finish"
    ],
    specs: { "Type": "Vase", "Material": "Glass", "Options": "2" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes, which can crack glass. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs25", name: "Porcelain Vase in Black or White", cat: "Home Décor", room: "Home Décor", price: 276, memberPrice: 248, sku: "SH-10533", tag: "New", ph: "", img: "assets/products/vs25.webp",
    imgs: ["assets/products/vs25.webp", "assets/products/vs25-2.webp", "assets/products/vs25-3.webp", "assets/products/vs25-4.webp", "assets/products/vs25-5.webp"],
    sizes: [{ label: "Black / S", price: 276 }, { label: "White / S", price: 276 }, { label: "Black / L", price: 443 }, { label: "White / L", price: 443 }],
    desc: "Porcelain in black or white, small or large.",
    features: [
      "Porcelain construction",
      "Black or White",
      "Small and Large"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "4" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs26", name: "Sculptural Floral Vase", cat: "Home Décor", room: "Home Décor", price: 287, memberPrice: 258, sku: "SH-10534", tag: "New", ph: "", img: "assets/products/vs26.webp",
    imgs: ["assets/products/vs26.webp", "assets/products/vs26-2.webp", "assets/products/vs26-3.webp", "assets/products/vs26-4.webp", "assets/products/vs26-5.webp"],
    sizes: [{ label: "S / Black", price: 287 }, { label: "S / Orange", price: 287 }, { label: "M / Black", price: 324 }, { label: "M / Orange", price: 324 }, { label: "L / Black", price: 367 }, { label: "L / Orange", price: 367 }],
    desc: "Glass in black or orange, across three sizes. Orange glass is rare and worth it.",
    features: [
      "Glass construction",
      "Black or Orange",
      "Three sizes"
    ],
    specs: { "Type": "Vase", "Material": "Glass", "Options": "6" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes, which can crack glass. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs27", name: "Grey Vase (Three Sizes)", cat: "Home Décor", room: "Home Décor", price: 289, memberPrice: 260, sku: "SH-10535", tag: "New", ph: "", img: "assets/products/vs27.webp",
    imgs: ["assets/products/vs27.webp", "assets/products/vs27-2.webp", "assets/products/vs27-3.webp", "assets/products/vs27-4.webp"],
    sizes: [{ label: "Grey / Small", price: 289 }, { label: "Grey / Large", price: 457 }, { label: "Grey / X Large", price: 554 }],
    desc: "Grey, from small to extra large.",
    features: [
      "Grey finish",
      "Small, Large and X Large",
      "Group the sizes"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "3" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs28", name: "Ribbed Vase, Black or Clear", cat: "Home Décor", room: "Home Décor", price: 306, memberPrice: 275, sku: "SH-10536", tag: "New", ph: "", img: "assets/products/vs28.webp",
    imgs: ["assets/products/vs28.webp", "assets/products/vs28-2.webp", "assets/products/vs28-3.webp", "assets/products/vs28-4.webp", "assets/products/vs28-5.webp"],
    sizes: [{ label: "S / Black", price: 306 }, { label: "S / Transparent", price: 306 }, { label: "M / Black", price: 350 }, { label: "M / Transparent", price: 350 }, { label: "L / Black", price: 478 }, { label: "L / Transparent", price: 478 }],
    desc: "A ribbed surface that catches light down the sides, in black or transparent, small or medium.",
    features: [
      "Ribbed surface",
      "Black or Transparent",
      "Small and Medium"
    ],
    specs: { "Type": "Vase", "Material": "Glass", "Options": "6" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes, which can crack glass. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs29", name: "Resin & Timber Vase", cat: "Home Décor", room: "Home Décor", price: 330, memberPrice: 297, sku: "SH-10537", tag: "New", ph: "", img: "assets/products/vs29.webp",
    imgs: ["assets/products/vs29.webp", "assets/products/vs29-2.webp", "assets/products/vs29-3.webp", "assets/products/vs29-4.webp", "assets/products/vs29-5.webp"],
    sizes: [{ label: "Tan / Small", price: 330 }, { label: "Chocolate / Small", price: 330 }, { label: "Tan / Large", price: 478 }, { label: "Chocolate / Large", price: 478 }],
    desc: "Resin with timber in tan or chocolate, small or large.",
    features: [
      "Resin with timber",
      "Tan or Chocolate",
      "Small and Large"
    ],
    specs: { "Type": "Vase", "Material": "Timber", "Options": "4" },
    care: "Dust with a dry cloth. Keep out of direct sun and away from damp, and wipe spills promptly. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs30", name: "Ceramic Vase Set", cat: "Home Décor", room: "Home Décor", price: 331, memberPrice: 298, sku: "SH-10538", tag: "New", ph: "", img: "assets/products/vs30.webp",
    imgs: ["assets/products/vs30.webp", "assets/products/vs30-2.webp", "assets/products/vs30-3.webp", "assets/products/vs30-4.webp", "assets/products/vs30-5.webp"],
    sizes: [{ label: "Complete Set", price: 331 }],
    desc: "A complete ceramic set, bought together.",
    features: [
      "Complete set",
      "Ceramic construction",
      "Pieces designed together"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "1" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs31", name: "Handmade Ceramic Vase Set", cat: "Home Décor", room: "Home Décor", price: 346, memberPrice: 311, sku: "SH-10539", tag: "New", ph: "", img: "assets/products/vs31.webp",
    imgs: ["assets/products/vs31.webp", "assets/products/vs31-2.webp", "assets/products/vs31-3.webp", "assets/products/vs31-4.webp", "assets/products/vs31-5.webp"],
    sizes: [{ label: "White Set", price: 346 }, { label: "Black Set", price: 346 }, { label: "Black + White Set", price: 346 }],
    desc: "Handmade ceramic in white, black, or black and white together. Handmade means each one varies slightly.",
    features: [
      "Handmade ceramic",
      "White, Black, or Black + White",
      "Slight variation in every piece"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "3" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs32", name: "Marble & Glass Vase", cat: "Home Décor", room: "Home Décor", price: 387, memberPrice: 348, sku: "SH-10540", tag: "New", ph: "", img: "assets/products/vs32.webp",
    imgs: ["assets/products/vs32.webp", "assets/products/vs32-2.webp", "assets/products/vs32-3.webp", "assets/products/vs32-4.webp", "assets/products/vs32-5.webp"],
    desc: "Marble with glass, one size, quietly expensive.",
    features: [
      "Marble with glass",
      "Single size",
      "Substantial weight"
    ],
    specs: { "Type": "Vase", "Material": "Natural marble", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it from vinegar, citrus and bleach, and stand it on felt or a coaster to protect the surface underneath. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs33", name: "Serene Vase Set", cat: "Home Décor", room: "Home Décor", price: 389, memberPrice: 350, sku: "SH-10541", tag: "New", ph: "", img: "assets/products/vs33.webp",
    imgs: ["assets/products/vs33.webp", "assets/products/vs33-2.jpg", "assets/products/vs33-3.webp", "assets/products/vs33-4.webp", "assets/products/vs33-5.webp"],
    sizes: [{ label: "1 x Set", price: 389 }],
    desc: "A set designed as a group.",
    features: [
      "Complete set",
      "Coordinated shapes",
      "Ready-made display"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "1" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs34", name: "Mirko Vase (Three Designs)", cat: "Home Décor", room: "Home Décor", price: 444, memberPrice: 400, sku: "SH-10542", tag: "New", ph: "", img: "assets/products/vs34.webp",
    imgs: ["assets/products/vs34.webp", "assets/products/vs34-2.webp", "assets/products/vs34-3.webp", "assets/products/vs34-4.webp", "assets/products/vs34-5.webp"],
    sizes: [{ label: "A", price: 444 }, { label: "B", price: 444 }, { label: "C", price: 444 }],
    desc: "Three designs, A, B and C.",
    features: [
      "Three designs",
      "Ceramic construction",
      "Mix for a layered look"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "3" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs35", name: "White Onyx Marble Vase", cat: "Home Décor", room: "Home Décor", price: 452, memberPrice: 407, sku: "SH-10543", tag: "New", ph: "", img: "assets/products/vs35.webp",
    imgs: ["assets/products/vs35.webp", "assets/products/vs35-2.webp", "assets/products/vs35-3.webp", "assets/products/vs35-4.webp", "assets/products/vs35-5.webp"],
    sizes: [{ label: "1", price: 452 }, { label: "2", price: 569 }, { label: "3", price: 628 }],
    desc: "White onyx marble in three designs. Onyx has a translucence that ordinary marble doesn't.",
    features: [
      "White onyx marble",
      "Three designs",
      "Translucent stone"
    ],
    specs: { "Type": "Vase", "Material": "Natural marble", "Options": "3" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it from vinegar, citrus and bleach, and stand it on felt or a coaster to protect the surface underneath. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs36", name: "Vase Set in Black or Off White", cat: "Home Décor", room: "Home Décor", price: 452, memberPrice: 407, sku: "SH-10544", tag: "New", ph: "", img: "assets/products/vs36.webp",
    imgs: ["assets/products/vs36.webp", "assets/products/vs36-2.webp", "assets/products/vs36-3.webp", "assets/products/vs36-4.webp", "assets/products/vs36-5.webp"],
    sizes: [{ label: "Black Set", price: 452 }, { label: "Off White Set", price: 452 }],
    desc: "A set in black or off white.",
    features: [
      "Complete set",
      "Black or Off White",
      "Coordinated heights"
    ],
    specs: { "Type": "Vase", "Material": "Ceramic", "Options": "2" },
    care: "Wipe clean with a soft, damp cloth. Avoid abrasive pads, which scratch the glaze and dull any metallic detail. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs37", name: "Stone Vase: Travertine, Calacatta or Red", cat: "Home Décor", room: "Home Décor", price: 476, memberPrice: 428, sku: "SH-10545", tag: "New", ph: "", img: "assets/products/vs37.webp",
    imgs: ["assets/products/vs37.webp", "assets/products/vs37-2.webp", "assets/products/vs37-3.webp", "assets/products/vs37-4.webp", "assets/products/vs37-5.webp"],
    sizes: [{ label: "Travertine", price: 476 }, { label: "Calcatta", price: 476 }, { label: "Red", price: 476 }],
    desc: "Three stones: travertine, calacatta white and a red marble that is genuinely unusual.",
    features: [
      "Travertine, Calacatta or Red stone",
      "Natural stone, each piece unique",
      "Red is a rare option"
    ],
    specs: { "Type": "Vase", "Material": "Natural stone", "Options": "3" },
    care: "Wipe with a soft, damp cloth. Avoid acidic and abrasive cleaners, which dull natural stone. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs38", name: "Midnight Glass Vase Set", cat: "Home Décor", room: "Home Décor", price: 489, memberPrice: 440, sku: "SH-10546", tag: "New", ph: "", img: "assets/products/vs38.webp",
    imgs: ["assets/products/vs38.webp", "assets/products/vs38-2.webp", "assets/products/vs38-3.webp"],
    sizes: [{ label: "Complete Set", price: 489 }],
    desc: "A dark glass set, bought complete.",
    features: [
      "Dark glass set",
      "Pieces designed together",
      "One purchase"
    ],
    specs: { "Type": "Vase", "Material": "Glass", "Options": "1" },
    care: "Wash by hand in warm soapy water and dry with a soft cloth to keep it clear. Avoid sudden temperature changes, which can crack glass. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs39", name: "Travertine Vase (Small or Large)", cat: "Home Décor", room: "Home Décor", price: 700, memberPrice: 630, sku: "SH-10547", tag: "New", ph: "", img: "assets/products/vs39.webp",
    imgs: ["assets/products/vs39.webp", "assets/products/vs39-2.webp", "assets/products/vs39-3.webp", "assets/products/vs39-4.webp", "assets/products/vs39-5.webp"],
    sizes: [{ label: "Small", price: 700 }, { label: "Large", price: 885 }],
    desc: "Solid travertine in two sizes, with the open texture the stone is known for.",
    features: [
      "Solid travertine",
      "Small and Large",
      "Open natural texture"
    ],
    specs: { "Type": "Vase", "Material": "Natural travertine", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs40", name: "Marble Vase (Small or Large)", cat: "Home Décor", room: "Home Décor", price: 924, memberPrice: 832, sku: "SH-10548", tag: "New", ph: "", img: "assets/products/vs40.webp",
    imgs: ["assets/products/vs40.webp", "assets/products/vs40-2.webp", "assets/products/vs40-3.webp", "assets/products/vs40-4.webp", "assets/products/vs40-5.webp"],
    sizes: [{ label: "S", price: 924 }, { label: "L", price: 996 }],
    desc: "Solid marble in two sizes.",
    features: [
      "Solid marble",
      "Small and Large",
      "Veining unique to each piece"
    ],
    specs: { "Type": "Vase", "Material": "Natural marble", "Options": "2" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it from vinegar, citrus and bleach, and stand it on felt or a coaster to protect the surface underneath. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs41", name: "Black or White Marble Vase", cat: "Home Décor", room: "Home Décor", price: 1111, memberPrice: 1000, sku: "SH-10549", tag: "New", ph: "", img: "assets/products/vs41.webp",
    imgs: ["assets/products/vs41.webp", "assets/products/vs41-2.webp", "assets/products/vs41-3.webp", "assets/products/vs41-4.webp", "assets/products/vs41-5.webp"],
    sizes: [{ label: "Black Marble / Small", price: 1111 }, { label: "White Marble / Small", price: 1111 }, { label: "Travertine / Small", price: 1111 }, { label: "Black Marble / Large", price: 1194 }, { label: "White Marble / Large", price: 1194 }, { label: "Travertine / Large", price: 1194 }],
    desc: "Marble and travertine in black or white, small or large. The most substantial vases we carry.",
    features: [
      "Black or White marble",
      "Small and Large",
      "Considerable weight"
    ],
    specs: { "Type": "Vase", "Material": "Natural marble", "Options": "6" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it from vinegar, citrus and bleach, and stand it on felt or a coaster to protect the surface underneath. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs42", name: "Natural White Marble Vase", cat: "Home Décor", room: "Home Décor", price: 1176, memberPrice: 1058, sku: "SH-10550", tag: "New", ph: "", img: "assets/products/vs42.webp",
    imgs: ["assets/products/vs42.webp", "assets/products/vs42-2.webp", "assets/products/vs42-3.webp"],
    sizes: [{ label: "Natural White", price: 1176 }],
    desc: "One vase, cut from natural white marble.",
    features: [
      "Natural white marble",
      "Single size",
      "Cut from solid stone"
    ],
    specs: { "Type": "Vase", "Material": "Natural marble", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it from vinegar, citrus and bleach, and stand it on felt or a coaster to protect the surface underneath. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs43", name: "Marble Vase in Black or White", cat: "Home Décor", room: "Home Décor", price: 1193, memberPrice: 1074, sku: "SH-10551", tag: "New", ph: "", img: "assets/products/vs43.webp",
    imgs: ["assets/products/vs43.webp", "assets/products/vs43-2.webp", "assets/products/vs43-3.webp", "assets/products/vs43-4.webp", "assets/products/vs43-5.webp"],
    sizes: [{ label: "Small / Black", price: 1193 }, { label: "Small / White", price: 1193 }, { label: "Large / Black", price: 1248 }, { label: "Large / White", price: 1248 }],
    desc: "Marble in black or white, small or large.",
    features: [
      "Solid marble",
      "Black or White",
      "Small and Large"
    ],
    specs: { "Type": "Vase", "Material": "Natural marble", "Options": "4" },
    care: "Wipe with a soft, damp cloth and dry. Marble is porous, so keep it from vinegar, citrus and bleach, and stand it on felt or a coaster to protect the surface underneath. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "vs44", name: "Natural Travertine Vase", cat: "Home Décor", room: "Home Décor", price: 1200, memberPrice: 1080, sku: "SH-10552", tag: "New", ph: "", img: "assets/products/vs44.webp",
    imgs: ["assets/products/vs44.webp", "assets/products/vs44-2.webp", "assets/products/vs44-3.webp"],
    sizes: [{ label: "Travertine", price: 1200 }],
    desc: "A single travertine vase, heavy and honest.",
    features: [
      "Solid travertine",
      "Single size",
      "Natural pitted surface"
    ],
    specs: { "Type": "Vase", "Material": "Natural travertine", "Options": "1" },
    care: "Wipe with a soft, damp cloth and dry straight away. The open pores hold liquid, so clear spills quickly and never use acidic cleaners. If you're using fresh flowers, a glass liner or a smaller jar inside will protect the inside of the piece and make it far easier to clean." },

  { id: "hd01", name: "Aura Mist Ultrasonic Diffuser 160ml", cat: "Home Décor", price: 184, memberPrice: 154, sku: "SH-10101", tag: "New", ph: "", img: "assets/products/hd01.webp",
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
  { id: "hd02", name: "Fleur Sculptural Glass Vase", cat: "Home Décor", price: 225, memberPrice: 205, sku: "SH-10102", ph: "", img: "assets/products/hd02.webp",
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

  { id: "hd05", name: "Oval Marble-Effect Coffee Table", cat: "Furniture", room: "Living Room", price: 115.37, memberPrice: 99.99, sku: "SH-10106", tag: "New", ph: "", img: "assets/products/hd05.webp",
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

  { id: "hd06", name: "Marble-Look Glass Table Set, 2 Piece (80cm)", cat: "Furniture", room: "Living Room", price: 198.37, memberPrice: 168.55, sku: "SH-10107", tag: "New", ph: "", img: "assets/products/hd06.webp",
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

  { id: "hd07", name: "Modern Coffee Table with Storage Drawer & Open Shelf", cat: "Furniture", room: "Living Room", price: 155.09, memberPrice: 135.55, sku: "SH-10108", tag: "New", ph: "", img: "assets/products/hd07.webp",
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

  { id: "of01", name: "Ergolux Plus Ergonomic Mesh Office Chair with Footrest (Grey)", brand: "Ergolux", cat: "Office", room: "Office", price: 150.45, memberPrice: 135.45, sku: "SH-10112", tag: "New", ph: "", img: "assets/products/of01.webp",
    imgs: ["assets/products/of01.webp", "assets/products/of01-2.webp", "assets/products/of01-3.webp", "assets/products/of01-4.webp", "assets/products/of01-5.webp", "assets/products/of01-6.webp", "assets/products/of01-7.webp", "assets/products/of01-8.webp", "assets/products/of01-9.webp"],
    lead: "8 to 10 weeks",
    colours: [{ name: "Grey", hex: "#9b9b9b" }],
    sizes: [{ label: "Core", price: 150.45 }, { label: "Plus", price: 171.45 }, { label: "Elite (Mesh)", price: 517.95 }, { label: "Elite (Foam)", price: 591.45 }],
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
    desc: "Food-safe, resealable stand-up pouches that keep your product fresh and looking retail-ready, ideal for coffee, granola, nuts, dried fruit, spices, lollies, protein and pet treats. The multi-layer PET + PA + PE structure blocks moisture and odour, while the zipper top opens and reseals again and again. Made with recycled materials and finished with vibrant flexo printing. Buy retail packs here, or order wholesale in bulk with your own logo and artwork, message us on WhatsApp for the rate card, samples or custom branding.",
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
  { id: "pk02", name: "Small Business Starter Packaging Kit", cat: "Packaging", room: "Packaging", price: null, hot: false, sku: "SH-11319", tag: "Coming Out Soon", ph: "", img: "assets/packaging-kit.svg",
    desc: "For new shops and makers. Everything you need to start packing your orders beautifully, in one box. Custom quantities and colours are available on request.",
    features: ["50 kraft stand-up pouches","50 tissue paper sheets","50 thank-you cards","50 gold thank-you stickers","1 satin ribbon roll"] },
  { id: "pk03", name: "Food Vendor Packaging Kit", cat: "Packaging", room: "Packaging", price: null, hot: false, sku: "SH-11320", tag: "Coming Out Soon", ph: "", img: "assets/packaging-kit.svg",
    desc: "For bakers, coffee and treat sellers. Pouches, bags and labels to get your products market-ready. Custom quantities and colours are available on request.",
    features: ["100 resealable window pouches","100 clear treat bags","100 blank product labels","100 twist ties","Heat-seal compatible pouches"] },
  { id: "pk04", name: "Luxury Gift Box Kit", cat: "Packaging", room: "Packaging", price: null, hot: false, sku: "SH-11321", tag: "Coming Out Soon", ph: "", img: "assets/packaging-kit.svg",
    desc: "For gifting, events and corporate. Navy magnetic gift boxes with everything needed to finish them beautifully. Custom quantities and colours are available on request.",
    features: ["10 navy magnetic gift boxes","10 packs crinkle-paper fill","10 gold ribbon bows","10 gift tags with string","20 white tissue sheets"] },
  { id: "pk05", name: "Build-a-Hamper Kit", cat: "Packaging", room: "Packaging", price: null, hot: false, sku: "SH-11322", tag: "Coming Out Soon", ph: "", img: "assets/packaging-kit.svg",
    desc: "For hamper makers and fundraisers. Boxes, wrap and finishing touches for five complete hampers. Custom quantities and colours are available on request.",
    features: ["5 hamper boxes with lids","5 cellophane wraps","5 packs crinkle-paper fill","5 pull-bows","5 gift cards and envelopes"] },
  { id: "pk06", name: "Celebration Favour Kit", cat: "Packaging", room: "Packaging", price: null, hot: false, sku: "SH-11323", tag: "Coming Out Soon", ph: "", img: "assets/packaging-kit.svg",
    desc: "For weddings, birthdays and showers. Mini boxes, pouches and stickers for your guest favours. Custom quantities and colours are available on request.",
    features: ["24 mini favour boxes","24 organza pouches","48 assorted stickers","1 ribbon roll","24 blank tags"] },
  { id: "bd01", name: "Amara Upholstered Bed Frame with 3 Drawers, Oat White", cat: "Bedroom", room: "Bedroom", price: 1350, memberPrice: 1300, sku: "SH-10114", tag: "New", ph: "", img: "assets/products/bd01.webp",
    imgs: ["assets/products/bd01.webp", "assets/products/bd01-2.webp", "assets/products/bd01-3.webp", "assets/products/bd01-4.webp", "assets/products/bd01-5.webp", "assets/products/bd01-6.webp"],
    lead: "8 to 10 weeks",
    dims: { w: 286.6, d: 219, h: 141.2, unit: "cm", img: "assets/products/bd01-3.webp", note: "King shown. Queen is the same height and depth with a narrower bedhead, see the size guide images." },
    colours: [{ name: "Oat White", hex: "#e6ded0" }],
    sizes: [{ label: "Queen", price: 1350 }, { label: "King", price: 1460 }],
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
  { id: "kw01", name: "KitchenAid Artisan Plus Stand Mixer 4.7L, Feather Pink", cat: "Kitchenware", room: "Kitchenware", price: 1099, memberPrice: 999, sku: "SH-11002", tag: "New", ph: "", img: "assets/products/kw01-1.webp",
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

  { id: "kw02", name: "Smeg 50s Style Electric Kettle 1.7L, Pastel Pink", cat: "Kitchenware", room: "Kitchenware", price: 287, memberPrice: 258, sku: "SH-11003", tag: "New", ph: "", img: "assets/products/kw02-1.webp",
    imgs: ["assets/products/kw02-1.webp", "assets/products/kw02-2.webp", "assets/products/kw02-3.webp", "assets/products/kw02-4.webp", "assets/products/kw02-5.webp"],
    desc: "A kettle you leave out rather than hide away. Boils 1.7L, enough for a full pot of tea or a round of coffees, with 2400W behind it. Enamel-coated stainless steel body. Small things that matter: soft opening lid, anti slip feet and limescale filter. Finished in Pastel Pink.",
    features: [
      "1.7L capacity",
      "2400W element",
      "Soft opening lid",
      "Anti slip feet",
      "Limescale filter",
      "Water level indicator",
      "2 year manufacturer's warranty"
    ],
    specs: { "Brand": "Smeg", "Model": "KLF03PKAU", "Type": "Electric Kettle", "Capacity": "1.7L", "Power": "2400W", "Materials": "Enamel-coated stainless steel body", "Colour": "Pastel Pink", "Weight": "1.6 kg" },
    dims: { w: 17.1, d: 22.6, h: 24.8, unit: "cm", printed: true },
    warranty: "2 year manufacturer's warranty",
    care: "Wipe the body with a soft, damp cloth and dry it, never submerge the kettle or its base. Rinse the limescale filter under the tap now and then, and descale with a kettle descaler if your water is hard." },

  { id: "kw03", name: "Smeg 50s Style Electric Kettle 1.7L, Pastel Green", cat: "Kitchenware", room: "Kitchenware", price: 287, memberPrice: 258, sku: "SH-11004", tag: "New", ph: "", img: "assets/products/kw03-1.webp",
    imgs: ["assets/products/kw03-1.webp", "assets/products/kw03-2.webp", "assets/products/kw03-3.webp", "assets/products/kw03-4.webp"],
    desc: "A kettle you leave out rather than hide away. Boils 1.7L, enough for a full pot of tea or a round of coffees, with 2400W behind it. Enamel coated stainless steel body. Small things that matter: soft opening lid, anti slip feet and limescale filter. Pastel Green, and worth leaving on the bench.",
    features: [
      "1.7L capacity",
      "2400W element",
      "Soft opening lid",
      "Anti slip feet",
      "Limescale filter",
      "Water level indicator",
      "2 year manufacturer's warranty"
    ],
    specs: { "Brand": "Smeg", "Model": "KLF03PGAU", "Type": "Electric Kettle", "Capacity": "1.7L", "Power": "2400W", "Materials": "Enamel coated stainless steel body, Stainless steel lid / spout / lever, Chrome handle and base", "Colour": "Pastel Green", "Weight": "1.6 kg" },
    dims: { w: 17.1, d: 22.6, h: 24.8, unit: "cm", printed: true },
    warranty: "2 year manufacturer's warranty",
    care: "Wipe the body with a soft, damp cloth and dry it, never submerge the kettle or its base. Rinse the limescale filter under the tap now and then, and descale with a kettle descaler if your water is hard." },

  { id: "kw04", name: "Smeg 50s Style Electric Kettle 1.7L, Cream", cat: "Kitchenware", room: "Kitchenware", price: 287, memberPrice: 258, sku: "SH-11005", tag: "New", ph: "", img: "assets/products/kw04-1.webp",
    imgs: ["assets/products/kw04-1.webp", "assets/products/kw04-2.webp", "assets/products/kw04-3.webp", "assets/products/kw04-4.webp", "assets/products/kw04-5.webp"],
    desc: "A kettle you leave out rather than hide away. Boils 1.7L, enough for a full pot of tea or a round of coffees, with 2400W behind it. Enamel coated stainless steel body. Small things that matter: soft opening lid, anti slip feet and limescale filter. In Cream, which is half the reason to buy it.",
    features: [
      "1.7L capacity",
      "2400W element",
      "Soft opening lid",
      "Anti slip feet",
      "Limescale filter",
      "Water level indicator",
      "2 year manufacturer's warranty"
    ],
    specs: { "Brand": "Smeg", "Model": "KLF03CRAU", "Type": "Electric Kettle", "Capacity": "1.7L", "Power": "2400W", "Materials": "Enamel coated stainless steel body, Stainless steel lid / spout / lever, Chrome handle and base", "Colour": "Cream", "Weight": "1.6 kg" },
    dims: { w: 17.1, d: 22.6, h: 24.8, unit: "cm", printed: true },
    warranty: "2 year manufacturer's warranty",
    care: "Wipe the body with a soft, damp cloth and dry it, never submerge the kettle or its base. Rinse the limescale filter under the tap now and then, and descale with a kettle descaler if your water is hard." },

  { id: "kw05", name: "Smeg 50s Style Two-Slice Toaster, Pastel Blue", cat: "Kitchenware", room: "Kitchenware", price: 287, memberPrice: 258, sku: "SH-11006", tag: "New", ph: "", img: "assets/products/kw05-1.webp",
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

  { id: "kw06", name: "Smeg 50s Style Two-Slice Toaster, Cream", cat: "Kitchenware", room: "Kitchenware", price: 287, memberPrice: 258, sku: "SH-11007", tag: "New", ph: "", img: "assets/products/kw06-1.webp",
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

  { id: "kw07", name: "Smeg 50s Style Two-Slice Toaster, Pink", cat: "Kitchenware", room: "Kitchenware", price: 287, memberPrice: 258, sku: "SH-11008", tag: "New", ph: "", img: "assets/products/kw07-1.webp",
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

  { id: "kw08", name: "Smeg 50s Style Stand Mixer 4.8L, Pink", cat: "Kitchenware", room: "Kitchenware", price: 839, memberPrice: 755, sku: "SH-11009", tag: "New", ph: "", img: "assets/products/kw08-1.webp",
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

  { id: "kw09", name: "Smeg 50s Style Stand Mixer 4.8L, Black", cat: "Kitchenware", room: "Kitchenware", price: 839, memberPrice: 755, sku: "SH-11010", tag: "New", ph: "", img: "assets/products/kw09-1.webp",
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

  { id: "kw10", name: "Smeg 50s Style Bench Blender 1.5L, Cream", cat: "Kitchenware", room: "Kitchenware", price: 419, memberPrice: 377, sku: "SH-11011", tag: "New", ph: "", img: "assets/products/kw10-1.webp",
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

  { id: "kw11", name: "Smeg Soda Maker, Matte Emerald Green", cat: "Kitchenware", room: "Kitchenware", price: 263, memberPrice: 237, sku: "SH-11012", tag: "New", ph: "", img: "assets/products/kw11-1.webp",
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

  { id: "kw12", name: "KitchenAid Artisan Stand Mixer 4.7L with Ceramic Bowl, Wildflower", cat: "Kitchenware", room: "Kitchenware", price: 839, memberPrice: 755, sku: "SH-11013", tag: "New", ph: "", img: "assets/products/kw12-1.webp",
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

  { id: "kw13", name: "KitchenAid Design Series Stand Mixer 4.7L, Evergreen", cat: "Kitchenware", room: "Kitchenware", price: 1319, memberPrice: 1187, sku: "SH-11014", tag: "New", ph: "", img: "assets/products/kw13-1.webp",
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

  { id: "kw14", name: "KitchenAid Artisan Bowl-Lift Stand Mixer 6.6L, Dried Rose", cat: "Kitchenware", room: "Kitchenware", price: 1139, memberPrice: 1025, sku: "SH-11015", tag: "New", ph: "", img: "assets/products/kw14-1.webp",
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

  { id: "kw15", name: "KitchenAid Artisan Plus Stand Mixer 4.7L, Cardamom", cat: "Kitchenware", room: "Kitchenware", price: 1199, memberPrice: 1079, sku: "SH-11016", tag: "New", ph: "", img: "assets/products/kw15-1.webp",
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

  { id: "kw16", name: "KitchenAid Variable Temperature Kettle 1.7L, Juniper", cat: "Kitchenware", room: "Kitchenware", price: 215, memberPrice: 194, sku: "SH-11017", tag: "New", ph: "", img: "assets/products/kw16-1.webp",
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

  { id: "kw17", name: "KitchenAid Four-Slice Toaster, Porcelain White", cat: "Kitchenware", room: "Kitchenware", price: 251, memberPrice: 226, sku: "SH-11018", tag: "New", ph: "", img: "assets/products/kw17-1.webp",
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

  { id: "kw18", name: "KitchenAid Food Processor 3.1L (13-Cup), Almond Cream", cat: "Kitchenware", room: "Kitchenware", price: 419, memberPrice: 377, sku: "SH-11019", tag: "New", ph: "", img: "assets/products/kw18-1.webp",
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

  { id: "kw19", name: "KitchenAid Mini Food Chopper 830ml, Pistachio", cat: "Kitchenware", room: "Kitchenware", price: 131, memberPrice: 118, sku: "SH-11020", tag: "New", ph: "", img: "assets/products/kw19-1.webp",
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

  { id: "kw20", name: "KitchenAid Pure Power Blender 2L, Porcelain White", cat: "Kitchenware", room: "Kitchenware", price: 239, memberPrice: 215, sku: "SH-11021", tag: "New", ph: "", img: "assets/products/kw20-1.webp",
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

  { id: "kw21", name: "Nespresso Creatista Plus Coffee Machine, Sea Salt", cat: "Kitchenware", room: "Kitchenware", price: 932, memberPrice: 839, sku: "SH-11022", tag: "New", ph: "", img: "assets/products/kw21-1.webp",
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

  { id: "kw22", name: "Nespresso Vertuo Pop Coffee Machine Bundle, Lilac", cat: "Kitchenware", room: "Kitchenware", price: 233, memberPrice: 210, sku: "SH-11023", tag: "New", ph: "", img: "assets/products/kw22-1.webp",
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

  { id: "kw23", name: "Nespresso Lattissima One Coffee Machine, Green", cat: "Kitchenware", room: "Kitchenware", price: 479, memberPrice: 431, sku: "SH-11024", tag: "New", ph: "", img: "assets/products/kw23-1.webp",
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

  { id: "kw24", name: "Nespresso Citiz & Milk Coffee Machine, Polished Stainless Steel", cat: "Kitchenware", room: "Kitchenware", price: 443, memberPrice: 399, sku: "SH-11025", tag: "New", ph: "", img: "assets/products/kw24-1.webp",
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

  { id: "kw25", name: "Ninja Crispi Pro 6-in-1 Glass Air Fryer, Sage Green", cat: "Kitchenware", room: "Kitchenware", price: 416, memberPrice: 374, sku: "SH-11026", tag: "New", ph: "", img: "assets/products/kw25-1.webp",
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

  { id: "kw26", name: "Ninja Crispi Pro 6-in-1 Glass Air Fryer, Pink", cat: "Kitchenware", room: "Kitchenware", price: 416, memberPrice: 374, sku: "SH-11027", tag: "New", ph: "", img: "assets/products/kw26-1.webp",
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

  { id: "kw27", name: "Ninja Creami Deluxe Ice Cream Maker, Cloud Silver", cat: "Kitchenware", room: "Kitchenware", price: 359, memberPrice: 323, sku: "SH-11028", tag: "New", ph: "", img: "assets/products/kw27-1.webp",
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

  { id: "kw30", name: "SodaStream Art Sparkling Water Maker, White", cat: "Kitchenware", room: "Kitchenware", price: 203, memberPrice: 183, sku: "SH-11031", tag: "New", ph: "", img: "assets/products/kw30-1.webp",
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

  { id: "kw31", name: "Aarke Carbonator 3 Sparkling Water Maker, Matte White", cat: "Kitchenware", room: "Kitchenware", price: 359, memberPrice: 323, sku: "SH-11032", tag: "New", ph: "", img: "assets/products/kw31-1.webp",
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

  // ── Tables: coffee, side & console ──
  { id: "cc001", name: "Travertine-Look Round Coffee Table 70cm, Beige", cat: "Living Room", room: "Living Room", price: 617, memberPrice: 555, sku: "SH-11063", tag: "New", ph: "", img: "assets/products/cc001-1.webp",
    imgs: ["assets/products/cc001-1.webp", "assets/products/cc001-2.webp", "assets/products/cc001-3.webp", "assets/products/cc001-4.webp", "assets/products/cc001-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 70cm wide, 70cm deep and 36.5cm high. MgO with a travertine effect in hydrographic transfer printing. Circular design with a travertine-effect finish for a natural stone look. The kind of piece that quietly holds a room together.",
    features: [
      "Circular design with a travertine-effect finish for a natural stone look",
      "Durable MGO construction for stability and everyday use",
      "Versatile surface ideal for holding drinks, books, or decorative items",
      "Neutral tones that complement a wide range of interior styles"
    ],
    specs: { "Type": "Coffee Table", "Shape": "Round", "Colour": "Beige", "Material": "MgO with a travertine effect in hydrographic transfer printing", "Weight": "22 kg" },
    dims: { w: 70, d: 70, h: 36.5, unit: "cm", printed: true },
    boxContents: ["1x Coffee Table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc002", name: "Bamboo Coffee Tables, Set of 2 · Natural", cat: "Living Room", room: "Living Room", price: 234, memberPrice: 210, sku: "SH-11064", tag: "New", ph: "", img: "assets/products/cc002-1.webp",
    imgs: ["assets/products/cc002-1.webp", "assets/products/cc002-2.webp", "assets/products/cc002-3.webp", "assets/products/cc002-4.webp", "assets/products/cc002-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 47cm wide, 47cm deep and 33cm high. Bamboo. Handcrafted and fully assembled. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Handcrafted and fully assembled",
      "Made from sustainable and fast-growing bamboo",
      "Lightweight yet strong and durable design",
      "Natural bamboo tone complements a range of palettes for versatile styling",
      "Excellent for your indoors and alfresco undercover use only"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Natural", "Material": "Bamboo" },
    dims: { w: 47, d: 47, h: 33, unit: "cm", printed: true },
    boxContents: ["2x Assorted Coffee Tables"],
    care: "Please note that Bamboo is a natural material, and this is a handmade product, therefore, small variations or imperfections in colour, texture, shape, size and finish may occur from piece to piece. Avoid direct sunlight and rainwater to prevent the aging of the natural materials. Avoid leaving it in a damp place for a long time to avoid mould and insects. If there is mould, you can brush it and ri" },

  { id: "cc003", name: "Travertine-Look Rectangular Coffee Table 90cm, Beige", cat: "Living Room", room: "Living Room", price: 617, memberPrice: 555, sku: "SH-11065", tag: "New", ph: "", img: "assets/products/cc003-1.webp",
    imgs: ["assets/products/cc003-1.webp", "assets/products/cc003-2.webp", "assets/products/cc003-3.webp", "assets/products/cc003-4.webp", "assets/products/cc003-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 60cm across. MgO with a travertine effect in hydrographic transfer printing. Rectangular design with a travertine-effect finish for a natural stone look. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Rectangular design with a travertine-effect finish for a natural stone look",
      "Durable MGO construction for stability and everyday use",
      "Large surface ideal for holding drinks, books, or decorative items",
      "Neutral tones that complement a wide range of interior styles"
    ],
    specs: { "Type": "Coffee Table", "Shape": "Rectangular", "Colour": "Beige", "Material": "MgO with a travertine effect in hydrographic transfer printing" },
    boxContents: ["1x Coffee Table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc004", name: "Glass Round Coffee Table 90cm, Oak", cat: "Living Room", room: "Living Room", price: 555, memberPrice: 499, sku: "SH-11066", tag: "New", ph: "", img: "assets/products/cc004-1.webp",
    imgs: ["assets/products/cc004-1.webp", "assets/products/cc004-2.webp", "assets/products/cc004-3.webp", "assets/products/cc004-4.webp", "assets/products/cc004-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 90cm wide, 90cm deep and 27cm high. Honeycomb board with melamine finish; fibreglass legs with decorative foil look. Rounded tabletop with soft, curved edges. The kind of piece that quietly holds a room together.",
    features: [
      "Rounded tabletop with soft, curved edges",
      "Large ball fibreglass legs for a unique, sculptural base",
      "Oak-look finish creates a warm, natural tone"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Oak", "Material": "Honeycomb board with melamine finish; fibreglass legs with decorative foil look" },
    dims: { w: 90, d: 90, h: 27, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc005", name: "Drum Round Coffee Table 100cm, Walnut", cat: "Living Room", room: "Living Room", price: 370, memberPrice: 333, sku: "SH-11067", tag: "New", ph: "", img: "assets/products/cc005-1.webp",
    imgs: ["assets/products/cc005-1.webp", "assets/products/cc005-2.webp", "assets/products/cc005-3.webp", "assets/products/cc005-4.webp", "assets/products/cc005-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 100cm wide, 70cm deep and 33cm high. MDF with laminated finish. Rounded corner tabletop offers a softer profile than traditional shapes. Works as well against a wall as it does floating in a room.",
    features: [
      "Rounded corner tabletop offers a softer profile than traditional shapes",
      "Central drum-style base gives a bold, grounded look",
      "Walnut-look finish adds a warm, natural tone to your space",
      "Flat surface perfect for books, trays, or decor items"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Walnut", "Material": "MDF with laminated finish" },
    dims: { w: 100, d: 70, h: 33, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc006", name: "Coffee Table 110cm, Walnut", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11068", tag: "New", ph: "", img: "assets/products/cc006-1.webp",
    imgs: ["assets/products/cc006-1.webp", "assets/products/cc006-2.webp", "assets/products/cc006-3.webp", "assets/products/cc006-4.webp", "assets/products/cc006-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 55cm wide, 110cm deep and 40cm high. Sustainably sourced MDF with a melamine finish. Plenty of surface space for all your living room essentials. The kind of piece that quietly holds a room together.",
    features: [
      "A classic look that suits a range of decors",
      "Plenty of surface space for all your living room essentials",
      "Easily reachable for a convenient lounging experience",
      "A minimalist design that complements any modern living space"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Walnut", "Material": "Sustainably sourced MDF with a melamine finish" },
    dims: { w: 55, d: 110, h: 40, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc007", name: "Metal Round Coffee Table 76cm, Natural", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11069", tag: "New", ph: "", img: "assets/products/cc007-1.webp",
    imgs: ["assets/products/cc007-1.webp", "assets/products/cc007-2.webp", "assets/products/cc007-3.webp", "assets/products/cc007-4.webp", "assets/products/cc007-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 76cm wide, 76cm deep and 41cm high. MDF with a melamine finish. 76cm round tabletop provides plenty of surface space. The kind of piece that quietly holds a room together.",
    features: [
      "76cm round tabletop provides plenty of surface space",
      "Lower shelf offers extra storage for books, décor, and essentials",
      "Paper rope detailing adds texture and a contemporary touch",
      "Compact design fits well in different room layouts",
      "Versatile style complements modern and contemporary interiors"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Natural", "Material": "MDF with a melamine finish , Paper Rope , Metal" },
    dims: { w: 76, d: 76, h: 41, unit: "cm", printed: true },
    care: "Wipe clean with a dry cloth. Avoid strong chemical cleaners." },

  { id: "cc008", name: "Oak Coffee Table 110cm, Light Oak", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11070", tag: "New", ph: "", img: "assets/products/cc008-1.webp",
    imgs: ["assets/products/cc008-1.webp", "assets/products/cc008-2.webp", "assets/products/cc008-3.webp", "assets/products/cc008-4.webp", "assets/products/cc008-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 55cm wide, 110cm deep and 40cm high. Sustainably sourced MDF with laminate finish. Plenty of surface space for all your living room essentials. Works as well against a wall as it does floating in a room.",
    features: [
      "A classic look that suits a range of decors",
      "Plenty of surface space for all your living room essentials",
      "Easily reachable for a convenient lounging experience",
      "A minimalist design that complements any modern living space"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Light Oak", "Material": "Sustainably sourced MDF with laminate finish" },
    dims: { w: 55, d: 110, h: 40, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc009", name: "Sliding-Door Coffee Table 120cm, Natural", cat: "Living Room", room: "Living Room", price: 308, memberPrice: 277, sku: "SH-11071", tag: "New", ph: "", img: "assets/products/cc009-1.webp",
    imgs: ["assets/products/cc009-1.webp", "assets/products/cc009-2.webp", "assets/products/cc009-3.webp", "assets/products/cc009-4.webp", "assets/products/cc009-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 120cm wide, 60cm deep and 41cm high. MDF with a laminated paper finish. 120cm wide tabletop provides plenty of space for decor, books, or drinks. Leave it bare, or give it one good object and nothing else.",
    features: [
      "120cm wide tabletop provides plenty of space for decor, books, or drinks",
      "Sliding door storage keeps essentials organised and out of sight",
      "Fluted detailing adds texture and visual interest"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Natural", "Material": "MDF with a laminated paper finish" },
    dims: { w: 120, d: 60, h: 41, unit: "cm", printed: true },
    care: "Wipe down with a damp cloth. Avoid cleaning with strong chemicals." },

  { id: "cc010", name: "Glass Round Coffee Table 90cm, Walnut", cat: "Living Room", room: "Living Room", price: 555, memberPrice: 499, sku: "SH-11072", tag: "New", ph: "", img: "assets/products/cc010-1.webp",
    imgs: ["assets/products/cc010-1.webp", "assets/products/cc010-2.webp", "assets/products/cc010-3.webp", "assets/products/cc010-4.webp", "assets/products/cc010-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 90cm wide, 90cm deep and 27cm high. Honeycomb board with melamine finish. Rounded tabletop with soft, curved edges. Works as well against a wall as it does floating in a room.",
    features: [
      "Rounded tabletop with soft, curved edges",
      "Large ball fibreglass legs for a sculptural base",
      "Walnut-look finish for a deep, warm wood tone"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Walnut", "Material": "Honeycomb board with melamine finish, fibreglass legs with decorative foil look" },
    dims: { w: 90, d: 90, h: 27, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc011", name: "Round Coffee Table 80cm, Black", cat: "Living Room", room: "Living Room", price: 308, memberPrice: 277, sku: "SH-11073", tag: "New", ph: "", img: "assets/products/cc011-1.webp",
    imgs: ["assets/products/cc011-1.webp", "assets/products/cc011-2.webp", "assets/products/cc011-3.webp", "assets/products/cc011-4.webp", "assets/products/cc011-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 80cm wide, 80cm deep and 40cm high. MDF. Ribbed detailing for added texture and design appeal. The kind of piece that quietly holds a room together.",
    features: [
      "Ribbed detailing for added texture and design appeal",
      "Round tabletop is spacious enough for entertaining, decor, or daily use",
      "Complements a wide range of interior decor styles",
      "Easy to clean and maintain"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Black", "Material": "MDF, melamine, and paper laminated finish", "Weight": "10.42kg" },
    dims: { w: 80, d: 80, h: 40, unit: "cm", printed: true },
    care: "Wipe down with a damp cloth. Avoid cleaning with strong chemicals." },

  { id: "cc012", name: "Nesting Travertine-Look Round Coffee Tables, Set of 2", cat: "Living Room", room: "Living Room", price: 345, memberPrice: 310, sku: "SH-11074", tag: "New", ph: "", img: "assets/products/cc012-1.webp",
    imgs: ["assets/products/cc012-1.webp", "assets/products/cc012-2.webp", "assets/products/cc012-3.webp", "assets/products/cc012-4.webp", "assets/products/cc012-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. MDF with melamine finish. Nesting design offers versatility and space-saving convenience. Works as well against a wall as it does floating in a room.",
    features: [
      "Nesting design offers versatility and space-saving convenience",
      "Round tabletops with a travertine-look finish for a stone-inspired feel",
      "Two sizes work well as a layered coffee table or separated around the room"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Travertine-look", "Material": "MDF with melamine finish, metal frame" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc013", name: "Metal Round Coffee Table 120cm, Mocha", cat: "Living Room", room: "Living Room", price: 345, memberPrice: 310, sku: "SH-11075", tag: "New", ph: "", img: "assets/products/cc013-1.webp",
    imgs: ["assets/products/cc013-1.webp", "assets/products/cc013-2.webp", "assets/products/cc013-3.webp", "assets/products/cc013-4.webp", "assets/products/cc013-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 120cm wide, 50cm deep and 35cm high. Powder-coated iron top and legs. Rectangular top with softly rounded corners. Works as well against a wall as it does floating in a room.",
    features: [
      "Rectangular top with softly rounded corners",
      "Generous 120cm length offers plenty of room for books, trays, or decor",
      "Mocha finish"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Mocha", "Material": "Powder-coated iron top and legs" },
    dims: { w: 120, d: 50, h: 35, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc014", name: "Round Coffee Table 80cm, Natural", cat: "Living Room", room: "Living Room", price: 308, memberPrice: 277, sku: "SH-11076", tag: "New", ph: "", img: "assets/products/cc014-1.webp",
    imgs: ["assets/products/cc014-1.webp", "assets/products/cc014-2.webp", "assets/products/cc014-3.webp", "assets/products/cc014-4.webp", "assets/products/cc014-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 80cm wide, 80cm deep and 40cm high. MDF. Ribbed detailing for added texture and design appeal. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Ribbed detailing for added texture and design appeal",
      "Round tabletop is spacious enough for entertaining, decor, or daily use",
      "Complements a wide range of interior decor styles",
      "Easy to clean and maintain"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Natural", "Material": "MDF, melamine, and paper laminated finish", "Weight": "10.42kg" },
    dims: { w: 80, d: 80, h: 40, unit: "cm", printed: true },
    care: "Wipe down with a damp cloth. Avoid cleaning with strong chemicals." },

  { id: "cc015", name: "Glass Round Coffee Table 90cm, Black", cat: "Living Room", room: "Living Room", price: 555, memberPrice: 499, sku: "SH-11077", tag: "New", ph: "", img: "assets/products/cc015-1.webp",
    imgs: ["assets/products/cc015-1.webp", "assets/products/cc015-2.webp", "assets/products/cc015-3.webp", "assets/products/cc015-4.webp", "assets/products/cc015-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 90cm wide, 90cm deep and 27cm high. Honeycomb board with melamine finish; fibreglass legs with decorative foil look. Rounded tabletop with soft, curved edges. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Rounded tabletop with soft, curved edges",
      "Large ball fibreglass legs for a unique, sculptural base",
      "Black finish adds depth and contrast to your room"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Black", "Material": "Honeycomb board with melamine finish; fibreglass legs with decorative foil look" },
    dims: { w: 90, d: 90, h: 27, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc016", name: "Nesting Metal Round Coffee Tables, Set of 2 · Black", cat: "Living Room", room: "Living Room", price: 345, memberPrice: 310, sku: "SH-11078", tag: "New", ph: "", img: "assets/products/cc016-1.webp",
    imgs: ["assets/products/cc016-1.webp", "assets/products/cc016-2.webp", "assets/products/cc016-3.webp", "assets/products/cc016-4.webp", "assets/products/cc016-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. MDF with a wood veneer finish. Tabletops made from melamine oak. Style it with a stack of books and something with height.",
    features: [
      "Tabletops made from melamine oak",
      "Circular leg design ensures stability on soft surfaces"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Black & Dark Oak", "Material": "MDF with a wood veneer finish , Metal" },
    boxContents: ["1x Coffee table set", "1x Assembly Instructions"],
    care: "Wipe clean with a damp cloth. Large table max load: 40kg; small table max load: 20kg." },

  { id: "cc017", name: "Marble-Look Rectangular Coffee Table, Green", cat: "Living Room", room: "Living Room", price: 617, memberPrice: 555, sku: "SH-11079", tag: "New", ph: "", img: "assets/products/cc017-1.webp",
    imgs: ["assets/products/cc017-1.webp", "assets/products/cc017-2.webp", "assets/products/cc017-3.webp", "assets/products/cc017-4.webp", "assets/products/cc017-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. Rectangular shape with a green marble-effect surface for a natural stone appearance. Style it with a stack of books and something with height.",
    features: [
      "Rectangular shape with a green marble-effect surface for a natural stone appearance",
      "Ample tabletop space for books, décor, or serving items",
      "Green marble tones introduce a soft, organic contrast to neutral interiors"
    ],
    specs: { "Type": "Coffee Table" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc018", name: "Travertine-Look Round Coffee Table 106cm", cat: "Living Room", room: "Living Room", price: 370, memberPrice: 333, sku: "SH-11080", tag: "New", ph: "", img: "assets/products/cc018-1.webp",
    imgs: ["assets/products/cc018-1.webp", "assets/products/cc018-2.webp", "assets/products/cc018-3.webp", "assets/products/cc018-4.webp", "assets/products/cc018-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 106cm wide, 106cm deep and 35cm high. MDF with travertine laminated paper finish. Round tabletop design for central placement. Style it with a stack of books and something with height.",
    features: [
      "Round tabletop design for central placement",
      "Four-leg base providing even support",
      "Low-profile height suited to seating arrangements",
      "Wide leg panels for floor contact and balance",
      "Clear underside for easy floor access"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Travertine", "Material": "MDF with travertine laminated paper finish, MDF with laminated paper finish" },
    dims: { w: 106, d: 106, h: 35, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc019", name: "Birch Round Coffee Table 120cm, White", cat: "Living Room", room: "Living Room", price: 345, memberPrice: 310, sku: "SH-11081", tag: "New", ph: "", img: "assets/products/cc019-1.webp",
    imgs: ["assets/products/cc019-1.webp", "assets/products/cc019-2.webp", "assets/products/cc019-3.webp", "assets/products/cc019-4.webp", "assets/products/cc019-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 120cm wide, 50cm deep and 35cm high. Powder-coated iron top and legs. Rectangular top with softly rounded corners. Works as well against a wall as it does floating in a room.",
    features: [
      "Rectangular top with softly rounded corners",
      "Generous 120cm length offers plenty of room for books, trays, or decor",
      "Soft white finish adds a fresh, neutral base that pairs easily with a range of tones and textures"
    ],
    specs: { "Type": "Coffee Table", "Colour": "White", "Material": "Powder-coated iron top and legs" },
    dims: { w: 120, d: 50, h: 35, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc020", name: "Metal Rectangular Coffee Table 110cm, Black", cat: "Living Room", room: "Living Room", price: 272, memberPrice: 244, sku: "SH-11082", tag: "New", ph: "", img: "assets/products/cc020-1.webp",
    imgs: ["assets/products/cc020-1.webp", "assets/products/cc020-2.webp", "assets/products/cc020-3.webp", "assets/products/cc020-4.webp", "assets/products/cc020-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 110cm wide, 60cm deep and 41cm high. MDF with a Melamine finish. 4mm paper rope accents for a unique, coastal touch. Style it with a stack of books and something with height.",
    features: [
      "4mm paper rope accents for a unique, coastal touch",
      "Spacious rectangular surface for versatile use",
      "Complements a wide range of interior décor styles",
      "Easy to clean and maintain"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Black", "Material": "MDF with a Melamine finish, metal legs and 4mm paper rope" },
    dims: { w: 110, d: 60, h: 41, unit: "cm", printed: true },
    boxContents: ["1x Coffee Table", "1x Assembly Instructions"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc021", name: "Round Coffee Table 80cm, Oak", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11083", tag: "New", ph: "", img: "assets/products/cc021-1.webp",
    imgs: ["assets/products/cc021-1.webp", "assets/products/cc021-2.webp", "assets/products/cc021-3.webp", "assets/products/cc021-4.webp", "assets/products/cc021-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 80cm wide, 80cm deep and 45cm high. Particle board. Unique scalloped base adds sculptural charm. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Unique scalloped base adds sculptural charm",
      "Oak finish enhances warmth and timeless appeal",
      "Spacious 80cm round tabletop for practical use",
      "Durable particle board construction"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Oak", "Material": "Particle board" },
    dims: { w: 80, d: 80, h: 45, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc022", name: "Sliding-Door Coffee Table 120cm, Black", cat: "Living Room", room: "Living Room", price: 308, memberPrice: 277, sku: "SH-11084", tag: "New", ph: "", img: "assets/products/cc022-1.webp",
    imgs: ["assets/products/cc022-1.webp", "assets/products/cc022-2.webp", "assets/products/cc022-3.webp", "assets/products/cc022-4.webp", "assets/products/cc022-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 120cm wide, 60cm deep and 41cm high. MDF with a laminated paper finish. 120cm wide tabletop provides plenty of space for decor, books, or drinks. The kind of piece that quietly holds a room together.",
    features: [
      "120cm wide tabletop provides plenty of space for decor, books, or drinks",
      "Sliding door storage keeps essentials organised and out of sight",
      "Fluted detailing adds texture and visual interest"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Black", "Material": "MDF with a laminated paper finish" },
    dims: { w: 120, d: 60, h: 41, unit: "cm", printed: true },
    care: "Wipe down with a damp cloth. Avoid cleaning with strong chemicals." },

  { id: "cc023", name: "Marble-Look Round Coffee Table, Green", cat: "Living Room", room: "Living Room", price: 617, memberPrice: 555, sku: "SH-11085", tag: "New", ph: "", img: "assets/products/cc023-1.webp",
    imgs: ["assets/products/cc023-1.webp", "assets/products/cc023-2.webp", "assets/products/cc023-3.webp", "assets/products/cc023-4.webp", "assets/products/cc023-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. Circular shape with a green marble-effect finish for a natural stone look. Works as well against a wall as it does floating in a room.",
    features: [
      "Circular shape with a green marble-effect finish for a natural stone look",
      "Green marble tones add gentle contrast and visual depth to interiors"
    ],
    specs: { "Type": "Coffee Table" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc024", name: "Nesting Oval Coffee Tables, Set of 2 · Oak", cat: "Living Room", room: "Living Room", price: 803, memberPrice: 722, sku: "SH-11086", tag: "New", ph: "", img: "assets/products/cc024-1.webp",
    imgs: ["assets/products/cc024-1.webp", "assets/products/cc024-2.webp", "assets/products/cc024-3.webp", "assets/products/cc024-4.webp", "assets/products/cc024-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. MDF with oak veneer. Set of two nesting tables for flexible arrangement and storage. The kind of piece that quietly holds a room together.",
    features: [
      "Set of two nesting tables for flexible arrangement and storage",
      "Asymmetrical oval shapes create a fluid, organic appearance"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Oak", "Material": "MDF with oak veneer" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc025", name: "Metal Rectangular Coffee Table 110cm, Natural", cat: "Living Room", room: "Living Room", price: 272, memberPrice: 244, sku: "SH-11087", tag: "New", ph: "", img: "assets/products/cc025-1.webp",
    imgs: ["assets/products/cc025-1.webp", "assets/products/cc025-2.webp", "assets/products/cc025-3.webp", "assets/products/cc025-4.webp", "assets/products/cc025-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 110cm wide, 60cm deep and 41cm high. MDF with a Melamine finish. 4mm paper rope accents for a unique, coastal touch. Works as well against a wall as it does floating in a room.",
    features: [
      "4mm paper rope accents for a unique, coastal touch",
      "Spacious rectangular surface for versatile use",
      "Complements a wide range of interior décor styles",
      "Easy to clean and maintain"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Natural", "Material": "MDF with a Melamine finish, metal legs and 4mm paper rope" },
    dims: { w: 110, d: 60, h: 41, unit: "cm", printed: true },
    boxContents: ["1x Coffee Table", "1x Assembly Instructions"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc026", name: "Metal Round Coffee Table 76cm, Black", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11088", tag: "New", ph: "", img: "assets/products/cc026-1.webp",
    imgs: ["assets/products/cc026-1.webp", "assets/products/cc026-2.webp", "assets/products/cc026-3.webp", "assets/products/cc026-4.webp", "assets/products/cc026-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 76cm wide, 76cm deep and 41cm high. MDF with a melamine finish. 76cm round tabletop provides plenty of surface space. Leave it bare, or give it one good object and nothing else.",
    features: [
      "76cm round tabletop provides plenty of surface space",
      "Lower shelf offers extra storage for books, décor, and essentials",
      "Paper rope detailing adds texture and a contemporary touch",
      "Compact design fits well in different room layouts",
      "Versatile style complements modern and contemporary interiors"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Black", "Material": "MDF with a melamine finish , Paper Rope , Metal" },
    dims: { w: 76, d: 76, h: 41, unit: "cm", printed: true },
    care: "Wipe clean with a dry cloth. Avoid strong chemical cleaners." },

  { id: "cc027", name: "Round Coffee Table 80cm, Cream", cat: "Living Room", room: "Living Room", price: 333, memberPrice: 299, sku: "SH-11089", tag: "New", ph: "", img: "assets/products/cc027-1.webp",
    imgs: ["assets/products/cc027-1.webp", "assets/products/cc027-2.webp", "assets/products/cc027-3.webp", "assets/products/cc027-4.webp", "assets/products/cc027-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 80cm wide, 80cm deep and 40cm high. MDF with lacquer finish. Round top surface for drinks, books, or display items. The kind of piece that quietly holds a room together.",
    features: [
      "Round top surface for drinks, books, or display items",
      "Cylindrical legs create a balanced and playful look",
      "Cream lacquer finish offers a soft, neutral tone",
      "Solid shape works well as a lounge centrepiece"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Cream", "Material": "MDF with lacquer finish" },
    dims: { w: 80, d: 80, h: 40, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc028", name: "Metal Square Coffee Table 70cm, Black", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11090", tag: "New", ph: "", img: "assets/products/cc028-1.webp",
    imgs: ["assets/products/cc028-1.webp", "assets/products/cc028-2.webp", "assets/products/cc028-3.webp", "assets/products/cc028-4.webp", "assets/products/cc028-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 70cm wide, 70cm deep and 40.5cm high. MDF with a Melamine finish. 4mm paper rope accents for a unique, rustic touch. Works as well against a wall as it does floating in a room.",
    features: [
      "4mm paper rope accents for a unique, rustic touch",
      "Square shape offering ample surface area",
      "Suitable for various interior décor styles",
      "Features a storage shelf beneath the table top",
      "Elegant design with a blend of modern and coastal elements",
      "Easy to clean and maintain"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Black", "Material": "MDF with a Melamine finish, metal legs and 4mm paper rope" },
    dims: { w: 70, d: 70, h: 40.5, unit: "cm", printed: true },
    boxContents: ["1x Coffee Table", "1x Assembly Instructions"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc029", name: "Coffee Table 60cm, Off-White", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11091", tag: "New", ph: "", img: "assets/products/cc029-1.webp",
    imgs: ["assets/products/cc029-1.webp", "assets/products/cc029-2.webp", "assets/products/cc029-3.webp", "assets/products/cc029-4.webp", "assets/products/cc029-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 60cm wide, 60cm deep and 40cm high. MDF with lacquer finish. Cylindrical base offers balance and visual weight. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Cylindrical base offers balance and visual weight",
      "Off-white finish adds a clean, neutral look to your space"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Off-White", "Material": "MDF with lacquer finish" },
    dims: { w: 60, d: 60, h: 40, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc030", name: "Round Coffee Table 80cm", cat: "Living Room", room: "Living Room", price: 333, memberPrice: 299, sku: "SH-11092", tag: "New", ph: "", img: "assets/products/cc030-1.webp",
    imgs: ["assets/products/cc030-1.webp", "assets/products/cc030-2.webp", "assets/products/cc030-3.webp", "assets/products/cc030-4.webp", "assets/products/cc030-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 80cm wide, 80cm deep and 40cm high. MDF with lacquer finish. Cylindrical legs create a balanced and playful look. The kind of piece that quietly holds a room together.",
    features: [
      "Round tabletop ideal for mugs, books, or decor",
      "Cylindrical legs create a balanced and playful look",
      "Coffee-coloured finish brings depth and warmth",
      "Fits neatly as a lounge centrepiece"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Coffee", "Material": "MDF with lacquer finish" },
    dims: { w: 80, d: 80, h: 40, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc031", name: "Coffee Table 110cm, Natural", cat: "Living Room", room: "Living Room", price: 370, memberPrice: 333, sku: "SH-11093", tag: "New", ph: "", img: "assets/products/cc031-1.webp",
    imgs: ["assets/products/cc031-1.webp", "assets/products/cc031-2.webp", "assets/products/cc031-3.webp", "assets/products/cc031-4.webp", "assets/products/cc031-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 110cm wide, 55cm deep and 40cm high. Sustainably sourced rubberwood with a melamine finish. Sliding ribbed door for concealed storage. Style it with a stack of books and something with height.",
    features: [
      "Offers a spacious open shelf for easy access from both sides, perfect for storing larger items or creating attractive displays",
      "Sliding ribbed door for concealed storage",
      "Behind the drawer lies a smaller shelf, ideal for highlighting decorative pieces or keeping frequently used items handy"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Natural", "Material": "Sustainably sourced rubberwood with a melamine finish" },
    dims: { w: 110, d: 55, h: 40, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc032", name: "Marble-Look Coffee Table 100cm, Red", cat: "Living Room", room: "Living Room", price: 864, memberPrice: 777, sku: "SH-11094", tag: "New", ph: "", img: "assets/products/cc032-1.webp",
    imgs: ["assets/products/cc032-1.webp", "assets/products/cc032-2.webp", "assets/products/cc032-3.webp", "assets/products/cc032-4.webp", "assets/products/cc032-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 100cm wide, 74cm deep and 38cm high. MGO with red marble-effect hydrographic transfer finish. Wide, low-profile block form with fluted surface detailing. Style it with a stack of books and something with height.",
    features: [
      "Wide, low-profile block form with fluted surface detailing",
      "Deep red marble-effect finish with dark veining running through the surface",
      "Tonal variation across the surface creates a natural, stone-like appearance",
      "Ample flat top surface for books, decor, or everyday items",
      "Fully assembled - no tools required"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Red", "Material": "MGO with red marble-effect hydrographic transfer finish" },
    dims: { w: 100, d: 74, h: 38, unit: "cm", printed: true },
    care: "Indoor use only." },

  { id: "cc033", name: "Curved Coffee Tables, Set of 2 · White", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11095", tag: "New", ph: "", img: "assets/products/cc033-1.webp",
    imgs: ["assets/products/cc033-1.webp", "assets/products/cc033-2.webp", "assets/products/cc033-3.webp", "assets/products/cc033-4.webp", "assets/products/cc033-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 60cm wide, 60cm deep and 34cm high. MDF with Wood Veneer. Set of two coffee tables for flexible arrangement. The kind of piece that quietly holds a room together.",
    features: [
      "Set of two coffee tables for flexible arrangement",
      "Curved legs create a distinct, modern look",
      "MDF with a wood veneer finish for a smooth, clean surface",
      "Different table sizes allow for versatile styling options"
    ],
    specs: { "Type": "Coffee Table", "Colour": "White", "Material": "MDF with Wood Veneer" },
    dims: { w: 60, d: 60, h: 34, unit: "cm", printed: true },
    care: "Wipe with a damp cloth for easy cleaning and maintenance." },

  { id: "cc034", name: "Coffee Table 120cm, Birch", cat: "Living Room", room: "Living Room", price: 432, memberPrice: 388, sku: "SH-11096", tag: "New", ph: "", img: "assets/products/cc034-1.webp",
    imgs: ["assets/products/cc034-1.webp", "assets/products/cc034-2.webp", "assets/products/cc034-3.webp", "assets/products/cc034-4.webp", "assets/products/cc034-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 120cm wide, 60cm deep and 41cm high. MDF with lacquer finish. Organic tabletop shape adds a natural, sculptural touch. Works as well against a wall as it does floating in a room.",
    features: [
      "Organic tabletop shape adds a natural, sculptural touch",
      "White finish enhances light and complements neutral interiors",
      "Suitable for lounge, living, or open-plan settings"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Birch", "Material": "MDF with lacquer finish" },
    dims: { w: 120, d: 60, h: 41, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc035", name: "Nesting Metal Round Coffee Tables, Set of 2 · White", cat: "Living Room", room: "Living Room", price: 345, memberPrice: 310, sku: "SH-11097", tag: "New", ph: "", img: "assets/products/cc035-1.webp",
    imgs: ["assets/products/cc035-1.webp", "assets/products/cc035-2.webp", "assets/products/cc035-3.webp", "assets/products/cc035-4.webp", "assets/products/cc035-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. MDF with a wood veneer finish. Tabletops made from melamine oak. Style it with a stack of books and something with height.",
    features: [
      "Tabletops made from melamine oak",
      "Circular leg design ensures stability on soft surfaces"
    ],
    specs: { "Type": "Coffee Table", "Colour": "White & Oak", "Material": "MDF with a wood veneer finish , Metal" },
    boxContents: ["1x Coffee table set", "1x Assembly Instructions"],
    care: "Wipe clean with a damp cloth. Large table max load: 40kg; small table max load: 20kg." },

  { id: "cc036", name: "Coffee Table 100cm, Natural", cat: "Living Room", room: "Living Room", price: 495, memberPrice: 445, sku: "SH-11098", tag: "New", ph: "", img: "assets/products/cc036-1.webp",
    imgs: ["assets/products/cc036-1.webp", "assets/products/cc036-2.webp", "assets/products/cc036-3.webp", "assets/products/cc036-4.webp", "assets/products/cc036-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. Natural wood finish for a warm, inviting look. Style it with a stack of books and something with height.",
    features: [
      "Generous 100cm tabletop perfect for gatherings and display",
      "Natural wood finish for a warm, inviting look",
      "Simple, clean design that complements a variety of home décor styles",
      "Spacious under-table clearance for easy cleaning and additional storage options",
      "Smooth surface that's easy to maintain and clean"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Natural" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc037", name: "Coffee Table 102cm, Black", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11099", tag: "New", ph: "", img: "assets/products/cc037-1.webp",
    imgs: ["assets/products/cc037-1.webp", "assets/products/cc037-2.webp", "assets/products/cc037-3.webp", "assets/products/cc037-4.webp", "assets/products/cc037-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 102cm wide, 60cm deep and 46cm high. Spacious surface for decor and beverages. Works as well against a wall as it does floating in a room.",
    features: [
      "Spacious surface for decor and beverages",
      "Durable melamine-finished MDF construction",
      "Sleek black melamine door front for a contemporary look",
      "Hidden drawers for organized storage",
      "Assembly is required"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Black, Natural" },
    dims: { w: 102, d: 60, h: 46, unit: "cm", printed: true },
    care: "Wipe clean with a damp cloth." },

  { id: "cc038", name: "Rattan Storage Coffee Table 97cm, Natural", cat: "Living Room", room: "Living Room", price: 555, memberPrice: 499, sku: "SH-11100", tag: "New", ph: "", img: "assets/products/cc038-1.webp",
    imgs: ["assets/products/cc038-1.webp", "assets/products/cc038-2.webp", "assets/products/cc038-3.webp", "assets/products/cc038-4.webp", "assets/products/cc038-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 97cm wide, 71cm deep and 41cm high. Plywood and Rattan. Unique wave-inspired design for a standout, organic look. Works as well against a wall as it does floating in a room.",
    features: [
      "Unique wave-inspired design for a standout, organic look",
      "Built-in storage for keeping living spaces organised",
      "Crafted from natural plywood and rattan for a warm, textured finish",
      "Versatile design that suits a range of interior styles",
      "Comes fully assembled for immediate use"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Natural wood finish", "Material": "Plywood and Rattan" },
    dims: { w: 97, d: 71, h: 41, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc039", name: "Burl-Look Round Coffee Table 70cm", cat: "Living Room", room: "Living Room", price: 617, memberPrice: 555, sku: "SH-11101", tag: "New", ph: "", img: "assets/products/cc039-1.webp",
    imgs: ["assets/products/cc039-1.webp", "assets/products/cc039-2.webp", "assets/products/cc039-3.webp", "assets/products/cc039-4.webp", "assets/products/cc039-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 70cm wide, 70cm deep and 36.5cm high. MgO (Magnesium Oxide) with burl-effect hydrographic transfer. Circular design with a burl-effect finish. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Circular design with a burl-effect finish",
      "Wide top ideal for holding drinks, books, or decorative items",
      "Neutral tones suit a variety of furniture styles"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Burl", "Material": "MgO (Magnesium Oxide) with burl-effect hydrographic transfer" },
    dims: { w: 70, d: 70, h: 36.5, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc040", name: "Round Coffee Table 77cm, Black", cat: "Living Room", room: "Living Room", price: 296, memberPrice: 266, sku: "SH-11102", tag: "New", ph: "", img: "assets/products/cc040-1.webp",
    imgs: ["assets/products/cc040-1.webp", "assets/products/cc040-2.webp", "assets/products/cc040-3.webp", "assets/products/cc040-4.webp", "assets/products/cc040-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 77cm wide, 77cm deep and 43.5cm high. Solid black metal legs. The kind of piece that quietly holds a room together.",
    features: [
      "Solid black metal legs",
      "Oak melamine tabletop",
      "Cross-legged design ensures stability on soft surfaces",
      "Max tabletop load 20kg"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Natural/Black" },
    dims: { w: 77, d: 77, h: 43.5, unit: "cm", printed: true },
    boxContents: ["1x Coffee table"],
    care: "Wipe clean with a damp cloth." },

  { id: "cc041", name: "Marble-Look Rectangular Coffee Table, Red", cat: "Living Room", room: "Living Room", price: 617, memberPrice: 555, sku: "SH-11103", tag: "New", ph: "", img: "assets/products/cc041-1.webp",
    imgs: ["assets/products/cc041-1.webp", "assets/products/cc041-2.webp", "assets/products/cc041-3.webp", "assets/products/cc041-4.webp", "assets/products/cc041-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. Rectangular shape with a red marble-effect surface for a natural stone appearance. Works as well against a wall as it does floating in a room.",
    features: [
      "Rectangular shape with a red marble-effect surface for a natural stone appearance",
      "Ample tabletop space for books, décor, or serving items",
      "Red marble tones introduce a soft, organic contrast to neutral interiors"
    ],
    specs: { "Type": "Coffee Table" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc042", name: "Arched Coffee Table 70cm, Grey", cat: "Living Room", room: "Living Room", price: 308, memberPrice: 277, sku: "SH-11104", tag: "New", ph: "", img: "assets/products/cc042-1.webp",
    imgs: ["assets/products/cc042-1.webp", "assets/products/cc042-2.webp", "assets/products/cc042-3.webp", "assets/products/cc042-4.webp", "assets/products/cc042-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 70cm wide, 70cm deep and 36cm high. MDF with rolling veneer. Hexagonal shape delivers a standout architectural look. The kind of piece that quietly holds a room together.",
    features: [
      "Hexagonal shape delivers a standout architectural look",
      "Open shelf provides space for storage or display",
      "Chamfered edges on top and side panels for a refined detail",
      "Straight-edge bottom shelf",
      "Grey Finish"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Grey", "Material": "MDF with rolling veneer" },
    dims: { w: 70, d: 70, h: 36, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc043", name: "Ash Round Coffee Table 90cm, Natural", cat: "Living Room", room: "Living Room", price: 678, memberPrice: 610, sku: "SH-11105", tag: "New", ph: "", img: "assets/products/cc043-1.webp",
    imgs: ["assets/products/cc043-1.webp", "assets/products/cc043-2.webp", "assets/products/cc043-3.webp", "assets/products/cc043-4.webp", "assets/products/cc043-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 90cm wide, 90cm deep and 35cm high. MDF with Ash veneer. Round tabletop with softly rounded edges. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Round tabletop with softly rounded edges",
      "Three-leg base design for a stable, balanced look",
      "Natural wood tone that suits a wide range of interior styles"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Natural", "Material": "MDF with Ash veneer, Rubberwood legs" },
    dims: { w: 90, d: 90, h: 35, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc044", name: "Burl-Look Rectangular Coffee Table 70cm", cat: "Living Room", room: "Living Room", price: 617, memberPrice: 555, sku: "SH-11106", tag: "New", ph: "", img: "assets/products/cc044-1.webp",
    imgs: ["assets/products/cc044-1.webp", "assets/products/cc044-2.webp", "assets/products/cc044-3.webp", "assets/products/cc044-4.webp", "assets/products/cc044-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 90.5cm wide, 60cm deep and 31cm high. MgO (Magnesium Oxide) with burl-effect hydrographic transfer. Rectangular design with a Burl-effect finish. The kind of piece that quietly holds a room together.",
    features: [
      "Rectangular design with a Burl-effect finish",
      "Large surface ideal for holding drinks, books, or decorative items",
      "Neutral finish works with a variety of furniture styles"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Burl", "Material": "MgO (Magnesium Oxide) with burl-effect hydrographic transfer" },
    dims: { w: 90.5, d: 60, h: 31, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc045", name: "Coffee Tables 90cm, Set of 2 · White", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11107", tag: "New", ph: "", img: "assets/products/cc045-1.webp",
    imgs: ["assets/products/cc045-1.webp", "assets/products/cc045-2.webp", "assets/products/cc045-3.webp", "assets/products/cc045-4.webp", "assets/products/cc045-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 60cm wide, 60cm deep and 34cm high. MDF with Wood Veneer. Stylish and contemporary design. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Stylish and contemporary design",
      "Flexible arrangement with one larger and one smaller table",
      "Compact and space-efficient, ideal for various room sizes",
      "Easy to match with existing home decor for a cohesive look",
      "Ample surface space for functional and decorative use"
    ],
    specs: { "Type": "Coffee Table", "Colour": "White", "Material": "MDF with Wood Veneer" },
    dims: { w: 60, d: 60, h: 34, unit: "cm", printed: true },
    care: "Wipe with a damp cloth for easy cleaning and maintenance." },

  { id: "cc046", name: "Coffee Table 110cm, Black", cat: "Living Room", room: "Living Room", price: 370, memberPrice: 333, sku: "SH-11108", tag: "New", ph: "", img: "assets/products/cc046-1.webp",
    imgs: ["assets/products/cc046-1.webp", "assets/products/cc046-2.webp", "assets/products/cc046-3.webp", "assets/products/cc046-4.webp", "assets/products/cc046-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 110cm wide, 55cm deep and 40cm high. Sustainably sourced rubberwood with a melamine finish. Sliding ribbed door for concealed storage. Works as well against a wall as it does floating in a room.",
    features: [
      "Offers a spacious open shelf for easy access from both sides, perfect for storing larger items or creating attractive displays",
      "Sliding ribbed door for concealed storage",
      "Behind the drawer lies a smaller shelf, ideal for highlighting decorative pieces or keeping frequently used items handy"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Black", "Material": "Sustainably sourced rubberwood with a melamine finish" },
    dims: { w: 110, d: 55, h: 40, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc047", name: "Rectangular Coffee Table 120cm, Natural", cat: "Living Room", room: "Living Room", price: 555, memberPrice: 499, sku: "SH-11109", tag: "New", ph: "", img: "assets/products/cc047-1.webp",
    imgs: ["assets/products/cc047-1.webp", "assets/products/cc047-2.webp", "assets/products/cc047-3.webp", "assets/products/cc047-4.webp", "assets/products/cc047-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 120cm wide, 60cm deep and 60.5cm high. MDF. Stylish and functional coffee table with four drawers for convenient storage. Style it with a stack of books and something with height.",
    features: [
      "Stylish and functional coffee table with four drawers for convenient storage",
      "Natural wood finish adds rustic elegance to your living room",
      "Rectangular shelf for extra storage or displaying decor",
      "Generous tabletop provides ample surface space",
      "Thoughtful design that caters to your storage and decor needs"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Natural Wood", "Material": "MDF" },
    dims: { w: 120, d: 60, h: 60.5, unit: "cm", printed: true },
    care: "Wipe clean with a damp cloth once assembled." },

  { id: "cc048", name: "Marble & Metal Round Coffee Table 80cm, Green", cat: "Living Room", room: "Living Room", price: 740, memberPrice: 666, sku: "SH-11110", tag: "New", ph: "", img: "assets/products/cc048-1.webp",
    imgs: ["assets/products/cc048-1.webp", "assets/products/cc048-2.webp", "assets/products/cc048-3.webp", "assets/products/cc048-4.webp", "assets/products/cc048-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 80cm wide, 80cm deep and 42cm high. Marble top. Round coffee table with a low-profile form. Works as well against a wall as it does floating in a room.",
    features: [
      "Round coffee table with a low-profile form",
      "Marble tabletop with natural veining variation",
      "Open metal frame base with a brushed nickel finish",
      "Suitable for use in living and lounge areas"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Green", "Material": "Marble top, metal and steel with brushed nickel finish" },
    dims: { w: 80, d: 80, h: 42, unit: "cm", printed: true },
    care: "Natural marble veining and colour variation will occur between pieces." },

  { id: "cc049", name: "Round Coffee Table 110cm, Oak", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11111", tag: "New", ph: "", img: "assets/products/cc049-1.webp",
    imgs: ["assets/products/cc049-1.webp", "assets/products/cc049-2.webp", "assets/products/cc049-3.webp", "assets/products/cc049-4.webp", "assets/products/cc049-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 110cm wide, 61cm deep and 40cm high. MDF with oak veneer. Asymmetrical tabletop. Works as well against a wall as it does floating in a room.",
    features: [
      "Asymmetrical tabletop",
      "Rounded edges",
      "Solid wood legs",
      "Oak finish"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Oak", "Material": "MDF with oak veneer, Solid wood legs" },
    dims: { w: 110, d: 61, h: 40, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc050", name: "Round Coffee Table 100cm, Oak", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11112", tag: "New", ph: "", img: "assets/products/cc050-1.webp",
    imgs: ["assets/products/cc050-1.webp", "assets/products/cc050-2.webp", "assets/products/cc050-3.webp", "assets/products/cc050-4.webp", "assets/products/cc050-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 100cm wide, 100cm deep and 41cm high. MDF with oak veneer finish. Lower shelf adds extra surface space for styling or storage. Works as well against a wall as it does floating in a room.",
    features: [
      "Rounded, curved tabletop softens the room and suits a range of interiors",
      "Lower shelf adds extra surface space for styling or storage",
      "Oak veneer finish adds warm, natural texture",
      "MDF construction for durability and a stable, long-lasting build"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Oak", "Material": "MDF with oak veneer finish" },
    dims: { w: 100, d: 100, h: 41, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc051", name: "Marble-Look Round Coffee Table, Red", cat: "Living Room", room: "Living Room", price: 617, memberPrice: 555, sku: "SH-11113", tag: "New", ph: "", img: "assets/products/cc051-1.webp",
    imgs: ["assets/products/cc051-1.webp", "assets/products/cc051-2.webp", "assets/products/cc051-3.webp", "assets/products/cc051-4.webp", "assets/products/cc051-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. Circular shape with a red marble-effect finish for a natural stone look. Style it with a stack of books and something with height.",
    features: [
      "Circular shape with a red marble-effect finish for a natural stone look",
      "Red marble tones add gentle contrast and visual depth to interiors"
    ],
    specs: { "Type": "Coffee Table" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc052", name: "Coffee Table 120cm, Green", cat: "Living Room", room: "Living Room", price: 432, memberPrice: 388, sku: "SH-11114", tag: "New", ph: "", img: "assets/products/cc052-1.webp",
    imgs: ["assets/products/cc052-1.webp", "assets/products/cc052-2.webp", "assets/products/cc052-3.webp", "assets/products/cc052-4.webp", "assets/products/cc052-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 120cm wide, 60cm deep and 41cm high. MDF with lacquer finish. Organic tabletop shape introduces a natural, sculptural element. Works as well against a wall as it does floating in a room.",
    features: [
      "Organic tabletop shape introduces a natural, sculptural element",
      "Green finish adds depth and contrast to interior spaces",
      "Suitable for lounge, living, or open-plan areas"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Green", "Material": "MDF with lacquer finish" },
    dims: { w: 120, d: 60, h: 41, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc053", name: "Bamboo Coffee Table 100cm, Black", cat: "Living Room", room: "Living Room", price: 273, memberPrice: 245, sku: "SH-11115", tag: "New", ph: "", img: "assets/products/cc053-1.webp",
    imgs: ["assets/products/cc053-1.webp", "assets/products/cc053-2.webp", "assets/products/cc053-3.webp", "assets/products/cc053-4.webp", "assets/products/cc053-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 100cm wide, 50cm deep and 40.5cm high. Bamboo. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Solid, stable build",
      "Wipe-clean surface",
      "Flat-packed for delivery"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Black", "Material": "Bamboo, MDF, Melamine" },
    dims: { w: 100, d: 50, h: 40.5, unit: "cm", printed: true },
    care: "Wipe clean with a damp cloth." },

  { id: "cc054", name: "Curved Round Coffee Table 100cm, Walnut", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11116", tag: "New", ph: "", img: "assets/products/cc054-1.webp",
    imgs: ["assets/products/cc054-1.webp", "assets/products/cc054-2.webp", "assets/products/cc054-3.webp", "assets/products/cc054-4.webp", "assets/products/cc054-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 100cm wide, 100cm deep and 41cm high. MDF with walnut veneer finish. Lower shelf adds extra surface space for styling or storage. Style it with a stack of books and something with height.",
    features: [
      "Rounded, curved tabletop softens the room and suits a range of interiors",
      "Lower shelf adds extra surface space for styling or storage",
      "Walnut veneer finish adds rich, dark natural texture",
      "MDF construction for durability and a stable, long-lasting build"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Walnut", "Material": "MDF with walnut veneer finish" },
    dims: { w: 100, d: 100, h: 41, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc055", name: "Bamboo Coffee Table 100cm, Natural", cat: "Living Room", room: "Living Room", price: 248, memberPrice: 223, sku: "SH-11117", tag: "New", ph: "", img: "assets/products/cc055-1.webp",
    imgs: ["assets/products/cc055-1.webp", "assets/products/cc055-2.webp", "assets/products/cc055-3.webp", "assets/products/cc055-4.webp", "assets/products/cc055-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 100cm wide, 50cm deep and 40.5cm high. Bamboo. The kind of piece that quietly holds a room together.",
    features: [
      "Solid, stable build",
      "Wipe-clean surface",
      "Flat-packed for delivery"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Natural Wood", "Material": "Bamboo, MDF, Melamine" },
    dims: { w: 100, d: 50, h: 40.5, unit: "cm", printed: true },
    care: "Wipe clean with a damp cloth." },

  { id: "cc056", name: "Burl-Look Round Coffee Table 60cm", cat: "Living Room", room: "Living Room", price: 308, memberPrice: 277, sku: "SH-11118", tag: "New", ph: "", img: "assets/products/cc056-1.webp",
    imgs: ["assets/products/cc056-1.webp", "assets/products/cc056-2.webp", "assets/products/cc056-3.webp", "assets/products/cc056-4.webp", "assets/products/cc056-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 60cm wide, 60cm deep and 40cm high. MDF with burl wood-look laminated finish. Round tabletop with compact proportions for smaller spaces. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Round tabletop with compact proportions for smaller spaces",
      "Triple-leg base provides structure and sculptural balance",
      "Burl wood-look laminated surface adds depth and texture",
      "Suitable as a coffee table or low display surface"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Burl", "Material": "MDF with burl wood-look laminated finish" },
    dims: { w: 60, d: 60, h: 40, unit: "cm", printed: true },
    care: "Indoor use only." },

  { id: "cc057", name: "Round Coffee Table 50cm, Natural", cat: "Living Room", room: "Living Room", price: 377, memberPrice: 339, sku: "SH-11119", tag: "New", ph: "", img: "assets/products/cc057-1.webp",
    imgs: ["assets/products/cc057-1.webp", "assets/products/cc057-2.webp", "assets/products/cc057-3.webp", "assets/products/cc057-4.webp", "assets/products/cc057-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The piece the whole room arranges itself around. 50cm wide, 50cm deep and 36cm high. Particleboard with melamine finish. Matching scalloped base design provides visual consistency across the set. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Matching scalloped base design provides visual consistency across the set",
      "Round tabletops suited for display or everyday use",
      "Natural wood-look finish introduces warmth and texture",
      "Can be positioned together or used separately as nesting tables"
    ],
    specs: { "Type": "Coffee Table", "Colour": "Natural", "Material": "Particleboard with melamine finish" },
    dims: { w: 50, d: 50, h: 36, unit: "cm", printed: true },
    care: "Indoor use only." },

  { id: "cc058", name: "Travertine-Look Round Side Table 46cm", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11120", tag: "New", ph: "", img: "assets/products/cc058-1.webp",
    imgs: ["assets/products/cc058-1.webp", "assets/products/cc058-2.webp", "assets/products/cc058-3.webp", "assets/products/cc058-4.webp", "assets/products/cc058-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 36cm wide, 36cm deep and 46cm high. Magnesium Oxide (MGO). Sturdy, easy to move around. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Sturdy, easy to move around",
      "Travertine finish that emulates real stone",
      "Circular shape with natural stone detailing for a refined look",
      "Neutral tones complement various interior décor styles",
      "Eye-catching details enhances aesthetic appeal"
    ],
    specs: { "Type": "Side Table", "Colour": "Travertine", "Material": "Magnesium Oxide (MGO)" },
    dims: { w: 36, d: 36, h: 46, unit: "cm", printed: true },
    boxContents: ["1x Side Table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc059", name: "Travertine-Look Plinth Round Side Table 70cm, Beige", cat: "Living Room", room: "Living Room", price: 308, memberPrice: 277, sku: "SH-11121", tag: "New", ph: "", img: "assets/products/cc059-1.webp",
    imgs: ["assets/products/cc059-1.webp", "assets/products/cc059-2.webp", "assets/products/cc059-3.webp", "assets/products/cc059-4.webp", "assets/products/cc059-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 36cm wide, 36cm deep and 70.5cm high. MgO with a travertine effect in hydrographic transfer printing. Circular shape with travertine-effect finish. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Circular shape with travertine-effect finish",
      "Durable MGO construction for stability",
      "Neutral tones blend with various décor styles",
      "Lightweight design for easy repositioning"
    ],
    specs: { "Type": "Side Table", "Colour": "Beige", "Material": "MgO with a travertine effect in hydrographic transfer printing", "Weight": "12kg" },
    dims: { w: 36, d: 36, h: 70.5, unit: "cm", printed: true },
    boxContents: ["1x Plinth"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight. WARNING:." },

  { id: "cc060", name: "Ash Round Side Table 40cm, Walnut", cat: "Living Room", room: "Living Room", price: 123, memberPrice: 110, sku: "SH-11122", tag: "New", ph: "", img: "assets/products/cc060-1.webp",
    imgs: ["assets/products/cc060-1.webp", "assets/products/cc060-2.webp", "assets/products/cc060-3.webp", "assets/products/cc060-4.webp", "assets/products/cc060-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 48cm high. MDF with ash-coloured laminate; metal frame. Fluted cylindrical base adds visual texture and shape. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "Fluted cylindrical base adds visual texture and shape",
      "Round tabletop suits small spaces and softens the overall look",
      "Walnut finish brings a warm, natural feel",
      "Lightweight construction for easy movement and styling"
    ],
    specs: { "Type": "Side Table", "Colour": "Walnut", "Material": "MDF with ash-coloured laminate; metal frame" },
    dims: { w: 40, d: 40, h: 48, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc061", name: "Oak Round Side Table 48cm, Light Oak", cat: "Living Room", room: "Living Room", price: 110, memberPrice: 99, sku: "SH-11123", tag: "New", ph: "", img: "assets/products/cc061-1.webp",
    imgs: ["assets/products/cc061-1.webp", "assets/products/cc061-2.webp", "assets/products/cc061-3.webp", "assets/products/cc061-4.webp", "assets/products/cc061-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 24cm wide, 48cm deep and 48.5cm high. Sustainably sourced MDF with laminate finish. Semi-circular shape that fits neatly against walls or furniture. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Semi-circular shape that fits neatly against walls or furniture",
      "A timeless look that enriches the surrounding decor",
      "Suitable as a side table, entryway accent, or nightstand"
    ],
    specs: { "Type": "Side Table", "Colour": "Light Oak", "Material": "Sustainably sourced MDF with laminate finish" },
    dims: { w: 24, d: 48, h: 48.5, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc062", name: "Side Table 40cm, Natural", cat: "Living Room", room: "Living Room", price: 123, memberPrice: 110, sku: "SH-11124", tag: "New", ph: "", img: "assets/products/cc062-1.webp",
    imgs: ["assets/products/cc062-1.webp", "assets/products/cc062-2.webp", "assets/products/cc062-3.webp", "assets/products/cc062-4.webp", "assets/products/cc062-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 48cm high. MDF with a laminated paper finish. Constructed from MDF with a laminated paper finish. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Constructed from MDF with a laminated paper finish",
      "Single-person assembly for convenience"
    ],
    specs: { "Type": "Side Table", "Material": "MDF with a laminated paper finish" },
    dims: { w: 40, d: 40, h: 48, unit: "cm", printed: true },
    care: "Wipe with a damp cloth. Avoid harsh chemicals." },

  { id: "cc063", name: "Travertine-Look Round Side Table 45cm, Beige", cat: "Living Room", room: "Living Room", price: 308, memberPrice: 277, sku: "SH-11125", tag: "New", ph: "", img: "assets/products/cc063-1.webp",
    imgs: ["assets/products/cc063-1.webp", "assets/products/cc063-2.webp", "assets/products/cc063-3.webp", "assets/products/cc063-4.webp", "assets/products/cc063-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 45cm wide, 45cm deep and 50.5cm high. MgO with a travertine effect in hydrographic transfer printing. Sturdy, easy to move around. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Sturdy, easy to move around",
      "Travertine finish that emulates real stone",
      "Square shape with natural stone detailing for a refined look",
      "Neutral tones complement various interior décor styles",
      "Eye-catching details enhance aesthetic appeal"
    ],
    specs: { "Type": "Side Table", "Shape": "Square", "Colour": "Beige", "Material": "MgO with a travertine effect in hydrographic transfer printing", "Weight": "17kg" },
    dims: { w: 45, d: 45, h: 50.5, unit: "cm", printed: true },
    boxContents: ["1x Side Table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc064", name: "Round Side Table 48cm, Walnut", cat: "Living Room", room: "Living Room", price: 110, memberPrice: 99, sku: "SH-11126", tag: "New", ph: "", img: "assets/products/cc064-1.webp",
    imgs: ["assets/products/cc064-1.webp", "assets/products/cc064-2.webp", "assets/products/cc064-3.webp", "assets/products/cc064-4.webp", "assets/products/cc064-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 24cm wide, 48cm deep and 48.5cm high. Sustainably sourced MDF with a melamine finish. Semi-circular shape that fits neatly against walls or furniture. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "Semi-circular shape that fits neatly against walls or furniture",
      "A timeless look that enriches the surrounding decor",
      "Suitable as a side table, entryway accent, or nightstand"
    ],
    specs: { "Type": "Side Table", "Colour": "Walnut", "Material": "Sustainably sourced MDF with a melamine finish" },
    dims: { w: 24, d: 48, h: 48.5, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc065", name: "Travertine-Look Round Side Table 40cm", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11127", tag: "New", ph: "", img: "assets/products/cc065-1.webp",
    imgs: ["assets/products/cc065-1.webp", "assets/products/cc065-2.webp", "assets/products/cc065-3.webp", "assets/products/cc065-4.webp", "assets/products/cc065-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 45cm high. Magnesium Oxide (MgO). Sturdy, easy to move around. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Sturdy, easy to move around",
      "Unique design with two inverse dome shapes",
      "Smooth, polished finish mimicking natural travertine",
      "Neutral tones complement various interior decor styles",
      "Eye-catching shape enhances aesthetic appeal"
    ],
    specs: { "Type": "Side Table", "Shape": "Two Inverse Domes", "Colour": "Travertine", "Material": "Magnesium Oxide (MgO)", "Weight": "9kg" },
    dims: { w: 40, d: 40, h: 45, unit: "cm", printed: true },
    boxContents: ["1x Side Table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull." },

  { id: "cc066", name: "Travertine-Look Side Table 37cm", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11128", tag: "New", ph: "", img: "assets/products/cc066-1.webp",
    imgs: ["assets/products/cc066-1.webp", "assets/products/cc066-2.webp", "assets/products/cc066-3.webp", "assets/products/cc066-4.webp", "assets/products/cc066-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 37cm wide, 37cm deep and 45.5cm high. Magnesium Oxide (MgO). Sturdy design. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Sturdy design",
      "Unique 3-leaf clover shape for a modern look",
      "Smooth, polished finish that resembles natural travertine",
      "Neutral tones that blend well with various décor styles",
      "Stylish shape that enhances room aesthetics"
    ],
    specs: { "Type": "Side Table", "Shape": "Clover", "Colour": "Travertine", "Material": "Magnesium Oxide (MgO)", "Weight": "7.5kg" },
    dims: { w: 37, d: 37, h: 45.5, unit: "cm", printed: true },
    boxContents: ["1x Side Table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc067", name: "Timber Side Table 33cm, Birch", cat: "Living Room", room: "Living Room", price: 110, memberPrice: 99, sku: "SH-11129", tag: "New", ph: "", img: "assets/products/cc067-1.webp",
    imgs: ["assets/products/cc067-1.webp", "assets/products/cc067-2.webp", "assets/products/cc067-3.webp", "assets/products/cc067-4.webp", "assets/products/cc067-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 33cm wide, 33cm deep and 45cm high. MDF with lacquer finish. Two-ball stem design creates a sculptural and playful silhouette. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "Two-ball stem design creates a sculptural and playful silhouette",
      "Birch finish adds a soft, natural tone to interior settings",
      "Compact form ideal for use beside sofas, beds, or occasional chairs"
    ],
    specs: { "Type": "Side Table", "Colour": "Birch", "Material": "MDF with lacquer finish, solid pine timber" },
    dims: { w: 33, d: 33, h: 45, unit: "cm", printed: true },
    care: "Indoor use only." },

  { id: "cc068", name: "Marble-Look Round Side Table 46cm, Green", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11130", tag: "New", ph: "", img: "assets/products/cc068-1.webp",
    imgs: ["assets/products/cc068-1.webp", "assets/products/cc068-2.webp", "assets/products/cc068-3.webp", "assets/products/cc068-4.webp", "assets/products/cc068-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 36cm wide, 36cm deep and 46cm high. Magnesium Oxide (MGO). Marble look finish that emulates real stone. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Marble look finish that emulates real stone",
      "Circular shape with natural stone detailing for a refined look",
      "Eye-catching details enhances aesthetic appeal"
    ],
    specs: { "Type": "Side Table", "Colour": "Green", "Material": "Magnesium Oxide (MGO)" },
    dims: { w: 36, d: 36, h: 46, unit: "cm", printed: true },
    boxContents: ["1x Side Table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc069", name: "Timber Round Side Table 33cm, Blue", cat: "Living Room", room: "Living Room", price: 110, memberPrice: 99, sku: "SH-11131", tag: "New", ph: "", img: "assets/products/cc069-1.webp",
    imgs: ["assets/products/cc069-1.webp", "assets/products/cc069-2.webp", "assets/products/cc069-3.webp", "assets/products/cc069-4.webp", "assets/products/cc069-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 33cm wide, 33cm deep and 45cm high. MDF with lacquer finish. Two-ball stem base adds a sculptural and eye-catching element. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Two-ball stem base adds a sculptural and eye-catching element",
      "Rounded tabletop provides space for small items or decor",
      "Compact design fits easily beside beds, sofas, or reading chairs"
    ],
    specs: { "Type": "Side Table", "Colour": "Blue", "Material": "MDF with lacquer finish, solid pine timber" },
    dims: { w: 33, d: 33, h: 45, unit: "cm", printed: true },
    care: "Indoor use only." },

  { id: "cc070", name: "Round Side Table 55cm, Walnut", cat: "Living Room", room: "Living Room", price: 222, memberPrice: 199, sku: "SH-11132", tag: "New", ph: "", img: "assets/products/cc070-1.webp",
    imgs: ["assets/products/cc070-1.webp", "assets/products/cc070-2.webp", "assets/products/cc070-3.webp", "assets/products/cc070-4.webp", "assets/products/cc070-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 55cm wide, 55cm deep and 50cm high. MDF with laminated finish. Rounded square tabletop for a softer, modern profile. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "Rounded square tabletop for a softer, modern profile",
      "Drum-style base offers a solid, grounded look",
      "Compact design suits small spaces or corner styling"
    ],
    specs: { "Type": "Side Table", "Colour": "Walnut", "Material": "MDF with laminated finish" },
    dims: { w: 55, d: 55, h: 50, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc071", name: "Metal Side Tables, Set of 2 · Black", cat: "Living Room", room: "Living Room", price: 223, memberPrice: 200, sku: "SH-11133", tag: "New", ph: "", img: "assets/products/cc071-1.webp",
    imgs: ["assets/products/cc071-1.webp", "assets/products/cc071-2.webp", "assets/products/cc071-3.webp", "assets/products/cc071-4.webp", "assets/products/cc071-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 35cm wide, 35cm deep and 35cm high. MDF with a melamine finish. Set of two nesting tables for flexible arrangement. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Set of two nesting tables for flexible arrangement",
      "Space-saving design, smaller table tucks neatly under the larger one",
      "Suitable for living rooms, bedrooms, or lounge areas"
    ],
    specs: { "Type": "Side Table", "Colour": "Black & Natural", "Material": "MDF with a melamine finish, Metal" },
    dims: { w: 35, d: 35, h: 35, unit: "cm", printed: true },
    boxContents: ["1x Side table set", "1x Assembly Instructions"],
    care: "Wipe clean with a damp cloth. Large table max load: 40kg; small table max load: 20kg." },

  { id: "cc072", name: "Terrazzo Stool Round Side Table 42cm, White", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11134", tag: "New", ph: "", img: "assets/products/cc072-1.webp",
    imgs: ["assets/products/cc072-1.webp", "assets/products/cc072-2.webp", "assets/products/cc072-3.webp", "assets/products/cc072-4.webp", "assets/products/cc072-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 39cm wide, 39cm deep and 42cm high. Terrazzo. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Solid, stable build",
      "Wipe-clean surface",
      "Flat-packed for delivery"
    ],
    specs: { "Type": "Side Table", "Shape": "Round", "Material": "Terrazzo" },
    dims: { w: 39, d: 39, h: 42, unit: "cm", printed: true },
    boxContents: ["1x Terrazzo side table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc073", name: "Travertine-Look Plinth Side Table 70cm, Beige", cat: "Living Room", room: "Living Room", price: 432, memberPrice: 388, sku: "SH-11135", tag: "New", ph: "", img: "assets/products/cc073-1.webp",
    imgs: ["assets/products/cc073-1.webp", "assets/products/cc073-2.webp", "assets/products/cc073-3.webp", "assets/products/cc073-4.webp", "assets/products/cc073-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 45cm wide, 45cm deep and 70.5cm high. MgO with a travertine effect in hydrographic transfer printing. Travertine-effect finish for a natural stone look. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "Travertine-effect finish for a natural stone look",
      "Sturdy MGO construction for durability",
      "Neutral tones suit various décor styles",
      "Easy to move and reposition"
    ],
    specs: { "Type": "Side Table", "Colour": "Beige", "Material": "MgO with a travertine effect in hydrographic transfer printing", "Weight": "22kg" },
    dims: { w: 45, d: 45, h: 70.5, unit: "cm", printed: true },
    boxContents: ["1x Plinth"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight. WARNING:." },

  { id: "cc074", name: "Round Side Table 40cm, Coffee", cat: "Living Room", room: "Living Room", price: 185, memberPrice: 166, sku: "SH-11136", tag: "New", ph: "", img: "assets/products/cc074-1.webp",
    imgs: ["assets/products/cc074-1.webp", "assets/products/cc074-2.webp", "assets/products/cc074-3.webp", "assets/products/cc074-4.webp", "assets/products/cc074-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 48cm high. MDF with lacquer finish. Round top with a clean, simple silhouette. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "Round top with a clean, simple silhouette",
      "Three cylindrical legs create a strong, grounded base",
      "Coffee-coloured lacquer finish adds warmth and depth"
    ],
    specs: { "Type": "Side Table", "Colour": "Coffee", "Material": "MDF with lacquer finish" },
    dims: { w: 40, d: 40, h: 48, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc075", name: "Rattan Side Table 42cm, Natural", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11137", tag: "New", ph: "", img: "assets/products/cc075-1.webp",
    imgs: ["assets/products/cc075-1.webp", "assets/products/cc075-2.webp", "assets/products/cc075-3.webp", "assets/products/cc075-4.webp", "assets/products/cc075-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 41.5cm wide, 41.5cm deep and 53cm high. Rattan. Structurally solid but also aesthetically pleasing. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Structurally solid but also aesthetically pleasing",
      "2-tiers of storage",
      "Natural rattan is resistant to warping or changing in the temperatures or humidity"
    ],
    specs: { "Type": "Side Table", "Colour": "Natural", "Material": "Rattan" },
    dims: { w: 41.5, d: 41.5, h: 53, unit: "cm", printed: true },
    care: "1 x Wipe with damp cloth." },

  { id: "cc076", name: "Terrazzo Round Side Table 48cm, Natural", cat: "Living Room", room: "Living Room", price: 222, memberPrice: 199, sku: "SH-11138", tag: "New", ph: "", img: "assets/products/cc076-1.webp",
    imgs: ["assets/products/cc076-1.webp", "assets/products/cc076-2.webp", "assets/products/cc076-3.webp", "assets/products/cc076-4.webp", "assets/products/cc076-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 49cm wide, 49cm deep and 47cm high. Terrazzo; Oak. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Solid, stable build",
      "Wipe-clean surface",
      "Flat-packed for delivery"
    ],
    specs: { "Type": "Side Table", "Shape": "Round", "Colour": "Multi", "Material": "Terrazzo; Oak" },
    dims: { w: 49, d: 49, h: 47, unit: "cm", printed: true },
    boxContents: ["1x Terrazzo side table"],
    care: "Wipe with damp cloth." },

  { id: "cc077", name: "Marble-Look Round Side Table 46cm", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11139", tag: "New", ph: "", img: "assets/products/cc077-1.webp",
    imgs: ["assets/products/cc077-1.webp", "assets/products/cc077-2.webp", "assets/products/cc077-3.webp", "assets/products/cc077-4.webp", "assets/products/cc077-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 36cm wide, 36cm deep and 46cm high. Magnesium Oxide (MGO). Marble look finish that emulates real stone. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Marble look finish that emulates real stone",
      "Circular shape with natural stone detailing for a refined look",
      "Eye-catching details enhances aesthetic appeal"
    ],
    specs: { "Type": "Side Table", "Colour": "Tea Rose", "Material": "Magnesium Oxide (MGO)" },
    dims: { w: 36, d: 36, h: 46, unit: "cm", printed: true },
    boxContents: ["1x Side Table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc078", name: "Metal Round Side Table 45 × 45 × 45 × 45 × 45cm 45cm high, Birch", cat: "Living Room", room: "Living Room", price: 197, memberPrice: 177, sku: "SH-11140", tag: "New", ph: "", img: "assets/products/cc078-1.webp",
    imgs: ["assets/products/cc078-1.webp", "assets/products/cc078-2.webp", "assets/products/cc078-3.webp", "assets/products/cc078-4.webp", "assets/products/cc078-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 45cm wide, 45cm deep and 45cm high. Powder-coated iron top and base. Neutral finish adds warmth and contrast to your space. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Neutral finish adds warmth and contrast to your space",
      "Simple cylinder-style base with clean, round top",
      "Durable surface suited to daily use beside lounges, beds, or entryways"
    ],
    specs: { "Type": "Side Table", "Colour": "Birch", "Material": "Powder-coated iron top and base" },
    dims: { w: 45, d: 45, h: 45, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc079", name: "Marble-Look Round Side Table 40cm, Green", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11141", tag: "New", ph: "", img: "assets/products/cc079-1.webp",
    imgs: ["assets/products/cc079-1.webp", "assets/products/cc079-2.webp", "assets/products/cc079-3.webp", "assets/products/cc079-4.webp", "assets/products/cc079-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 45cm high. Magnesium Oxide (MgO). Sturdy, easy to move around. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Sturdy, easy to move around",
      "Unique design with two inverse dome shapes",
      "Smooth, polished finish mimicking natural Marble",
      "Eye-catching shape enhances aesthetic appeal"
    ],
    specs: { "Type": "Side Table", "Colour": "Green", "Material": "Magnesium Oxide (MgO)" },
    dims: { w: 40, d: 40, h: 45, unit: "cm", printed: true },
    boxContents: ["1x Side Table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull." },

  { id: "cc080", name: "Round Side Table 40cm, Cream", cat: "Living Room", room: "Living Room", price: 185, memberPrice: 166, sku: "SH-11142", tag: "New", ph: "", img: "assets/products/cc080-1.webp",
    imgs: ["assets/products/cc080-1.webp", "assets/products/cc080-2.webp", "assets/products/cc080-3.webp", "assets/products/cc080-4.webp", "assets/products/cc080-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 48cm high. MDF with lacquer finish. Round top with a clean, minimal profile. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Round top with a clean, minimal profile",
      "Three solid cylindrical legs offer a bold, balanced base",
      "Cream finish adds a soft, neutral look",
      "Compact size suits bedsides, lounge corners, or entryways"
    ],
    specs: { "Type": "Side Table", "Colour": "Cream", "Material": "MDF with lacquer finish" },
    dims: { w: 40, d: 40, h: 48, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc081", name: "Marble-Look Side Table 37cm", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11143", tag: "New", ph: "", img: "assets/products/cc081-1.webp",
    imgs: ["assets/products/cc081-1.webp", "assets/products/cc081-2.webp", "assets/products/cc081-3.webp", "assets/products/cc081-4.webp", "assets/products/cc081-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 37cm wide, 37cm deep and 46cm high. Magnesium Oxide (MgO). Sturdy design. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Sturdy design",
      "Unique 3-leaf clover shape for a modern look",
      "Smooth, polished finish that resembles natural marble",
      "Neutral tones that blend well with various décor styles",
      "Stylish shape that enhances room aesthetics"
    ],
    specs: { "Type": "Side Table", "Colour": "Rose", "Material": "Magnesium Oxide (MgO)" },
    dims: { w: 37, d: 37, h: 46, unit: "cm", printed: true },
    boxContents: ["1x Side Table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc082", name: "Marble-Look Round Side Table 40cm", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11144", tag: "New", ph: "", img: "assets/products/cc082-1.webp",
    imgs: ["assets/products/cc082-1.webp", "assets/products/cc082-2.webp", "assets/products/cc082-3.webp", "assets/products/cc082-4.webp", "assets/products/cc082-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 45cm high. Magnesium Oxide (MgO). Sturdy, easy to move around. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Sturdy, easy to move around",
      "Unique design with two inverse dome shapes",
      "Smooth, polished finish mimicking natural Marble",
      "Eye-catching shape enhances aesthetic appeal"
    ],
    specs: { "Type": "Side Table", "Colour": "Rose", "Material": "Magnesium Oxide (MgO)" },
    dims: { w: 40, d: 40, h: 45, unit: "cm", printed: true },
    boxContents: ["1x Side Table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull." },

  { id: "cc083", name: "Marble & Metal Side Table 45cm, Grey", cat: "Living Room", room: "Living Room", price: 197, memberPrice: 177, sku: "SH-11145", tag: "New", ph: "", img: "assets/products/cc083-1.webp",
    imgs: ["assets/products/cc083-1.webp", "assets/products/cc083-2.webp", "assets/products/cc083-3.webp", "assets/products/cc083-4.webp", "assets/products/cc083-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 43.4cm wide, 42.7cm deep and 51cm high. Natural marble top. Natural marble top with unique veining. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Natural marble top with unique veining",
      "Nickel-finished frame for a polished, metallic contrast",
      "Each marble top features natural pattern variation, making every table one of a kind"
    ],
    specs: { "Type": "Side Table", "Colour": "Grey", "Material": "Natural marble top, Nickel-finished, Metal legs" },
    dims: { w: 43.4, d: 42.7, h: 51, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc084", name: "Round Side Table 45cm, Cream", cat: "Living Room", room: "Living Room", price: 160, memberPrice: 144, sku: "SH-11146", tag: "New", ph: "", img: "assets/products/cc084-1.webp",
    imgs: ["assets/products/cc084-1.webp", "assets/products/cc084-2.webp", "assets/products/cc084-3.webp", "assets/products/cc084-4.webp", "assets/products/cc084-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 45cm wide, 38cm deep and 50cm high. MDF with lacquer finish. Round top with generous surface space for everyday use. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Round top with generous surface space for everyday use",
      "Curved base delivers a sturdy, grounded profile",
      "Cream finish adds a soft, neutral tone to your setup"
    ],
    specs: { "Type": "Side Table", "Colour": "Cream", "Material": "MDF with lacquer finish" },
    dims: { w: 45, d: 38, h: 50, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc085", name: "Round Side Table, Blue", cat: "Living Room", room: "Living Room", price: 123, memberPrice: 110, sku: "SH-11147", tag: "New", ph: "", img: "assets/products/cc085-1.webp",
    imgs: ["assets/products/cc085-1.webp", "assets/products/cc085-2.webp", "assets/products/cc085-3.webp", "assets/products/cc085-4.webp", "assets/products/cc085-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. Contemporary round side table design. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Contemporary round side table design",
      "Slim frame with balanced circular base",
      "Compact size suitable for small or large spaces",
      "Blue finish that pairs effortlessly with a variety of interiors"
    ],
    specs: { "Type": "Side Table" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc086", name: "Round Side Table 50cm", cat: "Living Room", room: "Living Room", price: 160, memberPrice: 144, sku: "SH-11148", tag: "New", ph: "", img: "assets/products/cc086-1.webp",
    imgs: ["assets/products/cc086-1.webp", "assets/products/cc086-2.webp", "assets/products/cc086-3.webp", "assets/products/cc086-4.webp", "assets/products/cc086-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. Scalloped base design adds visual interest and charm. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Scalloped base design adds visual interest and charm",
      "Round tabletop is ideal for lamps, books, or decor pieces",
      "Natural wood-look finish blends easily with modern and relaxed interiors",
      "Compact size makes it easy to position in small spaces"
    ],
    specs: { "Type": "Side Table" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc087", name: "Metal Side Table 50cm, Black", cat: "Living Room", room: "Living Room", price: 98, memberPrice: 88, sku: "SH-11149", tag: "New", ph: "", img: "assets/products/cc087-1.webp",
    imgs: ["assets/products/cc087-1.webp", "assets/products/cc087-2.webp", "assets/products/cc087-3.webp", "assets/products/cc087-4.webp", "assets/products/cc087-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 50cm wide, 35cm deep and 70cm high. MDF. Natural wood finish for a rustic and warm appearance. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Natural wood finish for a rustic and warm appearance",
      "Metal legs with a powder coat finish for a modern look",
      "Two-tier shelf design for extensive storage and display options",
      "The table’s natural colour ensures it fits seamlessly with various interior colour schemes and design aesthetics"
    ],
    specs: { "Type": "Side Table", "Colour": "Black", "Material": "MDF, with a Melamine finish, and Metal with a Powder Coat Finish" },
    dims: { w: 50, d: 35, h: 70, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc088", name: "Round Side Table, Cream", cat: "Living Room", room: "Living Room", price: 123, memberPrice: 110, sku: "SH-11150", tag: "New", ph: "", img: "assets/products/cc088-1.webp",
    imgs: ["assets/products/cc088-1.webp", "assets/products/cc088-2.webp", "assets/products/cc088-3.webp", "assets/products/cc088-4.webp", "assets/products/cc088-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. Contemporary round side table design. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Contemporary round side table design",
      "Two-tier structure with top surface and lower shelf",
      "Slim frame that gives a light and modern look",
      "Cream finish that blends seamlessly with a variety of interiors"
    ],
    specs: { "Type": "Side Table" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc089", name: "Metal Arched Side Table 86cm, Black", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11151", tag: "New", ph: "", img: "assets/products/cc089-1.webp",
    imgs: ["assets/products/cc089-1.webp", "assets/products/cc089-2.webp", "assets/products/cc089-3.webp", "assets/products/cc089-4.webp", "assets/products/cc089-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 50cm across. Metal. Black metal frame with ribbed glass doors for a contemporary, sophisticated look. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Black metal frame with ribbed glass doors for a contemporary, sophisticated look",
      "Two spacious shelves and a metal divider keep your belongings organised and accessible",
      "Opaque glass arched door detailing adds a unique and stylish visual element to any room"
    ],
    specs: { "Type": "Side Table", "Colour": "Black", "Material": "Metal" },
    care: "Wipe with damp cloth once assembled. WARNING:. Children have died from furniture tipover. ALWAYS secure this furniture with an anchor device." },

  { id: "cc090", name: "Travertine-Look Round Side Tables, Set of 2 · White", cat: "Living Room", room: "Living Room", price: 222, memberPrice: 199, sku: "SH-11152", tag: "New", ph: "", img: "assets/products/cc090-1.webp",
    imgs: ["assets/products/cc090-1.webp", "assets/products/cc090-2.webp", "assets/products/cc090-3.webp", "assets/products/cc090-4.webp", "assets/products/cc090-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. MDF with melamine finish. Nesting design makes it easy to store or separate as needed. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Nesting design makes it easy to store or separate as needed",
      "Round tops with travertine-look finish add a natural, stone-inspired texture",
      "Works well beside a sofa, armchair, or bed"
    ],
    specs: { "Type": "Side Table", "Colour": "Travertine-look tops with white base", "Material": "MDF with melamine finish, metal frame" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc091", name: "Stone-Look Side Table 45cm, White", cat: "Living Room", room: "Living Room", price: 308, memberPrice: 277, sku: "SH-11153", tag: "New", ph: "", img: "assets/products/cc091-1.webp",
    imgs: ["assets/products/cc091-1.webp", "assets/products/cc091-2.webp", "assets/products/cc091-3.webp", "assets/products/cc091-4.webp", "assets/products/cc091-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 45cm wide, 45cm deep and 57.5cm high. MgO (Magnesium Oxide). This stylish versatile piece features a cylindrical appearance with a unique internal storage space. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "This stylish versatile piece features a cylindrical appearance with a unique internal storage space",
      "Crafted from high-quality MgO, the Castello Side Table offers both aesthetic beauty and long-lasting durability",
      "Water-based painted finish",
      "Can also be used as a stool",
      "Has internal storage space"
    ],
    specs: { "Type": "Side Table", "Colour": "White", "Material": "MgO (Magnesium Oxide)" },
    dims: { w: 45, d: 45, h: 57.5, unit: "cm", printed: true },
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight. Max recommended weight 100kg." },

  { id: "cc092", name: "Stone-Look Arched Side Table 40cm, White", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11154", tag: "New", ph: "", img: "assets/products/cc092-1.webp",
    imgs: ["assets/products/cc092-1.webp", "assets/products/cc092-2.webp", "assets/products/cc092-3.webp", "assets/products/cc092-4.webp", "assets/products/cc092-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 47cm high. MgO (Magnesium Oxide). This stylish versatile piece features an arch cut through the middle offering a unique and modern aesthetic. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "This stylish versatile piece features an arch cut through the middle offering a unique and modern aesthetic",
      "Crafted from high-quality MgO, the Brasilia Side Table offers aesthetic beauty and long-lasting durability",
      "Water-based painted finish with the appearance of Terrazzo",
      "Can also be used as a stool"
    ],
    specs: { "Type": "Side Table", "Colour": "White", "Material": "MgO (Magnesium Oxide)" },
    dims: { w: 40, d: 40, h: 47, unit: "cm", printed: true },
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight. Max recommended weight 100kg." },

  { id: "cc093", name: "Stone-Look Side Table 37cm, White", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11155", tag: "New", ph: "", img: "assets/products/cc093-1.webp",
    imgs: ["assets/products/cc093-1.webp", "assets/products/cc093-2.webp", "assets/products/cc093-3.webp", "assets/products/cc093-4.webp", "assets/products/cc093-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 37cm wide, 37cm deep and 43cm high. MgO (Magnesium Oxide). Crafted from high-quality MgO, the Castello Side Table offers both aesthetic beauty and long-lasting durability. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "Crafted from high-quality MgO, the Castello Side Table offers both aesthetic beauty and long-lasting durability",
      "Water-based painted finish",
      "Can also be used as a stool"
    ],
    specs: { "Type": "Side Table", "Colour": "White", "Material": "MgO (Magnesium Oxide)" },
    dims: { w: 37, d: 37, h: 43, unit: "cm", printed: true },
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight. Max recommended weight 100kg." },

  { id: "cc094", name: "Side Table 40cm, Off-White", cat: "Living Room", room: "Living Room", price: 160, memberPrice: 144, sku: "SH-11156", tag: "New", ph: "", img: "assets/products/cc094-1.webp",
    imgs: ["assets/products/cc094-1.webp", "assets/products/cc094-2.webp", "assets/products/cc094-3.webp", "assets/products/cc094-4.webp", "assets/products/cc094-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 50cm high. MDF with lacquer finish. Cylindrical base adds a clean, structural shape. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Cylindrical base adds a clean, structural shape",
      "Off-white finish brings a light, neutral tone to your space",
      "Works well beside sofas, beds, or occasional seating"
    ],
    specs: { "Type": "Side Table", "Colour": "Off-White", "Material": "MDF with lacquer finish" },
    dims: { w: 40, d: 40, h: 50, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc095", name: "Metal Round Side Table 45cm, Mocha", cat: "Living Room", room: "Living Room", price: 197, memberPrice: 177, sku: "SH-11157", tag: "New", ph: "", img: "assets/products/cc095-1.webp",
    imgs: ["assets/products/cc095-1.webp", "assets/products/cc095-2.webp", "assets/products/cc095-3.webp", "assets/products/cc095-4.webp", "assets/products/cc095-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 45cm wide, 45cm deep and 45cm high. Powder-coated iron top and base. Mocha finish adds warmth and contrast to your space. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Mocha finish adds warmth and contrast to your space",
      "Simple cylinder-style base with clean, round top",
      "Durable surface suited to daily use beside lounges, beds, or entryways"
    ],
    specs: { "Type": "Side Table", "Colour": "Mocha", "Material": "Powder-coated iron top and base" },
    dims: { w: 45, d: 45, h: 45, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc096", name: "Marble-Look Side Table 30cm, White", cat: "Living Room", room: "Living Room", price: 185, memberPrice: 166, sku: "SH-11158", tag: "New", ph: "", img: "assets/products/cc096-1.webp",
    imgs: ["assets/products/cc096-1.webp", "assets/products/cc096-2.webp", "assets/products/cc096-3.webp", "assets/products/cc096-4.webp", "assets/products/cc096-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 30cm wide, 30cm deep and 61cm high. MGO with marble-effect hydrographic transfer finish. Tall cylindrical shape with fluted surface detailing. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Tall cylindrical shape with fluted surface detailing",
      "White marble-look finish with warm brown veining running through the surface",
      "Tonal variation across the surface creates a natural, stone-like appearance",
      "Suitable as a base for vases, sculptures, or decorative accents"
    ],
    specs: { "Type": "Side Table", "Colour": "White", "Material": "MGO with marble-effect hydrographic transfer finish" },
    dims: { w: 30, d: 30, h: 61, unit: "cm", printed: true },
    care: "Indoor use only." },

  { id: "cc097", name: "Round Side Table, Green", cat: "Living Room", room: "Living Room", price: 123, memberPrice: 110, sku: "SH-11159", tag: "New", ph: "", img: "assets/products/cc097-1.webp",
    imgs: ["assets/products/cc097-1.webp", "assets/products/cc097-2.webp", "assets/products/cc097-3.webp", "assets/products/cc097-4.webp", "assets/products/cc097-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. Round side table design. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Round side table design",
      "Two-tier structure with top surface and lower shelf",
      "Green finish that brings a fresh tone to interiors"
    ],
    specs: { "Type": "Side Table" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc098", name: "Round Side Table 40cm, Green", cat: "Living Room", room: "Living Room", price: 185, memberPrice: 166, sku: "SH-11160", tag: "New", ph: "", img: "assets/products/cc098-1.webp",
    imgs: ["assets/products/cc098-1.webp", "assets/products/cc098-2.webp", "assets/products/cc098-3.webp", "assets/products/cc098-4.webp", "assets/products/cc098-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 48cm high. MDF with lacquer finish. Round top with a soft, minimalist silhouette. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Round top with a soft, minimalist silhouette",
      "Three cylindrical legs for a sculptural, grounded base",
      "Green finish offers a fresh, nature-inspired look",
      "Compact size suits smaller spaces or layered setups"
    ],
    specs: { "Type": "Side Table", "Colour": "Green", "Material": "MDF with lacquer finish" },
    dims: { w: 40, d: 40, h: 48, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc099", name: "Metal Side Table 50cm, White", cat: "Living Room", room: "Living Room", price: 98, memberPrice: 88, sku: "SH-11161", tag: "New", ph: "", img: "assets/products/cc099-1.webp",
    imgs: ["assets/products/cc099-1.webp", "assets/products/cc099-2.webp", "assets/products/cc099-3.webp", "assets/products/cc099-4.webp", "assets/products/cc099-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 50cm wide, 35cm deep and 70cm high. MDF. Natural wood finish for a rustic and warm appearance. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Natural wood finish for a rustic and warm appearance",
      "Metal legs with a powder coat finish for a modern look",
      "Two-tier shelf design for extensive storage and display options",
      "The table’s natural colour ensures it fits seamlessly with various interior colour schemes and design aesthetics"
    ],
    specs: { "Type": "Side Table", "Colour": "White", "Material": "MDF, with a Melamine finish, and Metal with a Powder Coat Finish" },
    dims: { w: 50, d: 35, h: 70, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc100", name: "Square Side Table 40cm, Natural", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11162", tag: "New", ph: "", img: "assets/products/cc100-1.webp",
    imgs: ["assets/products/cc100-1.webp", "assets/products/cc100-2.webp", "assets/products/cc100-3.webp", "assets/products/cc100-4.webp", "assets/products/cc100-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 50cm high. MDF with a wood veneer finish. 40cm square tabletop provides space for books, drinks, or décor. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "40cm square tabletop provides space for books, drinks, or décor",
      "Vertical panel design adds subtle texture and depth",
      "Compact size fits well in different spaces",
      "Versatile use, suitable as a side table or bedside table"
    ],
    specs: { "Type": "Side Table", "Colour": "Natural", "Material": "MDF with a wood veneer finish" },
    dims: { w: 40, d: 40, h: 50, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc101", name: "Round Side Table 45cm", cat: "Living Room", room: "Living Room", price: 160, memberPrice: 144, sku: "SH-11163", tag: "New", ph: "", img: "assets/products/cc101-1.webp",
    imgs: ["assets/products/cc101-1.webp", "assets/products/cc101-2.webp", "assets/products/cc101-3.webp", "assets/products/cc101-4.webp", "assets/products/cc101-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 45cm wide, 38cm deep and 50cm high. MDF with lacquer finish. Round top surface for placing drinks, books, or decor. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Round top surface for placing drinks, books, or decor",
      "Tapered base adds subtle shape while keeping it grounded",
      "Maple sugar finish gives a gentle, earthy tone",
      "Easy to pair with other natural or neutral furnishings"
    ],
    specs: { "Type": "Side Table", "Colour": "Maple Sugar", "Material": "MDF with lacquer finish" },
    dims: { w: 45, d: 38, h: 50, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc102", name: "Metal Side Table 65cm, Black", cat: "Living Room", room: "Living Room", price: 110, memberPrice: 99, sku: "SH-11164", tag: "New", ph: "", img: "assets/products/cc102-1.webp",
    imgs: ["assets/products/cc102-1.webp", "assets/products/cc102-2.webp", "assets/products/cc102-3.webp", "assets/products/cc102-4.webp", "assets/products/cc102-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40.5cm wide, 40.5cm deep and 65cm high. Metal and MDF. The table top is made of veneer wrapped MDF. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "The table top is made of veneer wrapped MDF",
      "Durable metal frame",
      "Functional design",
      "Black powder-coated base"
    ],
    specs: { "Type": "Side Table", "Colour": "Black base, Natural woood table top", "Material": "Metal and MDF" },
    dims: { w: 40.5, d: 40.5, h: 65, unit: "cm", printed: true },
    care: "Wipe clean with a damp cloth." },

  { id: "cc103", name: "Travertine-Look Round Side Table 50cm, Oak", cat: "Living Room", room: "Living Room", price: 222, memberPrice: 199, sku: "SH-11165", tag: "New", ph: "", img: "assets/products/cc103-1.webp",
    imgs: ["assets/products/cc103-1.webp", "assets/products/cc103-2.webp", "assets/products/cc103-3.webp", "assets/products/cc103-4.webp", "assets/products/cc103-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 50cm wide, 50cm deep and 47cm high. MDF with oak melamine veneer. Round travertine-look top adds visual texture and contrast. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Round travertine-look top adds visual texture and contrast",
      "Oak and travertine finishes introduce warmth and natural character"
    ],
    specs: { "Type": "Side Table", "Colour": "Oak, Travertine", "Material": "MDF with oak melamine veneer, Travertine melamine top" },
    dims: { w: 50, d: 50, h: 47, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc104", name: "Marble-Look Side Table 37cm, Green", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11166", tag: "New", ph: "", img: "assets/products/cc104-1.webp",
    imgs: ["assets/products/cc104-1.webp", "assets/products/cc104-2.webp", "assets/products/cc104-3.webp", "assets/products/cc104-4.webp", "assets/products/cc104-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 37cm wide, 37cm deep and 46cm high. Magnesium Oxide (MgO). Sturdy design. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Sturdy design",
      "Unique 3-leaf clover shape for a modern look",
      "Smooth, polished finish that resembles natural marble",
      "Neutral tones that blend well with various décor styles",
      "Stylish shape that enhances room aesthetics"
    ],
    specs: { "Type": "Side Table", "Colour": "Green", "Material": "Magnesium Oxide (MgO)" },
    dims: { w: 37, d: 37, h: 46, unit: "cm", printed: true },
    boxContents: ["1x Side Table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc105", name: "Travertine-Look Stool Round Side Table 38cm", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11167", tag: "New", ph: "", img: "assets/products/cc105-1.webp",
    imgs: ["assets/products/cc105-1.webp", "assets/products/cc105-2.webp", "assets/products/cc105-3.webp", "assets/products/cc105-4.webp", "assets/products/cc105-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 38cm wide, 38cm deep and 45cm high. MgO with hydrographics transfer printing. Rounded cylindrical shape with a softly curved top for a sculptural look. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Rounded cylindrical shape with a softly curved top for a sculptural look",
      "Travertine-look finish created with hydrographics transfer printing",
      "Made from lightweight yet strong MgO material",
      "Functions as a side table, stool, or decorative piece",
      "Neutral tones to complement various interior styles",
      "Comes fully assembled for immediate use"
    ],
    specs: { "Type": "Side Table", "Colour": "Travertine", "Material": "MgO with hydrographics transfer printing" },
    dims: { w: 38, d: 38, h: 45, unit: "cm", printed: true },
    boxContents: ["1x Side Table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc106", name: "Terrazzo Stool Round Side Table 46cm, White", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11168", tag: "New", ph: "", img: "assets/products/cc106-1.webp",
    imgs: ["assets/products/cc106-1.webp", "assets/products/cc106-2.webp", "assets/products/cc106-3.webp", "assets/products/cc106-4.webp", "assets/products/cc106-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 31cm wide, 31cm deep and 45cm high. Terrazzo. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Solid, stable build",
      "Wipe-clean surface",
      "Flat-packed for delivery"
    ],
    specs: { "Type": "Side Table", "Shape": "Round", "Material": "Terrazzo" },
    dims: { w: 31, d: 31, h: 45, unit: "cm", printed: true },
    boxContents: ["1x Terrazzo side table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc107", name: "Marble-Look Plinth Round Side Table 30cm, Red", cat: "Living Room", room: "Living Room", price: 185, memberPrice: 166, sku: "SH-11169", tag: "New", ph: "", img: "assets/products/cc107-1.webp",
    imgs: ["assets/products/cc107-1.webp", "assets/products/cc107-2.webp", "assets/products/cc107-3.webp", "assets/products/cc107-4.webp", "assets/products/cc107-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 30cm wide, 30cm deep and 46cm high. MgO with water transfer marble-look print finish. Stacked, rounded design creates a sculptural focal point. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "Stacked, rounded design creates a sculptural focal point",
      "Marble-look surface offers stone-like texture in a lightweight form"
    ],
    specs: { "Type": "Side Table", "Colour": "Red", "Material": "MgO with water transfer marble-look print finish" },
    dims: { w: 30, d: 30, h: 46, unit: "cm", printed: true },
    care: "Indoor use only." },

  { id: "cc108", name: "Marble & Metal Side Table 45cm, White", cat: "Living Room", room: "Living Room", price: 197, memberPrice: 177, sku: "SH-11170", tag: "New", ph: "", img: "assets/products/cc108-1.webp",
    imgs: ["assets/products/cc108-1.webp", "assets/products/cc108-2.webp", "assets/products/cc108-3.webp", "assets/products/cc108-4.webp", "assets/products/cc108-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 43.4cm wide, 42.7cm deep and 51cm high. Natural marble top. Natural marble top with unique veining. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "Natural marble top with unique veining",
      "Nickel-finished frame for a polished, metallic contrast",
      "Each marble top features natural pattern variation, making every table one of a kind"
    ],
    specs: { "Type": "Side Table", "Colour": "White", "Material": "Natural marble top, Nickel-finished, Metal legs" },
    dims: { w: 43.4, d: 42.7, h: 51, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc109", name: "Timber Side Table 40cm, Clay", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11171", tag: "New", ph: "", img: "assets/products/cc109-1.webp",
    imgs: ["assets/products/cc109-1.webp", "assets/products/cc109-2.webp", "assets/products/cc109-3.webp", "assets/products/cc109-4.webp", "assets/products/cc109-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 45cm high. MDF with gloss finish. Curved, sculptural silhouette with wide-profile legs. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Curved, sculptural silhouette with wide-profile legs",
      "Glossy Clay finish",
      "Smooth tabletop is ideal for styling decor, placing a lamp, or keeping essentials within reach"
    ],
    specs: { "Type": "Side Table", "Colour": "Clay", "Material": "MDF with gloss finish, Acacia timber legs" },
    dims: { w: 40, d: 40, h: 45, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc110", name: "Travertine-Look Side Table 38cm, Grey", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11172", tag: "New", ph: "", img: "assets/products/cc110-1.webp",
    imgs: ["assets/products/cc110-1.webp", "assets/products/cc110-2.webp", "assets/products/cc110-3.webp", "assets/products/cc110-4.webp", "assets/products/cc110-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 38cm wide, 38cm deep and 50cm high. MGO with travertine-effect hydrographic transfer finish. Sculptural fluted column form with a wider top surface. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "Sculptural fluted column form with a wider top surface",
      "Travertine-effect finish with natural-effect veining and tonal variation",
      "Fully assembled - no tools required"
    ],
    specs: { "Type": "Side Table", "Colour": "Grey", "Material": "MGO with travertine-effect hydrographic transfer finish" },
    dims: { w: 38, d: 38, h: 50, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc111", name: "Burl-Look Plinth Round Side Table 70cm", cat: "Living Room", room: "Living Room", price: 308, memberPrice: 277, sku: "SH-11173", tag: "New", ph: "", img: "assets/products/cc111-1.webp",
    imgs: ["assets/products/cc111-1.webp", "assets/products/cc111-2.webp", "assets/products/cc111-3.webp", "assets/products/cc111-4.webp", "assets/products/cc111-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 36cm wide, 36cm deep and 70.5cm high. MgO (Magnesium Oxide) with burl-effect hydrographic transfer. Burl-look, rounded shape. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "Burl-look, rounded shape",
      "Neutral tone complements a range of interior palettes",
      "Lightweight design makes it easy to reposition",
      "Lightweight design for easy repositioning"
    ],
    specs: { "Type": "Side Table", "Colour": "Burl", "Material": "MgO (Magnesium Oxide) with burl-effect hydrographic transfer" },
    dims: { w: 36, d: 36, h: 70.5, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc112", name: "Metal Arched Side Table 52cm, Black", cat: "Living Room", room: "Living Room", price: 160, memberPrice: 144, sku: "SH-11174", tag: "New", ph: "", img: "assets/products/cc112-1.webp",
    imgs: ["assets/products/cc112-1.webp", "assets/products/cc112-2.webp", "assets/products/cc112-3.webp", "assets/products/cc112-4.webp", "assets/products/cc112-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. Open-front design with subtle arch detailing. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Open-front design with subtle arch detailing",
      "Open access makes it easy to reach and store frequently used items",
      "Adjustable feet for better stability on uneven floors",
      "Compact size ideal for small spaces"
    ],
    specs: { "Type": "Side Table" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc113", name: "Marble-Look Side Table 46cm, Red", cat: "Living Room", room: "Living Room", price: 308, memberPrice: 277, sku: "SH-11175", tag: "New", ph: "", img: "assets/products/cc113-1.webp",
    imgs: ["assets/products/cc113-1.webp", "assets/products/cc113-2.webp", "assets/products/cc113-3.webp", "assets/products/cc113-4.webp", "assets/products/cc113-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 46cm wide, 46cm deep and 48cm high. MGO with marble-effect hydrographic transfer finish. Wide block form with fluted surface detailing and a flat top. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Wide block form with fluted surface detailing and a flat top",
      "Deep red marble-look finish with dark veining running through the surface",
      "Tonal variation across the surface creates a natural, stone-like appearance",
      "Suitable as a side table or base for vases, sculptures, or decorative accents",
      "Fully assembled - no tools required"
    ],
    specs: { "Type": "Side Table", "Colour": "Red", "Material": "MGO with marble-effect hydrographic transfer finish" },
    dims: { w: 46, d: 46, h: 48, unit: "cm", printed: true },
    care: "Indoor use only." },

  { id: "cc114", name: "Timber Side Table 40cm, Cream", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11176", tag: "New", ph: "", img: "assets/products/cc114-1.webp",
    imgs: ["assets/products/cc114-1.webp", "assets/products/cc114-2.webp", "assets/products/cc114-3.webp", "assets/products/cc114-4.webp", "assets/products/cc114-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 45cm high. MDF with gloss finish. Curved, sculptural silhouette with wide-profile legs. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "Curved, sculptural silhouette with wide-profile legs",
      "Glossy cream finish",
      "Smooth tabletop is ideal for styling decor, placing a lamp, or keeping essentials within reach"
    ],
    specs: { "Type": "Side Table", "Colour": "Cream", "Material": "MDF with gloss finish, Acacia timber legs" },
    dims: { w: 40, d: 40, h: 45, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc115", name: "Metal Side Tables, Set of 2 · White", cat: "Living Room", room: "Living Room", price: 223, memberPrice: 200, sku: "SH-11177", tag: "New", ph: "", img: "assets/products/cc115-1.webp",
    imgs: ["assets/products/cc115-1.webp", "assets/products/cc115-2.webp", "assets/products/cc115-3.webp", "assets/products/cc115-4.webp", "assets/products/cc115-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 35cm wide, 35cm deep and 35cm high. MDF with a melamine finish. Set of two nesting tables for flexible arrangement. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Set of two nesting tables for flexible arrangement",
      "Space-saving design, smaller table tucks neatly under the larger one",
      "Suitable for living rooms, bedrooms, or lounge areas"
    ],
    specs: { "Type": "Side Table", "Colour": "White & Natural", "Material": "MDF with a melamine finish, Metal" },
    dims: { w: 35, d: 35, h: 35, unit: "cm", printed: true },
    boxContents: ["1x Side table set", "1x Assembly Instructions"],
    care: "Wipe clean with a damp cloth. Large table max load: 40kg; small table max load: 20kg." },

  { id: "cc116", name: "Marble-Look Side Table 35cm, Brown", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11178", tag: "New", ph: "", img: "assets/products/cc116-1.webp",
    imgs: ["assets/products/cc116-1.webp", "assets/products/cc116-2.webp", "assets/products/cc116-3.webp", "assets/products/cc116-4.webp", "assets/products/cc116-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 35cm wide, 35cm deep and 40cm high. MgO with water transfer marble-look print finish. Cylindrical shape introduces a sculptural accent to any room. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Cylindrical shape introduces a sculptural accent to any room",
      "Marble-look finish replicates natural stone in a lighter form",
      "Compact size suitable beside sofas, armchairs, or beds"
    ],
    specs: { "Type": "Side Table", "Colour": "Brown", "Material": "MgO with water transfer marble-look print finish" },
    dims: { w: 35, d: 35, h: 40, unit: "cm", printed: true },
    care: "Indoor use only." },

  { id: "cc117", name: "Metal Side Table 57cm, Black", cat: "Living Room", room: "Living Room", price: 110, memberPrice: 99, sku: "SH-11179", tag: "New", ph: "", img: "assets/products/cc117-1.webp",
    imgs: ["assets/products/cc117-1.webp", "assets/products/cc117-2.webp", "assets/products/cc117-3.webp", "assets/products/cc117-4.webp", "assets/products/cc117-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 39.5cm wide, 28.5cm deep and 57cm high. Metal and MDF. The table top is made of veneer wrapped MDF. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "The table top is made of veneer wrapped MDF",
      "Durable metal frame",
      "Functional design",
      "Black powder-coated base"
    ],
    specs: { "Type": "Side Table", "Colour": "Black base, Natural woood table top", "Material": "Metal and MDF" },
    dims: { w: 39.5, d: 28.5, h: 57, unit: "cm", printed: true },
    care: "Wipe clean with a damp cloth." },

  { id: "cc118", name: "Marble-Look Stool Round Side Table 38cm, Green", cat: "Living Room", room: "Living Room", price: 234, memberPrice: 210, sku: "SH-11180", tag: "New", ph: "", img: "assets/products/cc118-1.webp",
    imgs: ["assets/products/cc118-1.webp", "assets/products/cc118-2.webp", "assets/products/cc118-3.webp", "assets/products/cc118-4.webp", "assets/products/cc118-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 38cm wide, 38cm deep and 45cm high. MgO with hydrographics transfer printing. Rounded cylindrical shape with a softly curved top for a sculptural look. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Rounded cylindrical shape with a softly curved top for a sculptural look",
      "Marble-look finish created with hydrographics transfer printing",
      "Made from lightweight yet strong MgO material",
      "Functions as a side table, stool, or decorative piece",
      "Comes fully assembled for immediate use"
    ],
    specs: { "Type": "Side Table", "Colour": "Green", "Material": "MgO with hydrographics transfer printing" },
    dims: { w: 38, d: 38, h: 45, unit: "cm", printed: true },
    boxContents: ["1x Side Table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc119", name: "Round Side Table 35cm", cat: "Living Room", room: "Living Room", price: 185, memberPrice: 166, sku: "SH-11181", tag: "New", ph: "", img: "assets/products/cc119-1.webp",
    imgs: ["assets/products/cc119-1.webp", "assets/products/cc119-2.webp", "assets/products/cc119-3.webp", "assets/products/cc119-4.webp", "assets/products/cc119-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 35cm wide, 35cm deep and 50cm high. MDF with rolling veneer. Hexagonal shape adds visual interest and modern structure. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Hexagonal shape adds visual interest and modern structure",
      "Open shelf design offers space for books, decor, or essentials",
      "Chamfered edges on top and side panels for a refined finish",
      "Straight-edge bottom shelf keeps the look grounded",
      "Finished in a deep merlot tone for a bold, stylish accent"
    ],
    specs: { "Type": "Side Table", "Colour": "Merlot", "Material": "MDF with rolling veneer" },
    dims: { w: 35, d: 35, h: 50, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc120", name: "Metal Round Side Table 40cm, Black", cat: "Living Room", room: "Living Room", price: 148, memberPrice: 133, sku: "SH-11182", tag: "New", ph: "", img: "assets/products/cc120-1.webp",
    imgs: ["assets/products/cc120-1.webp", "assets/products/cc120-2.webp", "assets/products/cc120-3.webp", "assets/products/cc120-4.webp", "assets/products/cc120-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 65cm high. MDF with a melamine finish. 40cm round tabletop provides space for essentials. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "40cm round tabletop provides space for essentials",
      "Lower shelf offers additional storage for books and décor",
      "Paper rope detailing adds texture and visual interest",
      "Compact design fits well in different spaces",
      "Versatile style suits modern and contemporary interiors"
    ],
    specs: { "Type": "Side Table", "Colour": "Black", "Material": "MDF with a melamine finish , Paper Rope , Metal" },
    dims: { w: 40, d: 40, h: 65, unit: "cm", printed: true },
    care: "Wipe clean with a dry cloth. Avoid strong chemical cleaners." },

  { id: "cc121", name: "Bamboo Round Side Table 45cm, Black", cat: "Living Room", room: "Living Room", price: 149, memberPrice: 134, sku: "SH-11183", tag: "New", ph: "", img: "assets/products/cc121-1.webp",
    imgs: ["assets/products/cc121-1.webp", "assets/products/cc121-2.webp", "assets/products/cc121-3.webp", "assets/products/cc121-4.webp", "assets/products/cc121-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 45cm wide, 45cm deep and 50cm high. Bamboo. Surrounding the table are bamboo panels with unique gaps in them, adding a touch of elegance to the design. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Surrounding the table are bamboo panels with unique gaps in them, adding a touch of elegance to the design",
      "Crafted from a combination of MDF, melamine, and bamboo, this side table is built to last and can withstand daily use"
    ],
    specs: { "Type": "Side Table", "Colour": "Black", "Material": "Bamboo, MDF, Melamine" },
    dims: { w: 45, d: 45, h: 50, unit: "cm", printed: true },
    care: "Wipe clean with a damp cloth." },

  { id: "cc122", name: "Timber Side Table 40cm, Green", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11184", tag: "New", ph: "", img: "assets/products/cc122-1.webp",
    imgs: ["assets/products/cc122-1.webp", "assets/products/cc122-2.webp", "assets/products/cc122-3.webp", "assets/products/cc122-4.webp", "assets/products/cc122-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 45cm high. MDF with gloss finish. Curved, sculptural silhouette with wide-profile legs. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "Curved, sculptural silhouette with wide-profile legs",
      "Glossy Green finish",
      "Smooth tabletop is ideal for styling decor, placing a lamp, or keeping essentials within reach"
    ],
    specs: { "Type": "Side Table", "Colour": "Green", "Material": "MDF with gloss finish, Acacia timber legs" },
    dims: { w: 40, d: 40, h: 45, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc123", name: "Rattan Storage Side Table 60cm, Natural", cat: "Living Room", room: "Living Room", price: 222, memberPrice: 199, sku: "SH-11185", tag: "New", ph: "", img: "assets/products/cc123-1.webp",
    imgs: ["assets/products/cc123-1.webp", "assets/products/cc123-2.webp", "assets/products/cc123-3.webp", "assets/products/cc123-4.webp", "assets/products/cc123-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 60cm wide, 37cm deep and 45cm high. Plywood and Rattan. Wave-inspired shape for a modern and organic look. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Wave-inspired shape for a modern and organic look",
      "Built-in storage to keep essentials neatly tucked away",
      "Crafted from plywood and rattan for a natural aesthetic",
      "Versatile design suits living rooms, bedrooms, and reading nooks",
      "Comes fully assembled for immediate use"
    ],
    specs: { "Type": "Side Table", "Colour": "Natural wood finish", "Material": "Plywood and Rattan" },
    dims: { w: 60, d: 37, h: 45, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc124", name: "Marble-Look Side Table 38cm, Red", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11186", tag: "New", ph: "", img: "assets/products/cc124-1.webp",
    imgs: ["assets/products/cc124-1.webp", "assets/products/cc124-2.webp", "assets/products/cc124-3.webp", "assets/products/cc124-4.webp", "assets/products/cc124-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 38cm wide, 38cm deep and 50cm high. MGO. Sculptural fluted column form with a wider top surface. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Sculptural fluted column form with a wider top surface",
      "Red marble-effect finish with natural-effect veining",
      "Fully assembled - no tools required"
    ],
    specs: { "Type": "Side Table", "Colour": "Red Marble Look", "Material": "MGO" },
    dims: { w: 38, d: 38, h: 50, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc125", name: "Round Side Table 57cm, White", cat: "Living Room", room: "Living Room", price: 160, memberPrice: 144, sku: "SH-11187", tag: "New", ph: "", img: "assets/products/cc125-1.webp",
    imgs: ["assets/products/cc125-1.webp", "assets/products/cc125-2.webp", "assets/products/cc125-3.webp", "assets/products/cc125-4.webp", "assets/products/cc125-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. Scalloped apron adds a soft, playful detail to the design. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Scalloped apron adds a soft, playful detail to the design",
      "15mm MDF with a smooth UV-painted finish for a crisp, clean look",
      "Solid pine wood legs (45mm diameter), painted to match",
      "Lower shelf provides space for books, baskets, or display items",
      "Rounded legs and smooth edges for a softened silhouette",
      "Eco-friendly packaging"
    ],
    specs: { "Type": "Side Table" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc126", name: "Metal Arched Side Table 75cm, White", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11188", tag: "New", ph: "", img: "assets/products/cc126-1.webp",
    imgs: ["assets/products/cc126-1.webp", "assets/products/cc126-2.webp", "assets/products/cc126-3.webp", "assets/products/cc126-4.webp", "assets/products/cc126-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 80.5cm across. Metal. White metal frame with ribbed glass doors for a contemporary, sophisticated look. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "White metal frame with ribbed glass doors for a contemporary, sophisticated look",
      "Two spacious shelves and a metal divider keep your belongings organised and accessible",
      "Opaque glass arched Door Detailing adds a unique and stylish visual element to any room"
    ],
    specs: { "Type": "Side Table", "Colour": "White", "Material": "Metal" },
    care: "Wipe with damp cloth once assembled. WARNING:. Children have died from furniture tipover. ALWAYS secure this furniture with an anchor device." },

  { id: "cc127", name: "Metal Round Side Table 45cm, Black", cat: "Living Room", room: "Living Room", price: 197, memberPrice: 177, sku: "SH-11189", tag: "New", ph: "", img: "assets/products/cc127-1.webp",
    imgs: ["assets/products/cc127-1.webp", "assets/products/cc127-2.webp", "assets/products/cc127-3.webp", "assets/products/cc127-4.webp", "assets/products/cc127-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 42cm wide, 42cm deep and 51cm high. Metal Frame. 45cm round tabletop provides space for essentials like books, drinks, or decor. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "45cm round tabletop provides space for essentials like books, drinks, or decor",
      "Edge protection design to prevent objects from falling",
      "Features anti-slip adjustable foot pads to prevent scratches on the floor, and easy adjustments for added stability"
    ],
    specs: { "Type": "Side Table", "Colour": "Black", "Material": "Metal Frame, MDF Veneer Tray" },
    dims: { w: 42, d: 42, h: 51, unit: "cm", printed: true },
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull." },

  { id: "cc128", name: "Stone-Look Round Side Table 35cm, Grey", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11190", tag: "New", ph: "", img: "assets/products/cc128-1.webp",
    imgs: ["assets/products/cc128-1.webp", "assets/products/cc128-2.webp", "assets/products/cc128-3.webp", "assets/products/cc128-4.webp", "assets/products/cc128-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 35cm wide, 35cm deep and 45cm high. Magnesium Oxide (MgO). Circular shape with intricate line detailing for a sophisticated look. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Circular shape with intricate line detailing for a sophisticated look",
      "Smooth, polished finish that mimics natural travertine",
      "Neutral tones that complement various interior décor styles",
      "Stylish design enhances the aesthetic appeal of any room"
    ],
    specs: { "Type": "Side Table", "Shape": "Round", "Colour": "Grey", "Material": "Magnesium Oxide (MgO)", "Weight": "10.7kg" },
    dims: { w: 35, d: 35, h: 45, unit: "cm", printed: true },
    boxContents: ["1x Stool"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc129", name: "Metal Round Side Table 45 × 45 × 45 × 45 × 45cm 48cm high, Birch", cat: "Living Room", room: "Living Room", price: 209, memberPrice: 188, sku: "SH-11191", tag: "New", ph: "", img: "assets/products/cc129-1.webp",
    imgs: ["assets/products/cc129-1.webp", "assets/products/cc129-2.webp", "assets/products/cc129-3.webp", "assets/products/cc129-4.webp", "assets/products/cc129-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 45cm wide, 45cm deep and 48cm high. Powder-coated iron top and legs. Square tabletop with rounded corners for a softer look. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Square tabletop with rounded corners for a softer look",
      "White finish adds a subtle colour accent"
    ],
    specs: { "Type": "Side Table", "Colour": "Birch", "Material": "Powder-coated iron top and legs" },
    dims: { w: 45, d: 45, h: 48, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc130", name: "Ash Round Side Table 40cm, Natural", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11192", tag: "New", ph: "", img: "assets/products/cc130-1.webp",
    imgs: ["assets/products/cc130-1.webp", "assets/products/cc130-2.webp", "assets/products/cc130-3.webp", "assets/products/cc130-4.webp", "assets/products/cc130-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 45cm high. MDF with Ash veneer. Round tabletop with soft, rounded edges. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Round tabletop with soft, rounded edges",
      "Three-leg base design",
      "Natural finish enhances the warmth of your space"
    ],
    specs: { "Type": "Side Table", "Colour": "Natural", "Material": "MDF with Ash veneer, Rubberwood legs" },
    dims: { w: 40, d: 40, h: 45, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc131", name: "Nesting Side Tables, Set of 3 · Oak", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11193", tag: "New", ph: "", img: "assets/products/cc131-1.webp",
    imgs: ["assets/products/cc131-1.webp", "assets/products/cc131-2.webp", "assets/products/cc131-3.webp", "assets/products/cc131-4.webp", "assets/products/cc131-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. MDF with oak laminated paper finish. Set of three tables designed to nest together when not in use. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Set of three tables designed to nest together when not in use",
      "Graduated sizing allows compact storage or expanded surface use",
      "Block-style form with open side profile",
      "Flat top surfaces suitable for everyday items",
      "Can be arranged as a group or used individually"
    ],
    specs: { "Type": "Side Table", "Colour": "Oak", "Material": "MDF with oak laminated paper finish" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc132", name: "Round Side Table 42cm, Black", cat: "Living Room", room: "Living Room", price: 185, memberPrice: 166, sku: "SH-11194", tag: "New", ph: "", img: "assets/products/cc132-1.webp",
    imgs: ["assets/products/cc132-1.webp", "assets/products/cc132-2.webp", "assets/products/cc132-3.webp", "assets/products/cc132-4.webp", "assets/products/cc132-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 42cm wide, 42cm deep and 50cm high. MDF with black laminated paper finish. Round tabletop suitable for decor, books, or everyday items. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Round tabletop suitable for decor, books, or everyday items",
      "Unique sculptural base adds a strong visual element",
      "Black finish provides a clean and defined look",
      "Compact size suitable for living rooms, bedrooms, or reading corners"
    ],
    specs: { "Type": "Side Table", "Colour": "Black", "Material": "MDF with black laminated paper finish" },
    dims: { w: 42, d: 42, h: 50, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc133", name: "Stone-Look Stool Side Table 38cm, White", cat: "Living Room", room: "Living Room", price: 234, memberPrice: 210, sku: "SH-11195", tag: "New", ph: "", img: "assets/products/cc133-1.webp",
    imgs: ["assets/products/cc133-1.webp", "assets/products/cc133-2.webp", "assets/products/cc133-3.webp", "assets/products/cc133-4.webp", "assets/products/cc133-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 38cm wide, 38cm deep and 45cm high. MgO with a white textured finish. Cylindrical shape with a softly curved top for a sculptural, modern aesthetic. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Cylindrical shape with a softly curved top for a sculptural, modern aesthetic",
      "White textured finish for a clean, contemporary look",
      "Multifunctional as a side table, stool, or decorative accent",
      "Neutral colour complements various interior styles",
      "Fully assembled for immediate use"
    ],
    specs: { "Type": "Side Table", "Colour": "White", "Material": "MgO with a white textured finish" },
    dims: { w: 38, d: 38, h: 45, unit: "cm", printed: true },
    boxContents: ["1x Side Table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc134", name: "Terrazzo Stool Round Side Table 56cm, White", cat: "Living Room", room: "Living Room", price: 345, memberPrice: 310, sku: "SH-11196", tag: "New", ph: "", img: "assets/products/cc134-1.webp",
    imgs: ["assets/products/cc134-1.webp", "assets/products/cc134-2.webp", "assets/products/cc134-3.webp", "assets/products/cc134-4.webp", "assets/products/cc134-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 42cm wide, 42cm deep and 56cm high. Terrazzo. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Solid, stable build",
      "Wipe-clean surface",
      "Flat-packed for delivery"
    ],
    specs: { "Type": "Side Table", "Shape": "Round", "Material": "Terrazzo" },
    dims: { w: 42, d: 42, h: 56, unit: "cm", printed: true },
    boxContents: ["1x Terrazzo side table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc135", name: "Burl-Look Round Side Table 40cm", cat: "Living Room", room: "Living Room", price: 160, memberPrice: 144, sku: "SH-11197", tag: "New", ph: "", img: "assets/products/cc135-1.webp",
    imgs: ["assets/products/cc135-1.webp", "assets/products/cc135-2.webp", "assets/products/cc135-3.webp", "assets/products/cc135-4.webp", "assets/products/cc135-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 51cm high. MDF with burl wood-look laminated finish. Circular tabletop creates a balanced and minimal profile. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Circular tabletop creates a balanced and minimal profile",
      "Burl wood-look finish introduces natural texture and visual depth",
      "Compact size suitable for lounge areas, bedsides, or reading spaces"
    ],
    specs: { "Type": "Side Table", "Colour": "Burl", "Material": "MDF with burl wood-look laminated finish" },
    dims: { w: 40, d: 40, h: 51, unit: "cm", printed: true },
    care: "Indoor use only." },

  { id: "cc136", name: "Marble-Look Side Table 35cm, Green", cat: "Living Room", room: "Living Room", price: 370, memberPrice: 333, sku: "SH-11198", tag: "New", ph: "", img: "assets/products/cc136-1.webp",
    imgs: ["assets/products/cc136-1.webp", "assets/products/cc136-2.webp", "assets/products/cc136-3.webp", "assets/products/cc136-4.webp", "assets/products/cc136-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 35cm wide, 35cm deep and 50cm high. Natural marble. Cylindrical side table design with a solid, block form. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Cylindrical side table design with a solid, block form",
      "Green marble finish with natural veining variation",
      "Suitable for use as a side table or occasional table"
    ],
    specs: { "Type": "Side Table", "Colour": "Green", "Material": "Natural marble" },
    dims: { w: 35, d: 35, h: 50, unit: "cm", printed: true },
    care: "Natural marble veining and colour variation will occur between pieces." },

  { id: "cc137", name: "Arched Side Table 35cm, Grey", cat: "Living Room", room: "Living Room", price: 185, memberPrice: 166, sku: "SH-11199", tag: "New", ph: "", img: "assets/products/cc137-1.webp",
    imgs: ["assets/products/cc137-1.webp", "assets/products/cc137-2.webp", "assets/products/cc137-3.webp", "assets/products/cc137-4.webp", "assets/products/cc137-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 35cm wide, 35cm deep and 50cm high. MDF with rolling veneer. Hexagonal shape adds a unique, architectural feel. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Hexagonal shape adds a unique, architectural feel",
      "Open shelf provides practical space for books or decorative items",
      "Chamfered edges on the top and side panels for a refined look",
      "Straight-edge bottom shelf adds stability and contrast",
      "Soft Grey finish"
    ],
    specs: { "Type": "Side Table", "Colour": "Grey", "Material": "MDF with rolling veneer" },
    dims: { w: 35, d: 35, h: 50, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc138", name: "Terrazzo Side Table 48cm, Black", cat: "Living Room", room: "Living Room", price: 222, memberPrice: 199, sku: "SH-11200", tag: "New", ph: "", img: "assets/products/cc138-1.webp",
    imgs: ["assets/products/cc138-1.webp", "assets/products/cc138-2.webp", "assets/products/cc138-3.webp", "assets/products/cc138-4.webp", "assets/products/cc138-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 49cm wide, 49cm deep and 47cm high. Terrazzo. A versatile and stylish piece that functions as a side table, plant stand, or decorative accent. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "A versatile and stylish piece that functions as a side table, plant stand, or decorative accent"
    ],
    specs: { "Type": "Side Table", "Colour": "Black base, Multi Terazzo Top", "Material": "Terrazzo, Oak" },
    dims: { w: 49, d: 49, h: 47, unit: "cm", printed: true },
    boxContents: ["1x Terrazzo side table", "1x Assembly Instructions"],
    care: "Wipe with damp cloth." },

  { id: "cc139", name: "Metal Round Side Table 45cm", cat: "Living Room", room: "Living Room", price: 209, memberPrice: 188, sku: "SH-11201", tag: "New", ph: "", img: "assets/products/cc139-1.webp",
    imgs: ["assets/products/cc139-1.webp", "assets/products/cc139-2.webp", "assets/products/cc139-3.webp", "assets/products/cc139-4.webp", "assets/products/cc139-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 45cm wide, 45cm deep and 48cm high. Powder-coated iron top and legs. Square tabletop with rounded corners for a softer look. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Square tabletop with rounded corners for a softer look",
      "Green finish adds a subtle colour accent"
    ],
    specs: { "Type": "Side Table", "Colour": "Olive", "Material": "Powder-coated iron top and legs" },
    dims: { w: 45, d: 45, h: 48, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc140", name: "Side Table 50cm, Birch", cat: "Living Room", room: "Living Room", price: 222, memberPrice: 199, sku: "SH-11202", tag: "New", ph: "", img: "assets/products/cc140-1.webp",
    imgs: ["assets/products/cc140-1.webp", "assets/products/cc140-2.webp", "assets/products/cc140-3.webp", "assets/products/cc140-4.webp", "assets/products/cc140-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 50cm wide, 50cm deep and 46cm high. MDF with painted finish. Softly shaped tabletop adds a subtle, organic form. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Softly shaped tabletop adds a subtle, organic form",
      "White painted finish creates a light and balanced appearance",
      "Suitable for displaying decor, lamps, or small essentials"
    ],
    specs: { "Type": "Side Table", "Colour": "Birch", "Material": "MDF with painted finish" },
    dims: { w: 50, d: 50, h: 46, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc141", name: "Metal Arched Side Table 52cm, White", cat: "Living Room", room: "Living Room", price: 160, memberPrice: 144, sku: "SH-11203", tag: "New", ph: "", img: "assets/products/cc141-1.webp",
    imgs: ["assets/products/cc141-1.webp", "assets/products/cc141-2.webp", "assets/products/cc141-3.webp", "assets/products/cc141-4.webp", "assets/products/cc141-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. Open-front design with subtle arch detailing. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Open-front design with subtle arch detailing",
      "Open access makes it easy to reach and store frequently used items",
      "Adjustable feet for better stability on uneven floors",
      "Compact size ideal for small spaces"
    ],
    specs: { "Type": "Side Table" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc142", name: "Square Side Table 40cm, White", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11204", tag: "New", ph: "", img: "assets/products/cc142-1.webp",
    imgs: ["assets/products/cc142-1.webp", "assets/products/cc142-2.webp", "assets/products/cc142-3.webp", "assets/products/cc142-4.webp", "assets/products/cc142-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 50cm high. MDF with a wood veneer finish. 40cm square tabletop provides space for books, drinks, or décor. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "40cm square tabletop provides space for books, drinks, or décor",
      "Vertical panel design adds subtle texture and depth",
      "Compact size fits well in different spaces",
      "Versatile use, suitable as a side table or bedside table"
    ],
    specs: { "Type": "Side Table", "Colour": "White", "Material": "MDF with a wood veneer finish" },
    dims: { w: 40, d: 40, h: 50, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc143", name: "Bamboo Round Side Table 45cm, Natural", cat: "Living Room", room: "Living Room", price: 125, memberPrice: 112, sku: "SH-11205", tag: "New", ph: "", img: "assets/products/cc143-1.webp",
    imgs: ["assets/products/cc143-1.webp", "assets/products/cc143-2.webp", "assets/products/cc143-3.webp", "assets/products/cc143-4.webp", "assets/products/cc143-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 45cm wide, 45cm deep and 50cm high. Bamboo. Surrounding the table are bamboo panels with unique gaps in them, adding a touch of natural elegance to the design. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "Surrounding the table are bamboo panels with unique gaps in them, adding a touch of natural elegance to the design",
      "Crafted from a combination of MDF, melamine, and bamboo, this side table is built to last and can withstand daily use"
    ],
    specs: { "Type": "Side Table", "Colour": "Natural Wood", "Material": "Bamboo, MDF, Melamine" },
    dims: { w: 45, d: 45, h: 50, unit: "cm", printed: true },
    care: "Wipe clean with a damp cloth." },

  { id: "cc144", name: "Stone-Look Arched Side Table 36cm, White", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11206", tag: "New", ph: "", img: "assets/products/cc144-1.webp",
    imgs: ["assets/products/cc144-1.webp", "assets/products/cc144-2.webp", "assets/products/cc144-3.webp", "assets/products/cc144-4.webp", "assets/products/cc144-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 35.5cm wide, 37.5cm deep and 46cm high. MgO (Magnesium Oxide). This stylish versatile piece features two opposite-facing arches cut through the middle offering a unique style and potential storage space. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "This stylish versatile piece features two opposite-facing arches cut through the middle offering a unique style and potential storage space",
      "Crafted from high-quality MgO, the Brasilia Side Table offers both aesthetic beauty and long-lasting durability",
      "Water-based painted finish with the appearance of Terrazzo",
      "Can also be used as a stool"
    ],
    specs: { "Type": "Side Table", "Colour": "White", "Material": "MgO (Magnesium Oxide)" },
    dims: { w: 35.5, d: 37.5, h: 46, unit: "cm", printed: true },
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight. Max recommended weight 100kg." },

  { id: "cc145", name: "Round Side Table 48cm, Oak", cat: "Living Room", room: "Living Room", price: 222, memberPrice: 199, sku: "SH-11207", tag: "New", ph: "", img: "assets/products/cc145-1.webp",
    imgs: ["assets/products/cc145-1.webp", "assets/products/cc145-2.webp", "assets/products/cc145-3.webp", "assets/products/cc145-4.webp", "assets/products/cc145-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 48cm wide, 48cm deep and 55cm high. MDF with laminated paper finish. Round tabletop with integrated drawer for concealed storage. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Round tabletop with integrated drawer for concealed storage",
      "Cross-leg design adds structure and visual interest",
      "Oak-look laminated finish introduces natural warmth",
      "Compact size fits easily beside beds, lounges, or chairs"
    ],
    specs: { "Type": "Side Table", "Colour": "Oak", "Material": "MDF with laminated paper finish" },
    dims: { w: 48, d: 48, h: 55, unit: "cm", printed: true },
    care: "Indoor use only." },

  { id: "cc146", name: "Rattan Storage Side Table 50cm, Natural", cat: "Living Room", room: "Living Room", price: 185, memberPrice: 166, sku: "SH-11208", tag: "New", ph: "", img: "assets/products/cc146-1.webp",
    imgs: ["assets/products/cc146-1.webp", "assets/products/cc146-2.webp", "assets/products/cc146-3.webp", "assets/products/cc146-4.webp", "assets/products/cc146-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 50cm wide, 34cm deep and 39cm high. Plywood and rattan. Wave-inspired shape for a unique, organic aesthetic. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Wave-inspired shape for a unique, organic aesthetic",
      "Made from plywood and rattan for a natural, textured look",
      "Built-in storage to keep spaces tidy and organised",
      "Compact size, perfect for small spaces or as an accent table",
      "Fully assembled for immediate use"
    ],
    specs: { "Type": "Side Table", "Colour": "Natural wood finish", "Material": "Plywood and rattan" },
    dims: { w: 50, d: 34, h: 39, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc147", name: "Round Side Table 48cm, White", cat: "Living Room", room: "Living Room", price: 222, memberPrice: 199, sku: "SH-11209", tag: "New", ph: "", img: "assets/products/cc147-1.webp",
    imgs: ["assets/products/cc147-1.webp", "assets/products/cc147-2.webp", "assets/products/cc147-3.webp", "assets/products/cc147-4.webp", "assets/products/cc147-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 48cm wide, 48cm deep and 55cm high. MDF with laminated paper finish. Round tabletop with integrated drawer for concealed storage. Low enough to sit beside a sofa or a bed without crowding it. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Round tabletop with integrated drawer for concealed storage",
      "Cross-leg design adds structure and visual balance",
      "White finish brings a light and fresh appearance",
      "Compact form fits easily beside beds, lounges, or chairs"
    ],
    specs: { "Type": "Side Table", "Colour": "White", "Material": "MDF with laminated paper finish" },
    dims: { w: 48, d: 48, h: 55, unit: "cm", printed: true },
    care: "Indoor use only." },

  { id: "cc148", name: "Side Table 50cm, Green", cat: "Living Room", room: "Living Room", price: 222, memberPrice: 199, sku: "SH-11210", tag: "New", ph: "", img: "assets/products/cc148-1.webp",
    imgs: ["assets/products/cc148-1.webp", "assets/products/cc148-2.webp", "assets/products/cc148-3.webp", "assets/products/cc148-4.webp", "assets/products/cc148-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 50cm wide, 50cm deep and 46cm high. MDF with painted finish. Organic tabletop shape adds a soft, balanced profile. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Organic tabletop shape adds a soft, balanced profile",
      "Green painted finish introduces colour and contrast to interiors"
    ],
    specs: { "Type": "Side Table", "Colour": "Green", "Material": "MDF with painted finish" },
    dims: { w: 50, d: 50, h: 46, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc149", name: "Burl-Look Plinth Side Table 40cm", cat: "Living Room", room: "Living Room", price: 160, memberPrice: 144, sku: "SH-11211", tag: "New", ph: "", img: "assets/products/cc149-1.webp",
    imgs: ["assets/products/cc149-1.webp", "assets/products/cc149-2.webp", "assets/products/cc149-3.webp", "assets/products/cc149-4.webp", "assets/products/cc149-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 40cm wide, 40cm deep and 48cm high. MDF with burl wood-look laminated finish. Cylindrical shape adds height and visual balance. Low enough to sit beside a sofa or a bed without crowding it. Style it with a stack of books and something with height.",
    features: [
      "Cylindrical shape adds height and visual balance",
      "Burl wood-look laminated surface provides natural texture",
      "Compact size suitable for corners, entryways, or alongside furniture"
    ],
    specs: { "Type": "Side Table", "Colour": "Burl", "Material": "MDF with burl wood-look laminated finish" },
    dims: { w: 40, d: 40, h: 48, unit: "cm", printed: true },
    care: "Indoor use only." },

  { id: "cc150", name: "Marble-Look Stool Round Side Table 38cm", cat: "Living Room", room: "Living Room", price: 234, memberPrice: 210, sku: "SH-11212", tag: "New", ph: "", img: "assets/products/cc150-1.webp",
    imgs: ["assets/products/cc150-1.webp", "assets/products/cc150-2.webp", "assets/products/cc150-3.webp", "assets/products/cc150-4.webp", "assets/products/cc150-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 38cm wide, 38cm deep and 45cm high. MgO with hydrographics transfer printing. Rounded cylindrical shape with a softly curved top for a sculptural look. Low enough to sit beside a sofa or a bed without crowding it. The kind of piece that quietly holds a room together.",
    features: [
      "Rounded cylindrical shape with a softly curved top for a sculptural look",
      "Marble-look finish created with hydrographics transfer printing",
      "Made from lightweight yet strong MgO material",
      "Functions as a side table, stool, or decorative piece",
      "Comes fully assembled for immediate use"
    ],
    specs: { "Type": "Side Table", "Colour": "Rose", "Material": "MgO with hydrographics transfer printing" },
    dims: { w: 38, d: 38, h: 45, unit: "cm", printed: true },
    boxContents: ["1x Side Table"],
    care: "Clean gently with a soft cloth. Lift when moving it, do not pull. Do not overexpose to direct sunlight." },

  { id: "cc151", name: "Walnut Storage Side Table 80cm, White", cat: "Living Room", room: "Living Room", price: 309, memberPrice: 278, sku: "SH-11213", tag: "New", ph: "", img: "assets/products/cc151-1.webp",
    imgs: ["assets/products/cc151-1.webp", "assets/products/cc151-2.webp", "assets/products/cc151-3.webp", "assets/products/cc151-4.webp", "assets/products/cc151-5.webp"],
    lead: "8 to 10 weeks",
    desc: "For the lamp, the book and the cup of tea. 80cm wide, 80cm deep and 60cm high. Rubber wood. Four-separate storage shelves. Low enough to sit beside a sofa or a bed without crowding it. Works as well against a wall as it does floating in a room.",
    features: [
      "Four-separate storage shelves",
      "Compact, yet modern design to suit many interiors",
      "Made from high-quality MDF wood and rubberwood",
      "Handcrafted in Vietnam"
    ],
    specs: { "Type": "Side Table", "Material": "Rubber wood, high-grade MDF encased in walnut brown veneer" },
    dims: { w: 80, d: 80, h: 60, unit: "cm", printed: true },
    care: "Wipe clean with a damp cloth." },

  { id: "cc152", name: "Console Table 140cm, Walnut", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11214", tag: "New", ph: "", img: "assets/products/cc152-1.webp",
    imgs: ["assets/products/cc152-1.webp", "assets/products/cc152-2.webp", "assets/products/cc152-3.webp", "assets/products/cc152-4.webp", "assets/products/cc152-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 40cm wide, 140cm deep and 75cm high. FSC sustainably sourced MDF with a melamine finish. Adds a layer of elegance and richness to your space. Narrow enough for a hallway, long enough to be useful in one. Style it with a stack of books and something with height.",
    features: [
      "Offers ample space for display and storage without overwhelming the room"
    ],
    specs: { "Type": "Console Table", "Colour": "Walnut", "Material": "FSC sustainably sourced MDF with a melamine finish" },
    dims: { w: 40, d: 140, h: 75, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc153", name: "Oak Console Table 140cm, Light Oak", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11215", tag: "New", ph: "", img: "assets/products/cc153-1.webp",
    imgs: ["assets/products/cc153-1.webp", "assets/products/cc153-2.webp", "assets/products/cc153-3.webp", "assets/products/cc153-4.webp", "assets/products/cc153-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 40cm wide, 140cm deep and 75cm high. FSC sustainably sourced MDF with a melamine finish. Adds a layer of elegance and richness to your space. Narrow enough for a hallway, long enough to be useful in one. The kind of piece that quietly holds a room together.",
    features: [
      "Offers ample space for display and storage without overwhelming the room"
    ],
    specs: { "Type": "Console Table", "Colour": "Light Oak", "Material": "FSC sustainably sourced MDF with a melamine finish" },
    dims: { w: 40, d: 140, h: 75, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc154", name: "Console Table 120cm 35cm, Natural", cat: "Living Room", room: "Living Room", price: 495, memberPrice: 445, sku: "SH-11216", tag: "New", ph: "", img: "assets/products/cc154-1.webp",
    imgs: ["assets/products/cc154-1.webp", "assets/products/cc154-2.webp", "assets/products/cc154-3.webp", "assets/products/cc154-4.webp", "assets/products/cc154-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 35cm across. MDF with a wood veneer finish. Elegant Natural wood finish that enhances the look of your space. Narrow enough for a hallway, long enough to be useful in one. Works as well against a wall as it does floating in a room.",
    features: [
      "Elegant Natural wood finish that enhances the look of your space",
      "Slim profile perfect for entryways, hallways, or behind sofas",
      "Ample tabletop space for displaying decorative items",
      "Streamlined design complements a variety of interior styles",
      "Easy to clean surface for hassle-free maintenance"
    ],
    specs: { "Type": "Console Table", "Colour": "Natural", "Material": "MDF with a wood veneer finish" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc155", name: "Timber Round Console Table 110cm, Cream", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11217", tag: "New", ph: "", img: "assets/products/cc155-1.webp",
    imgs: ["assets/products/cc155-1.webp", "assets/products/cc155-2.webp", "assets/products/cc155-3.webp", "assets/products/cc155-4.webp", "assets/products/cc155-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 110cm wide, 35cm deep and 75cm high. MDF with gloss finish. Curved-edge rectangular top. Narrow enough for a hallway, long enough to be useful in one. Style it with a stack of books and something with height.",
    features: [
      "Curved-edge rectangular top",
      "Gloss finish in a neutral cream tone",
      "Rounded leg design offers sculptural interest and balance"
    ],
    specs: { "Type": "Console Table", "Colour": "Cream", "Material": "MDF with gloss finish, Acacia timber legs" },
    dims: { w: 110, d: 35, h: 75, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc156", name: "Console Table 120 × 50cm, Natural", cat: "Living Room", room: "Living Room", price: 370, memberPrice: 333, sku: "SH-11218", tag: "New", ph: "", img: "assets/products/cc156-1.webp",
    imgs: ["assets/products/cc156-1.webp", "assets/products/cc156-2.webp", "assets/products/cc156-3.webp", "assets/products/cc156-4.webp", "assets/products/cc156-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 120cm wide, 50cm deep and 78cm high. FSC Sustainably sourced rubber-wood with a melamine finish. Two drawers with a unique vertical panel pattern offer practical storage space while contributing to the table’s elegant design. Narrow enough for a hallway, long enough to be useful in one. Works as well against a wall as it does floating in a room.",
    features: [
      "Two drawers with a unique vertical panel pattern offer practical storage space while contributing to the table’s elegant design",
      "The table’s natural colour ensures it fits seamlessly with various interior colour schemes and design aesthetics"
    ],
    specs: { "Type": "Console Table", "Colour": "Natural", "Material": "FSC Sustainably sourced rubber-wood with a melamine finish" },
    dims: { w: 120, d: 50, h: 78, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc157", name: "Oval Console Table 120 × 40cm, Black", cat: "Living Room", room: "Living Room", price: 464, memberPrice: 417, sku: "SH-11219", tag: "New", ph: "", img: "assets/products/cc157-1.webp",
    imgs: ["assets/products/cc157-1.webp", "assets/products/cc157-2.webp", "assets/products/cc157-3.webp", "assets/products/cc157-4.webp", "assets/products/cc157-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 120cm wide, 40cm deep and 75cm high. MDF. Ribbed detailing for added texture and design appeal. Narrow enough for a hallway, long enough to be useful in one. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Ribbed detailing for added texture and design appeal",
      "Oval tabletop is spacious enough for displaying decor, or d",
      "Complements a wide range of interior decor styles",
      "Easy to clean and maintain"
    ],
    specs: { "Type": "Console Table", "Colour": "Black", "Material": "MDF, melamine, and paper laminated finish", "Weight": "20.98kg" },
    dims: { w: 120, d: 40, h: 75, unit: "cm", printed: true },
    care: "Wipe down with a damp cloth. Avoid cleaning with strong chemicals. WARNING:. Children have died from furniture tipover." },

  { id: "cc158", name: "Metal Console Table 110cm, White", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11220", tag: "New", ph: "", img: "assets/products/cc158-1.webp",
    imgs: ["assets/products/cc158-1.webp", "assets/products/cc158-2.webp", "assets/products/cc158-3.webp", "assets/products/cc158-4.webp", "assets/products/cc158-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 110cm wide, 30cm deep and 80cm high. MDF with a Melamine finish. Natural wood colour for a rustic charm. Narrow enough for a hallway, long enough to be useful in one. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Natural wood colour for a rustic charm",
      "Additional shelf for extra storage and display space",
      "The table’s natural colour ensures it fits seamlessly with various interior colour schemes and design aesthetics"
    ],
    specs: { "Type": "Console Table", "Colour": "White", "Material": "MDF with a Melamine finish, and Metal with a Powder Coat Finish" },
    dims: { w: 110, d: 30, h: 80, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc159", name: "Sliding-Door Console Table 100cm, Natural", cat: "Living Room", room: "Living Room", price: 308, memberPrice: 277, sku: "SH-11221", tag: "New", ph: "", img: "assets/products/cc159-1.webp",
    imgs: ["assets/products/cc159-1.webp", "assets/products/cc159-2.webp", "assets/products/cc159-3.webp", "assets/products/cc159-4.webp", "assets/products/cc159-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 100cm wide, 35cm deep and 80.5cm high. MDF. MDF with a laminated paper finish. Narrow enough for a hallway, long enough to be useful in one. Works as well against a wall as it does floating in a room.",
    features: [
      "MDF with a laminated paper finish",
      "Interchangeable Handles - Black & Natural"
    ],
    specs: { "Type": "Console Table", "Colour": "Natural", "Material": "MDF" },
    dims: { w: 100, d: 35, h: 80.5, unit: "cm", printed: true },
    care: "Wipe clean with a damp cloth. Avoid using strong chemical cleaners. WARNING:. Children have died from furniture tipover." },

  { id: "cc160", name: "Travertine-Look Console Table 120 × 120 × 120 × 120 × 35cm 78cm high, Oak", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11222", tag: "New", ph: "", img: "assets/products/cc160-1.webp",
    imgs: ["assets/products/cc160-1.webp", "assets/products/cc160-2.webp", "assets/products/cc160-3.webp", "assets/products/cc160-4.webp", "assets/products/cc160-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 120cm wide, 35cm deep and 78cm high. Particleboard with travertine melamine finish. Travertine-look top adds texture and visual interest. Narrow enough for a hallway, long enough to be useful in one. Works as well against a wall as it does floating in a room.",
    features: [
      "Travertine-look top adds texture and visual interest",
      "Oak tones bring natural warmth and versatility",
      "Two drawers provide practical concealed storage",
      "Slim design ideal for entryways, hallways, or behind sofas"
    ],
    specs: { "Type": "Console Table", "Colour": "Oak + Travertine", "Material": "Particleboard with travertine melamine finish, Particleboard with melamine finish, Solid p" },
    dims: { w: 120, d: 35, h: 78, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc161", name: "Timber Console Table 113cm, Off-White", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11223", tag: "New", ph: "", img: "assets/products/cc161-1.webp",
    imgs: ["assets/products/cc161-1.webp", "assets/products/cc161-2.webp", "assets/products/cc161-3.webp", "assets/products/cc161-4.webp", "assets/products/cc161-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 113cm wide, 36cm deep and 75cm high. MDF with lacquer finish. Large fluted design with chamfered edges. Narrow enough for a hallway, long enough to be useful in one. Works as well against a wall as it does floating in a room.",
    features: [
      "Large fluted design with chamfered edges",
      "Rolling pin legs add balance and structure",
      "Wide top surface for displaying decor or storing essentials"
    ],
    specs: { "Type": "Console Table", "Colour": "Off-White", "Material": "MDF with lacquer finish, Particleboard with melamine finish, Solid timber" },
    dims: { w: 113, d: 36, h: 75, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc162", name: "Oval Console Table 120cm, Natural", cat: "Living Room", room: "Living Room", price: 464, memberPrice: 417, sku: "SH-11224", tag: "New", ph: "", img: "assets/products/cc162-1.webp",
    imgs: ["assets/products/cc162-1.webp", "assets/products/cc162-2.webp", "assets/products/cc162-3.webp", "assets/products/cc162-4.webp", "assets/products/cc162-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 120cm wide, 40cm deep and 75cm high. MDF. Ribbed detailing for added texture and design appeal. Narrow enough for a hallway, long enough to be useful in one. Works as well against a wall as it does floating in a room.",
    features: [
      "Ribbed detailing for added texture and design appeal",
      "Oval tabletop is spacious enough for displaying decor, or d",
      "Complements a wide range of interior decor styles",
      "Easy to clean and maintain"
    ],
    specs: { "Type": "Console Table", "Colour": "Natural", "Material": "MDF, melamine, and paper laminated finish", "Weight": "20.98kg" },
    dims: { w: 120, d: 40, h: 75, unit: "cm", printed: true },
    care: "Wipe down with a damp cloth. Avoid cleaning with strong chemicals. WARNING:. Children have died from furniture tipover." },

  { id: "cc163", name: "Console Table 120 × 50cm, Black", cat: "Living Room", room: "Living Room", price: 370, memberPrice: 333, sku: "SH-11225", tag: "New", ph: "", img: "assets/products/cc163-1.webp",
    imgs: ["assets/products/cc163-1.webp", "assets/products/cc163-2.webp", "assets/products/cc163-3.webp", "assets/products/cc163-4.webp", "assets/products/cc163-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 120cm wide, 50cm deep and 78cm high. FSC Sustainably sourced rubber-wood with a melamine finish. Two drawers with a unique vertical panel pattern offer practical storage space while contributing to the table’s elegant design. Narrow enough for a hallway, long enough to be useful in one. Style it with a stack of books and something with height.",
    features: [
      "Two drawers with a unique vertical panel pattern offer practical storage space while contributing to the table’s elegant design",
      "The table’s natural colour ensures it fits seamlessly with various interior colour schemes and design aesthetics"
    ],
    specs: { "Type": "Console Table", "Colour": "Black", "Material": "FSC Sustainably sourced rubber-wood with a melamine finish" },
    dims: { w: 120, d: 50, h: 78, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc164", name: "Sliding-Door Console Table 100cm, Black", cat: "Living Room", room: "Living Room", price: 308, memberPrice: 277, sku: "SH-11226", tag: "New", ph: "", img: "assets/products/cc164-1.webp",
    imgs: ["assets/products/cc164-1.webp", "assets/products/cc164-2.webp", "assets/products/cc164-3.webp", "assets/products/cc164-4.webp", "assets/products/cc164-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 100cm wide, 35cm deep and 80.5cm high. MDF. MDF with a laminated paper finish. Narrow enough for a hallway, long enough to be useful in one. Style it with a stack of books and something with height.",
    features: [
      "MDF with a laminated paper finish"
    ],
    specs: { "Type": "Console Table", "Colour": "Black", "Material": "MDF" },
    dims: { w: 100, d: 35, h: 80.5, unit: "cm", printed: true },
    care: "Wipe clean with a damp cloth. Avoid using strong chemical cleaners. WARNING:. Children have died from furniture tipover." },

  { id: "cc165", name: "Round Console Table 110cm, Green", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11227", tag: "New", ph: "", img: "assets/products/cc165-1.webp",
    imgs: ["assets/products/cc165-1.webp", "assets/products/cc165-2.webp", "assets/products/cc165-3.webp", "assets/products/cc165-4.webp", "assets/products/cc165-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. Modern console table design with three open shelves. Narrow enough for a hallway, long enough to be useful in one. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Modern console table design with three open shelves",
      "Slim frame with rounded ends for a contemporary look",
      "Ample surface space for décor, books, or everyday essentials",
      "Green finish that introduces a fresh, stylish tone to interiors"
    ],
    specs: { "Type": "Console Table" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc166", name: "Timber Console Table 100cm, Black", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11228", tag: "New", ph: "", img: "assets/products/cc166-1.webp",
    imgs: ["assets/products/cc166-1.webp", "assets/products/cc166-2.webp", "assets/products/cc166-3.webp", "assets/products/cc166-4.webp", "assets/products/cc166-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 100cm across. MDF. Features an eye-catching design. Narrow enough for a hallway, long enough to be useful in one. Works as well against a wall as it does floating in a room.",
    features: [
      "Features an eye-catching design",
      "Supported by a durable rubberwood frame",
      "The cabinet space provides ample storage space"
    ],
    specs: { "Type": "Console Table", "Colour": "Black", "Material": "MDF, Solid Timber" },
    boxContents: ["1x Console table", "1x Assembly Instructions"],
    care: "Clean with a damp cloth. Lift when moving it, do not pull. WARNING:. Children have died from furniture tipover." },

  { id: "cc167", name: "Console Table 120cm 35cm, Black", cat: "Living Room", room: "Living Room", price: 495, memberPrice: 445, sku: "SH-11229", tag: "New", ph: "", img: "assets/products/cc167-1.webp",
    imgs: ["assets/products/cc167-1.webp", "assets/products/cc167-2.webp", "assets/products/cc167-3.webp", "assets/products/cc167-4.webp", "assets/products/cc167-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 35cm across. MDF with a wood veneer finish. Elegant Black wood finish that enhances the look of your space. Narrow enough for a hallway, long enough to be useful in one. Style it with a stack of books and something with height.",
    features: [
      "Elegant Black wood finish that enhances the look of your space",
      "Slim profile perfect for entryways, hallways, or behind sofas",
      "Ample tabletop space for displaying decorative items",
      "Streamlined design complements a variety of interior styles",
      "Easy to clean surface for hassle-free maintenance"
    ],
    specs: { "Type": "Console Table", "Colour": "Black", "Material": "MDF with a wood veneer finish" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc168", name: "Console Table 120cm, White", cat: "Living Room", room: "Living Room", price: 495, memberPrice: 445, sku: "SH-11230", tag: "New", ph: "", img: "assets/products/cc168-1.webp",
    imgs: ["assets/products/cc168-1.webp", "assets/products/cc168-2.webp", "assets/products/cc168-3.webp", "assets/products/cc168-4.webp", "assets/products/cc168-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 35cm across. MDF with a wood veneer finish. Elegant White wood finish that enhances the look of your space. Narrow enough for a hallway, long enough to be useful in one. The kind of piece that quietly holds a room together.",
    features: [
      "Elegant White wood finish that enhances the look of your space",
      "Slim profile perfect for entryways, hallways, or behind sofas",
      "Ample tabletop space for displaying decorative items",
      "Streamlined design complements a variety of interior styles",
      "Easy to clean surface for hassle-free maintenance"
    ],
    specs: { "Type": "Console Table", "Colour": "White", "Material": "MDF with a wood veneer finish" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc169", name: "Round Console Table 110cm, Cream", cat: "Living Room", room: "Living Room", price: 284, memberPrice: 255, sku: "SH-11231", tag: "New", ph: "", img: "assets/products/cc169-1.webp",
    imgs: ["assets/products/cc169-1.webp", "assets/products/cc169-2.webp", "assets/products/cc169-3.webp", "assets/products/cc169-4.webp", "assets/products/cc169-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. Modern console table design with three open shelves. Narrow enough for a hallway, long enough to be useful in one. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Modern console table design with three open shelves",
      "Slim frame with rounded ends for a contemporary look",
      "Ample surface space for décor, books, or everyday essentials",
      "Cream finish that blends effortlessly with a variety of interiors"
    ],
    specs: { "Type": "Console Table" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc170", name: "Ash Sliding-Door Console Table 100cm, Walnut", cat: "Living Room", room: "Living Room", price: 308, memberPrice: 277, sku: "SH-11232", tag: "New", ph: "", img: "assets/products/cc170-1.webp",
    imgs: ["assets/products/cc170-1.webp", "assets/products/cc170-2.webp", "assets/products/cc170-3.webp", "assets/products/cc170-4.webp", "assets/products/cc170-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 100cm wide, 35cm deep and 80.5cm high. MDF with ash-coloured laminate; metal frame. Sliding ribbed doors for hidden storage. Narrow enough for a hallway, long enough to be useful in one. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Sliding ribbed doors for hidden storage",
      "Metal frame with crossbar support",
      "Raised profile adds visual lightness and easy floor cleaning access",
      "Includes two interchangeable handles: one walnut, one black"
    ],
    specs: { "Type": "Console Table", "Colour": "Walnut", "Material": "MDF with ash-coloured laminate; metal frame" },
    dims: { w: 100, d: 35, h: 80.5, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc171", name: "Sculptural Oval Console Table 120cm, Black", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11233", tag: "New", ph: "", img: "assets/products/cc171-1.webp",
    imgs: ["assets/products/cc171-1.webp", "assets/products/cc171-2.webp", "assets/products/cc171-3.webp", "assets/products/cc171-4.webp", "assets/products/cc171-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 120cm wide, 35cm deep and 76cm high. MDF with black laminated paper finish. Oval tabletop provides space for decor or everyday items. Narrow enough for a hallway, long enough to be useful in one. The kind of piece that quietly holds a room together.",
    features: [
      "Oval tabletop provides space for decor or everyday items",
      "Unique sculptural legs add a strong visual element",
      "Black finish creates a clean and defined appearance",
      "Suitable for living rooms, hallways, or entry areas"
    ],
    specs: { "Type": "Console Table", "Colour": "Black", "Material": "MDF with black laminated paper finish" },
    dims: { w: 120, d: 35, h: 76, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc172", name: "Travertine-Look Console Table 120 × 120 × 120 × 120 × 35cm 77cm high, Oak", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11234", tag: "New", ph: "", img: "assets/products/cc172-1.webp",
    imgs: ["assets/products/cc172-1.webp", "assets/products/cc172-2.webp", "assets/products/cc172-3.webp", "assets/products/cc172-4.webp", "assets/products/cc172-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 120cm wide, 35cm deep and 77cm high. MDF with oak melamine veneer. Travertine-look top adds visual contrast and a refined surface finish. Narrow enough for a hallway, long enough to be useful in one. Works as well against a wall as it does floating in a room.",
    features: [
      "Travertine-look top adds visual contrast and a refined surface finish",
      "Oak and travertine tones blend natural warmth with subtle texture",
      "Suitable for displaying decor, plants, or everyday essentials"
    ],
    specs: { "Type": "Console Table", "Colour": "Oak, Travertine", "Material": "MDF with oak melamine veneer, Travertine melamine top" },
    dims: { w: 120, d: 35, h: 77, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc173", name: "Console Table 120cm, Walnut", cat: "Living Room", room: "Living Room", price: 495, memberPrice: 445, sku: "SH-11235", tag: "New", ph: "", img: "assets/products/cc173-1.webp",
    imgs: ["assets/products/cc173-1.webp", "assets/products/cc173-2.webp", "assets/products/cc173-3.webp", "assets/products/cc173-4.webp", "assets/products/cc173-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 35cm across. MDF with a wood veneer finish. Warm Walnut wood finish that enhances the look of your space. Narrow enough for a hallway, long enough to be useful in one. Style it with a stack of books and something with height.",
    features: [
      "Warm Walnut wood finish that enhances the look of your space",
      "Slim profile perfect for entryways, hallways, or behind sofas",
      "Ample tabletop space for displaying decorative items",
      "Streamlined design complements a variety of interior styles",
      "Easy to clean surface for hassle-free maintenance"
    ],
    specs: { "Type": "Console Table", "Colour": "Walnut", "Material": "MDF with a wood veneer finish" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc174", name: "Bamboo Console Table 110cm, Natural", cat: "Living Room", room: "Living Room", price: 248, memberPrice: 223, sku: "SH-11236", tag: "New", ph: "", img: "assets/products/cc174-1.webp",
    imgs: ["assets/products/cc174-1.webp", "assets/products/cc174-2.webp", "assets/products/cc174-3.webp", "assets/products/cc174-4.webp", "assets/products/cc174-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 110cm wide, 35cm deep and 80cm high. Bamboo. Narrow enough for a hallway, long enough to be useful in one. Style it with a stack of books and something with height.",
    features: [
      "Solid, stable build",
      "Wipe-clean surface",
      "Flat-packed for delivery"
    ],
    specs: { "Type": "Console Table", "Colour": "Natural Wood", "Material": "Bamboo, MDF, Melamine" },
    dims: { w: 110, d: 35, h: 80, unit: "cm", printed: true },
    care: "Wipe clean with a damp cloth." },

  { id: "cc175", name: "Console Table 120 × 120 × 120 × 120 × 35cm 74cm high, Oak", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11237", tag: "New", ph: "", img: "assets/products/cc175-1.webp",
    imgs: ["assets/products/cc175-1.webp", "assets/products/cc175-2.webp", "assets/products/cc175-3.webp", "assets/products/cc175-4.webp", "assets/products/cc175-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 120cm wide, 35cm deep and 74cm high. MDF with laminated paper finish. Two drawers with rail sliders for smooth operation. Narrow enough for a hallway, long enough to be useful in one. Works as well against a wall as it does floating in a room.",
    features: [
      "Two drawers with rail sliders for smooth operation",
      "Slim structure suitable for narrow spaces",
      "Oak-look finish introduces a warm, natural tone",
      "Lower support bar enhances overall stability"
    ],
    specs: { "Type": "Console Table", "Colour": "Oak", "Material": "MDF with laminated paper finish" },
    dims: { w: 120, d: 35, h: 74, unit: "cm", printed: true },
    care: "Indoor use only. WARNING:. Children have died from furniture tip-over. Always secure this furniture to the wall using the provided anchor device." },

  { id: "cc176", name: "Console Table 120 × 35cm, Black", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11238", tag: "New", ph: "", img: "assets/products/cc176-1.webp",
    imgs: ["assets/products/cc176-1.webp", "assets/products/cc176-2.webp", "assets/products/cc176-3.webp", "assets/products/cc176-4.webp", "assets/products/cc176-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 120cm wide, 35cm deep and 74cm high. MDF with laminated paper finish. Two drawers with rail sliders for smooth operation. Narrow enough for a hallway, long enough to be useful in one. Style it with a stack of books and something with height.",
    features: [
      "Two drawers with rail sliders for smooth operation",
      "Slim structure designed for narrow spaces",
      "Black finish provides a refined, understated appearance",
      "Lower support bar enhances stability and balance"
    ],
    specs: { "Type": "Console Table", "Colour": "Black", "Material": "MDF with laminated paper finish" },
    dims: { w: 120, d: 35, h: 74, unit: "cm", printed: true },
    care: "Indoor use only. WARNING:. Children have died from furniture tip-over. Always secure this furniture to the wall using the provided anchor device." },

  { id: "cc177", name: "Console Table 120 × 120 × 120 × 120 × 35cm 76cm high, Oak", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11239", tag: "New", ph: "", img: "assets/products/cc177-1.webp",
    imgs: ["assets/products/cc177-1.webp", "assets/products/cc177-2.webp", "assets/products/cc177-3.webp", "assets/products/cc177-4.webp", "assets/products/cc177-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 120cm wide, 35cm deep and 76cm high. Particleboard with laminated paper finish. Solid oak finish runs across the top and base for a cohesive look. Narrow enough for a hallway, long enough to be useful in one. Works as well against a wall as it does floating in a room.",
    features: [
      "Solid oak finish runs across the top and base for a cohesive look",
      "Warm, natural oak tone adds character to the space",
      "Compact size suited to entryways, hallways, or living spaces"
    ],
    specs: { "Type": "Console Table", "Colour": "Oak", "Material": "Particleboard with laminated paper finish, MDF with laminated paper finish" },
    dims: { w: 120, d: 35, h: 76, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc178", name: "Console Table 100cm, White", cat: "Living Room", room: "Living Room", price: 234, memberPrice: 210, sku: "SH-11240", tag: "New", ph: "", img: "assets/products/cc178-1.webp",
    imgs: ["assets/products/cc178-1.webp", "assets/products/cc178-2.webp", "assets/products/cc178-3.webp", "assets/products/cc178-4.webp", "assets/products/cc178-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. Elegant scalloped detailing for a decorative finish. Narrow enough for a hallway, long enough to be useful in one. The kind of piece that quietly holds a room together.",
    features: [
      "Elegant scalloped detailing for a decorative finish",
      "Neutral white finish blends easily with existing furniture and decor"
    ],
    specs: { "Type": "Console Table" },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc179", name: "Bamboo Console Table 110cm, Black", cat: "Living Room", room: "Living Room", price: 273, memberPrice: 245, sku: "SH-11241", tag: "New", ph: "", img: "assets/products/cc179-1.webp",
    imgs: ["assets/products/cc179-1.webp", "assets/products/cc179-2.webp", "assets/products/cc179-3.webp", "assets/products/cc179-4.webp", "assets/products/cc179-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 110cm wide, 35cm deep and 80cm high. Bamboo. Narrow enough for a hallway, long enough to be useful in one. Works as well against a wall as it does floating in a room.",
    features: [
      "Solid, stable build",
      "Wipe-clean surface",
      "Flat-packed for delivery"
    ],
    specs: { "Type": "Console Table", "Colour": "Black", "Material": "Bamboo, MDF, Melamine" },
    dims: { w: 110, d: 35, h: 80, unit: "cm", printed: true },
    care: "Wipe clean with a damp cloth." },

  { id: "cc180", name: "Burl-Look Round Console Table 100cm", cat: "Living Room", room: "Living Room", price: 345, memberPrice: 310, sku: "SH-11242", tag: "New", ph: "", img: "assets/products/cc180-1.webp",
    imgs: ["assets/products/cc180-1.webp", "assets/products/cc180-2.webp", "assets/products/cc180-3.webp", "assets/products/cc180-4.webp", "assets/products/cc180-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 100cm wide, 30cm deep and 77cm high. MDF with burl wood-look laminated finish. Rounded rectangular top for a softened silhouette. Narrow enough for a hallway, long enough to be useful in one. The kind of piece that quietly holds a room together.",
    features: [
      "Rounded rectangular top for a softened silhouette",
      "Two-leg base provides sculptural balance and support",
      "Burl wood-look laminated surface adds texture and tone",
      "Suitable for entryways, hallways, or behind sofas"
    ],
    specs: { "Type": "Console Table", "Colour": "Burl", "Material": "MDF with burl wood-look laminated finish" },
    dims: { w: 100, d: 30, h: 77, unit: "cm", printed: true },
    care: "Indoor use only. WARNING. Children have died from furniture tipover. ALWAYS secure this furniture with an anchor device." },

  { id: "cc181", name: "Console Table 95cm, Oak", cat: "Living Room", room: "Living Room", price: 247, memberPrice: 222, sku: "SH-11243", tag: "New", ph: "", img: "assets/products/cc181-1.webp",
    imgs: ["assets/products/cc181-1.webp", "assets/products/cc181-2.webp", "assets/products/cc181-3.webp", "assets/products/cc181-4.webp", "assets/products/cc181-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 105cm wide, 38cm deep and 14cm high. MDF with a laminated paper finish. Wall-mounted console table with a slim, floating installation. Narrow enough for a hallway, long enough to be useful in one. Style it with a stack of books and something with height.",
    features: [
      "Wall-mounted console table with a slim, floating installation",
      "Push-to-open drawers keep the front clean with no handles needed",
      "Easy wall installation that frees up floor space in entryways, hallways or living areas",
      "Extended width suitable for hallways, entryways, or living spaces",
      "Two integrated drawers for concealed storage"
    ],
    specs: { "Type": "Console Table", "Colour": "Oak", "Material": "MDF with a laminated paper finish" },
    dims: { w: 105, d: 38, h: 14, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc182", name: "Round Console Table 110cm, Oak", cat: "Living Room", room: "Living Room", price: 370, memberPrice: 333, sku: "SH-11244", tag: "New", ph: "", img: "assets/products/cc182-1.webp",
    imgs: ["assets/products/cc182-1.webp", "assets/products/cc182-2.webp", "assets/products/cc182-3.webp", "assets/products/cc182-4.webp", "assets/products/cc182-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 110cm wide, 40cm deep and 78cm high. MDF with oak veneer finish. Rounded tabletop with soft curved edges for a contemporary look. Narrow enough for a hallway, long enough to be useful in one. The kind of piece that quietly holds a room together.",
    features: [
      "Rounded tabletop with soft curved edges for a contemporary look",
      "Compact footprint suits smaller entryways and hallways",
      "Lower shelf adds extra surface space for styling or storage",
      "Oak veneer finish adds warm, natural texture",
      "MDF construction for durability and a stable, long-lasting build"
    ],
    specs: { "Type": "Console Table", "Colour": "Oak", "Material": "MDF with oak veneer finish" },
    dims: { w: 110, d: 40, h: 78, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc183", name: "Console Table 160cm, Oak", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11245", tag: "New", ph: "", img: "assets/products/cc183-1.webp",
    imgs: ["assets/products/cc183-1.webp", "assets/products/cc183-2.webp", "assets/products/cc183-3.webp", "assets/products/cc183-4.webp", "assets/products/cc183-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 160cm wide, 40cm deep and 78cm high. MDF with oak veneer finish. Soft curved edges soften the look and suit a range of entryway and living spaces. Narrow enough for a hallway, long enough to be useful in one. Leave it bare, or give it one good object and nothing else.",
    features: [
      "Soft curved edges soften the look and suit a range of entryway and living spaces",
      "Lower shelf adds extra surface space for styling or storage",
      "Oak veneer finish adds warm, natural texture",
      "MDF construction for durability and a stable, long-lasting build"
    ],
    specs: { "Type": "Console Table", "Colour": "Oak", "Material": "MDF with oak veneer finish" },
    dims: { w: 160, d: 40, h: 78, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc184", name: "Round Console Table 110cm, Walnut", cat: "Living Room", room: "Living Room", price: 370, memberPrice: 333, sku: "SH-11246", tag: "New", ph: "", img: "assets/products/cc184-1.webp",
    imgs: ["assets/products/cc184-1.webp", "assets/products/cc184-2.webp", "assets/products/cc184-3.webp", "assets/products/cc184-4.webp", "assets/products/cc184-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 110cm wide, 40cm deep and 78cm high. MDF with walnut veneer finish. Rounded tabletop with soft curved edges for a contemporary look. Narrow enough for a hallway, long enough to be useful in one. Works as well against a wall as it does floating in a room.",
    features: [
      "Rounded tabletop with soft curved edges for a contemporary look",
      "Compact footprint suits smaller entryways and hallways",
      "Lower shelf adds extra surface space for styling or storage",
      "Walnut veneer finish adds rich, dark natural texture",
      "MDF construction for durability and a stable, long-lasting build"
    ],
    specs: { "Type": "Console Table", "Colour": "Walnut", "Material": "MDF with walnut veneer finish" },
    dims: { w: 110, d: 40, h: 78, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc185", name: "Console Table 160cm, Walnut", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11247", tag: "New", ph: "", img: "assets/products/cc185-1.webp",
    imgs: ["assets/products/cc185-1.webp", "assets/products/cc185-2.webp", "assets/products/cc185-3.webp", "assets/products/cc185-4.webp", "assets/products/cc185-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 160cm wide, 40cm deep and 78cm high. MDF with walnut veneer finish. Soft curved edges soften the look and suit a range of entryway and living spaces. Narrow enough for a hallway, long enough to be useful in one. Style it with a stack of books and something with height.",
    features: [
      "Soft curved edges soften the look and suit a range of entryway and living spaces",
      "Lower shelf adds extra surface space for styling or storage",
      "Walnut veneer finish adds rich, dark natural texture",
      "MDF construction for durability and a stable, long-lasting build"
    ],
    specs: { "Type": "Console Table", "Colour": "Walnut", "Material": "MDF with walnut veneer finish" },
    dims: { w: 160, d: 40, h: 78, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  { id: "cc186", name: "Timber Round Console Table 120cm, Oak", cat: "Living Room", room: "Living Room", price: 494, memberPrice: 444, sku: "SH-11248", tag: "New", ph: "", img: "assets/products/cc186-1.webp",
    imgs: ["assets/products/cc186-1.webp", "assets/products/cc186-2.webp", "assets/products/cc186-3.webp", "assets/products/cc186-4.webp", "assets/products/cc186-5.webp"],
    lead: "8 to 10 weeks",
    desc: "The narrow table that makes a hallway look finished. 120cm wide, 35cm deep and 80cm high. MDF with oak laminated paper finish. Two drawers provide concealed storage for small items and essentials. Narrow enough for a hallway, long enough to be useful in one. Works as well against a wall as it does floating in a room.",
    features: [
      "Two drawers provide concealed storage for small items and essentials",
      "Rounded edges and recessed handles maintain a minimal profile",
      "Oak finish adds warmth and natural texture to interiors",
      "Slim design suitable for hallways, entryways, or living spaces"
    ],
    specs: { "Type": "Console Table", "Colour": "Oak", "Material": "MDF with oak laminated paper finish, MDF with matte lacquer finish, Particleboard with lam" },
    dims: { w: 120, d: 35, h: 80, unit: "cm", printed: true },
    care: "Wipe clean with a soft, dry or barely damp cloth and dry straight away. Use coasters and felt pads, lift rather than drag when moving it, and keep it out of direct sun." },

  /* ===== Ready to ship — trade supplier, ready to ship ===== */
  { id: "lx01", name: "Aviva Spill Resistant Fabric Ottoman in Light Beige", cat: "Living Room", room: "Living Room", price: 516, memberPrice: 464, sku: "SH-11249", tag: "New", ph: "", img: "assets/products/lx01.webp",
    imgs: ["assets/products/lx01.webp", "assets/products/lx01-2.webp", "assets/products/lx01-3.webp", "assets/products/lx01-4.webp", "assets/products/lx01-5.webp"],
    fastShip: true,
    desc: "Oversized Light Beige Square Ottoman in Spill-Resistant Fabric Create an inviting sanctuary in your lounge with ultimate comfort and stress-free maintenance. Upholstered in premium OEKO-TEX STANDARD 100 certified spill-resistant fabric , the Aviva Spill Resistant Fabric Ottoman in Light Beige offers a soft, linen-look texture engineered to repel liquid mishaps while adding contemporary warmth to your living space.",
    specs: { "Type": "Living Room > Sofas & Seating > Stools & Ottomans" } },

  { id: "lx02", name: "Rita 4 Seater Electric Recliner Sofa in Light Taupe Brown", cat: "Living Room", room: "Living Room", price: 4267, memberPrice: 3840, sku: "SH-11250", tag: "New", ph: "", img: "assets/products/lx02.webp",
    imgs: ["assets/products/lx02.webp", "assets/products/lx02-2.webp", "assets/products/lx02-3.webp", "assets/products/lx02-4.webp", "assets/products/lx02-5.webp"],
    fastShip: true,
    desc: "Four Seats, 62cm Deep, Powered at Both Ends Seat depth matters if you like to sit right back. The Rita 4 Seater Electric Recliner Sofa in Light Taupe Brown has 62cm-deep seats, which is deep enough to sit back into with your legs up rather than perching on the front edge. The left and right seats recline by button ; the middle two stay upright, so someone can sit normally beside a person who's fully stretched out. The middle module has a manual three-position headrest, and USB and USB-C ports are built in.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx03", name: "Talor 2 Seater Modular Curved Velvet Sofa in Cream White", cat: "Living Room", room: "Living Room", price: 1671, memberPrice: 1504, sku: "SH-11251", tag: "New", ph: "", img: "assets/products/lx03.webp",
    imgs: ["assets/products/lx03.webp", "assets/products/lx03-2.webp", "assets/products/lx03-3.webp", "assets/products/lx03-4.webp", "assets/products/lx03-5.webp"],
    fastShip: true,
    desc: "Settle Into the Flexible Comfort of a Modular Sofa Imagine sinking into a sofa that feels like it’s been shaped just for you. The Talor Modular Curved Sofa wraps you in soft, performance velvet and deep cushioning, turning your lounge room into a calm, cosy retreat at the end of a long day. Deep Comfort in a 2 Seater Modular Curved Sofa With its elegant curved silhouette and generous seat depth, the Talor Two Seater is made for proper lounging – feet up, movie on, and drink within reach.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx04", name: "Vornell 6 Seater Performance Velvet Modular Chaise Sofa in Deep Mocha Brown", cat: "Living Room", room: "Living Room", price: 4091, memberPrice: 3682, sku: "SH-11252", tag: "New", ph: "", img: "assets/products/lx04.webp",
    imgs: ["assets/products/lx04.webp", "assets/products/lx04-2.webp", "assets/products/lx04-3.webp", "assets/products/lx04-4.webp", "assets/products/lx04-5.webp"],
    fastShip: true,
    desc: "Turn your lounge into the comfy heart of home Imagine a sofa big enough for everyone – kids, friends, pets – without it feeling cramped or cluttered. The Vornell Performance Modular 6 Seater Corner Sofa in deep mocha brown wraps your living room in plush comfort, with a practical performance fabric that’s ready for real Australian living. Ultimate corner comfort With its generous 301 x 301cm footprint and deep 70cm seating, this Vornell configuration creates a true corner retreat where everyone gets a good spot.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx05", name: "Margot Oval Fluted Coffee Table with Storage in Natural", cat: "Living Room", room: "Living Room", price: 626, memberPrice: 563, sku: "SH-11253", tag: "New", ph: "", img: "assets/products/lx05.webp",
    imgs: ["assets/products/lx05.webp", "assets/products/lx05-2.webp", "assets/products/lx05-3.webp", "assets/products/lx05-4.webp", "assets/products/lx05-5.webp"],
    fastShip: true,
    desc: "Beautiful from Every Angle. Storage from Both Sides. Bring texture, softness and clever storage to your living room with the Margot Oval Fluted Coffee Table in Natural . Its generous oval profile is wrapped in vertical fluted detailing, creating a sculptural centrepiece that looks considered from every angle. Two concealed drawers are positioned on opposite sides of the table, keeping remotes, coasters and everyday essentials neatly out of sight while remaining easy to reach from either side of your living space.",
    specs: { "Type": "Living Room > Tables > Coffee Tables" } },

  { id: "lx06", name: "Fiona 120cm Curved Sintered Stone Coffee Table in Walnut", cat: "Living Room", room: "Living Room", price: 505, memberPrice: 455, sku: "SH-11254", tag: "New", ph: "", img: "assets/products/lx06.webp",
    imgs: ["assets/products/lx06.webp", "assets/products/lx06-2.webp", "assets/products/lx06-3.webp", "assets/products/lx06-4.webp", "assets/products/lx06-5.webp"],
    fastShip: true,
    desc: "Sculptural Curves, Made for Everyday Living Make a statement with the Fiona 120cm Curved Sintered Stone Coffee Table in Walnut. Defined by its flowing organic profile and sculptural curved base, Fiona brings a softer, architectural presence to contemporary living spaces. A travertine-look sintered stone top adds beautiful natural-inspired texture while offering the durability needed for everyday life.",
    specs: { "Type": "Living Room > Tables > Coffee Tables" } },

  { id: "lx07", name: "Daria 80cm Organic Curve Coffee Table in Travertine", cat: "Living Room", room: "Living Room", price: 406, memberPrice: 365, sku: "SH-11255", tag: "New", ph: "", img: "assets/products/lx07.webp",
    imgs: ["assets/products/lx07.webp", "assets/products/lx07-2.webp", "assets/products/lx07-3.webp", "assets/products/lx07-4.webp", "assets/products/lx07-5.webp"],
    fastShip: true,
    desc: "Organic Form, Sculptural Presence Bring a softer statement to your living room with the Daria 80cm Organic Curve Coffee Table in Travertine . Inspired by the flowing shape of a flower, its distinctive curved tabletop creates a sculptural silhouette that changes as you move around the room. A travertine-look sintered stone surface brings warm, natural stone-inspired character to the design while offering the durability needed for everyday living.",
    specs: { "Type": "Living Room > Tables > Coffee Tables" } },

  { id: "lx08", name: "Matias 220cm Storage TV Unit in Oak", cat: "Living Room", room: "Living Room", price: 736, memberPrice: 662, sku: "SH-11256", tag: "New", ph: "", img: "assets/products/lx08.webp",
    imgs: ["assets/products/lx08.webp", "assets/products/lx08-2.webp", "assets/products/lx08-3.webp", "assets/products/lx08-4.webp", "assets/products/lx08-5.webp"],
    fastShip: true,
    desc: "Make Your Living Room Feel More Polished Imagine a lounge room that finally feels organised, calm and pulled together. The Matias 220cm Storage TV Unit in Oak gives your entertainment area a design-led look while hiding away the everyday clutter that usually steals the spotlight. More Space, Less Clutter With its generous 220cm width, Matias is made for larger TVs and spacious living zones that need more than a basic stand.",
    specs: { "Type": "Living Room > Storage > TV Units & Entertainment Units" } },

  { id: "lx09", name: "Rowena 220cm Storage TV Unit in Oak", cat: "Living Room", room: "Living Room", price: 593, memberPrice: 534, sku: "SH-11257", tag: "New", ph: "", img: "assets/products/lx09.webp",
    imgs: ["assets/products/lx09.webp", "assets/products/lx09-2.webp", "assets/products/lx09-3.webp", "assets/products/lx09-4.webp", "assets/products/lx09-5.webp"],
    fastShip: true,
    desc: "Your Living Room Just Got Smarter Imagine finally having a place for everything that usually clutters your entertainment area. The Rowena 220cm Storage TV Unit brings clean lines, hidden storage and a warm oak finish together, so your living room feels calmer, neater and more considered. Storage That Works Behind the Scenes From gaming gear and remotes to books, chargers and those bits you never know where to put, this TV unit keeps it all tucked away without sacrificing style.",
    specs: { "Type": "Living Room > Storage > TV Units & Entertainment Units" } },

  { id: "lx10", name: "Roux Round Mother of Pearl Console Table in Mocha Cream", cat: "Living Room", room: "Living Room", price: 1088, memberPrice: 979, sku: "SH-11258", tag: "New", ph: "", img: "assets/products/lx10.webp",
    imgs: ["assets/products/lx10.webp", "assets/products/lx10-2.webp", "assets/products/lx10-3.webp", "assets/products/lx10-4.webp", "assets/products/lx10-5.webp"],
    fastShip: true,
    desc: "Elevate Your Entryway with the Roux Artisan Mother of Pearl Console Table The Roux Mother of Pearl Console Table brings instant designer style to your entryway, hallway, or living room. Its handcrafted mother of pearl inlay and mocha cream finish create a subtle shimmer that catches the light and elevates any space. Premium Entryway Furniture Australia Designed for sophisticated Australian living, this luxury mother of pearl console table in mocha cream brings timeless elegance to your entryway.",
    specs: { "Type": "Living Room > Storage > Hallway Furniture" } },

  { id: "lx11", name: "Sasha Arched Boucle Dining Chair in Black (Set of 2)", cat: "Kitchenware", room: "Kitchenware", price: 219, memberPrice: 197, sku: "SH-11259", tag: "New", ph: "", img: "assets/products/lx11.webp",
    imgs: ["assets/products/lx11.webp", "assets/products/lx11-2.webp", "assets/products/lx11-3.webp", "assets/products/lx11-4.webp", "assets/products/lx11-5.webp"],
    fastShip: true,
    desc: "Bring Soft Style to Every Meal Imagine your dining area feeling sharper, cosier and instantly more polished the moment you pull up a chair. The Sasha Arched Boucle Dining Chair in Black blends rich texture with a sculptural silhouette, giving you an easy way to refresh everyday dining with comfort and character. Sharing the signature arched styling seen in the Gilles Dining Chair , Sasha brings a generously proportioned silhouette designed to feel spacious, inviting and easy to style.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Chairs" } },

  { id: "lx12", name: "Audrey Curved Boucle Barstool Set of 2 in Cream White", cat: "Kitchenware", room: "Kitchenware", price: 219, memberPrice: 197, sku: "SH-11260", tag: "New", ph: "", img: "assets/products/lx12.webp",
    imgs: ["assets/products/lx12.webp", "assets/products/lx12-2.webp", "assets/products/lx12-3.webp", "assets/products/lx12-4.webp", "assets/products/lx12-5.webp"],
    fastShip: true,
    desc: "Want Stylish Barstools That Are Actually Comfortable? It’s easy to find a nice-looking barstool, but comfort is often lacking. The Audrey Boucle Barstool Set fixes that—giving you both comfort and design in one practical package. Whether it’s breakfast or cocktails, these stools make every seat feel like the best in the house. Luxe Looks, Everyday Function Covered in plush cream white boucle and padded with thick foam, these barstools bring a soft, elevated feel to your home bar or kitchen counter.",
    specs: { "Type": "Dining & kitchen > Dining > Bar Stools" } },

  /* ===== Ready-to-ship sofas — batch 2, ready to ship ===== */
  { id: "lx13", name: "Parisa 3 Seater Tufted Velvet Sofa in Beige", cat: "Living Room", room: "Living Room", price: 1077, memberPrice: 969, sku: "SH-11261", tag: "New", ph: "", img: "assets/products/lx13.webp",
    imgs: ["assets/products/lx13.webp", "assets/products/lx13-2.webp", "assets/products/lx13-3.webp", "assets/products/lx13-4.webp", "assets/products/lx13-5.webp"],
    fastShip: true,
    desc: "Spacious 3-Seater Comfort for Modern Living The Parisa 3 Seater Tufted Velvet Sofa in Beige is engineered specifically for living rooms and open-plan spaces where comfortable seating and sleek design are essential. At 230 cm wide , this 3-seater sofa comfortably accommodates three adults without overcrowding your room layout, delivering functional daily seating and an elevated interior look.",
    specs: { "Type": "Living Room > Sofas & Seating" } },

  { id: "lx14", name: "Pippa 4 Seater Electric Recliner Sofa in Light Taupe Brown", cat: "Living Room", room: "Living Room", price: 4179, memberPrice: 3761, sku: "SH-11262", tag: "New", ph: "", img: "assets/products/lx14.webp",
    imgs: ["assets/products/lx14.webp", "assets/products/lx14-2.webp", "assets/products/lx14-3.webp", "assets/products/lx14-4.webp", "assets/products/lx14-5.webp"],
    fastShip: true,
    desc: "Four Seats, Powered Recliners at Both Ends The Pippa 4 Seater Electric Recliner Sofa in Light Taupe Brown puts electric recliners on the left and right seats , so two people can stretch out while the middle two stay upright. That suits a room where half the household is watching a film and the other half is eating dinner. The headrests are manual, not powered: they have three positions and are adjusted by hand rather than by button. Pippa seats four across a 310cm width, with each seat 77cm wide.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx15", name: "Norah 5 Seater Boucle Sofa Set with Armless Chairs in Chocolate Brown", cat: "Living Room", room: "Living Room", price: 2045, memberPrice: 1841, sku: "SH-11263", tag: "New", ph: "", img: "assets/products/lx15.webp",
    imgs: ["assets/products/lx15.webp", "assets/products/lx15-2.webp", "assets/products/lx15-3.webp", "assets/products/lx15-4.webp", "assets/products/lx15-5.webp"],
    fastShip: true,
    desc: "Transform your living room into a stylish, cosy retreat with the Norah 5-Seater Boucle Sofa Set. This chocolate brown boucle sofa blends modern elegance with everyday comfort, featuring a solid wood frame and high-density fresh foam cushions for lasting support. Perfect for gatherings or relaxing evenings, it offers generous seating and arrives fully assembled — ready to enjoy. Comes with a warranty for peace of mind.",
    specs: { "Type": "Living Room > Sofas & Seating" } },

  { id: "lx16", name: "Rendon 3 Seater Performance Boucle Sofa in Cream White", cat: "Living Room", room: "Living Room", price: 1649, memberPrice: 1484, sku: "SH-11264", tag: "New", ph: "", img: "assets/products/lx16.webp",
    imgs: ["assets/products/lx16.webp", "assets/products/lx16-2.webp", "assets/products/lx16-3.webp", "assets/products/lx16-4.webp", "assets/products/lx16-5.webp"],
    fastShip: true,
    desc: "Sink Into Sculptural Comfort Imagine coming home, kicking off your shoes, and melting straight into a sofa that feels like a warm hug. The Rendon 3 Seater Bouclé Sofa wraps your living room in soft curves and cosy texture, turning everyday lounging into a little luxury. With its pristine Cream White hue and sophisticated silhouette, the Rendon is the ultimate hero piece for any modern Australian home.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx17", name: "Janelle 191cm Curved Boucle 3 Seater Sofa in Cream White", cat: "Living Room", room: "Living Room", price: 1264, memberPrice: 1138, sku: "SH-11265", tag: "New", ph: "", img: "assets/products/lx17.webp",
    imgs: ["assets/products/lx17.webp", "assets/products/lx17-2.webp", "assets/products/lx17-3.webp", "assets/products/lx17-4.webp", "assets/products/lx17-5.webp"],
    fastShip: true,
    desc: "Janelle 191cm Boucle 3-Seater Curved Sofa - Cream White Upgrade your home with the luxurious Janelle Bouclé 3-Seater Curved Sofa, designed to offer ultimate comfort and style. This spacious 191cm wide 3-seater lounge is perfect for modern, contemporary, and minimalist interiors. Upholstered in premium cream-white bouclé fabric, it provides both softness and elegance.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx18", name: "Brisol 3.5 Seater Velvet Curved Sofa in Cream White", cat: "Living Room", room: "Living Room", price: 1451, memberPrice: 1306, sku: "SH-11266", tag: "New", ph: "", img: "assets/products/lx18.webp",
    imgs: ["assets/products/lx18.webp", "assets/products/lx18-2.webp", "assets/products/lx18-3.webp", "assets/products/lx18-4.webp", "assets/products/lx18-5.webp"],
    fastShip: true,
    desc: "Sophisticated Curves for Relaxed Australian Living Imagine sinking into a generous 3.5 seater sofa designed to embrace your room with its soft, organic lines. The Brisol Velvet Curved Sofa in Cream White wraps your living space in contemporary luxe, while the durable performance velvet fabric quietly takes care of the everyday bumps, spills, and family life.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx19", name: "Monica 4-Seater Electric Recliner Sofa in Light Greige", cat: "Living Room", room: "Living Room", price: 4223, memberPrice: 3801, sku: "SH-11267", tag: "New", ph: "", img: "assets/products/lx19.webp",
    imgs: ["assets/products/lx19.webp", "assets/products/lx19-2.webp", "assets/products/lx19-3.webp", "assets/products/lx19-4.webp", "assets/products/lx19-5.webp"],
    fastShip: true,
    desc: "Four Seats, Two of Them Powered Recliners The Monica 4-Seater Electric Recliner Sofa in Light Greige reclines at both ends while the two middle seats stay upright. Two people can stretch right out with powered footrests and headrests , while anyone eating dinner or reading sits normally beside them. On a fully reclining sofa, everybody's committed to the same position. USB and USB-C ports are built in, so phones charge from the arm. Monica is built from three modules, each with an 83cm seat width.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx20", name: "Anica 3 Seater Boucle Sofa Bed in Cream White", cat: "Living Room", room: "Living Room", price: 747, memberPrice: 672, sku: "SH-11268", tag: "New", ph: "", img: "assets/products/lx20.webp",
    imgs: ["assets/products/lx20.webp", "assets/products/lx20-2.webp", "assets/products/lx20-3.webp", "assets/products/lx20-4.webp", "assets/products/lx20-5.webp"],
    fastShip: true,
    desc: "Anica 3 Seater Boucle Sofa Bed – Cream White The Anica Three-Seater Boucle Sofa Bed in Cream White is a stunning accent to the interior design of any house. Select multipurpose furniture to maximize available space when decorating a studio or efficiency apartment. Since it is made specifically for these kinds of scenarios, the Anica 3-Seat Boucle Sofa Bed is the ideal addition to your home. This multipurpose sofa offers more than just comfortable seating.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx21", name: "Talven 5 Seater Modular Curved Boucle Sofa in Cream White", cat: "Living Room", room: "Living Room", price: 2782, memberPrice: 2504, sku: "SH-11269", tag: "New", ph: "", img: "assets/products/lx21.webp",
    imgs: ["assets/products/lx21.webp", "assets/products/lx21-2.webp", "assets/products/lx21-3.webp", "assets/products/lx21-4.webp", "assets/products/lx21-5.webp"],
    fastShip: true,
    desc: "Sink Into Sculptural Comfort Imagine the whole family piling onto one seriously comfy sofa that actually fits everyone without feeling bulky. The Talven 5 Seater Modular Curved Bouclé Sofa wraps your living room in soft, sculptural curves and lounge-all-day comfort, turning movie nights and lazy Sundays into a luxury experience. In a pristine Cream White , it creates a bright, airy focal point that elevates any modern interior.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx22", name: "Corina 4 Seater Modular Boucle Sofa in Cream White", cat: "Living Room", room: "Living Room", price: 2650, memberPrice: 2385, sku: "SH-11270", tag: "New", ph: "", img: "assets/products/lx22.webp",
    imgs: ["assets/products/lx22.webp", "assets/products/lx22-2.webp", "assets/products/lx22-3.webp", "assets/products/lx22-4.webp", "assets/products/lx22-5.webp"],
    fastShip: true,
    desc: "Corina 4 Seater Modular Boucle Sofa - Cream White If you have been looking for the best modular sofas you can get your hands on, you've come to the right place. Please look at our Corina 4-seater modular boucle sofa in cream white. Designed in separate components, this four-seater sofa can effortlessly come together as a whole in any shape you desire to befit the structure of your room.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx23", name: "Millie 3 Seater Spill-Resistant Modular Sofa in Light Beige", cat: "Living Room", room: "Living Room", price: 1363, memberPrice: 1227, sku: "SH-11271", tag: "New", ph: "", img: "assets/products/lx23.webp",
    imgs: ["assets/products/lx23.webp", "assets/products/lx23-2.webp", "assets/products/lx23-3.webp", "assets/products/lx23-4.webp", "assets/products/lx23-5.webp"],
    fastShip: true,
    desc: "Transform your home with the Millie 3-Seater Fabric Modular Sofa in light beige – the ultimate blend of comfort, style, and flexibility. This modern modular sofa is perfect for family lounging or entertaining, offering deep seating and a soft linen finish that works beautifully in both classic and contemporary living spaces. Wrapped in premium stain resistant fabric, this beige fabric sofa is soft to the touch yet durable enough for everyday life.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  { id: "lx24", name: "Ravo Slipcover 4 Seater Modular Sofa Set in Light Beige", cat: "Living Room", room: "Living Room", price: 1957, memberPrice: 1761, sku: "SH-11272", tag: "New", ph: "", img: "assets/products/lx24.webp",
    imgs: ["assets/products/lx24.webp", "assets/products/lx24-2.webp", "assets/products/lx24-3.webp", "assets/products/lx24-4.webp", "assets/products/lx24-5.webp"],
    fastShip: true,
    desc: "Give Your Living Room That Calm Designer Feel Create a serene, designer-inspired sanctuary in your home with the Ravo 4 Seater Modular Sofa Set in Light Beige. This premium beige modular lounge is designed to make your living space feel lighter, softer, and more inviting from the moment you step inside. Combining an airy, modern aesthetic with superior comfort, this 4 seater sofa is the ultimate choice for those seeking both style and versatility.",
    specs: { "Type": "Living Room > Sofas & Seating > Sofas & Lounges" } },

  /* ===== Ready to ship — batch 3: armchairs, beds, dining (ready to ship) ===== */
  { id: "lx25", name: "Nerida Boucle Swivel Dining Chair in Cream White", cat: "Dining", room: "Dining", price: 285, memberPrice: 257, sku: "SH-11273", tag: "New", ph: "", img: "assets/products/lx25.webp",
    imgs: ["assets/products/lx25.webp", "assets/products/lx25-2.webp", "assets/products/lx25-3.webp", "assets/products/lx25-4.webp", "assets/products/lx25-5.webp"],
    fastShip: true,
    desc: "Cream Boucle Dining Chair That Swivels a Full 360 Degrees The Nerida Boucle Swivel Dining Chair in Cream White turns, which changes how a dining chair behaves in a room. Getting up doesn't mean shuffling the chair backwards and scraping the floor — you turn and stand. Sitting sideways to talk to someone doesn't mean twisting your back. And once the meal is over, you can turn, stand and push the chair back in at the table.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Chairs" } },

  { id: "lx26", name: "Giselle Boucle Swivel Accent Chair in Cream White", cat: "Living Room", room: "Living Room", price: 417, memberPrice: 375, sku: "SH-11274", tag: "New", ph: "", img: "assets/products/lx26.webp",
    imgs: ["assets/products/lx26.webp", "assets/products/lx26-2.webp", "assets/products/lx26-3.webp", "assets/products/lx26-4.webp", "assets/products/lx26-5.webp"],
    fastShip: true,
    desc: "Cream Boucle Swivel Chair That Arrives Ready to Sit In The Giselle Boucle Swivel Accent Chair in Cream White turns up fully assembled — no allen key, no instruction sheet, no chair that wobbles because one bolt never quite tightened. You unbox it, carry it to the corner, and sit down. The shape is worth the trip: a sculptural curved backrest that wraps rather than sits flat behind you, upholstered in boucle , a looped fabric with enough texture that a plain cream chair reads as a considered one.",
    specs: { "Type": "Living Room > Sofas & Seating > Occasional Chairs" } },

  { id: "lx27", name: "Ohio Curved Boucle Dining Chair Set of 2 in Cream & Oak", cat: "Dining", room: "Dining", price: 252, memberPrice: 227, sku: "SH-11275", tag: "New", ph: "", img: "assets/products/lx27.webp",
    imgs: ["assets/products/lx27.webp", "assets/products/lx27-2.webp", "assets/products/lx27-3.webp", "assets/products/lx27-4.webp", "assets/products/lx27-5.webp"],
    fastShip: true,
    desc: "Soft curves and warm tones for effortless everyday dining Add comfort and calm to your dining space with the Ohio Bouclé Dining Chair Set in Cream with Oak finish legs. Upholstered in soft cream bouclé and designed with a modern curved backrest and armrests, these chairs offer a blend of relaxed elegance and everyday function in your dining room . The warm oak-toned base pairs beautifully with neutral interiors, making them an ideal choice for contemporary Australian homes.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Chairs" } },

  { id: "lx28", name: "Lunari Bouclé Curved Accent Chair in Beige", cat: "Living Room", room: "Living Room", price: 439, memberPrice: 395, sku: "SH-11276", tag: "New", ph: "", img: "assets/products/lx28.webp",
    imgs: ["assets/products/lx28.webp", "assets/products/lx28-2.webp", "assets/products/lx28-3.webp", "assets/products/lx28-4.webp", "assets/products/lx28-5.webp"],
    fastShip: true,
    desc: "Curve appeal comfort you can feel Imagine sinking into a cosy corner that looks as good as it feels. The Lunari Bouclé Curved Accent Chair wraps you in soft texture and smooth curves, bringing instant warmth and style to your space without the fuss. It is the smart little upgrade that makes every sit-down feel special.",
    specs: { "Type": "Living Room > Sofas & Seating > Occasional Chairs" } },

  { id: "lx29", name: "Brent Queen Gas Lift Bed in Cream White", cat: "Bedroom", room: "Bedroom", price: 791, memberPrice: 712, sku: "SH-11277", tag: "New", ph: "", img: "assets/products/lx29.webp",
    imgs: ["assets/products/lx29.webp", "assets/products/lx29-2.webp", "assets/products/lx29-3.webp", "assets/products/lx29-4.webp", "assets/products/lx29-5.webp"],
    fastShip: true,
    desc: "Wake Up to a Calm, Clutter-Free Sanctuary Imagine lifting your mattress with one smooth, effortless motion to reveal a hidden storage oasis. The Brent Queen Gas Lift Bed in Cream White is the ultimate lifestyle upgrade, turning your bedroom into an organised retreat. Wrapped in on-trend bouclé, this bed combines high-end texture with the serious storage smarts required for modern Australian living. Smart Storage Wrapped in Soft Bouclé Style Reclaim your wardrobe space and eliminate under-bed clutter for good.",
    specs: { "Type": "Bedroom > Bed frames > Queen" } },

  { id: "lx30", name: "Nikias King Boucle Fabric Bed Frame in Cream White", cat: "Bedroom", room: "Bedroom", price: 758, memberPrice: 682, sku: "SH-11278", tag: "New", ph: "", img: "assets/products/lx30.webp",
    imgs: ["assets/products/lx30.webp", "assets/products/lx30-2.webp", "assets/products/lx30-3.webp", "assets/products/lx30-4.webp", "assets/products/lx30-5.webp"],
    fastShip: true,
    desc: "Elevate your bedroom into a luxurious sanctuary with the Nikias Tufted Bouclé King Bed Frame. Designed to offer the perfect blend of style and comfort, this king-size bed features a plush tufted headboard wrapped in premium bouclé fabric, delivering a cloud-like sensation that invites relaxation. Built with a solid wood frame for exceptional durability and backed by a 5-year warranty, the Nikias bed frame promises long-lasting support and elegance.",
    specs: { "Type": "Bedroom > Bed frames > King" } },

  { id: "lx31", name: "Maren King Storage Bed Base Set in Light Warm Beige", cat: "Bedroom", room: "Bedroom", price: 813, memberPrice: 732, sku: "SH-11279", tag: "New", ph: "", img: "assets/products/lx31.webp",
    imgs: ["assets/products/lx31.webp", "assets/products/lx31-2.webp", "assets/products/lx31-3.webp", "assets/products/lx31-4.webp", "assets/products/lx31-5.webp"],
    fastShip: true,
    desc: "Smart Storage Style for Your King Bedroom Imagine your bedroom feeling calm and clutter-free every single night. The Maren King Storage Bed Base Set in Light Warm Beige gives you that sophisticated boutique hotel look, combined with clever hidden storage that quietly tidies up the chaos of everyday life. It’s the ultimate foundation for a master suite that prioritizes both relaxation and organization.",
    specs: { "Type": "Bedroom > Bed frames > King" } },

  { id: "lx32", name: "Mara King Velvet Gas Lift Storage Bed Frame in Cream White", cat: "Bedroom", room: "Bedroom", price: 1132, memberPrice: 1019, sku: "SH-11280", tag: "New", ph: "", img: "assets/products/lx32.webp",
    imgs: ["assets/products/lx32.webp", "assets/products/lx32-2.webp", "assets/products/lx32-3.webp", "assets/products/lx32-4.webp", "assets/products/lx32-5.webp"],
    fastShip: true,
    desc: "A Luxury King-Sized Storage Bed Solution for Modern Australian Homes The Mara King Velvet Gas Lift Bed is the ultimate fusion of boutique hotel aesthetics and high-performance organisation. Wrapped in a crisp, elegant cream white velvet, this frame provides a bright, sophisticated anchor for your bedroom while offering a massive internal storage footprint.",
    specs: { "Type": "Bedroom > Bed frames > King" } },

  { id: "lx33", name: "Aeris 180cm Marble Look Dining Table With Wood Base in Oak", cat: "Kitchenware", room: "Kitchenware", price: 879, memberPrice: 791, sku: "SH-11281", tag: "New", ph: "", img: "assets/products/lx33.webp",
    imgs: ["assets/products/lx33.webp", "assets/products/lx33-2.webp", "assets/products/lx33-3.webp", "assets/products/lx33-4.webp", "assets/products/lx33-5.webp"],
    fastShip: true,
    desc: "Luxe dining made easy Imagine weeknight dinners and long Sunday lunches feeling a little more effortless. The Aeris 180cm Marble Look Dining Table With Wood Base brings the elegant look of marble with the smarts of a durable, easy-care surface—so you can focus on good food and better company. Everyday luxe without the worry With a hard-wearing sintered stone top and a warm timber-look base, Aeris gives you the designer feel you love without the maintenance stress.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Tables" } },

  { id: "lx34", name: "Faunus 200cm 8 Seater Dining Table in Natural", cat: "Kitchenware", room: "Kitchenware", price: 824, memberPrice: 742, sku: "SH-11282", tag: "New", ph: "", img: "assets/products/lx34.webp",
    imgs: ["assets/products/lx34.webp", "assets/products/lx34-2.webp", "assets/products/lx34-3.webp", "assets/products/lx34-4.webp", "assets/products/lx34-5.webp"],
    fastShip: true,
    desc: "Faunus 8 Seater Dining Table with Pillar Legs – Natural Upgrade your dining space with the Faunus 8 Seater Dining Table with Pillar Legs, a statement piece from our designer table collection. Designed for both elegance and durability, this designer luxe dining table is crafted from high-quality engineered wood with a smooth veneer finish, ensuring long-lasting beauty. Its oval shape and fluted pillar legs add a striking, contemporary touch to any dining area.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Tables" } },

  { id: "lx35", name: "Nola Chenille Fabric Dining Chair in Warm Ivory", cat: "Kitchenware", room: "Kitchenware", price: 296, memberPrice: 266, sku: "SH-11283", tag: "New", ph: "", img: "assets/products/lx35.webp",
    imgs: ["assets/products/lx35.webp", "assets/products/lx35-2.webp", "assets/products/lx35-3.webp", "assets/products/lx35-4.webp", "assets/products/lx35-5.webp"],
    fastShip: true,
    desc: "Ivory Chenille Dining Chair with Wraparound Arms The Nola Chenille Fabric Dining Chair in Warm Ivory is built for the part of dinner that happens after the plates are cleared. Wraparound arms curve out of the frame rather than being bolted on, so there's somewhere to rest your elbows through a second coffee, and the broad padded seat over high-density foam gives you room to shift position instead of sitting to attention.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Chairs" } },

  { id: "lx36", name: "Eisha Velvet Dining Chair in Deep Mocha Brown (Set of 2)", cat: "Kitchenware", room: "Kitchenware", price: 362, memberPrice: 326, sku: "SH-11284", tag: "New", ph: "", img: "assets/products/lx36.webp",
    imgs: ["assets/products/lx36.webp", "assets/products/lx36-2.webp", "assets/products/lx36-3.webp", "assets/products/lx36-4.webp", "assets/products/lx36-5.webp"],
    fastShip: true,
    desc: "Dress your dining in everyday luxury Imagine sitting down to a meal that feels a little more special every time. The Eisha Velvet Dining Chair set of 2 wraps you in soft velvet, comfy foam and effortless style, turning busy weeknight dinners and long Sunday lunches into moments you’ll actually want to linger over. Comfort you can sink into style you can show off With a supportive metal frame fully upholstered in plush velvet , Eisha blends modern lines with a welcoming feel.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Chairs" } },

  /* ===== Ready to ship — batch 4: outdoor, buffets, bedside, bar stools (ready to ship) ===== */
  { id: "lx37", name: "Lola 5 Seater Timber Outdoor Lounge Set in Beige", cat: "Outdoor", room: "Outdoor", price: 1792, memberPrice: 1613, sku: "SH-11285", tag: "New", ph: "", img: "assets/products/lx37.webp",
    imgs: ["assets/products/lx37.webp", "assets/products/lx37-2.webp", "assets/products/lx37-3.webp", "assets/products/lx37-4.webp", "assets/products/lx37-5.webp"],
    fastShip: true,
    desc: "Solid Acacia Wood Outdoor Lounge Setting with Nested Coffee Tables Turn your patio, deck, or balcony into an inviting open-air retreat. The Lola 5 Seater Timber Outdoor Lounge Set in Beige pairs natural solid acacia wood with warm, comfortable cushioning and a clever nested table design, creating a stylish focal point for casual entertaining.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Sofas & Lounges" } },

  { id: "lx38", name: "Reuben 6 Seater Outdoor Lounge Set in Beige", cat: "Outdoor", room: "Outdoor", price: 3189, memberPrice: 2870, sku: "SH-11286", tag: "New", ph: "", img: "assets/products/lx38.webp",
    imgs: ["assets/products/lx38.webp", "assets/products/lx38-2.webp", "assets/products/lx38-3.webp", "assets/products/lx38-4.webp", "assets/products/lx38-5.webp"],
    fastShip: true,
    desc: "Modern Aluminium Outdoor Corner Lounge Set with Ceramic Glass Table Transform your patio, balcony, or backyard into a sophisticated outdoor living area. The Reuben 6 Seater Outdoor Lounge Set in Beige combines a sleek powder-coated aluminium frame in a warm neutral beige with a durable ceramic tempered glass coffee table, bringing subtle contemporary elegance and resort-style relaxation to your home.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Sofas & Lounges" } },

  { id: "lx39", name: "Bayo 6-Seater Aluminium Outdoor Set in Grey", cat: "Outdoor", room: "Outdoor", price: 1297, memberPrice: 1167, sku: "SH-11287", tag: "New", ph: "", img: "assets/products/lx39.webp",
    imgs: ["assets/products/lx39.webp", "assets/products/lx39-2.webp", "assets/products/lx39-3.webp", "assets/products/lx39-4.webp", "assets/products/lx39-5.webp"],
    fastShip: true,
    desc: "Bayo 6 Seater Aluminium Outdoor Furniture Set Something that you can be proud of, our Bayo 6 Seater Aluminium Outdoor Furniture Set is designed for you to enjoy lounging outdoors! This outdoor furniture set promises a comfortable seating for up to 6 people. It is absolutely a crowd pleaser when having a party in your garden. Along with its thick 15cm seat and back cushion, it’s ready to serve you all day! Features: Comfortable seating for up to 6 people , perfect for relaxed patio seating and outdoor entertaining.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Sofas & Lounges" } },

  { id: "lx40", name: "Brujas 4 Seater Wicker Outdoor Lounge Set in Light Beige", cat: "Outdoor", room: "Outdoor", price: 1484, memberPrice: 1336, sku: "SH-11288", tag: "New", ph: "", img: "assets/products/lx40.webp",
    imgs: ["assets/products/lx40.webp", "assets/products/lx40-2.webp", "assets/products/lx40-3.webp", "assets/products/lx40-4.webp", "assets/products/lx40-5.webp"],
    fastShip: true,
    desc: "Brujas 4 Seater Wicker Outdoor Sofa Set Find the perfect outdoor sofa set for your lounge setting! Brujas 4 Seater Wicker Sofa Set is a perfect blend of style, comfort, and durability, designed to elevate your outdoor space. Crafted with meticulous attention to detail, this set effortlessly combines contemporary aesthetics with functional features to create an inviting seating arrangement.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Sofas & Lounges" } },

  { id: "lx41", name: "Adrian 100cm Storage Sideboard in Black", cat: "Living Room", room: "Living Room", price: 505, memberPrice: 455, sku: "SH-11289", tag: "New", ph: "", img: "assets/products/lx41.webp",
    imgs: ["assets/products/lx41.webp", "assets/products/lx41-2.webp", "assets/products/lx41-3.webp", "assets/products/lx41-4.webp", "assets/products/lx41-5.webp"],
    fastShip: true,
    desc: "Storage That Makes Your Space Feel Sorted Imagine walking into your dining room, hallway or living area and seeing everything tucked away and organised. The Adrian 100cm Storage Sideboard in Black brings that calm, put-together feeling. It pairs practical storage with a striking textured front and a bold black finish that sharpens the look of the room. Goodbye Clutter, Hello Style From dinnerware and table linen to everyday bits and pieces, Adrian helps you hide the mess without giving up on good looks.",
    specs: { "Type": "Living Room > Storage > Sideboards & Buffets" } },

  { id: "lx42", name: "Maris Storage Buffet in Oak", cat: "Living Room", room: "Living Room", price: 670, memberPrice: 603, sku: "SH-11290", tag: "New", ph: "", img: "assets/products/lx42.webp",
    imgs: ["assets/products/lx42.webp", "assets/products/lx42-2.webp", "assets/products/lx42-3.webp", "assets/products/lx42-4.webp", "assets/products/lx42-5.webp"],
    fastShip: true,
    desc: "Modern Oak Storage Buffet with Concealed 3-Door Design Keep your home tidy, organised, and beautifully styled. The Maris Storage Buffet in Oak combines clean contemporary lines with generous concealed storage, providing a low-profile solution for decluttering dining rooms, living areas, or entryways.",
    specs: { "Type": "Dining & kitchen > Dining > Storage Buffets" } },

  { id: "lx43", name: "Viola 227cm Sintered Stone Storage Buffet in Natural", cat: "Living Room", room: "Living Room", price: 1451, memberPrice: 1306, sku: "SH-11291", tag: "New", ph: "", img: "assets/products/lx43.webp",
    imgs: ["assets/products/lx43.webp", "assets/products/lx43-2.webp", "assets/products/lx43-3.webp", "assets/products/lx43-4.webp", "assets/products/lx43-5.webp"],
    fastShip: true,
    desc: "Bring Order to Grand Spaces Imagine walking into your dining or living area and seeing everything feel polished, spacious, and beautifully organised. The Viola 227cm Sintered Stone Storage Buffet in Natural is a statement piece that conceals everyday clutter, elevates your home, and delivers storage that works as hard as you do. With its extra-long 227cm design, the Viola Storage Buffet suits larger dining and living spaces with a clean, architectural profile.",
    specs: { "Type": "Dining & kitchen > Dining > Storage Buffets" } },

  { id: "lx44", name: "Melina 3 Drawer Fluted Bedside Table in Walnut", cat: "Bedroom", room: "Bedroom", price: 571, memberPrice: 514, sku: "SH-11292", tag: "New", ph: "", img: "assets/products/lx44.webp",
    imgs: ["assets/products/lx44.webp", "assets/products/lx44-2.webp", "assets/products/lx44-3.webp", "assets/products/lx44-4.webp", "assets/products/lx44-5.webp"],
    fastShip: true,
    desc: "Wide Walnut Bedside Table with Fluted Detail and Soft-Close Storage The Melina 3 Drawer Fluted Bedside Table in Walnut measures a generous 70cm across, enough for a lamp, your phone on charge, a book and a glass of water side by side rather than stacked. Vertical fluting catches the light across the drawer fronts, while softly rounded corners keep the warm walnut profile contemporary rather than boxy. Behind the fronts sit three deep drawers for chargers, books, reading glasses and sleep essentials.",
    specs: { "Type": "Bedroom > Bedside tables > White Bedside Tables" } },

  { id: "lx45", name: "Tamara 3 Drawer Bedside Table in Walnut", cat: "Bedroom", room: "Bedroom", price: 494, memberPrice: 445, sku: "SH-11293", tag: "New", ph: "", img: "assets/products/lx45.webp",
    imgs: ["assets/products/lx45.webp", "assets/products/lx45-2.webp", "assets/products/lx45-3.webp", "assets/products/lx45-4.webp", "assets/products/lx45-5.webp"],
    fastShip: true,
    desc: "Curved Walnut Bedside Table with Handleless Soft-Close Drawers The Tamara 3 Drawer Bedside Table in Walnut does away with knobs and pulls entirely. Integrated handles are cut into the drawer fronts, leaving an unbroken curved face, while the warm walnut tone keeps the whole piece rich and calm. Three drawers hold books, chargers, skincare and reading glasses, and the tabletop stays deep enough for a lamp and a glass of water side by side.",
    specs: { "Type": "Bedroom > Bedside tables" } },

  { id: "lx46", name: "Hamish 2 Drawer Fluted Bedside Table in White", cat: "Bedroom", room: "Bedroom", price: 164, memberPrice: 148, sku: "SH-11294", tag: "New", ph: "", img: "assets/products/lx46.webp",
    imgs: ["assets/products/lx46.webp", "assets/products/lx46-2.webp", "assets/products/lx46-3.webp", "assets/products/lx46-4.webp", "assets/products/lx46-5.webp"],
    fastShip: true,
    desc: "Fluted style tidy nights Imagine your bedroom feeling calm and clutter free every night. The Hamish 50cm 2 Drawer Fluted Bedside Table in white gives you a stylish spot for your book phone and glass of water while hiding away the rest in smooth push open drawers. Compact design big bedroom upgrade This clever little bedside makes the most of its 50cm size offering generous storage without taking over your room.",
    specs: { "Type": "Bedroom > Bedside tables > White Bedside Tables" } },

  { id: "lx47", name: "Jeremi High Back Linen Bar Stool Set of 2 in Wheat Oak", cat: "Kitchenware", room: "Kitchenware", price: 340, memberPrice: 306, sku: "SH-11295", tag: "New", ph: "", img: "assets/products/lx47.webp",
    imgs: ["assets/products/lx47.webp", "assets/products/lx47-2.webp", "assets/products/lx47-3.webp", "assets/products/lx47-4.webp", "assets/products/lx47-5.webp"],
    fastShip: true,
    desc: "Jeremi Linen Upholstered High-Back Bar Stool (Set of 2) – Wheat Oak Elevate your kitchen or bar area with the Jeremi Linen Upholstered High-Back Bar Stool (Set of 2), a perfect blend of designer luxe aesthetics and everyday comfort. Featuring wheat-coloured linen upholstery and hot-printed oak steel legs, these stylish stools add a sophisticated touch to any modern or contemporary space.",
    specs: { "Type": "Dining & kitchen > Dining > Bar Stools" } },

  { id: "lx48", name: "Haleo Curved Boucle Fabric Barstool in Cream White (Set of 2)", cat: "Kitchenware", room: "Kitchenware", price: 406, memberPrice: 365, sku: "SH-11296", tag: "New", ph: "", img: "assets/products/lx48.webp",
    imgs: ["assets/products/lx48.webp", "assets/products/lx48-2.webp", "assets/products/lx48-3.webp", "assets/products/lx48-4.webp", "assets/products/lx48-5.webp"],
    fastShip: true,
    desc: "Your kitchen just got comfier Settle into the Haleo Curved Bouclé Barstool and experience the perfect balance of modern design and inviting warmth. Wrapped in plush bouclé with softly contoured lines, it transforms your kitchen bench into a space made for relaxed Australian living—where everyday moments feel a touch more luxurious. Curved comfort at the perfect height With a supportive arched backrest and a 66.5cm seat height, Haleo makes long brekkies and late-night chats feel easy.",
    specs: { "Type": "Dining & kitchen > Dining > Bar Stools" } },

  /* ===== Ready to ship — batch 5: TV units, coffee & console tables ===== */
  { id: "lx49", name: "Gabrielle Modern TV Unit in Black", cat: "Living Room", room: "Living Room", price: 681, memberPrice: 613, sku: "SH-11297", tag: "New", ph: "", img: "assets/products/lx49.webp",
    imgs: ["assets/products/lx49.webp", "assets/products/lx49-2.webp", "assets/products/lx49-3.webp", "assets/products/lx49-4.webp", "assets/products/lx49-5.webp"],
    fastShip: true,
    desc: "A Living Room Upgrade That Does More Picture a TV unit that pulls the whole room together rather than adding to the clutter. The Gabrielle Modern TV Unit in Black combines sculptural design with smart storage in one practical piece, leaving your living area cleaner and calmer. Bold Look, Smarter Storage Layered curved detailing and a striking black finish give Gabrielle a refined modern edge in your entertainment space.",
    specs: { "Type": "Living Room > Storage > TV Units & Entertainment Units" } },

  { id: "lx50", name: "Vivienne 4 Door Fluted TV Unit in Oak", cat: "Living Room", room: "Living Room", price: 637, memberPrice: 573, sku: "SH-11298", tag: "New", ph: "", img: "assets/products/lx50.webp",
    imgs: ["assets/products/lx50.webp", "assets/products/lx50-2.webp", "assets/products/lx50-3.webp", "assets/products/lx50-4.webp", "assets/products/lx50-5.webp"],
    fastShip: true,
    desc: "Bring Order to Your Living Room Swap clutter for calm with a living room that finally feels polished. The Vivienne 4 Door Fluted TV Unit in Oak gives you a clean, design-led look while hiding away the bits and pieces that tend to pile up around the TV. Statement Style That Works Hard With its sculptural fluted front and warm oak finish, Vivienne helps your space feel more refined and pulled together.",
    specs: { "Type": "Living Room > Storage > TV Units & Entertainment Units" } },

  { id: "lx51", name: "Melanie Slimline TV Unit in Black", cat: "Living Room", room: "Living Room", price: 703, memberPrice: 633, sku: "SH-11299", tag: "New", ph: "", img: "assets/products/lx51.webp",
    imgs: ["assets/products/lx51.webp", "assets/products/lx51-2.webp", "assets/products/lx51-3.webp", "assets/products/lx51-4.webp", "assets/products/lx51-5.webp"],
    fastShip: true,
    desc: "A Sleek Home for Screen Time Bring a calm, organised feel back to your living room. In a black finish, the Melanie Slimline TV Unit pulls your entertainment setup together with a streamlined look, practical storage and a low-profile design that keeps the space polished rather than cluttered. More Storage, Less Visual Mess Remotes, charging cables, gaming gear and everyday bits and pieces all have somewhere to go.",
    specs: { "Type": "Living Room > Storage > TV Units & Entertainment Units" } },

  { id: "lx52", name: "Galya Adjustable Entertainment Storage TV Unit in Teak", cat: "Living Room", room: "Living Room", price: 450, memberPrice: 405, sku: "SH-11300", tag: "New", ph: "", img: "assets/products/lx52.webp",
    imgs: ["assets/products/lx52.webp", "assets/products/lx52-2.webp", "assets/products/lx52-3.webp", "assets/products/lx52-4.webp", "assets/products/lx52-5.webp"],
    fastShip: true,
    desc: "Galya Extendable Storage TV Unit - Teak Bring warmth and functionality to your living room with the Galya Extendable Storage TV Unit in Teak. This sleek and modern entertainment unit is designed to grow with your space, featuring an extendable length from 203cm to 269cm. The rich teak finish adds a timeless elegance, making it a versatile piece for both contemporary and classic interiors.",
    specs: { "Type": "Living Room > Storage > TV Units & Entertainment Units" } },

  { id: "lx53", name: "Nicole 120cm Coffee Table with Organic Curve in Walnut", cat: "Living Room", room: "Living Room", price: 230, memberPrice: 207, sku: "SH-11301", tag: "New", ph: "", img: "assets/products/lx53.webp",
    imgs: ["assets/products/lx53.webp", "assets/products/lx53-2.webp", "assets/products/lx53-3.webp", "assets/products/lx53-4.webp", "assets/products/lx53-5.webp"],
    fastShip: true,
    desc: "Bring rich warmth and modern style into your living room with the Nicole 120cm Oval Coffee Table with organic curve in Walnut. Designed with smooth curves and a deep walnut finish, this table creates a statement piece that blends seamlessly with both contemporary and timeless interiors. Backed by Living’s 3-year warranty, it’s a centrepiece you can enjoy for years to come. Features Organic oval shape – sculptural silhouette that enhances both modern and classic spaces.",
    specs: { "Type": "Living Room > Tables > Coffee Tables" } },

  { id: "lx54", name: "Adina 80cm Organic Curve Coffee Table in Travertine Look", cat: "Living Room", room: "Living Room", price: 406, memberPrice: 365, sku: "SH-11302", tag: "New", ph: "", img: "assets/products/lx54.webp",
    imgs: ["assets/products/lx54.webp", "assets/products/lx54-2.webp", "assets/products/lx54-3.webp", "assets/products/lx54-4.webp", "assets/products/lx54-5.webp"],
    fastShip: true,
    desc: "Organic Stone Meets Polished Steel Make a contemporary statement with the Adina 80cm Organic Curve Coffee Table in Travertine Look. Its free-form sintered stone top flows in soft, asymmetric curves, creating a sculptural silhouette that looks different from every angle. A polished stainless-steel cylindrical base brings a striking material contrast, reflecting the surrounding space while giving Adina a clean, contemporary presence.",
    specs: { "Type": "Living Room > Tables > Coffee Tables" } },

  { id: "lx55", name: "Naya Round Mother of Pearl Coffee Table in Mocha Cream", cat: "Living Room", room: "Living Room", price: 934, memberPrice: 841, sku: "SH-11303", tag: "New", ph: "", img: "assets/products/lx55.webp",
    imgs: ["assets/products/lx55.webp", "assets/products/lx55-2.webp", "assets/products/lx55-3.webp", "assets/products/lx55-4.webp", "assets/products/lx55-5.webp"],
    fastShip: true,
    desc: "Turn Your Living Room into a Calm Escape Picture a coffee table that quietly anchors your space while adding a soft shimmer every time the light changes. The Naya Round Mother of Pearl Coffee Table in Mocha Cream brings a warm modern feel to your lounge making everyday moments on the sofa feel a little more styled and special. Warm Tones Modern Shape With its 106cm round top and subtle checkered mocha cream pattern Naya creates a generous practical surface that still feels light and elegant.",
    specs: { "Type": "Living Room > Tables > Coffee Tables" } },

  { id: "lx56", name: "Verena Round Porcelain Coffee Table Set with Walnut Base", cat: "Living Room", room: "Living Room", price: 769, memberPrice: 692, sku: "SH-11304", tag: "New", ph: "", img: "assets/products/lx56.webp",
    imgs: ["assets/products/lx56.webp", "assets/products/lx56-2.webp", "assets/products/lx56-3.webp", "assets/products/lx56-4.webp", "assets/products/lx56-5.webp"],
    fastShip: true,
    desc: "Versatile 2-Piece Nesting Design for Modern Living The Verena Round Porcelain Coffee Table Set with Walnut Base is engineered specifically for living rooms and lounge areas where versatile surface space and clean design are essential. Featuring a 2-piece nesting configuration , this coffee table set provides dual surface levels that can be grouped together or styled separately, delivering functional everyday utility without crowding your floor plan.",
    specs: { "Type": "Living Room > Tables > Coffee Tables" } },

  { id: "lx57", name: "Valdor Signature Concrete Console Table in Travertine", cat: "Living Room", room: "Living Room", price: 725, memberPrice: 653, sku: "SH-11305", tag: "New", ph: "", img: "assets/products/lx57.webp",
    imgs: ["assets/products/lx57.webp", "assets/products/lx57-2.webp", "assets/products/lx57-3.webp", "assets/products/lx57-4.webp", "assets/products/lx57-5.webp"],
    fastShip: true,
    desc: "Transform Your Hallway into a Feature Elevate your entryway with sculptural designer furniture. The Valdor Signature Concrete Console Table in Travertine brings high-end stone aesthetics with a soft cloud-like top and bold rounded base that transforms your home from the moment you enter. Stone-Look Beauty, Everyday Durability The travertine-inspired finish and solid concrete construction deliver both style and substance. Built to handle real life, from styling vases and art to holding keys and daily essentials.",
    specs: { "Type": "Living Room > Storage > Hallway Furniture" } },

  { id: "lx58", name: "Watson 2 Drawers Console Table Steel Legs White", cat: "Living Room", room: "Living Room", price: 307, memberPrice: 276, sku: "SH-11306", tag: "New", ph: "", img: "assets/products/lx58.webp",
    imgs: ["assets/products/lx58.webp", "assets/products/lx58-2.webp", "assets/products/lx58-3.webp", "assets/products/lx58-4.webp", "assets/products/lx58-5.webp"],
    fastShip: true,
    desc: "Watson 2 Drawers Console Table with Steel Legs Are you looking for the sleekest yet most functional console table for your home? Look no further than our store. We have the most elegant model you’ve ever seen. Our Watson 2 drawers console table with steel legs promises to fit into the most compact spaces and create a stunning look. You will never have to worry about misplacing your keys, wallet, and other little essentials when you can store them safely in our console.",
    specs: { "Type": "Dining & kitchen > Dining > Storage Buffets" } },

  /* ===== Ready to ship — batch 6: dining + outdoor (fills thin pages) ===== */
  { id: "lx59", name: "Anders 180cm Oval Wooden Dining Table in Walnut", cat: "Kitchenware", room: "Kitchenware", price: 901, memberPrice: 811, sku: "SH-11307", tag: "New", ph: "", img: "assets/products/lx59.webp",
    imgs: ["assets/products/lx59.webp", "assets/products/lx59-2.webp", "assets/products/lx59-3.webp", "assets/products/lx59-4.webp", "assets/products/lx59-5.webp"],
    fastShip: true,
    desc: "Centralised Pedestal Architecture for Unobstructed Floor Plans The Anders 180cm Oval Wooden Dining Table in Walnut offers a space-optimizing solution for modern residential floor plans. By replacing traditional perimeter legs with a heavy-duty centralised pedestal base, this oval dining table maximizes under-table clearance and ensures unobstructed legroom for all users.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Tables" } },

  { id: "lx60", name: "Xander 120cm Fluted Outdoor Concrete Dining Table in Ivory", cat: "Kitchenware", room: "Kitchenware", price: 1319, memberPrice: 1187, sku: "SH-11308", tag: "New", ph: "", img: "assets/products/lx60.webp",
    imgs: ["assets/products/lx60.webp", "assets/products/lx60-2.webp", "assets/products/lx60-3.webp", "assets/products/lx60-4.webp", "assets/products/lx60-5.webp"],
    fastShip: true,
    desc: "Make every meal or gathering feel special with the Xander Round Outdoor Concrete Dining Table in elegant Ivory Waxed. Designed with a sleek round shape and crafted from a durable concrete and fibreglass blend, it delivers both style and strength. Perfect for indoor and outdoor use, this 4-seater table is ideal for patios, balconies, courtyards, or small dining spaces, and doubles beautifully as a foyer table or coffee table.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Concrete Tables" } },

  { id: "lx61", name: "Gabi 120cm Marble Look Dining Table in Oak", cat: "Kitchenware", room: "Kitchenware", price: 791, memberPrice: 712, sku: "SH-11309", tag: "New", ph: "", img: "assets/products/lx61.webp",
    imgs: ["assets/products/lx61.webp", "assets/products/lx61-2.webp", "assets/products/lx61-3.webp", "assets/products/lx61-4.webp", "assets/products/lx61-5.webp"],
    fastShip: true,
    desc: "Make everyday meals feel a little special with elegance Imagine your dining nook instantly lifting with the calm sophistication of a marble-look top and a sculptural base. The Gabi 120cm Marble Look Dining Table is the smart way to add both aesthetic appeal and functionality to compact spaces, bringing luxe style without the stress or upkeep of real stone. Dine big even in a smaller space Round, welcoming, and just the right size, Gabi comfortably seats four for weeknight dinners or Saturday brunch.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Tables" } },

  { id: "lx62", name: "Gigi 180cm Oval Wooden Dining Table in Oak", cat: "Kitchenware", room: "Kitchenware", price: 923, memberPrice: 831, sku: "SH-11310", tag: "New", ph: "", img: "assets/products/lx62.webp",
    imgs: ["assets/products/lx62.webp", "assets/products/lx62-2.webp", "assets/products/lx62-3.webp", "assets/products/lx62-4.webp", "assets/products/lx62-5.webp"],
    fastShip: true,
    desc: "Make Every Meal Feel Special Imagine your dining space instantly feeling more open, warm, and inviting. The Gigi 180cm Oval Wooden Dining Table, a beautifully crafted oak dining table, brings smooth curves and a refined timber look to your home, with a design that feels stylish yet effortless. If you’ve been craving a centrepiece that elevates everyday dinners and weekend catch-ups, the Gigi dining table is the clever solution.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Tables" } },

  { id: "lx63", name: "Marciana 6 Seater Fluted Pillar Dining Table in Natural", cat: "Kitchenware", room: "Kitchenware", price: 670, memberPrice: 603, sku: "SH-11311", tag: "New", ph: "", img: "assets/products/lx63.webp",
    imgs: ["assets/products/lx63.webp", "assets/products/lx63-2.webp", "assets/products/lx63-3.webp", "assets/products/lx63-4.webp", "assets/products/lx63-5.webp"],
    fastShip: true,
    desc: "Marciana 8 Seater Fluted Oval Dining Table Add style and function to your dining area with the Marciana 8 Seater Fluted Oval Dining Table ina natural wood finish. This table features a smooth surface veneer and a unique fluted design that makes it a standout in your dining space . It comfortably seats up to eight people, making it perfect for family dinners, special occasions, or creating the perfect setting for your next gathering.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Tables" } },

  { id: "lx64", name: "Marta 120cm 4 Seater Round Dining Table in Walnut", cat: "Kitchenware", room: "Kitchenware", price: 406, memberPrice: 365, sku: "SH-11312", tag: "New", ph: "", img: "assets/products/lx64.webp",
    imgs: ["assets/products/lx64.webp", "assets/products/lx64-2.webp", "assets/products/lx64-3.webp", "assets/products/lx64-4.webp", "assets/products/lx64-5.webp"],
    fastShip: true,
    desc: "Premium Curved Engineering for Fluid Traffic Flow and Everyday Dining The Marta 120cm Round Dining Table in Walnut is purpose-built to comfortably seat 4 people within a space-saving 120cm footprint—making it the ultimate dining solution for small apartments and compact dining nooks. By eliminating rigid corners and traditional outer legs, this 4 seater round dining table maximizes under-table clearance so all 4 diners enjoy unobstructed legroom without crowding your floor plan.",
    specs: { "Type": "Dining & kitchen > Dining > Dining Tables" } },

  { id: "lx65", name: "Evone 4 Seater Stone Outdoor Dining Set in Natural", cat: "Outdoor", room: "Outdoor", price: 1154, memberPrice: 1039, sku: "SH-11313", tag: "New", ph: "", img: "assets/products/lx65.webp",
    imgs: ["assets/products/lx65.webp", "assets/products/lx65-2.webp", "assets/products/lx65-3.webp", "assets/products/lx65-4.webp", "assets/products/lx65-5.webp"],
    fastShip: true,
    desc: "Everyday dinners that feel like a holiday Imagine stepping outside to an outdoor space that looks styled and stays that way. The Evone 4-Seater Stone Outdoor Dining set in green combines a sleek stone tabletop with a sturdy aluminium frame, creating a smart upgrade to your outdoor dining furniture. Designed to withstand Aussie weather, this set offers both durability and easy living for your outdoor dining experience.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Dining Sets" } },

  { id: "lx66", name: "Casara 7 Piece Outdoor Dining Set in White & Beige", cat: "Outdoor", room: "Outdoor", price: 2210, memberPrice: 1989, sku: "SH-11314", tag: "New", ph: "", img: "assets/products/lx66.webp",
    imgs: ["assets/products/lx66.webp", "assets/products/lx66-2.webp", "assets/products/lx66-3.webp", "assets/products/lx66-4.webp", "assets/products/lx66-5.webp"],
    fastShip: true,
    desc: "Make the backyard your favourite dining room Imagine long lazy lunches that roll into starlit dinners without leaving home. The Casara 7 Piece Outdoor Dining Set turns your patio into a welcoming space for easy entertaining, with a smart aluminium frame and a timber look table top that laughs off Aussie weather. If you’ve been dreaming of a stylish outdoor dining set that’s comfy, durable and low maintenance, Casara is the clever choice.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Dining Sets" } },

  { id: "lx67", name: "Tavari 6 Seater Curved Outdoor Dining Set in Light Grey", cat: "Outdoor", room: "Outdoor", price: 2485, memberPrice: 2237, sku: "SH-11315", tag: "New", ph: "", img: "assets/products/lx67.webp",
    imgs: ["assets/products/lx67.webp", "assets/products/lx67-2.webp", "assets/products/lx67-3.webp", "assets/products/lx67-4.webp", "assets/products/lx67-5.webp"],
    fastShip: true,
    desc: "Tavari 6-Seater Curved Outdoor Dining Set in White and Light Grey Make your backyard the best place to gather with the Tavari 6-Seater Wicker Outdoor Dining Set . Strong, stylish, and comfortable, this set comes with an extra long 208cm gives you plenty of space to enjoy meals, parties, or quiet evenings with family and friends. Built with an aluminium frame, handwoven wicker, and soft cushions, Tavari is made from high quality materials that last.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Dining Sets" } },

  { id: "lx68", name: "Vellora 4 Seater Wicker Outdoor Dining Set in Natural", cat: "Outdoor", room: "Outdoor", price: 1561, memberPrice: 1405, sku: "SH-11316", tag: "New", ph: "", img: "assets/products/lx68.webp",
    imgs: ["assets/products/lx68.webp", "assets/products/lx68-2.webp", "assets/products/lx68-3.webp", "assets/products/lx68-4.webp", "assets/products/lx68-5.webp"],
    fastShip: true,
    desc: "Easy alfresco moments made beautiful Imagine your balcony or patio instantly feeling like a relaxed resort. The Vellora 4 Seater Wicker Outdoor Dining Set brings smart, durable design together with coastal style, so weeknight dinners and sunny weekend catch-ups feel effortless. Comfort that welcomes everyone in With gently curved chair backs and armrests plus plush cushions, Vellora makes long lunches and late-night chats comfortable from the first sit.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Dining Sets" } },

  { id: "lx69", name: "Cabria 9 Piece Sintered Stone Outdoor Dining Set in Beige", cat: "Outdoor", room: "Outdoor", price: 2320, memberPrice: 2088, sku: "SH-11317", tag: "New", ph: "", img: "assets/products/lx69.webp",
    imgs: ["assets/products/lx69.webp", "assets/products/lx69-2.webp", "assets/products/lx69-3.webp", "assets/products/lx69-4.webp", "assets/products/lx69-5.webp"],
    fastShip: true,
    desc: "Outdoor dining made effortless Imagine summer lunches that stretch into sunset without a single worry about spills, scuffs or sudden weather. The Cabria 9 piece sintered stone outdoor dining set brings style and smarts together, giving you a beautifully easy place to gather, relax and enjoy. This sintered stone outdoor dining set looks luxe and lives tough, so you can spend less time fussing and more time feasting.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Dining Sets" } },

  { id: "lx70", name: "Colleen 8 Seater Timber Outdoor Dining Set in Beige", cat: "Outdoor", room: "Outdoor", price: 2958, memberPrice: 2662, sku: "SH-11318", tag: "New", ph: "", img: "assets/products/lx70.webp",
    imgs: ["assets/products/lx70.webp", "assets/products/lx70-2.webp", "assets/products/lx70-3.webp", "assets/products/lx70-4.webp", "assets/products/lx70-5.webp"],
    fastShip: true,
    desc: "Extendable Acacia Timber Outdoor Dining Setting with Rope Chairs Transform your patio or alfresco area into an effortless entertaining hub. The Colleen 8 Seater Timber Outdoor Dining Set in Beige pairs a warm, solid acacia timber table with woven synthetic rope chairs, bringing modern resort-style elegance to long lunches and weekend barbecues.",
    specs: { "Type": "Outdoor > Outdoor furniture > Outdoor Dining Sets" } },
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

/* ---- Gift packaging styles (chosen when a hamper is built) ---- */
const PACKAGING_KITS = [
  { id: "pk-bag",    name: "Rope-handle gift bag",   note: "Navy bag with gold rope handles, tissue included", img: "assets/packaging/gift-bag.webp" },
  { id: "pk-ribbon", name: "Ribbon-tied gift box",   note: "Lidded box, gold ribbon, navy and gold tissue, branded sleeve",    img: "assets/packaging/ribbon-box.webp" },
  { id: "pk-duo",    name: "Gift box & carry bag",   note: "Ribbon-tied box with a matching carry bag",        img: "assets/packaging/bag-and-box.webp" },
  { id: "pk-tag",    name: "Gift box with tag",      note: "Magnetic box, navy and gold tissue, ribbon and a hand-written tag", img: "assets/packaging/box-and-tag.webp" },
  { id: "pk-pouch",  name: "Drawstring pouch & box", note: "For smaller pieces, gold cord and gold tissue",    img: "assets/packaging/pouch-and-box.webp" },
  { id: "pk-trio",   name: "Three-box set",          note: "Small, medium and large, each ribbon-tied",        img: "assets/packaging/box-trio.webp" }
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
const ANNOUNCEMENTS = [
  "✦ Free shipping on orders over $3,500, Australia-wide",
  "🌏 We ship to Australia, NZ, UK, USA, Canada &amp; Nigeria",
  "🌸 New décor finds added weekly",
  "⚡ In a hurry? Look for Ready to Ship pieces, delivered in a few days",
  "💝 Members save 10% on their first order, join free",
  "⭐ Loved by 500+ Australian homes · 4.9★ average review",
  "🎁 Build your own luxury hamper, gifting made effortless",
  "💡 Tip: tap the ♡ on any piece to save it to your wishlist for later",
  "💬 For enquiries, message us on WhatsApp · Proudly Australian 🇦🇺"
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
var SALE = { pct: 10, days: [], label: "Sofa Sale" };  /* off: the sofas were removed 5 Nov 2026. To restart: [2, 4, 6] */   // days: 0=Sun … 6=Sat
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
    if (SALE.days.length && typeof ANNOUNCEMENTS !== "undefined" && Array.isArray(ANNOUNCEMENTS) && !halloweenOn()) {
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
