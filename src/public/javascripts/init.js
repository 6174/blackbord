/**
 * -- define init module
 * -- @author xuejia.cxj
 */
define(function(require, exports, module) {
	//-- load css files
	require('boot.css');
	//-- load js files
	require.async(['util', 'socketIo', 'bootstrap'], function(){
		//--dom onload, start the app
		$(function() {
			seajs.use('blackbord', function(BlackBord) {
				BlackBord.init();
			});
		});
	});
	module.exports = {haha: "haha"};
});