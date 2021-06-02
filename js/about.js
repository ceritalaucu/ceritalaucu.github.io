document.addEventListener("DOMContentLoaded", function() {
    const getCSS = el => {
        return window.getComputedStyle(el,null);
    };
    const menuBtn = document.querySelector(".menubtn");
    menuBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const menuIcon = menuBtn.firstElementChild;
        const menuContent = document.querySelector(".menu-content");
        if (menuIcon.classList.contains("fa-bars")){
            menuIcon.classList.add("fa-times");
            menuIcon.classList.remove("fa-bars");
            menuContent.style.left = 0;
        } else {
            menuIcon.classList.add("fa-bars");
            menuIcon.classList.remove("fa-times");
            menuContent.style.left = "-100%";
        }
    });
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