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
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, '/../public')));
console.log(path.join(__dirname, '../public'));


// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}


app.get('/', routes.index);
app.get('/teacher', routes.teacher);
app.get('/blackbord', routes.blackbord);
app.get('/users', user.list);


var server = http.createServer(app);
server.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});


function test(){
	console.log('test pass a func');
}

//----socketIo 
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
	socket.emit('news', {
		hello: 'world app',
		func:  test.toString()
	});
	socket.on('my other event', function(data) {
		console.log(data);
	});
});

var roomId = "123456";
