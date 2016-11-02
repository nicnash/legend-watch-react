import React from 'react';
import Header from './Header';
import Menu from './Menu';
class LeftPanel extends React.Component {
	render(){
		return <div className="LeftPanel">
			<Header></Header>
			<Menu></Menu>
			

		</div>
	}
}

export default LeftPanel;