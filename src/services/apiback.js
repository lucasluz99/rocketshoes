import axios from 'axios';

const apiback = axios.create({
  baseURL: 'http://localhost:3335',
});

export default apiback;
