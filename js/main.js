var elSiteHeaderToggleBtn = document.querySelector(".site-header__menu-btn");
var elHeader = document.querySelector(".site-header");
var elBody = document.querySelector(".body");

elSiteHeaderToggleBtn.addEventListener("click", function(){
    elHeader.classList.toggle("site-header--open");
    elBody.classList.toggle("body--active");
})

//for modal
var elModalOpenBtn = document.querySelector(".js-modal-open-btn");
var elModal = document.querySelector(".modal");
var elModalCloseBtn = document.querySelector(".js-modal-close-btn");

elModalOpenBtn.addEventListener("click", function(){
    elModal.classList.add("modal--show")
})

elModalCloseBtn.addEventListener("click", function(){
    elModal.classList.remove("modal--show")
})
