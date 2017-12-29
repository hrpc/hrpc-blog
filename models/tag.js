const mongoose = require('../db/mongo');
const Schema = mongoose.Schema;
const tagSchema = new Schema({
	name:String,
	default:''
})
//发布该框架生成model
module.exports = mongoose.model('tag',tagSchema)
