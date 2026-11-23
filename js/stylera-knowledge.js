/* Stylera's public, on-site knowledge assistant. No private customer/order data or API secrets. */
(function(){
"use strict";
const topics={
 greeting:"Hi! I’m Stylera, your AI Home Stylist ✨ Welcome to Samira Home Decor. Whether you’re decorating a new home, refreshing a room or searching for a statement piece, I can help with styling ideas, product discovery and shopping questions. What would you like to explore today?",
 payments:"For available payment methods and secure checkout options, please review the payment choices shown at checkout. I cannot collect card details or verify payments in chat. If payment failed or you were charged incorrectly, please raise a support ticket so Customer Care can investigate.",
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
const stop=new Set("i me my the a an and or to of for in on with do you your is are have has can what which where when how tell show find want need looking available please samira stylera product products item items home decor furniture shop buy about price prices much any there this that it from under below less than budget gift gifts find help style room my house suitable recommend show me".split(" "));
const excludedIds=new Set(["freedom13172273","kl131951"]);
function catalog(){try{return typeof PRODUCTS!=="undefined"&&Array.isArray(PRODUCTS)?PRODUCTS.filter(p=>p&&p.id&&p.name&&!p.hidden&&!p.comingSoon&&!p.placeholder&&!excludedIds.has(String(p.id))&&Number(p.price)>0):[]}catch{return []}}
function clean(s){return String(s||"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^\p{L}\p{N}\s-]/gu," ").toLowerCase().replace(/\s+/g," ").trim()}
function budgetOf(q){const m=String(q).match(/(?:under|below|less than|up to|max(?:imum)?|budget(?: of)?|within)\s*(?:a\$|aud|\$)?\s*([\d,]+(?:\.\d{1,2})?)/i)||String(q).match(/(?:a\$|aud|\$)\s*([\d,]+(?:\.\d{1,2})?)/i);return m?Number(m[1].replace(/,/g,"")):null}
const aliases={couch:"sofa",couches:"sofa",settee:"sofa",pillows:"cushion",pillow:"cushion",cushions:"cushion",vases:"vase",trays:"tray",desks:"desk",chairs:"chair",bath:"bathroom",office:"desk",wrap:"packaging",wrapping:"packaging",boxes:"box",hampers:"hamper"};
function productMatches(question,topic){
 const budget=budgetOf(question),q=clean(question);
 let tokens=q.split(" ").filter(x=>x.length>2&&!stop.has(x)&&!/^\d+$/.test(x)).map(x=>aliases[x]||x);
 if(topic==="gifts")tokens=tokens.filter(x=>!/^(?:her|him|birthday|anniversary|christmas|housewarming|wedding|occasion|someone|special|friend|mum|dad|mother|father)$/.test(x));
 if(topic==="packaging")tokens=["packaging","box","gift"];
 if(topic==="gifts"&&!tokens.length)tokens=["hamper","vase","candle","diffuser","tray"];
 if(topic==="styling"&&!tokens.length)return [];
 const colours=new Set(["white","black","navy","blue","gold","beige","cream","grey","gray","green","pink","brown","natural","marble","wood","silver"]);
 return catalog().filter(p=>budget==null||Number(p.price)<=budget).map(p=>{
  const name=clean(p.name),cat=clean(p.cat),room=clean(p.room),desc=clean(p.desc||p.description||"");
  let score=0;
  for(const t of tokens){if(name.includes(t))score+=7;if(cat.includes(t))score+=4;if(room.includes(t))score+=3;if(desc.includes(t))score+=1}
  if(topic==="packaging"&&!/packaging|box|wrap|bag|ribbon/.test(name+" "+cat))score=0;
  if(topic==="gifts"&&/hamper|gift|candle|diffuser|vase|tray|decor/.test(name+" "+cat))score+=2;
  if(tokens.some(t=>colours.has(t))&&!tokens.some(t=>name.includes(t)||desc.includes(t)))score=0;
  return {p,score};
 }).filter(x=>x.score>=3).sort((a,b)=>b.score-a.score||Number(a.p.price)-Number(b.p.price)).slice(0,4).map(x=>x.p);
}
function link(href,label){const a=document.createElement("a");a.href=href;a.textContent=label;a.target="_top";a.rel="noopener";return a}
function formatProduct(p){
 const row=document.createElement("div");row.style.cssText="display:flex;gap:9px;align-items:center;margin-top:10px";
 const img=p.img||(Array.isArray(p.imgs)&&p.imgs[0]);
 if(img&&/^(?:https?:\/\/|assets\/|\/assets\/)/i.test(String(img))){const photo=document.createElement("img");photo.src=/^https?:\/\//i.test(String(img))?String(img):"/"+String(img).replace(/^\//,"");photo.alt=p.name;photo.loading="lazy";photo.style.cssText="width:64px;height:64px;object-fit:contain;border-radius:9px;background:#f7f4ed;flex-shrink:0";photo.onerror=()=>photo.remove();row.append(photo)}
 const content=document.createElement("div");content.append(link("/product.html?id="+encodeURIComponent(p.id),p.name));
 const detail=document.createElement("div");detail.textContent=Number(p.price).toLocaleString("en-AU",{style:"currency",currency:"AUD"})+" · "+(p.cat||"Home Décor");content.append(detail);row.append(content);return row
}
function isIssue(q){
 return /\b(issue|problem|complaint|complain|fault|faulty|broken|damage|damaged|missing|wrong item|incorrect|not working|doesn.t work|failed|failure|error|refund|return|exchange|cancel|late|delay|delayed|lost|never arrived|not received|charged twice|overcharg|payment failed|delivery problem|shipping problem|order problem|dispute|support ticket|raise a ticket|report an issue|help with my order|contact support|representative|human agent)\b/i.test(String(q||""));
}
function choose(q,preferred){
 const t=clean(q);
 if(/representative|human agent|customer service|live chat|speak to someone/.test(t))return "human";
 if(/^(hi|hello|hey|good morning|good afternoon|good evening)[!. ]*$/.test(t))return "greeting";
 if(/payment methods|pay by|how can i pay|accepted payments|payment options/.test(t))return "payments";
 if(/24 7|24 hours|always available|opening hours|what time.*open|are you open/.test(t))return "availability";
 if(/track my order|track order|order status/.test(t))return "orders";
 if(isIssue(q))return "returns";
 if(/packaging|gift box|wrapping supplies|packing supplies/.test(t))return "packaging";
 if(/help me find a gift|find a gift|gift ideas|gift for|present for|birthday gift|housewarming gift/.test(t))return "gifts";
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
const intro = "Hi, I’m Stylera, Samira Home Decor’s AI shopping and customer care assistant. I’m not a human. How can I help today?";
const supportPaths = {
  ticket: ["/support.html#ticket", "Open the support ticket form"],
  human: ["/stylera-supabase-customer.html", "Chat with Customer Care"],
  account: ["/account.html", "Go to account sign-in"],
  callback: ["/support.html#callback", "Request a callback"]
};

function supportReply(message, ...actions) {
  const node = document.createElement("div");
  node.className = "stylera-answer";
  const text = document.createElement("p");
  text.textContent = message;
  node.append(text);
  for (const action of actions) {
    const row = document.createElement("p");
    row.append(link(...supportPaths[action]));
    node.append(row);
  }
  return node;
}

function createConversation(channel) {
  let supportActive = false;
  let awaitingTicket = false;
  let replied = false;
  let survey;
  let ratingId;

  function rating() {
    if (!replied || survey) return null;
    const node = document.createElement("div");
    survey = node;
    node.className = "stylera-answer stylera-rating";
    const prompt = document.createElement("p");
    prompt.textContent = "Thanks for chatting with Samira Home Decor! How satisfied were you with Stylera today, from 1 to 5?";
    const options = document.createElement("div");
    options.className = "chat-stars";
    const status = document.createElement("p");
    status.setAttribute("role", "status");
    node.append(prompt, options, status);
    for (let score = 1; score <= 5; score++) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = score + " ★";
      button.setAttribute("aria-label", score + " out of 5");
      button.addEventListener("click", async () => {
        for (const option of options.children) option.disabled = true;
        status.textContent = "Saving your rating…";
        try {
          ratingId ||= crypto.randomUUID();
          const response = await fetch("/api/stylera-rating", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id: ratingId, score, channel})
          });
          if (!response.ok) throw new Error("Rating unavailable");
          options.remove();
          status.textContent = "Thank you. Your " + score + " out of 5 rating was saved.";
          if (score <= 2) node.append(link(...supportPaths.human));
        } catch {
          status.textContent = "Your rating couldn’t be saved. Please try again.";
          for (const option of options.children) option.disabled = false;
        }
      });
      options.append(button);
    }
    return node;
  }

  function answer(question) {
    const t = clean(question);
    const closing = /^(?:ok |okay |no )?(?:all good(?: for now)?|that s all(?: for now)?|nothing else|i m good|i am good|no thanks|goodbye|bye|thanks(?: so much)?|thank you|no worries)(?: thanks| thank you| for now)?$/.test(t);
    if (closing) return rating() || supportReply("You’re welcome. I’m here if you need anything else.");
    replied = true;

    const ticket = /\b(?:open|raise|submit|start|create|send)(?: me)? (?:a |my |the )?(?:support )?(?:ticket|case|request)\b/.test(t)
      || (awaitingTicket && /^(?:yes(?: please)?|please do|go ahead|sure|ok|okay)$/.test(t));
    if (ticket) {
      supportActive = true;
      awaitingTicket = false;
      return supportReply("Please open the ticket form and enter an email you can access. In the message, explain which account has the issue and add the order reference if you have it. Select Email as your contact preference if you want an email reply. You’ll see confirmation and a reference after the form has been submitted.", "ticket");
    }
    if (/\b(?:phone number|contact number|call back|callback|can i call|how (?:do|can) i call|phone support|speak.*phone)\b/.test(t)) {
      supportActive = true;
      return supportReply("You can request a callback from Samira Home Decor’s Customer Care team. If you’d rather use live chat or email, you can contact the team using the options below.", "callback", "human", "ticket");
    }
    if (/(?:how long|when|timeframe).*(?:reply|respond|hear back|get back|care team|follow up|ticket|callback)/.test(t) || (supportActive && /^how long(?: will it take)?$/.test(t))) {
      return supportReply("Response times vary. If you chose email on your ticket, keep an eye on the inbox and spam folder for the reply address you provided. If you need to follow up, include your ticket reference.", "human");
    }
    if (/\b(?:human|representative|real person|live agent|live chat|speak to someone|talk to someone)\b/.test(t)) {
      supportActive = true;
      return supportReply("Of course. Use live chat to reach a human on the Customer Care team. If they’re unavailable, send a support ticket and choose where you’d like the team to reply.", "human", "ticket");
    }
    const giftCard = /\b(?:gift cards?|giftcards?)\b/.test(t);
    const login = /\b(?:login|log in|sign in|signing in|one time)\b/.test(t);
    const code = /\b(?:code|otp)\b/.test(t);
    const missing = /\b(?:missing|lost|never|not|didn t|did not|can t|couldn t|cannot|resend|re send|hasn t|haven t|where)\b/.test(t);
    const giftIssue = giftCard && (missing || /account|email|find|locat|look|sent|receiv/.test(t));
    if ((login && (code || missing)) || (code && missing && !giftCard) || giftIssue) {
      supportActive = true;
      awaitingTicket = true;
      const codeHelp = "For a missing sign-in code, check that the sign-in email is spelled correctly, look in spam, junk and Promotions, then use Resend code on the account page. Never share the code in chat.";
      const giftHelp = "For a missing gift card, check the recipient’s spam and Promotions folders. Customer Care can investigate using the order reference or the last four characters if you have them. Please keep the full gift card code private.";
      const message = "I can’t look up accounts, see gift cards or verify which email an order belongs to. " + (giftIssue ? giftHelp + (login && code ? " " + codeHelp : "") : codeHelp) + " If you still need help, would you like to open a support ticket? You can give the team a reply email you can access.";
      return supportReply(message, "ticket", "account", "human");
    }
    return window.StyleraKnowledge.respond(question);
  }

  return {answer, rating};
}

window.StyleraKnowledge={
 intro, createConversation,
 respond(question,preferred){
  const q=String(question||"").trim(),issue=isIssue(q),topic=choose(q,preferred);
  const node=document.createElement("div");node.className="stylera-answer";
  const para=document.createElement("p");para.style.margin="0 0 9px";para.textContent=issue?"For a problem with an order, delivery, payment, faulty item or a refund request, please submit a support ticket so Customer Care can review the details. Include your order reference if you have one, but never send payment card details or passwords. You can also use live chat below to speak with a representative.":topic?topics[topic]:"I can help with delivery estimates, styling ideas, product discovery and order-support steps. Please tell me which item, room or delivery destination you're asking about so I can give you a more useful answer. For a personal order or a question I cannot verify, connect with Customer Care below.";
  node.append(para);
  if(topic==="orders"&&!issue){
    const form=document.createElement("form");form.style.cssText="display:grid;gap:8px;margin:10px 0";
    const number=document.createElement("input");number.required=true;number.maxLength=10;number.placeholder="Order number (SHD-123456)";number.setAttribute("aria-label","Order number");
    const contact=document.createElement("input");contact.required=true;contact.maxLength=254;contact.placeholder="Checkout email or phone";contact.setAttribute("aria-label","Checkout email or phone");
    const submit=document.createElement("button");submit.type="submit";submit.textContent="Check order status";
    const result=document.createElement("p");result.setAttribute("role","status");
    form.append(number,contact,submit,result);
    form.addEventListener("submit",async event=>{
      event.preventDefault();if(submit.disabled)return;
      submit.disabled=true;result.textContent="Checking your order securely…";
      try{
        const response=await fetch("/.netlify/functions/order-track",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({orderNo:number.value.trim().toUpperCase(),contact:contact.value.trim()})});
        const data=await response.json();
        if(!response.ok||!data.ok){result.textContent="We could not verify that order. Please check your details or contact Customer Care.";return}
        const status=data.status||{};const order=data.order||{};
        result.textContent="Order "+String(order.orderNo||number.value)+" — "+String(status.stage||"Processing")+(status.courier?" · Courier: "+status.courier:"")+(status.trackingNo?" · Tracking: "+status.trackingNo:"")+".";
        contact.value="";
      }catch(error){result.textContent="Tracking is temporarily unavailable. Please use the order tracking page or contact Customer Care."}
      finally{submit.disabled=false}
    });
    node.append(form);
  }

  if(!issue&&(topic==="products"||topic==="styling"||topic==="gifts"||topic==="packaging"||(!topic&&q.length>5))){
   const matches=productMatches(q,topic);
   if(matches.length){const title=document.createElement("strong");title.textContent="Matching products on our website:";node.append(title);matches.forEach(p=>node.append(formatProduct(p)))}
   else if(topic==="products"||topic==="packaging"||topic==="gifts"||topic==="styling"){const note=document.createElement("p");note.textContent="I couldn't confidently identify a matching product from that description. Try a specific item name, or browse the current collection.";node.append(note)}
  }
  const links=document.createElement("p");links.style.margin="12px 0 0";links.append(link(issue?"/support.html#ticket":topic==="returns"?"/policy.html?doc=returns":topic==="orders"?"/track.html":topic==="styling"?"/stylist.html":topic==="gifts"?"/hampers.html":topic==="delivery"?"/policy.html?doc=delivery":"/shop.html",issue?"Submit a support ticket":topic==="returns"?"Read returns policy":topic==="orders"?"Track an order":topic==="styling"?"Explore styling tools":topic==="gifts"?"Browse gift hampers":topic==="delivery"?"Read delivery policy":"Browse our shop"));node.append(links);
  if(topic==="human"){const live=document.createElement("p");live.append(link("/stylera-supabase-customer.html","Chat with Customer Care"));node.append(live)}
  if(!issue&&(topic==="orders"||topic==="returns"||topic==="delivery"||topic==="payments"||!topic)){const help=document.createElement("p");help.style.margin="8px 0 0";help.append(link("/support.html#ticket","Need more help? Raise a support ticket"));node.append(help)}
  return node;
 }
};
})();
