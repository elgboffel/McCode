/// <reference path="../../typings/angularjs/angular.d.ts" />
app.controller('w3Ctrl', function ($scope, $location, $interval) {
    //Model
    $scope.names = [
        { name: 'Jani', country: 'Norway' },
        { name: 'Carl', country: 'Sweden' },
        { name: 'Margareth', country: 'England' },
        { name: 'Hege', country: 'Norway' },
        { name: 'Joe', country: 'Denmark' },
        { name: 'Gustav', country: 'Sweden' },
        { name: 'Birgit', country: 'Denmark' },
        { name: 'Mary', country: 'England' },
        { name: 'Kai', country: 'Norway' }
    ];
    //Selection options
    $scope.options = ['name', 'country'];
    //Get current url
    $scope.currentUrl = $location.absUrl();
    //Interval
    $scope.currentTime = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.currentTime = new Date().toLocaleTimeString();
    }, 1000);
});
