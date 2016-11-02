import React from 'react';
import { Link } from 'react-router'
const Player = ({ params }) => (
  <div>
	<Link to="players">Back</Link>

    <h1>Player</h1>
    <h2>{params.player}</h2>
  </div>
)

export default Player;