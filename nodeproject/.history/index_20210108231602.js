const express = require('express')//모듈 가져옴
const app = express()//앱 을 만듬
const port = 4000//포트를 설정함
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gusduswk11:<akgusfl8-892>@myclust.vplwd.mongodb.net/<dbname>?retryWrites=true&w=majority',{//문구스 연결
    useNewUrlParser : true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(() => console.log('mongoDb Conneted')).catch(err => console.log(err))


app.get('/',(req, res) => res.send('hellow sibal')) //출력

app.listen(port, () => console.log(`Example app listening on port ${port}!`))// 앱실행