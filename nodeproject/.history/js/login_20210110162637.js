const logInbtn = document.getElementById('login_btn');

function logins() {
    const idValue = document.getElementById('login').value;
    console.log(idValue);
}

logInbtn.addEventListener('click',() => {
    logins();
});