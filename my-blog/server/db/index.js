var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob'; // 数据库为 runoob

//插入数据
var insertData = function(db,callback){
	//连接到表site
	var collection = db.collection('site');
	//插入数据
	var data = [
		{
			'name':'haorun',
			'url':'www.haorun.com'
		},
		{
			'name':'mongodb',
			'url':'www.mongodb.com'
		}
	]
	collection.insert(data,function(err,result){
		if(err){
			console.log("Erroe:" + err)
			return;
		}
		callback(result)
	})
}
//查询数据
var selectData = function(db,callback){
	//连接到表site
	var collection = db.collection('site')
	//查询数据
	var whereStr = {'name':'haorun'}
	collection.find(whereStr).toArray(function(err,result){
		if(err){
			console.log("Erroe:" + err)
			return;
		}
		callback(result)
	})
}
//更新
var updateData = function(db, callback) {  
    //连接到表  
    var collection = db.collection('site');
    //更新数据
    var whereStr = {"name":'haorun'};
    var updateStr = {$set: { "url" : "https://www.豪润.com" }};
    collection.update(whereStr,updateStr, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}
var delData = function(db, callback) {  
  //连接到表  
  var collection = db.collection('site');
  //删除数据
  var whereStr = {"name":'haorun'};
  collection.remove(whereStr, function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    updateData(db, function(result) {
        db.close();
    });
});