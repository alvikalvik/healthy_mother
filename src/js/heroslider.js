import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

export default function runHeroSlider() {
    const mediaQuery = window.matchMedia('(max-width: 576px)');
    let isTnsRunned = false;
    let tinySlider;

    function runDesktopSlider() {
        const slider = document.querySelector('.hero__slides');
        const slides = slider.querySelectorAll('.hero__slide');
        const triggers = slider.querySelectorAll('.hero__slide-header');

        triggers.forEach((trigger) => {
            trigger.addEventListener('click', (evt) => {
                evt.preventDefault();

                slides.forEach((slide) => {
                    slide.classList.remove('hero__slide--active');
                });

                trigger.closest('.hero__slide').classList.add('hero__slide--active');
            });
        });
    }

    function runMobileSlider() {
        tinySlider = tns({
            container: '.hero__slides',
            items: 1,
            slideBy: 'page',
            autoplay: false,
            controlsText: ['', ''],
            nav: false
        });
        isTnsRunned = true;
    }

    if (mediaQuery.matches) {
        runMobileSlider();
    } else {
        runDesktopSlider();
    }

    mediaQuery.addEventListener('change', (evt) => {
        if (evt.matches) {
            if (!isTnsRunned) {
                runMobileSlider();
            }
        } else {
            if (isTnsRunned) {
                tinySlider.destroy();
                runDesktopSlider();
            }
        }
    });
}
