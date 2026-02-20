$(function(){
    $("ul.tab_menu>li").click(function(){
        $("ul.tab_menu>li").removeClass("active");
        $(this).addClass("active");
        
        var idx = $(this).index();
        if(idx == 0){
            $(".tab_contents>div").removeClass("active");
            $("#r03_rtrn").addClass("active");
        } else if(idx == 1){
            $(".tab_contents>div").removeClass("active");
            $("#r03_ntrn").addClass("active");
        }
    });
}); 
/*왕복*/
/*출발지 드롭다운*/
$(function(){
	$("#r03_rtrn #bok_dep").hover(function(){
		$(this).children(".choice").nextAll("li").css("display","block");
	},function(){
		$(this).children("#r03_rtrn .choice").nextAll("li").css("display","none");
	});

	$("#r03_rtrn #bok_dep>li").click(function(){
		var changeText = $(this).text();
		var defaultText = $("#r03_rtrn #bok_dep>li.choice").text();
		$("#r03_rtrn #bok_dep>li.choice").text(changeText);
		$(this).text(defaultText);
		$("#r03_rtrn #bok_dep>li.choice").nextAll("li").css("display","none");
	});
});
/*도착지 드롭다운*/
$(function(){
	$("#r03_rtrn #bok_des").hover(function(){
		$(this).children("#r03_rtrn .choice").nextAll("li").css("display","block");
	},function(){
		$(this).children("#r03_rtrn .choice").nextAll("li").css("display","none");
	});

	$("#r03_rtrn #bok_des>li").click(function(){
		var changeText = $(this).text();
		var defaultText = $("#r03_rtrn #bok_des>li.choice").text();
		$("#r03_rtrn #bok_des>li.choice").text(changeText);
		$(this).text(defaultText);
		$("#r03_rtrn #bok_des>li.choice").nextAll("li").css("display","none");
        
	});
});

/*탑승객*/
$(function(){
	$("#r03_rtrn .adult_minus").click(function(){
		var adult_cnt =$("#r03_rtrn #adult_cnt").text();

		var min = parseInt(adult_cnt) - 1;
		$("#r03_rtrn #adult_cnt").text(min);

	});
	$("#r03_rtrn .adult_plus").click(function(){
		var adult_cnt =$("#r03_rtrn #adult_cnt").text();

		var min = parseInt(adult_cnt) + 1;
		$("#r03_rtrn #adult_cnt").text(min);

	});
});
$(function(){
	$("#r03_rtrn .child_minus").click(function(){
		var child_cnt =$("#r03_rtrn #child_cnt").text();

		var min = parseInt(child_cnt) - 1;
		$("#r03_rtrn #child_cnt").text(min);

	});
	$("#r03_rtrn .child_plus").click(function(){
		var child_cnt =$("#r03_rtrn #child_cnt").text();

		var min = parseInt(child_cnt) + 1;
		$("#r03_rtrn #child_cnt").text(min);

	});
});
$(function(){
	$("#r03_rtrn .baby_minus").click(function(){
		var baby_cnt =$("#r03_rtrn #baby_cnt").text();

		var min = parseInt(baby_cnt) - 1;
		$("#baby_cnt").text(min);

	});
	$("#r03_rtrn .baby_plus").click(function(){
		var baby_cnt =$("#r03_rtrn #baby_cnt").text();

		var min = parseInt(baby_cnt) + 1;
		$("#r03_rtrn #baby_cnt").text(min);

	});
});

/*편도*/
/*출발지 드롭다운*/
$(function(){
	$("#r03_ntrn #bok_dep").hover(function(){
		$(this).children(".choice").nextAll("li").css("display","block");
	},function(){
		$(this).children("#r03_ntrn .choice").nextAll("li").css("display","none");
	});

	$("#r03_ntrn #bok_dep>li").click(function(){
		var changeText = $(this).text();
		var defaultText = $("#r03_ntrn #bok_dep>li.choice").text();
		$("#r03_ntrn #bok_dep>li.choice").text(changeText);
		$(this).text(defaultText);
		$("#r03_ntrn #bok_dep>li.choice").nextAll("li").css("display","none");
	});
});
/*도착지 드롭다운*/
$(function(){
	$("#r03_ntrn #bok_des").hover(function(){
		$(this).children("#r03_ntrn .choice").nextAll("li").css("display","block");
	},function(){
		$(this).children("#r03_ntrn .choice").nextAll("li").css("display","none");
	});

	$("#r03_ntrn #bok_des>li").click(function(){
		var changeText = $(this).text();
		var defaultText = $("#r03_ntrn #bok_des>li.choice").text();
		$("#r03_ntrn #bok_des>li.choice").text(changeText);
		$(this).text(defaultText);
		$("#r03_ntrn #bok_des>li.choice").nextAll("li").css("display","none");
        
	});
});

/*탑승객*/
$(function(){
	$("#r03_ntrn .adult_minus").click(function(){
		var adult_cnt =$("#r03_ntrn #adult_cnt").text();

		var min = parseInt(adult_cnt) - 1;
		$("#r03_ntrn #adult_cnt").text(min);

	});
	$("#r03_ntrn .adult_plus").click(function(){
		var adult_cnt =$("#r03_ntrn #adult_cnt").text();

		var min = parseInt(adult_cnt) + 1;
		$("#r03_ntrn #adult_cnt").text(min);

	});
});
$(function(){
	$("#r03_ntrn .child_minus").click(function(){
		var child_cnt =$("#r03_ntrn #child_cnt").text();

		var min = parseInt(child_cnt) - 1;
		$("#r03_ntrn #child_cnt").text(min);

	});
	$("#r03_ntrn .child_plus").click(function(){
		var child_cnt =$("#r03_ntrn #child_cnt").text();

		var min = parseInt(child_cnt) + 1;
		$("#r03_ntrn #child_cnt").text(min);

	});
});
$(function(){
	$("#r03_ntrn .baby_minus").click(function(){
		var baby_cnt =$("#r03_ntrn #baby_cnt").text();

		var min = parseInt(baby_cnt) - 1;
		$("#r03_ntrn #baby_cnt").text(min);

	});
	$("#r03_ntrn .baby_plus").click(function(){
		var baby_cnt =$("#r03_ntrn #baby_cnt").text();

		var min = parseInt(baby_cnt) + 1;
		$("#r03_ntrn #baby_cnt").text(min);

	});
});

