angular.module('App').
controller('mainController', ['$scope', '$window', function($scope, $window) {
  var directionsDisplay;
  var directionsService;
  var sensor_list = [0, 0, 0];
  var heatmap;

  var config = {
    apiKey: "AIzaSyCOwUOfUntuj2zkFyat8qmBnx0pd87s564",
    databaseURL: "https://smogdet-564e8.firebaseio.com/",
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  var refObj = database.ref().child('MAPS');
  refObj.on('value', function(snap) {
    console.log(snap.val());
    $scope.sensor_values = snap.val();
    $scope.$apply();
    sensor_list[0] = $scope.sensor_values.sensor1;
    sensor_list[1] = $scope.sensor_values.sensor2;
    sensor_list[2] = $scope.sensor_values.sensor3;
    var heat = [];
    if(typeof heatmap != 'undefined')
      heatmap.setMap(null);
    for(var i = 0; i < sensor_list[0]; i++)
    {
      heat.push(new google.maps.LatLng(12.925588, 77.500683));
    }
    for(var i = 0; i < sensor_list[1]; i++)
    {
      heat.push(new google.maps.LatLng(12.922438, 77.502652));
    }
    for(var i = 0; i < sensor_list[2]; i++)
    {
      heat.push(new google.maps.LatLng(12.922919, 77.498500));
    }
    for(var i = 0; i < 100; i++)
    {
      heat.push(new google.maps.LatLng(0, 0));
    }
    heatmap = new google.maps.visualization.HeatmapLayer({
      data: heat,
      map: map,
      radius: 60
    });
  });

  console.log("Before initMap");
  $window.initMap = function() {
    console.log("initMap called");
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 15,
      disableDoubleClickZoom: false,
      streetViewControl: false,
    });
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var marker = new google.maps.Marker({
          position: pos,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
          },
          map: map
        });
        var marker2 = new google.maps.Marker({
          position: {
            lat: 12.925588,
            lng: 77.500683
          },
          map: map
        });
        var marker3 = new google.maps.Marker({
          position: {
            lat: 12.922438,
            lng: 77.502652
          },
          map: map
        });
        var marker4 = new google.maps.Marker({
          position: {
            lat: 12.922919,
            lng: 77.498500
          },
          map: map
        });
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }


  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

  $window.calcRoute = function() {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var request = {
      origin: start,
      destination: end,
      provideRouteAlternatives: true,
      travelMode: 'DRIVING'
    };
    directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      console.log(result);
      directionsDisplay.setDirections(result);
    }
  });
}
console.log("Map addition");
var s = document.createElement('script');
s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCt2IaYq3pyqiQ5y3KC6cBNuJFoBpnrDks&callback=initMap&libraries=visualization";
s.setAttribute('async', '');
s.setAttribute('defer', '');
document.body.appendChild(s);
}]);
