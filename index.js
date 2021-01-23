window.onscroll=function(){myFunction()};

var header=document.getElementById("header");

function myFunction(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.style.top = "0";
    } else {
        header.style.top = "-50px";
    }
}