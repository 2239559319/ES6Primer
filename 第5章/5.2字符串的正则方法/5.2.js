/* 
字符串共有4个方法可以使用正则表达式
macth, replace, search, split
es6让这4个方法在内部全部调用RegExp的实例方法

String.prototype.match 调用 RegExp.prototype[Symbol.match]
String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
String.prototype.search 调用 RegExp.prototype[Symbol.search]
String.prototype.split 调用 RegExp.prototype[Symbol.split]

*/

console.log(RegExp.prototype[Symbol.match])     //function [Symbol.match]() { … }