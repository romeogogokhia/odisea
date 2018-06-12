let dropdownBTN = document.querySelector('.dropdown-btn');
let dropdownMenu = document.getElementById('dropdown-header-menu');
let dropdownBTNArrow = document.querySelector('.dropdown-btn--arrow');

if(window.screen.width < 992 && dropdownMenu.classList.contains('active')){
    dropdownMenu.classList.remove('active');
}

dropdownBTN.addEventListener('click', function (e) {
    if(dropdownMenu.classList.contains('active') && dropdownBTNArrow.classList.contains('active')){
        dropdownBTNArrow.classList.remove('active');
        dropdownMenu.classList.remove('active');
    }else{
        dropdownBTNArrow.classList.add('active');
        dropdownMenu.classList.add('active')
    }
});
