// Import Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD7wYR16lWYvHN6FlvZu9UpLzXW8dw5Mo",
  authDomain: "login-72844.firebaseapp.com",
  projectId: "login-72844",
  storageBucket: "login-72844.appspot.com",
  messagingSenderId: "856995387716",
  appId: "1:856995387716:web:00a49160d4a84e08c29f11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Add event listener for the submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // Get email and password values
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validate inputs
  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // Register the user with Firebase
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User successfully registered
      const user = userCredential.user;
      console.log("User registered:", user);
      alert("User registered successfully!");
    })
    .catch((error) => {
      // Handle errors
      console.error("Error:", error.code, error.message);
      alert(`Error: ${error.message}`);
    });
});
