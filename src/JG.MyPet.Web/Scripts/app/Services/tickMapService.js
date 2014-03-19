var tickMapServices = angular.module('tickMapApp');

tickMapServices.factory('TickPlaces', ['$resource',
function ($resource) {
    return $resource('http://localhost/JG.MyPet.Service/api/tickPlaces', null, {
        query: { method: 'GET', isArray: true }
    });
}]);