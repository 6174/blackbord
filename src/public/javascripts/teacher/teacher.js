/**
 * define teacher module
 */
define(function(require, exports, module) {

	var blackbord = require('blackbord');
	var socket;
	var teacher = {};

	//--handler UIs
	teacher.els = {
		goPreEl: $('#GoPre'),
		goNextEl: $('#GoNext')
	}

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

	teacher.syn = function(){
		var self = this;
		console.log("bsyn current step: " + blackbord.currentStep());
		self.goTo(blackbord.currentStep());
	}

	teacher.bindNavEvent = function(){
		var self = this;
		var prevEl = self.els.goPreEl;
		var nextEl = self.els.goNextEl;

		prevEl.bind('click', function(){
			blackbord.prev();
			self.syn();
		});

		nextEl.bind('click', function(){
			blackbord.next();
			self.syn();
		});
	}

	teacher.bindNavEvent();
	window.teacher = teacher;
	module.exports = teacher;

});