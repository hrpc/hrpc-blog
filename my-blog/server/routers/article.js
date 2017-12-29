import {addArticle,findAll} from '../controllers/article'
const Router = require('koa-router')

let router = new Router();

//设置二级路径
router.post('/create',async (ctx) => {
	let result = {
		message:false,
		data:null
	}
	try{
		let doc = await addArticle(ctx.request.body)
		result.message = true
		result.data = '创建成功'
	}catch(e){
		ctx.throw(401,'服务器222错误')
	}
	ctx.body = result
})
router.get('/getAll',async (ctx) => {
	let result = {
		message:false,
		data:null
	}
	await findAll().then(res => {
		result.message = true
		result.data = res
	}).catch(err => {
		ctx.throw(401,'服务器错误')
	})
	ctx.body = result
})

module.exports = router
