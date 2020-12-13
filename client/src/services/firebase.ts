import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_APIKEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASEURL,
  projectId: process.env.GATSBY_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.GATSBY_FIREBASE_APPID,
  measurementId: process.env.GATSBY_FIREBASE_MEASUREMENTID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
