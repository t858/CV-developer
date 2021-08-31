const admin = require("firebase-admin");
const serviceFirebaseAccount = require("../serviceFirebaseAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceFirebaseAccount),
  storageBucket: "cv-maker-f1c88.appspot.com",
});

module.exports = admin;