import React from 'react';
import PanelLeft from './PanelLeft';
import PanelRight from './PanelRight'

const Index = () => (
  <div>
    <h1>Sidebar</h1>
    <p>
      Routes can have multiple components, so that all portions of your UI
      can participate in the routing.
    </p>
  </div>
)

const IndexSidebar = () => (
  <div>
    <h2>Categories</h2>
  </div>
)

class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    var {left,right} = props;
    // this.setState({left,right});
  }
	render(){
		return <div className="App">
			<PanelLeft>  {this.props.left}	</PanelLeft>
			<PanelRight> {this.props.right ||<Index />}		</PanelRight>
		</div>
	}
}

// const App = (props) => {
//   console.log(props);
//   let {left,right} = props;
//   console.log(left);
//   return (
//   <div>
//       <PanelLeft>{left || <IndexSidebar />}</PanelLeft>
//       <PanelRight>{right || <Index />}</PanelRight>
//   </div>
//   )

// }



export default App;