//引入http服务模块
var http = require('http')

//回调函数
var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('Hello World\n')
})

//添加监听
server.listen(1666,'127.0.0.1')

console.log('Server running at http://127.0.0.1:1666/')
