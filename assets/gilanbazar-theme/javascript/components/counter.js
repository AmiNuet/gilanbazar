import { CountUp } from 'countup.js';
import enterView from 'enter-view';

const initCountNumberOnScroll = function() {
    const counterOptions = {
        separator: '.',
        decimal: '',
        duration: 4,
        useGrouping: true,
    };

    enterView({
        selector: '.exp-counter__item-number',
        enter(element) {
            // eslint-disable-next-line radix
            const value = Number.parseInt(element.textContent, 0);

            const countUp = new CountUp(
                element,
                value,
                counterOptions,
            );

            countUp.start();
        },
        once: true,
    });
};

const getCounters = document.querySelectorAll('.exp-counter__wrapper');
if (getCounters.length > 0) {
    initCountNumberOnScroll();
}
