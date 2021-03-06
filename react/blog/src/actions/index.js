import jsonPlaceHolder from '../api/jsonPlaceholder';

export const fetchPosts = () => {
    return async function(dispatch){
        const response = await jsonPlaceHolder.get('/posts');

        dispatch( {
            type: 'FETCH_POSTS',
            payload: response
        });    
    };
};