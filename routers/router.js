var path = require('path');

var templates = {
	guest: path.join(__dirname, '../static', 'guest.html'),
	user: path.join(__dirname, './/static', 'user.html')
};

module.exports = function (app) {

	app.all('*', function (req, res, next) {

		console.log(req.method.toUpperCase(), req.url);

		next();

	});

	app.get('/', function (req, res, next) {

		if (req.session.user) {

			res.sendFile(templates.user);

		} else {

			res.sendFile(templates.guest);

		}

	});

};