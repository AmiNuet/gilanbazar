// eslint-disable-next-line no-undef
const isDesktopLayout = window.innerWidth >= 1070;

const slideInTimeline = entry => {

    const timelineItems = entry.target.querySelectorAll('.process-cards__content');
    for (const [index, entry] of timelineItems.entries()) {
        setTimeout(() => {
            entry.classList.add('process-cards__content--slide-in');
        }, 200 * index);
    }
};

const slideOutTimeline = entry => {

    const timelineItems = entry.target.querySelectorAll('.process-cards__content');
    for (const [index, entry] of timelineItems.entries()) {
        setTimeout(() => {
            entry.classList.remove('process-cards__content--slide-in');
        }, 200 * index);
    }
};

const timelineCallback = function (entries) {
    for (const [, entry] of entries.entries()) {
        if (entry.isIntersecting) {
            slideInTimeline(entry);
        } else {
            slideOutTimeline(entry);
        }

    }
};

const animateTimelineInit = () => {
    for (const element of document.querySelectorAll('.process-cards')) {
        const observer = new IntersectionObserver(timelineCallback, {
            rootMargin: isDesktopLayout ? '0px' : '-100px',
            threshold: isDesktopLayout ? 0.5 : 0.01,
        });

        observer.observe(element);
    }
};

window.addEventListener('DOMContentLoaded', () => {
    animateTimelineInit();
});
