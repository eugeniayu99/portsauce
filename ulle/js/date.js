$( function() {
    $.datepicker.setDefaults($.datepicker.regional['ko']);
    $( ".pop_calA, .pop_calB" ).datepicker({
        firstDay:0,
        yearSuffix:"년",
        monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
        dayNamesMin:["일","월","화","수","목","금","토"] 
    });

/*왕복*/
    $(".pop_calA .ui-datepicker-calendar td a").on("click", function(){
        var day = $(this).text();
        var months = $(this).parent().attr("data-month"); // 문자열
        var years = $(this).parent().attr("data-year"); // 문자열

        //alert(day + "일" + (parseInt(months)+1)+ "월"); //일

        var textIn = parseInt(years)+"년"+(parseInt(months)+1)+ "월"+day + "일";
        $("#ver01>form>div.calA>a>span").text(textIn);
        $("#ver01>form>div.calA>a>img").hide();
    });
    $(".pop_calB .ui-datepicker-calendar td a").on("click", function(){
        var day = $(this).text();
        var months = $(this).parent().attr("data-month"); // 문자열
        var years = $(this).parent().attr("data-year"); // 문자열

        //alert(day + "일" + (parseInt(months)+1)+ "월"); //일

        var textIn = parseInt(years)+"년"+(parseInt(months)+1)+ "월"+day + "일";
        $("#ver01>form>div.calB>a>span").text(textIn);
        $("#ver01>form>div.calB>a>img").hide();
    });

/*편도*/
    $(".pop_calA .ui-datepicker-calendar td a").on("click", function(){
        var day = $(this).text();
        var months = $(this).parent().attr("data-month"); // 문자열
        var years = $(this).parent().attr("data-year"); // 문자열

        //alert(day + "일" + (parseInt(months)+1)+ "월"); //일

        var textIn = parseInt(years)+"년"+(parseInt(months)+1)+ "월"+day + "일";
        $("#ver02>form>div.calA>a>span").text(textIn);
        $("#ver02>form>div.calA>a>img").hide();
    });

/*예약조회*/    
$(".pop_calA .ui-datepicker-calendar td a").on("click", function(){
    var day = $(this).text();
    var months = $(this).parent().attr("data-month"); // 문자열
    var years = $(this).parent().attr("data-year"); // 문자열

    //alert(day + "일" + (parseInt(months)+1)+ "월"); //일

    var textIn = parseInt(years)+"년"+(parseInt(months)+1)+ "월"+day + "일";
    $("#no02>div.box_contain>form>div.box01:nth-of-type(4)>a>span").text(textIn);
    $("#no02>div.box_contain>form>div.box01:nth-of-type(4)>a>img").hide();
});


});