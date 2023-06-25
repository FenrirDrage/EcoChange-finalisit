//codigo para ser usado como modulo
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.19.0/firebase-storage.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA78CQTk0exLo0zgAA9dia-7SwE5pA42ac",
  authDomain: "pi-exp.firebaseapp.com",
  projectId: "pi-exp",
  storageBucket: "pi-exp.appspot.com",
  messagingSenderId: "745672413353",
  appId: "1:745672413353:web:cb808c7002207e734d59b8",
  measurementId: "G-LYMNW1BKX8",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);

var uid = localStorage.getItem("uid")

// Fetch user data from the database
fetchUserData(uid)
.then((userData) => {
  // Save user data to localStorage
  localStorage.setItem("age", userData.age);
  localStorage.setItem("name", userData.name);
  localStorage.setItem("photoURL", userData.photoURL);
  localStorage.setItem("surname", userData.surname);

})
.catch((error) => {
  console.log("Error fetching user data:", error);
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
alert(errorMessage);
});

// Function to fetch user data from the database
function fetchUserData(uid) {
return new Promise((resolve, reject) => {
const userRef = doc(db, "users", uid);
getDoc(userRef)
.then((snapshot) => {
if (snapshot.exists()) {
  const userData = snapshot.data();
  resolve(userData);
} else {
  reject("User data not found in the database.");
}
})
.catch((error) => {
reject(error);
});
});
}