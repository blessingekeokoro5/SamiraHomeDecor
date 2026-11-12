const {test}=require('node:test'),assert=require('node:assert/strict');
const Locations=require('../js/checkout-locations'),data=require('../js/au-locations');
test('suburb and postcode suggestions disambiguate states and keep leading zeros',()=>{
 assert.ok(Locations.matches('adelaide 5000',data.rows).some(r=>r[0]==='ADELAIDE'&&r[1]==='5000'&&r[2]==='SA'));
 assert.ok(Locations.matches('0800',data.rows).some(r=>r[0]==='DARWIN CITY'&&r[1]==='0800'&&r[2]==='NT'));
 assert.ok(Locations.matches('Richmond VIC',data.rows).every(r=>r[2]==='VIC'));
 assert.equal(Locations.matches('this suburb does not exist',data.rows).length,0);
 assert.equal(Locations.matches('',data.rows).length,0);
 assert.ok(Locations.matches('20',data.rows).length<=12);
});
test('browser cart keeps each unit margin and excludes fixed-price products from reward vouchers',()=>{
 const fs=require('fs'),vm=require('vm');const stored={};
 const b={console,document:{addEventListener(){},getElementById(id){return {value:({coCountry:'Australia',coPost:'5000'})[id]||''};}},localStorage:{getItem:k=>stored[k]||null,setItem:(k,v)=>stored[k]=v,removeItem:k=>delete stored[k]}};b.window=b;vm.createContext(b);
 for(const f of ['data','cart','au-locations','furniture-freight','checkout'])vm.runInContext(fs.readFileSync('js/'+f+'.js','utf8'),b,{filename:f});
 const product=vm.runInContext("PRODUCTS.find(p=>p.name==='Ares TV Unit Natural & White Marble')",b);
 stored.decomuse_cart=JSON.stringify([{id:product.id,name:product.name,price:product.price,qty:3}]);stored.dm_voucher=JSON.stringify({amount:200,code:'SHD-TEST'});
 const t=b.checkoutTotals();assert.equal(t.sub,product.price*3);assert.equal(t.voucher,0);assert.equal(t.discount,0);assert.equal(t.shipping,900);assert.equal(t.total,product.price*3+900);
});
