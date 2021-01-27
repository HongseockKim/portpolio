document.addEventListener("DOMContentLoaded",() =>{
    logins();
})
function logins() {
    const logInbtn = document.getElementById('login_btn');

    function loginValues() {
        const idValue = document.getElementById('login').value;
        console.log(idValue);
    }
    logInbtn.addEventListener('click',() => {
        loginValues();
    });
}


