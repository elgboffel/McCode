
namespace Application.Common {
    interface IDataAccessService {

    }

    interface IProductRessource extends ng.resource.IResource<Application.Domain.IProduct> {

    }

    export class DataAccessService implements IDataAccessService {

        static $inject = ['$http'];
        constructor(private $resource: ng.resource.IResourceService) { }

        getProductRessource(): ng.resource.IResourceClass<IProductRessource> {
            return this.$resource('api/products/:productId');
        }
    }

    appService.service('dataAccessService', DataAccessService);
}