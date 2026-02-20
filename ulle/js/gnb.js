$(document).ready(function(){
    $("#gnb>li").hover(function(){
        $(this).children(".sub").stop().slideDown(400);
    },function(){
        $(this).children(".sub").stop().slideUp(400);
    });
});    
    
//햄버거토글
$("#menu_btn").click(function(){
    $("#gnb").fadeToggle(200);
    $(this).toggleClass("menuAni");
});