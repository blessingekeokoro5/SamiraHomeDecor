/* Adairs public non-member prices and standard delivery policy, checked 12 Nov 2026.
   Oversized fees require the supplier's postcode quote; never invent a tariff. */
const locations=require('../../../js/au-locations');
const isAdairs=p=>p.supplier==='Adairs'&&/^adairs-/.test(String(p.freightClass||''));
const blocked=message=>({fee:0,quoteRequired:true,message});
const cache=new Map();
function parseDetails(html){
 const start=html.indexOf('{"components"',html.indexOf('ReactDOM.hydrate'));
 if(start<0)throw Error('Missing product data');
 // Find the balanced JSON object without evaluating supplier JavaScript.
 let depth=0,string=false,escape=false;
 for(let i=start;i<html.length;i++){
  const c=html[i];if(string){if(escape)escape=false;else if(c==='\\')escape=true;else if(c==='"')string=false;continue;}
  if(c==='"')string=true;else if(c==='{')depth++;else if(c==='}'&&--depth===0){
   const data=JSON.parse(html.slice(start,i+1));
   const p=data.components.find(c=>c.name==='ProductDetails')?.props;
   if(!p?.prices?.variantGroups)throw Error('Missing variants');return p;
  }
 }
 throw Error('Invalid product data');
}
const money=s=>{const n=Number(String(s||'').replace(/[$,]/g,''));if(!s||!Number.isFinite(n)||n<0)throw Error('Invalid supplier price');return n;};
async function quoteAdairs(lines,destination,options={}){
 const items=lines.filter(isAdairs);if(!items.length)return null;
 if(destination.country&&destination.country!=='Australia')return blocked('These bathroom accessories are delivered within Australia only.');
 const postcode=String(destination.postcode||'').trim(),suburb=String(destination.suburb||'').trim().toUpperCase().replace(/\s+/g,' ');
 const location=locations.rows.find(r=>r[1]===postcode&&r[0]===suburb);
 if(!location)return blocked('Choose a matching Australian suburb and postcode to calculate bathroom delivery.');
 const grouped=new Map();
 for(const p of items){
  if(!/^\/bathroom\/bathroom-accessories\/[a-z0-9/-]+\/$/.test(p.supplierHandle||'')||!p.supplierSku)return blocked('Please contact us to confirm this bathroom accessory.');
  const qty=Number(p.qty||1);if(!Number.isInteger(qty)||qty<1||qty>50)return blocked('Please contact us to confirm this quantity.');
  const old=grouped.get(p.supplierSku);grouped.set(p.supplierSku,{...p,qty:qty+(old?.qty||0)});
 }
 try{
  const fetcher=options.fetch||fetch,unique=[...grouped.values()];
  const pages=new Map();
  await Promise.all([...new Set(unique.map(p=>p.supplierHandle))].map(async handle=>{
   let saved=options.fetch?null:cache.get(handle);
   if(!saved||Date.now()-saved.at>60000){
    const res=await fetcher('https://www.adairs.com.au'+handle,{signal:AbortSignal.timeout(15000)});
    if(!res.ok)throw Error('Supplier unavailable');saved={at:Date.now(),data:parseDetails(await res.text())};
    if(!options.fetch){cache.set(handle,saved);if(cache.size>50)cache.delete(cache.keys().next().value);}
   }
   pages.set(handle,saved.data);
  }));
  let cost=0;
  for(const p of unique){
   const variant=pages.get(p.supplierHandle).prices.variantGroups.flatMap(g=>g.items).find(v=>v.code===p.supplierSku);
   if(!variant?.hasStock||variant.inStockQty<p.qty||variant.maxQty<p.qty)return blocked('A bathroom accessory is unavailable in the requested quantity. Please confirm availability before payment.');
   if(variant.isOversizedItem||p.freightClass==='adairs-oversized')return blocked('This bathroom item needs a postcode-specific delivery quote. Please contact us before payment.');
   const current=money(variant.price.promotionPrice||variant.price.price);
   const margin=Number(p.profitMarkup),selling=Number(p.unitPrice??p.memberPrice??p.price);
   if(![50,100].includes(margin)||selling+0.001<current+margin)return blocked('This bathroom accessory needs an updated price before payment. Please contact us.');
   cost+=Math.round(current*100)*p.qty;
  }
  const transit=['VIC','NSW','ACT'].includes(location[2])?[3,5]:['WA','NT'].includes(location[2])?[7,9]:[4,6];
  return {fee:cost>17500?0:19.95,quoteRequired:false,message:'',days:[3+transit[0],5+transit[1]],supplierSubtotal:cost/100};
 }catch{return blocked('We could not confirm bathroom availability and delivery. Please request confirmation before payment.');}
}
module.exports={quoteAdairs,isAdairs,parseDetails};
