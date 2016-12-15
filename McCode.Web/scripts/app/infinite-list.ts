/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/handlebars/handlebars-1.0.0.d.ts" />

interface Window {
    getInfiniteList(section: any): void;

}

namespace App {
    export class InfiniteList {
        private _element: HTMLElement;
        constructor(element: HTMLElement) {
            this._element = element;
            this.loadInfiniteList();
        }

        loadInfiniteList() {
            var sectionCount = $(this._element).data().section;
            var list = $(this._element).data().list;
            console.log(list);
            $(this._element).on('click', function () {
                $.ajax({
                    contentType: 'application/json',
                    accepts: 'application:json',
                    url: '/umbraco/api/infinitelist/getinfinitelist?sectionCount=' + sectionCount + '&list=' + list,
                    method: 'GET'
                }).then(
                    (result: string) => {
                        var source = $("#infiniteListSection").html();
                        var template = Handlebars.compile(source);
                        var context = result;
                        var html = template(context);
                        $('#infiniteList').append(html);
                    },
                    (response: JQueryXHR) => {
                        // FAILED
                        if (response.status == 400) {
                            console.log('Woops! Computer said no way, Jose')
                        }
                    });
            });
        }
    }
}

$(function () {
    var elements = document.getElementsByClassName('list');
    for (var i = 0; i < elements.length; i++) {
        var infiniteList = new App.InfiniteList(<HTMLElement>elements[i]);
    }
});