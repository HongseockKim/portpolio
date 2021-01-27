const express = require('express')//모듈 가져옴
const fs = require('fs');
const app = express()//앱 을 만듬
const port = 4000//포트를 설정함

const makeFolder = (dir) =>{//폴더가 없으면 폴더를 만듬
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}
makeFolder('/viewr');

app.get('/',function(req,res){//헤더
    res.send('하이');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))// 앱실행
