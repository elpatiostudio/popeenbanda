 // Vanilla JS .splash auto-height 
 var splashElement = document.getElementsByClassName('splash')[0]; 
 function setSplashHeight() { splashElement.style.minHeight = window.innerHeight+"px"; }
  function documentLoaded() { window.addEventListener('resize', setSplashHeight);
   window.dispatchEvent(new Event('resize')); }
    document.addEventListener('DOMContentLoaded', documentLoaded);