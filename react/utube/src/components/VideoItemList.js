import React from 'react';
import VideoItem from './VideoItem';

const VideoItemList = props => {

    const videoList = props.videoList.map(video => {
        return <VideoItem key={video.id.videoId} video={video} clickCallBack={props.onClickVideoCallBack} />
    });

    return (
        <div className="video-list"> {videoList} </div>
    );

};

export default VideoItemList;