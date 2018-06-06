window.slick = require('slick-carousel');

$('.main-slider').slick({

    // normal options...
    infinite: true,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    slidesToShow: 1,

    // the magic
    responsive: [{
        breakpoint: 420,
        settings:{
            dots: false
        }
    },{
        breakpoint: 300,
        settings: "unslick" // destroys slick
    }]
});


let $carousel = $(".main-slider");

$(document).on('keydown', function(e) {
    if(e.keyCode == 37) {
        $carousel.slick('slickPrev');
    }
    if(e.keyCode == 39) {
        $carousel.slick('slickNext');
    }
});


$(".vacancy-slider").slick({

    // normal options...
    infinite: true,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    slidesToShow: 1,

    // the magic
    responsive: [{
        breakpoint: 576,
        settings:{
            arrows: false
        }
    },{
        breakpoint: 300,
        settings: "unslick" // destroys slick
    }]
});

$(".sl-product").slick({

    // normal options...
    infinite: true,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    slidesToShow: 4,

    // the magic
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3
        }
    },{
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
    },{
        breakpoint: 576,
        settings:{
            slidesToShow: 1
        }
    },{
        breakpoint: 300,
        settings: "unslick" // destroys slick
    }]
});


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    dots: false,
    focusOnSelect: true,

    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 4
        },
    },{
        breakpoint: 767.98,
        settings: {
            slidesToShow: 5
        },
    },{
        breakpoint: 567.98,
        settings: {
            slidesToShow: 4
        },
    },{
        breakpoint: 399.98,
        settings: {
            slidesToShow: 3
        },
    }]
});



