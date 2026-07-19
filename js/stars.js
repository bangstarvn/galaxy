const c=document.createElement('canvas');
c.id='stars';document.body.prepend(c);
const x=c.getContext('2d');let w,h,s=[];
function rs(){w=c.width=innerWidth;h=c.height=innerHeight;s=[...Array(500)].map(()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*2+0.2,v:Math.random()*0.3+0.05}))}
onresize=rs;rs();
(function a(){x.clearRect(0,0,w,h);x.fillStyle='#fff';
for(const i of s){i.y+=i.v;if(i.y>h)i.y=0;x.beginPath();x.arc(i.x,i.y,i.r,0,7);x.fill();}
requestAnimationFrame(a)})();