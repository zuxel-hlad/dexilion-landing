let $isAnimatedEl = $('.hero-text');

const heroAnimations = () => {
  setTimeout(() => {
    document.querySelector('.hero-img-round').classList.add('active');
    document.querySelector('.hero-img-stars').classList.add('active');
  }, 2000);
  setTimeout(
    () => document.querySelector('.hero-text').classList.add('show'),
    2500
  );
};

new fullpage('.fullpage-wrapper', {
  licenseKey: 'YOUR_KEY_HERE',
  scrollOverflow: true,
  scrollingSpeed: 1200,
  normalScrollElements: '#dexilion-features',
  afterLoad: function (origin, destination, direction) {
    if (destination.index === 0) {
      heroAnimations();
    }
  },
});

/* title numbers animation */

const first = document.querySelector('.first .hide-block');
const second = document.querySelector('.second .hide-block');

function numbersAnimation() {
  first.classList.add('active');
  second.classList.add('active');
}

first.addEventListener('animationend', numbersAnimation);
second.addEventListener('animationend', numbersAnimation);
/* title numbers animation */