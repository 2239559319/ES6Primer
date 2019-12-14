//RegExp构造函数

// ES5两种构造函数
var r1 = new RegExp('xyz', 'i')

var r2 = new RegExp(/xyz/i)

//但是es5不允许第二种添加第二参数修饰符

var r3 = new RegExp(/xyz/, 'i')     //会报错 TypeError

//es6改变了这点
var r4 = new RegExp(/xyz/gi, 'i')       // es6中正确， 这样会忽略原有的修饰符
r4.flags        //  'i'