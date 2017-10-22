require.config({
  urlArgs: "bust=" + (new Date()).getTime(),

  shim: {
    'pajax': ['pjax'],
    //'laydate': ['laydate'],
    //'progress': ['swiper'],
    'BMap': {
      exports: 'BMap'
    },
    'scroll': ['scrollbar'],
    'idcode': ['css!./package/idcode/jquery.idcode.css'],
    'litebox': ['css!./package/litebox/css/litebox.css', 'imagesloaded'],
  },
  paths: {
    domReady: './domReady',
    main: './lib/main',
    jquery:'./package/jquery/jquery-1.9.1.min',
    pjax: './package/pajax/jquery.pjax',
    pajax: './package/pajax/pajax',
    router: './package/router/router',
    viewport: './package/viewport/jquery.viewport',
    alertinfo: './package/alertinfo/alertinfo',
    css: './package/css/css',
    async: './package/async/async',
    debug: './package/debug/debug',
    smoothscroll: './package/scroll/jquery.smooth-scroll.min',
    scrollbar: './package/scroll/scrollbar',
    scroll: './package/scroll/scroll',
    aspectratio_responsive: './package/media/aspectratio_responsive',
    swiper: './package/swiper/v3/swiper.min',
    debouncedresize: './package/compat/jquery.debouncedresize',
    //  progress:'./package/swiper/v2/idangerous.swiper.progress',
    masonry: './package/pubu/masonry.pkgd.min',
    form: './package/form/form',
    imagesloaded: './package/litebox/js/images-loaded.min',
    litebox: './package/litebox/js/litebox.min',
    idcode: './package/idcode/jquery.idcode',
    loadmore: './package/loadmore/loadmore',
    timeline: './package/timeline/jquery.timelinr-0.9.53',
    'BMap': ['http://api.map.baidu.com/api?key=&v=1.1&services=true'],
  }
});
require(["domReady", 'main', './lib/index'], function (domReady, main) {
  domReady(function () {
    main.initModule();
  });
});
