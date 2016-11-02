import React from 'react';
class PanelRight extends React.Component {
	render(){
		return <div className="PanelRight">
		Right
			{this.props.children}
		</div>
	}
}

export default PanelRight;