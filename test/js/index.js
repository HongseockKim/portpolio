$(document).ready(function () {
    var IfHeight = $('.cssnote').offset().top;
    $(window).on('scroll', function () {
        var scrollfloor = Math.floor($(window).scrollTop());
        if (scrollfloor > IfHeight) {
            $('.cssnote').css({
                'position': 'fixed',
                'top': 0
            });
        } else {
            $('.cssnote').css({
                'position': 'absolute',
                'top': 50 + 'px'
            });
        }
        docLayout();
    });

slideShows();
});
function docLayout(){
    var winWidth = $(window).innerWidth();
    var winHeight = $(window).innerHeight();
    $('html,body').css({'width':winWidth,'height':winHeight});
}



function slideShows(){
    var noteCount = $('.con').length;
    var noteNow = 0;
    var noteNext = 0;
    var notePrev = 0;

$('.tab li>a').on('click',function(n){
    n = $(this).parent('li').index();
    // console.log(n);
    noteNow = n;
});
    console.log(noteNow);
    slideShow(noteNow);
    
    $('.wrapper .con').each(function (i) {
        $(this).css({
            'left': (i * 90) + '%'
        });
    });

    $('.tab>li>a').on('click', function (e) {
        e.preventDefault();
        var idx = $('.tab>li').index($(this).parent());
        slideShow(noteNow + 1);
    });

    function slideShow(n) {
        $('.moving').css({
            'transition': 'left 0.3s',
            'left': -((n - 1) * 100) + '%'
        });
        $('.tab li').removeClass('on');
        $('.tab li').eq(n - 1).addClass('on');
        noteNow = n;
        noteNext = (n >= noteCount) ? 1 : n + 1;
        notePrev = (n <= 1) ? noteCount : n - 1;
    }
}