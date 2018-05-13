import "jquery"
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

window.slick = require('slick-carousel');

let hamburger = document.querySelector('.hamburger-top');
let navigation = document.getElementById('navigation');

let dropdownBTN = document.querySelector('.dropdown-btn');
let dropdownMenu = document.getElementById('dropdown-menu');
let dropdownBTNArrow = document.querySelector('.dropdown-btn--arrow');


hamburger.addEventListener('click', function () {
    if(this.classList.contains('is-active')){
        this.classList.remove('is-active');
        navigation.style.display = 'none';
    }else{
        this.classList.add('is-active');
        navigation.style.display = 'block';
    }
});


let cabinetBtn = document.querySelector('.cabinet--btn');
let cabinetLogin = document.querySelector('.cabinet-login');

cabinetBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(window.getComputedStyle(cabinetLogin).getPropertyValue("opacity"));
    if(window.getComputedStyle(cabinetLogin).getPropertyValue("opacity") === '0' || window.getComputedStyle(cabinetLogin).getPropertyValue("opacity") === ''){
        cabinetLogin.style.opacity = 1
    }else{
        cabinetLogin.style.opacity = 0
    }
});

dropdownBTN.addEventListener('click', ()=>{
    if(dropdownMenu.style.display === 'none'){
        dropdownBTNArrow.style.transform = 'translateY(-50%) rotate(180deg)';
        dropdownMenu.style.display = 'block'
    }else{
        dropdownBTNArrow.style.transform = 'translateY(-50%) rotate(360deg)';
        dropdownMenu.style.display = 'none'
    }
})



$(".main-slider").slick({

    // normal options...
    infinite: true,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    slidesToShow: 1,

    // the magic
    responsive: [{
        breakpoint: 420,
        settings:{
            dots: false
        }
    },{
        breakpoint: 300,
        settings: "unslick" // destroys slick
    }]
});

let $carousel = $(".main-slider");
$(document).on('keydown', function(e) {
    if(e.keyCode == 37) {
        $carousel.slick('slickPrev');
    }
    if(e.keyCode == 39) {
        $carousel.slick('slickNext');
    }
});