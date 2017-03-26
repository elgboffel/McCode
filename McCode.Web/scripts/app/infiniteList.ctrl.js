var Application;
(function (Application) {
    var InfiniteListCtrl = (function () {
        function InfiniteListCtrl($http, $scope) {
            this.httpService = $http;
            this.scope = $scope;
            this.data = this.scope.data;
        }
        InfiniteListCtrl.prototype.getList = function () {
            this.httpService({
                method: 'GET',
                url: '/umbraco/api/infinitelist/getlist?ids=' + this.data
            });
        };
        return InfiniteListCtrl;
    }());
    Application.app.controller('infiniteListCtrl', InfiniteListCtrl);
})(Application || (Application = {}));
//namespace App {
//    export class InfiniteList {
//        private _element: HTMLElement;
//        constructor(element: HTMLElement) {
//            this._element = element;
//            this.loadInfiniteList();
//        }
//        loadInfiniteList() {
//            var sectionCount = $(this._element).data().section;
//            var list = $(this._element).data().list;
//            console.log(list);
//            $(this._element).on('click', function() {
//                this.getList(sectionCount, list).then(
//                    (result: string) => {
//                        var source = $("#infiniteListSection").html();
//                        var template = Handlebars.compile(source);
//                        var context = result;
//                        var html = template(context);
//                        $('#infiniteList').append(html);
//                    },
//                    (response: JQueryXHR) => {
//                        // FAILED
//                        if (response.status == 400) {
//                            console.log('Woops! Computer said no way, Jose')
//                        }
//                    });
//            });
//        }
//        getList(sectionCount, list): any {
//            return $.ajax({
//                contentType: 'application/json',
//                accepts: 'application:json',
//                url: '/umbraco/api/infinitelist/getinfinitelist?sectionCount=' + sectionCount + '&list=' + list,
//                method: 'GET'
//            });
//        }
//    }
//}
//$(function () {
//    var elements = document.getElementsByClassName('list');
//    for (var i = 0; i < elements.length; i++) {
//        var infiniteList = new App.InfiniteList(<HTMLElement>elements[i]);
//    }
//}); 
