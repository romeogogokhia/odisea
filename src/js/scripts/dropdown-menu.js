let dropdownBTN = document.querySelector('.dropdown-btn');
let dropdownMenu = document.getElementById('dropdown-header-menu');
let dropdownBTNArrow = document.querySelector('.dropdown-btn--arrow');

dropdownBTN.addEventListener('click', function (e) {
    if(dropdownMenu.classList.contains('active') && dropdownBTNArrow.classList.contains('active')){
        dropdownBTNArrow.classList.remove('active');
        dropdownMenu.classList.remove('active');
    }else{
        dropdownBTNArrow.classList.add('active');
        dropdownMenu.classList.add('active')
    }
});




//
// let dropdownItem = document.querySelectorAll('.dropdown-item');
// let dropdownItemArrow = document.querySelectorAll('.dropdown-item--arrow');
//
//
// if(window.screen.width < 576) {
//     dropdownItem.forEach(link => link.onclick = function (e) {
//         // e.preventDefault();
//         return false;
//         if (this.nextElementSibling.style.display === 'none' || this.nextElementSibling.style.display === '') {
//             dropdownItemArrow.forEach(function (icon) {
//                 icon.style.transform = 'translateY(-50%) rotate(0deg)';
//             });
//             this.nextElementSibling.style.display = 'flex';
//         } else {
//             dropdownItemArrow.forEach(function (icon) {
//                 icon.style.transform = 'translateY(-50%) rotate(-90deg)';
//             });
//             this.nextElementSibling.style.display = 'none'
//         }
//     });
// }
