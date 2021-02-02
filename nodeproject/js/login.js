document.addEventListener("DOMContentLoaded",() =>{
    logins();
    registerEvent();
})
function logins() {
    const logInbtn = document.getElementById('login_btn');
    

    logInbtn.addEventListener('click',() => {
        const idValue = document.getElementById('login').value;
        const passwordValue = document.getElementById('passwrord').value;
        console.log('접속');
        var filter = "win16|win32|win64|mac|macintel"; 
        if ( navigator.platform ) { 
            if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) { 
                console.log('모바일');
                location.href="/m_main";
            } else { 
                console.log('피시');
                location.href="/main";
            } 
         }

    });
}
function registerEvent(){
    const registerBtn = document.getElementById('register_btn');
    registerBtn.addEventListener('click',() =>{
        window.location.href ="/register"
    });
}



