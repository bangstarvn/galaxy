
setInterval(()=>{
  const h=document.createElement('div');
  h.className='heart';
  h.textContent='❤';
  h.style.left=Math.random()*100+'vw';
  h.style.fontSize=(18+Math.random()*24)+'px';
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),7000);
},400);
