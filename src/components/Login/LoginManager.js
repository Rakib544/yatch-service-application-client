import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';

export const initializedLoginFramework = () => {
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
}

export const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}