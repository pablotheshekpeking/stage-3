// api.js
import axios from 'axios';

const apiKey = '6rgrQws5g38YYhiB5AXFhhSXKCaUM-N_sl-T7Mpt2_4'; // Replace with your Unsplash API key

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${apiKey}`,
  },
});

export default unsplashApi;
