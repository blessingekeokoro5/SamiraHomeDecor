"use strict";
// Preview-only owner notification preferences. Firebase is the permanent store.
// No outbound email or push is sent by this endpoint.
const {initializeApp,getApps,cert}=require("firebase-admin/app");
const {getAuth}=require("firebase-admin/auth");
const {getFirestore,FieldValue}=require("firebase-admin/firestore");
const PROJECT="samira-home-decor",OWNER="czswlLoY2Pfd9THkkHWVoV8eX283";
const headers={"Content-Type":"application/json","Cache-Control":"no-store"};
const response=(statusCode,body)=>({statusCode,headers,body:JSON.stringify(body)});
function admin(){const existing=getApps().find(x=>x.name==="stylera-notifications");if(existing)return existing;const json=process.env.STYLERA_FIREBASE_SERVICE_ACCOUNT_JSON;if(!json)throw Error("Firebase credentials missing");const credentials=JSON.parse(json);if(credentials.project_id!==PROJECT)throw Error("Firebase project mismatch");return initializeApp({credential:cert(credentials),projectId:PROJECT},"stylera-notifications");}
exports.handler=async(event)=>{
 if(!["GET","POST"].includes(event.httpMethod))return response(405,{error:"Method not allowed"});
 const bearer=/^Bearer (.+)$/i.exec(event.headers.authorization||event.headers.Authorization||"")?.[1];
 if(!bearer)return response(401,{error:"Authentication required"});
 let app;try{app=admin();}catch(e){console.error("Stylera notification config unavailable",e.message);return response(503,{error:"Configuration unavailable"});}
 try{const user=await getAuth(app).verifyIdToken(bearer,true);if(user.uid!==OWNER||user.aud!==PROJECT||user.firebase?.sign_in_provider!=="google.com")return response(403,{error:"Owner only"});}catch{return response(401,{error:"Invalid authentication"});}
 const doc=getFirestore(app).collection("stylera_notification_settings").doc(OWNER);
 try{
  if(event.httpMethod==="GET"){const snapshot=await doc.get();const v=snapshot.data()||{};return response(200,{emailEnabled:v.emailEnabled??true,pushEnabled:v.pushEnabled??true,emailConfigured:Boolean(process.env.STYLERA_NOTIFICATION_EMAIL_API_KEY&&process.env.STYLERA_NOTIFICATION_FROM),pushConfigured:Boolean(process.env.STYLERA_FIREBASE_WEB_PUSH_VAPID_KEY),deliveryActive:false});}
  if((event.body||"").length>2048)return response(413,{error:"Payload too large"});
  const body=JSON.parse(event.body||"{}");
  if(typeof body.emailEnabled!=="boolean"||typeof body.pushEnabled!=="boolean")return response(400,{error:"Expected boolean notification preferences"});
  await doc.set({emailEnabled:body.emailEnabled,pushEnabled:body.pushEnabled,updatedAt:FieldValue.serverTimestamp()},{merge:true});
  return response(200,{saved:true,deliveryActive:false});
 }catch(e){console.error("Stylera notification preferences error",e.code||e.message);return response(503,{error:"Notification settings unavailable"});}
};
