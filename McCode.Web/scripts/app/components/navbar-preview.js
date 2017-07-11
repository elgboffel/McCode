var App;
(function (App) {
    var NavbarPreview = (function () {
        function NavbarPreview() {
            this.openDropdown();
        }
        NavbarPreview.prototype.openDropdown = function () {
            $('.navbar-preview__expander').on('click', function () {
                var $this = $(this);
                $this.find('.dropdown__content').slideToggle(250);
                $this.toggleClass('dropdown--expanded');
            });
        };
        return NavbarPreview;
    }());
    App.NavbarPreview = NavbarPreview;
})(App || (App = {}));
$(function () {
    var init = new App.NavbarPreview();
});
//# sourceMappingURL=navbar-preview.js.map