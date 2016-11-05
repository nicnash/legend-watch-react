import React from 'react';
import { Link } from 'react-router'
const ACTIVE = { color: 'red' }


class Menu extends React.Component {
	render(){
		return <div className="Menu">
			<ul>
				<li className="Menu-item"><Link to="/champions" activeStyle={ACTIVE}>a</Link></li>
				<li className="Menu-item"><Link to="/players"   activeStyle={ACTIVE}>b</Link></li>
			</ul>
		</div>
	}
}

export default Menu;