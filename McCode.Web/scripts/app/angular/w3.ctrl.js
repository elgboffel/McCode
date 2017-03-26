var Application;
(function (Application) {
    var W3Ctrl = (function () {
        function W3Ctrl($scope, $location, $interval) {
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
            //Selection options
            this.$scope.options = ['name', 'country'];
            //Get current url
            this.$scope.currentUrl = $location.absUrl();
            //Interval
            this.$scope.currentTime = new Date().toLocaleTimeString();
            //this.$interval(function () {
            //    this.$scope.currentTime = new Date().toLocaleTimeString();
            //}, 1000);
        }
        return W3Ctrl;
    }());
    Application.app.controller('w3Ctrl', W3Ctrl);
})(Application || (Application = {}));
