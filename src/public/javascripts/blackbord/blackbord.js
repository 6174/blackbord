/**
 * define blackbord module
 */
define(function(require, exports, module) {

	var BlackBord = {
		socket: 'socket'
	};

	BlackBord.init = function() {
		console.log('init blackbord');
		testSocket();
	}

	function testSocket() {
		var socket = io.connect('http://localhost');
		socket.on('news', function(data) {
			console.log(data);
			socket.emit('my other event', {
				my: 'data'
			});
		});
	}

	module.exports = BlackBord;
});