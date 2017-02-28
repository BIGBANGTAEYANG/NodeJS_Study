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
