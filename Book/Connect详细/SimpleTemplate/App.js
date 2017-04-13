var connect = require('connect');
var http = require('http');
var app = connect();

app.use(function (req,res) {
	res.end('New CreateServer Hello World');
});

http.createServer(app).listen(8888);