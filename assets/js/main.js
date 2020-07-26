var element = document.getElementById('experience');

var section__projects = document.getElementById('projects');
var section__about = document.getElementById('about');

document.body.onscroll = function () {
    var scrollY = window.scrollY;

    /* Disappear About */
    if (scrollY > 150) {
        section__about.classList.add('unfocused');
    } else {
        document.getElementById('about').classList.remove('unfocused');
    }

    /* Scale About */
    var scaleAmt = 1 / (1 + scrollY / 2000);
    section__about.setAttribute('style', 'transform : scale(' + scaleAmt + ')');
    console.log(section__projects.offsetTop);

    /* Translate Projects */
    /* if (scrollY > section__projects.offsetTop - 500) {
        var cards = document.querySelector('#projects .card:first-child');
        var translate = (scrollY - section__projects.offsetTop + 500) / 5;
        cards.setAttribute('style', 'transform : translateX( ' + translate + 'px )');
    } */
};
