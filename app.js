const players = [
	{name: 'LDK', score: 30, id:1},
	{name: 'HONG', score: 40, id:2},
	{name: 'KIM', score: 50, id:3},
	{name: 'PARK', score: 60, id:4}
];
const Header = (props) => {
	console.log(props);
	return(
		<header className="header">
			<h1 className="h1">{props.title}</h1>
			<span className="stats">Players: {props.totalPlayers}</span>
		</header>
	);
}

//function 컴포넌트로 class 컴포넌트로 전환
class Counter extends React.Component{
	/*
	state = {
		score : 0
	};
	*/
	constructor() {
		super();
		this.state = {
			score : 0
		}
	};

	incrementScore() {
		console.log("increment", this);
	//	this.setState({score: this.state.score + 1});
		this.setState(prevSate => ({score:prevState.score + 1}));


	}

	render() {
			return(
				<div className="counter">
					<button className="counter-action"> - </button>
					<span className="counter-score">{this.state.score}</span>
					<button className="counter-action" onClick={this.incrementScore.bind(this)}> + </button>
				</div>
			);
	}
}

const Player = (props) => {
	return (
		<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
				{props.name}
			</span>
			<Counter score={props.score}/>
		</div>
	);
}

//class component로 변환함.
class App extends React.Component{
	state = {
		players : [
			{name: 'LDK', score: 30, id:1},
			{name: 'HONG', score: 40, id:2},
			{name: 'KIM', score: 50, id:3},
			{name: 'PARK', score: 60, id:4}
		]
	}
	render() {
		return(
			<div className="scoreboard">
				<Header title="My Scoreboard" totalPlayers={21}/>
				{
					this.state.players.map(player => <Player name={player.name} score={player.score} id={player.id}
																									 key={player.id} removePlayer={this.handleRemovePlayer.bind(this)}/>)
				}
			</div>
		);
	}
	//1 ) 부모 컴포넌트에 콜백 펑션을 만든다.
	handleRemovePlayer(id) {
		//삭제로직
		console.log("handleRemovePlayer" , id);
/*
		this.setState(prevState => {
			const players = prevState.players.filter(players => players.id !== id);
			return {players};
		})
		*/

		this.setState(prevState => {
			return {
				players: prevState.players.filter(item => item.id !== id)
			}
		})
	}
}


ReactDOM.render(<App />, document.getElementById('root'));


/**------------------------------------------------------------**/
/*
//jsx 이용한 react
const title2 = (
	<h1 id="main-title" title="This is a title">My First React Element</h1>
);

const strong2 = (
	<strong>Description</strong>
);

const desc2 = (
	<p>This is a {strong2}</p>
);

const header2 = (
	<header>{title2}{desc2}</header>
);

ReactDOM.render(header2, document.getElementById('root2'));

const titleStr = 'main-title';

const title = (<h1 id={titleStr} title='this is a title'>
	My First React Element
</h1>);

const desc = (
	<p>This is a Description</p>
);

const header = (
	<header>{title}{desc}</header>
);
*/


//순수 react
/*
	React.createElement(
	'h1'
	, {id:'main-title', title:'This is a title'}
	, 'My First React Element');


const str = React.createElement(
	'strong'
	, null
	, ' a Description'
);

const desc = React.createElement(
	'p'
	, null
	, 'This is', str
);


const header = React.createElement(
	'header'
	, null
	, title, desc
)
*/
//console.log(header);

//ReactDOM.render(header, document.getElementById('root'));
