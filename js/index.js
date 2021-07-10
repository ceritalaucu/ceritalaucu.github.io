window.addEventListener("load", () => {
    const preloader = document.querySelector(".loading-page");
    preloader.style.display = "none";
})

document.addEventListener("DOMContentLoaded", function() {
    const getCSS = el => {
        return window.getComputedStyle(el,null);
    };

    const menuBtn = document.querySelector(".menubtn");
    menuBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const menuIcon = menuBtn.firstElementChild;
        const menuContent = document.querySelector(".menu-content");
        if (menuIcon.classList.contains("bi-list")){
            menuIcon.classList.add("bi-x");
            menuIcon.classList.remove("bi-list");
            menuContent.style.left = 0;
        } else {
            menuIcon.classList.add("bi-list");
            menuIcon.classList.remove("bi-x");
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

    const themeSwitcher = document.querySelector(".theme-switcher");
    themeSwitcher.addEventListener("click", changeTheme = (e) => {
        e.preventDefault();
        if (e.target.classList.contains("bi-sun")) {
            e.target.classList.add("bi-moon");
            e.target.classList.remove("bi-sun");
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            e.target.classList.add("bi-sun");
            e.target.classList.remove("bi-moon");
            document.documentElement.setAttribute("data-theme", "light");
        }
    });
});