import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCO6Zx3ffQBvYnYj7oRwIp1MEvbWe33vV0",
  authDomain: "linkedincloneredux.firebaseapp.com",
  projectId: "linkedincloneredux",
  storageBucket: "linkedincloneredux.appspot.com",
  messagingSenderId: "518069375674",
  appId: "1:518069375674:web:d047b5428bdcfd4fa86883",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
