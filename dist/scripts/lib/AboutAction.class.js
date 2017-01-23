meui.About_action = (function() {
	"use strict";
	var initModule;

	initModule = function() {
		console.log('About is load');
		$("title").html("首页-meUI");
		meui.Nav.initModule(1);
	};
	return {initModule: initModule};
}());
