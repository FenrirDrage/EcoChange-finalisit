//codigo para ser usado como modulo
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
import {
  getStorage,
  ref,
  getDownloadURL,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.19.0/firebase-storage.js";

// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA78CQTk0exLo0zgAA9dia-7SwE5pA42ac",
  authDomain: "pi-exp.firebaseapp.com",
  projectId: "pi-exp",
  storageBucket: "pi-exp.appspot.com",
  messagingSenderId: "745672413353",
  appId: "1:745672413353:web:cb808c7002207e734d59b8",
  measurementId: "G-LYMNW1BKX8",
};
  

  //variaveis
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  const db = getFirestore(app);
  const auth = getAuth();
  
  