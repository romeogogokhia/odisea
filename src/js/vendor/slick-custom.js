window.slick = require('slick-carousel');



$(".main-slider").slick({

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




let $carousel = $(".main-slider");

$(document).on('keydown', function(e) {
    if(e.keyCode == 37) {
        $carousel.slick('slickPrev');
    }
    if(e.keyCode == 39) {
        $carousel.slick('slickNext');
    }
});