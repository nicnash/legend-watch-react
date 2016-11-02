import React from 'react';
import { Link } from 'react-router'
const Champion = ({ params }) => (
  <div>
	<Link to="champions">Back</Link>

    <h1>Champion</h1>
    <h2>{params.champion}</h2>
  </div>
)

export default Champion;