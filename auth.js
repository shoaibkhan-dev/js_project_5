import { getUsers, saveUser, setCurrentUser}  from './storage';

export function handleAuth(name, email, password){
    const users = getUsers();
    const existingUser = users.find(user => user.email === email);

    if(existingUser){
        if(existingUser.password === password){
            alert("login successful!");
            setCurrentUser(email);
            window.location.href = "dashboard.html";
        } else {
            alert("incorrect password")
        }
    } else {
        users.push({name, email, password});
        saveUser(users);
        setCurrentUser(email);
        alert("registered and logged in successfully!");
        window.location.href = "dashboard.html";
    }
}