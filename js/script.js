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

  const page = new fullpage('.fullpage-wrapper', {
    licenseKey: 'YOUR_KEY_HERE',
    scrollOverflow: true,
    scrollingSpeed: 1000,
    normalScrollElements: '#dexilion-features',
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
    },
  });
});
