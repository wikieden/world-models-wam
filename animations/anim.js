const NS='http://www.w3.org/2000/svg';
const CAPTURE=location.search.includes('capture');
if(CAPTURE)document.documentElement.classList.add('cap');
function el(tag,attrs,parent){const e=document.createElementNS(NS,tag);for(const k in attrs)e.setAttribute(k,attrs[k]);if(parent)parent.appendChild(e);return e}
function txt(s,attrs,parent){const e=el('text',attrs,parent);e.textContent=s;return e}
function clear(g){while(g.firstChild)g.removeChild(g.firstChild)}
let _s=1;function seed(s){_s=(s>>>0)||1}
function rnd(){_s=_s+0x6D2B79F5|0;let t=Math.imul(_s^_s>>>15,1|_s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}
function gauss(){let u=0;while(!u)u=rnd();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*rnd())}
function $(id){return document.getElementById(id)}
function clamp(v,a,b){return Math.max(a,Math.min(b,v))}
function setupPlayer(A,ms){
  const play=$('play'),step=$('step'),reset=$('reset');let t=null;
  const stop=()=>{clearInterval(t);t=null;play.textContent='▶ 播放'};
  play.onclick=()=>{if(t){stop();return}play.textContent='❚❚ 暂停';t=setInterval(()=>{if(!A.next())stop()},ms)};
  step.onclick=()=>{stop();A.next()};
  reset.onclick=()=>{stop();A.reset(Date.now())};
  A.stop=stop;A.reset(CAPTURE?A.captureSeed||7:Date.now());window.ANIM=A;
  if(!CAPTURE&&!location.search.includes('manual')){ // 打开即自动播放，播完停 3 秒再从头循环；点任意按钮后改为手动
    let auto=null;
    const tick=()=>{if(!A.next()){clearInterval(auto);auto=setTimeout(()=>{A.reset(Date.now());auto=setInterval(tick,ms)},3000)}};
    auto=setInterval(tick,ms);
    const off=()=>{clearInterval(auto);clearTimeout(auto);auto=null};
    [play,step,reset].forEach(b=>b.addEventListener('click',off,{capture:true}));
  }
}
// —— 第 2 章起的通用"逐步出现"写法 ——
// P(step, until)：返回一个 <g>，第 step 步出现，到第 until 步消失（不填就一直留着）
// runSteps(CAP, ms)：CAP[k] 是第 k 步的说明；第 0 步只显示 step=0 的部分
const PARTS=[];
function P(step,until){const g=el('g',{opacity:0},$('sv'));PARTS.push({g,step,until});return g}
function box(g,x,y,w,h,label,col,o){o=o||{};el('rect',{x,y,width:w,height:h,rx:o.rx||8,fill:o.fill||'var(--bg)',stroke:col||'var(--line)','stroke-width':o.sw||1.5,'stroke-dasharray':o.dash||'none',opacity:o.op||1},g);
  if(label!==undefined&&label!==''){String(label).split('\n').forEach((s,i,a)=>txt(s,{x:x+w/2,y:y+h/2+5+(i-(a.length-1)/2)*16,'text-anchor':'middle',style:(o.fs?'font-size:'+o.fs+'px;':'')+(o.tc?'fill:'+o.tc:'')},g))}}
function arrow(g,x1,y1,x2,y2,col,o){o=o||{};const a=Math.atan2(y2-y1,x2-x1),s=7;
  el('path',{d:`M${x1} ${y1} L${x2} ${y2} M${x2-s*Math.cos(a-0.5)} ${y2-s*Math.sin(a-0.5)} L${x2} ${y2} L${x2-s*Math.cos(a+0.5)} ${y2-s*Math.sin(a+0.5)}`,stroke:col||'var(--muted)','stroke-width':o.w||2,fill:'none','stroke-dasharray':o.dash||'none'},g)}
function label(g,s,x,y,o){o=o||{};return txt(s,{x,y,'text-anchor':o.a||'start',class:o.m?'m':'',style:(o.fs?'font-size:'+o.fs+'px;':'')+(o.b?'font-weight:500;':'')+(o.c?'fill:'+o.c:'')},g)}
function runSteps(CAP,ms){let k;const show=()=>{PARTS.forEach(p=>p.g.setAttribute('opacity',p.step<=k&&(p.until==null||k<p.until)?1:0));$('cap').innerHTML=CAP[k]};
  setupPlayer({captureSeed:7,reset(){k=0;show()},next(){if(k>=CAP.length-1)return false;k++;show();return true}},ms||1800)}
