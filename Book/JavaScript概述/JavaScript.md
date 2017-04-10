JavaScript基础
=========
一、类型:
	JavaScript类型可以简单的分为两组:基本类型和复杂类型，访问基本类型，访问的是值，而访问复杂类型，访问的是对值的引用。<br>
	* 基本类型包括:number,boolean,string,null以及undefined<br>
	* 复杂类型包括:array,function以及object<br>

举例一个复杂类型:
```javascript
 var a = ['hello','world'];
 var b = a;
 b[0] = 'bye';
 a[0];
 b[0];
 ```
结果都是:“bye"<br>

二、JavaScript中的类型困惑<br>
 要在JavaScript中准确无误地判断变量值的类型并非易事。<br>
 举例:
```javascript
 var a = 'woot';
 var b  = new String('woot');
 a+b;
```
 对上面两个变量使用typeof和Instanceof操作符;
```javascript
 typeof a; //'String'
 typeof b; //'object'
 a instanceof String; //'false'
 b instanceof String; //'true'
```
事实上，这两个变量值绝对都是字符串:
```javascript
a.substr == b.substr; //true
```
并且使用==操作符判定时两者相等，而使用===操作符判定时并不相同:
```javascript
a==b;//true
a===b;//false
```
在表达式汇中，一些特定的值会被判定为false:null,undifined,'',还有0;

三、函数
在JavaScript中，函数最为重要，它们都是一等函数，可以作为引用储存在变量中，随后可以像其他对象一样，进行传递:
```javascript
var a = function(){}
console.log(a);
```
JavaScript中所有函数都可以进行命名，且能区分出函数名和变量名。
```javascript
var a  = function a(){
	'function' == typeof a;
}
```
THIS、FUNCTION#CALL以及FUNCTION#APPLY<br>
下面代码中函数被调用时，this的值是全局对象，在浏览器中，就是window对象:
```javascript
function a(){
	window == this;
}
a();
```
调用以下函数，使用.call和.apply方法可以改变this的值:
```javascript
function a(){
	this.a=='b';
}
a.call({a:'b'});
```
call和apply的区别就在于call接受参数列表，而apply接受一个参数数组:
```javascript
function a(b,c){
	b =='first';
	c =='second';
}
a.call({a:'b'},'first','second')
a.apply({a:'b'},['first','second']);
```
四、注意JavaScript中的==与===区别
-----------
首先，== equality 等同，=== identity 恒等。<br>
==， 两边值类型不同的时候，要先进行类型转换，再比较。<br>
===，不做类型转换，类型不同的一定不等。<br>

下面分别说明：<br>
先说 ===，这个比较简单。下面的规则用来判断两个值是否===相等：<br>
1、如果类型不同，就[不相等]<br>
2、如果两个都是数值，并且是同一个值，那么[相等]；(！例外)的是，如果其中至少一个是NaN，那么[不相等]。（判断一个值是否是NaN，只能用isNaN()来判断）<br>
3、如果两个都是字符串，每个位置的字符都一样，那么[相等]；否则[不相等]。<br>
4、如果两个值都是true，或者都是false，那么[相等]。<br>
5、如果两个值都引用同一个对象或函数，那么[相等]；否则[不相等]。<br>
6、如果两个值都是null，或者都是undefined，那么[相等]。<br>
再说 ==，根据以下规则：<br>
1、如果两个值类型相同，进行 === 比较。<br>
2、如果两个值类型不同，他们可能相等。根据下面规则进行类型转换再比较：<br>
   a、如果一个是null、一个是undefined，那么[相等]。<br>
   b、如果一个是字符串，一个是数值，把字符串转换成数值再进行比较。<br>
   c、如果任一值是 true，把它转换成 1 再比较；如果任一值是 false，把它转换成 0 再比较。<br>
   d、如果一个是对象，另一个是数值或字符串，把对象转换成基础类型的值再比较。对象转换成基础类型，利用它的toString或者valueOf方法。js核心内置类，会尝试valueOf先于toString；例外的是Date，Date利用的是toString转换。非js核心的对象，令说（比较麻烦，我也不大懂）<br>
   e、任何其他组合，都[不相等]。<br>
<br>
举例：<br>
"1" == true<br>
  类型不等，true会先转换成数值 1，现在变成 "1" == 1，再把"1"转换成 1，比较 1 == 1， 相等。<br>
= 赋值运算符<br>
== 等于<br>
=== 严格等于<br>
例：<br>
var a = 3;<br>
var b = "3";<br>
<br>
a==b 返回 true<br>
a===b 返回 false<br>
<br>
因为a,b的类型不一样<br>
===用来进行严格的比较判断


