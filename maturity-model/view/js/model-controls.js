document.addEventListener('DOMContentLoaded',function(){
 const tabs=document.querySelectorAll('.tabs > ul > li[id^="tab"]');
 function showTab(id){tabs.forEach(t=>t.classList.toggle('current',t.id===id));document.querySelectorAll('.tab-content').forEach(p=>{p.style.display=p.id===id+'-content'?'block':'none';});}
 tabs.forEach(t=>{t.setAttribute('role','button');t.tabIndex=0;t.addEventListener('click',()=>showTab(t.id));t.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showTab(t.id);}});});
 if(tabs.length)showTab(tabs[0].id);
 document.querySelectorAll('.toggle-wrp > h2, .toggle-wrp > h3, .toggle-wrp > h4').forEach(h=>{const p=h.parentElement.querySelector('.toggle-content');if(!p)return;h.style.cursor='pointer';h.setAttribute('role','button');h.setAttribute('tabindex','0');h.setAttribute('aria-expanded','false');p.style.display='none';const act=()=>{const open=p.style.display==='none';p.style.display=open?'block':'none';h.setAttribute('aria-expanded',String(open));};h.addEventListener('click',act);h.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();act();}});});
});