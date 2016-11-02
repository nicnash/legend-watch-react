import React from 'react';
// import Twitch from '../twitch.js';
const VideoPlayer = ({ params }) => {
	console.log('VideoPlayer',params);
	 var options = {
        width: 854,
        height: 480,
        // channel: "{CHANNEL}", 
        video: "v98060185"       
    };
    var player = new Twitch.Player("TWITCHPLAYER", options);
	return (
  <div>
    <h1>VideoPlayer</h1>
    <h2>{params.match}</h2>



  </div>
)}


export default VideoPlayer;