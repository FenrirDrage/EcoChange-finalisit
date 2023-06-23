import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  getBlob,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/9.19.0/firebase-storage.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js";

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

  var uid = localStorage.getItem("uid");

  // Function to get the image URL and pass it to the callback function
  function getImageURL(uid, callback) {
  // Get the user image reference
  const userImageRef = ref(storage, 'users/' + uid + '/user1.png'); // Assuming the image is stored

  // Get the download URL
  getDownloadURL(userImageRef)
    .then((url) => {
      // Pass the URL to the callback function
      var uid = localStorage.getItem("uid");
      callback(url);
    })
    .catch((error) => {
      // Handle errors
      console.log(error.code);
    });
}

// ...

// Inside the function where you want to retrieve the image URL
// Call the getImageURL function and pass the callback function
getImageURL(uid, function(url) {
  // Use the URL in script.js
  // ...
})

// Load the name and surname from Firebase
const loadUserData = async () => {
  try {
    // Get the Firestore document reference for the user
    const userRef = fRef.collection('users').doc(uid);

    // Get the user document data
    const userSnapshot = await userRef.get();

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      const name = userData.name;
      const surname = userData.surname;

      // Store the name and surname in localStorage
      localStorage.setItem('name', name);
      localStorage.setItem('surname', surname);

    } else {
      console.log('User document does not exist');
    }
  } catch (error) {
    console.log('Error loading user data:', error);
  }
};

// Call the function to load the user data
loadUserData();