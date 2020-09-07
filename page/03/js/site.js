$(document).ready(function(){
    var zoom = 1;
    $('#site_map .scale_con a').on('click', function(e) {
        e.preventDefault();
       if($(this).hasClass('zoom_in')) {
           if( zoom <= 1.05){
               zoom = zoom+0.02;
           } else{
               alert('더이상 확대할수 없습니다.');
           }
           
       } else if($(this).hasClass('defalut')) {
           zoom = 1;
       } else if($(this).hasClass('zoom_out')) {
           
           if( zoom >= 0.91) {
               zoom = zoom -0.02;
           } else{
               alert('더이상 줌 아웃을 할수 없습니다.');
           }
       }
        console.log(zoom);
        $('html,body').css({'transform':'scale('+(zoom)+')','transition':'all 0.3s'});
    });
    $('#site_map .scale_con a').focus(function(){
        $('#site_map .scale_con a').removeClass('cli');
        $(this).addClass('cli');
    });
    $('#site_map .scale_con a').blur(function(){
        $('#site_map .scale_con a').removeClass('cli');
    });
});
