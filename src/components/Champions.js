import React from 'react';
import { Link } from 'react-router';
import data from '../data';
class Champions extends React.Component {
	constructor(props, context) {
		super(props,context)
		// fetch('')
		// 	.then(data => data.json())
	}
	render(){
		// const champions = data.lookupCategory('champions')
		console.log('sfeefw',data.getAll());
		return <div className="Champions">
			<ul>
				{data.getAll().champions.map((champion, index) => (
				  <li key={index}>
				    <Link to={`/champions/${champion.name}`}>{champion.name}</Link>
				  </li>
				))}
			</ul>
		</div>
	}
}

export default Champions;