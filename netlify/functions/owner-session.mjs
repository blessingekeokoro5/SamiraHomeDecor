import { ownerSession } from '../lib/stylera-owner-auth.mjs';
const respond=(status,data,headers={})=>Response.json(data,{status,headers:{'Cache-Control':'no-store',...headers}});
export default async req=>{
 if(req.method!=='POST')return respond(405,{error:'Method not allowed'});
 const url=new URL(req.url);
 if(req.headers.get('origin')!==url.origin)return respond(403,{error:'Origin not allowed'});
 if(url.pathname.endsWith('/logout'))return respond(200,{ok:true},{'Set-Cookie':'shd_owner_session=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict'});
 const owner=await ownerSession(req);
 if(!owner)return respond(403,{error:'This Supabase account is not yet authorized as the Stylera owner. Check the owner email in Supabase Authentication.'});
 const token=(req.headers.get('authorization')||'').replace(/^Bearer\s+/i,'');
 return respond(200,{ok:true,email:owner.email},{'Set-Cookie':'shd_owner_session='+encodeURIComponent(token)+'; Path=/; Max-Age=3600; HttpOnly; Secure; SameSite=Strict'});
};
export const config={path:['/api/admin/owner-session','/api/admin/owner-session/logout']};
