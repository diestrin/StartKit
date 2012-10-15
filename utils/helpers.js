exports.init = function (app){
	return {
		title: app.get("title") || "Application"
	};
}