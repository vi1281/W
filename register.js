
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDD7wYR16lWYvHN6FlvZu9UpLzXW8dw5Mo",
    authDomain: "login-72844.firebaseapp.com",
    projectId: "login-72844",
    storageBucket: "login-72844.firebasestorage.app",
    messagingSenderId: "856995387716",
    appId: "1:856995387716:web:00a49160d4a84e08c29f11"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
   
  const email = document.getElementById('email').value;
  const submit = document.getElementById('submit');
  submit.addEventListener("click", function(event){
    event.preventDefault()
    alert(5)
  })