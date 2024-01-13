window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const locationsMenu = document.querySelector('#locationsMenuDropdown');
    const closeLocationsMenu = document.querySelectorAll('.locations-menu__close');

    if (!locationsMenu) {
        return;
    }
    locationsMenu.addEventListener('click', () => {
        const locationsMenuAria = document.querySelector('#locationsMenuDropdown').attributes['aria-expanded'].value;

        if (locationsMenuAria === 'true') {
            body.classList.add('overflow-hidden');
        } else {
            body.classList.remove('overflow-hidden');
        }
    });

    for (const [, item] of closeLocationsMenu.entries()) {
        item.addEventListener('click', () => {
            locationsMenu.click();
        });
    }
});
