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


firebase.database().ref().set({
    name: 'Rafael Garcia',
    age: 57,
    isSingle: false,
    location: {
        city: 'Valencia',
        country: 'Spain'
    }
})
