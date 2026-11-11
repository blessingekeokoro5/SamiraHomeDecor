const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createHandler } = require('../netlify/lib/reviews-core.cjs');
function setup() {
  const stores = new Map();
  const store = name => { if (!stores.has(name)) stores.set(name,new Map()); const m=stores.get(name); return { list:async()=>({blobs:[...m.keys()].map(key=>({key}))}), get:async key=>m.get(key)||null, setJSON:async(k,v)=>{m.set(k,v);return {modified:true};} }; };
  return { stores, handler:createHandler({store,catalogue:{bt01:{n:'Bathroom Set'}},env:key=>({ADMIN_PASSWORD:'admin-test-password',BOOKING_ADMIN_TOKEN:'booking-test-key'})[key]}) };
}
const req = (path='', body, auth=false, origin='https://shop.test') => new Request('https://shop.test/api/reviews'+path,{method:body===undefined?'GET':'POST',headers:{'Content-Type':'application/json',origin,...(auth?{authorization:'Basic '+Buffer.from('admin:admin-test-password').toString('base64')}:{})},...(body===undefined?{}:{body:JSON.stringify(body)})});
const review = {productId:'bt01',name:'Grace Obi',email:'grace@example.test',suburb:'Adelaide',rating:2,body:'The packaging could be improved.',consent:true,status:'approved'};
test('new review stays private; owner can approve, unpublish and reject; no private data leaks',async()=>{
  const {handler}=setup();
  const sent=await handler(req('',review)); assert.equal(sent.status,201);assert.equal((await sent.json()).status,'pending');
  assert.deepEqual((await (await handler(req())).json()).reviews,[]);
  assert.equal((await handler(req('/admin'))).status,401);
  assert.equal((await handler(req('/admin',{id:'x',status:'approved'}))).status,401);
  let r=(await (await handler(req('/admin',undefined,true))).json()).reviews[0]; assert.equal(r.status,'pending');assert.equal(r.who,'Grace O.');assert.equal(r.productName,'Bathroom Set');
  assert.equal((await handler(req('/admin',{id:r.id,status:'approved'},true))).status,200);
  let pub=(await (await handler(req())).json()).reviews;assert.equal(pub.length,1);assert.equal(pub[0].rating,2);assert.equal(pub[0].body,review.body);assert.equal(pub[0].email,undefined);assert.equal(pub[0].status,undefined);
  assert.equal((await (await handler(new Request('https://shop.test/api/reviews?productId=other'))).json()).reviews.length,0);
  for(const status of ['pending','rejected']) {assert.equal((await handler(req('/admin',{id:r.id,status},true))).status,200);assert.equal((await (await handler(req())).json()).reviews.length,0);}
});
test('validation rejects invalid rating, product, consent, malformed body, oversized review and cross-site submissions',async()=>{
  const {handler}=setup();
  for(const patch of [{rating:0},{rating:6},{rating:2.5},{productId:'__proto__'},{productId:'missing'},{consent:false},{email:'bad'},{body:'short'},{body:'a'.repeat(3001)},{website:'spam'}]) assert.equal((await handler(req('',{...review,...patch}))).status,400,JSON.stringify(patch).slice(0,60));
  assert.equal((await handler(req('',review,false,'https://attacker.test'))).status,403);
  assert.equal((await handler(req('',{...review,body:'a'.repeat(13000)}))).status,413);
  assert.equal((await handler(req('/admin',{id:'nonexistent',status:'approved'},true))).status,400);
  assert.equal((await handler(new Request('https://shop.test/api/reviews',{method:'POST',headers:{origin:'https://shop.test','Content-Type':'application/json'},body:'no-json'}))).status,400);
});
test('storage failures return an error instead of a false success',async()=>{
  const handler=createHandler({store:()=>{throw Error('storage offline');},catalogue:{},env:()=>''});
  assert.equal((await handler(req('',review))).status,503);
});
