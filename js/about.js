window.addEventListener("load", () => {
    const preloader = document.querySelector(".loading-page");
    preloader.style.display = "none";

    let today;
    let hours;
    let minutes;
    let seconds;
    let t;

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
    startTime();
})

const getCSS = (e) => {
    return window.getComputedStyle(e,null);
};

// ______________Flex menu
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => {
    const menuContent = document.querySelector(".menu-content");
    if (menuButton.classList.contains("bi-list")) {
        menuButton.classList.add("bi-x");
        menuButton.classList.remove("bi-list");
        menuContent.style.left = 0;
        document.body.style.overflow = "hidden";
    } else {
        menuButton.classList.add("bi-list");
        menuButton.classList.remove("bi-x");
        menuContent.style.left = "-100%";
        document.body.style.overflow = "visible";
    }
});

// ______________Dropdown sub menu
const menuA = document.querySelector(".menu-a");
menuA.addEventListener("click", () => {
    const target = menuA.lastElementChild;
    if (getCSS(target).display === "none") {
        target.style.display = "block";
    } else {
        target.style.display = "none";
    }
});

// ______________Full screen
$(document).on("click", ".fullscreen-button", function toggleFullScreen() {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
})

// ______________Switch theme
const themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (themeButton.classList.contains("bi-sun")) {
        themeButton.classList.add("bi-moon");
        themeButton.classList.remove("bi-sun");
    } else {
        themeButton.classList.add("bi-sun");
        themeButton.classList.remove("bi-moon");
    }
});

const slider = document.querySelector(".slider");
let pressed = false;
let startX;
let scrollLeft;
slider.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
})
slider.addEventListener("mouseleave", () => {
    pressed = false;
})
slider.addEventListener("mouseup", () => {
    pressed = false;
})
slider.addEventListener("mousemove", (e) => {
    if(!pressed || window.innerWidth>=1280) return; // stop from scrolling
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
})
slider.addEventListener("touchstart", (e) => {
    for (let i=0;i<e.changedTouches.length;i++) {
        pressed = true;
        startX = e.changedTouches[i].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;    
    }
})
slider.addEventListener("touchend", () => {
    pressed = false;
})
slider.addEventListener("touchmove", (e) => {
    for (let i=0;i<e.changedTouches.length;i++) {
        pressed = true;
        if(window.innerWidth>=1280) return; // stop from scrolling
        e.preventDefault();
        const x = e.changedTouches[i].pageX - slider.offsetLeft;
        const walk = x - startX;
        slider.scrollLeft = scrollLeft - walk;
    }
})