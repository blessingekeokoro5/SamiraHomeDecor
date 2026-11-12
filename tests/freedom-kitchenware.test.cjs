const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const freight=require('../js/furniture-freight');
const source=fs.readFileSync(path.join(__dirname,'../js/data.js'),'utf8');
const fragment=source.match(/\/\* FREEDOM kitchenware range[^]*?const items=(\[[^]*?\]);items\.forEach/);
assert.ok(fragment,'Freedom products must be in trusted js/data.js source');
const items=JSON.parse(fragment[1]);
const lines=items.map(p=>({...p,qty:1}));
test('six Freedom products have a fixed per-unit $200/$300 profit, never a discounted member price',()=>{
 assert.equal(items.length,6);
 const ids=new Set();
 for(const p of items){assert.equal(p.cat,'Kitchenware');assert.equal(p.room,'Kitchenware');assert.equal(p.supplier,'Freedom');assert.ok(!ids.has(p.id));ids.add(p.id);
  assert.equal(p.price,p.supplierCost+p.profitMarkup);
  assert.equal(p.memberPrice,p.price);assert.equal(p.priceFloor,p.price);assert.equal(p.readyDining,true);
  assert.ok([200,300].includes(p.profitMarkup));
 }
 assert.equal(items.filter(p=>p.profitMarkup===300).length,1);
});
test('Freedom kitchen delivery cannot become free and grows for additional units',()=>{
 const p=lines[0];
 const one=freight.freedomQuote([p],'5000','Australia');
 const three=freight.freedomQuote([{...p,qty:3}],'5000','Australia');
 const eight=freight.freedomQuote([{...p,qty:8}],'5000','Australia');
 assert.equal(one.quoteRequired,false);assert.ok(one.fee>=19.95);
 assert.ok(three.fee>one.fee);assert.ok(eight.fee>three.fee);
});
test('a second supplier and mixed Freedom selections attract additional delivery costs',()=>{
 const p=lines[0],q=lines[1];
 const two=freight.freedomQuote([p,q],'5000','Australia');
 const mixed=freight.freedomQuote([p,q,{supplier:'Koala Living',qty:1}],'5000','Australia');
 assert.ok(two.fee>freight.freedomQuote([p],'5000','Australia').fee);
 assert.ok(mixed.fee>two.fee);
 assert.equal(freight.quote([p,q],'5000','Australia').quoteRequired,false);
});
test('invalid destination blocks checkout rather than substituting free delivery',()=>{
 assert.equal(freight.freedomQuote([lines[0]],'','Australia').quoteRequired,true);
 assert.equal(freight.freedomQuote([lines[0]],'5000','New Zealand').quoteRequired,true);
});
