var app = angular.module("myApp", []);

app.controller('PhoneListCtrl', function ($scope, $http) {
    load_smartphones();
    load_manufacturers();
    load_resolutions();
    load_screens();

    function load_smartphones() {
        $http.get('http://phone-compare.herokuapp.com/load_resolutions').success(function (data) {
            $scope.search = [];
            $scope.smartphones = data;
        })
    };

    function load_manufacturers() {
        $http.get('http://phone-compare.herokuapp.com/load_resolutions').success(function (data) {
            $scope.search = [];
            $scope.manufacturers = data;
        })
    };

    function load_resolutions() {
        $http.get('http://phone-compare.herokuapp.com/load_resolutions').success(function (data) {
            $scope.search = [];
            $scope.resolutions= data;
        })
    };

    function load_screens() {
        $http.get('http://phone-compare.herokuapp.com/load_screens').success(function (data) {
            $scope.search = [];
            $scope.screens = data;
        })
    };

    //function load_smartphones() {
    //    $http.get('http://localhost:5000/load_smartphones').success(function (data) {
    //        $scope.search = [];
    //        $scope.smartphones = data;
    //    })
    //};

    //function load_manufacturers() {
    //    $http.get('http://localhost:5000/load_manufacturers').success(function (data) {
    //        $scope.search = [];
    //        $scope.manufacturers = data;
    //    })
    //};

    //function load_resolutions() {
    //    $http.get('http://localhost:5000/load_resolutions').success(function (data) {
    //        $scope.search = [];
    //        $scope.resolutions = data;
    //    })
    //};

    //function load_screens() {
    //    $http.get('http://localhost:5000/load_screens').success(function (data) {
    //        $scope.search = [];
    //        $scope.screens = data;
    //    })
    //};
});