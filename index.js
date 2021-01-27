$(".checkbtn").click(function(){
    $(this).toggleClass("click");
    $(".header-content").toggleClass("click");
});
$(".checkbtn-right").click(function(){
    $(this).toggleClass("click");
    $(".header-content").toggleClass("click");
});
$(".idnstory-btn").click(function(){
    $("header .idnstory-show").toggleClass("show");
    $("header .first").toggleClass("rotate");
});
$(".russtory-btn").click(function(){
    $("header .russtory-show").toggleClass("show");
    $("header .second").toggleClass("rotate");
});
$(".chnstory-btn").click(function(){
    $("header .chnstory-show").toggleClass("show");
    $("header .third").toggleClass("rotate");
});
$(".usastory-btn").click(function(){
    $("header .usastory-show").toggleClass("show");
    $("header .fourth").toggleClass("rotate");
});