(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var burger = document.querySelector('.nav-burger');

  if (header && burger) {
    burger.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  if (header && header.classList.contains('site-header--overlay')) {
    var onScroll = function () {
      header.classList.toggle('is-solid', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  var video = document.getElementById('hero-video');
  if (video) {
    var START = 12;
    var startAt = function () { video.currentTime = START; };
    video.addEventListener('loadedmetadata', startAt);
    if (video.readyState >= 1) startAt();
    video.addEventListener('timeupdate', function () {
      if (video.duration && video.currentTime >= video.duration - 0.15) {
        video.currentTime = START;
      }
    });
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
    }
  }
})();
