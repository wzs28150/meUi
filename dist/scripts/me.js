/*function is_touch_device() {"use strict";  return ('ontouchstart' in document.documentElement); }
function is_ie8() { "use strict"; return (navigator.appName === "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") === "MSIE8.0"); }
function is_ie() { "use strict"; return (navigator.userAgent.indexOf("Trident") > -1); }*/

jQuery.exists = function(selector) {
    "use strict";
    return (jQuery(selector).length > 0);
};
suffix = '/';
rukou = 'api.php/'
console.clear();
console.log("
 ::   ,,    : ,;:,. :   ;cL:
 BB  :MBO  BM 2BRXBBM.:BM71BM.
 7B7 MBMB  MB    .BM, ZMa   :
  MB B7 B::B:   aBR    LMBMBv
  OMBB  BMBM   BB;    ,    1BW
  :BMB  rBMF ,MBU.;7v.MBa  SMu
   JH    2S  .PLJSZEM, :RRRZ: ");
$(window).scroll(function() {
    "use strict";
    animated_contents();
});
$(window).on('debouncedresize', function() {
    "use strict";
    container_aspectratio_responsive();
    full_height_responsive();
});
$(document).ready(function() {
    "use strict";
    container_aspectratio_responsive();
    full_height_responsive();
    animated_contents();
});

function header_menu(i) {
    "use strict";
    //alert(i);
    $('header nav a').removeClass('on');
    $('header nav a').eq(i).addClass('on');
}

function full_height_responsive() {
    "use strict";
    if ($.exists('.full-height-true')) {
        $('.full-height-true').each(function() {
            var $this = $(this),
                $header_hieght = $('header').height(),
                $withoutheader = $(this).attr('data-withoutheader');
            if ($withoutheader === 'true') {
                $this.height($(window).height() - $header_hieght);
            } else {
                $this.height($(window).height());
            }
        });
    }
}



$(document).ready(function() {
    "use strict";
    $('body').delegate("a", "click", function(e) {
        e.stopPropagation;
    });
    backtotop();
});
$(window).load(function() {
    // $('#spa').hide();

});
$(window).resize(function() {
    "use strict";
    container_aspectratio_responsive();
});
//$(window).hashchange( function(){
//  onHashchange();
//})
$(window).unbind('hashchange').bind('hashchange', onHashchange).trigger('hashchange');
//support
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

function onHashchange(e) {
    e.stopPropagation;
    load();
    var hasharry = location.hash.split("#");
    var hash;
    if (hasharry != '') {
        hash = hasharry[1].split("/");
        var catid, tempindex, type;
        if (hash.length > 0) {
            catid = hash[3];
            tempindex = hash[1];
            type = hash[2]
        }
    } else {
        hash = '';
    }
    //console.log(tempindex);
    switch (hash[0]) {
        case 'Cooper':
            header_menu(3);
            setTimeout(function() {
                cooper(catid, tempindex, type, hasharry[1]);
            }, 500);
            break;
        case 'Service':
            header_menu(2);
            setTimeout(function() {
                service(catid, tempindex, type, hasharry[1]);
            }, 500);
            break;
        case 'Contact':
            header_menu(5);
            setTimeout(function() {
                contact();
            }, 500);
            break;
        case 'About':
            header_menu(4);
            setTimeout(function() {
                about(catid, tempindex, type, hasharry[1]);
            }, 500);
            break;
        case 'Products':
            header_menu(1);
            setTimeout(function() {
                products(catid, tempindex, type, hasharry[1]);
            }, 500);
            break;
        default:
            header_menu(0);
            setTimeout(function() {
                index();
            }, 500);
    }
    return false;
};

function index() {
    $.get("./tpl/index_tmp.html", function(tmpdata, textStauts) {
        var indexTmpl = $.templates(tmpdata);
        var url = suffix + rukou;
        $.getJSON(url, function(data) {

            if ('118' === data.err_code) {
                var html = indexTmpl.render(data);
                $("title").html("首页-哈尔滨市暖通风机");
                $("#main").html(html);
                $('#i_support').support({});
                $('article').addClass('in-viewport');
                if ($.exists('.index .i_banner')) {
                    var mySwiper = new Swiper('.i_banner .swiper-container', {
                        pagination: '.i_banner .pagination',
                        loop: true,
                        calculateHeight: true,
                        paginationClickable: true,
                        speed: 2500,
                        autoplay: 2500,
                        onInit: function(swiper) {
                          
                        },
                        onSlideChangeStart: function(swiper) {
                          //$('.index .i_banner .swiper-slide .tit').removeClass('in-viewport');

                        },
                        onSlideChangeEnd: function(swiper) {

                        }

                    });
                    mySwiper.wrapperTransitionEnd(function(){
                      $('.index .i_banner .tit').removeClass('in-viewport');
                       $('.index .i_banner .swiper-slide-active .tit').each(function(i) {
                           var $this = $(this);
                           if (!$this.hasClass('in-viewport')) {
                               setTimeout(function() {
                                   $this.addClass('in-viewport');
                               }, 100 * i);
                           }
                       });
                    },true);
                    $('.i_banner .arrow-left').on('click', function(e) {
                        e.preventDefault();
                        mySwiper.swipePrev();
                    });
                    $('.i_banner .arrow-right').on('click', function(e) {
                        e.preventDefault();
                        mySwiper.swipeNext();
                    });
                }
                if ($.exists('.i-pro-change')) {
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
                }
                if ($.exists('.i_cooper_chage')) {
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
                }
                container_aspectratio_responsive();
            }
        });
    });



    // var html = $("#indexTmpl").render();
    // $("#main").html(html);

}

function about(catid, tempindex, type, hash) {
    $.get("./tpl/about_tmp.html", function(tmpdata, textStauts) {
        var aboutTmpl = $.templates(tmpdata);
        var url = suffix + rukou + hash;
        $.getJSON(url, function(data) {
            if ('118' === data.err_code) {
                $("title").html(data.err_catname + "-哈尔滨市暖通风机");
                var html = aboutTmpl.render(data);
                $("#main").html(html);
                $('article').addClass('in-viewport');
            }
        });
    });
}

function cooper(catid, tempindex, type, hash) {
    $.get("./tpl/cooper_tmp.html", function(tmpdata, textStauts) {
        var cooperTmpl = $.templates(tmpdata);
        var url = suffix + rukou + hash;
        $.getJSON(url, function(data) {
            if ('118' === data.err_code) {
                $("title").html(data.err_catname + "-哈尔滨市暖通风机");
                var html = cooperTmpl.render(data);
                $("#main").html(html);
                loaditem(4, 2, '.cooper-list .item', '.cooper-list .loadmore');
                $('article').addClass('in-viewport');
            }
        })

    });
}

function products(catid, tempindex, type, hash) {
    if (tempindex === 'show') {
        $.get("./tpl/pro_main_tmp.html", function(tmpdata, textStauts) {
            var promainTmpl = $.templates(tmpdata);
            var url = suffix + rukou + hash;
            $.getJSON(url, function(data) {
                if ('118' === data.err_code) {
                    $("title").html(data.err_title + "-哈尔滨市暖通风机");
                    var html = promainTmpl.render(data);
                    $("#main").html(html);
                    $('article').addClass('in-viewport');
                    $('.pro-nav').delegate('a', 'click', function() {
                        var ci = $(this).index();
                        $('.pro-nav a').removeClass('on');
                        $(this).addClass('on');
                        $('.pro-cmain .content').hide();
                        $('.pro-cmain .content').eq(ci).fadeIn();
                    })
                }
            });
        });
    } else {
        $.get("./tpl/pro_tmp.html", function(data, textStauts) {
            var proTmpl = $.templates(data);
            var url = suffix + rukou + hash;
            $.getJSON(url, function(data) {
                if ('118' === data.err_code) {
                    $("title").html(data.err_catname + "-哈尔滨市暖通风机");
                    var html = proTmpl.render(data);
                    $("#main").html(html);
                    $('article').addClass('in-viewport');
                    typehover();
                    loaditem(9, 3, '.pro .p-list>.containern>.inner .list .item', '.pro .p-list>.containern>.inner .list .loadmore');
                }
            });
        });
    }
}

function service(catid, tempindex, type, hash) {
    $.get("/tpl/service_tmp.html", function(tmpdata, textStauts) {
        //处理数据
        var serviceTmpl = $.templates(tmpdata);
        var url = suffix + rukou + hash;
        $.getJSON(url, function(data) {
            if ('118' === data.err_code) {
                $("title").html(data.err_catname + "-哈尔滨市暖通风机");
                var html = serviceTmpl.render(data);
                $("#main").html(html);
                $('article').addClass('in-viewport');
            }
        });
    });
}

function contact(catid, tempindex, type, hash) {
    $.get("./tpl/contact_tmp.html", function(data, textStauts) {
        var contactTmpl = $.templates(data);
        $("title").html("联系方式-哈尔滨市暖通风机");
        var html = contactTmpl.render();
        $("#main").html(html);
        $('article').addClass('in-viewport');
        initMap(); //创建和初始化地图
    });

}

function load() {
    $('main').css('min-height', ($(window).height() - $('header').height()) + "px");
    stp();
    $.get("./tpl/load_tmp.html", function(data, textStauts) {
        var loadTmpl = $.templates(data);
        $("title").html("加载中...-哈尔滨市暖通风机");
        var html = loadTmpl.render();
        $("#main").html(html);
    });
}

function enav() {
    $('.e-nav a').click(function() {
        $('.e-nav a').removeClass('on');
        $(this).addClass('on');
    });
}

function typehover() {
    $('.pro .p-list>.containern .p-type .list>ul>li').unbind('mouseenter').bind("mouseenter", function() {
        var id = $(this).attr('data-id');
        //  var catname=$(this).find('span').html();
        var target = $(this);
        //$(this).find('.name').html(catname);
        $('.pro .p-list>.containern .p-type .list>ul>li ul').hide();
        // console.log(target.find('ul').html());
        if (target.find('ul').html().length > 0) {
            target.find('ul').fadeIn();
        } else {
            var url = suffix + rukou + 'Products/protpe/catid/' + id;
            $.getJSON(url, function(data) {
                if ('118' === data.err_code) {
                    //console.log(data.err_info);
                    $('.pro .p-list>.containern .p-type .list>ul>li ul').hide();
                    target.find('ul').html(data.err_info);
                    target.find('ul').fadeIn();
                }
            });
        }
    }).unbind('mouseleave').bind("mouseleave", function() {
        $('.pro .p-list>.containern .p-type .list>ul>li ul').hide();
    });
}

function loaditem(d, l, f, m) {
    var _content = [];
    var lanren = {
        _default: d,
        _loading: l,
        init: function() {
            var lis = $(f);
            var mLis = $(f).length;
            var aaa
            //console.log(mLis);
            if (mLis > lanren._default) {
                aaa = lanren._default;
            } else {
                aaa = mLis;
                $(m).hide();
            }
            for (var n = 0; n < aaa; n++) {
                lis.eq(n).show();
                container_aspectratio_responsive();
            }
        },
        loadMore: function() {
            var lis = $(f);
            var mLis = $(f).length;
            var jcnum = $(f + ':visible').length;
            //console.log(jcnum+'/'+mLis);
            if (jcnum == mLis) {
                $(m).html('全部加载完毕');
            }
            for (var i = 0; i < lanren._loading; i++) {
                lis.eq(jcnum + i).show();
                container_aspectratio_responsive();
                if (jcnum + i == mLis) {
                    $(m).html('全部加载完毕');
                }
            }
        }
    }
    $(f).hide();
    lanren.init();
    $(m).click(function() {
        lanren.loadMore();
    });
}

function urlpush(title, url) {
    "use strict";
    var state = {
        title: title,
        url: url
    };
    var loadurl = url;
    window.history.pushState(state, title, loadurl);
}


function container_aspectratio_responsive() {
    "use strict";
    if ($.exists('.container_aspectratio')) {
        $('.container_aspectratio').each(function() {
            var $this = $(this),
                $winwidth = $(window).width(),
                $ratio_num = parseFloat($(this).attr('data-aspectratio')),
                $ratio_type = $(this).attr('data-aspecttype'),
                $ratio_element = $(this).attr('data-aspectelement');

            switch ($ratio_type) {

                //change window.width, height auto
                case 'winwidth_height_auto':
                    $this.height($winwidth / $ratio_num - 2);
                    break;
                    //change window.width, width auto
                case 'winwidth_width_auto':
                    $this.width($winwidth / $ratio_num);
                    break;
                    //change $this.width, height auto
                case 'thiswidth_height_auto':
                    $this.height($this.width() / $ratio_num);
                    break;
                    //img in container ,change window.width, width auto
                case 'winwidth_incon_imgwidth_auto':
                    $this.find('img').each(function() {
                        var $conimgratio_num = parseFloat($(this).attr('data-aspectratio'));
                        $(this).width($winwidth / $conimgratio_num);
                    });
                    break;
                    //element in container ,change window.width, height auto
                case 'winwidth_incon_elementheight_auto':
                    $this.find($ratio_element).each(function() {
                        $(this).height($winwidth / $ratio_num);
                    });
                    break;
                default:
                    $this.height($winwidth / $ratio_num - 2);
            }
        });
    }
}

function animated_contents() {
    "use strict";
    if ($.exists('.animate-element')) {
        $(".animate-element:in-viewport").each(function(i) {
            var $this = $(this);
            if (!$this.hasClass('in-viewport')) {
                setTimeout(function() {
                    $this.addClass('in-viewport');
                }, 100 * i);
            }
        });
        $(".animate-element:below-the-fold").each(function(i) {
            var $this = $(this);
            if ($this.hasClass('in-viewport')) {
                setTimeout(function() {
                    $this.removeClass('in-viewport');
                }, 100 * i);
            }
        });
    }
}

//viewport
(function($) {

    $.belowthefold = function(element, settings) {
        var fold = $(window).height() + $(window).scrollTop();
        return fold <= $(element).offset().top - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var top = $(window).scrollTop();
        return top >= $(element).offset().top + $(element).height() - settings.threshold;
    };

    $.rightofscreen = function(element, settings) {
        var fold = $(window).width() + $(window).scrollLeft();
        return fold <= $(element).offset().left - settings.threshold;
    };

    $.leftofscreen = function(element, settings) {
        var left = $(window).scrollLeft();
        return left >= $(element).offset().left + $(element).width() - settings.threshold;
    };

    $.inviewport = function(element, settings) {
        return !$.rightofscreen(element, settings) && !$.leftofscreen(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
    };

    $.extend($.expr[':'], {
        "below-the-fold": function(a, i, m) {
            return $.belowthefold(a, {
                threshold: 0
            });
        },
        "above-the-top": function(a, i, m) {
            return $.abovethetop(a, {
                threshold: 0
            });
        },
        "left-of-screen": function(a, i, m) {
            return $.leftofscreen(a, {
                threshold: 0
            });
        },
        "right-of-screen": function(a, i, m) {
            return $.rightofscreen(a, {
                threshold: 0
            });
        },
        "in-viewport": function(a, i, m) {
            return $.inviewport(a, {
                threshold: 0
            });
        }
    });


})(jQuery);
//debouncedresize
(function($) {

    var $event = $.event,
        $special, resizeTimeout;

    $special = $event.special.debouncedresize = {
        setup: function() {
            $(this).on("resize", $special.handler);
        },
        teardown: function() {
            $(this).off("resize", $special.handler);
        },
        handler: function(event, execAsap) {
            // Save the context
            var context = this,
                args = arguments,
                dispatch = function() {
                    // set correct event type
                    event.type = "debouncedresize";
                    $event.dispatch.apply(context, args);
                };

            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }

            execAsap ?
                dispatch() :
                resizeTimeout = setTimeout(dispatch, $special.threshold);
        },
        threshold: 150
    };

})(jQuery);

//map
//创建和初始化地图函数：
function initMap() {
    createMap(); //创建地图
    setMapEvent(); //设置地图事件
    addMapControl(); //向地图添加控件
}

//创建地图函数：
function createMap() {
    var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
    var point = new BMap.Point(126.638206, 45.855999); //定义一个中心点坐标
    map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map; //将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent() {
    map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
    map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard(); //启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl() {
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
//backtotop
function backtotop() {
    $("#back-to-top").hide();
    //当滚动条的位置处于距顶部600像素以下时，跳转链接出现，否则消失
    $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
            $("#back-to-top").fadeIn(500);
        } else {
            $("#back-to-top").fadeOut(500);
        }
        $("#back-to-top").click(function() {
            $('body,html').stop().animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
}

function stp() {
    //alert(1)
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
    //$('#spa').fadeIn();
}


// 加入收藏 兼容360和IE6
function shoucang(sTitle, sURL) {
    try {
        window.external.addFavorite(sURL, sTitle);
    } catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
//mousewheel
;
// (function($) {
//     var _ = ["DOMMouseScroll", "mousewheel"];
//     if ($.event.fixHooks)
//         for (var B = _.length; B;) $.event.fixHooks[_[--B]] = $.event.mouseHooks;
//     $.event.special.mousewheel = {
//         setup: function() {
//             if (this.addEventListener) {
//                 for (var $ = _.length; $;) this.addEventListener(_[--$], A, false)
//             } else this.onmousewheel = A
//         },
//         teardown: function() {
//             if (this.removeEventListener) {
//                 for (var $ = _.length; $;) this.removeEventListener(_[--$], A, false)
//             } else this.onmousewheel = null
//         }
//     };
//     $.fn.extend({
//         mousewheel: function($) {
//             return $ ? this.bind("mousewheel", $) : this.trigger("mousewheel")
//         },
//         unmousewheel: function($) {
//             return this.unbind("mousewheel", $)
//         }
//     });
//
//     function A(B) {
//         var _ = B || window.event,
//             A = [].slice.call(arguments, 1),
//             D = 0,
//             C = true,
//             E = 0,
//             F = 0;
//         B = $.event.fix(_);
//         B.type = "mousewheel";
//         if (_.wheelDelta) D = _.wheelDelta / 120;
//         if (_.detail) D = -_.detail / 3;
//         F = D;
//         if (_.axis !== undefined && _.axis === _.HORIZONTAL_AXIS) {
//             F = 0;
//             E = -1 * D
//         }
//         if (_.wheelDeltaY !== undefined) F = _.wheelDeltaY / 120;
//         if (_.wheelDeltaX !== undefined) E = -1 * _.wheelDeltaX / 120;
//         A.unshift(B, D, E, F);
//         return ($.event.dispatch || $.event.handle).apply(this, A)
//     }
// })(jQuery);
