let cabinetBtn = document.querySelector('.cabinet--btn');
let cabinetLogin = document.querySelector('.cabinet-login');

cabinetBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if(window.getComputedStyle(cabinetLogin).getPropertyValue("opacity") === '0' || window.getComputedStyle(cabinetLogin).getPropertyValue("opacity") === ''){
        Object.assign(cabinetLogin.style, {opacity: 1, zIndex: 13});
        //cabinetLogin.style.opacity = 1
    }else{
        Object.assign(cabinetLogin.style, {opacity: 0, zIndex: 10});
        // cabinetLogin.style.opacity = 0
    }
});