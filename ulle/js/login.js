$(document).ready(function(){
    $("#gnb>li").hover(function(){
        $(this).children(".sub").stop().slideDown(400);
    },function(){
        $(this).children(".sub").stop().slideUp(400);
    });

    //햄버거토글
    $("#menu_btn").click(function(){
        $("#gnb").fadeToggle(200);
        $(this).toggleClass("menuAni");
    });
    
    //로그인
    $(function(){
        $("ul.tab_menu>li").click(function(){
            $("ul.tab_menu>li").removeClass("active");
            /*$(this).siblings("li").addClass("active");*/
            $(this).addClass("active");
            
            var idx = $(this).index();
            if(idx == 0){
                $(".tab_contents>div").removeClass("active");
                $("#ltx_log").addClass("active");
            } else if(idx == 1){
                $(".tab_contents>div").removeClass("active");
                $("#ltx_nlog").addClass("active");
            }
        });
    }); 
});
