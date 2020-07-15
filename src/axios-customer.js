import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-test-36ce4.firebaseio.com/'
});

export default instance;