
module App {
    export class Carousel {
        private _element: HTMLElement;
        private _defaultOptions: any;
        constructor(element: HTMLElement) {
            this._element = element;
            this._defaultOptions = JSON.parse(this._element.getAttribute("data-options"));
            this.activate();
            //this.placeNavigation();
        }

        activate() {
            $(this._element).owlCarousel(this._defaultOptions);
        }
    }
}

$(function () {
    var elements = document.getElementsByClassName('owl-carousel');
    for (var i = 0; i < elements.length; i++) {
        var carousel = new App.Carousel(<HTMLElement>elements[i]);
    }
})