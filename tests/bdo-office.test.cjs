const {test}=require('node:test'),assert=require('node:assert/strict');
const {quoteBdo,deliveredRate}=require('../netlify/functions/lib/bdo-office-delivery');
const {quoteSuppliers,isLive}=require('../netlify/functions/lib/supplier-delivery');
const Freight=require('../js/furniture-freight');
const p={id:'bdo10736',supplier:'BDO Furniture',supplierProductId:10736,supplierCost:337,supplierOptions:{'addon-10736-0':'black-no-adjustable-arms-1'},freightClass:'office-chair',readyDining:true,qty:1};
const destination={postcode:'5000',suburb:'Adelaide',country:'Australia'};
function fixture({price=337,available=true,collectOnly=false,wrongCart=false}={}){
 const calls=[];return {calls,fetch:async(url,options={})=>{
 calls.push({url,options});let value={};
 if(url.includes('/products/'))value={id:10736,is_in_stock:available,is_on_backorder:false,is_purchasable:true,prices:{price:String(price*100),currency_minor_unit:2}};
 else if(url.includes('add_to_cart'))value={fragments:{cart:'ok'}};
 else if(url.includes('update-customer'))value={items:[{id:wrongCart?999:10736,quantity:1}],totals:{total_items:'30636',total_items_tax:'3064',currency_minor_unit:2},shipping_rates:[{items:[{quantity:1}],shipping_rates:[{name:'Click & Collect',method_id:'local_pickup',price:'0',taxes:'0',currency_code:'AUD'},...(collectOnly?[]:[{name:'Shipping',method_id:'flexible_shipping_single',price:'3900',taxes:'390',currency_code:'AUD',currency_minor_unit:2}])]}]};
 return {ok:true,headers:{getSetCookie:()=>['wp_woocommerce_session_test=session; Path=/'],get:name=>name==='nonce'?'nonce-test':null},json:async()=>value};
 }};
}
test('BDO delivered quote includes tax and allowance, excludes collection, uses chosen configuration',async()=>{
 const m=fixture(),q=await quoteBdo([p],destination,m);assert.equal(q.fee,92.9);assert.equal(q.quoteRequired,false);assert.ok(isLive(p));
 const sent=JSON.parse(m.calls.find(c=>c.url.includes('update-customer')).options.body);assert.deepEqual(sent.shipping_address,{country:'AU',state:'SA',city:'ADELAIDE',postcode:'5000'});
 assert.ok(m.calls.find(c=>c.url.includes('add_to_cart')).options.body.includes('addon-10736-0=black-no-adjustable-arms-1'));
});
test('price changes, unavailable stock, pickup-only and mismatched cart block payment',async()=>{
 for(const opt of [{price:500},{available:false},{collectOnly:true},{wrongCart:true}])assert.equal((await quoteBdo([p],destination,fixture(opt))).quoteRequired,true);
 assert.equal((await quoteBdo([p],{...destination,suburb:'Sydney'},fixture())).quoteRequired,true);
 assert.equal((await quoteBdo([p],{...destination,country:'Canada'},fixture())).quoteRequired,true);
});
test('each shipment and additional unit contributes freight; browser and payment agree',async()=>{
 const q=await quoteBdo([p,{...p,id:'bdo-other'}],destination,fixture());assert.equal(q.fee,287.8);
 const combined=await quoteSuppliers([p],destination,{bdo:fixture()});assert.equal(combined.fee,92.9);
 const browser=Freight.quote([p],'5000','Australia',combined);assert.equal(browser.fee,92.9);assert.equal(browser.quoteRequired,false);
 const server=require('../netlify/functions/create-checkout-session')._test;assert.equal(server.shippingFor('Australia','delivery',[p],0,'5000',combined).amount,browser.fee);
});
test('BDO import protects per-unit profit through the trusted payment catalogue',()=>{
 const fs=require('fs'),vm=require('vm'),b={localStorage:{getItem:()=>null}};b.window=b;vm.createContext(b);vm.runInContext(fs.readFileSync('js/data.js','utf8')+';this.items=PRODUCTS.filter(p=>p.bdoImport)',b);
 assert.ok(b.items.some(p=>p.freightClass==='office-chair'));assert.ok(b.items.some(p=>p.freightClass==='office-desk'));
 const cat=require('../netlify/functions/_catalogue.json').products,server=require('../netlify/functions/create-checkout-session')._test;
 for(const p of b.items){assert.equal(p.cat,'Office');assert.equal(p.preorder,false);assert.ok(!/boardroom|reception|meeting|drafting|gaming|lectern|desk frame$/i.test(p.name));assert.equal(p.memberPrice-p.supplierCost,p.shippingSize==='heavy'?2000:1500);assert.equal(cat[p.id].supplierProductId,p.supplierProductId);assert.deepEqual(JSON.parse(JSON.stringify(p.supplierOptions)),cat[p.id].supplierOptions);const line=server.resolveLine({id:p.id,qty:2,price:1},true);assert.equal(line.unitPrice,p.memberPrice);assert.equal(line.supplierCost,p.supplierCost);assert.equal(line.supplierProductId,p.supplierProductId);}
});
test('supplier outage uses published free-range estimates, never invents regional/interstate tariffs',async()=>{
 const unavailable={fetch:async()=>{throw Error('Supplier unreachable')}};
 const free=await quoteBdo([p],destination,unavailable);assert.equal(free.fee,50);assert.equal(free.estimated,true);assert.equal(free.quoteRequired,false);
 const {policyEstimate}=require('../netlify/functions/lib/bdo-office-delivery');
 assert.equal(policyEstimate([{supplierProductId:232967,supplierCost:197,qty:1}],['SYDNEY','2000','NSW']),39);
 assert.equal(policyEstimate([{supplierProductId:232967,supplierCost:197,qty:1}],['PORT LINCOLN','5606','SA']),null);
 assert.equal(policyEstimate([{supplierProductId:999999,supplierCost:197,qty:1}],['ADELAIDE','5000','SA']),null);
});
