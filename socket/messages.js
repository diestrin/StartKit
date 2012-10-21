'use strict';

// Messages Service

var messages = {
	"1": [
		{
			text: "Testing the system",
			time: "10 20 2012 18:05:37"
		},{
			text: "Hello word",
			time: "10 20 2012 20:20:04"
		},{
			text: "The systems works fine",
			time: "10 22 2012 08:45:11"
		}
	]
};

var Module = {
	getAllMessages: function (data, callback) {
		var AllMessages = [],
			message;

		for(message in messages)
			AllMessages.concat(messages[message]);

		callback(AllMessages);
	},
	getMessagesByUserId: function (userId, callback) {
		callback(messages[userId]);
	},
	hasMessages: function (userId, callback) {
		callback(messages[userId] ? true : false);
	},
	setMessage: function (data, callback) {
		if(messages[data.userId])
			messages[data.userId].push({
				text: data.message,
				time: new Date
			});
		else
			messages[data.userId] = [{
				text: data.message,
				time: new Date
			}];

		Module.getMessagesByUserId(data.userId, callback);
	}
};

function getMethods(data, callback){
	var methods = [],
		method;

	for(method in Module)
		method.push(method);

	return methods;
}

exports.getAllMessages = Module.getAllMessages;
exports.getMessagesByUserId = Module.getMessagesByUserId;
exports.hasMessages = Module.hasMessages;
exports.setMessage = Module.setMessage;
exports.getMethods = getMethods;