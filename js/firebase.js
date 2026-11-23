
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB3PbxyzvBvX7G-ltk_OlxNn4wwLoJIW_E",
  authDomain: "face-entry-demo.firebaseapp.com",
  projectId: "face-entry-demo",
  storageBucket: "face-entry-demo.firebasestorage.app",
  messagingSenderId: "396775036756",
  appId: "1:396775036756:web:a2f071906816e5b9311ac1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
js/firebase.js
