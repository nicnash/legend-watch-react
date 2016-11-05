import React from 'react';
import {Link} from 'react-router';
import logo from "../img/logo.png";

class Header extends React.Component {
	render(){
		return <div className="Header">
			<Link to="/" className="Header-logo"><img src={logo} /></Link>
		</div>
	}
}

export default Header;