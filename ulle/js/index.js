$(document).ready(function(){
    $("#gnb>li").hover(function(){
        $(this).children(".sub").stop().slideDown(400);
    },function(){
        $(this).children(".sub").stop().slideUp(400);
    });
});    
    
    //슬라이드
    var n = 0; 

    $("#thumbs a").eq(n).children("img").attr({"src":"./images/btn_banner_ov.png"});

    function count(){
	    n++; 
	    if(n<4){ 
		    viewSlide(n);
	    }else{
		    n=0;
		    viewSlide(n);
	    }	
    }
    var time = 6000; 
    var slideStart = setInterval("count()",time);
    function viewSlide(n){ 
	    $("#thumbs a").children("img").attr({"src":"./images/btn_banner.png"});
	    $("#thumbs a").eq(n).children("img").attr({"src":"./images/btn_banner_ov.png"});
	
	    $("#large_img img").animate({"opacity":"0"}, time-5000);
	
	    $("#large_img img").eq(n).stop().addClass("topImg").show().css("opacity",0).animate({"opacity":"1"},time-5000);	
    }
    $("#con1").hover(function(){
	    clearInterval(slideStart);
    }, function(){
	    slideStart = setInterval("count()",time);
    });

    $("#thumbs a").click(function(){
	    n=$(this).attr("data-i");
	     viewSlide(n);
    });

    //비주얼배너텍스트
    setTimeout(function(){
        $(".text01").fadeIn(1000);
    },250);
    


    //bestpick
    var Pointer = 0; //위치 포인터 변수
    var SlideWidth = 28.888; // 슬라이드 (이동) 420px + 90px setmunu width + marjin-right


    function nextSlide(){
        $(".slideShow").animate({"left":"-"+SlideWidth+"%"},
    function(){
        $(".slideShow").css("left",0);
    });
    $(".slideShow").append($(".slideShow ul").first().clone());
    $(".slideShow ul").first().remove();
    }
    function prevSlide(){
        $(".slideShow").prepend($(".slideShow ul").last().clone().css("right",0));
        $(".slideShow ul").last().remove();
        $(".slideShow").animate({"left":SlideWidth+"%"},function(){
            $(".slideShow").css("left",0);
        });
    }

    var AutoSlide = setInterval(function(){nextSlide()},3000);

    $(".slideWrap").hover(function(){
        clearInterval(AutoSlide);
    },function(){
        AutoSlide = setInterval(function(){nextSlide()},3000);
    });
    //PC 간편예약 버튼
    $(function(){
        $("ul.tab_menu>li").click(function(){
            $("ul.tab_menu>li").removeClass("active");
            $(this).addClass("active");
        
            var idx = $(this).index();
            if(idx == 0){
                $(".tab_contents>div").removeClass("active");
                $("#no01").addClass("active");
            } else if(idx == 1){
                $(".tab_contents>div").removeClass("active");
                $("#no02").addClass("active");
            }else if(idx == 2){
                $(".tab_contents>div").removeClass("active");
                $("#no03").addClass("active");
            }else{
                $(".tab_contents>div").removeClass("active");
                $("#no04").addClass("active");
            }
        });
    });

    $(function(){
        $(".tab_submenu>li").click(function(){
            $(".tab_submenu>li").removeClass("choice");
            $(this).addClass("choice");
            
            var idx = $(this).index();
            if(idx == 0){
                $(".tab_subcon>div").removeClass("choice");
                $("#ver01").addClass("choice");
            } else{
                $(".tab_subcon>div").removeClass("choice");
                $("#ver02").addClass("choice");
            }
        });
    });

    //모바일 항공편예약
    $(function(){
        $("#mb_ver .mb_submenu>li").click(function(){
            $("#mb_ver .mb_submenu>li").removeClass("choose");
            $(this).addClass("choose");
            
            var idx = $(this).index();
            if(idx == 0){
                $("#mb_ver .mb_subcon>div").removeClass("choose");
                $("#ver03").addClass("choose");
            } else{
                $("#mb_ver .mb_subcon>div").removeClass("choose");
                $("#ver04").addClass("choose");
            }
        });
    });

    //햄버거토글
    $("#menu_btn").click(function(){
        $("#gnb").fadeToggle(200);
        $(this).toggleClass("menuAni");
    });
    
