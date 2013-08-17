/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session({
	secret: 'secret',
	key: 'express.sid'
}));
app.use(app.router);
app.use(express.static(path.join(__dirname, '/../public')));
console.log(path.join(__dirname, '../public'));


// development only
// if ('development' == app.get('env')) {
// 	app.use(express.errorHandler());
// }


app.get('/', routes.index);
app.get('/teacher', routes.teacher);
app.get('/blackbord', routes.blackbord);
app.get('/users', user.list);


var server = http.createServer(app);
server.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});


function test() {
	console.log('test pass a func');
}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//---这个小应用暂时只有一个房间
//---只有一个master
var room = {
	roomId: '123456',
	master: null,
	students: {}
};

//----socketIo 
var io = require('socket.io').listen(server);
/**
 *----set sessionID
 */
var cookie = require("cookie");
io.set('authorization', function(data, accept) {
	// check if there's a cookie header
	if (data.headers.cookie) {
		// session id, as you specified in the Express setup.
		data.sessionID = cookie.parse(data.headers["cookie"])["express.sid"];
	} else {
		// if there isn't, turn down the connection with a message
		// and leave the function.
		return accept('No cookie transmitted.', false);
	}
	// accept the incoming connection
	accept(null, true);
});

/**
 *----socket connet handlers
 */
io.sockets.on('connection', function(socket) {

	/**
	 * @event---identify
	 * 通过 辨别身份
	 */
	socket.on('identify', function(type, id) {
		identify(type, id, socket);
	});

	/**
	 * @event-- joinRoom
	 * 加入room, 在客户端中， 用户通过访问相应的页面可以获取一个roomID
	 * 通过roomId让socket来加入到这个room中
	 */
	socket.on('joinRoom', function(roomId) {
		joinRoom(socket, roomId);
	});
	console.log('haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
});

//--- 根据req参数来辨别加入哪一个room
//--- 这里就只是加入全局特例room

function joinRoom(socket, roomId) {
	socket.join(socket.handshake.sessionID);
	socket.join(room.roomId);
	socket.emit('joinedRoom');
}

//--- 辨别身份

function identify(type, id, socket) {
	var sid = socket.handshake.sessionID;
	//--match teacher 
	if (type === 'teacher' && id === '123456') {
		room.master = socket;
		initTeacherEvent(socket);
		socket.emit('identifySuccess');
	} else if (type === 'student') {
		//--match student
		room.students[sid] = room.students[sid] || [];
		room.students[sid].push(socket);
		initStudentEvent(socket);
		socket.emit('identifySuccess');
	} else socket.emit('identifyFaild');
}

//-- 初始化teacher的socket事件

function initTeacherEvent(socket) {
	socket.on('goto', function(i) {
		//--广播消息给所有的学生
		// socket.broadcast.to(room.roomId).emit('goto', i);
		console.log('goto emmmitedddd');
		socket.broadcast.emit('goto', i);
	});
	socket.on('leave', function() {
		socket.leave(room.roomId);
	});
	socket.emit('news', 'some thing wrong?');
}

//-- 初始化所有student的socket事件

function initStudentEvent(socket) {
	socket.on('leave', function(roomId) {
		socket.leave(room.roomId);
	});
}