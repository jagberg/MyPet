var tickMapControllers = angular.module('tickMapApp');


tickMapControllers.controller('TickMapController', ['$scope', 'TickPlaces', function ($scope, TickPlaces) {
    var tickPlacesList = TickPlaces.query();
    var tickHeatMapPoints = [];

    tickPlacesList.$promise.then(function (data) {
        console.log(data.length);

        var arrayLength = tickPlacesList.length;
        for (var i = 0; i < arrayLength; i++) {
            var obj = tickPlacesList[i];

            tickHeatMapPoints.push(new google.maps.LatLng(obj.Longitude, obj.Latitude))
        }   

    })

    MockHeatLayer = function (heatLayer) {
        // Adding 500 Data Points
        var map, pointarray, heatmap;

        var pointArray = new google.maps.MVCArray(tickHeatMapPoints);
        heatLayer.setData(pointArray);
    }
    init();



    function init() {
        $scope.map = {
            center: {
                latitude: 37.75,
                longitude: -122.403
            },
            heatLayerCallback: function (layer) {
                //set the heat layers backend data
                var mockHeatLayer = new MockHeatLayer(layer);
            },
            zoom: 12
        };
    }
}])