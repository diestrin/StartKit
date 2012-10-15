var walk = require("../utils/walk").walk,
	fileRegExp = /\.js$/i, // Math the js extension
	thisFolderRegExp = /^\.\/routes\//, // Math the ./ path at the begining
	thisFileRegExp = /loader\.js$/, // Math this specific file
	app;

function loadModules(fileName) {
	var module,
		method,
		path;

	if(!fileName.match(thisFileRegExp) && fileName.match(fileRegExp)){
		path = fileName.replace(fileRegExp,'').replace(thisFolderRegExp,'');
		module = require("." + path);
		
		path = path.replace(/index$/,"").replace(/_/g,":");
		
		for(method in module){
			app[method](path, function (req, res){
				module[method](req, res, app);
			});
		}
	}
}

function init(expressApp){
	app = expressApp;
	walk({
		dir: "./routes/",
		callback: function(err, paths){
			if(!err)
				paths.forEach(loadModules);
		}
	});
}

exports.init = init;