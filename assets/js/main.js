import Scrollbar from '../../node_modules/smooth-scrollbar/dist/smooth-scrollbar.js';

/* Scrollbar.init(document.querySelector('#main-scrollbar')); */

var sections = ['about', 'experience', 'projects'];
var sectionsDOM = {};

sections.forEach((element) => {
    sectionsDOM[element] = document.getElementById(element);
});

document.body.onscroll = function () {
    var scrollY = window.scrollY;

    /* Disappear About */
    if (scrollY > 150) {
        sectionsDOM['about'].classList.add('unfocused');
    } else {
        document.getElementById('about').classList.remove('unfocused');
    }

    /* Scale About */
    var scaleAmt = 1 / (1 + scrollY / 2500);
    sectionsDOM['about'].setAttribute('style', 'transform : scale(' + scaleAmt + ')');
    console.log(sectionsDOM['projects'].offsetTop);

    /* Experience | Display details */
    sectionsDOM['experience'].querySelector('.btn-more').onclick = function () {
        var details = sectionsDOM['experience'].querySelectorAll('.experience__cards .card .details');
        toggle(details, 'visible');
        var button = sectionsDOM['experience'].querySelectorAll('.btn-more p, .btn-more box-icon');
        toggle(button, 'hidden');
    };

    /* Translate Projects */
    /* if (scrollY > sectionsDOM['projects'].offsetTop - 500) {
        var cards = document.querySelector('#projects .card:first-child');
        var translate = (scrollY - sectionsDOM['projects'].offsetTop + 500) / 5;
        cards.setAttribute('style', 'transform : translateX( ' + translate + 'px )');
    } */
};

/* Helpers */

function toggle(elements, cssClass) {
    elements.forEach((element) => {
        element.classList.toggle(cssClass);
    });
}
