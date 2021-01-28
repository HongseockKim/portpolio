$(document).ready(function(){
    videoEvent();
});

function videoEvent(){
    var player = videojs("video_player", 
            { 
                sources : [ 
                    { 
                        src : "https://livetovod.nowcdn.co.kr/livetovod/journalist/award/20210115/1-3-1.mp4/playlist.m3u8", 
                        type : "application/x-mpegURL"
                    }
            ], 
                poster : "", 
                controls : true, 
                playsinline : true, 
                muted : true, 
                preload : "metadata", 
            });

            var isPaused = player.paused();//비디오 중지
            var isPlaying = !player.paused();//비디오 일시정지
            console.log(isPaused);
            console.log(isPlaying);
            if(isPaused === true){
                console.log(videojs('video_player').aspectRatio());
                console.log(videojs('video_player').bufferedPercent());
                
                videojs('video_player').autoplay(true)
                videojs('video_player').muted(true);
                videojs('video_player').volume(1);
                videojs('video_player').play();
                console.log(videojs('video_player').currentSrc());
                
                videojs('video_player').on('ended',function(){//현재 재생중인 영상이 끝났을때
                    videojs('video_player').src([
                        {
                            src : "https://livetovod.nowcdn.co.kr/livetovod/journalist/award/20210115/1-3-1.mp4/playlist.m3u8", 
                            type : "application/x-mpegURL"
                        }
                    ]);
                    videojs('video_player').play();
                });
                
                $('.btn').on('click',function(){
                    console.log(videojs('video_player').videoHeight()+ "비디오 높이");//비디오높이
                    console.log(videojs('video_player').videoWidth()+ "비디오 가로");//비디오가로값
                    console.log(videojs('video_player').currentTime())+ "현재재생시간";//현재재생시간;
                    console.log(videojs('video_player').remainingTime()+ "남은 재생시간");//남은 재생시간;
                    // videojs('video_player').requestFullscreen();//제대로된 전체화면
                });

                
            }
}