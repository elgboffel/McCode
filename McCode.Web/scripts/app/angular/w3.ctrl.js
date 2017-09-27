var Application;
(function (Application) {
    class W3Ctrl {
        constructor($scope, $location, $interval) {
            this.$scope = $scope;
            this.$location = $location;
            this.$interval = $interval;
            this.$scope.names = [
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
            this.$scope.options = ['name', 'country'];
            this.$scope.currentUrl = $location.absUrl();
            this.$scope.currentTime = new Date().toLocaleTimeString();
        }
    }
    Application.app.controller('w3Ctrl', W3Ctrl);
})(Application || (Application = {}));
//# sourceMappingURL=w3.ctrl.js.map