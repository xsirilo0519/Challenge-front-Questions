import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const app = firebase.initializeApp({
        apiKey: "AIzaSyA3LESX-b6-4Z5_iWRfEjo_47eb7bwdGhQ",
        authDomain: "challenge-sofka-2e24f.firebaseapp.com",
        projectId: "challenge-sofka-2e24f",
        storageBucket: "challenge-sofka-2e24f.appspot.com",
        messagingSenderId: "540305418459",
        appId: "1:540305418459:web:b2ad2da8925d6fb77b44fe",
})

export const google = new firebase.auth.GoogleAuthProvider();