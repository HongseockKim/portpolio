
$(document).ready(function(){
    $('.wrapper .contnet #Portfolio_con .page_con_wrap .page_con .spage_list .grid-item a').attr('target','_blank');
    //swiperSlide();
    portfolio_list_data();
    navEvent();
});

function swiperSlide(){
    $.ajax({
        url:"/data/skill.json",
        dataType :"json",
        success : function(data){
            let obj = "";
            $(data).each(function(i,v){
                $(v.skill).each(function(si,iv){
                    obj += "<li class='swiper-slide'>"
                    obj += "<div class='con'>"
                    obj += "<img src='"+iv.link+"' alt=''>"
                    obj += "</div>"
                    obj += "</li>"
                })
            })
            $('#skill_list li').remove();
            $('#skill_list').append(obj);
            let slide = new Swiper('#swiper_slide_con',{
                slidesPerView : "4",
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
    })
}

function pageGridlayoutEvent(){
    let gridItem = $('.grid');
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
    $('.contnet #Portfolio_con .page_con_wrap .page_con .spage_list .grid-item img').on('click',function(){
        let idx = $(this).parent().index();
        let imagewrapHeight = $('.contentviewr').eq(idx).find('.img_wrap').height() - $('.contentviewr').eq(idx).find('.text_con').height();

        $(".contentviewr").eq(idx).find('.text_con').css({'height':imagewrapHeight});
        $(".contentviewr").eq(idx).addClass('open');
        $(window).on('resize',function(){
            let imagsizes =  $('.contentviewr').eq(idx).find('.img_wrap').height() ;
            console.log(imagsizes)
            $(".contentviewr").eq(idx).find('.text_con').css({'height':imagsizes});
        });
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
            let obj  = "";
            $(data).each(function(v,i){
                $(i.imagesrc).each(function(e,r){
                    if(r.linkif === "true" && r.subif === "true"){
                        obj += "<div class='grid-item'>";
                        obj += "<img src="+r.mainimage+" alt='image'>";
                        obj += "<div class='view'>";
                        obj += "<a href='"+r.link_1+"' target='_blank'>메인메뉴</a>";
                        obj += "<a href='"+r.link_2+"' target='_blank'>서브메뉴</a>";
                        obj += "</div>";
                        obj += "<div class='skill_image_con mid'>";
                        obj += "<img src='"+r.skilllink+"' alt='image'>";
                        obj += "<img src='"+r.skilllink_2+"' alt='image'>";
                        obj += "<img src='"+r.skilllink_3+"' alt='image'>";
                        obj += "<img src='"+r.skilllink_4+"' alt='image'>";
                        obj += "<img src='"+r.skilllink_5+"' alt='image'>";
                        obj += "</div>";
                        obj += "</div>";
                    }else if(r.linkif === "true" && r.subif === "false"){
                        obj += "<li class='grid-item'>";
                        obj += "<img src="+r.mainimage+" alt='image'>";
                        obj += "<div class='view'>";
                        obj += "<a href='"+r.link_1+"' target='_blank'>메인메뉴</a>";
                        obj += "</div>";
                        obj += "<div class='skill_image_con mid'>";
                        obj += "<img src='"+r.skilllink+"' alt='image'>";
                        obj += "<img src='"+r.skilllink_2+"' alt='image'>";
                        obj += "<img src='"+r.skilllink_3+"' alt='image'>";
                        obj += "<img src='"+r.skilllink_4+"' alt='image'>";
                        obj += "<img src='"+r.skilllink_5+"' alt='image'>";
                        obj += "</div>";
                        obj += "</li>"
                    }else{
                        obj += "<li class='grid-item'>";
                        obj += "<img src="+r.mainimage+" alt='image'>";
                        obj += "<div class='skill_image_con bot'>";
                        obj += "<img src='"+r.skilllink+"' alt='image'>";
                        obj += "<img src='"+r.skilllink_2+"' alt='image'>";
                        obj += "<img src='"+r.skilllink_3+"' alt='image'>";
                        obj += "<img src='"+r.skilllink_4+"' alt='image'>";
                        obj += "<img src='"+r.skilllink_5+"' alt='image'>";
                        obj += "</div>";
                        obj += "</li>";
                    }
                });

                $('#portfolio_list li').remove();
                $('#portfolio_list').append(obj);
                $('.contnet #Portfolio_con .page_con_wrap .page_con .spage_list .grid-item .skill_image_con img').each(function(){
                    $('img[src = null]').remove();
                });

                portfolio_content_data();
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
            let sobj = "";
            $(data).each(function(i,v){
                $(v.imagesrc).each(function(si,sv){
                    sobj += "<div class='contentviewr'>";
                    sobj += "<div class='clost_btn_wrap'>";
                    sobj += "<button type='button' class='close_btn'>";
                    sobj += "<span class='bar bar_1'></span>";
                    sobj += "<span class='bar bar_2'></span>";
                    sobj += "</button>";
                    sobj += "</div>";
                    sobj += "<div class='content clearfix'>";
                    sobj += "<div class='img_wrap'>";
                    sobj += "<img src='"+sv.image_1+"' alt='image'>";
                    sobj += "<img src='"+sv.image_2+"' alt='image'>";
                    sobj += "<img src='"+sv.image_3+"' alt='image'>";
                    sobj += "</div>";
                    sobj += "<div class='text_con'>";
                    sobj += "<h3>"+sv.sitename+"</h3>";
                    sobj += "<div class='scroll_bar'>";
                    sobj += "<span class='bar'></span>";
                    sobj += "</div>";
                    sobj += "</div>";
                    sobj += "</div>";
                    sobj += "</div>";
                })
            });

            $('#modal_wrap div.contentviewr').remove();
            $('#modal_wrap').append(sobj);
            $('#modal_wrap div.contentviewr .img_wrap img').each(function(){
                $('img[src = undefined]').remove();
            });

            imageHoverEvent();
        }

    })
}
function navEvent(){
    $(' .nav_list_wrap .nav_list .nav_item button').on('click',function(){
        let idx = $(this).parent('li').index();
        let pagenames = "";

        $('.nav_list_wrap .nav_list .nav_item button').removeClass('on');
        $(this).addClass('on');
        $('#con_wrtap').children().remove();

        if(idx === 0){
            location.reload();
        }else if(idx === 2){
            pagenames = "threejs/index";
        }else if(idx === 1){
            pagenames = "vr";
        }else if(idx === 4){
            window.open('_blank').location.href="http://gusduswk11.dothome.co.kr/index.php";
        }else{
            pagenames = $(this).attr('id');
        }

        $('#con_wrtap').load(""+pagenames+".html",function(r,s,x){
            if(s = "success"){
                console.log('성공');
                uiEvent()
            }
        });
    })
}

function uiEvent(){
    $('.contnet.ui .ui_con .btn_list .btn_item .sylte_2').on('mouseenter',function(){
        $(this).children('.text').css({'transition':'all 0.3s','width':100 + "%",'opacity':1});
    });
    $('.contnet.ui .ui_con .btn_list .btn_item .sylte_2').on('mouseleave',function(){
        $(this).addClass('on2');
        $(this).children('.text').css({'left':100 + "%"});
        transitionendEvent();
    })
    function transitionendEvent(){
        $('.contnet.ui .ui_con .btn_list .btn_item .sylte_2 .text').one(' transitionend',function(){
            console.log('끝')
            $(this).css({'transition':'none',"opacity": 0,"left":0+"%","width":0+'%'});
        })
    }
}