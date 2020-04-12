import Axios from 'axios';

const instance = Axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID Bwsmxwe5YuBO986cImLlLSsmf-liz28OY6EvE-3lETU'
    }
    
});

export default instance;