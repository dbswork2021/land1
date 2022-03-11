const Router = require('koa-router')
const home = new Router()
const schema = require('../../model/web/land')

home.get('/', async (ctx) => {
	const data = await schema.findOne()
	ctx.body = data
})

home.post('/', async (ctx) => {
	const {_id, whatsapp, email} = ctx.request.body
	let data = {}
	if(_id){
		data = await schema.findByIdAndUpdate(_id, {email,whatsapp},{new: true})
	}else{
		data = await schema.create({email, whatsapp})
	}
	ctx.body = {
		data,
		message: "保存成功!"
	}
})

module.exports = home;

