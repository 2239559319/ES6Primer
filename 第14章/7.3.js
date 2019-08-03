//      基本使用方法
let promise = new Promise((resolve,reject)=>{
    if(){
        resolve();
    }else{
        reject();
    }
})
promise.then(value=>{
    console.log(value);
},error=>{
    console.log(error);
})



function timeout(ms){
    return new Promise((resolve,reject)=>{
        console.log('promise')
        setTimeout(resolve,ms,'done');
    })
}
timeout(1000).then(value=>{
    console.log(value);
});
console.log('HI')
// 立即输出promise,hi,然后隔一秒输出done
