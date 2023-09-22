import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyC8j70PG1I5RhUufMbdJufTx9GaZVV_3zg",
    authDomain: "edu-web-4aee9.firebaseapp.com",
    projectId: "edu-web-4aee9",
    storageBucket: "edu-web-4aee9.appspot.com",
    messagingSenderId: "249139225561",
    appId: "1:249139225561:web:9456af870ddf3a48d7efc8"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

 

var email = document.getElementById("email");
var password = document.getElementById("password");
var name = document.getElementById("username");
// var signup = document.getElementById("sgnup");
var repass = document.getElementById("repass");

window.signup = function(e){
    e.preventDefault();
    var obj = {
        email: email.value,
        password: password.value,
        name: name.value,
        repass: repass.value,
        // signup: signup.value
    };

createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(userCredential){
        const user = userCredential.user;
        alert("Sign Up Successful");
        sendEmailVerification(auth.currentUser)
            .then(function(){
                alert("Verification Email Sent");
                // window.location.href = "login.html";
            })
            .catch(function(error){
                alert("Error..."+error.message);
            });
    })
    .catch(function(error){
        alert("Error..."+error.message);
    });

console.log(obj)
};
