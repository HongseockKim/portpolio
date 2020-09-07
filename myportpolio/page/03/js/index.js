$(document).ready(function () {
    portal();
    infoWrap();
    slide();
    function portal() {
        $('.slider_wrapper .slide').each(function (i) {
            var left = i * 100 + '%';
            $(this).css({
                left: left
            });
        });

        $('.portal_wrap > div a').on('click', function(e) {
            e.preventDefault();
            $('.portal_wrap > div').removeClass('active');
            $(this).parent('div').addClass('active');
            var curentIndex = $(this).parent('div').index();
            console.log($('.slider_wrapper .slider_con section.slide'));
            if(curentIndex === 1){
                $('.slider_wrapper .slider_con').stop().animate({
                    left: -100 + '%'
                }, 500);
            } else{
                $('.slider_wrapper .slider_con').stop().animate({
                    left: 0
                }, 500);
            }
        });
    }
    function infoWrap() {
            $('#info_wrap .tab_con .btn_wrap li').not('li.more').on('click',function(e){
            e.preventDefault();
            var i = $(this).index();
            console.log(i);
            $('#info_wrap .tab_con .tab').css({
                display: 'none'
            });
            $('#info_wrap .tab_con .btn_wrap li').not('li.more').removeClass('click');
                $('#info_wrap .tab_con .tab').removeClass('tabs');
                $('#info_wrap .tab_con .tab').eq(i).css({display:'block'});
            $('#info_wrap .tab_con .btn_wrap li').not('li.more').eq(i).addClass('click');
        });
    }
    function slide() {
        var slideCount = $('#info_wrap .slider li').length;
        var slideNow = 0;
        var slidePrev = 0;
        var slidenext = 0;
        var slideFirst = 1;
        var timerId = '';
        var isTimerOn = true;
        var timerSpeed = 2500;
        preventDefaultAnchor();

        function preventDefaultAnchor() {
            $(document).on('click', 'a[href="#"]', function (e) {
                e.preventDefault();
            });
        }
        if (isTimerOn === true) {
            $('.slider_con .indi_con').find('.off i').attr('class', 'fa fa-pause');
        } else {
            $('.slider_con .indi_con').find('.off i').attr('class', 'fa fa-play');
        }
        showSlide(slideFirst, 'change');
        $('#info_wrap .indi_con .prev').on('click', function (e) {
            e.preventDefault();
            showSlide(slidePrev, 'prev');
        });

        $('.right_con .slider_con .indi_con .off').on('click', function (e) {
            e.preventDefault();
            if (isTimerOn === true) {
                clearTimeout(timerId);
                $(this).children('i').attr('class', 'fa fa-play');
                isTimerOn = false;
            } else {
                timerId = setTimeout(function () {
                    showSlide(slidenext, 'next');
                }, timerSpeed);
                $(this).children('i').attr('class', 'fa fa-pause');
                isTimerOn = true;
            }
        });
        $('#info_wrap .slider_con .indi_con .next').on('click', function (e) {
            e.preventDefault();
            showSlide(slidenext, 'next');
        });
        console.log($('.slider_con .slider'));
      


        function showSlide(n, direction) {
            clearTimeout(timerId);
            if (direction === 'change') {
                resetSlide(n);
            } else {
                var offsetleft = 0;
                if (direction === 'prev') {
                    offsetleft = 100;
                } else if (direction === 'next') {
                    offsetleft = -100;
                } else {
                    offsetleft = 0;
                }
                $('#info_wrap .slider').css({
                    'transition': 'left 0.6s',
                    'left': offsetleft + '%'
                }).one('transitionend', function () {
                    resetSlide(n);
                });
            }
            if (isTimerOn === true) {
                timerId = setTimeout(function () {
                    showSlide(slidenext, 'next');
                }, timerSpeed);
            }
        }
        /*리셋 함수*/
        function resetSlide(n) {
            slideNow = n;
            slidePrev = (n <= 1) ? slideCount : (n - 1);
            slidenext = (n >= slideCount) ? 1 : (n + 1);
            $('#info_wrap .slider').css({
                'transition': 'none',
                'left': 0
            });
            $('#info_wrap .slider li').css({
                'left': 0,
                'display': 'none'
            });
            $('#info_wrap .slider li:eq(' + (slideNow - 1) + ')').css({
                'left': 0,
                'display': 'block'
            });
            $('#info_wrap .slider li:eq(' + (slidePrev - 1) + ')').css({
                'left': -100 + '%',
                'display': 'block'
            });
            $('#info_wrap .slider li:eq(' + (slidenext - 1) + ')').css({
                'left': 100 + '%',
                'display': 'block'
            });
        }
    }
});
