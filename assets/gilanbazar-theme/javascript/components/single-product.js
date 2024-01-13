const $ = jQuery.noConflict();

$(document).ready(function() {
    const productQuantityInput = $('.product-quantity-input')
    productQuantityInput.on('click', '.plus', function () {
        const $qty = $(this).closest('.product-quantity-input').find('.qty');
        $qty.val(parseInt($qty.val()) + 1);
        $qty.trigger('change');
    });

    productQuantityInput.on('click', '.minus', function () {
        const $qty = $(this).closest('.product-quantity-input').find('.qty');
        const value = parseInt($qty.val()) - 1;
        $qty.val(value >= 1 ? value : 1);
        $qty.trigger('change');
    });
});
