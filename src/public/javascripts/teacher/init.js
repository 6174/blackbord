/**
 * -- define init module
 * -- @author xuejia.cxj
 */
define(function(require, exports, module) {
	//-- load js files
	require.async(['boot.css', 'util', 'socketIo', 'bootstrap', 'snippet', 'snippet.css'], function() {
		//--dom onload, start the app
		$(function() {
			seajs.use(['blackbord', 'teacher', 'impress'], function(BlackBord, Teacher) {
				console.log('haha I am teacher');
				Teacher.init();


				//--syntax-highlight
				$("pre.js").snippet("javascript", {
					style: "darkness",
					'showNum': false
				});
			});
		});
	});
	module.exports = {
		haha: "haha"
	};
});