$(function(){
    setImageSlide('#daelim_about',1,true,4000);
    function setImageSlide(selector,first, status, duration) {
        var slideCount = $(selector).find('.slider li').length;
        var slideNow = 0;
        var slidePrev = 0;
        var slideNext = 0;
        var slideFirst = first;
        var timerId = '',
            timerOn = status,
            speed = duration;
        $(selector).find('ul.indi_wrap li a').on('click', function(e) {
            e.preventDefault();
        var index = $(selector).find('ul.indi_wrap li').index($(this).parent());
            console.log(index);
        slideCore(index + 1);
    });
        if(timerOn === true) {
            $(selector).find('.control_wrap .btn_wrap li a').attr('class','play ir_pm');
        } else {
            $(selector).find('.control_wrap .btn_wrap li a').attr('class','stop ir_pm');
        }
        slideCore(slideFirst);

        $(selector).find('.control_wrap .btn_wrap li a').on('click', function(e) {
            e.preventDefault();
            if(timerOn === true) {
                clearTimeout(timerId);
                $(this).attr('class','stop ir_pm');
                timerOn = false;
            }else{
                timerId = setTimeout(function(){slideCore(slideNext);},speed);
                $(this).attr('class','play ir_pm');
                timerOn = true;
            }
        });
        function slideCore (n) {
            clearTimeout(timerId);
            $(selector).find('ul.slider li').removeClass('on');
            $(selector).find('ul.slider li').removeClass('show');
            $(selector).find('ul.slider li:eq('+(n - 1)+')').addClass('show');
            $(selector).find('ul.slider li').eq(n-2).addClass('on');
            $(selector).find('ul.indi_wrap li').removeClass('act');
            $(selector).find('ul.indi_wrap li:eq(' + (n - 1) + ')').addClass('act');
            slideNow=n;
            slidePrev = (n <= 1) ? slideCount : (n - 1);
            slideNext = (n >= slideCount) ? 1 : (n + 1);
            console.log(slidePrev + '/' + slideNow + '/' + slideNext);
            if( timerOn === true) {
                timerId = setTimeout(function() {slideCore(slideNext);},speed);
            }
        }    
    } 
});

