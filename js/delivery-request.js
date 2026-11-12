/* Customer-controlled email and chat requests. Nothing is sent until the shopper chooses to send it. */
(function(root){
  function escape(text){return String(text==null?'':text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function message(items,destination){
    destination=destination||{};
    return ['Hi Samira Home Decor,','Please confirm the delivery quote and dispatch timeframe before I make payment.','',...items.map(p=>`${p.qty||1} × ${p.name||p.id||p.sku}${p.id||p.sku?' (reference '+(p.id||p.sku)+')':''}${p.colour?' — '+p.colour:''}${p.size?' — '+p.size:''}`),'',`Delivery suburb: ${destination.suburb||'[please add]'}`,`Postcode: ${destination.postcode||'[please add]'}`,`Country: ${destination.country||'Australia'}`,'Please let me know the confirmed dispatch timeframe, delivery cost and next steps.'].join('\n');
  }
  function html(items,destination,reason){
    const text=message(items,destination),email=(root.SAMIRA&&root.SAMIRA.email)||'hello@samirahomedecor.com.au';
    const href='mailto:'+email+'?subject='+encodeURIComponent(reason==='dispatch'?'Confirm pre-order dispatch timeframe':'Delivery quote and dispatch enquiry')+'&body='+encodeURIComponent(text);
    return `<div class="delivery-request" role="group" aria-label="Request delivery confirmation" style="margin-top:10px;padding:12px;border:1px solid #D9CBB3;border-radius:10px;background:#FFFCF6;font-size:.9rem"><strong>${reason==='dispatch'?'Pre-order: confirm dispatch before payment':'Confirm delivery and dispatch before payment'}</strong><p style="margin:6px 0 10px">Send an email or use live chat for a quick response. Please wait for confirmation before paying.</p><div style="display:flex;flex-wrap:wrap;gap:8px"><a class="btn btn--outline" style="padding:9px 14px" href="${escape(href)}">Send an email</a><button type="button" class="btn btn--outline" style="padding:9px 14px" data-request="${escape(text)}" onclick="DeliveryRequest.openChat(this.dataset.request)">Live chat</button></div><small style="display:block;margin-top:7px">Email opens with your product and delivery details. Live chat copies those details for you to paste into your message.</small></div>`;
  }
  async function openChat(text){
    let copied=false;try{if(root.navigator&&root.navigator.clipboard){await root.navigator.clipboard.writeText(text);copied=true;}}catch(error){}
    if(typeof root.openLiveChat==='function')root.openLiveChat();else root.location.href='contact.html';
    if(typeof root.showToast==='function')root.showToast(copied?'Request details copied. Paste them into live chat.':'Please include your product, postcode and suburb in your chat message.');
  }
  const api={escape,message,html,openChat};if(typeof module==='object'&&module.exports)module.exports=api;else root.DeliveryRequest=api;
})(typeof window==='undefined'?globalThis:window);
