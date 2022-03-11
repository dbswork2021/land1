const Router = require('koa-router');
const web = new Router();
const register = require('./register');
const login = require('./login');
const user = require('./user');
const home = require('./home');
const land = require('./land');

const auth = require('../../middleware/auth');

web.use('/land', land.routes());
web.use('/register', register.routes());
web.use('/login', login.routes());
web.use('/user', auth, user.routes());
web.use('/home', auth, home.routes());

module.exports = web;
