/**
 * -- define init module
 * -- @author xuejia.cxj
 */
define(function(require, exports, module) {
	//-- load js files
	require.async(['boot.css', 'util', 'socketIo', 'bootstrap'], function() {
		//--dom ready, start the app
		$(function() {
			seajs.use(['blackbord', 'student'], function(BlackBord, Student) {
				console.log('haha I am student');
				Student.init();
			});
		});
	});
	module.exports = {
		haha: "haha"
	};
});