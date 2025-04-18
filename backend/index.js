// backend/index.js
const express = require("express");
const { db, auth } = require("./firebase");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.get("/test", (req, res) => {
  res.status(200).json({ message: "Sajjad server is working!" });
});

// Test Firestore Connection
app.get("/test-firestore", async (req, res) => {
  try {
    const docRef = db.collection("test").doc("testDoc");
    await docRef.set({ message: "Firebase Admin SDK is working!" });
    res.status(200).json({ success: true, message: "Firestore test successful!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Test Firebase Authentication
app.post("/test-auth", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await auth.createUser({
      email,
      password,
    });
    res.status(201).json({ uid: userRecord.uid, email: userRecord.email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// backend/index.js
app.post("/api/auth/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Create a new user in Firebase Authentication
    const userRecord = await auth.createUser({
      email,
      password,
    });

    // Respond with the user's UID and email
    res.status(201).json({ uid: userRecord.uid, email: userRecord.email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// backend/index.js
app.post("/api/auth/login", async (req, res) => {
  const { idToken } = req.body;

  try {
    // Verify the ID token
    const decodedToken = await auth.verifyIdToken(idToken);

    // Respond with the user's UID and email
    res.status(200).json({ uid: decodedToken.uid, email: decodedToken.email });
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
});

// backend/index.js
app.post("/api/trips", async (req, res) => {
  const { userId, destination, dates, budget } = req.body;

  try {
    // Add a new trip document to Firestore
    const tripRef = db.collection("trips").doc();
    await tripRef.set({
      userId,
      destination,
      dates,
      budget,
      createdAt: new Date(),
    });

    // Respond with the trip details
    res.status(201).json({ tripId: tripRef.id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// backend/index.js
app.get("/api/trips/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    // Query trips for the given userId
    const tripsSnapshot = await db
      .collection("trips")
      .where("userId", "==", userId)
      .get();

    const trips = [];
    tripsSnapshot.forEach((doc) => {
      trips.push({ id: doc.id, ...doc.data() });
    });

    // Respond with the list of trips
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// backend/index.js
app.put("/api/trips/:tripId", async (req, res) => {
  const { tripId } = req.params;
  const { destination, dates, budget } = req.body;

  try {
    // Update the trip document in Firestore
    const tripRef = db.collection("trips").doc(tripId);
    await tripRef.update({
      destination,
      dates,
      budget,
      updatedAt: new Date(),
    });

    // Respond with success
    res.status(200).json({ message: "Trip updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// backend/index.js
app.delete("/api/trips/:tripId", async (req, res) => {
  const { tripId } = req.params;

  try {
    // Delete the trip document from Firestore
    const tripRef = db.collection("trips").doc(tripId);
    await tripRef.delete();

    // Respond with success
    res.status(200).json({ message: "Trip deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// backend/index.js
app.post("/api/trips/:tripId/add-collaborator", async (req, res) => {
  const { tripId } = req.params;
  const { collaboratorUid } = req.body;

  try {
    // Add the collaborator to the trip's collaborators array
    const tripRef = db.collection("trips").doc(tripId);
    await tripRef.update({
      collaborators: admin.firestore.FieldValue.arrayUnion(collaboratorUid),
    });

    // Respond with success
    res.status(200).json({ message: "Collaborator added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// backend/index.js
app.post("/api/trips/:tripId/remove-collaborator", async (req, res) => {
  const { tripId } = req.params;
  const { collaboratorUid } = req.body;

  try {
    // Remove the collaborator from the trip's collaborators array
    const tripRef = db.collection("trips").doc(tripId);
    await tripRef.update({
      collaborators: admin.firestore.FieldValue.arrayRemove(collaboratorUid),
    });

    // Respond with success
    res.status(200).json({ message: "Collaborator removed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

