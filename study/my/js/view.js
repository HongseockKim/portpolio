document.addEventListener("DOMContentLoaded",function(){
    getEvent();
});

function getEvent(){
    document.querySelector('.view_btns').addEventListener('click',function(){
        $('#box').load('text.html #box2');

        totalPepl = 100;
    });
}