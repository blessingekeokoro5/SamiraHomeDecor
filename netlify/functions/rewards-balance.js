const crypto=require("node:crypto");
const {read}=require("./_rewards-ledger");
const {balance}=require("./_rewards-policy");
function authenticate(email,token,now=Date.now()){
 const secret=process.env.AUTH_SECRET||process.env.BREVO_API_KEY;
 if(!secret||typeof email!=="string"||typeof token!=="string")return null;
 email=email.trim().toLowerCase();
 if(email.length>254||!/^\S+@\S+\.\S+$/.test(email))return null;
 const m=/^(\d{13})\.([a-f0-9]{64})$/.exec(token);
 if(!m||Number(m[1])>now||now-Number(m[1])>400*86400000)return null;
 const expected=crypto.createHmac("sha256",secret).update(email+"|"+m[1]).digest();
 return crypto.timingSafeEqual(expected,Buffer.from(m[2],"hex"))?email:null;
}
const json=(statusCode,data)=>({statusCode,headers:{"Content-Type":"application/json","Cache-Control":"no-store"},body:JSON.stringify(data)});
exports.handler=async event=>{
 if(event.httpMethod!=="POST")return json(405,{error:"method_not_allowed"});
 let body;try{body=JSON.parse(event.body||"{}")}catch{return json(400,{error:"invalid_json"})}
 const email=authenticate(body?.email,body?.token);
 if(!email)return json(401,{error:"unauthorized"});
 try{
 const s=await read(email),now=Date.now();
 return json(200,{balanceCents:balance(s,now),currency:"AUD",credits:s.lots.filter(l=>l.remaining>0&&l.expires>now).map(l=>({remainingCents:l.remaining,expires:l.expires}))});
 }catch{return json(503,{error:"rewards_unavailable"})}
};
exports.authenticate=authenticate;
