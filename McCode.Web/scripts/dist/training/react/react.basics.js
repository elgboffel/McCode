"use strict";
var App;
(function (App) {
    var ReactTraining;
    (function (ReactTraining) {
        const githubRootEndPoint = 'https://api.github.com/';
        const htmlView = document.querySelector('.react-view');
        const Card = (props) => {
            return (React.createElement("div", { className: "col-xs-12 col-sm-6" },
                React.createElement("div", { className: "card" },
                    React.createElement("img", { className: "card__avatar", src: props.avatar_url }),
                    React.createElement("div", { className: "card__info" },
                        React.createElement("div", null, props.name),
                        React.createElement("div", null, props.company)))));
        };
        const CardList = (props) => {
            return (React.createElement("div", { className: "row flex-box" }, props.cards.map(card => React.createElement(Card, Object.assign({ key: card.id }, card)))));
        };
        class Form extends React.Component {
            constructor() {
                super(...arguments);
                this.state = { userName: '' };
                this.handleSubmit = (event) => {
                    event.preventDefault();
                    axios.get(`${githubRootEndPoint}users/${this.state.userName}`)
                        .then(resp => {
                        this.props.onSubmit(resp.data);
                        this.setState({ userName: '' });
                    });
                };
            }
            render() {
                return (React.createElement("form", { onSubmit: this.handleSubmit },
                    React.createElement("div", { className: "form-group" },
                        React.createElement("input", { value: this.state.userName, onChange: (event) => this.setState({ userName: event.target.value }), placeholder: "Github brugernavn", required: true, className: "form-control" })),
                    React.createElement("button", { className: "btn btn--default", type: "submit" },
                        React.createElement("span", null, "Tilf\u00F8j Github bruger"))));
            }
        }
        class ReactApp extends React.Component {
            constructor() {
                super(...arguments);
                this.state = {
                    cards: []
                };
                this.addNewCard = (cardInfo) => {
                    this.setState((prevState) => ({
                        cards: prevState.cards.concat(cardInfo)
                    }));
                };
            }
            render() {
                return (React.createElement("div", null,
                    React.createElement(Form, { onSubmit: this.addNewCard }),
                    React.createElement(CardList, { cards: this.state.cards })));
            }
        }
        ReactDOM.render(React.createElement(ReactApp, null), htmlView);
    })(ReactTraining = App.ReactTraining || (App.ReactTraining = {}));
})(App || (App = {}));
