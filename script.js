const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const toggle = document.getElementById('mobileToggle');
const panel = document.getElementById('mobilePanel');
if(toggle && panel){
  toggle.addEventListener('click', ()=> panel.classList.toggle('open'));
  panel.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> panel.classList.remove('open')));
}

const siteHeader = document.querySelector('header');
if(siteHeader){
  const setHeaderState = ()=>{
    if(window.scrollY > 40){ siteHeader.classList.add('scrolled'); }
    else{ siteHeader.classList.remove('scrolled'); }
  };
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive:true });
}

// Initial opening curtain animation cleanup
const introEl = document.getElementById('elyfoIntro');
if(introEl){
  setTimeout(() => {
    introEl.classList.add('hidden');
  }, 1900);
}

