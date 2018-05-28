// slick in tabs
function Tabs() {
    let clear = function() {
        let menuElements = document.querySelectorAll('[data-tab]');
        for(let i = 0; i < menuElements.length ; i++) {
            console.log(menuElements[i]);
            menuElements[i].classList.remove('active');
            let id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
        }
    };

    let change = function(e) {
        clear();
        e.target.classList.add('active');
        let id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active');
    };

    let bindAll = function() {
        let menuElements = document.querySelectorAll('[data-tab]');
        for(let i = 0; i < menuElements.length ; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    };

    bindAll();
}

let connectTabs = new Tabs();