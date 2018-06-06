document.addEventListener("DOMContentLoaded", function() {

    let product_list_range = document.getElementById('product_list_range');
    let product_list_price_min = document.getElementById('product_list_price_min');
    let product_list_price_max = document.getElementById('product_list_price_max');

    noUiSlider.create(product_list_range, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    product_list_range.noUiSlider.on('update', function (values) {
        product_list_price_min.value = values[0];
        product_list_price_max.value = values[1];
    });

});



