import React from 'react';
import Unsplash from '../apis/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{

	state = {images : []};

	onSearchSubmit = async (term) => {
		console.log("app --> " + term);
		const response = await Unsplash.get('/search/photos', {
			params : {
				query: term
			}
		});
		console.log(response.data.results);
		this.setState({ images: response.data.results });
	}

	render(){
		return (
			<div className="ui container" style = {{ margin: '10px' }}>
				<SearchBar onSubmitTerm = {this.onSearchSubmit}/> 
				<ImageList imageList = {this.state.images} />
			</div>
			);
	}

}

export default App;