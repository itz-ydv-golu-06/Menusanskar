// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBTWRBEE0-ra4wVRxt4M_wAW8XiZ7x7Dug",
  authDomain: "sanskarmenu.firebaseapp.com",
  projectId: "sanskarmenu",
  storageBucket: "sanskarmenu.firebasestorage.app",
  messagingSenderId: "837613240142",
  appId: "1:837613240142:web:34ac81c17a8140fd3c681f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
