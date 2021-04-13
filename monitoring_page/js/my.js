$(document).ready(function(){
    videoEvent();
    $('.reflash_btn').on('click',function(){
        window.location.reload();
    })
});

function videoEvent(){
    $('.monitor_list li video').each(function(e,f){
        var players = videojs('myvideo_'+e+'',{
            controls : true, 
            playsinline : true, 
            autoplay:true,
            muted : true, 
            preload : "metadata",
        });
    })

}