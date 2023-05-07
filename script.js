// preloaders
let loader=document.querySelector(".preloader");  
window.addEventListener("load",()=>{  
  loader.style.display="none"  
}) 


let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector(' .navbar');
let logo = document.querySelector('.logo_change');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
var logoSrc = "logo2.png";
var altLogoSrc = "logo.png";
var isAltLogo = false;
let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');
    document.body.classList.toggle("active1");
    if (isAltLogo) {
        logo.setAttribute("src", logoSrc);
        isAltLogo = false;
    } else {
        logo.setAttribute("src", altLogoSrc);
        isAltLogo = true;
    }

}
menu.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}



//owl Crousel
var swiper = new Swiper(".slide-content", {
    autoplay: {
        delay: 1800,
    },
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },

});






