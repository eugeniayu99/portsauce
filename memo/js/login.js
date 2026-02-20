const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#inputName");
const greeting = document.querySelector("#greeting");
const loginPop = document.querySelector("#pop");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginPop.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `환영합니다 ${username} 님.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginPop.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreeting(savedUsername);
}