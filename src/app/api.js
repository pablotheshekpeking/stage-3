// api.js
import axios from 'axios';

const apiKey = '259375f90a3851d4993f308d06743823';

const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
  },
});

export default tmdbApi;
