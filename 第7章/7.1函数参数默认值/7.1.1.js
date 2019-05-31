/*基本用法*/


// es6之前函数不能有默认参数
function log(x,y){      //变通方法
    y = y||'world';
    console.log(y);
}

//es6可以为函数指定默认值，写在参数的后面

function log(x,y='world'){
    console.log(x,y);
}
log('hello');           // hello world
log('hello','china');   //hello china
log('hello','');        //hello

//参数的默认值是惰性求值的（没有改变时不求值）

let x=99;
function foo(p=x+1){
    console.log(p);
}
foo();      //100
x=100;
foo();      //101