$(document).ready(function(){
    hoverEvent();
    scrollEvents();
});

function hoverEvent(){
    $('.wrapper header .inner .nav_wrap .nav_con nav ul li a').on('mouseenter',function(){
        $('.wrapper header').addClass('on');
        $(this).addClass('on');
        console.log($(this));
       if($(this).hasClass('sub_link')){
           console.log('서브');
           $('.wrapper header').addClass('sub_open');
       }
    });
    $('.wrapper header .inner .nav_wrap .nav_con nav ul li a').on('mouseleave',function(){
        $(this).removeClass('on');
    });
    $('.wrapper header').on('mouseleave',function(){
        $(this).removeClass('on');
        $('.wrapper header').removeClass('sub_open');
    });
}

function scrollEvents(){
    var docHeight = $('.sect_7').offset().top;
    console.log(docHeight);
      $('body .wrapper section.sect_7 .inner .content_box.two>img').jScrollability(
        function($el) { return $el.offset().top; },
        function($el) { return $el.offset().top + $el.height(); },
        function($el,pcnt) {
          $el.css({
            'top': ((1 - pcnt) * -100) + '%'
          });
        }
      );
}