// Validate the current Supabase session with Supabase Auth, not a client-side email claim.
const env=k=>Netlify.env.get(k);
export async function ownerSession(req){
 const token=(req.headers.get('authorization')||'').match(/^Bearer\s+(.+)$/i)?.[1];
 if(!token)return null;
 const base=(env('STYLERA_SUPABASE_URL')||'https://agqjcvacbrzhwgjbhcqs.supabase.co').replace(/\/$/,'');
 const key=env('STYLERA_SUPABASE_PUBLISHABLE_KEY')||'sb_publishable_Efaabu3t4Ye52NjM9IGYrg_Ehx_hTHS';
 const owner=(env('STYLERA_OWNER_EMAIL')||'lasemic@gmail.com').trim().toLowerCase();
 try{
  const response=await fetch(base+'/auth/v1/user',{headers:{apikey:key,Authorization:'Bearer '+token},signal:AbortSignal.timeout(6000)});
  if(!response.ok)return null;
  const user=await response.json();
  if(!user?.id||user.email?.toLowerCase()!==owner)return null;
  return {id:user.id,email:user.email};
 }catch{return null}
}
