//koa入口文件
import Koa from 'koa'
import cors from 'koa2-cors'
import json from 'koa-json' //美观的输出JSON response的Koa中间件
import logger from 'koa-logger' //程序就会在控制台自动打印日志
import bodyParser from 'koa-bodyparser' //对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中
import router from './routers/main.js'
import Router from 'koa-router'
const app = new Koa()


app.use(cors({
	origin:function(ctx){
		if(ctx.url === '/test'){
			return false
		}
		return 'http://localhost:8080'
	},
	exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
app.use(bodyParser())
app.use(json())
app.use(logger())


//加载路由中间件
app.use(router.routes()).use(router.allowedMethods())//将路由挂载到koa上
app.listen(3000,() => {
	console.log('start at port 3000')
})

module.exports = app