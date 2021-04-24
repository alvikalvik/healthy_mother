export default function runUpElement() {
    const upElem = document.createElement('a');

    upElem.setAttribute('href', '#header');
    upElem.classList.add('up-element');
    document.documentElement.append(upElem);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= 600) {
            upElem.classList.add('up-element--visible');
        } else {
            upElem.classList.remove('up-element--visible');
        }
        // document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
    });

}
