import React from 'react';
import { Link } from 'react-router'
import {lookupChampion} from '../data';
const Champion = ({ params }) => (
  <div>
	<Link to="champions">Back</Link>

    <h1>Champion</h1>
    <h2>{params.champion}</h2>
    <ul>
		{lookupChampion(params.champion).matches.map((match, index) => (
    	  <li key={index}>
    	    <Link to={`/champions/${params.champion}/${match.id}`}>{match.id} - {match.kda}</Link>
    	  </li>
    	))}
    </ul>
  </div>
)

export default Champion;

