
window.typeWriter=function(el,text,speed=70){
  let i=0; el.textContent='';
  (function t(){
    if(i<text.length){
      el.textContent+=text.charAt(i++);
      setTimeout(t,speed);
    }
  })();
}
