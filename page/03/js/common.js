$(document).ready(function () {
    headerEnvet();
    headerMouse();
    header();
});
    function headerEnvet() {
        var m_btn = $('#header_top').find('.m_menu'),
            wrap = $('.wrapper'),
            m_nav = m_btn.siblings('nav'),
            cloneMenu = m_nav.children('ul').clone(),
            cloneWrap = $('<div class="clone_menu"></div>'),
            open = 1;
        $(cloneWrap).append(cloneMenu);
        $('body').prepend(cloneWrap);
        $('#header_top .m_menu').on('click', function (e) {
            e.preventDefault();
            console.log(open);
            if ($('.wrapper').hasClass('open')) {
                $('.wrapper').removeClass('open');
                cloneWrap.removeClass('open');
            } else {
                $('.wrapper').addClass('open');
                cloneWrap.addClass('open');
            }
        });
    }

    function headerMouse() {
        var timer = '';
        var count = 0;
        var selelt = '';
        $('#header_top nav>ul>li>a').on('mouseenter focus', function () {
            selelt = $(this);
            if($('#header_top .m_gnb').hasClass('fix')){
                $(this).removeClass('enter');
            } else{
                $(this).addClass('enter');
            }
            timer = setTimeout(function () {
                count = 1;
                if (count === 1) {
                    $('#header_top nav>ul>li>a').removeClass('ons');
                    selelt.addClass('ons');
                    if (selelt.hasClass('ons')) {
                        var idx = selelt.parent('li').index();
                        console.log(idx);
                        $('#header_top .sub_menu').css({
                            display: 'none'
                        });
                        $('#header_top .sub_menu:eq(' + (idx) + ')').slideDown(450);
                    }
                }
            }, 350);
            console.log(count);
        });

        $('#header_top nav>ul>li>a').on('mouseleave focusin', function () {
            $('#header_top nav>ul>li>a').removeClass('enter');
            clearTimeout(timer);
            count == 0;
        });
        $('#header_top nav>ul>li>a').on('focusout',function(){
            $(this).removeClass('enter');
        });
        $('.sub_menu').on('mouseleave', function () {
            $('#header_top nav>ul>li>a').removeClass('ons');
            $('#header_top .sub_menu').slideUp(350);
        });
        $('#header_top .sub_menu .out').on('focusin out', function () {
            $('#header_top nav>ul>li>a').removeClass('ons');
            $('#header_top .sub_menu').slideUp(350);
        });
    }

    function header() {
        var header_wrap = $('#header_top'),
            main_menu = header_wrap.find('.m_gnb'),
            headerLogo = main_menu.find('.logo img'),
            headerHeight = header_wrap.innerHeight();
        console.log(headerLogo);

        function scrollEve() {
            if ($(window).scrollTop() > headerHeight) {
                main_menu.css({
                    position: 'fixed',
                    top: 0
                });
                main_menu.addClass('fix');
            } else {
                main_menu.css({
                    position: 'relative'
                });
                main_menu.removeClass('fix');
            }
        }
        $(window).scroll(function () {
            scrollEve();
        });
    }