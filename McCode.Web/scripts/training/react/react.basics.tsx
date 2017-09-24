
namespace App.ReactTraining {
    const htmlView = document.querySelector('.react-view');

    const Card = (props) => {
        return (
            <div className="card">
                <img className="card__avatar" src={props.avatar_url} />
                <div className="card__info">
                    <div>{props.name}</div>
                    <div>{props.company}</div>
                </div>
            </div>
        );
    }

    const CardList = (props) => {
        return (
            <div>
                {props.cards.map(card => <Card {...card}/>)} 
            </div> 
        );
    }
    class Form extends React.Component {
        state = { userName: '' };

        handleSubmit = (event) => {
            event.preventDefault();
            console.log('Event: Form Submit', this.state.userName);
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.userName}
                        onChange={(event) => this.setState({ userName: event.target.value })}
                        placeholder="Github username" required/>
                    <button className="btn btn--" type="submit"><span>Tilføj Github bruger</span></button>
                </form>
            );
        }
    }

    class ReactApp extends React.Component {
        state = {
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
        }

        render() {
            return (
                <div>
                    <Form />
                    <CardList cards={this.state.cards} />
                </div>    
            );
        }
    }

    ReactDOM.render(<ReactApp />, htmlView);
}
