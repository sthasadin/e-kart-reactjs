import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdPbAffU45K37ePqMNZ-Jf9zqF6CxIkak",
  authDomain: "e-kart-66c13.firebaseapp.com",
  databaseURL: "https://e-kart-66c13.firebaseio.com",
  projectId: "e-kart-66c13",
  storageBucket: "e-kart-66c13.appspot.com",
  messagingSenderId: "1026964390654",
  appId: "1:1026964390654:web:fc2e3e93588122c8425baf",
  measurementId: "G-W93ZD1WZ93",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
