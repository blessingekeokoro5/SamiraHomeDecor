const {quoteDecor,isDecor}=require('./koala-decor-delivery');
const {quoteOffice,isOffice}=require('./luxo-office-delivery');
const {quoteBdo,isBdo}=require('./bdo-office-delivery');
const {quoteAdairs,isAdairs}=require('./adairs-delivery');
const {quoteShein,isShein}=require('./shein-bathroom-delivery');
const isLive=p=>isDecor(p)||isOffice(p)||isBdo(p)||isAdairs(p)||isShein(p);
async function quoteSuppliers(lines,destination,options={}){
 const quotes=(await Promise.all([quoteDecor(lines,destination,options.koala||{}),quoteOffice(lines,destination,options.luxo||{}),quoteBdo(lines,destination,options.bdo||{}),quoteAdairs(lines,destination,options.adairs||{}),quoteShein(lines,destination)])).filter(Boolean);
 if(!quotes.length)return null;
 const blocked=quotes.find(q=>q.quoteRequired);if(blocked)return blocked;
 return {fee:Math.round(quotes.reduce((n,q)=>n+q.fee,0)*100)/100,quoteRequired:false,message:'',days:quotes.some(q=>q.days)?[Math.max(...quotes.map(q=>q.days?.[0]||0)),Math.max(...quotes.map(q=>q.days?.[1]||0))]:undefined};
}
module.exports={quoteSuppliers,isLive};
