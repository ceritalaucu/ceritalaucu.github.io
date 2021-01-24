$(".checkbtn").click(function(){
    $(this).toggleClass("click");
    $(".header-content").toggleClass("click");
});
$(".kisah-btn").click(function(){
    $("#header ul .kisah-show").toggleClass("show");
    $("#header ul .first").toggleClass("rotate");
});