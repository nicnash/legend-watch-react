import React from 'react';
import Header from './Header';
import Menu from './Menu';
class PanelLeft extends React.Component {
	render(){
		return <div className="PanelLeft">
			<Header></Header>
			<Menu></Menu>
			{this.props.children}
			

		</div>
	}
}

export default PanelLeft;