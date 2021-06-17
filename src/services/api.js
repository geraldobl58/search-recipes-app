import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.edamam.com'
});

export default api;