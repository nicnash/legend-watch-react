import React from 'react';
class PanelRight extends React.Component {
	render(){
		return <div className="PanelRight">
			{this.props.children}
		</div>
	}
}

export default PanelRight;