
namespace App.ReactTraining {

    interface ICardListProps {
        cards: Array<ICardProps>; 
    }

    interface ICardProps {
        login: string;
        id: number;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
        name: string;
        company?: any;
        blog: string;
        location?: any;
        email?: any;
        hireable?: any;
        bio?: any;
        public_repos: number;
        public_gists: number;
        followers: number;
        following: number;
        created_at: Date;
        updated_at: Date;
    }

    interface IFormProps {
        onSubmit: (cardInfo: any) => void;
    }

    const githubRootEndPoint = 'https://api.github.com/';

    const htmlView = document.querySelector('.react-view');

    const Card = (props: ICardProps) => {
        return (
            <div className="col-xs-12 col-sm-6">
                <div className="card">
                    <img className="card__avatar" src={props.avatar_url} />
                    <div className="card__info">
                        <div>{props.name}</div>
                        <div>{props.company}</div>
                    </div>
                </div>
            </div>
        );
    }

    const CardList = (props: ICardListProps) => {
        return (
            <div className="row flex-box">
                {props.cards.map(card => <Card key={card.id} {...card} />)} 
            </div> 
        );
    }

    class Form extends React.Component<IFormProps> {

        state = { userName: '' };

        handleSubmit = (event) => {
            event.preventDefault();
            axios.get(`${githubRootEndPoint}users/${this.state.userName}`)
                .then(resp => {
                    this.props.onSubmit(resp.data);
                    this.setState({ userName: ''});
                });
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            value={this.state.userName}
                            onChange={(event) => this.setState({ userName: event.target.value })}
                            placeholder="Github brugernavn" required
                            className="form-control" />
                    </div>
                    <button className="btn btn--default" type="submit"><span>Tilføj Github bruger</span></button>
                </form>
            );
        }
    }

    class ReactApp extends React.Component {
        state = {
            cards:[]
        }

        addNewCard = (cardInfo) => {
            this.setState((prevState: any) => ({
                cards: prevState.cards.concat(cardInfo)
            }));
        };

        render() {
            return (
                <div>
                    <Form onSubmit={this.addNewCard} />
                    <CardList cards={this.state.cards} />
                </div>    
            );
        }
    }

    ReactDOM.render(<ReactApp />, htmlView);
}
