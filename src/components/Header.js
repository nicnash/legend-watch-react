import React from 'react';
import {Link} from 'react-router';
import someImage from "../img/logo.png";

class Header extends React.Component {
	render(){
		return <div className="Header">
			<Link to="/" className="Header-logo"><img src={someImage} /></Link>
		</div>
	}
}

export default Header;