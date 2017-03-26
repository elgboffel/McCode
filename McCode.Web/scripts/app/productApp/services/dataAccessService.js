var Application;
(function (Application) {
    var Common;
    (function (Common) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getProductRessource = function () {
                return this.$resource('api/products/:productId');
            };
            DataAccessService.$inject = ['$http'];
            return DataAccessService;
        }());
        Common.DataAccessService = DataAccessService;
        Common.appService.service('dataAccessService', DataAccessService);
    })(Common = Application.Common || (Application.Common = {}));
})(Application || (Application = {}));
