$(document).ready(function(){
var wind =$(window),
    header = $('.header_wrapper'),
    headerInner = header.children('.header_wrap'),
    windWidth = wind.innerWidth(),
    thsehold = header.outerHeight(),
    lnbs = $('.lnb');
            wind.scroll(function(){
           if($(this).scrollTop() > thsehold){
                header.css({position:'fixed',zIndex:70});
                    headerInner.css({background:'#940a37'});
                    headerInner.find('a').css({color:'#fff'});
                    lnbs.css({background:'#940a37'});
              }else{
              header.css({position:'static',zIndex:70});
                headerInner.css({background:'#D93232'});
                headerInner.find('a').css({color:'#fff'});
                lnbs.css({background:'#D93232'});
              } 
            });
    /*//header*/
    /*lnb*/
    var Btn = $('.menu_btn'),
        Nav = $('.lnb');
    
    Btn.click(function(){
        Nav.toggleClass('open');
        if(Nav.hasClass('open')){
            Nav.stop().animate({right:'0'},350);
           }else{
               Nav.stop().animate({right:'-99'+'em'},350);
           }
    });
    
    /*slider*/
    var container = $('.slide_wrap'),
        slideGroup = container.children('ul'),
        slides = slideGroup.children('li'),
        indicator = container.find('.indicater'),
        indicatorHtml ='',
        currentIndex = 0,
        duration = 500,
        interval = 3500,
        timer='';
    
    /*슬라이드 가로배열*/
    slides.each(function(i){
        var newleft = i * 100+'%';
        $(this).css({left:newleft});
        indicatorHtml += "<a href = ''>"+(i+1)+"</a>";    
    });

    /*인디케이터 넣기*/
    indicator.html(indicatorHtml);
    /*슬라이드 이동*/
    function goToslide(idx){
        var leftMovie = idx * -100 + '%';
        slideGroup.stop().animate({left:leftMovie},duration);
        currentIndex=idx;
        indicator.find('a').removeClass('on');
        indicator.find('a').eq(currentIndex).addClass('on');
    }
    goToslide(0);
    /*인디케이터이동*/
    indicator.find('a').click(function(e){
        e.preventDefault();
        var index = $(this).index();
        goToslide(index);
    });
    /*자동슬라이드*/
    function startTimer(){
        timer = setInterval(function(){
           var nextIndex =(currentIndex + 1) % slides.length;
            goToslide(nextIndex);
        },interval);
    }
    function stopTimer(){
            clearInterval(timer);
        }  
    startTimer();
    container.mouseenter(function(){
        stopTimer();
    }).mouseleave(function(){
        startTimer();
    });
});
$('menu_btn').on('click', function(){
	$('.lnb').addClass('open');
})

