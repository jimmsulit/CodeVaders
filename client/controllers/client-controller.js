app.controller('controller', function ($scope, $http) {
	$http.get('/getcoordinates').success(function (response) {
		$scope.coordinates = response;
	});

	$scope.AddCoordinates = function () {
		$http.post('/addcoordinates', $scope.coordinate);
		{longitude: "dhgud", latitude:"dhfd"}
	};
});