meui.Index_action = (function() {
    "use strict";
    var stateMap = {},
        jqueryMap = {},
        setJqueryMap,
        initModule, indexBanner, propicColor, getRandomColor;
    setJqueryMap = function() {};
    indexBanner = function() {
        if (meui.exists('#bannerSwiper')) {
            var mySwiper = new Swiper('#bannerSwiper', {
                loop: true,
                //autoplay: 5000,
                speed: 2000,
                pagination: '#bannerpagination',
                paginationClickable: true,
                grabCursor: true,
                nextButton: '#banner .arrow-right',
                prevButton: '#banner .arrow-left',
                parallax: true,
            });
        }
    };
    getRandomColor = function() {
        return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
    }
    propicColor = function() {
        if (meui.exists('.pro_pic_list')) {
            $('.pro_pic_list .item .pic').each(function(i) {
                $(this).css('background-color', getRandomColor());
            });

        }
    };
    initModule = function($data, $setting) {
        //meui.Nav.initModule(0);
				var scripts = ["dist/scripts/package/swiper/v3/swiper.min.js"];
				meui.loadScript.initModule(scripts, function() {
	        indexBanner();
	        propicColor();
				});
    };
    return {
        initModule: initModule,
    };
}());
