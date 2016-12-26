$(window).scroll(function() {
    animated_contents();
});
$(window).on('debouncedresize', function() {
    container_aspectratio_responsive();
    full_height_responsive();
});
$(window).resize(function() {
    "use strict";
    container_aspectratio_responsive();
});



$(document).ready(function() {
    "use strict";
    container_aspectratio_responsive();
    full_height_responsive();
    animated_contents();
    /*console.log('
     ,;:,     :::.     ;:; ;rr;r;;:::;:    :JXXFi.
     ,BMB    ZBBBM    RBBE MBMBBBMBMBMB  OBMBMBMBMBr
      DBMJ   BMBBBu   MBM        :BBMK  FBMU     MMB
       MBM  WMB RMB  xBMJ       RMBM.   :BBMBEu:
       RMB  MBH .BML BBB      FBMB;       ;RMBMBMBB;
        BMDXBM   MBMcMB3    rMBMJ              .7MBM7
        MBMBBS   .MBMBM   ,BMBK         MBMi     RMBL
        :MBMB     RMBMX   BMBMBMBMBBBMB .MBMBBBBBMB2
         ,..       ,.,    ..  .,,:,::::    .iLLL:     ');
    */
    //	$('#i_support').support({});

    backtotop();
		$('body').delegate("a","click",function(e){
					e.stopPropagation;
					//onHashchange();
			})
    //$(window).unbind('hashchange').bind( 'hashchange', onHashchange ).trigger( 'hashchange' );
});
//base set
function is_touch_device() {
    return ('ontouchstart' in document.documentElement);
}

function is_ie8() {
    return (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE8.0");
}

function is_ie() {
    return (navigator.userAgent.indexOf("Trident") > -1);
}
jQuery.exists = function(selector) {
    return (jQuery(selector).length > 0);
};
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
            var scroH = $(this).scrollTop();
            $(target).scrollTop();
            //console.log(targetH+'/'+scroH);
            if (scroH >= targetH - 100) {
                if ($('.index .i_support .circular .span.on').length <= 0) {
                    initial();
                }
            } else {
                //console.log($('.index .i_support .circular .span.on').length);
                if ($('.index .i_support .circular .span.on').length > 0) {

                    chushihua();
                }
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

(function(e, t) {
    "use strict";
    typeof define == "function" && define.amd ? define(t) : typeof exports == "object" && typeof module == "object" ? module.exports = t() : e.smoothScroll = t()
})(this, function() {
    "use strict";
    if (typeof window != "object") return;
    if (document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) return;
    var e = function(e, t) {
            return e.nodeName === "HTML" ? -t : e.getBoundingClientRect().top + t
        },
        t = function(e) {
            return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
        },
        n = function(e, n, r, i) {
            return r > i ? n : e + (n - e) * t(r / i)
        },
        r = function(t, r, i, s) {
            r = r || 500, s = s || window;
            var o = s.scrollTop || window.pageYOffset;
            if (typeof t == "number") var u = parseInt(t);
            else var u = e(t, o);
            var a = Date.now(),
                f = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                    window.setTimeout(e, 15)
                },
                l = function() {
                    var e = Date.now() - a;
                    s !== window ? s.scrollTop = n(o, u, e, r) : window.scroll(0, n(o, u, e, r)), e > r ? typeof i == "function" && i(t) : f(l)
                };
            l()
        },
        i = function(e) {
            e.preventDefault(), location.hash !== this.hash && window.history.pushState(null, null, this.hash);
            var t = document.getElementById(this.hash.substring(1));
            if (!t) return;
            r(t, 500, function(e) {
                location.replace("#" + e.id)
            })
        };
    return document.addEventListener("DOMContentLoaded", function() {
        var e = document.querySelectorAll('a[href^="#"]:not([href="#"])'),
            t;
        for (var n = e.length; t = e[--n];) t.addEventListener("click", i, !1)
    }), r
});

//animate
function animated_contents() {

    if ($.exists('.animate-element')) {
        $(".animate-element:in-viewport").each(function(i) {
            var $this = $(this);
            if (!$this.hasClass('in-viewport')) setTimeout(function() {
                $this.addClass('in-viewport');
            }, 100 * i);
        });
    }
}
//nav
function header_menu(i) {
    $('header nav a').eq(i).addClass('on');
}
// full height
function full_height_responsive() {
    if ($.exists('.full-height-true')) {
        $('.full-height-true').each(function() {
            var $this = $(this),
                $header_hieght = $('header').height(),
                $withoutheader = $(this).attr('data-withoutheader');
            if ($withoutheader == 'true')
                $this.height($(window).height() - $header_hieght);
            else
                $this.height($(window).height());
        });
    }
}
// w h
function container_aspectratio_responsive() {
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
//
function urlpush(title, url) {
    "use strict";
    var state = {
        title: title,
        url: url
    };
    var loadurl = url;
    window.history.pushState(state, title, loadurl);
}

function html_overflow(boolen) {
    "use strict";
    if (boolen) {
        $('html').css('overflow-y', 'scroll');
    } else {
        $('html').css('overflow', 'hidden');
    }
}
$(window).bind('hashchange', onHashchange).trigger('hashchange');

function onHashchange() {
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
console.log(hash[0]);
    switch (hash[0]) {
        case 'Products':
            setTimeout(function() {
                load();
            }, 500);
            break;
        case 'About':
            setTimeout(function() {
                about();
            }, 500);
            break;
        default:
            setTimeout(function() {
                index();
            }, 500);
    }
    return false;
};

function load() {
    $('main').css('min-height', ($(window).height() - $('header').height()) + "px");
    var html = $("#load1Tmpl").render();
    $("#main").html(html);
}

function index() {
    var html = $("#indexTmpl").render();
    $("#main").html(html);
    $('#i_support').support({

    });
    if ($.exists('.index .i_banner')) {
        var mySwiper = new Swiper('.i_banner .swiper-container', {
            pagination: '.i_banner .pagination',
            loop: true,
            calculateHeight: true,
            paginationClickable: true,
            speed: 2000,
            autoplay: 2000
        });
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
            calculateHeight: true,
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
        var iproSwiper = new Swiper('.i_cooper_chage .swiper-container', {
            pagination: '.i-pro-change .pagination',
            loop: true,
            calculateHeight: true,
            paginationClickable: true,
            speed: 2000,
        });
        $('.i_cooper_chage .arrow-left').on('click', function(e) {
            e.preventDefault();
            iproSwiper.swipePrev();
        });
        $('.i_cooper_chage .arrow-right').on('click', function(e) {
            e.preventDefault();
            iproSwiper.swipeNext();
        });
    }

}


function about() {
    var html = $("#aboutTmpl").render();
    $("#main").html(html);
}
