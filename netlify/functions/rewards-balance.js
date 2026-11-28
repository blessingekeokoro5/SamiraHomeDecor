const crypto=require("node:crypto");
const { read, awardVerified } = require("./_rewards-ledger");
const { notifyCredit } = require("./_rewards-notify");
const { rewardsView } = require("./_rewards-view");
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
 if (process.env.REWARDS_ENABLED !== "true") return json(404, { error: "rewards_disabled" });
 try {
   if (body.action === "claim-newsletter") {
     const listId = Number(process.env.BREVO_LIST_ID);
     if (!listId || !process.env.BREVO_API_KEY) return json(503, { error: "rewards_unavailable" });
     const response = await fetch("https://api.brevo.com/v3/contacts/" + encodeURIComponent(email), {
       headers: { "api-key": process.env.BREVO_API_KEY },
       signal: AbortSignal.timeout(8000),
     });
     if (response.status === 404) return json(409, { error: "newsletter_unconfirmed" });
     if (!response.ok) return json(503, { error: "rewards_unavailable" });
     const contact = await response.json();
     if (contact.emailBlacklisted !== false || !contact.listIds?.includes(listId)) {
       return json(409, { error: "newsletter_unconfirmed" });
     }
     await awardVerified(email, { kind: "newsletter", key: "once", now: Date.now(), verified: true });
     const state = await read(email);
     await notifyCredit(email, state.lots.find(lot => lot.id === "newsletter:once"));
     return json(200, rewardsView(state));
   }
   return json(200, rewardsView(await read(email)));
 } catch {
   return json(503, { error: "rewards_unavailable" });
 }
};
exports.authenticate=authenticate;
