var rate = 0.146;
exports.exchange = function (PreMoney) {
	LatMoney = PreMoney*rate;
	console.log('人民币：'+PreMoney+' 转===>美元：'+LatMoney+' 汇率是：'+rate);
};

console.log(exports);
console.log(module.exports);
console.log(exports===module.exports);
