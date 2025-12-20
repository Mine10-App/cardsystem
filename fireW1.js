const firebaseConfig1 = {
   apiKey: "AIzaSyBBuYwIGYYBe2SCX60W4S5SWjqUut5xVIc",
  authDomain: "kwakinsys.firebaseapp.com",
  projectId: "kwakinsys",
  storageBucket: "kwakinsys.firebasestorage.app",
  messagingSenderId: "752208362906",
  appId: "1:752208362906:web:b511604df36a5daab2ce23",
  measurementId: "G-7LS5BPNVS1"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig1);

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
