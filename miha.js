console.log('Starting Miha Services');

'use strict';

process.on('uncaughtException', function (err) {
	console.log('Process', process.pid, 'Uncaught Error', err, err.stack);
	process.exit(err);
});

process.on('exit', function (err) {
	if (err) throw err;
	console.log('Process', process.pid, 'Exits Cleanly');
});

var config = require('./config');

var bcrypt = require('bcrypt');

var express = require('express');

var session = require('express-session');

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var errorHandler = require('errorhandler');

var app = express();

var server = require('http').createServer(app);

var socketIO = require('socket.io');

var ioServer = socketIO.listen(server);

var router = require('./routers/router');

var sockets = require('./routers/sockets');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(cookieParser(config.secrets.cookie));

app.use(errorHandler());

app.use('/static', express.static(__dirname + '/static'));

router(app);

sockets(app);

server.listen(config.port, function () {
	console.log('Listening on Port', server.address().port);
});