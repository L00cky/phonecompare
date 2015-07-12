var app = angular.module("myApp", []);

app.controller('PhoneListCtrl', function ($scope, $http) {
    load_smartphones();

    function load_smartphones(){
        $http.get('https://phone-compare.herokuapp.com/load_smartphones').success(function (data) {
            $scope.search = [];
            $scope.smartphones=data;
        });
    };
});