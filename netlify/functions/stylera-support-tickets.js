"use strict";
const { initializeApp, getApps, cert } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const PROJECT_ID = "samira-home-decor";
const OWNER_UID = "czswlLoY2Pfd9THkkHWVoV8eX283";
const headers = { "Content-Type": "application/json", "Cache-Control": "no-store" };
const reply = (statusCode, data) => ({ statusCode, headers, body: JSON.stringify(data) });
function app() {
  const existing = getApps().find(a => a.name === "stylera-support");
  if (existing) return existing;
  const raw = process.env.STYLERA_FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error("Missing server credentials");
  const credentials = JSON.parse(raw);
  if (credentials.project_id !== PROJECT_ID) throw new Error("Wrong Firebase project");
  return initializeApp({ credential: cert(credentials), projectId: PROJECT_ID }, "stylera-support");
}
exports.handler = async (event) => {
  if (!["GET","POST"].includes(event.httpMethod)) return reply(405,{error:"Method not allowed"});
  const token = /^Bearer (.+)$/i.exec(event.headers.authorization || event.headers.Authorization || "")?.[1];
  if (!token) return reply(401,{error:"Authentication required"});
  let firebase;
  try { firebase = app(); } catch (e) { console.error("Stylera database configuration error",e?.message); return reply(503,{error:"Database configuration unavailable"}); }
  try {
    const decoded = await getAuth(firebase).verifyIdToken(token,true);
    if (decoded.uid !== OWNER_UID || decoded.aud !== PROJECT_ID || decoded.firebase?.sign_in_provider !== "google.com") return reply(403,{error:"Owner access required"});
  } catch { return reply(401,{error:"Invalid authentication"}); }
  const db = getFirestore(firebase);
  try {
    if (event.httpMethod === "GET" && event.queryStringParameters?.ticketId) {
      const ticketId = event.queryStringParameters.ticketId;
      if (!/^[A-Za-z0-9_-]{1,128}$/.test(ticketId)) return reply(400,{error:"Invalid ticket ID"});
      const ticket = db.collection("stylera_support_tickets").doc(ticketId);
      const snap = await ticket.get();
      if (!snap.exists) return reply(404,{error:"Ticket not found"});
      const messages = await ticket.collection("messages").orderBy("createdAt","asc").limit(100).get();
      return reply(200,{ticket:{id:snap.id,...snap.data()},messages:messages.docs.map(doc=>({id:doc.id,...doc.data(),createdAt:doc.get("createdAt")?.toDate?.()?.toISOString?.()||null}))});
    }
    if (event.httpMethod === "GET") {
      const snap = await db.collection("stylera_support_tickets").orderBy("updatedAt","desc").limit(50).get();
      return reply(200,{tickets:snap.docs.map(doc=>({id:doc.id,...doc.data(),createdAt:doc.get("createdAt")?.toDate?.()?.toISOString?.()||null,updatedAt:doc.get("updatedAt")?.toDate?.()?.toISOString?.()||null}))});
    }
    const body = JSON.parse(event.body || "{}");
    if (body.action === "create-test-ticket") {
      const ref = db.collection("stylera_support_tickets").doc();
      const now = FieldValue.serverTimestamp();
      await ref.set({subject:"Stylera messaging test",status:"open",source:"owner-test",createdAt:now,updatedAt:now,customerName:"Test customer",testOnly:true});
      await ref.collection("messages").add({text:"Hello, this is a test customer message. Can you help me?",sender:"customer",createdAt:FieldValue.serverTimestamp(),deliveryStatus:"test-only"});
      return reply(201,{ticketId:ref.id,testOnly:true});
    }
    if (body.action !== "reply" || typeof body.ticketId !== "string" || !/^[A-Za-z0-9_-]{1,128}$/.test(body.ticketId) || typeof body.message !== "string" || !body.message.trim() || body.message.length > 3000) return reply(400,{error:"Invalid reply"});
    const ticket = db.collection("stylera_support_tickets").doc(body.ticketId);
    await db.runTransaction(async tx => {
      const snap = await tx.get(ticket);
      if (!snap.exists) throw Object.assign(new Error("Ticket not found"),{status:404});
      const data = snap.data();
      if (data.status === "closed") throw Object.assign(new Error("Closed ticket"),{status:409});
      const messageRef = ticket.collection("messages").doc();
      tx.set(messageRef,{text:body.message.trim(),sender:"owner",createdAt:FieldValue.serverTimestamp(),deliveryStatus:"dashboard-only"});
      tx.update(ticket,{updatedAt:FieldValue.serverTimestamp(),status:"awaiting-customer",lastReplyPreview:body.message.trim().slice(0,120)});
    });
    return reply(200,{saved:true,delivery:"dashboard-only"});
  } catch (error) {
    if (error.status === 404 || error.status === 409) return reply(error.status,{error:error.message});
    console.error("Stylera tickets error",error?.code || error?.message || "unknown");
    return reply(503,{error:"Tickets are not available yet"});
  }
};
