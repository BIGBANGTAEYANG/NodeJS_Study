var connnect = require('connect');
var time = require('./request-time');
var morgan = require('morgan');

var app = connnect();

app.use(morgan('dev'));

/*使用自己重写的中间件*/
app.use(time({ time: 500 }));

app.use(function (req,res,next) {
	if('/a' == req.url){
		res.writeHead(200);
		res.end('a');
	}else{
		next();
	}
});

app.use(function (req,res,next) {
	if('/b' == req.url){
		setTimeout(function(){
			res.writeHead(200);
			res.end('b');
		},1000);
	}else{
		next();
	}
});

app.listen(8888);