
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menubtn");
    menuBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const menuContent = document.querySelector(".menu-content");
        if (menuBtn.firstElementChild.className === "menu"){
            menuBtn.firstElementChild.classList.add("close");
            menuBtn.firstElementChild.classList.remove("menu");
            console.log("menu telah dibuka")
            menuContent.style.left = 0;
        } else {
            menuBtn.firstElementChild.classList.add("menu");
            menuBtn.firstElementChild.classList.remove("close");
            console.log("menu telah ditutup");
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
var preloader =document.querySelector(".loading-page");
var today;
var hours;
var minutes;
var seconds;
var t;

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