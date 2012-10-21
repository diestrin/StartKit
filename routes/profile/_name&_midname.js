var response = require("../../utils/response").response,
	Helpers = require("../../utils/helpers");

/*
 * GET home page.
 */

function get(req, res, app){
	app.render('profile', {
		name: req.params.name,
		midname: req.params.midname
	}, function(err, html){
		response(err, html, res, app);
	});
}

exports.get = get;