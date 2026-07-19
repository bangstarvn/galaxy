setInterval(()=>{
const m=document.createElement('div');
m.className='meteor';
m.style.top=Math.random()*40+'vh';
document.body.appendChild(m);
setTimeout(()=>m.remove(),1500);
},2500);