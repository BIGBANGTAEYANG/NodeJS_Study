module.exports = function(options){

	var time  = options.time || 100;

	//当调用这个方法的时候，时间参数传入的时间完了过后才会回调setTimeout函数，才会打印消息
	return function (req,res,next){
		var timer = setTimeout(function(){
			console.log(req.method,req.url,'is to long')+'\n';
		},time);

		//完成之后清理回调函数,避免没有超时的请求也输出超时信息
		var end  = res.end;
		res.end = function(chunk,encoding){
			res.end = end;
			res.end(chunk,encoding);
			clearTimeout(timer);
		};

		next();
	};
};