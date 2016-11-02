import React from 'react';
import { Link } from 'react-router'
class Champions extends React.Component {
	render(){
		return <div className="Champions">
			<ul>
				<li><Link to="/champions/Ahri">Ahri</Link></li>
				<li><Link to="/champions/Leblanc">Leblanc</Link></li>
				<li><Link to="/champions/Draven">Draven</Link></li>
			</ul>
		</div>
	}
}

export default Champions;