meui.Public_action = (function() {
	"use strict";
	var initModule;
	initModule = function() {
		//alert(1);
		//meui.Backtotop.initModule();
    var url = "json/Nav.json";
    $.getJSON(url, function(data) {
        if ('118' === data.err_code) {
          meui.component.initModule({
            el: 'nav',
            data: data,
            tmpl:'{{for navlist}}<a class="left-to-right animate-element in-viewport" href="{{:target}}">{{:title}}</a>{{/for}}',
            methods: {

            }
          });

        }
    });


	};
	return {initModule: initModule};
}());
meui.Backtotop = (function() {
	"use strict";
	var stateMap = {},
		jqueryMap = {},
		setJqueryMap,
		initModule,
		backtotop,
		backbuttonshow;
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
	return {initModule: initModule};
}());
meui.Nav = (function() {
	"use strict";
	var stateMap = {},
		jqueryMap = {},
		setJqueryMap,
		initModule,
		navOn,
		navToggle,navaTogge;
	setJqueryMap = function() {};
	navToggle = function() {
		$('header .navbar-toggle').click(function(e) {
      e.stopPropagation();
			if ($("header nav").is(":hidden")) {
				$("header nav").slideDown(); //如果元素为隐藏,则将它显现
			} else {
				$("header nav").slideUp(); //如果元素为显现,则将其隐藏
			}

		});
	};
  navaTogge = function(){
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
  }
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
      navaTogge();
		}
		$(window).resize(function() {
			if ($(window).width() < 960) {
				navToggle();
        navaTogge();
			}
		});
	};
	return {initModule: initModule};
}());
