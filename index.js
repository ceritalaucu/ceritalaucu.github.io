$(".checkbtn").click(function(){
    $(this).toggleClass("click");
    $(".header-content").toggleClass("click");
});
$(".idnstory-btn").click(function(){
    $("header .idnstory-show").toggleClass("show");
    $("header .first").toggleClass("rotate");
});