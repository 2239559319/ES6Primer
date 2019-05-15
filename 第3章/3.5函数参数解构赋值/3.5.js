//函数参数解构赋值
function add([x,y]){
    return x+y;
}
console.log(add([1,2]));
//传入变量的那一刻传入的变量被解构为x,y，函数内部能感受到的变量是x,y

function move({x=0,y=0}={}){        //这个函数有一个函数默认参数
    return [x,y];
}
console.log(move());    //[ 0, 0 ]
console.log(move({x:3,y:8}));       //[3,8]
console.log(move({x:3}));       //[ 3, 0 ]
console.log(move({}));          //[ 0, 0 ]