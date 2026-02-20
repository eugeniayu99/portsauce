//k02.html FAQ

//햄버거토글
$(".k02_box01>.qbox>p").click(function(){
    $(".k02_box01>.abox").slideToggle(300);
    $(this).toggleClass("aboxAni");
});
$(".k02_box02>.qbox>p").click(function(){
    $(".k02_box02>.abox").slideToggle(300);
    $(this).toggleClass("aboxAni");
});
$(".k02_box03>.qbox>p").click(function(){
    $(".k02_box03>.abox").slideToggle(300);
    $(this).toggleClass("aboxAni");
});
$(".k02_box04>.qbox>p").click(function(){
    $(".k02_box04>.abox").slideToggle(300);
    $(this).toggleClass("aboxAni");
});
$(".k02_box05>.qbox>p").click(function(){
    $(".k02_box05>.abox").slideToggle(300);
    $(this).toggleClass("aboxAni");
});
$(".k02_box06>.qbox>p").click(function(){
    $(".k02_box06>.abox").slideToggle(300);
    $(this).toggleClass("aboxAni");
});
$(".k02_box07>.qbox>p").click(function(){
    $(".k02_box07>.abox").slideToggle(300);
    $(this).toggleClass("aboxAni");
});
$(".k02_box08>.qbox>p").click(function(){
    $(".k02_box08>.abox").slideToggle(300);
    $(this).toggleClass("aboxAni");
});
$(".k02_box09>.qbox>p").click(function(){
    $(".k02_box09>.abox").slideToggle(300);
    $(this).toggleClass("aboxAni");
});
$(".k02_box10>.qbox>p").click(function(){
    $(".k02_box10>.abox").slideToggle(300);
    $(this).toggleClass("aboxAni");
});
$(".k02_box11>.qbox>p").click(function(){
    $(".k02_box11>.abox").slideToggle(300);
    $(this).toggleClass("aboxAni");
});










//k03.html 회원비회원토글
$(function(){
    $("ul.tab_menu>li").click(function(){
        $("ul.tab_menu>li").removeClass("active");
        /*$(this).siblings("li").addClass("active");*/
        $(this).addClass("active");
        
        var idx = $(this).index();
        if(idx == 0){
            $(".tab_contents>div").removeClass("active");
            $("#k03_log").addClass("active");
        } else if(idx == 1){
            $(".tab_contents>div").removeClass("active");
            $("#k03_nlog").addClass("active");
        }
    });
}); 


