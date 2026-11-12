/* Local Australian suburb/postcode suggestions; no address sent to a lookup service. */
(function(root){
  function matches(query,rows){
    const terms=String(query||'').trim().toUpperCase().split(/[\s,]+/).filter(Boolean);
    if(!terms.length)return [];
    return rows.filter(r=>terms.every(t=>(r[0]+' '+r[1]+' '+r[2]).includes(t))).sort((a,b)=>{
      const q=terms.join(' '),aExact=a[0]===q||a[1]===q,bExact=b[0]===q||b[1]===q;
      return Number(bExact)-Number(aExact)||a[0].localeCompare(b[0]);
    }).slice(0,12);
  }
  function init(){
    const input=document.getElementById('coLocation'),list=document.getElementById('coLocationOptions'),status=document.getElementById('coLocationStatus');
    if(!input||!list)return;
    let rows=[],active=-1;
    const close=()=>{list.hidden=true;input.setAttribute('aria-expanded','false');input.removeAttribute('aria-activedescendant');active=-1;};
    function select(row){
      document.getElementById('coSuburb').value=row[0];document.getElementById('coPost').value=row[1];document.getElementById('coState').value=row[2];document.getElementById('coCountry').value='Australia';
      input.value=row[0]+', '+row[2]+' '+row[1];close();status.textContent='Selected '+input.value;coCheckReady();updateTotalsUI();
    }
    function search(value){
      close();list.replaceChildren();
      if(shipCountry()!=='Australia'){status.textContent='Australian suggestions are available when Australia is selected.';return;}
      if(!root.AuLocations){status.textContent='Suggestions are unavailable. Enter your suburb, state and postcode below.';return;}
      rows=matches(value,root.AuLocations.rows);
      for(const [i,row] of rows.entries()){
        const option=document.createElement('button');option.type='button';option.id='coLocality'+i;option.setAttribute('role','option');option.setAttribute('aria-selected','false');
        option.textContent=row[0]+', '+row[2]+' '+row[1];option.style.cssText='display:block;width:100%;min-height:44px;padding:10px;text-align:left;border:1px solid #ddd;background:white;color:#0B1F3A;cursor:pointer;white-space:normal';
        option.addEventListener('click',()=>select(row));list.appendChild(option);
      }
      list.hidden=!rows.length;input.setAttribute('aria-expanded',String(!!rows.length));status.textContent=!String(value||'').trim()?'':rows.length?'Choose your suburb and postcode below.':'No matching suburbs. Check your spelling or enter the address below.';
    }
    input.addEventListener('input',()=>search(input.value));
    input.addEventListener('keydown',event=>{
      if(event.key==='Escape'){close();return;}
      if(list.hidden||!rows.length)return;
      if(event.key==='ArrowDown'||event.key==='ArrowUp'){
        event.preventDefault();active=active<0?(event.key==='ArrowDown'?0:rows.length-1):(active+(event.key==='ArrowDown'?1:-1)+rows.length)%rows.length;
        [...list.children].forEach((el,i)=>{el.setAttribute('aria-selected',String(i===active));el.style.background=i===active?'#F7F3EC':'white';});input.setAttribute('aria-activedescendant','coLocality'+active);
      }else if(event.key==='Enter'){
        event.preventDefault();if(active>=0)select(rows[active]);else if(rows.length===1)select(rows[0]);
      }
    });
    for(const id of ['coPost','coSuburb'])document.getElementById(id).addEventListener('input',event=>{input.value=event.target.value;search(event.target.value);});
    document.getElementById('coCountry').addEventListener('change',()=>{close();status.textContent='';input.value='';});
    // Hide suggestions on focus leaving this calculator or its address inputs.
    document.getElementById('checkoutForm').addEventListener('focusout',event=>{
      const next=event.relatedTarget;
      if(next&&!list.contains(next)&&next!==input&&next.id!=='coPost'&&next.id!=='coSuburb')close();
    });
  }
  const api={matches,init};if(typeof module==='object'&&module.exports)module.exports=api;else root.CheckoutLocations=api;
})(typeof window==='undefined'?globalThis:window);
