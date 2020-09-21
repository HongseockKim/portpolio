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
                messageA_opacity_in: [0,1, {start: 0.1, end : 0.2}],
                messageB_opacity_in: [0,1, {start: 0.3, end : 0.4}],
                messageA_translateY_in:[20, 0,{start:0.1, end: 0.2}],

                messageA_opacity_out: [1,0, {start: 0.25, end : 0.3}],
                messageA_translateY_out:[0, -20,{start:0.25, end: 0.3}],
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
        }
        document.body.setAttribute('id',`show_scen_${currentScene}`);
    }
    function calcValues(values,currentYoffset){
        var rv=null;
        //현재 씬(스크롤섹션) 에서 스크롤된 범위를 비율로 구하기
        var scrollHeight = scenInfo[currentScene].scrollHeight;
        var scrollRatio = currentYoffset / scrollHeight;
        if(values.length === 3){
            //start ~ end 사이에 애니메이션 실행
            var partScrollStart = values[2].start * scrollHeight;
            var partScrollEnd = values[2].end * scrollHeight;
            var partScrollHeight = partScrollEnd - partScrollStart;
            if(currentYoffset >= partScrollStart && currentYoffset <= partScrollEnd){
                rv = (currentYoffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
            } else if(currentYoffset < partScrollStart) {
                rv = values[0];
            }else if(currentYoffset > partScrollEnd){
                rv = values[1];
            }
        } else{
            rv = scrollRatio * (values[1] - values[0]) + values[0];
        }
        return rv;
    }
    function playAnimation(){
        var objs = scenInfo[currentScene].objs;
        var values = scenInfo[currentScene].values;
        var currentYoffset = yOffset - prevScrolheight;
        var scrollHeight = scenInfo[currentScene].scrollHeight;
        var scrollRatio = (yOffset - prevScrolheight) / scrollHeight;
        // console.log(currentScene,currentYoffset);
        switch (currentScene){
            case 0:
                //console.log('0 play');
                var messageA_opacity_in = calcValues(values.messageA_opacity_in, currentYoffset);
                var messageA_opacity_out = calcValues(values.messageA_opacity_out, currentYoffset);
                var messageA_translateY_in = calcValues(values.messageA_translateY_in, currentYoffset);
                var messageA_translateY_out = calcValues(values.messageA_translateY_out, currentYoffset);
                
                if(scrollRatio <= 0.22) {
                    //in
                    objs.messageA.style.opacity = messageA_opacity_in;
                    objs.messageA.style.transform = `translateY(${messageA_translateY_in}%)`;
                } else {
                    //out
                    objs.messageA.style.opacity = messageA_opacity_out;
                    objs.messageA.style.transform = `translateY(${messageA_translateY_out}%)`;
                }
                console.log(messageA_opacity_in);
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
            enterNewScene = true;
            currentScene++;
            document.body.setAttribute('id',`show_scen_${currentScene}`);
        }
        if(yOffset < prevScrolheight){
            enterNewScene= true;
            if(currentScene === 0) return;//브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
            currentScene--;
            document.body.setAttribute('id',`show_scen_${currentScene}`);
        }
        //console.log(currentScene);
        if(enterNewScene) return;
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