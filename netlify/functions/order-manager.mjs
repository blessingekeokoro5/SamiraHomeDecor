import { getDatabase } from '@netlify/database';
import { randomUUID } from 'node:crypto';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const {authorised}=require('../lib/reviews-core.cjs');
const {validateOrder}=require('../lib/manager-core.cjs');
const env=k=>Netlify.env.get(k);
const json=(status,data)=>Response.json(data,{status,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
export default async req=>{
  if(!authorised(req,env))return json(401,{error:'Sign in with your website admin password, or unlock with your booking access key.'});
  if(!['GET','POST'].includes(req.method))return json(405,{error:'Method not allowed'});
  try{
    const db=getDatabase();
    if(req.method==='GET'){
      const rows=await db.sql`SELECT id,document,version,created_at,updated_at FROM shd_manual_orders ORDER BY created_at DESC`;
      return json(200,{ok:true,orders:rows.map(r=>({...r.document,id:r.id,version:r.version,createdAt:r.created_at,updatedAt:r.updated_at}))});
    }
    if(req.headers.get('origin')!==new URL(req.url).origin)return json(403,{error:'Please save from your admin dashboard.'});
    if(!(req.headers.get('content-type')||'').includes('application/json'))return json(415,{error:'JSON required'});
    const text=await req.text();if(text.length>12000)return json(413,{error:'Order too large'});
    let b;try{b=JSON.parse(text);}catch{return json(400,{error:'Invalid order'});}
    let order;try{order=validateOrder(b);}catch(e){return json(400,{error:e.message});}
    const document=JSON.stringify(order),reference=order.reference;
    if(b.id){
      if(!/^[a-f0-9-]{36}$/.test(b.id)||!Number.isInteger(b.version))return json(400,{error:'Invalid order version'});
      const rows=await db.sql`UPDATE shd_manual_orders SET reference=${reference},document=${document}::jsonb,version=version+1,updated_at=now() WHERE id=${b.id}::uuid AND version=${b.version} RETURNING id,version`;
      if(!rows.length)return json(409,{error:'This order changed on another device. Refresh and try again.'});
      return json(200,{ok:true});
    }
    const id=randomUUID();await db.sql`INSERT INTO shd_manual_orders(id,reference,document) VALUES(${id}::uuid,${reference},${document}::jsonb)`;
    return json(201,{ok:true});
  }catch(e){console.error('Order manager:',e.message);return json(e.code==='23505'?409:503,{error:e.code==='23505'?'That order reference already exists.':'Order storage is temporarily unavailable. Please try again.'});}
};
export const config={path:'/api/admin/orders'};
