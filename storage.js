export function saveUser(user){
    localStorage.setItem("users", JSON.stringify(user));
}

export function getUser(){
   return JSON.parse(localStorage.getItem("users")) || [];
}

export function setCurrentUser(email){
    localStorage.setItem("currentUser", email);
}

export function getCurrentUser(){
    return localStorage.getItem("currentUser");
}
