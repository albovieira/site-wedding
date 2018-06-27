import axios from 'axios';
import config from '../config/settings';

const http = axios.create({
  baseURL: `${config.weddingAPI.url}/`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

export { http };
