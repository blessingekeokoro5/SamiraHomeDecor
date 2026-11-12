const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm');
const b={console,localStorage:{getItem:()=>null}};b.window=b;
vm.runInNewContext(fs.readFileSync(require.resolve('../js/data.js'),'utf8')+';globalThis.items=PRODUCTS.filter(p=>p.outdoorImport)',b);
const c=require('../netlify/functions/_catalogue.json').products;
const {quoteDecor}=require('../netlify/functions/lib/koala-decor-delivery');
const freight=require('../js/furniture-freight');
test('outdoor products use the additional $500 markup and protected server prices',()=>{
 const expected={kl129851:7498,kl129852:3198,kl129854:13498};assert.equal(b.items.length,3);
 for(const p of b.items){assert.equal(p.cat,'Outdoor');assert.equal(p.memberPrice,expected[p.id]);assert.equal(c[p.id].memberPrice,expected[p.id]);assert.equal(c[p.id].supplierProductUuid,p.supplierProductUuid);assert.ok(p.price*.9>=p.memberPrice);assert.ok(p.img.startsWith('https://img.koalaliving.com.au/products/'));}
});
test('outdoor delivery uses the live supplier quote with extra bulky delivery per additional item',async()=>{
 const p=b.items.find(p=>p.id==='kl129851');
 const quote=await quoteDecor([{...p,qty:2}],{postcode:'5087',suburb:'Klemzig',country:'Australia'},{apiKey:'test',fetch:async()=>({ok:true,json:async()=>({data:{combined:{shipping_price:200,productsInCart:[{itemstatus:'INSTOCK'}]},u0:{shipping_price:161.2,productsInCart:[{itemstatus:'INSTOCK'}]}}})})});
 assert.equal(quote.fee,322.4);const delivery=freight.quote([{...p,qty:2}],'5087','Australia',quote);assert.equal(delivery.fee,424.4);assert.equal(delivery.surcharge,102);assert.equal(delivery.quoteRequired,false);
 assert.equal(freight.quote([p],'5087','Australia').quoteRequired,true);
 const server=require('../netlify/functions/create-checkout-session')._test;const line=server.resolveLine({id:p.id,qty:2,price:1},true);assert.equal(line.unitPrice,7498);assert.equal(server.shippingFor('Australia','delivery',[line],0,'5087',quote).amount,424.4);
});
