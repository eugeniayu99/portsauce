$("#res03Frm").submit(function(){
	
	var res_num = $("input[name='res_num']").val();
// .val() == 자바스크립의.value의 함수와 동일한 기능을 함.
	
    var bor_dtl = $("input[name='bor_dtl']").val();
	
	
	var printText = "";
	
	printText += "<h2> 예약번호조회 </h2>";
	printText += "<ul><li> 예약번호 :" + res_num + "</li>";
	printText += "<li> 탑승일 :" + bor_dtl + "</li>";
	$("body").html(printText);
	
	return false;
});