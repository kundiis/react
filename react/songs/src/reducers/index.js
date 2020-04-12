import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'Back street boys', duration: '2:00'},
        {title: 'Cold Play', duration: '3:00'},
        {title: 'Black eyed pea', duration: '2:30'}
    ];
};

const selectedSongReducer = (selectedSong =null, action) => {
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

const reducers = combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

export default reducers;