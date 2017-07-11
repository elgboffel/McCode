var App;
(function (App) {
    var ExpandingCard = (function () {
        function ExpandingCard() {
            this.expandCard();
        }
        ExpandingCard.prototype.expandCard = function () {
            var _this = this;
            $('.plus-expander').on('click', function () {
                var $this = $(this);
                var $expandingCard = $this.closest('.expanding-card');
                $this.toggleClass('plus-expander--expanded');
                $expandingCard.toggleClass('expanding-card--expanded');
                if (!$expandingCard.hasClass('expanding-card--expanded')) {
                    $expandingCard.removeAttr('style');
                }
                else {
                    setTimeout(function () {
                        _this.setHeight($expandingCard);
                    }, 300);
                }
                ;
            });
        };
        ExpandingCard.prototype.setHeight = function (element) {
            var height = element.find('.plus-expander').outerHeight() +
                element.find('.expanding-card__content').outerHeight();
            element.css({ 'height': height });
        };
        return ExpandingCard;
    }());
    App.ExpandingCard = ExpandingCard;
})(App || (App = {}));
$(function () {
    var init = new App.ExpandingCard();
});
//# sourceMappingURL=expanding-card.js.map