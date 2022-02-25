const Router = require('koa-router');
const user = new Router();
const schema = require('../../model/web/user');

user.get('/', (ctx, next) => {
  ctx.body = { ...ctx.state.user };
});

user.put('/', async (ctx) => {
  const { id } = ctx.state.user;
  await schema.findByIdAndUpdate(id, ctx.request.body);
  ctx.body = { message: '修改成功' };
});

module.exports = user;
