var app = angular.module("sampleApp", []);

app.controller("testCtrl", function ($scope) {

	$scope.$on("messageEvent", function (event, args) {
	
			$scope.info = args.message;
		})
		$scope.send = function () {
			$scope.$emit("messageEvent", {
				message: $scope.messageInput
			});
		}
	});