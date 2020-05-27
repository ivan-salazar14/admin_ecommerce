import firebase from "firebase";
import 'firebase/storage'
const config = {
    apiKey: "AIzaSyBsDAo7ely8Kaw6sM0Kvlb7lbraLRRx-L0",
    authDomain: "think14.firebaseapp.com",
    databaseURL: "https://think14.firebaseio.com",
    projectId: "think14",
    storageBucket: "think14.appspot.com",
    messagingSenderId: "302274465556",
    appId: "1:302274465556:web:158c38e7a23a01fae3bc01",
    measurementId: "G-YP9YRLE43H"
};
firebase.initializeApp(config);
export const storage = firebase.storage();
// Create a storage reference from our storage service
export const storageRef = storage.ref();
export const firestore = firebase;
