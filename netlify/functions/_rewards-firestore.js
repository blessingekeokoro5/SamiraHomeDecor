// Server-only Firestore transport for rewards. Never return credentials or tokens.
const crypto = require("node:crypto");
const project = "samira-home-decor";
let cached;
async function accessToken() {
  if (cached && cached.expires > Date.now()+60000) return cached.token;
  const raw=process.env.STYLERA_FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error("firebase_not_configured");
  const c=JSON.parse(raw);
  if(c.project_id!==project || c.type!=="service_account" || !c.client_email || !c.private_key) throw new Error("firebase_invalid_configuration");
  const now=Math.floor(Date.now()/1000);
  const enc=x=>Buffer.from(JSON.stringify(x)).toString("base64url");
  const unsigned=enc({alg:"RS256",typ:"JWT"})+"."+enc({iss:c.client_email,scope:"https://www.googleapis.com/auth/datastore",aud:"https://oauth2.googleapis.com/token",iat:now,exp:now+3600});
  const assertion=unsigned+"."+crypto.sign("RSA-SHA256",Buffer.from(unsigned),c.private_key).toString("base64url");
  const res=await fetch("https://oauth2.googleapis.com/token",{method:"POST",body:new URLSearchParams({grant_type:"urn:ietf:params:oauth:grant-type:jwt-bearer",assertion}),signal:AbortSignal.timeout(10000)});
  if(!res.ok) throw new Error("firebase_auth_failed");
  const data=await res.json();
  if(!data.access_token) throw new Error("firebase_auth_failed");
  cached={token:data.access_token,expires:Date.now()+Number(data.expires_in||3600)*1000};
  return cached.token;
}
async function firestore(path,body) {
  if(!/^:[a-zA-Z]+$|^\/[a-zA-Z0-9_/-]+$/.test(path)) throw new Error("invalid_firestore_path");
  const res=await fetch("https://firestore.googleapis.com/v1/projects/"+project+"/databases/(default)/documents"+path,{method:body===undefined?"GET":"POST",headers:{Authorization:"Bearer "+await accessToken(),"Content-Type":"application/json"},body:body===undefined?undefined:JSON.stringify(body),signal:AbortSignal.timeout(10000)});
  if(!res.ok) throw new Error("firestore_http_"+res.status);
  const payload = await res.text();
  return payload ? JSON.parse(payload) : {};
}
async function checkConnection(){
  await firestore(":runQuery",{structuredQuery:{from:[{collectionId:"rewards_accounts"}],limit:1,select:{fields:[{fieldPath:"__name__"}]}}});
  return true;
}
module.exports={firestore,checkConnection};
