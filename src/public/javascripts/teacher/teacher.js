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

	teacher.init = function() {
		var self = this;
		self._socket = socket = io.connect('/');

		//--connectioned handler
		socket.on('connect', function() {
			console.log('connect-success');
			socket.emit('joinRoom', '123456');
		});

		socket.on('news', function(news) {
			console.log('----------', news);
		});

		//--joinedRoom Handler
		socket.on('joinedRoom', function() {
			console.log('joinRoom success');
			socket.emit('identify', 'teacher', '123456');
		});

		//--identifySuccess handler
		socket.on('identifySuccess', function() {
			console.log('identifySuccess');
		});

		//--indentifyFaild handler
		socket.on('identifyFaild', function() {
			console.log('identifyFaild');
		});
	};

	teacher.goTo = function(indices) {
		if (!socket) return;
		socket.emit('goto', indices);
		return true;
	}

	teacher.syn = function(indices) {
		var self = this;
		console.log(indices);
		self.goTo(indices);
	}

	teacher.bindNavEvent = function() {
		var self = this;
		Reveal.addEventListener('slidechanged', function(event) {
			// event.previousSlide, event.currentSlide, event.indexh, event.indexv
			self.syn(Reveal.getIndices());
		});
		Reveal.addEventListener('fragmentshown', function(event) {
			// event.fragment = the fragment DOM element
			self.syn(Reveal.getIndices());
		});
		Reveal.addEventListener('fragmenthidden', function(event) {
			// event.fragment = the fragment DOM element
			self.syn(Reveal.getIndices());
		});
	}

	teacher.bindNavEvent();
	window.teacher = teacher;
	module.exports = teacher;

});