// Server-side guest registration with origin checks and IP throttling. Never expose secret credentials in browser code.
const reply=(message,status)=>Response.json({message},{status,headers:{"cache-control":"no-store"}});
export default async function handler(request){
 if(request.method!=="POST")return reply("Method not allowed",405);
 const origin=new URL(request.url).origin;
 if(request.headers.get("origin")!==origin)return reply("Invalid origin",403);
 const serviceKey=Netlify.env.get("STYLERA_SUPABASE_SERVICE_ROLE_KEY");
 const supabaseUrl=Netlify.env.get("STYLERA_SUPABASE_URL")||"https://agqjcvacbrzhwgjbhcqs.supabase.co";
 if(!serviceKey)return reply("Guest chat setup incomplete",503);
 let body;try{body=await request.json()}catch{return reply("Invalid request",400)}
 const {name,email,token}=body||{};
 if(typeof name!=="string"||name.trim().length<2||name.trim().length>100||typeof email!=="string"||email.length>254||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||typeof token!=="string"||!/^[a-f0-9]{64}$/.test(token))return reply("Please complete the form and verification",400);
 const created=await fetch(supabaseUrl+"/rest/v1/rpc/stylera_guest_start",{
  method:"POST",headers:{"content-type":"application/json","apikey":serviceKey,"authorization":"Bearer "+serviceKey},
  body:JSON.stringify({p_name:name.trim(),p_email:email.trim(),p_token:token})
 });
 if(!created.ok){const raw=await created.json().catch(()=>({}));const upstreamMessage=typeof raw.message==="string"?raw.message:"";const limited=/Too many chats started/i.test(upstreamMessage);console.error("Stylera guest registration upstream HTTP status:",created.status,"code:",typeof raw.code==="string"?raw.code:"unknown","limited:",limited);return reply(limited?"You have started 3 chats with this email in the past hour. Please return to an existing chat or wait until the hourly limit resets.":created.status===429?"Too many requests. Please try again shortly.":"Unable to start chat right now. Please try again later.",limited?429:created.status===429?429:400)}
 return Response.json({thread:await created.json()},{headers:{"cache-control":"no-store"}});
}
export const config={method:"POST",rateLimit:{action:"rate_limit",aggregateBy:"ip",windowSize:60,windowLimit:5}};
