(function(){
  var KEY='tl-cookie-consent';
  function ready(fn){
    if(document.readyState!=='loading'){fn();}
    else{document.addEventListener('DOMContentLoaded',fn);}
  }
  ready(function(){
    var banner=document.getElementById('tl-cookie');
    if(!banner) return;
    var stored=null;
    try{stored=localStorage.getItem(KEY);}catch(e){}
    if(stored){
      banner.remove();
      return;
    }
    requestAnimationFrame(function(){banner.classList.add('tl-cookie-show');});
    function hide(value){
      try{localStorage.setItem(KEY,value);}catch(e){}
      banner.classList.remove('tl-cookie-show');
      setTimeout(function(){banner.remove();},450);
    }
    var accept=document.getElementById('tl-cookie-accept');
    var reject=document.getElementById('tl-cookie-reject');
    if(accept) accept.addEventListener('click',function(){hide('accepted');});
    if(reject) reject.addEventListener('click',function(){hide('rejected');});
  });
})();
