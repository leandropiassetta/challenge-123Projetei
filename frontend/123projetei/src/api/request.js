import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://localhost:3308',
  headers: { 'content-type': 'application/json' },
});

export default axiosApi;
