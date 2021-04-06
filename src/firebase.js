import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCAGC-62MrtFBqVAf9ewsH4FPQcwuak7Rs",
    authDomain: "portfolio-contact-form-7a5ae.firebaseapp.com",
    projectId: "portfolio-contact-form-7a5ae",
    storageBucket: "portfolio-contact-form-7a5ae.appspot.com",
    messagingSenderId: "848327875176",
    appId: "1:848327875176:web:96080f3639131c7bd7f9dd"
});

const db = firebaseApp.firestore();

export { db };