/* Samira Rewards interface. Preview only until secure ledger and checkout redemption launch. */
(function(){
 if(document.getElementById('shdRewardsButton'))return;
 const fab=document.createElement('button');fab.id='shdRewardsButton';fab.className='shd-reward-fab';fab.type='button';fab.textContent='🎁 Rewards';
 const overlay=document.createElement('div');overlay.className='shd-reward-overlay';overlay.hidden=true;
 const drawer=document.createElement('section');drawer.className='shd-reward-drawer';drawer.setAttribute('role','dialog');drawer.setAttribute('aria-modal','true');drawer.setAttribute('aria-label','Samira rewards');
 const head=document.createElement('header');head.className='shd-reward-head';
 const close=document.createElement('button');close.className='shd-reward-close';close.type='button';close.textContent='×';close.setAttribute('aria-label','Close rewards');
 const title=document.createElement('h2');title.textContent='Rewards program';const welcome=document.createElement('div');welcome.textContent='Welcome to Samira Home Decor';welcome.style.fontSize='13px';
 head.append(close,welcome,title);
 const content=document.createElement('div');content.className='shd-reward-content';
 const items=[['Place an order','$5 store credit on eligible orders above $100',null],['Follow on Instagram','$5 store credit',null],['Subscribe on YouTube','$5 store credit',null],['Follow on TikTok','$5 store credit',null],['Newsletter signup','$2 store credit',null],['Birthday','$10 store credit annually',null]];
 const intro=document.createElement('p');intro.className='shd-reward-disclaimer';intro.textContent='Sign in or create your Samira Home Decor account to explore your rewards and member benefits.';
 const heading=document.createElement('h3');heading.textContent='Ways to earn';content.append(intro,heading);
 for(const [name,detail,days] of items){
  const card=document.createElement('article');card.className='shd-reward-card';const strong=document.createElement('strong');strong.textContent=name;const small=document.createElement('small');small.textContent=detail;card.append(strong,small);

  const socialLinks={'Follow on Instagram':['https://www.instagram.com/sys_samira1/','Follow us on Instagram'],'Subscribe on YouTube':['https://www.youtube.com/channel/UCmyDyZuM6kR18xMtuMtFVbA','Subscribe on YouTube'],'Follow on TikTok':['https://www.tiktok.com/@sys_samira','Follow us on TikTok']};
  if(socialLinks[name]){
   const link=document.createElement('a');
   link.href=socialLinks[name][0];link.textContent=socialLinks[name][1]+' ↗';
   link.target='_blank';link.rel='noopener noreferrer';
   link.style.cssText='display:inline-block;margin-top:12px;color:#0b1f3a;text-decoration:underline;font-weight:600;font-size:13px';
   card.append(link);
  }
  content.append(card);
 }
 const existing=document.createElement('article');existing.className='shd-reward-card';const exTitle=document.createElement('strong');exTitle.textContent='Your existing member benefits stay';const exDesc=document.createElement('small');exDesc.textContent='First-order discount, referral rewards and Christmas vouchers remain separate from the new store-credit program.';existing.append(exTitle,exDesc);content.append(existing);
 const join=document.createElement('a');join.className='shd-reward-action';join.href='/account.html';join.textContent='Become a member';
 const link=document.createElement('a');link.className='shd-reward-link';link.href='/rewards.html';link.textContent='See all member benefits';content.append(join,link);
 drawer.append(head,content);overlay.append(drawer);document.body.append(fab,overlay);
 let lastFocus=null;function hide(){overlay.hidden=true;fab.focus();document.removeEventListener('keydown',onKey)}
 function onKey(e){if(e.key==='Escape')hide()}
 fab.addEventListener('click',()=>{lastFocus=document.activeElement;overlay.hidden=false;close.focus();document.addEventListener('keydown',onKey)});
 close.addEventListener('click',hide);
 overlay.addEventListener('click',e=>{if(e.target===overlay)hide()});
})();
