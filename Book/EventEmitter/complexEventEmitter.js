var events = require('events');
var eventEmitter = new events.EventEmitter();


eventEmitter.on('print',function(arg){
	console.log('print的第1个监听,参数是:'+arg);
});

exports.outprint = function (arg){
	console.log('开始发射事件');
	eventEmitter.emit('print',arg);
	var eventCount = require('events').EventEmitter.listenerCount(eventEmitter,'print');
	console.log('现在的监听数是:'+eventCount);


	console.log('再给prin事件添加一个监听');
	eventEmitter.on('print',function(arg){
		console.log('print的第2个监听');
	});
	var eventCount = require('events').EventEmitter.listenerCount(eventEmitter,'print');
	console.log('现在的监听数是:'+eventCount);
	eventEmitter.emit('print',arg);

}