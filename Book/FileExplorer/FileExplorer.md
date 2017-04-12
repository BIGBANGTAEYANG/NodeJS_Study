简单NodeJs应用
===========
一、使用NodeJS内置模块fs，使用repl执行"console.log(require('fs').readdirSync(dirname))"命令查看，其中的dirname自己指定，这个命令是同步的读取文件命令，还有异步的;
二、创建一个index.js文件;
```javascript
var fs = require('fs');
fs.readdir('./',function(err,files){
	console.log(files);
});
```
可以看到执行index.js文件的结果是:<br>
[ 'FileExplorer.md', 'index.js', 'node_modules', 'package.json' ];<br>

三、理解什么是流(Stream)<br>
1.由于后面使用到了nodejs对文件的读写操作，所以需要了解stream，[讲解详细链接](http://www.runoob.com/nodejs/nodejs-stream.html);<br>
2.理解stdin,stdout,stderr;<br>

四、代码详细见Index.js[代码](https://github.com/BIGBANGTAEYANG/NodeJS_Study/blob/master/Book/FileExplorer/index.js);
