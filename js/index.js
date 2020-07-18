$(document).ready(function(){
    $('#map_con>.inner>article>ul>li>a.buttons').on('mouseenter', function() {
			$('#map_con>.inner>article').find('ul>li').removeClass('on');
			$('#map_con>.inner>article').add($(this).parent()).addClass('on');
		});
		$('#map_con>.inner>article>ul>li>a.buttons').on('mouseleave', function() {
			$('#map_con>.inner>article').add($(this).parent()).removeClass('on');
		});

$('#Portfolio_con .slider li .non a').on('click', function(e){
    e.preventDefault();
    alert('업로드 중에 있습니다. 죄송합니다.');
})		
        
        
    
});