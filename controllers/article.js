const Article = require('../models/article')

const addArticle = async function(articleObj){
	return  Article.create(articleObj)
}
const findAll = async function(cb){
	return await Article.find({})
}
export {
	addArticle,
	findAll
}
