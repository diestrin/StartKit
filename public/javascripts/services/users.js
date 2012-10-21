'use strict';

// Users service

App.factory("Users", ["Socket", function (Socket) {
	return {
		getUsers: function(callback){
			Socket.emit("users:getAll", null, callback);
		},
		getUserById: function(id, callback){
			Socket.emit("users:getById", id, callback);
		},
		getUserByName: function(name, midname, callback){
			Socket.emit("users:getByName", {
				name:name, 
				midname:midname
			}, callback);
		}
	}
}]);