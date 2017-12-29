module.exports = {
	user:{
		username:'hrpc',
		password:'123456789',
		role:'admin',
	},
	port:3000,
	token:{
		secret:'myblog',
		key:'myblog',
		maxAge:60*60//token过期时间
	},
	mongodb:'mongodb://localhost:27017/myblog'
}
/*
	port: 程序启动要监听的端口号
	mongodb: mongodb 的地址，以 mongodb:// 协议开头，myblog 为 db 名
 */
