/*CONTROLLER OF INDEX.HTML*/
app.controller('index-controller', function ($scope, $http) {
	$http.get('/getcoordinates').success(function (response) {
		$scope.reportlist = response;
		var latlng = new google.maps.LatLng(14.5800, 121.0000);

		var options = {
		  	zoom: 10,
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

	document.getElementById("latbox").value = 14.5800;
	document.getElementById("lngbox").value = 121.0000;


	google.maps.event.addListener(marker, 'dragend', function (event) {
        document.getElementById("latbox").value = this.getPosition().lat();
        document.getElementById("lngbox").value = this.getPosition().lng();
    });


	$scope.AddReport = function () {
		$scope.report.latitude = document.getElementById("latbox").value;
		$scope.report.longitude = document.getElementById("lngbox").value;
		$http.post('/addcoordinates', $scope.report);
	};
});

