export default function Ajax(obj){
	this.method = obj.method;
	this.url = obj.url;
	this.callback = obj.callback;
	this.data = obj.data;
}
Ajax.prototype.send = function(){
	let method = this.method;
	let url = this.url;
	let callback = this.callback;
	let data = this.data;
	let xhr
	
	//ie7及以上
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject('Microsoft.XMLHTTP')
	}
	//xhr监听readyStateChange事件
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
				//成功拿到响应数据
				callback(xhr.responseText)
			}
		}
	}
	if(method === 'get'){
		//假设url已经被拼接起来了
		//使用xhr的第一步
		//第一个参数是要发送的请求类型
		//第二个参数是要请求的URL
		//第三个参数是否要开启异步请求
		xhr.open(method,url,true)
		xhr.send(null)
	}else if(method === 'post'){
		xhr.open(method,url,true)
		
	}
}