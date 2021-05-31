$(".menubtn").click(function(){
    $(this).toggleClass("click");
    $(".menu-content").toggleClass("click");
});

document.addEventListener("DOMContentLoaded", function() {
    const learnBtn = document.querySelector(".learnbtn");
    learnBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const showLearnItem = document.querySelector(".learn-item");
        const rotateLearnBtn = document.querySelector(".first");
        if (showLearnItem.style.display === "block"){
            showLearnItem.style.display = "none";
            rotateLearnBtn.style.transform = "none";
        } else {
            showLearnItem.style.display = "block";
            rotateLearnBtn.style.transform = "rotate(-180deg)";
        }
    })
});

// var days=20;
var preloader =document.querySelector(".loading-page");

function preloading(){
    preloader.style.display = "none";
}