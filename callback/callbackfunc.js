exports.print = function (argument) {
	function outprint(argument){
		console.log(argument);
	}
	outprint(argument);
};

//不使用嵌套
// exports.print = function(arg){
// 	outprint(arg);
// };
// var outprint = function (arg) {
// 	console.log(arg);
// };