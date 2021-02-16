import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2HJuclVmhxOJz-CyswGw0vJqBpSpaa2Y",
  authDomain: "todoapp-9fc03.firebaseapp.com",
  projectId: "todoapp-9fc03",
  storageBucket: "todoapp-9fc03.appspot.com",
  messagingSenderId: "234086989977",
  appId: "1:234086989977:web:1ecef75db04423eda73808",
  measurementId: "G-T1TE7FVMXP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
