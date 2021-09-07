$(document).ready(function () {
  jQuery.fn.extend({
    onAppearanceAddClass: function (class_to_add) {
      var $window = $(window),
        window_height = $window.height(),
        array_of_$elements = [];
      this.each(function (i, el) {
        array_of_$elements.push($(el));
      });
      scrollHandler();
      if (array_of_$elements.length) {
        $window
          .on('resize', resizeHandler)
          .on('resize', scrollHandler)
          .on('scroll', scrollHandler);
      }

      function resizeHandler() {
        window_height = $window.height();
      }

      function watchProcessedElements(array_of_indexes) {
        var l, i;
        for (l = array_of_indexes.length, i = l - 1; i > -1; --i) {
          array_of_$elements.splice(array_of_indexes[i], 1);
        }
        if (!array_of_$elements.length) {
          $window
            .off('resize', resizeHandler)
            .off('scroll', scrollHandler)
            .off('resize', scrollHandler);
        }
      }

      function scrollHandler() {
        var i,
          l,
          processed = [];
        for (l = array_of_$elements.length, i = 0; i < l; ++i) {
          if (
            $window.scrollTop() + window_height >
            array_of_$elements[i].offset().top
          ) {
            array_of_$elements[i].addClass(class_to_add);
            processed.push(i);
          }
        }
        if (processed.length) {
          watchProcessedElements(processed);
        }
      }

      return this;
    },
  });

  /* getting selectors */
  let $isAnimatedEl = $('.hero-text');
  const keyItems = $('.features-item');
  const dexilionFeatures = document.querySelector('.dexilion-features');
  const progressItem = document.querySelectorAll('.progress-item');
  const footerPromo = document.querySelector('.footer-promo');
  const footerInformationItem = document.querySelectorAll(
    '.footer-information-item'
  );

  const activeSection = document.querySelectorAll('.section');
  /* getting selectors */

//   /* adding hero section animations */
//   const heroAnimations = () => {
//     setTimeout(() => {
//       document.querySelector('.hero-img-round').classList.add('active');
//       document.querySelector('.hero-img-stars').classList.add('active');
//     }, 2000);
//     setTimeout(
//       () => document.querySelector('.hero-text').classList.add('show'),
//       2500
//     );
//   };

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

  var $isAnimatedFirst = $('.first .is-animated'),
    $isAnimatedSecond = $('.second .is-animated'),
    $isAnimatedThird = $('.third .is-animated'),
    $isAnimatedFourth = $('.fourth .is-animated'),
    $isAnimatedFifth = $('.fifth .is-animated'),
    $isAnimatedSixth = $('.sixth .is-animated'),
    $isAnimatedSeventh = $('.seventh .is-animated'),
    $heroText = $('.hero-text.is-animated');
    $heroRound = $('.hero-img-round');

  new fullpage('.fullpage-wrapper', {
    licenseKey: 'YOUR_KEY_HERE',
    scrollOverflow: true,
    scrollingSpeed: 1000,
    normalScrollElements: '#dexilion-features',
    // afterLoad: function (origin, destination, direction) {
    //   keyItems.onAppearanceAddClass('active');
    //   if (destination.index === 0) {
    //     heroAnimations();
    //   }
    //   if (destination.index === 2) {

    //   }
    //   if (destination.index === 3) {
    //     animationEl(1);
    //   }
    //   if (destination.index === 4) {
    //     animationEl(2);
    //   }
    //   if (destination.index === 5) {
    //     animationEl(3);
    //   }
    //   if (destination.index === 6) {
    //     animationEl(4);
    //   } else {

    //   }
    //   if (destination.index === 7) {
    //     showProgressItemsEven();
    //   } else {
    //     deleteItemAnimate(progressItem);
    //   }
    //   if (destination.index === 8) {
    //     addFooterAnimate();
    //   } else {
    //     footerPromo.classList.remove('active');
    //     deleteItemAnimate(footerInformationItem);
    //   }
    // },
    afterLoad: function (index, nextIndex, direction) {
      console.log(nextIndex.index);

      if (nextIndex.index === 0) {
          $heroText.addClass('animate__animated animate__fadeInLeft');
          $heroText.eq(0).css('animation-delay', '2s');
        //  setTimeout(()=> $heroRound.addClass('active'),500)
        $isAnimatedFirst.addClass('animate__animated showOpacity');
      }
      else {
        $heroText.removeClass('animate__animated animate__fadeInLeft');
      }
      // first animation
      if (nextIndex.index == 1) {
        $isAnimatedSecond.addClass('animate__animated animate__bounce');
        $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
        $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
        $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
      } else {
        $isAnimatedSecond.removeClass('animate__animated animate__bounce');
      }
      // second animation
      if ((index == 1 || index == 2) && nextIndex == 3) {
        $isAnimatedThird
          .eq(0)
          .addClass('animated fadeInRightBig')
          .css('animation-delay', '.3s');
        $isAnimatedThird
          .eq(1)
          .addClass('animated fadeInLeftBig')
          .css('animation-delay', '.6s');
        $isAnimatedThirdSingle
          .addClass('animated bounceInDown')
          .css('animation-delay', '1.2s');
      }
      // third animation
      //   else if ((index == 1 || index == 2 || index == 3) && nextIndex == 4) {
      //     $isAnimatedFourth
      //       .addClass('animated zoomIn')
      //       .css('animation-delay', '.6s');
      //     $isAnimatedFourthSingle
      //       .addClass('animated lightSpeedIn')
      //       .css('animation-delay', '1.2s');
      //     $isAnimatedFourthSingle.one(
      //       'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      //       function () {
      //         $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
      //       }
      //     );
      //   }
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
    setTimeout(() => footerPromo.classList.add('active'), 0);
    setTimeout(() => footerInformationItem[0].classList.add('active'), 200);
    setTimeout(() => footerInformationItem[1].classList.add('active'), 300);
    setTimeout(() => footerInformationItem[2].classList.add('active'), 400);
    setTimeout(() => footerInformationItem[3].classList.add('active'), 500);
  }

  /* footer animation end */
});
