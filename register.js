/* Here The Script For The Login Page Database */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB4ll9coIGqle-zOiQEiE1rPwPq95NDuE",
  authDomain: "fitter-critters.firebaseapp.com",
  projectId: "fitter-critters",
  storageBucket: "fitter-critters.appspot.com",
  messagingSenderId: "517864958606",
  appId: "1:517864958606:web:6604e725fb95fb5baa77df",
  measurementId: "G-T0K2M2RDJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

// Login Butttons
const login_submit = document.getElementById('login_submit');
login_submit.addEventListener("click", function (event) {
    event.preventDefault()
    alert(5)

    // Inputs
    const email = document.getElementById('login_email').value;
    const password = document.getElementById('login_password').value;

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Signing In...")
    window.location.href = "closet.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})

// Sign Up Button
const signup_submit = document.getElementById('signup_submit');
signup_submit.addEventListener("click", function (event) {
    event.preventDefault()

    // Inputs
    const email = document.getElementById('signup_email').value;
    const password = document.getElementById('signup_password').value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Acount...")
    window.location.href = "closet.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})