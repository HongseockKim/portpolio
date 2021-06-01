
$(document).ready(function(){
    $('.wrapper .contnet #Portfolio_con .page_con_wrap .page_con .spage_list .grid-item a').attr('target','_blank');
    swiperSlide();
    
    portfolio_list_data();
    portfolio_content_data();
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
function portfolio_list_data(){
    $.ajax({
        url : "../data/data.json",
        dataType : "json",
        success : function(data){
            var obj  = "";
            $(data).each(function(v,i){
                $(i.imagesrc).each(function(e,r){
                    if(r.linkif === "true" && r.subif === "true"){
                        obj += "<li class='grid-item'>",
                        obj += "<img src="+r.mainimage+" alt=''>",
                        obj += "<div class='view'>",
                        obj += "<a href='"+r.link_1+"' target='_blank'>메인메뉴",
                        obj += "</a>",
                        obj += "<a href='"+r.link_2+"' target='_blank'>서브메뉴",
                        obj += "</a>",
                        obj += "</div>",
                        obj += "</li>"
                    }else if(r.linkif === "true" && r.subif === "false"){
                        obj += "<li class='grid-item'>",
                        obj += "<img src="+r.mainimage+" alt=''>",
                        obj += "<div class='view'>",
                        obj += "<a href='"+r.link_1+"' target='_blank'>메인메뉴",
                        obj += "</a>",
                        obj += "</div>",
                        obj += "</li>"
                    }else{
                        obj += "<li class='grid-item'>",
                        obj += "<img src="+r.mainimage+" alt=''>",
                        obj += "</li>"
                    }
                    
                })
                $('#portfolio_list li').remove();
                $('#portfolio_list').append(obj);
                pageGridlayoutEvent();
            })
        }
    })
}
function portfolio_content_data(){
    $.ajax({
        url : "../data/data.json",
        dataType: "json",
        success : function(data){
            var sobj = "";
            $(data).each(function(i,v){
                $(v.imagesrc).each(function(si,sv){
                    console.log(sv);
                    sobj += "<div class='contentviewr'>",
                    sobj += "<div class='clost_btn_wrap'>",
                    sobj += "<button type='button' class='close_btn'>",
                    sobj += "<span class='bar bar_1'></span>",
                    sobj += "<span class='bar bar_2'></span>",
                    sobj += "</button>",
                    sobj += "</div>",
                    sobj += "<div class='content clearfix'>",
                    sobj += "<div class='img_wrap'>",
                    sobj += "<img src='"+sv.image_1+"' alt=''>",
                    sobj += "</div>",
                    sobj += "<div class='text_con'>",
                    sobj += "<h3>"+sv.sitename+"</h3>",
                    sobj += "<div class='scroll_bar'>",
                    sobj += "<span class='bar'></span>",
                    sobj += "</div>",
                    sobj += "</div>",
                    sobj += "</div>",
                    sobj += "</div>"
                })
            });
            $('#modal_wrap div.contentviewr').remove();
            $('#modal_wrap').append(sobj);
            imageHoverEvent();
        }

    })
}