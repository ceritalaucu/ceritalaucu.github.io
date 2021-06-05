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
    });
});

// var days=20;
let preloader =document.querySelector(".loading-page");
let today;
let hours;
let minutes;
let seconds;
let t;

function preloading(){
    preloader.style.display = "none";
}
function checkTime(i){
    if(i<10){i="0"+i}; // add zero in front of numbers < 10
    return i;
}
// function roadToDays(){
//     startTime
//     if(hours==00)days=days+1;
//     document.getElementById("bh-days").innerHTML="Day "+days;
//     t=setTimeout(roadToDays,1000);
// }
function startTime(){
    today=new Date();
    hours=today.getUTCHours()+7;
    minutes=today.getUTCMinutes();
    seconds=today.getUTCSeconds();
    if((hours-24)>=0)hours=hours-24;
    hours=checkTime(hours);
    minutes=checkTime(minutes);
    seconds=checkTime(seconds);
    document.querySelector(".nowTime").innerHTML=hours+" : "+minutes+" : "+seconds;
    t=setTimeout(startTime,500);
}

const slider = document.querySelector(".slider");

let pressed = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
    pressed = false;
});
slider.addEventListener("mouseup", () => {
    pressed = false;
});
slider.addEventListener("mousemove", (e) => {
    if(!pressed || window.innerWidth>=1280) return; // stop from scrolling
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener("touchstart", (e) => {
    for (let i=0;i<e.changedTouches.length;i++) {
        pressed = true;
        startX = e.changedTouches[i].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;    
    }
});
slider.addEventListener("touchend", () => {
    pressed = false;
});
slider.addEventListener("touchmove", (e) => {
    for (let i=0;i<e.changedTouches.length;i++) {
        pressed = true;
        if(window.innerWidth>=1280) return; // stop from scrolling
        e.preventDefault();
        const x = e.changedTouches[i].pageX - slider.offsetLeft;
        const walk = x - startX;
        slider.scrollLeft = scrollLeft - walk;
    }
});