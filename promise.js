const promiseFunction = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Resolved')
        //reject('Something went wrong')
    },2000)
})

promiseFunction.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

/*
    OUTPUT:
    Resolved
*/