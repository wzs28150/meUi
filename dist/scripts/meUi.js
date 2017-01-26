(function(){var ie=!!(window.attachEvent&&!window.opera);var wk=/webkit\/(\d+)/i.test(navigator.userAgent)&&(RegExp.$1<525);var fn=[];var run=function(){for(var i=0;i<fn.length;i++)fn[i]()};var d=document;d.ready=function(f){if(!ie&&!wk&&d.addEventListener)return d.addEventListener('DOMContentLoaded',f,false);if(fn.push(f)>1)return;if(ie)(function(){try{d.documentElement.doScroll('left');run()}catch(err){setTimeout(arguments.callee,0)}})();else if(wk)var t=setInterval(function(){if(/^(loaded|complete)$/.test(d.readyState))clearInterval(t),run()},0)}})();

document.ready(function(){
  "use strict";
  //console.clear();

  meui.initModule({
      ishash: true,
      url: 'json',
      api: '',
      tpl: 'tpl',
      container: document.getElementById("main"),
      alis:["dist/scripts/package/jquery/jquery-1.11.3.min.js","dist/scripts/package/compat/prefixfree.min.js", "dist/scripts/package/render/jsrender.js"]
  });

});

//入口
var meui = (function() {
    "use strict";
    var initModule = function($setting) {
      meui.loadScript.initModule($setting.alis, function () {
        if($setting.ishash){
            meui.loadScript.initModule("dist/scripts/core/meUi.hash.min.js", function () {
              meui.Start.initModule();
              meui.shell.initModule($setting);
              //meui.copyright.initModule();
              meui.aspectratio.initModule({});
              meui.animated.initModule();
              //入口回调
              meui.Callback.initModule();
            });
        }else{
          meui.loadScript.initModule("dist/scripts/core/meUi.normal.min.js", function () {
            //alert(1)
              meui.Start.initModule();
          });
        }
  		});


    };
    return {
        initModule: initModule
    };
}());


//加载外部js
meui.loadScript = (function() {
	"use strict";
	var initModule,
		parallelLoadScripts;
	parallelLoadScripts = function(scripts, callback) {
		if (typeof(scripts) != "object")
			var scripts = [scripts];
		var HEAD = document.getElementsByTagName("head").item(0) || document.documentElement,
			s = new Array(),
			loaded = 0;
		for (var i = 0; i < scripts.length; i++) {
			s[i] = document.createElement("script");
			s[i].setAttribute("type", "text/javascript");
			s[i].onload = s[i].onreadystatechange = function() { //Attach handlers for all browsers
				if (!/*@cc_on!@*/
				0 || this.readyState == "loaded" || this.readyState == "complete") {
					loaded++;
					this.onload = this.onreadystatechange = null;
					this.parentNode.removeChild(this);
					if (loaded == scripts.length && typeof(callback) == "function")
						callback();
					}
				};
			s[i].setAttribute("src", scripts[i]);
			HEAD.appendChild(s[i]);
		}
	};
	initModule = function(url, callback) {
		parallelLoadScripts(url, callback)
	};
	return {initModule: initModule};
}());
//加载外部css
meui.loadcss = (function() {
	"use strict";
	var initModule,
		dynamicLoading;
	dynamicLoading = function(path) {
		if (!path || path.length === 0) {
			throw new Error('argument "path" is required !');
		}
		var head = document.getElementsByTagName('head')[0];
		var link = document.createElement('link');
		link.href = path;
		link.rel = 'stylesheet';
		link.type = 'text/css';
		head.appendChild(link);
	}
	initModule = function(path) {
		dynamicLoading(path)
	};
	return {initModule: initModule};
}());
