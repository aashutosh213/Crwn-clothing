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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email} = userAuth;

      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error in creating users', error.message)
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  var provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;