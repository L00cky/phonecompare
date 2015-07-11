var app = angular.module("myApp", []);

app.controller('PhoneListCtrl', function ($scope, $http) {
      load_pictures();

    function load_pictures(){
        $http.get('https://phone-compare.herokuapp.com/load').success(function (data) {
            $scope.smartphones=data;
        });
    };
});