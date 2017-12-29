export default async (type = 'GET',url = '',data = {}) => {
	type = type.toUpperCase();
	
	if (type == 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}
	if(window.fetch){
		//支持fetch
		let requestConfig = {
			method:type,
			mode:'cors',
			cache: "force-cache",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		}
		if(type == 'POST'){
			let requestConfig = Object.assign({},requestConfig,{
				body:JSON.stringify(data)
			})
		}
		try{
			let response = await fetch(url,requestConfig)
			let responseJson = await response.json()
			return responseJson
		}catch(e){
			//TODO handle the exception
			throw new Error(e)
		}
	}else{
		//不支持fetch
		let requestObj = null,sendData = null;
		if(window.XMLHttpRequest){
			requestObj = new XMLHttpRequest()
		}else{
			requestObj = new ActiveXObject
		}
		if(type == 'POST'){
			sendData = JSON.stringify(data)
		}
		requestObj.onreadystatechange = function(){
			if(requestObj.readyState === 4){
				if(requestObj.state === 200){
					let obj = requestObj.response
					if (typeof obj !== 'object') {
						obj = JSON.parse(obj);
					}
					return obj
				}else{
					throw new Error(requestObj)
				}
			}
		}
		requestObj.open(type,url,true);
		requestObj.setRequestHeader("Content-type", "application/json")
		requestObj.send(sendData)
	}
}
