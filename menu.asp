<%@ CodePage = "65001" %>
<% session.CodePage = "65001" %>
<% Response.CharSet = "utf-8" %>
<!--#include virtual="livetop_oledb.asp"-->
<!--#include virtual="/common.asp"-->
<%

'2018-03-18
isMobile = false 
mobrwz = "iPhone|iPod|BlackBerry|Android|Windows CE|LG|MOT|SAMSUNG|SonyEricsson|Mobile|Symbian|Opera Mobi|Opera Mini|IEmobile|Mobile|lgtelecom|PPC"
spmobrwz = split(mobrwz,"|")
agent = Request.ServerVariables("HTTP_USER_AGENT")
    For i = 0 to UBound(spmobrwz)
        If InStr(agent,spmobrwz(i)) > 0 Then         
           ' Response.Redirect "/new/m/login.asp"
            isMobile = true 
            Exit for
        End If
    Next

'response.Write isMobile
if session("name")="" then 
	response.write "<script language='javascript'>"
	response.write "alert('인증 정보가 없습니다  \n 로그인을 해주세요 ');"
	response.write "location.href='/index.asp';"
	response.write "</script>"
response.end 
end if
mode = request("mode")
mode = "Real"
Lng = request("Lng")
select case mode
	case "Test"
		iosurl = "http://livetovod.nowcdn.co.kr/livetovod/bms/orencia.mp4/playlist.m3u8"
		Adrurl = "rtsp://livetovod.nowcdn.co.kr/livetovod/bms/mp4:orencia.mp4"
	case "Real"
		iosurl = "http://liveto.nowcdn.co.kr/live2/orencia/playlist.m3u8"
		Adrurl = "rtsp://liveto.nowcdn.co.kr/live2/orencia"
    case "Vod"
		iosurl = "http://livetovod.nowcdn.co.kr/livetovod/bms/20200526.mp4/playlist.m3u8"
		Adrurl = "rtsp://livetovod.nowcdn.co.kr/livetovod/bms/mp4:20200526.mp4"
         
end select 

'설문조사 관련 

sql  = "select count(id) from survey_005 where id='"& session("id") &"' and code_001="& basic_code_001 &" "
'response.Write sql
   set rs =  db.Execute (sql)
   if not rs.eof then
   		Exist_Survey = rs(0)
  end if 
  
  'response.Write Exist_Survey
%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=540">
    <title>CML DAY 2020</title>
    <link rel="stylesheet" href="./common/css/reset.css">
    <link rel="stylesheet" href="./common/css/style.css">
    <link rel="stylesheet" href="./common/css/custom.css">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&display=swap&subset=korean">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto&display=swap">
</head>
<body>
    <div class="wrap">
        <div>
            <img src="img/banner.png" alt="메인베너">
        </div>
        <div class="cml_wrap">
            <h2>제 10회 온라인 CML DAY 2020 프로그램</h2>
            <table>
                <tr>
                    <th></th>
                </tr>
            </table>
        </div>
        <div class="menu_wrap">
            <p class="title">입장하기</p><br>
            <p>*브라우저를 선택해 주세요</p>
            <ul>
                <li>
                    <a href="#" onclick="pop_live(); return false">
                        <!-- <img src="./common/img/logo_chrome.png" alt="크롬"> -->
                        <span>explorer</span>
                    </a>
                </li>
                <li>
                    <a href="#" onclick="pop_open3(); return false;">
                        <!-- <img src="./common/img/logo_chrome.png" alt="크롬"> -->
                        <span>chrome</span>
                    </a>
                </li>
                <li>
                    <a href="#" onclick="pop_open5(); return false;">
                        <!-- <img src="./common/img/logo_chrome.png" alt="크롬"> -->
                        <span>Mobile</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="wrap">
        <div>
            <img src="img/program.png" alt="프로그램">
        </div>
        </div>
        <div class="schedule">            
            <!--#include virtual="/schedule.asp"-->
        </div>        
        <!--div class="foot">
            <img src="./common/img/foot_logo.png" style="width:540px;height:65px;" alt="">
        </div-->
    </div>
    <script src="./common/js/jquery-2.2.4.min.js"></script>
    <script src="./common/js/layout.js"></script>
