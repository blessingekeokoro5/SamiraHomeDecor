const catalogue=require('./_catalogue.json').products;
const {quoteDecor,isDecor}=require('./lib/koala-decor-delivery');
const response=(statusCode,body)=>({statusCode,headers:{'Content-Type':'application/json','Cache-Control':'no-store'},body:JSON.stringify(body)});
exports.handler=async event=>{
  if(event.httpMethod!=='POST')return response(405,{message:'Use POST.'});
  if((event.body||'').length>12000)return response(413,{message:'Request too large.'});
  let body;try{body=JSON.parse(event.body||'{}');}catch{return response(400,{message:'Invalid request.'});}
  if(!Array.isArray(body.items)||!body.items.length||body.items.length>30)return response(400,{message:'Choose up to 30 different products.'});
  const lines=[];
  for(const item of body.items){
    const p=catalogue[String(item.id||'')],qty=Number(item.qty);
    if(!p||!isDecor(p)||!Number.isInteger(qty)||qty<1||qty>50)return response(400,{message:'Invalid product or quantity.'});
    lines.push({...p,qty});
  }
  const quote=await quoteDecor(lines,{postcode:body.postcode,suburb:body.suburb,country:body.country||'Australia'});
  return response(200,quote);
};
