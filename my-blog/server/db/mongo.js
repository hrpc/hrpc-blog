const config = require('../config/default');
var mongoose = require('mongoose');//引用mongoose模块
mongoose.connect(config.mongodb,{ useMongoClient: true });//连接数据库
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error',console.log.bind(console,'connection error:'));
db.once('open',function(){
	console.log('连接正常')
})

module.exports = mongoose;
