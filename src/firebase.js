import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyC_ZGDD0Tp6LhDL6niLNTyEyDBrIvPg-8U",
    authDomain: "todoist-790bb.firebaseapp.com",
    databaseURL: "https://todoist-790bb.firebaseio.com",
    projectId: "todoist-790bb",
    storageBucket: "todoist-790bb.appspot.com",
    messagingSenderId: "372241187565",
    appId: "1:372241187565:web:0b5950162266c2d92b82e4"
})

export {firebaseConfig as firebase}