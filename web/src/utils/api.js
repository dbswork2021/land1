import http from './http';

export const LoginApi = (model) => http.post('/login', model);

export const RegisterApi = (model) => http.post('/register', model);

export const UserApi = () => http.get('/user');

export const UserEditApi = (model) => http.put('/user', model);
