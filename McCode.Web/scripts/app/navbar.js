"use strict";
var App;
(function (App) {
    var Navbar = (function () {
        function Navbar() {
            this.fixed();
            this.toggleUtilityBar();
        }
        Navbar.prototype.fixed = function () {
            $(window).on('scroll', function () {
                var element = $('.navbar');
                var windowPosition = $(window).scrollTop();
                if (windowPosition > 0)
                    element.addClass('navbar--fixed');
                else
                    element.removeClass('navbar--fixed');
            });
        };
        Navbar.prototype.toggleUtilityBar = function () {
            var element = $('.utility-bar--toggle');
            element.on('click', function () {
                $('.navbar').toggleClass('utility-bar--visible');
            });
        };
        return Navbar;
    }());
    App.Navbar = Navbar;
})(App || (App = {}));
$(function () {
    var init = new App.Navbar();
});
//# sourceMappingURL=navbar.js.map