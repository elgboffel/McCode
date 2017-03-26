var Application;
(function (Application) {
    var InfinityList = (function () {
        function InfinityList($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            var _scope = this.$scope;
            var _http = this.$http;
            _scope.page = 0;
            _scope.result = [];
            _scope.pageSize = 4;
            _scope.selectedTags = {};
            _scope.getList = function () {
                _http({
                    method: 'GET',
                    url: '/umbraco/api/infinitelist/getlist?data=' +
                        _scope.data +
                        '&page=' + _scope.page++ +
                        '&pageSize=' + _scope.pageSize
                }).then(function (response) {
                    //Convert responed data object to an array of objects
                    var array = $.map(response.data, function (value, index) {
                        return [value];
                    });
                    //Push each object to scope result array, we don't wan't to push an entire array
                    for (var i = 0; i < array.length; i++) {
                        var element = array[i];
                        _scope.result.push(element);
                    }
                });
            };
        }
        return InfinityList;
    }());
    Application.app.controller('infiniteListCtrl', InfinityList);
})(Application || (Application = {}));
