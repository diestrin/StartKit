var messages = require("./messages"),
	users = require("./users");

function info() {
	var methods = [];

	function addMethods(moduleMethods) {
		methods.concat(moduleMethods);
	}

	messages.getMethods(null, addMethods);
}

function middleCallback(callback, socket, message) {
	return function(data){
		callback(data);
		socket.broadcast.emit(message, data);
	}
}

// To use like
// 
// socket.on("messages:info", function(data, callback){
// 	messages.getMethods(data, new middleCallback(callback, socket, "messages:info"));
// });

module.exports = function (socket) {
	socket.on("info", info);

	socket.on("messages:info", messages.getMethods);
	socket.on("messages:getAll", messages.getAllMessages);
	socket.on("messages:getByUserId", messages.getMessagesByUserId);
	socket.on("messages:userHas", messages.hasMessages);
	socket.on("messages:setMessage", function(data){
		messages.setMessage(data, function (messages){
			socket.emit("messages:getByUserId", messages);
			socket.broadcast.emit("messages:getByUserId", messages);
		});
	});

	socket.on("users:info", users.getMethods);
	socket.on("users:getAll", users.getUsers);
	socket.on("users:getById", users.getUserById);
	socket.on("users:getByName", users.getUserByName);
}