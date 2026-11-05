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













































  // ── Living Room ──




























































































































































































































































  // ── Living Room, Office & lighting (final batch) ──



























































































































































































































  // ── Bedroom ──











































































































  // ── Outdoor ──













































  // ── Home Décor ──



























































































































































































































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
