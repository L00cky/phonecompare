var app = angular.module("myApp", []);

app.controller('PhoneListCtrl', function ($scope, $https) {
    load_smartphones();

    function load_smartphones(){
        $https.get('https://phone-compare.herokuapp.com/load_smartphones').success(function (data) {
            $scope.smartphones=data;
        });
    };
});