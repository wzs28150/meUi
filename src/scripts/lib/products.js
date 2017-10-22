define(['domReady', 'loadmore'], function (domReady, loadmore) {
  var initModule, products_show, products_list, loadmore = loadmore.initModule;
  tab_show = function () {
    var proswiper = new Swiper('.tab-inner .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 27,
      nextButton: '.i-pro-r',
      prevButton: '.i-pro-l',
    });
  };
  initModule = function (callbak) {
    domReady(function () {
      callbak(2);
      require(["swiper"], function (swiper) {
        tab_show();
      });
    });
  };
  return {
    initModule: initModule
  };
})