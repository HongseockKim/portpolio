$(document).ready(function(){
    var slide_wrap = $('.img_slide'),
        slideContainer= $('.slide'),
        slides = slideContainer.children('li'),
        slideCount = slides.length,
        currenIndex = 0;
    /*슬라이드 가로배열*/
    slides.each(function(i){
        var newleft = i * 100 + '%';
        $(this).css({left:newleft});
    });
    /*슬라이드이동*/
    function movingSlide(idx){
     var movies = idx * -100 + '%';
        slideContainer.stop().animate({left:movies},350,'easeInOutExpo');
        currenIndex = idx;
    }
    movingSlide(1);
    /*자동 슬라이드*/
    function Timers(){
        var setTime = setInterval(function(){
           var nextIndex = (currenIndex+1) % slideCount;
            movingSlide(nextIndex)
        },3500);
    }
    Timers();

    var bannerScale = $('.banner');
    
    function Timer(){
        setTimeout(function(){
           bannerScale.addClass('scale'); 
        },1000);
    }
    Timer();
});


