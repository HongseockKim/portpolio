document.addEventListener("DOMContentLoaded",() =>{
    logins();
    registerEvent();
})
function logins() {
    const logInbtn = document.getElementById('login_btn');
    

    logInbtn.addEventListener('click',() => {
        const idValue = document.getElementById('login').value;
        const passwordValue = document.getElementById('passwrord').value;
       location.href="/main";
    });
}
function registerEvent(){
    const registerBtn = document.getElementById('register_btn');
    registerBtn.addEventListener('click',() =>{
        window.location.href ="/register"
    });
}



