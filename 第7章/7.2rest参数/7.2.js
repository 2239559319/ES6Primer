//rest参数

function add(...values){
    let sum=0;
    for(let val of values){
        sum+=val;
    }
    return sum;
}
console.log(add(2,3,4));        //9
//rest参数只能是最后一个参数