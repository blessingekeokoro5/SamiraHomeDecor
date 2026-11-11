const {test}=require('node:test');const assert=require('node:assert/strict');
const {validateOrder,summary}=require('../netlify/lib/manager-core.cjs');
const valid={name:'Grace',reference:'shd-man-1',items:'Vase x 1',delivery:'delivery',status:'order_placed',amountCents:12345,paidCents:2345,refundedCents:0};
test('payment summaries use cents, exclude cancelled balances, keep refunds separate',()=>{
  const a=validateOrder(valid);assert.equal(a.reference,'SHD-MAN-1');
  const s=summary([a,validateOrder({...valid,reference:'second',status:'cancelled',paidCents:0}),validateOrder({...valid,status:'refunded',paidCents:12345,refundedCents:12345})]);
  assert.equal(s.balance,10000);assert.equal(s.refunded,12345);assert.equal(s.paid,14690);
});
test('reject impossible payment/refund states and incomplete orders',()=>{
  for(const patch of [{amountCents:-1},{amountCents:1.5},{paidCents:12346},{refundedCents:2346},{status:'fake'},{items:''},{status:'payment_confirmed',paidCents:0}])assert.throws(()=>validateOrder({...valid,...patch}));
});
