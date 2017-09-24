namespace App {
    export class NavbarPreview {
        constructor(
            private element: HTMLElement,
        ) {
            this.openDropdown(element);
        }

        openDropdown(element: HTMLElement) {
            let _this = this;
            element.addEventListener('click', function () {
                let navbarPreview = this.closest('.navbar-preview') as HTMLElement;

                this.classList.toggle('navbar-preview__expander--expanded');
                _this.toggleNavbarHeight(navbarPreview);
            });
        }

        toggleNavbarHeight(element: HTMLElement) {
            let preview = element.querySelector('.navbar-preview__preview') as HTMLElement;
            let elementHeight = element.offsetHeight;
            let dropdownHeight = element.querySelector('ul').offsetHeight;

            if (element.classList.contains('js|open')) {

                element.style.height = '63px';
                element.classList.toggle('js|open');
                setTimeout(function () {
                    document.body.classList.remove('overflow-hidden');
                }, 225);

            } else {
                element.style.height = (elementHeight + dropdownHeight + preview.offsetHeight + 65) + 'px';
                element.classList.toggle('js|open');
                document.body.classList.remove('overflow-hidden');
            }
        }
    }
}

(function () {
    var elements = document.querySelectorAll('.navbar-preview__expander');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.NavbarPreview(<HTMLElement>elements[i]);
    }
})();