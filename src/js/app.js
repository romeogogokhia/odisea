import "jquery"
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import "./vendor/vendor"
import "./scripts/header-dropdown-menu"
import "./scripts/hamburger-menu"
import "./scripts/header_cabinet-login"



let dropdownItem = document.querySelectorAll('.dropdown-item');
let dropdownItemArrow = document.querySelectorAll('.dropdown-item--arrow');


if(window.screen.width < 576) {
    dropdownItem.forEach(link => link.onclick = function (e) {
        e.preventDefault();
        console.log(this)
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

