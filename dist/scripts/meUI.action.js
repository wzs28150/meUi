//控制器
meui.Products_action = (function() {
    "use strict";
    var stateMap = {},
        jqueryMap = {},
        setJqueryMap,
        initModule,
        nav_change;
    setJqueryMap = function() {};
    nav_change = function() {
        $('.pro-nav').delegate('a', 'click', function() {
            var ci = $(this).index();
            $('.pro-nav a').removeClass('on');
            $(this).addClass('on');
            $('.pro-cmain .content').hide();
            $('.pro-cmain .content').eq(ci).fadeIn();
        })
    };
    initModule = function($data, $setting) {
        meui.Nav.initModule(1);
        if ($setting.$tempindex) {
            //内容
            nav_change();
        } else {
            //列表
            meui.loadMore.initModule(9, 3, '.pro .p-list>.containern>.inner .list .item', '.pro .p-list>.containern>.inner .list .loadmore');
        }
    };
    return {
        initModule: initModule,
    };
}());
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
        indexBanner();
        propicColor();
    };
    return {
        initModule: initModule,
    };
}());
meui.About_action = (function() {
    "use strict";
    var stateMap = {},
        jqueryMap = {},
        setJqueryMap,
        initModule;
    setJqueryMap = function() {};
    initModule = function($data, $setting) {};
    return {
        initModule: initModule,
    };
}());

meui.Backtotop = (function() {
    "use strict";
    var stateMap = {},
        jqueryMap = {},
        setJqueryMap,
        initModule, backtotop, backbuttonshow;
    setJqueryMap = function() {};
    backbuttonshow = function() {
        if ($(window).scrollTop() > 600) {
            $("#back-to-top").fadeIn(500);
        } else {
            $("#back-to-top").fadeOut(500);
        }
    };
    backtotop = function() {
        $('body,html').stop().animate({
            scrollTop: 0
        }, 500);
        return false;
    };
    initModule = function() {
        $("#back-to-top").hide();
        $(window).scroll(function() {
            backbuttonshow();
        });
        $("#back-to-top").click(function() {
            backtotop();
        });
    };
    return {
        initModule: initModule,
    };
}());
meui.Nav = (function() {
    "use strict";
    var stateMap = {},
        jqueryMap = {},
        setJqueryMap,
        initModule, navOn, navToggle;
    setJqueryMap = function() {};
    navToggle = function() {
        $('header .navbar-toggle').click(function() {
            if ($("header nav").is(":hidden")) {
                $("header nav").slideDown(); //如果元素为隐藏,则将它显现
            } else {
                $("header nav").slideUp(); //如果元素为显现,则将其隐藏
            }
            $("header nav a").removeClass("in-viewport");
            $("header nav a").click(function() {
                if ($("header nav").is(":hidden")) {
                    $("header nav").slideDown(); //如果元素为隐藏,则将它显现
                } else {
                    $("header nav").slideUp(); //如果元素为显现,则将其隐藏
                }
            });
            $("header nav a").each(function(e) {
                var a = $(this);
                a.hasClass("in-viewport") || setTimeout(function() {
                    a.addClass("in-viewport")
                }, 100 * e)
            });
        });
    };
    initModule = function(i) {
        if (i != undefined) {
            $('header nav a').removeClass('on');
            $('header nav a').eq(i).addClass('on');
        } else {
            $('header  nav a').click(function() {
                //alert(1)
                $('header  nav a').removeClass('on');
                $(this).addClass('on');
            });
        }
        if ($(window).width() < 960) {
            navToggle();
        }
        $(window).resize(function() {
            if ($(window).width() < 960) {
                navToggle();
            }
        });
    };
    return {
        initModule: initModule,
    };
}());
meui.Callback = (function() {
    "use strict";
    var stateMap = {},
        jqueryMap = {},
        setJqueryMap,
        initModule;
    setJqueryMap = function() {};
    initModule = function() {
        meui.Backtotop.initModule();
        meui.Nav.initModule();
    };
    return {
        initModule: initModule,
    };
}());
