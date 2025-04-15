// client/src/axios.js

import axios from 'axios';

// ✅ Connect to backend API running on localhost:8000
const instance = axios.create({
  baseURL: 'http://localhost:8000/api', // Make sure this is correct as per your backend routes
  timeout: 10000, // Optional: timeout for requests
  withCredentials: true, // Optional: if using cookies/auth sessions
});

export default instance;
