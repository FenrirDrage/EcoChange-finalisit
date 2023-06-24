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

//Register Function
window.register = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("firstname").value;
  const surname = document.getElementById("lastname").value;
  const age = document.getElementById("age").value;
  console.log(email, password, name, surname, age);

  //Register Function
let file = null;

window.register = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("firstname").value;
  const surname = document.getElementById("lastname").value;
  const age = document.getElementById("age").value;
  console.log(email, password, name, surname, age);

  // Firebase code
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const successMessage = document.createElement("p");
    successMessage.textContent = "You are registered";
    document.body.appendChild(successMessage);
    console.log(userCredentials);

    const userData = {
      name: name,
      surname: surname,
      age: age,
      email: email,
    };
    const uid = result.user.uid;
    const userDocRef = doc(db, "users", userCredentials.user.uid);

    // Upload the image to storage
    if (file) {
      const storageRef = ref(
        storage,
        `users/${userCredentials.user.uid}/foto.png`
      );
      await uploadBytes(storageRef, file);

      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(storageRef);

      // Add the download URL to the user data
      userData.photoURL = downloadURL;
    }

    // Add user data to Firestore
    await setDoc(userDocRef, userData);
    console.log("User information added to Firestore.");

    createPic(userCredentials.user.uid);
	
	// Save email and uid to localStorage
      localStorage.setItem("email", email);
      localStorage.setItem("uid", uid);
      localStorage.setItem("urldown", downloadURL);

	// Redirect to mainpage.html
    window.location.href = "mainpage.html";

  } catch (error) {
    console.log(error.code);
    console.log(error.message);
  }
  };

  const fileInput = document.getElementById("choose-file");
  fileInput.addEventListener("change", (event) => {
    file = event.target.files[0];
  });

  function createPic(uid) {
    if (file) {
      const storageRef = ref(storage, `users/${uid}/foto.png`);
      uploadBytes(storageRef, file)
        .then(() => {
          console.log("Upload successful");
        })
        .catch((error) => {
          console.log("Error uploading file:", error);
        });
    }
  }
  }
  //Firebase code
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredentials) => {
//       // Signed in
//       alert("Login criada com sucesso.")
//       const user = result.user;
//       uid = result.user.uid;

//       // Save email and uid to localStorage
//       localStorage.setItem("email", email);
//       localStorage.setItem("uid", uid);

//       window.location.href = "mainpage.html"
//       createPic(userCredentials.user.uid);
//     })
//     .catch((error) => {
//       alert(error);
//       console.log(error.code);
//       console.log(error.message);
//       // ..
//     });
// };

// function createPic(uid) {
//   if (file) {
//     // const userRef = storage.child("users/user1/" + file.name);
//     const userRef = ref(storage, "users");
//     const uidRef = ref(userRef, uid);
//     const user1Ref = ref(uidRef, "user1.png");

//     uploadBytes(user1Ref, file)
//       .then(() => {
//         console.log("Upload");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//  }
//}#endregion

//Log in with GOOGLE
const provider = new GoogleAuthProvider();
var uid;
window.logInGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      uid = result.user.uid;
      
      // Save email and uid to localStorage
      localStorage.setItem("email", email);
      localStorage.setItem("uid", uid);
      localStorage.setItem("urldown", downloadURL);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

//LogIn function
window.logIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);

  // Firebase code
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      // Signed in
      const user = result.user;
      uid = result.user.uid;
      
      
      // Save email and uid to localStorage
      localStorage.setItem("email", email);
      localStorage.setItem("uid", uid);
      

      console.log(uid);
      console.log(localStorage)
      window.location.href = "mainpage.html";
    }) 
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
  //   });#endregion
});
}
// Put a img in the folder of the user
// let file = null;
// const fileInput = document.getElementById("choose-file");
// fileInput.addEventListener("change", async (event) => {
//   file = event.target.files[0];
// });

// window.profilePhoto = async function () {
//   if (file) {
//     const userRef = storage.child("users/user1/" + file.name);

//     await userRef.put(file);
//     const downloadURL = await userRef.getDownloadURL();
//     console.log("URL:", downloadURL);
//   }
// };

//#region SERVICE WORKER

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((registration) => {
      console.log("Service Worker Registered!");
      console.log(registration);
    })
    .catch((error) => {
      console.log("SW registration failed!");
      console.log(error);
    });
}

//#endregion

