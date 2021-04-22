
$(document).ready(function(){
    $('.wrapper .contnet #Portfolio_con .page_con_wrap .page_con .spage_list .grid-item a').attr('target','_blank');
    swiperSlide();
    pageGridlayoutEvent();
    imageHoverEvent();
});
function swiperSlide(){
    var slide = new Swiper('#swiper_slide_con',{
        slidesPerView : "auto",
        //spaceBetween : 3,
        grabCursor: true,
        loop:true,
        freeMode : true,
        autoplay :{
            delay : 3000,
            disableOnInteraction : false,
        }
    });
}
function pageGridlayoutEvent(){
    var gridItem = $('.grid');
    gridItem.imagesLoaded(function(){
        gridItem.masonry({
            itemSelector : '.grid-item',
            columnWidth: 350,
            gutter:25,
            horizontalOrder:true,
            fitwidth: true,
            percentPosition: true,
        });
    });
}
function imageHoverEvent(){
    var src = null;
    $('.wrapper .contnet #Portfolio_con .page_con_wrap .page_con .spage_list .grid-item img').on('click',function(){
        // $('.contentviewr').addClass('open');
       var idx = $(this).parents('li').index();
       var imagewrapHeight = $('.contentviewr').eq(idx).find('.img_wrap').height() - $('.contentviewr').eq(idx).find('.text_con').height();
       console.log(idx);
       console.log(imagewrapHeight);
       $(".contentviewr").eq(idx).find('.text_con').css({'height':imagewrapHeight});
       $(".contentviewr").eq(idx).addClass('open');
    });

    $(".wrapper .contentviewr .clost_btn_wrap .close_btn").on('click',function(){
        $('.contentviewr').removeClass('open');
        $('.contentviewr').find('.text_con').css({'height':'auto'});
    });
}