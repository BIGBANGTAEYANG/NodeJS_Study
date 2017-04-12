var http = require('http');
var qs = require('querystring');

var server = http.createServer(function(req,res){

if ('/'==req.url) {

	res.writeHead(200,{'Content-Type':'text/html','charset':'utf-8'});
	res.end([
		'<form method="POST" action="/url">',
		'<h1>user form</h1>',
		'<filedset>',
		'<label>user information</label>',
		'<p>Your name</p>',
		'<input type="text" name="username"/>',
		'<p><button>Submit</button></p>',
		'</filedset>',
		'</form>'
		].join(''));

}else if('/url'==req.url&&'POST'==req.method){
	var body = '';
	req.on('data',function(chunk){
		body+=chunk;
	});

	req.on('end',function(){
			res.writeHead(200,{'Content-Type':'text/html','charset':'utf-8'});
			res.end('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><title>Document</title></head><body><p>'+qs.parse(body).username+'</pre></body></html>');
	});
}else{
	res.writeHead(404);
	res.end('Not found');
}

});

server.listen(8888);