import http from './http';

export const LoginApi = (model) => http.post('/login', model);

export const RegisterApi = (model) => http.post('/register', model);

export const UserApi = () => http.get('/user');

export const UserEditApi = (model) => http.put('/user', model);

export const LandApi = () => http.get('/land')

export const HomeApi = () => http.get('/home')

export const HomeEditApi = (model) => http.post('/home', model)
