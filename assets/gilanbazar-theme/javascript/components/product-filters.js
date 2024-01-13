/**
 */
const $ = jQuery.noConflict();

$(document).ready(function() {

    const rangeInputOrder = $('#min-order-quantity');
    const rangeOutputOrder = $('#min-order-quantity-value');

    const rangeInputPurity = $('#product-purity-filter');
    const rangeOutputPurity = $('#product-purity-filter-value');

    // Update the output element with the initial value
    rangeOutputOrder.text(rangeInputOrder.val());
    rangeOutputPurity.text(rangeInputPurity.val());

    // Add an event listener to update the output as the range input changes
    rangeInputOrder.on('input', function() {
        rangeOutputOrder.text($(this).val());
    });

    rangeInputPurity.on('input', function() {
        rangeOutputPurity.text($(this).val());
    });


    $("#country-search").on("input", function() {
        const searchTerm = $(this).val().toLowerCase();
        $("label:has(input[name='product_country[]'])").each(function() {
            const countryName = $(this).text().toLowerCase();
            if (countryName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    $("#location-search").on("input", function() {
        const searchTerm = $(this).val().toLowerCase();
        $("label:has(input[name='product_location[]'])").each(function() {
            const countryName = $(this).text().toLowerCase();
            if (countryName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    $("#brand-search").on("input", function() {
        const searchTerm = $(this).val().toLowerCase();
        $("label:has(input[name='product_brand[]'])").each(function() {
            const countryName = $(this).text().toLowerCase();
            if (countryName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    $("#grade-search").on("input", function() {
        const searchTerm = $(this).val().toLowerCase();
        $("label:has(input[name='product_grade[]'])").each(function() {
            const countryName = $(this).text().toLowerCase();
            if (countryName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    $('#product-filter-form').submit(function(event) {
        console.log('hii');
        // Get the current URL
        let currentURL = window.location.href;
        // Remove the /page/X part from the URL
        currentURL = currentURL.replace(/\/page\/\d+/, '');
        // Update the form action attribute
        $(this).attr('action', currentURL);
        // Now, you can submit the form
        this.submit();
    });

});
