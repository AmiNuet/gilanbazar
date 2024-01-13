import Swiper from 'swiper';

import {Autoplay, Grid, Navigation, Pagination, Thumbs} from "swiper/modules";
import SwiperCore from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination, Grid, Thumbs]);

import 'swiper/css';
import 'swiper/css/grid';

const doProductImages = () => {
    const swiperThumbs = new Swiper(".js-product-images-thumbs", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    const swiper2 = new Swiper(".js-product-images", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".productImg__images-nav--next",
            prevEl: ".productImg__images-nav--prev",
        },
        thumbs: {
            swiper: swiperThumbs,
        },
    });
};

doProductImages();

/**
 * Do fullwidth slider
 * @returns {void}
 */
const doFullWidthSlider = () => {
    const fullWidthSliders = document.querySelectorAll('.js-fullwidth-slider');
    for (const slider of fullWidthSliders) {
        new Swiper(slider, {
            spaceBetween: 16,
            slidesPerView: 1,
            autoHeight: true,
            pagination: {
                el: '.fullwidth-slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.fullwidth-slider__nav--next',
                prevEl: '.fullwidth-slider__nav--prev',
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },
                980: {
                    slidesPerView: 1,
                }
            },
        });
    }
};
/**
 * Do related product slider.
 * @returns {void}
 */
const doRelatedProductSliders = () => {
    const productSliders = document.querySelectorAll('.js-related-product-slider');
    for (const slider of productSliders) {
        new Swiper(slider, {
            spaceBetween: 16,
            loop: true,
            slidesPerView: 4,
            autoplay: {
                delay: 5000,
            },
            // grid: {
            //     rows: 2,
            //     fill: 'row',
            // },
            pagination: {
                el: '.related-slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.related-slider__nav--next',
                prevEl: '.related-slider__nav--prev',
            },
        });
    }
};

/**
 * Do related content slider.
 * @returns {void}
 */
const doRelatedContentSliders = () => {
    const contentSliders = document.querySelectorAll('.js-related-content-slider');

    for (let i = 0; i < contentSliders.length; i++) {
        const slider = contentSliders[i];
        const autoplayConfig = (i === 0) ? { delay: 3000 } : false;

        new Swiper(slider, {
            spaceBetween: 16,
            slidesPerView: 1,
            pagination: {
                el: slider.querySelector('.related-content-slider__pagination'),
                clickable: true,
            },
            autoplay: autoplayConfig,
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },
                980: {
                    slidesPerView: (i === 0) ? 5 : 4, // Adjust for the first slider only
                }
            },
        });
    }
};



// Execute when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    doProductImages();
    doRelatedProductSliders();
    doRelatedContentSliders();
    doFullWidthSlider();
});
