import Axios from 'axios';

const instance = Axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"    
});

export default instance;