import React from 'react';
import { connect } from 'react-redux';
import { selectSong  } from '../actions/index';

class SongList extends React.Component{

    render(){
        console.log(this.props);
        // call the action like this.props.selectSongAction(song)
        return <div> SongList </div>;
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs};
}

export default connect(mapStateToProps, {
    selectSongAction: selectSong
})(SongList);