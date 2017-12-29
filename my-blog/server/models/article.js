const mongoose = require('../db/mongo');
const Schema = mongoose.Schema;
const articleSchema = new Schema({
	title:{
		type:String,
		required:[true,'title required']
	},
	body:String,
	pass:{//是否过审
		type:Boolean,
		default:true
	},
	comments:[//评论
		{
			body:String,
			date:Date,
			author:String
		}
	],
	tags:[{//标签
		type:Schema.Types.ObjectId,
		ref:'tag'
	}],
	createTime: {
	    type: Date
	},
})
//发布该框架生成model
module.exports = mongoose.model('article',articleSchema)
