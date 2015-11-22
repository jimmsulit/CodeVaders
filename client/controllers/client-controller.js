/*CONTROLLER OF INDEX.HTML*/
app.controller('index-controller', function ($scope, $http) {
	$http.get('/getcoordinates').success(function (response) {
		$scope.reportlist = response;
		var latlng = new google.maps.LatLng(14.5800, 121.0000);

		var options = {
		  	zoom: 14,
		  	center: latlng,
		  	mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById('map'), options);

		 heatmap = new HeatmapOverlay(map,
          {
            // radius should be small ONLY if scaleRadius is true (or small radius is intended)
            "radius": 0.0090,
            "maxOpacity": 0.50,
            // scales the radius based on map zoom
            "scaleRadius": true,
            // if set to false the heatmap uses the global maximum for colorization
            // if activated: uses the data maximum within the current map boundaries
            //   (there will always be a red spot with useLocalExtremas true)
            "useLocalExtrema": true,
            // which field name in your data represents the latitude - default "lat"
            latField: 'lat',
            // which field name in your data represents the longitude - default "lng"
            lngField: 'lng',
            // which field name in your data represents the data value - default "value"
            valueField: 'count'
          }
        );

		var testData = {
          max: 8,
          data: []
        };

		var all = response;

		var gmarkers = [];
		for (var i = 0; i < all.length; i++) {
	        var lat = all[i].latitude;
	        var lng = all[i].longitude;
	        var latLng = new google.maps.LatLng(lat, lng);
	        var marker = new google.maps.Marker({map: map, position: latLng, dataId: i});
	        gmarkers.push(marker);
		};
		var contents = [[]];

		for (var i = 0; i < response.length; i++) {
			contents[i] = [response[i].time, response[i].crime, response[i].desc];
		};

		var infowindow = new google.maps.InfoWindow();

		for (var i = 0; i < gmarkers.length; i++) {
			google.maps.event.addListener(gmarkers[i], 'mouseover', function () {
				infowindow.setContent('<span class="color-black"><h3>' + contents[this.dataId][0] + '</h3><br/><h4>' + contents[this.dataId][1] + '</h4><br/><h5>' + contents[this.dataId][2] + '</h5></span>');
	            infowindow.open(map, this);
	        });

	        google.maps.event.addListener(gmarkers[i], 'mouseout', function() {
	          	// your code goes here!
	          	infowindow.close();
	        });
		};
		for (var i = 0; i < response.length; i++) {
			testData.data.push({lat: response[i].latitude, lng: response[i].longitude, count: 1});
        	console.log(response[i].latitude);
		};

		heatmap.setData(testData);

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

	document.getElementById("latbox").value = marker.getPosition().lat();
    document.getElementById("lngbox").value = marker.getPosition().lng();


	google.maps.event.addListener(marker, 'dragend', function (event) {
        document.getElementById("latbox").value = this.getPosition().lat();
        document.getElementById("lngbox").value = this.getPosition().lng();
    });

	// var geocoder = new google.maps.Geocoder();
	// var resmap = map;

 //    var geocodeAddress = function () {
 //          var address = document.getElementById('address').value;
 //          geocoder.geocode({'address': address}, function(results, status) {
 //            if (status === google.maps.GeocoderStatus.OK) {
 //              resmap.setCenter(results[0].geometry.location);
 //              var lat = results[0].geometry.location.lat();
 //              var lng = results[0].geometry.location.lng();
 //              var latlng = new google.maps.LatLng(lat, lng);
 //              marker.setPosition(latlng);
 //              document.getElementById("latbox").value = marker.getPosition().lat();
 //              document.getElementById("lngbox").value = marker.getPosition().lng();
 //            } else {
 //              alert('Geocode was not successful for the following reason: ' + status);
 //            }
 //        });
 //    };

 	var geocoder = new google.maps.Geocoder();

 	document.getElementById('submit').addEventListener('click', function() {
 	  geocodeAddress(geocoder, map);
 	});

 	function geocodeAddress(geocoder, resultsMap) {
 	  var address = document.getElementById('address').value;
 	  geocoder.geocode({'address': address}, function(results, status) {
 	    if (status === google.maps.GeocoderStatus.OK) {
 	      resultsMap.setCenter(results[0].geometry.location);
 	      var lat = results[0].geometry.location.lat();
 	      var lng = results[0].geometry.location.lng();
 	      var latlng = new google.maps.LatLng(lat, lng);
 	      marker.setPosition(latlng);
 	      document.getElementById("latbox").value = marker.getPosition().lat();
 	      document.getElementById("lngbox").value = marker.getPosition().lng();
 	    } else {
 	      alert('Geocode was not successful for the following reason: ' + status);
 	    }
 	  });
 	}


	$scope.AddReport = function () {
		$scope.report.latitude = document.getElementById("latbox").value;
		$scope.report.longitude = document.getElementById("lngbox").value;
		$http.post('/addcoordinates', $scope.report);
		window.location = "/map.html";
	};
});

