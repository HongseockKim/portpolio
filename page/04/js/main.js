$(function(){
    var lnbWrap =$('.wrap'),
        lnbBtn = lnbWrap.find('li'),
        hightlight =lnbWrap.children('.hightlight'),
        tagetLeft = lnbBtn.position().left;
   
    console.log(tagetLeft)
    lnbBtn.mouseenter(function(){
        tagetLeft = $(this).position().left;
        console.log(tagetLeft);
        hightlight.stop().animate({left:tagetLeft,display:'inline-block'},200);
    }).mouseleave(function(){
       hightlight.stop().animate({left:-120+'px'},200);
    });
    
    $(window).resize(function(){
       var windowWidth = $(this).innerWidth();
        console.log(windowWidth);
       
    });
});