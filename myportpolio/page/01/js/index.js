$(document).ready(function(){
	produtSlide();
	smegAbout();
	memberShip();
	preventDefaultAnchor();
});
function preventDefaultAnchor() {
	$(document).on('click', 'a[href="#"]', function(e) {
		e.preventDefault();
		//도큐멘트 클릭하면 해당되는모두에게 디폴팅
	});
}
function produtSlide() {
	var first = 3;
	var Now = 0;
	var prev =0;
	var next =0;
	var imageDuration = 550;
	var textDuration = 250;
	var slideCount = $('.product_wrapper .product_slider li').length;
	var onAnimation  = false;
	var timerId = '';
	fade_slide(first);

	$('.product_info .btn_wrap .prev').on('click',function(e) {
		e.preventDefault();
		fade_slide(prev);
	});
	$('.product_info .btn_wrap .next').on('click',function(e) {
		e.preventDefault();
		fade_slide(next);
	});
	$('.product_info .indi_wrap li a').on('click',function (e){
		e.preventDefault();
		var idx = $('.product_info .indi_wrap li').index($(this).parent());
		fade_slide(idx + 1);
	});


	function fade_slide(n) {
		if(Now === 0) {
			$('.product_wrapper .product_slider li').css({'display':'none'});
			$('.product_info .info_slider li').css({'display':'none'});
			$('.info_text .text_slider li').css({'display':'none'});

			$('.product_wrapper .product_slider li:eq('+(n - 1)+')').css({'display':'block'});
			$('.product_info .info_slider li:eq('+(n - 1)+')').css({'display':'block'});
			$('.info_text .text_slider li:eq('+(n - 1)+')').css({'display':'block'});
		}else{
			// timerId = setTimeout(function(){
			// 	onAnimation = false;
			// },200);
			if(onAnimation === true) return false;
			onAnimation=true;
			$('.product_wrapper .product_slider li').stop(true).animate({'opacity':0},imageDuration,function(){
				$(this).css({'display':'none'});
				onAnimation = false;//가장 긴 애니메이션 에게 false 주면됨
			});
			$('.product_info .info_slider li').stop(true).animate({'opacity':0},textDuration,function() {
				$(this).css({'display':'none'});
			});
			$('.info_text .text_slider li').stop(true).animate({'opacity':0},textDuration,function() {
				$(this).css({'display':'none'});
			});
			$('.product_wrapper .product_slider li:eq('+(n - 1)+')').css({'display':'block'}).stop(true).animate({'opacity':1},imageDuration,function (){
				onAnimation = false;
			});
			$('.product_info .info_slider li:eq('+(n - 1)+')').css({'display':'block'}).stop(true).animate({'opacity':1},textDuration);
			$('.info_text .text_slider li:eq('+(n - 1)+')').css({'display':'block'}).stop(true).animate({'opacity':1},textDuration);
		}

		$('.product_info .indi_wrap li').removeClass('on');
		$('.product_info .indi_wrap li:eq('+(n - 1)+')').addClass('on');
		Now = n;
		prev = (n <=1) ? slideCount:(n - 1);
		next = (n >=slideCount) ? 1:(n + 1);
	}
}
function smegAbout(){
	var now = 0;
	var slideCount = $('.smeg_about .about_slider li').length;
	var slidePrev = 0;
	var slideNext = 0;
	var speed = 500;
	var onAnimation = false;
	fade_show(1);

	$('.smeg_about .smeg_brand_btn .next').on('click',function(e){
		e.preventDefault();
		fade_show(slideNext);
	});
	$('.smeg_about .smeg_brand_btn .prev').on('click',function(e){
		e.preventDefault();
		fade_show(slidePrev);
	});
	$('.smeg_about .smeg_brand_indi li a').on('click',function(e) {
		e.preventDefault();
		var idx = $('.smeg_about .smeg_brand_indi li').index($(this).parent());
		fade_show(idx + 1);
	});
	function fade_show(i) {
		if(onAnimation === true) return false;
		onAnimation = true;
		$('.smeg_about .about_slider li').stop(true).animate({'opacity':0},speed,function() {
			$(this).css({'display':'none'});
		});
		$('.smeg_about .about_slider li:eq('+(i - 1)+')').css({'display':'block'}).stop(true).animate({'opacity':1},speed,function(){
			onAnimation = false;
		});
		$('.smeg_about .smeg_brand_indi li').removeClass('show');
		$('.smeg_about .smeg_brand_indi li:eq('+(i - 1)+')').addClass('show');
		now = i;
		slidePrev= (i <=1) ? slideCount:(i - 1);
		slideNext= (i >=slideCount) ? 1: (i + 1);
	}
}
function memberShip() {
	var membershipWrap = $('.membership_wrap'),
		memberCon = $('.membership_con');
	var onAnimation = false;
	membershipWrap.children('.membership_btn').find('a').click(function(e) {
		e.preventDefault();
		if(onAnimation === true) return false;
		onAnimation = true;
		$(this).parent('div').toggleClass('open')
		if ($(this).parent('div').hasClass('open')) {
			$(this).parents('.membership_btn').addClass('open');
			memberCon.stop().animate({height: '500px'},'animationend',function(){
				onAnimation = false;
			});
		} else {
			$(this).parents('.membership_btn').removeClass('open');
			memberCon.stop().animate({height: '0'},'animationend',function(){
				onAnimation = false;
			});
		}
	});
}