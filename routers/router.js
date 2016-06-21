module.exports = function (app) {

	app.get('*', function (req, res, next) {
		console.log('GET', req.url);
		res.end('Hello');
	});
	
};