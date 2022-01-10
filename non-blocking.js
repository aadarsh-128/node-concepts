console.log('Starting')

setTimeout(()=>{
    setTimeout(()=>{
        console.log('Inner 2 second timer');
    },2000)
    console.log('2 Second Timer')
}, 2000)
setTimeout(()=>{
    console.log('0 second timer')
},0)
console.log('Stopping')

/*
OUTPUT:
Starting
Stopping
0 second timer
2 Second Timer
Inner 2 second timer
*/