//函数的length属性

//指定了默认值后函数的length属性返回没有指定默认值的参数个数,也就是说指定了默认值length属性将失真

console.log((function(a){}).length);        //1
console.log((function(a=5){}).length);      //0
console.log((function(a,b,c=5){}).length);  //2

//rest参数不计入length
console.log((function(...args){}).length);      //0
//默认值参数不是尾参数后面的参数不计入length
console.log((function(a,b=4,c){}).length);      //1