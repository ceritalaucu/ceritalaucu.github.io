$(".checkbtn").click(function(){
    $(this).toggleClass("click");
    $(".header-content").toggleClass("click");
});
$(".kisah-btn").click(function(){
    $("header .kisah-show").toggleClass("show");
    $("header .first").toggleClass("rotate");
});