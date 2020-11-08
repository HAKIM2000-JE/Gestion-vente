import React from 'react'
import firebase from 'firebase'


const { fireEvent } = require("@testing-library/react");




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9Mu-vInQdjIjZS8IL0gmC4b7S1FhJhp0",
    authDomain: "gestion-ventes.firebaseapp.com",
    databaseURL: "https://gestion-ventes.firebaseio.com",
    projectId: "gestion-ventes",
    storageBucket: "gestion-ventes.appspot.com",
    messagingSenderId: "77558732008",
    appId: "1:77558732008:web:3454b9f0fa11be0123a55d",
    measurementId: "G-RDJKSX57YV"
};

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };