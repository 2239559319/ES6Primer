// javascript运行采用\uxxxx形式表示一个字符
let a="\u0061";
console.log(a);     // "a"
//这个做法只限于码点在 \u0000-\uFFFF之间的字符超出这个范围必须用2个双字节的形式表达
let b="\uD842\uDFB7";
console.log(b);     //"𠮷"
let c="\u20BB7";
console.log(c);     //₻7 超出不会正确显示

//将码点放入大括号就能正确解读该字符
let d="\u{20BB7}";
console.log(d);     // "𠮷"
//大括号表示法和四字节的UTF-16编码是等价的
console.log("\u{1F680}"==="\uD83D\uDE80");      //true