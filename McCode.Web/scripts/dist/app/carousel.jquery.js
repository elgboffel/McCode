"use strict";
var App;
(function (App) {
    class Carousel {
        constructor(element) {
            this._element = element;
            this._defaultOptions = JSON.parse(this._element.getAttribute("data-options"));
            this.activate();
        }
        activate() {
            $(this._element).owlCarousel(this._defaultOptions);
        }
    }
    App.Carousel = Carousel;
})(App || (App = {}));
$(function () {
    var elements = document.getElementsByClassName('owl-carousel');
    for (var i = 0; i < elements.length; i++) {
        var carousel = new App.Carousel(elements[i]);
    }
});
