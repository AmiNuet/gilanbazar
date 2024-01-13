/**
 * Open section with class.
 * @param {string} section Which section to open.
 * @returns {void}
 */
const openSection = section => {
    section.classList.toggle('footer__menu-wrapper--is-open');
};

document.addEventListener('DOMContentLoaded', () => {
    const footerSections = document.querySelectorAll('.footer__menu-wrapper');

    for (const section of footerSections) {
        section.querySelector('.footer__title').addEventListener('click', () => {
            const mobileView = window.matchMedia('(max-width: 767px)').matches;
            if (mobileView) {
                openSection(section);
            }
        });
    }
});
