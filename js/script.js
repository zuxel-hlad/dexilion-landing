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
    if (destination.index === 1) {
      setTimeout(() => {
        document.querySelector('.first').classList.add('active');
      });
    }
  },
});

const el = document.querySelector('.first');

function showMessage() {
  console.log('animation end');
  el.classList.add()
}

el.addEventListener('animationend', showMessage);
