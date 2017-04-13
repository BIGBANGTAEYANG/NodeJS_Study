NodeJS中间件之Connect
==================
一、Connect介绍:<br>
1.Connect是一个node中间件（middleware）框架。如果把一个http处理过程比作是污水处理，中间件就像是一层层的过滤网。每个中间件在http处理过程中通过改写request或（和）response的数据、状态，实现了特定的功能。这些功能非常广泛，下图列出了connect所有内置中间件和部分第三方中间件。 这里能看到完整的中间件列表[链接](https://github.com/senchalabs/connect/wiki)。<br>

二、Connect安装:<br>
1.在项目中的package.json添加依赖，然后使用npm install运行
```javascript
{
	.....
	"denpendencies"：{
		"connect":"1.8.7"
	}
}
```<br>
2.使用npm全局安装Connect;<br>


