/**
 * blackbord app seajs config
 */
(function() {
	var host = '';
	seajs.config({

		base: host + '/',

		// 设置路径，方便跨目录调用
		paths: {
			'lib': 'lib',
			'js': 'javascripts',
			'css': 'stylesheets'
		},

		// 设置别名，方便调用
		alias: {
			'jquery': 'lib/jquery/jquery.js',
			'underscore': 'lib/underscore/underscore',
			'snippet': 'lib/snippet/jquery.snippet.js',
			'snippet.css': 'lib/snippet/jquery.snippet.css',
			'impress': 'lib/impress.js/js/impress.js',
			'impress.css': 'lib/impress.js/css/impress.demo.css',
			'socketIo': 'lib/socket.io/socket.io.js',
			'bootstrap': 'lib/bootstrap/js/bootstrap.js',
			'boot.css': 'lib/bootstrap/css/bootstrap.css',
			'blackbord': 'js/blackbord/blackbord.js',
			'util': 'js/util',
			'teacher': 'js/teacher/teacher',
			'student': 'js/student/student',
			'initTeacher': 'js/teacher/init',
			'initStudent': 'js/student/init'
		}
	});
})();
