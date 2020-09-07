$(document).ready(function(){
cloneheader();
siteMap();
mouseEvnet();
location();
shoppingBtn();
function location(){
	$('#location').on('change',function(){
		var location = $('#location').val()
		window.location.href = location
	});
}
});
function cloneheader() {
	var headerHeight = $('.smeg_header').offset().top + $('.smeg_header').outerHeight(),
		docuHeight = $('footer').offset().top;
	$(window).on({
		'scroll': function() {
			if ($(window).scrollTop() > headerHeight) {
				$('.smeg_header').removeClass('org');
				$('.smeg_header').addClass('avtive');
			} else {
				$('.smeg_header').removeClass('avtive');
				$('.smeg_header').addClass('org');
			}
			if($(window).scrollTop()>docuHeight/4){
				$('#top_button').css({display:'block'});
			}else{
				$('#top_button').css({display:'none'});
			}
		}
	});
	$('#top_button').children('a').click(function(e){
		e.preventDefault();
		$('html,body').stop().animate({scrollTop:0});
	});
}
function mouseEvnet() {
$('.inner .lnb_wrap>ul>li>a').on('mouseenter focusin', function(){
	$('.inner .lnb_wrap>ul>li>a').removeClass('open');
	$(this).add('.smeg_header.org').addClass('open');
});
$('.inner .lnb_wrap>ul>li ul').on('mouseleave', function(){
	$('.inner .lnb_wrap>ul>li>a').add('.smeg_header.org').removeClass('open');
});
}
function siteMap() {
	$('.modal_btn').on('click focus',function(e){
		e.preventDefault();
		$(this).toggleClass('opens');
		if ($(this).hasClass('opens')) {
			$('.modal').css({
				display: 'block'
			});
			$(this).children('.btn').addClass('on');
			$('.smeg_header').addClass('bg');
		} else {
			$('.modal').css({
				display: 'none'
			});
			$(this).children('.btn').removeClass('on');
			$('.smeg_header').removeClass('bg');
		}
	});
$('.modal .con .refrigerator ul li a.last').blur(function(){
	$('.modal_btn').removeClass('opens');
	$('.modal_btn').children('.btn').removeClass('opens on');
	$('.modal').css({
		display: 'none'
	});
	$(this).children('.btn').removeClass('on');
	$('.smeg_header').removeClass('bg');
});
}
function shoppingBtn() {
	$('.smeg_header .sub_menu>ul>li:nth-child(1) a').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		if($(this).hasClass('open') === true){
			$(this).next('.shopping').css({'display':'block'});
		} else{
			$(this).next('.shopping').css({'display':'none'});
		}
	});
}
