const express = require('express')//모듈 가져옴
const app = express()//앱 을 만듬
const port = 4000//포트를 설정함

app.get('/',function(req,res){//헤더
    //__dirname 은  현재 index.js 파일 경로
    res.sendFile(__dirname + '/viewr/index.html');
});

app.get('/main_page',function(req,res){
    //주소창에 http://localhost:4000/main_page 이거면 이파일
    res.sendFile(__dirname + '/viewr/main_page.html')
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))// 앱실행
