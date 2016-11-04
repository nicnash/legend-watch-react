import React from 'react';
import { Link } from 'react-router';
import data from '../data';
class Champions extends React.Component {
	constructor(props, context) {
		super(props,context)

		this.state = {
			status:'receiving',
			champions:[]
		}
		
	}
	componentWillMount() {
		var x = fetch('http://52.11.35.166:3000/champions')
			.then(response => response.json())
			.then((response)=>this.dataReceived(response));
	}
	dataReceived(response) {
		console.log('data from api call',response);
		this.setState({
			champions:response.champions,
			status:'received'
		})
		// this.state.champions = data.champions;
		// this.state.status='received';
		console.log('received',this.state);
	}
	render(){
		return <div className="Champions">
			<ul>
				{this.state.status}
				{this.state.champions.map((champion, index) => (
				  <li key={index}>
				    <Link to={`/champions/${champion.key}`}>{champion.name}</Link>
				  </li>
				))}
			</ul>
		</div>
	}
}

export default Champions;