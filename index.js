$(".menubtn").click(function(){
    $(this).toggleClass("click");
    $(".header-content").toggleClass("click");
});
$(".learnbtn").click(function(){
    $(".header-nav .learn-item-show").toggleClass("show");
    $(".header-nav .first").toggleClass("rotate");
});

var days;
var today;
var hours;
var minutes;
var seconds;
var t;
function checkTime(i){
    if(i<10){i="0"+i}; // add zero in front of numbers < 10
    return i;
}
function roadToDays(){
    startTime
    if(hours==="00")days++;
    document.getElementById("bh-days").innerHTML="Day "+days;
    t=setTimeout(roadToDays,500);
}
function startTime(){
    today=new Date();
    hours=today.getUTCHours()+7;
    minutes=today.getUTCMinutes();
    seconds=today.getUTCSeconds();
    if((hours-24)>=0)hours=hours-24;
    days=19;
    hours=checkTime(hours);
    minutes=checkTime(minutes);
    seconds=checkTime(seconds);
    document.getElementById("nowTime").innerHTML=hours+" : "+minutes+" : "+seconds;
    t=setTimeout(startTime,500);
}