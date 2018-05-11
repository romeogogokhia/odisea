import "jquery"
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

window.slick = require('slick-carousel');

let hamburger = document.querySelector('.hamburger-top');
let navigation = document.getElementById('navigation');

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



$(".main-slider").slick({

    // normal options...
    infinite: false,

    // the magic
    responsive: [{

        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            infinite: true
        }

    }, {

        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            dots: true
        }

    }, {

        breakpoint: 300,
        settings: "unslick" // destroys slick

    }]
});