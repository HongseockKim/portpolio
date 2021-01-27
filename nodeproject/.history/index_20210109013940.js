const express = require('express')//모듈 가져옴
const app = express()//앱 을 만듬
const port = 4000//포트를 설정함


//모든건 서버를 이 서버를 지나가기때문에 이 위에서 아래로 무조건
app.use((req,res, next) =>{
    console.log('클라이언트 요청');
    req.user = {
        id : "1234"
    };
    next();
    //user 아이디 1234  설정 다음으로~
});

app.get('/',function(req,res){//헤더

    console.log(req.user);

    //__dirname 은  현재 index.js 파일 경로
    res.sendFile(__dirname + '/viewr/index.html');
});

app.get('/main_page',function(req,res){
    //주소창에 http://localhost:4000/main_page 이거면 이파일
    res.sendFile(__dirname + '/viewr/main_page.html');
});

app.use((req,res)=>{
    res.sendFile(__dirname + '/viewr/404.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))// 앱실행
