import {checkLogin} from '../controllers/user.js';
const auth = require('../controllers/user.js')
const User = require("../models/user")
const Router = require('koa-router');
import {createToken,verifyToken} from '../token/token'
const config = require('../config/default');
let router = new Router();

router.post('/login',async (ctx) => {
	let result = {
		message:false,
		data:null
	}
	let username = ctx.request.body.username
	let password = ctx.request.body.password
	let loginResult = await checkLogin(username)
	if(!loginResult){
		ctx.throw(401,"用户名或者密码错误")
	}else if(loginResult.password === password){
		//生成token
		let token = createToken(username)
		await User.update({username:username},{$set:{token:token}}).exec().catch(function(err){
			console.error(err)
			return err
		})
		result.message = true;
		result.data = token;
		ctx.body = result
	}
})
router.post('/register',async (ctx) => {
	let result = {
		message:false,
		data:null
	}
	let addInfo
	//验证用户名是否重复
	await auth.findUserByName(ctx.request.body.username,function(err,obj){
		if(err){
			return console.error(err)
		}
		addInfo = obj
	})
	//用户不重复
	if(addInfo.length === 0){
		await auth.addOneUser(ctx.request.body,function(err,obj){
			if(err){
				return console.error(err)
			}
			result.message = true
			result.data = obj
		})
	}else{
		//用户名已存在
		result.message = false
		result.data = '用户名已存在'
	}
	ctx.body = result
})
router.post('/testAdd',verifyToken,async (ctx) => {
	let user = {
		username:'张三',
		password:config.user.password,
		role:'user',
		createTime:new Date()
	}
	await User.create(user,function(err,newUser){
		if(err){
			return handleError(err)
		}
		//添加用户成功
		callback(err,'注册成功')
	})
})
module.exports =  router;
