// api.js
import axios from 'axios';

const apiKey = 'UmOk422CxVn4op9o3d-d20CBEwzA4WjDPipX6W-lo2A'; // Replace with your Unsplash API key

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${apiKey}`,
  },
});

export default unsplashApi;
