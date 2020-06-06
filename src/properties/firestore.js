import firebase from "firebase";
import 'firebase/storage'
const config = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
};

console.log('env ')
console.log(config)
firebase.initializeApp(config);
export const storage = firebase.storage();
// Create a storage reference from our storage service
export const storageRef = storage.ref();
export const firestore = firebase;
