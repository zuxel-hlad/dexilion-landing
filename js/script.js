let $isAnimatedEl = $('.hero-text');

new fullpage('.fullpage-wrapper', {
  licenseKey: 'YOUR_KEY_HERE',
  scrollOverflow: false,
  scrollingSpeed: 900,
  css3: true,
  easingcss3: 'ease-out',
  normalScrollElements: '#dexilion-features',
  afterLoad: function (index, nextIndex, direction) {
    console.log(index);
    if (index.index == 0) {
      $isAnimatedEl.addClass('show');
    }
  },
});
