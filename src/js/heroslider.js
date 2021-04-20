import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

export default function runHeroSlider() {
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

    // let heroslider =
    tns({
        container: '.my-slider',
        items: 1,
        slideBy: 'page',
        autoplay: false
    });
}
