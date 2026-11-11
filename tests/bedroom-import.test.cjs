const {test}=require('node:test');const assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm');
const freight=require('../js/furniture-freight');
const sandbox={localStorage:{getItem:()=>null},console};sandbox.window=sandbox;
vm.runInNewContext(fs.readFileSync(require.resolve('../js/data.js'),'utf8')+';globalThis.items=PRODUCTS.filter(p=>p.bedroomImport)',sandbox);
const products=sandbox.items;
test('bedroom items are discoverable, uniquely identified, and have checkout-safe prices',()=>{
 assert.equal(products.length,44);assert.equal(new Set(products.map(p=>p.id)).size,44);
 const catalogue=require('../netlify/functions/_catalogue.json').products;
 for(const p of products){assert.equal(p.cat,'Bedroom');assert.ok(p.img.startsWith('https://img.koalaliving.com.au/products/'));assert.ok(p.imgs.length>=2);assert.equal(p.priceFloor,p.memberPrice);assert.equal(catalogue[p.id].memberPrice,p.priceFloor);assert.equal(catalogue[p.id].freightClass,p.freightClass);assert.ok(p.price*.9>=p.memberPrice);}
});
test('bedroom destination and quantity changes recalculate freight and each additional-item fee',()=>{
 const product=products.find(p=>Object.keys(freight.bedroomRates[p.supplierProductId]||{}).length>=2);assert.ok(product);
 const rates=freight.bedroomRates[product.supplierProductId];const postcodes=Object.keys(rates);
 for(const pc of postcodes){const unit=rates[pc];assert.equal(freight.quote([product],pc,'Australia').fee,unit);assert.equal(freight.quote([{...product,qty:2}],pc,'Australia').fee,Math.round((2*unit+102)*100)/100);assert.equal(freight.quote([{...product,qty:3}],pc,'Australia').fee,Math.round((3*unit+204)*100)/100);assert.equal(freight.quote([product,{id:'decor',qty:2}],pc,'Australia').surcharge,204);}
 assert.equal(freight.quote([product],'9999','Australia').quoteRequired,true);assert.equal(freight.quote([product],postcodes[0],'New Zealand').quoteRequired,true);
});
test('bedroom classes never borrow unrelated dining delivery rates',()=>{
 assert.equal(freight.quote([{readyDining:true,supplier:'Koala Living',freightClass:'bedroom-missing'}],'5087','Australia').quoteRequired,true);
});
