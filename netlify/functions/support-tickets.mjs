import {ownerSession} from '../lib/stylera-owner-auth.mjs';
const respond=(status,data)=>Response.json(data,{status,headers:{'cache-control':'no-store'}});
const categories=['Order or delivery','Damaged or incorrect item','Refund or payment','Product quality','Service complaint','Other complaint'];
const statuses=['open','in_progress','waiting_customer','resolved','closed'];
const priorities=['low','normal','high','urgent'];
const uuid=/^[a-f0-9]{8}-[a-f0-9]{4}-[1-8][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;
export default async function handler(req){
 if(!['POST','GET'].includes(req.method))return respond(405,{error:'Method not allowed'});
 const url=new URL(req.url);
 if(req.method==='POST'&&req.headers.get('origin')!==url.origin)return respond(403,{error:'Invalid origin'});
 const key=Netlify.env.get('STYLERA_SUPABASE_SERVICE_ROLE_KEY');
 const base=(Netlify.env.get('STYLERA_SUPABASE_URL')||'https://agqjcvacbrzhwgjbhcqs.supabase.co').replace(/\/$/,'');
 if(!key)return respond(503,{error:'Support ticket service is not configured'});
 const headers={apikey:key,authorization:'Bearer '+key,'content-type':'application/json'};
 const db=async(path,options={})=>{const r=await fetch(base+'/rest/v1/'+path,{...options,headers:{...headers,...options.headers}});const body=await r.json().catch(()=>null);if(!r.ok)throw Error('Ticket database request failed ('+r.status+')');return body};
 const owner=await ownerSession(req);
 let body={};if(req.method==='POST'){try{body=await req.json()}catch{return respond(400,{error:'Invalid request'})}}
 const action=req.method==='GET'?'list':body.action;
 try{
  if(action==='create'){
   const {thread,token,name,email,category,orderReference,description}=body;
   if(!uuid.test(thread||'')||!/^[a-f0-9]{64}$/.test(token||'')||!categories.includes(category)||typeof description!=='string'||description.trim().length<10||description.length>1800||typeof name!=='string'||name.trim().length<2||name.length>100||typeof email!=='string'||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||email.length>254||String(orderReference||'').length>80)return respond(400,{error:'Invalid complaint details'});
   // The existing security-definer RPC verifies the guest token before revealing thread messages.
   await db('rpc/stylera_guest_read',{method:'POST',body:JSON.stringify({p_thread:thread,p_token:token})});
   const existing=await db('stylera_support_tickets?select=id&guest_thread=eq.'+encodeURIComponent(thread)+'&status=in.(open,in_progress,waiting_customer)&limit=5');
   if(existing.length>=5)return respond(429,{error:'Please resolve an existing ticket before opening another complaint'});
   const rows=await db('stylera_support_tickets?select=id,ticket_number,status,created_at',{method:'POST',headers:{Prefer:'return=representation'},body:JSON.stringify({guest_thread:thread,customer_name:name.trim(),customer_email:email.trim(),category,order_reference:String(orderReference||'').trim(),subject:category,description:description.trim()})});
   const ticket=rows[0];await db('stylera_ticket_events',{method:'POST',body:JSON.stringify({ticket_id:ticket.id,event_type:'created',details:'Complaint submitted',actor:'customer'})});
   return respond(201,{ok:true,ticket});
  }
  if(!owner)return respond(401,{error:'Sign in with the authorized Stylera owner account'});
  if(action==='list'){
   const tickets=await db('stylera_support_tickets?select=*&order=created_at.desc&limit=200');
   return respond(200,{tickets});
  }
  if(action==='detail'){
   if(!uuid.test(body.id||''))return respond(400,{error:'Invalid ticket'});
   const rows=await db('stylera_support_tickets?select=*&id=eq.'+body.id+'&limit=1');
   const events=await db('stylera_ticket_events?select=*&ticket_id=eq.'+body.id+'&order=created_at.asc&limit=300');
   return respond(200,{ticket:rows[0]||null,events});
  }
  if(action==='update'){
   if(!uuid.test(body.id||''))return respond(400,{error:'Invalid ticket'});
   const rows=await db('stylera_support_tickets?select=*&id=eq.'+body.id+'&limit=1');const current=rows[0];
   if(!current)return respond(404,{error:'Ticket not found'});
   const changes={},events=[];
   for(const [field,allowed,event] of [['status',statuses,'status'],['priority',priorities,'priority']]){
    if(body[field]!==undefined){if(!allowed.includes(body[field]))return respond(400,{error:'Invalid '+field});if(body[field]!==current[field]){changes[field]=body[field];events.push({event_type:event,details:current[field]+' → '+body[field]})}}
   }
   if(body.assigned_to!==undefined){if(typeof body.assigned_to!=='string'||body.assigned_to.length>120)return respond(400,{error:'Invalid assignment'});changes.assigned_to=body.assigned_to.trim();events.push({event_type:'assignment',details:'Assigned to '+(changes.assigned_to||'unassigned')})}
   if(body.resolution!==undefined){if(typeof body.resolution!=='string'||body.resolution.length>2000)return respond(400,{error:'Invalid resolution'});changes.resolution=body.resolution.trim();events.push({event_type:'resolution',details:changes.resolution||'Resolution cleared'})}
   if(body.note!==undefined){if(typeof body.note!=='string'||!body.note.trim()||body.note.length>2000)return respond(400,{error:'Invalid note'});events.push({event_type:'note',details:body.note.trim()})}
   if(changes.status==='resolved')changes.resolved_at=new Date().toISOString();
   if(changes.status&&changes.status!=='resolved')changes.resolved_at=null;
   if(Object.keys(changes).length){changes.updated_at=new Date().toISOString();await db('stylera_support_tickets?id=eq.'+body.id,{method:'PATCH',body:JSON.stringify(changes)})}
   for(const event of events)await db('stylera_ticket_events',{method:'POST',body:JSON.stringify({ticket_id:body.id,...event,actor:owner.email})});
   return respond(200,{ok:true});
  }
  return respond(400,{error:'Unknown action'});
 }catch(e){console.error('Ticket API:',e.message);return respond(503,{error:'Ticket service unavailable. Confirm that the ticket SQL migration has been applied.'})}
}
export const config={path:'/api/admin/support-tickets',rateLimit:{action:'rate_limit',aggregateBy:'ip',windowSize:60,windowLimit:30}};
