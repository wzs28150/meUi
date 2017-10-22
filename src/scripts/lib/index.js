define(['domReady', 'debouncedresize'], function (domReady, debouncedresize) {
  var initModule, banner, headerh = $('header').height(),
    bannerpic, news,quicklink;
  banner = function () {
    var bigswiper = new Swiper('.index .banner .swiper-container', {
      autoplay: 3000,
      speed: 1000,
      loop: true,
      pagination: '.index .banner .swiper-pagination',
      paginationClickable: true,
      nextButton: '.index .banner .swiper-button-next',
      prevButton: '.index .banner .swiper-button-prev',
    });
  };
  bannerpic = function () {
    $('.index .banner .swiper-slide').each(function (i) {
      var img;
      if ($(window).width() > 1000) {
        img = $(this).attr('data-pc');
      } else {
        img = $(this).attr('data-wap');
      }

      $(this).css('background-image', 'url(' + img + ')');
    })
  }
  news = function () {
    var newsswiper = new Swiper('.i-news .swiper-container', {
      pagination: '.i-news .swiper-pagination',
      paginationClickable: true
    });
    $('.i-news-tab a').click(function () {
      var i = $(this).index();
      $('.i-news-tab a').removeClass('on');
      $(this).addClass('on');
      $('.i-news-content').removeClass('on');
      $('.i-news-content').eq(i).addClass('on');
    });
  }
  quicklink = function(){
    var quicklinkswiper = new Swiper('.i-quicklink .swiper-container', {
      slidesPerView: 2,
      paginationClickable: true,
      spaceBetween: 5,
      nextButton: '.i-quicklink .swiper-button-next',
      prevButton: '.i-quicklink .swiper-button-prev',
      breakpoints: { 
       //当宽度小于等于480
        480: { 
          slidesPerView: 1,
          spaceBetween: 5
        }
      }
  });
  }
  initModule = function (callbak) {
    domReady(function () {
      callbak(0);
      require(["swiper"], function (swiper) {
        banner();
        news();
        quicklink();
      });
      bannerpic();
      $(window).on('debouncedresize', function () {
        bannerpic();
      });
    });
  };
  return {
    initModule: initModule
  };
})