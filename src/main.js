import React from 'react';
import ReactDOM from 'react-dom';

import './css/styles.scss';
import App from './components/App';
import Champions 	from './components/Champions';
import Champion 	from './components/Champion';
import Players 		from './components/Players';
import Player 		from './components/Player';
import VideoPlayer 	from './components/VideoPlayer';


import { Router, Route, IndexRoute, browserHistory} from 'react-router'

const router = (
	<Router history = {browserHistory}>
		<Route path="/" component={App}>
			<Route path="champions" 					components={{left:Champions,right: VideoPlayer}}></Route>
			<Route path="champions/:champion" 			components={{left:Champion,right: VideoPlayer}}></Route>
			<Route path="champions/:champion/:match" 	components={{left:Champion,right: VideoPlayer}}></Route>
			<Route path="players" 						components={{left:Players,right: VideoPlayer}}></Route>
			<Route path="players/:player" 				components={{left:Player,right: VideoPlayer}}></Route>
		</Route>
	</Router>
)

ReactDOM.render(router, document.getElementById('app'))


				// <Route path=":champion" component={Champion} />
