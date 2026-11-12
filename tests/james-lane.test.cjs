const {test}=require('node:test'),assert=require('node:assert/strict');
const F=require('../js/furniture-freight');
const item=(shippingSize,weight,qty=1)=>({readyDining:true,supplier:'James Lane',shippingSize,weight,qty});
test('Adelaide furniture rates scale with weight and quantity without legacy mixed surcharge',()=>{
 for(const [lines,fee] of [ [[item('heavy',40)],200],[[item('heavy',60)],250],[[item('heavy',135)],300],[[item('medium',10)],180],[[item('medium',10,2)],360],[[item('medium',10,3)],540],[[item('heavy',40),item('medium',10)],380] ]){
  const q=F.quote(lines,'5000','Australia');assert.equal(q.fee,fee);assert.equal(q.quoteRequired,false);assert.equal(q.mixedSurcharge,0);
 }
 assert.equal(F.quote([item('heavy',135)],'5087','Australia').fee,300);
});
test('unconfirmed bulky locations and overseas delivery cannot take payment',()=>{
 for(const [pc,country] of [['0872','Australia'],['9999','Australia'],['','Australia'],['5000','New Zealand']])assert.equal(F.quote([item('heavy',135)],pc,country).quoteRequired,true);
});
test('catalogue includes Ares and ready decor with protected profit floors',()=>{
 const fs=require('fs'),vm=require('vm'),b={localStorage:{getItem:()=>null}};b.window=b;vm.createContext(b);vm.runInContext(fs.readFileSync('js/data.js','utf8')+';this.products=PRODUCTS',b);
 const imported=b.products.filter(p=>p.jamesLaneImport);assert.equal(imported.length,45);
 const ares=imported.find(p=>p.name==='Ares TV Unit Natural & White Marble');assert.equal(parseFloat(ares.weight),135);assert.equal(ares.shippingSize,'heavy');
 for(const p of imported){assert.ok(!/\b(lighting|lamp|rug|kids|children)\b/i.test(p.name));assert.equal(p.preorder,false);assert.equal(Math.round((p.memberPrice-p.supplierCost)*100)/100,{heavy:2000,medium:1500,small:1000}[p.shippingSize]);assert.equal(p.priceFloor,p.memberPrice);}
});
test('payment server uses trusted products and the same delivery amount',()=>{
 const cat=require('../netlify/functions/_catalogue.json').products,server=require('../netlify/functions/create-checkout-session')._test;
 const id=Object.keys(cat).find(id=>cat[id].supplier==='James Lane'&&cat[id].shippingSize==='heavy');
 const line=server.resolveLine({id,qty:1,price:1},true);
 assert.equal(line.unitPrice,cat[id].memberPrice);
 assert.equal(server.shippingFor('Australia','delivery',[line],99999,'5000').amount,300);
 assert.equal(server.shippingFor('Australia','delivery',[line],99999,'0872').quoteRequired,true);
});

test('full carts add every unit and location-specific freight without a cap',()=>{
 const server=require('../netlify/functions/create-checkout-session')._test;
 const cat=require('../netlify/functions/_catalogue.json').products;
 const id=Object.keys(cat).find(id=>cat[id].supplier==='James Lane'&&cat[id].shippingSize==='heavy');
 for(const [pc,fee] of [['5000',300],['2000',300],['3000',300],['4000',300],['2600',350],['6000',450],['7000',500],['0800',550],['5600',450]]){
  const one=server.resolveLine({id,qty:1,price:1},true),many=server.resolveLine({id,qty:4,price:1},true);
  assert.equal(server.shippingFor('Australia','delivery',[one],99999,pc).amount,fee);
  assert.equal(server.shippingFor('Australia','delivery',[many],99999,pc).amount,fee*4);
  assert.equal(F.quote([many],pc,'Australia').fee,fee*4);
  assert.equal(many.unitPrice,one.unitPrice);
 }
});
test('vouchers only reduce eligible products and preserve every imported unit margin',()=>{
 const server=require('../netlify/functions/create-checkout-session')._test;
 const cat=require('../netlify/functions/_catalogue.json').products;
 const id=Object.keys(cat).find(id=>cat[id].supplier==='James Lane');
 const protectedLine=server.resolveLine({id,qty:3,price:1},true);
 assert.equal(server.protectedVoucher(200,0,0),0);
 const eligible={unitPrice:100,qty:2,readyDining:false};
 const voucher=server.protectedVoucher(20,200,20);
 assert.equal(voucher,20);
 assert.equal(server.chargePerUnit(protectedLine,200,20,voucher)*protectedLine.qty,Math.round(cat[id].memberPrice*100)*3);
 assert.equal(server.chargePerUnit(eligible,200,20,voucher)*2,16000);
});
