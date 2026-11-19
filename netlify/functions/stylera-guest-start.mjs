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
 if(!created.ok){console.error("Stylera guest registration upstream HTTP status:",created.status);return reply(created.status===429?"Please try again later":"Unable to start chat. Please try again later",created.status===429?429:400)}
 return Response.json({thread:await created.json()},{headers:{"cache-control":"no-store"}});
}
export const config={method:"POST",rateLimit:{action:"rate_limit",aggregateBy:"ip",windowSize:60,windowLimit:5}};
