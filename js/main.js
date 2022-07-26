var elSiteHeaderToggleBtn = document.querySelector(".site-header__menu-btn");
var elHeader = document.querySelector(".site-header");
var elBody = document.querySelector(".body");

elSiteHeaderToggleBtn.addEventListener("click", function(){
    elHeader.classList.toggle("site-header--open");
    elBody.classList.toggle("body--active");
})