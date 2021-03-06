﻿namespace App {
    export class ExpandingCard {
        constructor() {
            this.expandCard();
        }

        expandCard() {
            var _this = this;

            $('.plus-expander').on('click', function () {
                var $this = $(this);
                var $expandingCard = $this.closest('.expanding-card')
                $this.toggleClass('plus-expander--expanded');
                $expandingCard.toggleClass('expanding-card--expanded');

                if (!$expandingCard.hasClass('expanding-card--expanded')) {
                    $expandingCard.removeAttr('style');
                } else {
                    setTimeout(function () {
                        _this.setHeight($expandingCard)
                    }, 300);
                };

            });
        }

        setHeight(element: JQuery) {
            var height = element.find('.plus-expander').outerHeight() +
                element.find('.expanding-card__content').outerHeight();

            element.css({ 'height': height });
        }
    }
}

$(function () {
    var init = new App.ExpandingCard();
});