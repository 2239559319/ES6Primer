//作用域
//设置了参数默认值参数会形成一个单独的作用域

let x=1;
function f(x,y=x){
    console.log(y)
}
f(2);       //2 ,y指向第一个参数x而不是全局变量x

let x=1;
function f(y=x){
    let x=2;
    console.log(y);
}
f();    //1 x指向全局变量x

let foo='outer';

function bar(func=x=>foo){
    console.log(func());
}
bar();      //outer,bar函数参数默认值是一个匿名函数