import React from 'react';
import SearchBar from './SearchBar';
import VideoItemList from './VideoItemList';
import VideoDetail from './VideoDetail';
import Youtube from '../apis/youtube';

const KEY = "AIzaSyANJ3Gb9rkhqnN5LIsLQpDx24IVY7rZOi4";

class App extends React.Component{

	state = {videos : [], currentClickedVideo : null };

	onSearchSubmit = async (term) => {
		console.log("app --> " + term);

        const response = await Youtube.get("/search", {
			params: {
			  q: term,
			  part: "snippet",
			  maxResults: 5,
			  type: 'video',
			  key: KEY
			}
		  });
		  console.log(response);
		  this.setState({ videos: response.data.items, currentClickedVideo: response.data.items[0]});
	}

	onVideoClick = video => {
		console.log( video);
		this.setState({currentClickedVideo: video});

	}

	componentDidMount(){
		this.onSearchSubmit("Buildings");
	}

	render(){
		return (
			<div className="ui container" style = {{ margin: '10px' }}>
				<SearchBar onSubmitTermCallback = {this.onSearchSubmit}/> 
				<div className="ui grid">
					<div className="twelve wide column"> <VideoDetail video={this.state.currentClickedVideo} /> </div>
					<div className="four wide column"><VideoItemList onClickVideoCallBack={this.onVideoClick} videoList={this.state.videos} /></div>
				</div>
			</div>
			);
	}

}

export default App;