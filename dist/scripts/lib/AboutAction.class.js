meui.About_action = (function() {
	"use strict";
	var initModule;

	initModule = function() {
		console.log('About is load');
		meui.Nav.initModule(1);
	};
	return {initModule: initModule};
}());
