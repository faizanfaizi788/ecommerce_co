import axios from 'axios';

const client = axios.create({
  baseURL: 'https://e-commerce-apis.up.railway.app/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