// 모달창
$(document).ready(function(){
	$("div.contents, div.dep, div.des, div.calA, div.calB, div.pers").click(function(){
        document.body.style.overflow = "hidden";
        $(window).scrollTop(0);
		$("#gray").fadeIn(300);
		    return false; 
		});
	    $("#gray").click(function(){
		    $("#gray").fadeOut(200);
            document.body.style.overflow = "auto";
		});
    
        $("div.contents, div.dep, div.des, div.calA, div.calB, div.pers").click(function(){
            $("div.contents").animate({
                top:'-'+'750px'
                },300);
        }); 
        $("#gray").click(function(){
            $("div.contents").animate({
                top:'-'+'90px'
            },300);
        }); 

        //출발지
        $("div.dep").click(function(){
            $(".pop_dep").fadeIn(320);
                return false; 
        });
        $("#gray,div.contents, div.des, div.calA, div.calB, div.pers,.res, .pop_dep>span").click(function(){
            $(" .pop_dep").fadeOut(200);
        });
        $(".pop_dep>p").click(function(){//텍스트입력하기
            var textIn = $(this).text();
            $("#ver01>form>div.box01:nth-of-type(1)>a>span").text(textIn);
            $("#ver01>form>div.box01:nth-of-type(1)>a>img").hide();
        });
        $(".pop_dep>p").click(function(){//텍스트입력하기
            var textIn = $(this).text();
            $("#ver02>form>div.box01:nth-of-type(1)>a>span").text(textIn);
            $("#ver02>form>div.box01:nth-of-type(1)>a>img").hide();
        });
        
        //도착지
        $("div.des").click(function(){
            $(".pop_des").fadeIn(320);
                return false; 
        });
        $("#gray,div.contents, div.dep, div.calA, div.calB, div.pers, .pop_des>span").click(function(){
                $(".pop_des").fadeOut(200);
        });
        $(".pop_des>p").click(function(){//텍스트입력하기
            var textIn = $(this).text();
            $("#ver01>form>div.box01:nth-of-type(2)>a>span").text(textIn);
            $("#ver01>form>div.box01:nth-of-type(2)>a>img").hide();
        });
        $(".pop_des>p").click(function(){//텍스트입력하기
            var textIn = $(this).text();
            $("#ver02>form>div.box01:nth-of-type(2)>a>span").text(textIn);
            $("#ver02>form>div.box01:nth-of-type(2)>a>img").hide();
        });

        //가는날
        $("div.calA").click(function(){
            $(".pop_calA").fadeIn(320);
                return false; 
        });
        $("#gray,.ui-datepicker-calendar, div.contents, div.dep, div.des, div.calB, div.pers").click(function(){
                $(".pop_calA").fadeOut(200);
        });
        //오는날
        $("div.calB").click(function(){
            $(".pop_calB").fadeIn(320);
                return false; 
        });
        $("#gray,.ui-datepicker-calendar a, div.contents, div.dep, div.des, div.calA, div.pers ").click(function(){
            $(".pop_calB").fadeOut(200);
        });
        //탑승객
        $("div.pers").click(function(){
            $(".pop_pers").fadeIn(320);
                return false; 
        });
        $("#gray,div.contents, div.dep, div.des, div.calA, div.calB,.pop_pers>span").click(function(){
            $(" .pop_pers").fadeOut(200);
        });
        
        //성인
        var i =0;
        $("p.plus01").click(function(){
            $(".cnt01").text(++i);
        });
        $("p.minus01").click(function(){
            $(".cnt01").text(--i);
        });

        //소아
        var k =0;
        $("p.plus02").click(function(){
            $(".cnt02").text(++k);
        });
        $("p.minus02").click(function(){
            $(".cnt02").text(--k);
        });
        //유아
        var j =0;
        $("p.plus03").click(function(){
            $(".cnt03").text(++j);
        });
        $("p.minus03").click(function(){
            $(".cnt03").text(--j);
        });

        //#no02 예약조회
        $(".pop_dep>p").click(function(){//텍스트입력하기
            var textIn = $(this).text();
            $("#no02>div.box_contain>form>div.box01:nth-of-type(2)>a>span").text(textIn);
            $("#no02>div.box_contain>form>div.box01:nth-of-type(2)>a>img").hide();
        });
        $(".pop_des>p").click(function(){//텍스트입력하기
            var textIn = $(this).text();
            $("#no02>div.box_contain>form>div.box01:nth-of-type(3)>a>span").text(textIn);
            $("#no02>div.box_contain>form>div.box01:nth-of-type(3)>a>img").hide();
        });;
        
}); 


    
    