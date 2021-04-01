$(document).ready(function(){
    headerEvent();
    affiliate();
    scrollTopEvent();
    locationEvent(); 
});
function headerEvent() {
    $('#header_top nav>ul>li>a').on('mouseenter focus',function () {
            $('#header_top').addClass('open');
    });
    $('#header_top').on('mouseleave',function () {
        $(this).removeClass('open');
    });
    /*lang*/
    $('#header_top .lang > li >a').on('mouseenter focus',function (){
        $('#header_top .lang_wrap').css({'height':'90px','transition':'all 0.5s'});
    });
    $('#header_top .lang > li >a').on('mouseleave focus',function (){
        $('#header_top .lang_wrap').css({'height':'30px','transition':'all 0.5s'});
    });
    $('#header_top .lang_wrap a').focus(function() {
        $('.lang_wrap').css({'height':'90px','transition':'all 0.5s'});
    }).blur(function() {
        $('.lang_wrap').css({'height':'30px','transition':'all 0.5s'});
    })
}
function affiliate() {
    $('footer  .affi a').on('click focus', function(e) {
        e.preventDefault();
        $(this).next('div.menu').toggleClass('active');
    });
    $('footer  .affi a').on('focusout', function(){
        $(this).next('div.menu').removeClass('active');
    })
}
function scrollTopEvent() {
    var topWrap = $('.top_wrap'),
        location_wrap = $('#location'),
        topBtn = topWrap.children('a');
    $(window).scroll(function () {
        if ($(this).scrollTop() < $('#daelim_about').outerHeight()) {
            topWrap.stop().animate({
                opacity: 0
            }, 200);
        } else {
            topWrap.stop().animate({
                opacity: 1
            }, 200);
        }
        var locationTop = location_wrap.outerHeight();
        var scrollCount = $(window).scrollTop();
        if (scrollCount > locationTop) {
            location_wrap.addClass('fixed');
        } else {
            location_wrap.removeClass('fixed');
        }
        console.log(scrollCount);
    });
    $(topBtn).click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
}
function locationEvent() {
    console.log($('.location_inner>ul>li:not(li:first-child)>a'));
    $('.location_inner>ul>li:not(li:first-child)>a').on('click', function (e) {
        e.preventDefault();
        if ($(this).next('ul').children('li').hasClass('on')) {
            $('.location_inner>ul>li:not(li:first-child)>a').next('ul').children('li').removeClass('on');
        } else{
            $('#location ul > li > a').next('ul').find('li').removeClass('on');
           $(this).next('ul').children('li').addClass('on');
        }
    });
}
