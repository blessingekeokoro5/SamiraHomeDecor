/* Live, read-only supplier quotes. Product identifiers always come from the trusted catalogue. */
const ENDPOINT = 'https://8xa3k09jv9.execute-api.ap-southeast-2.amazonaws.com/prd/graphql';
const isDecor = p => String(p.freightClass || '').startsWith('decor-');
const round = n => Math.round(n * 100) / 100;
function stateFor(pc) {
  const n=Number(pc);
  if ((n>=2600&&n<=2618)||(n>=2900&&n<=2920)||(n>=200&&n<=299)) return 'ACT';
  if(n>=800&&n<=999)return 'NT';if(n>=1000&&n<=2999)return 'NSW';if(n>=3000&&n<=3999||n>=8000&&n<=8999)return 'VIC';if(n>=4000&&n<=4999||n>=9000&&n<=9999)return 'QLD';if(n>=5000&&n<=5999)return 'SA';if(n>=6000&&n<=6999)return 'WA';if(n>=7000&&n<=7999)return 'TAS';return '';
}
function blocked(message) { return {fee:0,quoteRequired:true,message}; }
async function quoteDecor(lines,destination,options={}) {
  const decor=lines.filter(isDecor);if(!decor.length)return null;
  const pc=(String(destination.postcode||'').match(/\b\d{4}\b/)||[])[0];
  const suburb=String(destination.suburb||'').trim().slice(0,100),state=stateFor(pc);
  if(destination.country&&destination.country!=='Australia')return blocked('These home décor products are delivered within Australia only.');
  if(!pc||!state||!suburb)return blocked('Enter your postcode and suburb to calculate delivery.');
  const byId=new Map();
  for(const line of decor){
    if(!/^[0-9a-f-]{36}$/i.test(line.supplierProductUuid||''))return blocked('Please contact us to confirm delivery for this product.');
    const qty=Number(line.qty||1);if(!Number.isInteger(qty)||qty<1||qty>50)return blocked('Please contact us for a delivery quote for this quantity.');
    const p=byId.get(line.supplierProductUuid)||{id:line.supplierProductUuid,qty:0};p.qty+=qty;byId.set(p.id,p);
  }
  const unique=[...byId.values()];if(unique.length>30||unique.some(p=>p.qty>50))return blocked('Please contact us for a delivery quote for this large order.');
  const key=options.apiKey||process.env.KOALA_DELIVERY_API_KEY;
  if(!key)return blocked('Delivery needs confirmation. Please contact us for a quote before paying.');
  const ship={postcode:pc,suburb,state,country:'Australia',option_lift:false,option_stairs:false,Deluxe:0};
  const cart=items=>({cart_items:items.map(p=>({product:{id:p.id},quantity:p.qty,delivery_method:'DELIVERY'})),postCode:pc,suburb,state});
  const vars={ship,combined:cart(unique)};
  let definitions='$ship:ShippingInformation,$combined:CartInput';
  let fields='combined:totalPriceCalculations(cart:$combined,shipping_information:$ship){shipping_price productsInCart{id itemstatus}}';
  const simple=unique.length===1&&unique[0].qty===1;
  if(!simple)unique.forEach((p,i)=>{vars['u'+i]=cart([{...p,qty:1}]);definitions+=',$u'+i+':CartInput';fields+=' u'+i+':totalPriceCalculations(cart:$u'+i+',shipping_information:$ship){shipping_price productsInCart{id itemstatus}}';});
  try{
    const res=await (options.fetch||fetch)(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json','x-api-key':key},body:JSON.stringify({query:'query('+definitions+'){'+fields+'}',variables:vars}),signal:AbortSignal.timeout(25000)});
    if(!res.ok)throw new Error('Supplier response '+res.status);
    const result=await res.json();if(result.errors||!result.data)throw new Error('Supplier quote unavailable');
    const value=q=>{
      if(!q||!Number.isFinite(q.shipping_price)||q.shipping_price<=0||!Array.isArray(q.productsInCart)||!q.productsInCart.length||q.productsInCart.some(p=>p.itemstatus!=='INSTOCK'))throw new Error('Delivery not available');
      return q.shipping_price;
    };
    const combined=value(result.data.combined);
    const perItem=simple?combined:unique.reduce((sum,p,i)=>sum+value(result.data['u'+i])*p.qty,0);
    // Every additional item carries delivery, and freight never falls below the supplier's whole-cart quote.
    return {fee:round(Math.max(combined,perItem)),quoteRequired:false,message:'',postcode:pc};
  }catch(error){return blocked('We could not confirm delivery for this address and quantity. Please contact us for a quote before paying.');}
}
module.exports={quoteDecor,stateFor,isDecor};
