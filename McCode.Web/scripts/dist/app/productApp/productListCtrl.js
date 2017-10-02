"use strict";
var Application;
(function (Application) {
    var ProductList;
    (function (ProductList) {
        'use strict';
        class ProductListCtrl {
            constructor(dataAccessService) {
                this.dataAccessService = dataAccessService;
                this.title = 'Product List',
                    this.showImage = false;
                this.products = [];
                var productRessource = dataAccessService.getProductRessource();
                productRessource.query((data) => {
                    this.products;
                });
            }
            toggleImage() {
                this.showImage = !this.showImage;
            }
        }
        ProductListCtrl.$inject = ['dataAccessService'];
        Application.app.controller('productListCtrl', ProductListCtrl);
    })(ProductList = Application.ProductList || (Application.ProductList = {}));
})(Application || (Application = {}));
