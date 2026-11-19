import { ownerSession } from '../lib/stylera-owner-auth.mjs';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const {authorised}=require('../lib/reviews-core.cjs');
const env=k=>Netlify.env.get(k);
const reply=(status,data)=>Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
export default async req=>{
  if(req.method!=='GET')return reply(405,{error:'Method not allowed'});
  if(!(await ownerSession(req))&&!authorised(req,env))return reply(401,{error:'Sign in to Stylera Owner Dashboard with the authorized Supabase account'});
  if(!env('STRIPE_SECRET_KEY'))return reply(503,{error:'Stripe not configured'});
  try{
    const stripe=require('stripe')(env('STRIPE_SECRET_KEY'));
    const now=new Date(),from=Math.floor(Date.UTC(now.getUTCFullYear()-1,now.getUTCMonth(),1)/1000);
    let cursor,hasMore=true,pages=0;
    const byMonth=new Map(),seen=new Set();
    while(hasMore&&pages<100){
      const params={limit:100,created:{gte:from},...(cursor?{starting_after:cursor}:{})};
      const res=await stripe.checkout.sessions.list(params);pages++;
      for(const s of res.data){
        if(s.mode!=='payment'||s.payment_status!=='paid'||seen.has(s.id))continue;
        seen.add(s.id);
        const key=new Date(s.created*1000).toISOString().slice(0,7);
        const row=byMonth.get(key)||{month:key,orders:0,grossCents:0};
        row.orders++;row.grossCents+=s.amount_total||0;byMonth.set(key,row);
      }
      hasMore=res.has_more;cursor=res.data.at(-1)?.id;if(!cursor)break;
    }
    const months=[...byMonth.values()].sort((a,b)=>a.month.localeCompare(b.month));
    const current=now.toISOString().slice(0,7);
    const sixStart=new Date(Date.UTC(now.getUTCFullYear(),now.getUTCMonth()-5,1)).toISOString().slice(0,7);
    const yearStart=String(now.getUTCFullYear())+'-01';
    const sum=start=>months.filter(m=>m.month>=start&&m.month<=current).reduce((n,m)=>n+m.grossCents,0);
    return reply(200,{ok:true,currency:'AUD',monthlyCents:sum(current),sixMonthCents:sum(sixStart),yearToDateCents:sum(yearStart),trailingTwelveMonthsCents:sum(new Date(Date.UTC(now.getUTCFullYear(),now.getUTCMonth()-11,1)).toISOString().slice(0,7)),months,complete:!hasMore,disclaimer:'Gross paid Stripe checkout totals only; refunds, fees, taxes and costs are not deducted. Excludes payments outside this Stripe checkout flow.'});
  }catch(e){console.error('Revenue summary failed:',e.message);return reply(503,{error:'Revenue report temporarily unavailable'})}
};
export const config={path:'/api/admin/revenue-summary'};
