// api.js
import axios from 'axios';

const apiKey = 'e1C0H6D1KujiVMLXh5pgrASQYXtUfFDBmXsp0pNrV4SS38ud5z5buZfG'; // Replace with your Pexels API key

const pexelsApi = axios.create({
  baseURL: 'https://api.pexels.com',
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default pexelsApi;

