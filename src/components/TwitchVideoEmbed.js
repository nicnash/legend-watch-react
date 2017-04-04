import React from 'react';
import 'twitch-embed';

class TwitchVideoEmbed extends React.Component {
	constructor(props) {
		super(props);
		this.player = null;
		this.state = {
			id: null
		};
	}

	componentWillMount() {
		this.setId();
	}

	componentDidMount() {
		// this.setPlayer();
	}

	componentDidUpdate() {
		// this.setPlayer();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps){
			console.log('TwitchVideoEmbed nextProps', nextProps);
			this.setId();
			this.setPlayer(nextProps);
		}
		
		//can check for props and call player functions here
	}

	setId() {
		if (!this.state.id) {
			if (this.props.channel) {
				this.channel = true;
				this.setState({
					id: `twitch-${this.props.channel}`
				});
			}
			if (this.props.video) {
				this.channel = false;
				this.setState({
					id: `twitch-${this.props.video}`
				});
			}
		}
	}

	setPlayer(nextProps) {
		if (!this.player) {
			const options = {};
			options.width = 854;
			options.height = 480;
			if (this.channel) {
				options.channel = this.props.channel;
			} else {
				options.video = this.props.video;
			}
			console.log('state id', this.state.id);
			this.player = new Twitch.Player(this.state.id, options);
		} else {
			console.log('setting video curr props', this.props);
			console.log('setting video next props', nextProps);
			if (this.props.video !== nextProps.video){
				this.player.setVideo(nextProps.video);
				console.log('setting video, should i be?');
			}
			if (nextProps.timestamp) {
				console.log('seeking to time', nextProps.timestamp);
				this.player.seek(parseInt(nextProps.timestamp));
			}

			// this.setState({

			// });
		}
	}

	render() {
		return (
			<div id={this.state.id || ''} className="twitch-video-embed"></div>
		);
	}
}

TwitchVideoEmbed.propTypes = {
	channel: React.PropTypes.string,
	video: React.PropTypes.string,
	timestamp: React.PropTypes.string,
	play: React.PropTypes.bool
};

export default TwitchVideoEmbed;