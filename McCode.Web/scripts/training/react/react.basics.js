var App;
(function (App) {
    var ReactTraining;
    (function (ReactTraining) {
        const htmlView = document.querySelector('.react-view');
        const Card = (props) => {
            return (React.createElement("div", { className: "card" },
                React.createElement("img", { className: "card__avatar", src: props.avatar_url }),
                React.createElement("div", { className: "card__info" },
                    React.createElement("div", null, props.name),
                    React.createElement("div", null, props.company))));
        };
        const CardList = (props) => {
            return (React.createElement("div", null, props.cards.map((card) => React.createElement(Card, Object.assign({}, card)))));
        };
        class Form extends React.Component {
            constructor() {
                super(...arguments);
                this.state = { userName: '' };
                this.handleSubmit = (event) => {
                    event.preventDefault();
                    console.log('Event: Form Submit', this.state.userName);
                };
            }
            render() {
                return (React.createElement("form", { onSubmit: this.handleSubmit },
                    React.createElement("input", { value: this.state.userName, onChange: (event) => this.setState({ userName: event.target.value }), placeholder: "Github username", required: true }),
                    React.createElement("button", { className: "btn btn--", type: "submit" },
                        React.createElement("span", null, "Tilf\u00F8j Github bruger"))));
            }
        }
        class ReactApp extends React.Component {
            constructor() {
                super(...arguments);
                this.state = {
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
            }
            render() {
                return (React.createElement("div", null,
                    React.createElement(Form, null),
                    React.createElement(CardList, { cards: this.state.cards })));
            }
        }
        ReactDOM.render(React.createElement(ReactApp, null), htmlView);
    })(ReactTraining = App.ReactTraining || (App.ReactTraining = {}));
})(App || (App = {}));
//# sourceMappingURL=react.basics.js.map