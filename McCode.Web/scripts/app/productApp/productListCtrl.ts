
namespace Application.ProductList {
    'use strict';

    interface IProductListModel {
        title: string;
        showImage: boolean;
        products: Application.Domain.IProduct[];
        toggleImage(): void;
    }

    class ProductListCtrl implements IProductListModel {
        title: string;
        showImage: boolean;
        products: Application.Domain.IProduct[];

        static $inject = ['dataAccessService'];
        constructor(private dataAccessService: Application.Common.DataAccessService) {
            this.title = 'Product List',
            this.showImage = false;
            this.products = [];

            var productRessource = dataAccessService.getProductRessource();
            productRessource.query((data: Application.Domain.IProduct[]) => {
                this.products
            });
        }

        toggleImage(): void {
            this.showImage = !this.showImage;
        }
    }
    app.controller('productListCtrl', ProductListCtrl)
}
