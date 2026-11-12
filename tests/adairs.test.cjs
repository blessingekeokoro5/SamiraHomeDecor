const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('fs'),vm=require('vm');
const {quoteAdairs}=require('../netlify/functions/lib/adairs-delivery');
const {quoteSuppliers}=require('../netlify/functions/lib/supplier-delivery');
const freight=require('../js/furniture-freight'),server=require('../netlify/functions/create-checkout-session')._test;
const b={localStorage:{getItem:()=>null}};b.window=b;vm.runInNewContext(fs.readFileSync('js/data.js','utf8')+fs.readFileSync('js/adairs-bathroom.js','utf8')+';this.items=PRODUCTS.filter(p=>p.adairsImport)',b);
const destination={postcode:'5000',suburb:'Adelaide',country:'Australia'};
const product={...b.items[0],qty:1};
function mock({cost=20,stock=50,oversized=false,fail=false}={}){return {fetch:async()=>({ok:!fail,text:async()=>'<script>ReactDOM.hydrate(React.createElement(App, '+JSON.stringify({components:[{name:'ProductDetails',props:{prices:{variantGroups:[{items:[{code:product.supplierSku,hasStock:true,inStockQty:stock,maxQty:50,isOversizedItem:oversized,price:{price:'$'+cost}}]}]}}}]})+'),document)</script>'})};}
test('48 available accessories have exact protected markups and valid local photos',()=>{
 assert.equal(b.items.length,48);assert.equal(new Set(b.items.map(p=>p.id)).size,48);
 for(const p of b.items){assert.equal(p.cat,'Bathroom');assert.ok(p.stockAtImport>0);assert.equal(Math.round((p.price-p.supplierCost)*100),p.profitMarkup*100);assert.equal(p.memberPrice,p.price);for(const im of p.imgs)assert.ok(fs.statSync(im).size>500);const line=server.resolveLine({id:p.id,qty:3,price:1},true);assert.equal(line.unitPrice,p.price);assert.equal(server.chargePerUnit(line,500,100,20),Math.round(p.price*100));}
});
test('all states use Adairs standard rate; transit reflects destination and dispatch',async()=>{
 for(const [postcode,suburb,days] of [['5000','Adelaide',[7,11]],['2000','Sydney',[6,10]],['3000','Melbourne',[6,10]],['4000','Brisbane City',[7,11]],['6000','Perth',[10,14]],['7000','Hobart',[7,11]],['0800','Darwin City',[10,14]],['2600','Canberra',[6,10]]]){
  const q=await quoteAdairs([product],{...destination,postcode,suburb},mock());assert.equal(q.quoteRequired,false);assert.equal(q.fee,19.95);assert.deepEqual(q.days,days);
 }
});
test('free threshold uses supplier subtotal excluding Samira markup and requires over $175',async()=>{
 assert.equal((await quoteAdairs([{...product,price:225,memberPrice:225,profitMarkup:50}],destination,mock({cost:175}))).fee,19.95);
 assert.equal((await quoteAdairs([{...product,price:226,memberPrice:226,profitMarkup:50}],destination,mock({cost:176}))).fee,0);
 assert.equal((await quoteAdairs([{...product,qty:10}],destination,mock({cost:20}))).fee,0);
});
test('invalid destinations, stock, supplier prices, errors and oversized items block payment',async()=>{
 for(const options of [mock({stock:0}),mock({cost:999}),mock({fail:true}),mock({oversized:true})])assert.equal((await quoteAdairs([product],destination,options)).quoteRequired,true);
 assert.equal((await quoteAdairs([product],{...destination,suburb:'Sydney'},mock())).quoteRequired,true);
 assert.equal((await quoteAdairs([product],{...destination,country:'Canada'},mock())).quoteRequired,true);
 assert.equal((await quoteAdairs([{...product,qty:30},{...product,qty:30}],destination,mock())).quoteRequired,true);
});
test('checkout and browser use the same bathroom shipping without furniture surcharges',async()=>{
 const q=await quoteSuppliers([product],destination,{adairs:mock()});
 const browser=freight.quote([product],'5000','Australia',q),payment=server.shippingFor('Australia','delivery',[product],9999,'5000',q);
 assert.equal(browser.fee,19.95);assert.equal(browser.fee,payment.amount);assert.equal(browser.surcharge,0);assert.equal(browser.mixedSurcharge,0);assert.deepEqual(browser.days,payment.days);
 assert.equal(freight.quote([product],'5000','Australia').quoteRequired,true);
});
