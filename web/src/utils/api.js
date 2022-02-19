import http from './http';

export const LoginApi = (model) => http.post('/login', model);

export const RegisterApi = (model) => http.post('/register', model);
