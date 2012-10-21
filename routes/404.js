/*
 * GET 404 page.
 */

function get(req, res){
	res.render('404', function(err, html){
		res.writeHead(404);
		res.end(html);
	});
}

exports.get = get;