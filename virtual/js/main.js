$(document).ready(function(){
    mainbg();
});
function mainbg(){
    var mainVideo = videojs("main_bg", { 
        controls : true, 
        playsinline : true,
         muted : true, 
         autoplay: true,
         loop : true,
         preload : "metadata", 
         fluid : true,
         playbackRates: [0.5],
       });
       mainVideo.src([{
        src : "/video/"+qusnt+"mp4",
    }])
    
}
$(window).on('resize',function(){
    console.log($(window).width());
    console.log($(window).height());
    $('.video-js.vjs-16-9, .video-js.vjs-4-3, .video-js.vjs-fluid').css({'width':$(window).width() });
    $('.video-js.vjs-16-9, .video-js.vjs-4-3, .video-js.vjs-fluid').css({'height':$(window).height()});
});
