
window.showModernLoader=function(){
 const d=document.createElement('div');
 d.className='loader-modern';
 d.innerHTML='<div class="spinner"></div>';
 document.body.appendChild(d);
 window.hideModernLoader=()=>d.remove();
}
