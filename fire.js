const firebaseConfig = {
   apiKey: "AIzaSyDojmglqNlJmwgKYe0UcEcrElLV45SK9As",
  authDomain: "cardsystem-21773.firebaseapp.com",
  projectId: "cardsystem-21773",
  storageBucket: "cardsystem-21773.firebasestorage.app",
  messagingSenderId: "408973003834",
  appId: "1:408973003834:web:96db400ec750fb62dab903",
  measurementId: "G-6QX2WLEBTP"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
window.db = db; // important!
