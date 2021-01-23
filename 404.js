window.onscroll=function(){myFunction()};

var header=document.getElementById("header");
var sticky=header.offsetTop;

function myFunction(){
    if(window.pageYOffset>sticky){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }

    // if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //     header.style.top = "0";
    // } else {
    //     header.style.top = "-50px";
    // }
}