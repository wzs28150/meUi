meui.Public_action = (function() {
    "use strict";
    var initModule;
    initModule = function() {
      //alert(1);
      //meui.Backtotop.initModule();
      meui.component.initModule({
      el: 'nav',
      data: {
        "err_code": "118",
        "navlist": [{
            "catid": "22",
            "title": "首页",
            "target": "#"
        },{
            "catid": "22",
            "title": "关于我们",
            "target": "#About"
        },{
            "catid": "22",
            "title": "新闻中心",
            "target": "#News"
        },{
            "catid": "22",
            "title": "产品中心",
            "target": "#Products"
        },{
            "catid": "22",
            "title": "单页",
            "target": "#Content"
        },{
            "catid": "22",
            "title": "组件",
            "target": "#Packages"
        }]
      }
,
      methods: {
        send: function() {
          $.post('', this.message);
        }
      }
    });
      meui.Nav.initModule();
    };
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
