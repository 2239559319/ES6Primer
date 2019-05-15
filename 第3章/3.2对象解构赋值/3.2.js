let {foo,bar}={foo:'aaa',bar:'bbb'};    //这是对象属性简写相当于{foo:foo,bar:bar}
console.log(foo,bar);   //aaa bbb
//变量必须与属性同名才能取到正确的值
let {baz}={bar:'aaa',foo:"bbb"};
console.log(baz);       //undefined

//对象的解构赋值是先找到同名属性再赋值给相应的变量
let {foo:baz}={foo:'aaa',bar:'bbb'};
console.log(baz);   //aaa   cosnole.log(foo);   //Reference Errora

let obj={
    p:[
        'hello',
        {y:'world'}
    ]
};
let {p:[x,{y}]}=obj;
console.log(x,y);       //hello world

let obj={
    p:[
        'hello',
        {y:'world'}
    ]
};
let {p,p:[x,{y}]}=obj;
console.log(p);     //[ 'hello', { y: 'world' } ]

//默认值
let {x=3}={};
console.log(x);     //3
let {x,y=3}={x:1};
console.log(x,y);     // 1 3
let {x:y=3}={};
console.log(y);     //3
let {x:y=1}={x:5};
console.log(y);     //5

//默认值生效的条件是对象的属性值是严格等于undefiend
let {x=3}={x:undefined};
console.log(x);     //3
let {x=3}={x:null};
console.log(x);     //null

//如果解构失败则变量值等于undefined
let {foo}={bar:'aaa'};
console.log(foo);


//将已声明的变量用于解构赋值
let x;
{x}={x:1};      //SyntaxError
//正确写法
let x;
({x}={x:1});
console.log(x);     //1

//用法
let {log,sin,cos}=Math;
console.log(log,sin,cos);       //[Function: log] [Function: sin] [Function: cos]
let arr=[1,2,3,4];
let {0:first,[arr.length-1]:last}=arr;
console.log(first,last);    //1 4