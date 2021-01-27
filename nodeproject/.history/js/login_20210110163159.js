document.addEventListener("DOMContentLoaded",() =>{
    logins();
})
function logins() {
    const logInbtn = document.getElementById('login_btn');

    logInbtn.addEventListener('click',() => {
        const idValue = document.getElementById('login').value;
        const passwordValue = document.getElementById('passwrord').value;
        console.log(idValue);
        console.log(passwordValue);
    });
}


