const crypto=require("node:crypto");
const {firestore}=require("./_rewards-firestore");
const policy=require("./_rewards-policy");
const key=email=>crypto.createHash("sha256").update(email.trim().toLowerCase()).digest("hex");
const name=id=>"projects/samira-home-decor/databases/(default)/documents/rewards_accounts/"+id;
function decode(doc){if(!doc)return {lots:[],events:[]};const s=JSON.parse(doc.fields.state.stringValue);if(!Array.isArray(s.lots)||!Array.isArray(s.events))throw Error("invalid_ledger");return s}
async function read(email){
 const id=key(email);
 const result=await firestore(":batchGet",{documents:[name(id)]});
 return decode(result.find(x=>x.found)?.found);
}
async function mutate(email,operation){
 const id=key(email);
 for(let attempt=0;attempt<4;attempt++){
  const {transaction}=await firestore(":beginTransaction",{options:{readWrite:{}}});
  try{
   const rows=await firestore(":batchGet",{documents:[name(id)],transaction});
   const s=decode(rows.find(x=>x.found)?.found);
   const result=operation(s);
   const value=JSON.stringify(s);
   if(Buffer.byteLength(value)>800000)throw Error("ledger_capacity");
   await firestore(":commit",{transaction,writes:[{update:{name:name(id),fields:{state:{stringValue:value}}}}]});
   return result;
  }catch(e){
   try{await firestore(":rollback",{transaction})}catch{}
   if(e.message!=="firestore_http_409"||attempt===3)throw e;
  }
 }
}
async function awardVerified(email,event){return mutate(email, s => policy.award(s, { ...event, held: require("./_rewards-redemption").heldBalance(s, event.now) }))}
module.exports={read,mutate,awardVerified};
