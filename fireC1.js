var firebaseConfigCard = {
  
    apiKey: "AIzaSyDojmglqNlJmwgKYe0UcEcrElLV45SK9As",
  authDomain: "cardsystem-21773.firebaseapp.com",
  projectId: "cardsystem-21773",
  storageBucket: "cardsystem-21773.firebasestorage.app",
  messagingSenderId: "408973003834",
  appId: "1:408973003834:web:96db400ec750fb62dab903",
  measurementId: "G-6QX2WLEBTP"
};

const cardApp = !firebase.apps.some(app => app.name === "cardApp") ? 
    firebase.initializeApp(firebaseConfigCard, "cardApp") :
    firebase.app("cardApp");

// Firestore reference
var passengerDb = cardApp.firestore();
console.log("✅ Passenger Firebase initialized");
window.passengerDb = passengerDb;
