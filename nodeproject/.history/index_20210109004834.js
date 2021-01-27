const express = require('express')//모듈 가져옴
const app = express()//앱 을 만듬
const port = 4000//포트를 설정함
app.use()



app.get('/',function(req,res){//헤더
    fs.readdir('./data',function(error,filelist){
        var title = "wecome";
        var description = 'hellow, Node.js';
        var html = template.HTML(title,
            `<h2>${title}</h2>`,
            `<a href="#">sss</a>`
            );
            res.writeHead(200);
            res.end(html);
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))// 앱실행
