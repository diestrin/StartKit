exports.init = function (app){
	return {
		title: app.get("title") || "Application",
		description: app.get("description") || ""
	};
}

exports.text = {
	capitalize: function (str, all){
		return str[0].toUpperCase() + str.slice(1);
	}
}