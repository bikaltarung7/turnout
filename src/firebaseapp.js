import firebase from 'firebase'



var config = {
    apiKey: "AIzaSyDqer0jeO3IY9rENATTJkjejTae_a3qUAc",
    authDomain: "turnout-8d27b.firebaseapp.com",
    databaseURL: "https://turnout-8d27b.firebaseio.com",
    projectId: "turnout-8d27b",
    storageBucket: "turnout-8d27b.appspot.com",
    messagingSenderId: "995875621654"
  };

  export const firebaseApp = firebase.initializeApp(config)

  export const eventsRef = firebase.database().ref().child('events')