// naming is like that
// Action Creator

// named export
export const selectSong = song => {

    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};