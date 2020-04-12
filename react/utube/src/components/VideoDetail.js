import React from 'react';

class VideoDetail extends React.Component {

    render(){
        if(!this.props.video){
            return <div>click on the search</div>;
        }
        const videoURL = `https://www.youtube.com/embed/${this.props.video.id.videoId}`

        return(
            <div className="ui embed">
                <iframe title="video player" src = {videoURL} />
            </div> 
        );
    }
}

export default VideoDetail;