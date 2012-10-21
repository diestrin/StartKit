var response = require("../utils/response").response;

/*
 * GET home page.
 */

function get(req, res, app){
	app.render('index', {
		features: [
			{
				name: "NodeJS",
				link: "http://nodejs.org/",
				desc: "as the backend engine in javascript"
			},{
				name: "Express",
				link: "http://expressjs.com/",
				desc: "as the midleware HTTP server"
			},{
				name: "Twitter Bootstrap",
				link: "http://twitter.github.com/bootstrap/",
				desc: "as the main CSS framework"
			},{
				name: "AngularJS",
				link: "http://angularjs.org/",
				desc: "as the client MVC framework"
			},{
				name: "Font-Awesome",
				link: "http://fortawesome.github.com/Font-Awesome/",
				desc: "as the vectorial icons library"
			},{
				name: "Jade",
				link: "http://jade-lang.com/",
				desc: "as the temlate engine system"
			},{
				name: "Less",
				link: "http://lesscss.org/",
				desc: "as the CSS pre procesor engine"
			},{
				name: "Socket.IO",
				link: "http://socket.io/",
				desc: "as the Real Time Connection library"
			}
		],
		home: true
	}, function(err, html){
		response(err, html, res, app);
	});
}

exports.get = get;