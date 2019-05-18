//模板字符串
//模板字符串用反引号标识，可以当做普通字符串， 也可以定义多行字符串，或者在字符串中嵌入变量

let a=`in javascript '\n' is a line-feed`;
console.log(a);
//in javascript '
//' is a line-feed
let b=`in javascript this is 
not legal`;
console.log(b);
/*in javascript this is
not legal*/
let name='xiaochuan';
let c=`my name is ${name}`;
console.log(c);     //my name is xiaochuan

//模板字符串中的反引号要转义
let d=`my name is \``;
console.log(d);     //my name is `