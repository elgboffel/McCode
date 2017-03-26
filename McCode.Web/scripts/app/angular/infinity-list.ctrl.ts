namespace Application {
    interface IInfinityList extends ng.IScope {
        page: number;
        result: Array<Object>;
        data: string[];
        getList(): void;
    }

    class InfinityList {
        constructor(
            private $scope: IInfinityList,
            private $http: ng.IHttpService
        ) {
            var _scope = this.$scope;
            var _http = this.$http;

            _scope.page = 1;
            _scope.result = [];

            _scope.getList = function () {
                _http({
                    method: 'GET',
                    url: '/umbraco/api/infinitelist/getlist?data=' + _scope.data + '&page=' + _scope.page++
                }).then(function (response) {
                    //Convert responed data object to an array of objects
                    var array = $.map(response.data, function (value, index) {
                        return [value];
                    });
                    //Push each object to scope result array, we don't wan't to push an entire array
                    for (var i = 0; i < array.length; i++){
                        var element = array[i]
                        _scope.result.push(element);
                    }
                });
            }
        }
    }

    app.controller('infiniteListCtrl', InfinityList);
} 