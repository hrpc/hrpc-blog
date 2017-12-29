/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * regOpen: 是否开放注册
 * 
 */
let baseUrl; 
let routerMode;
let authUrl;
const imgBaseUrl = 'https://fuss10.elemecdn.com';
let appid;
let regOpen;
if (process.env.NODE_ENV == 'development') {
	appid ='wxa9b4e660c373cf41';
} else if (process.env.NODE_ENV == 'testing') {
	appid ='wxa9b4e660c373cf41';
} else {
	appid ='wxa9b4e660c373cf41';
}
if (process.env.NODE_ENV == 'development') {
	baseUrl = 'http://127.0.0.1:3000';
	routerMode = 'hash'
	authUrl = 'http://127.0.0.1:3000';
	regOpen = true;
} else {
	baseUrl = '/tour'
	routerMode = 'hash'
	authUrl = 'http://www.hx-trip.cn/tour/static/tour.html';
	regOpen = true;
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
	appid,
	authUrl,
	regOpen
}
