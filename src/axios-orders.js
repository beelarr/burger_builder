import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burgerbuilder-beelarr.firebaseio.com/"
});


export default instance;
