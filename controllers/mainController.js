var app = angular.module("myApp", []);

app.controller('PhoneListCtrl', function ($scope, $http) {
    load_smartphones();

    function load_smartphones() {
        $http.get('https://phone-compare.herokuapp.com/load_smartphones').success(function (data) {
            $scope.search = [];
            //$scope.smartphones=data;
            $scope.smartphones = [
    {
        "id": 2,
        "manufacturer": "Umi",
        "name": "Iron",
        "snippet": "Best china ever",
        "price": 179.99,
        "img": "http://img.sunsky-online.com/upload/store/product_l/S-MPH-0971H.jpg"
    },
    {
        "id": 3,
        "manufacturer": "Samsung",
        "name": "Galaxy S6 Edge",
        "snippet": "Edged display",
        "price": 449.99,
        "img": "http://bestcena.cz/images/SAMSUNG%20galaxy%20S6%20edge%20black.jpg"
    },
    {
        "id": 12,
        "manufacturer": "Lenovo",
        "name": "K3 Note",
        "snippet": null,
        "price": 200,
        "img": "http://www.mixeshop.com/images/v/201502/14228507080.jpg"
    }
            ]
        });
    };
});