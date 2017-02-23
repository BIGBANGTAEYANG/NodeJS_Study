学习NodeJS之路
=========
一,准备工作:
---------
######1.安装NodeJS----->[详细安装教程:](http://www.runoob.com/nodejs/nodejs-install-setup.html)
######2.安装GitBash----->[详细安装教程:](http://jingyan.baidu.com/article/90895e0fb3495f64ed6b0b50.html)
######3.安装MongoDB，以后会使用到.----->[windows系统下详细安装教程](http://www.runoob.com/mongodb/mongodb-window-install.html)
######4.验证node以及npm是否安装成功.
二,NodeJS之HelloWorld:
---------
######1.代码如下:
```javascript
var http = require('http')
var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('Hello World\n')
})
server.listen(6666,'127.0.0.1')
console.log('Server running at http://127.0.0.1:6666/')
```
