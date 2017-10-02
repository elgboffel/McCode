"use strict";
var App;
(function (App) {
    class Navbar {
        constructor() {
            this.fixed();
            this.toggleUtilityBar();
        }
        fixed() {
            $(window).on('scroll', function () {
                var element = $('.navbar');
                var windowPosition = $(window).scrollTop();
                if (windowPosition > 0)
                    element.addClass('navbar--fixed');
                else
                    element.removeClass('navbar--fixed');
            });
        }
        toggleUtilityBar() {
            var element = $('.utility-bar--toggle');
            element.on('click', function () {
                $('.navbar').toggleClass('utility-bar--visible');
            });
        }
    }
    App.Navbar = Navbar;
})(App || (App = {}));
$(function () {
    var init = new App.Navbar();
});
