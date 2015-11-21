
app.controller('index-controller', function ($scope, $http) {
	$http.get('/getcoordinates').success(function (response) {
		$scope.reportlist = response;
		var latlng = new google.maps.LatLng(57.8, 14.0);

		var options = {
		  	zoom: 6,
		  	center: latlng,
		  	mapTypeId: google.maps.MapTypeId.ROADMAP
		}; 

		var map = new google.maps.Map(document.getElementById('map'), options);

		var all = response;


		var gmarkers = [];
		for (var i = 0; i < all.length; i++) {
	        var lat = all[i].latitude;
	        var lng = all[i].longitude;
	        var latLng = new google.maps.LatLng(lat, lng);
	        var marker = new google.maps.Marker({map: map, position: latLng,});
	        gmarkers.push(marker);
		}

		var markerCluster = new MarkerClusterer(map, gmarkers);

	});

	
});

/*CONTROLLER OF FORM.HTML*/
app.controller('form-controller', function ($scope, $http) {
	var latlng = new google.maps.LatLng(14.5800, 121.0000);

	var options = {
	  	zoom: 15,
	  	center: latlng,
	  	mapTypeId: google.maps.MapTypeId.ROADMAP
	}; 

	var map = new google.maps.Map(document.getElementById('map'), options);

	var marker = new google.maps.Marker({
	  	draggable: true,
	 	position: latlng,
	 	map: map,
		title: "Your location"
	});

	google.maps.event.addListener(marker, 'dragend', function (event) {
        document.getElementById("latbox").value = this.getPosition().lat();
        document.getElementById("lngbox").value = this.getPosition().lng();
    });

	$scope.AddReport = function () {

		$http.post('/addcoordinates', $scope.report);
	};
});

