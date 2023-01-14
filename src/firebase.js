// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCVlUcgREzgSNJ2CQEqCdvlRifdg6pVgN0",
  authDomain: "twitterclone-f58d8.firebaseapp.com",
  projectId: "twitterclone-f58d8",
  storageBucket: "twitterclone-f58d8.appspot.com",
  messagingSenderId: "215551313080",
  appId: "1:215551313080:web:0f6046b3c8edae188be04d",
  measurementId: "G-FDB68K0X7F"
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore(firebaseApp)
export default db;