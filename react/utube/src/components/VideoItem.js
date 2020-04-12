import React from 'react';

class VideoItem extends React.Component {

    imageClick = event => {
        event.preventDefault();
        this.props.clickCallBack(this.props.video);
    };

    render(){
        const title = this.props.video.snippet.title;
        const image = this.props.video.snippet.thumbnails.default.url;
        const description = this.props.video.snippet.description;

        return(
            <div className="ui card">
                <div className="image" onClick={this.imageClick} >
                    <img src={image}/>
                </div>
                <div className="content">
                    <a className="header">{title}</a>
                </div>
             </div>
        );
    }
}

export default VideoItem;