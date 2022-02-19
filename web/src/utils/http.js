import axios from 'axios';
import { message } from 'antd';

const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER_PORT,
});

http.interceptors.request.use(
  (config) => {
    if (localStorage.token) {
      config.headers.Authorization = 'Bearer ' + localStorage.token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status === 401) {
      localStorage.removeItem('token');
      if (window.location.hash.indexOf('register')) {
        window.location.hash = '/login';
      }
    }
    if (err.response.data) {
      message.error(err.response.data);
      return Promise.reject(err);
    }
    return Promise.reject(err);
  }
);

export default http;
