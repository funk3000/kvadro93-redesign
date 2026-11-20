(function(){
  var P='/kvadro93-redesign';
  // телефон-пилюля в шапке
  var w=document.querySelector('.site-header__wrapper'), burger=document.querySelector('.site-header__burger');
  if(w && !document.querySelector('.rd-phone') && !document.querySelector('.site-header__contacts a')){
    var a=document.createElement('a'); a.className='rd-phone'; a.href='tel:+79892930093'; a.textContent='+7 989 293-00-93';
    if(burger) w.insertBefore(a,burger); else w.appendChild(a);
  }
  // нижнее меню (мобильная версия)
  var ic={
    home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
    tours:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    book:'<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>',
    call:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>'
  };
  var bar=document.createElement('nav'); bar.className='rd-tabbar';
  var path=location.pathname.replace(P,'')||'/';
  ic.tg='<img src="/kvadro93-redesign/img/telegram.svg" alt="Telegram" class="rd-max-ic" width="24" height="24">';
  ic.max='<img src="/kvadro93-redesign/img/max.svg" alt="MAX" class="rd-max-ic" width="24" height="24">';
  ic.call2='<svg viewBox="0 0 24 24" fill="#fff"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1z"/></svg>';
  var items=[['tours',P+'/routes/','Экскурсии',path.indexOf('/routes')===0],['tg','https://t.me/Kvadro093','Telegram',false],
    ['book','tel:+79892930093','Позвонить',false],['max','https://max.ru/u/f9LHodD0cOKVnJrbNaiBYKaSkGXD50Hrnkpy2an6lYyEIKZ19aJoTVMYNNI','MAX',false],['menu','#','Меню',false]];
  items.forEach(function(it){
    var a=document.createElement('a'); a.href=it[1];
    if(it[0]==='tg'||it[0]==='max'){a.target='_blank';a.rel='nofollow noopener';}
    if(it[0]==='book'){a.className='rd-tab--book'; a.innerHTML='<span class="rd-ic">'+ic.call2+'</span><b>'+it[2]+'</b>';}
    else {a.innerHTML=ic[it[0]]+'<span>'+it[2]+'</span>'; if(it[3]) a.className='is-active';}
    if(it[0]==='menu') a.addEventListener('click',function(e){e.preventDefault(); var as=document.getElementById('aside'); var open=as&&(as.classList.contains('site-aside--active')); var bb=open?document.getElementById('burger-close'):document.getElementById('burger'); if(bb) bb.click(); else if(as) as.classList.toggle('site-aside--active');});
    bar.appendChild(a);
  });
  document.body.appendChild(bar);
})();
// слайдер: пересчёт ширины после загрузки/ресайза, чтобы не застревал между слайдами
(function(){
  function fix(){var el=document.querySelector('.main-slider');var s=el&&el.swiper;if(s){s.update();s.slideToLoop(s.realIndex,0,false);}}
  window.addEventListener('load',function(){setTimeout(fix,300)});
  var t;window.addEventListener('resize',function(){clearTimeout(t);t=setTimeout(fix,200)});
  document.addEventListener('visibilitychange',function(){if(!document.hidden)fix()});
})();
// r8: шапка прозрачная на баннере, тёмно-зелёная после прокрутки
(function(){
  var b=document.body, h=document.querySelector('.site-header');
  var hero=document.querySelector('.main-slider, .splash');
  if(!h||!hero) return;
  var top=hero.getBoundingClientRect().top+window.scrollY;
  if(top>140) return; // баннер не в самом верху — оставляем сплошную шапку
  b.classList.add('rd-overlay');
  function upd(){ b.classList.toggle('rd-scrolled', window.scrollY>40); }
  upd(); window.addEventListener('scroll',upd,{passive:true});
  var bg=document.querySelector('#burger, .site-header__burger');
  if(bg) bg.addEventListener('click',function(){ setTimeout(function(){ b.classList.toggle('rd-menu-open', !!document.querySelector('.site-header--open, .menu--open, .site-header__menu--open, body.menu-open, html.menu-open')); },50); });
})();
// r10: подпись над баннером главной (как на видео)
(function(){
  var s=document.querySelector('.main-slider'), h=document.querySelector('.h1-nvisible');
  if(!s||!h||s.querySelector('.rd-caption')) return;
  var c=document.createElement('div'); c.className='rd-caption'; c.textContent=h.textContent.trim(); s.appendChild(c);
})();
// r11: мобильная шапка прячется при прокрутке вниз и появляется при прокрутке вверх
(function(){
  var last=window.scrollY, b=document.body;
  window.addEventListener('scroll',function(){
    var y=window.scrollY;
    if(window.innerWidth>900||document.querySelector('.site-aside.active,.site-aside.is-open')){last=y;return;}
    if(y>120&&y>last+6) b.classList.add('rd-hide-hdr'); else if(y<last-6||y<120) b.classList.remove('rd-hide-hdr');
    last=y;
  },{passive:true});
})();
// r15: на превью (github.io) капча Google не работает из-за домена ключа — скрываем, на kvadro93.ru она остаётся
if(/github\.io$/.test(location.hostname)){var st=document.createElement('style');st.textContent='.g-recaptcha{display:none!important}';document.head.appendChild(st);}
// r20: длинные тексты — панель «как на главной» (.zip-text) с «Читать далее... / Свернуть»
(function(){
var TXT=/^(H2|H3|H4|H5|P|UL|BLOCKQUOTE|TABLE)$/;
function isText(el){
  if(el.tagName==='OL') return !el.classList.contains('breadcrumb');
  if(!TXT.test(el.tagName)) return false;
  if(el.querySelector('img,iframe,form,video')) return false;
  return true;
}
function bind(z){
  var old=z.querySelector(':scope>.zip-text__more'); if(old) old.remove();
  if(z.scrollHeight<460){z.classList.remove('zip-text--closed');return;}
  z.classList.add('zip-text--closed');
  var b=document.createElement('button');b.type='button';b.className='zip-text__more';b.textContent='Читать далее...';
  z.appendChild(b);
  b.addEventListener('click',function(){
    var c=z.classList.toggle('zip-text--closed');
    b.textContent=c?'Читать далее...':'Свернуть';
    if(c){var y=z.getBoundingClientRect().top+window.scrollY-90; window.scrollTo({top:y,behavior:'smooth'});}
  });
}
function run(){
  document.querySelectorAll('.page.page--default').forEach(function(host){
    if(host.querySelector('.zip-text')) return;
    var runs=[],cur=[];
    [].slice.call(host.children).forEach(function(el){
      var empty=el.tagName==='P'&&!el.textContent.trim()&&!el.querySelector('*');
      if(empty){ if(cur.length) cur.push(el); return; }
      var promo=el.tagName==='H2'&&/лояльност/i.test(el.textContent);
      if(promo){ if(cur.length) runs.push(cur); cur=[]; host.dataset.rdPromo=1; return; }
      if(isText(el)&&!(cur.length===0&&el.previousElementSibling&&/лояльност/i.test((el.previousElementSibling.textContent||''))&&el.previousElementSibling.tagName==='H2')) cur.push(el); else { if(cur.length) runs.push(cur); cur=[]; }
    });
    if(cur.length) runs.push(cur);
    runs.forEach(function(r){
      while(r.length&&r[r.length-1].tagName==='P'&&!r[r.length-1].textContent.trim()) r.pop();
      if(r.length<3) return;
      var z=document.createElement('div'); z.className='wp-block-kvadro93-zip-text zip-text rd-zt';
      r[0].parentNode.insertBefore(z,r[0]);
      r.forEach(function(el){z.appendChild(el)});
      var hs=z.querySelectorAll(':scope>h2');
      if(r[0].tagName!=='H2') z.classList.add('rd-zt--noh');
      for(var i=(r[0].tagName==='H2'?1:0);i<hs.length;i++) hs[i].classList.add('rd-sub');
    });
  });
  document.querySelectorAll('.zip-text').forEach(bind);
}
if(document.readyState==='complete') run(); else window.addEventListener('load',run);
})();
// r19: рубрики — карточки мозаикой как на главной (кроме ленты новостей/блога)
(function(){
  if(/\/(news|blog)\//.test(location.pathname)) return;
  if(document.querySelector('.pages-slider__grid')) return; // главная: список услуг остаётся компактным, как на видео
  document.querySelectorAll('.page__grid.grid').forEach(function(g){
    var n=g.querySelectorAll(':scope>.card--news').length;
    if(n<2||n>16) return;
    g.classList.add('rd-mosaic','rd-mosaic--'+Math.min(n,5));
    if(n>5){var rem=(n-5)%4; if(rem){var cs=g.querySelectorAll(':scope>.card--news'); cs[cs.length-1].classList.add('rd-last-'+(5-rem));}}
  });
})();

// r20: без WhatsApp — в меню вместо него MAX
(function(){
  document.querySelectorAll('.site-aside__whatsapp').forEach(function(d){
    d.className='site-aside__max';
    d.innerHTML='<a href="https://max.ru/u/f9LHodD0cOKVnJrbNaiBYKaSkGXD50Hrnkpy2an6lYyEIKZ19aJoTVMYNNI" target="_blank" rel="nofollow"><img src="/kvadro93-redesign/img/max.svg" alt="MAX" class="rd-max-ic" width="24" height="24"><span>Написать в MAX</span></a>';
  });
  document.querySelectorAll('.site-aside__telegram a').forEach(function(a){a.href='https://t.me/Kvadro093';a.querySelector('span')&&(a.querySelector('span').textContent='Написать в Telegram');});
  document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]').forEach(function(a){
    if(a.closest('.zip-text,.page--default>p,.page--default li')) {a.href='https://t.me/Kvadro093';a.textContent='Telegram';}
    else a.style.display='none';
  });
})();

