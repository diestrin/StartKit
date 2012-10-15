exports.response = function (err, html, res, app) {
	if(err)
		app.render("error", function(eError, ePage){
			if(eError)
				res.send("<h1>Error!</h1>");
			else
				res.send(ePage);
		});
	else
		res.send(html);
}