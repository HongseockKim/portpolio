<%@ CodePage = "65001" %>
<% session.CodePage = "65001" %>
<% Response.CharSet = "utf-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
<title>GINEXIN Webinar</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link href="css/style.css" rel="stylesheet" type="text/css">
<script src="/js/jquery-1.10.1.min.js" type="text/javascript"></script>
 <script src="/js/func.js" type="text/javascript"></script>
 <script language="javascript">
 	jQuery(function () {

           $('.num_only').onlyNumber();

       });
       
       function send_input(){
       	var frm = document.register_form;
       	if(frm.mem_name.value==""){
       		alert("성명을 기입해 주세요");
       		frm.mem_name.focus();
       		return;       		
       		}
     if (frm.mem_SalesName.value == "") {
             alert("지역명을 기입해 주세요");
             frm.mem_SalesName.focus();
             return;
         }
         if (frm.mem_email.value == "") {
             alert("이메일을 기입해 주세요");
             frm.mem_email.focus();
             return;
         }
         if (!email_check(frm.mem_email.value)) {
             alert("잘못된 이메일 형식입니다.");
             return;
         }

       	if(frm.mem_HP.value==""){
       		alert("핸드폰  번호를 기입해 주세요");
       		frm.mem_HP.focus();
       		return;       		
       		}
       		
       	if(frm.mem_hospital.value==""){
       		alert("병원명을 기입해 주세요");
       		frm.mem_hospital.focus();
       		return;       		
       		}
       		
       	frm.action ="/member_input_ok.asp";
       	frm.submit();
       	}
       	
       	function go_main(){
       		
       	location.href ="/index.asp"	;
    }

    function email_check(email) {        
        var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        if (regex.test(email) === false) {            
            return false;
        } else {
            return true;
        }
    }
 	</script>
</head>

<body>
	<div ID="wrap">
	<div class="content">
		<img src="img/content_menu.png">
		<div class="menu">
			<form name="register_form"   method='post'   >
			<p class="section">성 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명 &nbsp;&nbsp;<input type="text" size="30"   name="mem_name"  class="cellphone"  maxlength="10"  ></p>
            <p class="section">지 역 명 &nbsp;&nbsp;<input type="text" size="30"   name="mem_SalesName"  class="cellphone"  maxlength="10"  ></p>            
            <p class="section">핸 드 폰 &nbsp;&nbsp;&nbsp;<input type="tel" size="30" name="mem_HP"  class="cellphone"  maxlength="11" placeholder="번호만 입력해주세요"></p>			
            <p class="section">이 메 일 &nbsp;&nbsp;&nbsp;<input type="text" size="30" name="mem_email"  class="cellphone"  maxlength="100" placeholder=""></p>			
			<p class="section">병 원 명 &nbsp;&nbsp;&nbsp;<input type="text" size="30" name="mem_hospital"  class="cellphone"  maxlength="25"></p>
            <!--p class="section">팀 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명 &nbsp;&nbsp;<input type="text" size="30" name="mem_teamName"  class="cellphone"  maxlength="25"></p-->
			     <a class="input_btn0" onclick="send_input();" style="cursor: pointer",>
			     	<strong>
			     		등록하기
			     	</strong>
			     </a>
			     <a class="input_btn0" onclick="go_main();" style="cursor: pointer" >
			     	<strong>메인으로</strong>
			     </a>
			
			
			<!--input class="input_btn_regi" type="button" value="등록하기" onclick="send_input();" style="margin-left:80px;">  
			<input class="input_btn_regi" type="button" value="메인으로"  onclick="go_main();"  style="margin-left:0px;"-->
			</form>
		</div>
	</div>
	<div ID="foot">
			<img src="img/footer_index.png">
	</div>
	
	</div>
</body>
</html>