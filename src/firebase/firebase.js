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

database.ref().set({
    name: 'Rafael Garcia',
    age: 57,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    location: {
        city: 'Valencia',
        country: 'Spain'
    }
}).then((data) => {
    console.log('Data is saved: ', data)
}).catch((error)=>{
    console.log('This failed. ', error)
})

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon'    ,
    'location/city': 'Seattle'
}).then((data) => {
    console.log('Data update is saved: ', data)
}).catch((error)=>{
    console.log('This update failed. ', error)
})

// database.ref().remove()
//     .then(function () {
//         console.log("Remove succeeded.")
//     })
//     .catch(function (error) {
//         console.log("Remove failed: " + error.message)
//     });