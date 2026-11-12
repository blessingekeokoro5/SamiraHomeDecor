/* Address and quantity-specific delivery. Prices and supplier IDs are resolved on the server. */
(function(root){
  const cache=new Map();let timer=null,queuedKey=null;
  function quote(lines,destination,onUpdate){
    const items=lines.filter(p=>/^(decor|outdoor|office|adairs|shein)-/.test(String(p.freightClass||''))).map(p=>({id:p.id||p.sku,qty:Number(p.qty||1)})).sort((a,b)=>a.id.localeCompare(b.id));
    if(!items.length)return null;
    const postcode=(String(destination.postcode||'').match(/\b\d{4}\b/)||[])[0]||'',suburb=String(destination.suburb||'').trim(),country=destination.country||'Australia';
    if(country!=='Australia')return {fee:0,quoteRequired:true,message:'These products are delivered within Australia only.'};
    if(!postcode||!suburb)return {fee:0,quoteRequired:true,message:'Enter your postcode and suburb to calculate delivery.'};
    const payload={items,postcode,suburb,country},key=JSON.stringify(payload),saved=cache.get(key);
    if(saved&&Date.now()-saved.at<5*60*1000)return saved.quote;
    const pending={fee:0,quoteRequired:true,pending:true,message:'Checking delivery for your address and items…'};
    if(queuedKey&&queuedKey!==key){clearTimeout(timer);const previous=cache.get(queuedKey);if(previous?.quote.pending&&!previous.started)cache.delete(queuedKey);}
    queuedKey=key;cache.set(key,{at:Date.now(),quote:pending,started:false});
    timer=setTimeout(async()=>{
      const entry=cache.get(key);if(entry)entry.started=true;
      let result;
      try{const res=await fetch('/.netlify/functions/decor-delivery-quote',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(55000)});result=await res.json();if(!res.ok||typeof result.quoteRequired!=='boolean'||!Number.isFinite(result.fee))throw new Error();}
      catch(error){result={fee:0,quoteRequired:true,message:'Delivery needs confirmation. Please contact us for a quote before paying.'};}
      cache.set(key,{at:Date.now(),quote:result});if(cache.size>50)cache.delete(cache.keys().next().value);
      if(typeof onUpdate==='function')onUpdate();
    },700);
    return pending;
  }
  root.DecorDelivery={quote};
})(typeof window==='undefined'?globalThis:window);
