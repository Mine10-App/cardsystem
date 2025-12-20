// fireshift.js - Shift System Firebase Configuration
// SEPARATE Firebase project for shift management

const shiftFirebaseConfig = {
  apiKey: "AIzaSyDojmglqNlJmwgKYe0UcEcrElLV45SK9As",
  authDomain: "cardsystem-21773.firebaseapp.com",
  projectId: "cardsystem-21773",
  storageBucket: "cardsystem-21773.firebasestorage.app",
  messagingSenderId: "408973003834",
  appId: "1:408973003834:web:96db400ec750fb62dab903",
  measurementId: "G-6QX2WLEBTP"
};

// Make it globally available
window.shiftFirebaseConfig = shiftFirebaseConfig;

console.log("Shift Firebase configuration loaded from fireshift.js");
