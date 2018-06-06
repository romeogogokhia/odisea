let dropdownBTN = document.querySelector('.dropdown-btn');
let dropdownMenu = document.getElementById('dropdown-menu');
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
