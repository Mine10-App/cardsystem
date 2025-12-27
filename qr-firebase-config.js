// ----- QR Firebase Configuration -----
let qrFirebaseConfig = null;

// ----- Load QR Firebase Config -----
function loadQRFirebaseConfig() {
  try {
    qrFirebaseConfig = {
      apiKey: "AIzaSyC9FuNjWn8Up4JyjYbABEF2aNjO2bSXdfM",
      authDomain: "qr-scanner-4458e.firebaseapp.com",
      projectId: "qr-scanner-4458e",
      storageBucket: "qr-scanner-4458e.firebasestorage.app",
      messagingSenderId: "1099262112748",
      appId: "1:1099262112748:web:a18f206bcf893c894546c9",
      measurementId: "G-15WXNEPKS9"
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
