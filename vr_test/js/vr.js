$(document).ready(function(){
    vrEvent();
});
function vrEvent(){
    var vr_image = '/vr_test/img/24.jpg';
    pannellum.viewer('vr_con', {
        "type": "equirectangular",
        "panorama": vr_image,
        "autoLoad": true,
        "showFullscreenCtrl" : false,
        "showControls ": false,
        "hotspotDebug": true,
        'hotSpots':[
            {
                "pitch": 0.5,
                "yaw": 4,
                "cssClass" : "custom_hotspot",
                "createTooltipFunc": hotspot,
                "type": "scene",
                // "URL": "https://artbma.org/"
                "clickHandlerFunc": openModal
            },
            {
                "pitch": -1,
                "yaw": 75,
                "cssClass" : "image_con",
                "type": "info",
                "text": "The ANTIGEN : #COVID 19 PODCAST",
                // "URL": "https://artbma.org/"
                "clickHandlerFunc": openModal
            },
            {
                "pitch": 2,
                "yaw": -65,
                "cssClass" : "image_con",
                "type": "info",
                "text": "이미지 크게보기",
                // "URL": "https://artbma.org/"
                "clickHandlerFunc": openModal
            },
            {
                "pitch": 2,
                "yaw": -90,
                "cssClass" : "image_con",
                "type": "info",
                "text": "이미지 크게보기",
                // "URL": "https://artbma.org/"
                "clickHandlerFunc": openModal
            },
            {
                "pitch": 2,
                "yaw": -113,
                "cssClass" : "image_con",
                "type": "info",
                "text": "이미지 크게보기",
                // "URL": "https://artbma.org/"
                "clickHandlerFunc": openModal
            },
        ]
    });
}

function openModal(){
    console.log('열린다');
    var player = videojs("my_video", {
        poster : "test-poster.png", 
        controls : true, 
        autoplay:true,
        playsinline : true,
         muted : false, 
         preload : "metadata", 
      });
      players = player;
    $('.video_modal').addClass('on');
    if($('.video_modal').hasClass('on')){
        console.log('영상 실행');
        player.src([
            {
                src:"https://liveto.nowcdn.co.kr/liveto/abc/playlist.m3u8 ",
                type : 'application/x-mpegURL'
            }
        ])
    } 
    closeEvent(players);
}

function closeEvent(players){
    $('.close_btn').on('click',function(){
        $('.video_modal').removeClass('on');
        players.pause();
        players.src([{
            src : ""
        }])
    });
}
function hotspot(){
    console.log('핫스팟');

}
