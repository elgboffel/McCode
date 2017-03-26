namespace Application {

    export interface IW3Ctrl extends ng.IScope
    {
        names: Array<INames>;
        options: string[];
        currentUrl: string;
        currentTime: string;
    }

    export interface INames {
        name: string;
        country: string;
    }

    class W3Ctrl {

        constructor(
            private $scope: IW3Ctrl,
            private $location: ng.ILocationService,
            private $interval: ng.IIntervalService
        ) {

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
            this.$scope.currentUrl = $location.absUrl()

            //Interval
            this.$scope.currentTime = new Date().toLocaleTimeString();

            //this.$interval(function () {
            //    this.$scope.currentTime = new Date().toLocaleTimeString();
            //}, 1000);
        }
    }

    app.controller('w3Ctrl', W3Ctrl);
}
