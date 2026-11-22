// Email customer support tickets to the Samira Home Decor inbox via Brevo.
// This endpoint accepts only ticket fields, never arbitrary recipients.
const INBOX='hello@samirahomedecor.com.au';
const clean=(v,max)=>String(v||'').trim().slice(0,max);
const validEmail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const esc=v=>v.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const respond=(statusCode,data)=>({statusCode,headers:{'content-type':'application/json','cache-control':'no-store'},body:JSON.stringify(data)});
exports.handler=async event=>{
 if(event.httpMethod!=='POST')return respond(405,{error:'Method not allowed'});
 if((event.body||'').length>10000)return respond(413,{error:'Request too large'});
 try{
  const data=JSON.parse(event.body||'{}');
  // Honeypot: do not send emails for automated submissions.
  if(data.website)return respond(200,{ok:true});
  const name=clean(data.name,100),email=clean(data.email,254),message=clean(data.message,2000),reference=clean(data.reference,36),phone=clean(data.phone,30),contactPreference=clean(data.contactPreference,30);
  if(name.length<2||!validEmail(email)||phone.length<6||!['Email','Phone call','Live chat'].includes(contactPreference)||message.length<5||!/^[a-f0-9-]{36}$/i.test(reference))return respond(400,{error:'Invalid support ticket'});
  if(!process.env.BREVO_API_KEY)return respond(503,{error:'Ticket email delivery is not configured'});
  const html='<h2>New Samira Home Decor support ticket</h2><p><b>Reference:</b> '+esc(reference)+'</p><p><b>Customer:</b> '+esc(name)+'</p><p><b>Email:</b> '+esc(email)+'</p><p><b>Message:</b></p><p style="white-space:pre-wrap">'+esc(message)+'</p><p>Open the Stylera staff inbox to respond to the customer.</p>';
  const result=await fetch('https://api.brevo.com/v3/smtp/email',{method:'POST',headers:{'api-key':process.env.BREVO_API_KEY,'content-type':'application/json'},body:JSON.stringify({sender:{name:'Samira Home Decor',email:process.env.SENDER_EMAIL||INBOX},to:[{email:INBOX}],replyTo:{email,name},subject:'New support ticket '+reference.slice(0,8).toUpperCase()+' — Samira Home Decor',htmlContent:html})});
  if(!result.ok)return respond(502,{error:'Ticket email could not be delivered'});
  return respond(200,{ok:true});
 }catch{return respond(500,{error:'Ticket notification failed'})}
};
