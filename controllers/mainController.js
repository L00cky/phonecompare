var app = angular.module("myApp", []);

app.controller('PhoneListCtrl', function ($scope, $http) {
    load_smartphones();
    load_manufacturers();
    load_resolutions();

    function load_smartphones() {
        $http.get('https://phone-compare.herokuapp.com/load_smartphones').success(function (data) {
            $scope.search = [];
            $scope.smartphones = data;
        })
    };

    function load_manufacturers() {
        $http.get('https://phone-compare.herokuapp.com/load_manufacturers').success(function (data) {
            $scope.search = [];
            $scope.manufacturers = data;
        })
    };

    function load_resolutions() {
        $http.get('https://phone-compare.herokuapp.com/load_resolutions').success(function (data) {
            $scope.search = [];
            $scope.resolutions= data;
        })
    };
});