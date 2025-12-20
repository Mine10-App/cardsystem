const firebaseConfig = {
  apiKey: "AIzaSyB3pfAp4VDCU9STBVn4d3xQ4RdfK7O8XBo",
  authDomain: "psys-c81ee.firebaseapp.com",
  projectId: "psys-c81ee",
  storageBucket: "psys-c81ee.firebasestorage.app",
  messagingSenderId: "66547500549",
  appId: "1:66547500549:web:f8c9109523ecded431fe6c",
  measurementId: "G-JCLESEQG61"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
window.walkinDb = firebase.firestore();

console.log("Firebase initialized successfully");

// Initialize receipt counter
async function initializeReceiptCounter() {
  try {
    const counterRef = window.walkinDb.collection("counters").doc("receipts");
    const doc = await counterRef.get();
    
    if (!doc.exists) {
      await counterRef.set({ lastReceiptNo: 0 });
      console.log("Receipt counter initialized to 0");
    } else {
      console.log("Receipt counter loaded:", doc.data().lastReceiptNo);
    }
  } catch (error) {
    console.error("Error initializing receipt counter:", error);
  }
}

// Call initialization
initializeReceiptCounter();
