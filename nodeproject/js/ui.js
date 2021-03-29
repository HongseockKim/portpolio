/*live 페이지 출결확인 관련.js */
$(document).ready(function(){
    attendanceEvnet();
    dateEvent();
    // image_maps();
});

function image_maps () {
    $('img [usemap]').width('1920');
    $ ('img [usemap]').rwdImageMaps();
}

function dateEvent(){
    var dateValue = undefined;
    var today = moment();
    var valour = undefined;
    var valmin = undefined;
    var optionValueour= [];
    var optionValuemin=[];
    console.log(today.format());
    $('#date').datepicker({
        controlType: 'select',
        timeFormat: 'hh:mm ss',
        autoPick : true,
        language : 'ko-KR',
        altFormat : 'yyyy-mm-dd',
        defaultDate : +7,
    });
    $(document).ready(function () {
        $('#timePicker').datetimepicker({
            controlType: 'select',
            timeFormat: 'hh:mm ss'
        });
    });

    for (var i =0;i <= 23;i++){
        if(i < 10){
            valour = "0" + i;
        }else{
            valour = i;
        }
        optionValueour[i] = "<option value="+valour+">"+valour+"</option>";
    }
    for (var i =0;i <= 59;i++){
        if(i < 10){
            valmin = "0" + i;
        }else{
            valmin = i;
        }
        optionValuemin[i] = "<option value="+valmin+">"+valmin+"</option>";
    }
    $('#timeselectour').append(optionValueour);
    $('#timeselectmin').append(optionValuemin);
    $('.select_box').on('change',function(){
        $('#timeselectour').attr('value',$('#timeselectour').val());
        $('#timeselectmin').attr('value',$('#timeselectmin').val());
    });



    $('.date_save_btn').on('click',function(){
        var our =$('#timeselectour').val();
        var min =$('#timeselectmin').val();
        var fomats = "YYYY-MM-DD HH:mm:ss";
         dateValue = $('#date').datepicker('getDate',new Date());
         var newDates = dateValue;
         var day = moment(newDates).format(fomats);
        console.log(day);        
        console.log(newDates);
    });
}



//출결 확인 이벤트
function attendanceEvnet(){
    var session = "session_1";
    var session1_intime = undefined;
    var session1_outtime = undefined;
    var session2_intime = undefined;
    var session2_outtime = undefined;
    var session3_intime = undefined;
    var session3_outtime = undefined;
    var session4_intime = undefined;
    var session4_outtime = undefined;
    var session5_intime = undefined;
    var session5_outtime = undefined;
    var session6_intime = undefined;
    var session6_outtime = undefined;
    var num = 0;

    // var timerId = setInterval(function(){
    //     num = num + 1;
    //     console.log(num);
    // },1000);


        $('.attendance_btn_wrap #in_btn').on('click',function(){
            var time = new Date();
            $('.attendance_btn_wrap #in_btn').removeClass('on');
            $('.attendance_btn_wrap #out_btn').addClass('on');
            //출석확인
            if(session === "session_1"){
                session = 'session_1_out';//이 값은 바꾸지마세요
                //세션1 출석확인
                session1_intime = time.getSeconds();
                console.log(time);
                console.log('세션1 출결');
                $(this).text('세션2출결');
                console.log(session1_intime);
            }else if(session === "session_2"){
                session = 'session_2_out';//이 값은 바꾸지마세요
                //세션2 출석확인
                console.log('세션2 출결');
                $(this).text('세션3출결');
                session2_intime = time.getSeconds();
                console.log(session2_intime);
            }else if(session === "session_3"){
                session = 'session_3_out';//이 값은 바꾸지마세요
                //세션3 출석확인
               console.log('세션3 출결');
               $(this).text('세션4출결');
               session3_intime = time.getSeconds();
               console.log(session3_intime);
            }else if(session === "session_4"){
                session = 'session_4_out';//이 값은 바꾸지마세요
                session4_intime = time.getSeconds();
                //세션4 출석확인
                console.log('세션4 출결');
                $(this).text('세션5출결');
                console.log(session4_intime);
            }else if(session === "session_5"){
                session = 'session_5_out';
                session5_intime = time.getSeconds();
                //세션5 출석확인
               console.log('세션5 출결');
               $(this).text('세션6출결');
               console.log(session5_intime);
            }else if(session === "session_6"){
                session = 'session_6_out';
                session6_intime = time.getSeconds();
                //세션6 출석확인
                console.log('세션6 출결');
                console.log(session6_intime);
            }
            
        });
        $('.attendance_btn_wrap #out_btn').on('click',function(){
            var time = new Date();
            $('.attendance_btn_wrap #in_btn').addClass('on');
            $('.attendance_btn_wrap #out_btn').removeClass('on');
            //퇴장확인
            if(session === "session_1_out"){
                session = 'session_2';
                session1_outtime = time.getSeconds();
                //세션1 퇴장확인
                console.log('세션1 퇴장');
                $(this).text('세션2퇴장');
                console.log(session1_outtime);
            }else if(session === "session_2_out"){
                session = 'session_3';
                //세션2 퇴장확인
                console.log('세션2 퇴장');
                $(this).text('세션3퇴장');
                session2_outtime = time.getSeconds();
                console.log(session2_outtime);
            }else if(session === "session_3_out"){
                session = 'session_4';
                //세션3 퇴장확인
                console.log('세션3 퇴장');
                $(this).text('세션4퇴장');
                session3_outtime = time.getSeconds();
                console.log(session3_outtime);
            }else if(session === "session_4_out"){
                session = 'session_5';
                //세션4 퇴장확인
                console.log('세션4 퇴장');
                $(this).text('세션5퇴장');
                session4_outtime = time.getSeconds();
                console.log(session4_outtime);
            }else if(session === "session_5_out"){
                session = 'session_6';
                //세션5 퇴장확인
                console.log('세션5 퇴장');
                $(this).text('세션6퇴장');
                session5_outtime = time.getSeconds();
                console.log(session5_outtime);
            }else if(session === "session_6_out"){
                //세션6 퇴장확인
                console.log('세션6 퇴장');
                $(this).text('세션6퇴장');
                session6_outtime = time.getSeconds();
                console.log(session6_outtime);
            }
        });

        $("#all_time").on('click',function(){
            clearInterval(timerId);
            var sessionIn1 = session1_outtime - session1_intime;
            var sessionIn2 = session2_outtime - session2_intime;
            var sessionIn3 = session3_outtime - session3_intime;
            var sessionIn4 = session4_outtime - session4_intime;
            var sessionIn5 = session5_outtime - session5_intime;
            var sessionIn6 = session6_outtime - session6_intime;
            var all = sessionIn1 + sessionIn2 + sessionIn3 + sessionIn4 + sessionIn5 + sessionIn6;
            console.log(all);
            $('.attendance_btn_wrap').append('<p>'+all+'초</p>');
            console.log(num);
            console.log('내가시청한시간은'+(num - all));
        });
    }

