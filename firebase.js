import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "firebase APIKEY",
  authDomain: "firebase authDomain",
  projectId: "firebase projectID",
  storageBucket: "firebase storageBucket",
  messagingSenderId: "firebase messagingSenderId",
  appId: "firebase appId",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
