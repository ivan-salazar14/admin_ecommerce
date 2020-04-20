import React from 'react';
import ReactDOM from 'react-dom';
//import firebase from 'firebase';
//import { firebaseConfig } from './properties';
//firebase.initializeApp(firebaseConfig);

import 'materialize-css/dist/css/materialize.css';
import RouterApp from './routing/router';
import * as serviceWorker from './serviceWorker';

//import firestore from './properties/firestore';
//const db = firestore.firestore();


ReactDOM.render(<RouterApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
