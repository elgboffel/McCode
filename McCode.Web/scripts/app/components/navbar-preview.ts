namespace App {
    export class NavbarPreview {
        constructor() {
            this.openDropdown();
        }

        openDropdown() {
            $('.navbar-preview__expander').on('click', function () {
                var $this = $(this);
                $this.find('.dropdown__content').slideToggle(250);
                $this.toggleClass('dropdown--expanded');

            });
        }
    }
}

$(function () {
    var init = new App.NavbarPreview();
});