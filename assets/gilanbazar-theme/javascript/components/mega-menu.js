/**
 * Mega menu lvl 1 component.
 * @returns {void}
 */
const megaMenuLvl1 = function() {
    const menuMain = document.querySelectorAll('.menu-item-has-children.dropdown.has-megamenu > a');
    if (!menuMain) {
        return;
    }

    for (const [, item] of menuMain.entries()) {
        item.addEventListener('click', () => {
            // on click set all aria-expanded to false
            const expandedItems = document.querySelectorAll('.megamenu a[aria-expanded="true"]');

            for (const item of expandedItems.entries()) {
                item.setAttribute('aria-expanded', 'false');
            }

            // on click set all classes to display none
            const newClasses = [
                document.querySelectorAll('.megamenu__menu-children-sec'),
                document.querySelectorAll('.megamenu__menu-children-sec ul'),
                document.querySelectorAll('.megamenu__menu-children-third'),
                document.querySelectorAll('.megamenu__menu-children-third ul'),
                document.querySelectorAll('.megamenu__menu-children-third .btn'),
            ];

            // on click hide all elements
            for (const element of newClasses) {
                for (const [, item] of element.entries()) {
                    item.style.display = 'none';
                }
            }
        });
    }
};

/**
 * Mega menu lvl 2 component.
 * @returns {void}
 */
const megaMenuLvl2 = function() {
    const menuChildren = document.querySelectorAll('.megamenu__menu-children .has-children a');
    if (!menuChildren) {
        return;
    }

    for (const [, item] of menuChildren.entries()) {
        // eslint-disable-next-line max-statements
        item.addEventListener('click', function(event) {
            event.preventDefault();

            // on click set all aria-expanded to false and current item to true
            const expandedItems = document.querySelectorAll('.megamenu__menu-children a[aria-expanded="true"]');

            for (const item of expandedItems) {
                item.setAttribute('aria-expanded', 'false');
            }

            item.setAttribute('aria-expanded', 'true');

            // on click set all classes to display none
            const menuChildrenUlTarget = document.querySelector(`.megamenu__menu-children-sec #${this.id}`);

            const newClasses = [
                document.querySelectorAll('.megamenu__menu-children-sec'),
                document.querySelectorAll('.megamenu__menu-children-sec ul'),
                document.querySelectorAll('.megamenu__menu-children-third'),
                document.querySelectorAll('.megamenu__menu-children-third ul'),
                document.querySelectorAll('.megamenu__menu-children-third .btn'),
            ];

            // on click hide all elements
            for (const newClass of newClasses) {
                for (const [, item] of newClass.entries()) {
                    item.style.display = 'none';
                }
            }

            // show or hide children elements
            menuChildrenUlTarget.style.display = menuChildrenUlTarget.style.display === 'block' ? 'none' : 'block';

            const menuChildrenTargetParent = menuChildrenUlTarget.parentNode;
            menuChildrenTargetParent.style.display = 'block';
        });
    }
};

/**
 * Mega menu lvl 3 component.
 * @returns {void}
 */
const megaMenuLvl3 = function() {
    const menuChildrenSec = document.querySelectorAll('.megamenu__menu-children-sec .has-children a');
    if (!menuChildrenSec) {
        return;
    }

    for (const [, item] of menuChildrenSec.entries()) {
        // eslint-disable-next-line max-statements
        item.addEventListener('click', function(event) {
            event.preventDefault();

            // on click set all aria-expanded to false and current item to true
            const expandedItems = document.querySelectorAll('.megamenu__menu-children-sec a[aria-expanded="true"]');

            for (const item of expandedItems) {
                item.setAttribute('aria-expanded', 'false');
            }

            item.setAttribute('aria-expanded', 'true');

            // on click set all classes to display none
            const menuChildrenThirdUl = document.querySelectorAll('.megamenu__menu-children-third ul');
            const menuChildrenThirdButton = document.querySelectorAll('.megamenu__menu-children-third .btn');

            const newClasses = [
                menuChildrenThirdUl,
                menuChildrenThirdButton,
            ];

            // on click hide all elements
            for (const newClass of newClasses) {
                for (const [, item] of newClass.entries()) {
                    item.style.display = 'none';
                }
            }

            // show or hide children elements
            const menuChildrenUl = document.querySelector(`.megamenu__menu-children-third #${this.id}`);
            const menuChildrenButton = document.querySelector(`.megamenu__menu-children-third #${this.id} + .btn`);

            if (menuChildrenUl.style.display === 'block') {
                menuChildrenUl.style.display = 'none';
                menuChildrenButton.style.display = 'none';
            } else {
                menuChildrenUl.style.display = 'block';
                menuChildrenButton.style.display = 'inline-flex';
            }

            const menuChildrenTargetParent = menuChildrenUl.parentNode;
            menuChildrenTargetParent.style.display = 'block';
        });
    }
};

window.addEventListener('DOMContentLoaded', () => {
    megaMenuLvl1();
    megaMenuLvl2();
    megaMenuLvl3();
});
