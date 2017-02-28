var url = require('url');
function route(request) {
	var pathname = url.parse(request.url).pathname;
	if (pathname=='/') {
		return 'Hello World';
	}else{
		return 'Other page';
	}
}

exports.route = route;