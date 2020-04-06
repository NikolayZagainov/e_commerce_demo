import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCaepq_oFEo-hCo_CovJ9jSC1F6ACkqZyU",
    authDomain: "crown-db-a413b.firebaseapp.com",
    databaseURL: "https://crown-db-a413b.firebaseio.com",
    projectId: "crown-db-a413b",
    storageBucket: "crown-db-a413b.appspot.com",
    messagingSenderId: "488020318595",
    appId: "1:488020318595:web:03fb34800f9194addb7eb6",
    measurementId: "G-87S4RM0R71"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;