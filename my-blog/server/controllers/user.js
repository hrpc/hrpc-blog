const User = require("../models/user")
var that = this
const findUserByName = async function(name,callback){
	await User.find({username:name},function(err,obj){
		if(err){
			return handleError(err)
		}
		callback(err,obj)
	})
}
//登录
const checkLogin = async function(username){
	let result = await User.findOne({username:username})
				.exec()
				.catch(err => {
					throw err
				})
	return result			
}
//创建新用户
const addOneUser = async function(resisterInfo,callback){
	await User.create(resisterInfo,function(err,newUser){
		if(err){
			return handleError(err)
		}
		//添加用户成功
		callback(err,'注册成功')
	})
}
export {
	findUserByName,
	checkLogin,
	addOneUser
}
