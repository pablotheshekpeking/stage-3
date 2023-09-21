// api.js
import axios from 'axios';
const apiKey = 'e1C0H6D1KujiVMLXh5pgrASQYXtUfFDBmXsp0pNrV4SS38ud5z5buZfG'; // Replace with your Pexels API key

const tmdbApi = axios.create({
  baseURL: 'https://api.pexels.com/v1',
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default tmdbApi;

