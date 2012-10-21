exports.response = function (err, html, res, app) {
	if(err)
		app.render("error",{
			error: err
		} , function(eError, ePage){
			res.writeHead(501);
			if(eError)
				// res.send("<h1>Error!</h1>");
				res.send(err + "<br>" + JSON.stringify(eError));
			else
				res.send(ePage);
		});
	else
		res.send(html);
}