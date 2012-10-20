exports.init = function (app){
	return {
		title: app.get("title") || "Application"
	};
}

exports.text = {
	capitalize: function (str, all){
		return str[0].toUpperCase() + str.slice(1);
	}
}