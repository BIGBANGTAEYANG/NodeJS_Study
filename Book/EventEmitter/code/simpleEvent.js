//引入events模块
var simpleEvent  = require('events');
//实例化eventEmitter对象
var simpleevent = new simpleEvent.EventEmitter();
//为事件添加监听
simpleevent.on('outprint',function(arg){
	console.log('事件监听被触发，打印:'+arg);
});
//发射事件
setTimeout(function(){
	simpleevent.emit('outprint','这是发射器中发送的参数');
},3000);