const $ = jQuery.noConflict();

$(document).ready(function () {
    $('.js-progress-container').each(function () {
        setPercentage($(this));
    });

    function setPercentage(progressContainer) {
        const percentage = $(progressContainer).attr('data-percentage') + '%';
        const progressEl = $(progressContainer).find('.progress');
        const percentageEl = $(progressContainer).find('.percentage');

        progressEl.css('width', percentage);
        percentageEl.text(percentage);
        percentageEl.css('right', percentage);
    }

    const readMoreButton = $('.company-single__intro-read-more-btn');
    const fullContent = $('.company-single__intro-full-content');
    if (readMoreButton.length > 0) {
        readMoreButton.on('click', function () {
            fullContent.css('display', 'inline'); // Display the full content
            readMoreButton.css('display', 'none'); // Hide the "Read More" button
        });
    }

    /** innertext gform submit button */
    const button = $('#gform_submit_button_1');
    if (button.length > 0) {
        const spanElement = button.find('span');
        if (spanElement.length > 0) {
            spanElement.text("ارسال");
        }
    }

    //tooltip request cas number
    $('.acf-field-650c08f2058e1 .acf-input').mouseenter(function () {
        // Show the tooltip div
        $('.acf-field-650c08f2058e1 .acf-label .description').css('display', 'block');
    });

    $('.acf-field-650c08f2058e1 .acf-input').mouseleave(function () {
        // Hide the tooltip div
        $('.acf-field-650c08f2058e1 .acf-label .description').css('display', 'none');
    });

    //tooltip product cas number
    $('.acf-field-650ae798cab51 .acf-input').mouseenter(function () {
        // Show the tooltip div
        $('.acf-field-650ae798cab51 .acf-label .description').css('display', 'block');
    });

    $('.acf-field-650ae798cab51 .acf-input').mouseleave(function () {
        // Hide the tooltip div
        $('.acf-field-650ae798cab51 .acf-label .description').css('display', 'none');
    });

    let maxHeight = 0;
    let extraHeight = 16;
    $(".product-slider__slide").each(function () {
        const containerHeight = $(this).height();
        maxHeight = Math.max(maxHeight, containerHeight);
    });
    maxHeight += extraHeight;
    $(".product-slider__slide").height(maxHeight);

    // Select the file input
    const fileInput = $("#wpua-file-existing");

    // Create a label element
    const label = $("<label for='wpua-file-existing' class='wpua-file-existing-label'>یک تصویر کاربری انتخاب کنید.</label>");

    // Insert the label before the file input
    fileInput.before(label);

    // Add an event listener to update the label text when a file is selected
    fileInput.on('change', function () {
        if (this.files && this.files.length > 0) {
            label.text(this.files[0].name); // Display the selected file name
        } else {
            label.text('انتخاب تصویر'); // Display default text if no file is selected
        }
    });

});

function positionButton() {
    const windowHeight = $(window).height();
    const buttonHeight = $('.archive-product__message-group-button').outerHeight();
    const desiredBottomPosition = 32;

    // Calculate the bottom position
    // Set the 'bottom' CSS property
    $('.archive-product__message-group-button').css('bottom', desiredBottomPosition + 'px');
}

// Call the function on page load and when the window is resized
$(document).ready(function() {
    positionButton();
});

$(window).resize(function() {
    positionButton();
});