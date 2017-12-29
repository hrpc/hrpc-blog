const mongoose = require('../db/mongo');//引用mongoose模块
const Schema = mongoose.Schema;
const userSchema = new Schema({
	username:String,
	password:String,
	role:String,
	createTime:Date,
	lastLogin:Date,
	token:{
		type:String,
		default:null
	}
}) 
/**
 * 发布框架生成userModel模型,model第一个参数为model名称
 */
const userModel = mongoose.model('user',userSchema);
module.exports =  userModel;
