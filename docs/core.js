(function(root){
const order=['S-','T-','K-','P-','W-','H-','R-','A','O','*','E','U','-F','-R','-P','-B','-L','-G','-T','-S','-D','-Z'];
function outline(keys){const s=new Set(keys),left=order.slice(0,7).filter(k=>s.has(k)).map(k=>k[0]).join(''),mid=order.slice(7,12).filter(k=>s.has(k)).join(''),right=order.slice(12).filter(k=>s.has(k)).map(k=>k[1]).join('');return(s.has('#')?'#':'')+left+mid+(!mid&&right?'-':'')+right;}
const starter={'S':'is','T':'it','K':'can','P':'about','W':'with','H':'he','R':'are','A':'a','O':'oh','E':'he','U':'you','THE':'the','TPH':'in','TP':'if','SKP':'and','KWR':'I','KWRE':'yes','TPHO':'no','THA':'that','TH':'this','-F':'of','-T':'the'};
function plain(text){return typeof text==='string'&&text.length>0&&text.length<2000&&!/[{}]/.test(text);}
function validateSession(s){if(!s||typeof s.id!=='string'||!/^[\w-]{1,80}$/.test(s.id)||typeof s.title!=='string'||typeof s.text!=='string'||!Array.isArray(s.strokes)||s.text.length>700000||s.strokes.length>20000)throw Error('This is not a valid session backup.');if(!s.strokes.every(x=>x&&typeof x.outline==='string'&&typeof x.at==='string'))throw Error('Invalid stroke history.');return{id:s.id,title:s.title.slice(0,180),text:s.text,strokes:s.strokes,updated:typeof s.updated==='string'?s.updated:new Date().toISOString()};}
root.Steno={order,outline,starter,plain,validateSession};if(typeof module!=='undefined')module.exports=root.Steno;
})(globalThis);
