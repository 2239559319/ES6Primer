/* includes()   返回布尔值，表示是否找到参数字符串
 * startsWith() 返回布尔值，表示参数字符串是否在源字符串头部
 * endsWith()   返回布尔值，……
 */
const a="hello world";
console.log(a.startsWith("he"));    //true
console.log(a.endsWith("ld"));      //true
console.log(a.includes("o "));      //true
//支持第二参数,表示开始搜索的位置
console.log(a.startsWith("world",6));   //true
console.log(a.endsWith("hello",5)); //true  第二参数表示针对前n的字符
console.log(a.includes("hello",6)); //false