var Application;
(function (Application) {
    var Domain;
    (function (Domain) {
        class Product {
            constructor(productId, productName, productCode, releaseDate, price, description, imageUrl) {
                this.productId = productId;
                this.productName = productName;
                this.productCode = productCode;
                this.releaseDate = releaseDate;
                this.price = price;
                this.description = description;
                this.imageUrl = imageUrl;
            }
            calculateDiscount(percent) {
                return this.price - (this.price * percent / 100);
            }
        }
        Domain.Product = Product;
    })(Domain = Application.Domain || (Application.Domain = {}));
})(Application || (Application = {}));
//# sourceMappingURL=product.js.map