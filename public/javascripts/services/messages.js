'use strict';

// Messages service

App.factory("Messages", ["Socket", function (Socket) {
	return {
		getAllMessages: function (callback) {
			Socket.emit("messages:getAll", null, callback);
			Socket.on("messages:getAll", callback);
		},
		getMessagesByUserId: function (userId, callback) {
			Socket.emit("messages:getByUserId", userId, callback);
			Socket.on("messages:getByUserId", callback);
		},
		hasMessages: function (userId, callback) {
			Socket.emit("messages:userHas", userId, callback);
		},
		setMessage: function (userId, message) {
			Socket.emit("messages:setMessage", {
				userId: userId,
				message: message
			});
		}
	};
}]);