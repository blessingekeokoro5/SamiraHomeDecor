const {test}=require('node:test'),assert=require('node:assert/strict');
const F=require('../js/furniture-freight'),R=require('../js/delivery-request');
const catalogue=require('../netlify/functions/_catalogue.json').products;
const server=require('../netlify/functions/create-checkout-session')._test;
test('mixed heavy and medium orders include exactly one $1000 in the delivery total',()=>{
 const heavy={readyDining:true,supplier:'Luxo Living',freightClass:'table',qty:1};
 const medium={readyDining:true,supplier:'Luxo Living',freightClass:'chair',qty:1};
 const q=F.quote([heavy,medium],'5087','Australia');assert.equal(q.mixedSurcharge,1000);assert.equal(q.fee,275+105+102+1000);
 const many=F.quote([{...heavy,qty:3},{...medium,qty:4}],'5087','Australia');assert.equal(many.mixedSurcharge,1000);assert.equal(many.fee,3*275+4*105+102+1000);
 assert.equal(F.quote([{...heavy,qty:4}],'5087','Australia').mixedSurcharge,0);assert.equal(F.quote([{...medium,qty:4}],'5087','Australia').mixedSurcharge,0);
 assert.equal(F.mixedLoadSurcharge([heavy,{freightClass:'decor-test',name:'Small candle',qty:5}]),0);
});
test('trusted payment server includes the same delivery surcharge and ignores client size claims',()=>{
 const sofa=server.resolveLine({id:'kl129851',qty:1,price:1,shippingSize:'medium'},true);
 const table=server.resolveLine({id:'kl129852',qty:1,price:1,shippingSize:'heavy'},true);
 assert.equal(sofa.shippingSize,'heavy');assert.equal(table.shippingSize,'medium');
 const confirmed={fee:271.7,quoteRequired:false};const client=F.quote([sofa,table],'5087','Australia',confirmed);const payment=server.shippingFor('Australia','delivery',[sofa,table],0,'5087',confirmed);
 assert.equal(client.fee,271.7+102+1000);assert.equal(payment.amount,client.fee);assert.equal(payment.label,'Delivery');
 assert.ok(Object.values(catalogue).some(p=>p.shippingSize==='heavy'));assert.ok(Object.values(catalogue).some(p=>p.shippingSize==='medium'));
});
test('email and live chat requests carry the selected products and suburb/postcode safely',()=>{
 const items=[{id:'sku1',name:'Sofa <test>',qty:2}];const destination={suburb:'Klemzig',postcode:'5087'};const html=R.html(items,destination,'dispatch');
 assert.ok(html.includes('mailto:hello@samirahomedecor.com.au'));assert.ok(html.includes('Send an email'));assert.ok(html.includes('Live chat'));assert.ok(html.includes('before payment'));assert.ok(!html.includes('<test>'));
 const text=R.message(items,destination);assert.ok(text.includes('2 × Sofa <test>'));assert.ok(text.includes('Klemzig'));assert.ok(text.includes('5087'));assert.ok(text.includes('before I make payment'));
});
test('pre-order responses identify dispatch confirmation without opening payment',async()=>{
 const {quoteDecor}=require('../netlify/functions/lib/koala-decor-delivery');
 const q=await quoteDecor([{freightClass:'outdoor-test',supplierProductUuid:'29cca4d6-d4cd-4719-a44b-0106f47abcf8'}],{country:'Australia',postcode:'4000',suburb:'Brisbane'},{apiKey:'test',fetch:async()=>({ok:true,json:async()=>({data:{combined:{shipping_price:148.8,productsInCart:[{itemstatus:'PREORDER'}]}}})})});
 assert.equal(q.quoteRequired,true);assert.equal(q.reason,'dispatch');assert.match(q.message,/email or live chat/);
});
