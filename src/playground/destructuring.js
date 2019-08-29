//
// Object destructuring
//


// const person = {
//     name: 'Amdrew2',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 88
//     }
// }

// const { name: firstName = 'Anonymous', age } = person

// console.log(`${firstName} is ${age}`)

// const { temp: temperature, city } = person.location

// if (temperature && city) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the enemy.',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

//
// Array destructuring
//

// const address = ['1299 S Juniper Strett', 'Philadelphia', 'Pennsylvania', '19147']

// //const [street, city, state, zip] = address
// const [, city, state] = address
// //const [, city, state='New York'] = address

// console.log(`You are in ${city} ${state}`)

const item = ['Cofee (ice)', '$2.00', '$2.52', '$2.75']

const [product, , medium] = item

console.log(`A medium ${product} costs ${medium}`)