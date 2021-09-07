/* getting selectors */
let $isAnimatedEl = $('.hero-text');
const keyItems = document.querySelectorAll('.features-item');
const dexilionFeatures = document.querySelector('.dexilion-features');
const progressItem = document.querySelectorAll('.progress-item');
const footerPromo = document.querySelector('.footer-promo');
const footerInformationItem = document.querySelectorAll(
  '.footer-information-item'
);
/* getting selectors */

/* adding hero section animations */
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

/* adding hero section animations end*/

const animationEl = (index) => {
  setTimeout(
    () =>
      document
        .querySelector(`.dexilion-how.step-${index} .step-image-wrapper`)
        .classList.add('active'),
    0
  );

  setTimeout(
    () =>
      document
        .querySelector(`.dexilion-how.step-${index} .step-text-wrapper`)
        .classList.add('active'),
    100
  );
};

const removeAllStepsAnimation = () => {
  document
    .querySelectorAll('.dexilion-how .step-image-wrapper')
    .forEach((item) => item.classList.remove('active'));
  document
    .querySelectorAll('.dexilion-how .step-text-wrapper')
    .forEach((item) => item.classList.remove('active'));
};
let lastScrollTop = 0;
let scrollToggle = false;
new fullpage('.fullpage-wrapper', {
  licenseKey: 'YOUR_KEY_HERE',
  scrollOverflow: true,
  scrollingSpeed: 1200,
  normalScrollElements: '#dexilion-features',
  afterLoad: function (origin, destination, direction) {
    if (destination.index === 0) {
      heroAnimations();
    }
    if (destination.index === 2) {
      itemAddAnimate(keyItems);
      scrollToggle = true;
    }
    if (scrollToggle === true) {
      $(window).bind('mousewheel', function (event) {
        if (event.originalEvent.wheelDelta < 0) {
          console.log('scrolldown');
          itemAddMoreAnimate(keyItems);
        }
      });
    }
    if (destination.index === 3) {
      animationEl(1);
    }
    if (destination.index === 4) {
      animationEl(2);
    }
    if (destination.index === 5) {
      animationEl(3);
    }
    if (destination.index === 6) {
      animationEl(4);
    } else {
      removeAllStepsAnimation();
    }
    if (destination.index === 7) {
      showProgressItemsEven();
    } else {
      deleteItemAnimate(progressItem);
    }
    if (destination.index === 8) {
      addFooterAnimate();
    } else {
      footerPromo.classList.remove('active');
      deleteItemAnimate(footerInformationItem);
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

/* key-features item  animations */

function itemAddAnimate(items) {
  setTimeout(() => {
    items[0].classList.add('active');
  }, 100);
  setTimeout(() => {
    items[1].classList.add('active');
  }, 200);
  setTimeout(() => {
    items[2].classList.add('active');
  }, 300);
}

function itemAddMoreAnimate(items) {
  setTimeout(() => items[3].classList.add('active'), 100);
  setTimeout(() => items[4].classList.add('active'), 200);
  setTimeout(() => items[5].classList.add('active'), 300);
}

function deleteItemAnimate(items) {
  items.forEach((item) => item.classList.remove('active'));
}

/* key-features item  animations */

/* roadmap animation */

function showProgressItemsEven() {
  setTimeout(() => progressItem[0].classList.add('active'), 500);
  setTimeout(() => progressItem[5].classList.add('active'), 600);
  setTimeout(() => progressItem[1].classList.add('active'), 700);
  setTimeout(() => progressItem[6].classList.add('active'), 800);
  setTimeout(() => progressItem[2].classList.add('active'), 900);
  setTimeout(() => progressItem[7].classList.add('active'), 1000);
  setTimeout(() => progressItem[3].classList.add('active'), 1100);
  setTimeout(() => progressItem[8].classList.add('active'), 1200);
  setTimeout(() => progressItem[4].classList.add('active'), 1300);
}
/* roadmap animation */

/* footer animation */
function addFooterAnimate() {
  setTimeout(() => footerPromo.classList.add('active'),0);
  setTimeout(() => footerInformationItem[0].classList.add('active'), 200);
  setTimeout(() => footerInformationItem[1].classList.add('active'), 300);
  setTimeout(() => footerInformationItem[2].classList.add('active'), 400);
  setTimeout(() => footerInformationItem[3].classList.add('active'), 500);
}
/* footer animation end */
