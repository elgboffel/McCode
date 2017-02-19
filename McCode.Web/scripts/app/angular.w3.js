/// <reference path="../typings/angularjs/angular.d.ts" />
var app = angular.module('angularW3', []);
app.controller('w3Ctrl', function ($scope) {
    $scope.firstName = 'Johnny';
    $scope.lastName = 'Kristensen';
});
