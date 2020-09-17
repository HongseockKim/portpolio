<%@ CodePage = "65001" %>
<% session.CodePage = "65001" %>
<% Response.ContentType="text/html;charset=utf-8" %>
<% Response.CharSet = "utf-8" %>
<!--#include virtual="/livetop_oledb.asp"-->
<!--#include virtual="/common.asp"-->

<!DOCTYPE html>
<html>
<head>
<title>pdcollege</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
<link href="css/style.css?ver=20200722" rel="stylesheet" type="text/css">
<script src="/js/jquery-1.10.1.min.js" type="text/javascript"></script>
 <script src="/js/func.js" type="text/javascript"></script>
 <script language="javascript">
   function btn_login2(){
   	if(event.keyCode ==13)  {   		
   	
   		btn_login() ;
   		return;
   		}
   	
   	}	
	
	
    
       
       function go_join(){
       	location.href="/registration.asp";
       	
       	}
       jQuery(function () {

           $('.num_only').onlyNumber();

       });
       
       function gugun_select() {
            var addr1 = escape($("#addr1").val());
            //alert(addr1);
            jQuery.ajax({
                type: "post",
                async: true,
                url: "/Ajax_gugun.asp",
                datatype: "html",
                timeout: 30000,
                cacha: false,
                data: {
                    addr1: addr1
                },
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                error: function (r) {
                    //통신 에러 발생시 처리
                    alert("문제가 발생하였습니다.  다시한번 시도 해 주세요 ");
                },

                success: function (r) {
                    //통신 성공시 처리
                    $("#addr2").html(r);
                }

            });
        }
        
        function btn_login(){
           var frm = document.register_form;
          
           // 2017-03-13 요청사항으로 시 군구 선택 없앰
          
            
   		    if(frm.mem_hp.value==""){
       		    alert("전번을 기입해 주세요");
       		    frm.mem_hp.focus();
       		    return;       		
       		    }
			
	        if(!$('input:checkbox[id="policy"]').is(":checked")){
	            alert("개인정보(성함,소속명) 수집에 동의합니다.에 동의를 하셔야 입장이 가능합니다.");
	            frm.policy.focus();
	            return;       		
	        }
       		
			if(!$('input:checkbox[id="policy2"]').is(":checked")){
	            alert("상기 본인은 보건의료전문가임을 확인합니다.에 동의를 하셔야 입장이 가능합니다.");
	            frm.policy2.focus();
	            return;       		
	        }
   		    frm.action ="/login_ok.asp";
   	        frm.submit();
   		    }
     
</script>
</head>
<body>
      <div ID="wrap">
   	<header>
		<img src="img/content_menu.png" alt="메인배너"/>
	</header> <br>
			
			<div ID="content1_img" style="width:100%;">
				<ol>
					<h4>
						&nbsp;WEB SYMPOSIUM참여방법
					</h4>				
					<li>
						소속, 성명을 입력하고 개인정보 수집에 동의하신 후, ‘입장하기’ 버튼을 눌러 입장 부탁 드립니다.
					</li>
					<li>
						스마트폰으로 접속하신 경우에도 상기 절차와 동일하게 진행됩니다.
					</li>
					<p class="notice2">
						* 스마트폰을 통해 이동통신사 무선인터넷으로 접속하시는 경우, 가입하신 요금제에 따라 데이터 요금의 발생합니다.
					</p>
					<p class="notice2">
						* 접속이 원활하지 않을 경우 02-538-3258로 연락 주시기 바랍니다.
					</p>
					<p style="font-size:13px;">
						* 본 Web Symposium 참여와 관련하여, 개인정보(소속/성명) 활용에 동의하실 경우 하단 동의란에 체크 부탁 드립니다.
					</p>
					<p style="font-size:13px;">
						* 개인정보 수집에 동의하시지 않으실 경우, 참여에 제한이 있을 수 있습니다.
					</p>
					<p style="font-size:13px;">
						* 본 행사에 활용되는 개인정보는 행사 종료 후, 일괄 파기 예정입니다.
					</p>
				</ol>
			</div>
		
		
		<div ID="login">
			
			
			<div class="input">
			<form name="register_form"   method='post'   >
             <input type="hidden" name="mode" value="<%=mode %>" />
            <input type="hidden" name="mem_id" value="<%=mem_id %>" />           
			<p class="section"><span style="width:100px;display:inline-block;">전&nbsp;화&nbsp;번&nbsp;호&nbsp;: </span><input type="tel" size="30" class="cellphone num_only"  name="mem_hp"   id="mem_hp" maxlength="25"  placeholder="숫자만 기입해 주세요"></p>

			<p class="section">
				<input type="checkbox"  class="cellphone" name="policy"   id="policy"   >개인정보(소속 ,성명, 전화번호) 수집에 동의합니다.<br>
				<input type="checkbox"  class="cellphone" name="policy2"   id="policy2"   >상기 본인은 보건의료전문가임을 확인합니다.
			
			</p>
			<p class="section"></p>
			</form>
				
			     <a class="input_btn0" onclick="btn_login('new');" style="cursor: pointer" ><strong>입장하기</strong></a>
			     <a class="input_btn0" onclick="go_join();" style="cursor: pointer" ><strong>사전등록</strong></a>
			    
			</div>
			 <br>
	<div ID="foot">
			<img src="img/footer_index.png">
	</div>
  </div>
</body>
</html>