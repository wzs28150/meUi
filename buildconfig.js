({
  appDir: './',
  baseUrl: './src/scripts/',
  dir: './dist',
  modules: [{
    name: 'me'
  }],
  fileExclusionRegExp: /^(r|buildconfig)\.js|.*\.scss|.*\.bat|.*\.svg$/,
  optimizeCss: 'standard',
  removeCombined: true,
  shim: {
    'pajax': ['pjax'],
    //'laydate': ['laydate'],
    //'progress': ['swiper'],
    'BMap': {
      exports: 'BMap'
    },
    'idcode': ['css!./package/idcode/jquery.idcode.css'],
    'litebox': ['css!./package/litebox/css/litebox.css', 'imagesloaded'],
  },
  paths: {
    domReady: './domReady',
    main: './lib/main',
    pjax: './package/pajax/jquery.pjax',
    pajax: './package/pajax/pajax',
    router: './package/router/router',
    viewport: './package/viewport/jquery.viewport',
    alertinfo: './package/alertinfo/alertinfo',
    css: './package/css/css',
    async: './package/async/async',
    debug: './package/debug/debug',
    smoothscroll: './package/scroll/jquery.smooth-scroll.min',
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
    loadmore: './package/loadmore/loadmore'
  }
})
