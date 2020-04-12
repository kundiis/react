import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';
import Spinner from './Spinner.js';

class App extends React.Component{

	// JS constructor
/*	constructor(props){
		console.log('constructor');
		super(props);
		this.state = { lat: null, errorMsg : '' };

	}*/

	state = { lat: null, errorMsg : '' };

	componentDidMount(){
		console.log('Component did mount');
		console.log('making geo call');
		window.navigator.geolocation.getCurrentPosition(
			position => { 
				console.log(position);
				console.log('position found');
				this.setState( { lat: position.coords.latitude } ); 
			},
			err => {
				console.log(err);
				console.log('position not found');
				this.setState( { errorMsg: err.message } ); 
				}	
		);
	}

	componentDidUpdate(){
		console.log('Component did update');
	}

	// react object - must present
	render(){	
		console.log('render');

		if( this.state.lat && !this.state.errorMsg ){
				return 	<SeasonDisplay lat={ this.state.lat } />;
		}
		if( !this.state.lat && this.state.errorMsg ){
				return 	( <div style = {{ backgroundColor: 'yellow' }}> Latitude: {this.state.errorMsg } </div>);
		}
		return (
			<div>
				<Spinner />
			</div>	
			);

	}
}

ReactDOM.render(<App/>, document.querySelector('#root'));