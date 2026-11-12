const {quoteDecor,isDecor}=require('./koala-decor-delivery');
const {quoteOffice,isOffice}=require('./luxo-office-delivery');
const {quoteBdo,isBdo}=require('./bdo-office-delivery');
const isLive=p=>isDecor(p)||isOffice(p)||isBdo(p);
async function quoteSuppliers(lines,destination,options={}){
 const quotes=(await Promise.all([quoteDecor(lines,destination,options.koala||{}),quoteOffice(lines,destination,options.luxo||{}),quoteBdo(lines,destination,options.bdo||{})])).filter(Boolean);
 if(!quotes.length)return null;
 const blocked=quotes.find(q=>q.quoteRequired);if(blocked)return blocked;
 return {fee:Math.round(quotes.reduce((n,q)=>n+q.fee,0)*100)/100,quoteRequired:false,message:''};
}
module.exports={quoteSuppliers,isLive};
