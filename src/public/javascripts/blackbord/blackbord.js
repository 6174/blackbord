/**
 * define blackbord module
 */
define(function(require, exports, module) {
	var BlackBord = {};

	BlackBord.init = function() {
		console.log('init blackbord');
		initReveal();
	}

	BlackBord.goTo = function(indices) {
		Reveal.slide( indices.h, indices.v, indices.f);
	}

	BlackBord.next = function() {
		// im.next();
	}

	BlackBord.prev = function() {
		// im.prev();
	}

	BlackBord.currentStep = function() {
		// return im.activeStep();
		return Reveal.getIndices();
	}

	function initReveal() {
		Reveal.initialize({
			// Display controls in the bottom right corner
			controls: true,
			// Display a presentation progress bar
			progress: true,
			// Push each slide change to the browser history
			history: false,
			// Enable keyboard shortcuts for navigation
			keyboard: true,
			// Enable touch events for navigation
			touch: true,
			// Enable the slide overview mode
			overview: true,
			// Vertical centering of slides
			center: true,
			// Loop the presentation
			loop: false,
			// Change the presentation direction to be RTL
			rtl: false,
			// Number of milliseconds between automatically proceeding to the
			// next slide, disabled when set to 0, this value can be overwritten
			// by using a data-autoslide attribute on your slides
			autoSlide: 0,
			// Enable slide navigation via mouse wheel
			mouseWheel: false,
			// Transition style
			transition: 'default', // default/cube/page/concave/zoom/linear/fade/none
			// Transition speed
			transitionSpeed: 'default', // default/fast/slow
			// Transition style for full page backgrounds
			backgroundTransition: 'default', // default/linear/none
			width: 960,
		    height: 700,
		    // Factor of the display size that should remain empty around the content
		    margin: 0.1,
		    // Bounds for smallest/largest possible scale to apply to content
		    minScale: 0.6,
		    maxScale: 1.0
		});
	}
	require.async([
		'snippet', 'snippet.css',
		'lib/reveal/lib/js/classList.js',
		'lib/reveal/plugin/markdown/marked.js',
		'lib/reveal/plugin/markdown/markdown.js',
		'lib/reveal/plugin/highlight/highlight.js',
		'lib/reveal/css/theme/default.css',
		'reveal', 'reveal.css'], function() {
		BlackBord.init();
	});
	module.exports = BlackBord;
});
// dependencies: [
// 	// Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
// 	{
// 		src: 'lib/reveal/lib/js/classList.js',
// 		condition: function() {
// 			return !document.body.classList;
// 		}
// 	},

// 	// Interpret Markdown in <section> elements
// 	{
// 		src: 'lib/reveal/plugin/markdown/marked.js',
// 		condition: function() {
// 			return !!document.querySelector('[data-markdown]');
// 		}
// 	},
// 	//--markdown
// 	{
// 		src: 'lib/reveal/plugin/markdown/markdown.js',
// 		condition: function() {
// 			return !!document.querySelector('[data-markdown]');
// 		}
// 	},

// 	// Syntax highlight for <code> elements
// 	{
// 		src: 'lib/reveal/plugin/highlight/highlight.js',
// 		async: true,
// 		callback: function() {
// 			hljs.initHighlightingOnLoad();
// 		}
// 	}
// ]