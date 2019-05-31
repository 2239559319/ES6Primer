//与解构赋值默认值使用

//对象解构赋值，没有使用函数默认值，函数参数是一个对象时x,y才解构生成
function foo({x,y=5}){
    console.log(x,y);
}
foo({});        //undefined 5
foo({x:1});     //1 5
foo({x:1,y:2});     //1 2
foo();              //TypeError

//函数参数默认值是空对象 但是设置解构赋值默认值
function m1({x=0,y=0}={}){
    console.log(x,y);
}

//函数参数默认值设置一个对象，没有设置解构赋值的默认值
function m2({x,y}={x:0,y:0}){
    console.log(x,y);
}