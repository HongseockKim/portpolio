
document.addEventListener('DOMContentLoaded',function(){
    bottingEvent();
});
function bottingEvent(){
    var dataNum = 0;
    var btn = document.querySelectorAll('.botting');
    var value_1 = 0;
    var value_2 = 0;
    var value_3 = 0;
    var value_4 = 0;
    var bar_1 = document.getElementById('bar_1');
    var bar_2 = document.getElementById('bar_2');
    var bar_3 = document.getElementById('bar_3');
    var bar_4 = document.getElementById('bar_4');






    for(var i = 0; i<btn.length;i++){
        btn[i].addEventListener('click',function(e){
            e.preventDefault;
            var Nums = this.getAttribute('value');
            Nums ++ ;
           this.setAttribute('value',+ Nums);
        });
    }

}