// r23: уточнение в скобках в названии карточки — с новой строки ("Маршрут 1" / "(40-60 минут)")
(function(){
  document.querySelectorAll('.card__title span, .card__title, .pages-slider__grid a span, .card [class*="title"]').forEach(function(el){
    if(el.children.length) return;
    var m=el.textContent.match(/^\s*([^()]*\S)\s+(\([^()]+\))\s*$/);
    if(!m) return;
    el.textContent=m[1];
    var s=document.createElement('span');s.className='rd-paren';s.textContent=m[2];
    el.appendChild(document.createElement('br'));el.appendChild(s);
  });
})();

/* ===== r24 ===== */
(function(){
  var BASE='/kvadro93-redesign/';
  function ready(f){document.readyState!=='loading'?f():document.addEventListener('DOMContentLoaded',f)}
  function src(img){return img.getAttribute('data-normal')||img.getAttribute('src')}
  ready(function(){
    var page=document.querySelector('.page.page--default')||document.querySelector('.page');
    /* битая картинка «Защитная экипировка» (на kvadro93.ru файл пустой) */
    document.querySelectorAll('img[data-normal*="6f4ca501a550869b"]').forEach(function(i){var u='https://kvadro93.ru/_arch/ecfa4767bb9d.jpg';i.setAttribute('data-normal',u);i.src=u});

    /* слайдеры -> мозаика; пустые слайдеры убираем */
    var shows=[].slice.call(document.querySelectorAll('.page .wp-block-kvadro93-slideshow'));
    var groups=[],cur=null,prev=null;
    shows.forEach(function(s){
      var imgs=[].slice.call(s.querySelectorAll('img'));
      if(!imgs.length){s.remove();return}
      var el=s.previousElementSibling;
      if(cur&&prev&&el===prev){cur.imgs=cur.imgs.concat(imgs);cur.nodes.push(s)}else{cur={imgs:imgs.slice(),nodes:[s]};groups.push(cur)}
      prev=s;
    });
    groups.forEach(function(g){
      var n=Math.min(g.imgs.length,9),gal=document.createElement('div');
      gal.className='rd-gal rd-gal--'+(n>4?'n':n);
      g.imgs.slice(0,n).forEach(function(i){var a=document.createElement('a');a.href=src(i);a.target='_blank';var im=document.createElement('img');im.loading='lazy';im.src=src(i);im.alt='';a.appendChild(im);gal.appendChild(a)});
      g.nodes[0].parentNode.insertBefore(gal,g.nodes[0]);g.nodes.forEach(function(x){x.remove()});
    });

    /* программа лояльности: QR справа */
    document.querySelectorAll('img[alt*="690c8eaa110ec"]').forEach(function(qr){
      var host=qr.parentElement; var start=qr;
      while(start.previousElementSibling){start=start.previousElementSibling;if(start.tagName==='H2'&&/лояльности/i.test(start.textContent))break}
      if(!(start.tagName==='H2'))return;
      var box=document.createElement('div');box.className='rd-loyal';
      start.parentNode.insertBefore(box,start);
      var n=start;while(n){var nx=n.nextElementSibling;box.appendChild(n);if(n===qr)break;n=nx}
      qr.classList.add('rd-qr');qr.src=src(qr);
      
      cap.style.gridRow='7';
    });

    /* Rutube-плейлисты карточками */
    var pls=[].slice.call(document.querySelectorAll('.rutube-playlist'));
    if(pls.length){
      fetch(BASE+'js/rutube.json?v=r24').then(function(r){return r.json()}).then(function(db){
        pls.forEach(function(p){
          var l=p.querySelector('.rutube-playlist__link'),v=l&&l.value,m=v&&v.match(/plst\/(\d+)/);
          var list=m&&db[m[1]];
          if(!list||!list.length){p.remove();return}
          var w=document.createElement('div');w.className='rd-rt';var g=document.createElement('div');g.className='rd-rt__grid';
          list.slice(0,8).forEach(function(x){
            var a=document.createElement('a');a.className='rd-rt__card';a.href='https://rutube.ru/video/'+x.id+'/';a.target='_blank';a.rel='noopener';
            var d=x.d?Math.floor(x.d/60)+':'+('0'+x.d%60).slice(-2):'';
            a.innerHTML='<div class="rd-rt__thumb"><img loading="lazy" src="'+x.img+'" alt="">'+(d?'<span class="rd-rt__dur">'+d+'</span>':'')+'</div><div class="rd-rt__t"></div>';
            a.querySelector('.rd-rt__t').textContent=x.t;g.appendChild(a);
          });
          w.appendChild(g);
          if(list.length>8){var mo=document.createElement('a');mo.className='rd-rt__more';mo.href=v;mo.target='_blank';mo.textContent='Все видео ('+list.length+') на Rutube →';w.appendChild(mo)}
          p.parentNode.replaceChild(w,p);
        });
      }).catch(function(){});
    }

    /* YouTube: превью вместо пустого места */
    document.querySelectorAll('.wp-block-embed-youtube').forEach(function(f){
      var t=f.textContent.trim(),m=t.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);if(!m)return;
      var id=m[1],d=document.createElement('div');d.className='rd-yt';
      d.innerHTML='<img src="https://img.youtube.com/vi/'+id+'/hqdefault.jpg" alt="Видео">';
      d.addEventListener('click',function(){d.innerHTML='<iframe src="https://www.youtube.com/embed/'+id+'?autoplay=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>'});
      f.parentNode.replaceChild(d,f);
    });
  });
})();
;(function(){if(/\/service\//.test(location.pathname))document.documentElement.classList.add("rd-service");document.addEventListener("DOMContentLoaded",function(){if(/\/service\//.test(location.pathname))document.body.classList.add("rd-service")})})();
