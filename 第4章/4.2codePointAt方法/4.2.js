/* codePointAt()
 *javascript内部字符以utf-16的格式储存，每个字符固定为两个字节
 * 码点大于0xFFFF的字符javascript会认为他们是两个字符
 */
let s="𠮷";
console.log(s.length);      //2
console.log(s.charAt(0));   // ""
console.log(s.charAt(1));   // ""
console.log(s.charCodeAt(0));       //55362
console.log(s.charCodeAt(1));       //57271     双字节表示

//es6提供codePointAt()方法能够正确处理utf-16字符
let s="𠮷";
console.log(s.codePointAt(0));      //134071 正确的码点
console.log(s.codePointAt(1));
console.log(s.codePointAt(2));
//后面两个字符和charCodeAt()相同

//测试一个字符是2字节还是4字节
function is32Bit(c){
    return c.codePoint(0)>0xFFFF;
}