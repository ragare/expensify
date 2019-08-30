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
    isSingle: false,
    location: {
        city: 'Valencia',
        country: 'Spain'
    }
}).then((data) => {
    console.log('Data is saved: ', data)
}).catch((error)=>{
    console.log('error: ', error)
})

// database.ref('age').set(27)
// database.ref('location/city').set('New York')

database.ref('atributtes').set({
    height: 14,
    weight: 55
}).then(()=>{

}).catch((err)=>{
    console.log('Err: ', err)
})