"use strict";
var App;
(function (App) {
    const endPoint = 'umbraco/api/collapsemenu/getchildrenofpage/';
    const sectionClass = 'collapse-menu__section';
    const childrenClass = 'collapse-menu__children';
    class Section extends React.Component {
        constructor() {
            super(...arguments);
            this.getSection = (event) => {
                event.preventDefault();
                axios.get(`${endPoint}?id=1276`)
                    .then(resp => {
                    this.props.onClick(resp.data);
                });
            };
        }
        render() {
            return (React.createElement("li", { className: sectionClass },
                React.createElement("a", { href: this.props.url }, this.props.urlName),
                React.createElement("button", { role: "button", className: "collapse-menu__btn collapse-menu__slide", onClick: this.getSection }, "get"),
                React.createElement("ul", { className: childrenClass })));
        }
    }
    class MenuSection {
        constructor(element) {
            this.addMenuSection(element);
        }
        addMenuSection(element) {
            const section = element.closest(`.${sectionClass}`);
            const renderAt = section.querySelector(`.${childrenClass}`);
            if (renderAt.children.length === 0) {
                element.addEventListener('click', function (event) {
                    ReactDOM.render(React.createElement(Section, null), renderAt);
                });
            }
        }
    }
    App.MenuSection = MenuSection;
})(App || (App = {}));
(function () {
    var elements = document.querySelectorAll('.collapse-menu__btn');
    for (let i = 0; i < elements.length; i++) {
        var init = new App.MenuSection(elements[i]);
    }
})();
