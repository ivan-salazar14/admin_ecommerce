import React from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import { firebaseConfig } from './properties';
import 'materialize-css/dist/css/materialize.css';
import RouterApp from './routing/router';
import * as serviceWorker from './serviceWorker';

//firebase.initializeApp(firebaseConfig);

ReactDOM.render(<RouterApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
