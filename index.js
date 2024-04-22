function elementScroll(param) {
  const element = document.getElementById(param);
  element.scrollIntoView();
}

$(window).on('load', function () {
  mainNav();
  $(window).scroll(function () {
    mainNav();
  });
  function mainNav() {
    var top =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (top > 40)
      $('.navbar-fixed-top').stop().animate(
        {
          opacity: '1',
          top: '0'
        },
        0
      );
    else
      $('.navbar-fixed-top').stop().animate(
        {
          top: '-70',
          opacity: '0'
        },
        0
      );
  }
});
