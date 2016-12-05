/// <reference path="../typings/jquery/jquery.d.ts" />
var mainNav = {
    nav: $('#mainNav'),
    navBtn: $('#navBtn'),
    navOpen() {
        mainNav.navBtn.on('click', function () {

            if (mainNav.nav.hasClass('open')
                || mainNav.nav.hasClass('closed')
                ) {
                mainNav.nav.toggleClass('closed');
            }
            mainNav.nav.toggleClass('open');
        });
    },
    init() {
        mainNav.navOpen();
    }
};

(function () {
    mainNav.init();
})();