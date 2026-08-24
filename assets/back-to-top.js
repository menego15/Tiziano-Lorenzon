(function(){
  var btn = document.getElementById('tl-top-btn');
  if(!btn) return;

  function toggle(){
    if(window.scrollY > 400){
      btn.classList.add('tl-top-btn-show');
    } else {
      btn.classList.remove('tl-top-btn-show');
    }
  }

  window.addEventListener('scroll', toggle, {passive:true});
  toggle();

  btn.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo({top:0, behavior:'smooth'});
  });
})();
