//core 核心方法把不修改的写在里面
//meui 入口主方法
//meui.exists 判断dom是否存在
//meui.copyright wzs 版权~
//meui.util 通用方法
//meui.aspectratio处理元素尺寸
//meui.inviewport 动画处理判断可视区
//meui.animated 处理动画
//meui.shell 插件模块主方法
//meui.hashset 处理hash
//meui.templates 处理模板碎片
//meui.loadMore 加载更多
//meui.medel 处理模型层
//Swiper 图片切换插件



meui.exists = function(selector) {
    "use strict";
    return ($(selector).length > 0);
};
//copyright
meui.copyright = (function() {
    "use strict";
    var initModule = function() {
        var _content = '';
        //  _content = '
        //  ,;:,     :::.     ;:; ;rr;r;;:::;:    :JXXFi.
        //  ,BMB    ZBBBM    RBBE MBMBBBMBMBMB  OBMBMBMBMBr
        //   DBMJ   BMBBBu   MBM        :BBMK  FBMU     MMB
        //    MBM  WMB RMB  xBMJ       RMBM.   :BBMBEu:
        //    RMB  MBH .BML BBB      FBMB;       ;RMBMBMBB;
        //     BMDXBM   MBMcMB3    rMBMJ              .7MBM7
        //     MBMBBS   .MBMBM   ,BMBK         MBMi     RMBL
        //     :MBMB     RMBMX   BMBMBMBMBBBMB .MBMBBBBBMB2
        //      ,..       ,.,    ..  .,,:,::::    .iLLL:     ';
        console.log(_content);
    };
    return {
        initModule: initModule
    };
}());
//处理元素高度
meui.aspectratio = (function($) {
    "use strict";
    var initModule, container_aspectratio_responsive;
    container_aspectratio_responsive = function() {
        "use strict";
        if (meui.exists('.container_aspectratio')) {
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
    initModule = function() {
        //meui.inviewport
        container_aspectratio_responsive();
        $(document).ready(function() {
            container_aspectratio_responsive();
        });
    };
    return {
        initModule: initModule
    };
}(jQuery));
//处理动画
meui.viewport = (function($) {
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
meui.animated = (function($) {
    "use strict";
    var initModule, animated_contents;
    animated_contents = function() {
        if (meui.exists('.animate-element')) {
            $(".animate-element:in-viewport").each(function(i) {
                var $this = $(this);
                if (!$this.hasClass('in-viewport')) {
                    setTimeout(function() {
                        $this.addClass('in-viewport');
                    }, 100 * i);
                }
            });
        }
        $(".animate-element:below-the-fold").each(function(i) {
            var $this = $(this);
            if ($this.hasClass('in-viewport')) {
                setTimeout(function() {
                    $this.removeClass('in-viewport');
                }, 100 * i);
            }
        });
    };
    initModule = function() {
        //meui.inviewport.initModule();
        animated_contents();
        $(window).scroll(function() {
            animated_contents();
        });
    };
    return {
        initModule: initModule
    };
}(jQuery));

meui.html_overflow = (function() {
	"use strict";
	var initModule;
	initModule = function(boolen) {
		if (boolen) { $('html').css('overflow-y', 'scroll'); } else { $('html').css('overflow', 'hidden'); }
	};
	return {initModule: initModule};
}());

meui.urlpush = (function() {
	"use strict";
	var state = {
			title: '',
			url: ''
		},
		initModule;
	initModule = function(title, url) {
		state.title = title;
		state.url = url;
		window.history.pushState(state, title, url);
	};
	return {initModule: initModule};
}());

//判断ie 包括ie 10,11
meui.isIE = (function() {
	"use strict";
	var initModule;
	initModule = function() {
		if (!!window.ActiveXObject || "ActiveXObject" in window) {
			return true;
		} else {
			return false;
		}
	};
	return {initModule: initModule};
}());

//shell
meui.shell = (function() {
    "use strict";
    var stateMap = {
            ishash: false,
            container: null,
            url: '/',
            api: 'api.php/',
            tpl: ''
        },
        jqueryMap = {},
        setJqueryMap, initModule;
    setJqueryMap = function() {
        var $container = stateMap.container;
        var $ishash = stateMap.ishash;
        var $tpl = stateMap.tpl;
        var $url = stateMap.url;
        var $api = stateMap.api;
        jqueryMap = {
            $container: $container,
            $ishash: $ishash,
            $tpl: $tpl,
            $url: $url,
            $api: $api
        };
    };
    initModule = function($setting) {
        //console.log($setting);
        stateMap.ishash = $setting.ishash;
        stateMap.container = $($setting.container);
        stateMap.url = $setting.url;
        stateMap.api = $setting.api;
        stateMap.tpl = $setting.tpl;
        setJqueryMap();
        //判断是否开启hash模式
        if (jqueryMap.$ishash) {
            console.log('hash is done');
            //meui.hashset.configMap = {};
            //console.log(jqueryMap.$container);
            meui.hashset.initModule(jqueryMap);
        } else {
            console.log('hash is close');
        }
    };
    return {
        initModule: initModule
    };
}());
meui.loadMore = (function() {
    var stateMap = {
            _default: '',
            _loading: null,
            _item: '',
            _more: ''
        },
        content = [],
        initModule, init, jqueryMap = {},
        setJqueryMap;
    setJqueryMap = function() {
        var $default = stateMap._default;
        var $loading = stateMap._loading;
        var $item = stateMap._item;
        var $more = stateMap._more;
        jqueryMap = {
            $default: $default,
            $loading: $loading,
            $item: $item,
            $more: $more
        };
    };
    init = function() {
        var lis = $(jqueryMap.$item);
        var mLis = $(jqueryMap.$item).length;
        var aaa
            //console.log(mLis);
        if (mLis > jqueryMap.$default) {
            aaa = jqueryMap.$default;
        } else {
            aaa = mLis;
            $(jqueryMap.$more).hide();
        }
        for (var n = 0; n < aaa; n++) {
            lis.eq(n).show();
        }
    };
    loadMore = function() {
        var lis = $(jqueryMap.$item);
        var mLis = $(jqueryMap.$item).length;
        var jcnum = $(jqueryMap.$item + ':visible').length;
        //console.log(jcnum+'/'+mLis);
        if (jcnum == mLis) {
            $(jqueryMap.$more).html('全部加载完毕');
        }
        for (var i = 0; i < jqueryMap.$loading; i++) {
            lis.eq(jcnum + i).show();
            meui.aspectratio.initModule({});
            if (jcnum + i == mLis) {
                $(jqueryMap.$more).html('全部加载完毕');
            }
        }
    }
    initModule = function(d, l, f, m) {
        stateMap._default = d;
        stateMap._loading = l;
        stateMap._item = f;
        stateMap._more = m;
        setJqueryMap();
        $(jqueryMap.$item).hide();
        init();
        $(jqueryMap.$more).click(function() {
            loadMore();
        });
    };
    return {
        initModule: initModule
    };
}());
//处理hash
meui.hashset = (function() {
    "use strict";
    var stateMap = {
            hasharry: '',
            hash: null,
            hashmain: '',
            container: '',
            catid: null,
            tempindex: '',
            type: '',
            tpl: '',
            url: '',
            api: ''
        },
        initModule, getHash, onHashchange,
        jqueryMap = {},
        setJqueryMap;
    setJqueryMap = function() {
        var $hasharry = stateMap.hasharry;
        var $hash = stateMap.hash;
        var $hashmain = stateMap.hashmain;
        var $container = stateMap.container;
        var $catid = stateMap.catid;
        var $tempindex = stateMap.tempindex;
        var $type = stateMap.type;
        var $tpl = stateMap.tpl;
        var $url = stateMap.url;
        var $api = stateMap.api;
        jqueryMap = {
            $hasharry: $hasharry,
            $hash: $hash,
            $hashmain: $hashmain,
            $catid: $catid,
            $tempindex: $tempindex,
            $type: $type,
            $container: $container,
            $tpl: $tpl,
            $url: $url,
            $api: $api
        };
    };
    getHash = function() {
        if (jqueryMap.$hasharry != '') {
            //console.log(jqueryMap.$hasharry);
            jqueryMap.$hash = jqueryMap.$hasharry[1].split("/");
            if (jqueryMap.$hash.length > 0) {
                jqueryMap.$catid = jqueryMap.$hash[3];
                jqueryMap.$tempindex = jqueryMap.$hash[1];
                jqueryMap.$type = jqueryMap.$hash[2];
                jqueryMap.$hashmain = jqueryMap.$hash[0];
            }
        } else {
            jqueryMap.$hash = '';
        }
    };
    onHashchange = function() {
        stateMap.hasharry = location.hash.split("#");
        setJqueryMap();
        //console.log(stateMap.hasharry);
        getHash();
        //console.log(jqueryMap);
        meui.medel.initModule(jqueryMap);
        //meui.templates.initModule(jqueryMap);
        meui.animated.initModule();
        //console.log(jqueryMap);
        //meui.templates.jquerydata = meui.medel.jquerydata;
        //console.log(meui.medel.jquerydata);
    };
    initModule = function($setting) {
        stateMap.container = $setting.$container;
        stateMap.tpl = $setting.$tpl;
        stateMap.url = $setting.$url;
        stateMap.api = $setting.$api;
        setJqueryMap();
        $(window).unbind('hashchange').bind('hashchange', onHashchange).trigger('hashchange');
    };
    //console.log(configMap);
    return {
        initModule: initModule
    };
}());

meui.action = (function() {
	"use strict";
	var loadAction,
		initModule;
	loadAction = function($action) {
		var actionstr = 'meui.' + $action + '_action.initModule();';
		var bar = eval;
		//evil(actionstr);
		bar(actionstr);
		meui.aspectratio.initModule();
	};
	initModule = function($action, load) {
		//meui.loadScript.initModule(load,loadAction($action));
		var jsstr = 'var scripts = ["dist/scripts/lib/'+$action+'Action.class.js"];';
		var bar = eval;
		bar(jsstr);
		meui.loadScript.initModule(scripts, function () {
			loadAction($action);
		});

		meui.aspectratio.initModule();
		meui.animated.initModule();
		//入口回调
		//meui.Callback.initModule();
	};
	return {initModule: initModule};
}());
//加载模板
meui.templates = (function() {
    "use strict";
    var stateMap = {
            tpl: '',
            hashmain: '',
            container: '',
            tempindex: ''
        },
        initModule,
        jqueryMap = {},
        setJqueryMap, jqueryMap, settemplates, loadtemplates, loadAction, reload, svgan;
    setJqueryMap = function() {
        var $hashmain = stateMap.hashmain;
        var $tpl = stateMap.tpl;
        var $container = stateMap.container;
        var $tempindex = stateMap.tempindex;
        jqueryMap = {
            $hashmain: $hashmain,
            $tpl: $tpl,
            $container: $container,
            $tempindex: $tempindex,
        };
    };
    //加载控制器
    loadAction = function(data) {
        if (jqueryMap.$hashmain) {
            //actionstr = 'meui.' + jqueryMap.$hashmain + '_action.initModule(data,jqueryMap);';
            meui.action.initModule(jqueryMap.$hashmain);
        } else {
            //actionstr = 'meui.Index_action.initModule(data,jqueryMap);';
            meui.action.initModule('Index');

        }
        //console.log(jqueryMap.$hashmain);
        meui.aspectratio.initModule({});


    };
    loadtemplates = function() {
        $(jqueryMap.$container).css('min-height', ($(window).height() - $('header').height()) + "px");
        $.get("./" + jqueryMap.$tpl + "/" + "Load_tmp.html", function(tempdata) {
            var Tmpl = $.templates(tempdata);
            //console.log(jquerydata);
            var html = Tmpl.render();
            $("title").html("加载中-meUI");
            $(jqueryMap.$container).html(html);
            svgan();
            $('article').addClass('in-viewport');
            reload();
        });
    };
    svgan = function() {
        $('.squiggle-animated path').each(function(i) {
            var path = $(this)[0];
            var length = path.getTotalLength();
            // Clear any previous transition
            path.style.transition = path.style.WebkitTransition =
                'none';
            // Set up the starting positions
            path.style.strokeDasharray = length + ' ' + length;
            path.style.strokeDashoffset = length;
            // Trigger a layout so styles are calculated & the browser
            // picks up the starting position before animating
            path.getBoundingClientRect();
            // Define our transition
            path.style.transition = path.style.WebkitTransition =
                'stroke-dashoffset 2s ease-in-out';
            // Go!
            path.style.strokeDashoffset = '0';
        });

    }
    reload = function() {
        //alert(1)
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
        //$('#spa').fadeIn();
    };
    settemplates = function(data) {
        //console.log(jqueryMap.$hashmain);
        if (jqueryMap.$hashmain != '') {
            if (jqueryMap.$tempindex == 'show') {
                $.get("./" + jqueryMap.$tpl + "/" + jqueryMap.$hashmain + "_main_tmp.html", function(tempdata) {
                    var Tmpl = $.templates(tempdata);
                    var html = Tmpl.render(data);
                    //$("title").html(data.err_title + "-哈尔滨市暖通风机");
                    $(jqueryMap.$container).html(html);
                    loadAction(data);
                    $('article').addClass('in-viewport');
                });
            } else {
                //alert(1)
                $.get("./" + jqueryMap.$tpl + "/" + jqueryMap.$hashmain + "_tmp.html", function(tempdata, textStauts) {
                    var Tmpl = $.templates(tempdata);
                    var html = Tmpl.render(data);
                    $("title").html(data.err_catname + "-meui");
                    $(jqueryMap.$container).html(html);
                    loadAction(data);
                    meui.aspectratio;
                    $('article').addClass('in-viewport');
                });
            }
        } else {
            $.get("./" + jqueryMap.$tpl + "/" + "Index_tmp.html", function(tempdata) {
                var Tmpl = $.templates(tempdata);
                //meui.medel.initModule(jqueryMap);
                var html = Tmpl.render(data);
                $(jqueryMap.$container).html(html);
                loadAction(data);
                $('article').addClass('in-viewport');
            });
        }
    };
    initModule = function($setting, data) {
        //console.log($setting);
        stateMap.container = $setting.$container;
        stateMap.tpl = $setting.$tpl;
        stateMap.hashmain = $setting.$hashmain;
        stateMap.tempindex = $setting.$tempindex;
        //console.log($setting);
        setJqueryMap();
        loadtemplates();
        setTimeout(function() {
            settemplates(data);
        }, 2400);

    };
    //console.log(configMap);
    return {
        initModule: initModule
    };
}());
//处理data
meui.medel = (function() {
    "use strict";
    var stateMap = {
            tpl: '',
            hashmain: '',
            container: '',
            tempindex: '',
            hasharry: null
        },
        jquerydata,
        jqueryMap = {},
        setJqueryMap,
        initModule, loadData;
    setJqueryMap = function() {
        var $url = stateMap.url;
        var $api = stateMap.api;
        var $hashmain = stateMap.hashmain;
        var $hasharry = stateMap.hasharry;
        var $container = stateMap.container;
        var $tempindex = stateMap.tempindex;
        var $tpl = stateMap.tpl;
        jqueryMap = {
            $url: $url,
            $api: $api,
            $hasharry: $hasharry,
            $hashmain: $hashmain,
            $container: $container,
            $tempindex: $tempindex,
            $tpl: $tpl,
        };
    };
    loadData = function() {
        if (jqueryMap.$hasharry != "") {
            if (jqueryMap.$tempindex == "show") {
                var url = jqueryMap.$url + jqueryMap.$api + '/' + jqueryMap.$hashmain + '_show.json';
            } else {
                var url = jqueryMap.$url + jqueryMap.$api + '/' + jqueryMap.$hashmain + '.json';
            }
        } else {
            var url = jqueryMap.$url + jqueryMap.$api + '/Index.json';
        }
        $.getJSON(url, function(data) {
            if ('118' === data.err_code) {
                meui.templates.initModule(jqueryMap, data);
            }
        });
    };
    initModule = function($setting) {
        //  console.log($setting);
        stateMap.url = $setting.$url;
        stateMap.api = $setting.$api;
        stateMap.hasharry = $setting.$hasharry;
        stateMap.hashmain = $setting.$hashmain;
        stateMap.container = $setting.$container;
        stateMap.tpl = $setting.$tpl;
        stateMap.tempindex = $setting.$tempindex;
        setJqueryMap();
        loadData();
    };
    //console.log(configMap);
    return {
        initModule: initModule
    };
}());

meui.component = (function() {
  var stateMap = {},initModule,Load;
  Load = function(){
    var Tmpl = $.templates(stateMap.Tmpl);
    var html = Tmpl.render(stateMap.data);
    stateMap.el.html(html);
  };
  initModule = function($setting) {
    stateMap.el = $($setting.el);
    stateMap.Tmpl = $setting.tmpl;
    stateMap.data = $setting.data;
    stateMap.methods = $setting.methods;
    stateMap.el.html('');
    Load();
  };
  return {
      initModule: initModule,
  };
}());

meui.Start = (function() {
    "use strict";
    var stateMap = {},
        jqueryMap = {},
        setJqueryMap,
        initModule;
    setJqueryMap = function() {};
    initModule = function() {
        var scripts = ["dist/scripts/lib/Public.js"];
        meui.loadScript.initModule(scripts, function() {
          meui.Public_action.initModule();
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

    };
    return {
        initModule: initModule,
    };
}());
