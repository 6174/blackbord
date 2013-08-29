/**
 * define teacher module
 */
define(function(require, exports, module) {

	var blackbord = require('blackbord');
	var socket;
	var student = {};
	student.init = function(){
		var self = this;
		self._socket = socket = io.connect('/');
		
		socket.on('connect', function(){
			console.log('connect-success');
			socket.emit('joinRoom', '123456');
		});

		socket.on('joinedRoom', function(){
			console.log('joinRoom success');
			socket.emit('identify', 'student', 'sid');
		});

		socket.on('identifySuccess', function(){
			console.log('identifySuccess');
		});

		socket.on('identifyFaild', function(){
			console.log('identifyFaild');
		});

		socket.on('goto', function(indices){
			console.log('goto Called', indices);
			blackbord.goTo(indices);
		});
	};
	module.exports = student;
});