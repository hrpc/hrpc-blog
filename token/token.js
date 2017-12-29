const jwt = require('jsonwebtoken')
const config = require('../config/default');

function createToken(user_id){
	const token = jwt.sign({
		user_id:user_id
	},config.token.secret,{
		expiresIn:config.token.maxAge//token过期时间
	})
	return token
}
async function verifyToken(ctx){
	const authorization = ctx.get('Authorization');
	if (authorization === '') {
		ctx.throw(401, 'no token detected in http header \'Authorization\'');
	}
	const token = authorization.split(' ')[1];
	let tokenContent;
	try{
		tokenContent = await jwt.verify(token, config.token.secret)
	}catch(err){
		ctx.throw(401, 'invalid token');
	}
	await next();
}
export{
	createToken,
	verifyToken
} 
