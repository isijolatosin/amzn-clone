import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC6jgVGdUoP7mtW20LTFoR6v6tOOBJX-g4',
  authDomain: 'clone-nextjs-9547c.firebaseapp.com',
  projectId: 'clone-nextjs-9547c',
  storageBucket: 'clone-nextjs-9547c.appspot.com',
  messagingSenderId: '444840860723',
  appId: '1:444840860723:web:54eafcc26ad17992cfd746',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
