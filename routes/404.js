/*
 * GET 404 page.
 */

function get(req, res){
	res.render('404');
}

exports.get = get;