const {test}=require('node:test');const assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm');const f=require('../js/furniture-freight');
const sandbox={localStorage:{getItem:()=>null},console};sandbox.window=sandbox;
vm.runInNewContext(fs.readFileSync(require.resolve('../js/data.js'),'utf8')+';globalThis.items=PRODUCTS.filter(p=>p.homeDecorImport)',sandbox);
const products=sandbox.items;
test('decor import contains 369 unique products in the home decor collection with matching protected checkout prices',()=>{
 assert.equal(products.length,369);assert.equal(new Set(products.map(p=>p.id)).size,369);
 const catalogue=require('../netlify/functions/_catalogue.json').products;
 for(const p of products){assert.equal(p.cat,'Home Décor');assert.equal(p.priceFloor,p.memberPrice);assert.equal(catalogue[p.id].memberPrice,p.priceFloor);assert.equal(catalogue[p.id].freightClass,p.freightClass);assert.ok(p.price*.9>=p.memberPrice);assert.ok(p.img.startsWith('https://img.koalaliving.com.au/products/'));assert.ok(!p.furniture);}
});
test('each extra decor unit carries its own postcode shipping without a furniture bulky surcharge',()=>{
 const p=products.find(p=>Object.keys(f.decorRates[p.freightClass.slice(6)]||{}).length>=2);assert.ok(p);
 const rates=f.decorRates[p.freightClass.slice(6)];
 for(const pc of Object.keys(rates)){for(const qty of [1,2,3]){const q=f.quote([{...p,qty}],pc,'Australia',{fee:Math.round(rates[pc]*qty*100)/100,quoteRequired:false});assert.equal(q.fee,Math.round(rates[pc]*qty*100)/100);assert.equal(q.surcharge,0);assert.equal(q.quoteRequired,false);}}
 assert.equal(f.quote([{...p,qty:2}],Object.keys(rates)[0],'Australia').quoteRequired,true);
 assert.equal(f.quote([p],'9999','Australia').quoteRequired,true);assert.equal(f.quote([p],Object.keys(rates)[0],'New Zealand').quoteRequired,true);
});
test('unknown decor rates cannot fall back to furniture rates and mixed furniture orders keep existing rules',()=>{
 assert.equal(f.quote([{readyDining:true,supplier:'Koala Living',freightClass:'decor-missing'}],'5087','Australia').quoteRequired,true);
 const p=products.find(p=>f.decorRates[p.freightClass.slice(6)]?.['5087']);assert.ok(p);
 const chair={readyDining:true,supplier:'Luxo Living',freightClass:'chair',chairSets:1,qty:2};const q=f.quote([chair,p],'5087','Australia');assert.equal(q.fee,Math.round((210+102+f.decorRates[p.freightClass.slice(6)]['5087'])*100)/100);
});
