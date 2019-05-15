// 解构赋值默认值

let [foo=true]=[];
console.log(foo);   //true

let [x,y='b']=['a'];
console.log(x,y);       //a b

let [x,y='b']=['a',undefined];
console.log(x,y);       //a b
//如果数组成员严格等于undefined(===)则数组默认值生效

let [x]=[null];
console.log(x);     //null

//如果默认中是一个表达式则表达式惰性求值，即只有在用到时才会求值
function f(){
    console.log('aaa');
}
let [x=f()]=[1];
console.log(x);     //1

//默认值可以引用解构赋值的其他变量，但是该变量必须已经声明

let [x=1,y=x]=[];
console.log(x,y);       //1 1
let [x=1,y=2]=[2];
console.log(x,y);       //2 2
let [x=1,y=x]=[1,2];
console.log(x,y);   //1 2
let [x=y,y=1]=[];
console.log(x,y);   //ReferenceError