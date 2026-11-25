const { randomBytes } = require("node:crypto");
const { url, publishableKey } = require("../../js/stylera-supabase-config");
const origin = "https://samirahomedecor.com.au";
const id = /^[a-f0-9]{8}-(?:[a-f0-9]{4}-){3}[a-f0-9]{12}$/i;
const tokenPattern = /^[a-f0-9]{64}$/i;
const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const headers = {
  "Content-Type": "application/json",
  "Cache-Control": "no-store",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const reply = (statusCode, data) => ({statusCode, headers, body:JSON.stringify(data)});
async function request(endpoint, body, supabase = false) {
  const response = await fetch(endpoint, {
    method:"POST",
    headers:{"Content-Type":"application/json", ...(supabase ? {apikey:publishableKey} : {})},
    body:JSON.stringify(body),
    signal:AbortSignal.timeout(9000),
  });
  if(!response.ok){
    if(response.status===429)return {limited:true};
    throw new Error("Chat upstream request failed");
  }
  const text=await response.text();
  return text?JSON.parse(text):null;
}
const rpc = (name, body) => request(url + "/rest/v1/rpc/" + name, body, true);

exports.handler = async event => {
  if(event.httpMethod==="OPTIONS")return reply(200,{});
  if(event.httpMethod!=="POST")return reply(405,{error:"Method not allowed."});
  if(event.isBase64Encoded || String(event.body||"").length>16000)return reply(413,{error:"Your message is too long."});
  let body;
  try{body=JSON.parse(event.body||"{}");}catch{return reply(400,{error:"Invalid request."});}
  try{
    if(body?.action==="availability"){
      const result=await rpc("stylera_get_support_availability",{});
      return typeof result==="boolean"?reply(200,{online:result}):reply(503,{error:"Availability could not be checked."});
    }
    if(body?.action==="start"){
      const name=typeof body.name==="string"?body.name.trim():"";
      const email=typeof body.email==="string"?body.email.trim():"";
      if(name.length<2||name.length>100||email.length>254||!emailPattern.test(email)){
        return reply(400,{error:"Enter your name and a valid email address."});
      }
      const token=randomBytes(32).toString("hex");
      const result=await request(origin+"/.netlify/functions/stylera-guest-start",{name,email,token});
      if(result?.limited)return reply(429,{error:"Please wait a moment before starting another chat."});
      if(typeof result?.thread!=="string"||!id.test(result.thread))throw new Error("Invalid chat thread");
      return reply(200,{thread:result.thread,token});
    }
    if(body?.action!=="read"&&body?.action!=="send")return reply(400,{error:"Choose a chat action."});
    if(typeof body.thread!=="string"||!id.test(body.thread)||typeof body.token!=="string"||!tokenPattern.test(body.token)){
      return reply(400,{error:"Start a chat to continue."});
    }
    const access={p_thread:body.thread,p_token:body.token};
    if(body.action==="read"){
      const result=await rpc("stylera_guest_read",access);
      if(!Array.isArray(result))throw new Error("Invalid chat messages");
      return reply(200,{messages:result.flatMap(message=>typeof message?.content==="string"?[{
        sender:message.sender==="customer"?"customer":"support",
        content:message.content,
      }]:[]).slice(-150)});
    }
    const content=typeof body.message==="string"?body.message.trim():"";
    if(!content||content.length>2000)return reply(400,{error:"Enter a message of up to 2,000 characters."});
    const result=await rpc("stylera_guest_send",{...access,p_message:content});
    if(result?.limited)return reply(429,{error:"Please wait before sending another message."});
    return reply(200,{ok:true});
  }catch{
    return reply(503,{error:"Customer Care chat is temporarily unavailable. Try again or send a support request in the app."});
  }
};
