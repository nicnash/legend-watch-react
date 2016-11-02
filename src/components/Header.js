import React from 'react';
import {Link} from 'react-router';
class Header extends React.Component {
	render(){
		return <div>
			<h1><Link to="/">LegendWatch</Link></h1>
		</div>
	}
}

export default Header;