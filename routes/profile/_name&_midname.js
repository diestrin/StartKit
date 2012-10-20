var response = require("../../utils/response").response,
	Helpers = require("../../utils/helpers");

/*
 * GET home page.
 */

function get(req, res, app){
	app.render('profile', {
		name: Helpers.text.capitalize(req.params.name),
		midname: Helpers.text.capitalize(req.params.midname)
	}, function(err, html){
		response(err, html, res, app);
	});
}

exports.get = get;