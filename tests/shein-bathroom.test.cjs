const {test}=require('node:test'),assert=require('node:assert/strict');
const {quoteShein}=require('../netlify/functions/lib/shein-bathroom-delivery');
const {quoteSuppliers}=require('../netlify/functions/lib/supplier-delivery');
const freight=require('../js/furniture-freight');
const catalogue=require('../netlify/functions/_catalogue.json').products;
const item={supplier:'SHEIN',freightClass:'shein-bathroom',readyDining:true,qty:1};
test('national parcel tariff validates matching locations in all eight states and territories',()=>{
 for(const [suburb,postcode] of [['Adelaide','5000'],['Sydney','2000'],['Melbourne','3000'],['Brisbane City','4000'],['Perth','6000'],['Hobart','7000'],['Darwin City','0800'],['Canberra','2600']]){
  const q=quoteShein([item],{country:'Australia',suburb,postcode});assert.equal(q.quoteRequired,false);assert.equal(q.fee,7.95);
 }
 assert.equal(quoteShein([item],{suburb:'Adelaide',postcode:'2000'}).quoteRequired,true);
 assert.equal(quoteShein([item],{country:'New Zealand',suburb:'Adelaide',postcode:'5000'}).quoteRequired,true);
});
test('quantity charges stay identical through supplier quote and freight checkout without furniture surcharges',async()=>{
 const lines=[{...item,qty:3}],q=await quoteSuppliers(lines,{country:'Australia',suburb:'Adelaide',postcode:'5000'});
 const total=freight.quote(lines,'5000','Australia',q);
 assert.equal(q.fee,15.95);assert.equal(total.fee,15.95);assert.equal(total.surcharge,0);assert.equal(total.quoteRequired,false);
 assert.equal(freight.quote(lines,'5000','Australia').quoteRequired,true);
});
test('bathroom prices preserve exact per-unit markups for members and trusted checkout',()=>{
 const vm=require('vm'),fs=require('fs'),b={localStorage:{getItem:()=>null}};b.window=b;vm.createContext(b);
 vm.runInContext(fs.readFileSync('js/data.js','utf8')+';this.items=PRODUCTS.filter(p=>p.sheinBathroomImport)',b);
 assert.ok(b.items.length>=4);
 for(const p of b.items){assert.equal(Math.round((p.price-p.supplierCost)*100),p.markupSize==='small'?5000:15000);assert.equal(p.price,p.memberPrice);assert.equal(p.price,p.priceFloor);assert.equal(catalogue[p.id].price,p.price);assert.equal(catalogue[p.id].readyDining,true);assert.equal(catalogue[p.id].freightClass,'shein-bathroom');assert.equal(freight.loadClass(p),null);}
});

test('heavy and exceptionally large SHEIN carts have automatic delivery fees, never manual quotes',()=>{
 const destination={country:'Australia',suburb:'Adelaide',postcode:'5000'};
 for(const [qty,weight,fee] of [[1,20,200],[15,0.6,200],[50,0.6,215],[2,50,215]]){
  const result=quoteShein([{...item,qty,weight}],destination);
  assert.equal(result.quoteRequired,false);
  assert.equal(result.fee,fee);
 }
});
