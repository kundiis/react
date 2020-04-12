import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';
import Spinner from './Spinner.js';

const GetLat = () => {
	const [latitude, setLat] = useState ({ lat: null, errorMsg : '' });

	useEffect(()=> {
		window.navigator.geolocation.getCurrentPosition(
			position => { 
				console.log(position);
				console.log('position found');
				setLat( { lat: position.coords.latitude } ); 
			},
			err => {
				console.log(err);
				console.log('position not found');
				setLat( { errorMsg: err.message } ); 
				}	
		);
	}, []);
	return latitude;
};

const App = () => {

	const latitude = GetLat();
	
	if( latitude.lat && !latitude.errorMsg ){
		return 	<SeasonDisplay lat={ latitude.lat } />;
	}
	if( !latitude.lat && latitude.errorMsg ){
		return 	( <div style = {{ backgroundColor: 'yellow' }}> Latitude: { latitude.errorMsg  } </div>);
	}
	return (
		<div>
			<Spinner />
		</div>	
		);

}

ReactDOM.render(<App/>, document.querySelector('#root'));