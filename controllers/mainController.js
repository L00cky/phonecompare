var app = angular.module("myApp", []);

app.controller('PhoneListCtrl', function ($scope, $http) {
      load_pictures();

    function load_pictures(){
        $http.get('http://localhost:3000/load').success(function(data){
            $scope.smartphones=data;
        });
    };
});