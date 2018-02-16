import axios from 'axios';
import config from '../config/api-settings';
import storage from './storage';

const httpNoAuthenticated = axios.create({
  baseURL: `${config.API[config.ENVIROMENT]}/`,
  headers: {
    'Content-Type': 'application/json'
  }
});

const http = axios.create({
  baseURL: `${config.API[config.ENVIROMENT]}/`,
  headers: {
    'Content-Type': 'application/json'
  }
});

http.interceptors.request.use(requestConfig => {
  requestConfig.headers.Authorization = `Bearer ${storage.getToken()}`;
  return Promise.resolve(requestConfig);
});

export { http, httpNoAuthenticated };
