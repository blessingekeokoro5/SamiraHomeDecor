"use strict";
// Protected Stylera admin identity endpoint. No customer data is returned.
const { initializeApp, getApps, cert } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");

const PROJECT_ID = "samira-home-decor";
const OWNER_UID = "czswlLoY2Pfd9THkkHWVoV8eX283";

function getAdminApp() {
  if (getApps().length) return getApps()[0];
  const raw = process.env.STYLERA_FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error("Missing Firebase Admin server configuration");
  let credentials;
  try { credentials = JSON.parse(raw); }
  catch { throw new Error("Invalid Firebase Admin JSON configuration"); }
  if (credentials.project_id !== PROJECT_ID) throw new Error("Firebase project mismatch");
  return initializeApp({ credential: cert(credentials), projectId: PROJECT_ID });
}

exports.handler = async (event) => {
  const headers = { "Content-Type": "application/json", "Cache-Control": "no-store" };
  if (event.httpMethod !== "GET") return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  const token = /^Bearer (.+)$/i.exec(event.headers.authorization || event.headers.Authorization || "")?.[1];
  if (!token) return { statusCode: 401, headers, body: JSON.stringify({ error: "Authentication required" }) };
  try {
    getAdminApp();
    let decoded;
    try { decoded = await getAuth().verifyIdToken(token, true); }
    catch (error) {
      const code = String(error.code || "");
      if (code.startsWith("auth/")) {
        return { statusCode: 401, headers, body: JSON.stringify({ error: "Firebase token verification failed", diagnostic: "token-rejected" }) };
      }
      console.error("Stylera Firebase Admin verification service error", code || "unknown");
      return { statusCode: 503, headers, body: JSON.stringify({ error: "Firebase verification service unavailable", diagnostic: "admin-sdk-error" }) };
    }
    if (decoded.uid !== OWNER_UID || decoded.aud !== PROJECT_ID || decoded.firebase?.sign_in_provider !== "google.com") {
      return { statusCode: 403, headers, body: JSON.stringify({ error: "Administrator access denied", diagnostic: "owner-check-failed" }) };
    }
    return { statusCode: 200, headers, body: JSON.stringify({ role: "owner", authorized: true }) };
  } catch (err) {
    if (err.message?.includes("Missing Firebase Admin") || err.message?.includes("Firebase project mismatch") || err.message?.includes("Invalid Firebase Admin JSON")) {
      console.error("Stylera server configuration unavailable");
      return { statusCode: 503, headers, body: JSON.stringify({ error: "Administrator verification not configured", diagnostic: "server-config" }) };
    }
    console.error("Stylera unexpected verification error", err?.code || "unknown");
    return { statusCode: 503, headers, body: JSON.stringify({ error: "Verification service error", diagnostic: "unexpected-server-error" }) };
  }
};
