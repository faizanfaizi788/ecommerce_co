import axios from 'axios';

// Create an instance of Axios
const client = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token in headers
client.interceptors.request.use(
  (config) => {
    // Get the token from localStorage (or cookies)
    const token = localStorage.getItem('token');
    
    // If a token exists, attach it to the headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
