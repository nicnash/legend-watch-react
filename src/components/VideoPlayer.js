import React from 'react';
const VideoPlayer = ({ params }) => {
	console.log('VideoPlayer',params);
	return (
  <div>
    <h1>VideoPlayer</h1>
    <h2>{params.match}</h2>
  </div>
)}


export default VideoPlayer;