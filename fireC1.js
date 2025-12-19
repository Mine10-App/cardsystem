var firebaseConfigCard = {
  
  apiKey: "AIzaSyD4TFX53rGaZAzvZYWvHKpeDZljZNJS-Wg",
  authDomain: "atten-14f76.firebaseapp.com",
  projectId: "atten-14f76",
  storageBucket: "atten-14f76.firebasestorage.app",
  messagingSenderId: "1074869564190",
  appId: "1:1074869564190:web:eb5aa41259eab048ea8f0f",
  measurementId: "G-F3WGD68VC3"
};

const cardApp = !firebase.apps.some(app => app.name === "cardApp") ? 
    firebase.initializeApp(firebaseConfigCard, "cardApp") :
    firebase.app("cardApp");

// Firestore reference
var passengerDb = cardApp.firestore();
console.log("✅ Passenger Firebase initialized");
window.passengerDb = passengerDb;