</body>
    <script type="text/javascript" language='javascript'>
        function pop_open() {
            // 시간설정 이시간이후에 설문조사가 뜨게 원하는 시간 
            // 아래 포맷을 정확하게 지켜주세요 2016-00-00 00:00:00
            //var defaultTime = "2016-01-15 23:00:00";
        var defaultTime = "<%=defaultTime%>";
            var PopupOpenYN;
            getTime(defaultTime);
            //alert($("#PopupYN").val());
            PopupOpenYN = $("#PopupYN").val();
            
            if (PopupOpenYN == "Y") {
                alert(" 종료 하시겠습니까?\n 확인 버튼을 누르시면  심포지엄 관련 설문조사가 \n 있사오니, 선생님의 소중한 의견 부탁드립니다.");
                uurl = "/survey/survey_001.asp?gubun=<%=gubun%>";
                window.open(uurl, "survey", "width=824,height=1080,scrollbars=yes");
            } else {
                alert(defaultTime + " 시간 이후에 설문조사를 하실수 있습니다.");
                return;
            }
        }
        function pop_open3(){
        $("#gubun").val("L");
        $("#mobile_gubun").val("PC");        
        pop_open2();
        go_log();
        }
    
    function pop_open4(){
        $("#gubun").val("L");
        $("#mobile_gubun").val("ios");        
        go_log();
        }
    function pop_open5(){
        $("#gubun").val("L");
        $("#mobile_gubun").val("Android");
        pop_open2();            
        go_log();
        }
    function getTime(valTime) {

        jQuery.ajax({
            type: "post",
            async: false,
            url: "/getTime.asp",
            datatype: "text",
            timeout: 30000,
            cache: false,
            data: { dtTime: valTime }, //$("#dat_form").serialize(),
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            error: function (r) {
                //통신 에러 발생시 처리
                alert(r);
            },
            success: function (r) {
                //통신 성공시 처리
                $("#PopupYN").val(r);
            }

        });

    }
    function go_log() {
        var mem_id = '<%=session("hp")%>';
        var gubun = $("#gubun").val();
        var mobile_gubun =$("#mobile_gubun").val();
        var Lng ='<%=Lng%>';
        if(gubun=="")   {
            gubun ="O";
        }
    jQuery.ajax({
            type: "post",
            async: true,
            url: "/log_ok.asp",
            datatype: "html",
            timeout: 30000,
            cache: false,
            async: false,
            data: {
                mem_id : mem_id,
                gubun  : gubun,
                mobile_gubun : mobile_gubun,
                Lng : Lng
            }, //$("#dat_form").serialize(),
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            error: function (r) {
                alert("Something went wrong. Please try again. ");
            },
            success: function (r) {
                //통신 성공시 처리 
            // $("#gubun").val("");
            // $("#mobile_gubun").val("");             
                //go_Agenda2(gubun)
            }
        })
    }
    //추가 시작

    function pop_live (){
    $("#gubun").val("L");
    $("#mobile_gubun").val("PC"); 
    uurl="live.asp?bbs_key=<%=bbs_key %>&mode=<%=mode%>&gubun=<%=gubun %>&Lng=<%=Lng %>";
    window.open(uurl, '<%=mode%>page', 'width=980, height=630,scrollbars=yes');
    go_log();
    }
        
    function pop_open2(){	

        <%if brover() = "Explorer 5.0" or brover() = "Explorer 6.0" or brover() = "Explorer 7.0" or brover() = "Explorer 8.0" or brover() = "Explorer 9.0"  then  %>
        uurl="live.asp?bbs_key=<%=bbs_key %>&mode=<%=mode%>&gubun=<%=gubun %>&Lng=<%=Lng %>";
        <%else %>
        uurl="/livem.asp?bbs_key=<%=bbs_key %>&mode=<%=mode%>&gubun=<%=gubun %>&Lng=<%=Lng %>";
        <%end if %>
        window.open(uurl, '<%=mode%>page', 'width=980, height=630,scrollbars=yes');
    }
    function go_log_out() {
        var mem_id = '<%=session("hp")%>';
        var gubun = "O"
        var mobile_gubun =$("#mobile_gubun").val();
        var Lng ='<%=Lng%>';
        jQuery.ajax({
            type: "post",
            async: true,
            url: "/log_ok.asp",
            datatype: "html",
            timeout: 30000,
            cache: false,
            async: false,
            data: {
                mem_id : mem_id,
                gubun  : gubun,
                mobile_gubun : mobile_gubun,
                Lng : Lng
            }, //$("#dat_form").serialize(),
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            error: function (r) {
                alert("Something went wrong. Please try again. ");
            },
            success: function (r) {
                //통신 성공시 처리 
            // $("#gubun").val("");
            // $("#mobile_gubun").val("");             
            // go_Agenda2(gubun)
            }

        })
    }	
    function go_m_logout(event_day) {
            //alert(event_day);
            var mem_id = '<%=session("hp")%>';
            var gubun = 'M';
            var mobile_gubun = $("#mobile_gubun").val();
            jQuery.ajax({
                type: "post",
                async: true,
                url: "/log_ok.asp",
                datatype: "html",
                timeout: 30000,
                cache: false,
                async: false,
                data: {
                    mem_id: mem_id,
                    gubun: gubun,
                    event_day:event_day,
                    mobile_gubun : mobile_gubun
                }, //$("#dat_form").serialize(),
                //contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                //error: function (r) {
                //    alert("문제가 발생하였습니다.  다시한번 시도 해 주세요 ");
            // },
                success: function (r) {
                    //통신 성공시 처리               
                    //go_Agenda2(gubun)
                }

            })

        }

    //추가 끝
    function sendit2(){
    if(event.keyCode ==13)  {
        event.cancelBubble = true;
        event.returnValue = false;	
    }
    }
    function sendit(){
            frm = document.dat_form;
            if(frm.bbs_id.value==""){
                    alert("이름을 기입하여 주세요.");
                    frm.bbs_id.focus();
                    return;
                }
                
            if(calculateBytes(frm.bbs_id.value) > 15){
                    alert("한글은 6자 이내로 글을 써주시기 바랍니다.\n\n영문은 14 자 이내로 써주시기 바랍니다.")
                    frm.bbs_id.focus();
                    return;
                }
                
            if(frm.bbs_title.value==""){
                    alert("내용을 입력하여 주세요");
                    frm.bbs_title.focus();
                    return;
                }
                    
                    if(calculateBytes(frm.bbs_title.value) > 400){
                    alert("200자 이내로 입력해 주세요.");
                    frm.bbs_title.focus();
                    return;
                }
            
            //frm.target ="bbs_list";
            //frm.action="board_input_ok.asp";
            //frm.submit();
            //frm.bbs_title.value='';
            //sendit3();
            var bbs_title = escape(frm.bbs_title.value);
            var  bbs_id  = escape(frm.bbs_id.value);
            var bbs_key = frm.bbs_key.value;
            //var bbs_hospital='<%=session("hos")%>';
        
            jQuery.ajax ({
                    
                    type: "post",
                    async : true,
                    url : "/dat_web/Ajax_ board_input_ok.asp",
                    datatype : "json",
                    timeout  : 30000,
                    cacha : false ,
                    data : {
                                bbs_key : bbs_key,
                                bbs_id    :bbs_id,
                                bbs_title : bbs_title		
                        
                        },//$("#dat_form").serialize(),
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    error : function(r) {
                                //통신 에러 발생시 처리
                            
                    alert("질문저장시 문제가 발생하였습니다.  다시한번 시도 해 주세요 ");
                            } ,
                
                    success : function(r) {
                    //통신 성공시 처리
                
                    alert("질문이 등록되었습니다.   ");
                    frm.bbs_title.value="";
                    }
                
                });
            
            }
            
        function sendalert(){
            alert("로그인 후 이용해 주세요");
        }
            
        //여기서 추가 작업
        function calculateBytes(szValue)
                {
    var tcount = 0;
    var tmpStr = new String(szValue);
    var temp = tmpStr.length;
    var onechar;
    for ( k=0; k<temp; k++ )
    {onechar = tmpStr.charAt(k);
    if (escape(onechar).length > 4)
                        {
                            tcount += 2;
                        }
                        else
                        {
                        tcount += 1;
                        }
                        }
                        
                        return tcount;
                        } 
                    //여기 까지 추가 작업
</script>
</html>