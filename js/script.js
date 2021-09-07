$(document).ready(function () {
  jQuery.fn.extend({
    onAppearanceAddClass: function (class_to_add) {
      const $window = $(window),
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
        let l, i;
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
        let i,
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

  const $isAnimatedFirstTextBlock = $('.first .hero-text'),
    $heroRoundBlock = $('.first .hero-img-round.is-animated'),
    $heroStarsBlock = $('.first .hero-img-stars.is-animated'),
    $aboutDexTitle = $('.second .about-dexilion-title.is-animated'),
    $aboutDexCard = $('.second .about-card.is-animated');
  $aboutDexCounter = $('.second .dexilion-counter .hide-block');
  // $isAnimatedSecond = $('.second .is-animated'),
  // $isAnimatedThird = $('.third .is-animated'),
  // $isAnimatedFourth = $('.fourth .is-animated'),
  // $isAnimatedFifth = $('.fifth .is-animated'),
  // $isAnimatedSixth = $('.sixth .is-animated'),
  // $isAnimatedSeventh = $('.seventh .is-animated');

  const page = new fullpage('.fullpage-wrapper', {
    licenseKey: 'YOUR_KEY_HERE',
    scrollOverflow: true,
    scrollingSpeed: 1000,
    normalScrollElements: '#dexilion-features',
    afterLoad: function (index, nextIndex, direction) {
      console.log(nextIndex.index);
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
      if (nextIndex.index == 1) {
        $aboutDexTitle.addClass('animate__animated animate__fadeInLeft active');
        $aboutDexTitle.eq(0).css('animation-delay', '0s');
        $aboutDexTitle.eq(0).css('animation-duration', '.3s');
        $aboutDexCard.addClass('animate__animated animate__fadeInUp');
        $aboutDexCard.eq(0).css('animation-delay', '.1s');
        $aboutDexCard.eq(0).css('animation-duration', '1s');
        $aboutDexCard.eq(1).css('animation-delay', '.3s');
        $aboutDexCard.eq(1).css('animation-duration', '1s');
        $aboutDexCounter.addClass('animate__animated active');
        $aboutDexCounter.eq(0).css('animation-delay', '1s');
        $aboutDexCounter.eq(1).css('animation-delay', '2.5s');
      } else {
        $aboutDexTitle.removeClass(
          'animate__animated animate__fadeInLeft active'
        );
        $aboutDexCard.removeClass('animate__animated animate__fadeInUp');
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
    },
  });
});
