app.controller('controller', function ($scope, $http) {
	var refresh = function () {
		$http.get('/getcoordinates').success(function (response) {
			$scope.coordinates = response;
		});
	};

	$scope.AddCoordinates = function () {
		$http.post('/addcoordinates', $scope.coordinate);
		refresh();
	};
});