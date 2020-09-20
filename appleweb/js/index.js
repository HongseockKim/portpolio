(() => {
    var yOffset = 0;//window.pageYoffset 대신 쓸 변수
    var prevScrolheight = 0;//현재 스크롤 위치(Yoffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합;
    var currentScene =0; //현재 활성화된(눈 앞에 보고 있는) scroll-section
    var enterNewScene = false;//새로운 scene이 시작된 순간 true;
    var scenInfo = [
        {//스크롤높이 구간
        // 0
            type: 'sticky',
            heightNum: 5,//브라우저 높이의 5배로 scrollHeight 세팅
            //각 사용자 마다 브라우저 창이 틀리기 때문에
            scrollHeight:0,
            objs:{
                container:document.querySelector('#scroll_1'),
                messageA: document.querySelector('#scroll_1 .main_message.a'),
                messageB: document.querySelector('#scroll_1 .main_message.b'),
                messageC: document.querySelector('#scroll_1 .main_message.c'),
                messageD: document.querySelector('#scroll_1 .main_message.d')
            },
            values:{
                messageA_opacity:[0,1]
            }
        },
        {//1
            type:'normal',
            heightNum: 5,
            scrollHeight:0,
            objs:{
                container:document.querySelector('#scroll_2')
            }
        },
        {//2
            type: 'sticky',
            heightNum: 5,
            scrollHeight:0,
            objs:{
                container:document.querySelector('#scroll_3')
            }
        },
        {//3
            type: 'sticky',
            heightNum: 5,
            scrollHeight:0,
            objs:{
                container:document.querySelector('#scroll_4')
            }
        }
    ];
    console.log(scenInfo);

    function setLayout(){
        //각 스크롤 섹션의 높이 세팅
        for(let i=0; i < scenInfo.length; i++){
            scenInfo[i].scrollHeight = scenInfo[i].heightNum * window.innerHeight;
            scenInfo[i].objs.container.style.height = `${scenInfo[i].scrollHeight}px`;
        }
        console.log(scenInfo);
        //현재보고있는 섹션 인식 새로고침해도 인식
        var yOffset = window.pageYOffset;
        var totalScrollhegiht = 0;
        for (var i = 0; i < scenInfo.length;i++){
            totalScrollhegiht = totalScrollhegiht + scenInfo[i].scrollHeight;
            if(totalScrollhegiht >= yOffset){
                currentScene = i;
                break;
            }
            document.body.setAttribute('id',`show_scen_${currentScene}`);
        }
    }

    function playAnimation(){
        switch (currentScene){
            case 0:
                console.log('0 play');
                break;
            case 1:
                console.log('1 play');
                break;
            case 2:
                console.log('2 play');
                break;
            case 3:
                console.log('3 play');
                break;
        }
    }

    function scrollLoop(){
        enterNewScene = false;
        prevScrolheight = 0;
        for(var i = 0; i < currentScene; i++){
            prevScrolheight = prevScrolheight + scenInfo[i].scrollHeight;
        }
        if(yOffset > prevScrolheight + scenInfo[currentScene].scrollHeight){
            currentScene++;
        }
        if(yOffset < prevScrolheight){
            if(currentScene === 0) return;//브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
            currentScene--;
        }
        document.body.setAttribute('id',`show_scen_${currentScene}`);
        console.log(currentScene);
        playAnimation();
    }

    window.addEventListener('scroll',function(){
        yOffset = window.pageYOffset;/*console.log(window.pageYOffset);*/
        scrollLoop();
    });
    window.addEventListener('resize',function(){
        setLayout();//리사이즈 될때도 적용
    });
    window.addEventListener('DOMContentLoaded',function(){
        setLayout();
    });//도큐멘트가 로드 되면 실행
    window.addEventListener('load',function(){
        setLayout();//리사이즈 아니고 바로 실행했을때 디폴트 적용!
    });//윈도우가 로드 되면 실행

})();//화살표 함수 바로 실행됨