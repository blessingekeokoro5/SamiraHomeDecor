/* Pure server-side policy; persistence and verified event adapters required. All amounts in AUD cents. */
module.exports = (function factory(){
const policy={earnMin:10000,redeemMin:30000,maxRedeem:2000,cap:10000,amounts:{order:500,newsletter:200,birthday:1000,instagram:500,tiktok:500,youtube:500}};
function expiry(now){const d=new Date(now),m=d.getUTCMonth();d.setUTCFullYear(d.getUTCFullYear()+1);if(d.getUTCMonth()!==m)d.setUTCDate(0);return +d}
function balance(s,now){return s.lots.filter(l=>l.expires>now).reduce((n,l)=>n+l.remaining,0)}
function award(s,{kind,key,now,verified,subtotal=0}){if(!verified||!Object.hasOwn(policy.amounts,kind)||!key||!Number.isFinite(now))throw Error("Unverified reward");if(["instagram","tiktok","youtube"].includes(kind))throw Error("Social reward disabled pending compliance");if(kind==="order"&&(!Number.isSafeInteger(subtotal)||subtotal<=policy.earnMin))return 0;const id=kind+":"+ (kind==="newsletter"?"once":key);if(s.events.includes(id))return 0;const amount=Math.max(0,Math.min(policy.amounts[kind],policy.cap-balance(s,now)));s.events.push(id);if(amount)s.lots.push({id,remaining:amount,expires:expiry(now)});return amount}
function quote(s,{now,subtotal,promotion=false,clearance=false,member=false}){if(!member||promotion||clearance||!Number.isSafeInteger(subtotal)||subtotal<policy.redeemMin)return 0;return Math.min(policy.maxRedeem,balance(s,now))}
return {policy,expiry,balance,award,quote}
})();
