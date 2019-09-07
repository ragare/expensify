const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'John',
            age: 22
        })
        // reject('Something went wrong')
    }, 3000)
})

console.log('before')

promise.then((data) => {
    console.log(data)
    return 'some data'
}).then((dat) => {
    console.log('does this run?', dat)
}).catch((error) => {
    console.log(error)
})

console.log('after')