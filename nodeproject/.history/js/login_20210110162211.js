const logInbtn = document.getElementById('login_btn');
const logins = function (){
    const id = document.getElementById('login').nodeValue;
    console.log(id);
}
logInbtn.addEventListener('click',function(){
    logins();
});