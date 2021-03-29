const http = require('http');
const fs = require('fs');
const express = require('express')//모듈 가져옴
const bodyParser = require('body-parser');//바디 파서
const hbs = require("express-handlebars");//핸든발 불러옴;
const moment = require("moment");//날짜 모듈;
const path = require('path');//패스 조인
const { pathToFileURL } = require('url');
const app = express()//앱 을 만듬
const port = 4000//포트를 설정함
// const words = require("./db/words.json");
var date1 = moment();
console.log(date1.format());

// console.log(words);


app.use('/reset',express.static(__dirname + '/scss/reset.css'));
app.use('/scss',express.static(__dirname + '/scss/css/index.css'));
app.use('/jquery',express.static(__dirname + '/node_modules/jquery/dist/jquery.min.js'));
app.use('/video_css',express.static(__dirname + '/node_modules/video.js/dist/video-js.min.css'));
app.use('/video',express.static(__dirname + '/node_modules/video.js/dist/video.min.js'));
app.use('/moment',express.static(__dirname + '/node_modules/moment/moment.js'));
app.use('/datepicker',express.static(__dirname + '/node_modules/@chenfengyuan/datepicker/dist/datepicker.min.js'));
app.use('/datepicker_css',express.static(__dirname + '/node_modules/@chenfengyuan/datepicker/dist/datepicker.css'));
app.use('/datepicker_ko',express.static(__dirname + '/node_modules/@chenfengyuan/datepicker/i18n/datepicker.ko-KR.js'));

app.use('/threemodule_js',express.static(__dirname + '/node_modules/three/build/three.module.js'));
app.use('/three_js',express.static(__dirname + '/node_modules/three/build/three.min.js'));
app.use('/panolens_js',express.static(__dirname + '/node_modules/panolens/build/panolens.js'));

app.use('/aframe_js',express.static(__dirname + '/node_modules/aframe/dist/aframe.min.js'));
app.use('/marzipano_js',express.static(__dirname + '/node_modules/marzipano/dist/marzipano.js'));
app.use('/login',express.static(__dirname + '/js/login.js'));
app.use('/common',express.static(__dirname + '/js/common.js'));
app.use('/video_js',express.static(__dirname + '/js/video_js.js'));
app.use('/ui_js',express.static(__dirname + '/js/ui.js'));
app.use('/vr_js',express.static(__dirname + '/js/vr.js'));
app.use('/image_map_js',express.static(__dirname + '/js/jquery.rwdImageMaps.min.js'));
app.use('/img',express.static(__dirname + '/img/'));

app.use(bodyParser.urlencoded({extends:false}));//바디파서

app.engine('hbs',hbs({
        extname : "hbs",
        defaultLayout : "layout.hbs",
        partialsDir  : path.join(__dirname,'views/partials'),
    }));

app.set("view engine","hbs");
//hbs 디폴트로 views 폴더를 찾는다
//views 이름을 바꾸려면
//app.set('views',바꿀이름) 를 넣어줘야 한다


app.get("/",function(req,res){
    res.status(200).render('login',{
        title : "이것은 타이틀",
        logout : "로그아웃",
        logoin : "로그인",
        ifReady : false,
        isLoggedIn:true,
        users :['one','two','three'],
        layout:'common.hbs',
        logins  : true,
    });
});


app.post('/loginssss',(req,res)=>{
    console.log(req.body);
    console.log(req.body.user_id);
    console.log(req.body.user_pw);
})


app.get("/register",function(req,res){
    res.status(200).render('register',{
        layout:'common.hbs',
        common : true,

    });
});
app.get("/main",function(req,res){
    res.status(200).render('main',{
        main_2 : false,
        layout:'main.hbs',
        common : true,
        title : "메인페이지",
        ifnum : true,
        Time :date1
    });
});
app.get("/main_2",function(req,res){
    res.status(200).render('main_w',{
        image_map : true,
        main_2 : true,
        layout:'common.hbs',
        common : true,
        title : "메인페이지",
        ifnum : true,
        Time :date1
    });
});


app.get("/m_main",function(req,res){
    res.status(200).render('m_main',{
        main_2 : true,
        layout:'common.hbs',
        common : true,
        title : "버츄얼테스트",
    });
});

app.get("/live",function(req,res){
    res.status(200).render('live',{
        layout:'common.hbs',
        title : "라이브",
        common : true,
        live : true,
    });
});

app.get('/vr',function(req,res){
	res.status(200).render('vr',{
        layout:'vrcommon.hbs',
        vr : true,
	});
});







app.listen(port, () => console.log(`Example app listening on port ${port}!`))// 앱실행
