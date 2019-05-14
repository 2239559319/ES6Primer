let [a,b,c]=[1,2,3];
console.log(a,b,c);     //1 2 3

let [foo,[[bar],baz]]=[1,[[2],3]];
console.log(foo,bar,baz);     //1 2 3

let [,,third]=['foo','bar','baz'];
console.log(third);     //baz

let [x,y]=[1];
console.log(x,y);       //1 undefined