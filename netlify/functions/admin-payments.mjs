import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const {authorised}=require('../lib/reviews-core.cjs');
const env=k=>Netlify.env.get(k);
const json=(status,data)=>Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
export default async req=>{
  if(!authorised(req,env))return json(401,{error:'Sign in to the admin dashboard or unlock with your booking access key.'});
  if(req.method!=='GET')return json(405,{error:'Method not allowed'});
  if(!env('STRIPE_SECRET_KEY'))return json(503,{error:'Stripe is not configured.'});
  try{
    const stripe=require('stripe')(env('STRIPE_SECRET_KEY'));
    const sessions=await stripe.checkout.sessions.list({limit:100,expand:['data.payment_intent.latest_charge']});
    const orders=sessions.data.filter(s=>s.metadata?.order_no||s.client_reference_id).map(s=>{
      const pi=typeof s.payment_intent==='object'?s.payment_intent:null;
      const charge=typeof pi?.latest_charge==='object'?pi.latest_charge:null;
      return {reference:s.metadata?.order_no||s.client_reference_id,name:s.customer_details?.name||'',email:s.customer_details?.email||'',amountCents:s.amount_total||0,paidCents:s.payment_status==='paid'?(charge?.amount||s.amount_total||0):0,refundedCents:charge?.amount_refunded||0,currency:(s.currency||'aud').toUpperCase(),payment:s.payment_status,date:new Date(s.created*1000).toISOString()};
    });
    return json(200,{ok:true,orders,hasMore:sessions.has_more});
  }catch(e){console.error('Admin payments:',e.message);return json(503,{error:'Could not load Stripe payments. Try refreshing.'});}
};
export const config={path:'/api/admin/payments'};
