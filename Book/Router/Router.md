NodeJS之Router
=========
一,创建一个基本的web服务
######1.mainServer代码如下
```javascript
var http = require('http');
var router = require('./router');

function mainServer(){
		http.createServer(function(request,response){
		var writeContent = router.route(request);
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write(writeContent);
		response.end();

	}).listen(8888);
	console.log('Server running at http://127.0.0.1:8888/');
}

exports.mainServer = mainServer;
```
######2.路由Router代码如下：
```javascript
var url = require('url');
function route(request) {
	var pathname = url.parse(request.url).pathname;
	if (pathname=='/') {
		return 'Hello World';
	}else{
		return 'Other page';
	}
}

exports.route = route;
```
######3.代码讲解:
######在mainServer中调用Router，将request请求使用Router.route拦截，拦截到请求，将request请求的路径使用url模块解析出来，使用一个if判断，根据不同的请求路径，返回不同的响应内容，将路由返回的字符串写到响应中，这样通过客户端请求是localhost:8888/的时候，页面内容是HelloWorld，其他的请求的时候，返回内容是Other page,这样就实现了路由的功能。