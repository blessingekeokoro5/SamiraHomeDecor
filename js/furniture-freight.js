/* Postcode-specific supplier quotes checked 11 November 2026. AUD. */
(function(root){
  const luxo={
    '5087':{table:275,stool:65,buffet:395},'2000':{table:109,stool:63.50,buffet:109},
    '3000':{table:161,stool:65,buffet:192},'4000':{table:129,stool:65,buffet:175},
    '6000':{table:345,stool:85,buffet:549},'2600':{table:129,stool:65,buffet:159},
    '7000':{table:489,stool:85,buffet:null}
  };
  const koala={
    '5087':{light:160.50,heavy:174.80},'2000':{light:80.25,heavy:183.41},
    '3000':{light:86.39,heavy:165.20},'4000':{light:null,heavy:165.20},
    '6000':{light:null,heavy:165.20},'2600':{light:null,heavy:238.50},
    '7000':{light:151.12,heavy:727.79}
  };
  function quote(lines,postcode,country){
    const chosen=lines.filter(x=>x.readyDining),pc=(String(postcode||'').match(/\b\d{4}\b/)||[])[0];
    if(!chosen.length)return {fee:0,surcharge:0,quoteRequired:false};
    let fee=0,quoteRequired=false;
    chosen.forEach(p=>{let n;if(p.supplier==='Koala Living')n=(koala[pc]||{})[p.freightClass];
      else n=p.freightClass==='chair'?105*(p.chairSets||1):p.freightClass==='sofa'?510:(luxo[pc]||{})[p.freightClass];
      if(country&&country!=='Australia')n=null;if(n==null)quoteRequired=true;else fee+=n*(p.qty||1);});
    const units=lines.filter(p=>p.readyDining||p.furniture).reduce((n,p)=>n+(p.qty||1),0),surcharge=units>1?102:0;
    return {fee:Math.round((fee+surcharge)*100)/100,surcharge,quoteRequired,message:quoteRequired?'Please contact us for a delivery quote for this postcode and product. Payment is available once freight is confirmed.':''};
  }
  const api={luxo,koala,quote};if(typeof module==='object'&&module.exports)module.exports=api;else root.FurnitureFreight=api;
})(typeof window==='undefined'?globalThis:window);
