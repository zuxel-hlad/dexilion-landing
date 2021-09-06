/* getting selectors */
let $isAnimatedEl = $('.hero-text');
const keyItems = document.querySelectorAll('.features-item');
const dexilionFeatures = document.querySelector('.dexilion-features');
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
      showProgressItems();
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
const progressItem = document.querySelectorAll('.progress-item');
const evenIndex = [];
const oddIndex = [];

progressItem.forEach((item, index) => {
  if (index % 2 === 0) {
    evenIndex.push(index);
  } else {
    oddIndex.push(index);
  }
});

function showProgressItems() {
  evenIndex.forEach((item) => {
    progressItem[item].classList.add('active');
  });
  oddIndex.forEach((item) => {
    progressItem[item].classList.add('active');
  });
}
/* roadmap animation */
