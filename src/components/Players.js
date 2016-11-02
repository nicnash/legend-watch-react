import React from 'react';
import { Link } from 'react-router';
import data from '../data';
const Players = () => (
  	<div>
  		<ul>
  			{data.getAll().players.map((player, index) => (
  			  <li key={index}>
  			    <Link to={`/players/${player.name}`}>{player.name}</Link>
  			  </li>
  			))}
  		</ul>
  	</div>
)

export default Players;