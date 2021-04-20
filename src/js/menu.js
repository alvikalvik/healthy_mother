export default function runMenu() {
    const nav = document.querySelector('.header__nav');
    const hamburger = document.querySelector('.hamburger');
    const closeBtn = nav.querySelector('.menu__close');

    hamburger.addEventListener('click', (evt) => {
        evt.preventDefault();

        nav.classList.add('header__nav--active');
        hamburger.classList.add('header__nav--hidden');
    });

    closeBtn.addEventListener('click', (evt) => {
        evt.preventDefault();

        nav.classList.remove('header__nav--active');
        hamburger.classList.remove('header__nav--hidden');
    });

    nav.addEventListener('click', (evt) => {
        if (evt.target && evt.target.classList.contains('menu__link')) {
            nav.classList.remove('header__nav--active');
            hamburger.classList.remove('header__nav--hidden');
        }
    });
}

