// Automatic Customer Care case sync. Service key stays server-side; never expose it to browsers.
const json=(data,status=200)=>Response.json(data,{status,headers:{"cache-control":"no-store"}});
const validEmail=s=>typeof s==="string"&&s.length<=254&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const validId=s=>typeof s==="string"&&/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s);
export default async function handler(request){
 if(request.method!=="POST")return json({ok:false,message:"Method not allowed"},405);
 if(request.headers.get("origin")!==new URL(request.url).origin)return json({ok:false,message:"Invalid origin"},403);
 const key=Netlify.env.get("STYLERA_SUPABASE_SERVICE_ROLE_KEY"),url=Netlify.env.get("STYLERA_SUPABASE_URL")||"https://agqjcvacbrzhwgjbhcqs.supabase.co";
 if(!key)return json({ok:false,message:"Case sync is not configured"},503);
 let b;try{b=await request.json()}catch{return json({ok:false,message:"Invalid request"},400)}
 const kind=b?.kind, name=typeof b?.name==="string"?b.name.trim():"",email=typeof b?.email==="string"?b.email.trim():"",phone=typeof b?.phone==="string"?b.phone.trim():"",subject=typeof b?.subject==="string"?b.subject.trim():"",message=typeof b?.message==="string"?b.message.trim():"";
 if(!["ticket","callback"].includes(kind)||name.length<2||name.length>100||!validEmail(email)||phone.length>30||subject.length<2||subject.length>500||message.length<2||message.length>2000)return json({ok:false,message:"Invalid case details"},400);
 const headers={"apikey":key,"authorization":"Bearer "+key,"content-type":"application/json"};
 let thread=null;
 if(kind==="ticket"){
   if(!validId(b.thread))return json({ok:false,message:"Invalid support reference"},400);
   thread=b.thread;
   // Only sync a thread that actually exists and contains this submitted message.
   const check=await fetch(url+"/rest/v1/stylera_guest_messages?select=thread_id&thread_id=eq."+encodeURIComponent(thread)+"&sender=eq.customer&content=eq."+encodeURIComponent(message)+"&limit=1",{headers});
   if(!check.ok)return json({ok:false,message:"Unable to verify support message"},502);
   const matches=await check.json();if(!matches.length)return json({ok:false,message:"Support message not verified"},403);
 }
 const record={kind,source_thread_id:thread,customer_name:name,customer_email:email,customer_phone:phone,subject,status:kind==="ticket"?"new":"pending",priority:"normal",notes:kind==="ticket"?"Customer Care form submission; original message remains in the linked guest conversation.":"Customer requested a callback: "+message};
 const response=await fetch(url+"/rest/v1/stylera_care_records",{method:"POST",headers:{...headers,"prefer":"return=minimal"},body:JSON.stringify(record)});
 if(!response.ok){let failure={};try{failure=await response.json()}catch{};if(response.status===409&&failure.code==="23505"&&thread)return json({ok:true,alreadySynced:true});console.error("Case sync database error",{status:response.status,code:failure.code||"unknown",hint:failure.hint||null});return json({ok:false,message:"Unable to save case record",errorCode:failure.code||"database_error"},502)}
 return json({ok:true});
}
export const config={method:"POST",rateLimit:{action:"rate_limit",aggregateBy:"ip",windowSize:60,windowLimit:5}};
