let $isAnimatedEl = $('.hero-text');

new fullpage('.fullpage-wrapper', {
  licenseKey: 'YOUR_KEY_HERE',
  scrollOverflow: true,
  scrollingSpeed: 1200,
  css3: true,
  easingcss3: 'ease-out',
  normalScrollElements: '#dexilion-features',
});

const round = document.querySelector('.hero-img-round');
const stars = document.querySelector('.hero-img-stars');
setTimeout(() => round.classList.add('active'), 2000);
setTimeout(() => stars.classList.add('active'), 1850);
