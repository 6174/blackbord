/**
 * -- define init module
 * -- @author xuejia.cxj
 */
define(function(require, exports, module) {
	//-- load js files
	require.async(['boot.css', 'util', 'socketIo', 'bootstrap'], function(){
		//--dom onload, start the app
		$(function() {
			seajs.use(['blackbord', 'impress'], function(BlackBord) {
				var im = impress();
				console.log(im.init(), im);
				setTimeout(function(){
					im.next();
				}, 2000);
				// BlackBord.init();
			});
		});
	});
	module.exports = {haha: "haha"};
});