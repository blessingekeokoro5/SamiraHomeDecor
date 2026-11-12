const {test}=require('node:test'),assert=require('node:assert/strict');
const {quoteOffice,rateValue}=require('../netlify/functions/lib/luxo-office-delivery');
const Freight=require('../js/furniture-freight'),server=require('../netlify/functions/create-checkout-session')._test;
const cat=require('../netlify/functions/_catalogue.json').products;
const destination={postcode:'5000',suburb:'Adelaide',country:'Australia'};
const item=(handle='test-desk')=>({supplier:'Luxo Living',supplierSku:'LTTEST',supplierHandle:handle,freightClass:'office-desk',readyDining:true,shippingSize:'heavy',qty:1});
function mock({single=75,combined=150,preorder=false,stock=20,fail=false}={}){
 const calls=[];
 const fetch=async (url,options={})=>{
  if(url.includes('/products/'))return {ok:true,text:async()=>'<script type="application/json" data-product-metadata>'+JSON.stringify({product:{variants:[{sku:'LTTEST',available:true}]},metafields:{custom:{inventory_sydney_warehouse:stock,preorder_sydney_warehouse:preorder}}})+'</script>'};
  const q=JSON.parse(options.body).rate;calls.push(q);
  return {ok:!fail,json:async()=>({rates:[{service_code:'siss_cnc',currency:'AUD',total_price:0},{service_code:'siss_standard',currency:'AUD',total_price:100*(q.items.reduce((s,p)=>s+p.quantity,0)>1?combined:single)}]})};
 };return {fetch,calls};
}
test('ready office import has one desk, seven chairs, protected unit margins and supplier SKUs',()=>{
 const fs=require('fs'),vm=require('vm'),b={localStorage:{getItem:()=>null}};b.window=b;vm.createContext(b);vm.runInContext(fs.readFileSync('js/data.js','utf8')+';this.p=PRODUCTS.filter(p=>p.officeImport)',b);
 assert.equal(b.p.length,8);assert.equal(b.p.filter(p=>p.freightClass==='office-desk').length,1);
 for(const p of b.p){assert.equal(p.cat,'Office');assert.equal(p.preorder,false);assert.ok(p.stockAtImport>0);assert.ok(!/Aglaya|Aerona/i.test(p.name));assert.equal(p.memberPrice-p.supplierCost,p.shippingSize==='heavy'?2000:1500);assert.equal(cat[p.id].supplierSku,p.supplierSku);assert.equal(cat[p.id].supplierHandle,p.supplierHandle);assert.ok(p.imgs.length>1);}
});
test('single office item uses delivered rate, never free pickup, plus the existing allowance',async()=>{
 const m=mock(),q=await quoteOffice([item()],destination,m);assert.equal(q.fee,125);assert.equal(q.quoteRequired,false);assert.equal(m.calls[0].destination.postal_code,'5000');assert.equal(m.calls[0].destination.province,'SA');assert.equal(m.calls[0].items[0].sku,'LTTEST');
});
test('more units add per-unit freight and $102 for each additional unit; whole-cart quote is covered',async()=>{
 const m=mock({combined:120});const q=await quoteOffice([{...item(),qty:2}],destination,m);assert.equal(q.fee,352);
 const expensive=await quoteOffice([{...item(),qty:2}],destination,mock({combined:700}));assert.equal(expensive.fee,902);
});
test('combined office and other furniture has identical browser and payment delivery totals',async()=>{
 const office=item(),other={supplier:'Luxo Living',freightClass:'chair',readyDining:true,shippingSize:'medium',qty:1};
 const live=await quoteOffice([office],{...destination,postcode:'5087',suburb:'Klemzig'},mock());
 const browser=Freight.quote([office,other],'5087','Australia',live),payment=server.shippingFor('Australia','delivery',[office,other],0,'5087',live);
 assert.equal(browser.fee,125+105+102);assert.equal(browser.fee,payment.amount);assert.equal(browser.mixedSurcharge,0);
 assert.equal(Freight.quote([office],'5000','Australia').quoteRequired,true);
});
test('unavailable stock, preorders, invalid destinations and failed rate lookups block payment',async()=>{
 const pre=await quoteOffice([item('preorder-desk')],destination,mock({preorder:true}));assert.equal(pre.quoteRequired,true);assert.equal(pre.reason,'dispatch');
 assert.equal((await quoteOffice([{...item('short-stock-desk'),qty:2}],destination,mock({stock:1}))).quoteRequired,true);
 assert.equal((await quoteOffice([item()],{...destination,suburb:'Sydney'},mock())).quoteRequired,true);
 assert.equal((await quoteOffice([item()],{...destination,country:'Canada'},mock())).quoteRequired,true);
 assert.equal((await quoteOffice([item()],destination,mock({fail:true}))).quoteRequired,true);
 for(const price of [null,'',-1,'bad'])assert.throws(()=>rateValue({rates:[{service_code:'siss_standard',currency:'AUD',total_price:price}]}));
});
