function b64(s){try{return decodeURIComponent(escape(atob(s)))}catch(e){return atob(s)}}
const p=new URLSearchParams(location.search);
const img=p.get('id');const txt=p.get('texts');const music=p.get('music');
if(img)photo.src=b64(img);
message.textContent=txt?b64(txt):'Galaxy Love';
if(music)bgm.src=music;
setTimeout(()=>{loader.hidden=true;app.hidden=false;},800);
