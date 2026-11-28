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
 const items = [
  ['Place an order', '$5 store credit on eligible orders above $100'],
  ['Newsletter signup', '$2 store credit once'],
  ['Birthday', '$10 store credit annually']
 ];
 const intro = document.createElement('p');
 intro.className = 'shd-reward-disclaimer';
 intro.textContent = 'Sign in or create an account to explore your member benefits. Social rewards are currently unavailable.';
 const heading = document.createElement('h3');
 heading.textContent = 'Ways to earn';
 content.append(intro, heading);
 for (const [name, detail] of items) {
  const card = document.createElement('article');
  card.className = 'shd-reward-card';
  const label = document.createElement('strong');
  label.textContent = name;
  const description = document.createElement('small');
  description.textContent = detail;
  card.append(label, description);
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
