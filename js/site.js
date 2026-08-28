// 点击阿语文本发音
let _cur = null;
function playAudio(file){
  if(!file) return;
  const url = file;
  if(_cur){ try{_cur.pause();}catch(e){} }
  const el = event && event.currentTarget;
  if(el){ document.querySelectorAll('.ar.playing').forEach(n=>n.classList.remove('playing')); el.classList.add('playing'); }
  const a = new Audio(url);
  a.onended = ()=>{ if(el) el.classList.remove('playing'); };
  a.onerror = ()=>{ if(el) el.classList.remove('playing'); alert('音频未找到：'+url); };
  _cur = a;
  a.play().catch(()=>{});
}
// 滚动进度条
window.addEventListener('scroll',()=>{
  const h = document.documentElement;
  const sc = h.scrollTop/(h.scrollHeight-h.clientHeight)*100;
  document.getElementById('progress') && (document.getElementById('progress').style.width = sc+'%');
});
// 导航栏滚动态（若需要）
