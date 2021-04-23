import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

export default function runRequiredFoodSlider() {
    // const tinySlider =
    const requiredFoodSlider = tns({
        container: '.required-food__slider',
        items: 1,
        slideBy: 1,
        mouseDrag: true,
        autoplay: false,
        controlsText: ['', ''],
        nav: false,
        gutter: 16,
        responsive: {
            992: {
                items: 3,
                slideBy: 1,
                mouseDrag: true,
                autoplay: false,
                controlsText: ['', ''],
                nav: false,
                gutter: 16,
            }
        }
    });

    const customizedFunction = function () {
        const activeSlides = document.querySelectorAll('.required-food__slider .tns-slide-active');

        if (activeSlides.length === 3) {
            const slides = document.querySelectorAll('.required-food__slider .tns-item');
            slides.forEach((item) => {
                item.classList.remove('opacity03');
            });

            activeSlides[0].classList.add('opacity03');
            activeSlides[2].classList.add('opacity03');
        }

    };

    const clearOpacity = function () {
        const slides = document.querySelectorAll('.required-food__slider .tns-item');

        slides.forEach((item) => {
            item.classList.remove('opacity03');
        });
    };

    customizedFunction();

    requiredFoodSlider.events.on('indexChanged', customizedFunction);
    requiredFoodSlider.events.on('newBreakpointStart', clearOpacity);
}
