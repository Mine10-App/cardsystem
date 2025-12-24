// ----- QR Firebase Configuration -----
let qrFirebaseConfig = null;

// ----- Load QR Firebase Config -----
function loadQRFirebaseConfig() {
  try {
    qrFirebaseConfig = {
      apiKey: "AIzaSyC04iaSqeA76oOk_KlrfbSY6NTTNgy5LOY",
      authDomain: "qrcards-2378e.firebaseapp.com",
      projectId: "qrcards-2378e",
      storageBucket: "qrcards-2378e.firebasestorage.app",
      messagingSenderId: "863969491550",
      appId: "1:863969491550:web:b764e63a2847f2b80cd2cf",
      measurementId: "G-ZJPY6EZM41"
    };
    
    console.log("✅ QR Firebase config loaded");
    return true;
    
  } catch (error) {
    console.error("❌ Error loading QR Firebase config:", error);
    return false;
  }
}

// Initialize the config when the script loads
loadQRFirebaseConfig();
