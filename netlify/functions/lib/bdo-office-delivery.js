/* BDO's public delivery calculator. Isolated temporary carts; suburb/postcode only. */
const locations=require('../../../js/au-locations');
const BASE='https://buydirectonline.com.au/';
const isBdo=p=>p.supplier==='BDO Furniture'&&/^office-/.test(String(p.freightClass||''));
const blocked=message=>({fee:0,quoteRequired:true,message});
const cache=new Map();
function deliveredRate(data,id,qty){
 if(!Array.isArray(data.items)||data.items.length!==1||Number(data.items[0].id)!==id||Number(data.items[0].quantity)!==qty)throw Error('Incorrect supplier cart');
 const packages=data.shipping_rates;
 if(!Array.isArray(packages)||!packages.length)throw Error('No delivery rates');
 const items=packages.flatMap(p=>p.items||[]);
 if(items.reduce((s,p)=>s+(Number(p.quantity)||0),0)!==qty)throw Error('Incomplete supplier cart');
 let total=0;
 for(const pack of packages){
  const rates=(pack.shipping_rates||[]).filter(r=>r.currency_code==='AUD'&&!/collect|pickup|pick.up|quote|POA/i.test(r.name+' '+r.method_id)&&/shipping|delivery|freight/i.test(r.name)&&/^\d+$/.test(String(r.price))&&/^\d+$/.test(String(r.taxes??0)));
  if(!rates.length)throw Error('Delivery needs quotation');
  total+=Math.min(...rates.map(r=>(Number(r.price)+Number(r.taxes||0))/10**Number(r.currency_minor_unit??2)));
 }
 return Math.round(total*100)/100;
}
async function supplierRate(line,location,fetcher){
 const cookies=new Map();
 async function request(path,options={}){
  const headers={...(options.headers||{})};if(cookies.size)headers.Cookie=[...cookies].map(([k,v])=>k+'='+v).join('; ');
  const res=await fetcher(BASE+path,{...options,headers,signal:AbortSignal.timeout(15000)});
  for(const cookie of (res.headers.getSetCookie?.()||[res.headers.get('set-cookie')||''])){for(const c of cookie.split(/,(?=\s*[^;,=]+=[^;,]*)/)){const part=c.split(';')[0],idx=part.indexOf('=');if(idx>0)cookies.set(part.slice(0,idx).trim(),part.slice(idx+1));}}
  if(!res.ok)throw Error('BDO unavailable');return res;
 }
 const id=Number(line.supplierProductId),qty=Number(line.qty||1);
 const stock=await (await request('wp-json/wc/store/v1/products/'+id)).json();
 const cost=Number(stock.prices?.price)/10**Number(stock.prices?.currency_minor_unit??2);
 if(stock.id!==id||!stock.is_in_stock||stock.is_on_backorder||!stock.is_purchasable||!Number.isFinite(cost)||cost>line.supplierCost)throw Error('Availability or price changed');
 const body=new URLSearchParams({product_id:String(id),quantity:String(qty),...(line.supplierOptions||{})});
 const added=await (await request('?wc-ajax=add_to_cart',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:body.toString()})).json();
 if(added.error||!added.fragments)throw Error('Configuration unavailable');
 const cart=await request('wp-json/wc/store/v1/cart?_samira='+Date.now());
 const nonce=cart.headers.get('nonce')||cart.headers.get('x-wc-store-api-nonce');if(!nonce)throw Error('No delivery session');
 const data=await (await request('wp-json/wc/store/v1/cart/update-customer',{method:'POST',headers:{'Content-Type':'application/json',Nonce:nonce},body:JSON.stringify({shipping_address:{country:'AU',state:location[2],city:location[0],postcode:location[1]}})})).json();
 const actual=(Number(data.totals?.total_items)+Number(data.totals?.total_items_tax))/10**Number(data.totals?.currency_minor_unit??2);
 if(!Number.isFinite(actual)||actual>line.supplierCost*qty+0.02)throw Error('Configuration price changed');
 return deliveredRate(data,id,qty);
}
async function quoteBdo(lines,destination,options={}){
 const selected=lines.filter(isBdo);if(!selected.length)return null;
 if(destination.country&&destination.country!=='Australia')return blocked('These home office products are delivered within Australia only.');
 const pc=String(destination.postcode||'').trim(),suburb=String(destination.suburb||'').trim().toUpperCase().replace(/\s+/g,' ');
 const location=locations.rows.find(r=>r[1]===pc&&r[0]===suburb);
 if(!location)return blocked('Choose a matching Australian suburb and postcode from the suggestions.');
 const grouped=new Map();
 for(const p of selected){const qty=Number(p.qty||1);if(!Number.isInteger(qty)||qty<1||qty>50||!Number.isInteger(p.supplierProductId)||!Number.isFinite(p.supplierCost))return blocked('Please confirm delivery for this home office order.');const key=p.id||p.sku;const item=grouped.get(key)||{...p,qty:0};item.qty+=qty;grouped.set(key,item);}
 const items=[...grouped.values()],units=items.reduce((s,p)=>s+p.qty,0);
 if(items.length>8||units>50)return blocked('Please request a delivery quote for this large home office order.');
 const key=JSON.stringify([pc,suburb,items.map(p=>[p.supplierProductId,p.supplierOptions,p.qty,p.supplierCost])]);
 const cached=cache.get(key);if(!options.fetch&&cached&&Date.now()-cached.at<60000)return cached.quote;
 try{
  const rates=await Promise.all(items.map(p=>supplierRate(p,location,options.fetch||fetch)));
  // Each supplier product shipment is covered; retain the existing office handling allowance and additional-unit charge.
  const fee=Math.round((rates.reduce((a,b)=>a+b,0)+50*units+102*Math.max(0,units-1))*100)/100;
  const quote={fee,quoteRequired:false,message:'',postcode:pc,bdoUnits:units};
  if(!options.fetch){cache.set(key,{at:Date.now(),quote});if(cache.size>100)cache.delete(cache.keys().next().value);}
  return quote;
 }catch{return blocked('BDO delivery or ready stock could not be confirmed for this address and quantity. Please request a quote before payment.');}
}
module.exports={quoteBdo,isBdo,deliveredRate,supplierRate};
