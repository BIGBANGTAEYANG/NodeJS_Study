var connect = require('connect');
var morgan = require('morgan');
var app = connect();

//定义一个morgan名称，后面自定义format格式
morgan.format('wq','[自定义日志] 请求方法: :method 请求地址: :url 状态码: :status 日期: :date 响应时间: :response-time ms');

//直接使用Morgan('刚才定义的名称')---这样就可以使用自定义的日志输出格式
app.use(morgan('wq'));

app.use(function (req,res) {
	res.end('Hello World');
}).listen(8888);
