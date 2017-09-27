var Application;
(function (Application) {
    var Common;
    (function (Common) {
        class DataAccessService {
            constructor($resource) {
                this.$resource = $resource;
            }
            getProductRessource() {
                return this.$resource('api/products/:productId');
            }
        }
        DataAccessService.$inject = ['$http'];
        Common.DataAccessService = DataAccessService;
        Common.appService.service('dataAccessService', DataAccessService);
    })(Common = Application.Common || (Application.Common = {}));
})(Application || (Application = {}));
//# sourceMappingURL=dataAccessService.js.map