学习NodeJS之路
=========
一,准备工作:
---------
######1.安装NodeJS----->[详细安装教程:](http://www.runoob.com/nodejs/nodejs-install-setup.html)
######2.安装GitBash----->[详细安装教程:](http://jingyan.baidu.com/article/90895e0fb3495f64ed6b0b50.html)
######3.安装MongoDB，以后会使用到.----->[windows系统下详细安装教程](http://www.runoob.com/mongodb/mongodb-window-install.html)
######4.验证node以及npm是否安装成功。
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
######通过node运行,我们就可以同过浏览器访问127.0.0.1:6666,页面就可以显示Hello World了，一个简单的node的Web应用就实现了。
######上面的HelloWorld代码在Git中使用了NodeJS的http模块，使用了require，也用了回调，先熟悉一下这几个，为后面学习打基础，今天先到这里:stuck_out_tongue_closed_eyes::stuck_out_tongue_closed_eyes:
三,NodeJS模块系统:
--------------
######1.为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。
######【1】创建模块:创建文件目录，创建一个子文件夹，在文件夹中创建js文件，名为hello.js,代码如下:
```javascript
exports.world = function() {
  console.log('Hello World');
}
```
######【2】再创建一个调用我们创建的模块的文件main.js,若放在同一级目录,则require中路径写'./',若不在同一级目录下,则写绝对路径,代码如下:
```javascript
var hello = require('./hello');
hello.world();
```
######【3】使用gitbash切换目录到刚才创建的文件夹下,找到main.js,使用nodejs运行main.js,命令:node main.js。
######【4】我们可以在gitbash中看到Hello World。这就是一个简单的模块。
######【5】在以上代码中,hello.js中的exports.world就是通过 exports 对象把 world 作为模块的访问接口，所以在 main.js 中通过 require('./hello') 加载这个模块，然后就可以直接访 问 hello.js 中 exports 对象的成员函数了。
######2.在回到前面第一个列子,也使用了模块,使用的是node内置的http模块,代码如下:
```javascript
var http = require('http')
```
######3.在nodejs中除了exports.[function]可以把模块对外公开,还有一种方法也可以,即为module.exports,将上面的exports代码改一下。
######【1】更改hello.js,代码如下:
```javascript
module.exports = function(){
	console.log('Hello World');
};
```
######【2】这个公开方法,调用的时候方法也要改变,代码如下:
```javascript
var hello = require('./hello');
var Hello = new hello();
```
######【3】运行main.js,可以看见控制台输出HelloWorld。
四,exports与module.exports的区别讲解:
-----------------
######1.exports和module.exports都可以对外提供接口，从前面的示例以及下面的代码可以看出，区别在创建的模块中，代码书写的方法不同，以及调用模块时，module.exports需要实例化，才可以使用，代码如下:
```javascript
var hello = require('./hello');
hello.world();
```
```javascript
var hello = require('./hello');
var Hello = new hello();
```
######2.这里取一个人民币转美元的例子详细说明两者区别，代码如下:
######【1】exports代码:
```javascript
var rate = 0.146;
exports.exchange = function (PreMoney) {
	LatMoney = PreMoney*rate;
	console.log('人民币：'+PreMoney+' 转===>美元：'+LatMoney+' 汇率是：'+rate);
};

console.log(exports);
console.log(module.exports);
console.log(exports===module.exports);
```
######测试exports的testExports的代码:
```javascript
var change = require('./exportsExchange');
change.exchange(100);
```
######这里写了用控制台打印了exports和module.exports分别是什么以及两个是否一样；
######代码【1】的执行结果如下:`{}``[Function: exchange]``false``人民币：100 转===>美元：14.6 汇率是：0.146`
######第一个打印为空，说明exports中为空，第二个打印为Function：exchange,说明module.exports中的是对外公开的方法，所以后面有个false，两者不一致
######【2】module.exports代码：
```javascript
var rate = 0.146;
module.exports = function exchange(){
		this.begin = function(PreMoney){
					LatMoneytwo  = PreMoney*rate;
					console.log('人民币：'+PreMoney+' 转===>美元：'+LatMoneytwo+' 汇率是：'+rate);
				}
};

console.log(exports);
console.log(module.exports);
console.log(exports===module.exports);
```
######测试代码:
```javascript
var change = require('./moduleExchange');
var exchange = new change();
exchange.begin(100);
```
######代码【2】的执行结果如下:`{ exchange: [Function] }``{ exchange: [Function] }``true``人民币：100 转===>美元：14.6 汇率是：0.146`
######第一个与第二个打印都为exchange: [Function],说明exports和module.exports中都是对外公开的方法，后面是true，两者一致。
#####所以这里可以知道,exports是module.exports的一个引用,对外公开的总是module.exports,就算直接指定给exports，流程也是exports===>module.exports===>对外，所以直接指定module.exports,那exports中就为空。
