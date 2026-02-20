$("#allChk").change(function(){
	var isChk = $(this).is(":checked");
	
	$(".agree").prop("checked",isChk);
});

$(document).ready(function(){
	$("span.modal").click(function(){
		$("#boxText").fadeIn(200);
		$("#backGray, #boxText").show();
		return false;
		});
		$("#backGray, #boxText").click(function(){
		$("#backGray, #boxText").hide();
		});
});

//본인인증
$(".j02_phipn").click(function(){
	if(!confirm("해당 정보로 등록된 정보가 없습니다.                                          회원정보를 작성하여, 회원가입을 마무리하세요.")){
			return false;
	}
});

//회원가입확인창
/*$(function(){
	$("form[name='joinus']").submit(function(){
		if(!confirm("회원가입하시겠습니까?")){
				return false;
		}
	});
	$("input[type='reset']").click(function(){
		if(!confirm("입력을 취소하시겠습니까?")){
				return false;
		}
	});
});*/
/*회원가입 유효성검사*/
$("#join").submit(function(){
	
	var u_pw = $("input[name='u_pw']").val();
	var u_pw2 = $("input[name='u_pw2']").val();
	if(u_pw != u_pw2){
		alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
		$("input[name='u_pw2']").focus();
		return false;
	}

	var  pascon = $("select[name='pascon']>option:selected").index();
	if(pascon<1){
		alert("국적을 선택하세요");
		$("select[name='pascon']").focus();
		return false;
	}

	var  country = $("select[name='country']>option:selected").index();
	if(country<1){
		alert("국적을 선택하세요");
		$("select[name='country']").focus();
		return false;
	}
	
	


	gender = $("input[name='gender']:checked").val();
	
	csEmail = $("input[name='csemail']:checked").val();csSns = $("input[name='cssns']:checked").val();

	var textPas = $("select[name='pascon']>option:selected").val();

	var textCountry = $("select[name='country']>option:selected").val();
	
	var printText = "";
	
	printText += "<h2> 회원가입완료!</h2>";
	printText += "<ul><li> 아이디 :" + u_id + "</li>";
	printText += "<li> 비밀번호 :" + u_pw + "</li>";
	printText += "<li> 성 :" + lanam + "</li>";
	printText += "<li> 이름 :" + frnam + "</li>";
	printText += "<li> 생년월일 :" + email + "</li>";
	printText += "<li> 성별:" + gender + "</li>";
	printText += "<li> 국적 :" + textpas + "</li>";
	printText += "<li> 직업 :" + textcountry + "</li></ul>";
	printText += "<li> 주소 :" + addr + "</li>";
	printText += "<li> 주소 :" + tel + "</li>";
	printText += "<li> 이메일 :" + email + "</li>";
	printText += "<li> 이메일 수신을 " + csemail + "</li>";
	printText += "<li> 이메일 수신을 " + cssns + "</li>";

	
	$("body").html(printText);
	
	return false;

	
});

