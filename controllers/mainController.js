var app = angular.module("myApp", []);

app.controller('PhoneListCtrl', function ($scope, $http) {
      load_pictures();

    function load_pictures(){
        $http.get('https://enigmatic-harbor-2756.herokuapp.com/load').success(function(data){
            $scope.smartphones=data;
        });
    };
});