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
  var items=[['home',P+'/','Главная',path==='/'],['tours',P+'/routes/','Экскурсии',path.indexOf('/routes')===0],
    ['book','#booking','Бронь',false],['call','tel:+79892930093','Позвонить',false],['menu','#','Меню',false]];
  items.forEach(function(it){
    var a=document.createElement('a'); a.href=it[1];
    if(it[0]==='book'){a.className='rd-tab--book'; a.innerHTML='<span class="rd-ic">'+ic.book+'</span><b>'+it[2]+'</b>';}
    else {a.innerHTML=ic[it[0]]+'<span>'+it[2]+'</span>'; if(it[3]) a.className='is-active';}
    if(it[0]==='book') a.addEventListener('click',function(e){
      var b=document.querySelector('.booking, #booking, form[class*="booking"]');
      if(b){e.preventDefault(); b.scrollIntoView({behavior:'smooth'});} else {a.href=P+'/routes/';}
    });
    if(it[0]==='menu') a.addEventListener('click',function(e){e.preventDefault(); var bb=document.querySelector('.site-header__burger, .site-header__burger button'); if(bb) bb.click();});
    bar.appendChild(a);
  });
  document.body.appendChild(bar);
})();
