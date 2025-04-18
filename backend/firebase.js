// backend/firebase.js
const admin = require("firebase-admin");
require("dotenv").config();

// Initialize Firebase Admin SDK using environment variables
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  }),
});

// Export Firestore and Authentication modules
const db = admin.firestore();
const auth = admin.auth();

module.exports = { db, auth };