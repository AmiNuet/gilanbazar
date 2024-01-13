// eslint-disable-next-line no-undef
const $ = jQuery.noConflict();

$(document).ready(() => {
    // eslint-disable-next-line no-undefined
    if ($('#anchor-menu').data('anchor') !== undefined) {
        const anchorElements = document.querySelectorAll('[data-anchor-active=\'true\']');

        $(anchorElements).each(function () {
            const anchorName = $(this).data('anchor-name');
            const anchorUrl = $(this).attr('id');
            $('#anchor-menu').append(`<li><a href="#${anchorUrl}">${anchorName}</a></li>`);
        });
    }
});

