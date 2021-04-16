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

    return firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
        setAuthToken()
        const userInfo = {}
        userInfo.img = res.user.photoURL;
        userInfo.email = res.user.email;
        userInfo.name = res.user.displayName;
        return userInfo;
    })
    .catch(err => {
        console.log(err)
    })
}

const setAuthToken = () => {
    firebase.auth().currentUser.getIdToken()
    .then(idToken => {
        sessionStorage.setItem('token', idToken);
    })
}