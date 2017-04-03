var Application;
(function (Application) {
    var ProductList;
    (function (ProductList) {
        'use strict';
        var ProductListCtrl = (function () {
            function ProductListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = 'Product List',
                    this.showImage = false;
                this.products = [];
                var productRessource = dataAccessService.getProductRessource();
                productRessource.query(function (data) {
                    _this.products;
                });
            }
            ProductListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            ProductListCtrl.$inject = ['dataAccessService'];
            return ProductListCtrl;
        }());
        Application.app.controller('productListCtrl', ProductListCtrl);
    })(ProductList = Application.ProductList || (Application.ProductList = {}));
})(Application || (Application = {}));
//# sourceMappingURL=productListCtrl.js.map