const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'John',
        //     age: 22
        // })
        reject('Something went wrong')
    }, 3000)
})

console.log('before')

promise.then((data) => {
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

console.log('after')