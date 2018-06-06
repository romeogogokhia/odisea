// slick in tabs

function Tabs() {
    let clear = function() {
        let menuElements = document.querySelectorAll('[data-tab]');
        for(let i = 0; i < menuElements.length ; i++) {
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

new Tabs();


function HandmadeTabs() {
    let clear = function() {
        let menuElements = document.querySelectorAll('[data-tab-handmade]');
        for(let i = 0; i < menuElements.length ; i++) {
            menuElements[i].classList.remove('active');
            let id = menuElements[i].getAttribute('data-tab-handmade');
            document.getElementById(id).classList.remove('active');
        }
    };

    let change = function(e) {
        clear();
        e.target.classList.add('active');
        let id = e.currentTarget.getAttribute('data-tab-handmade');
        document.getElementById(id).classList.add('active');
    };

    let bindAll = function() {
        let menuElements = document.querySelectorAll('[data-tab-handmade]');
        for(let i = 0; i < menuElements.length ; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    };

    bindAll();
}

new HandmadeTabs()

function CosmeticTabs() {
    let clear = function() {
        let menuElements = document.querySelectorAll('[data-tab-cosmetics]');
        for(let i = 0; i < menuElements.length ; i++) {
            menuElements[i].classList.remove('active');
            let id = menuElements[i].getAttribute('data-tab-cosmetics');
            document.getElementById(id).classList.remove('active');
        }
    };

    let change = function(e) {
        clear();
        e.target.classList.add('active');
        let id = e.currentTarget.getAttribute('data-tab-cosmetics');
        document.getElementById(id).classList.add('active');
    };

    let bindAll = function() {
        let menuElements = document.querySelectorAll('[data-tab-cosmetics]');
        for(let i = 0; i < menuElements.length ; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    };

    bindAll();
}

new CosmeticTabs();

function BookTabs() {
    let clear = function() {
        let menuElements = document.querySelectorAll('[data-tab-books]');
        for(let i = 0; i < menuElements.length ; i++) {
            menuElements[i].classList.remove('active');
            let id = menuElements[i].getAttribute('data-tab-books');
            document.getElementById(id).classList.remove('active');
        }
    };

    let change = function(e) {
        clear();
        e.target.classList.add('active');
        let id = e.currentTarget.getAttribute('data-tab-books');
        document.getElementById(id).classList.add('active');
    };

    let bindAll = function() {
        let menuElements = document.querySelectorAll('[data-tab-books]');
        for(let i = 0; i < menuElements.length ; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    };

    bindAll();
}

new BookTabs();