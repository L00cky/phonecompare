var app = angular.module("myApp", []);

app.controller('PhoneListCtrl', function ($scope, $http) {
    load_smartphones();

    function load_smartphones(){
        $http.get('https://phone-compare.herokuapp.com/load_smartphones').success(function (data) {
            $scope.smartphones=data;
        });
    };

    $scope.manufacturerIncludes = [];
    
    $scope.includeManufacturer = function(manufacturer) {
        var i = $.inArray(manufacturer, $scope.manufacturerIncludes);
        if (i > -1) {
            $scope.manufacturerIncludes.splice(i, 1);
        } else {
            $scope.manufacturerIncludes.push(manufacturer);
        }
    }
    
    $scope.manufacturerFilter = function(manufacturer) {
        if ($scope.manufacturerIncludes.length > 0) {
            if ($.inArray(manufacturer.manufacturer, $scope.manufacturerIncludes) < 0)
                return;
        }
        
        return manufacturer;
    }
}
});