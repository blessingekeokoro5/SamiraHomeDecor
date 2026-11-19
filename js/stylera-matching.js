/* Contextual, dismissible recommendations. Uses only public catalogue data. */
(function(){
'use strict';
const id=new URLSearchParams(location.search).get('id');
const items=typeof PRODUCTS!=='undefined'&&Array.isArray(PRODUCTS)?PRODUCTS:[];
const current=items.find(p=>String(p.id)===id);
if(!current||!current.name)return;
const text=p=>String([p.name,p.cat,p.subcat,p.desc].filter(Boolean).join(' ')).toLowerCase();
const src=text(current);
const groups=[
 {match:/sofa|couch|lounge|armchair/,terms:/cushion|pillow|throw|side table|coffee table|vase|decor/ ,why:'Layer soft textiles and practical accent pieces to make your seating area feel coordinated.'},
 {match:/dining|buffet|bar stool/,terms:/dining chair|tableware|vase|centre|center|decor|serving|candle/,why:'Complement the dining area with coordinated seating and table accents.'},
 {match:/bathroom|towel|soap|shower/,terms:/bathroom|towel|soap|tray|organis|accessor/,why:'Coordinate finishes and textures for a more cohesive bathroom.'},
 {match:/bed|bedroom|mattress/,terms:/pillow|cushion|bedding|throw|bedside|linen|decor/,why:'Combine soft furnishings and complementary bedside accents for a finished look.'}
];
const group=groups.find(g=>g.match.test(src))||{terms:/cushion|vase|decor|accessor|table|throw/,why:'These accents can complement your room; compare sizes, finishes and colors before ordering.'};
const candidates=items.filter(p=>p&&p.id!==current.id&&p.name&&p.price>0&&group.terms.test(text(p))&&p.img&&!/placeholder/i.test(String(p.img))).slice(0,60);
const scored=candidates.map(p=>({p,score:(p.cat===current.cat?2:0)+(String(p.name).toLowerCase().includes('set')?1:0)})).sort((a,b)=>b.score-a.score).slice(0,3).map(x=>x.p);
if(!scored.length)return;
const style=document.createElement('style');style.textContent=`
#shdMatchPanel{position:fixed;bottom:18px;right:18px;z-index:9997;background:white;color:#0B1F3A;width:min(370px,calc(100vw - 30px));max-height:80vh;overflow:auto;border:1px solid #c6a15b;border-radius:16px;box-shadow:0 14px 45px #0003;padding:18px;font-family:inherit}
#shdMatchPanel h2{font-size:1.1rem;margin:0 28px 8px 0;color:#0B1F3A}#shdMatchPanel p{font-size:.83rem;margin:6px 0 12px}
#shdMatchPanel .shd-match{display:flex;gap:10px;align-items:center;margin:10px 0;text-decoration:none;color:#0B1F3A;font-size:.84rem}
#shdMatchPanel .shd-match img{width:66px;height:66px;object-fit:cover;border-radius:9px}
#shdMatchPanel button{border:0;background:#0B1F3A;color:white;border-radius:8px;padding:8px 12px;cursor:pointer}
#shdMatchPanel .shd-dismiss{position:absolute;right:12px;top:12px;padding:4px 9px}
`;document.head.append(style);
function open(){
if(document.getElementById('shdMatchPanel'))return;
const panel=document.createElement('aside');panel.id='shdMatchPanel';panel.setAttribute('aria-label','Stylera matching pieces');
const h=document.createElement('h2');h.textContent='Stylera suggests matching pieces';panel.append(h);
const close=document.createElement('button');close.className='shd-dismiss';close.textContent='×';close.setAttribute('aria-label','Close recommendations');close.addEventListener('click',()=>{sessionStorage.setItem('shd_match_dismissed','1');panel.remove()});panel.append(close);
const why=document.createElement('p');why.textContent=group.why;panel.append(why);
for(const p of scored){const a=document.createElement('a');a.className='shd-match';a.href='/product.html?id='+encodeURIComponent(p.id);const img=document.createElement('img');img.src=p.img;img.alt='';img.loading='lazy';const label=document.createElement('span');label.textContent=p.name;a.append(img,label);panel.append(a)}
const ask=document.createElement('button');ask.textContent='Ask Stylera about matching my room';ask.addEventListener('click',()=>{panel.remove();location.href='/stylist.html'});panel.append(ask);
document.body.append(panel);
}
document.addEventListener('DOMContentLoaded',()=>{
const footer=document.createElement('div');footer.style.cssText='padding:12px 0;font-size:.83rem;color:#0B1F3A';
const a=document.createElement('a');a.href='/policy.html?doc=returns';a.textContent='Read our returns policy';footer.append('Secure payment processing at checkout · ',a);
const target=document.querySelector('#pdpPrice')?.parentElement||document.querySelector('main');
if(target)target.append(footer);
if(sessionStorage.getItem('shd_match_dismissed')!=='1')setTimeout(open,12000);
});
})();
