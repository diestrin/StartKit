var response = require("../utils/response").response;

/*
 * GET home page.
 */

function get(req, res, app){
	app.render('index', {
		content: "Hola"
	}, function(err, html){
		response(err, html, res, app);
	});
}

exports.get = get;