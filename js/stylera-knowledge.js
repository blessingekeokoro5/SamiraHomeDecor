/* Stylera's public, on-site knowledge assistant. No private customer/order data or API secrets. */
(function(){
"use strict";
const topics={
 availability:"I’m Stylera, your AI shopping and styling assistant, available 24 hours a day, 7 days a week. Human Customer Care availability may vary. You can leave a message or raise a support ticket any time.",
 packaging:"I can help you find packaging supplies. Are you looking for gift boxes, wrapping materials, or something else? I will only recommend products listed in our shop.",
 international:"We currently serve Australia and New Zealand. Furniture delivery is available within Australia only; eligible décor, homewares and gifts may be shipped to New Zealand. Which destination and postcode are you shopping for? Shipping rates must be confirmed at checkout.",
 human:"I’m available as your AI assistant 24/7. Human representatives may not be online at all hours. I can connect you with Customer Care. Use the live chat link below to speak with a representative, or raise a support ticket if your enquiry needs follow-up.",
 gifts:"I can help you find a thoughtful gift! Who is it for, what is the occasion, and what is your budget in AUD? You can browse ready-made gift hampers at /hampers.html, build a personalised selection at /hamper-maker.html, or explore home décor gifts at /shop.html. Tell me a little about the recipient and I will narrow down the options.",
 delivery:"Delivery costs depend on your postcode, product size and weight, and the items in your cart. Enter your full delivery address or postcode at checkout to see the charge before paying. Furniture and multiple-item orders can cost more to deliver. Dispatch and arrival estimates depend on product availability; pre-orders can take longer. We deliver within Australia, and eligible décor, homewares and gifts can be delivered to New Zealand. Furniture delivery is within Australia only. For the published details, read /policy.html?doc=delivery. If checkout cannot calculate a rate, please contact Customer Care rather than assuming a price.",
 styling:"I'd love to help style your space. Which room are you working on, what are its approximate dimensions, which colours do you like, and what is your budget? For a living room, start with seating and a focal point, then layer cushions, throws, artwork, mirrors and accents. For bedrooms, coordinate bedding, bedside pieces and a statement accent. Browse /shop.html for pieces that suit your room. You can also explore /stylist.html for styling guidance. I won't promise a specific item is in stock until its product page confirms it.",
 products:"Browse furniture, dining, bedroom and bathroom accessories, kitchenware, outdoor pieces, home-office furniture, home décor and gifts at /shop.html. Search for an item and open its product page to check current price, available variants and any displayed availability. Tell me the item type, preferred colour, size and budget to narrow your search. I can't independently confirm live stock, dispatch dates or a final delivery charge.",
 orders:"You can check your order using /track.html or your account at /account.html. If tracking is missing, you need to change an address, or your order has a problem, submit a ticket at /support.html#ticket or speak with Customer Care. Please include your order reference but never send passwords or payment card details. I cannot access or change private order records.",
 returns:"For a return or refund, please read /policy.html?doc=returns and use /returns.html to start a return request. The published policy describes optional change-of-mind returns for eligible items within 30 days of delivery, with a 20% restocking fee. This fee does not override rights under Australian Consumer Law for faulty or misdescribed products. If an item is damaged, missing or incorrect, submit a support ticket at /support.html#ticket with your order reference and details. A representative will review your request; I cannot approve a refund or determine eligibility."
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
 return /\b(issue|problem|complaint|complain|fault|faulty|broken|damage|damaged|missing|wrong item|incorrect|not working|doesn.t work|failed|failure|error|refund|return|exchange|cancel|late|delay|delayed|lost|never arrived|not received|charged twice|overcharg|payment failed|delivery problem|shipping problem|order problem|dispute|support ticket|raise a ticket|report an issue|help with my order|contact support|representative|human agent)\b/i.test(String(q||""));
}
function choose(q,preferred){
 const t=clean(q);
 if(/representative|human agent|customer service|live chat|speak to someone/.test(t))return "human";
 if(/24 7|24 hours|always available|opening hours|what time.*open|are you open/.test(t))return "availability";
 if(/track my order|track order|order status/.test(t))return "orders";
 if(isIssue(q))return "returns";
 if(/packaging|gift box|wrapping supplies|packing supplies/.test(t))return "packaging";
 if(/overseas|international|new zealand|other country|abroad/.test(t))return "international";
 if(/representative|human|live chat|customer service/.test(t))return "human";
 if(preferred&&topics[preferred])return preferred;
 if(/return|refund|exchange|warranty|consumer law|change of mind/.test(t))return "returns";
 if(/order|track|cancel|payment|invoice|damaged|missing parcel/.test(t))return "orders";
 if(/deliver|ship|freight|postage|dispatch|postcode|arrival|arrive|shipping|courier/.test(t))return "delivery";
 if(/style|styling|decorate|layout|color|colour|palette|room design|interior|match|coordinate/.test(t))return "styling";
 if(/gift|present|birthday|anniversary|christmas|hamper|gifting/.test(t))return "gifts";
 if(/product|stock|available|price|cost|sofa|chair|table|bed|bathroom|kitchen|office|outdoor|cushion|throw|vase|mirror|dining|furniture|gift/.test(t))return "products";
 return null;
}
window.StyleraKnowledge={
 respond(question,preferred){
  const q=String(question||"").trim(),issue=isIssue(q),topic=choose(q,preferred);
  const node=document.createElement("div");
  const para=document.createElement("p");para.style.margin="0 0 9px";para.textContent=issue?"For a problem with an order, delivery, payment, faulty item or a refund request, please submit a support ticket so Customer Care can review the details. Include your order reference if you have one, but never send payment card details or passwords. You can also use live chat below to speak with a representative.":topic?topics[topic]:"I can help with delivery estimates, styling ideas, product discovery and order-support steps. Please tell me which item, room or delivery destination you're asking about so I can give you a more useful answer. For a personal order or a question I cannot verify, connect with Customer Care below.";
  node.append(para);
  if(!issue&&(topic==="products"||topic==="styling"||topic==="gifts"||topic==="packaging"||(!topic&&q.length>5))){
   const matches=productMatches(topic==="packaging"?"packaging":q);
   if(matches.length){const title=document.createElement("strong");title.textContent="Matching products on our website:";node.append(title);matches.forEach(p=>node.append(formatProduct(p)))}
   else if(topic==="products"){const note=document.createElement("p");note.textContent="I couldn't confidently identify a matching product from that description. Try a specific item name, or browse the current collection.";node.append(note)}
  }
  const links=document.createElement("p");links.style.margin="12px 0 0";links.append(link(issue?"/support.html#ticket":topic==="returns"?"/policy.html?doc=returns":topic==="orders"?"/track.html":topic==="styling"?"/stylist.html":topic==="gifts"?"/hampers.html":topic==="delivery"?"/policy.html?doc=delivery":"/shop.html",issue?"Submit a support ticket":topic==="returns"?"Read returns policy":topic==="orders"?"Track an order":topic==="styling"?"Explore styling tools":topic==="gifts"?"Browse gift hampers":topic==="delivery"?"Read delivery policy":"Browse our shop"));node.append(links);
  if(topic==="human"){const live=document.createElement("p");live.append(link("/stylera-supabase-customer.html","Chat with Customer Care"));node.append(live)}
  if(!issue&&(topic==="orders"||topic==="returns"||topic==="delivery"||!topic)){const help=document.createElement("p");help.style.margin="8px 0 0";help.append(link("/support.html#ticket","Need more help? Raise a support ticket"));node.append(help)}
  return node;
 }
};
})();
