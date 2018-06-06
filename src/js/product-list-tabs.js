let productListTitle = document.querySelectorAll('.product-list-title');

productListTitle.forEach(list => {
    list.addEventListener('click', function (e) {
        if(this.classList.contains('minus')){
            this.classList.remove('minus');
            this.classList.add('plus');
            this.parentNode.nextElementSibling.style.display = 'none';
        }else{
            this.classList.remove('plus');
            this.classList.add('minus');
            this.parentNode.nextElementSibling.style.display = 'block';
        }
    })
})