let cabinetBtn = document.querySelector('.cabinet--btn');
let cabinetLogin = document.querySelector('.cabinet-login');

cabinetBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if(window.getComputedStyle(cabinetLogin).getPropertyValue('display') === 'none' || window.getComputedStyle(cabinetLogin).getPropertyValue('display') === ''){
        Object.assign(cabinetLogin.style, {display: 'block'});
    }else{
        Object.assign(cabinetLogin.style, {display: 'none'});
    }
});