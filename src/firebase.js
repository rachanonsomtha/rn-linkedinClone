import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAxw-5pGHjnwdIZGhdOYAbPrgyeE-2k8wY",
    authDomain: "linkedin-19700.firebaseapp.com",
    projectId: "linkedin-19700",
    storageBucket: "linkedin-19700.appspot.com",
    messagingSenderId: "691753054237",
    appId: "1:691753054237:web:ecfceffe453371ebf696f4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };