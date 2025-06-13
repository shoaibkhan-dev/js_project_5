import { handleAuth } from "./auth.js";

document.getElementById("authForm").addEventListener("submit", function (e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();


    if (name && email && password){
        handleAuth(name, email, password);
    } else {
        alert("please fill all fields.");
    }
});