// Supabase Database Webhook -> Netlify Function -> Resend.
// Development-only: configure secrets with Netlify Functions scope for Deploy Previews.
// No secrets are stored in this repository. Never invoke from browser JavaScript.
const respond=(message,status)=>Response.json({message},{status,headers:{"cache-control":"no-store"}});
export default async function handler(request){
 if(request.method!=="POST")return respond("Method not allowed",405);
 const secret=Netlify.env.get("STYLERA_WEBHOOK_SECRET");
 const resendKey=Netlify.env.get("RESEND_API_KEY");
 const from=Netlify.env.get("STYLERA_ALERT_FROM");
 const to=Netlify.env.get("STYLERA_ALERT_TO");
 if(!secret||!resendKey||!from||!to)return respond("Notification service not configured",503);
 // Shared bearer token must be a long, randomly generated value, set in the
 // Supabase webhook Authorization header and Netlify secret environment variable.
 const provided=request.headers.get("authorization");
 if(!provided||provided!==`Bearer ${secret}`)return respond("Unauthorized",401);
 const raw=await request.text();
 if(raw.length>12000)return respond("Payload too large",413);
 let payload;
 try{payload=JSON.parse(raw)}catch{return respond("Invalid JSON",400)}
 if(payload?.type!=="INSERT"||payload?.table!=="stylera_messages"||payload?.schema!=="public"||payload?.record?.sender!=="customer")return respond("Ignored",202);
 const record=payload.record;
 if(typeof record.id!=="string"||typeof record.conversation_id!=="string")return respond("Invalid event",400);
 // Deliberately omit customer message contents, email, and identifiers from
 // email to minimize disclosure and avoid HTML injection.
 const result=await fetch("https://api.resend.com/emails",{
   method:"POST",
   headers:{"Authorization":`Bearer ${resendKey}`,"Content-Type":"application/json"},
   body:JSON.stringify({
     from,to:[to],
     subject:"Stylera: new customer support message",
     text:"A customer has sent a new message in Stylera. Sign in to your private support inbox to review and respond.\n\nThis is a development notification; do not reply to this email."
   })
 });
 if(!result.ok){console.error("Stylera notification delivery failed",result.status);return respond("Email provider error",502)}
 return respond("Notification submitted",200);
}
export const config={method:"POST",rateLimit:{action:"rate_limit",aggregateBy:"ip",windowSize:60,windowLimit:30}};
