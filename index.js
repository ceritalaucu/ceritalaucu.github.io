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
    var hours=today.getHours();
    var minutes=today.getMinutes();
    var seconds=today.getSeconds();
    minutes=checkTime(minutes);
    seconds=checkTime(seconds);
    document.getElementById("nowTime").innerHTML=hours+" : "+minutes+" : "+seconds;
    var t=setTimeout(startTime,500);
}