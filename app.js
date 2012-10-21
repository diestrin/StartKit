/**
* Module dependencies.
*/

var express = require('express'),
	less = require('less-middleware'),
	socketIO = require('socket.io'),
	routes = require('./routes/loader'),
	socketEvents = require('./socket/init'),
	e404 = require('./routes/404'),
	helpers = require('./utils/helpers').init,
	http = require('http'),
	path = require('path'),
	pub_dir = path.join(__dirname, 'public');

var app = express();

app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(less({src: pub_dir}));
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('CasaCasita!'));
	app.use(express.session());
	app.use(app.router);
	app.use(express.static(pub_dir));
	app.use(e404.get);

	// Enviroment Variables
	app.set('title', "NodeJS App Bootstrap");
	app.set('description', "A NodeJS Application Bootstrap with some util frameworks, libraries and preprocessors");

	// Temlate Variables
	app.locals = helpers(app);
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

routes.init(app); // Defines all the methods and paths for the router

var server = http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port %d", app.get('port'));
});

var io = socketIO.listen(server);

io.sockets.on('connection', socketEvents);