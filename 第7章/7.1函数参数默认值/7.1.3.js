//参数的默认值位置

//定义了默认值参数应该是函数的尾参数，如果不是尾参数则不能省略
function f(x=1,y){
    console.log(x,y);
}
f();        //1 undefined
f(2);       //2 undefined
f(undefined,1);     //1 1

//传入参数为undefiend会触发参数默认值
function foo(x=5,y=5){
    console.log(x,y);
}
foo(null,undefined);        //null 5