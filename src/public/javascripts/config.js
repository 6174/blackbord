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
			'impress': 'lib/impress.js/js/impress.js',
			'impress.css': 'lib/impress.js/css/impress.demo.css',
			'socketIo': 'lib/socket.io/socket.io.js',
			'bootstrap': 'lib/bootstrap/dist/js/bootstrap.js',
			'boot.css': 'lib/bootstrap/dist/css/bootstrap.css',
			'blackbord': 'js/blackbord/blackbord.js',
			'util': 'js/util',
			'init': 'js/init'
		}
	});
})();

seajs.use(['init', 'jquery', 'underscore'], function() {
	console.log('start app');
});