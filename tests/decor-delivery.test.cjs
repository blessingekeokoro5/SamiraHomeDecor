const {test}=require('node:test'),assert=require('node:assert/strict');
const {quoteDecor}=require('../netlify/functions/lib/koala-decor-delivery');
const product={freightClass:'decor-test',supplierProductUuid:'29cca4d6-d4cd-4719-a44b-0106f47abcf8'};
const destination={country:'Australia',postcode:'NSW 2000',suburb:'Sydney'};
function result(fee,status='INSTOCK'){return {shipping_price:fee,productsInCart:[{id:product.supplierProductUuid,itemstatus:status}]};}
test('decor delivery covers the supplier combined quote when it is above per-item freight',async()=>{
 let sent;
 const q=await quoteDecor([{...product,qty:2}],destination,{apiKey:'test',fetch:async(url,options)=>{sent=JSON.parse(options.body);return{ok:true,json:async()=>({data:{combined:result(30.25),u0:result(14.55)}})};}});
 assert.equal(q.fee,30.25);assert.equal(q.quoteRequired,false);assert.equal(sent.variables.combined.cart_items[0].quantity,2);assert.equal(sent.variables.combined.cart_items[0].product.id,product.supplierProductUuid);assert.equal(sent.variables.ship.postcode,'2000');assert.equal(sent.variables.ship.state,'NSW');assert.equal(sent.variables.ship.suburb,'Sydney');
});
test('every additional decor item contributes freight even when supplier shipping is bundled',async()=>{
 const q=await quoteDecor([{...product,qty:3}],destination,{apiKey:'test',fetch:async()=>({ok:true,json:async()=>({data:{combined:result(30.25),u0:result(14.55)}})})});assert.equal(q.fee,43.65);
});
test('missing address, unconfirmed delivery, and supplier errors block payment instead of offering free freight',async()=>{
 assert.equal((await quoteDecor([product],{postcode:'2000',country:'Australia'})).quoteRequired,true);
 for(const payload of [{data:{combined:result(-1)}},{data:{combined:result(15,'NOSTOCK')}},{data:{combined:result(15,'PREORDER')}},{errors:[{message:'Unavailable'}]}]){
  const q=await quoteDecor([product],destination,{apiKey:'test',fetch:async()=>({ok:true,json:async()=>payload})});assert.equal(q.quoteRequired,true);
 }
});
test('delivery endpoint resolves supplier IDs from the catalogue and rejects unknown products',async()=>{
 const {handler}=require('../netlify/functions/decor-delivery-quote');
 assert.equal((await handler({httpMethod:'POST',body:JSON.stringify({items:[{id:'made-up',qty:1,supplierProductUuid:product.supplierProductUuid}]})})).statusCode,400);
 assert.equal((await handler({httpMethod:'GET'})).statusCode,405);
});
