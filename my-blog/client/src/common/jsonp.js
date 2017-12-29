export default function jsonp(src,cbName){
	let script = document.createElement('script');
	script.setAttribute('type','text/javascript');
	script.src = src + '&callback=' + cbName
	document.body.appendChild(script)
}
