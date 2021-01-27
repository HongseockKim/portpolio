const express = require('express')//모듈 가져옴
const app = express()//앱 을 만듬
const port = 4000//포트를 설정함

app.get('/',function(req,res){//헤더
    
    res.sendFile('__dirname/index.html');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))// 앱실행
