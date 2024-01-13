// eslint-disable-next-line no-undef
const $ = jQuery.noConflict();
$(document).ready(() => {
    $('.scroll-explore-button').click(() => {
        $('html,body').animate({
            scrollTop: $('section').offset().top + 420,
        },
        'slow');
    });
});
