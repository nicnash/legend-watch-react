import React from 'react';
import { Link } from 'react-router'
import {lookupChampion} from '../data';
// const Champion = ({ params }) => (
//   <div>
// 	<Link to="champions">Back</Link>

//     <h1>Champion</h1>
//     <h2>{params.champion}</h2>
//     <ul>
// 		{lookupChampion(params.champion).matches.map((match, index) => (
//     	  <li key={index}>
//     	    <Link to={`/champions/${params.champion}/${match.id}`}>{match.id} - {match.kda}</Link>
//     	  </li>
//     	))}
//     </ul>
//   </div>
// )


class Champion extends React.Component {
    constructor(props, context) {
        super(props,context)
        console.log(props);
        this.state = {
            status:'receiving',
            matches:[],
            champion: props.params.champion
        }
        
        // this.dataReceived = this.dataReceived.bind(this);
    }

    componentWillMount() {
        var x = fetch(`http://52.11.35.166:3000/champions/${this.state.champion}/videos`)
            .then(response => response.json())
            .then((response)=>this.dataReceived(response));
    }

    dataReceived(response) {
        console.log('data from api call',response);
        this.setState({
            matches:response.champion_videos,
            status:'received'
        })
        // this.state.champions = data.champions;
        // this.state.status='received';
        console.log('received',this.state);
    }


    render(){
        return (
            <div className="Champion">
                <Link to="champions">Back</Link>

                <h1>Champion</h1>
                <h2>{this.state.champion}</h2>
                <ul>
                    {this.state.matches.map((match, index) => (
                        <li key={index}>
                            <Link to={`/champions/${this.state.champion}/${match.vod_id}`}>{match.player_name} - {match.opponent_name} - {match.remote_recorded_at}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )    
    }
}

export default Champion;

