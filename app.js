var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("paths.php").then(function(response) {
        $scope.myData = response.data.records;
    });
});
