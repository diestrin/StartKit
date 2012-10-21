'use strict';

// Users Service

var users = [
	{
		id: 1,
		name: "Diego",
		midname: "Barahona",
		age: 21,
		contry: "Costa Rica",
		position: "Senior Creative Engineer"
	},{
		id: 2,
		name: "Jair",
		midname: "Reina",
		age: 25,
		position: "Asociate Client Director"
	}
];

var Module = {
	getUsers: function (data, callback){
		callback(users);
	},
	getUserById: function (id, callback){
		var user;
		
		for(user in users)
			if(users[user].id == id)
				return callback(users[user]);
	},
	getUserByName: function (nameObj, callback){
		var user;
		
		for(user in users)
			if(users[user].name.toLowerCase() === nameObj.name.toLowerCase() &&
				users[user].midname.toLowerCase() === nameObj.midname.toLowerCase())
				return callback(users[user]);
	}
};

function getMethods(data, callback){
	var methods = [],
		method;

	for(method in Module)
		method.push(method);

	return methods;
}

exports.getUsers = Module.getUsers;
exports.getUserById = Module.getUserById;
exports.getUserByName = Module.getUserByName;
exports.getMethods = getMethods;