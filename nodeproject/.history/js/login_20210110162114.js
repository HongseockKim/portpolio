const logins;

logins = function (){
    const id = document.getElementById('login').nodeValue;
    console.log(id);
}
document.getElementById('login_btn').addEventListener('click',function(){
    logins();
});