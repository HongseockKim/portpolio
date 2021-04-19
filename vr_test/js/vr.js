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
                "panorama": "/vr_test/img/24.jpg",
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
                        "clickHandlerFunc": pdfBook
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
                    {
                        "pitch": 1.5,
                        "hfov": 110,
                        "yaw": -180,
                        "type": "scene",
                        "cssClass" : "loaction_1",
                        "text": "이미지 크게보기",
                        "sceneId " : 'mains',
                        "clickHandlerFunc": locationEvent
                    },
                ],
            },
            "mains": {
                "type": "equirectangular",
                "panorama": "/vr_test/img/test.jpg",
                "autoLoad": true,
                "showFullscreenCtrl" : false,
                "showControls ": false,
                "hotspotDebug": true,
                'hotSpots':[
                    {
                        "pitch": 1.5,
                        "yaw": -180,
                        "type": "equirectangular",
                        "cssClass" : "loaction_1",
                        "text": "이미지 크게보기",
                        "sceneId " : 'main',
                        "clickHandlerFunc": locationEvent
                    },
                ],
            },
        },
    });
    function locationEvent(){
        if($(this).attr('sceneId ') === "mains"){
            viewers.loadScene('mains');
        }else if($(this).attr('sceneId ') === "main"){
            viewers.loadScene('main');
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
