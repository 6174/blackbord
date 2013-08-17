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

	BlackBord.next = function(){
		im.next();
	}

	BlackBord.prev = function(){
		im.prev();
	}

	BlackBord.currentStep = function(){
		return im.activeStep();
	}

	BlackBord.init();
	module.exports = BlackBord;
});