$(document).ready(function(){
    bottingBtnEvent();

});

function bottingBtnEvent(){
    var num_1 = 0;
    var num_2 = 0;
    var num_3 = 0;
    var num_4 = 0;
    var num_5 = 0;
    $('.grap_btn_wrap .botting_btn_1').on('click',function(e){
        e.preventDefault();
        
        if($(this).attr('id') === 'btn_1'){
            num_1 ++;
            $(this).children('input').attr('value',num_1);
        }else if($(this).attr('id') === 'btn_2'){
            num_2 ++;
            $(this).children('input').attr('value',num_2);
        }if($(this).attr('id') === 'btn_3'){
            num_3 ++;
            $(this).children('input').attr('value',num_3);
        }if($(this).attr('id') === 'btn_4'){
            num_4 ++;
            $(this).children('input').attr('value',num_4);
        }if($(this).attr('id') === 'btn_5'){
            num_5 ++;
            $(this).children('input').attr('value',num_5);
        }
    });
    grapaniEvetn();
}
function grapaniEvetn(val1,val2,val3,val4,val5){
    $('.view_btn').on('click',function(){
        val1 = $('#btn_1').children('input').val() ;
        val2 = $('#btn_2').children('input').val() ;
        val3 = $('#btn_3').children('input').val() ;
        val4 = $('#btn_4').children('input').val() ;
        val5 = $('#btn_5').children('input').val() ;
        grap1 = val1;
        grap2 = val2;
        grap3 = val3;
        grap4 = val4;
        grap5 = val5;
        grapTranstition(grap1,grap2,grap3,grap4,grap5);
    });
}
function grapTranstition(grap1,grap2,grap3,grap4,grap5){
    var totla =5;
    
    $('#grap_1 .bar').css({'width':grap1 / totla * 100 + '%'});
    $('#grap_2 .bar').css({'width':grap2 / totla * 100 + '%'});
    $('#grap_3 .bar').css({'width':grap3 / totla * 100 + '%'});
    $('#grap_4 .bar').css({'width':grap4 / totla * 100 + '%'});
    $('#grap_5 .bar').css({'width':grap5 / totla * 100 + '%'});
    setTimeout(function(){

        maxWidht();
    },1500)

}
function maxWidht(){
    var grap_1 = $('#grap_1 .bar').width();
    var grap_2 = $('#grap_2 .bar').width();
    var grap_3 = $('#grap_3 .bar').width();
    var grap_4 = $('#grap_4 .bar').width();
    var grap_5 = $('#grap_5 .bar').width();
    var array = [grap_1,grap_2,grap_3,grap_4,grap_5];
    var max = Math.max.apply(null, array);
    var res = [];
    array.forEach(function(e,i){
        // console.log(i);
        
        // console.log(e);
        if(e === max){
            res.push(i);
        }
    
    }); 
        for(var i=0; i < res.length; i++){
            $('.grap').eq(res[i]).addClass('on');
            // console.log(i);
        }
}