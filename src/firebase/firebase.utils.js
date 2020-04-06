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

export const createUserProfileDocumrnt = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;