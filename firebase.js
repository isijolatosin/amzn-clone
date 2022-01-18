import firebase from 'firebase';

const firebaseConfig = {
  apiKey: '<FIREBASE_API_KEY>',
  authDomain: '<FIREBASE_AUTH_DOMAIN',
  projectId: 'FIREBASE_PROJECT_ID',
  storageBucket: 'FIREBASE_STORAGE_BUCKET',
  messagingSenderId: 'FIREBASE_MASSAGING_SENDER_ID',
  appId: 'FIREBASE_APP_ID',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
