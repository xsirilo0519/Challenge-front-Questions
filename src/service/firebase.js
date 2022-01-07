import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const app = firebase.initializeApp({
        "projectId": "quetions-app",
        "appId": "1:1088315107365:web:8c2e1b99a45bfdcf4737cc",
        "storageBucket": "quetions-app.appspot.com",
        "apiKey": "AIzaSyDal7rcOVzjHkxZPAbNBOEED77AsqaABNk",
        "authDomain": "quetions-app.firebaseapp.com",
        "messagingSenderId": "1088315107365"
})

export const google = new firebase.auth.GoogleAuthProvider();