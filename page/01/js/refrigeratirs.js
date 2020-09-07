$(document).ready(function(){
bannerSlide();
stiker();
moreBtn();
});
function bannerSlide(){
    var slideNow =0;
    var slidePrev= 0;
    var slideNext =0;
    var slidCount = $('#smeg_review ul li').length;
    var sliderWidth = $('#smeg_review ul.slider').css({'width': $('#smeg_review ul li').outerWidth() * slidCount});
    bannerSlide(1);
    $('#smeg_review .btn_con .prev').on('click', function(e) {
        e.preventDefault();
       bannerSlide(slidePrev); 
    });
    $('#smeg_review .btn_con .next').on('click', function(e) {
        e.preventDefault();
        bannerSlide(slideNext); 
    });
    function bannerSlide(n) {
        $('#smeg_review ul.slider').css({'left':-(n - 1) * 100+'%'});
        slideNow =n;
        slidePrev = (n <= 1) ? 1 : (n -1);
        slideNext = (n >= slidCount) ? slidCount : (n + 1);
        if(n <=1) {
            $('#smeg_review .btn_con .prev').addClass('prevent');
        }else{
            $('#smeg_review .btn_con .prev').removeClass('prevent');
        }
        if(n >=slidCount) {
            $('#smeg_review .btn_con .next').addClass('prevent');
        }else{
            $('#smeg_review .btn_con .next').removeClass('prevent');
        }
    }
}
function stiker(){
    $('.list li.new a').append('<div class="circle_line"><i class="circle">NEW</i></div>').addClass('one');
    $('.list li.sold_out a').append('<div class="sold_out"><div class="con"><span>sold out</span></div></div>');   
    $('.list li.reserva a').append('<div class="reserva"><span>예약</span></div>');   
}
function moreBtn(){
    var lists = $('ul.list li:nth-child(9)~li').length;
    var line = Math.ceil(lists / 4);
    var maxHeight = line * 400 + $('ul.list').outerHeight();
    var height = 0;
    var count =0;
    var floors = 8;
    var liCount = lists/floors;
    console.log(maxHeight);
    $('body.all #refrigerator_list .inner .more a').on('click', function(e){
        e.preventDefault();
        count = count+ 1;
        if($('ul.list').outerHeight() < maxHeight){
            if(count <= liCount){
                height = $('ul.list').outerHeight() +  800+'px';
                console.log(height);
            } else {
                height = $('ul.list').outerHeight() +  400+'px';
                $('.more').css({'display':'none'});
            }
            $('ul.list').css({'height' : height});
            console.log($('ul.list').outerHeight());
        } else{
            return false;
        }
    });
}
