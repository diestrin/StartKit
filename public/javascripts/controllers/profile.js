'use strict';

// Controllers

function profileCtrl ($scope, Users, Messages){
	$scope.requestUser = user;

	Users.getUserByName($scope.requestUser.name, $scope.requestUser.midname, function (user){
		$scope.user = user;

		Messages.getMessagesByUserId($scope.user.id, function (messages){
			$scope.messages = messages;
		});
	});

	$scope.send = function () {
		Messages.setMessage($scope.user.id, $scope.newMessage);
		$scope.newMessage = "";
	}
}