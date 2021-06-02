$(document).ready(function(){
    vrEvent();
});
function vrEvent(){

    var viewers = pannellum.viewer('vr_con', {
        "default" : {
            "firstScene" : 'main',
            "sceneFadeDuration": 1000,
        },
        "scenes": {
            "main": {
                "type": "equirectangular",
                "title" :"테스트 vr sect 1번",
                "author" : "Hongseockim",
                "panorama": "/vr_test/img/25.png",
                "preview":"/vr_test/img/poster.png",/*미리보기 이미지*/
                "previewTitle":"테스트 입니다!!",
                //"autoRotate" :'3',처음 로드후 회전함
                "friction" : 0.1,/*회전시마찰계수*/
                "autoLoad": true,
                "yaw":0,/*시작시 수평 각도*/
                "pitch":0,/*시작시 수직 각도*/
                "hfov":200,/*정면 시야*/
                "minYaw":-180,/*유저가 볼수 있는 각도 제어*/
                "maxYaw":180,/*유저가 볼수 있는 각도 제어*/
                "minPitch":-90,
                "maxPitch":90,
                "multiResMinHfov":true,
                "showFullscreenCtrl" : false,
                "showControls ": false,
                "hotspotDebug": true,
                "sceneFadeDuration":300,//장면간 전환시 밀리세컨
                //"haov":70,
                "backgroundColor":([255,255,255]),
                //"vaov":40,
                "haov": 90,
                "vaov": 40,
                "vOffset": 1.17
            },
        },
    });
    function locationEvent(){
        if($(this).attr('sceneId ') === "mains"){
            viewers.loadScene('mains');
        }else if($(this).attr('sceneId ') === "main"){
            viewers.loadScene('main');
        }else if($(this).attr('sceneId ') === "main2"){
          location.href = "/vr_test/pano.html"
        }
    }
}




function pdfBook(){
    var flipBook;
    var pdf="/vr_test/pdf/test.pdf";
    var options = {
        height: 800,
        soundEnable : false,
        autoEnableThumbnail: false,
        overwritePDFOutline: false,
        enableDownload: false,
        text: {

            toggleSound: "Turn on/off Sound",
            toggleThumbnails: "Toggle Thumbnails",
            toggleOutline: "Toggle Outline/Bookmark",
            previousPage: "Previous Page",
            nextPage: "Next Page",
            toggleFullscreen: "Toggle Fullscreen",
            zoomIn: "Zoom In",
            zoomOut: "Zoom Out",
            toggleHelp: "Toggle Help",
      
            singlePageMode: "Single Page Mode",
            doublePageMode: "Double Page Mode",
            downloadPDFFile: "Download PDF File",
            gotoFirstPage: "Goto First Page",
            gotoLastPage: "Goto Last Page",
            play: "Start AutoPlay",
            pause: "Pause AutoPlay",
      
            share: "Share"
          },
          enableDebugLog: true,
          enableAnnotation: true,
          pdfRenderQuality: 0.90,
          spotLightIntensity: 0.22,
        ambientLightColor: "#fff",
        ambientLightIntensity: 0.8,
        shadowOpacity: 0.15,
        stiffness: 3,
        pixelRatio: window.devicePixelRatio || 1,
    };
    $('.pdf_con').addClass('on');
    if($('.pdf_con').hasClass('on')){
        flipBook = $("#flipbookContainer").flipBook(pdf, options);
    }
     $('#flipbookContainer .close_btn').on('click',function(){
        $('.pdf_con').removeClass('on');
    })
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
