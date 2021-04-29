import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCOrsbVv8M0l466UTYazExAliAWeuhxePo',
  authDomain: 'personal-react-apps.firebaseapp.com',
  projectId: 'personal-react-apps',
  storageBucket: 'personal-react-apps.appspot.com',
  messagingSenderId: '871070429105',
  appId: '1:871070429105:web:4c219322148b72a6e21790',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
