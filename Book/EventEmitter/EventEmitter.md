NodeJS之EventEmitter
=========
一,简单EventEmitter事件发射器例子:

1.代码如下:
```javascript
var simpleEvent  = require('events');
var simpleevent = new simpleEvent.EventEmitter();
simpleevent.on('outprint',function(arg){
	console.log('事件监听被触发，打印:'+arg);
});
setTimeout(function(){
	simpleevent.emit('outprint','这是发射器中发送的参数');
},3000);
```
2.对上面的例子讲解:<br>
实例化出来的事件对象需要添加一个事件监听,使用.on('XX',function(){})为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。后面使用一个定时器，使用事件发射,使用.emit('XX',[arg1], [arg2], [..])发射事件，因为为事件添加了监听，所以使用事件发射，就会被监听到，就会执行回调函数。<br>
3.EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件。我们来具体看下 EventEmitter 的属性介绍。<br>
【1】addListener(event, listener)为指定事件添加一个监听器到监听器数组的尾部。<br>
【2】	on(event, listener)为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。 <br>
【3】once(event, listener)为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。 <br>
【4】	removeListener(event, listener)移除指定事件的某个监听器，监听器 必须是该事件已经注册过的监听器。 <br>
【5】removeAllListeners([event])移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。<br>
【6】setMaxListeners(n)默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。<br>
【7】listeners(event)返回指定事件的监听器数组。<br>
【8】	emit(event, [arg1], [arg2], [...])按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。<br>
二,稍微复杂的EventEmitter事件发射器例子：<br>

1.代码如下:
```javascript
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
```
这里将前面讲的模块结合起来，使用exports将监听公开，下面是test代码:
```javascript
var out = require('./complexEventEmitter');
out.outprint('这是test中传入的参数');
```
2.讲解代码:<br>
【1】这里使用前面讲的exports，将监听对外公开，可以借鉴前面的讲解一起看。<br>
【2】这里代码中使用了一个计算监听数目的方法，是一个类方法，为listenerCount(emitter, event)<br>
返回指定事件的监听器数量。<br>
【3】上面可以看出同一事件可以添加多个监听。<br>
三,EventEmitter的Error事件<br>

1.EventEmitter 定义了一个特殊的事件error，它包含了错误的语义，我们在遇到 异常的时候通常会触发error事件。当error 被触发时，EventEmitter规定如果没有响应的监听器，Node.js会把它当作异常，退出程序并输出错误信息。<br>
2.所以一般为触发error事件的对象设置监听器，避免遇到错误后所有程序崩溃,代码如下:<br>
```javascript
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.emit('error'); 
```
四,继承 EventEmitter

1.一般我们不直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。<br>
2.实现功能的对象实现事件符合语义，事件的监听和发射应该是一个对象的方法。<br>
3.JavaScript的对象机制基于原型，支持部分多重继承，继承EvenEmitter不会打乱对象原有继承关系。<br>


