/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/handlebars/handlebars-1.0.0.d.ts" />
var App;
(function (App) {
    var InfiniteList = (function () {
        function InfiniteList(element) {
            this._element = element;
            this.loadInfiniteList();
        }
        InfiniteList.prototype.loadInfiniteList = function () {
            var sectionCount = $(this._element).data().section;
            var list = $(this._element).data().list;
            console.log(list);
            $(this._element).on('click', function () {
                this.getList(sectionCount, list).then(function (result) {
                    var source = $("#infiniteListSection").html();
                    var template = Handlebars.compile(source);
                    var context = result;
                    var html = template(context);
                    $('#infiniteList').append(html);
                }, function (response) {
                    // FAILED
                    if (response.status == 400) {
                        console.log('Woops! Computer said no way, Jose');
                    }
                });
            });
        };
        InfiniteList.prototype.getList = function (sectionCount, list) {
            return $.ajax({
                contentType: 'application/json',
                accepts: 'application:json',
                url: '/umbraco/api/infinitelist/getinfinitelist?sectionCount=' + sectionCount + '&list=' + list,
                method: 'GET'
            });
        };
        return InfiniteList;
    }());
    App.InfiniteList = InfiniteList;
})(App || (App = {}));
$(function () {
    var elements = document.getElementsByClassName('list');
    for (var i = 0; i < elements.length; i++) {
        var infiniteList = new App.InfiniteList(elements[i]);
    }
});
//# sourceMappingURL=infinite-list.js.map