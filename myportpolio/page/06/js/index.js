$(document).ready(function(){
    var liCount = $('#converse_community_wrap>.inner>ul>li').length;
    var conRow = Math.floor(liCount / 4);
    var MaxHeight = conRow * $('#converse_community_wrap>.inner>ul>li').outerHeight();
    var floor = Math.floor(liCount / 8);
    var con = 1;
    $('#converse_community_wrap>.inner>a').on('click',function(e){
        e.preventDefault();
        if($('#converse_community_wrap>.inner>ul').outerHeight(true) < MaxHeight){
            con = con + 1;
            if(con <= floor){
                var newHeight = $('#converse_community_wrap>.inner>ul').outerHeight(true) + 675;
                con = con;
            }else{
                newHeight = $('#converse_community_wrap>.inner>ul').outerHeight(true) + 345;
            }
        }else{
            $(this).css({'display':'none'});
        }
        $('#converse_community_wrap>.inner>ul').css({'height':newHeight+'px'});  
    });
    
    setInterval(function(){
        ranDomImage();
    },800);
    function ranDomImage(){
        var ranDom = Math.floor(Math.random() * liCount);
        var ranDoms = Math.floor(Math.random() * liCount);
            if(ranDom !== ranDoms || ranDoms <=liCount){
                console.log(ranDom + '/' + ranDoms);
                $('#converse_community_wrap>.inner>ul>li').eq(ranDom).find('img:not(img.dummy)').attr('src','img/review/'+(ranDoms+1)+'.jpg');
                $('#converse_community_wrap>.inner>ul>li').eq(ranDoms).find('img:not(img.dummy)').attr('src','img/review/'+(ranDom+2)+'.jpg');
                
            } 
    }
    
    var slideCount = $('#header_top .marketting_wrap>.text_slider_wrap>.text_slider_con>.text_slider>li').length;
    var slideNow = 0;
    var slideNext = 0;
    var slidePrev = 0;
    var slideFirst =1;
    var timerId = undefined;
    var timerOn = true;
    var duration = 2500;
    
    slideMove(slideFirst,'chage');
    
    $('#header_top .marketting_wrap>.text_slider_wrap >.btn_con>a.next').on('click',function(e){
        e.preventDefault();
        slideMove(slideNext,'next')
    });
    $('#header_top .marketting_wrap>.text_slider_wrap >.btn_con>a.prev').on('click',function(e){
        e.preventDefault();
        slideMove(slidePrev,'prev')
    });
    $('#header_top .marketting_wrap>.text_slider_wrap>.text_slider_con>.text_slider>li').on('mouseenter', function(){
        timerOn = false;
        clearTimeout(timerId);
    });
    $('#header_top .marketting_wrap>.text_slider_wrap>.text_slider_con>.text_slider>li').on('mouseleave',function(){
        timerOn = true;
        if(timerOn === true){
            timerId = setTimeout(function(){slideMove(slideNext,'next')},duration);
        }
    });
    function slideMove(n,direction){
        clearTimeout(timerId);
        if(direction === 'chage'){
            reset(n);
        }else{
            var leftMove = 0;
            if(direction === 'next'){
                leftMove = -100;
            }else if(direction === 'prev'){
                leftMove = 100;
            }else{
                leftMove = 0;
            }
            $('#header_top .marketting_wrap>.text_slider_wrap>.text_slider_con>.text_slider').css({'transition':'all 0.6s','left':leftMove+'%'}).one('transitionend',function(){
                reset(n);
            });
        }
        if(timerOn === true){
            timerId = setTimeout(function(){slideMove(slideNext,'next')},duration);
        }
    }
    function reset(n){
    slideNow = n;
    slidePrev = (n <= 1) ? slideCount : (n - 1);
    slideNext = (n >= slideCount) ? 1 : (n + 1);
        $('#header_top .marketting_wrap>.text_slider_wrap>.text_slider_con>.text_slider>li').css({'display':'none'});
        $('#header_top .marketting_wrap>.text_slider_wrap>.text_slider_con>.text_slider').css({'transition':'none','left':0});
        $('#header_top .marketting_wrap>.text_slider_wrap>.text_slider_con>.text_slider>li').eq(slidePrev-1).css({ 'display':'block','left':-100+'%'});
        $('#header_top .marketting_wrap>.text_slider_wrap>.text_slider_con>.text_slider>li').eq(slideNow-1).css({'display':'block','left':0+'%'});
        $('#header_top .marketting_wrap>.text_slider_wrap>.text_slider_con>.text_slider>li').eq(slideNext-1).css({'display':'block','left':100+'%'});
        
    }
});