app.controller('controller', function ($scope, $http) {
	$http.get('/getcoordinates').success(function (response) {
		$scope.reportlist = response;
	});

	$scope.AddCoordinates = function () {
		$http.post('/addcoordinates', $scope.report);
	};
});