const firebaseConfig = {
  apiKey: "AIzaSyD4TFX53rGaZAzvZYWvHKpeDZljZNJS-Wg",
  authDomain: "atten-14f76.firebaseapp.com",
  projectId: "atten-14f76",
  storageBucket: "atten-14f76.firebasestorage.app",
  messagingSenderId: "1074869564190",
  appId: "1:1074869564190:web:eb5aa41259eab048ea8f0f",
  measurementId: "G-F3WGD68VC3"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
window.db = db; // important!
