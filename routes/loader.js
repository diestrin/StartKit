var walk = require("../utils/walk").walk,
	fileRegExp = /\.js$/i, // Math the js extension
	thisFolderRegExp = /^\.\/routes\//, // Math the ./ path at the begining
	thisFileRegExp = /loader\.js$/, // Math this specific file
	app;

function loadModules(fileName) {
	var module,
		method,
		path;

	if(!fileName.match(thisFileRegExp) && fileName.match(fileRegExp)){ // If the file isn't this file but is a JS file
		path = fileName.replace(fileRegExp,'').replace(thisFolderRegExp,''); // Remeve the /routes section and the JS extension
		module = require("." + path); // Load the module
		
		// Replace in the files the "_" by ":", and the "&" by "/", and "index" by the root path
		path = path.replace(/_/g,":").replace(/\&/g,"/").replace(/\/index$/,"/"); 
		
		for(method in module){ // For each HTTP method registered
			if(!!app[method] && typeof app[method] === "function") // If the method exists in the Express Library
				app[method](path, function (req, res){ // Register the method with the current path
					module[method](req, res, app);
				});
		}
	}
}

function init(expressApp){
	app = expressApp;

	// Map the routes directory
	walk({
		dir: "./routes/",
		callback: function(err, paths){
			if(!err)
				paths.forEach(loadModules); //For each path found
		}
	});
}

exports.init = init;