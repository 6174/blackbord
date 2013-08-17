/**
 * define teacher module
 */
define(function(require, exports, module) {

	var socket;
	var teacher = {};
	teacher.init = function(){
		var self = this;
		self._socket = socket = io.connect('/');

		//--connectioned handler
		socket.on('connect', function(){
			console.log('connect-success');
			socket.emit('joinRoom', '123456');
		});

		socket.on('news', function(news){
			console.log('----------', news);
		});

		//--joinedRoom Handler
		socket.on('joinedRoom', function(){
			console.log('joinRoom success');
			socket.emit('identify', 'teacher', '123456');
		});

		//--identifySuccess handler
		socket.on('identifySuccess', function(){
			console.log('identifySuccess');
		});

		//--indentifyFaild handler
		socket.on('identifyFaild', function(){
			console.log('identifyFaild');
		});
	};

	teacher.goTo = function(i) {
		if(!socket) return;
		socket.emit('goto', i);
		return true;
	}

	setTimeout(function(){
		teacher.goTo(1);
	}, 3000);
	
	window.teacher = teacher;
	module.exports = teacher;

});