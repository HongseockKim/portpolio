const http = require('http');
const fs = require('fs');
const express = require('express')//모듈 가져옴
const bodyParser = require('body-parser');//바디 파서
const hbs = require("express-handlebars");//핸든발 불러옴;
const path = require('path');//패스 조인
const { pathToFileURL } = require('url');
const app = express()//앱 을 만듬
const port = 4000//포트를 설정함
// const words = require("./db/words.json");

// console.log(words);


app.use('/reset',express.static(__dirname + '/scss/reset.css'));
app.use('/scss',express.static(__dirname + '/scss/index_2.css'));
app.use('/jquery',express.static(__dirname + '/node_modules/jquery/dist/jquery.min.js'));
app.use('/login',express.static(__dirname + '/js/login.js'));
app.use('/img',express.static(__dirname + '/img/'));

app.use(bodyParser.urlencoded({extends:false}));//바디파서

app.engine('hbs',hbs({
        extname : "hbs",
        defaultLayout : "layout.hbs",
        partialsDir  : path.join(__dirname,'views/partials'),
    }));

app.set("view engine","hbs");


app.get("/",function(req,res){
    res.status(200).render('login',{
        title : "이것은 타이틀",
        logout : "로그아웃",
        logoin : "로그인",
        ifReady : false,
        isLoggedIn:true,
        users :['one','two','three'],
    });
});


app.post('/loginssss',(req,res)=>{
    console.log(req.body);
    console.log(req.body.user_id);
    console.log(req.body.user_pw);
})


app.get("/register",function(req,res){
    res.status(200).render('register',{
        words : words,
    });
});









app.listen(port, () => console.log(`Example app listening on port ${port}!`))// 앱실행
