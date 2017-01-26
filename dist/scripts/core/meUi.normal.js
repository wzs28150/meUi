//core 核心方法文件把不修改的写在里面

//meui 入口主方法
//meui.exists 判断dom是否存在
//meui.copyright wzs 版权~
//meui.util 通用方法
//meui.aspectratio处理元素尺寸
//meui.inviewport 动画处理判断可视区
//meui.animated 处理动画
//meui.shell 插件模块主方法
//meui.loadMore 加载更多
	/*(例 ：meui.loadMore.initModule(9, 3, '.list .item', '.loadmore');)*/
//meui.isIE 判断ie 包括ie 10,11
//meui.loadScript 加载外部js
//meui.loadcsss 加载外部css
//meui.urlpush url推送
//meui.action 加载控制器入口
//meui.html_overflow.initModule() 处理滚动条

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
	return {initModule: initModule};
}());
//处理元素高度
meui.aspectratio = (function($) {
	"use strict";
	var initModule,
		container_aspectratio_responsive;
	container_aspectratio_responsive = function() {
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
	};
	initModule = function() {
		//meui.inviewport
		container_aspectratio_responsive();
		$(document).ready(function() {
			container_aspectratio_responsive();
		});
	};
	return {initModule: initModule};
}(jQuery));
//处理动画
meui.viewport = (function($) {
	"use strict";
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
		"below-the-fold": function(a) {
			return $.belowthefold(a, {threshold: 0});
		},
		"above-the-top": function(a) {
			return $.abovethetop(a, {threshold: 0});
		},
		"left-of-screen": function(a) {
			return $.leftofscreen(a, {threshold: 0});
		},
		"right-of-screen": function(a) {
			return $.rightofscreen(a, {threshold: 0});
		},
		"in-viewport": function(a) {
			return $.inviewport(a, {threshold: 0});
		}
	});
})(jQuery);
meui.animated = (function($) {
	"use strict";
	var initModule,
		animated_contents;
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
	return {initModule: initModule};
}(jQuery));
meui.loadMore = (function() {
	"use strict";
	var stateMap = {
			_default: '',
			_loading: null,
			_item: '',
			_more: ''
		},
		initModule,
		init,
		jqueryMap = {},
		setJqueryMap,
		loadMore;
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
		var aaa;
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
		if (jcnum === mLis) {
			$(jqueryMap.$more).html('全部加载完毕');
		}
		for (var i = 0; i < jqueryMap.$loading; i++) {
			lis.eq(jcnum + i).show();
			meui.aspectratio.initModule({});
			if (jcnum + i === mLis) {
				$(jqueryMap.$more).html('全部加载完毕');
			}
		}
	};
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
	return {initModule: initModule};
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
		meui.aspectratio.initModule({});
	};
	initModule = function($action, load) {
		//meui.loadScript.initModule(load,loadAction($action));
		var jsstr = 'var scripts = ["dist/scripts/package/compat/prefixfree.min.js", "dist/scripts/package/render/jsrender.js","dist/scripts/lib/'+$action+'Action.class.js"];';
		var bar = eval;
		bar(jsstr);
		meui.loadScript.initModule(scripts, function () {
			loadAction($action);
		});

		meui.aspectratio.initModule({});
		meui.animated.initModule();
		//入口回调
		meui.Callback.initModule();
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

meui.html_overflow = (function() {
	"use strict";
	var initModule;
	initModule = function(boolen) {
		if (boolen) { $('html').css('overflow-y', 'scroll'); } else { $('html').css('overflow', 'hidden'); }
	};
	return {initModule: initModule};
}());

meui.Nav = (function() {
	"use strict";
	var initModule,gdt,start,move,startX;
	gdt = function(){
		meui.loadcss.initModule("dist/scripts/package/scroll/jquery.mCustomScrollbar.min.css");
		var scripts = ["dist/scripts/package/scroll/jquery.mCustomScrollbar.concat.min.js"];
		meui.loadScript.initModule(scripts, function() {
			$(".right-nav").mCustomScrollbar({scrollButtons:{'disable':true},updateOnContentResize:!0})
		});
	};
	start = function(e){
		startX = e.changedTouches[0].pageX;
	};
	move  = function(e){
		//e.preventDefault();
  	var moveX = e.changedTouches[0].pageX;
  	var moveDistance = moveX - startX;
		if ( moveDistance < 0  ) {
    $('body').addClass('on');
		}
	};
	initModule = function() {
		$('header .menu a').click(function(){
			$('body').toggleClass('on');
		});
		$('.nav-close').click(function(){
			$('body').removeClass('on');
		});
		//alert($(window).height())
		if($(window).height()< 460){
			gdt();
		}
		$(window).resize(function(){
			if($(window).height()< 460){
				gdt();
			}
		});

		$('header')[0].addEventListener('touchstart',start);
		$('header')[0].addEventListener('touchend',move);
	};
	return {initModule: initModule};
}());
//搜索
meui.Search = (function() {
	"use strict";
	var initModule,
		search;
	search = function() {};
	initModule = function() {
		$('#search-btn').click(function() {
			search();
		});
	};
	return {initModule: initModule};
}());



//加载回调
meui.Callback = (function() {
	"use strict";
	var initModule;
	initModule = function() {
    var scripts = ["dist/scripts/lib/Public.js"];
		meui.loadScript.initModule(scripts, function() {
      meui.Public_action.initModule();
    });
		meui.Nav.initModule();
	};
	return {initModule: initModule};
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
