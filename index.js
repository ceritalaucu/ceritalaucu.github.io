$(".menubtn").click(function(){
    $(this).toggleClass("click");
    $(".header-content").toggleClass("click");
});
$(".learnbtn").click(function(){
    $(".header-nav .learn-item-show").toggleClass("show");
    $(".header-nav .first").toggleClass("rotate");
});

function checkTime(i){
    if(i<10){i="0"+i}; // add zero in front of numbers < 10
    return i;
}
function startTime(){
    var today=new Date();
    var hours=today.getUTCHours()+7;
    var minutes=today.getUTCMinutes();
    var seconds=today.getUTCSeconds();
    if((hours-24)>=0)hours=hours-24;
    minutes=checkTime(minutes);
    seconds=checkTime(seconds);
    document.getElementById("nowTime").innerHTML=hours+" : "+minutes+" : "+seconds;
    var t=setTimeout(startTime,500);
}