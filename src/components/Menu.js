import React from 'react';
import { Link } from 'react-router'
const ACTIVE = { color: 'red' }


class Menu extends React.Component {
	render(){
		return <div className="Menu">
			<ul>
				<li><Link to="/champions" activeStyle={ACTIVE}>champions</Link></li>
				<li><Link to="/players"   activeStyle={ACTIVE}>players</Link></li>
			</ul>
		</div>
	}
}

export default Menu;