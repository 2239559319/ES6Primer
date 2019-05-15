//数值和布尔值解构赋值
//如果等号右边是数值或布尔值则会先转化为对象
let {toString:s}=123;
console.log(s === Number.prototype.toString);   //true