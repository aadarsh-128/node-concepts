const fetch = require('node-fetch')

async function func(){
    console.log('Inside function')
    const response = await fetch('https://catfact.ninja/fact')
    console.log('before response')
    const data = await response.json()
    console.log('users resolved')
    return data
}
console.log('Before')
func().then(data => console.log(data))
console.log('End')

//--------------------

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }

            resolve(a + b)
        }, 2000)
    })
}

const muntipleSum = async () => {
    const sum = await add(1, 2)
    const sum2 = await add(sum, 3)
    const sum3 = await add(sum2, 4)
    return sum3
}

muntipleSum().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('Error', e)
})

/**
 SAMPLE OUTPUT:
 Before
Inside function
End
before response
users resolved
{
  fact: 'There is a species of cat smaller than the average housecat. It is native to Africa and it is the Black-footed cat (Felis nigripes). Its top weight is 5.5 pounds.',
  length: 162
}
result 10
 */