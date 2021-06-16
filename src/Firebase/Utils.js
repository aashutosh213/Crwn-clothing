import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCb2chWmfXuPydbhpwEgwau7q0DzYfhiDM",
    authDomain: "crwn-db-1d238.firebaseapp.com",
    projectId: "crwn-db-1d238",
    storageBucket: "crwn-db-1d238.appspot.com",
    messagingSenderId: "232740244515",
    appId: "1:232740244515:web:a9be4eb1dc0a6b58ac3596",
    measurementId: "G-FZ3653PF62"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  var provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;