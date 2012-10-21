'use strict';

// Controllers

function indexCtrl ($scope, Users){
	Users.getUsers(function (users){
		$scope.users = users;
	});

	Users.getUserById(1, function(user){
		$scope.firstUser = user;
	});
}