const {test}=require('node:test');const assert=require('node:assert/strict');
const fs=require('fs'),vm=require('vm'),path=require('path'),Freight=require('../js/furniture-freight');
test('Luxo rates include the approved uplift and unknown postcodes require a quote',()=>{
 assert.equal(Freight.quote([{readyDining:true,supplier:'Luxo Living',freightClass:'table'}],'5087','Australia').fee,275);
 assert.equal(Freight.quote([{readyDining:true,supplier:'Luxo Living',freightClass:'buffet'}],'7000','Australia').quoteRequired,true);
 assert.equal(Freight.quote([{readyDining:true,supplier:'Luxo Living',freightClass:'table'}],'5000','Australia').quoteRequired,true);
});
test('Koala uses its independently tested light and heavy rates plus $50',()=>{
 assert.equal(Freight.quote([{readyDining:true,supplier:'Koala Living',freightClass:'heavy'}],'5087','Australia').fee,174.8);
 assert.equal(Freight.quote([{readyDining:true,supplier:'Koala Living',freightClass:'light'}],'2000','Australia').fee,80.25);
 assert.equal(Freight.quote([{readyDining:true,supplier:'Koala Living',freightClass:'heavy'}],'7000','Australia').fee,727.79);
 assert.equal(Freight.quote([{readyDining:true,supplier:'Koala Living',freightClass:'light'}],'4000','Australia').quoteRequired,true);
});
test('multiple furniture units incur one $102 fee',()=>{
 const chair={readyDining:true,supplier:'Luxo Living',freightClass:'chair',chairSets:1};
 assert.equal(Freight.quote([{...chair,qty:1}],'5000','Australia').fee,105);
 assert.equal(Freight.quote([{...chair,qty:2}],'5000','Australia').fee,312);
 assert.equal(Freight.quote([{...chair,qty:3}],'5000','Australia').fee,417);
});
test('imported products have protected member and regular prices',()=>{
 const b={console,localStorage:{getItem:()=>null}};b.window=b;vm.createContext(b);
 vm.runInContext(fs.readFileSync(path.join(__dirname,'../js/data.js'),'utf8')+';globalThis.p=PRODUCTS.filter(x=>x.readyDining)',b);
 // The existing Koala wine cooler is now included in the decor import.
 assert.equal(b.p.filter(p=>!p.bedroomImport&&!p.homeDecorImport&&!p.outdoorImport&&!p.jamesLaneImport&&!p.officeImport).length,302);for(const p of b.p){assert.equal(p.priceFloor,p.memberPrice);assert.ok(p.price>p.memberPrice);assert.ok(['Luxo Living','Koala Living','James Lane'].includes(p.supplier));}
});
test('trusted payment server calculates the same protected prices and freight',()=>{
 const cat=require('../netlify/functions/_catalogue.json').products;
 const server=require('../netlify/functions/create-checkout-session')._test;
 const id=Object.keys(cat).find(id=>cat[id].readyDining&&cat[id].supplier==='Luxo Living'&&cat[id].freightClass==='table');
 const line=server.resolveLine({id,qty:2,price:1},true);
 assert.equal(line.unitPrice,cat[id].memberPrice);
 assert.equal(server.shippingFor('Australia','delivery',[line],99999,'SA 5087').amount,652);
 assert.equal(server.shippingFor('Australia','delivery',[line],99999,'SA 5000').quoteRequired,true);
});
