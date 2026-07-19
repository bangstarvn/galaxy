
window.setupMusic=function(audio){
 const wrap=document.createElement('div');
 wrap.className='music-player';
 wrap.innerHTML='<button id="pp">⏯</button> <input id="vol" type="range" min="0" max="1" step="0.01" value="0.6">';
 document.body.appendChild(wrap);
 audio.volume=.6;
 pp.onclick=()=>audio.paused?audio.play():audio.pause();
 vol.oninput=e=>audio.volume=e.target.value;
}
