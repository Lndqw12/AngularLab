var app = angular.module("sampleApp", [])
			.controller("defaultCtrl", function ($scope) {
				$scope.value = "-----";
				$scope.setNewValue = function () {
					$scope.value = "hello wolrd";
					}
				});