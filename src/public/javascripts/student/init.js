/**
 * -- define init module
 * -- @author xuejia.cxj
 */
define(function(require, exports, module) {
	//-- load js files
	require.async(['boot.css', 'util', 'socketIo', 'bootstrap', 'snippet', 'snippet.css'], function() {
		//--dom onload, start the app
		$(function() {
			seajs.use(['blackbord', 'student', 'impress'], function(BlackBord, Student) {
				console.log('haha I am student');
				Student.init();

				//--code pres
				var $js = $("pre.js");

				$('.codeContainer').bind('scroll', function(){
					console.log('scroll');
					var $ul = $(this).find('ul');
					$ul.css('opacity', 0.99);
					setTimeout(function(){
						$ul.css('opacity', 1);
					}, 0);
				});

				$js.snippet("javascript", {
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

