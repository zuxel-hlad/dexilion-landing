$(document).ready(function () {
  // jQuery.fn.extend({
  //   onAppearanceAddClass: function (class_to_add) {
  //     const $window = $(window),
  //       window_height = $window.height(),
  //       array_of_$elements = [];
  //     this.each(function (i, el) {
  //       array_of_$elements.push($(el));
  //     });
  //     scrollHandler();
  //     if (array_of_$elements.length) {
  //       $window
  //         .on('resize', resizeHandler)
  //         .on('resize', scrollHandler)
  //         .on('scroll', scrollHandler);
  //     }

  //     function resizeHandler() {
  //       window_height = $window.height();
  //     }

  //     function watchProcessedElements(array_of_indexes) {
  //       let l, i;
  //       for (l = array_of_indexes.length, i = l - 1; i > -1; --i) {
  //         array_of_$elements.splice(array_of_indexes[i], 1);
  //       }
  //       if (!array_of_$elements.length) {
  //         $window
  //           .off('resize', resizeHandler)
  //           .off('scroll', scrollHandler)
  //           .off('resize', scrollHandler);
  //       }
  //     }

  //     function scrollHandler() {
  //       let i,
  //         l,
  //         processed = [];
  //       for (l = array_of_$elements.length, i = 0; i < l; ++i) {
  //         if (
  //           $window.scrollTop() + window_height >
  //           array_of_$elements[i].offset().top
  //         ) {
  //           array_of_$elements[i].addClass(class_to_add);
  //           processed.push(i);
  //         }
  //       }
  //       if (processed.length) {
  //         watchProcessedElements(processed);
  //       }
  //     }

  //     return this;
  //   },
  // });

  const $isAnimatedFirstTextBlock = $('.first .hero-text'),
    $heroRoundBlock = $('.first .hero-img-round.is-animated'),
    $heroStarsBlock = $('.first .hero-img-stars.is-animated'),
    $aboutDexCard = $('.second .about-card.is-animated');

  /* title counter functions */
  const sectionCounterAddActive = (sectionName) => {
    $(`${sectionName} .dexilion-counter .hide-block`).addClass('active');
  };
  const sectionCounterRemoveActive = (sectionName) => {
    $(`${sectionName} .dexilion-counter .hide-block`).removeClass('active');
  };

  /* title counter functions */

  /* add title active class functions */

  const addTitleActiveClass = (titleSelector) => {
    $(titleSelector).addClass('animate__animated animate__fadeInLeft active');
    $(titleSelector).eq(0).css('animation-delay', '0s');
    $(titleSelector).eq(0).css('animation-duration', '.5s');
  };
  const removeTitleActiveClass = (titleSelector) => {
    $(titleSelector).removeClass(
      'animate__animated animate__fadeInLeft active'
    );
  };
  /* add title active class functions */

  /* dex card animation */
  const dexCardAnimation = () => {
    $aboutDexCard.addClass('animate__animated animate__fadeInUp');
    $aboutDexCard.eq(0).css('animation-delay', '.1s');
    $aboutDexCard.eq(0).css('animation-duration', '1s');
    $aboutDexCard.eq(1).css('animation-delay', '.3s');
    $aboutDexCard.eq(1).css('animation-duration', '1s');
  };
  const dexCardRemoveAnimation = () => {
    $aboutDexCard.removeClass('animate__animated animate__fadeInUp');
  };
  /* dex card animation */

  /* dex items animations */
  const dexItemsAnimation = () => {
    $('.features-item')
      .eq(0)
      .addClass('animate__animated animate__fadeInUp active');
    $('.features-item').eq(0).css('animation-delay', '.5s');
    $('.features-item').eq(0).css('animation-duration', '.8s');
    $('.features-item')
      .eq(1)
      .addClass('animate__animated animate__fadeInUp active');
    $('.features-item').eq(1).css('animation-delay', '.6s');
    $('.features-item').eq(1).css('animation-duration', '.8s');
    $('.features-item')
      .eq(2)
      .addClass('animate__animated animate__fadeInUp active');
    $('.features-item').eq(2).css('animation-delay', '.7s');
    $('.features-item').eq(2).css('animation-duration', '.8s');
  };

  const dexItemsAnimationOnScroll = () => {
    document
      .querySelector('.section.active .dexilion-features')
      .addEventListener('mousewheel', (e) => {
        let delta = 0;
        if (e.deltaY > delta) {
          $('.features-item')
            .eq(3)
            .addClass('animate__animated animate__fadeInUp active');
          $('.features-item').eq(3).css('animation-delay', '.5s');
          $('.features-item').eq(3).css('animation-duration', '.8s');
          $('.features-item')
            .eq(4)
            .addClass('animate__animated animate__fadeInUp active');
          $('.features-item').eq(4).css('animation-delay', '.6s');
          $('.features-item').eq(4).css('animation-duration', '.8s');
          $('.features-item')
            .eq(5)
            .addClass('animate__animated animate__fadeInUp active');
          $('.features-item').eq(5).css('animation-delay', '.7s');
          $('.features-item').eq(5).css('animation-duration', '.8s');
        }
      });
  };
  const dexItemsAnimationRemove = () => {
    $('.features-item').each(() =>
      $('.features-item').removeClass(
        'animate__animated animate__fadeInUp active'
      )
    );
  };

  /* dex items animations */

  /* dex steps animations */
  const dexStepssAnimation = (num) => {
    $('.step-image-general')
      .eq(num)
      .addClass('animate__animated animate__fadeInUp active');
    $('.step-sub-img')
      .eq(num)
      .addClass('animate__animated animate__fadeInUp active');
    $('.step-sub-img').eq(num).css('animation-delay', '.1s');
    $('.step-text-wrapper')
      .eq(num)
      .addClass('animate__animated animate__fadeInUp active');
    $('.step-text-wrapper').eq(num).css('animation-delay', '.1s');
  };

  const dexStepssAnimationRemove = (num) => {
    $(`.step-image-general`)
      .eq(num)
      .removeClass('animate__animated animate__fadeInUp active');

    $(`.step-sub-img`)
      .eq(num)
      .removeClass('animate__animated animate__fadeInUp active');
    $(`.step-text-wrapper`)
      .eq(num)
      .removeClass('animate__animated animate__fadeInUp active');
  };
  /* dex steps animations */

  /* dex progress-items animations */
  const progressItemanimation = () => {
    $('.progress-item')
      .eq(0)
      .addClass('animate__animated animate__fadeIn active');
    $('.progress-item')
      .eq(5)
      .addClass('animate__animated animate__fadeIn active');
    $('.progress-item').eq(5).css('animation-delay', '.1s');
    $('.progress-item')
      .eq(1)
      .addClass('animate__animated animate__fadeIn active');
    $('.progress-item').eq(1).css('animation-delay', '.2s');
    $('.progress-item')
      .eq(6)
      .addClass('animate__animated animate__fadeIn active');
    $('.progress-item').eq(6).css('animation-delay', '.3s');
    $('.progress-item')
      .eq(2)
      .addClass('animate__animated animate__fadeIn active');
    $('.progress-item').eq(2).css('animation-delay', '.4s');
    $('.progress-item')
      .eq(7)
      .addClass('animate__animated animate__fadeIn active');
    $('.progress-item').eq(7).css('animation-delay', '.5s');
    $('.progress-item')
      .eq(3)
      .addClass('animate__animated animate__fadeIn active');
    $('.progress-item').eq(3).css('animation-delay', '.6s');
    $('.progress-item')
      .eq(8)
      .addClass('animate__animated animate__fadeIn active');
    $('.progress-item').eq(8).css('animation-delay', '.7s');
    $('.progress-item')
      .eq(4)
      .addClass('animate__animated animate__fadeIn active');
    $('.progress-item').eq(4).css('animation-delay', '.8s');
  };

  const progressItemanimationRemove = () => {
    $('.progress-item').each(() =>
      $('.progress-item').removeClass(
        'animate__animated animate__fadeIn active'
      )
    );
  };
  /* dex progress-items animations */

  /* dex footer animation */
  const dexFooterAnimate = () => {
    $('.footer-promo').addClass('animate__animated animate__fadeInUp active');
    $('.footer-information-item').each((index, item) => {
      $('.footer-information-item')
        .eq(index)
        .addClass('animate__animated animate__fadeInUp active');
      $('.footer-information-item').eq(0).css('animation-delay', '.1s');
      $('.footer-information-item').eq(1).css('animation-delay', '.3s');
      $('.footer-information-item').eq(2).css('animation-delay', '.5s');
      $('.footer-information-item').eq(3).css('animation-delay', '.7s');
    });
  };
  const dexFooterAnimateRemove = () => {
    $('.footer-promo').removeClass(
      'animate__animated animate__fadeInUp active'
    );
    $('.footer-information-item').each(() => {
      $('.footer-information-item').removeClass(
        'animate__animated animate__fadeInUp active'
      );
    });
  };
  /* dex footer animation */

  const page = new fullpage('.fullpage-wrapper', {
    licenseKey: null,
    scrollOverflow: true,
    scrollingSpeed: 1000,
    // normalScrollElements: '#dexilion-features',
    fitToSection: true,
    afterLoad: function (index, nextIndex, direction) {
      // zero animation
      if (nextIndex.index === 0) {
        $isAnimatedFirstTextBlock.addClass(
          'animate__animated animate__fadeInLeft'
        );
        $isAnimatedFirstTextBlock.eq(0).css('animation-delay', '2s');
        $isAnimatedFirstTextBlock.eq(0).css('animation-duration', '.5s');
        $heroRoundBlock.addClass('animate__animated animate__fadeInLeft');
        $heroRoundBlock.eq(0).css('animation-delay', '1s');
        $heroStarsBlock.addClass('animate__animated animate__fadeInTopRight');
        $heroStarsBlock.eq(0).css('animation-delay', '2s');
      } else {
        $isAnimatedFirstTextBlock.removeClass(
          'animate__animated animate__fadeInLeft'
        );
      }
      // first animation
      if (nextIndex.index === 1) {
        addTitleActiveClass('.about-dexilion-title');
        sectionCounterAddActive('.about-dexilion');
        dexCardAnimation();
      } else {
        removeTitleActiveClass('.about-dexilion-title');
        sectionCounterRemoveActive('.about-dexilion');
        dexCardRemoveAnimation();
      }
      // second animation
      if (nextIndex.index === 2) {
        addTitleActiveClass('.dexilion-features-title');
        sectionCounterAddActive('.dexilion-features-title');
        dexItemsAnimation();
        dexItemsAnimationOnScroll();
      } else if (nextIndex.index < 2) {
        removeTitleActiveClass('.dexilion-features-title');
        sectionCounterRemoveActive('.dexilion-features-title');
        dexItemsAnimationRemove();
      } else {
        removeTitleActiveClass('.dexilion-features-title');
        sectionCounterRemoveActive('.dexilion-features-title');
      }
      if (nextIndex.index === 3) {
        addTitleActiveClass('.dexilion-how-title');
        sectionCounterAddActive('.dexilion-how-title');
        dexStepssAnimation(0);
      } else {
        removeTitleActiveClass('.dexilion-how-title');
        sectionCounterRemoveActive('.dexilion-how-title');
        dexStepssAnimationRemove(0);
      }
      if (nextIndex.index === 4) {
        dexStepssAnimation(1);
      } else {
        dexStepssAnimationRemove(1);
      }
      if (nextIndex.index === 5) {
        dexStepssAnimation(2);
      } else {
        dexStepssAnimationRemove(2);
      }
      if (nextIndex.index === 6) {
        dexStepssAnimation(3);
      } else {
        dexStepssAnimationRemove(3);
      }
      if (nextIndex.index === 7) {
        addTitleActiveClass('.dexilion-roadmap-title');
        sectionCounterAddActive('.dexilion-roadmap-title');
        progressItemanimation();
      } else {
        removeTitleActiveClass('.dexilion-roadmap-title');
        sectionCounterRemoveActive('.dexilion-roadmap-title');
        progressItemanimationRemove();
      }
      if (nextIndex.index === 8) {
        dexFooterAnimate();
      } else {
        dexFooterAnimateRemove();
      }
    },
  });
});

/* mobile burger */

const burger = document.querySelector('.burger-menu'),
  headerWrapper = document.querySelector('.header-nav-wrapper');

const mobileMenuToggler = () => {
  burger.classList.toggle('active');
  headerWrapper.classList.toggle('active');
};

burger.addEventListener('click', (e) => {
  e.stopPropagation();
  mobileMenuToggler();
});

/* if mobile menu open and click outside */
document.addEventListener('click', (e) => {
  let target = e.target;
  let its_menu = target == headerWrapper || headerWrapper.contains(target);
  let its_hamburger = target == burger;
  let menu_is_active = headerWrapper.classList.contains('active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    mobileMenuToggler();
  }
});
