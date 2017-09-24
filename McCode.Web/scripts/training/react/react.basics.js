var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var App;
(function (App) {
    var ReactTraining;
    (function (ReactTraining) {
        var htmlView = document.querySelector('.react-view');
        var Card = function (props) {
            return (React.createElement("div", { className: "card" },
                React.createElement("img", { className: "card__avatar", src: props.avatar_url }),
                React.createElement("div", { className: "card__info" },
                    React.createElement("div", null, props.name),
                    React.createElement("div", null, props.company))));
        };
        var CardList = function (props) {
            return (React.createElement("div", null, props.cards.map(function (card) { return React.createElement(Card, __assign({}, card)); })));
        };
        var Form = (function (_super) {
            __extends(Form, _super);
            function Form() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = { userName: '' };
                _this.handleSubmit = function (event) {
                    event.preventDefault();
                    console.log('Event: Form Submit', _this.state.userName);
                };
                return _this;
            }
            Form.prototype.render = function () {
                var _this = this;
                return (React.createElement("form", { onSubmit: this.handleSubmit },
                    React.createElement("input", { value: this.state.userName, onChange: function (event) { return _this.setState({ userName: event.target.value }); }, placeholder: "Github username", required: true }),
                    React.createElement("button", { className: "btn btn--", type: "submit" },
                        React.createElement("span", null, "Tilf\u00F8j Github bruger"))));
            };
            return Form;
        }(React.Component));
        var ReactApp = (function (_super) {
            __extends(ReactApp, _super);
            function ReactApp() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = {
                    cards: [
                        {
                            name: 'Johnny Kristensen',
                            avatar_url: 'https://avatars2.githubusercontent.com/u/6636764?v=4',
                            company: 'Datagraf Communications A/S'
                        },
                        {
                            name: 'Anders Frey Birkmose',
                            avatar_url: 'https://avatars0.githubusercontent.com/u/4482689?v=4',
                            company: 'Datagraf Communications A/S'
                        }
                    ]
                };
                return _this;
            }
            ReactApp.prototype.render = function () {
                return (React.createElement("div", null,
                    React.createElement(Form, null),
                    React.createElement(CardList, { cards: this.state.cards })));
            };
            return ReactApp;
        }(React.Component));
        ReactDOM.render(React.createElement(ReactApp, null), htmlView);
    })(ReactTraining = App.ReactTraining || (App.ReactTraining = {}));
})(App || (App = {}));
//# sourceMappingURL=react.basics.js.map