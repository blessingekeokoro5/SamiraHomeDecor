/* Samira parcel tariff based on SHEIN Australia's published $7.95 standard rate,
 * checked 12 November 2026. Charged per unit; promotional free shipping is not
 * assumed. SHEIN publishes one national rate, not separate state surcharges. */
const locations=require('../../../js/au-locations');
const isShein=p=>p.supplier==='SHEIN'&&p.freightClass==='shein-bathroom';
const blocked=message=>({fee:0,quoteRequired:true,message});
function quoteShein(lines,destination){
  const items=lines.filter(isShein);if(!items.length)return null;
  if(destination.country&&destination.country!=='Australia')return blocked('These bathroom products are delivered within Australia only.');
  const postcode=(String(destination.postcode||'').match(/\b\d{4}\b/)||[])[0];
  const suburb=String(destination.suburb||'').trim().toUpperCase().replace(/\s+/g,' ');
  const location=locations.rows.find(r=>r[1]===postcode&&r[0]===suburb);
  if(!location)return blocked('Choose a matching Australian suburb and postcode from the suggestions.');
  let units=0;
  for(const p of items){const qty=Number(p.qty||1);if(!Number.isInteger(qty)||qty<1||qty>50)return blocked('Please contact us for a delivery quote for this quantity.');units+=qty;}
  return {fee:Math.round(7.95*units*100)/100,quoteRequired:false,message:'',postcode,state:location[2]};
}
module.exports={quoteShein,isShein};
