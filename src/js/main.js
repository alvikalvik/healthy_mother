// import modules

import runMenu from './menu';
import runHeroSlider from './heroslider';
import runRequiredFoodSlider from './required-food-slider';


// run modules

window.addEventListener('DOMContentLoaded', () => {
    // console.log('DOM fully loaded and parsed');
    runMenu();
    runHeroSlider();
    runRequiredFoodSlider();
});
