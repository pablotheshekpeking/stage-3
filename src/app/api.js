// api.js
import axios from 'axios';

const apiKey = 'e1C0H6D1KujiVMLXh5pgrASQYXtUfFDBmXsp0pNrV4SS38ud5z5buZfG'; // Replace with your Unsplash API key

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${apiKey}`,
  },
});

export default unsplashApi;
