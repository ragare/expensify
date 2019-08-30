import * as firebase from 'firebase'

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyDF4tqsxze-81Lq51AvjSi4HuB9dZKjvng",
    authDomain: "expensify-2a1df.firebaseapp.com",
    databaseURL: "https://expensify-2a1df.firebaseio.com",
    projectId: "expensify-2a1df",
    storageBucket: "expensify-2a1df.appspot.com",
    messagingSenderId: "241860551509",
    appId: "1:241860551509:web:5d757a37adf8d493"
}


// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database()


const watcher = database.ref().on('value',
    (snapshot) => {
        const val = snapshot.val()
        console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
    },
    (e) => {
        console.log('error in subscription', e)
    })


// const watcher = database.ref().on('value',
//     (snapshot) => {
//         const val = snapshot.val()
//         console.log('Val: ', val)
//     },
//     (e) => {
//         console.log('error in subscription', e)
//     })

// setTimeout(() => {
//     database.ref('age').set(28)
// }, 1500)

// setTimeout(() => {
//     database.ref().off('value', watcher)
// }, 3000)


// setTimeout(() => {
//     database.ref('age').set(30)
// }, 5000)



// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log('Val: ', val)
//     })
//     .catch(e => {
//         console.log('Error: ', e)
//     })


// database.ref().set({
//     name: 'Rafael Garcia',
//     age: 57,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Valencia',
//         country: 'Spain'
//     }
// }).then((data) => {
//     console.log('Data is saved: ', data)
// }).catch((error)=>{
//     console.log('This failed. ', error)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon'    ,
//     'location/city': 'Seattle'
// }).then((data) => {
//     console.log('Data update is saved: ', data)
// }).catch((error)=>{
//     console.log('This update failed. ', error)
// })

// database.ref().remove()
//     .then(function () {
//         console.log("Remove succeeded.")
//     })
//     .catch(function (error) {
//         console.log("Remove failed: " + error.message)
//     });