var cacheName = 'localCache';
self.addEventListener('install',function(event){
	event.waitUntil(
		caches.open(cacheName)
		.then(cache => {
			cache.addAll([
				'./src/api/api.js',
				'./src/components/images/img1.jpg',
				'./src/components/images/img2.jpg',
				'./index.html',
				'./src/main.js'
			])
		})
	)
})
self.addEventListener('fetch',function(event){
	event.respondWith(
		caches.match(event.request)
		.then(function(res){
			//如果匹配到缓存中存在该资源
			if(res){
				return res
			}
			/* 没有匹配到资源则按原计划发起网络请求
			 * 第一步是克隆请求，因为请求是一个流，只能消耗一次。
			 * 因为已经通过缓存消耗了一次，然后发起Http请求还要消耗一次,所以需要克隆请求
			 */
			
			var requestToCache = event.request.clone();//克隆请求
			return fetch(requestToCache).then(
				function(response){
					if(!response || response.status !== 200){//检查是否为成功响应，如果不是成功响应，则直接返回该响应
						return response;
					}
					//如果是成功响应，就需要将响应结果缓存起来
					var responseToCache = response.clone();//克隆响应，因为我们想要浏览器和缓存都消耗响应，就需要克隆响应，这样就有了两个流
					caches.open(cacheName)
					.then(cache => {
						cache.put(requestToCache,responseToCache);
					});
					return response
				}
			)
		}).catch(e => {
			console.log(e)
		})
	)	
})