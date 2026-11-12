/* Luxo's public product delivery calculator; no shopper street address is sent. */
const ENDPOINT='https://lapi.luxoliving.com.au/api/siss-shopify-ep/rate';
const ORIGIN={country:'AU',postal_code:'2164',province:'NSW',city:'Wetherill Park',address1:'Unit 2, 6-8 Newton Road'};
const locations=require('../../../js/au-locations');
const isOffice=p=>p.supplier==='Luxo Living'&&/^office-/.test(String(p.freightClass||''));
const blocked=(message,reason='delivery')=>({fee:0,quoteRequired:true,message,reason});
const round=n=>Math.round(n*100)/100;
const stockCache=new Map();
async function checkStock(product,qty,fetcher){
  const key=product.supplierHandle;let stock=stockCache.get(key);
  if(!stock||Date.now()-stock.at>60000){
    const res=await fetcher('https://www.luxoliving.com.au/products/'+key,{signal:AbortSignal.timeout(12000)});
    if(!res.ok)throw Error('Stock check unavailable');
    const html=await res.text(),match=html.match(/<script\b[^>]*\bdata-product-metadata[^>]*>([\s\S]*?)<\/script>/i);
    if(!match)throw Error('Stock check unavailable');
    const data=JSON.parse(match[1]),custom=data.metafields?.custom||{};
    if(!data.product?.variants?.some(v=>v.sku===product.supplierSku&&v.available))throw Error('Product unavailable');
    const warehouses=['sydney','brisbane','perth'];
    const preorder=warehouses.some(w=>custom['preorder_'+w+'_warehouse']===true);
    const units=warehouses.reduce((sum,w)=>sum+Math.max(0,Number(custom['inventory_'+w+'_warehouse'])||0),0);
    stock={at:Date.now(),preorder,units};stockCache.set(key,stock);
    if(stockCache.size>100)stockCache.delete(stockCache.keys().next().value);
  }
  if(stock.preorder||stock.units<qty){const error=Error('Ready stock unavailable');error.reason='dispatch';throw error;}
}
function rateValue(data){
  const rates=data?.rates||data?.data?.rates;
  if(!Array.isArray(rates))throw Error('Invalid quote');
  const standard=rates.filter(r=>r.service_code==='siss_standard'&&r.currency==='AUD'&&['string','number'].includes(typeof r.total_price)&&Number.isFinite(Number(r.total_price))&&Number(r.total_price)>=0&&String(r.total_price).trim()!=='');
  if(!standard.length)throw Error('No standard delivery');
  return Math.min(...standard.map(r=>Number(r.total_price)/100));
}
async function quoteOffice(lines,destination,options={}){
  const office=lines.filter(isOffice);if(!office.length)return null;
  if(destination.country&&destination.country!=='Australia')return blocked('These office products are delivered within Australia only.');
  const postcode=(String(destination.postcode||'').match(/\b\d{4}\b/)||[])[0],suburb=String(destination.suburb||'').trim().toUpperCase().replace(/\s+/g,' ');
  if(!postcode||!suburb)return blocked('Enter your suburb and postcode to calculate delivery.');
  const location=locations.rows.find(r=>r[1]===postcode&&r[0]===suburb);
  if(!location)return blocked('Choose a matching Australian suburb and postcode from the suggestions.');
  const grouped=new Map();
  for(const line of office){
    if(!/^[A-Za-z0-9_-]{2,80}$/.test(line.supplierSku||'')||!/^[a-z0-9-]{2,160}$/.test(line.supplierHandle||''))return blocked('Please contact us to confirm delivery for this office product.');
    const qty=Number(line.qty||1);if(!Number.isInteger(qty)||qty<1||qty>50)return blocked('Please contact us for a delivery quote for this quantity.');
    const item=grouped.get(line.supplierSku)||{...line,qty:0};item.qty+=qty;grouped.set(line.supplierSku,item);
  }
  const unique=[...grouped.values()],units=unique.reduce((s,p)=>s+p.qty,0);
  if(unique.length>12||units>50)return blocked('Please contact us for a delivery quote for this large order.');
  const fetcher=options.fetch||fetch;
  async function rate(items){
    const payload={rate:{origin:ORIGIN,destination:{country:'AU',postal_code:postcode,province:location[2],city:location[0]},items:items.map(p=>({sku:p.supplierSku,quantity:p.qty})),currency:'AUD',locale:'en'}};
    const res=await fetcher(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(12000)});
    if(!res.ok)throw Error('Supplier quote unavailable');return rateValue(await res.json());
  }
  try{
    const simple=unique.length===1&&units===1;
    const [combined,singles]=await Promise.all([rate(unique),simple?Promise.resolve(null):Promise.all(unique.map(p=>rate([{...p,qty:1}]))),...unique.map(p=>checkStock(p,p.qty,fetcher))]);
    const perUnit=simple?combined:unique.reduce((sum,p,i)=>sum+singles[i]*p.qty,0);
    const additionalUnits=Math.max(0,units-1);
    // Preserve the existing Luxo $50/unit allowance; fuller carts add $102 per additional unit.
    const additional=102*additionalUnits,fee=round(Math.max(combined,perUnit)+50*units+additional);
    return {fee,quoteRequired:false,message:'',postcode,additional,officeUnits:units};
  }catch(error){return error.reason==='dispatch'?blocked('Some office items are no longer ready to ship in the requested quantity. Please confirm availability before payment.','dispatch'):blocked('We could not confirm office delivery for this address. Please request a delivery quote before payment.');}
}
module.exports={quoteOffice,isOffice,rateValue};
