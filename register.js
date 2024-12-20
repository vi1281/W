// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Your web app's Firebase configuration
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

// Form submission logic
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      console.log("User registered:", user);
      alert("User registered successfully!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error:", errorCode, errorMessage);
      alert(`Error: ${errorMessage}`);
    });
});
