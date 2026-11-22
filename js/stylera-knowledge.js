/* Stylera's public, on-site knowledge assistant. No private customer/order data or API secrets. */
(function(){
"use strict";
const topics={
 delivery:"Delivery at Samira Home Decor depends on the item, its size and weight, the quantity in your cart and your delivery postcode. At checkout, enter your destination to see the delivery charge before paying. Large furniture and multi-item orders can have higher freight costs; ready-to-ship and pre-order products may have different dispatch times. For the most accurate estimate, open the product and check its availability, then add it to your cart. Browse furniture and homewares: /shop.html. If your postcode or delivery estimate needs checking, select Customer Care below.",
 styling:"I'd love to help style your space! Start with the room's purpose, approximate dimensions, natural light and the colors you already have. For a living room, choose your main furniture first, then add a rug-free layered look with cushions, throws, artwork, mirrors and decorative accents. For a bedroom, coordinate bedding, bedside accessories and one or two statement pieces. Explore pieces in our Home Décor and Furniture collections at /shop.html, or visit /stylist.html for our room styling experience. Tell me which room, your color palette and your budget, and I'll narrow down suitable pieces.",
 products:"Our online shop includes living room furniture, dining pieces, bedroom and bathroom accessories, kitchenware, outdoor pieces, home-office furniture, home décor, gifts and lifestyle accessories. You can browse /shop.html, search for a specific item, and open a product page for its price, variants and availability. If you tell me the product type, color, room or budget, I'll look for matching listings from our website rather than recommend unrelated items.",
 orders:"For an existing order, use /track.html or sign in at /account.html to review your order details and tracking where available. If your order hasn't updated, you need to change an address, or you have a return or damaged-item concern, start a customer support conversation below. Please include your order number and a short description; never share card details or passwords. A representative can check the specific order, which this automated assistant cannot access."
};
const stop=new Set("i me my the a an and or to of for in on with do you your is are have has can what which where when how tell show find want need looking available please samira stylera product products item items home decor furniture shop buy about price prices much any there this that it from under".split(" "));
function catalog(){try{return typeof PRODUCTS!=="undefined"&&Array.isArray(PRODUCTS)?PRODUCTS.filter(p=>p&&p.id&&p.name&&!p.hidden):[]}catch{return []}}
function clean(s){return String(s||"").replace(/[^\p{L}\p{N}\s-]/gu," ").toLowerCase().trim()}
function productMatches(question){
 const tokens=clean(question).split(/\s+/).filter(x=>x.length>2&&!stop.has(x));
 if(!tokens.length)return [];
 return catalog().map(p=>{
  const name=clean(p.name),cat=clean(p.cat),desc=clean(p.desc||p.description||"");
  let score=0;
  for(const t of tokens){if(name.includes(t))score+=5;if(cat.includes(t))score+=2;if(desc.includes(t))score+=0.4}
  return {p,score};
 }).filter(x=>x.score>=4).sort((a,b)=>b.score-a.score).slice(0,4).map(x=>x.p);
}
function link(href,label){const a=document.createElement("a");a.href=href;a.textContent=label;a.target="_top";a.rel="noopener";return a}
function formatProduct(p){const row=document.createElement("div");row.style.marginTop="9px";row.append(link("/product.html?id="+encodeURIComponent(p.id),p.name));const detail=document.createElement("span");const price=Number(p.price);detail.textContent=" · "+(Number.isFinite(price)&&price>0?"from $"+price.toLocaleString("en-AU",{maximumFractionDigits:2})+" AUD":"check product page for price")+" · "+(p.cat||"Home Décor");row.append(detail);return row}
function isIssue(q){
 return /\\b(issue|problem|complaint|complain|fault|faulty|broken|damage|damaged|missing|wrong item|incorrect|not working|doesn.t work|failed|failure|error|refund|return|exchange|cancel|late|delay|delayed|lost|never arrived|not received|charged twice|overcharg|payment failed|delivery problem|shipping problem|order problem|dispute|support ticket|raise a ticket|report an issue|help with my order|contact support|representative|human agent)\\b/i.test(String(q||""));
}
function choose(q,preferred){
 const t=clean(q);
 if(preferred&&topics[preferred])return preferred;
 if(/order|track|return|refund|exchange|cancel|payment|invoice|damaged|missing parcel/.test(t))return "orders";
 if(/deliver|ship|freight|postage|dispatch|postcode|arrival|arrive|shipping|courier/.test(t))return "delivery";
 if(/style|styling|decorate|layout|color|colour|palette|room design|interior|match|coordinate/.test(t))return "styling";
 if(/product|stock|available|price|cost|sofa|chair|table|bed|bathroom|kitchen|office|outdoor|cushion|throw|vase|mirror|dining|furniture|gift/.test(t))return "products";
 return null;
}
window.StyleraKnowledge={
 respond(question,preferred){
  const q=String(question||"").trim(),issue=isIssue(q),topic=choose(q,preferred);
  const node=document.createElement("div");
  const para=document.createElement("p");para.style.margin="0 0 9px";para.textContent=issue?"I’m sorry you’re experiencing an issue. Please submit a support ticket so our Customer Care Team can review your concern and respond by email. Include your order number (if applicable) and a short description, but never include passwords or payment card details.":topic?topics[topic]:"I can help with delivery estimates, styling ideas, product discovery and order-support steps. Please tell me which item, room or delivery destination you're asking about so I can give you a more useful answer. For a personal order or a question I cannot verify, connect with Customer Care below.";
  node.append(para);
  if(!issue&&(topic==="products"||topic==="styling"||(!topic&&q.length>5))){
   const matches=productMatches(q);
   if(matches.length){const title=document.createElement("strong");title.textContent="Matching products on our website:";node.append(title);matches.forEach(p=>node.append(formatProduct(p)))}
   else if(topic==="products"){const note=document.createElement("p");note.textContent="I couldn't confidently identify a matching product from that description. Try a specific item name, or browse the current collection.";node.append(note)}
  }
  const links=document.createElement("p");links.style.margin="12px 0 0";links.append(link(issue?"/support.html#ticket":topic==="orders"?"/track.html":topic==="styling"?"/stylist.html":"/shop.html",issue?"Submit a support ticket":topic==="orders"?"Track an order":topic==="styling"?"Explore styling tools":"Browse our shop"));node.append(links);
  return node;
 }
};
})();
