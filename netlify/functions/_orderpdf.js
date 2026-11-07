/* ============================================================
   Samira Home Decor — one-page PDF of a new order (no libraries)
   ------------------------------------------------------------
   orderPdf(facts) → Buffer of an A4 PDF with the customer and
   order details from Stripe, attached to the shop's new-order
   email for record keeping. Uses the built-in Helvetica fonts,
   so nothing extra needs installing.
   ============================================================ */

const W = 595.28, H = 841.89, M = 48;           // A4 in points, side margin
const NAVY = [0.078, 0.212, 0.373], GOLD = [0.776, 0.631, 0.357], INK = [0.043, 0.122, 0.227];
const GREY = [0.54, 0.5, 0.47], GREEN = [0.18, 0.49, 0.31], CREAM = [0.969, 0.953, 0.925];

// Helvetica widths (per 1000 em) for the characters we print; others ≈ 556.
const WID = { " ": 278, ",": 278, ".": 278, ":": 278, "-": 333, "(": 333, ")": 333, "/": 278, "$": 556, "%": 889, "@": 1015, "+": 584, "&": 667, "'": 191, "i": 222, "l": 222, "j": 222, "t": 278, "f": 278, "r": 333, "I": 278, "m": 833, "w": 722, "M": 833, "W": 944 };
const width = (s, size, bold) => [...String(s)].reduce((n, ch) => n + (WID[ch] || (/[A-Z]/.test(ch) ? 667 : 556)), 0) * size / 1000 * (bold ? 1.05 : 1);

// PDF strings: WinAnsi bytes, escaped.
function pdfStr(s) {
  const map = { "–": "\x96", "—": "\x97", "−": "-", "‘": "\x91", "’": "\x92", "“": "\x93", "”": "\x94", "•": "\x95", "×": "\xD7", "é": "\xE9", "è": "\xE8", "ê": "\xEA", "à": "\xE0", "ç": "\xE7", "ü": "\xFC", "ö": "\xF6", "á": "\xE1", "ó": "\xF3", "í": "\xED", "ñ": "\xF1" };
  let out = "";
  for (const ch of String(s == null ? "" : s)) {
    if (map[ch]) out += map[ch];
    else if (ch.charCodeAt(0) < 256) out += ch;
    // anything else (emoji etc.) is dropped
  }
  return "(" + out.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)") + ")";
}

