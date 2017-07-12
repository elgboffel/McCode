namespace App {
    export class NavbarPreview {
        constructor() {
            this.openDropdown();
            //this.replacePlaceholder();
        }

        openDropdown() {
            var _this = this;
            var $element = $('.navbar-preview__expander');
            $element.on('click', function () {
                var $this = $(this);

                $this.toggleClass('navbar-preview__expander--expanded');
                _this.toggleNavbarHeight($('.navbar-preview'));
            });
        }

        toggleNavbarHeight($element: JQuery) {
            var $elementHeight = $element.outerHeight();
            var $dropdownHeight = $element.find('ul').outerHeight();
            var $preview = $element.find('.navbar-preview__preview').outerHeight();

            if ($element.hasClass('js|open')) {
                $element.css({ 'height': 63 });
                $element.toggleClass('js|open');
                setTimeout(function () {
                    $('body').removeClass('overflow-hidden');
                }, 225);

            } else {
                $element.css({ 'height': $elementHeight + $dropdownHeight + $preview + 65 });
                $element.toggleClass('js|open');
                $('body').addClass('overflow-hidden');
            }
        }

        replacePlaceholder() {
            var $text = "";

            $('.navbar-preview__expander').on('mouseover', function () {
                var $this = $(this);
                var $placeholder = $this.data().placeholder;
                $text = $this.text();

                $this.text($placeholder);
            });

            $('.navbar-preview__expander').on('mouseleave', function () {

                $(this).text(this.$text);
            });
        }
    }
}

$(function () {
    var init = new App.NavbarPreview();
});