//控制器
meui.Products = (function() {
    "use strict";
    var stateMap = {

        },
        jqueryMap = {},
        setJqueryMap,
        initModule,
        nav_change;
    setJqueryMap = function() {

    };
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
meui.Index = (function() {
    "use strict";
    var stateMap = {

        },
        jqueryMap = {},
        setJqueryMap,
        initModule, indexBanner, i_pro_change, i_cooper_chage;
    setJqueryMap = function() {};
    indexBanner = function() {
        if (meui.exists('.index .i_banner')) {
            var mySwiper = new Swiper('.i_banner .swiper-container', {
                pagination: '.i_banner .pagination',
                loop: true,
                calculateHeight: true,
                paginationClickable: true,
                speed: 2000,
                autoplay: 2000
            });
            mySwiper.wrapperTransitionEnd(function() {
                $('.index .i_banner .tit').removeClass('in-viewport');
                $('.index .i_banner .swiper-slide-active .tit').each(function(i) {
                    var $this = $(this);
                    if (!$this.hasClass('in-viewport')) {
                        setTimeout(function() {
                            $this.addClass('in-viewport');
                        }, 100 * i);
                    }
                });
            }, true);
            $('.i_banner .arrow-left')
                .on('click', function(e) {
                    e.preventDefault();
                    mySwiper.swipePrev();
                });
            $('.i_banner .arrow-right')
                .on('click', function(e) {
                    e.preventDefault();
                    mySwiper.swipeNext();
                });
        }
    };
    i_pro_change = function() {
        var iproSwiper = new Swiper('.i-pro-change .swiper-container', {
            pagination: '.i-pro-change .pagination',
            loop: true,
            //calculateHeight: true,
            speed: 2500,
            autoplay: 2500,
            paginationClickable: true,
            speed: 2000,
        });
        $('.i-pro-change .arrow-left').on('click', function(e) {
            e.preventDefault();
            iproSwiper.swipePrev();
        });
        $('.i-pro-change .arrow-right').on('click', function(e) {
            e.preventDefault();
            iproSwiper.swipeNext();
        });
    };
    i_cooper_chage = function() {
        var icooperSwiper = new Swiper('.i_cooper_chage .swiper-container', {
            pagination: '.i-pro-change .pagination',
            loop: true,
            calculateHeight: true,
            paginationClickable: true,
            speed: 2000,
        });
        $('.i_cooper_chage .arrow-left').on('click', function(e) {
            e.preventDefault();
            icooperSwiper.swipePrev();
        });
        $('.i_cooper_chage .arrow-right').on('click', function(e) {
            e.preventDefault();
            icooperSwiper.swipeNext();
        });
    };
    initModule = function($data) {
        $('#i_support').support({});
        indexBanner();
        i_pro_change();
        i_cooper_chage();
    };
    return {
        initModule: initModule,
    };
}());

meui.Service = (function() {
    "use strict";
    var stateMap = {

        },
        jqueryMap = {},
        setJqueryMap,
        initModule;
    setJqueryMap = function() {

    };
    initModule = function($data, $setting) {

    };
    return {
        initModule: initModule,
    };
}());

meui.Cooper = (function() {
    "use strict";
    var stateMap = {

        },
        jqueryMap = {},
        setJqueryMap,
        initModule;
    setJqueryMap = function() {

    };
    initModule = function($data, $setting) {
        meui.loadMore.initModule(4, 2, '.cooper-list .item', '.cooper-list .loadmore');
    };
    return {
        initModule: initModule,
    };
}());

meui.About = (function() {
    "use strict";
    var stateMap = {

        },
        jqueryMap = {},
        setJqueryMap,
        initModule;
    setJqueryMap = function() {

    };
    initModule = function($data, $setting) {

    };
    return {
        initModule: initModule,
    };
}());

meui.Contact = (function() {
    "use strict";
    var stateMap = {

        },
        jqueryMap = {},
        setJqueryMap,
        initModule, createMap, setMapEvent, addMapControl;
    setJqueryMap = function() {

    };
    createMap = function() {
        var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
        var point = new BMap.Point(126.638206, 45.855999); //定义一个中心点坐标
        map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map; //将map变量存储在全局
    }

    //地图事件设置函数：
    setMapEvent = function() {
        map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
        map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard(); //启用键盘上下左右键移动地图
    }

    //地图控件添加函数：
    addMapControl = function() {
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({
            anchor: BMAP_ANCHOR_TOP_LEFT,
            type: BMAP_NAVIGATION_CONTROL_LARGE
        });
        map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
            isOpen: 1
        });
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({
            anchor: BMAP_ANCHOR_BOTTOM_LEFT
        });
        map.addControl(ctrl_sca);
    }
    initModule = function($data, $setting) {
        createMap(); //创建地图
        setMapEvent(); //设置地图事件
        addMapControl(); //向地图添加控件
    };
    return {
        initModule: initModule,
    };
}());
meui.Backtotop = (function() {
    "use strict";
    var stateMap = {

        },
        jqueryMap = {},
        setJqueryMap,
        initModule, backtotop, backbuttonshow;
    setJqueryMap = function() {

    };
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

meui.Callback = (function() {
    "use strict";
    var stateMap = {

        },
        jqueryMap = {},
        setJqueryMap,
        initModule;
    setJqueryMap = function() {

    };
    initModule = function() {
        meui.Backtotop.initModule();
    };
    return {
        initModule: initModule,
    };
}());
(function($) {
    "use strict";
    $.fn.support = function(opt) {
        var opts = $.extend({
                spanclass: ".span.c",
                changeTime: 1000,
                onList: Array(2, 5, 9, 12),
            },
            opt || {});
        var target = this;
        //opts.height
        //初始化函数
        var span = target.find(opts.spanclass);
        var text = target.find('.text');
        var targetH = $(target).offset().top;
        var changec, changet;
        //console.log(targetH);


        $(window).scroll(function() {
            if ($(target).hasClass('in-viewport')) {
                initial();
            } else {
                chushihua();
            }
        });

        function initial() {
            //alert(opts.onList.length)
            changeColor();
            textShow();

        }

        function chushihua() {

            window.clearTimeout(changec);
            window.clearTimeout(changet);
            clearColor();
            cleartextShow();
        }
        //2 5 9 12
        function changeColor() {
            span.each(function(i) {
                changec = setTimeout(function() {
                    span.eq(i).addClass('on');
                }, opts.changeTime * i);
            })

        }

        function clearColor() {
            span.removeClass('on');

        }

        function textShow() {
            text.each(function(i) {
                //alert(i)
                changet = setTimeout(function() {
                    text.eq(i).fadeIn();
                }, opts.changeTime * i);
            });
        }

        function cleartextShow() {
            //console.log('done');
            text.hide();
        }
        return this;
    };
})(jQuery);
