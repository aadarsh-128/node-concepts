const add = (a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            return resolve(a+b)
        }, 2000);
    })
}

// Promise Chaining
add(1, 2).then((sum)=>{
    console.log(sum);
    return add(sum, 3)
}).then((sum2)=>{
    console.log(sum2)
}).catch((e)=>{
    console.log(error)
})

// Promise chaining: Poor Syntax
add(1,2).then((sum)=>{
    console.log(sum)
    add(sum, 3).then((sum2)=>{
        console.log(sum2)
    }).catch((e)=>{
        console.log(e)
    })
}).catch((e)=>{
    console.log(e)
})