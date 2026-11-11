const STATES = ['order_placed','payment_sent','payment_confirmed','order_received','cancelled','refunded'];
const clean = (v,n) => typeof v==='string'?v.trim().slice(0,n):'';
function validateOrder(b) {
  const name=clean(b.name,100),phone=clean(b.phone,50),reference=clean(b.reference,60).toUpperCase(),items=clean(b.items,3000),dateNeeded=clean(b.dateNeeded,100),delivery=clean(b.delivery,20),status=clean(b.status,30),notes=clean(b.notes,2000);
  const amountCents=b.amountCents,paidCents=b.paidCents,refundedCents=b.refundedCents;
  if (!name||!reference||!items||!STATES.includes(status)||!['delivery','pickup'].includes(delivery)||![amountCents,paidCents,refundedCents].every(n=>Number.isSafeInteger(n)&&n>=0&&n<=100000000)||amountCents<1||paidCents>amountCents||refundedCents>paidCents) throw Error('Enter a customer, unique reference, items, valid amounts and status. Refunds cannot exceed payments received.');
  if(['payment_confirmed','order_received'].includes(status)&&paidCents===0)throw Error('Record the amount received before confirming payment.');
  return {name,phone,reference,items,dateNeeded,delivery,status,notes,amountCents,paidCents,refundedCents,currency:'AUD'};
}
function summary(rows) {
  const out={balance:0,paid:0,refunded:0,counts:{}};
  for(const r of rows){out.counts[r.status]=(out.counts[r.status]||0)+1;out.paid+=r.paidCents;out.refunded+=r.refundedCents;if(!['cancelled','refunded'].includes(r.status))out.balance+=Math.max(0,r.amountCents-r.paidCents);}
  return out;
}
module.exports={validateOrder,summary,STATES};
