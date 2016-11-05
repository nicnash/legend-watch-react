import React from 'react';
// import Twitch from '../twitch.js';
// const VideoPlayer = ({ params }) => {
// 	console.log('VideoPlayer',params);
// 	 var options = {
// 		width: 854,
// 		height: 480,
// 		// channel: "{CHANNEL}", 
// 		video: "v98060185"       
// 	};
// 	var player = new Twitch.Player("TWITCHPLAYER", options);
// 	return (
//   <div>
// 	<h1>VideoPlayer</h1>
// 	<h2>{params.match}</h2>
// 	<div id="TWITCHPLAYER"></div>
//   </div>
// )}

	// componentDidMount()

class VideoPlayer extends React.Component {
  constructor(props, context) {
		super(props, context)

		this.state = {
			options: {
				width: 854,
				height: 480,
				// channel: "{CHANNEL}", 
				video: "v98060185"       
			}
		};

	}
	
	componentDidMount(){
		let player = new Twitch.Player("TWITCHPLAYER", this.state.options);
		this.setState({player:player});
	}
	componentWillReceiveProps(nextProps) {
		// console.log('componentWillReceiveProps',nextProps);
		let player = this.state.player;
		// this.state.player.setVideo(`v${nextProps.params.match}`);
		player.setVideo(`v${nextProps.params.match}`);
		console.log('set the video!  is it working guyz?!',player);
	}

	render(){
		return  <div>
			<h1>VideoPlayer</h1>
			<h2>{this.props.params.match}</h2>
			<div id="TWITCHPLAYER"></div>
			button here.
		</div>
	}
}



export default VideoPlayer;