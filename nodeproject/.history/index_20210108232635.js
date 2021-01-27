const express = require('express')//모듈 가져옴
const app = express()//앱 을 만듬
const port = 4000//포트를 설정함



app.get('/',(req, res) => res.send('hellow sibal')) //출력

app.get('/',function(req,res){
    res.send('viewr/index.html');
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))// 앱실행
