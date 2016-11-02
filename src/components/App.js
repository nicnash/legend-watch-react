import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel'

class App extends React.Component {
	render(){
		return <div>
			<LeftPanel></LeftPanel>
			<RightPanel></RightPanel>
		</div>
	}
}

export default App;