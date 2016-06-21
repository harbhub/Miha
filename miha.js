/*
Miha is a Rapid Application Development Platform
Authored by Michael Harbach (harbhub)
*/
console.log('Starting Miha Services');

'use strict';

process.on('uncaughtException', function (err) {
	console.log('Process', process.pid, 'Uncaught Error', err);
	process.exit(err);
});

process.on('exit', function (err) {
	if (err) throw err;
	console.log('Process', process.pid, 'Exits Cleanly');
});

var config = require('./config');

var express = require('express');

var app = express();

app.get('*', function (req, res, next) {
	console.log('GET', req.url);
	res.end('Hello');
});

var server = app.listen(config.port, function () {
	console.log('Listening on Port', server.address().port);
});