/*subr01a 가는여정*/
	
function nextFun(){
		$(".slideWrap").append($(".slideWrap li").first().clone());
		$(".slideWrap li").first().remove();
	}

function prevFun(){
	$(".slideWrap").prepend($(".slideWrap li").last().clone());
	$(".slideWrap li").last().remove();
}

/*subr01a 오는여정*/
	
function bnextFun(){
	$(".bslideWrap").append($(".bslideWrap li").first().clone());
	$(".bslideWrap li").first().remove();
}

function bprevFun(){
$(".bslideWrap").prepend($(".bslideWrap li").last().clone());
$(".bslideWrap li").last().remove();
}


/*r01a.html  .dt_prc가는여정*/
$(".wed").click(function(){
	$(this).stop().animate({"top":"25px"});
	$("#wed").show();
});
$(".thur, .fri, .sat,.sun,.mon,.tue").click(function(){
	$(".wed").stop().animate({"top":"0px"});
	$("#wed").hide();
});
$(".thur").click(function(){
	$(this).stop().animate({"top":"25px"});
	$("#thur").show();
});
$(".wed, .fri, .sat,.sun,.mon,.tue").click(function(){
	$(".thur").stop().animate({"top":"0px"});
	$("#thur").hide();
});
$(".fri").click(function(){
	$(this).stop().animate({"top":"25px"});
	$("#fri").show();
});
$(".wed, .thur, .sat,.sun,.mon,.tue").click(function(){
	$(".fri").stop().animate({"top":"0px"});
	$("#fri").hide();
});
$(".sat").click(function(){
	$(this).stop().animate({"top":"25px"});
	$("#sat").show();
});
$(".wed, .thur, .fri,.sun,.mon,.tue").click(function(){
	$(".sat").stop().animate({"top":"0px"});
	$("#sat").hide();
});
$(".sun").click(function(){
	$(this).stop().animate({"top":"25px"});
	$("#sun").show();
});
$(".wed, .thur, .fri,.sat,.mon,.tue").click(function(){
	$(".sun").stop().animate({"top":"0px"});
	$("#sun").hide();
});
$(".mon").click(function(){
	$(this).stop().animate({"top":"25px"});
	$("#mon").show();
});
$(".wed, .thur, .fri,.sat,.sun,.tue").click(function(){
	$(".mon").stop().animate({"top":"0px"});
	$("#mon").hide();
});
$(".tue").click(function(){
	$(this).stop().animate({"top":"25px"});
	$("#tue").show();
});
$(".wed, .thur, .fri,.sat,.mon,.sun").click(function(){
	$(".tue").stop().animate({"top":"0px"});
	$("#tue").hide();
});
/*오는여정*/
$(".bwed").click(function(){
	$(this).stop().animate({"top":"25px"});
	$("#bwed").show();
});
$(".bthur, .bfri, .bsat,.bsun,.bmon,.btue").click(function(){
	$(".bwed").stop().animate({"top":"0px"});
	$("#bwed").hide();
});
$(".bthur").click(function(){
	$(this).stop().animate({"top":"25px"});
	$("#bthur").show();
});
$(".bwed, .bfri, .bsat,.bsun,.bmon,.btue").click(function(){
	$(".bthur").stop().animate({"top":"0px"});
	$("#bthur").hide();
});
$(".bfri").click(function(){
	$(this).stop().animate({"top":"25px"});
	$("#bfri").show();
});
$(".bwed, .bthur, .bsat,.bsun,.bmon,.btue").click(function(){
	$(".bfri").stop().animate({"top":"0px"});
	$("#bfri").hide();
});
$(".bsat").click(function(){
	$(this).stop().animate({"top":"25px"});
	$("#bsat").show();
});
$(".bwed, .bthur, .bfri,.bsun,.bmon,.btue").click(function(){
	$(".bsat").stop().animate({"top":"0px"});
	$("#bsat").hide();
});
$(".bsun").click(function(){
	$(this).stop().animate({"top":"25px"});
	$("#bsun").show();
});
$(".bwed, .bthur, .bfri,.bsat,.bmon,.btue").click(function(){
	$(".bsun").stop().animate({"top":"0px"});
	$("#bsun").hide();
});
$(".bmon").click(function(){
	$(this).stop().animate({"top":"25px"});
	$("#bmon").show();
});
$(".bwed, .bthur, .bfri,.bsat,.bsun,.btue").click(function(){
	$(".bmon").stop().animate({"top":"0px"});
	$("#bmon").hide();
});
$(".btue").click(function(){
	$(this).stop().animate({"top":"25px"});
	$("#btue").show();
});
$(".bwed, .bthur, .bfri,.bsat,.bmon,.bsun").click(function(){
	$(".btue").stop().animate({"top":"0px"});
	$("#btue").hide();
});

/*항공운임집어넣기*/
$("td").click(function(){//텍스트입력하기
	var textIn = $(this).text();
	$(".subr01a_prc>div.subr01a_prc_box01>div>p:nth-of-type(2)").text(textIn);
	
});