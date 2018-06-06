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