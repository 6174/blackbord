/**
 * define blackbord module
 */
define(function(require, exports, module) {
	var im;
	var BlackBord = {};
	BlackBord.init = function() {
		window.im = im = impress();
		im.init();
	}
	BlackBord.goTo = function(i) {
		im.goto(i)
	}

	BlackBord.init();
	module.exports = BlackBord;
});