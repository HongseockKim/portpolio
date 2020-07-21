$(document).ready(function(){
		$(document).on('click', 'a[href="#"]', function(e) {
			e.preventDefault();
		});
	/*image slide*/
	var slideCount = $('#Portfolio_con .slider li').length;
	var slideFirst = 1;
	var slideNow = 0;
	var slidePrev = 0;
	var slideNext = 0;
	var timerId = undefined;
	var duration = 3000;
	var timerOn = true;
	slideShow(slideFirst,'change');
	$('#Portfolio_con>.slider_wrap>.contrall>a.next').on('click', function(e){
		e.preventDefault();
		$(this).addClass('on');
		slideShow(slideNext,'next');
	});
	$('#Portfolio_con>.slider_wrap>.contrall>a.prev').on('click', function(e){
		e.preventDefault();
		$(this).addClass('on');
		slideShow(slidePrev,'prev');
	});
	
	$('#Portfolio_con .slider li').on('mouseenter', function(){
		clearTimeout(timerId);
			timerOn =false;
	});
	$('#Portfolio_con .slider li').on('mouseleave', function(){
		timerId = setTimeout(function(){slideShow(slideNext,'next');},duration);
		timerOn = true;
	});
	function slideShow(n,direction){
		clearTimeout(timerId);
		if(slideNow === 0 || direction ==='change'){
			slideMove(n);
		} else{
			var slideLeft =0;
			if(direction ==='next'){
				slideLeft = -100;
			} else if(direction === 'prev'){
				slideLeft = 100;
			} else{
				slideLeft = 0;
			}
			$('#Portfolio_con .slider').css({'transition':'left 0.6s','left': slideLeft+'%'}).one('transitionend',function(){
				slideMove(n);
			});
		}
		if(timerOn === true){
			timerId = setTimeout(function(){
				slideShow(slideNext,'next');
			},duration);
		}
	}
	function slideMove(n){
		slideNow =n;
		if(slideNow === slideFirst){
			slideNext = slideNow+1;
			slidePrev = slideCount;
		}else if(slideNow ===slideCount){
			slideNext = 1;
			slidePrev = slideNow-1;
		}else{
			slidePrev = slideNow - 1;
			slideNext = slideNow + 1;
		}
		$('#Portfolio_con>.slider_wrap>.indi_wrap>span').text(slideNow +'\n/\n' + slideCount);
		$('#Portfolio_con>.slider_wrap>.contrall>a').removeClass('on');
		$('#Portfolio_con .slider').css({'transition':'none','left':0});
		$('#Portfolio_con .slider li').css({'left':0 ,'display':'none'});
		$('#Portfolio_con>.slider_wrap>.text_slider_con>.text_slider>li').css({'transition' : 'all 0.6s','opacity':0,'display':'none'});
		$('#Portfolio_con>.slider_wrap>.text_slider_con>.text_slider>li').eq(slideNow-1).css({'transition':'all 0.6s','display':'block','opacity':1});
		$('#Portfolio_con>.slider_wrap>.text_slider_con>.text_slider>li').eq(slidePrev-1).css({'transition':'all 0.6s','display':'block','opacity':0});
		$('#Portfolio_con>.slider_wrap>.text_slider_con>.text_slider>li').eq(slideNext-1).css({'transition':'all 0.6s','display':'block','opacity':0});
		$('#Portfolio_con .slider li').eq(slidePrev-1).css({'left':-100+'%','display':'block'});
		$('#Portfolio_con .slider li').eq(slideNow-1).css({'left':0+'%','display':'block'});
		$('#Portfolio_con .slider li').eq(slideNext-1).css({'left':100+'%','display':'block'});
		
//		console.log(slidePrev+'/'+slideNow+'/'+slideNext);
	} 
	/*scroll Event*/
    $(window).on('scroll', function() {
		checkContent();
	});
	
	function checkContent(){
		var scrollTop = $(document).scrollTop();
		var minScroll = $('#skill_con .inner .skill_list').offset().top - $(window).height()+800;
		var maxScroll = $('#skill_con .inner .skill_list').offset().top + $('#skill_con .inner .skill_list').outerHeight(true)-100;
		if(scrollTop >= minScroll){
			$('.contents_wrap #skill_con >.inner .skill_list>ul>li').addClass('on');
		}
		if(scrollTop >= maxScroll){
			$('.contents_wrap #skill_con >.inner .skill_list>ul>li').removeClass('on');
		}
	}
});