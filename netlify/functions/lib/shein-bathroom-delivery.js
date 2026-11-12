/* Samira Home Decor — SHEIN bathroom parcel shipping.
 * Base parcel handling is $7.95. Each additional unit adds a modest handling
 * charge, while additional estimated shipment weight increases the fee.
 * This is a store tariff, NOT a verified live SHEIN carrier quotation.
 * Validate destination and quantities server-side before accepting payment. */
const locations=require('../../../js/au-locations');
const isShein=p=>p.supplier==='SHEIN'&&p.freightClass==='shein-bathroom';
const blocked=message=>({fee:0,quoteRequired:true,message});
function itemWeight(p){
  const weight=Number(p.weightKg ?? p.weight);
  if(Number.isFinite(weight)&&weight>0)return Math.min(weight,100);
  const label=String(p.name||'').toLowerCase();
  if(/\b(set|kit|rack|shelf|organiser|organizer)\b/.test(label))return 2;
  if(/\b(tray|stone|marble|ceramic|porcelain)\b/.test(label))return 1.2;
  return 0.6;
}
function quoteShein(lines,destination){
  const items=lines.filter(isShein);if(!items.length)return null;
  if(destination.country&&destination.country!=='Australia')return blocked('These bathroom products are delivered within Australia only.');
  const postcode=(String(destination.postcode||'').match(/\b\d{4}\b/)||[])[0];
  const suburb=String(destination.suburb||'').trim().toUpperCase().replace(/\s+/g,' ');
  const location=locations.rows.find(r=>r[1]===postcode&&r[0]===suburb);
  if(!location)return blocked('Choose a matching Australian suburb and postcode from the suggestions.');
  let units=0,kg=0;
  for(const p of items){
    const qty=Number(p.qty||1);
    if(!Number.isInteger(qty)||qty<1||qty>50)return blocked('Please contact us for a delivery quote for this quantity.');
    units+=qty;kg+=itemWeight(p)*qty;
  }
  if(units>50||kg>100)return blocked('Please contact us for a delivery quote for this large order.');
  const fee=Math.round((7.95+Math.max(0,units-1)*4+Math.max(0,kg-1)*1.5)*100)/100;
  return {fee,quoteRequired:false,message:'',postcode,state:location[2]};
}
module.exports={quoteShein,isShein};