function wrap(text, size, maxW, bold) {
  const words = String(text || "").split(/\s+/), lines = [];
  let line = "";
  for (const w of words) {
    const t = line ? line + " " + w : w;
    if (width(t, size, bold) > maxW && line) { lines.push(line); line = w; } else line = t;
  }
  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

const aud = (n) => "$" + Number(n || 0).toLocaleString("en-AU", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function orderPdf(f) {
  const ops = [];
  const col = (c) => c.map((v) => v.toFixed(3)).join(" ");
  const rect = (x, y, w, h, c) => ops.push(`${col(c)} rg ${x.toFixed(1)} ${y.toFixed(1)} ${w.toFixed(1)} ${h.toFixed(1)} re f`);
  const text = (s, x, y, size, opt = {}) => {
    const font = opt.bold ? "F2" : "F1";
    let tx = x;
    if (opt.align === "right") tx = x - width(s, size, opt.bold);
    if (opt.align === "center") tx = x - width(s, size, opt.bold) / 2;
    ops.push(`BT /${font} ${size} Tf ${col(opt.color || INK)} rg ${tx.toFixed(1)} ${y.toFixed(1)} Td ${pdfStr(s)} Tj ET`);
  };
  const line = (x1, y, x2, c) => ops.push(`${col(c || [0.91, 0.86, 0.78])} RG 0.8 w ${x1} ${y.toFixed(1)} m ${x2} ${y.toFixed(1)} l S`);

  // Header band
  let y = H - M;
  rect(M, y - 118, W - 2 * M, 118, NAVY);
  rect(M, y - 122, W - 2 * M, 4, GOLD);
  text("SAMIRA HOME DECOR  ·  NEW ORDER", W / 2, y - 26, 9.5, { align: "center", color: GOLD, bold: true });
  text(f.orderNo, W / 2, y - 56, 24, { align: "center", color: [1, 1, 1], bold: true });
  text(f.when, W / 2, y - 76, 10.5, { align: "center", color: [0.878, 0.788, 0.573] });
  text(aud(f.total) + " paid", W / 2, y - 102, 14, { align: "center", color: [1, 1, 1], bold: true });
  y -= 152;

  // Customer
  text("Customer", M, y, 14, { bold: true }); y -= 12;
  const custRows = [
    ["Full name", f.name],
    ["Email", f.email],
    ["Phone", f.phone],
    ["Delivery address", [f.address, f.cityLine, f.country].filter(Boolean).join(", ")],
    ["Customer note", f.note || "None left"],
  ];
  const labW = 120, valW = W - 2 * M - labW - 28;
  const custLines = custRows.map(([k, v]) => [k, wrap(v || "", 11, valW, true)]);
  const custH = custLines.reduce((n, r) => n + r[1].length * 15 + 8, 0) + 16;
  rect(M, y - custH, W - 2 * M, custH, CREAM);
  y -= 22;
  for (const [k, vs] of custLines) {
    text(k, M + 14, y, 10.5, { color: GREY });
    vs.forEach((v, i) => text(v, M + 14 + labW, y - i * 15, 11, { bold: k !== "Customer note" }));
    y -= vs.length * 15 + 8;
  }
  y -= 26;

  // Order
  text("Order", M, y, 14, { bold: true }); y -= 22;
  const right = W - M;
  for (const it of f.items) {
    const lines = wrap(it.name + (it.qty > 1 ? "  × " + it.qty : ""), 11, W - 2 * M - 110);
    lines.forEach((l, i) => text(l, M, y - i * 14, 11));
    text(aud(it.total), right, y, 11, { align: "right" });
    y -= lines.length * 14 + 6;
    line(M, y + 2, right);
    y -= 12;
  }
  const money = (k, v, c) => { text(k, M, y, 10.5, { color: c || GREY }); text(v, right, y, 10.5, { align: "right", color: c || GREY }); y -= 16; };
  if (f.subtotal != null) money("Subtotal", aud(f.subtotal));
  if (f.discount > 0) money((f.discountPct ? f.discountPct + "% off" : "Discount") + (f.code && !f.voucher ? " (" + f.code + ")" : ""), "-" + aud(f.discount), GREEN);
  if (f.voucher > 0) money("Voucher" + (f.code ? " (" + f.code + ")" : ""), "-" + aud(f.voucher), GREEN);
  money("Shipping", f.shipping ? aud(f.shipping) : "Free");
  y -= 4; line(M, y + 10, right, INK);
  text("Total paid", M, y - 6, 14, { bold: true });
  text(aud(f.total), right, y - 6, 14, { bold: true, align: "right" });
  y -= 40;

  // Footer
  text("Details from Stripe" + (f.paymentIntent ? " · payment " + f.paymentIntent : ""), M, 56, 8.5, { color: GREY });
  text("Samira Home Decor · hello@samirahomedecor.com.au · samirahomedecor.com.au", M, 42, 8.5, { color: GREY });

  // Assemble the PDF
  const content = Buffer.from(ops.join("\n"), "latin1");
  const objs = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
    null, // content stream
    `<< /Title ${pdfStr("Order " + f.orderNo)} /Producer (Samira Home Decor) >>`,
  ];
  const chunks = [Buffer.from("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n", "latin1")];
  const offsets = [];
  let pos = chunks[0].length;
  objs.forEach((o, i) => {
    offsets.push(pos);
    const head = Buffer.from(`${i + 1} 0 obj\n`, "latin1");
    const body = o === null
      ? Buffer.concat([Buffer.from(`<< /Length ${content.length} >>\nstream\n`, "latin1"), content, Buffer.from("\nendstream", "latin1")])
      : Buffer.from(o, "latin1");
    const tail = Buffer.from("\nendobj\n", "latin1");
    chunks.push(head, body, tail);
    pos += head.length + body.length + tail.length;
  });
  const xref = `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n` + offsets.map((o) => String(o).padStart(10, "0") + " 00000 n \n").join("") +
    `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R /Info ${objs.length} 0 R >>\nstartxref\n${pos}\n%%EOF\n`;
  chunks.push(Buffer.from(xref, "latin1"));
  return Buffer.concat(chunks);
}

module.exports = { orderPdf };
