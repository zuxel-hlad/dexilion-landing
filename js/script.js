// new WOW().init();

let index = 0;

const sections = document.querySelectorAll('section');
let pageHeight = window.innerHeight;

let isAnimating = false;

document.body.style.transform = 'translate3d(0px,0px,0px)';
document.addEventListener('scroll', function (e) {
  document.body.scrollTop = 0;
});
document.addEventListener('wheel', wheelListener);

function positivHeight() {
  index++;
  return parseInt(getComputedStyle(sections[index]).height);
}

function negativeHeight() {
  index--;
  return parseInt(getComputedStyle(sections[index]).height);
}

function wheelListener(e) {
  if (e.deltaY > 0) {
    scrollPage(-pageHeight);
    console.log('scroll down');
  } else {
    scrollPage(+pageHeight);
    console.log('scroll top');
  }
}

function scrollPage(scrollSize) {
  if (isAnimating) {
    return;
  }
  isAnimating = true;
  let yPos = getNewYPos(scrollSize);
  document.body.style.transform = 'translate3d(0px,' + yPos + ',0px)';
}

function getNewYPos(add) {
  let oldYPos = document.body.style.transform.split(',')[1];
  oldYPos = parseInt(oldYPos.replace(/px/, ''));

  let newYPos = oldYPos + add;
  if (newYPos > 0) {
    isAnimating = false;
  }
  return Math.min(0, newYPos) + 'px';
}

document.body.addEventListener('transitionend', function () {
  setTimeout(function () {
    isAnimating = false;
  }, 500);
  document.addEventListener('wheel', wheelListener);
});
