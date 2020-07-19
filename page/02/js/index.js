$(document).ready(function(){
fadeSlides();
});
function fadeSlides(){
        var index = 0;
        var duration= 1000;
        var slideFirst= 1;

        fadeSldie(slideFirst);

        $('.bsiness_list li a').on('click', function(e) {
            e.preventDefault();
            var idx = $('.bsiness_list li').index($(this).parent());
            $('.bsiness_list li').removeClass('on');
            $('.bsiness_list li:eq('+(idx)+')').addClass('on');
            fadeSldie(idx + 1);
        });
        function fadeSldie(n) {
            $('#buslnese_explan ul li').stop(true).animate({'opacity':0},duration,function() {$(this).css({'display':'none'});});
            $('#sub_slider .slider_con ul li').stop(true).animate({'opacity':0},duration,function() {$(this).css({'display':'none'});});
            $('#sub_slider .mask_wrap li').css({'display':'none'}).stop(true);
            
            
            $('#buslnese_explan ul li:eq('+(n - 1)+')').css({'display':'block'}).stop(true).animate({'opacity':1},duration);
            $('#sub_slider .mask_wrap li:eq('+(n - 1)+')').css({'display':'block'});
            $('#sub_slider .slider_con ul li:eq('+(n - 1)+')').css({'display':'block'}).stop(true).animate({'opacity':1},duration);
            
            $('.bsiness_list li').removeClass('on');
            $('.bsiness_list li:eq('+(n - 1)+')').addClass('on');
            index = n;
        }      
}/*sub_slide*/
