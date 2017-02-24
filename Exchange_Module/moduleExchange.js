//exports是modul的一个引用，两个都存在的时候，module.exports会覆盖exports
// exports.begin = function(){
// 	console.log('转换开始');
// };


//这样写，是构造函数，调用直接new里面传入参数
// module.exports = function Contruct(PreMoney,rate){
// 		LatMoneytwo  = PreMoney*rate;
// 		console.log('转换前：'+PreMoney+' 转换后：'+LatMoneytwo+' 汇率是：'+rate);
// };

//这样写是构造函数里面公开函数，可以new ，然后使用里面的成员函数
var rate = 0.146;
module.exports = function exchange(){
		this.begin = function(PreMoney){
					LatMoneytwo  = PreMoney*rate;
					console.log('人民币：'+PreMoney+' 转===>美元：'+LatMoneytwo+' 汇率是：'+rate);
				}
};

console.log(exports);
console.log(module.exports);
console.log(exports===module.exports);
