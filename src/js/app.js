import "jquery"
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import "./vendor/vendor"
import "./slick-tabs"



window.slick = require('slick-carousel');

let hamburger = document.querySelector('.hamburger-top');
let navigation = document.getElementById('navigation');

let dropdownBTN = document.querySelector('.dropdown-btn');
let dropdownMenu = document.getElementById('dropdown-menu');
let dropdownBTNArrow = document.querySelector('.dropdown-btn--arrow');

let dropdownItem = document.querySelectorAll('.dropdown-item');
let dropdownSide = document.querySelectorAll('.dropdown-side');
let dropdownItemArrow = document.querySelectorAll('.dropdown-item--arrow');


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
        Object.assign(cabinetLogin.style, {opacity: 1, zIndex: 13});
        //cabinetLogin.style.opacity = 1
    }else{
        Object.assign(cabinetLogin.style, {opacity: 0, zIndex: 10});
        // cabinetLogin.style.opacity = 0
    }
});

dropdownBTN.addEventListener('click', ()=> {
    if(dropdownMenu.style.display === 'none'){
        dropdownBTNArrow.style.transform = 'translateY(-50%) rotate(180deg)';
        dropdownMenu.style.display = 'block'
    }else{
        dropdownBTNArrow.style.transform = 'translateY(-50%) rotate(360deg)';
        dropdownMenu.style.display = 'none'
    }
});

if(window.screen.width < 576) {
    dropdownItem.forEach(link => link.onclick = function (e) {
        e.preventDefault();
        if (this.nextElementSibling.style.display === 'none' || this.nextElementSibling.style.display === '') {
            dropdownItemArrow.forEach(function (icon) {
                icon.style.transform = 'translateY(-50%) rotate(0deg)';
            });
            this.nextElementSibling.style.display = 'flex';
        } else {
            dropdownItemArrow.forEach(function (icon) {
                icon.style.transform = 'translateY(-50%) rotate(-90deg)';
            });
            this.nextElementSibling.style.display = 'none'
        }
    });
}




